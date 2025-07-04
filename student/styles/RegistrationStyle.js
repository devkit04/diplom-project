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

    formStepRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    formStep:{
        color:'#fff',
        fontSize:12
    },

    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'400'
    },

    input:{
        backgroundColor:'rgb(240, 240, 240)',
        width:280,
        height:50,
        paddingLeft:15,
        fontSize:15,
        borderRadius:10,
        borderWidth:0
    },

    button:{
        backgroundColor:'rgba(255,255,255,0.15)',
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

    stepBack:{
        backgroundColor:'rgba(255,255,255, 0.15)',
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
            fontSize:12
        }
    },

    loadingContainer: {
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
