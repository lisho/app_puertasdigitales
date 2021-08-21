import { Heading, Text, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BotonAcceso from "../components/BotonAcceso";
import FormularioUser from "../components/FormularioUser";
import FormularioLogin from "../components/FormularioLogin";
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";

const valoresIniciales = {
  email: "",
  username: "",
  password: "",
  rol: "",
  avatar: "",
  cp: "",
};

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal del formulario de registro
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useDisclosure(); // Manejador del modal del formulario de login
  const [formValues, setFormValues] = useState(valoresIniciales);
  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null); // Se llena cuando hay una tarea para editar

  const abrirModalRegistro = () => {
    setFormValues(valoresIniciales);
    onOpen();
  };

  const abrirModalLogin = () => {
    /* setFormloginValues(valoresInicialeslogin); */
    onOpenLoginModal();
  };

  /* Función para AÑADIR una nuevo usuario
   ** @ param: Objeto usuario
   ** Añade el id, vuelve a crear el array usuarios incluyendo la nuevo usuario,
   ** actualiza el estado usuarios y cierra el modal
   */

  const handleAdd = (usuario) => {
    const nuevoUsuario = {
      ...usuario,
    };

    console.log(nuevoUsuario);

    crearNuevoElementoEnBd(
      process.env.NEXT_PUBLIC_URL_API+"usuarios/registro",
      nuevoUsuario,
      null,
      null
    );

    onClose();
  };

  return (
    <>
      <style jsx>{``}</style>

      <Box m="15px">
        <Heading as="h3" size="sm">
          Bienvenid@ al
        </Heading>
        <Heading as="h1" color="darkslategray">
          Almacén de Puertas Digitales
        </Heading>
        <Text maxWidth="600" mb="5">
          Un proyecto diseñado para falicitar el uso de los recursos de internet
          a todas las personas, pensando especialmente en aquellas que tienen
          más dificultades.
        </Text>
        <BotonAcceso mr="3" page="/puertas" registrado="false">
          {" "}
          Accede sin identificarte
        </BotonAcceso>

        {/* <BotonAcceso page="/puertas" registrado="true">Identificate</BotonAcceso> */}
        <Button onClick={() => abrirModalLogin()}>Identifícate</Button>
        <Box mt="3">
          o{" "}
          <Button color="orange.500" onClick={() => abrirModalRegistro()}>
            {" "}
            Registrate{" "}
          </Button>{" "}
          para poder guardar tus favoritos.
        </Box>
      </Box>
      <FormularioUser
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        handleAdd={handleAdd}
        valoresIniciales={valoresIniciales}
        usuarioParaEditar={usuarioParaEditar}
        setUsuarioParaEditar={setUsuarioParaEditar}
      />
      <FormularioLogin
        isOpen={isOpenLoginModal}
        onClose={onCloseLoginModal}
        onOpen={onOpenLoginModal}
      />
    </>
  );
}
