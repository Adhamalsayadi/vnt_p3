import Image from "next/image";
import Section from "@/components/ui/section";
import SurfaceCard from "@/components/ui/surface-card";

export default function AboutCard() {
  const cardBaseClasses = "w-full md:w-[377px] h-[447px] p-5 flex flex-col";

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-8 mt-16 px-4">
        <SurfaceCard
          className={`${cardBaseClasses} flex-1 max-w-sm bg-gray-50/50`}
        >
          <div className="bg-white rounded-xl p-6 mb-6 flex justify-center shadow-sm">
            <Image
              src="/mission.png"
              alt="Mission"
              width={200}
              height={120}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Mission</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Ensuring the highest quality of services, safe, and timely execution
            of projects in accordance with clients intention and expectation.
          </p>
        </SurfaceCard>

        <SurfaceCard
          className={`${cardBaseClasses} flex-1 max-w-sm bg-[#FDFEFE] md:translate-y-12 border-2 border-transparent hover:border-yellow-400 transition-all duration-300`}
        >
          <div className="bg-white rounded-xl p-6 mb-6 flex justify-center shadow-sm">
            <Image
              src="/vision.png"
              alt="Vision"
              width={200}
              height={120}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Vision</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Helping our client to achieve their goals with high accuracy and
            unique standards of safety, quality and with the lowest cost.
          </p>
        </SurfaceCard>

        <SurfaceCard
          className={`${cardBaseClasses} flex-1 max-w-sm bg-gray-50/50`}
        >
          <div className="bg-white rounded-xl p-6 mb-6 flex justify-center shadow-sm">
            <Image
              src="/strategy.png"
              alt="Strategy"
              width={200}
              height={120}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Strategy</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Experience, Accuracy, development is our goal and strategy. We
            creator chances.
          </p>
        </SurfaceCard>
      </div>
    </Section>
  );
}
