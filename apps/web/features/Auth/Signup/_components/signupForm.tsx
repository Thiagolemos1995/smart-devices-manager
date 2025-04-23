"use client";

import { signup } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signup, undefined);

  return (
    <form className="flex flex-col gap-4 w-full">
      {state?.message && (
        <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md text-center">
          <p className="text-sm text-gray-700 font-bold">{state.message}</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        {state?.error?.name && (
          <p className="text-red-500 text-sm">{state.error.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="john.doe@example.com"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        {state?.error?.email && (
          <p className="text-red-500 text-sm">{state.error.email.join(", ")}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        {state?.error?.password && (
          <div className="flex flex-col gap-2 text-red-500 text-sm">
            <p>Password must:</p>
            <ul className="list-disc pl-5">
              {state.error.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        {state?.error?.confirmPassword && (
          <p className="text-red-500 text-sm">
            {state.error.confirmPassword.join(", ")}
          </p>
        )}
      </div>

      <Button type="submit" formAction={formAction} aria-disabled={isPending}>
        {isPending ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
}
