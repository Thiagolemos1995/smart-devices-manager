import { SigninFormData, SignupFormData } from "@/lib/types";

export const authService = {
  signup: async (data: Omit<SignupFormData, "confirmPassword">) => {
    const baseUrl = process.env.AUTH_BASE_URL;

    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    }

    throw new Error(`Failed to signup, ${response.statusText}`);
  },

  signin: async (data: SigninFormData) => {
    const baseUrl = process.env.AUTH_BASE_URL;

    const response = await fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    }

    throw new Error(`Failed to signin, ${response.statusText}`);
  },
};
