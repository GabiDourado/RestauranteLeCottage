import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Network from 'expo-network';
import { useContext, useEffect, useState } from 'react';

export default function ItemPedido({foto, nome, preco, desc}){
    const [ numero, setNumero ] = useState(1);

    function AumentaPedido(){
        setNumero(numero + 1)
    }
    function DimnuiPedido(){
        setNumero(numero - 1)
        if ( numero <= 1 ){
            setNumero(1);
        }
    }
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
    return(
        <View style={css.caixa}>
            {rede? <Image style={css.img} source={{uri: foto,}}></Image>
            : <Text style={css.desc}>{desc}</Text>}
            
            <View style={css.info}>
                <Text style={css.titulo}>{nome}</Text>
                <Text style={css.preco}>{preco}</Text>    
                <View style={css.btn} >
                    <Text style={css.textoBtn}>Qntde: {numero} </Text>
                    <View style={css.quant}>
                        <TouchableOpacity style={css.btnQuant} onPress={AumentaPedido}>
                            <Text style={css.btnQuantText}>▲</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.btnQuant} onPress={DimnuiPedido}>
                            <Text  style={css.btnQuantText}>▼</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: '80%',
        backgroundColor: '#fff',
        height: 120,
        marginBottom: 10,
        marginTop:10, 
        borderRadius: 10,
    },
    img: {
        width: '40%',
        height: 100,
        borderRadius: 10
    },
    desc: {
        width: '40%',
        height: 100,
        textAlign:'center'
    },
    info:{
        width: '50%',
        marginLeft: 13
    },
    titulo: {
        fontSize: 20
    },
    preco: {
        fontSize: 19,
        color:'green'
    },
    btn:{
        marginBottom: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80%',
        height: 35,
        backgroundColor: '#8C0000'
    },
    textoBtn:{
        color: '#FDFAFA',
        fontSize: 18,
    },
    btnQuantText:{
        color: '#FDFAFA',
        fontSize: 10
    },
    btnQuant:{
        paddingLeft: 15
    }

});