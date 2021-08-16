import { Box, Collapse, Flex, Heading, Text } from "@chakra-ui/react";

const TarjetaInfoPuerta = ({
  height,
  width,
  isOpenTarjeta,
  children,
}) => {
  return (
    <>
      <Collapse in={isOpenTarjeta} animateOpacity>
        <Box
          w={width * 2 + "px"}
          height={height + "px"}
          display="flex"
          backgroundColor="rgba(255,255,255,1)"
          borderRadius={isOpenTarjeta ? "0 10px 10px 0" : "5px"}
          border="solid 2px rgba(0, 0, 0, 0.8)"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex p="2" direction="column">
            <Heading as="h2" fontSize="lg">
              Titulo de la Tarjeta
            </Heading>
            <Text fontSize="xs" tuncate="true">
              lorem ipsum dolor sit am lorem lorem ipsum dolor sit am lorem
              ipsum dolor sit am lorem ipsum dolor sit am
            </Text>
          </Flex>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

export default TarjetaInfoPuerta;
