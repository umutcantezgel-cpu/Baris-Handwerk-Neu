import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const WhatsAppButton = () => {
    // Replace with actual generic phone number if siteConfig doesn't have a mobile specific one
    // Assuming format in siteConfig might be "+49 172 9475061" -> needs cleaning for API
    const phoneNumber = siteConfig.contact.phone.replace(/[^0-9]/g, '');
    const message = "Hallo, ich habe eine Frage zu Ihren Leistungen.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-4 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
            style={{ width: '60px', height: '60px' }}
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-3 bg-white text-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
                WhatsApp Chat
            </span>
        </a>
    );
};

export default WhatsAppButton;
