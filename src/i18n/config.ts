export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = "locale";

export const localeMeta: Record<
  Locale,
  { htmlLang: string; dir: "ltr" | "rtl"; ogLocale: string; label: string }
> = {
  en: {
    htmlLang: "en",
    dir: "ltr",
    ogLocale: "en_US",
    label: "English",
  },
  ar: {
    htmlLang: "ar-EG",
    dir: "rtl",
    ogLocale: "ar_EG",
    label: "العربية",
  },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ar";
}

export function defaultLocaleForCountry(
  country: string | null | undefined,
): Locale {
  const code = country?.trim().toUpperCase();
  return code === "EG" ? "ar" : "en";
}
