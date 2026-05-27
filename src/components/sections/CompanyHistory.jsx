"use client";
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Building2, Award, Zap, Compass, Star, Rocket } from 'lucide-react';

const milestones = [
    {
        year: "2025",
        title: "Unternehmensgründung",
        description: "Baris Aydin gründet Batherm Haustechnik in Wetzlar. Der Startschuss für einen modernen Meisterbetrieb mit Fokus auf Qualität und Kundennähe.",
        icon: Building2,
        color: "bg-blue-500"
    },
    {
        year: "2025",
        title: "Meisterbetrieb",
        description: "Eintragung in die Handwerksrolle und offizieller Start als Fachbetrieb für Sanitär, Heizung und Klimatechnik.",
        icon: Award,
        color: "bg-[#c69c6d]"
    },
    {
        year: "Fokus",
        title: "Spezialisierung",
        description: "Klare Ausrichtung auf zukunftssichere Technologien: Wärmepumpen, Smart Home und barrierefreie Badgestaltung.",
        icon: Zap,
        color: "bg-amber-500"
    },
    {
        year: "Zukunft",
        title: "Unsere Vision",
        description: "Wir möchten Ihr erster Ansprechpartner für die Energiewende im eigenen Zuhause werden – nachhaltig, effizient und persönlich.",
        icon: Compass,
        color: "bg-purple-500"
    }
];

export default function CompanyHistory() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50/50" ref={containerRef}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-6 tracking-tight">
                        Unsere Geschichte
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Vom ersten Stein bis zur Vision von morgen – begleiten Sie uns auf unserem Weg zum Experten für zukunftssichere Haustechnik.
                    </p>
                </div>

                <div className="relative">
                    {/* Animated vertical line (Desktop) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-200 hidden md:block">
                        <motion.div
                            className="w-full bg-[#c69c6d] origin-top h-full"
                            style={{ scaleY }}
                        />
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-16 md:space-y-24 relative">
                        {milestones.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="relative">
                                    {/* Mobile Dot */}
                                    <div className="md:hidden absolute left-0 top-6 w-4 h-4 rounded-full bg-[#c69c6d] z-10" />

                                    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                        {/* Content Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="w-full md:w-[42%]"
                                        >
                                            <div className="group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <Icon className="w-20 h-20" />
                                                </div>

                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className={`p-3 rounded-2xl ${item.color} text-white shadow-lg`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-2xl font-black text-[#1a3a52]/20 tracking-widest">{item.year}</span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4 group-hover:text-[#c69c6d] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Center Dot (Desktop) */}
                                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                className="w-6 h-6 rounded-full bg-white border-4 border-[#c69c6d] shadow-glow"
                                            />
                                        </div>

                                        {/* Empty Side (Desktop only) */}
                                        <div className="hidden md:block md:w-[42%]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Final Vision Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-[#1a3a52] to-[#c69c6d] text-white text-center shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Star className="w-16 h-16 mx-auto mb-6 text-amber-400 animate-pulse" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">"Handwerkliche Präzision trifft auf die Technik der Zukunft."</h3>
                    <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
