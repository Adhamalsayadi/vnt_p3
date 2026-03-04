import { create } from "zustand";
import enquiriesData from "@/data/enquiries.json";
import { Enquiry } from "@/types/enquiries";

interface Filters {
  search: string;
  category: string;
  subCategory: string;
  time: string;
  clientRate: string;
  vtRate: string;
}

interface EnquiriesState {
  enquiries: Enquiry[];
  filteredEnquiries: Enquiry[];
  filters: Filters;

  setFilter: (key: keyof Filters, value: string) => void;
  applyFilters: () => void;
}

export const useEnquiriesStore = create<EnquiriesState>((set, get) => ({
  enquiries: enquiriesData,
  filteredEnquiries: enquiriesData,

  filters: {
    search: "",
    category: "",
    subCategory: "",
    time: "",
    clientRate: "",
    vtRate: "",
  },

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  applyFilters: () => {
    const { enquiries, filters } = get();

    const filtered = enquiries.filter((item) => {
      return (
        (filters.search === "" ||
          item.title.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.category === "" ||
          filters.category === "all" ||
          item.category === filters.category) &&
        (filters.subCategory === "" ||
          filters.subCategory === "all" ||
          item.subCategory === filters.subCategory) &&
        (filters.time === "" ||
          filters.time === "all" ||
          item.time === filters.time) &&
        (filters.clientRate === "" ||
          filters.clientRate === "all" ||
          item.clientRate >= Number(filters.clientRate)) &&
        (filters.vtRate === "" ||
          filters.vtRate === "all" ||
          item.vtRate >= Number(filters.vtRate))
      );
    });

    set({ filteredEnquiries: filtered });
  },
}));
