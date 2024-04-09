import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'
import TelaCamera from './Camera';

export default function Perfil() {
  const { camera, setCamera, fotoSalva} = useContext(UserContext);
  if(camera){
    return(<TelaCamera/>)
  }
  return (
    <View style={css.Todo}>
      <TouchableOpacity style={css.conta1} onPress={() => setCamera(true)}> 
        {fotoSalva?
          <Image style={css.fotoPerfil} source={fotoSalva}/>
        :
        <Image style={css.conta} source={{uri: "https://cdn-icons-png.flaticon.com/512/3736/3736502.png",}}/>}
        </TouchableOpacity>
      <View style={css.Dados} >
        <Text style={css.Dadostxt}>Nome: Fulaninho</Text>
        <Text style={css.Dadostxt}>Cidade: Pindamonhangaba</Text>
        <Text style={css.Dadostxt}>CEP: 17280000</Text>
        <Text style={css.Dadostxt}>Total de pedidos: 150</Text>
        <Text style={css.Dadostxt}>Prato mais pedido: Parmegiana</Text>
      </View >
      <TouchableOpacity style={css.Botao}>
            <Text style={css.btntexto}>Mudar de conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={css.Botao}>
            <Text style={css.btntexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const css = StyleSheet.create({
  Todo: {
      backgroundColor: "rgba(250, 224, 226, 1)",
      width: "100%",
      height: "100%",
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
},
Dados:{
  backgroundColor:"white",
  height:350,
  width:'80%',
  borderRadius: 10,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  
},
Dadostxt:{
  marginTop:18,
  marginBottom:18,
  fontSize: 17
},
Botao:{
  backgroundColor: "rgba(140, 0, 0, 1)",
  height: 50,
  width: 300,
  display:"flex",
  alignItems:"center",
  justifyContent: 'center',
  margin: "3%",
  borderRadius: 10,
},
btntexto:{
  color: "white",
  fontSize: 20
},
conta1: {
  width: '100%',
  height: 200,
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
},
conta: {
  width: '50%',
  height: 200,
  borderRadius:100
},

fotoPerfil: {
  width: '40%',
  height: 170,
  borderRadius:100
}
})