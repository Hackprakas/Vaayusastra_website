
import { error } from "console"
import NextAuth from "next-auth"
import { Auth0Profile } from "next-auth/providers/auth0"
import Google from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      Google({
        clientId: process.env.GOOGLE_ID  ,
        clientSecret: process.env.GOOGLE_SECRET  ,
      }),
    ],
    pages: {
      error: '/auth/error', 
    },
    callbacks: {
      session: ({ session, token }) => {
          // Log the session and token objects
          
          console.log('Token:', token.email);
          
          // Modify the session object
          return session;
      },
  },
  
      
     
      
  }
  
  

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }