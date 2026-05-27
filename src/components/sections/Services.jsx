"use client";
import React from 'react'
import { useContent } from '@/contexts/ContentContext'
import ServiceCard from '@/components/ui/ServiceCard'
import { IconWrapper } from '@/utils/iconMapper'
import { cn } from '@/utils'
import { motion } from 'framer-motion'

const Services = ({ className = ''}) => {
    const { services } = useContent()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className={cn("py-24 bg-neutral-50/50", className)}>
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-neutral-900 tracking-tight">
                        Premium Leistungen für Ihr Zuhause
                    </h2>
                    <p className="text-neutral-600 text-xl font-light">
                        Von der ersten Beratung bis zur fachgerechten Installation und Wartung – wir bieten Ihnen intelligente Haustechnik-Lösungen aus einer Hand.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <ServiceCard
                                title={service.name}
                                description={service.shortDescription}
                                icon={(props) => <IconWrapper name={service.icon} {...props} />}
                                href={`/leistungen/${service.id}`}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services
