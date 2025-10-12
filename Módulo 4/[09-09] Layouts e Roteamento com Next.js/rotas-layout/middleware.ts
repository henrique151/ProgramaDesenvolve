import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = true;
    // console.log(request.nextUrl.pathname)
    if (request.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}