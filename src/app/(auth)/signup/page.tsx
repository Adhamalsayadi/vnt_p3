"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("Client");

  const steps = [
    "User info",
    "Basic info",
    "Services question",
    "Contact Details",
    "Final Step",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <header className="flex justify-between items-center py-5 px-10 absolute top-0 w-full z-10">
        <Link href="/" className="logo">
          <Image src="/VT.png" alt="V&T Logo" width={50} height={35} />
        </Link>
        <Link
          href="/login"
          className="bg-primary py-2.5 px-[30px] rounded-lg font-semibold text-[15px] transition-all hover:-translate-y-0.5"
        >
          Log in
        </Link>
      </header>

      <div className="flex flex-1 relative pt-[100px]">
        <div className="w-[250px] bg-[#2d2d2d] rounded-r-[15px] flex p-[60px_30px] mt-[-20px] min-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-10 relative">
            <div className="absolute left-2.5 top-2.5 bottom-2.5 w-px bg-[#555] z-0"></div>
            {steps.map((s, i) => {
              const isActive = step === i + 1;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-[15px] text-sm font-medium z-[1] transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#aaaaaa]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center bg-[#2d2d2d] transition-colors ${
                      isActive ? "border-white" : "border-[#555]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-white" : "bg-transparent"
                      }`}
                    ></div>
                  </div>
                  <span>{s}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-[40px_50px] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] absolute left-[200px] top-[50px] w-[850px] z-[5] min-h-[600px]">
          {step === 1 && (
            <div className="step-content">
              <p className="text-primary font-semibold mb-[15px] text-sm uppercase">
                Seclect user
              </p>
              <h2 className="text-xl font-semibold mb-6.25 text-[#333]">
                1.According to the services you want, select who you are?
                <span className="text-[#ff4d4f]">*</span>
              </h2>

              <div className="flex gap-5 mb-[30px]">
                <button
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-3 bg-[#ebeef5] rounded-lg font-bold border-none transition-all max-w-[180px] ${
                    userType === "Client" ? "bg-primary" : ""
                  }`}
                  onClick={() => setUserType("Client")}
                >
                  <span className="text-lg">👥</span>
                  Client
                </button>
                <button
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-3 bg-[#ebeef5] rounded-lg font-bold border-none transition-all max-w-[180px] ${
                    userType === "Supplier" ? "bg-primary" : ""
                  }`}
                  onClick={() => setUserType("Supplier")}
                >
                  <span className="text-lg">🤝</span>
                  Supplier
                </button>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-[25px]">
                <div className="flex flex-col">
                  <label className="block text-lg font-semibold mb-3.75 text-[#333]">
                    2.Enter a valid Email
                    <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-[15px_20px] bg-[#ebeef5] border-none rounded-lg text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-lg font-semibold mb-3.75 text-[#333]">
                    3.what is the password?
                    <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full p-[15px_20px] bg-[#ebeef5] border-none rounded-lg text-base outline-none"
                  />
                </div>
              </div>

              <div className="mb-[25px]">
                <label className="block text-lg font-semibold mb-3.75 text-[#333]">
                  4.what is the company's owner name?
                  <span className="text-[#ff4d4f]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-[15px_20px] bg-[#ebeef5] border-none rounded-lg text-base outline-none"
                />
              </div>

              <div className="mb-[25px]">
                <label className="block text-lg font-semibold mb-3.75 text-[#333]">
                  5. Upload a profile photo?
                  <span className="text-[#ff4d4f]">*</span>
                </label>
                <div className="border border-dashed border-[#d9d9d9] rounded-lg p-[30px] text-center bg-[#ebeef5] relative">
                  <div className="text-[32px] mb-[15px]">📁</div>
                  <p className="text-sm text-[#333] font-semibold">
                    Drag & drop files or{" "}
                    <span className="text-[#d4af37] underline cursor-pointer">
                      upload file
                    </span>
                  </p>
                  <p className="text-[11px] text-[#999] mt-2.5 font-normal">
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </p>
                  <button className="absolute right-5 bottom-5 bg-primary py-2 px-[30px] rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5">
                    Upload
                  </button>
                </div>
              </div>

              <div className="flex justify-end mt-10">
                <button
                  className="py-3 px-10 bg-primary rounded-lg font-semibold border-none text-base transition-all hover:-translate-y-0.5"
                  onClick={() => setStep(2)}
                >
                  Countiune
                </button>
              </div>
            </div>
          )}

          {step > 1 && (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <h2 className="text-2xl font-bold mb-5">
                Step {step} placeholder
              </h2>
              <button
                className="py-3 px-10 bg-primary rounded-lg font-semibold border-none text-base transition-all hover:-translate-y-0.5"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
