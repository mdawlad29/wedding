import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageRender from "./PageRender";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding application",
  description: "Generated by Wedding application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageRender>
          <Header />
          {/* md:px-5 px-2 md:py-5 py-2 */}
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PageRender>
      </body>
    </html>
  );
}
