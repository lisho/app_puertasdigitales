import { Button } from "@chakra-ui/react";
import GridIcon from "./iconos/GridIcon";
import Link from "next/link";

const VerComoGrid = ({ filtro }) => {
  const handleClick = () => {};

  return (
    <Link
      href={{
        pathname: "/puertasFiltro/etiqueta",
        query: filtro,
      }}
    >
      <Button /* onClick={() => handleClick()} */ w="3" border="1px solid gray">
        <GridIcon />
      </Button>
    </Link>
  );
};

export default VerComoGrid;
