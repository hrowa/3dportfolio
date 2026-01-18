"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./lib/data";

const ALL_TAGS = ["All", "Environment", "Props", "Stylized", "Lighting"];

export default function PortfolioPage() {
    const [activeTag, setActiveTag] = useState("All");
    const filtered = activeTag === "All" ? projects : projects.filter(p => p.tags?.includes(activeTag));

    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {ALL_TAGS.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 border transition-all clickable ${
                            activeTag === tag ? "bg-black text-white border-black" : "text-gray-400 border-transparent hover:border-gray-200"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="group clickable"
                        >
                            <Link href={`/project/${project.id}`}>
                                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100 mb-6 shadow-sm">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-700
               group-hover:scale-105
               group-hover:brightness-110
               group-hover:saturate-[1.15]"
                                    />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tighter">{project.title}</h3>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{project.category}</p>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}