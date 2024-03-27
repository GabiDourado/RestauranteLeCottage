import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ItemPedido({foto, nome, preco}){
    const [ numero, setNumero ] = useState(0);

    function AumentaPedido(){
        setNumero(numero + 1)
    }
    function DimnuiPedido(){
        setNumero(numero - 1)
    }
    return(
        <View style={css.caixa}>
            <Image style={css.img} source={{uri: foto,}}></Image>
            <Text style={css.titulo}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>    
            <TouchableOpacity style={css.btn} onPress={AumentaPedido}>
                <Text style={css.textoBtn}>Qntde: {numero} </Text>
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    img: {
        width: 100,
        height: 100
    },
});