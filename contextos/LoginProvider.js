import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { solicitarLogin } from "../helpers/solicitarLogin";
import recuperaToken from "../helpers/recuperaToken";
/* import jwt from "../helpers/jwt";  */
import jwt from "jwt-simple";
import moment from "moment"
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
    const [isLoged, setIsLoged] = useState(false);
    const [msgError, setMsgError] = useState("");
    const router = useRouter()


    useEffect(() => {
      credenciales && solicitarLogin (credenciales)
      /* .then((res) => console.log(res)) */
      .then((login)=>{
        if (login.error) {
          console.log(login.error)
          setUsuarioLogueado({}); 
          setMsgError(login.error)
        } else { 
          console.log("login", login);
          setIsLoged(true);
          setUsuarioLogueado(jwt.decode(login.token, "frase secreta"));
          // Guardamos en el sessionStorage
          window.sessionStorage.setItem("login puertas digitales", JSON.stringify(login.token));
          
          router.push('/puertas');
          setMsgError("");
          setCredenciales(null)
        } 

      })
    }, [credenciales]);

    useEffect(() => {
      
      const token = recuperaToken();
      console.log("TOKEN", token);
      !token && router.push('/')
      if (token) {
        const datos = jwt.decode(eval(token), "frase secreta");  
        setUsuarioLogueado(datos);
        datos.expiredToken < moment().unix() && console.log("sesion caducada") && router.push('/');    
        
      }
     
    }, []);

    const logOut = () => {
      setIsLoged(false);
      setUsuarioLogueado({});
     router.push('/')
    }

    return (

        <LoginContext.Provider value={{usuarioLogueado , isLoged, setUsuarioLogueado, setCredenciales, msgError, setMsgError, logOut}}>
            {children}
        </LoginContext.Provider>
    )
 
}

/* Exportamos el provider y el contexto */
export {LoginProvider, useLoginContext}
