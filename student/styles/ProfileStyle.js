import { StyleSheet } from 'react-native';

let styles = {

	container:{
		backgroundColor:'rgb(230,230,230)',
		flex:1,
		gap:10,
	},

	profileHeader:{
		backgroundColor:'#fff',
		padding:20,
		gap:20,
	},

	userName:{
		fontSize:18,
		fontWeight:'bold'
	},

	profileInfoField:{
		backgroundColor:'rgb(245,245,245)',
		width:'100%',
		height:50,
		paddingLeft:15,
		justifyContent:'center',
		borderRadius:10
	},

	trainingHistory:{
		backgroundColor:'#fff',
		padding:20,
		gap:20,
	},

	trainingHistoryTitle:{
		fontSize:18
	},

	trainingItem:{
		backgroundColor:'#f0f0f0',
		width:320,
		padding:20,
		justifyContent:'space-between',
		flexDirection:'row',
		borderRadius:10,
	},

	trainingListContainer:{
		gap:20,
	}

}
export default styles;

