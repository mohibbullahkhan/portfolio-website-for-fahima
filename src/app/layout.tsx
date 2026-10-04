import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${anton.variable} ${bebas.variable} ${inter.variable}`}>
      <body className="bg-background text-primaryText antialiased min-h-screen selection:bg-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
