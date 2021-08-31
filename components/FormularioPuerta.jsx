import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

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
  Checkbox,
  Flex,
  Wrap,
  Grid,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import traerListaCompleta from "../helpers/traerListaCompleta";
import filtrarUnArrayPorId from "../helpers/filtrarUnArrayPorId";

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
  const [valueProceso, setValueProceso] = useState("");
  const initialRef = useRef();
  const [todasEtiquetas, setTodasEtiquetas] = useState([]);
  const [etiquetaTipos, setEtiquetaTipos] = useState([]);
  const { titulo, descripcion, proceso, foto, video } = formValues;
  /* const etiquetasRef = useRef([]) */

  useEffect(() => {
    setValueProceso(proceso);
  }, [proceso]);

  /*   useEffect(() => {
    crearEtiquetas();
    console.log(`etiquetasRef`, etiquetasRef)
  }, []) */

  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetas"
    );
    lista.then((resultado) => setTodasEtiquetas(resultado));
  }, []);

  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos"
    );
    lista.then((resultado) => setEtiquetaTipos(resultado));
  }, []);

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
      proceso: valueProceso,
    };

    if (puertaParaEditar) {
      handleEditar(formValuesCompletos);
    } else {
      handleAdd(formValuesCompletos);
    }
    console.log("Nueva tarea enviada...");
    setFormValues(valoresIniciales);
    setValueProceso("");
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

  const crearEtiquetas = () => {
    const etiquetas = [];
    const etiquetasDeEstaPuerta = puertaParaEditar?.etiqueta;

    etiquetaTipos.map((tipo) => {
      etiquetas.push(
        <Box m="8">
          <Text as="i" mt="5" mb="5">
            {tipo.tipo}
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mt="5">
            {tipo.etiqueta.map((etiqueta) => (
              <Checkbox
                defaultIsChecked={filtrarUnArrayPorId(
                  etiquetasDeEstaPuerta,
                  etiqueta.id
                )}
              >
                {etiqueta.etiqueta}
              </Checkbox>
            ))}
          </Grid>
        </Box>
      );
    });
    return etiquetas;
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
      >
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

            <FormControl mt={3}>
              <FormLabel>Descripción</FormLabel>
              <Input
                placeholder="Descripción de la puerta"
                value={descripcion}
                name="descripcion"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Proceso</FormLabel>

              <ReactQuill
                theme="snow"
                value={valueProceso}
                onChange={setValueProceso}
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Añade una captura de la web de referencia</FormLabel>
              <Input
                placeholder="Añade Captura"
                value={foto}
                name="foto"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Enlaza píldora de vídeo</FormLabel>
              <Input
                placeholder="Enlaza píldora de vídeo"
                value={video}
                name="video"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel>Etiquetas</FormLabel>

              {crearEtiquetas()}
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
