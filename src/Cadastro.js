import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";



export default function Cadastro({navigation})
{
    
    return(
        <View style={css.Todo}>
            <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>Crie sua conta</Text>
                </View>
                <Text style={css.tituloFR}>Créez votre compte</Text>
            </View>

            <TextInput style={css.Campos} placeholder='Email'></TextInput>
            <TextInput style={css.Campos} placeholder='Senha'></TextInput>
            <TextInput style={css.Campos} placeholder='Confirmar senha'></TextInput>
            <TextInput style={css.Campos} placeholder='CPF'></TextInput>
            <TextInput style={css.Campos} placeholder='CEP'></TextInput>
            <TextInput style={css.Campos} placeholder='Endereço'></TextInput>

            

           
            <TouchableOpacity style={css.Botao}>
                <Text style={css.btntexto}>Criar conta</Text>
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

    Campos: {

    },

    Botao:{
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
        display:"flex",
        alignItems:"center",
        fontSize: 20
    },
    
    tituloPT:{
        fontSize: 20,
        textAlign: 'center'
    },
    tituloFR:{
        textAlign: 'center'
    },
    Campos:{
        fontSize: 20,
        backgroundColor: '#fff',
        margin: "3%",
        height: "8%",
        width: "80%",
        borderRadius: 10
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
    
})