import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import "@fontsource/roboto";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Roboto",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})


function MyApp({ Component, pageProps }) {
  return (
    /*  <Provider session={pageProps.session}> */
    
      <ChakraProvider  theme={theme} >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    
    /* </Provider> */
  );
}

export default MyApp;
