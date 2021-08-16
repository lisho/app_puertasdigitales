import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import FabricaBanner from "../components/FabricaBanner";
import ListaDePuertas from "../components/ListaDePuertas";

const fabrica = () => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          flex-direction: column;
          min-height: 90%;
          display: flex;
          background-color: rgb(255, 255, 255);
          height: 90vh;
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
              <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                Nueva Puerta
              </Button>
            </Box>
            <ListaDePuertas/>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default fabrica;
