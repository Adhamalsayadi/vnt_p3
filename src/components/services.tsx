import Image from "next/image";
import Section from "@/components/ui/section";
import { HOME_SERVICE_OPTIONS } from "@/config/public";

export default function Services() {
  return (
    <Section>
      <div className="py-8">
        <h2 className="text-[42px] font-semibold text-dark mb-4">
          What we provide?
        </h2>

        <p className="text-text-light text-base leading-[1.6]">
          Providing high quality in-order to be day-to-day updated
        </p>

        <div className="flex flex-wrap items-center justify-between gap-5 my-8 pr-[10px]">
          {HOME_SERVICE_OPTIONS.map((service) => (
            <button
              key={service.label}
              type="button"
              className="flex items-center justify-center gap-[15px] border-none focus-visible:outline-2 focus-visible:outline-primary/80 focus-visible:outline-offset-2 rounded-md"
            >
              <Image
                src={service.image}
                alt={service.label}
                width={37}
                height={37}
              />
              <div className="text-dark font-medium">{service.label}</div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
