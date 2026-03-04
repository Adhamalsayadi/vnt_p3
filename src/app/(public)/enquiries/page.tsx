import EnquiriesHero from "@/components/enquiries/components/enquirieshero";
import SearchBar from "@/components/enquiries/components/searchbar";
import Services from "@/components/enquiries/components/services";
import Mainlayout from "@/components/enquiries/components/mainlayout";
import enquiriesData from "@/data/enquiries.json";
import { EnquiryFilters } from "@/types/enquiries";
import Pagination from "@/components/enquiries/components/Pagination";
import EmptyState from "@/components/ui/empty-state";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enquiries | V&T Platform",
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

  const filtered = enquiriesData.filter((item) => {
    return (
      (search === "" ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || item.category === category) &&
      (subCategory === "" || item.subCategory === subCategory) &&
      (time === "" || item.time === time) &&
      (clientRate === "" || item.clientRate >= Number(clientRate)) &&
      (vtRate === "" || item.vtRate >= Number(vtRate))
    );
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedData = filtered.slice(start, start + pageSize);

  if (filtered.length === 0) {
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
      <Mainlayout enquiries={paginatedData} />
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>
  );
}
