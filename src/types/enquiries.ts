export interface Enquiry {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  time: string;
  clientRate: number;
  vtRate: number;
  image: string;
}

export interface EnquiryFilters {
  search?: string;
  category?: string;
  subCategory?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
}
