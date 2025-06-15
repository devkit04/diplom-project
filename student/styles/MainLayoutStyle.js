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
		padding:10,
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

	active:{
  		backgroundColor:'rgb(245,245,245)',
  		padding:10,
  		borderRadius:15,
	}


});

export default styles;
