import AboutHero from "@/components/about/components/about-hero";
import AboutCard from "@/components/about/components/card";
export default async function AboutPage() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <>
      <AboutHero />
      <AboutCard />
    </>
  );
}
