import { useRef, useState, useEffect } from "react";
import { useLoginContext } from "../contextos/LoginProvider";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";


const valoresInicialesFormularioLogin = {
  username:"",
  password:"", 
}

const FormularioLogin = ({
  isOpen,
  onOpen,
  onClose,
  
}) => {
  const initialRef = useRef();

  const [formLoginValues, setFormLoginValues] = useState(valoresInicialesFormularioLogin);
  const {setUsuarioLogueado, usuarioLogueado, setCredenciales, msgError,setMsgError} = useLoginContext()
  console.log("formLoginValues", formLoginValues)
  const {
    username,
    password,
  } = formLoginValues;

  useEffect(() => {
    if (usuarioLogueado.id) { 
      onClose();
      setFormLoginValues(valoresIniciales)
    
    }
  
  }, [usuarioLogueado]);
  
  const handleInputChange = (e) => {
    const changedformLoginValues = {
      ...formLoginValues,
      [e.target.name]: e.target.value,
    };
    setFormLoginValues(changedformLoginValues);
  };


  const handleSubmit = () => {
     setUsuarioLogueado({})
     setCredenciales (formLoginValues)

    console.log("Nueva login enviado...");
    
  };

  const handleCancelar = () => {
    setFormLoginValues(valoresInicialesFormularioLogin);
    setMsgError("")
    onClose();
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Identifícate...
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>

              <FormLabel>Usuario</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nombre de ususario"
                value={username}
                name="username"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                /* ref={initialRef} */
                placeholder="Contraseña"
                value={password}
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
            <Text mt="3" color="red">{msgError}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              Entrar
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioLogin;
