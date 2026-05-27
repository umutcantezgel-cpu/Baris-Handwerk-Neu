"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, HelpCircle, ChevronDown, ChevronUp, Mail, MapPin, ArrowRight } from 'lucide-react';
import { navigationLinks, quickLinks } from '@/config/navigation';
import { useContent } from '@/contexts/ContentContext';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA } from '@/config/company';

const MobileMenu = ({ isOpen, onClose, onOpenHelp }) => {
    const pathname = usePathname();
    const { siteConfig } = useContent();
    const [expandedMenu, setExpandedMenu] = useState(null);

    const toggleSubmenu = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    // Animation variants
    const overlayVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.3 } }
    };

    const menuVariants = {
        closed: { 
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        },
        open: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.4, 
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
            } 
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={overlayVariants}
                    className="lg:hidden fixed top-16 md:top-20 left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[var(--color-border-default)] overflow-y-auto"
                >
                    <motion.div variants={menuVariants} className="max-w-7xl mx-auto px-6 py-6 pb-24 flex flex-col min-h-full">
                        <div className="flex flex-col gap-2 flex-grow">
                            {navigationLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVariants} className="flex flex-col">
                                    {link.submenu ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubmenu(link.name)}
                                                className={`min-h-[50px] flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-lg transition-all duration-300 w-full text-left ${link.submenu.some(sub => sub.path === pathname)
                                                    ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                                                    : 'text-neutral-800 hover:text-blue-600 hover:bg-neutral-50'
                                                    }`}
                                            >
                                                {link.name}
                                                <motion.div
                                                    animate={{ rotate: expandedMenu === link.name ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown className="w-5 h-5" />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {expandedMenu === link.name && (
                                                    <motion.div 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col gap-1 mt-2 mb-2 pl-4 border-l-2 border-blue-100 ml-6">
                                                            {link.submenu.map((subLink) => (
                                                                <Link
                                                                    key={subLink.name}
                                                                    href={subLink.path}
                                                                    onClick={onClose}
                                                                    className={`min-h-[44px] flex items-center px-4 py-2 rounded-xl text-base font-semibold text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors`}
                                                                >
                                                                    {subLink.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.path}
                                            onClick={onClose}
                                            className={`min-h-[50px] flex items-center px-4 py-3 rounded-2xl font-bold text-lg transition-all duration-300 ${pathname === link.path
                                                ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                                                : 'text-neutral-800 hover:text-blue-600 hover:bg-neutral-50'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                            
                            <motion.div variants={itemVariants} className="h-px bg-neutral-200 my-4" />

                            <motion.button
                                variants={itemVariants}
                                onClick={() => {
                                    onClose();
                                    onOpenHelp();
                                }}
                                className="min-h-[50px] flex items-center px-4 py-3 rounded-2xl font-bold text-lg text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 transition-all duration-300"
                            >
                                <HelpCircle className="w-6 h-6 mr-3 text-neutral-400" />
                                Hilfe & FAQ
                                <ArrowRight className="w-5 h-5 ml-auto text-neutral-300" />
                            </motion.button>
                        </div>
                        
                        {/* Bottom Action Area */}
                        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4">
                            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                                <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Direkter Kontakt</h4>
                                <a href={`tel:${COMPANY_DATA.contact.phoneLink}`} className="flex items-center gap-3 text-neutral-800 font-semibold mb-3 hover:text-blue-600 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    {COMPANY_DATA.contact.phone}
                                </a>
                                <a href={`mailto:${COMPANY_DATA.contact.email}`} className="flex items-center gap-3 text-neutral-800 font-semibold hover:text-blue-600 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    Nachricht senden
                                </a>
                            </div>
                            
                            <a
                                href={`tel:${siteConfig.contact.phoneLink}`}
                                onClick={onClose}
                                className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/20 font-bold text-lg transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]"
                            >
                                Jetzt anrufen
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
