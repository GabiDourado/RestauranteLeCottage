import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { Directions } from 'react-native-gesture-handler'

export default function Localizar() {
  return (
    

        <View style={css.Todo}>
            <View style={css.CampPesqui}>
                <Text style={css.TxtPesqui}>Digite seu endereço</Text>
                <Image style={css.lupa} source={{uri:'https://png.pngtree.com/png-clipart/20230401/original/pngtree-magnifying-glass-line-icon-png-image_9015864.png',}}></Image>
            </View>

            <Text>Ou</Text>
            <Text>Utilizar endereço cadastrado</Text>

            <Image  style={css.mapa} source={{uri:'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1',}}></Image>

            <View style={css.parteBaixo}>
                <View style={css.FulaECOM}>
                    <View style={css.Flanoo}>
                        <Image style={css.person} source={{uri: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png',}}></Image>
                        <Text style={css.fulaninho}>Fulaninho</Text>
                    </View>
                    <Text style={css.total}>Total: </Text>
                    <Text style={css.valor}>R$38,00</Text>
                </View>
                <View style={css.DINDIN}> 
                    <Image style={css.lupa} source={{uri:'https://cdn-icons-png.freepik.com/512/10074/10074041.png',}}></Image>
                    <Text style={css.dindin}>Pagar por dinheiro</Text>
                </View>
                <View style={css.PIX}>
                    <Image style={css.lupa} source={{uri:'https://user-images.githubusercontent.com/741969/99538133-492fe280-298b-11eb-81a2-66779343e064.png',}}></Image>
                    <Text style={css.pix}>Pagar via Pix</Text>
                </View>
                <View style={css.CART}>
                    <Image style={css.lupa} source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/debit-credit-card-icon.png',}}></Image>
                    <Text style={css.cartao}>Pagar via cartão</Text>
                </View>
            </View>
            <TouchableOpacity style={css.Botao}>
                <Text style={css.btntexto}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    
    
  )
}

const css = StyleSheet.create({

    Todo: {
        backgroundColor: "rgba(250, 224, 226, 1)",
       width: "100%",
       height: "100%",
       flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },


    Botao: {
    backgroundColor: "rgba(140, 0, 0, 1)",
    height: 35,
    width: 300,
    display:"flex",
    alignItems:"center",
    margin: "3%",
    borderRadius: 10,
},

    btntexto:{
        color: "white",
        fontSize: 20
    },
    valor: {
        color: "rgba(64, 137, 80, 1)",
        fontSize: 18,
        
        

    },

    FulaECOM:{
        display:"flex",
        flexDirection:"row",
    },

    CampPesqui:{
        backgroundColor: "white",
        height:46,
        width:300,
        display:"flex",
        flexDirection:"row",
        
    },
    lupa: {
        height:30,
        width:30,
        marginLeft: 50,
        marginTop: 13,
    },
    
    TxtPesqui:{
        fontSize: 22,
        
        
    },
    
    dindin: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 40,
        width: 240,
        fontSize: 20,
        textAlign:"center"
       
    },
    DINDIN:{
        display:"flex",
        flexDirection:"row",
    
    },
    
    pix: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 40,
        width: 240,
        fontSize: 20,
        textAlign:"center"
        
        
    },
    PIX: {
        display:"flex",
        flexDirection:"row",
    },
    cartao: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 40,
        width: 240,
        fontSize: 20,
        textAlign:"center"
        
    },
    CART:{
        display:"flex",
        flexDirection:"row",
    },
    fulaninho: {
        fontSize: 20,
        
    },
    person:{
        height:30,
        width:30,
        
    },
    Flanoo:{
        display:"flex",
        flexDirection:"row",
       
    },
    total: {
        fontSize: 18,
        marginLeft: 98
    },
    parteBaixo: {
        backgroundColor: "white",
        width: 390
    },
    mapa:{
        width: 330,
        height:260,
       
    },
    

        
});