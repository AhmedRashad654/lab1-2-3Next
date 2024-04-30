import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    }),
  ],
};

export default NextAuth(authOptions);
