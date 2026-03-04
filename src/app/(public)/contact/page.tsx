import ContactHero from "@/components/contact/components/contacthero";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | V&T Platform",
  description:
    "Get in touch with V&T Platform for enquiries, support, and service publishing requests.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
    </div>
  );
}
