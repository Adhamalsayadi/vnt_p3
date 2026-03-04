import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <header className="flex justify-between items-center py-5 px-10 absolute top-0 w-full z-10">
        <Link href="/" className="logo">
          <Image src="/VT.png" alt="V&T Logo" width={50} height={35} />
        </Link>
        <Link
          href="/signup"
          className="bg-primary py-2.5 px-[30px] rounded-lg font-semibold text-[15px] hover:-translate-y-0.5 transition-all"
        >
          Sign up
        </Link>
      </header>

      <div className="flex flex-1 relative pt-[100px]">
        <div className="w-[300px] bg-[#2d2d2d] rounded-r-[15px] flex p-[60px_40px] mt-[-20px] min-h-[calc(100vh-80px)]">
          <div className="sidebar-text">
            <h1 className="text-white text-[32px] font-bold mb-1.25">Log in</h1>
            <svg
              className="mb-8"
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.8762 0.272285C25.1525 2.23232 17.639 2.88558 12.4531 3.25308C3.42874 3.90643 1.83622 4.2331 2.32623 5.49895C3.22457 7.82665 11.5956 7.78582 41.7719 5.29478C49.9387 4.6006 57.493 4.06976 58.5138 4.06976C63.4956 4.02893 63.5364 -1.23857 46.8762 0.272285ZM45.6511 8.15332C43.1603 8.35749 8.94141 11.5834 6.49137 11.8284C-0.368735 12.4409 -1.308 12.9309 1.42788 14.6868C5.22544 17.096 39.1177 12.4817 60.8006 11.8692C70.8865 11.5834 71.9482 11.3792 71.3765 9.95002C70.6007 7.74498 60.0247 7.00981 45.6511 8.15332Z"
                fill="#F3D45A"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white p-[40px_60px] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] absolute left-[220px] top-[140px] w-[700px] z-[5]">
          <p className="text-primary font-semibold mb-[30px] text-sm uppercase">
            log in
          </p>
          <div className="mb-[25px]">
            <label className="block text-[18px] font-semibold mb-2.5 text-[#333]">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full p-[15px_20px] bg-[#ebeef5] border-none rounded-lg text-base outline-none"
            />
          </div>
          <div className="mb-[25px]">
            <label className="block text-[18px] font-semibold mb-2.5 text-[#333]">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full p-[15px_20px] bg-[#ebeef5] border-none rounded-lg text-base outline-none"
            />
          </div>
          <div className="flex justify-end mt-10">
            <button className="bg-primary py-3 px-10 rounded-lg font-semibold text-base border-none hover:-translate-y-0.5 transition-all">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
