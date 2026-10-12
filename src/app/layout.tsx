import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAHIMA — Video Editor & Creative Storyteller",
  description:
    "Transforming raw footage into cinematic experiences through creative editing, storytelling, precision color grading, and visual excellence.",
  keywords: [
    "Video Editor",
    "Creative Storyteller",
    "Color Grading",
    "Fahima",
    "Premiere Pro",
    "DaVinci Resolve",
    "Motion Graphics",
    "Commercial Video",
    "Reels Editor",
  ],
  authors: [{ name: "Fahima" }],
  creator: "Fahima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahimaedits.com",
    title: "FAHIMA — Video Editor & Creative Storyteller",
    description:
      "Transforming raw footage into cinematic experiences through creative editing, storytelling, and visual excellence.",
    siteName: "Fahima Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fahima Video Editor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAHIMA — Video Editor & Creative Storyteller",
    description: "Transforming raw footage into cinematic experiences through creative editing.",
    creator: "@fahimaedits",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-primaryText antialiased min-h-screen selection:bg-brand-violet selection:text-white">
        {children}
      </body>
    </html>
  );
}
