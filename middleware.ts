import { NextResponse, NextRequest } from "next/server";
import { updateCurrentUser } from "./helpers/helpers";

export async function middleware(request: NextRequest) {
  const res = await updateCurrentUser();
  //get pathname//
  const pathname = request.nextUrl.pathname;

  //if there any authenticated user ?
  const isAuthUser = request.cookies.get("session");
  //if otp session is opened
  const otpIsOpened = request.cookies.get("intermidate-session");

  //protectedRoutes
  const protectedRoutes = ["/dashboard", "/settings-board"];

  //auth routes
  const authRoutes = [
    "/signup",
    "/login",
    "/login/with-img",
    "/login/with-password",
    "/login/recover-img",
  ];

  // is auth Route ?
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // is protected Route ?
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  //the user is trying to get /login but not /login/with-img for exmaple it must return false
  const loginWaySelected =
    pathname.startsWith("/login") && pathname !== "/login";

  //if authenticated user go to authentication route
  if (isAuthUser && isAuthRoute) {
    //create proper response with language
    const response = NextResponse.redirect(new URL("/dashboard", request.url));

    return response;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // if the logit way is not specified go to /login/with-img
  if (pathname.startsWith("/login")) {
    if (!isAuthUser && isAuthRoute && !loginWaySelected) {
      //create proper response with language
      const response = NextResponse.redirect(
        new URL("/login/with-img", request.url)
      );

      return response;
    }

    if (!isAuthUser && isAuthRoute && loginWaySelected) {
      //create proper response with language
      const response = res;

      return response;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // if (otpIsOpened) {
  //   return res;
  // } else {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //is otp route in login ?
  const isDynamicSignupRoute =
    pathname.startsWith("/signup/") && pathname !== "/signup/";

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
