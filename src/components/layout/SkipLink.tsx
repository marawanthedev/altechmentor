"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function SkipLink() {
  const { messages } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-cedar-deep"
    >
      {messages.ui.skipToContent}
    </a>
  );
}
