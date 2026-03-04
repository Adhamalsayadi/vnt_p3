"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { COUNTRY_OPTIONS } from "@/config/public";
import Button from "@/components/ui/button";

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: string;
  onSelect: (country: string) => void;
}

const CountrySelector = ({
  isOpen,
  onClose,
  selectedCountry,
  onSelect,
}: CountrySelectorProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="country-modal-title"
        className="bg-white w-[90%] max-w-[550px] rounded-[20px] p-10 relative text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-5 left-5 bg-primary text-white border-none w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-110"
          onClick={onClose}
          aria-label="Close country selector"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 id="country-modal-title" className="text-[32px] font-bold mb-10 text-[#333]">
          Change country
        </h2>

        <div className="flex justify-center gap-[30px] mb-10">
          {COUNTRY_OPTIONS.map((country) => {
            const isActive = selectedCountry === country.name;
            return (
              <button
                type="button"
                key={country.name}
                className={`cursor-pointer transition-all duration-200 p-2.5 rounded-xl border border-transparent hover:-translate-y-1.25 ${
                  isActive
                    ? "bg-[#ebeef5] shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
                    : ""
                }`}
                onClick={() => onSelect(country.name)}
                aria-pressed={isActive}
              >
                <div className="w-[120px] h-[80px] rounded-lg overflow-hidden mb-3.75 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={120}
                    height={80}
                    sizes="120px"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[#333] m-0">{country.name}</p>
              </button>
            );
          })}
        </div>

        <Button className="w-[160px]" onClick={onClose}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default CountrySelector;
