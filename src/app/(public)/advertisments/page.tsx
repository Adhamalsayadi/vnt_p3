import EnquiriesHero from "@/components/enquiries/components/enquirieshero";
import SearchBar from "@/components/enquiries/components/searchbar";
import Services from "@/components/enquiries/components/services";
import Mainlayout from "@/components/enquiries/components/mainlayout";
import Pagination from "@/components/enquiries/components/Pagination";
import EmptyState from "@/components/ui/empty-state";
import type { Metadata } from "next";
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

  const { data: enquiries, total } = await fetchEnquiries({
    search,
    category,
    subCategory,
    time,
    clientRate,
    vtRate,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(total / pageSize);

  if (enquiries.length === 0) {
    return (
      <div>
        <EnquiriesHero />
        <SearchBar />
        <Services />
        <EmptyState
          title="No enquiries match these filters"
          description="Try broadening your search or clear filters to see all enquiries."
          actionHref="/enquiries"
          actionLabel="Clear Filters"
        />
      </div>
    );
  }

  return (
    <div>
      <EnquiriesHero />
      <SearchBar />
      <Services />
      <Mainlayout enquiries={enquiries} />
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>
  );
}
