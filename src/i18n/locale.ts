import { cache } from "react";
import { cookies, headers } from "next/headers";
import {
  defaultLocaleForCountry,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/i18n/config";

export const getLocale = cache(async (): Promise<Locale> => {
  const headerStore = await headers();
  const fromHeader = headerStore.get("x-locale");
  if (isLocale(fromHeader)) return fromHeader;

  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  return defaultLocaleForCountry(headerStore.get("x-market-country"));
});
