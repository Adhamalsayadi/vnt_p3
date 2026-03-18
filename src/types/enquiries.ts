export interface Enquiry {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  subCategory: string;
  subCategoryLabel?: string;
  sellerId: string;
  sellerName: string;
  time: string;
  clientRate: number;
  vtRate: number;
  image: string;
  requiredDate: string;
  requestType: string;
  enquiryStatus: string;
  quantity: number;
  purpose: string;
  enquiryEta: string;
  standard: string;
  offersReceived: boolean;
  createdByUserId?: string;
  createdByUserName?: string;
  isHidden?: boolean;
}

export interface SellerRatingCriterion {
  code: string;
  label: string;
  score: number;
}

export interface SellerRating {
  sellerId: string;
  overall: number;
  criteria: SellerRatingCriterion[];
}

export interface EnquiryFilters {
  search?: string;
  category?: string;
  subCategory?: string;
  source?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
}
