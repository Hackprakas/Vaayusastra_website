
import { error } from "console"
import NextAuth from "next-auth"
import { Auth0Profile } from "next-auth/providers/auth0"
import Google from "next-auth/providers/google"
 const AuthOptions = {
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
  
  

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }