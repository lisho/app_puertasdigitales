import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FabricaBanner from "../components/FabricaBanner";
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import ListaDeTiposEtiquetasDataTableUi from "../components/ListaDeTiposEtiquetasDataTableUi";
import FormularioTiposEtiquetas from "../components/FormularioTiposEtiquetas";

const valoresIniciales = {
  tipo: "",
  descripcion: "",
  color: "",
};

const etiquetas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal del formulario de fabrica de etiquetas
  const [formValues, setFormValues] = useState(valoresIniciales);
  const [tiposEtiquetaParaEditar, setTiposEtiquetaParaEditar] = useState(null); // Se llena cuando hay una etiqueta para editar
  const [listaTiposEtiquetas, setListaTiposEtiquetas] = useState([]); //  se carga con los datos sobre etiquetas de la bd
  const [indexParaEditar, setIndexParaEditar] = useState(null);
  const abrirModalFormularioCrear = () => {
    setFormValues(valoresIniciales);
    onOpen();
  };

  const handleAdd = (tipoEtiqueta) => {
    const nuevoTipoEtiqueta = {
      ...tipoEtiqueta,
    };
    crearNuevoElementoEnBd(
      process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos/",
      nuevoTipoEtiqueta,
      setListaTiposEtiquetas,
      listaTiposEtiquetas
    );

    onClose();
  };

  const handleEditar = (tipoEtiquetaEditado) => {
    
    editarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+"etiquetaTipos/"+tipoEtiquetaEditado.id, tipoEtiquetaEditado, setListaTiposEtiquetas, listaTiposEtiquetas, indexParaEditar);
    setIndexParaEditar(null);
    setTiposEtiquetaParaEditar(null);
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
        >
          <Flex direction="column" mt="5" justifyContent="center">
            <Text as="h2" fontSize="3xl" align="center" color="teal">
              Lista de tipos de etiquetas disponibles
            </Text>
            <Box align="center">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                onClick={() => abrirModalFormularioCrear()}
              >
                Nuevo Tipo de Etiqueta
              </Button>
            </Box>

            <ListaDeTiposEtiquetasDataTableUi
              listaTiposEtiquetas={listaTiposEtiquetas}
              setListaTiposEtiquetas={setListaTiposEtiquetas}
              setTiposEtiquetaParaEditar={setTiposEtiquetaParaEditar}
              onOpen={onOpen}
              setIndexParaEditar={setIndexParaEditar}
            />
          </Flex>
        </Box>
      </div>

      <FormularioTiposEtiquetas
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        valoresIniciales={valoresIniciales}
        tiposEtiquetaParaEditar={tiposEtiquetaParaEditar}
        setTiposEtiquetaParaEditar={setTiposEtiquetaParaEditar}
        /* setIndexParaEditar={setIndexParaEditar} */
      /*   listaTiposEtiquetas={listaTiposEtiquetas}
        setListaTiposEtiquetas={setListaTiposEtiquetas} */
      />
    </>
  );
};

export default etiquetas;
