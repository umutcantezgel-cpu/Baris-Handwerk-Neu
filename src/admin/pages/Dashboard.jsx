import React from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Link } from 'react-router-dom';
import {
    Users,
    Eye,
    FileText,
    ArrowUpRight,
    Clock,
    AlertCircle,
    Wrench,
    Briefcase,
    Building2
} from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
        {change && (
            <div className="mt-4 flex items-center text-sm">
                <span className="text-green-600 flex items-center font-medium">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    {change}
                </span>
                <span className="text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
        )}
    </div>
);

const Dashboard = () => {
    const { services, projects, siteConfig } = useContent();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 font-heading">Dashboard</h1>
                <p className="text-gray-500">Willkommen zurück, {siteConfig.name.split(' ')[0]}.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Dienstleistungen"
                    value={services.length}
                    change="+1"
                    icon={Wrench}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Projekte"
                    value={projects.projects.length}
                    change="+2"
                    icon={Briefcase}
                    color="bg-[var(--color-brand-secondary)]"
                />
                <StatCard
                    title="Servicegebiete"
                    value={siteConfig.serviceAreas.length}
                    change="0"
                    icon={Building2}
                    color="bg-purple-500"
                />
                <StatCard
                    title="Uptime"
                    value="99.9%"
                    change="+0.1%"
                    icon={Clock}
                    color="bg-orange-500"
                />
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* System Status */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">System Status</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium text-green-900">Alle Systeme operational</span>
                            </div>
                            <span className="text-sm text-green-700">Geprüft: Gerade eben</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-blue-500" />
                                <span className="font-medium text-blue-900">Letztes Backup</span>
                            </div>
                            <span className="text-sm text-blue-700">Heute, 03:00 Uhr</span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Schnellzugriff</h2>
                    <div className="space-y-3">
                        <Link to="/admin/services" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                            Dienstleistungen verwalten
                        </Link>
                        <Link to="/admin/business" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                            Unternehmensdaten bearbeiten
                        </Link>
                        <Link to="/admin/team" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                            Teammitglied hinzufügen
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
