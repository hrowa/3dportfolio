"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, Send, Phone } from "lucide-react";

export default function ContactsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="px-6 md:px-12 max-w-7xl mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Let's Talk</h1>
                    <div className="space-y-6">
                        <a href="#" className="flex items-center gap-4 group clickable">
                            <div className="p-3 border border-black group-hover:bg-black group-hover:text-white transition"><Linkedin size={20} /></div>
                            <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                        </a>
                        <a href="mailto:hello@example.com" className="flex items-center gap-4 group clickable">
                            <div className="p-3 border border-black group-hover:bg-black group-hover:text-white transition"><Mail size={20} /></div>
                            <span className="text-sm font-bold uppercase tracking-widest">Gmail</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 group clickable">
                            <div className="p-3 border border-black group-hover:bg-black group-hover:text-white transition"><Send size={20} /></div>
                            <span className="text-sm font-bold uppercase tracking-widest">Telegram</span>
                        </a>
                    </div>
                </div>

                <form className="space-y-8 border-l border-black/5 pl-0 md:pl-20" action="https://formspree.io/f/mojjjkrj" method="POST">
                    <div className="border-b border-black pb-2">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-2">Full Name</label>
                        <input name="name" type="text" className="bg-transparent w-full outline-none text-sm" required />
                    </div>
                    <div className="border-b border-black pb-2">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-2">Email Address</label>
                        <input name="email" type="email" className="bg-transparent w-full outline-none text-sm" required />
                    </div>
                    <div className="border-b border-black pb-2">
                        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-2">Message</label>
                        <textarea name="message" rows={4} className="bg-transparent w-full outline-none text-sm resize-none" required />
                    </div>
                    <button type="submit" className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition clickable">
                        Send Inquiry
                    </button>
                </form>
            </div>
        </motion.div>
    );
}