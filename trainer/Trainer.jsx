import {SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import Main from './outlet/Main';
import Events from './outlet/Events';

export default function Trainer({ navigation }) {

    const navItems = [
        
        { 
            label: 'Сканер', 
            icon: require('../assets/custom_icon/qrcode.png'),
            behavior:()=>{setGetPage('main')}, 
        },
        { 
            label: 'События', 
            icon: require('../assets/custom_icon/event.png'),
            behavior:()=>{setGetPage('events')}, 
        },

    ];

    const [getPage, setGetPage] = useState('main');

    return (

        <View style={styles.container}>

            {getPage === 'main' && <Main/>}

            {getPage === 'events' && <Events/>}

            {/* NAVBAR */}
            <View style={styles.navbar}>
                {navItems.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.navbarButton}
                        onPress={item.behavior}
                    >
                        <Image source={item.icon} style={styles.navbarIcon} />
                        <Text style={styles.navbarText}>{item.label}</Text>
                   </TouchableOpacity>
                ))}
            </View>

        </View>

  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgb(230, 230, 230)',
        flex: 1,
        position: 'relative',
    },
    navbar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navbarButton: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbarIcon: {
        width: 25,
        height: 25,
        marginBottom: 5,
    },
    navbarText: {
        fontSize: 9,
        },
});
