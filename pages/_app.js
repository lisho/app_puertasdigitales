import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    /*  <Provider session={pageProps.session}> */
    
      <ChakraProvider /* theme={theme} */>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    
    /* </Provider> */
  );
}

export default MyApp;
