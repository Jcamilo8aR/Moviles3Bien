import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8fffb',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#b8fffb'
    },
    View:{
      flex:4,
      // borderWidth:2,
      // borderColor:'black',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      marginTop:30
    },
    texts:{
      marginTop:30,
      fontWeight:"bold",
      fontStyle:'italic',
      fontSize:30,
    },
    tInputs:{
      alignItems: 'center',
      fontSize:10,
      fontWeight: 'bold',
      margin:3,
      backgroundColor: '#b8fffb',
      alignItems: 'center',
      textAlign:'center',
      borderRadius:1,
      borderWidth:1,
      borderColor:'black'
    },
    tInputs2:{
      fontSize:10,
      fontWeight: 'bold',
      margin:3,
      width:353,
      backgroundColor: '#b8fffb',
      alignItems: 'center',
      textAlign:'center',
      borderRadius:1,
      borderWidth:1,
      borderColor:'black',
      
    },
    button:{
      marginLeft:10,
      marginRight:10,
      width:40,
      textAlign:"center",
      backgroundColor:'black',
      color:'white',
      flexDirection: 'row',
      marginTop: 20,
      marginBottom:20
    },
    footer:{
      borderStyle: 'solid',
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
      fontStyle:"bold"
  }
  });


  const myimage = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    }
  })


  const color = StyleSheet.create({
    gana:{
        color: 'green'
    },
    pierde:{
      color:'red'
    },
    habilita:{
      color:'orange'
    }
  })
 








  export {estilos, myimage,color}