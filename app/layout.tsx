import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full px-4 sm:px-6 md:px-12 lg:max-w-[75%] lg:mx-auto flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
