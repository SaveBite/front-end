"use server";

export async function handleLoginForm(formData: FormData) {
  const inputImg = formData.get("inputImg") as File;
  if (inputImg instanceof File) {
    console.log(inputImg.name);
    if (inputImg.name === "undefined") console.log("errrorr");
  }
}
