import EnquiriesHero from "@/components/enquiries/enquirieshero";
import SearchBar from "@/components/enquiries/searchbar";
import ServiceGrid from "@/components/shared/service";
import Mainlayout from "@/components/enquiries/mainlayout";
import Pagination from "@/components/enquiries/Pagination";
import EmptyState from "@/components/ui/empty-state";
import ContentsServices from "@/components/service/servicescontents";
import { getServiceCategories } from "@/lib/api/services/services";
import { fetchEnquiries } from "@/lib/api/enquiries/enquiries";
import { EnquiryFilters } from "@/types/enquiries";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
export const metadata: Metadata = buildPageMetadata({
  title: "Enquiries | VnT Platform",
  description:
    "Browse the latest procurement and service enquiries, filter by category, rating, and timeframe.",
});
interface Props {
  searchParams: Promise<EnquiryFilters & { page?: string }>;
}

async function EnquiriesContent({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = 10;

  const [categories, enquiryResult] = await Promise.all([
    getServiceCategories(),
    fetchEnquiries({ ...params, page, pageSize }),
  ]);

  const activeCategory = categories.find((c) => c.id === params.category);
  const totalPages = Math.ceil(enquiryResult.total / pageSize);

  return (
    <>
      <ServiceGrid
        items={categories}
        variant="enquiries"
        activeId={activeCategory?.id}
      />

      {activeCategory && (
        <ContentsServices subCategories={activeCategory.subCategories} />
      )}

      {enquiryResult.data.length === 0 ? (
        <EmptyState
          title="No enquiries match these filters"
          description="Try broadening your search or clear filters to see all enquiries."
          actionHref="/enquiries"
          actionLabel="Clear Filters"
        />
      ) : (
        <>
          <Mainlayout enquiries={enquiryResult.data} />
          <Pagination totalPages={totalPages} currentPage={page} />
        </>
      )}
    </>
  );
}

export default function EnquiriesPage({ searchParams }: Props) {
  return (
    <div>
      <EnquiriesHero />
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <EnquiriesContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
