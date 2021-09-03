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

const FormularioEtiquetas = (
  {isOpen,
  onOpen,
  onClose,
  handleAdd,
  handleEditar,
  etiquetaParaEditar,
  setEtiquetaParaEditar,
  formValues,
  setFormValues,
  valoresIniciales}
) => {
  const initialRef = useRef();
console.log(formValues)
  const { etiqueta, descripcion } = formValues;
  const [listaTiposEtiqueta, setListaTiposEtiqueta] = useState([]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = () => {
    const formValuesCompletos = {
      ...formValues,
      
    };

    if (etiquetaParaEditar) {
      handleEditar(formValuesCompletos);
    } else {
      handleAdd(formValuesCompletos);
    }
    console.log("Nueva tarea enviada...");
    console.log(`formValuesCompletos`, formValuesCompletos)
    setFormValues(valoresIniciales);
   
  };

  const handleCancelar = () => {
    setEtiquetaParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    etiquetaParaEditar && setFormValues(etiquetaParaEditar);
    console.log("Tarea para editar...", etiquetaParaEditar);
    console.log("Valores del formulario...", formValues);
  }, [etiquetaParaEditar]);

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
            {etiquetaParaEditar ? "Editar etiqueta" : "Crear nueva etiqueta"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre de la etiqueta</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nombre de la etiqueta"
                value={etiqueta}
                name="etiqueta"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                placeholder="Descripción de la etiqueta"
                value={descripcion}
                name="descripcion"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Etiquetas</FormLabel>
              <Select
                placeholder="Selecciona un tipo de etiqueta"
                name="etiquetaTipoId"
                onChange={(e) => handleInputChange(e)}
              >
               { listaTiposEtiqueta.map(tipo => 
                  <option value={tipo.id}>{tipo.tipo}</option>
                )}

              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              {etiquetaParaEditar ? "Guardar cambios" : "Guardar"}
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioEtiquetas;
