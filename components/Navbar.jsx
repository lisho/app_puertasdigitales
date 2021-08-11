import { Box, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoginContext } from "../contextos/LoginProvider"


const Navbar = () => {

   
    const {usuarioLogueado} = useLoginContext();
    const router = useRouter();
   
    return (
       
      router.route !== "/" ?
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
        navbar
      </Box>
    : <div></div>
    );
}

export default Navbar;