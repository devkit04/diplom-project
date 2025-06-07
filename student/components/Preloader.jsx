import {View, Image} from 'react-native';

export default function Preloader() {

	return (
		<View style={style.container}>
			<Image style={style.container.icon} source={require('../../assets/custom_icon/loading.gif')}/>
		</View>

	);

}


let style = {
	container:{
	    width:'100%',
	    height:'100%',
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Полупрозрачный фон
	    filter:'blur(10)',
	    zIndex: 1000, // Обеспечивает, что индикатор отображается поверх других элементов
	    icon:{
	        width:35,
	        height:35
	    }
	}
}