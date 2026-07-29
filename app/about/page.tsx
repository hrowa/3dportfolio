/* eslint-disable */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/Providers";
import { dictionaries } from "@/app/lib/dictionaries";

// Компонент для скилл-бара с делениями (1-5)
function SkillItem({ name, rating, icon }: { name: string; rating: number; icon: React.ReactNode }) {
    return (
        <div className="group">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center transition-all">
                        {icon}
                    </div>
                    <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-gray-800">
                        {name}
                    </span>
                </div>
            </div>
            {/* Система 5 делений */}
            <div className="grid grid-cols-5 gap-1.5 w-full">
                {[1, 2, 3, 4, 5].map((step) => (
                    <div
                        key={step}
                        className={`h-[3px] transition-all duration-500 ${
                            step <= rating
                                ? "bg-black group-hover:bg-orange-500"
                                : "bg-black/5"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

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
                    </p>
                </div>
            </section>

            {/* 2. ОСНОВНОЙ БЛОК: ТАЙМЛАЙН СЛЕВА + ABOUT ME СПРАВА */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 border-t border-black/10 pt-12">

                {/* ТАЙМЛАЙН С ЛОГО (4 колонки) */}
                <div className="md:col-span-4 space-y-12">
                    <h2 className="text-[24px] uppercase font-bold tracking-[0.3em] text-black">Professional Timeline</h2>

                    <div className="space-y-10">
                        {/* Company 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/indomi.png" alt="Talking Birds" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">Indomi Studio</p>
                                <p className="text-[14px] text-gray-400 ">Technical Artist, VFX Artist</p>
                                <p className="text-[12px] text-gray-400 ">Apr 2025 — Present</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/TBFF.PNG" alt="Talking Birds" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">Talking Birds & Flying Fish</p>
                                <p className="text-[14px] text-gray-400 ">Technical Artist</p>
                                <p className="text-[12px] text-gray-400 ">Nov 2023 — 2025 Mar</p>
                            </div>
                        </div>

                        {/* Company 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/nologo.png" alt="HGC" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">HGC Studio</p>
                                <p className="text-[14px] text-gray-400 ">Technical Artist</p>
                                <p className="text-[12px] text-gray-400 ">Jun 2022 — 2023 Nov </p>
                            </div>
                        </div>


                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/mygames.png" alt="mygames" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">MY.GAMES</p>
                                <p className="text-[14px] text-gray-400 ">Technical Artist</p>
                                <p className="text-[12px] text-gray-400 ">Oct 2021 — 2022 Mar</p>
                            </div>
                        </div>

                        {/* Company 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/parovoz.jpg" alt="Parovoz" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">Parovoz, Animation Studio</p>
                                <p className="text-[14px] text-gray-400 ">3D Generalist/VFX Artist</p>
                                <p className="text-[12px] text-gray-400 ">Jan 2017 — 2021 Oct</p>
                            </div>
                        </div>
                        {/* Company 4 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                                <img src="/logos/moolt.jpg" alt="Parovoz" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[16px] font-bold uppercase tracking-widest text-black">Moolt, Animation Studio</p>
                                <p className="text-[14px] text-gray-400 ">3D Generalist/VFX Artist</p>
                                <p className="text-[12px] text-gray-400 ">Nov 2014 — 2016 Dec</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ABOUT ME (8 колонок) */}
                <div className="md:col-span-8 space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed border-l border-black/5 md:pl-12">
                    <h2 className="text-[24px] uppercase font-bold tracking-[0.3em] text-black">About Me</h2>
                    <p>
                        Я начинал как CG Generalist и 3D-художник — это дало мне понимание полного цикла производства графики, от первого блокинга до финального рендера. Со временем интерес сместился в сторону VFX и Technical Art: здесь визуальная составляющая встречается с логикой кода, и мне интересно работать именно на этом стыке.


                    </p>
                    <p>
                        За последние годы я приложил руку к нескольким заметным проектам: анимационному сериалу «Лео и Тиг», неанонсированному AAA-проекту, интерактивным инсталляциям для парка «Лес Чудес» в Манжероке, синематику для Dubai Music Festival и иммерсивным инсталляциям для Microsoft.
                    </p>
                </div>
            </section>

            {/* 3. HARD SKILLS */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 border-t border-black/5 pt-20">
                <div className="md:col-span-4">
                    <h2 className="text-[24px] uppercase font-bold tracking-[0.3em] text-black">Hard Skills</h2>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    <div className="space-y-8">
                        <SkillItem
                            name="Houdini"
                            rating={5}
                            icon={<img src="logos/houdini.png" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Maya"
                            rating={4}
                            icon={<img src="logos/maya.png" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Blender"
                            rating={4}
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Unreal Engine"
                            rating={5}
                            icon={<img src="logos/unreal.png" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Unity"
                            rating={3}
                            icon={<img src="logos/Unity.png" className="w-full h-full" />}
                        />
                    </div>
                    <div className="space-y-8">
                        <SkillItem
                            name="ZBrush"
                            rating={3}
                            icon={<img src="logos/zbrush.png" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Python"
                            rating={4}
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="C++"
                            rating={3}
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" className="w-full h-full" />}
                        />
                        <SkillItem
                            name="Shaders (HLSL)"
                            rating={4}
                            icon={<span className="text-xs font-black">FX</span>}
                        />
                        <SkillItem
                            name="Pipeline TD"
                            rating={5}
                            icon={<span className="text-xs font-black">TD</span>}
                        />
                    </div>
                </div>
            </section>

            {/* 4. INSPIRATION */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/5 pt-20">
                <div className="md:col-span-4 leading-none">
                    <h2 className="text-[24px] uppercase font-bold tracking-[0.3em] text-black">Inspiration</h2>
                </div>
                <div className="md:col-start-6 md:col-span-7 space-y-16">

                    {/* Dota 2 */}
                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">Dota 2</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Для меня это эталон синергии комплексных VFX, шейдеров и анимаций. Игра идеально демонстрирует, как сложная визуалка может четко транслировать игровую логику, не перегружая восприятие игрока.
                        </p>
                    </div>

                    {/* Baduk */}
                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">Baduk (Go)</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Игра, сформировавшая мое стратегическое мышление. Как и в Go, в Technical Art важен баланс: любое локальное решение должно подчиняться глобальной архитектуре системы.
                        </p>
                    </div>

                    {/* Psychology */}
                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">Psychology</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Психологическое образование помогает мне находить общий язык в любой конфликтной ситуации.
                        </p>
                    </div>

                </div>
            </section>
        </motion.div>
    );
}