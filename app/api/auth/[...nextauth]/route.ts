import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      Google({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET  as string,
      }),
      // ...add more providers here
    ],
    pages: {
        
        error: '/auth/error', // Error code passed in query string as ?error=
         // New users will be directed here on first sign in (leave the property out if not of interest)
      }
  }
  
  

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }