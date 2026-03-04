import EnquiriesCard from "@/components/enquiries/components/enquiriesCard";
import LeftCard from "@/components/enquiries/components/leftCard";
import RightCard from "@/components/enquiries/components/rightCard";
import { Enquiry } from "@/types/enquiries";

interface Props {
  enquiries: Enquiry[];
}

export default function Mainlayout({ enquiries }: Props) {
  return (
    <div className="grid grid-cols-[150px_1fr_150px] gap-6 my-[70px] p-5 w-full items-start">
      <LeftCard />
      <EnquiriesCard enquiries={enquiries} />
      <RightCard />
    </div>
  );
}
