import "@/styles/globals.css";
import { poppins, montserrat } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affinity Altitude Accumate - Professional Accounting & Bookkeeping",
  description: "Expert bookkeeping, accounting, and taxation services to help your business thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
