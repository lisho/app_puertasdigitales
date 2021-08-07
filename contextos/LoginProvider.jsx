import { createContext, useState, useContext, useEffect } from "react";

import { useRouter } from 'next/router'
import { solicitarLogin } from "../helpers/solicitarLogin";

/* Creamos un contexto para manejar la pagina que está activa */
const LoginContext = createContext();

/* Creamos un Hook personalizado para manejar el contexto */
const useLoginContext = () => {
    return useContext(LoginContext)
}

/* Creamos el provider incluyendo ya el context.provider */
const LoginProvider = ({children}) => {
    
    /* Creamos el estado con el que vamos a manejar si hay un usuario Logueado */
    const [credenciales, setCredenciales] = useState(null);
    const [usuarioLogueado, setUsuarioLogueado] = useState({});
    const [msgError, setMsgError] = useState("");
    const router = useRouter()

    useEffect(() => {
      
    credenciales && solicitarLogin (credenciales)
    /* .then((res) => console.log(res)) */
    .then((login)=>{
      if (login.error) {
        setUsuarioLogueado({}); 
        setMsgError(login.error)
      } else { 
        setUsuarioLogueado(login);
        // Guardamos en el sessionStorage
        window.sessionStorage.setItem("login puertas digitales", JSON.stringify(login));
        router.push('/puertas');
        setMsgError("");
      }
    })

    }, [credenciales]);

    useEffect(() => {
      !usuarioLogueado.token && router.push('/')
      console.log("revisando usuario logueado")
      
    }, []);
    
    return (

        <LoginContext.Provider value={{usuarioLogueado ,setUsuarioLogueado, setCredenciales, msgError, setMsgError}}>
          {console.log(msgError)}
          {console.log(usuarioLogueado)}
            {children}
        </LoginContext.Provider>
    )
 
}

/* Exportamos el provider y el contexto */
export {LoginProvider, useLoginContext}
