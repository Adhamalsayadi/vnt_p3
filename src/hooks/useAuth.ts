"use client";
import { useAuthStore } from "@/store/authStore";

// Thin wrapper around authStore — keeps backwards-compatibility for any code
// that still imports useAuth. When real auth is wired up, update authStore only.
export const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  return { user, loading: false };
};
