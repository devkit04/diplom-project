import {View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ImageBackground} from 'react-native';
import { useState, useEffect } from 'react';
import FirebaseService from '../fireBase/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Preloader from './components/Preloader';
import style from './styles/LoginStyle';

export default function Login({navigation}) {

	const [login, setLogin] = useState('Lipton');
	const [password, setPassword] = useState('Tandem2004!');
	const [loading, setLoading] = useState(false);

	async function checkLogin() {
		setLoading(true);
		try {
			// Вызываем метод входа и получаем UID
			const uid = await FirebaseService.userLogin(login, password);
			    
			// Если логин и пароль правильные, выведем UID
			await AsyncStorage.setItem('userUid', uid);
			 
			navigation.navigate('main_layout');

		} catch (error) {
			setLoading(false);
			console.error('Ошибка при входе:', error);
		}
	}

	return (

		<ImageBackground 
			style={style.container}
			source={require('../assets/custom_icon/initial-bg.png')}
		>

			{loading && <Preloader/>}

			<View style={style.brand}>
				<View>
					<Image 
						source={require('../assets/images/vppc_logo.png')}
						style={style.brand.logo}
					/>
				</View>
				<View>
					<Text
						style={style.brand.subTitle}
					>
						Разработано в
					</Text>
					<Text
						style={style.brand.title}
					>
						Отделении прикладной информатики
					</Text>
				</View>
			</View>
			
			<View style={style.form}>

				<Text style={style.title}>Вход</Text>

				<TextInput 
					placeholder='Логин'
					onChangeText={setLogin} 
					style={style.input}
					value={login}
				/>
				
				<TextInput 
					placeholder='Пароль'
					onChangeText={setPassword} 
					style={style.input}
					value={password}
				/>
				
				<TouchableOpacity 
					style={style.button}
					onPress={checkLogin}
				>
					<ImageBackground
						source={require('../assets/custom_icon/button-rev.png')}
						resizeMode='cover'
						style={{flex:1, justifyContent:'center', alignItems:'center'}}
					>
						<Text 
							style={style.button.text}
						>
							Войти
						</Text>
					</ImageBackground>
				</TouchableOpacity>

				<TouchableOpacity 
					style={style.redirect} 
					onPress={() => navigation.navigate('registration')}
				>
					<Text style={style.redirect.text}>У меня нет аккаунта</Text>
				</TouchableOpacity>

			</View>

		</ImageBackground>

	);

}