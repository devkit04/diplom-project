import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Функционал студента
import InitialPage  from './InitialPage';
import Login from './student/Login';
import Registration from './student/Registration';
import MainLayout from './student/MainLayout';
//Функционал тренера
import Trainer from './trainer/Trainer';
import TrainerPinCode from './trainer/TrainerPinCode';

const Stack = createStackNavigator();

function App() {

    return (

        <NavigationContainer>
            
            <Stack.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName="initialPage"
            >

                <Stack.Screen 
                    name="initialPage" 
                    component={InitialPage} 
                    options={{ animation: 'fade' }}
                />

                <Stack.Screen 
                    name="main_layout" 
                    component={MainLayout} 
                    options={{ animation: 'fade' }}
                />
                
                <Stack.Screen 
                    name="login" 
                    component={Login} 
                    options={{ animation: 'fade' }}
                />

                <Stack.Screen 
                    name="registration" 
                    component={Registration} 
                    options={{ animation: 'fade' }}
                />

                <Stack.Screen
                    name="trainer_pin_code"
                    component={TrainerPinCode}
                    options={{ animation: 'fade' }}
                />

                <Stack.Screen
                    name="trainer"
                    component={Trainer}
                    options={{ animation: 'fade' }}
                />


            </Stack.Navigator>
        
        </NavigationContainer>

    );

}

export default App;