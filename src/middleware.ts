import { NextRequest, NextResponse } from "next/server";

type Routes = {
  [key: string]: boolean;
};

// 로그인이 되어있지 않을 때만 접근이 가능한 경로
const pulbicOnlyUrls: Routes = {
  "/": true,
};

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
};

export const config = {
  // /api, /_next/static, _next/image, favicon.ico의 경우 실행하지 않음
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
