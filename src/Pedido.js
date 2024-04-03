import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import ItemPedido from "./ItemPedido";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "./Context/UserContext";
import PedidoAnterior from "./PedidoAnterior";
import Localizar from "./Localizar";
import * as Network from 'expo-network';

export default function Pedido () {
    const [ semRede, setSemRede ] = useState( false );
    const [ dadosMoveis, setDadosMoveis ] = useState(false);
    const [ rede, setRede ] = useState(false);

    const {localiza, setLocaliza} = useContext( UserContext );

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

    if (localiza){
        return(<Localizar/>)
    }
    return(
        <SafeAreaView style={css.container}>
            <ScrollView style={css.scroll}>
                <View style={css.tudo}>
                    <View style={css.atual}>
                        <View style={css.titulo}>
                            <View style={css.linha}>
                                <Text style={css.tituloPT}>Pedido Atual</Text>
                            </View>
                            <Text style={css.tituloFR}>Commande en cours</Text>
                        </View>
                        <View style={css.atualImg}>
                            <ItemPedido
                            desc="Frango empanado com molho de tomate e queijo, acompanhado por arroz e purê"
                            foto="https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg"
                            nome="Parmegiana"
                            preco="R$ 40,00"></ItemPedido>
                            <ItemPedido
                            desc='Conjunto de legumes que incluem abobrinhas, berinjelas, cebolas, tomates, pimentões, azeite, alecrim, manjericão, alho e molho de tomate'
                            foto="https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9367969f6efd0f47249a4b1c2ef9ded5.jpg"
                            nome="Ratatouille"
                            preco="R$ 38,00"></ItemPedido>
                        </View>
                    </View>
                    <TouchableOpacity style={css.btn} onPress={() => setLocaliza(true)}>
                        <Text style={css.btnTexto}>Localização</Text>
                    </TouchableOpacity>
                    {rede?
                    <View style={css.tudo2}>
                        <View style={css.titulo}>
                            <View style={css.linha}>
                                <Text style={css.tituloPT}>Pedidos anteriores</Text>
                            </View>
                            <Text style={css.tituloFR}>Commandes précédentes</Text>
                        </View>
                        <View style={css.anteriorImg}>
                            <PedidoAnterior 
                            foto='https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg'
                            data='12/02/2024'
                            nome="Parmegiana"
                            preco="R$ 40,00"
                            ></PedidoAnterior>
                            <PedidoAnterior 
                            foto='https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg'
                            data='12/02/2024'
                            nome="Parmegiana"
                            preco="R$ 40,00"
                            ></PedidoAnterior>
                        </View>
                    </View>
                    : <View style={css.dadosMoveis}></View>}
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const css = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
    tudo: {
        backgroundColor: "#FAE0E2",
        height: '100%',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tudo2: {
        backgroundColor: "#FAE0E2",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
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
    },
    btn: {
        marginBottom: 10,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '85%',
        height: 55,
        backgroundColor: '#8C0000'
    },
    btnTexto: {
        color: '#FDFAFA',
        fontSize: 20,
    },
    anteriorImg:{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
    },
    dadosMoveis:{
        height: 500,
        backgroundColor: "#FAE0E2",
    },
    atualImg:{
        width:'100%',
        display: 'flex',
        alignItems: 'center'
    },
    atual:{
        width: '100%', 
        display:'flex',
        alignItems:'center'
    },
    
})