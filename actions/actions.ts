"use server";

import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function handleLoginFormWithImage(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return "email cannot empty or wrong";

  console.log(email);

  const inputImg = formData.get("inputImg") as File;
  if (inputImg instanceof File) {
    if (inputImg.name === "undefined") return "file is not found";
  }

  if (inputImg instanceof File) {
    console.log(inputImg.name);
  }

  revalidatePath("/");

  redirect("/");
}
export async function handleSignupForm(
  _currentState: unknown,
  formData: FormData
) {
  const fields = [
    {
      name: "username",
      validate: (value: string) => value.trim().length > 0,
      error: "Username is required",
    },
    {
      name: "email",
      validate: (value: string) => emailRegex.test(value),
      error: "Invalid email format",
    },
    {
      name: "Phone-Number",
      validate: (value: string) => /^\+\d{1,4}\d{7,}$/.test(value),
      error: "Phone number is required",
    },
    {
      name: "favorite-drink",
      validate: (value: string) => value.trim().length > 0,
      error: "Question is required",
    },
    {
      name: "password",
      validate: (value: string) => value.trim().length > 0,
      error: "Password is required",
    },
    {
      name: "confirm-password",
      validate: (value: string) => value.trim().length > 0,
      error: "Please confirm your password",
    },
    {
      name: "Account-type",
      validate: (value: string) => value.trim().length > 0,
      error: "Account type is required",
    },
  ];

  for (const field of fields) {
    const value = formData.get(field.name) as string;
    if (!field.validate(value)) {
      return field.error; 
  }
  const image = formData.get("image") as File;
  if (image instanceof File) {
    if (image.name === "undefined") return "File is not found";
  }

  if (image instanceof File) {
    console.log(image.name);
  }
  }
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;
  if (password !== confirmPassword) {
    console.log("oo")
    return "Passwords do not match" ;
  }

  revalidatePath("/");
  redirect("/");
}
