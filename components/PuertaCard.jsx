import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, useDisclosure, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FondoPuerta from "./FondoPuerta";
import PuertaModal from "./PuertaModal";
import TarjetaInfoPuerta from "./TarjetaInfoPuerta";

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const { isOpen: tarjetaFijada, onToggle: onToggleTarjetaFijada } = useDisclosure(false);
  const { isOpen: isOpenTarjeta, onToggle: onToggleTarjeta } = useDisclosure(false);
  const [mensajeBoton, setMensajeBoton] = useState("");
  //Toggle de la puerta modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const initialHeight = 315 * ratioH;
    const initialWidth = 180 * ratioW;

    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  const handleMouseEnter = () => {
    /* !tarjetaFijada && onToggleTarjeta(); */
  };

  const handleMouseLeave = () => {
   /*  !tarjetaFijada && onToggleTarjeta(); */
  };

  const handleClick = async () => {
    onToggleTarjetaFijada();
    onToggleTarjeta();
   
    await console.log(tarjetaFijada)
  }

  return (
    <>
      <style jsx>{`
        .card {
          width: 100%;
          height: ${height + "px"};
          background-color: #1c1c1c;
          transition: transform 450ms ease;
          box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5);
          align-items: center;
          display: flex;
          border-radius: ${isOpenTarjeta ? "10px" : "5px"};
        }

        .card:hover {
          transform: scale(1.3);
        }
      `}</style>

      <Box
        h={height}
        w="100%"
        display="flex"
        alignItems="flex-end"
        pt="5"
        ml="2"
        flexDirection="column"
        justifyContent="center"
        transition="all 450ms ease"
        zIndex="100"
        opacity=".8"
        _hover={{
          margin: `0 ${height}`,
          opacity: "1",
          zIndex: "1000",
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleClick()}
      >
        <div className=" card">
          <FondoPuerta
            height={height}
            width={width}
            img={img}
            isOpenTarjeta={isOpenTarjeta}
            tarjetaFijada={tarjetaFijada}
          />

          <TarjetaInfoPuerta
            height={height}
            width={width}
            isOpenTarjeta={isOpenTarjeta}
          >
            <Flex
              w="auto"
              minW="25px"
              h="25px"
              pl="1"
              border="solid 1px rgba(0, 0, 0, 0.8)"
              borderRadius="50"
              alignContent="center"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              right="15px"
              bottom="15px"
              boxShadow="2px 2px 3px rgba(0, 0, 0, .6)"
              onClick={() => onOpen()}
              _hover={{backgroundColor:"grey", color:"white"}}
              onMouseEnter={() => setMensajeBoton("Entrar")}
              onMouseLeave={() => setMensajeBoton("")}
            >
              {mensajeBoton}<ChevronRightIcon />
            </Flex>
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
