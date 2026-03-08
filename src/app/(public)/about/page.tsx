import AboutHero from "@/components/about/about-hero";
import AboutCard from "@/components/about/card";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | VnT Platform",
  description:
    "Learn about VnT Platform mission, strategy, and vision for supporting procurement workflows.",
});

export default async function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCard />
    </>
  );
}
