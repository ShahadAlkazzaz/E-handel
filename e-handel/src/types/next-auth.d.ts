// src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstname: string;
      lastname: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  }
}
