export async function GET() {
  console.log("📡 Received request to /api/getProducts");

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhdmUtYml0ZS5naG9uaW0ubWFra2FoLnNvbHV0aW9ucy9hcGkvdjEvd2Vic2l0ZS9hdXRoL3NpZ24vaW4iLCJpYXQiOjE3NTExNzQ1MTEsImV4cCI6MTc1MjQ3MDUxMSwibmJmIjoxNzUxMTc0NTExLCJqdGkiOiJRQzF5bEtmdGhzTm9weFpZIiwic3ViIjoiMjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Mkkonb5xfOregTW3e9G-c5SoBu7p8_DTSEeWsSI_CFY";

  if (!token) {
    return new Response(
      JSON.stringify({ error: "Authentication failed", message: "Missing token" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const response = await fetch(
      "https://save-bite.ghonim.makkah.solutions/api/v1/website/tracking-products",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ External API error ${response.status}:`, errorText);
      return new Response(
        JSON.stringify({ error: "External API error", status: response.status, message: errorText }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    console.log("✅ Products fetched:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    });
  } catch (err) {
    console.error("❌ Unexpected error:", err);
  
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
  
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: errorMessage,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
