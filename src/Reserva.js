import { Text, TouchableOpacity, View, TextInput, StyleSheet , Component} from "react-native";
import CalendarPicker from "react-native-calendar-picker";


export default function Reserva(){

    return(
        <View style={css.Todo}>
            <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>Faça sua reserva</Text>
                </View>
                <Text style={css.tituloFR}>Faites votre réservation</Text>
            </View>
            <View style={css.inputs}>
                <Text style={css.label}>Data</Text>
                <TextInput style={css.campo} keyboardType="numeric" placeholder="dd-mm-aaaa"></TextInput>
                <Text style={css.label}>Hora</Text>
                <TextInput style={css.campo} keyboardType="numeric" placeholder="hh.mm"></TextInput>
                <Text style={css.label}>Pessoas</Text>
                <TextInput style={css.campo} keyboardType="numeric" placeholder="000"></TextInput>
                <TouchableOpacity style={css.Botao}>
                    <Text style={css.btntexto}>Agendar</Text>
                </TouchableOpacity>
            </View>
            
            <View style={css.calendario}>
                <CalendarPicker />
            </View>
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

    },
    calendario: {
        width: '80%',
        height: 200
    },
    tituloPT: {
        fontSize: 23,
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
        width:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        padding: 10
    },
    titulo: {
        width: '70%',
        margin: 10,
        display: 'flex',
    },
    Botao: {
        backgroundColor: "rgba(140, 0, 0, 1)",
        height: 45,
        width: '100%',
        display:"flex",
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 10,
        marginTop:20,
        marginBottom: 10
    }, 
    btntexto:{
        color: "white",
        fontSize: 20
    },
    campo:{
        fontSize: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        height: 50,
        width: '100%',
        borderRadius: 10,
        padding: 10
    },
    label:{
        fontSize: 20,
        marginTop: 10
    },
    inputs:{
        width: '65%'
    },
})