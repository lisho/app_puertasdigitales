import { Text } from "@chakra-ui/react";

const FabricaBanner = () => {
  return (
    <>
      <style jsx>{`
        .banner {
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 76%,
              rgba(255, 255, 255, 1) 98%
            ),
            url("./imagenes/carpinteria.jpg");

          height: 40vh;
          width: auto;
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 0% 20%;

          /* margin-bottom: -130px; */
        }
      `}</style>

      <div className="banner">
        <Text 
            as="h1" 
            fontSize="4xl" 
            fontWeight="bold" 
            color="white"
            textShadow="3px 3px 8px rgba(0,0,0,1),
                        2px 0 0 #000, 
                        -2px 0 0 #000, 
                        0 2px 0 #000, 
                        0 -2px 0 #000, 
                        1px 1px #000, 
                        -1px -1px 0 #000, 
                        1px -1px 0 #000, 
                        -1px 1px 0 #000"
             
           
        >
          La Fábrica de Puertas
        </Text>
      </div>
    </>
  );
};

export default FabricaBanner;
