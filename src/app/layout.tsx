import type { Metadata } from "next";

import "./globals.css";
import {Inter} from "next/font/google";

import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustoso - Pastry with Love",
  description: "Fresh ingredients every day in ways you can't resist",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
      />
    </head>
    <body className={inter.className}>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
