import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoginContext } from "../contextos/LoginProvider";

const Navbar = () => {
  const { usuarioLogueado, logOut } = useLoginContext();
  const router = useRouter();
  console.log(router)
  return router.route !== "/" ? 
    <Box
      w="100%"
      height="80px"
      pos="fixed"
      top="0"
      left="0"
      background="linear-gradient(180deg, rgba(255,255,255,1) 12%, rgba(255,255,255,0.6867121848739496) 72%)"
      boxShadow="2px 2px 8px rgba(0, 0, 0, .8)"
      /* background="transparent" */
      zIndex="1000"
      justifyContent="space-between"
      display="flex"
      alignItems="center"
    >
      {/* <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Options"
          icon={<HamburgerIcon />}
          top="5"
          left="5"
          alignSelf="left"
        /> */}
      <Text display="flex" m="10">
        LOGO
      </Text>

      <Menu id="btn-perfil">
        <MenuButton m="10" >
          <Box display="flex" alignItems="center"> 
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <Text>
              {usuarioLogueado.username}
              {usuarioLogueado.rol==="admin" && " (Admin)"}
            </Text>
            <ChevronDownIcon />
          </Box>
        </MenuButton>
        <MenuList id="btn-perfil-menulist">
          <MenuItem keyid="menuItem1" key="menuItem1">Conoce el proyecto</MenuItem>
          <MenuItem keyid="menuItem2" key="menuItem2">Mis Favoritos</MenuItem>
          
          {usuarioLogueado.rol == "admin" 
            &&  
            <>

              <MenuItem 
                  keyid="menuItem4" key="menuItem4"
                  onClick={()=> router.route ==="/fabrica" ? router.push('/puertas') : router.push('/fabrica')}
                  >
                    {router.route ==="/fabrica" ? "Almacén de puertas" : "Fábrica de puertas"}
                </MenuItem>
                <MenuItem 
                  keyid="menuItem3" key="menuItem3"
                  onClick={()=> router.route ==="/etiquetas" ? router.push('/puertas') : router.push('/etiquetas')}
                  >
                    {router.route ==="/etiquetas" ? "Almacén de puertas" : "Gestión de Etiquetas"}
                </MenuItem>
                <MenuItem 
                  keyid="menuItem5" key="menuItem5"
                  onClick={()=> router.route ==="/etiquetas" ? router.push('/puertas') : router.push('/etiquetatipos')}
                  >
                    {router.route ==="/etiquetatipos" ? "Almacén de puertas" : "Gestión de Tipos de Etiquetas"}
                </MenuItem>
            </>
          }

          <MenuItem keyid="menuItem5" keyid="menuItem5" onClick={() =>logOut()}>Cerrar Sesion </MenuItem>
        </MenuList>
      </Menu> 
    </Box>
   :  <div></div>
  ;
};

export default Navbar;
