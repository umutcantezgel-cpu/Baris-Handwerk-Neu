import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, HelpCircle, ChevronDown, ChevronUp, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/config/navigation';
import { useContent } from '@/contexts/ContentContext';

const MobileMenu = ({ isOpen, onClose, onOpenHelp }) => {
    const pathname = usePathname();
    const { siteConfig } = useContent();
    const [expandedMenu, setExpandedMenu] = useState(null);

    const toggleSubmenu = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 z-30 bg-[var(--color-background-surface-primary)]/95 backdrop-blur-md border-t border-[var(--color-border-default)] shadow-[var(--shadow-lg)] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-[var(--spacing-4)] py-[var(--spacing-4)]">
                <div className="flex flex-col gap-[var(--spacing-2)]">
                    {navigationLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            {link.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubmenu(link.name)}
                                        className={`min-h-[44px] flex items-center justify-between px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] font-medium transition-all duration-300 w-full text-left ${link.submenu.some(sub => sub.path === pathname)
                                            ? 'text-[var(--color-interactive-primary)] bg-[var(--color-blue-50)]'
                                            : 'text-[var(--color-text-primary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)]'
                                            }`}
                                    >
                                        {link.name}
                                        {expandedMenu === link.name ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </button>

                                    {/* Submenu */}
                                    {expandedMenu === link.name && (
                                        <div className="flex flex-col pl-4 gap-1 mt-1 border-l-2 border-gray-100 ml-4">
                                            {link.submenu.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.path}
                                                    onClick={onClose}
                                                    className={`min-h-[40px] flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[var(--color-interactive-primary)] hover:bg-gray-50 transition-colors`}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.path}
                                    onClick={onClose}
                                    className={`min-h-[44px] flex items-center px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] font-medium transition-all duration-300 ${pathname === link.path
                                        ? 'text-[var(--color-interactive-primary)] bg-[var(--color-blue-50)]'
                                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="border-t border-[var(--color-border-default)] my-[var(--spacing-2)]"></div>

                    <button
                        onClick={() => {
                            onClose();
                            onOpenHelp();
                        }}
                        className="min-h-[44px] flex items-center px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-interactive-primary)] hover:bg-[var(--color-neutral-100)] transition-all duration-300"
                    >
                        <HelpCircle className="w-5 h-5 mr-2" />
                        Hilfe
                    </button>



                    <a
                        href={`tel:${siteConfig.contact.phoneLink}`}
                        onClick={onClose}
                        className="min-h-[44px] w-full flex items-center justify-center bg-[var(--color-button-primary-bg)] text-white rounded-[var(--radius-base)] shadow-[var(--shadow-md)] font-bold transition-all duration-300 hover:bg-[var(--color-button-primary-hover)]"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Jetzt anrufen
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
