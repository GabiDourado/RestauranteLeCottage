import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";



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
            <View style={css.entrarCom}>
                <View style={css.caixaentrar}>
                    <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png",}}/>
                </View>
                <View style={css.caixaentrar}>
                    <Image style={css.conta} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',}} />
                </View>
                <View style={css.caixaentrar}>
                    <Image style={css.conta} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",}}/>
                </View>
            </View>
            <Text style={css.ou}>Ou</Text>
            <View>
                <TextInput style={css.Campos} placeholder='Email'></TextInput>
                <TextInput style={css.Campos} placeholder='Senha'></TextInput>
                <TextInput style={css.Campos} placeholder='Confirmar senha'></TextInput>
                <TextInput style={css.Campos} placeholder='CPF'></TextInput>
                <TextInput style={css.Campos} placeholder='CEP'></TextInput>
                <TextInput style={css.Campos} placeholder='Endereço'></TextInput>
            </View>
            <View style={css.checkTudo}>
                <View style={css.check}></View>
                <Text style={css.concordo}>Li e concordo com os termos</Text>
            </View>
           
            <TouchableOpacity style={css.Botao}>
                <Text style={css.btntexto}>Cadastrar-se</Text>
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
    Botao:{
        backgroundColor: "rgba(140, 0, 0, 1)",
        height: 50,
        width: 300,
        display:"flex",
        alignItems:"center",
        justifyContent: 'center',
        margin: "3%",
        borderRadius: 10
    },
    btntexto:{
        color: "white",
        display:"flex",
        alignItems:"center",
        fontSize: 22
    },
    tituloPT:{
        fontSize: 20,
        textAlign: 'center'
    },
    tituloFR:{
        textAlign: 'center'
    },
    Campos:{
        fontSize: 23,
        backgroundColor: '#fff',
        margin: "3%",
        height: 50,
        width: 300,
        borderRadius: 10,
        padding: 10,
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
    entrarCom: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    caixaentrar: {
        backgroundColor: "#fff",
        width: 62,
        height: 62,
        margin: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    conta: {
        width: 50,
        height: 50,
    },
    ou:{
        fontSize:22
    },
    checkTudo: {
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    check: {
        width:13,
        height:13,
        backgroundColor: '#fff',
        margin: 5
    },
    concordo:{
        fontSize: 16,
        width: '68%',
    }
})