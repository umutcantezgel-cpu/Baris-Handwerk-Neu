import React, { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Save,
    ArrowLeft,
    Eye,
    Image as ImageIcon,
    Tag,
    Calendar,
    FileText,
    CheckCircle2,
    Clock,
    X,
    Plus,
    Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogEditor = () => {
    const { blogPosts, blogCategories, updateContent } = useContent();
    const navigate = useNavigate();
    const { id } = useParams();

    const isEditing = !!id;
    const existingPost = isEditing ? blogPosts?.find(p => p.id === id) : null;

    const [post, setPost] = useState({
        id: '',
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: '',
        image: '',
        author: 'Baris Aydin',
        date: new Date().toLocaleDateString('de-DE'),
        status: 'draft',
        seo: {
            title: '',
            description: ''
        }
    });

    const [message, setMessage] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        if (existingPost) {
            setPost({
                ...existingPost,
                seo: existingPost.seo || { title: '', description: '' }
            });
        } else if (!isEditing) {
            setPost(prev => ({
                ...prev,
                id: `post-${Date.now()}`
            }));
        }
    }, [existingPost, isEditing]);

    const showMessage = (text, type = 'info') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[äöüß]/g, (char) => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }[char]))
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setPost(prev => ({
            ...prev,
            title,
            slug: generateSlug(title)
        }));
    };

    const handleChange = (field, value) => {
        setPost(prev => ({ ...prev, [field]: value }));
    };

    const handleSeoChange = (field, value) => {
        setPost(prev => ({
            ...prev,
            seo: { ...prev.seo, [field]: value }
        }));
    };

    const handleSave = (publishStatus = post.status) => {
        if (!post.title.trim()) {
            showMessage('Bitte geben Sie einen Titel ein.', 'error');
            return;
        }

        const updatedPost = {
            ...post,
            status: publishStatus,
            date: post.date || new Date().toLocaleDateString('de-DE')
        };

        let updatedPosts;
        if (isEditing) {
            updatedPosts = blogPosts.map(p => p.id === id ? updatedPost : p);
        } else {
            updatedPosts = [...(blogPosts || []), updatedPost];
        }

        updateContent('baris_content_blog_posts', updatedPosts);
        showMessage(
            publishStatus === 'published'
                ? 'Blog-Beitrag veröffentlicht!'
                : 'Entwurf gespeichert!',
            'success'
        );

        setTimeout(() => navigate('/admin/content'), 1000);
    };

    const handleDelete = () => {
        if (window.confirm('Möchten Sie diesen Beitrag wirklich löschen?')) {
            const updatedPosts = blogPosts.filter(p => p.id !== id);
            updateContent('baris_content_blog_posts', updatedPosts);
            showMessage('Beitrag gelöscht', 'success');
            setTimeout(() => navigate('/admin/content'), 500);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/admin/content')}
                        className="text-gray-500"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Zurück
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 font-heading">
                            {isEditing ? 'Beitrag bearbeiten' : 'Neuer Blog-Beitrag'}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {post.status === 'published' ? 'Veröffentlicht' : 'Entwurf'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {isEditing && (
                        <Button
                            variant="ghost"
                            onClick={handleDelete}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Löschen
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        onClick={() => handleSave('draft')}
                        className="border-gray-300"
                    >
                        <Clock className="w-4 h-4 mr-2" />
                        Als Entwurf speichern
                    </Button>
                    <Button
                        onClick={() => handleSave('published')}
                        className="bg-[#00b050] hover:bg-[#009040] text-white"
                    >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Veröffentlichen
                    </Button>
                </div>
            </div>

            {/* Message Toast */}
            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' :
                        message.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' :
                            'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                    <p className="font-medium">{message.text}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Title & Slug */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Titel *
                                </label>
                                <input
                                    type="text"
                                    value={post.title}
                                    onChange={handleTitleChange}
                                    placeholder="Geben Sie einen Titel ein..."
                                    className="w-full px-4 py-3 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    URL-Slug
                                </label>
                                <div className="flex items-center">
                                    <span className="text-gray-400 text-sm mr-2">/blog/</span>
                                    <input
                                        type="text"
                                        value={post.slug}
                                        onChange={(e) => handleChange('slug', e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kurzbeschreibung (Excerpt)
                        </label>
                        <textarea
                            value={post.excerpt}
                            onChange={(e) => handleChange('excerpt', e.target.value)}
                            placeholder="Eine kurze Zusammenfassung des Beitrags..."
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                        />
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inhalt
                        </label>
                        <textarea
                            value={post.content}
                            onChange={(e) => handleChange('content', e.target.value)}
                            placeholder="Schreiben Sie Ihren Beitrag hier... (Markdown wird unterstützt)"
                            rows={15}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none font-mono text-sm"
                        />
                        <p className="text-xs text-gray-400 mt-2">
                            Tipp: Markdown-Formatierung wird unterstützt (z.B. **fett**, *kursiv*, ## Überschrift)
                        </p>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-gray-400" />
                            SEO-Einstellungen
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    SEO-Titel
                                </label>
                                <input
                                    type="text"
                                    value={post.seo?.title || ''}
                                    onChange={(e) => handleSeoChange('title', e.target.value)}
                                    placeholder={post.title || 'SEO-Titel für Suchmaschinen'}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Meta-Beschreibung
                                </label>
                                <textarea
                                    value={post.seo?.description || ''}
                                    onChange={(e) => handleSeoChange('description', e.target.value)}
                                    placeholder="Kurze Beschreibung für Suchergebnisse (max. 160 Zeichen)"
                                    rows={2}
                                    maxLength={160}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    {(post.seo?.description || '').length}/160 Zeichen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Featured Image */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <ImageIcon className="w-5 h-5 text-gray-400" />
                            Beitragsbild
                        </h3>
                        {post.image ? (
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt="Vorschau"
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => handleChange('image', '')}
                                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                                <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                                <p className="text-sm text-gray-500 mb-2">Bild-URL eingeben</p>
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    onChange={(e) => handleChange('image', e.target.value)}
                                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                        )}
                    </div>

                    {/* Category */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Tag className="w-5 h-5 text-gray-400" />
                            Kategorie
                        </h3>
                        <select
                            value={post.category}
                            onChange={(e) => handleChange('category', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                        >
                            <option value="">Kategorie wählen...</option>
                            {blogCategories?.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                            <option value="tipps">Tipps & Tricks</option>
                            <option value="news">Neuigkeiten</option>
                            <option value="projects">Projekte</option>
                        </select>
                    </div>

                    {/* Author & Date */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Autor
                                </label>
                                <input
                                    type="text"
                                    value={post.author}
                                    onChange={(e) => handleChange('author', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Datum
                                </label>
                                <input
                                    type="text"
                                    value={post.date}
                                    onChange={(e) => handleChange('date', e.target.value)}
                                    placeholder="TT.MM.JJJJ"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogEditor;
