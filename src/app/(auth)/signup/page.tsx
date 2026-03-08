"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("Client");

  const steps = ["User info", "Basic info", "Services", "Contact", "Final"];

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
      <header className="flex justify-between items-center py-4 px-6 md:py-5 md:px-10 absolute top-0 w-full z-20">
        <Link href="/" className="logo">
          <Image src="/VT.png" alt="V&T Logo" width={50} height={35} />
        </Link>
        <Link
          href="/login"
          className="bg-primary py-2 px-6 md:py-2.5 md:px-[30px] rounded-lg font-semibold text-sm md:text-[15px] transition-all hover:-translate-y-0.5"
        >
          Log in
        </Link>
      </header>

      <div className="flex flex-col lg:flex-row flex-1 relative pt-[80px] md:pt-[100px]">
        <div className="w-full lg:w-[250px] bg-[#2d2d2d] lg:rounded-r-[15px] flex p-6 md:p-10 lg:p-[60px_30px] lg:min-h-[calc(100vh-100px)]">
          <div className="flex flex-row lg:flex-col gap-6 md:gap-10 relative overflow-x-auto lg:overflow-visible no-scrollbar w-full">
            <div className="hidden lg:block absolute left-2.5 top-2.5 bottom-2.5 w-px bg-[#555] z-0"></div>

            {steps.map((s, i) => {
              const isActive = step === i + 1;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 md:gap-[15px] text-xs md:text-sm font-medium z-[1] transition-colors duration-200 shrink-0 ${
                    isActive ? "text-white" : "text-[#aaaaaa]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center bg-[#2d2d2d] transition-colors shrink-0 ${
                      isActive ? "border-white" : "border-[#555]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-white" : "bg-transparent"
                      }`}
                    ></div>
                  </div>
                  <span className="whitespace-nowrap">{s}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="bg-white p-6 md:p-10 lg:p-[40px_50px] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
                        relative lg:absolute lg:left-[200px] lg:top-[50px] 
                        w-[95%] lg:w-[850px] mx-auto lg:mx-0 
                        mt-[-20px] lg:mt-0 z-10 min-h-[500px] md:min-h-[600px] mb-10"
        >
          {step === 1 && (
            <div className="step-content">
              <p className="text-primary font-semibold mb-3 text-xs md:text-sm uppercase">
                Select user
              </p>
              <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#333]">
                1. Select who you are? <span className="text-[#ff4d4f]">*</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-3 bg-[#ebeef5] rounded-lg font-bold transition-all ${
                    userType === "Client" ? "bg-primary" : ""
                  }`}
                  onClick={() => setUserType("Client")}
                >
                  <span className="text-lg">👥</span> Client
                </button>
                <button
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-3 bg-[#ebeef5] rounded-lg font-bold transition-all ${
                    userType === "Supplier" ? "bg-primary" : ""
                  }`}
                  onClick={() => setUserType("Supplier")}
                >
                  <span className="text-lg">🤝</span> Supplier
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="flex flex-col">
                  <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
                    2. Valid Email <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 bg-[#ebeef5] border-none rounded-lg outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
                    3. Password <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full p-4 bg-[#ebeef5] border-none rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
                  4. Owner name? <span className="text-[#ff4d4f]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-[#ebeef5] border-none rounded-lg outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
                  5. Profile photo? <span className="text-[#ff4d4f]">*</span>
                </label>
                <div className="border border-dashed border-[#d9d9d9] rounded-lg p-6 md:p-8 text-center bg-[#ebeef5] relative">
                  <div className="text-3xl mb-3">📁</div>
                  <p className="text-sm text-[#333] font-semibold">
                    Drag & drop or{" "}
                    <span className="text-primary underline cursor-pointer">
                      upload
                    </span>
                  </p>
                  <p className="text-[10px] md:text-[11px] text-[#999] mt-2">
                    JPEG, PNG, GIF, MP4, PDF
                  </p>

                  <button className="mt-4 md:absolute md:right-5 md:bottom-5 bg-primary py-2 px-6 rounded-lg font-semibold text-sm transition-all hover:shadow-md">
                    Upload
                  </button>
                </div>
              </div>

              <div className="flex justify-center md:justify-end mt-8">
                <button
                  className="w-full md:w-auto py-3 px-10 bg-primary rounded-lg font-semibold text-base transition-all hover:shadow-lg"
                  onClick={() => setStep(2)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step > 1 && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <h2 className="text-2xl font-bold mb-5 text-dark">
                Step {step} placeholder
              </h2>
              <button
                className="w-full md:w-auto py-3 px-10 bg-[#ebeef5] rounded-lg font-semibold text-base transition-all hover:bg-gray-200"
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
