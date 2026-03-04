import Services from "@/components/services";
import WhyChooseSection from "@/components/why-choose";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "V&T Platform | Procurement and Services Marketplace",
  description:
    "Explore services, products, rentals, and manpower enquiries with V&T Platform.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Services />
      <WhyChooseSection />
    </main>
  );
}
