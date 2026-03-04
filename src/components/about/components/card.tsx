import Image from "next/image";

const data = [
  {
    title: "Mission",
    href: "/mission.png",
    text: "Ensuring the highest quality of services, safe, and timely execution of projects in accordance with clients intention and expectation",
  },
  {
    title: "Strategy",
    href: "/strategy.png",
    text: "Experience, Accuracy, development is our goal and strategy. We creator chances",
  },
];

export default function AboutCard() {
  const cardBaseClasses = "bg-bg-card w-full md:w-[377px] h-[447px] rounded-lg p-5 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]";

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between mt-8 relative gap-6">
        <div className={`${cardBaseClasses} md:absolute md:top-[15%] md:left-[33%] z-10`}>
          <Image src={"/vision.png"} alt="vision" width={329} height={198} className="rounded-md self-center mb-4" />
          <h2 className="text-[18px] font-semibold text-dark mb-2">Vision</h2>
          <p className="text-text-muted leading-[1.6] text-sm">
            Helping our client to achieve their goals with high accuracy and
            unique standards of safety, quality and with the lowest cost.
          </p>
        </div>
        {data.map((card) => (
          <div key={card.title} className={cardBaseClasses}>
            <Image src={card.href} alt={card.title} width={329} height={198} className="rounded-md self-center mb-4" />
            <h2 className="text-[18px] font-semibold text-dark mb-2">{card.title}</h2>
            <p className="text-text-muted leading-[1.6] text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
