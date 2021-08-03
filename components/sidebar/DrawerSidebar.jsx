import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SidebarItem from "./SidebarItem";
/* import { FiHome, FiTrello, FiUsers } from "react-icons/fi";
 */import SidebarFooter from "./SidebarFooter";

const DrawerSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box
        w="100%"
        height="80px"
        pos="sticky"
        top="0"
        left="0"
        background="linear-gradient(180deg, rgba(255,255,255,1) 12%, rgba(255,255,255,0.6867121848739496) 72%)"
        zIndex="1000"
        boxShadow="2px 2px 8px rgba(0, 0, 0, .8)"
      >
        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Options"
          icon={<HamburgerIcon />}
          top="5"
          left="5"
          alignSelf="left"
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Esta es la cabecera</DrawerHeader>

          <DrawerBody>
         
            <SidebarItem page="/" navSize="large" icon={FiHome } title="Home" onClose={onClose}/>
            <SidebarItem page="/tareas" navSize="large" icon={FiTrello } title="Tareas" onClose={onClose} />
            <SidebarItem page="/usuarios" navSize="large" icon={FiUsers } title="Usuarios" onClose={onClose} />

          </DrawerBody>

          <DrawerFooter>
            <SidebarFooter />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerSidebar;
