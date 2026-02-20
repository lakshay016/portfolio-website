import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshay Gupta — Software Developer",
  description:
    "Lakshay Gupta is a Computer Science student at the University of Toronto building backend-focused software, APIs, and ML projects.",
  keywords: [
    "Lakshay Gupta",
    "Lakshay Gupta UofT",
    "Lakshay Gupta software developer",
    "Lakshay Gupta portfolio",
  ],
  openGraph: {
    title: "Lakshay Gupta — Software Developer",
    description:
      "Portfolio of Lakshay Gupta, CS student at UofT. Projects in APIs, databases, and ML.",
    url: "https://lakshaygupta.vercel.app",
    siteName: "Lakshay Gupta Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
