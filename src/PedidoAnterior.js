import { Text, View, StyleSheet, Image} from "react-native";

export default function PedidoAnterior({foto, nome, preco, data}){
    return(
        <View>
            <Image style={css.teste} source={{uri: foto,}}></Image>
            <Text>{data}</Text>
            <Text>{nome}</Text>
            <Text>{preco}</Text>    
        </View>
    );
}

const css = StyleSheet.create({
    teste: {
        width: 100,
        height: 100
    }
});