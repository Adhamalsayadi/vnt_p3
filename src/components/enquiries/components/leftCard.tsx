import Image from "next/image";

export default function LeftCard() {
  const cardSmClasses =
    "w-[150px] h-[174px] bg-bg-blue flex flex-col rounded-lg items-center justify-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]";
  const btnClasses =
    "w-[56px] h-[15.95px] bg-primary text-black border-none rounded-[2px] text-[5px] font-medium transition-all hover:bg-[#f0ca2a]";

  return (
    <div className="grid grid-cols-1 gap-5 justify-items-center">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={cardSmClasses}>
          <h4 className="text-[12px] font-semibold text-dark m-0">
            Machine for sale
          </h4>
          <p className="text-[10px] text-[#717171] m-0 leading-tight">
            products
          </p>
          <Image
            src={"/product.png"}
            alt="product"
            width={68}
            height={68}
            className="rounded-full my-1 object-cover"
          />
          <button className={btnClasses}>Submit your RFQ</button>
        </div>
      ))}
    </div>
  );
}
