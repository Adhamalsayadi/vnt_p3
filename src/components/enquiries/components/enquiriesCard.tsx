"use client";
import { submitPriceAction } from "@/actions/submitPrice";
import Image from "next/image";
import { Enquiry } from "@/types/enquiries";

interface Props {
  enquiries?: Enquiry[];
}

export default function EnquiriesCard({ enquiries = [] }: Props) {
  if (enquiries.length === 0) {
    return <p className="p-5 font-medium text-text-muted">No results found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
      {enquiries.slice(0, 6).map((item) => (
        <div
          key={item.id}
          className="bg-[#f5f5f5]  w-[316.03px] flex flex-col items-center justify-center rounded-custom p-[20px_20px] text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
        >
          <h2 className="font-semibold text-[22px] text-dark mb-">
            {item.title}
          </h2>

          <div className="flex relative p-2.5 mt-[-20px]">
            <p className="my-3 text-[#717171] leading-relaxed text-sm">
              {item.category}
            </p>
            <span className="w-px h-[103px] bg-[#8498bc] rounded-[2px] absolute top-[2%] left-1/2 -translate-x-1/2 rotate-90 scale-x-300"></span>
          </div>

          <Image
            src={item.image}
            alt={item.title}
            width={199}
            height={185}
            className="rounded-full my-1.25 object-cover"
          />

          {/* <button className="bg-primary text-black h-[49.31px] w-[197px] rounded-custom border-none font-medium mt-3 capitalize transition-all hover:bg-[#f0ca2a] hover:shadow-[0_4px_12px_rgba(243,212,90,0.3)]">
            Submit your price
          </button> */}
          <form action={submitPriceAction.bind(null, item.id)}>
            <button
              type="submit"
              className="bg-primary text-black h-[49.31px] w-[197px] rounded-custom border-none font-medium mt-3 capitalize transition-all hover:bg-[#f0ca2a] hover:shadow-[0_4px_12px_rgba(243,212,90,0.3)]"
            >
              Submit your price
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
