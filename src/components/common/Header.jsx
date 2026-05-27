"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, X, Phone, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { navigationLinks } from '@/config/navigation';
import { useContent } from '@/contexts/ContentContext';

const Header = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, setIsHelpSidebarOpen }) => {
    const location = { pathname: usePathname() };
    const { siteConfig } = useContent();

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-area-top ${isScrolled
                ? 'bg-white/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-neutral-200/50 py-2'
                : 'bg-white/50 backdrop-blur-lg border-b border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-500">
                    {/* Logo */}
                    <Link href={createPageUrl('Home')} className="flex items-center group">
                        <img
                            src="/images/batherm-logo.png"
                            alt="Batherm Meisterbetrieb"
                            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navigationLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.submenu ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${link.submenu.some(sub => sub.path === location.pathname)
                                                ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                                                : 'text-neutral-700 hover:text-blue-600 hover:bg-black/5 hover:shadow-sm'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                                                {link.submenu.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.path}
                                                        className="block px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.path}
                                        aria-current={location.pathname === link.path ? 'page' : undefined}
                                        className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${location.pathname === link.path
                                            ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                                            : 'text-neutral-700 hover:text-blue-600 hover:bg-black/5 hover:shadow-sm'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant="ghost"
                            onClick={() => setIsHelpSidebarOpen(true)}
                            className="min-h-[44px] text-neutral-600 hover:text-blue-600 hover:bg-black/5 font-semibold rounded-xl transition-colors"
                        >
                            <HelpCircle className="w-5 h-5 mr-2" />
                            Hilfe
                        </Button>

                        <a
                            href={`tel:${siteConfig.contact.phoneLink}`}
                            className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 font-bold bg-blue-600 text-white hover:text-white rounded-full transition-all duration-300 group text-sm shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center">
                                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                                Jetzt anrufen
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-600 hover:text-blue-600 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
