import "./globals.scss";
import { Inter } from "next/font/google";

import Footer from "./footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Nguyen.Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} font-sans text-base md:text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
