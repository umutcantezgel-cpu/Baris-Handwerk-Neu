import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
    LayoutDashboard,
    FileText,
    Utensils,
    Settings,
    LogOut,
    Menu as MenuIcon,
    X,
    Building2,
    Users,
    Briefcase,
    BarChart3
} from 'lucide-react';

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { logout, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const navigation = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Inhalte & Seiten', path: '/admin/content', icon: FileText },
        { name: 'Dienstleistungen', path: '/admin/services', icon: Utensils },
        { name: 'Projekte', path: '/admin/projects', icon: Briefcase },
        { name: 'Unternehmen', path: '/admin/business', icon: Building2 },
        { name: 'Team', path: '/admin/team', icon: Users },
        { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
        { name: 'Einstellungen', path: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1a3a52] text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:relative lg:translate-x-0`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="h-16 flex items-center px-6 border-b border-white/10">
                        <span className="text-xl font-bold font-heading">Admin Panel</span>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="ml-auto lg:hidden text-white/70 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? 'bg-[#00b050] text-white'
                                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User & Logout */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex items-center mb-4 px-4">
                            <div className="w-8 h-8 rounded-full bg-[#00b050] flex items-center justify-center text-sm font-bold">
                                {user?.name?.charAt(0)}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">{user?.name}</p>
                                <p className="text-xs text-blue-200">Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-300 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Abmelden
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <MenuIcon className="w-6 h-6" />
                    </button>
                    <span className="ml-4 text-lg font-bold text-gray-900">Admin Panel</span>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
