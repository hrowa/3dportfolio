/* eslint-disable */
"use client";
import { useParams } from "next/navigation";
import { projects } from "@/app/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Layers, Cpu, Monitor, Zap, Move3d, MousePointer2 } from "lucide-react";

const VRPlayer = dynamic(() => import("@/components/VRPlayer"), { ssr: false });
const VRVideoPlayer = dynamic(() => import("@/components/VRVideoPlayer"), { ssr: false });

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Карта иконок для динамического стека
const iconMap: Record<string, React.ReactNode> = {
    monitor: <Monitor />,
    layers: <Layers />,
    zap: <Zap />,
    cpu: <Cpu />,
};

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [open, setOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
    const [initialIndex, setInitialIndex] = useState(0);
    const [relatedProjects, setRelatedProjects] = useState<typeof projects>([]);

    useEffect(() => {
        const shuffled = [...projects].filter((p) => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 3);
        setRelatedProjects(shuffled);
    }, [id]);

    const handleOpenLightbox = (items: any[], index: number) => {
        setLightboxSlides(items.map(item => ({ src: item.url })));
        setInitialIndex(index);
        setOpen(true);
    };

    const renderedContent = useMemo(() => {
        if (!project) return [];
        const finalLayout: any[] = [];
        let tempCarousel: any[] = [];
        project.media.forEach((item) => {
            if (item.type === 'text' || item.type === 'vr' || item.type === 'vr_video' || item.layout !== 'carousel') {
                if (tempCarousel.length > 0) { finalLayout.push({ type: "carousel_group", items: [...tempCarousel] }); tempCarousel = []; }
                finalLayout.push(item);
            } else { tempCarousel.push(item); }
        });
        if (tempCarousel.length > 0) finalLayout.push({ type: "carousel_group", items: [...tempCarousel] });
        return finalLayout;
    }, [project]);

    if (!project) return <div className="h-screen flex items-center justify-center uppercase font-bold tracking-widest">Project not found</div>;


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white text-black">
            <Lightbox open={open} close={() => setOpen(false)} slides={lightboxSlides} index={initialIndex} />

            {/* HEADER SECTION */}
            <header className="px-6 md:px-12 pt-10 pb-24 border-b border-black">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-block mb-16 text-[10px] uppercase tracking-[0.4em] font-black hover:opacity-50 transition">← Back to Portfolio</Link>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-expect-error*/}
                        <motion.div {...fadeInUp} className="lg:col-span-8">
                            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">{project.title}</h1>
                            <p className="max-w-3xl text-xl md:text-3xl text-gray-800 leading-tight font-medium">{project.description}</p>
                        </motion.div>
                        <div className="lg:col-span-4 flex flex-col justify-end">
                            <div className="grid grid-cols-2 gap-8 border-t border-black pt-8 text-[11px] uppercase tracking-[0.2em] font-bold">
                                <div><p className="text-gray-400 mb-2 font-normal italic">Year</p>{project.year}</div>
                                <div><p className="text-gray-400 mb-2 font-normal italic">Category</p>{project.category}</div>
                                <div className="col-span-2"><p className="text-gray-400 mb-2 font-normal italic">Tools</p>{project.software.join(" / ")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT LOOP */}
            <main className="py-24">
                <div className="max-w-5xl mx-auto flex flex-col gap-40 px-6">
                    {renderedContent.map((item, index) => (
                        // @ts-ignore
                        <motion.div key={index} {...fadeInUp} className="w-full">

                            {/* ADVANCED TEXT RENDERING */}
                            {item.type === 'text' ? (
                                <div className="max-w-4xl border-l-8 border-black pl-10 py-4">
                                    {item.content.split('\n\n').map((paragraph: string, pIdx: number) => {
                                        if (pIdx === 0) return <h3 key={pIdx} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 leading-none">{paragraph}</h3>;
                                        const [subtitle, ...description] = paragraph.split('\n');
                                        return (
                                            <div key={pIdx} className="mb-10 last:mb-0">
                                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 flex items-center gap-3">
                                                    <span className="w-8 h-[2px] bg-black"></span> {subtitle.replace('— ', '')}
                                                </h4>
                                                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl ml-11">
                                                    {description.join(' ')}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : item.type === 'vr' ? (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end italic text-[10px] uppercase font-bold tracking-widest text-gray-400">
                                        <span>Interactive 360° Environment</span>
                                        <span>Drag to rotate</span>
                                    </div>
                                    <div className="border-[1px] border-black p-1 shadow-2xl"><VRPlayer url={item.url} /></div>
                                </div>
                            ) : (
                                <div className="w-full group">
                                    {item.type === 'image' ? (
                                        <img src={item.url} alt="" className="w-full h-auto shadow-sm cursor-zoom-in group-hover:scale-[1.01] transition-transform duration-1000" onClick={() => handleOpenLightbox([item], 0)} />
                                    ) : (
                                        <div className="aspect-video w-full bg-black shadow-2xl overflow-hidden">
                                            <video
                                                src={item.url}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* WORKFLOW GRID - DYNAMIC VERSION */}
            {project.stack && project.stack.length > 0 && (
                <section className="py-24 bg-gray-50 border-y border-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-5xl font-black uppercase mb-16 tracking-tighter">Production Stack</h3>
                        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(project.stack.length, 4)} gap-1 bg-black border border-black`}>
                            {project.stack.map((step: any, i: number) => (
                                <div key={i} className="p-10 bg-white hover:bg-black hover:text-white transition-all duration-700 group">
                                    <div className="mb-12 opacity-20 group-hover:opacity-100 transition-opacity">
                                        {iconMap[step.icon] || <Layers />}
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4">{step.title}</h4>
                                    <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* RELATED PROJECTS FOOTER */}
            <footer className="max-w-7xl mx-auto px-6 py-32">
                <div className="flex justify-between items-center mb-20 border-b border-black/10 pb-6">
                    <h2 className="text-[10px] uppercase font-black tracking-[0.5em] text-gray-400">Related Case Studies</h2>
                    <Link href="/" className="text-[10px] uppercase font-black hover:opacity-50 transition">All Projects</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {relatedProjects.map((p) => (
                        <Link key={p.id} href={`/project/${p.id}`} className="group block">
                            <div className="aspect-square overflow-hidden bg-gray-100 mb-8 border border-black/5">
                                <img src={p.thumbnail} alt={p.title} className="object-cover w-full h-full transition-all duration-1000 scale-105 group-hover:scale-110" />
                            </div>
                            <h4 className="text-md font-black uppercase mb-2 leading-none">{p.title}</h4>
                            <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest">{p.category}</p>
                        </Link>
                    ))}
                </div>
            </footer>
        </motion.div>
    );
}