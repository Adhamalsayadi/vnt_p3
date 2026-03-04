import EnquiriesHero from "@/components/enquiries/components/enquirieshero";
import SearchBar from "@/components/enquiries/components/searchbar";
import Services from "@/components/enquiries/components/services";
import ContentsServices from "@/components/Service/servicescontents";
import Mainlayout from "@/components/enquiries/components/mainlayout";
import enquiriesData from "@/data/enquiries.json";
import { EnquiryFilters } from "@/types/enquiries";
import EmptyState from "@/components/ui/empty-state";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Advertisments | V&T Platform",
  description:
    "Discover published advertisments and opportunities across services, rentals, manpower, and products.",
  path: "/advertisments",
});
interface Props {
  searchParams: Promise<EnquiryFilters>;
}

export default async function AdvertismentsPage({ searchParams }: Props) {
  const params = await searchParams;

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

  if (filtered.length === 0) {
    return (
      <div>
        <EnquiriesHero />
        <SearchBar />
        <Services />
        <EmptyState
          title="No advertisments found"
          description="No results match your current filters. Clear filters and try again."
          actionHref="/advertisments"
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
      <ContentsServices />
      <Mainlayout enquiries={filtered} />
    </div>
  );
}
