"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function handleLoginFormWithImage(
  _currentState: unknown,
  formData: FormData
) {
  const inputImg = formData.get("inputImg") as File;
  if (inputImg instanceof File) {
    if (inputImg.name === "undefined") return "file is not found";
  }

  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return "email cannot empty or wrong";

  console.log(email);
  if (inputImg instanceof File) {
    console.log(inputImg.name);
  }

  revalidatePath("/");

  redirect("/");
}
export async function handleLoginFormWithPass(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return "email cannot empty or wrong";

  const password = formData.get("password") as string;
  if (password.length === 0) return "password cannot be empty";

  const remember = formData.get("remember") as string;
  console.log(email);
  console.log(password);
  console.log(remember);
  revalidatePath("/");

  redirect("/");
}
