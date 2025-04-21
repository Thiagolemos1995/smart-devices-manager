import { deleteSession } from "@/lib/session";
import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  await deleteSession();

  revalidatePath("/");
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}
