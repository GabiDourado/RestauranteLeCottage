import { Button, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";
import Pedido from "./Pedido";


export default function Agradecimento({navigation})
{   
    const{ pedido, setPedido, setLocaliza, localiza, setAgradece } = useContext ( UserContext );

    if (pedido){
        setAgradece(false);
        return(<Pedido/>)
    }
    return(
        <View style={css.Todo}>
            <TouchableOpacity style={css.volta}>
                <Text style={css.voltaTxt}>❮</Text>
            </TouchableOpacity>
            <View style={css.titulo}></View>
            <View style={css.linha}>

            <View style={css.icons}>
                <Image style={css.conta} source={{uri: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",}}/>
                <Image style={css.conta} source={{uri: "https://cdn-icons-png.flaticon.com/512/9561/9561688.png",}}/>
            </View>
                    <Text style={css.tituloPT}>Pedido Finalizado com sucesso!</Text>
                </View>
            <Text style={css.AgradecimentoFR}>Commande terminée avec succès</Text>
            
            
            <TouchableOpacity style={css.BotaoVoltar} onPress={() => setPedido(true)}>
                <Text style={css.btntexto}>Voltar para pagina inicial</Text>
            </TouchableOpacity>
            
        </View>

    );
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

    AgradecimentoPB: {
        fontSize: 20,
        margin: "1%"
        
    },
    AgradecimentoFR: {

        
    },

    BotaoVoltar: {
        backgroundColor: "rgba(140, 0, 0, 1)",
        height: 50,
        width: 300,
        display:"flex",
        alignItems:"center",
        margin: "3%",
        borderRadius: 10,
        justifyContent:"center"
        
    },
    btntexto:{
        color: "white",
        fontSize: 20,
        
    },
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        textAlign: 'center',
    },

    tituloPT:{
        fontSize: 20
    },
   conta:{
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 15,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
   },
   icons: {
    flexDirection:"row",
    marginLeft:30
   },
   volta:{
    position:'absolute',
    zIndex: 99,
    top: 10,
    left: 15,
        
    },
    voltaTxt: {
        fontSize: 1,
    }

})