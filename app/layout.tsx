/* eslint-disable */
import React from "react";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Mail, Send, Linkedin } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className="scroll-smooth">
        <body className="bg-[#fcfcfc] text-black antialiased font-sans">
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=106347243", "ym");

                    ym(106347243, "init", {
                        ssr: true,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                        ecommerce: "dataLayer"
                    });
                `}
        </Script>
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/106347243" style={{ position: "absolute", left: "-9999px" }} alt="" />
            </div>
        </noscript>

        <header className="fixed top-0 w-full z-50 bg-[#fcfcfc]/90 backdrop-blur-sm pt-8 pb-4 px-6 md:px-12">

            {/* ЛОГОТИП ES (Увеличен) */}
            <div className="flex justify-center mb-6 md:mb-8">
                <Link href="/" className="group clickable">
                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-black flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                            <span className="font-black text-xl md:text-2xl -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">
                                ES
                            </span>
                    </div>
                </Link>
            </div>

            {/* НАВИГАЦИЯ: АДАПТИВНАЯ СЕТКА */}
            <nav className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 items-center border-t border-black/5 pt-6 gap-4 md:gap-0">

                {/* 1. Левая колонка (скрыта на мобильных) */}
                <div className="hidden md:block"></div>

                {/* 2. Центральная колонка (Меню) */}
                <div className="flex justify-center gap-6 md:gap-10 text-[11px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-extrabold">
                    <Link href="/" className="hover:opacity-50 transition clickable">Portfolio</Link>
                    <Link href="/about" className="hover:opacity-50 transition clickable">About me</Link>
                    <Link href="/contacts" className="hover:opacity-50 transition clickable">Contacts</Link>
                </div>

                {/* 3. Правая колонка (CV и Соцсети) */}
                <div className="flex items-center justify-center md:justify-end gap-6">
                    <a href="/esuldin_cv.pdf" target="_blank" className="text-[11px] md:text-[12px] uppercase font-black tracking-widest hover:opacity-50 transition clickable border-r border-black/10 pr-6">
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

        {/* Адаптивный отступ сверху */}
        <main className="pt-72 md:pt-64 pb-20">{children}</main>
        </body>
        </html>
    );
}