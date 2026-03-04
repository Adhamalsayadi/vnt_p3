import Image from "next/image";

const services = [
  { label: "Services", image: "/Services.png" },
  { label: "Rental", image: "/for-rent.png" },
  { label: "Products", image: "/received.png" },
  { label: "Man power", image: "/power.png" },
];

export default function Services() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex flex-wrap items-center justify-center gap-5 my-8">
        {services.map((service) => (
          <button
            key={service.label}
            className="flex items-center justify-center gap-[15px] bg-[#EFEFEF] w-[251.37px] h-[107px] rounded-[10px] border-none transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={service.image}
              alt={service.label}
              width={38}
              height={37}
              className="p-0"
            />
            <div className="text-dark font-medium">{service.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
