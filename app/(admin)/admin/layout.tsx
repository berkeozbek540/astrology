import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../../globals.css";
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
  title: "Melis Tezcan | Admin",
  description: "Astrolog Melis Tezcan Yönetim Paneli",
};

export default function AdminRootLayout({
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
