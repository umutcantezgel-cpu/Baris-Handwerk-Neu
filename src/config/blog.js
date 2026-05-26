import React from 'react';
// import React from 'react';
import {
    LayoutGrid,
    Droplets,
    Flame,
    Sun,
    Wrench,
    Newspaper
} from 'lucide-react';

export const categories = [
    { id: 'all', name: 'Alle Artikel', icon: LayoutGrid },
    { id: 'sanitaer', name: 'Sanitär & Bad', icon: Droplets },
    { id: 'heizung', name: 'Heizung & Wärme', icon: Flame },
    { id: 'solar', name: 'Solar & Energie', icon: Sun },
    { id: 'wartung', name: 'Wartung & Tipps', icon: Wrench },
    { id: 'news', name: 'Neuigkeiten', icon: Newspaper }
];
