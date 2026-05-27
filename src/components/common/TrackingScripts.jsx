"use client";
import React, { useEffect } from 'react';
import { useConsent } from '@/components/common/ConsentManager';


const TrackingScripts = () => {
    const { preferences } = useConsent();

    // Check if we have consent for specific categories
    const analyticsConsent = preferences?.analytics;
    const marketingConsent = preferences?.marketing;

    // Placeholder IDs - User needs to provide these
    const GA4_ID = 'G-XXXXXXXX'; // Replace with actual ID
    const META_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with actual ID

    useEffect(() => {
        // Initialize DataLayer for GA4 if consent is given
        if (analyticsConsent) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', GA4_ID);
        }

        // Initialize Meta Pixel if consent is given
        if (marketingConsent) {
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                    n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            window.fbq('init', META_PIXEL_ID);
            window.fbq('track', 'PageView');
        }
    }, [analyticsConsent, marketingConsent]);

    return (
        <>
            {/* Google Analytics 4 Script - Loaded only if analytics consent is true */}
            {analyticsConsent && (
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}></script>
            )}
        </>
    );
};

export default TrackingScripts;
