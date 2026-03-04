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
      <div className="py-8">
        <h2 className="text-[42px] font-semibold text-dark mb-4">
          What we provide?
        </h2>

        <p className="text-text-light text-base leading-[1.6]">
          Providing high quality in-order to be day-to-day updated
        </p>

        <div className="flex flex-wrap items-center justify-between gap-5 my-8 pr-[10px]">
          {services.map((service) => (
            <button key={service.label} className="flex items-center justify-center gap-[15px] border-none">
              <Image
                src={service.image}
                alt={service.label}
                width={37}
                height={37}
              />
              <div className="text-dark font-medium">{service.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
