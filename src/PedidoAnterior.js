import { Text, View, StyleSheet, Image} from "react-native";

export default function PedidoAnterior({foto, nome, preco, data}){
    return(
        <View style={css.tudo}>
            <Image style={css.img} source={{uri: foto,}}></Image>
            <View style={css.textos}>
                <Text style={css.data}>{data}</Text>
                <Text style={css.nome}>{nome}</Text>
                <Text style={css.preco}>{preco}</Text>    
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    tudo: {
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
    data: {
        fontSize: 20
    },
    nome: {
        fontSize: 19
    },
    preco: {
        fontSize: 18,
        color:'green'
    },
    textos: {
        width: '50%',
        marginLeft: 13
    }
});