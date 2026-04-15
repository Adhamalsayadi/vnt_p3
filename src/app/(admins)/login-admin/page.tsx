"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/lib/api/auth/login";
import { useAuthStore } from "@/store/authStore";
import { setAuthCookie } from "@/actions/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState("super_admin@gmail.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await loginUser(email, password);
      if (result.success && result.role && result.user) {
        setUser(result.user);
        await setAuthCookie(result.role, "mock-jwt-token");
        if (result.role === "SuperAdmin") router.push("/super-admin");
        else if (result.role === "SubAdmin") router.push("/sub-admin");
        else router.push("/marketer");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center p-6 select-none font-sans">
      <div className="flex flex-col items-center mb-10">
        <Image src="/VT.png" alt="VT Logo" width={140} height={100} className="mb-4" priority />
        <h1 className="text-[32px] font-black tracking-tight text-[#1A1C1E]">
          Vender <span className="text-[#999] font-medium">&</span> <span className="text-[#F3D45A]">Tender</span>
        </h1>
      </div>

      <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 border border-[#F2F4F7]">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-[#1A1C1E] mb-2 leading-none">Login</h2>
          <p className="text-[#98A2B3] text-sm font-semibold tracking-wide">Welcome to bees app!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">
              Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors placeholder-[#EAECF0]"
              placeholder="super_admin@gmail.com"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">
              Password
            </label>
            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors placeholder-[#EAECF0] pr-12"
                placeholder="password"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#1A1C1E] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="text-right mt-2 uppercase tracking-tighter">
              <Link href="/forgot-password" title="Forgot Password?" className="text-[10px] font-black text-[#666] hover:text-black transition-colors">
                Forgot Password?
              </Link>
            </div>
          </div>

          {error && <p className="text-red-500 text-[11px] font-bold text-center mt-2">{error}</p>}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#121111] text-white py-4 rounded-xl font-black text-sm uppercase tracking-[2px] hover:bg-black transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? "LOADING..." : "LOGIN"}
          </button>
        </form>
      </div>

      <p className="mt-8 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest text-center">
        © 2026 designed by • eng/Adham
      </p>
    </main>
  );
}
