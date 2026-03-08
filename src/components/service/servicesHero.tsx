import ServiceGrid from "@/components/shared/service";
import type { ServiceCategory, ServiceCategoryId } from "@/types/service.types";

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

        <ServiceGrid
          items={categories}
          variant="hero"
          activeId={activeCategory}
        />
      </div>
    </div>
  );
}
