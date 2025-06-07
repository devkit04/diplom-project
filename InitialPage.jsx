import {View, Text, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';

export default function InitialPage({navigation}) {

	return (

		<ImageBackground style={{
				flex:1,
				justifyContent:'center',
				alignItems:'center',
			}}
			source={require('./assets/custom_icon/initial-bg.png')}
			resizeMode='cover'
		>

			<ImageBackground style={{
					width:300,
					height:350,
					padding:25,
					justifyContent:'center',
					gap:20,
					borderRadius:20,
					overflow:'hidden',
				}}
				source={require('./assets/custom_icon/glass.png')}
				resizeMode='cover'
			>

				<Text style={{
					color:'#fff',
					width:'100%',
					fontSize:24,
					fontWeight:'bold',
					marginBottom:10,
					textAlign:'center',
				}}>
					Добро пожаловать, Начнём работу!
				</Text>

				<Text style={{
					width:'100%',
					color:'#fff',
					fontSize:15,
					textAlign:'center',
				}}>
					Выберите свои роль
				</Text>

				{/*КНОПКА СТУДЕНТА*/}
				<TouchableOpacity 
					style={{
						backgroundColor:'#fff',
						padding:10,
						justifyContent:'center',
						alignItems:'center',
						borderRadius:10,
					}}
					onPress={() => navigation.navigate('login')}
				>

					<Text style={{
						color:'#25035A',
						fontSize:15,
						fontWeight:'bold',
					}}>
						Я студент
					</Text>

				</TouchableOpacity>

				{/*КНОПКА ТРЕНЕРА*/}
				<TouchableOpacity 
					style={{
						backgroundColor:'#fff',
						padding:10,
						justifyContent:'center',
						alignItems:'center',
						borderRadius:10,
					}}
					onPress={() => navigation.navigate('trainer_pin_code')}
				>

					<Text style={{
						color:'#25035A',
						fontSize:15,
						fontWeight:'bold',
					}}>
						Я тренер
					</Text>

				</TouchableOpacity>

			</ImageBackground>

		</ImageBackground>

	);

}