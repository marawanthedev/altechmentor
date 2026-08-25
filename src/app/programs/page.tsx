import { redirect } from "next/navigation";
import { routes } from "@/config/site";

/** Temporarily unpublished. Restore the previous page body to re-enable. */
export default function ProgramsPage() {
  redirect(routes.home);
}
