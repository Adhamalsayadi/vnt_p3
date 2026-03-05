import ServicesHero from "@/components/Service/ServicesHero";
import ContentsServices from "@/components/Service/servicescontents";
import ServicesAds from "@/components/Service/servicesads";
import { getServiceCategories } from "@/lib/api/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | VnT Platform",
  description:
    "Browse service categories and subcategories including transportation, rental, products, and manpower.",
  path: "/services",
});

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function ServicesPage({ searchParams }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const categories = await getServiceCategories();

  const { category } = await searchParams;

  const activeCategory = categories.find((c) => c.id === category);

  if (category && !activeCategory) {
    notFound();
  }

  const finalCategory = activeCategory ?? categories[0];

  return (
    <>
      <ServicesHero categories={categories} activeCategory={finalCategory.id} />

      <ContentsServices subCategories={finalCategory.subCategories} />

      <ServicesAds />
    </>
  );
}
