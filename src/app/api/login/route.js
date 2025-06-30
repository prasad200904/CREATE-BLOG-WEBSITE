import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("token", "authenticated", {
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
    });
    return response;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
