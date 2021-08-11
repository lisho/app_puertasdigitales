import { Button } from "@chakra-ui/react";
import { useLoginContext } from "../contextos/LoginProvider";

const LogOutButton = () => {

    const {setUsuarioLogueado} = useLoginContext();
    const handleLogOut = () => {
        setUsuarioLogueado({});
        
    }
    return (
        <Button onClick={handleLogOut}>
            Cerrar sesion
        </Button>
    );
}

export default LogOutButton;