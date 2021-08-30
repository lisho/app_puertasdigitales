import { useEffect, useState } from "react";
import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FabricaBanner from "../components/FabricaBanner";
import FormularioPuerta from "../components/FormularioPuerta";
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import ListaDeEtiquetasDataTableUi from "../components/ListaDeEtiquetasDataTableUi";
import FormularioEtiquetas from "../components/FormularioEtiquetas";

const valoresIniciales = {
  etiqueta: "",
  descripcion: "",
  etiquetaTipoId: null,
};

const etiquetas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal del formulario de fabrica de etiquetas
  const [formValues, setFormValues] = useState(valoresIniciales);
  const [etiquetaParaEditar, setEtiquetaParaEditar] = useState(null); // Se llena cuando hay una etiqueta para editar
  const [listaEtiquetas, setListaEtiquetas] = useState([]); //  se carga con los datos sobre etiquetas de la bd
  
  const abrirModalFormularioCrear = () => {
    setFormValues(valoresIniciales);
    onOpen();
  };

  const handleAdd = (etiqueta) => {
    const nuevaEtiqueta = {
      ...etiqueta,
    };
console.log(`nuevaEtiqueta`, nuevaEtiqueta)
    crearNuevoElementoEnBd(
      process.env.NEXT_PUBLIC_URL_API + "etiquetas/",
      nuevaEtiqueta,
      setListaEtiquetas,
      listaEtiquetas
    );

    onClose();
  };

  const handleEditar = (etiquetaEditada) => {
    editarElementoEnBd(
      process.env.NEXT_PUBLIC_URL_API + "etiquetas/" + etiquetaEditada.id,
      etiquetaEditada,
      setListaEtiquetas
    );

    setEtiquetaParaEditar(null);
    onClose();
  };

  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          flex-direction: column;
          min-height: 100%;
          display: grid;
          background-color: rgb(255, 255, 255);
        }
      `}</style>

      <div className="container">
        <FabricaBanner />
        <Box
        /* align="center" */
        >
          <Flex direction="column" mt="5" justifyContent="center">
            <Text as="h2" fontSize="3xl" align="center" color="teal">
              Lista etiquetas creadas
            </Text>
            <Box align="center">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                onClick={() => abrirModalFormularioCrear()}
              >
                Nueva Etiqueta
              </Button>
            </Box>

            <ListaDeEtiquetasDataTableUi
              listaEtiquetas={listaEtiquetas}
              setListaEtiquetas={setListaEtiquetas}
              setEtiquetaParaEditar={setEtiquetaParaEditar}
              onOpen={onOpen}
            />
          </Flex>
        </Box>
      </div>

      <FormularioEtiquetas
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        valoresIniciales={valoresIniciales}
        etiquetaParaEditar={etiquetaParaEditar}
        setEtiquetaParaEditar={setEtiquetaParaEditar}
        listaEtiquetas={listaEtiquetas}
        setListaEtiquetas={setListaEtiquetas}
      />
    </>
  );
};

export default etiquetas;
