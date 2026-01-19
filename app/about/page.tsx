"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/Providers";
import { dictionaries } from "@/app/lib/dictionaries";

export default function AboutPage() {
    const { lang } = useLanguage();
    const d = dictionaries[lang as keyof typeof dictionaries];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 md:px-12 max-w-7xl mx-auto pb-20 font-sans"
        >
            {/* 1. ФОТО И ПРИВЕТСТВИЕ */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start pt-10">
                <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm group">
                    <Image
                        src="/me.jpg"
                        alt="Evgeniy Suldin"
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                        priority
                    />
                </div>

                <div className="md:col-span-7">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        Evgeniy <br /> Suldin
                    </h1>
                    <p className="text-xl md:text-3xl font-medium leading-[1.1] tracking-tight text-gray-900 max-w-2xl">
                        Меня зовут Евгений, и я CG Generalist с более чем 10-летним опытом.
                        Я специализируюсь на стыке искусства и технологий.
                    </p>
                </div>
            </section>

            {/* 2. ОСНОВНОЙ БЛОК: ТАЙМЛАЙН СЛЕВА + ABOUT ME СПРАВА */}
            <section className="grid grid-cols-1 md:col-cols-12 md:grid-cols-12 gap-12 mb-40 border-t border-black/10 pt-12">

                {/* ТАЙМЛАЙН С ЛОГО (4 колонки) */}
                <div className="md:col-span-4 space-y-12">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black/40 mb-8">Professional Timeline</h2>

                    <div className="space-y-10">
                        {/* Company 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/talking-birds.png" alt="Talking Birds" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-black">Talking Birds</p>
                                <p className="text-[10px] text-gray-400 uppercase">2023 — 2025</p>
                            </div>
                        </div>

                        {/* Company 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/hgc.png" alt="HGC" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-black">HGC Studio</p>
                                <p className="text-[10px] text-gray-400 uppercase">2022 — 2023</p>
                            </div>
                        </div>

                        {/* Company 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/parovoz.png" alt="Parovoz" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-black">Studio Parovoz</p>
                                <p className="text-[10px] text-gray-400 uppercase">2017 — 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT ME (8 колонок) */}
                <div className="md:col-span-8 space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed border-l border-black/5 md:pl-12">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">About Me</h2>
                    <p>
                        Я создаю системы и инструменты, которые не только оптимизируют производство, но и позволяют художникам достигать глубины погружения через процедурность и динамику. Мой подход — это <strong>структурированный дизайн</strong>: от разработки архитектуры пайплайна до финальной полировки шейдеров.
                    </p>
                    <p>
                        Я всегда готов анализировать свои решения, принимать обратную связь и внедрять новые технологии (такие как PCG в Unreal Engine или глубокая симуляция в Houdini), чтобы улучшить «game feel» и сделать визуальный мир живым и отзывчивым.
                    </p>
                    <p className="text-gray-500 text-base">
                        За последние годы я реализовал ряд знаковых проектов: Интерактивный парк «Лес Чудес», визуальные эффекты для Dubai Music Festival и иммерсивные инсталляции для Microsoft.
                    </p>
                </div>
            </section>

            {/* 3. HARD SKILLS */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 border-t border-black/5 pt-20">
                <div className="md:col-span-4">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">Hard Skills</h2>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[13px] uppercase tracking-widest font-bold text-gray-800">
                    <div className="border-b border-black/5 pb-2">Procedural Content (Houdini, PCG)</div>
                    <div className="border-b border-black/5 pb-2">Shader Programming (HLSL, Materials)</div>
                    <div className="border-b border-black/5 pb-2">Python, MEL, C++, Blueprints</div>
                    <div className="border-b border-black/5 pb-2">Performance Profiling & Optimization</div>
                    <div className="border-b border-black/5 pb-2">Real-time & Cinematic VFX</div>
                    <div className="border-b border-black/5 pb-2">Pipeline Architecture & Automation</div>
                </div>
            </section>

            {/* 4. INSPIRATION */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/5 pt-20">
                <div className="md:col-span-4 leading-none">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">Inspiration</h2>
                </div>
                <div className="md:col-start-6 md:col-span-7 space-y-16">
                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">INSIDE / Dishonored</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Обожаю то, как дизайн окружения естественно направляет игрока. Это эталон того, как технические решения работают на атмосферу и погружение.
                        </p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}