import { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { UserContext } from "./Context/UserContext";

export default function RecupSenha(){
    const{ setEsqueciSenha } = useContext ( UserContext );
    return(
        <View style={css.Todo}>
        <TouchableOpacity style={css.volta}  onPress={() => setEsqueciSenha(false)}>
            <Text style={css.voltaTxt}>❮</Text>
        </TouchableOpacity>
        <View style={css.titulo}>
            <View style={css.linha}>
                    <Text style={css.tituloPT}>Recuperar Senha</Text>
                </View>
            <Text style={css.tituloFR}>Récupérer mot de passe</Text>
        </View>
        <TextInput style={css.Campo} placeholder='Informe seu email'></TextInput>
        <TextInput style={css.Campo} placeholder='Código de verificação'></TextInput>
        <TextInput style={css.Campo} placeholder='Nova senha'></TextInput>
        <TextInput style={css.Campo} placeholder='Confirmar nova senha'></TextInput>
          <TouchableOpacity style={css.Botao}>
                <Text style={css.btntexto}>Trocar senha</Text>
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
        paddingTop: 20
    },
    Botao: {
        backgroundColor: "rgba(140, 0, 0, 1)",
        height: 50,
        width: "85%",
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        margin: "3%",
        borderRadius: 10
    },
    btntexto:{
        color: "white",
        fontSize: 20
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
        margin: 25,
        marginTop: 40
    },
    Campo:{
        fontSize: 20,
        backgroundColor: '#fff',
        margin: "3%",
        height: 50,
        width: '85%',
        borderRadius: 10,
        padding: 10

    },
    volta:{
        position:'absolute',
        zIndex: 99,
        top: 35,
        left: 15,
        
    },
    voltaTxt: {
        fontSize: 25,
    }
    
})