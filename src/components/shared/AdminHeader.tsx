"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Bell, 
  Settings,
  ChevronDown,
  User,
  Lock,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { removeAuthCookie } from "@/actions/auth";

interface AdminHeaderProps {
  role: "SuperAdmin" | "SubAdmin";
}

export default function AdminHeader({ role }: AdminHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogout = async () => {
    setUser(null);
    await removeAuthCookie();
    router.push("/login");
  };

  const profilePath = role === "SuperAdmin" ? "/super-admin/profile" : "/sub-admin/profile";

  return (
    <header className="h-[88px] bg-white border-b border-[#F2F4F7] flex items-center justify-end px-12 sticky top-0 z-[100] font-sans">
      
      {/* Right Side Actions */}
      <div className="flex items-center gap-8">
        
        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-[#F9FAFB] transition-all group"
          >
            <div className="bg-[#EBEFFF] text-[#0A1145] text-[11px] font-black px-3 py-1.5 rounded-[12px] lowercase tracking-wide ring-1 ring-[#0A1145]/5">
              admin
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#1D1F24] flex items-center justify-center text-white text-[15px] font-black ring-2 ring-white shadow-sm overflow-hidden text-center leading-none">
                A
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#44C13C] border-2 border-white rounded-full"></div>
            </div>
            {/* The mockup does not seem to have ChevronDown, it's just the avatar. 
                Wait, let's keep ChevronDown or remove it if mockup doesn't have it.
                Mockup DOES NOT have a ChevronDown next to the avatar! */}
          </button>

          {isOpen && (
             <>
               <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
               <div className="absolute right-0 mt-3 w-64 bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#F2F4F7] py-3 z-20 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="px-6 py-4 border-b border-[#F2F4F7]">
                     <p className="text-[14px] font-black text-[#1D1F24] lowercase">{role === "SuperAdmin" ? "Super Admin" : "Sub Admin"}</p>
                     <p className="text-[11px] font-medium text-[#999] lowercase">admin@vnt.com</p>
                  </div>
                  <div className="p-2">
                     <Link 
                       href={profilePath}
                       onClick={() => setIsOpen(false)}
                       className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-black text-[#666] hover:text-[#1D1F24] hover:bg-[#F9FAFB] transition-all lowercase italic"
                     >
                       <User size={18} className="text-[#999]" />
                       profile
                     </Link>
                     <button 
                       onClick={() => {
                         router.push(`${profilePath}`); 
                         setIsOpen(false);
                       }}
                       className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-black text-[#666] hover:text-[#1D1F24] hover:bg-[#F9FAFB] transition-all lowercase italic text-left"
                     >
                       <Lock size={18} className="text-[#999]" />
                       change password
                     </button>
                  </div>
                  <div className="p-2 border-t border-[#F2F4F7] mt-1">
                     <button 
                       onClick={handleLogout}
                       className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-black text-red-600 hover:bg-red-50 transition-all lowercase italic text-left"
                     >
                       <LogOut size={18} />
                       Log out
                     </button>
                  </div>
               </div>
             </>
          )}
        </div>
      </div>
    </header>
  );
}

