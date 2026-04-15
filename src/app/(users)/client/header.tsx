"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  LogOut,
  Menu,
  ShieldCheck,
  User,
  UserCircle,
  X,
} from "lucide-react";

import Button from "@/components/ui/button";
import { NAV_LINKS } from "@/config/public";
import { useAuthStore } from "@/store/authStore";
import { removeAuthCookie } from "@/actions/auth";
import { ConfirmationModal } from "@/components/shared/Modals";

interface HeaderProps {
  role: "Client" | "Supplier" | "Marketer";
}

export default function Header({ role }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dashboardHref =
    role === "Supplier"
      ? "/supplier"
      : role === "Marketer"
      ? "/marketer"
      : "/client";

  const profileHref = `${dashboardHref}/profile`;
  const securityHref = `${dashboardHref}/change-password`;

  const pageTitle = useMemo(() => {
    if (!pathname) {
      return "Dashboard";
    }

    const cleanPath = pathname.split("?")[0];

    if (cleanPath === dashboardHref) {
      return "Dashboard";
    }

    const segments = cleanPath.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    if (!lastSegment) {
      return "Dashboard";
    }

    return lastSegment
      .replace(/[\[\]]/g, "")
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }, [dashboardHref, pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setUser(null);
    await removeAuthCookie();
    router.push("/");
  };

  const avatarLetter = user?.name?.charAt(0).toUpperCase() ?? null;

  return (
    <header className="relative z-40 border-b border-[#EAECF0] bg-white">
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6 xl:px-8">
        <div className="flex items-center gap-6 xl:gap-10">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/VT.png"
              alt="Vendor & Tender"
              width={52}
              height={42}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 pb-1 text-sm font-medium capitalize transition-colors ${
                    isActive
                      ? "border-primary text-[#101828]"
                      : "border-transparent text-[#667085] hover:text-[#101828]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {role === "Client" && (
            <Link href="/client/enquiries/upload" className="hidden sm:block">
              <Button className="h-10 px-4 text-sm">Post enquiry</Button>
            </Link>
          )}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-2 py-1.5 shadow-sm transition-colors hover:border-primary/50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-black">
                {avatarLetter ?? <User size={18} className="text-[#344054]" />}
              </div>
              <ChevronDown
                size={16}
                className="hidden text-[#667085] sm:block"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[#EAECF0] bg-white py-2 shadow-[0_16px_40px_rgba(16,24,40,0.14)]">
                <div className="border-b border-[#F2F4F7] px-4 py-3">
                  <p className="truncate text-sm font-semibold text-[#101828]">
                    {user?.name ?? `${role} account`}
                  </p>
                  <p className="truncate text-xs text-[#667085]">
                    {user?.email ?? ""}
                  </p>
                </div>

                <Link
                  href={dashboardHref}
                  className="block px-4 py-2.5 text-sm text-[#344054] transition-colors hover:bg-[#F9FAFB]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Dashboard
                </Link>

                <Link
                  href={profileHref}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#344054] transition-colors hover:bg-[#F9FAFB]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <UserCircle size={16} className="text-[#667085]" />
                  Edit profile
                </Link>

                <Link
                  href={securityHref}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#344054] transition-colors hover:bg-[#F9FAFB]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <ShieldCheck size={16} className="text-[#667085]" />
                  Change password
                </Link>

                <div className="my-2 border-t border-[#F2F4F7]"></div>

                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-[#B42318] transition-colors hover:bg-red-50"
                  onClick={() => setIsLogoutModalOpen(true)}
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-[#EAECF0] p-2 text-[#344054] lg:hidden"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#F2F4F7] bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium capitalize ${
                  pathname === link.href
                    ? "bg-[#FFF7D6] text-[#101828]"
                    : "text-[#667085]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {role === "Client" && (
              <Link
                href="/client/enquiries/upload"
                className="pt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="h-10 w-full text-sm">Post enquiry</Button>
              </Link>
            )}

            <Link
              href={dashboardHref}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#344054]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              href={profileHref}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#344054]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Edit profile
            </Link>

            <button
              type="button"
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#B42318]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              Sign out
            </button>
          </nav>
        </div>
      )}

      <div className="border-t border-[#F4E6A6] bg-[linear-gradient(90deg,#fffdf2_0%,#f7e6a2_50%,#fffdf2_100%)] px-4 py-5 text-center md:px-6">
        <h1 className="text-[28px] font-semibold text-[#101828]">
          {pageTitle}
        </h1>
      </div>

      <ConfirmationModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleSignOut}
        title="Confirm logout"
        message="Are you sure you want to log out?"
        confirmText="Logout"
        variant="primary"
      />
    </header>
  );
}
