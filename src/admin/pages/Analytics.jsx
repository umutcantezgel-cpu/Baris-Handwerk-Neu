import React, { useState, useMemo } from 'react';
import { useContent } from '@/contexts/ContentContext';
import {
    BarChart3,
    TrendingUp,
    Users,
    Eye,
    MousePointer,
    Clock,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Globe,
    Smartphone,
    Monitor,
    FileText,
    Mail,
    Phone
} from 'lucide-react';

// Simulated analytics data (in production, would come from real analytics)
const generateMockData = () => {
    const today = new Date();
    const last30Days = [];

    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        last30Days.push({
            date: date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
            visitors: Math.floor(Math.random() * 50) + 20,
            pageViews: Math.floor(Math.random() * 150) + 50
        });
    }

    return last30Days;
};

const StatCard = ({ title, value, change, changeType, icon: Icon, color }) => (
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
                <span className={`flex items-center font-medium ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {changeType === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {change}
                </span>
                <span className="text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
        )}
    </div>
);

const MiniBarChart = ({ data, maxValue }) => {
    const height = 60;
    return (
        <div className="flex items-end gap-1 h-16">
            {data.map((value, i) => (
                <div
                    key={i}
                    className="flex-1 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer"
                    style={{ height: `${(value / maxValue) * height}px`, minHeight: '4px' }}
                    title={`${value} Besucher`}
                />
            ))}
        </div>
    );
};

const Analytics = () => {
    const { services, projects, team, blogPosts } = useContent();
    const [timeRange, setTimeRange] = useState('30d');

    const mockData = useMemo(() => generateMockData(), []);

    // Calculate totals from mock data
    const totalVisitors = mockData.reduce((sum, d) => sum + d.visitors, 0);
    const totalPageViews = mockData.reduce((sum, d) => sum + d.pageViews, 0);
    const avgSessionDuration = '2:34';
    const bounceRate = '42%';

    // Content stats
    const contentStats = {
        services: services?.length || 0,
        projects: projects?.projects?.length || 0,
        team: team?.length || 0,
        blogPosts: blogPosts?.length || 0
    };

    // Top pages (simulated)
    const topPages = [
        { path: '/', name: 'Startseite', views: 487, percentage: 32 },
        { path: '/leistungen', name: 'Leistungen', views: 312, percentage: 21 },
        { path: '/kontakt', name: 'Kontakt', views: 245, percentage: 16 },
        { path: '/ueber-uns', name: 'Über uns', views: 198, percentage: 13 },
        { path: '/referenzen', name: 'Referenzen', views: 156, percentage: 10 }
    ];

    // Device breakdown (simulated)
    const devices = [
        { name: 'Desktop', percentage: 52, icon: Monitor, color: 'bg-blue-500' },
        { name: 'Mobile', percentage: 41, icon: Smartphone, color: 'bg-green-500' },
        { name: 'Tablet', percentage: 7, icon: Monitor, color: 'bg-purple-500' }
    ];

    // Contact form submissions (simulated)
    const recentContacts = [
        { name: 'Max Müller', type: 'Kontaktformular', date: 'Heute, 14:32', status: 'neu' },
        { name: 'Anna Schmidt', type: 'Rückruf', date: 'Gestern, 09:15', status: 'bearbeitet' },
        { name: 'Peter Weber', type: 'Kontaktformular', date: '07.01.2026', status: 'bearbeitet' }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-heading">Analytics</h1>
                    <p className="text-gray-500">Website-Statistiken und Leistungsübersicht</p>
                </div>
                <div className="flex gap-2">
                    {[
                        { id: '7d', label: '7 Tage' },
                        { id: '30d', label: '30 Tage' },
                        { id: '90d', label: '90 Tage' }
                    ].map(range => (
                        <button
                            key={range.id}
                            onClick={() => setTimeRange(range.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${timeRange === range.id
                                    ? 'bg-[#1a3a52] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                        <p className="font-medium text-blue-900">Demo-Modus</p>
                        <p className="text-sm text-blue-700">
                            Diese Statistiken sind simuliert. Für echte Daten verbinden Sie Google Analytics oder ein anderes Tracking-Tool.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Besucher (30 Tage)"
                    value={totalVisitors.toLocaleString('de-DE')}
                    change="+12%"
                    changeType="up"
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Seitenaufrufe"
                    value={totalPageViews.toLocaleString('de-DE')}
                    change="+8%"
                    changeType="up"
                    icon={Eye}
                    color="bg-green-500"
                />
                <StatCard
                    title="Ø Sitzungsdauer"
                    value={avgSessionDuration}
                    change="-5%"
                    changeType="down"
                    icon={Clock}
                    color="bg-purple-500"
                />
                <StatCard
                    title="Absprungrate"
                    value={bounceRate}
                    change="-3%"
                    changeType="up"
                    icon={MousePointer}
                    color="bg-orange-500"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visitors Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-900">Besucher-Trend</h2>
                        <span className="text-sm text-gray-500">Letzte 30 Tage</span>
                    </div>
                    <MiniBarChart
                        data={mockData.map(d => d.visitors)}
                        maxValue={Math.max(...mockData.map(d => d.visitors))}
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>{mockData[0].date}</span>
                        <span>{mockData[mockData.length - 1].date}</span>
                    </div>
                </div>

                {/* Device Breakdown */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Geräte</h2>
                    <div className="space-y-4">
                        {devices.map(device => (
                            <div key={device.name}>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <device.icon className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm font-medium text-gray-700">{device.name}</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">{device.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${device.color}`}
                                        style={{ width: `${device.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Top Seiten</h2>
                    <div className="space-y-3">
                        {topPages.map((page, index) => (
                            <div key={page.path} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-gray-100 rounded text-xs font-bold text-gray-600 flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className="font-medium text-gray-900">{page.name}</p>
                                        <p className="text-xs text-gray-500">{page.path}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{page.views}</p>
                                    <p className="text-xs text-gray-500">{page.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Overview */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Inhaltsübersicht</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-2xl font-bold text-blue-900">{contentStats.services}</p>
                            <p className="text-sm text-blue-700">Dienstleistungen</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-2xl font-bold text-green-900">{contentStats.projects}</p>
                            <p className="text-sm text-green-700">Projekte</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-900">{contentStats.team}</p>
                            <p className="text-sm text-purple-700">Teammitglieder</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                            <p className="text-2xl font-bold text-orange-900">{contentStats.blogPosts}</p>
                            <p className="text-sm text-orange-700">Blog-Beiträge</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Contacts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Letzte Kontaktanfragen</h2>
                    <span className="text-sm text-gray-500">Simulierte Daten</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                                <th className="pb-3 font-medium">Name</th>
                                <th className="pb-3 font-medium">Typ</th>
                                <th className="pb-3 font-medium">Datum</th>
                                <th className="pb-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentContacts.map((contact, i) => (
                                <tr key={i}>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-medium text-gray-600">
                                                    {contact.name.charAt(0)}
                                                </span>
                                            </div>
                                            <span className="font-medium text-gray-900">{contact.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            {contact.type === 'Kontaktformular' ? <Mail className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                                            {contact.type}
                                        </div>
                                    </td>
                                    <td className="py-3 text-sm text-gray-600">{contact.date}</td>
                                    <td className="py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${contact.status === 'neu'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {contact.status === 'neu' ? 'Neu' : 'Bearbeitet'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
