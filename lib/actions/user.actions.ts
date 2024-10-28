"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import bcrypt from "bcryptjs";
import { handleError } from "../utils";

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await connectToDatabase();

    const hashPassword = bcrypt.hashSync(password, 8);
    const newUser = User.create({ email, password: hashPassword });

    if (!newUser) throw new Error("User already present");
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    if (!bcrypt.compare(user.password, password)) {
      throw new Error("Invalid Credentails");
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};
