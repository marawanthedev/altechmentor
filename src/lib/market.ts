import { headers } from "next/headers";
import {
  getMarketByCode,
  resolveMarketCode,
  type CountryMarketCode,
  type Market,
} from "@/config/markets";

export async function getRequestCountry(): Promise<string | null> {
  const headerStore = await headers();
  const vercelCountry = headerStore.get("x-vercel-ip-country");
  if (vercelCountry) return vercelCountry;

  const forwarded = headerStore.get("x-market-country");
  if (forwarded) return forwarded;

  const devCountry = process.env.DEV_COUNTRY;
  if (devCountry) return devCountry;

  return null;
}

export async function getMarketCode(): Promise<CountryMarketCode> {
  const country = await getRequestCountry();
  return resolveMarketCode(country);
}

export async function getMarket(): Promise<Market> {
  return getMarketByCode(await getMarketCode());
}
