import { NextRequest, NextResponse } from "next/server";

// Honor a saved locale preference (or first-time Accept-Language) on the
// homepage. We only intercept "/" — every other path is left alone so the
// user's explicit URL choice always wins.
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== "/") return NextResponse.next();

  const cookie = req.cookies.get("NEXT_LOCALE")?.value;

  // 1. Explicit cookie always wins.
  if (cookie === "es") {
    return NextResponse.redirect(new URL("/es", req.url));
  }
  if (cookie === "en") {
    return NextResponse.next();
  }

  // 2. First visit: fall back to Accept-Language. Spanish-speaking
  //    browsers go to /es; everyone else stays on EN.
  const accept = req.headers.get("accept-language") ?? "";
  const prefersSpanish = accept
    .split(",")
    .some((tag) => tag.trim().toLowerCase().startsWith("es"));

  if (prefersSpanish) {
    return NextResponse.redirect(new URL("/es", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
