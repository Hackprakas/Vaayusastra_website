
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
   // Custom sign-in page
      error: '/auth/error', // Custom error page
    },
    callbacks: {
      async signIn({ user, account, profile }) {
        // Custom logic to handle access denied
        if (account.provider === 'google' && profile.email === "krishnalakshman67@gmail.com") {
          return '/papers';
        }
        else{
          return '/auth/error';
        }
        
      },
    },
      
     
      
  }
  
  

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }