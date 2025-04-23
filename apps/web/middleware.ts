import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export default async function middleware(request: NextRequest) {
  const session = await getSession();

  // Check if the user is already logged in and trying to access sign-in or sign-up pages
  if (
    session &&
    (request.nextUrl.pathname === "/auth/signin" ||
      request.nextUrl.pathname === "/auth/signup")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!session) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/auth/signin", "/auth/signup"],
};
