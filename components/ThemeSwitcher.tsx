"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="clickable p-2 border border-black dark:border-white"
        >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}