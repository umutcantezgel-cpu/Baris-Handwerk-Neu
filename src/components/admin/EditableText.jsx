import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Edit2, Check, X } from 'lucide-react';

/**
 * EditableText Component
 * Makes text editable when admin is in edit mode
 * Changes are saved to localStorage
 */
const EditableText = ({
    id,
    defaultValue,
    as: Component = 'span',
    className = '',
    multiline = false,
    placeholder = 'Text eingeben...'
}) => {
    const { isEditMode } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    // Load saved value from localStorage or use default
    useEffect(() => {
        const saved = localStorage.getItem(`editable_${id}`);
        setValue(saved || defaultValue);
    }, [id, defaultValue]);

    // Focus input when editing starts
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            if (multiline) {
                inputRef.current.select();
            }
        }
    }, [isEditing, multiline]);

    const handleClick = (e) => {
        if (isEditMode && !isEditing) {
            e.preventDefault();
            e.stopPropagation();
            setIsEditing(true);
        }
    };

    const handleSave = () => {
        localStorage.setItem(`editable_${id}`, value);
        setIsEditing(false);
    };

    const handleCancel = () => {
        const saved = localStorage.getItem(`editable_${id}`);
        setValue(saved || defaultValue);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (!multiline && e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    // If currently editing, show input/textarea
    if (isEditing) {
        return (
            <div className="relative inline-block w-full">
                {multiline ? (
                    <textarea
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`${className} border-2 border-secondary-500 bg-white rounded px-2 py-1 w-full min-h-[100px] focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`${className} border-2 border-secondary-500 bg-white rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                        placeholder={placeholder}
                    />
                )}
                <div className="absolute -right-20 top-0 flex gap-1">
                    <button
                        onClick={handleSave}
                        className="p-2 bg-[var(--color-brand-secondary)] text-white rounded hover:bg-[var(--color-brand-primary)] transition-colors"
                        title="Speichern"
                    >
                        <Check className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleCancel}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        title="Abbrechen"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    // If in edit mode but not editing, show with edit indicator
    if (isEditMode) {
        return (
            <Component
                onClick={handleClick}
                className={`${className} cursor-pointer hover:bg-yellow-100 hover:outline hover:outline-2 hover:outline-yellow-400 transition-all relative group`}
                title="Klicken zum Bearbeiten"
            >
                {value || placeholder}
                <Edit2 className="inline-block w-4 h-4 ml-2 text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Component>
        );
    }

    // Normal mode - just show the text
    return <Component className={className}>{value || placeholder}</Component>;
};

export default EditableText;
