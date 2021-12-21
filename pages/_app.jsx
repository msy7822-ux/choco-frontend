import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { apolloClient, doPersistCache } from '../apollo/config/apollo_config';

const theme = createTheme();

function MyApp({ Component, pageProps, session }) {
  console.log('ログイン情報', session);
  // キャッシュを永続化する関数を実行
  doPersistCache();

  if (typeof window !== 'undefined') {
    localStorage.setItem('token', session?.token?.id_token);
  }
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const session = await getSession(ctx);
  return { session: session }
}

export default MyApp;


