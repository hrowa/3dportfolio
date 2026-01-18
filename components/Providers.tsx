"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext({
    lang: "ru",
    setLang: (l: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function Providers({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState("ru");

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </LanguageContext.Provider>
    );
}