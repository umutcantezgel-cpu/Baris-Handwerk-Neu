import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

const Lightbox = ({ src, alt, onClose }) => {
    if (!src) return null;

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Schließen"
            >
                <X className="w-8 h-8" />
            </button>

            <div
                className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-contain max-h-[90vh] animate-in fade-in zoom-in-95 duration-300"
                />
            </div>
        </div>
    );
};

export default Lightbox;
