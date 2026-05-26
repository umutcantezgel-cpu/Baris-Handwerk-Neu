import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wrench, HelpCircle, ChevronDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { navigationLinks } from '@/config/navigation';
import { useContent } from '@/contexts/ContentContext';

const Header = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, setIsHelpSidebarOpen }) => {
    const location = useLocation();
    const { siteConfig } = useContent();

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 safe-area-top ${isScrolled
                ? 'bg-[var(--color-background-surface-primary)] shadow-[var(--shadow-sm)] border-b border-[var(--color-border-default)]'
                : 'bg-[var(--color-background-surface-primary)]/95 backdrop-blur-md border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to={createPageUrl('Home')} className="flex items-center group">
                        <img
                            src="/images/batherm-logo.png"
                            alt="Batherm Meisterbetrieb"
                            className="h-12 md:h-14 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-[var(--spacing-1)]">
                        {navigationLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.submenu ? (
                                    <>
                                        <Link
                                            to={link.path}
                                            aria-current={location.pathname === link.path ? 'page' : undefined}
                                            className={`flex items-center gap-1 px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-base)] font-medium text-[var(--font-size-sm)] transition-all duration-300 ${link.submenu.some(sub => sub.path === location.pathname)
                                                ? 'text-[var(--color-interactive-primary)] bg-[var(--color-blue-50)]'
                                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)]'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                                                {link.submenu.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.path}
                                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#00b050] transition-colors"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        aria-current={location.pathname === link.path ? 'page' : undefined}
                                        className={`px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-base)] font-medium text-[var(--font-size-sm)] transition-all duration-300 ${location.pathname === link.path
                                            ? 'text-[var(--color-interactive-primary)] bg-[var(--color-blue-50)]'
                                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-[var(--spacing-3)]">
                        <Button
                            variant="ghost"
                            onClick={() => setIsHelpSidebarOpen(true)}
                            className="min-h-[44px] text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)] font-medium"
                        >
                            <HelpCircle className="w-5 h-5 mr-2" />
                            Hilfe
                        </Button>

                        <a
                            href={`tel:${siteConfig.contact.phoneLink}`}
                            className="min-h-[44px] inline-flex items-center justify-center px-[var(--spacing-6)] py-[var(--spacing-2)] font-semibold bg-transparent border-2 border-[var(--color-interactive-primary)] text-[var(--color-interactive-primary)] hover:bg-[var(--color-interactive-primary)] hover:text-white rounded-[var(--radius-full)] transition-all duration-300 group text-[var(--font-size-sm)]"
                        >
                            <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                            Jetzt anrufen
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-interactive-primary)] transition-colors"
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
