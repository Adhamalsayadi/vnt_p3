import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/herosection";
import Services from "@/components/ui/services";
import WhyChooseSection from "@/components/why-choose";
import Footer from "@/components/layout/footer";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-white">
          <HeroSection />
          <Services />

          <WhyChooseSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
