import { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { UserContext } from "./Context/UserContext";
import Cadastro from "./Cadastro";
import RecupSenha from "./RecupSenha";

export default function Login({navigate}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {Login, erro} = useContext( UserContext );

    function realizaLogin(){
      Login( email, senha );
      
    }

    const{ cadastro, setCadastro } = useContext(  UserContext );
    const{ esqueciSenha, setEsqueciSenha } = useContext ( UserContext );

    if( cadastro ) {
        return( < Cadastro/> )
    }
    if( esqueciSenha ) {
        return( < RecupSenha/> )
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
            <TouchableOpacity style={css.Botao} onPress={realizaLogin}>
                <Text style={css.btntexto}>Entrar</Text>
            </TouchableOpacity>
            {erro? <Text>Email ou senha errados</Text>: <View></View>}
            <View style={css.esqueci}>
                <TouchableOpacity onPress={() => setEsqueciSenha(true)}>
                    <Text style={css.link}>Esqueci minha senha</Text>
                </TouchableOpacity>
                <View style={css.cadastre}>
                    <Text style={css.letra2}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={() => setCadastro(true)}>
                        <Text style={css.link}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={css.ou}>Ou</Text>
            <TouchableOpacity style={css.Google}>
                <View style={css.caixabranca}>
                    <Image style={css.conta} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',}} />
                </View>
                <Text style={css.letra}>Entrar com Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.Face}>
                <View style={css.caixabranca}>
                    <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png",}}/>
                </View>
                <Text style={css.letra} >Entrar com Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.Insta}>
                <View style={css.caixabranca}>
                    <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",}}/>
                </View>
                    <Text style={css.letra}>Entrar com Instagram</Text>
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
        justifyContent:'center'

       
    },
    Botao: {
        backgroundColor: "rgba(140, 0, 0, 1)",
        height: 50,
        width: '85%',
        display:"flex",
        alignItems:"center",
        justifyContent: 'center',
        margin: "3%",
        borderRadius: 10
    }, 
    btntexto:{
        color: "white",
        fontSize: 23
    },
    ou:{
        fontSize: 22,
        margin: 20
    },
    campo:{
        fontSize: 20,
        backgroundColor: '#fff',
        margin: "3%",
        height: 50,
        width: '85%',
        borderRadius: 10,
        padding: 10
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
        margin: 20,
    },

    Google: {
        backgroundColor: "rgba(111, 165, 255, 1)",
        display: "flex",
        color:"white",
        height: 60,
        width: '85%',
        borderRadius: 10,
        margin: 5,
        fontSize: 23,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Face: {
        backgroundColor: "rgba(53, 136, 243, 1)",
        color: "white",
        height: 60,
        width: '85%',
        borderRadius: 10,
        margin: 5,
        fontSize: 23,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Insta: {
        backgroundColor: "rgba(0, 81, 185, 1)",
        color: "white",
        height: 60,
        width: '85%',
        borderRadius: 10,
        margin: 5,
        fontSize: 23,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    letra: {
        fontSize: 22,
        color: "#fff",
        marginLeft: '10%'
    },
    conta: {
        width: "75%",
        height: "75%"
    },
    caixabranca: {
        width: "18%",
        height: 61,
        backgroundColor: '#fff',
        borderRadius: 10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    link:{
        fontSize: 17,
        color: 'rgba(111, 165, 255, 1)'
    },
    letra2:{
        fontSize: 17,
        marginRight: 8,
    },
    cadastre:{
        display:'flex',
        flexDirection:'row',
        marginTop: 10
    },
    esqueci: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})