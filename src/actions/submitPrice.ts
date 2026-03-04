"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function submitPriceAction(_enquiryId: string) {
  void _enquiryId;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/login");
  }
}
