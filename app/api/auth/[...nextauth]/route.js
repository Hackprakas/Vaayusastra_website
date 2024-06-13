
import { error } from "console"
import { Sign } from "crypto"
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
      // session: ({ session, token }) => {
      //     if(session.user.email==="krishnalakshman67@gmail.com"){
      //       return "/admin"
      //     }
      //     else{
      //       return "/dashboard"
      //     }   
      // },
      async signIn({profile, account, email, credentials}){
        if (profile.email === "krishnalakshman67@gmail.com") {
          return "/admin"
        }
        else{
         throw new Error("You are not authorized to login")
        }
      }
  },
  
      
     
      
  }
  
  

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }