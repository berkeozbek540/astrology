import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
});

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
