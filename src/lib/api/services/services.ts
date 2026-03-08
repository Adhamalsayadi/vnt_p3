import type { ServiceCategory } from "@/types/service.types";
import axios from "axios";

export const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

const Python_api = false;

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  if (Python_api) {
    try {
      const response = await api.get<ServiceCategory[]>("/api/categories");
      return response.data;
    } catch (error) {
      console.error("API Fetch Error:", error);
      return [];
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockResponse: { data: ServiceCategory[] } = {
    data: [
      {
        id: "services",
        label: "Services",
        icon: "/Services.png",
        subCategories: [
          "transportation",
          "down streams",
          "Mud services",
          "Exploration",
          "Machines",
          "welding services",
          "vapor blasting",
          "inspection & testing",
          "laiser engraving",
          "machines & equipment",
        ],
      },
      {
        id: "rental",
        label: "Rental",
        icon: "/for-rent.png",
        subCategories: [
          "Car Rental",
          "Equipment Rental",
          "Trucks",
          "Heavy Machines",
          "Trailers",
        ],
      },
      {
        id: "products",
        label: "Products",
        icon: "/received.png",
        subCategories: [
          "Office Supplies",
          "Safety Gear",
          "Construction Materials",
          "Pipes",
          "Valves",
        ],
      },
      {
        id: "manpower",
        label: "Man power",
        icon: "/power.png",
        subCategories: [
          "Engineers",
          "Drivers",
          "Technicians",
          "Laborers",
          "Supervisors",
        ],
      },
    ],
  };

  return mockResponse.data;
}
