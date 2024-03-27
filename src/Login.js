import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";

export default function Login({navigate}){
    return(
        <View style={css.Todo}>
        <View style={css.titulo}></View>
        <View style={css.linha}>
                    <Text style={css.tituloPT}>Entrar em sua conta</Text>
                </View>
            <Text>Connectez-vous à votre compte</Text>

            <TextInput placeholder='Email' style={css.campo}></TextInput>
            <TextInput placeholder='Senha' style={css.campo}></TextInput>

            <Text>Ou</Text>

            <Text style={css.Google}>Entrar com Google</Text>
            <Text style={css.Face}>Entrar com Facebook</Text>
            <Text style={css.Insta}>Entrar com Instagram</Text>

            <TouchableOpacity style={css.Botao}>
                <Text style={css.btntexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    Todo:{
        backgroundColor: "rgba(250, 224, 226, 1)",
       width: "100%",
       height: "100%",
       flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
       
    },
    Botao: {
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
        fontSize: 20
    },
    campo:{
        fontSize: 20,
        backgroundColor: '#fff',
        margin: "3%",
        height: "8%",
        width: "80%",
        borderRadius: 10
    },
    tituloPT:{
        fontSize: 20,
    },
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        textAlign: 'center',
    },

    Google: {
        backgroundColor: "rgba(111, 165, 255, 1)",
        color:"white",
        height: "8%",
        width: "80%",
        borderRadius: 10,
        margin: 5,
    },
    Face: {
        backgroundColor: "rgba(53, 136, 243, 1)",
        color: "white",
        height: "8%",
        width: "80%",
        borderRadius: 10,
        margin: 5
    },
    Insta: {
        backgroundColor: "rgba(0, 81, 185, 1)",
        color: "white",
        height: "8%",
        width: "80%",
        borderRadius: 10,
        margin: 5
    }
})