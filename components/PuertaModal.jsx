import { ChevronRightIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Lorem,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Container,
  Image,
  Tag,
  Wrap,
  WrapItem,
  Link,
  Box,
  Divider,
} from "@chakra-ui/react";

const PuertaModal = ({ setDesapareceCuadroInfo, img, desapareceCuadroInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseModal = async () => {
    onClose();
    await setDesapareceCuadroInfo(true);
  };

  console.log(img);
  return (
    <>
      { !desapareceCuadroInfo &&<Flex
        w="25px"
        h="25px"
        border="solid 1px rgba(0, 0, 0, 0.8)"
        borderRadius="50"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        right="15px"
        bottom="15px"
        boxShadow="2px 2px 3px rgba(0, 0, 0, .6)"
        onClick={() => onOpen()}
      >
        <ChevronRightIcon />
      </Flex>}

      <Modal isOpen={isOpen} size="full" onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent mb="0" mt="0">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container display="flex" flexDirection="column" maxW="container.xl" alignItems="center">
              <Flex id="cabecera"
                maxW="500px"
                justifyContent="center"
                alignItems="center"
                m="5"
                flexDirection="column"
              >
              <Flex>
                <Link
                  href="https://solicitarinformevidalaboral.com/?gclid=CjwKCAjw092IBhAwEiwAxR1lRkIaneiSsntKUDvovK4bzSPBECbvLOBTfESEfLlZCPw2ZE9ZHBGrcRoCR-0QAvD_BwE"
                  isExternal
                >
                  <Image
                    src={img}
                    height="auto"
                    width="auto"
                    display="flex"
                    boxShadow="2px 2px 5px rgba(0,0,0,.5)"
                  />
                  
                </Link>
                <Flex ml="3" alignItems="center">
                <Heading as="h2" fontSize="2xl" color="teal"  align="center" >
                  Obtener certificado de vida lavoral
                </Heading>
         
                </Flex>
                
             
                </Flex>
                <Divider />
                <Flex mt="3">
                  <Flex >
                    <Wrap spacing="0" justify="center">
                      <WrapItem  >
                        <Tag
                          size="sm"
                          key={uuidv4()}
                          variant="solid"
                          m="1"
                          p="2"
                          colorScheme="teal"
                        >
                          Seguridad Social
                        </Tag>
                      </WrapItem>

                      <WrapItem>
                        <Tag
                          size="sm"
                          key={uuidv4()}
                          variant="solid"
                          m="1"
                          p="2"
                          colorScheme="blue"
                        >
                          AUS
                        </Tag>
                      </WrapItem>

                      <WrapItem>
                        <Tag
                          size="sm"
                          key={uuidv4()}
                          variant="solid"
                          m="1"
                          p="2"
                          colorScheme="blue"
                        >
                          RGC
                        </Tag>
                      </WrapItem>

                      <WrapItem>
                        <Tag
                          size="sm"
                          key={uuidv4()}
                          variant="solid"
                          m="1"
                          p="2"
                          colorScheme="orange"
                        >
                          Acceso por clave
                        </Tag>
                      </WrapItem>
                      <WrapItem>
                        <Tag
                          size="sm"
                          key={uuidv4()}
                          variant="solid"
                          m="1"
                          p="2"
                          colorScheme="yellow"
                        >
                          Trámite electrónico
                        </Tag>
                      </WrapItem>
                    </Wrap>
                  </Flex>{" "}
                </Flex>
              </Flex>
             
              Lorem ipsum dolor sit amet, consectet
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleCloseModal()}
            >
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PuertaModal;
