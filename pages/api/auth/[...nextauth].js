import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import axios from "../../../utils/axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
  ],

  callbacks: {
    redirect() {
      return '/';
    },
    async jwt({ account, token }) {
      if (account) {
        token.id_token = account.id_token
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token;
      console.log('session info ', session);
      // await axios.post(`/users?token=${token?.id_token}`, { params: { session: session } });
      return session;
    }
  }
});

