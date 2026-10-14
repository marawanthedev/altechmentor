import type { Metadata } from "next";
import { Cairo, Cormorant_Garamond, Geist_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { localeMeta } from "@/i18n/config";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";
import { organizationSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export const instant = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    path: "/",
    locale,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const meta = localeMeta[locale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${inter.variable} ${geistMono.variable} ${serif.variable} ${cairo.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favIcon.png" />
      </head>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <LocaleProvider locale={locale} messages={messages}>
          <JsonLd data={organizationSchema(messages)} />
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
