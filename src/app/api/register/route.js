import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const { first_name, last_name, email, password } = payload;

  if (!first_name) {
    return NextResponse.json({ message: "First name is required" });
  } else if (!last_name) {
    return NextResponse.json({ message: "Last name is required" });
  } else if (!email) {
    return NextResponse.json({ message: "Email is required" });
  } else if (!password) {
    return NextResponse.json({ message: "Password is required" });
  }

  try {
    const response = await fetch(
      "https://forms-io.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (response.ok) {
        console.log(result);
      return NextResponse.json({ message: result, status: 201 });
    } else {
        console.log(result);
      return NextResponse.json({ message: result, status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
