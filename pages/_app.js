import { ChakraProvider } from "@chakra-ui/react";
import { instagramTheme } from "../theme";

// CONTEXT
import {UserProvider} from "../context/user";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={instagramTheme}>
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
