"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./lib/data";

const ALL_TAGS = ["All", "Environment", "Props", "Stylized", "VFX", "Unreal Engine", "Unity"];

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group clickable"
                        >
                            <Link href={`/project/${project.id}`}>
                                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100 mb-6 shadow-sm border border-black/5">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-all duration-700
                                       group-hover:scale-110
                                       group-hover:brightness-110"
                                    />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tighter leading-tight">{project.title}</h3>
                                <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1 font-bold">{project.category}</p>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}