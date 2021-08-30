import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  Heading,
  Container,
  Image,
  Tag,
  Wrap,
  WrapItem,
  Link,
  Divider,
  Button,
  Text,
  AspectRatio,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Stack,
} from "@chakra-ui/react";
import Favorito from "./Favorito";
import AnotacionInformal from "./AnotacionInformal";
import FlechaEntrar from "./iconos/FlechaEntrarIcon";
import EtiquetasGroup from "./EtiquetasGroup";
import ScoreGroup from "./ScoreGroup";

const PuertaModal = ({
  img,
  isOpen,
  onClose,
  onToggleTarjetaFijada,
  onToggleTarjeta,
  listaEtiquetas
}) => {
  const handleCloseModal = async () => {
    /* onToggleTarjetaFijada();
    onToggleTarjeta(); */
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} size="full" onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent
          mb="0"
          mt="0"
          /*   backgroundImage= "linear-gradient(180deg, rgba(255,255,255,0) 15%, rgba(255,255,255,1) 29%),url('http://www.aytoleon.es/es/ciudad/PublishingImages/7-%20Recursos%20Monumentales/8-%20Ayuntamiento%20de%20San%20Marcelo/aytosanmarcelo[1].jpg')"
            backgroundPosition="top"
            backgroundAttachment="fixed"
            backgroundRepeat="no-repeat"
            backgroundSize="contain" */
        >
          <ModalHeader
            minHeight="30vh"
            backgroundImage="linear-gradient(180deg, rgba(255,255,255,0) 15%, rgba(255,255,255,1) 29%),url('http://www.aytoleon.es/es/ciudad/PublishingImages/7-%20Recursos%20Monumentales/8-%20Ayuntamiento%20de%20San%20Marcelo/aytosanmarcelo[1].jpg')"
            backgroundPosition="top"
            backgroundAttachment="fixed"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            display="flex"
            justifyContent="center"
          >
            <Flex
              justify="center"
              alignSelf="flex-end"
              alignContent="center"
              pb="3"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading
                as="h2"
                fontSize="2.5em"
                fontWeight="extrabold"
                color="teal"
                align="center"
                textShadow="4px 4px 5px rgba(255,255,255,0.8)"
                display="flex"
              >
                Informe de vida laboral
              </Heading>
              <Flex justify="center">
                <Favorito />
              </Flex>
              <Flex justify="center"><ScoreGroup score="3.2" /></Flex>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container
              /* display="flex" */
              flexDirection="column"
              maxW="container.lg"
              alignItems="center"
              justify="center"
            >
              <Grid
                maxW="90vw"
                templateRows="repeat(4, auto)"
                templateColumns="repeat(5, auto)"
                gap={4}
                justify="center"
              >
                <GridItem
                  colSpan={[5, 6, 6]}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                >
                  <Flex justifyContent="center">
                    {/* <Wrap spacing="0" justify="center">
                      <WrapItem>
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
                    </Wrap> */}

            <Stack /* mt={6} */ direction={"row"} spacing={4} align={"center"}>
            <EtiquetasGroup listaEtiquetas={listaEtiquetas} />
          </Stack>
                  </Flex>{" "}
                </GridItem>

                <GridItem colSpan={[1, 2, 2]}>
                  <Link
                    href="https://solicitarinformevidalaboral.com/?gclid=CjwKCAjw092IBhAwEiwAxR1lRkIaneiSsntKUDvovK4bzSPBECbvLOBTfESEfLlZCPw2ZE9ZHBGrcRoCR-0QAvD_BwE"
                    isExternal
                    m="5"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    flexDirection="column"
                  >
                    <Image
                      src={img}
                      maxW="150px"
                      minW="80px"
                      /*  height="auto" */
                      height="auto"
                      width="auto"
                      display="flex"
                    />
                    <Flex>
                      <AnotacionInformal>Entrar</AnotacionInformal>
                      <FlechaEntrar transform="rotate(160deg)" />
                    </Flex>
                  </Link>
                </GridItem>
                <GridItem
                  colSpan={[6, 4, 4]}
                  bg="papayawhip"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  justifyItems="center"
                  alignContent="center"
                >
                  <Flex m="5">
                    <Text fontSize="lg" align="center" as="i">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={[6, 3, 3]} p="25px">
                  <Heading as="h3">Instrucciones</Heading>
                  <Text fontSize="md" as="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor
                    magna eget est lorem ipsum dolor sit. Volutpat odio
                    facilisis mauris sit amet massa. Commodo odio aenean sed
                    adipiscing diam donec adipiscing tristique. Mi eget mauris
                    pharetra et. Non tellus orci ac auctor augue. Elit at
                    imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu
                    felis. Egestas integer eget aliquet nibh praesent. In hac
                    habitasse platea dictumst quisque sagittis purus. Pulvinar
                    elementum integer enim neque volutpat ac. Senectus et netus
                    et malesuada. Nunc pulvinar sapien et ligula ullamcorper
                    malesuada proin. Neque convallis a cras semper auctor.
                    Libero id faucibus nisl tincidunt eget. Leo a diam
                    sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                    euismod lacinia. In tellus integer feugiat scelerisque.
                    Feugiat in fermentum posuere urna nec tincidunt praesent.
                    Porttitor rhoncus dolor purus non enim praesent elementum
                    facilisis. Nisi scelerisque eu ultrices vitae auctor eu
                    augue ut lectus. Ipsum faucibus vitae aliquet nec
                    ullamcorper sit amet risus. Et malesuada fames ac turpis
                    egestas sed. Sit amet nisl suscipit adipiscing bibendum est
                    ultricies. Arcu ac tortor dignissim convallis aenean et
                    tortor at. Pretium viverra suspendisse potenti nullam ac
                    tortor vitae purus. Eros donec ac odio tempor orci dapibus
                    ultrices. Elementum nibh tellus molestie nunc. Et magnis dis
                    parturient montes nascetur. Est placerat in egestas erat
                    imperdiet. Consequat interdum varius sit amet mattis
                    vulputate enim. Sit amet nulla facilisi morbi tempus. Nulla
                    facilisi cras fermentum odio eu. Etiam erat velit
                    scelerisque in dictum non consectetur a erat. Enim nulla
                    aliquet porttitor lacus luctus accumsan tortor posuere. Ut
                    sem nulla pharetra diam. Fames ac turpis egestas maecenas.
                    Bibendum neque egestas congue quisque egestas diam. Laoreet
                    id donec ultrices tincidunt arcu non sodales neque. Eget
                    felis eget nunc lobortis mattis aliquam faucibus purus.
                    Faucibus interdum posuere lorem ipsum dolor sit.
                  </Text>
                </GridItem>
                <GridItem colSpan={[6, 3, 3]}>
                  <AspectRatio minW="30vw" maxW="560px" ratio={1} mt="15">
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                      allowFullScreen
                    />
                  </AspectRatio>
                </GridItem>
              </Grid>
              {/*    </Flex> */}
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleCloseModal()}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PuertaModal;
