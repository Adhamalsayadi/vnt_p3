"use client";

import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import { Eye, Edit3, Trash2, RotateCw, EyeOff } from "lucide-react";
import {
  ConfirmationModal,
  EditEnquiryModal,
} from "@/components/shared/Modals";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import { useEnquiryModalStore } from "@/store/enquiryModalStore";
import {
  useEnquiries,
  useUpdateEnquiry,
  useDeleteEnquiry,
  useToggleEnquiryVisibility,
} from "@/hooks/useEnquiries";
import { Enquiry } from "@/types/enquiries";

export default function ClientEnquiriesPage() {
  const user = useAuthStore((state) => state.user);
  const { activeEnquiry, modalType, openModal, closeModal } =
    useEnquiryModalStore();

  const {
    data: enquiries = [],
    isLoading,
    isError,
  } = useEnquiries({
    userId: user?.id,
    onlyMyEnquiries: true,
    includeHidden: true,
    page: 1,
    pageSize: 100,
  });

  const updateEnquiry = useUpdateEnquiry();
  const deleteEnquiry = useDeleteEnquiry();
  const toggleVisibility = useToggleEnquiryVisibility();

  const handleAction = (id: string, action: string) => {
    const enquiry = enquiries.find((e: Enquiry) => e.id === id);
    if (!enquiry) return;
    switch (action) {
      case "Delete":
        openModal("delete", enquiry);
        break;
      case "Edit":
        openModal("edit", enquiry);
        break;
      case "Hide":
        toggleVisibility.mutate(id);
        break;
      default:
        alert(`${action} action on enquiry ${id}`);
    }
  };

  const confirmDelete = () => {
    if (activeEnquiry)
      deleteEnquiry.mutate(activeEnquiry.id, { onSuccess: closeModal });
  };

  const saveEdit = (data: {
    title?: string;
    quantity?: string;
    status?: string;
  }) => {
    if (activeEnquiry)
      updateEnquiry.mutate(
        {
          id: activeEnquiry.id,
          payload: {
            title: data.title,
            quantity: data.quantity ? Number(data.quantity) : undefined,
            enquiryStatus: data.status,
          },
        },
        { onSuccess: closeModal }
      );
  };

  const loading = isLoading;
  const error = isError ? "Unable to load your enquiries right now." : null;
  const isDeleteModalOpen = modalType === "delete";
  const isEditModalOpen = modalType === "edit";

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Client" />
      <div className="flex-1 flex flex-col">
        <Header role="Client" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="flex flex-col gap-8">
            <div className="text-[#667085] text-sm font-medium">
              <Link
                href="/users/client"
                className="hover:text-black transition-colors"
              >
                Dashboard
              </Link>{" "}
              &gt; <span className="text-[#98A2B3]">Enquiries</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Enquiries</h1>

            {error && (
              <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B42318]">
                {error}
              </div>
            )}

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-200">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      #
                    </th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      Title
                    </th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      Products
                    </th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {loading ? (
                    <tr>
                      <td
                        className="px-6 py-8 text-sm text-[#667085]"
                        colSpan={6}
                      >
                        Loading enquiries...
                      </td>
                    </tr>
                  ) : enquiries.length === 0 ? (
                    <tr>
                      <td
                        className="px-6 py-8 text-sm text-[#667085]"
                        colSpan={6}
                      >
                        You have not posted any enquiries yet.
                      </td>
                    </tr>
                  ) : (
                    enquiries.map((enq, index) => (
                      <tr
                        key={enq.id}
                        className={cn(
                          "hover:bg-[#F9FAFB] transition-all duration-300",
                          enq.isHidden &&
                            "bg-[#F2F4F7]/60 opacity-60 grayscale-[0.5]"
                        )}
                      >
                        <td className="px-6 py-5 text-sm text-[#667085]">
                          {index + 1}
                        </td>
                        <td className="px-6 py-5 text-sm font-semibold text-[#101828]">
                          <div className="flex items-center gap-2">
                            {enq.title}
                            {enq.isHidden && (
                              <span className="px-1.5 py-0.5 rounded bg-gray-200 text-[10px] font-bold text-gray-600 uppercase">
                                Hidden
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-[#667085]">
                          {enq.categoryLabel || enq.category}
                        </td>
                        <td className="px-6 py-5 text-sm text-[#667085]">
                          {enq.quantity}
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-bold capitalize",
                              enq.enquiryStatus.toLowerCase() === "pending"
                                ? "bg-[#FEF3F2] text-[#B42318]"
                                : "bg-[#ECFDF3] text-[#027A48]"
                            )}
                          >
                            {enq.enquiryStatus}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex justify-end gap-3 text-[#667085]">
                            <button
                              onClick={() => handleAction(enq.id, "View")}
                              className="p-1 hover:text-primary transition-colors"
                              title="View"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              onClick={() => handleAction(enq.id, "Edit")}
                              className="p-1 hover:text-primary transition-colors"
                              title="Edit"
                            >
                              <Edit3 size={18} />
                            </button>
                            <button
                              onClick={() => handleAction(enq.id, "Delete")}
                              className="p-1 hover:text-[#B42318] transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                            <button
                              onClick={() => handleAction(enq.id, "Hide")}
                              className={cn(
                                "p-1 transition-colors",
                                enq.isHidden
                                  ? "text-primary"
                                  : "hover:text-gray-900"
                              )}
                              title={enq.isHidden ? "Unhide" : "Hide"}
                            >
                              <EyeOff size={18} />
                            </button>
                            <button
                              onClick={() => handleAction(enq.id, "Resubmit")}
                              className="p-1 hover:text-primary transition-colors"
                              title="Resubmit"
                            >
                              <RotateCw size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Delete Enquiry"
        message={`Are you sure you want to delete "${activeEnquiry?.title}"? This action cannot be undone.`}
      />

      <EditEnquiryModal
        isOpen={isEditModalOpen}
        onClose={closeModal}
        enquiry={
          activeEnquiry
            ? {
                ...activeEnquiry,
                status: activeEnquiry.enquiryStatus.toLowerCase(),
              }
            : null
        }
        onSave={saveEdit}
      />
    </div>
  );
}
