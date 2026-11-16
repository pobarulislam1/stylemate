import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Tiro_Bangla } from "next/font/google";
import "./globals.css";

const font = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Tiro_Bangla({
  subsets: ["bengali", "latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "স্টাইলমেট",
  description: "কোনটার সাথে কী মানাবে, পোশাক ম্যাচিং অ্যাপ",
};

export const viewport: Viewport = {
  themeColor: "#f4f6fb",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${font.className} ${display.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}