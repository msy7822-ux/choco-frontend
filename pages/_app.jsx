import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql?apollo=true`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token && token !== 'undefined' ? token : "",
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps, session }) {
  console.log('ログイン情報', session);
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', session?.token?.id_token);
  }
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const session = await getSession(ctx);
  return { session: session }
}

export default MyApp;


