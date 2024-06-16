import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { signOut } from "next-auth/react";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import nodemailer from "nodemailer";
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
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    session: ({ session, token }) => {
      return session;
    },

    async signIn({ profile, account, email, credentials }) {
      if (account?.provider === "google") {
        if(profile.email === "krishnalakshman67@gmail.com" || profile.email === "ramkishore29861@gmail.com") {
          return true;
        } else {
          signOut();
          throw new Error("You are not authorized to login");
        }
      }
      else if (
        credentials.email === "krishnalakshman67@gmail.com" ||
        credentials.email === "ramkishore29861@gmail.com"
      ) {
        return true;
      } else {
        signOut();
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
