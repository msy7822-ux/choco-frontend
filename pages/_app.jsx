import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps, session }) {
  console.log('ログイン情報', session);
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', session?.token?.id_token);
  }
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const session = await getSession(ctx);
  return { session: session }
}

export default MyApp;


