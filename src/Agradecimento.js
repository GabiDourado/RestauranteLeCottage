import { Button, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function Agradecimento({navigation})
{
    return(
        <View style={css.Todo}>
            <View style={css.titulo}></View>
            <View style={css.linha}>
                    <Text style={css.tituloPT}>Pedido Finalizado com sucesso!</Text>
                </View>
            <Text style={css.AgradecimentoFR}>Commande terminée avec succès</Text>
            <Image source={{url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fcorrect_4436481&psig=AOvVaw13jUVcXU1byA_f9EAUbia-&ust=1711560122395000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCPhdK4koUDFQAAAAAdAAAAABAE'}}></Image>
            <TouchableOpacity style={css.BotaoVoltar}>
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
        width: "80%",
        height: "8%",
        display:"flex",
        alignItems:"center",
        margin: "3%",
        borderRadius: 10
        
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
    }

})