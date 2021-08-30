import { useRef, useState, useEffect } from "react";
import dynamic from 'next/dynamic'

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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

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

  const [valueProceso, setValueProceso] = useState('');
  const initialRef = useRef();

  const {titulo, descripcion, proceso, foto, video} = formValues;

  useEffect(() => {
    
    setValueProceso(proceso);

  }, [proceso]);

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
      "proceso" : valueProceso
    }

    if (puertaParaEditar) {
      handleEditar(formValuesCompletos);
    } else {
      handleAdd(formValuesCompletos);
    }
    console.log("Nueva tarea enviada...");
    setFormValues(valoresIniciales); 
    setValueProceso("")
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
            {puertaParaEditar ? "Editar Puerta" : "Crear una nueva puerta"}
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
                placeholder="Descripción de la puerta"
                value={descripcion}
                name="descripcion"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Proceso</FormLabel>
             {/*  <Input
                placeholder="Explicación del proceso"
                value={proceso}
                name="proceso"
                onChange={(e) => handleInputChange(e)}
              /> */}
              <ReactQuill theme="snow" value={valueProceso} onChange={setValueProceso}/>
            
            </FormControl>

            <FormControl>
              <FormLabel>Añade una captura de la web de referencia</FormLabel>
              <Input
                placeholder="Añade Captura"
                value={foto}
                name="foto"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enlaza píldora de vídeo</FormLabel>
              <Input
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
