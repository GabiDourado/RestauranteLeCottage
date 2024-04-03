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
            
                <View>
                    <TouchableOpacity onPress={TrocaTipoCamera}>
                        <Text style={css.Alternar}>Alternar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={TirarFoto}>
                        <Text style={css.TiFoto}>Tirar Foto</Text>
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

    Alternar: {
        color:"white",
        backgroundColor:"#000000",
        opacity: 0.5,
        width: "24%",
        
        
    },
    
    TiFoto: {
        color:"white",
        backgroundColor:"black",
        opacity: 0.6,
        width: "20%",
       height: "12%",
        marginLeft: "42%",
        marginTop: "150%",
        borderRadius: 100,
    }

    
})