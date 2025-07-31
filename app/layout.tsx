import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tourney - Modern Tournament Management SaaS",
  description:
    "Create, manage, and participate in tournaments with our modern SaaS platform. Built for gaming communities and esports organizations.",
  keywords: "tournament, gaming, esports, bracket, competition, SaaS",
  authors: [{ name: "officialPeter.DEV" }],
  creator: "officialPeter.DEV",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/logo.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/logo.png", sizes: "120x120", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Tourney - Modern Tournament Management SaaS",
    description:
      "Create, manage, and participate in tournaments with our modern SaaS platform.",
    url: "https://tourney-saas.vercel.app",
    siteName: "Tourney",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Tourney - Tournament Management Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourney - Modern Tournament Management SaaS",
    description:
      "Create, manage, and participate in tournaments with our modern SaaS platform.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/logo.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#048ba8" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
