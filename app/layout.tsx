import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Header from "@/components/Home/Header";
import Footer from "@/components/Global/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Aerotech Aircraft Maintenance Ltd.",
  description: "Aerotech Aircraft Maintenance Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Aerotech Aircraft Maintenance Ltd.</title>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
