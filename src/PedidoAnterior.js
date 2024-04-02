import { Text, View, StyleSheet, Image} from "react-native";

export default function PedidoAnterior({foto, nome, preco, data}){
    return(
        <View tyle={css.tudo}>
            <Image style={css.img} source={{uri: foto,}}></Image>
            <Text style={css.data}>{data}</Text>
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>    
        </View>
    );
}

const css = StyleSheet.create({
    tudo: {
        display: 'flex'
    },
    img: {
        width: 100,
        height: 100
    },
    data: {
        fontSize: 20
    },
    nome: {

    },
    preco: {

    }
});