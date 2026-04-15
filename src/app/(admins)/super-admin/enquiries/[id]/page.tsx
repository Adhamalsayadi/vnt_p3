"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ChevronRight, ArrowLeft, Trash2, Pencil, Calendar, Layers, Box, Hash, FileText, CheckCircle2 } from "lucide-react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { cn } from "@/lib/utils";
import { ConfirmationModal } from "@/components/shared/Modals";
import EditStatusModal from "@/components/shared/EditStatusModal";

export default function EnquiryDetailsPage() {
  const router = useRouter();
  const { id } = useParams();
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [enquiryData] = useState({
    title: "First Enquiry",
    client: "Company name test",
    category: "Products",
    subCategory: "Electronics",
    description: "Looking for high-quality industrial grade cooling fans with specified RPM and power rating. Must include warranty certification.",
    requiredDate: "2024-03-01",
    unit: "ea",
    quantity: 214,
    adminStatus: "approved",
    vtmStatus: "approved",
  });

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto pb-20">
          <div className="max-w-[1200px] mx-auto space-y-8">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999]">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <Link href="/super-admin/enquiries" className="hover:text-[#333]">enquiries</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">view enquiry</span>
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="p-10 md:p-12 border-b border-[#F2F4F7] flex items-center justify-between bg-white sticky top-0 z-10">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => router.back()}
                      className="w-12 h-12 rounded-full border border-[#EAECF0] flex items-center justify-center text-[#999] hover:text-[#333] hover:bg-[#F9FAFB] transition-all"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-[28px] font-black text-[#1D1F24] lowercase leading-none translate-y-[-2px]">
                      view enquiry
                    </h1>
                  </div>
                  <div className="flex items-center gap-4">
                     <button 
                       onClick={() => setIsStatusModalOpen(true)}
                       className="bg-[#F2F4F7] text-[#1D1F24] px-8 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-widest hover:bg-[#EAECEF] transition-all active:scale-95"
                     >
                       Edit Status
                     </button>
                     <button 
                       onClick={() => setIsDeleteModalOpen(true)}
                       className="w-12 h-12 rounded-full border border-red-100 flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 transition-all shadow-sm"
                     >
                       <Trash2 size={20} />
                     </button>
                  </div>
               </div>

               <div className="p-10 md:p-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                     {/* Left Content Area (Enquiry Info) */}
                     <div className="md:col-span-2 space-y-12">
                        {/* Title Section */}
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <span className="w-1.5 h-6 bg-primary rounded-full" />
                              <p className="text-[11px] font-black text-[#999] uppercase tracking-[3px]">Enquiry Title</p>
                           </div>
                           <h2 className="text-[32px] font-bold text-[#1D1F24] tracking-tight">{enquiryData.title}</h2>
                           <div className="flex items-center gap-2 text-sm font-bold text-[#666]">
                              <span className="text-[#999]">Posted by:</span>
                              <Link href="/super-admin/clients/1" className="text-primary hover:underline">{enquiryData.client}</Link>
                           </div>
                        </div>

                        {/* Description Section */}
                        <div className="p-8 bg-[#F9FAFB] border border-[#EAECF0] rounded-[32px] space-y-6">
                           <div className="flex items-center gap-3">
                              <FileText size={18} className="text-[#999]" />
                              <p className="text-[11px] font-black text-[#999] uppercase tracking-[2px]">Description</p>
                           </div>
                           <p className="text-[16px] font-medium text-[#444] leading-relaxed italic">
                              "{enquiryData.description}"
                           </p>
                        </div>

                        {/* Offers Section Placeholder */}
                        <div className="space-y-6">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <CheckCircle2 size={18} className="text-[#999]" />
                                 <p className="text-[11px] font-black text-[#999] uppercase tracking-[2px]">Received Offers</p>
                              </div>
                              <Link href={`/super-admin/enquiries/${id}/offers`} className="text-[13px] font-black text-primary hover:underline uppercase tracking-widest italic">View All Offers</Link>
                           </div>
                           <div className="p-16 border-2 border-dashed border-[#EAECF0] rounded-[32px] flex flex-col items-center justify-center gap-4 text-[#999]">
                              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                                 <Layers size={32} className="opacity-20" />
                              </div>
                              <p className="text-sm font-bold lowercase">no offers received yet</p>
                           </div>
                        </div>
                     </div>

                     {/* Right Sidebar Area (Stats/Tags) */}
                     <div className="space-y-10">
                        {/* Details Cards */}
                        <div className="space-y-6">
                           <div className="flex flex-col gap-4">
                              <div className="flex items-center gap-4 p-5 bg-white border border-[#F2F4F7] rounded-[24px] shadow-sm">
                                 <div className="w-12 h-12 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-primary border border-[#EAECF0]">
                                    <Layers size={20} />
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-[#999] uppercase tracking-widest">Category</p>
                                    <p className="text-[14px] font-bold text-[#1D1F24]">{enquiryData.category}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-4 p-5 bg-white border border-[#F2F4F7] rounded-[24px] shadow-sm">
                                 <div className="w-12 h-12 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-primary border border-[#EAECF0]">
                                    <Box size={20} />
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-[#999] uppercase tracking-widest">Sub Category</p>
                                    <p className="text-[14px] font-bold text-[#1D1F24]">{enquiryData.subCategory}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-4 p-5 bg-white border border-[#F2F4F7] rounded-[24px] shadow-sm">
                                 <div className="w-12 h-12 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-primary border border-[#EAECF0]">
                                    <Hash size={20} />
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-[#999] uppercase tracking-widest">Quantity</p>
                                    <p className="text-[14px] font-bold text-[#1D1F24]">{enquiryData.quantity} {enquiryData.unit}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-4 p-5 bg-white border border-[#F2F4F7] rounded-[24px] shadow-sm">
                                 <div className="w-12 h-12 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-primary border border-[#EAECF0]">
                                    <Calendar size={20} />
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-[#999] uppercase tracking-widest">Required Date</p>
                                    <p className="text-[14px] font-bold text-[#1D1F24]">{enquiryData.requiredDate}</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Status Section */}
                        <div className="p-8 bg-[#1D1F24] rounded-[32px] text-white shadow-xl shadow-black/10 flex flex-col items-center text-center space-y-6">
                           <p className="text-[10px] font-black text-white/40 uppercase tracking-[3px]">Enquiry Status</p>
                           <div className="space-y-2">
                              <p className="text-[12px] font-bold text-[#F3D45A] uppercase tracking-widest italic">APPROVED</p>
                              <div className="flex items-center justify-center gap-1">
                                 {[1, 2, 3].map(i => (
                                    <div key={i} className={cn("w-2 h-2 rounded-full", i === 1 ? "bg-[#F3D45A]" : "bg-white/10")} />
                                 ))}
                              </div>
                           </div>
                           <p className="text-[13px] font-medium text-white/60 lowercase italic">Successfully approved by both VTM and Super Admin systems.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </main>

        <EditStatusModal 
          isOpen={isStatusModalOpen}
          onClose={() => setIsStatusModalOpen(false)}
          currentStatus={enquiryData.adminStatus}
          options={["approved", "pending", "rejected"]}
          onUpdate={(newStatus) => {
            console.log("Updating enquiry status:", id, newStatus);
          }}
          title="Update Enquiry Status"
        />

        <ConfirmationModal 
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            console.log("Deleting enquiry:", id);
            router.push("/super-admin/enquiries");
          }}
          title="Delete Enquiry"
          message={`Are you sure you want to delete this enquiry? This action cannot be undone.`}
        />
      </div>
    </div>
  );
}
