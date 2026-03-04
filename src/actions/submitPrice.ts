"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function submitPriceAction(enquiryId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/login");
  }

  // If logged in → redirect to enquiry details
  redirect(`/enquiries/${enquiryId}`);
}
