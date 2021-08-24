import { useEffect, useState } from "react";
import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FabricaBanner from "../components/FabricaBanner";
import FormularioPuerta from "../components/FormularioPuerta";
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import ListaDePuertasDataTableUi from "../components/ListaDePuertasDataTableUi";


const valoresIniciales = {
    etiqueta: "",
    descripcion: "",
   
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

        crearNuevoElementoEnBd(
            process.env.NEXT_PUBLIC_URL_API+"etiquetas/",
            nuevaEtiqueta,
            setListaEtiquetas,
            listaEtiquetas
          );
      
          onClose();
    }

    const handleEditar = (etiquetaEditada) => {

        editarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+"puertas/"+etiquetaEditada.id, etiquetaEditada, setListaEtiquetas);
    
        setEtiquetaParaEditar(null);
        onClose();
      };
    


    return (
        <div>
            Enter
        </div>
    );
}

export default etiquetas;