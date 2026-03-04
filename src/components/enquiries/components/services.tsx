import Image from "next/image";
import Section from "@/components/ui/section";
import SurfaceCard from "@/components/ui/surface-card";
import { HOME_SERVICE_OPTIONS } from "@/config/public";

export default function Services() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-center gap-5 my-8">
        {HOME_SERVICE_OPTIONS.map((service) => (
          <SurfaceCard
            key={service.label}
            className="flex items-center justify-center gap-[15px] bg-[#EFEFEF] w-[251.37px] h-[107px] p-3"
          >
            <Image
              src={service.image}
              alt={service.label}
              width={38}
              height={37}
              className="p-0"
            />
            <div className="text-dark font-medium">{service.label}</div>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
