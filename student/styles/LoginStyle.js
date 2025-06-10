import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor:'#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form:{
        gap:15,
    },

    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'400'
    },

    input:{
        backgroundColor:'#fff',
        width:280,
        height:50,
        paddingLeft:15,
        fontSize:15,
        borderRadius:10,
        borderWidth:0
    },

    button:{
        backgroundColor:'rgba(255,255,255,0.15)',
        filter:'blur(10)',
        width:280,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        text:{
            color:'#fff',
            fontSize:15
        }
    },

    redirect:{
        alignItems:'center',
        text:{
            color:'#fff',
            fontSize:15
        }
    },

    brand:{
        width:300,
        justifyContent:'center',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        position:'relative',
        bottom:80,
        logo:{
            width:40,
            height:40
        },
        subTitle:{
            color:'#fff',
            fontSize:8,
        },
        title:{
            color:'#fff',
            fontSize:10, 
            fontWeight:'bold'
        }
    },

  
});

export default styles;
