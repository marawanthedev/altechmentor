import type { CurrencyCode } from "@/config/markets";

export function formatPrice(amount: number, currency: CurrencyCode): string {
  switch (currency) {
    case "EGP":
      return `${amount.toLocaleString("en-US")} EGP`;
    case "MYR":
      return `RM${amount.toLocaleString("en-US")}`;
    case "USD":
      return `$${amount.toLocaleString("en-US")}`;
  }
}
