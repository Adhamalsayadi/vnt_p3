export type ServiceCategoryId = "services" | "rental" | "products" | "manpower";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  icon: string;
  subCategories: string[];
}
