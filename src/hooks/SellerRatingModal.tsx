"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SellerRating } from "@/types/enquiries";

interface SellerRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  sellerName?: string;
  rating?: SellerRating | null;
  isLoading?: boolean;
}

export default function SellerRatingModal({
  isOpen,
  onClose,
  rating,
  isLoading = false,
}: SellerRatingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/35 backdrop-blur-[2px] flex items-center justify-center z-[4000] p-4 md:p-8 font-outfit">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="bg-[#E9EDF7] w-full max-w-[900px] rounded-lg px-6 md:px-8 pt-6 md:pt-7 pb-6 md:pb-8 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-[#2f2f2f] hover:text-black transition-colors"
              aria-label="Back"
            >
              <svg
                className="w-12 h-12 md:w-14 md:h-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-3 mb-4">
              <svg
                className="w-7 h-7 md:w-9 md:h-9 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <h2 className="text-[36px] md:text-[44px] font-medium text-black tracking-tight leading-none">
                Seller rating
              </h2>
            </div>

            <div className="bg-[#D3D3D3] rounded-[12px] p-2 md:p-3">
              <div className="grid grid-cols-[1fr_1fr] gap-2">
                <div className="pr-2 md:pr-3 border-r-[2px] border-black">
                  {isLoading && (
                    <div className="h-5 md:h-6 text-[12px] md:text-[13px] text-[#2B2B2B]">
                      Loading...
                    </div>
                  )}
                  {!isLoading &&
                    rating?.criteria.map((item, index) => (
                      <div
                        key={item.code}
                        className="h-5 md:h-6 flex items-center text-[#2B2B2B]"
                      >
                        <p className="text-[12px] md:text-[13px] leading-none">
                          {index + 1}. {item.label}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="pl-2 md:pl-3">
                  {isLoading && (
                    <div className="h-5 md:h-6 text-[12px] md:text-[13px] text-[#2B2B2B]">
                      Loading...
                    </div>
                  )}
                  {!isLoading &&
                    rating?.criteria.map((item) => (
                      <div
                        key={item.code}
                        className="h-5 md:h-6 flex items-center"
                      >
                        <div className="w-full flex items-center gap-1.5 md:gap-2">
                          <div className="h-1 rounded-full bg-transparent flex-1">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(item.score / 5) * 100}%` }}
                              className="h-1 rounded-full bg-[#D39B27]"
                            />
                          </div>
                          <span className="text-[12px] md:text-[13px] leading-none w-7 text-[#2B2B2B]">
                            0-5
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
