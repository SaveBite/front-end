import { NextResponse, NextRequest } from "next/server";
import { updateCurrentUser } from "./helpers/helpers";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const res = await updateCurrentUser();

  //get pathname//
  const pathname = request.nextUrl.pathname;

  //is the use authenticated
  const isAuthUser = request.cookies.get("session");
  //is it allowed to go to otp ?
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
  const isAuthRoute = authRoutes.some((route) => pathname.includes(route));

  // is protected Route ?
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );
  //the user is trying to get /login but not /login/with-img for exmaple it must return false
  const loginWaySelected = pathname.includes(`/login`) && pathname !== `/login`;

  if (isAuthUser && isAuthRoute) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // if the logit way is not specified go to /login/with-img
  if (pathname.startsWith(`/login`)) {
    if (!isAuthUser && isAuthRoute && !loginWaySelected) {
      return NextResponse.redirect(new URL(`/login/with-img`, request.url));
    }
    if (!isAuthUser && isAuthRoute && loginWaySelected) {
      return res;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // signup access
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
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
