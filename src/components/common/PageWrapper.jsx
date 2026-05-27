"use client";
import React from 'react';
import { cn } from '@/utils';

const PageWrapper = ({ children, className = '' }) => {
    return (
        <div className={cn("animate-fade-in w-full", className)}>
            {children}
        </div>
    );
};

export default PageWrapper;
