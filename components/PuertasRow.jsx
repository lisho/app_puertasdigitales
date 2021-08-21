import { Box, Heading } from "@chakra-ui/react";
import { useRef } from "react";
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
          /* overflow-y: hidden; */
          overflow-x: scroll;
          padding: 30px;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          /* scroll-snap-type: x proximity; */
          margin-bottom:30px;
          height: 110%;
        }

        .puertas-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Box w="100%" pl="50px" color="white">
        <Heading as="h2" size="xl" mt="3">
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
