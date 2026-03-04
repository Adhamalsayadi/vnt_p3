"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const [searchValue, setSearchValue] = useState(params.get("search") || "");

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    router.push(`?${newParams.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newParams = new URLSearchParams(params.toString());

    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`?${newParams.toString()}`);
  };

  const inputSelectClasses = "border border-border-light rounded-lg h-[74px] font-inherit text-sm transition-all cursor-pointer focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,212,90,0.1)]";

  return (
    <div className="flex rounded-[20px] min-h-[120px] gap-4 p-4">
      <form onSubmit={handleSubmit} className="flex justify-between items-center p-5 w-full gap-3">
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={`${inputSelectClasses} bg-bg-blue flex-1 min-w-[150px] pl-1.25 text-text-muted placeholder:text-text-muted`}
        />

        {[
          { key: "category", label: "all categories", options: ["Services", "Rental", "Products", "Man power"] },
          { key: "subCategory", label: "sub categories", options: ["sub 1", "sub 2", "sub 3", "sub 4"] },
          { key: "time", label: "select time", options: ["today", "this weak", "this month"] },
          { key: "clientRate", label: "client rate", options: [{ v: "5", l: "5 stars" }, { v: "3", l: "3-5" }, { v: "1", l: "1-3" }] },
          { key: "vtRate", label: "vT rate", options: [{ v: "5", l: "5 stars" }, { v: "3", l: "3-5" }, { v: "1", l: "1-3" }] },
        ].map((select) => (
          <select
            key={select.key}
            onChange={(e) => updateParam(select.key, e.target.value)}
            className={`${inputSelectClasses} w-[216px] capitalize text-center p-3`}
          >
            <option value="">{select.label}</option>
            {select.options.map((opt) => (
              typeof opt === "string" 
                ? <option key={opt} value={opt}>{opt}</option>
                : <option key={opt.v} value={opt.v}>{opt.l}</option>
            ))}
          </select>
        ))}

        <button
          type="submit"
          className="h-[74px] w-[119px] bg-primary text-black border-none rounded-xl font-semibold capitalize transition-all hover:bg-[#f0ca2a] hover:shadow-[0_4px_12px_rgba(243,212,90,0.3)] focus:outline-2 focus:outline-primary focus:outline-offset-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
