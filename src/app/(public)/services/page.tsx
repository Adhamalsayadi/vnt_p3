import ServicesHero from "@/components/Service/seviceshero";
import ContentsServices from "@/components/Service/servicescontents";
import ServicesAds from "@/components/Service/servicesads";
import { SERVICE_CATEGORIES } from "@/components/Service/services.data";
import type { ServiceCategoryId } from "@/components/Service/service.types";

interface Props {
  searchParams: Promise<{ category?: string }>;
}
export default async function ServicesPage({ searchParams }: Props) {
  await new Promise((promis) => setTimeout(promis, 1000));

  const params = await searchParams;
  const categoryFromUrl = params?.category;

  const isValidCategory =
    typeof categoryFromUrl === "string" &&
    SERVICE_CATEGORIES.some((c) => c.id === categoryFromUrl);

  const activeCategory: ServiceCategoryId = isValidCategory
    ? (categoryFromUrl as ServiceCategoryId)
    : "services";

  const active = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div>
      <ServicesHero
        categories={SERVICE_CATEGORIES}
        activeCategory={activeCategory}
      />

      <ContentsServices subCategories={active?.subCategories ?? []} />

      <ServicesAds />
    </div>
  );
}
