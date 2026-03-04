import Image from "next/image";

export default function ServicesAds() {
  return (
    <div className="bg-[#e8ecf8] w-full grid grid-cols-[67%_33%] items-center mt-5">
      <div className="p-2.5 flex gap-2.5 overflow-x-auto no-scrollbar">
        {Array.from({ length: 11 }).map((_, i) => (
          <Image 
            key={i} 
            src={"/ads.png"} 
            width={165} 
            height={242} 
            alt="ads" 
            className="shrink-0"
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center bg-[#3056d3] text-white h-[312px] capitalize text-center p-6">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          Do you need any <br /> <span className="text-primary">services</span>?
        </h1>
        <p className="text-[#d4d1d1] my-5 text-sm">muli services you can find in VnT</p>
        <button className="w-[159px] h-[64px] border-none rounded-[10px] bg-primary text-black font-semibold transition-all hover:bg-[#f0ca2a] hover:shadow-lg">
          add ads
        </button>
      </div>
    </div>
  );
}
