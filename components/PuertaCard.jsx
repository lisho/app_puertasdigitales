import { ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import useSoloUnaTarjetaGrande from "../customHooks/useSoloUnaTarjetaGrande";
import FondoPuerta from "./FondoPuerta";
import PuertaModal from "./PuertaModal";
import TarjetaInfoPuerta from "./TarjetaInfoPuerta";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import ScoreGroup from "./ScoreGroup";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const listaEtiquetas = [
  { etiqueta: "Seguridad Social", color: "teal" },
  { etiqueta: "Acceso por clave", color: "orange" },
  { etiqueta: "AUS", color: "blue" },
  { etiqueta: "Trámite electrónico", color: "yellow" },
  { etiqueta: "RGC", color: "blue" },
];

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const { isOpen: tarjetaFijada, onToggle: onToggleTarjetaFijada } =
    useDisclosure({ defaultIsOpen: true });
  const { isOpen: isOpenTarjeta, onToggle: onToggleTarjeta } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isTarjetaGrande, onToggle: onToggleTarjetaGrande } =
    useDisclosure();
  const [mensajeBoton, setMensajeBoton] = useState("");
  //Toggle de la puerta modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  //CustomHook para hacer que sólo haya una tarjeta resaltada
  const { ref, isSoloUnaTarjetaGrande, setIsSoloUnaTarjetaGrande } =
    useSoloUnaTarjetaGrande(false, isTarjetaGrande);
  const [colorTarjeta, setColorTarjeta] = useState("");

  useEffect(() => {
    /*  const initialHeight = 315 * ratioH;
    const initialWidth = 180 * ratioW; */
    const initialHeight = 249 * ratioH;
    const initialWidth = 229 * ratioW;

    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  
  const handleClick = () => {
    /* onToggleTarjetaFijada(); */
    /* onToggleTarjeta(); */
    isTarjetaGrande ? onOpen() : onToggleTarjetaGrande();
    setIsSoloUnaTarjetaGrande();
  };

  useEffect(() => {
    setColorTarjeta(getRandomColor());
  }, []);

  useEffect(() => {
    isSoloUnaTarjetaGrande && onToggleTarjetaGrande();
  }, [isSoloUnaTarjetaGrande]);

  return (
    <>
      <style jsx>{`
       
        }
      `}</style>

      <Center /* py={6} */ mx={2}
       ref={ref}
      cursor="pointer"
      onClick={() => handleClick()}
      transition="all 450ms ease"
      zIndex={isTarjetaGrande ? "999" : "100"}

      transform = {isTarjetaGrande && "scale(1.1)"}
     
      
     /*  -webkit-box-shadow: 0px 0px 60px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 60px -7px rgba(0,0,0,0.75);
       */
      >

        <Box
          borderBottom = {"15px solid "+colorTarjeta}
          maxW={"85vw"}
          w={"400px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          boxShadow= {isTarjetaGrande && "0px 0px 30px 0px rgba(0,0,0,0.75)"}

        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={
                "http://www.aytoleon.es/es/ciudad/PublishingImages/7-%20Recursos%20Monumentales/8-%20Ayuntamiento%20de%20San%20Marcelo/aytosanmarcelo[1].jpg"
              }
              minW={"100%"}
              w={"auto"}
              h={"100%"}
              layout={"fill"}
            />
          </Box>
          <Stack>
            {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Informe de vida laboral
            </Heading>

            <Text color={"gray.500"} isTruncated={isTarjetaGrande ? false : true} transition="all 450ms ease">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Image
              src={img}
              alt={"Puerta"}
              height={"80px"}
              boxShadow={"3px 3px 5px rgba(0, 0, 0, 0.7)"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>Achim Rolle</Text>
              <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              <Box><ScoreGroup score="3.2" /></Box>
              
            </Stack>
          </Stack>
        </Box>
      </Center>
 
      <PuertaModal
        img={img}
        isOpen={isOpen}
        onClose={onClose}
        onToggleTarjetaFijada={onToggleTarjetaFijada}
        onToggleTarjeta={onToggleTarjeta}
        listaEtiquetas={listaEtiquetas}
      />
    </>
  );
};

export default PuertaCard;
