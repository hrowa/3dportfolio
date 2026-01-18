import React from "react";
import "./globals.css";
import Link from "next/link";
import Cursor from "@/components/Cursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className="scroll-smooth">
        <body className="bg-[#fcfcfc] text-black antialiased font-sans">
        <Cursor />
        <header className="fixed top-0 w-full z-50 bg-[#fcfcfc]/90 backdrop-blur-sm pt-8 pb-4 px-6 md:px-12">
            <div className="flex justify-center mb-6">
                <Link href="/" className="group clickable">
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                        <span className="font-black text-xl -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">EE</span>
                    </div>
                </Link>
            </div>

            <nav className="max-w-xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold border-t border-black/5 pt-4">
                <Link href="/" className="hover:opacity-50 transition clickable">Portfolio</Link>
                <Link href="/about" className="hover:opacity-50 transition clickable">About me</Link>
                <Link href="/contacts" className="hover:opacity-50 transition clickable">Contacts</Link>
                <a href="/cv.pdf" target="_blank" className="hover:opacity-50 transition clickable">CV</a>
            </nav>
        </header>

        <main className="pt-48 pb-20">{children}</main>
        </body>
        </html>
    );
}