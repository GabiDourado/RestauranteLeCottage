import { Text, TouchableOpacity, View, TextInput } from "react-native";
import Calendario from "./Calendario";


export default function Reserva () {
    return(
        <View>
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
 //<Calendario></Calendario>