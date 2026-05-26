import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Link, useNavigate } from 'react-router-dom';
import {
    FileText,
    Image as ImageIcon,
    Edit3,
    Eye,
    Plus,
    Trash2,
    CheckCircle2,
    Clock,
    AlertCircle,
    Search,
    Filter,
    ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatusBadge = ({ status }) => {
    const statusConfig = {
        'published': { label: 'Veröffentlicht', color: 'bg-green-100 text-green-700', icon: CheckCircle2 },
        'draft': { label: 'Entwurf', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
        'review': { label: 'In Prüfung', color: 'bg-blue-100 text-blue-700', icon: AlertCircle },
    };

    const config = statusConfig[status] || statusConfig.published;
    const Icon = config.icon;

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
            <Icon className="w-3.5 h-3.5" />
            {config.label}
        </span>
    );
};

const ContentCard = ({ page, onEdit }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{page.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                        <StatusBadge status={page.status} />
                        <span className="text-xs text-gray-400">Aktualisiert: {page.lastUpdated}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-blue-600"
                    onClick={() => window.open(page.url, '_blank')}
                >
                    <Eye className="w-4 h-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-blue-600"
                    onClick={onEdit}
                >
                    <Edit3 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    </div>
);

const ContentManager = () => {
    const { blogPosts, updateContent } = useContent();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [message, setMessage] = useState(null);

    // Initial Static Pages (Read Only in this demo)
    const staticPages = [
        { id: 'home', title: 'Startseite', description: 'Hauptseite mit Hero, Services und CTA', url: '/', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'about', title: 'Über uns', description: 'Unternehmensgeschichte und Team-Präsentation', url: '/ueber-uns', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'services', title: 'Leistungen', description: 'Übersicht aller Dienstleistungen', url: '/leistungen', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'projects', title: 'Referenzen', description: 'Projektgalerie und Referenzen', url: '/referenzen', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'contact', title: 'Kontakt', description: 'Kontaktformular und Anfahrt', url: '/kontakt', status: 'published', lastUpdated: '20.12.2024' },
    ];

    const legalPages = [
        { id: 'impressum', title: 'Impressum', description: 'Rechtliche Informationen', url: '/impressum', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'datenschutz', title: 'Datenschutz', description: 'Datenschutzerklärung', url: '/datenschutz', status: 'published', lastUpdated: '20.12.2024' },
        { id: 'agb', title: 'AGB', description: 'Allgemeine Geschäftsbedingungen', url: '/agb', status: 'published', lastUpdated: '20.12.2024' },
    ];

    const showMessage = (text, type = 'info') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleEdit = (page) => {
        if (page.url.startsWith('/blog/')) {
            // Navigate to Blog Editor
            navigate(`/admin/blog/${page.id}`);
        } else {
            showMessage('Statische Seiten können in dieser Version nicht bearbeitet werden.', 'warning');
        }
    };

    const handleNewPage = () => {
        // Navigate to Blog Editor for new post
        navigate('/admin/blog/new');
    };

    const blogPostsList = blogPosts?.map(post => ({
        id: post.id,
        title: post.title,
        description: post.excerpt || 'Blog-Beitrag',
        url: `/blog/${post.id}`,
        status: 'published',
        lastUpdated: post.date || '20.12.2024'
    })) || [];

    const allContent = [...staticPages, ...legalPages, ...blogPostsList];

    const filteredContent = allContent.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        if (activeFilter === 'all') return matchesSearch;
        if (activeFilter === 'pages') return matchesSearch && staticPages.some(p => p.id === item.id);
        if (activeFilter === 'blog') return matchesSearch && blogPostsList.some(p => p.id === item.id);
        if (activeFilter === 'legal') return matchesSearch && legalPages.some(p => p.id === item.id);
        return matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-heading">Inhalte & Seiten</h1>
                    <p className="text-gray-500">Verwalten Sie alle Seiten und Inhalte Ihrer Website</p>
                </div>
                <Button onClick={handleNewPage} className="bg-[#1a3a52] hover:bg-[#152d40] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Neuer Blog-Beitrag
                </Button>
            </div>

            {/* Message Toast */}
            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' :
                    message.type === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' :
                        'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                    <p className="font-medium">{message.text}</p>
                </div>
            )}

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Seiten durchsuchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        {[
                            { id: 'all', label: 'Alle' },
                            { id: 'pages', label: 'Seiten' },
                            { id: 'blog', label: 'Blog' },
                            { id: 'legal', label: 'Rechtliches' },
                        ].map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeFilter === filter.id
                                    ? 'bg-[#1a3a52] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Gesamt</p>
                    <p className="text-2xl font-bold text-gray-900">{allContent.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Statische Seiten</p>
                    <p className="text-2xl font-bold text-gray-900">{staticPages.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Blog-Beiträge</p>
                    <p className="text-2xl font-bold text-gray-900">{blogPostsList.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Rechtliche Seiten</p>
                    <p className="text-2xl font-bold text-gray-900">{legalPages.length}</p>
                </div>
            </div>

            {/* Pages Section */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Hauptseiten</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {filteredContent.filter(p => staticPages.some(s => s.id === p.id)).map(page => (
                        <ContentCard
                            key={page.id}
                            page={page}
                            onEdit={() => handleEdit(page)}
                        />
                    ))}
                </div>
            </div>

            {/* Blog Section */}
            {blogPostsList.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Blog-Beiträge</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {filteredContent.filter(p => blogPostsList.some(b => b.id === p.id)).map(page => (
                            <ContentCard
                                key={page.id}
                                page={page}
                                onEdit={() => handleEdit(page)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Legal Section */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Rechtliche Seiten</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {filteredContent.filter(p => legalPages.some(l => l.id === p.id)).map(page => (
                        <ContentCard
                            key={page.id}
                            page={page}
                            onEdit={() => handleEdit(page)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentManager;
