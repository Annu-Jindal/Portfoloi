import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://annu-jindal-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Annu Jindal | Cinematic Forensics Portfolio",
  description:
    "Premium editorial portfolio for Annu Jindal, blending forensic science, cybersecurity, and cinematic case-study storytelling.",
  keywords: [
    "Annu Jindal",
    "forensic science portfolio",
    "cybersecurity portfolio",
    "digital forensics",
    "Next.js portfolio",
    "cinematic portfolio website",
  ],
  openGraph: {
    title: "Annu Jindal | Cinematic Forensics Portfolio",
    description:
      "A premium dark editorial portfolio designed around case studies, evidence-led storytelling, and modern performance.",
    url: siteUrl,
    siteName: "Annu Jindal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annu Jindal | Cinematic Forensics Portfolio",
    description:
      "A premium dark editorial portfolio for forensic science and cybersecurity storytelling.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
