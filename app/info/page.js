"use client";
import { motion } from "framer-motion";

export default function InfoPage() {
    const skills = ["Environment Art", "3D Modeling", "Texturing", "Lighting", "Rendering", "Optimization"];
    const tools = ["Unreal Engine 5", "Blender", "ZBrush", "Substance Painter", "Marmoset"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 md:px-12 max-w-5xl"
        >
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                <div>
                    <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-bold">About</h2>
                    <p className="text-2xl leading-tight font-medium">
                        Evgeniy Suldin is a 3D Generalist focused on creating immersive digital environments and high-quality assets for games and cinematics.
                    </p>
                </div>

                <div>
                    <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-bold">Contact</h2>
                    <div className="space-y-2 text-xl underline underline-offset-4 decoration-1 hover:decoration-2">
                        <a href="mailto:your@email.com" className="block">Email</a>
                        <a href="https://artstation.com" className="block">ArtStation</a>
                        <a href="https://linkedin.com" className="block">LinkedIn</a>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-bold">Main Skills</h2>
                    <ul className="space-y-1 text-lg uppercase tracking-tighter">
                        {skills.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>
                <div>
                    <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-bold">Software Toolkit</h2>
                    <ul className="space-y-1 text-lg uppercase tracking-tighter">
                        {tools.map(t => <li key={t}>{t}</li>)}
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}