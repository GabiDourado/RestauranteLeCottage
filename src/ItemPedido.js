import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ItemPedido({foto, nome, preco}){
    const [ numero, setNumero ] = useState(1);

    function AumentaPedido(){
        setNumero(numero + 1)
    }
    function DimnuiPedido(){
        setNumero(numero - 1)
        if ( numero <= 1 ){
            setNumero(1);
        }
    }
    return(
        <View style={css.caixa}>
            <Image style={css.img} source={{uri: foto,}}></Image>
            <View style={css.info}>
                <Text style={css.titulo}>{nome}</Text>
                <Text style={css.preco}>{preco}</Text>    
                <View style={css.btn} >
                    <Text style={css.textoBtn}>Qntde: {numero} </Text>
                    <View style={css.quant}>
                        <TouchableOpacity style={css.btnQuant} onPress={AumentaPedido}>
                            <Text style={css.btnQuantText}>▲</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.btnQuant} onPress={DimnuiPedido}>
                            <Text  style={css.btnQuantText}>▼</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: '80%',
        backgroundColor: '#fff',
        height: 120,
        marginBottom: 10,
        marginTop:10, 
        borderRadius: 10,
    },
    img: {
        width: '40%',
        height: 100,
        borderRadius: 10
    },
    info:{
        width: '50%',
        marginLeft: 13
    },
    titulo: {
        fontSize: 20
    },
    preco: {
        fontSize: 19,
        color:'green'
    },
    btn:{
        marginBottom: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80%',
        height: 35,
        backgroundColor: '#8C0000'
    },
    textoBtn:{
        color: '#FDFAFA',
        fontSize: 18,
    },
    btnQuantText:{
        color: '#FDFAFA',
        fontSize: 10
    },
    btnQuant:{
        paddingLeft: 15
    }

});