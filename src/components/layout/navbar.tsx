"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LocationEdit } from "lucide-react";
import CountrySelector from "@/components/shared/CountryModal";

const NavbarLinks = [
  { name: "home", href: "/" },
  { name: "enquires", href: "/enquiries" },
  { name: "advertisments", href: "/advertisments" },
  { name: "services", href: "/services" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Navbar() {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (typeof window === "undefined") return "Saudi Arabia";
    return localStorage.getItem("country") || "Saudi Arabia";
  });

  const [isCountryModalOpen, setIsCountryModalOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("country");
  });
  const pathname = usePathname();

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    localStorage.setItem("country", country);
    setIsCountryModalOpen(false);
  };
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex justify-between items-center p-4 ]">
        <ul className="flex items-center gap-8 w-[496px] p-3 ">
          <li className=" mr-2 ">
            <Link href={"/"} className="  flex items-center w-24 h-20">
              <Image src="/VT.png" alt="Logo" width={66} height={54} />
            </Link>
          </li>
          {NavbarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`capitalize font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b-4 border-primary pb-2"
                      : "text-text hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-end gap-4 ml-[300px]">
          <Link href={"/login"}>
            <button className="bg-primary text-black font-semibold rounded-custom w-20 h-12.5 capitalize hover:-translate-y-0.5 transition-all">
              Post
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="bg-transparent text-text font-semibold w-20 h-12.5 capitalize hover:text-primary transition-all">
              log in
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="bg-primary text-black font-semibold rounded-custom w-28 h-12.5 capitalize hover:-translate-y-0.5 transition-all">
              sign up
            </button>
          </Link>
          <div className="bg-primary w-[68.98px] h-12.5 rounded-custom flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5">
            <button
              className="flex items-center justify-center w-full h-full"
              onClick={() => setIsCountryModalOpen(true)}
            >
              <LocationEdit size={24} />
            </button>
          </div>
        </div>
      </div>
      <CountrySelector
        isOpen={isCountryModalOpen}
        onClose={() => setIsCountryModalOpen(false)}
        selectedCountry={selectedCountry}
        onSelect={handleCountrySelect}
      />
    </div>
  );
}
