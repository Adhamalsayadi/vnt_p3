"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const pageBtnClasses = "w-[45px] h-[45px] rounded-lg border border-[#ebeef5] bg-white flex items-center justify-center cursor-pointer font-bold transition-all hover:border-primary";
  const activeBtnClasses = "bg-primary border-primary";

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-start p-2.5 gap-4 m-10">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? "page" : undefined}
            className={`${pageBtnClasses} ${isActive ? activeBtnClasses : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        className="fixed bottom-[100px] right-10 bg-primary border-none p-[20px_30px] rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(255,214,10,0.4)] cursor-pointer z-[100] transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,214,10,0.5)]"
      >
        Post an enquiry
      </button>
    </div>
  );
}
