"use client";
import { COMPANY_DATA } from '@/config/company';

/**
 * Custom hook to determine real-time business open/closed status.
 * Uses COMPANY_DATA.hours to check current day and time.
 */
export const useBusinessStatus = () => {
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[now.getDay()];
    const dayData = COMPANY_DATA.hours?.[currentDay];

    if (!dayData || dayData.type === 'closed') {
        return { isOpen: false, text: 'Geschlossen' };
    }

    const [openH, openM] = (dayData.open || '00:00').split(':').map(Number);
    const [closeH, closeM] = (dayData.close || '00:00').split(':').map(Number);

    const openTime = new Date(now);
    openTime.setHours(openH, openM, 0, 0);

    const closeTime = new Date(now);
    closeTime.setHours(closeH, closeM, 0, 0);

    if (now >= openTime && now < closeTime) {
        return { isOpen: true, text: `Jetzt geöffnet (bis ${dayData.close} Uhr)` };
    }

    return { isOpen: false, text: 'Geschlossen' };
};
