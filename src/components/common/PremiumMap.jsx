import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, OverlayViewF, MarkerF } from '@react-google-maps/api';
import { COMPANY_DATA } from '@/config/company';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { Plus, Minus, Navigation, Phone, MapPin, Clock, ArrowRight, Compass } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTANTS & STYLES
// ═══════════════════════════════════════════════════════════════════════════════

const GOOGLE_MAPS_API_KEY = 'AIzaSyD7hn48J_9ZfpPfdMFL_fHZXbAsePxCZjg';

// Exact coordinates for Linsenbergstraße 9, Wetzlar
const TARGET_LOCATION = { lat: 50.5754099, lng: 8.4925429 };

// Initial View (Zoomed out, no tilt)
const INITIAL_VIEW = {
    center: { lat: 50.57, lng: 8.49 },
    zoom: 12,
    tilt: 0,
    heading: 0
};

// Cinematic Landing View (Zoomed in, tilted, precision aligned)
const CINEMATIC_VIEW = {
    center: TARGET_LOCATION,
    zoom: 18,
    tilt: 45,
    heading: 0 // North up for orientation
};

const MAP_OPTIONS = {
    mapId: "DEMO_MAP_ID", // Enable Vector Map for smooth tilt/heading animation
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: false, // Turn off POI clicks to focus on our marker
    // Custom Dark Theme (Premium)
    styles: [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
        { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
        { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] }
    ]
};

// ═══════════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * The custom marker showing the "B" logo and pulse.
 * Uses OverlayViewF for React 18 compatibility.
 * pointer-events-none ensures clicks pass through to the invisible MarkerF.
 */
