"use client";
import { useParams } from "next/navigation";
import { projects } from "@/app/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useMemo, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    // Состояние для Lightbox
    const [open, setOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
    const [initialIndex, setInitialIndex] = useState(0);

    // Функция открытия лайтбокса
    const handleOpenLightbox = (items: any[], index: number) => {
        const slidesForLightbox = items.map(item => ({ src: item.url }));
        setLightboxSlides(slidesForLightbox);
        setInitialIndex(index);
        setOpen(true);
    };

    // Компонент видео с автоплеем
    const AutoPlayVideo = ({ url }: { url: string }) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) videoRef.current?.play().catch(() => {});
                else videoRef.current?.pause();
            }, { threshold: 0.3 });
            if (videoRef.current) observer.observe(videoRef.current);
            return () => observer.disconnect();
        }, []);

        return (
            <video
                ref={videoRef}
                src={url}
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover shadow-lg"
            />
        );
    };

    // Логика формирования структуры страницы (группировка каруселей и обработка текста)
    const renderedContent = useMemo(() => {
        if (!project) return [];
        const finalLayout: any[] = [];
        let tempCarousel: any[] = [];

        project.media.forEach((item) => {
            // Если встречаем текст или одиночный элемент, сбрасываем накопленную карусель
            if (item.type === 'text' || item.layout !== 'carousel') {
                if (tempCarousel.length > 0) {
                    finalLayout.push({ type: "carousel_group", items: [...tempCarousel] });
                    tempCarousel = [];
                }
                finalLayout.push(item);
            } else {
                // Если layout === 'carousel', добавляем в буфер
                tempCarousel.push(item);
            }
        });

        // Добавляем остатки карусели, если они были в конце
        if (tempCarousel.length > 0) {
            finalLayout.push({ type: "carousel_group", items: [...tempCarousel] });
        }

        return finalLayout;
    }, [project]);

    // Рекомендации (3 рандомных проекта)
    const relatedProjects = useMemo(() => {
        return projects
            .filter((p) => p.id !== id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    }, [id]);

    if (!project) return (
        <div className="h-screen flex items-center justify-center uppercase tracking-widest font-bold">
            Project not found
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 md:px-12 pb-32 pt-10"
        >
            {/* Лайтбокс для просмотра во весь экран */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={lightboxSlides}
                index={initialIndex}
            />

            {/* ВЕРХНЯЯ ЧАСТЬ (HEADER) */}
            <header className="max-w-5xl mx-auto mb-24">
                <Link href="/" className="inline-block mb-12 text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition">
                    ← Back to Portfolio
                </Link>

                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                    {project.title}
                </h1>

                {project.description && (
                    <p className="max-w-3xl text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-medium whitespace-pre-line">
                        {project.description}
                    </p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-8 text-[11px] uppercase tracking-[0.2em] font-bold">
                    <div><p className="text-gray-400 mb-2 font-normal italic">Year</p>{project.year}</div>
                    <div><p className="text-gray-400 mb-2 font-normal italic">Category</p>{project.category}</div>
                    <div className="col-span-2">
                        <p className="text-gray-400 mb-2 font-normal italic">Tools</p>
                        {project.software.join(" / ")}
                    </div>
                </div>
            </header>

            {/* ОСНОВНОЙ КОНТЕНТ (MEDIA & TEXT) */}
            <div className="max-w-5xl mx-auto flex flex-col gap-24 items-center mb-40">
                {renderedContent.map((item, index) => (
                    <div key={index} className="w-full md:w-[85%]">

                        {/* 1. ТЕКСТОВЫЙ БЛОК */}
                        {item.type === 'text' ? (
                            <div className="max-w-3xl mx-auto py-6">
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
                                    {item.content}
                                </p>
                            </div>
                        ) : item.type === 'carousel_group' ? (
                            /* 2. КАРУСЕЛЬ КАРТИНОК */
                            <div className="w-full shadow-lg overflow-hidden border border-black/5 bg-gray-50">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    className="cursor-zoom-in"
                                >
                                    {item.items.map((slide: any, sIndex: number) => (
                                        <SwiperSlide key={sIndex} onClick={() => handleOpenLightbox(item.items, sIndex)}>
                                            <img src={slide.url} alt="" className="w-full h-auto block" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            /* 3. ОДИНОЧНЫЕ ЭЛЕМЕНТЫ */
                            <div className="w-full">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt=""
                                        className="w-full h-auto shadow-sm cursor-zoom-in transition-transform duration-500 hover:scale-[1.01]"
                                        onClick={() => handleOpenLightbox([item], 0)}
                                    />
                                ) : (
                                    <div className="aspect-video w-full bg-black overflow-hidden shadow-xl">
                                        {item.url?.includes('youtube') || item.url?.includes('vimeo') ? (
                                            <iframe src={item.url} className="w-full h-full" allowFullScreen />
                                        ) : (
                                            <AutoPlayVideo url={item.url || ""} />
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* НИЖНЯЯ ЧАСТЬ (РЕКОМЕНДАЦИИ) */}
            <footer className="max-w-6xl mx-auto border-t border-black pt-20">
                <h2 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-12 text-center text-gray-400 font-sans">
                    Other Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {relatedProjects.map((p) => (
                        <Link key={p.id} href={`/project/${p.id}`} className="group block">
                            <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
                                <img
                                    src={p.thumbnail}
                                    alt={p.title}
                                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />
                            </div>
                            <h4 className="text-sm font-black uppercase tracking-tight mb-1">{p.title}</h4>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest">{p.category}</p>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <Link href="/" className="px-10 py-4 border border-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                        Back to all work
                    </Link>
                </div>
            </footer>
        </motion.div>
    );
}