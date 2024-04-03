import { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet , Component, Keyboard, Platform} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import * as Calendar from 'expo-calendar';
import { useEffect } from "react";
import { uuid } from "expo-modules-core";


export default function Reserva(){

    const[Agenda, setAgenda] = useState();
    const[Inicio, setInicio] = useState();
    const[Final, setFinal] = useState();
    const[dados, setDados] = useState([]);

    async function getPermissions()
    {
        const {status} = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendar = await Calendar.getCalendarPermissionsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect(() => {
        getPermissions();
    }, []);

    async function Salvar(){
        if( Agenda !="" && Inicio !="" && Final !=""){
            Keyboard.dismiss();
            const evento = {
                id: uuid.v4(),
                nome: Agenda,
                Inicio: Inicio,
                final : Final,
            
            };
            const novoEvento = [ ...dados, evento];
            setDados( novoEvento);

            const defaultCalendarSource =
            Platform.OS === 'ios'
            ?await Calendar.getDefaultCalendarAsync()
            : { isLocalAccount: true, name: 'Expo Calendar'};
            const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Expo Calendar',
                color: 'lightgreen',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId:defaultCalendarSource.id,
                source: defaultCalendarSource,
                name: 'internalCalendarName',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
            });

            let InicioDataHora = Inicio.split(" ");
            let InicioData = InicioDataHora[0].split("-");
            let InicioHora = InicioDataHora[1].split(".")

            let finalDataHora = Final.split(" ");
            let finalData = finalDataHora[0].split("-");
            let finalHora = finalDataHora[1].split(".");

            const newEvente = {
                title: Agenda,
                startDate: new Date(InicioData[2], InicioData[1] -1 , InicioData[0], InicioHora[0], InicioHora[1]),
                endDate: new Date(finalData[2], finalData[1] -1, finalData[0], finalHora[0], finalHora[1]),
                location: 'Le Cottage',
                notes: 'Reserva de mesa',
            };

            try {
                await Calendar.createEventAsync(newCalendarID, newEvente);
                alert('Sua reserva foi feita com exito!');
            } catch (erro) {
                alert('Erro ao realizar reserva!');
            }

            setAgenda("")
            setInicio("")
            setFinal("")
        }
    };
    
    return(
        <View style={css.Todo}>
            <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>Faça sua reserva</Text>
                </View>
                <Text style={css.tituloFR}>Faites votre réservation</Text>
            </View>
            <View style={css.inputs}>
                
                <Text style={css.label}>Nome do cliente</Text>
                
                <TextInput style={css.campo} placeholder="Insira seu nome"
                    TextInput={Agenda}
                    onChangeText={(digitando) => setAgenda(digitando)}
                    value={Agenda}
                ></TextInput>
                
                <Text style={css.label}>Data e hora de inicio</Text>
                
                <TextInput style={css.campo} keyboardType="numeric" placeholder="dd-mm-aaaa hh.mm"
                    TextInput={Inicio}
                    onChangeText={(digitando) => setInicio(digitando)}
                    value={Inicio}
                ></TextInput>
                
                <Text style={css.label}>Data e hora de termino</Text>
                
                <TextInput style={css.campo} keyboardType="numeric" placeholder="dd-mm-aaaa hh.mm"
                    TextInput={Final}
                    onChangeText={(digitando) => setFinal(digitando)}
                    value={Final}
                ></TextInput>
                
                <TouchableOpacity style={css.Botao} 
                                onPress={Salvar}>
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