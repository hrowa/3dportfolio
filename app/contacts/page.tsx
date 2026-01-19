"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, Send } from "lucide-react";

export default function ContactsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 md:px-12 max-w-7xl mx-auto pt-10"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
                        Let's <br /> Talk
                    </h1>

                    <div className="grid grid-cols-1 gap-6 max-w-xs">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/evgeniy-suldin-16825a24/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group clickable"
                        >
                            <div className="p-4 border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Linkedin size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-[13px] font-black uppercase tracking-[0.2em]">LinkedIn</span>
                        </a>

                        {/* ArtStation - Custom SVG Icon */}
                        <a
                            href="https://www.artstation.com/evgeniyes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group clickable"
                        >
                            <div className="p-4 border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <svg
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M12 2L2 19.5h20L12 2z" />
                                    <path d="M8 12.5h8" />
                                </svg>
                            </div>
                            <span className="text-[13px] font-black uppercase tracking-[0.2em]">ArtStation</span>
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/hrowa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group clickable"
                        >
                            <div className="p-4 border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Send size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-[13px] font-black uppercase tracking-[0.2em]">Telegram</span>
                        </a>

                        {/* Gmail */}
                        <a
                            href="mailto:adjidomo@gmail.com"
                            className="flex items-center gap-6 group clickable"
                        >
                            <div className="p-4 border-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Mail size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-[13px] font-black uppercase tracking-[0.2em]">Gmail</span>
                        </a>
                    </div>
                </div>

                {/* FORM SECTION */}
                <form
                    className="space-y-10 border-l border-black/5 pl-0 md:pl-20 py-4"
                    action="https://formspree.io/f/mojjjkrj"
                    method="POST"
                >
                    <div className="border-b-2 border-black pb-4">
                        <label className="text-[11px] uppercase font-black text-gray-400 block mb-3 tracking-widest">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="bg-transparent w-full outline-none text-lg font-bold placeholder:text-gray-200"
                            required
                        />
                    </div>

                    <div className="border-b-2 border-black pb-4">
                        <label className="text-[11px] uppercase font-black text-gray-400 block mb-3 tracking-widest">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            className="bg-transparent w-full outline-none text-lg font-bold placeholder:text-gray-200"
                            required
                        />
                    </div>

                    <div className="border-b-2 border-black pb-4">
                        <label className="text-[11px] uppercase font-black text-gray-400 block mb-3 tracking-widest">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell me about your project"
                            className="bg-transparent w-full outline-none text-lg font-bold resize-none placeholder:text-gray-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-6 bg-black text-white text-[12px] uppercase tracking-[0.4em] font-black hover:bg-gray-800 transition-all duration-300 clickable"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </motion.div>
    );
}