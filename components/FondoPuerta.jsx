import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PuertaModal from "./PuertaModal";
import TarjetaInfoPuerta from "./TarjetaInfoPuerta";

const FondoPuerta = ({
  children,
  height,
  width,
  url,
  img,
  muestraInfo,
  desapareceCuadroInfo,
  setDesapareceCuadroInfo,
}) => {
  const [unicoId] = useState(uuidv4());
  return (
    <>
      <style jsx>{`
        .carddiv {
          height: ${height + "px"};
          width: ${width + "px"};
          max-width: 80vw;
          background-image: url("${img}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          justify-content: center;
          /*  transition: transform 450ms; */
          border-radius: ${muestraInfo ? "10px 0 0 10px" : "5px"};
          border: solid 2px rgba(0, 0, 0, 0.8);
           {
            /*  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); */
          }
        }

        .carddiv:hover {
        }
      `}</style>

      <div className="carddiv">{children}</div>
      {muestraInfo && (
        <>
          <motion.div
            animate={
              desapareceCuadroInfo ? { width: 0 } : { width: width * 2 + "px" }
            }
            transition={{ duration: 0.5 }}
          >
            <TarjetaInfoPuerta
              muestraInfo={muestraInfo}
              height={height}
              desapareceCuadroInfo={desapareceCuadroInfo}
              setDesapareceCuadroInfo={setDesapareceCuadroInfo}
            />
          </motion.div>
          {!desapareceCuadroInfo && (
        <PuertaModal
          setDesapareceCuadroInfo={setDesapareceCuadroInfo}
          img={img}
          desapareceCuadroInfo={desapareceCuadroInfo}
        />
      )}
        </>
      )}
      
    </>
  );
};

export default FondoPuerta;
