import { NextResponse, NextRequest } from "next/server";
import { updateCurrentUser } from "./helpers/helpers";

export async function middleware(request: NextRequest) {
  const res = await updateCurrentUser();
  // const res = NextResponse.next();
  //get pathname//
  const pathname = request.nextUrl.pathname;

  //if there any authenticated user ?
  const isAuthUser = request.cookies.get("session");
  //if otp session is opened
  const otpIsOpened = request.cookies.get("intermidate-session");

  //protectedRoutes
  const protectedRoutes = ["/dashboard", "/settings-board"];

  //auth routes
  const authRoutes = ["/signup", "/login"];

  // is auth Route ?
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // is protected Route ?
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  //is otp route in login ?
  const isDynamicLoginRoute =
    pathname.startsWith("/login/") && pathname !== "/login/";
  //is otp route in login ?
  const isDynamicSignupRoute =
    pathname.startsWith("/signup/") && pathname !== "/signup/";

  if (isAuthUser && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (pathname.startsWith("/login")) {
    if (!isAuthUser && isAuthRoute && !isDynamicLoginRoute) {
      return res;
    }
    if (!isAuthUser && isAuthRoute && isDynamicLoginRoute) {
      if (otpIsOpened) {
        return res;
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }
  if (pathname.startsWith("/signup")) {
    if (!isAuthUser && isAuthRoute && !isDynamicSignupRoute) {
      return res;
    }
    if (!isAuthUser && isAuthRoute && isDynamicSignupRoute) {
      if (otpIsOpened) {
        return res;
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }
  if (isAuthUser && isProtectedRoute) {
    return res;
  } else if (!isAuthUser && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return res;
}

export const config = {
  matcher: "/:path*",
};
