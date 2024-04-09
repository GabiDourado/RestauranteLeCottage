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
    const [ pedido, setPedido ]= useState(false);
    const [ camera, setCamera ]= useState(false);
    const [ fotoSalva, setFotoSalva ] = useState(false);

    async function Login ( email, senha ){
        if(email == "gabi.dourado@mail.com" && senha == "12345" ){
            await AsyncStorage.setItem('usuario', "Gabi Dourado");
                setLogado(true);    
        }
    }
    async function InfoUsuario(){
        const usuario = await AsyncStorage.getItem('usuario');
        if(usuario){
            setLogado(true);
            setUsuario(usuario);
        }

       
    }

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
            setCamera,
            setFotoSalva,
            setLocaliza, 
            setPedido,
            Login, 
            InfoUsuario, 
            setCadastro, 
            setEsqueciSenha, 
            setAgradece
            }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;