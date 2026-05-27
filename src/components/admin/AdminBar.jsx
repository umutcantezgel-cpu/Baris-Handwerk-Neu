"use client";
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Edit3, LogOut, User, CheckCircle } from 'lucide-react';

const AdminBar = () => {
    const { isAuthenticated, user, isEditMode, toggleEditMode, logout } = useAuth();

    if (!isAuthenticated) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-900 to-primary-800 border-t border-primary-700 shadow-2xl" data-no-edit="true">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: User Info */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                            <User className="w-5 h-5 text-white" />
                            <span className="text-sm font-medium text-white">
                                {user?.username || 'Admin'}
                            </span>
                        </div>
                        <div className="hidden sm:block h-6 w-px bg-white/20" />
                        <span className="hidden sm:block text-xs text-primary-200">
                            Admin Modus aktiv
                        </span>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        {/* Edit Mode Toggle */}
                        <button
                            onClick={toggleEditMode}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isEditMode
                                ? 'bg-secondary-500 text-white shadow-lg'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {isEditMode ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="hidden sm:inline">Bearbeitungsmodus</span>
                                </>
                            ) : (
                                <>
                                    <Edit3 className="w-5 h-5" />
                                    <span className="hidden sm:inline">Bearbeiten</span>
                                </>
                            )}
                        </button>

                        {/* Logout Button */}
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden sm:inline">Abmelden</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBar;
