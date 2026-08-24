export const SESSION_DURATION_LABEL = "45-minute 1:1 sessions";

export type CurrencyCode = "EGP" | "MYR" | "USD";
export type VideoLocale = "arabic" | "english";
export type MarketKey = "egypt" | "malaysia" | "international";
export type PackageId = "single" | "four" | "eight" | "twelve";

export type PricingPackage = {
  id: PackageId;
  name: string;
  sessions: number;
  price: number;
  recommended?: boolean;
};

export type Market = {
  key: MarketKey;
  label: string;
  currency: CurrencyCode;
  locale: string;
  video: VideoLocale;
  packages: PricingPackage[];
};

const packages = (
  prices: [number, number, number, number],
): PricingPackage[] => [
  { id: "single", name: "Single session", sessions: 1, price: prices[0] },
  { id: "four", name: "4 sessions", sessions: 4, price: prices[1] },
  {
    id: "eight",
    name: "8 sessions",
    sessions: 8,
    price: prices[2],
    recommended: true,
  },
  { id: "twelve", name: "12 sessions", sessions: 12, price: prices[3] },
];

export const marketConfig = {
  EG: {
    key: "egypt",
    label: "Egypt",
    currency: "EGP",
    locale: "ar-EG",
    video: "arabic",
    packages: packages([800, 2800, 5200, 7500]),
  },
  MY: {
    key: "malaysia",
    label: "Malaysia",
    currency: "MYR",
    locale: "en-MY",
    video: "english",
    packages: packages([100, 360, 680, 960]),
  },
  DEFAULT: {
    key: "international",
    label: "International",
    currency: "USD",
    locale: "en",
    video: "english",
    packages: packages([45, 160, 300, 420]),
  },
} as const satisfies Record<string, Market>;

export type CountryMarketCode = keyof typeof marketConfig;

export function resolveMarketCode(
  country: string | null | undefined,
): CountryMarketCode {
  const code = country?.trim().toUpperCase();
  if (code === "EG" || code === "MY") return code;
  return "DEFAULT";
}

export function getMarketByCode(code: CountryMarketCode): Market {
  return marketConfig[code];
}
