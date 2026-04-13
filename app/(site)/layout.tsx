import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astrolog Melis Tezcan",
  description: "Astrolog Melis Tezcan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="bg-krem min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
