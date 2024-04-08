import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export default function Perfil() {
  return (
    <View style={css.Todo}>
      <Image style={css.conta} source={{uri: "https://cdn-icons-png.flaticon.com/512/3736/3736502.png",}}/>
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
conta: {
  width: '50%',
  height: 200,
},
})