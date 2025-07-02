import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhdmUtYml0ZS5naG9uaW0ubWFra2FoLnNvbHV0aW9ucy9hcGkvdjEvd2Vic2l0ZS9hdXRoL3NpZ24vaW4iLCJpYXQiOjE3NTExNzQ1MTEsImV4cCI6MTc1MjQ3MDUxMSwibmJmIjoxNzUxMTc0NTExLCJqdGkiOiJRQzF5bEtmdGhzTm9weFpZIiwic3ViIjoiMjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Mkkonb5xfOregTW3e9G-c5SoBu7p8_DTSEeWsSI_CFY";

  const requiredFields = [
    "number_id",
    "name",
    "category",
    "quantity",
    "label",
    "start_date",
    "end_date",
    "status",
  ];

  const missing = requiredFields.filter((field) => !body[field]);

  if (missing.length > 0) {
    return NextResponse.json(
      {
        message: `Missing required fields: ${missing.join(", ")}`,
      },
      { status: 422 }
    );
  }

  try {
    const res = await fetch(
      `https://save-bite.ghonim.makkah.solutions/api/v1/website/tracking-products/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Backend returned error:", data);
      return NextResponse.json(
        {
          status: res.status,
          message: data.message || "Update failed",
          data: data.errors || null,
        },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { message: "Product updated successfully", data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Unexpected error in PUT:", err);
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
}
