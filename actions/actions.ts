"use server";

import { revalidatePath } from "next/cache";
export async function handleLoginFormWithImage(formData: FormData) {
  const inputImg = formData.get("inputImg") as File;
  if (inputImg instanceof File) {
    console.log(inputImg.name);
    if (inputImg.name === "undefined") console.log("errrorr");
  }
  revalidatePath("/");
}
export async function handleLoginFormWithPass(formData: FormData) {
  const email = formData.get("email") as string;
  console.log(email);
  const password = formData.get("password") as string;
  console.log(password);
  const remember = formData.get("remember") as string;
  console.log(remember);
  revalidatePath("/");
}
