import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { signOut } from "next-auth/react";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer";

const AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   sendVerificationRequest: async ({
    //     identifier: email,
    //     url,
    //     token,
    //     baseUrl,
    //     provider
    //   }) => {
    //     const { server, from } = provider;
    //     const subject = 'Vaayusastra - Sign in Link';
    //     const text = "Hi there! You can sign in to Vaayusastra Aerospace by the clicking the link below";
    //     const html = `<p>Sign in to Vaayusastra Aerospace using <a href="${url}">this link</a>.</p>`;
    //     const transporter = nodemailer.createTransport(server);
        
    //     await transporter.sendMail({
    //       to: email,
    //       from: from,
    //       subject: subject,
    //       text: text,
    //       html: html,
    //     });
    //   },
    // }),
  ],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    session: ({ session, token }) => {
      return session;
    },

    async signIn({ profile, account, email, credentials }) {
      if (profile.email === "krishnalakshman67@gmail.com" || profile.email === "ramkishore29861@gmail.com") {
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
