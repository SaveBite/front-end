export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");
  console.log(req.headers);

  // 2️⃣ Parse the request body (contains OTP data)
  const body = await req.json();

  console.log(body);
  console.log(authHeader);

  const response = await fetch(`${process.env.DATABASE_URL}/otp/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader || "", // Forward Authorization token
    },
    body: JSON.stringify(body), // Forward the request body
  });
  return response;
}
