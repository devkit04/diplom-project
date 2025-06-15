import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Home from './MainLayoutScreens/Home';
import Sports from './MainLayoutScreens/Sports';
import Events from './MainLayoutScreens/Events';
import Profile from './MainLayoutScreens/Profile';
import style from './styles/MainLayoutStyle';

export default function MainLayout() {

    let [currentPage, setCurrentPage] = useState('home');

    const isActive = page => currentPage === page; // Вспомогательная функция для определения активного окна

    return (
        <>
            <StatusBar />
            
            {/* КОНТЕЙНЕР */ }
            <View style={style.container}>
                
                {/* OUTLET ДЛЯ ОТОБРАЖЕНИЯ ДОЧЕРНИХ ОКОН */ }
                <View style={style.outlet}>
                    {currentPage === 'home' && <Home />}
                    {currentPage === 'sports' && <Sports />}
                    {currentPage === 'events' && <Events />}
                    {currentPage === 'profile' && <Profile />}
                </View>

                {/* ПАНЕЛЬ НАВИГАЦИИ */ }
                <View style={style.navbar}>
                    
                    <TouchableOpacity 
                        style={[style.navbar.button, isActive('home') && style.active]} 
                        onPress={() => setCurrentPage('home')} 
                    >
                        <Image 
                            source={require('../assets/custom_icon/home.png')} 
                            style={style.navbar.button.icon}
                        />
                        <Text style={style.navbar.button.text}>
                            Главная
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[style.navbar.button, isActive('sports') && style.active]}
                        onPress={() => setCurrentPage('sports')} 
                    >
                        <Image 
                            source={require('../assets/custom_icon/sport.png')} 
                            style={style.navbar.button.icon}
                        />
                        <Text style={style.navbar.button.text}>
                            Секции
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[style.navbar.button, isActive('events') && style.active]}
                        onPress={() => setCurrentPage('events')} 
                    >
                        <Image 
                            source={require('../assets/custom_icon/event.png')} 
                            style={style.navbar.button.icon}
                        />
                        <Text style={style.navbar.button.text}>
                            События
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[style.navbar.button, isActive('profile') && style.active]}
                        onPress={() => setCurrentPage('profile')} 
                    >
                        <Image 
                            source={require('../assets/custom_icon/profile.png')} 
                            style={style.navbar.button.icon}
                        />
                        <Text style={style.navbar.button.text}>
                            Профиль
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </>
    );
}