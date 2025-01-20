"use server";
import { encrypt } from "@/helpers/helpers";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//important !!

/* trick: the idea behind this counter is to send a different error message everytime for example wrong1 then 
the counter increase to be wrong2 in the next error and so on 
now we capture the error using (includes method ) instead of trying to using (===) for exact error message
*/
let errorCounter = 0;

export async function handleLoginFormWithImage(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return `email cannot be empty or wrong`;

  const inputImg = formData.get("image") as File;

  if (inputImg instanceof File) {
    if (inputImg.name === "undefined") return "file is not found";
  }
  if (!(inputImg instanceof File)) {
    return "file is not found";
  }
  const remember = formData.get("remember") as string;
  const options = {
    method: "POST",

    body: formData,
  };
  //send request
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign/in`,
      options
    );
    const data = await req.json();
    if (data.status === 200 && data.message === "Successfully authenticated.") {
      const { name, email, type, is_verified: isVerified, token } = data.data;
      //session length
      let expires: Date;
      if (typeof remember === "string") {
        expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
      } else {
        expires = new Date(Date.now() + 60 * 60 * 1000);
      }
      //session token
      const session = { token, expires };
      //sessionData
      const sessionData = { name, email, type, isVerified, expires };
      //encrypt session
      const encryptedSession = await encrypt(session);
      //encrypt session data
      const encryptedSessionData = await encrypt(sessionData);

      //set cookies for session token
      cookies().set("session", encryptedSession, {
        expires,
        httpOnly: true,
      });
      //set cookies for session data
      cookies().set("sessionData", encryptedSessionData, {
        expires,
        httpOnly: true,
      });
    } else {
      throw new Error(`user is not found${++errorCounter}`);
    }
  } catch (error: any) {
    console.log(error?.message);
    return error?.message;
  }

  revalidatePath("/");

  redirect("/dashboard");
}

export async function handleLoginFormWithPass(
  _currentState: unknown,
  formData: FormData
) {
  //fetch data
  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return `email cannot be empty or wrong`;

  const password = formData.get("password") as string;
  if (password.length === 0) return "password cannot be empty";

  const remember = formData.get("remember");

  const options = {
    method: "POST",

    body: formData,
  };
  //send request
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign/in`,
      options
    );
    const data = await req.json();
    if (data.status === 200 && data.message === "Successfully authenticated.") {
      const { name, email, type, is_verified: isVerified, token } = data.data;

      let expires: Date;
      if (typeof remember === "string") {
        expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
      } else {
        expires = new Date(Date.now() + 60 * 60 * 1000);
      }
      //session token
      const session = { token, expires };
      //sessionData
      const sessionData = { name, email, type, isVerified, expires };
      //encrypt session
      const encryptedSession = await encrypt(session);
      //encrypt session data
      const encryptedSessionData = await encrypt(sessionData);

      //set cookies for session token
      cookies().set("session", encryptedSession, {
        expires,
        httpOnly: true,
      });
      //set cookies for session data
      cookies().set("sessionData", encryptedSessionData, {
        expires,
        httpOnly: true,
      });
    } else {
      throw new Error(`user is not found${++errorCounter}`);
    }
  } catch (error: any) {
    console.log(error?.message);
    return error?.message;
  }

  revalidatePath("/");
  redirect("/dashboard");
}
export async function handleLostImg(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string;
  if (!emailRegex.test(email)) return "email cannot be empty or wrong";

  const question = formData.get("question") as string;

  if (question === "") return "you must answer the question";

  console.log(email);
  console.log(question);
  const expires = new Date(Date.now() + 5 * 60 * 1000);
  if (email && question)
    cookies().set("intermidate-session", "anas", { expires, httpOnly: true });
  revalidatePath("/");
  if (cookies().get("intermidate-session")) {
    redirect(`/login/recovery-img/verify?email=${encodeURIComponent(email)}`);
  }
}
export async function handleSignupForm(
  _currentState: unknown,
  formData: FormData
) {
  const drink = formData.get("favorite-drink") as string;
  const type = formData.get("account-type") as string;
  console.log(drink);
  console.log(type);

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
      validate: (value: string) => value !== "",

      error: "Question is required",
    },
    {
      name: "password",
      validate: (value: string) => value.trim().length > 0,
      error: "Password is required",
    },
    {
      name: "confirm-password",
      validate: (value: string) => {
        if (
          value.trim().length > 0 &&
          value === (formData.get("password") as string)
        )
          return true;
      },
      error: "Please confirm your password",
    },
    {
      name: "account-type",
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
  // const password = formData.get("password") as string;
  // const confirmPassword = formData.get("confirm-password") as string;
  // if (password !== confirmPassword) {
  //   console.log("oo");
  //   return "Passwords do not match";
  // }

  revalidatePath("/");
  redirect("/");
}
