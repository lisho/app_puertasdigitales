import { Box, Collapse, Fade, Flex, Heading, Text } from "@chakra-ui/react";

const TarjetaInfoPuerta = ({
  height,
  width,
  isOpenTarjeta,
  children,
}) => {
  return (
    <>
      <Fade in={isOpenTarjeta} animateOpacity >
        {isOpenTarjeta && <Box
          w={width  + "px"}
          height={height + "px"}
          display="flex"
          /* backgroundColor= {process.env.NEXT_PUBLIC_COLOR_FONDO_TARJETA_ALMACEN} */
          color = {process.env.NEXT_PUBLIC_COLOR_FONT_TARJETA_ALMACEN}
          borderRadius={isOpenTarjeta ? "0 10px 10px 0" : "5px"}
          /* border="solid 2px rgba(0, 0, 0, 0.8)" */
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex p="2" direction="column" height={height + "px"}>
            <Heading as="h2" fontSize="lg">
              Titulo de la Tarjeta
            </Heading>
            <Text fontSize="xs" tuncate="true">
              lorem ipsum dolor sit am lorem lorem ipsum dolor sit am lorem
              ipsum dolor sit am lorem ipsum dolor sit am
            </Text>
            <Flex 
              alignSelf= "flex-end"
              height= "inherit"
            >{children}</Flex>
           
          </Flex>
          
        </Box>}
      </Fade>
    </>
  );
};

export default TarjetaInfoPuerta;
