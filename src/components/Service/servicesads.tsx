import Image from "next/image";
import { submitAction } from "@/actions/actionbutton";
export default function ServicesAds() {
  const images = Array.from({ length: 11 });

  return (
    <div className="bg-[#e8ecf8] w-full grid grid-cols-[67%_33%] items-center mt-5 overflow-hidden">
      <div className="relative flex overflow-hidden p-2.5">
        <div className="flex gap-2.5 animate-infinite-scroll hover:[animation-play-state:paused]">
          {images.map((_, i) => (
            <Image
              key={`a-${i}`}
              src="/ads.png"
              width={165}
              height={242}
              alt="ads"
              className="shrink-0 rounded-lg"
            />
          ))}
          {images.map((_, i) => (
            <Image
              key={`b-${i}`}
              src="/ads.png"
              width={165}
              height={242}
              alt="ads"
              className="shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#3056d3] text-white h-[312px] capitalize text-center p-6 z-10">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          Do you need any <br />{" "}
          <span className="text-[#f0ca2a]">services</span>?
        </h1>
        <p className="text-[#d4d1d1] my-5 text-sm">
          multi services you can find in VnT
        </p>
        <form action={submitAction}>
          <button className="w-[159px] h-[64px] border-none rounded-[10px] bg-[#f0ca2a] text-black font-semibold transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
            add ads
          </button>
        </form>
      </div>
    </div>
  );
}
