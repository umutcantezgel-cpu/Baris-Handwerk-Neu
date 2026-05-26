import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MobileMenu from '@/components/common/MobileMenu';
import HelpSidebar from '@/components/common/HelpSidebar';
import AdminBar from '@/components/admin/AdminBar';
import useEditModeManager from '@/hooks/useEditModeManager';
import SkipLink from '@/components/common/SkipLink';
import ConsentManager from '@/components/common/ConsentManager';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpSidebarOpen, setIsHelpSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Enable global text editing in admin mode
  useEditModeManager();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);



  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsHelpSidebarOpen={setIsHelpSidebarOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenHelp={() => setIsHelpSidebarOpen(true)}
      />

      {/* Main Content */}
      <main id="main-content" className="flex-grow pt-20" tabIndex="-1">
        {children}
      </main>

      <Footer />

      {/* Help Sidebar */}
      <HelpSidebar
        isOpen={isHelpSidebarOpen}
        onClose={() => setIsHelpSidebarOpen(false)}
      />

      {/* Admin Bar (visible only when logged in) */}
      <AdminBar />

      {/* Consent Manager */}
      <ConsentManager />
    </div>
  );
};

export default Layout;
