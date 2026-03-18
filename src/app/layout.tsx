import "./globals.css";
import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";

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
        <QueryProvider>
          <main className="relative w-full overflow-x-hidden">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
