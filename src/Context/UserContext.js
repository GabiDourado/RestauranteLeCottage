import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
function UserProvider({children}) {
    const [ usuario, setUsuario ]= useState(null);
    const [ logado, setLogado ]= useState(false);
    const [ localiza, setLocaliza ]= useState(false)
    const [ cadastro, setCadastro ] = useState(false);
    const [ esqueciSenha, setEsqueciSenha] = useState(false);
    const [ agradece, setAgradece] = useState(false);
    const [ pedido, setPedido ]= useState(true);
    const [ camera, setCamera ]= useState(false);
    const [ fotoSalva, setFotoSalva ] = useState(false);
    const [ erro, setErro ] = useState(false);

    async function Login ( email, senha ){
        if(email == "gabi.dourado@mail.com" && senha == "12345" ){
            await AsyncStorage.setItem('usuario', "Gabi Dourado");
                setLogado(true);    
        }
        else{
            setErro(true)
        }
    }
    async function InfoUsuario(){
        const usuario = await AsyncStorage.getItem('usuario');
        if(usuario){
            setLogado(true);
            setUsuario(usuario);
        }

       
    }
    /*function mudaTela(){
        if(pedido == true){
            if(agradece == false) {
                setLocaliza(true);
                if(localiza == true){
                    setAgradece(false);
                    setPedido(false);
                    console.log(pedido, localiza, agradece)
                }
            }
        }
        if(localiza == true){
            if(pedido == false){
                setAgradece(true);
                if(agradece == true){
                    setLocaliza(false);
                    setPedido(false);
                    console.log(pedido, localiza, agradece)
                }
            }
        }
        if(agradece == true){
            if(localiza == false) {
                setPedido(true);
                if(pedido == true){
                    setLocaliza(false);
                    setAgradece(false);
                    console.log(pedido, localiza, agradece)
                }
            }
        }
    }*/
    

    useEffect(()=>{
        InfoUsuario()
    },[])
    return(
        <UserContext.Provider value={{
            usuario : usuario, 
            logado: logado, 
            cadastro:cadastro, 
            esqueciSenha: esqueciSenha, 
            localiza: localiza, 
            agradece: agradece, 
            pedido: pedido,
            camera: camera,
            fotoSalva: fotoSalva,
            erro: erro,
            setErro,
            setCamera,
            setFotoSalva,
            setLocaliza, 
            setPedido,
            Login, 
            InfoUsuario, 
            setCadastro, 
            setEsqueciSenha, 
            setAgradece,
            //mudaTela
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;