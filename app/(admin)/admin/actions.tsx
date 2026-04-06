"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(formData: FormData) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/admin/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Kullanıcı adı veya şifre hatalı" };
    }
    throw error;
  }
}
