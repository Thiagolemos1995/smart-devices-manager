"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Session = {
  user: {
    id: string;
    name: string;
  };
  // accessToken: string;
  // refreshToken: string;
};

const JWT_SECRET = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(JWT_SECRET);

export async function createSession(payload: Session) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(encodedKey);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookie = (await cookies()).get("session")?.value;

  if (!cookie) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as Session;
  } catch (error) {
    console.error("Failed to verify session", error);
    redirect("/auth/signin");
  }
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
