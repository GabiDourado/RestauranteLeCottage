import { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { UserContext } from "./Context/UserContext";

export default function Login({navigate}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false);

    const {Login} = useContext( UserContext );

    function realizaLogin(){
      Login( email, senha );
      
    }
    return(
        <View style={css.Todo}>
        <View style={css.titulo}>
            <View style={css.linha}>
                    <Text style={css.tituloPT}>Entrar em sua conta</Text>
                </View>
            <Text style={css.tituloFR}>Connectez-vous à votre compte</Text>
            </View>
            <TextInput placeholder='Email' style={css.campo} onChangeText={(digitado) => setEmail(digitado)} value={email}></TextInput>
            <TextInput placeholder='Senha' style={css.campo} onChangeText={(digitado) => setSenha(digitado)} value={senha}></TextInput>

            <Text>Ou</Text>
            <View style={css.Google}>
                <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png",}}/>
                <Text style={css.letra}>Entrar com Google</Text>
            </View>
            <View style={css.Face}>
                <Image style={css.conta} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',}} />
                <Text style={css.letra} >Entrar com Facebook</Text>
            </View>
            <View style={css.Insta}>
                <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",}}/>
                <Text style={css.letra}>Entrar com Instagram</Text>
            </View>
            <TouchableOpacity style={css.Botao} onPress={realizaLogin}>
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
        height: 50,
        width: 300,
        display:"flex",
        alignItems:"center",
        margin: "3%",
        borderRadius: 10
    }, 
    btntexto:{
        color: "white",
        fontSize: 23
    },
    campo:{
        fontSize: 20,
        backgroundColor: '#fff',
        margin: "3%",
        height: 50,
        width: 300,
        borderRadius: 10
    },
    tituloPT: {
        fontSize: 20,
        textAlign: 'center',
        
    },
    tituloFR: {
        fontSize: 15,
        textAlign: 'center',
    },
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        textAlign: 'center',
    },
    titulo: {
        width: '70%',
        margin: 15,
    },

    Google: {
        backgroundColor: "rgba(111, 165, 255, 1)",
        color:"white",
        height: 50,
        width: 300,
        borderRadius: 10,
        margin: 5,
        fontSize: 23
    },
    Face: {
        backgroundColor: "rgba(53, 136, 243, 1)",
        color: "white",
        height: 50,
        width: 300,
        borderRadius: 10,
        margin: 5,
        fontSize: 23
    },
    Insta: {
        backgroundColor: "rgba(0, 81, 185, 1)",
        color: "white",
        height: 50,
        width: 300,
        borderRadius: 10,
        margin: 5,
        fontSize: 23
    },
    letra: {
        fontSize: 22,
        color: "#fff",
        
    }
})