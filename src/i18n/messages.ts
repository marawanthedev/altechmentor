import { cache } from "react";
import { ar } from "@/i18n/ar";
import { en } from "@/i18n/en";
import { getLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/config";

export type Messages = typeof en;

const dictionaries: Record<Locale, Messages> = {
  en,
  ar: ar as unknown as Messages,
};

export const getMessages = cache(async (): Promise<Messages> => {
  const locale = await getLocale();
  return dictionaries[locale];
});

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}
