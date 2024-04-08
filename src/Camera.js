import { Text, View, StyleSheet, TouchableOpacity, Modal, Image} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import React from 'react'

export default function TelaCamera() {

    const[ permissao, setPermissao ] = useState( false );
    const[ tipo , setTipo ] = useState(CameraType.back);
    const[ foto, setFoto ] = useState( "" );

    const CameraRef = useRef();

    async function PermissaoCamera()
    {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if( status == "granted" ){
            setPermissao( true );
        }
    }

    function TrocaTipoCamera()
    {
        setTipo(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function TirarFoto()
    {
        const foto = await CameraRef.current.takePictureAsync();
        setFoto( foto.uri );
    }

    useEffect( () => {
        PermissaoCamera();
    }, [])
  return (
    <View>
        {permissao ? 
            /*Parte que deu certo*/
            <Camera 
            style={css.camera}
            type={tipo}
            ref={CameraRef}
            ratio="16:9"
            onBarCodeScanned={ scaned => {
                if( scaned.raw ) {
                    setQrcode( scaned.raw );
                    console.log(scaned.raw);
                    }
                }
            }
        >
            
                <View style={css.barraFoto}>
                    <TouchableOpacity style={css.alternar} onPress={TrocaTipoCamera}>
                        <Image style={css.Alternarimg} source={{uri:"https://cdn-icons-png.flaticon.com/512/1837/1837541.png",}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.TiFoto} onPress={TirarFoto}></TouchableOpacity>
                    <TouchableOpacity style={css.cancelar}>
                        <Image style={css.cancelarimg} source={{uri:"https://cdn-icons-png.flaticon.com/512/126/126497.png",}}></Image>
                    </TouchableOpacity>
                </View>
            </Camera>
            : 
            /*Parte qu dei errad*/
            <Text>Deu Errado</Text>}

{(foto && permissao ) &&
                <Modal
                animationType="slide"
                transparente={true}>
                    <Image
                        source={{ uri: foto}}
                        height={500}
                        width="100%">
                
                    </Image>
                    <TouchableOpacity onPress={ () => setFoto( "" ) }>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </Modal> 
                
                }
                
    </View>
  )
}

const css = StyleSheet.create({
    camera: {
        width:"100%",
        height:"100%"
    },

    Alternarimg: {
        width: 60,
        height: 60 
    },
    alternar:{
        backgroundColor:"#fff",
        opacity: 0.7,
        width: 80,
        height: 80,
        borderRadius: 100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    TiFoto: {
        
        backgroundColor:"#fff",
        opacity: 0.7,
        width: 80,
        height: 80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
    },
    barraFoto: {
        width:'100%',
        backgroundColor:'#8c0000',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding: 15,
        marginTop:"159%"
    },
    cancelarimg: {
        width: 60,
        height: 60 
    },
    cancelar:{
        backgroundColor:"#fff",
        opacity: 0.7,
        width: 80,
        height: 80,
        borderRadius: 100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    
})