import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, useDisclosure, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSoloUnaTarjetaGrande from "../customHooks/useSoloUnaTarjetaGrande";
import useTamVentana from "../customHooks/useTamVentana";
import FondoPuerta from "./FondoPuerta";
import PuertaModal from "./PuertaModal";
import TarjetaInfoPuerta from "./TarjetaInfoPuerta";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const { isOpen: tarjetaFijada, onToggle: onToggleTarjetaFijada } = useDisclosure({defaultIsOpen:true});
  const { isOpen: isOpenTarjeta, onToggle: onToggleTarjeta } = useDisclosure({defaultIsOpen:true});
  const { isOpen: isTarjetaGrande, onToggle: onToggleTarjetaGrande } = useDisclosure();
  const [mensajeBoton, setMensajeBoton] = useState("");
  //Toggle de la puerta modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  //CustomHook para hacer que sólo haya una tarjeta resaltada
  const { ref, isSoloUnaTarjetaGrande, setIsSoloUnaTarjetaGrande } = useSoloUnaTarjetaGrande(false, isTarjetaGrande);
  const [colorTarjeta, setColorTarjeta] = useState("");
 
  useEffect(() => {
   /*  const initialHeight = 315 * ratioH;
    const initialWidth = 180 * ratioW; */
    const initialHeight = 249 * ratioH;
    const initialWidth = 229 * ratioW;

    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  const handleMouseEnter = () => {
    /* !tarjetaFijada && onToggleTarjeta(); */
  };

  const handleMouseLeave = () => {
   /*  !tarjetaFijada && onToggleTarjeta(); */
  };

  const handleClick = () => {
    /* onToggleTarjetaFijada(); */
    /* onToggleTarjeta(); */
    isTarjetaGrande ? onOpen() : onToggleTarjetaGrande();
    setIsSoloUnaTarjetaGrande();
   
  }

  useEffect(() => {
    setColorTarjeta(getRandomColor())
  }, []);

  useEffect(() => {
    isSoloUnaTarjetaGrande && onToggleTarjetaGrande();
  
  }, [isSoloUnaTarjetaGrande])
  

  return (
    <>
      <style jsx>{`
        .card {
    
          /* height: ${height + "px"}; */
          
          background-color:${colorTarjeta};
          transition: transform 450ms ease;
          box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5);
          align-items: center;
          display: flex;
          border-radius: 10px /* ${isTarjetaGrande ? "10px" : "5px"} */;
          border: 1px solid #1c1c1c;

        }

        .card:hover {
          
        } 
      `}</style>

      <Box
        ref={ref}
       /*  h={height} */
       /*  w="100%" */
        maxW="70vw"
      
        display="flex"
        alignItems="flex-end"
        pt="5"
        ml="12"
        flexDirection="column"
        justifyContent="center"
        transition="all 450ms ease"
        zIndex={isTarjetaGrande ? "1000" : "100"}
        opacity=".8"
        /* margin = {isTarjetaGrande && `0 ${height}` }   */
        
        opacity= {isTarjetaGrande && "1"}
        transform = {isTarjetaGrande && "scale(1.3)"}
        cursor= "pointer"
        onClick={() => handleClick()} 
      >
        <div className=" card">
          <FondoPuerta
            height={height}
            width={width}
            img={img}
            isOpenTarjeta={isOpenTarjeta}
            tarjetaFijada={tarjetaFijada}
            isTarjetaGrande={isTarjetaGrande}
          />

          <TarjetaInfoPuerta
            height={height}
            width={width}
            isOpenTarjeta={isOpenTarjeta}
          >

            {isTarjetaGrande && 
            <Text 
              color="white"
              textAlign="center"
              fontSize="xs"
              as="p"
              alignSelf = "flex-end"
            >
              Toca para entrar...<ChevronRightIcon /></Text>}
          
          </TarjetaInfoPuerta>
        </div>
      </Box>
      <PuertaModal 
        img={img}
        isOpen={isOpen}
        onClose={onClose}
        onToggleTarjetaFijada={onToggleTarjetaFijada}
        onToggleTarjeta={onToggleTarjeta}
      />
    </>
  );
};

export default PuertaCard;
