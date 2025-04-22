import { updateSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { accessToken, refreshToken } = body;

  if (!accessToken || !refreshToken)
    return NextResponse.json({ error: "Invalid access" }, { status: 401 });

  await updateSession({ accessToken, refreshToken });

  return NextResponse.json({ message: "Session updated" }, { status: 200 });
}
