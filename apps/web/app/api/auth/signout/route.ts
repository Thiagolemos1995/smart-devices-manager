import { deleteSession } from "@/lib/session";
import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { authFetch } from "@/lib/authFetch";

export async function GET(request: NextRequest) {
  const response = await authFetch(`${process.env.AUTH_BASE_URL}/signout`, {
    method: "POST",
  });

  if (response.ok) {
    await deleteSession();
  }

  revalidatePath("/", "layout");
  revalidatePath("/", "page");
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}
