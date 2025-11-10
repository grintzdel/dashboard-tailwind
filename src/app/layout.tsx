import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {SidebarWrapper} from "@/modules/app/react/navigation/sidebar-wrapper";
import {HeaderWrapper} from "@/modules/app/react/navigation/header-wrapper";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "InsightHub - Dashboard",
    description: "Dashboard analytics and insights",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        >
        <SidebarWrapper/>
        <HeaderWrapper/>
        <main className="ml-64 mt-20 p-8">
            {children}
        </main>
        </body>
        </html>
    );
}
