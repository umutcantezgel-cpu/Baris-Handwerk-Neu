"use client";
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

/**
 * EditModeManager Hook
 * Makes all text elements on the page editable when edit mode is active
 */
const useEditModeManager = () => {
    const { isEditMode } = useAuth();

    useEffect(() => {
        if (!isEditMode) {
            // Remove contenteditable from all elements when edit mode is disabled
            const editableElements = document.querySelectorAll('[data-editable="true"]');
            editableElements.forEach(el => {
                el.removeAttribute('contenteditable');
                el.removeAttribute('data-editable');
                el.style.outline = '';
                el.style.cursor = '';
            });
            return;
        }

        // Define selectors for text elements to make editable
        const textSelectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div', 'a', 'li',
            'td', 'th', 'label', 'button'
        ];

        // Elements to exclude (admin bar, inputs, etc.)
        const excludeSelectors = [
            '[data-no-edit]',
            'input',
            'textarea',
            'select',
            '.admin-bar',
            '[contenteditable]',
            'script',
            'style',
            'svg'
        ];

        // Get all text elements
        const selector = textSelectors.join(', ');
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            // Skip if element should be excluded
            if (excludeSelectors.some(sel => element.matches(sel) || element.closest(sel))) {
                return;
            }

            // Skip if element has no direct text content (only child elements)
            const hasDirectText = Array.from(element.childNodes).some(
                node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );

            if (!hasDirectText && element.children.length > 0) {
                return;
            }

            // Generate unique ID for element based on its position and content
            const elementPath = getElementPath(element);
            const storageKey = `edit_${elementPath}`;

            // Restore saved content if exists
            const savedContent = localStorage.getItem(storageKey);
            if (savedContent) {
                element.textContent = savedContent;
            }

            // Make element editable
            element.setAttribute('contenteditable', 'true');
            element.setAttribute('data-editable', 'true');
            element.setAttribute('data-storage-key', storageKey);
            element.style.outline = '1px dashed rgba(251, 191, 36, 0.3)';
            element.style.cursor = 'text';

            // Prevent default actions (like navigation for links)
            element.addEventListener('click', handleClick);

            // Add hover effect
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            // Save on blur
            element.addEventListener('blur', handleBlur);
        });

        // Cleanup function
        return () => {
            elements.forEach(element => {
                element.removeEventListener('click', handleClick);
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('blur', handleBlur);
            });
        };
    }, [isEditMode]);
};

// Helper function to generate unique path for element
const getElementPath = (element) => {
    const path = [];
    let current = element;

    while (current && current !== document.body) {
        let selector = current.tagName.toLowerCase();

        // Add ID if exists
        if (current.id) {
            selector += '#' + current.id;
            path.unshift(selector);
            break; // ID is unique, no need to go further
        }

        // Add class if exists (first class only)
        if (current.className && typeof current.className === 'string') {
            const firstClass = current.className.split(' ')[0];
            if (firstClass) {
                selector += '.' + firstClass;
            }
        }

        // Add index among siblings
        const siblings = Array.from(current.parentNode?.children || []);
        const index = siblings.indexOf(current);
        if (index > 0) {
            selector += `:nth-child(${index + 1})`;
        }

        path.unshift(selector);
        current = current.parentNode;
    }

    return path.join('>');
};

// Event handlers
const handleClick = (e) => {
    // Prevent default actions (like navigation) when in edit mode
    e.preventDefault();
    e.stopPropagation();
};

const handleMouseEnter = (e) => {
    e.target.style.outline = '2px solid rgb(251, 191, 36)';
    e.target.style.backgroundColor = 'rgba(254, 243, 199, 0.3)';
};

const handleMouseLeave = (e) => {
    e.target.style.outline = '1px dashed rgba(251, 191, 36, 0.3)';
    e.target.style.backgroundColor = '';
};

const handleBlur = (e) => {
    const storageKey = e.target.getAttribute('data-storage-key');
    const content = e.target.textContent;

    if (storageKey && content) {
        localStorage.setItem(storageKey, content);

        // Visual feedback
        e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
        setTimeout(() => {
            e.target.style.backgroundColor = '';
        }, 500);
    }
};

export default useEditModeManager;
