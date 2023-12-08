import prisma from "@/utils/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import NextAuth, { getServerSession } from "next-auth"
import Google from "next-auth/providers/google"


 const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions);
export {handler as GET,handler as POST};


export const getAuthSession = ()=> getServerSession(authOptions);


