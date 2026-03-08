import ContactHero from "@/components/contact/contacthero";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | VnT Platform",
  description:
    "Get in touch with VnT Platform for enquiries, support, and service publishing requests.",
});

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
    </div>
  );
}
