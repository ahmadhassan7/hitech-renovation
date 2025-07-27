import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ClientOnly from "@/components/providers/ClientOnly";
import Cursor from "@/components/ui/Cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HITECH Renovations | Premier Construction & Renovation Services in Vancouver",
  description: "HITECH Renovations offers expert renovation, home building, commercial & multifamily construction services throughout Vancouver and Greater BC. Transform your space with quality craftsmanship.",
  keywords: "renovations vancouver, home building vancouver, commercial construction BC, multifamily construction, HITECH renovations",
  openGraph: {
    title: "HITECH Renovations | Premier Construction Services",
    description: "Expert renovation and construction services in Vancouver and Greater BC",
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
        className={`${inter.variable} ${bebas.variable}`}
      >
        <ClientOnly>
          <SmoothScrollProvider>
            <Cursor />
          </SmoothScrollProvider>
        </ClientOnly>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
