"use server";

import { createSession } from "@/lib/session";
import {
  FormState,
  SigninFormDataSchema,
  SignupFormDataSchema,
} from "@/lib/types";
import { authService } from "@/services/auth";
import { redirect } from "next/navigation";

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormDataSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    await authService.signup({ name, email, password });
  } catch (error) {
    console.error(error);
    return {
      message: `${error}`,
    };
  }

  return {
    message: "User created successfully",
  };
}

export async function signin(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SigninFormDataSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await authService.signin({ email, password });
    await createSession({
      user: {
        id: response.id,
        name: response.name,
      },
      accessToken: response.accessToken,
    });
  } catch (error: any) {
    console.error(error);
    return {
      message: error.status === 401 ? "Invalid credentials" : error.statusText,
    };
  }

  redirect("/");
}
