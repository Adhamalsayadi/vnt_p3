import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "V&T Platform";

type PageSEO = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title, description, path }: PageSEO): Metadata {
  const url = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: "/VT.png",
          width: 1200,
          height: 630,
          alt: `${siteName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/VT.png"],
    },
  };
}
