import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect any unmatched route to the homepage.
  redirect("/");
}
