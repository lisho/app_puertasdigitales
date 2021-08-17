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
} from "@chakra-ui/react";

const FormularioPuerta = ({
  isOpen,
  onOpen,
  onClose,
  handleAdd, 
  handleEditar,
  puertaParaEditar, 
  setPuertaParaEditar,
  formValues,
  setFormValues,
  valoresIniciales,
}) => {
  const initialRef = useRef();

  const {titulo, descripcion, proceso, foto, video} = formValues;

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = () => {

    if (puertaParaEditar) {
      handleEditar(formValues);
    } else {
      handleAdd(formValues);
    }
    console.log("Nueva tarea enviada...");
    setFormValues(valoresIniciales);
  };

  const handleCancelar = () => {
    setPuertaParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    puertaParaEditar && setFormValues(puertaParaEditar);
    console.log("Tarea para editar...", puertaParaEditar);
    console.log("Valores del formulario...", formValues);
  }, [puertaParaEditar]);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {puertaParaEditar ? "Editar usuario" : "Crear nuevo usuario"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Titulo de la puerta"
                value={titulo}
                name="titulo"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Descripción de la puerta"
                value={descripcion}
                name="descripcion"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Proceso</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Explicación del proceso"
                value={proceso}
                name="proceso"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Añade una captura de la web de referencia</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Añade Captura"
                value={foto}
                name="foto"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enlaza píldora de vídeo</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enlaza píldora de vídeo"
                value={video}
                name="video"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              {puertaParaEditar ? "Guardar cambios" : "Guardar"}
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioPuerta;
