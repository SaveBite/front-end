// app/api/addProduct/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhdmUtYml0ZS5naG9uaW0ubWFra2FoLnNvbHV0aW9ucy9hcGkvdjEvd2Vic2l0ZS9hdXRoL3NpZ24vaW4iLCJpYXQiOjE3NTExNTQxODgsImV4cCI6MTc1MjQ1MDE4OCwibmJmIjoxNzUxMTU0MTg4LCJqdGkiOiJBcWU3WDUyVVhoVWpQWjk3Iiwic3ViIjoiMjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.mFV0A2QR-lkAB3XGyyEaE7qIvwHQGBiGovu01i9-cUM";
    const body = await req.json();

  try {
    const res = await fetch(
      "https://save-bite.ghonim.makkah.solutions/api/v1/website/tracking-products",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "Failed to add product", message: errorText },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json({ message: "Added", data: result });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error", message: String(err) },
      { status: 500 }
    );
  }
}
