// "use client";
// import React from "react";
// import Image from "next/image";
// import { FreeEnquiry } from "@/types/enquiries";
// import { useModalFlow } from "@/hooks/useModalFlow";

// interface Props {
//   enquiries?: FreeEnquiry[];
// }

// export default function RightCard({ enquiries = [] }: Props) {
//   const { openEnquiry, renderModals } = useModalFlow();

//   const cardSmClasses =
//     "w-full max-w-[300px] lg:max-w-[150px] h-[174px] bg-bg-blue flex flex-col rounded-lg items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg";

//   const btnClasses =
//     "w-[70px] h-[18px] bg-primary text-black border-none rounded-[3px] text-[7px] font-medium transition-all hover:bg-[#f0ca2a]";

//   if (enquiries.length === 0) {
//     return (
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-5 justify-items-center">
//         <p role="status" className="text-sm text-text-muted text-center p-4">
//           No free enquiries.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 gap-5 justify-items-center">
//       {enquiries.map((item) => (
//         <div key={item.id} className={cardSmClasses}>
//           <h4 className="text-[12px] font-semibold text-dark text-center px-2">
//             {item.title}
//           </h4>

//           <p className="text-[10px] text-[#717171] leading-tight text-center">
//             {item.category}
//           </p>

//           <Image
//             src={item.image}
//             alt={item.title}
//             width={68}
//             height={68}
//             className="rounded-full object-cover"
//           />

//           <button onClick={() => openEnquiry(item)} className={btnClasses}>
//             Submit your RFQ
//           </button>
//         </div>
//       ))}

//       {renderModals()}
//     </div>
//   );
// }
