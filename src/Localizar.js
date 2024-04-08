import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React, { useContext, useState } from 'react'
import { Directions } from 'react-native-gesture-handler'
import { UserContext } from './Context/UserContext';
import Agradecimento from './Agradecimento';

export default function Localizar() {
    const [ cor, setCor ] = useState('#fff');

    function MudaCor(){
        if(cor == '#fff'){
            setCor('rgba(64, 137, 80, 1)')
        }
        if(cor == 'rgba(64, 137, 80, 1)'){
            setCor('#fff')
        }
    }

    const{ setLocaliza, agradece, setAgradece } = useContext ( UserContext );
    if(agradece){
        return(<Agradecimento/>)
    }
  return (
    

        <View style={css.Todo}>
            <TouchableOpacity style={css.volta}  onPress={() => setLocaliza(false)}>
                <Text style={css.voltaTxt}>❮</Text>
            </TouchableOpacity>
            <View style={css.CampPesqui}>
                <Text style={css.TxtPesqui}>Digite seu endereço</Text>
                <Image style={css.lupa} source={{uri:'https://png.pngtree.com/png-clipart/20230401/original/pngtree-magnifying-glass-line-icon-png-image_9015864.png',}}></Image>
            </View>

            <Text style={css.texto}>Ou</Text>
            <View style={css.marcacao}>
                <TouchableOpacity onPress={MudaCor} style={{backgroundColor: cor,
                display:'flex',
                alignItems:'center',
                width: 20,
                height:20, }}><Text style={css.marcadotxt}>✔</Text></TouchableOpacity>
                <Text style={css.texto2}>Utilizar endereço cadastrado</Text>
            </View>
            <Image  style={css.mapa} source={{uri:'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1220&h=674&crop=1',}}></Image>

            <View style={css.parteBaixo}>
                <View style={css.FulaECOM}>
                    <View style={css.Flanoo}>
                        <View style={css.circuloimg}>
                            <Image style={css.person} source={{uri: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png',}}></Image>
                        </View>
                        <Text style={css.fulaninho}>Fulaninho</Text>
                    </View>
                    <Text style={css.total}>Total: </Text>
                    <Text style={css.valor}>R$38,00</Text>
                </View>
                <View style={css.DINDIN}> 
                    <Image style={css.icon} source={{uri:'https://cdn-icons-png.freepik.com/512/10074/10074041.png',}}></Image>
                    <Text style={css.dindin}>Pagar por dinheiro</Text>
                </View>
                <View style={css.PIX}>
                    <Image style={css.icon} source={{uri:'https://user-images.githubusercontent.com/741969/99538133-492fe280-298b-11eb-81a2-66779343e064.png',}}></Image>
                    <Text style={css.pix}>Pagar via Pix</Text>
                </View>
                <View style={css.CART}>
                    <Image style={css.icon} source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/debit-credit-card-icon.png',}}></Image>
                    <Text style={css.cartao}>Pagar via cartão</Text>
                </View>
            </View>
            <TouchableOpacity style={css.Botao} onPress={() => setAgradece(true)}>
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
        justifyContent:'center',
        marginTop: 15,
        borderRadius: 10,
    },
    btntexto:{
        color: "white",
        fontSize: 18
    },
    valor: {
        color: "rgba(64, 137, 80, 1)",
        fontSize: 18,
    },
    FulaECOM:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingTop: 10,
        paddingBottom:10
    },
    CampPesqui:{
        backgroundColor: "white",
        height:46,
        width:300,
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    lupa: {
        height:35,
        width:35,
    },
    icon:{
        height:35,
        width:35,
    },
    TxtPesqui:{
        fontSize: 22,
        width:'85%'
    },
    dindin: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 35,
        width: '75%',
        fontSize: 18,
        textAlign:'center',
        textAlignVertical: 'center'
    },
    DINDIN:{
        display:"flex",
        flexDirection:"row",  
        justifyContent:'center',
        alignItems:'center'
    },
    pix: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 35,
        width: '75%',
        fontSize: 18,
        textAlign:"center",
        textAlignVertical: 'center'
    },
    PIX: {
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    cartao: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        margin: 10,
        height: 35,
        width: '75%',
        fontSize: 18,
        textAlign:"center",
        textAlignVertical: 'center'
        
    },
    CART:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
    },
    fulaninho: {
        fontSize: 20,
    },
    person:{
        height:30,
        width:30,
        padding:15
    },
    Flanoo:{
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        width: '60%',
    },
    total: {
        fontSize: 18,
    },
    parteBaixo: {
        backgroundColor: "white",
        width: '100%'
    },
    mapa:{
        width: '100%',
        height:'40%',
        marginBottom: 15,
    
       
    },
    volta:{
        position:'absolute',
        zIndex: 99,
        top: 16,
        left: 17,
        
    },
    voltaTxt: {
        fontSize: 23,
    },
    tamanhoimg:{
        width: '30%'
    },
    circuloimg:{
        width:'18%',
        height:45,
        backgroundColor:'#D9D9D9',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50, 
        marginRight: 7
    },
    texto:{
        fontSize: 20,
        marginTop: 10
    },
    texto2:{
        fontSize: 20,
        marginLeft: 10
    },
    marcacao:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
        marginBottom: 10
    },
    marcadotxt:{
        color:"#fff",
        fontSize: 12
    }

        
});