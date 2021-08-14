import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TarjetaInfoPuerta = ({
  muestraInfo,
  height,
  desapareceCuadroInfo,
  setDesapareceCuadroInfo,
  
}) => {
  return (
    <>
      <div>
        <Box /* w={width*2 + "px"}  */
          height={height + "px"}
          display="flex"
          backgroundColor="rgba(255,255,255,1)"
          borderRadius={muestraInfo ? "0 10px 10px 0" : "5px"}
          border="solid 2px rgba(0, 0, 0, 0.8)"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"

          /* animation= "width 450ms" */
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            {!desapareceCuadroInfo && (
              <>
                <Flex p="2" direction="column">
                  <Heading as="h2" fontSize="lg">
                    Titulo de la Tarjeta
                  </Heading>
                  <Text fontSize="xs" tuncate="true">
                    lorem ipsum dolor sit am lorem lorem ipsum dolor sit am
                    lorem ipsum dolor sit am lorem ipsum dolor sit am
                  </Text>
                </Flex>
              </>
            )}
          </motion.div>
        </Box>
      </div>
    </>
  );
};

export default TarjetaInfoPuerta;
