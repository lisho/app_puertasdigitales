import { Text, Box, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import useDragScroll from "use-drag-scroll";
const PuertasRow = ({ children, titulo }) => {
  const rowRef = useRef(null);

  useDragScroll({
    sliderRef: rowRef,
    momentumVelocity: 0.8,
  });

  return (
    <>
      <style jsx>{`
        .puertas-row {
          display: flex;
          /* adding: 0 10px; */
          overflow-y: hidden;
          overflow-x: scroll;
          padding: 20px;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          scroll-snap-type: x proximity;
          margin: 10px;
        }

        .puertas-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Box w="100%" pl="50px" color="white">
        <Heading as="h2" size="xl">
          {titulo}
        </Heading>
      </Box>

      <div className="puertas-row" ref={rowRef}>
        {children}
      </div>
    </>
  );
};

export default PuertasRow;
