import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeWork - Freelancer Escrow | RAGSPRO",
  description: "Protect your payments with escrow. SafeWork ensures freelancers get paid and clients get delivered work. Razorpay powered.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body className={`${inter.className} antialiased`}>{children}</body></html>);
}
