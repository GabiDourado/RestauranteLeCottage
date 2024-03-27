import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ItemPedido({foto, nome, preco}){
    return(
        <View>
            <Image style={css.teste} source={{uri: foto,}}></Image>
            <Text>{nome}</Text>
            <Text>{preco}</Text>    
            <TouchableOpacity>
                <Text>Qntde: </Text>
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    teste: {
        width: 100,
        height: 100
    }
});