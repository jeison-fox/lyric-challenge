import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyric Music",
  description: "Lyric Music is your gateway to a fresh and immersive way to enjoy the bands and artists you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
