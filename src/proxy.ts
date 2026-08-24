import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveMarketCode } from "@/config/markets";
import {
  defaultLocaleForCountry,
  isLocale,
  LOCALE_COOKIE,
} from "@/i18n/config";

export function proxy(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    process.env.DEV_COUNTRY ??
    "";
  const market = resolveMarketCode(country);
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : defaultLocaleForCountry(country);

  const headers = new Headers(request.headers);
  headers.set("x-market-country", country || "DEFAULT");
  headers.set("x-market", market);
  headers.set("x-locale", locale);

  return NextResponse.next({
    request: { headers },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
