import { useEffect, useState } from "react";
import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FabricaBanner from "../components/FabricaBanner";
import FormularioPuerta from "../components/FormularioPuerta";
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import ListaDePuertasDataTableUi from "../components/ListaDePuertasDataTableUi";

const valoresIniciales = {
  titulo: "",
  descripcion: "",
  proceso: "",
  foto: "",
  video: "",
};

const fabrica = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal del formulario de fabrica de puertas
  const [formValues, setFormValues] = useState(valoresIniciales);
  const [puertaParaEditar, setPuertaParaEditar] = useState(null); // Se llena cuando hay una tarea para editar
  const [listaPuertas, setListaPuertas] = useState([]);

  const abrirModalFormularioCrear = () => {
    setFormValues(valoresIniciales);
    onOpen();
  };

  const handleAdd = (puerta) => {
    const nuevaPuerta = {
      ...puerta,
      
    };

    console.log(nuevaPuerta);
    console.log(puerta)
    
    crearNuevoElementoEnBd(
      process.env.NEXT_PUBLIC_URL_API+"puertas/",
      nuevaPuerta,
      setListaPuertas,
      listaPuertas
    );

    onClose();
  };

  const handleEditar = (puertaEditada) => {

    editarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+"puertas/"+puertaEditada.id, puertaEditada, setListaPuertas);

    setPuertaParaEditar(null);
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
              Lista de puertas digitales creadas
            </Text>
            <Box align="center">
              <Button 
                  leftIcon={<AddIcon />} 
                  colorScheme="teal" 
                  variant="solid"
                  onClick={() => abrirModalFormularioCrear()}
              >
                Nueva Puerta
              </Button>
            </Box>
            {/* <ListaDePuertas 
              listaPuertas ={listaPuertas}
              setListaPuertas ={setListaPuertas}
              setPuertaParaEditar ={setPuertaParaEditar}
              onOpen={onOpen}
            /> */}

            <ListaDePuertasDataTableUi 
                listaPuertas ={listaPuertas}
                setListaPuertas ={setListaPuertas}
                setPuertaParaEditar ={setPuertaParaEditar}
                onOpen={onOpen}
            />
          </Flex>
        </Box>
      </div>
      
      <FormularioPuerta
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        valoresIniciales={valoresIniciales}
        puertaParaEditar={puertaParaEditar}
        setPuertaParaEditar={setPuertaParaEditar}
        listaPuertas ={listaPuertas}
        setListaPuertas ={setListaPuertas}
      />
    </>
  );
};

export default fabrica;
