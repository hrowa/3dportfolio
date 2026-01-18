"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (["A", "BUTTON", "INPUT", "TEXTAREA"].includes(target.tagName) || target.closest(".clickable")) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);
        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ x: cursorX, y: cursorY }}
            animate={{ scale: isHovered ? 2.5 : 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
    );
}