import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../styles/HomeStyle';


export default function Home() {

	const [qrLoading, setQrLoading] = useState(true);

	const [qrValue, setQrValue] = useState('');

	//Загрузка QR кода
	useEffect(() => {

		(async function(){
			
			let data = await AsyncStorage.getItem('userUid');

			if(data) {

				setQrValue(data);

				setQrLoading(false);
				
			}

		}());

	}, []);


	return (

		<View style={style.container}>

			<Text style={style.qrTitle}>Покажи QR тренеру</Text>

			<View style={style.qrWrapper}>

				{qrLoading && 
					<Text>Загрузка QR ...</Text>
				}

				{!qrLoading && 
					<QRCode size={150} value={qrValue}/>
				}

			</View> 
		
		</View>

	);

} 