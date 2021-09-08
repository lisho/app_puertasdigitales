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
  Select
} from "@chakra-ui/react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import { CirclePicker } from 'react-color';

const FormularioEtiquetas = (
  {isOpen,
  onOpen,
  onClose,
  handleAdd,
  handleEditar,
  tiposEtiquetaParaEditar,
  setTiposEtiquetaParaEditar,
  formValues,
  setFormValues,
  valoresIniciales}
) => {
  const initialRef = useRef();
console.log(formValues)
  const { tipo, descripcion, color } = formValues;
  const [listaTiposEtiqueta, setListaTiposEtiqueta] = useState([]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleColorChange = (e) => {
    const color = { 
      target:{
        name: "color",
        value: e.hex
        }
      }
      handleInputChange(color);
  }

  const handleSubmit = () => {
    const formValuesCompletos = {
      ...formValues,
      
    };

    if (tiposEtiquetaParaEditar) {
      handleEditar(formValuesCompletos);
    } else {
      handleAdd(formValuesCompletos);
    }
    console.log("Nueva tarea enviada...");
    console.log(`formValuesCompletos`, formValuesCompletos)
    setFormValues(valoresIniciales);
   
  };

  const handleCancelar = () => {
    setTiposEtiquetaParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    tiposEtiquetaParaEditar && setFormValues(tiposEtiquetaParaEditar);
    console.log("Tarea para editar...", tiposEtiquetaParaEditar);
    console.log("Valores del formulario...", formValues);
  }, [tiposEtiquetaParaEditar]);

  useEffect(() => {
    const listaTipos = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos"
    );
    listaTipos.then((resultado) => setListaTiposEtiqueta(resultado));
  
  }, []);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {tiposEtiquetaParaEditar ? "Editar etiqueta" : "Crear nueva etiqueta"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre del tipo de etiqueta</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Tipo de etiqueta"
                value={tipo}
                name="tipo"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                placeholder="Descripción del tipo de etiqueta"
                value={descripcion}
                name="descripcion"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Color asociado al tipo</FormLabel>

              <CirclePicker 
                color={ color }
                onChange={ (e) => handleColorChange(e)} 
              />
            {/*   <Input
                placeholder="selecciona un color"
                name="color"
                value={color}
                onChange={(e) => handleInputChange(e)}
              >
              </Input> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              {tiposEtiquetaParaEditar ? "Guardar cambios" : "Guardar"}
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioEtiquetas;