const BeaconMarker = ({ position, isActive, onClick }) => {
    // We use OverlayViewF.OVERLAY_MOUSE_TARGET to allow clicks (if pointer events were on)
    return (
        <OverlayViewF
            position={position}
            mapPaneName="overlayMouseTarget"
        >
            <div
                className="relative -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
                {/* The Core */}
                <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br from-[#edd0a8] to-[#956c3c] shadow-[0_0_30px_rgba(198,156,109,0.5)] flex items-center justify-center transition-transform duration-500 ease-out ${isActive ? 'scale-125 ring-4 ring-[#c69c6d]/20' : ''}`}>
                    <span className="text-white font-bold text-lg select-none">B</span>

                    {/* Active Indicator Dot */}
                    {isActive && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#956c3c] animate-bounce" />
                    )}
                </div>

                {/* Vertical Beam (Optional Visual Flair) */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-[#c69c6d] to-transparent opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : ''}`} />
            </div>
        </OverlayViewF>
    );
};

/**
 * The Glassmorphism Info Panel
 */
const SmartPanel = ({ isOpen, onClose, onRoute, status }) => {
    // We don't need 'now' here since 'status' is passed as prop

    return (
        <div className={`absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 rounded-[2rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] text-white transform transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-50 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95 pointer-events-none'}`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Baris Aydin</h3>
                    <p className="text-sm text-white/50 font-medium">Batherm Haustechnik</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Minus className="w-5 h-5 text-white/50" />
                </button>
            </div>

            {/* Info Grid */}
            <div className="space-y-4">
                {/* Status */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="relative">
                        <div className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
                        <div className={`absolute inset-0 w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-400 animate-ping' : ''} opacity-75`} />
                    </div>
                    <div>
                        <p className={`text-sm font-medium ${status.isOpen ? 'text-green-400' : 'text-red-400'}`}>
                            {status.text}
                        </p>
                        <p className="text-xs text-white/30">{status.subtext}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-sm text-white/70">
                    <MapPin className="w-4 h-4 mt-1 text-[#c69c6d]" />
                    <span>{COMPANY_DATA.address.street}<br />{COMPANY_DATA.address.city}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-sm text-white/70">
                    <Phone className="w-4 h-4 text-[#c69c6d]" />
                    <a href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                        {COMPANY_DATA.contact.phone}
                    </a>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
                <button
                    onClick={onRoute}
                    className="flex-1 bg-[#c69c6d] hover:bg-[#b08b60] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_4px_20px_rgba(198,156,109,0.3)]"
                >
                    <Navigation className="w-4 h-4" />
                    <span>Route</span>
                </button>
                <div className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer">
                    <a href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`} className="flex items-center justify-center w-full h-full gap-2">
                        <Phone className="w-4 h-4" />
                        Anrufen
                    </a>
                </div>
            </div>
        </div>
    );
};

/**
 * Floating Controls
 */
const CinematicControls = ({ onZoomIn, onZoomOut, onReset }) => (
    <div className="absolute bottom-8 right-6 flex flex-col gap-2 z-[10]">
        <button onClick={onZoomIn} className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl text-white flex items-center justify-center hover:bg-[#c69c6d] transition-all active:scale-90">
            <Plus className="w-6 h-6" />
        </button>
        <button onClick={onZoomOut} className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl text-white flex items-center justify-center hover:bg-[#c69c6d] transition-all active:scale-90">
            <Minus className="w-6 h-6" />
        </button>
        <button onClick={onReset} className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl text-white flex items-center justify-center hover:bg-[#c69c6d] transition-all active:scale-90 mt-4 group">
            <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
        </button>
    </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

const PremiumMap = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'] // Preload places lib if needed
    });

    const [map, setMap] = useState(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const status = useBusinessStatus();

    const onMapLoad = useCallback((map) => {
        setMap(map);

        // Initial Cinematic Setup
        map.setOptions({
            center: INITIAL_VIEW.center,
            zoom: INITIAL_VIEW.zoom,
            tilt: 0,
            heading: 0
        });

        // Step 2: Swoop In (Delayed)
        const animationTimer = setTimeout(() => {
            const start = {
                lat: INITIAL_VIEW.center.lat,
                lng: INITIAL_VIEW.center.lng,
                zoom: INITIAL_VIEW.zoom,
                tilt: INITIAL_VIEW.tilt,
                heading: INITIAL_VIEW.heading
            };

            const end = {
                lat: CINEMATIC_VIEW.center.lat,
                lng: CINEMATIC_VIEW.center.lng,
                zoom: CINEMATIC_VIEW.zoom,
                tilt: CINEMATIC_VIEW.tilt,
                heading: CINEMATIC_VIEW.heading
            };

            const duration = 2500;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function (Ease In Out Cubic for smooth start/stop)
                const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const easedProgress = ease(progress);

                // Interpolate
                const lat = start.lat + (end.lat - start.lat) * easedProgress;
                const lng = start.lng + (end.lng - start.lng) * easedProgress;
                const zoom = start.zoom + (end.zoom - start.zoom) * easedProgress;
                const tilt = start.tilt + (end.tilt - start.tilt) * easedProgress;
                const heading = start.heading + (end.heading - start.heading) * easedProgress;

                // Atomic update using moveCamera
                map.moveCamera({
                    center: { lat, lng },
                    zoom: zoom,
                    tilt: tilt,
                    heading: heading
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);

        }, 800);

        return () => clearTimeout(animationTimer);
    }, []);

    const handleBeaconClick = useCallback(() => {
        setIsPanelOpen(true);
        // Subtle pan to make room for panel if needed
        if (map) {
            map.panTo({
                lat: TARGET_LOCATION.lat,
                lng: TARGET_LOCATION.lng
            });
        }
    }, [map]);

    const handleRoute = useCallback(() => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_DATA.address.fullAddress)}`, '_blank');
    }, []);

    if (loadError) return <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-white">Karte nicht verfügbar</div>;
    if (!isLoaded) return <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#c69c6d] border-t-transparent rounded-full animate-spin" /></div>;

    return (
        <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-[#1a1a1a] group">
            {/* Map Engine */}
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={MAP_OPTIONS}
                onLoad={onMapLoad}
            >
                {/* Invisible Click Target (Large Touch Area) - USING MARKERF FOR REACT 18 */}
                <MarkerF
                    position={TARGET_LOCATION}
                    onClick={handleBeaconClick}
                    zIndex={1000}
                    icon={{
                        url: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23ffffff" fill-opacity="0.01" /%3E%3C/svg%3E',
                        anchor: { x: 40, y: 40 }
                    }}
                />

                {/* The Beacon - USING OVERLAYVIEWF FOR REACT 18 */}
                <BeaconMarker
                    position={TARGET_LOCATION}
                    isActive={isPanelOpen}
                    onClick={handleBeaconClick}
                />
            </GoogleMap>

            {/* Smart Floating Panel */}
            <SmartPanel
                isOpen={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
                onRoute={handleRoute}
                status={status}
            />

            {/* Map Controls */}
            <CinematicControls
                onZoomIn={() => map?.setZoom((map.getZoom() || 15) + 1)}
                onZoomOut={() => map?.setZoom((map.getZoom() || 15) - 1)}
                onReset={() => {
                    map?.panTo(CINEMATIC_VIEW.center);
                    map?.setZoom(CINEMATIC_VIEW.zoom);
                    map?.setTilt(CINEMATIC_VIEW.tilt);
                    map?.setHeading(CINEMATIC_VIEW.heading);
                    setIsPanelOpen(false);
                }}
            />

            {/* Overlay Gradient (Vignette) for cinematic depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-60" />

            {/* Attribution Hider (Subtle) */}
            <style>{`
                .gmnoprint a, .gmnoprint span, .gm-style-cc { display: none; }
                .gmnoprint div { background: none !important; }
            `}</style>
        </div>
    );
};

export default PremiumMap;
