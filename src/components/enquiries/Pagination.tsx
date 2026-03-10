"use client";
import { submitAction } from "@/actions/actionbutton";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const pageBtnClasses =
    "w-[45px] h-[45px] rounded-lg border border-[#ebeef5] bg-white flex items-center justify-center cursor-pointer font-bold transition-all hover:border-primary";
  const activeBtnClasses = "bg-primary border-primary";

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-6 m-4 md:m-10">
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              className={`${pageBtnClasses} ${
                isActive ? activeBtnClasses : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <form action={submitAction}>
        <button
          type="submit"
          className="fixed bottom-[20px] md:bottom-[100px] right-4 md:right-10 bg-primary border-none p-[15px_20px] md:p-[20px_30px] rounded-2xl font-bold text-sm md:text-lg shadow-lg z-[100]"
        >
          Post an enquiry
        </button>
      </form>
    </div>
  );
}
