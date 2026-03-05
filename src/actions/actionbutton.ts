"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function submitAction(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const itemId = formData.get("itemId")?.toString();

  if (!itemId) {
    throw new Error("No item ID provided");
  }

  console.log("Submitting RFQ for item:", itemId);

  return;
}
