import Image from "next/image";
import Link from "next/link";
import type { ServiceCategory, ServiceCategoryId } from "./service.types";

interface Props {
  categories: ServiceCategory[];
  activeCategory: ServiceCategoryId;
}

export default function ServicesHero({ categories, activeCategory }: Props) {
  return (
    <div className="bg-bg-blue min-h-[353px] py-[30px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <h2 className="text-[42px] font-semibold text-dark leading-tight">
          What we provide?
        </h2>
        <p className="my-10 text-text-light text-base leading-relaxed max-w-2xl">
          Providing high quality in-order to be day-to-day updated
        </p>

        <div className="flex flex-wrap gap-5">
          {categories.map((service) => {
            const isActive = activeCategory === service.id;
            return (
              <Link
                key={service.id}
                href={`/services?category=${service.id}`}
                className={`flex items-center justify-center gap-[15px] w-full sm:w-[239px] h-[107px] rounded-[10px] transition-all duration-300 ${
                  isActive
                    ? "bg-primary shadow-sm"
                    : "bg-white hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={37}
                  height={37}
                />
                <div className="font-semibold text-dark">{service.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
