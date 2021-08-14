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
  const { usuarioLogueado } = useLoginContext();
  const router = useRouter();

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
            <Text>antonio</Text><ChevronDownIcon />
          </Box>
        </MenuButton>
        <MenuList id="btn-perfil-menulist">
          <MenuItem keyid="menuItem1">Download</MenuItem>
          <MenuItem keyid="menuItem2">Create a Copy</MenuItem>
          <MenuItem keyid="menuItem3">Mark as Draft</MenuItem>
          <MenuItem keyid="menuItem4">Delete</MenuItem>
          <MenuItem keyid="menuItem5">Attend a Workshop</MenuItem>
        </MenuList>
      </Menu> 
    </Box>
   :  <div></div>
  ;
};

export default Navbar;
