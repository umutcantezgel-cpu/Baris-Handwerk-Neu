"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Wrench, ChevronRight, Instagram } from 'lucide-react';
import { navigationLinks, quickLinks, serviceLinks } from '@/config/navigation';
import { useContent } from '@/contexts/ContentContext';

const Footer = () => {
    const { siteConfig } = useContent();
    return (
        <footer className="bg-[var(--color-neutral-900)] border-t border-[var(--color-neutral-800)] text-[var(--color-neutral-50)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] py-[var(--spacing-12)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[var(--spacing-8)]">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-[var(--spacing-3)] mb-[var(--spacing-4)]">
                            <img
                                src="/images/footer-logo.png"
                                alt="Batherm Meisterbetrieb Logo"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-[var(--color-neutral-400)] mb-[var(--spacing-4)] leading-relaxed text-[var(--font-size-sm)]">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--spacing-4)] text-[var(--color-neutral-0)]">Seiten</h3>
                        <ul className="space-y-[var(--spacing-2)]">
                            {navigationLinks.filter(link => link.path !== '#').map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="flex items-center text-[var(--color-neutral-400)] hover:text-[var(--color-blue-400)] transition-colors group text-[var(--font-size-sm)]"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--spacing-4)] text-[var(--color-neutral-0)]">Service</h3>
                        <ul className="space-y-[var(--spacing-2)]">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="flex items-center text-[var(--color-neutral-400)] hover:text-[var(--color-blue-400)] transition-colors group text-[var(--font-size-sm)]"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--spacing-4)] text-[var(--color-neutral-0)]">Kontakt</h3>
                        <ul className="space-y-[var(--spacing-3)]">
                            <li className="flex items-start gap-[var(--spacing-2)]">
                                <Phone className="w-5 h-5 mt-0.5 text-[var(--color-blue-400)]" />
                                <div>
                                    <a
                                        href={`tel:${siteConfig.contact.phoneLink}`}
                                        className="text-[var(--color-neutral-400)] hover:text-[var(--color-blue-400)] transition-colors block text-[var(--font-size-sm)]"
                                    >
                                        {siteConfig.contact.phone}
                                    </a>
                                    <p className="text-xs text-[var(--color-neutral-500)] mt-1">{siteConfig.contact.hours.weekdays}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-[var(--spacing-2)]">
                                <Mail className="w-5 h-5 mt-0.5 text-[var(--color-blue-400)]" />
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="text-[var(--color-neutral-400)] hover:text-[var(--color-blue-400)] transition-colors text-[var(--font-size-sm)]"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-[var(--spacing-2)]">
                                <MapPin className="w-5 h-5 mt-0.5 text-[var(--color-blue-400)]" />
                                <span className="text-[var(--color-neutral-400)] text-[var(--font-size-sm)]">
                                    {siteConfig.contact.address.street}<br />
                                    {siteConfig.contact.address.zipCity}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div>
                        <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--spacing-4)] text-[var(--color-neutral-0)]">Servicegebiet</h3>
                        <p className="text-[var(--color-neutral-400)] text-[var(--font-size-sm)] mb-[var(--spacing-3)]">
                            Wir sind für Sie in folgenden Städten tätig:
                        </p>
                        <div className="grid grid-cols-2 gap-[var(--spacing-2)]">
                            {siteConfig.serviceAreas.map((area) => (
                                <div
                                    key={area}
                                    className="text-[var(--color-neutral-400)] text-xs flex items-center"
                                >
                                    <div className="w-1.5 h-1.5 bg-[var(--color-blue-500)] rounded-full mr-2"></div>
                                    {area}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[var(--color-neutral-800)] mt-[var(--spacing-8)] pt-[var(--spacing-8)]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--spacing-4)]">
                        <div className="flex flex-col md:flex-row items-center gap-[var(--spacing-4)]">
                            <a
                                href="/instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-[var(--color-neutral-400)] hover:text-[var(--color-blue-400)] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <p className="text-[var(--color-neutral-500)] text-xs text-center md:text-left">
                                © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
                            </p>
                        </div>
                        <div className="flex gap-[var(--spacing-4)]">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-[var(--color-neutral-500)] hover:text-[var(--color-blue-400)] text-xs transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                className="text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-400)] text-xs transition-colors"
                            >
                                Mitarbeiter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
