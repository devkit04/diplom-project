import {View, Text, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';

export default function InitialPage({navigation}) {

	return (

		<>

			<StatusBar/>

			<View style={{flex:1}}>
				
				<View style={{
					flex:1, 
					justifyContent:'center', 
					padding:40, 
					gap:20
				}}>
					
					<Text style={{
						fontSize:32, 
						fontWeight:'500'}
					}>
						{'Добро \nпожаловать!'}
					</Text>

					<Text style={{fontSize:15, textAlign:'justify', lineHeight:25}}>
						Отмечайте свои часы, проведенные на занятиях спортом, и отслеживайте прогресс физической активности. 
						Это простое и удобное решение помогает студентам фиксировать свое участие в спортивных секциях, 
						а тренерам — контролировать общую активность и успехи студентов. Всё, что нужно для учета занятий, 
						в одном приложении.
					</Text>

					<TouchableOpacity
						style={{
							width:300,
							height:50,
						}}
						onPress={ () => navigation.navigate('login') }
					>
						<ImageBackground
							source={require('./assets/custom_icon/button.png')}
							resizeMode="cover"
							style={{
								flex:1,
								justifyContent:'center',
								alignItems:'center'
							}}
						>
							<Text style={{color:'#000', fontSize:15}}>Я студент</Text>
						</ImageBackground>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width:300,
							height:50,
						}}
						onPress={ () => navigation.navigate('trainer_pin_code') }
					>
						<ImageBackground
							source={require('./assets/custom_icon/button-rev.png')}
							resizeMode="cover"
							style={{
								flex:1,
								justifyContent:'center',
								alignItems:'center'
							}}
						>
							<Text style={{color:'#000', fontSize:15}}>Я тренер</Text>
						</ImageBackground>
					</TouchableOpacity>

				</View>

			</View>

		</>

	);

}