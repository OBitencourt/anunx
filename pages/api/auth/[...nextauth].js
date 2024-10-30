import axios from "axios";
import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

  providers: [
    CredentialsProvider({
        name: 'Credentials',


        async authorize(credentials) {
            const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials)

            const user = res.data

            if (user) {

                return user
            } else {
                throw '/auth/signin?i=1';
            }

        }

        
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },

  database: process.env.MONGODB_URI,
}
export default NextAuth(authOptions)