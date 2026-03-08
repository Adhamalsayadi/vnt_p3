import ServicesHero from "@/components/service/ServicesHero";
import ContentsServices from "@/components/service/servicescontents";
import ServicesAds from "@/components/service/servicesads";
import { getServiceCategories } from "@/lib/api/services/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | VnT Platform",
  description:
    "Browse service categories and subcategories including transportation, rental, products, and manpower.",
});

interface Props {
  searchParams: Promise<{ category?: string }>;
}

async function ServicesContent({ searchParams }: Props) {
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

export default function ServicesPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <ServicesContent searchParams={searchParams} />
    </Suspense>
  );
}
