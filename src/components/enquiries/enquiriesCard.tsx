"use client";
import Image from "next/image";
import { Enquiry } from "@/types/enquiries";
import Button from "@/components/ui/button";
import SurfaceCard from "@/components/ui/surface-card";
import { useModalFlow } from "@/hooks/useModalFlow";

interface Props {
  enquiries?: Enquiry[];
}

export default function EnquiriesCard({ enquiries = [] }: Props) {
  const { openEnquiry, renderModals } = useModalFlow();

  if (enquiries.length === 0) {
    return (
      <div className="col-span-3 flex justify-center py-10">
        <p
          role="status"
          className="p-5 font-medium text-text-muted bg-[#f5f5f5] rounded-custom w-full text-center"
        >
          No paid enquiries found for this selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {enquiries.map((item) => (
        <SurfaceCard
          key={item.id}
          className="bg-[#f5f5f5] flex flex-col items-center justify-center rounded-custom p-4 md:p-[20px_20px] text-center w-full"
        >
          <h2 className="font-semibold text-[22px] text-dark mb-0">
            {item.title}
          </h2>

          <div className="flex relative p-2.5 mt-[-20px]">
            <p className="my-3 text-[#717171] leading-relaxed text-sm">
              {item.categoryLabel || item.category}
            </p>
            <span className="w-px h-[103px] bg-[#8498bc] rounded-[2px] absolute top-[2%] left-1/2 -translate-x-1/2 rotate-90 scale-x-300"></span>
          </div>

          <Image
            src={item.image}
            alt={item.title}
            width={199}
            height={185}
            sizes="(max-width: 768px) 180px, 199px"
            className="rounded-full my-1.25 object-cover"
          />

          <Button
            onClick={() => openEnquiry(item)}
            className="w-full max-w-[160px] md:w-[197px] mt-3 h-9 md:h-11 text-[10px] md:text-sm capitalize"
          >
            View more details
          </Button>
        </SurfaceCard>
      ))}

      {renderModals()}
    </div>
  );
}
