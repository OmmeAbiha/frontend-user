import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    let isLogin = req.cookies.get("TOKEN") ? true : false;
    let loginRoute = [
        "/home",
    ];
    let logoutRoute = [
        "/login",
    ];

    // if (!req.nextUrl.pathname.startsWith("/_next") && !req.nextUrl.pathname.startsWith("/favicon")) {}

    //redirect to right place
    if (!isLogin && loginRoute.some((item) => req.nextUrl.pathname.startsWith(item))) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isLogin && logoutRoute.some((item) => req.nextUrl.pathname.startsWith(item))) {
        return NextResponse.redirect(new URL("/home", req.url));
    }
}
