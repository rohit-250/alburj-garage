import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Burj Garage | Car & Bike Service in Ras Al Khaimah",
  description:
    "Al Burj Garage is a trusted car, SUV, and heavy vehicle service center in Al Qussaidat, Ras Al Khaimah. Mechanical, electrical, AC, painting, and maintenance services.",
  keywords: [
    "Al Burj Garage", "Al Burj Garage UAE", "Al Burj Garage Dubai", "AlBurjGarage", "AlBurj Garage UAE",
    "Car service Ras Al Khaimah",
    "Bike service Ras Al Khaimah",
    "Garage in Al Qussaidat",
    "Auto repair Ras Al Khaimah",
    "Vehicle maintenance UAE",
    "Car garage Ras Al Khaimah",
  ],
  openGraph: {
    title: "Al Burj Garage | Trusted Auto Service Center",
    description:
      "Professional car, bike, SUV & heavy vehicle servicing in Ras Al Khaimah.",
    url: "https://alburj-garage.vercel.app",
    siteName: "Al Burj Garage",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Al Burj Garage Workshop",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
