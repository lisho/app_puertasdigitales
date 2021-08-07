import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
const BotonAcceso = ({ children, page, registrado }) => {
 

  const handleClick = () => {
      return;
  }

  return (
    <Link href={page}  _hover={{ textDecor: "none"}}>
      <a onClick={handleClick} >
        <Button
          p={3}
          borderRadius={8}
         
        >
          <Flex>
            <Text display="flex">
              {children}
            </Text>
          </Flex>
        </Button>{" "}
      </a>
    </Link>
  );
};

export default BotonAcceso;
