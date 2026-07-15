import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIXES = ["/dashboard", "/lesson-", "/before-we-begin", "/finish"];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));

  if (!isProtected) return NextResponse.next();

  const access = req.cookies.get("apptly_access");
  if (access?.value === "granted") {
    return NextResponse.next();
  }

  if (pathname === "/dashboard" && searchParams.get("session_id")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lesson-1/:path*",
    "/lesson-2/:path*",
    "/lesson-3/:path*",
    "/lesson-4/:path*",
    "/lesson-5/:path*",
    "/lesson-6/:path*",
    "/lesson-7/:path*",
    "/lesson-8/:path*",
    "/lesson-9/:path*",
    "/lesson-10/:path*",
    "/lesson-11/:path*",
    "/before-we-begin/:path*",
    "/finish/:path*",
  ],
}; 
