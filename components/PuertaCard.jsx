import { Box, Text, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FondoPuerta from "./FondoPuerta";

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [muestraInfo, setMuestraInfo] = useState(false);
  const [desapareceCuadroInfo, setDesapareceCuadroInfo] = useState(false);

  useEffect(() => {
    const initialHeight = 315 * ratioH;
    const initialWidth = 180 * ratioW;

    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  useEffect(() => {
    
   
  }, [])

  const handleMouseEnter = () => {
    setMuestraInfo(true);
  };

  const handleMouseLeave = () => {
    setDesapareceCuadroInfo(true);
    setTimeout(() => {
      setMuestraInfo(false);
      setDesapareceCuadroInfo(false);
    }, 500);
  };

  return (
    <>
      <style jsx>{`
        .card {
          /* object-fit: contain; */
          width: 100%;
          height: ${height + "px"};
          /* max-height: 350px; */
          background-color: #1c1c1c;
          /* margin: 10px 2px; */
          transition: transform 450ms ease;
          /* border-radius: 10px; */
          /*  margin-bottom: ${(height * 30) / 100 + "px"}; */
          box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5);
          align-items: center;
          display: flex;
          /* transform-style : preserve-3d;*/
          /* overflow : hidden; */
          border-radius: ${muestraInfo ? "10px" : "5px"};
        }

        .card:hover {
          transform: scale(1.3);

          /*transform: scale(0.5) rotateZ(30deg)  translate(0, -100px)  translate3d(50px, 0%, 10em) translateZ(2px);*/
          /* transform : rotateY(180deg); */
          /*   transform: scale(1.2) /* rotateZ(20deg) */
          /*box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.2);

          cursor: pointer; */
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
          margin: `0 ${height}` /*transform: "scale(1.2)"  rotateZ(20deg) ,*/,
          /* boxShadow: "7px 7px 4px rgba(0, 0, 0, 0.2)", */
          opacity: "1",
          zIndex: "1000",
          cursor: "pointer",
        }}
        /*  overflow = "hidden"
        borderRadius= "10px" */
        onMouseEnter={()=>handleMouseEnter()}
        onMouseLeave={()=>handleMouseLeave()}
      >
        <div className=" card">
          <FondoPuerta
            height={height}
            width={width}
            /*  width={width + "px"} */
            w="100%"
            url={url}
            img={img}
            /* m="5" */
            muestraInfo={muestraInfo}
            desapareceCuadroInfo={desapareceCuadroInfo}
            setDesapareceCuadroInfo={setDesapareceCuadroInfo}
          >
            {/* <Box
              p="2"
              height={height * 0.4 + "px"}
              width={width  * .8 + "px"}
              color="#FFFFFF"
              backgroundColor="rgba(255,255,255,0.2)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition= "transform 450ms ease"
             
              _hover={{
                backgroundColor: "rgba(255,255,255)",
                color: "black",
                transform: "rotate(5deg)",
                boxShadow :"4px 4px 3px rgba(0, 0, 0, 0.5)"
              }}
            >
              {" "}
              probando
            </Box> */}
          </FondoPuerta>
        </div>
      </Box>
    </>
  );
};

export default PuertaCard;
