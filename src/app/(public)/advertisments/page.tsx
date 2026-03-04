import EnquiriesHero from "@/components/enquiries/components/enquirieshero";
import SearchBar from "@/components/enquiries/components/searchbar";
import Services from "@/components/enquiries/components/services";
import ContentsServices from "@/components/Service/servicescontents";
import Mainlayout from "@/components/enquiries/components/mainlayout";
import enquiriesData from "@/data/enquiries.json";
import { EnquiryFilters } from "@/types/enquiries";
interface Props {
  searchParams: Promise<EnquiryFilters>;
}

export default async function AdvertismentsPage({ searchParams }: Props) {
  await new Promise((r) => setTimeout(r, 1000));
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
