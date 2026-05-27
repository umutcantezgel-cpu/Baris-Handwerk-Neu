"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Clock, CheckCircle2, Award, Users, ThumbsUp, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [end, duration, inView]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-black bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {count}{suffix}
        </span>
    );
};

const benefits = [
    {
        icon: Clock,
        title: "Termintreue",
        description: "Wir halten unsere Termine und kommen pünktlich. Wenn wir sagen, wir sind da, dann sind wir da."
    },
    {
        icon: ShieldCheck,
        title: "Meisterbetrieb",
        description: "Qualität und Sicherheit durch zertifizierte Handwerksmeister mit langjähriger Erfahrung."
    },
    {
        icon: CheckCircle2,
        title: "Saubere Arbeit",
        description: "Wir verlassen die Baustelle so sauber, wie wir sie vorgefunden haben. Garantiert."
    },
    {
        icon: Award,
        title: "Faire Preise",
        description: "Transparente Kostenaufstellung ohne versteckte Gebühren. Handschlagqualität."
    }
];

export default function TrustSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Counters Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-neutral-100 pb-16">
                    <div className="flex flex-col items-center text-center">
                        <AnimatedCounter end={30} suffix="+" />
                        <span className="text-neutral-500 font-medium mt-2">Jahre Erfahrung</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <AnimatedCounter end={2500} suffix="+" />
                        <span className="text-neutral-500 font-medium mt-2">Zufriedene Kunden</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <AnimatedCounter end={100} suffix="%" />
                        <span className="text-neutral-500 font-medium mt-2">Termintreue</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <AnimatedCounter end={24} suffix="/7" />
                        <span className="text-neutral-500 font-medium mt-2">Notdienst Wetzlar</span>
                    </div>
                </div>

                {/* Benefits Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {benefits.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-lg transition-all duration-300">
                                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
