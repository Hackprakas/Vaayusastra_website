import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt";


const AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (user) {
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (match) {
            return user;
          } else {
            throw new Error("Invalid password");
            
          }
        } else {
          throw new Error("No user found");
        }
      },
    }),
  ],
  pages: {
    error: "/auth/error",
    signIn: "/signup",
  },
  callbacks: {
    session: ({ session, token }) => {
      return session;
    },

    async signIn({ profile, account, email, credentials }) {
      const list=await prisma.allowlist.findMany();
      const allowedEmails = list.map((item) => item.email);
      if (account?.provider === "google") {
        if(allowedEmails.includes(profile.email)) {
          return true;
        } else {
          throw new Error("You are not authorized to login");
          
        }
      }
      else if (
       allowedEmails.includes(credentials.email)
      ) {
        return true;
      } 
      
      
      else {
        throw new Error("You are not authorized to login");
      }
    },
    async session({ session, user }) {
      return session;
    },
  },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
