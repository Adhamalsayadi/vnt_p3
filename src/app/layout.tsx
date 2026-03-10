import "./globals.css";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "VnT Platform",
    template: "%s",
  },
  description: "VnT public platform for procurement services and enquiries.",
  icons: {
    icon: "/VT.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased">
        <main className="relative w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
