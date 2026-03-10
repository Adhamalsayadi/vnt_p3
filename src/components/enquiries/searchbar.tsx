"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { ServiceCategory } from "@/types/service.types";

import { getServiceCategories } from "@/lib/api/services/services";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const currentSearch = params.get("search") || "";
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    getServiceCategories().then((data) => {
      if (mounted) setCategories(data);
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-filter-dropdown]")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const categoryOptions = useMemo(
    () => categories.map((item) => ({ v: item.id, l: item.label })),
    [categories]
  );

  const rawCategory = params.get("category") || "";
  const activeCategory = categories.find(
    (item) =>
      item.id.toLowerCase() === rawCategory.toLowerCase() ||
      item.label.toLowerCase() === rawCategory.toLowerCase()
  );
  const subCategoryOptions = activeCategory
    ? activeCategory.subCategories.map((sub) => ({ v: sub, l: sub }))
    : Array.from(
        new Set(categories.flatMap((item) => item.subCategories))
      ).map((sub) => ({ v: sub, l: sub }));

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    if (key === "category") {
      if (value) {
        newParams.set("source", "dropdown");
      } else {
        newParams.delete("source");
      }
      newParams.delete("search");
      newParams.delete("subCategory");
    } else if (key === "subCategory") {
      if (value) {
        newParams.set("source", "dropdown");
      }
    }

    newParams.delete("page");
    router.push(`?${newParams.toString()}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = String(formData.get("search") || "").trim();

    const newParams = new URLSearchParams(params.toString());

    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    newParams.delete("subCategory");
    newParams.delete("page");

    router.push(`?${newParams.toString()}`);
  };

  const inputSelectClasses =
    "border border-border-light rounded-lg h-[74px] font-inherit text-sm transition-all cursor-pointer focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,212,90,0.1)]";

  const renderDropdown = (
    key: "category" | "subCategory" | "time" | "clientRate" | "vtRate",
    label: string,
    options: Array<{ v: string; l: string }>,
    value: string
  ) => {
    const selectedLabel =
      options.find((opt) => opt.v === value)?.l || label;

    return (
      <div className="relative w-[216px]" data-filter-dropdown>
        <button
          type="button"
          onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
          className={`${inputSelectClasses} bg-white w-full capitalize text-center p-3 flex items-center justify-center relative`}
        >
          <span className="truncate pr-5">{selectedLabel}</span>
          <span className="absolute right-3 text-xs">v</span>
        </button>

        {openDropdown === key && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-border-light rounded-lg shadow-lg z-[200] max-h-60 overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                updateParam(key, "");
                setOpenDropdown(null);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-[#f5f5f5]"
            >
              {label}
            </button>
            {options.map((opt) => (
              <button
                key={opt.v}
                type="button"
                onClick={() => {
                  updateParam(key, opt.v);
                  setOpenDropdown(null);
                }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-[#f5f5f5]"
              >
                {opt.l}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex rounded-[20px] min-h-[120px] gap-4 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-between items-center p-5 w-full gap-3"
      >
        <input
          key={currentSearch}
          id="search-query"
          name="search"
          type="search"
          placeholder="Search"
          aria-label="Search enquiries"
          defaultValue={currentSearch}
          className={`${inputSelectClasses} bg-bg-blue flex-1 min-w-[150px] pl-1.25 text-text-muted placeholder:text-text-muted`}
        />

        {renderDropdown(
          "category",
          "all categories",
          categoryOptions,
          activeCategory?.id || ""
        )}

        {renderDropdown(
          "subCategory",
          "sub categories",
          subCategoryOptions,
          params.get("subCategory") || ""
        )}

        {renderDropdown(
          "time",
          "select time",
          [
            { v: "today", l: "today" },
            { v: "this week", l: "this week" },
            { v: "this month", l: "this month" },
          ],
          params.get("time") || ""
        )}

        {renderDropdown(
          "clientRate",
          "client rate",
          [
            { v: "5", l: "5 stars" },
            { v: "3", l: "3-5" },
            { v: "1", l: "1-3" },
          ],
          params.get("clientRate") || ""
        )}

        {renderDropdown(
          "vtRate",
          "vT rate",
          [
            { v: "5", l: "5 stars" },
            { v: "3", l: "3-5" },
            { v: "1", l: "1-3" },
          ],
          params.get("vtRate") || ""
        )}

        <button
          type="submit"
          className="h-[60px] md:h-[74px] w-full lg:w-[119px] bg-primary text-black border-none rounded-xl font-semibold capitalize transition-all hover:bg-[#f0ca2a] hover:shadow-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}
