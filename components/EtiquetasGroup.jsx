import { Flex, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

const EtiquetasGroup = ({ listaEtiquetas }) => {
    
  return (
    <Flex justifyContent="center">
      <Wrap spacing="0" justify="center">
        {listaEtiquetas.map((etiqueta) => 
          
          <WrapItem  key={uuidv4()}>
            <Tag
              size="sm"
             
              variant="solid"
              m="1"
              p="2"
              colorScheme={etiqueta.color}
            >
              {etiqueta.etiqueta}
            </Tag>
          </WrapItem>
        )}
      </Wrap>
    </Flex>
  );
};

export default EtiquetasGroup;
