"use client";

import Image from "next/image";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] backdrop-blur-[2px]">
      <div className="bg-white w-[90%] max-w-[550px] rounded-[20px] p-10 relative text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        <button
          className="absolute top-5 left-5 bg-primary text-white border-none w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-110"
          onClick={onClose}
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

        <h2 className="text-[32px] font-bold mb-10 text-[#333]">
          Change country
        </h2>

        <div className="flex justify-center gap-[30px] mb-10">
          {[
            { name: "Saudi Arabia", flag: "/Saudi_flag.png" },
            { name: "Bahrain", flag: "/bahrain_flag.png" },
          ].map((country) => {
            const isActive = selectedCountry === country.name;
            return (
              <div
                key={country.name}
                className={`cursor-pointer transition-all duration-200 p-2.5 rounded-xl border border-transparent hover:-translate-y-1.25 ${
                  isActive
                    ? "bg-[#ebeef5] shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
                    : ""
                }`}
                onClick={() => onSelect(country.name)}
              >
                <div className="w-[120px] h-80px rounded-lg overflow-hidden mb-3.75 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={120}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[#333] m-0">{country.name}</p>
              </div>
            );
          })}
        </div>

        <button
          className="bg-primary border-none p-[12px_60px] rounded-lg text-lg font-bold cursor-pointer transition-opacity hover:opacity-90"
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CountrySelector;
