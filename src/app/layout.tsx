import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ProfitDoctor - Find Hidden Profit Leaks in Your Shopify Store",
    description: "Discover in 10 minutes how much money your store is losing and exactly what to do to recover it. AI-powered diagnosis for Shopify stores.",
    keywords: ["Shopify", "profit", "analytics", "ecommerce", "store audit", "AI"],
    openGraph: {
        title: "ProfitDoctor - Find Hidden Profit Leaks",
        description: "AI-powered Shopify store diagnosis. Find profit leaks in 10 minutes.",
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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
