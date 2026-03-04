import Vector from "@/components/Vector";

export default function HeroSection() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <Vector className="absolute top-[10%] left-[15%] max-w-[1200px] pointer-events-none" />
      <div className="w-full text-center z-[2] px-6">
        <h1 className="text-[48px] font-semibold text-dark leading-[1.4]">
          Providing you with
          <br />
          Your <span className="text-primary">Enquiries</span> Supporting
        </h1>
      </div>
    </div>
  );
}
