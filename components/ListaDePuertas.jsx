import { Flex, Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import PuertaListElement from "./PuertaListElement";
import { v4 as uuidv4 } from 'uuid';

const valoresIniciales = [
  { titulo: "", descripcion: "", proceso: "", foto: "", video: "" },
];
const ListaDePuertas = ({listaPuertas, setListaPuertas}) => {

  useEffect(() => {
    const lista = traerListaCompleta("http://0.0.0.0:4030/api/puertas");
    lista.then(resultado => setListaPuertas(resultado));
    
  }, []);


  return (
    
    <Flex>

    <Table variant="simple">
        <TableCaption>Puertas digitales creadas</TableCaption>
        <Thead>
            <Tr>
            <Th>Título</Th>
            <Th>Descripción</Th>
            <Th >Proceso</Th>
            <Th >Foto</Th>
            <Th >Vídeo</Th>
            </Tr>
        </Thead>
        <Tbody>
            {listaPuertas.map((puerta) => 
                    
                    <PuertaListElement puerta={puerta} key={uuidv4()} setListaPuertas={setListaPuertas}/>
                )
            } 
        </Tbody>
    </Table>

    </Flex>
    ) 

};

export default ListaDePuertas;
