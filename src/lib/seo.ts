import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  defaultDescription,
  defaultKeywords,
} from "@/config/site";
import { localeMeta, type Locale } from "@/i18n/config";

type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  locale?: Locale;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
  locale = "en",
}: PageMetaInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const meta = localeMeta[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    authors: [{ name: "Marwan Mostafa", url: SITE_URL }],
    creator: "Marwan Mostafa",
    publisher: SITE_NAME,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    icons: {
      icon: "/favIcon.png",
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
