import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { FOOTER_SUPPORT_LINKS, FOOTER_USEFUL_LINKS } from "@/config/public";

export default function Footer() {
  return (
    <footer className="bg-white py-[60px] border-t border-[#e5e7eb] mt-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        <div className="footer-info">
          <Image
            src="/VT.png"
            alt="Logo"
            width={66}
            height={54}
            className="logo-image"
          />
          <p className="my-5 text-[#666] max-w-[250px]">
            A company to publish services across multiple industries.
          </p>
          <div className="flex gap-[15px] text-[20px] text-dark">
            <SocialIcon href="#" label="Facebook">
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <Twitter size={18} />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <Youtube size={18} />
            </SocialIcon>
          </div>
        </div>

        <FooterColumn title="Useful Links" links={FOOTER_USEFUL_LINKS} />
        <FooterColumn title="Support" links={FOOTER_SUPPORT_LINKS} />

        <div className="footer-links">
          <h3 className="mb-5 text-[18px] font-semibold">Contacts us</h3>
          <ul className="space-y-2.5">
            <li>
              <Link
                href="mailto:Vnt@gmail.com"
                className="flex items-center gap-2 text-[#666] hover:text-primary transition-colors"
              >
                <Mail size={16} />
                Vnt@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:0101235772"
                className="flex items-center gap-2 text-[#666] hover:text-primary transition-colors"
              >
                <Phone size={16} />
                (010) 123 – 5772
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="footer-links">
      <h4 className="mb-5 text-[18px] font-semibold">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[#666] hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-dark hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}
