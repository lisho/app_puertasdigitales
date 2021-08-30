import { Button } from "@chakra-ui/react";
import GridIcon from "./iconos/GridIcon"


const VerComoGrid = () => {

    const handleClick = () => {

    }

    return (
        <Button onClick={() => handleClick()} w="3" border="1px solid gray" >
            <GridIcon 
                
            />
           
        </Button> 
    );
}

export default VerComoGrid;