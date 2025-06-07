import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
 
const Events = () => {

	return (

		<View style={style.container}>

			<View style={style.eventAddBlock}>

				<Text style={style.pageTitle}>Создания события</Text>

				<TextInput placeholder="Название события" style={style.eventTitle}/>

				<TextInput 
					placeholder="Описание события" 
					style={style.eventDescription}
					multiline // Разрешает ввод текста на нескольких строках
      				numberOfLines={4} // Устанавливает количество видимых строк (необязательно)
				/>

				<TouchableOpacity style={style.eventAddBtn}>
					<Text style={style.eventAddBtn.text}>Опубликовать</Text>
				</TouchableOpacity>

			</View>

		</View>

	)

}

let style = StyleSheet.create({
	
	container:{
		flex:1,
		padding:20,
	},

	eventAddBlock:{
		gap:20,
	},

	pageTitle:{
		fontSize:20,
		fontWeight:'bold',
	},

	eventTitle:{
		backgroundColor:'#fff',
		padding:15,
		height:50,
		borderRadius:10,
	},

	eventDescription:{
		backgroundColor:'#fff',
		padding:15,
		height:150,
		borderRadius:10,
	},

	eventAddBtn:{
		backgroundColor:'#ff6704',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		height:50,
		text:{
			color:'#fff',
			fontSize:14,
		}
	}

})

export default Events;