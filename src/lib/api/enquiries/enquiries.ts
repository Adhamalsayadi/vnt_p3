import axios from "axios";
import { AnyEnquiry } from "@/types/enquiries";

const api = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
});

const Python_ap = false;

const mockEnquiries: AnyEnquiry[] = [
  {
    id: "1",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "2",
    title: "Machine for sale",
    category: "products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
    type: "free",
  },
  {
    id: "3",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "free",
  },
  {
    id: "4",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "free",
  },
  {
    id: "5",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "free",
  },
  {
    id: "6",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "7",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "3",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "9",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "10",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "13",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "12",
    title: "Cleaning tools",
    category: "services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "11",
    title: "Drilling Equipment",
    category: "rental",
    subCategory: "sub 3",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
    type: "paid",
  },
  {
    id: "14",
    title: "Safety Gear Batch",
    category: "products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 1,
    vtRate: 5,
    image: "/enquiries.png",
    type: "free",
  },
];

export interface FetchEnquiriesParams {
  search?: string;
  category?: string;
  subCategory?: string;
  source?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
  page?: number;
  pageSize?: number;
}

export async function fetchEnquiries(
  params: FetchEnquiriesParams
): Promise<{ data: AnyEnquiry[]; total: number }> {
  if (Python_ap) {
    try {
      const { data } = await api.get("/api/v1/enquiries", { params });
      return {
        data: data.items || data.data,
        total: data.total,
      };
    } catch (error) {
      console.error("Axios Backend Error:", error);
      return { data: [], total: 0 };
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  const filtered = mockEnquiries.filter((item) => {
    const searchMatch = params.search
      ? item.title.toLowerCase().includes(params.search.toLowerCase()) ||
        item.category.toLowerCase().includes(params.search.toLowerCase())
      : true;

    const categoryMatch =
      params.category && params.source === "dropdown"
        ? item.category.toLowerCase() === params.category.toLowerCase()
        : true;

    const subCategoryMatch =
      params.subCategory && params.source === "dropdown"
        ? item.subCategory.toLowerCase() === params.subCategory.toLowerCase()
        : true;

    const timeMatch = params.time
      ? item.time.toLowerCase() === params.time.toLowerCase()
      : true;
    const clientRateMatch = params.clientRate
      ? item.clientRate >= Number(params.clientRate)
      : true;
    const vtRateMatch = params.vtRate
      ? item.vtRate >= Number(params.vtRate)
      : true;

    return (
      searchMatch &&
      categoryMatch &&
      subCategoryMatch &&
      timeMatch &&
      clientRateMatch &&
      vtRateMatch
    );
  });

  const page = params.page || 1;
  const pageSize = params.pageSize || 10;
  const start = (page - 1) * pageSize;

  return {
    data: filtered.slice(start, start + pageSize),
    total: filtered.length,
  };
}
