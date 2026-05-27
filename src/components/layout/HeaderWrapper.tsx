"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import MobileMenu from '@/components/common/MobileMenu';
import HelpSidebar from '@/components/common/HelpSidebar';

export function HeaderWrapper() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHelpSidebarOpen, setIsHelpSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header 
                isScrolled={isScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setIsHelpSidebarOpen={setIsHelpSidebarOpen}
            />
            <MobileMenu 
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                onOpenHelp={() => {
                    setIsMobileMenuOpen(false);
                    setIsHelpSidebarOpen(true);
                }}
            />
            <HelpSidebar 
                isOpen={isHelpSidebarOpen}
                onClose={() => setIsHelpSidebarOpen(false)}
            />
        </>
    );
}
