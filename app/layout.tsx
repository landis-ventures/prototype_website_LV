import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import N8nChat from "@/components/N8nChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Landis Automation - Intelligent Automation for Financial Services",
  description: "We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.",
  keywords: "automation, RPA, financial services, process automation, workflow automation, document processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <N8nChat />
      </body>
    </html>
  );
}