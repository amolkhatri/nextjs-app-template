

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      );
}
