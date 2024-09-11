import type { Metadata } from "next";

import "@/app/globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Redberry",
  description:
    "Buy and sell housing properties by the help of real estate angent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <header>
          <Navbar />
          <div className="w-full h-[2px] bg-gray-300" />
        </header>

        <main className="px-40 py-8">{children}</main>
      </body>
    </html>
  );
}
