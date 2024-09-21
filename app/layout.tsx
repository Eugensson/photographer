import type { Metadata } from "next";
import { AnimatePresence } from "framer-motion";
import { Mulish, Playfair_Display } from "next/font/google";

import { Header } from "@/components/header";
import { Cursor } from "@/components/cursor";
import { CursorProvider } from "@/components/cursor-context";

import "./globals.css";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair_display",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Photographer",
  description: "Photographer & Film Maker in Los Angeles, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display.variable} ${mulish.variable} antialiased`}
      >
        <CursorProvider>
          <Header />
          <AnimatePresence initial={true} mode="wait">
            <main className="w-screen h-screen">{children}</main>
          </AnimatePresence>
          <Cursor />
        </CursorProvider>
      </body>
    </html>
  );
}
