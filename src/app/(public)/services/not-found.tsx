import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-20">
      <h1 className="text-8xl font-black text-dark/10 mb-4 select-none">404</h1>
      <h2 className="text-3xl font-bold text-dark mb-4">Service Category Not Found</h2>
      <p className="text-text-light max-w-md mb-10 leading-relaxed">
        We couldn&apos;t find the service category you are looking for. It might have been updated or moved.
      </p>
      <Link 
        href="/services" 
        className="bg-primary hover:bg-[#f0ca2a] text-black font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
      >
        Explore All Services
      </Link>
    </div>
  );
}
