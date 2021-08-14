import { Box, Text, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FondoPuerta from "./FondoPuerta";

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const initialHeight = 315 * ratioH;
    const initialWidth = 180 * ratioW;

    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  return (
    <>
      <style jsx>{`
        .card {
          /* object-fit: contain; */
          /* width: 100%; */
          /* max-height: 350px; */
          background-color: #1c1c1c;
          margin: 10px 5px;
          transition: transform 450ms;
          border-radius: 10px;
          margin-bottom: ${(height * 30) / 100 + "px"};
          box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.5);
        }

        .card:hover {
          transform: scale(0.5) rotateZ(30deg);
          box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

          cursor: pointer;
        }
        
      `}</style>

      <Box h={height * 1.3} display="flex" alignItems="flex-end" pt="3" flexDirection="column" justifyContent="center">

        

           
          {/*  <Box w="100%" align="center" display="flex" flex-direction="column">
            <Text
              as="b"
              color="white"
              align="center"
              fontSize="sm"
              textShadow="4px 4px 5px rgba(0,0,0,.8)"
              w="100%"
              display="flex"
            >
              Informe de vida laboral
            </Text>
          </Box>  */}
         

          {/* <Box w="100%">
              <Tag
                as="b"
                color="black"
                align="center"
                fontSize="sm"
                textShadow="4px 4px 5px rgba(0,0,0,.8)" 
                display="flex"
                flexDirection="column"
                w="100%"
                p="2"
                mt="3"
              >
                Seguridad Social
                
              </Tag>
          </Box> */}
        </Box>

        <div className=" card">   
          <FondoPuerta
              height={height + "px"}
              width={width + "px"}
              url={url}
              img={img}
              m="5"
              position="fixed"
          ></FondoPuerta>
        </div>
      
        <Box
          /* display = "flex" flexDirection= "column" */ m="2"
          height={height * 0.6 + "px"}
          width={width * 1.2 + "px"}
          backgroundColor="white"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          mt="300"
          paddingBottom={height*20/100 + "px"} 
          marginBottom= {"-"+height*20/100 + "px"} 
          borderRadius="10px"
          _hover={{  height : height * 0.8 + "px", width : width * 1.6 + "px"  }}
        >    
      </Box>
    </>
  );
};

export default PuertaCard;
