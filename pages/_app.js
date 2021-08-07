import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Provider } from "next-auth/client";
import { LoginProvider } from "../contextos/LoginProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider /* theme={theme} */>
        <DefaultLayout>
          <LoginProvider>
            <Component {...pageProps} />
          </LoginProvider>
        </DefaultLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
