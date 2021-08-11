import { Box, Text, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FondoPuerta from "./FondoPuerta";
import NoSsr from "./NoSsr";

const PuertaCard = ({ ratioH = 1, ratioW = 1, url, img }) => {
  
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const initialHeight = 350 * ratioH+"px";
    const initialWidth = 200 * ratioW+"px";

    setHeight(initialHeight);
    setWidth(initialWidth);
   
  }, [])


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
                  
        }

        .card:hover {
          transform: scale(1.08);
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

        }

      `}</style>

      <Box  display = "flex" flexDirection= "column" m="2">
        <div className="card">
          
{/* 
          <Box w="100%" align="center">
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
          </Box>
 */}
          <FondoPuerta height={height} width={width} url={url} img={img} m="5">
            
              
            </FondoPuerta>

          
        </div>

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
    </>
  );
};

export default PuertaCard;
