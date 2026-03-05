import EnquiriesHero from "@/components/enquiries/components/enquirieshero";
import SearchBar from "@/components/enquiries/components/searchbar";
import ServiceGrid from "@/components/shared/Service";
import Mainlayout from "@/components/enquiries/components/mainlayout";
import Pagination from "@/components/enquiries/components/Pagination";
import { getServiceCategories } from "@/lib/api/services";
import EmptyState from "@/components/ui/empty-state";
import type { Metadata } from "next";
import ContentsServices from "@/components/Service/servicescontents";
import { buildPageMetadata } from "@/lib/seo";
import { fetchEnquiries } from "@/lib/api/enquiries";
import { EnquiryFilters } from "@/types/enquiries";

export const metadata: Metadata = buildPageMetadata({
  title: "Enquiries | VnT Platform",
  description:
    "Browse the latest procurement and service enquiries, filter by category, rating, and timeframe.",
  path: "/enquiries",
});

interface Props {
  searchParams: Promise<EnquiryFilters & { page?: string }>;
}

export default async function EnquiriesPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const pageSize = 10;

  const {
    search = "",
    category = "",
    subCategory = "",
    time = "",
    clientRate = "",
    vtRate = "",
  } = params;

  const categories = await getServiceCategories();

  const activeCategory = categories.find((c) => c.id === category);

  const finalCategory = activeCategory ?? categories[0];

  const { data: enquiries, total } = await fetchEnquiries({
    search,
    category: finalCategory.id,
    subCategory,
    time,
    clientRate,
    vtRate,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <EnquiriesHero />

      <SearchBar />

      <ServiceGrid
        items={categories}
        variant="enquiries"
        activeId={finalCategory.id}
      />

      <ContentsServices subCategories={finalCategory.subCategories} />

      {enquiries.length === 0 ? (
        <EmptyState
          title="No enquiries match these filters"
          description="Try broadening your search or clear filters to see all enquiries."
          actionHref="/enquiries"
          actionLabel="Clear Filters"
        />
      ) : (
        <>
          <Mainlayout enquiries={enquiries} />
          <Pagination totalPages={totalPages} currentPage={page} />
        </>
      )}
    </div>
  );
}
