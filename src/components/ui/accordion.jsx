"use client";
import React, { useState, createContext, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';

const AccordionContext = createContext({});
const AccordionItemContext = createContext({});

const Accordion = ({ children, className, type = 'single', collapsible = false, ...props }) => {
    const [value, setValue] = useState(props.defaultValue || (type === 'single' ? '' : []));

    const handleValueChange = (itemValue) => {
        if (type === 'single') {
            setValue(prev => (prev === itemValue && collapsible ? '' : itemValue));
        } else {
            // array logic if needed, but simplistic here
            setValue(prev => (Array.isArray(prev) ? prev : []));
        }
    };

    return (
        <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div className={cn(className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

const AccordionItem = ({ children, className, value, ...props }) => {
    return (
        <AccordionItemContext.Provider value={{ value }}>
            <div className={cn("border-b", className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
};

const AccordionTrigger = ({ children, className, ...props }) => {
    const { value: selectedValue, onValueChange } = useContext(AccordionContext);
    const { value: itemValue } = useContext(AccordionItemContext);
    const isOpen = selectedValue === itemValue;

    return (
        <div className="flex">
            <button
                type="button"
                onClick={() => onValueChange(itemValue)}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
                    className
                )}
                data-state={isOpen ? 'open' : 'closed'}
                {...props}
            >
                {children}
                <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
            </button>
        </div>
    );
};

const AccordionContent = ({ children, className, ...props }) => {
    const { value: selectedValue } = useContext(AccordionContext);
    const { value: itemValue } = useContext(AccordionItemContext);
    const isOpen = selectedValue === itemValue;

    if (!isOpen) return null;

    return (
        <div
            className={cn(
                "overflow-hidden text-sm transition-all",
                className
            )}
            {...props}
        >
            <div className="pb-4 pt-0">{children}</div>
        </div>
    );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
