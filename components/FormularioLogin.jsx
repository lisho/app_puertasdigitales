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

const FormularioLogin = ({
  isOpen,
  onOpen,
  onClose,
  formValues,
  setFormValues,
  valoresIniciales,
}) => {
  const initialRef = useRef();

  const {
    username,
    password,
  } = formValues;

  const {setUsuarioLogueado, usuarioLogueado, setCredenciales, msgError,setMsgError} = useLoginContext()
  
  useEffect(() => {
    if (usuarioLogueado.id) { 
      onClose();
      setFormValues(valoresIniciales)
    
    }
  
  }, [usuarioLogueado]);
  
  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };


  const handleSubmit = () => {
     setUsuarioLogueado({})
     setCredenciales (formValues)

    console.log("Nueva login enviado...");
    
  };

  const handleCancelar = () => {
    setFormValues(valoresIniciales);
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
