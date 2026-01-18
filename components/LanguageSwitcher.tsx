"use client";
import { useLanguage } from "./Providers";

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    return (
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => setLang("en")} className={lang === "en" ? "underline" : "opacity-40"}>EN</button>
            <button onClick={() => setLang("ru")} className={lang === "ru" ? "underline" : "opacity-40"}>RU</button>
        </div>
    );
}