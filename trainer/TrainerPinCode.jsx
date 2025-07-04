import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function TrainerPinCode({navigation}) {

    const [pinCodeNums, setPinCodeNums] = useState([]);
    const [pinCodeError, setPinCodeError ] = useState(false);
    const [lockDurationSec, setLockDurationSec] = useState(5)


    const pinButtons = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        'clear_all', '0', 'clear_one'
    ];

    const iconMap = {
        clear_all: require('../assets/custom_icon/clear_all.png'),
        clear_one: require('../assets/custom_icon/clear_one.png'),
    };

    const handleButtonPress = (item) => {
        if (item === 'clear_all') {
            setPinCodeNums([]);
        } else if (item === 'clear_one') {
            setPinCodeNums((prev) => prev.slice(0, -1));
        } else {
            setPinCodeNums((prev) => (prev.length < 4 ? [...prev, item] : prev));
        }
    };

    const renderPinButton = (item) => {
        const icon = iconMap[item];
        return (
            <TouchableOpacity 
                key={item}
                style={style.pinButton} 
                onPress={() => handleButtonPress(item)}
            >
                {icon ? (
                    <Image source={icon} style={style.pinButton.icon} />
                ) : (
                    <Text style={style.pinButton.text}>{item}</Text>
                )}

            </TouchableOpacity>

        );

    };


    function ScreenLocker({ lockDurationSec }) {
        const [remainingTime, setRemainingTime] = useState(lockDurationSec); // Используем state для хранения оставшихся секунд

        useEffect(() => {
            if (remainingTime > 0) {
                const intervalId = setInterval(() => {
                    setRemainingTime(prevTime => prevTime - 1); // Уменьшаем оставшиеся секунды
                }, 1000);

                return () => clearInterval(intervalId); // Очищаем интервал при выходе из компонента
            }
            else{
                setPinCodeError(false);
            }
        }, [remainingTime]);

        return (
            <View style={style.screenLocker}>
                <Text style={style.screenLockerAlert}>Введён неправильный PIN-код</Text>
                <Text style={style.screenLockerTimer}>{remainingTime === 0 ? '' : `блокировка ввода на ${remainingTime} секунд.`}</Text>
            </View>
        );
    }

    useEffect(() => {
        if(pinCodeNums.length == 4) {
            if(pinCodeNums.join('') == '1234'){
                navigation.navigate('trainer');
            }
            else{
                setPinCodeError(true);
                setPinCodeNums([]);
                setLockDurationSec(lockDurationSec * 2);
            }
        }
    }, [pinCodeNums])


    return (

        <View style={style.container}>

            {pinCodeError ? <ScreenLocker lockDurationSec={lockDurationSec}/> : null}

            <View style={style.pinCodeField}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            style.pinCodeDot,
                            { backgroundColor: pinCodeNums[index] ? '#000' : '#ccc' },
                        ]}
                    ></View>
                ))}
            </View>

            <View style={style.pinCode}>
                {pinButtons.map((item) => renderPinButton(item))}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
    },

    pinCodeField: {
        marginBottom: 40,
        flexDirection: 'row',
        gap: 35,
    },

    pinCode: {
        width: 250,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },

    pinCodeDot: {
        backgroundColor: '#ccc',
        width: 10,
        height: 10,
        borderRadius: 90,
    },

    pinButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        icon: {
            width: 25,
            height: 25,
        },
        text: {
            fontSize: 24,
            fontWeight: '300',
        },
    },

    screenLocker:{
        backgroundColor:'rgba(0,0,0,0.8)',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        zIndex:100,
    },

    screenLockerAlert:{
        color:'#fff'
    },

    screenLockerTimer:{
        color:'#fff',
    }

});
