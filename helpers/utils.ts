import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeEmail(email: string) {
  const codedEmail = Array.from(email)
    .map((char, index, array) => {
      const separator = array.indexOf("@");
      if (index > 1 && index < separator) {
        return "*";
      } else {
        return char;
      }
    })
    .join("");

  return codedEmail;
}
