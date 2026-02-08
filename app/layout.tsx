import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const merriWeather = Merriweather({
  variable: "--font-merri-weather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dogopedia",
  description:
    "Dogopedia is a mini encyclopedia for dogs, sharing bite-sized knowledge about dog breeds, care, behavior, and traits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake" className="bg-neutral-content">
      <body
        className={`${merriWeather.variable} ${inter.variable} antialiased font-sans bg-base-200`}
      >
        <Navbar />
        <main className="px-5 py-5 min-h-screen flex flex-col overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
