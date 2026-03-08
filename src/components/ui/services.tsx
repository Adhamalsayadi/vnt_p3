import Image from "next/image";
import Section from "@/components/ui/section";
import { HOME_SERVICE_OPTIONS } from "@/config/public";

export default function Services() {
  return (
    <Section>
      <div className="py-8 px-4 md:px-0">
        <h2 className="text-3xl md:text-[42px] font-semibold text-[#001f54] mb-4 text-center md:text-left">
          What we provide?
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-[1.6] text-center md:text-left">
          Providing high quality in-order to be day-to-day updated
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-8">
          {HOME_SERVICE_OPTIONS.map((service) => (
            <button
              key={service.label}
              type="button"
              className="flex items-center justify-start px-6 gap-4 bg-[#F8F9FA] hover:bg-[#EFEFEF] w-full h-[100px] md:h-[107px] transition-all border-none focus-visible:outline-2 focus-visible:outline-primary/80 rounded-xl group"
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={32}
                  height={32}
                  className="md:w-[37px] md:h-[37px]"
                />
              </div>
              <div className="text-[#001f54] font-semibold text-sm md:text-base text-left">
                {service.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
