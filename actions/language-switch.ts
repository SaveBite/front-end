"use server";
import { cookies } from "next/headers";

export async function languageSwitch(language: string) {
  cookies().set("lang", language);
}
