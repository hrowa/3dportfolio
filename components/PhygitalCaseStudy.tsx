"use client";
import { motion } from "framer-motion";
import { Layers, Cpu, Monitor, Zap, Move3d, MousePointer2 } from "lucide-react";
import VRPlayer from "@/components/VRPlayer"; // Тот самый, что мы починили

export default function PhygitalCaseStudy() {
    return (
        <div className="bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* SECTION 01: HERO HEADER */}
            <section className="py-24 border-b border-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="container mx-auto px-6"
                >
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-4 block">
            Phygital Experience / 01
          </span>
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                        The Forest <br /> of Wonders
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                        <p className="text-xl md:text-2xl font-medium leading-tight">
                            Трансформация физического пространства в живой цифровой организм.
                            Стирание границ между реальностью и воображением через 360° иммерсию.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-end">
                            {['Interactive', '360° Projection', 'VFX', 'Lidar Tracking'].map(tag => (
                                <span key={tag} className="px-4 py-2 border border-black text-[10px] uppercase font-bold tracking-widest">
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 02: INTERACTIVE 360 (ТВОЯ ГОРДОСТЬ) */}
            <section className="py-20 bg-[#f4f4f4]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">Interactive Environment</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                                <MousePointer2 size={14} /> Drag to explore the projection map
                            </p>
                        </div>
                        <Move3d size={40} strokeWidth={1} className="opacity-20" />
                    </div>

                    <div className="border-[10px] border-white shadow-2xl">
                        <VRPlayer url="/projects/les-chudes/panorama_360.jpg" />
                    </div>
                </div>
            </section>

            {/* SECTION 03: TECHNICAL STEPS (ГРИД) */}
            <section className="py-24 container mx-auto px-6">
                <h3 className="text-4xl font-black uppercase mb-16 tracking-tighter text-center">Development Workflow</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {[
                        {
                            icon: <Monitor size={32} />,
                            title: "Projection Mapping",
                            desc: "Расчет геометрии помещения и сшивка 4+ проекторов в единое бесшовное полотно."
                        },
                        {
                            icon: <Layers size={32} />,
                            title: "CG Production",
                            desc: "Создание эквиректанглярных панорам в AE и C4D с учетом искажений на углах."
                        },
                        {
                            icon: <Zap size={32} />,
                            title: "Real-time VFX",
                            desc: "Разработка систем частиц, реагирующих на координаты пользователя в реальном времени."
                        },
                        {
                            icon: <Cpu size={32} />,
                            title: "Sensor Logic",
                            desc: "Интеграция LiDAR и Kinect для превращения стен в интерактивные поверхности."
                        }
                    ].map((step, i) => (
                        <div key={i} className="p-8 border border-black hover:bg-black hover:text-white transition-colors group">
                            <div className="mb-12 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                            <span className="text-xs font-bold opacity-40 mb-2 block">Step 0{i+1}</span>
                            <h4 className="text-lg font-black uppercase mb-4 leading-none">{step.title}</h4>
                            <p className="text-sm opacity-70 leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 04: QUOTE / PHILOSOPHY */}
            <section className="py-32 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="text-[20vw] font-black leading-none uppercase select-none">PHYGITAL PHYGITAL PHYGITAL</div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl italic text-3xl md:text-5xl font-light leading-tight">
                        "Мы создаем не просто графику, мы проектируем <span className="font-black not-italic text-yellow-400 underline">новый опыт</span> взаимодействия человека с пространством."
                    </div>
                    <div className="mt-12 flex items-center gap-4">
                        <div className="h-[1px] w-20 bg-white"></div>
                        <span className="text-xs uppercase tracking-[0.5em] font-bold">Concept Philosophy</span>
                    </div>
                </div>
            </section>

        </div>
    );
}