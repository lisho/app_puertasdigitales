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
  CheckboxGroup,
} from "@chakra-ui/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import traerListaCompleta from "../helpers/traerListaCompleta";
import filtrarUnArrayPorId from "../helpers/filtrarUnArrayPorId";
import { v4 as uuidv4 } from "uuid";
import ControlledCheckBox from "./ControlledCheckBox";

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
  /**
   * Desplegamos los valores de formValues
   */
  const { id, titulo, descripcion, proceso, foto, video, etiqueta } = formValues;

  const [valueProceso, setValueProceso] = useState("");
  const initialRef = useRef();

  /**
   * Traemos los todas las etiquetas disponibles para asignar a cada puerta
   */
  const [todasEtiquetas, setTodasEtiquetas] = useState([]);

  /**
   * Almacena las etiquetas por tipos
   */
  const [etiquetaTipos, setEtiquetaTipos] = useState([]);

 /*  useEffect(() => {
    console.log(`formValues`, formValues);
    console.log(`etiquetaTipos`, etiquetaTipos);
    console.log(`etiqueta`, etiqueta);
    console.log(`titulo`, titulo);
    console.log(`puertaParaEditar`, puertaParaEditar)
  }, [formValues, etiquetaTipos]); */

  /* useEffect(() => {
    console.log(`etiquetaIsChecked`, etiquetaIsChecked);
    console.log(`todasEtiquetas`, todasEtiquetas);
  }, [etiquetaIsChecked]); */

  /**
   * Creamos un estado para almacenar el estado ( booleano ) de cada estiqueta para
   * esta puerta en este formulario.
   */
  const [etiquetaIsChecked, setEtiquetaIsChecked] = useState([]);

  useEffect(() => {
/* 
    const etiquetaCompleta = [{...formValues.etiqueta.etiquetado}, {
      etiquetumId: etiqueta.id,
      puertumId: id} ]
console.log(`etiquetaCompleta`, etiquetaCompleta) */

    /* setFormValues({...formValues, etiquetaCompleta}) */
  }, [])



  /**
   * Traemos los datos de las etiquetas organizados por tipos para mostrar ordenados en el formulario
   * y lo almacenamos en etiquetaTipos
   */
  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos"
    );
    lista.then((resultado) => setEtiquetaTipos(resultado));
  }, []);

  /**
   * almacenamos en el estado todasEtiquetas el listado de todas las etiquetas disponibles
   */
  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetas"
    );
    lista.then((resultado) => setTodasEtiquetas(resultado));
  }, []);

  /**
   * Iniciamos etiquetaIsChecked con un array de las etiquetas asociadas a esta puerta
   */
  useEffect(() => {
    setEtiquetaIsChecked(
      [...etiqueta]
      );
  }, [etiqueta]);

  /**
   * Iniciamos valueProceso con el valor de proceso (en html) para luego manejar los cambios con ReactQuill
   */
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
  const etiquetasId = etiquetaIsChecked.map(etiq => etiq.id);

    const formValuesCompletos = {
      ...formValues,
      proceso: valueProceso,
      etiqueta:/* etiquetaIsChecked */etiquetasId

    };

    if (puertaParaEditar) {
      handleEditar(formValuesCompletos);
    } else {
      handleAdd(formValuesCompletos);
    } 

/*     console.log("Nueva tarea enviada...");
 */    setFormValues(valoresIniciales);
    setValueProceso(""); 
  };

  const handleCancelar = () => {
    setPuertaParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    puertaParaEditar && setFormValues(puertaParaEditar);
/*     console.log("Tarea para editar...", puertaParaEditar);*/
/*     console.log("Valores del formulario...", formValues); */
  }, [puertaParaEditar]);

  /**
   * Creamos el componente que despliega las etiquetas organizadas por tipos en el formulario
   */
  const crearEtiquetas = () => {
    const etiquetas = [];

    etiquetaTipos.map((tipo) => {
      etiquetas.push(
        <Box m="8" key={uuidv4()}>
          <Text as="i" mt="5" mb="5">
            {tipo.tipo}
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mt="5">
            {tipo.etiqueta.map((etiquetaCheck) => (
              <ControlledCheckBox
                key={uuidv4()}
                etiquetaCheck={etiquetaCheck}
                etiquetaIsChecked={etiquetaIsChecked}
                setEtiquetaIsChecked={setEtiquetaIsChecked}
                formValues={formValues}
                todasEtiquetas={todasEtiquetas}
              />
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
