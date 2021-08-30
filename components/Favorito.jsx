import { StarIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import AnotacionInformal from './AnotacionInformal';

const Favorito = ({puerta}) => {

    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        

    }, [])

    const handleClick = () => {
        setFavorito(!favorito);
    }

    return (
        <Flex alignItems="center" fontSize="1rem">
        <Button onClick={() => handleClick()} w="3" border="1px solid gray" background={favorito ? "teal" : "gray.200"} m="0 5px">
            <StarIcon 
                color= {favorito ? "yellow.400" : "gray.500"}
            />
           
        </Button> 
        <AnotacionInformal >
            {favorito ?  "Añadido a mi lista de puertas" : "Añadir a mis lista de puertas"}
        </AnotacionInformal>
        

        </Flex>

    );
}

export default Favorito;