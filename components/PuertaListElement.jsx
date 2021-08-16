import { Box, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const PuertaListElement = ({puerta}) => {
    const {titulo, descripcion, proceso, foto, video} = puerta;
    const html = () => {return {__html:proceso}};
   /*  useEffect(async () => {

         const htmlProceso = await html()
         setdescrppcionEnHTML(htmlProceso)
       
    }, []) */

    console.log(html());

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
            <Button m="2">editar</Button>
            <Button>borrar</Button>

            </Td>
        </Tr>
    );
}

export default PuertaListElement;