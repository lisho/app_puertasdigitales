import { Heading, Text, Box, Button, Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box m="15px">
      <Heading as="h3" size="sm">Bienvenid@ al</Heading>
      <Heading as="h1" color="darkslategray">Almacén de Puertas Digitales</Heading>
      <Text maxWidth="600" mb="5">
        Un proyecto diseñado para falicitar el uso de los recursos de internet a
        todas las personas, pensando especialmente en aquellas que tienen
        más dificultades.
      </Text>
      <Button mr="3"> Accede sin identificarte</Button> 
      
      <Button >Identificate</Button>
      <Box mt="3">
      o <Link color="orange.500"> Registrate </Link> para poder guardar tus favoritos.
      </Box>
    </Box >
  );
}
