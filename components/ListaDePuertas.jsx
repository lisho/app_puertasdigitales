import { Flex, Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import PuertaListElement from "./PuertaListElement";

const valoresIniciales = [
  { titulo: "", descripcion: "", proceso: "", foto: "", video: "" },
];
const ListaDePuertas = () => {
  const [listaPuertas, setListaPuertas] = useState([]);

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
                    
                    <PuertaListElement puerta={puerta} />
                )
            } 
        </Tbody>
    </Table>

    </Flex>
    ) 

};

export default ListaDePuertas;
