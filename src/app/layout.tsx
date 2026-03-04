import CountryModal from "@/components/shared/CountryModal";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CountryModal />
        {children}
      </body>
    </html>
  );
}
