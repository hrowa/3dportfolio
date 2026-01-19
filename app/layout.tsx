import React from "react";
import "./globals.css";
import Link from "next/link";
import { Mail, Send, Linkedin } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className="scroll-smooth">
        <body className="bg-[#fcfcfc] text-black antialiased font-sans">
        <header className="fixed top-0 w-full z-50 bg-[#fcfcfc]/90 backdrop-blur-sm pt-8 pb-4 px-6 md:px-12">

            {/* ЛОГОТИП ES (Увеличен) */}
            <div className="flex justify-center mb-8">
                <Link href="/" className="group clickable">
                    <div className="w-16 h-16 border-2 border-black flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                        <span className="font-black text-2xl -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">
                            ES
                        </span>
                    </div>
                </Link>
            </div>

            {/* НАВИГАЦИЯ: СЕТКА ИЗ 3-Х КОЛОНОК ДЛЯ ИДЕАЛЬНОГО ЦЕНТРИРОВАНИЯ */}
            <nav className="max-w-7xl mx-auto grid grid-cols-3 items-center border-t border-black/5 pt-6">

                {/* 1. Левая колонка (пустая для баланса) */}
                <div className="hidden md:block"></div>

                {/* 2. Центральная колонка (Меню увеличено) */}
                <div className="flex justify-center gap-10 text-[13px] uppercase tracking-[0.3em] font-extrabold">
                    <Link href="/" className="hover:opacity-50 transition clickable">Portfolio</Link>
                    <Link href="/about" className="hover:opacity-50 transition clickable">About me</Link>
                    <Link href="/contacts" className="hover:opacity-50 transition clickable">Contacts</Link>
                </div>

                {/* 3. Правая колонка (CV и Соцсети) */}
                <div className="flex items-center justify-end gap-6">
                    <a href="/esuldin_cv.pdf" target="_blank" className="text-[12px] uppercase font-black tracking-widest hover:opacity-50 transition clickable border-r border-black/10 pr-6">
                        CV
                    </a>

                    <div className="flex gap-5 items-center">
                        <a href="https://www.linkedin.com/in/evgeniy-suldin-16825a24/" target="_blank" className="hover:scale-125 transition-transform clickable">
                            <Linkedin size={18} strokeWidth={2} />
                        </a>
                        <a href="https://t.me/hrowa" target="_blank" className="hover:scale-125 transition-transform clickable">
                            <Send size={18} strokeWidth={2} />
                        </a>
                        <a href="mailto:adjidomo@gmail.com" className="hover:scale-125 transition-transform clickable">
                            <Mail size={18} strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </nav>
        </header>

        {/* Увеличен отступ сверху из-за увеличения хедера */}
        <main className="pt-64 pb-20">{children}</main>
        </body>
        </html>
    );
}