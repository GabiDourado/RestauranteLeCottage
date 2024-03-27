import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import Calendario from "./Calendario";


export default function Reserva () {
    return(
        <View style={css.Todo}>
            <Text>Faça sua reserva</Text>
            <Text>Faites votre réservation</Text>
            <Text>Data</Text>
            <TextInput keyboardType="numeric" placeholder="dd-mm-aaaa"></TextInput>
            <Text>Hora</Text>
            <TextInput keyboardType="numeric" placeholder="hh.mm"></TextInput>
            <Text>Pessoas</Text>
            <TextInput keyboardType="numeric" placeholder="000"></TextInput>
            <TouchableOpacity>
                <Text>Agendar</Text>
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



})
 //<Calendario></Calendario>