"use client";

import { useState } from "react";
import { Enquiry, SellerRating } from "@/types/enquiries";
import EnquiryModal from "@/hooks/EnquiryModal";
import SellerRatingModal from "@/hooks/SellerRatingModal";
import SuccessModal from "@/hooks/SuccessModal";
import { fetchSellerRatingBySellerId } from "@/lib/api/enquiries/enquiries";

type ModalType = "enquiry" | "rating" | "success" | null;

interface UseModalFlowReturn {
  activeModal: ModalType;
  selectedEnquiry: Enquiry | null;
  openEnquiry: (enquiry: Enquiry) => void;
  closeAll: () => void;
  renderModals: () => React.ReactNode;
}

export function useModalFlow(): UseModalFlowReturn {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [sellerRating, setSellerRating] = useState<SellerRating | null>(null);
  const [isRatingLoading, setIsRatingLoading] = useState(false);

  const openEnquiry = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setActiveModal("enquiry");
  };

  const closeAll = () => {
    setActiveModal(null);
    setSelectedEnquiry(null);
    setSellerRating(null);
    setIsRatingLoading(false);
  };

  const openRating = async () => {
    if (!selectedEnquiry?.sellerId) {
      setActiveModal("rating");
      return;
    }

    setActiveModal("rating");
    setIsRatingLoading(true);
    const data = await fetchSellerRatingBySellerId(selectedEnquiry.sellerId);
    setSellerRating(data);
    setIsRatingLoading(false);
  };

  const renderModals = () => (
    <>
      {activeModal === "enquiry" && selectedEnquiry && (
        <EnquiryModal
          enquiry={selectedEnquiry}
          onClose={closeAll}
          onOpenRating={openRating}
          onSubmitRfq={() => setActiveModal("success")}
        />
      )}

      <SellerRatingModal
        isOpen={activeModal === "rating"}
        onClose={() => setActiveModal("enquiry")}
        sellerName={selectedEnquiry?.sellerName}
        rating={sellerRating}
        isLoading={isRatingLoading}
      />

      <SuccessModal isOpen={activeModal === "success"} onClose={closeAll} />
    </>
  );

  return { activeModal, selectedEnquiry, openEnquiry, closeAll, renderModals };
}
