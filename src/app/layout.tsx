import type { Metadata } from "next";
import "./globals.css";
import { getSettings } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const title = settings.seoTitle || "FAHIMA — Video Editor & Post-Production Studio";
  const description =
    settings.seoDescription ||
    "International video editor crafting high-retention commercial films, viral creator shorts, podcast series, and cinematic stories for top brands and creators in the US, UK, and Australia.";
  const ogImage =
    settings.ogImageUrl ||
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80";

  return {
    title,
    description,
    keywords: [
      "Video Editor",
      "Post-Production",
      "DaVinci Resolve Colorist",
      "Premiere Pro Editor",
      "Fahima",
      "Commercial Video Editor",
      "Podcast Video Editor",
      "YouTube Video Editor",
      "Short Form Video Editor",
      "Motion Graphics",
    ],
    authors: [{ name: settings.siteName || "Fahima" }],
    creator: settings.siteName || "Fahima",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://fahimaedits.com",
      title,
      description,
      siteName: settings.siteName || "Fahima Video Editor Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@fahimaedits",
      images: [ogImage],
    },
    icons: {
      icon: settings.faviconUrl || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F8F5] text-[#171717] font-sans antialiased selection:bg-[#171717] selection:text-[#F8F8F5] min-h-screen">
        {children}
      </body>
    </html>
  );
}
