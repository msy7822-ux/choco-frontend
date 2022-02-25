import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import axios from "../../../utils/axios";

const nextAuthFunctionResult = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    jwt: {
      // detail -> https://next-auth.js.org/configuration/options
      maxAge: 60 * 60 * 24 * 30,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ account, token }) {
        if (account) {
          token.id_token = account.id_token
        }
        return token;
      },
      async session({ session, token }) {
        session.token = token;
        console.log('session info ', session);
        await axios.post('/users', { params: { session: session } }, {
          headers: {
            Authorization: token?.id_token
          }
        });

        return session;
      },
      redirect() {
        return '/';
      }
    }
});


export default nextAuthFunctionResult;
