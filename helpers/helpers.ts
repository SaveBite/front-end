//encrypt

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const usedKey = new TextEncoder().encode(process.env.ENCRYPT_KEY);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(usedKey);
}

//decrypt

// get Current user
export async function currentUser() {
  //   const session = cookies().get("session")?.value;
  //   if (!session) return null;
  const encryptedUserData = cookies().get("sessionData")!;
  const userData = decrypt(encryptedUserData?.value);
  return await userData;
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, usedKey, {
    algorithms: ["HS256"],
  });
  return payload;
}

// export async function updateCurrentUser() {
//   const sessionData = cookies().get("sessionData");
//   if (sessionData) const decrypted = await decrypt(sessionData.value);
//   console.log(sessionData);
// }
