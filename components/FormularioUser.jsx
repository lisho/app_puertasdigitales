import { useRef, useState, useEffect } from "react";
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
  useOutsideClick,
} from "@chakra-ui/react";

const FormularioUser = ({
  isOpen,
  onOpen,
  onClose,
  handleAdd, 
  handleEditar,
  usuarioParaEditar,
  setUsuarioParaEditar,
  formValues,
  setFormValues,
  valoresIniciales,
}) => {
  const initialRef = useRef();

  const {
    email,
    username,
    password,
    rol,
    avatar,
    cp
  } = formValues;

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = () => {

    if (usuarioParaEditar) {
      handleEditar(formValues);
    } else {
      handleAdd(formValues);
    }
    console.log("Nueva tarea enviada...");
    setFormValues(valoresIniciales);
  };

  const handleCancelar = () => {
    setUsuarioParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    usuarioParaEditar && setFormValues(usuarioParaEditar);
    console.log("Tarea para editar...", usuarioParaEditar);
    console.log("Valores del formulario...", formValues);
  }, [usuarioParaEditar]);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {usuarioParaEditar ? "Editar usuario" : "Crear nuevo usuario"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>

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
                ref={initialRef}
                placeholder="Contraseña"
                value={password}
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Rol</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Rol"
                value={rol}
                name="rol"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Avatar</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Avatar"
                value={avatar}
                name="avatar"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Código Postal</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Código Postal"
                value={cp}
                name="cp"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              {usuarioParaEditar ? "Guardar cambios" : "Guardar"}
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioUser;
