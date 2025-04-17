"use server";

import { SignupFormDataSchema, SignupFormState } from "@/lib/types";
import { authService } from "@/services/auth";

export async function signup(
  state: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
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
