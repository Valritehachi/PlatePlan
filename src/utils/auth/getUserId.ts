"use server";
import { currentUser } from "@clerk/nextjs/server";

export const getUserId = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("No user found");
  }
  return user.id;
};
