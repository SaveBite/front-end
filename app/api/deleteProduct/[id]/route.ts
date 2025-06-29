import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhdmUtYml0ZS5naG9uaW0ubWFra2FoLnNvbHV0aW9ucy9hcGkvdjEvd2Vic2l0ZS9hdXRoL3NpZ24vaW4iLCJpYXQiOjE3NTExNTQxODgsImV4cCI6MTc1MjQ1MDE4OCwibmJmIjoxNzUxMTU0MTg4LCJqdGkiOiJBcWU3WDUyVVhoVWpQWjk3Iiwic3ViIjoiMjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.mFV0A2QR-lkAB3XGyyEaE7qIvwHQGBiGovu01i9-cUM";

  try {
    const response = await fetch(
      `https://save-bite.ghonim.makkah.solutions/api/v1/website/tracking-products/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Failed to delete:", errText);
      return NextResponse.json(
        { error: "Failed to delete", message: errText },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Server error during deletion:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: String(error) },
      { status: 500 }
    );
  }
}
