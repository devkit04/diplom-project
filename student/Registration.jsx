import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useState, useEffect } from 'react';
import FirebaseService from '../fireBase/firebaseConfig';
import style from './styles/RegistrationStyle';
import Preloader from './components/Preloader.jsx';

export default function Registration({navigation}) {

	//Шаг формы
	const [step, setStep] = useState(1);

	//Данные формы
	const [formData, setFormData] = useState({
		login:'',
		password:'',
		password_repeat:'',
		name:'',
		surname:'',
		group_number:''
	});

	//Отображение загрузки
	const [loading, setLoading] = useState(false);

	//Обработка ввода
	function handleInputChange(key, value) {
		setFormData({
			...formData,
			[key]:value,
		})
	}

	//Отправка формы
	async function sendForm(){
		setLoading(true)
		try {
			// Используем унифицированный метод регистрации из FirebaseService
			await FirebaseService.registerUser(formData);
			navigation.navigate('login'); // Переход на страницу логина после регистрации
		} catch (error) {
			console.error('Ошибка при создании пользователя:', error);
			Alert.alert('Ошибка', error.message);
		}
	}

	return (

		<ImageBackground 
			style={style.container}
			source={require('../assets/custom_icon/initial-bg.png')}
		>

			{loading &&	<Preloader/>}

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

				<View style={style.formStepRow}>
					<Text style={style.title}>Регистрация</Text>
					<Text style={style.formStep}>Шаг {step} из 2</Text>
				</View>


				{step == 1 &&

					<>
						
						<TextInput placeholder='Логин' 
							onChangeText={(value) => handleInputChange('login', value)} 
							style={style.input}
						/>

						<TextInput 
							placeholder='Пароль'
							onChangeText={(value) => handleInputChange('password', value)}  
							style={style.input}
						/>

						<TextInput 
							placeholder='Повторите пароль'
							onChangeText={(value) => handleInputChange('password_repeat', value)}  
							style={style.input}
						/>

						<TouchableOpacity style={style.button} onPress={()=>setStep(step+1)}>
							<Text style={style.button.text}>Вперед</Text>
						</TouchableOpacity>
					
					</>

				}

				{step == 2 &&

					<>

						<TextInput 
							placeholder='Имя'
							onChangeText={(value) => handleInputChange('name', value)}  
							style={style.input}
						/>

						<TextInput 
							placeholder='Фамилия'
							onChangeText={(value) => handleInputChange('surname', value)}  
							style={style.input}
						/>

						<TextInput 
							placeholder='Номер группы'
							onChangeText={(value) => handleInputChange('group_number', value)}  
							style={style.input}
						/>

						<TouchableOpacity style={style.button} onPress={sendForm}>
							<Text style={style.button.text}>Создать профиль</Text>
						</TouchableOpacity>

						<TouchableOpacity style={style.stepBack} onPress={()=>setStep(step-1)}>
							<Text style={style.stepBack.text}>Назад</Text>
						</TouchableOpacity>

					</>

				}

				<TouchableOpacity style={style.redirect} onPress={() => navigation.navigate('login')}>
					<Text style={style.redirect.text}>У меня есть аккаунт</Text>
				</TouchableOpacity>

			</View>

		</ImageBackground>

	);

}