 import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	container:{
		flex:1,
	},

	outlet:{
		flex:0.9,
	},

	navbar:{
		backgroundColor:'#fff',
		flex:0.1,
		alignItems:'center',
		flexDirection:'row',
		button:{
			flex:1,
			justifyContent:'center',
			alignItems:'center',
			text:{
				fontSize:12
			},
			icon:{
				width:25,
				height:25,
				marginBottom:5
			},
			text:{
				fontSize:9,
			}
		},
	},


});

export default styles;
