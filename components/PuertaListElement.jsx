import { Box, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";
import BotonDeleteConfirm from "./BotonDeleteConfirm";


const PuertaListElement = ({puerta, setListaPuertas, setPuertaParaEditar, onOpen}) => {
    const {id, titulo, descripcion, proceso, foto, video} = puerta;
    const html = () => {return {__html:proceso}};

    const handleBorrar = () => {

        borrarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+"puertas/"+id, setListaPuertas);

    }

    const handleEditar = (puerta) => {
        console.log(puerta)
        setPuertaParaEditar(puerta);
        onOpen();
    }
    

    return (
        
        <Tr 
            p="25"
            alignItems="center"
            justifyContent="space-around"  
              
        >
            <Td m="2" >
            {titulo}

            </Td>
            <Td m="2">
            {descripcion}

            </Td>
            <Td m="2">
            <div dangerouslySetInnerHTML={html()} />

            </Td>
            <Td m="2">
            {foto}

            </Td>
            <Td m="2">
            {video}

            </Td>
            <Td m="2">
            <Button m="2" onClick={()=> handleEditar(puerta)}>editar</Button>
            {/* <Button onClick={() => handleBorrar()}>borrar</Button> */}
            <BotonDeleteConfirm 
                handleBorrar={handleBorrar}
            />
            </Td>
        </Tr>
    );
}

export default PuertaListElement;