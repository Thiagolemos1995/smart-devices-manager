"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import Link from "next/link";
import { signin } from "@/actions/auth";

export default function SigninForm() {
  const [state, formAction, isPending] = useActionState(signin, undefined);

  return (
    <form className="flex flex-col gap-4 w-full">
      {state?.message && (
        <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md text-center">
          <p className="text-sm text-gray-700 font-bold">{state.message}</p>
        </div>
      )}
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
          <p className="text-red-500 text-sm">
            {state.error.password.join(", ")}
          </p>
        )}
        <Link
          href="/auth/forgot-password"
          className="text-sm underline hover:text-gray-500 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" formAction={formAction} aria-disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
