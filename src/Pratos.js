import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Pratos({foto, nome, preco}){
    return(
        <View style={css.tudo}>
            <View style={css.caixa}>
                <Image style={css.img} source={{uri: foto,}}></Image>
            </View>
            <View style={css.info}>
                <Text style={css.nome}>{nome}</Text>
                <Text style={css.preco}>{preco}</Text>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.btnTexto}>Pedir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const css = StyleSheet.create({
    tudo: {
        width:'100',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 13,
        marginBottom: 15,
        
    },
    img: {
        width: 130,
        height: 95,
        
    },
    caixa: {
        backgroundColor: '#fff',
        width: '37%',
        height: 145,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    nome: {
        fontSize: 22
    },
    preco:{
        color: '#408950',
        fontSize: 20
    },
    btn:{
        width: '70%',
        backgroundColor: '#8C0000', 
        borderRadius: 10,
        padding: 10,
        
    },
    btnTexto:{
        color: '#fff',
        fontSize: 20,
        textAlign:'center'
    },
    info:{
        width:'65%',
        paddingLeft: '8%'
    }
});
