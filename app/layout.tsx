import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import ContextComp from "@/context";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tuzaq",
  description: "A Fuel Inventory system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <ContextComp>
        {children}
        </ContextComp>
      </body>
    </html>
  );
}
