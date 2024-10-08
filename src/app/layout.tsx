import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import Link from "next/link";
import { myInfo } from "./globalConstants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aayush Kumar Kumawat",
  description: "Here is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
        <div className="fixed md:w-full left-10 md:left-0 bottom-32 md:bottom-10 z-50">
          <NavBar />
        </div>
        <Link
          href={"https://github.com/Aayush259"}
          target="_blank"
          className="fixed right-10 md:right-20 bottom-10 z-50">
          <AnimatedTooltip items={[myInfo]} />
        </Link>
      </body>
    </html>
  );
}
