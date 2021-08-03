import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider /* theme={theme} */>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
