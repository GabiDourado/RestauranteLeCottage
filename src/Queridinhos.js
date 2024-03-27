import { Image, StyleSheet, Text, View } from "react-native";

export default function Queridinhos({foto, nome, preco}){
    return(
        <View style={css.caixa}>
            <Image style={css.img} source={{uri: foto,}}></Image>
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>           
        </View>
    );
}

const css = StyleSheet.create({
    img: {
        width: 130,
        height: 110,
        borderRadius: 10,
        
    },
    caixa: {
        backgroundColor: '#fff',
        width: '43%',
        margin: 13,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        padding: 10
    },
    nome: {
        fontSize: 20,
    },
    preco: {
        color: '#408950',
        fontSize: 20,
    }
});