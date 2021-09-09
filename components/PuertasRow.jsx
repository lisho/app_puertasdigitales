import { Box, Divider, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import useDragScroll from "use-drag-scroll";
import VerComoGrid from "./VerComoGrid";

const PuertasRow = ({ children, titulo, filtro }) => {
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
          transition: all 450ms ease; 
          /* overflow-y: visible; */
          overflow-x: scroll;
          padding: 55px 50px;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          croll-snap-type: x proximity; 
          /*  margin-bottom:30px; */
          /* height: 110%; */
        }

        .puertas-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Box
        w="100%"
       /*  pl="50px"
        pr="50px" */
        pl="3%"
        pr="3%"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h2" size="xl" mt="3">
          {titulo}
        </Heading>
        <VerComoGrid filtro={filtro} />
      </Box>
      <Box pl="3%"
        pr="3%">
        <Divider />
      </Box>

      <div className="puertas-row" ref={rowRef}>
        {children}
      </div>
    </>
  );
};

export default PuertasRow;
