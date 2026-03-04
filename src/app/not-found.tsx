import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center p-5">
      <h1 className="text-[120px] font-extrabold text-[#333] leading-none m-0">404</h1>
      <div className="w-[100px] h-1.5 bg-primary my-5 rounded-[3px]"></div>
      <h2 className="text-[32px] font-bold mb-[15px]">Oops! Page not found</h2>
      <p className="text-lg text-[#888] max-w-[500px] mb-10">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/" className="bg-primary text-black p-[15px_40px] rounded-xl font-bold no-underline transition-all hover:scale-105 active:scale-95">
        Back to home
      </Link>
    </div>
  );
}
