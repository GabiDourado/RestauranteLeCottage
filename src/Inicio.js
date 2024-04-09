import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Queridinhos from './Queridinhos'
import * as Network from 'expo-network';
import { useBatteryLevel } from 'expo-battery';
import { TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import {UserContext} from './Context/UserContext'
import Cardapio from './Cardapio'

export default function Inicio ({navigation}){
    
    const [bateria, setBateria] = useState();

    const batteryLevel = useBatteryLevel();
    
    const dados = [
        {
            id: "01",
            foto: "https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg",
            nome: "Parmegiana",
            preco: 40.00
        },
        {
            id: "02",
            foto: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9367969f6efd0f47249a4b1c2ef9ded5.jpg",
            nome: "Ratatouille",
            preco: 38.00
        },
    ]

    const [ semRede, setSemRede ] = useState( false );
    const [ dadosMoveis, setDadosMoveis ] = useState(false);
    const [ rede, setRede ] = useState(false);

    async function getStatus(){
        const status = await Network.getNetworkStateAsync();
        if(status.type == "WIFI"){
            setRede(true);
        }
        else{
            setRede(false);
        }

        if(status.type == "CELLULAR"){
          setDadosMoveis(true);
        }
        else{
          setDadosMoveis(false)
        }
    }

    useEffect( () => {
        getStatus();
    },[]);

    useEffect( () => {
        getStatus();
    },[rede, dadosMoveis]);
    

    useEffect( () => {
        setBateria( (batteryLevel * 100).toFixed(0) );
    }, [batteryLevel] );


    return(
        <View style={css.tudo}>
            <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>O que você deseja hoje?</Text>
                </View>
                <Text style={css.tituloFR}>Que veux-tu aujourd'hui ?</Text>
            </View>
            <View style={css.botoes}>
                <TouchableOpacity style={css.btn} onPress={() => navigation.navigate( "Cardápio" ) }>
                    <Text style={css.btnTexto}>Cardápio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn} onPress={ () => navigation.navigate( "Pedido" ) }>
                    <Text style={css.btnTexto}>Pedir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn} onPress={ () => navigation.navigate( "Reservas" ) }>
                    <Text style={css.btnTexto}>Reservas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn} onPress={ () => navigation.navigate( "Locais" ) }>
                    <Text style={css.btnTexto}>Restaurantes</Text>
                </TouchableOpacity>
            </View>
            {rede && bateria > 15 ?
            <View style={css.tudo}>
                <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>Queridinhos da semana</Text>
                </View>
                <Text style={css.tituloFR}>Favori de la semaine</Text>
                </View>
                <FlatList
                    data={dados}
                    renderItem={({item}) => <Queridinhos
                                                nome={item.nome}
                                                preco={'R$ ' + (item.preco).toFixed(2).replace('.',',')}
                                                foto={item.foto}
                                                />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={css.container}
                    horizontal={false}
                    numColumns={2}
                />
           </View>
           : <Text></Text>}
        </View>
    );
}

const css = StyleSheet.create({
    tudo: {
        backgroundColor: "#FAE0E2",
        height: '100%',
        width: "100%",
        display: 'flex',
        alignItems: 'center'
    },
    btn: {
        marginBottom: 10,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '85%',
        height: 55,
        backgroundColor: '#8C0000'
    },
    btnTexto: {
        color: '#FDFAFA',
        fontSize: 20,
    },
    botoes: {
        width: '100%',
        alignItems: 'center'
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
    },
    titulo: {
        width: '70%',
        margin: 20,
        display: 'flex',
    }
  });