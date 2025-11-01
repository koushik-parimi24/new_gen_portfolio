
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SmoothCursor } from "../components/ui/smooth-cursor";
import PageTransitionLoader from "@/components/PageTransitionLoader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className="min-h-screen bg-gray-50"
      > <SmoothCursor/>
      <PageTransitionLoader/>
        <Header/>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
