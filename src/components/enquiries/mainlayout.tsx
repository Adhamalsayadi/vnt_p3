"use client";
import EnquiriesCard from "@/components/enquiries/enquiriesCard";
// import LeftCard from "@/components/enquiries/leftCard";
// import RightCard from "@/components/enquiries/rightCard";
import { Enquiry } from "@/types/enquiries";

interface Props {
  enquiries: Enquiry[];
}

export default function Mainlayout({ enquiries }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr_150px] gap-6 p-4 md:p-5 w-full items-start overflow-hidden mt-4">
      <div className="hidden lg:block">
        {/* <LeftCard enquiries={free.slice(0, 4)} /> */}
      </div>

      <div className="w-full">
        <EnquiriesCard enquiries={enquiries} />
      </div>

      <div className="lg:block">
        {/* <RightCard enquiries={free.slice(4, 8)} /> */}
      </div>
    </div>
  );
}
