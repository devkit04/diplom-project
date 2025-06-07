import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({

	container:{
		backgroundColor:'rgb(230,230,230)',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'column'
	},

	qrTitle:{
		fontSize:16,
		marginBottom:10,
	},

	qrWrapper:{
		backgroundColor:'#fff',
		width:180,
		height:180,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
	},

});

export default styles;