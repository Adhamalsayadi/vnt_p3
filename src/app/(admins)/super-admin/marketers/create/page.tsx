"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { ChevronRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateMarketerPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1200px] mx-auto space-y-8">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999]">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <Link href="/super-admin/marketers" className="hover:text-[#333]">marketers</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">create marketer account</span>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-[32px] shadow-sm border border-[#EAECF0] p-12 relative overflow-hidden">
               <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Name */}
                    <div className="relative">
                       <label className="absolute -top-3 left-6 px-3 bg-white text-[11px] font-bold text-[#999] uppercase tracking-wider z-10">
                          Name
                       </label>
                       <input 
                         type="text" 
                         defaultValue="Suliman"
                         className="w-full px-6 py-5 bg-white border border-[#EAECF0] rounded-xl text-sm font-bold text-[#1D1F24] outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                       />
                    </div>

                    {/* Email */}
                    <div className="relative">
                       <label className="absolute -top-3 left-6 px-3 bg-white text-[11px] font-bold text-[#999] uppercase tracking-wider z-10">
                          Email
                       </label>
                       <input 
                         type="email" 
                         defaultValue="SulimanMokhtar1995@Gmail.Com"
                         className="w-full px-6 py-5 bg-white border border-[#EAECF0] rounded-xl text-sm font-bold text-[#1D1F24] outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                       />
                    </div>

                    {/* Phone Row */}
                    <div className="grid grid-cols-[120px_1fr] gap-4">
                       <div className="relative">
                          <label className="absolute -top-3 left-6 px-3 bg-white text-[11px] font-bold text-[#999] uppercase tracking-wider z-10">
                             Mobile Code
                          </label>
                          <select className="w-full px-6 py-5 bg-white border border-[#EAECF0] rounded-xl text-sm font-bold text-[#1D1F24] outline-none appearance-none cursor-pointer">
                             <option>966</option>
                          </select>
                       </div>
                       <div className="relative">
                          <input 
                            type="text" 
                            defaultValue="055555555"
                            className="w-full px-6 py-5 bg-white border border-[#EAECF0] rounded-xl text-sm font-bold text-[#1D1F24] outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                       </div>
                    </div>

                    {/* Country */}
                    <div className="relative">
                       <select className="w-full px-6 py-5 bg-white border border-[#EAECF0] rounded-xl text-sm font-bold text-[#1D1F24] outline-none appearance-none cursor-pointer">
                          <option>Saudi Arabia</option>
                       </select>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-4">
                     <p className="text-[13px] font-black text-[#1D1F24]">Image</p>
                     <div className="relative max-w-xl group">
                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" size={20} />
                        <div className="w-full pl-12 pr-4 bg-white border border-[#EAECF0] rounded-xl h-[52px] flex items-center justify-between overflow-hidden">
                           <span className="text-sm font-medium text-[#CCC]"></span>
                           <button type="button" className="h-full px-6 border-l border-[#EAECF0] text-sm font-bold text-[#333] hover:bg-[#F9FAFB] transition-all">
                              browse
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-10">
                     <button 
                       type="button"
                       onClick={() => router.back()}
                       className="px-12 py-4 bg-[#E0E2E7] text-[#1D1F24] rounded-xl text-sm font-black uppercase tracking-widest hover:opacity-90 transition-all"
                     >
                       CANCEL
                     </button>
                     <button 
                       type="submit"
                       className="px-12 py-4 bg-[#121111] text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg"
                     >
                       CREATE
                     </button>
                  </div>

               </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
