import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { ApolloProvider } from "@apollo/client";
import { apolloClient, doPersistCache } from '../apollo/config';
import { ContextProviders } from '../Contexts/ContextProviders';
import { RecoilRoot } from 'recoil';

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
        <ContextProviders>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ContextProviders>
      </ApolloProvider>
    </SessionProvider>
  );
}

// nextAuthからSSRでセッションデータを取得する
MyApp.getInitialProps = async ({ ctx }) => {
  const session = await getSession(ctx);
  return { session: session }
}

export default MyApp;


