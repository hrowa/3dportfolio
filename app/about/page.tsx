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
            {/* HEADER SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-end">
                <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm transition-all duration-700 hover:shadow-2xl group">
                    <Image
                        src="/me.jpg"
                        alt="Evgeniy Suldin"
                        fill
                        className="object-cover transition-all duration-1000
               group-hover:scale-[1.03]
               group-hover:brightness-[1.03"
                        priority
                    />
                </div>

                <div className="md:col-span-7">

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        Evgeniy <br /> Suldin
                    </h1>
                    <p className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-gray-800">
                        Меня зовут Евгений, и я CG Generalist с более чем 10-летним профессиональным опытом.
                        Я специализируюсь на стыке искусства и технологий, превращая сложные технические задачи в выразительный визуальный опыт.
                    </p>
                </div>
            </section>

            {/* BIO SECTION - СТИЛЬ НИКИТЫ */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
                <div className="md:col-start-6 md:col-span-7 space-y-8 text-lg text-gray-600 leading-relaxed">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">About Me</h2>
                    <p>
                        Я создаю системы и инструменты, которые не только оптимизируют производство, но и позволяют художникам достигать глубины погружения через процедурность и динамику. Мой подход — это <strong>структурированный дизайн</strong>: от разработки архитектуры пайплайна до финальной полировки шейдеров и оптимизации производительности.
                    </p>
                    <p>
                        В своей работе я опираюсь на принципы автоматизации и процедурной генерации, которые помогают избегать рутины и фокусироваться на качестве. Я уделяю большое внимание взаимодействию с командой, помогая художникам и программистам находить общий язык, чтобы технические ограничения не мешали реализации творческих идей.
                    </p>
                    <p>
                        Я всегда готов анализировать свои решения, принимать обратную связь и внедрять новые технологии (такие как PCG в Unreal Engine или глубокая симуляция в Houdini), чтобы улучшить «game feel» и сделать визуальный мир живым и отзывчивым.
                    </p>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="mb-40 border-t border-black/5 pt-20">
                <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black mb-16">Professional Experience</h2>
                <div className="space-y-24">

                    {/* Recent Exp */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <span className="font-bold uppercase text-sm tracking-widest text-gray-400 block mb-2">Technical Artist</span>
                            <p className="text-xs uppercase font-bold tracking-widest text-black/40 italic">2023 — 2025 | Talking Birds & Flying Fish</p>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            <p className="text-gray-600 italic">
                                Я начинал с классического 3D Generalist подхода, но быстро перешел в Technical Art, где могу полностью контролировать техническую чистоту и визуальный потенциал проектов. За последние годы я реализовал ряд знаковых инсталляций и проектов:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Интерактивный фиджитал-парк «Лес Чудес» (Манжерок).</li>
                                <li>Визуальные эффекты для Dubai Music Festival.</li>
                                <li>VR-инсталляция «Полет над Москвой будущего» для Музея Транспорта.</li>
                                <li>Иммерсивный опыт для Microsoft RSA Conference.</li>
                            </ul>
                            <p className="text-gray-600">
                                Здесь я отвечал за создание Real-time VFX в Unreal Engine, процедурные воркфлоу в Houdini и разработку инструментов автоматизации на Python/Blueprints. Моя роль заключалась в том, чтобы обеспечить визуальное совершенство при строгом соблюдении лимитов производительности.
                            </p>
                        </div>
                    </div>

                    {/* Lead Tech Artist HGC */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <span className="font-bold uppercase text-sm tracking-widest text-gray-400 block mb-2">Lead Technical Artist</span>
                            <p className="text-xs uppercase font-bold tracking-widest text-black/40 italic">2022 — 2023 | HGC</p>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-gray-600 leading-relaxed">
                                На позиции лида я занимался разработкой инструментов, шейдеров (HLSL) и воркфлоу для повышения эффективности производства. Я курировал художников, внедрял лучшие практики оптимизации и создавал прототипы процедурных систем, которые легли в основу пайплайна студии.
                            </p>
                        </div>
                    </div>

                    {/* Parovoz */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <span className="font-bold uppercase text-sm tracking-widest text-gray-400 block mb-2">3D Generalist / VFX</span>
                            <p className="text-xs uppercase font-bold tracking-widest text-black/40 italic">2017 — 2022 | Animation Studio "Parovoz"</p>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-gray-600 leading-relaxed">
                                Более 5 лет работы над крупными анимационными проектами (например, «Лео и Тиг»). Я отвечал за полный цикл: от VFX симуляций в Houdini до разработки шейдинга, настройки освещения и автоматизации рендеринга с помощью Python и MEL.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HARD SKILLS - КАК У НИКИТЫ */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 border-t border-black/5 pt-20">
                <div className="md:col-span-4">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">Hard Skills</h2>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 text-[13px] uppercase tracking-widest font-bold text-gray-800">
                    <div className="border-b border-black/5 pb-2">Procedural Content (Houdini, PCG)</div>
                    <div className="border-b border-black/5 pb-2">Shader Programming (HLSL, Materials)</div>
                    <div className="border-b border-black/5 pb-2">Python, MEL, C++, Blueprints</div>
                    <div className="border-b border-black/5 pb-2">Performance Profiling & Optimization</div>
                    <div className="border-b border-black/5 pb-2">Real-time & Cinematic VFX</div>
                    <div className="border-b border-black/5 pb-2">Pipeline Architecture & Automation</div>
                </div>
            </section>

            {/* FAVORITE PROJECTS/INSPIRATIONS */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/5 pt-20">
                <div className="md:col-span-4 leading-none">
                    <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">Inspiration & Games</h2>
                </div>
                <div className="md:col-start-6 md:col-span-7 space-y-16">
                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">INSIDE</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Обожаю то, как эта игра рассказывает глубокую историю без единого слова. Визуальный стиль, работа со светом и то, как окружение естественно направляет игрока — это эталон того, как технические решения работают на атмосферу.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black uppercase text-xl underline underline-offset-8 decoration-1">Dishonored / Deathloop</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Меня вдохновляет нелинейность и то, как детально проработанные материалы и шейдеры создают уникальный художественный почерк. Это пример того, как техническая база позволяет художникам творить без границ.
                        </p>
                    </div>

                    <div className="space-y-4 italic text-gray-400 text-sm">
                        Я вдохновляюсь такими мастерами, как Mikhail Kadikov и Steve Lee, чьи идеи помогают мне создавать пространства, которые не только функциональны, но и эстетически безупречны.
                    </div>
                </div>
            </section>
        </motion.div>
    );
}