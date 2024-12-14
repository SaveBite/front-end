import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //get pathname
  const pathname = request.nextUrl.pathname;

  //if there any authenticated user ?
  const isAuthUser = request.cookies.get("session");
  //if otp session is opened
  const otpIsOpened = request.cookies.get("intermidate-session");

  //protectedRoutes
  const protectedRoutes = ["/dashboard"];

  //auth routes
  const authRoutes = ["/signup", "/login"];

  // is auth Route ?
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // is protected Route ?
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  //is otp route ?
  const isDynamicLoginRoute =
    pathname.startsWith("/login/") && pathname !== "/login/";

  if (isAuthUser && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (!isAuthUser && isAuthRoute && !isDynamicLoginRoute) {
    return NextResponse.next();
  } else if (!isAuthUser && isAuthRoute && isDynamicLoginRoute) {
    if (otpIsOpened) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else if (isAuthUser && isProtectedRoute) {
    return NextResponse.next();
  } else if (!isAuthUser && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
