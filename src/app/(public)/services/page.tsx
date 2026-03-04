import ServicesHero from "@/components/Service/seviceshero";
import ContentsServices from "@/components/Service/servicescontents";
import ServicesAds from "@/components/Service/servicesads";
import { SERVICE_CATEGORIES } from "@/components/Service/services.data";
import type { ServiceCategoryId } from "@/components/Service/service.types";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | V&T Platform",
  description:
    "Browse service categories and subcategories including transportation, rental, products, and manpower.",
  path: "/services",
});

interface Props {
  searchParams: Promise<{ category?: string }>;
}
export default async function ServicesPage({ searchParams }: Props) {
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
