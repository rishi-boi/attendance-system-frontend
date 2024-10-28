import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "./actions/user.actions";
import { connectToDatabase } from "./database";
import User from "./database/models/user.model";
import { handleError } from "./utils";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          await connectToDatabase();

          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error("User not found");
          if (!bcrypt.compare(user.password, credentials.password as string)) {
            throw new Error("Invalid Credentails");
          }
          return JSON.parse(JSON.stringify(user));
        } catch (error) {
          handleError(error);
        }
      },
    }),
  ],
});
