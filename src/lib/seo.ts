import { Metadata } from "next";

const siteName = "VnT Platform";

type PageSEO = {
  title: string;
  description: string;
};

export function buildPageMetadata({ title, description }: PageSEO): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
