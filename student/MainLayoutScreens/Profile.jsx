import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import FirebaseService from '../../fireBase/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../styles/ProfileStyle';
import Preloader from '../components/Preloader';

export default function Profile() {
    const [profileInfo, setProfileInfo] = useState(null); // Данные профиля
    const [trainingHistory, setTrainingHistory] = useState([]); // История тренировок
    const [loading, setLoading] = useState(true); // Состояние загрузки

    useEffect(() => {
        async function fetchData() {
            try {
                // Получение UID пользователя из AsyncStorage
                let uid = await AsyncStorage.getItem('userUid');
                if (uid) {
                    // Получение данных профиля
                    let profileData = await FirebaseService.getUserProfile(uid);
                    setProfileInfo(profileData);

                    // Получение истории тренировок
                    let trainingData = await FirebaseService.getTrainingByUser(uid);
                    trainingData.reverse();
                    setTrainingHistory(trainingData);
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            } finally {
                setLoading(false); // Завершение загрузки
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <View style={style.container}>
            {profileInfo ? (
                <>
                    {/* Данные профиля */}
                    <View style={style.profileHeader}>
                        <Text style={style.userName}>
                            Пользователь: {profileInfo.login}
                        </Text>
                        <View style={style.profileInfoField}>
                            <Text>Фамилия: {profileInfo.name}</Text>
                        </View>
                        <View style={style.profileInfoField}>
                            <Text>Имя: {profileInfo.surname}</Text>
                        </View>
                        <View style={style.profileInfoField}>
                            <Text>Группа: {profileInfo.group_number}</Text>
                        </View>
                    </View>

                    {/* История тренировок */}
                    <View style={style.trainingHistory}>
                        
                        <View style={style.row}>
                            
                            <Text style={style.trainingHistoryTitle}>
                                История тренировок
                            </Text>

                            <Text style={style.allHrs}>Всего часов {trainingHistory.length * 2} из 32</Text>

                        </View>

                        {trainingHistory.length > 0 ? (

                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={style.trainingListContainer}
                            >
                                {trainingHistory.map((item) => (

                                    <View key={item.id} style={style.trainingItem}>
                                        <Text style={style.trainingText}>
                                            Часы: {item.hrs_count}
                                        </Text>
                                        <Text style={style.trainingText}>
                                            Дата: {item.date || 'Не указана'}
                                        </Text>
                                    </View>

                                ))}
                            </ScrollView>
                            
                        ) : (
                            <Text style={style.noTrainingText}>
                                История тренировок отсутствует.
                            </Text>
                        )}
                    </View>
                </>
            ) : (
                <Preloader />
            )}
        </View>
    );
}
