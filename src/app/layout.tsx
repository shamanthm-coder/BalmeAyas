import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const display = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Balme Ayas | Precision Engineering & Advanced Manufacturing",
    template: "%s | Balme Ayas",
  },
  description:
    "Balme Ayas delivers precision engineering and advanced manufacturing solutions for defense, automotive, aerospace, aeronautics, and renewable energy industries.",
  keywords: [
    "Balme Ayas",
    "precision engineering",
    "CNC machining",
    "EDM",
    "manufacturing India",
    "aerospace components",
    "defense machining",
  ],
  openGraph: {
    title: "Balme Ayas | Precision Engineering",
    description:
      "CNC, EDM, tooling, and precision components for critical industries.",
    url: "https://balmeayas.in",
    siteName: "Balme Ayas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
