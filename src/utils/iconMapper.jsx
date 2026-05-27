import React from 'react';
import * as Icons from 'lucide-react';

export const getIcon = (iconName) => {
    if (!iconName) return null;
    // If it's already a component (function/object), return it
    if (typeof iconName === 'function' || typeof iconName === 'object') return iconName;

    // Convert lowercase/camelCase to PascalCase for Lucide icons
    const pascalCaseName = iconName.charAt(0).toUpperCase() + iconName.slice(1);

    const IconComponent = Icons[pascalCaseName] || Icons[iconName];
    return IconComponent || Icons.HelpCircle; // Fallback icon
};

export const IconWrapper = React.memo(function IconWrapper({ name, ...props }) {
    const Icon = getIcon(name);
    return Icon ? React.createElement(Icon, props) : null;
});
