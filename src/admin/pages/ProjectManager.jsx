import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import {
    Briefcase,
    Plus,
    Edit3,
    Trash2,
    Image as ImageIcon,
    MapPin,
    Calendar,
    Tag,
    Eye,
    Save,
    X,
    ChevronDown,
    ChevronUp,
    Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
    { id: 'sanitaer', name: 'Sanitär' },
    { id: 'heizung', name: 'Heizung' },
    { id: 'klima', name: 'Klima' }
];

const ProjectCard = ({ project, onEdit, onDelete, onView }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex gap-4">
            {/* Thumbnail */}
            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                {project.images?.[0]?.url ? (
                    <img
                        src={project.images[0].url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-300" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-bold text-gray-900 truncate">{project.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {project.year}
                            </span>
                        </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.category === 'sanitaer' ? 'bg-blue-100 text-blue-700' :
                            project.category === 'heizung' ? 'bg-orange-100 text-orange-700' :
                                'bg-green-100 text-green-700'
                        }`}>
                        {CATEGORIES.find(c => c.id === project.category)?.name || project.category}
                    </span>
                </div>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{project.description}</p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="text-xs text-gray-400">+{project.tags.length - 3}</span>
                        )}
                    </div>
                )}

                {/* Testimonial indicator */}
                {project.testimonial && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-yellow-600">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <span>Kundenbewertung vorhanden</span>
                    </div>
                )}
            </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onView(project)}
                className="text-gray-500 hover:text-blue-600"
            >
                <Eye className="w-4 h-4 mr-1" />
                Ansehen
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(project)}
                className="text-gray-500 hover:text-blue-600"
            >
                <Edit3 className="w-4 h-4 mr-1" />
                Bearbeiten
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(project.id)}
                className="text-gray-500 hover:text-red-600 ml-auto"
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    </div>
);

const ProjectModal = ({ project, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState(project || {
        id: '',
        title: '',
        category: 'sanitaer',
        location: '',
        year: new Date().getFullYear(),
        duration: '',
        description: '',
        challenge: '',
        solution: '',
        images: [],
        testimonial: null,
        tags: []
    });

    const [newTag, setNewTag] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [showTestimonial, setShowTestimonial] = useState(!!formData.testimonial);

    React.useEffect(() => {
        if (project) {
            setFormData(project);
            setShowTestimonial(!!project.testimonial);
        } else {
            setFormData({
                id: `project-${Date.now()}`,
                title: '',
                category: 'sanitaer',
                location: '',
                year: new Date().getFullYear(),
                duration: '',
                description: '',
                challenge: '',
                solution: '',
                images: [],
                testimonial: null,
                tags: []
            });
            setShowTestimonial(false);
        }
    }, [project, isOpen]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAddTag = () => {
        if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...(prev.tags || []), newTag.trim()]
            }));
            setNewTag('');
        }
    };

    const handleRemoveTag = (index) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter((_, i) => i !== index)
        }));
    };

    const handleAddImage = (type) => {
        if (newImageUrl.trim()) {
            setFormData(prev => ({
                ...prev,
                images: [...(prev.images || []), {
                    type,
                    url: newImageUrl.trim(),
                    alt: type === 'before' ? 'Vorher-Zustand' : 'Nachher-Zustand'
                }]
            }));
            setNewImageUrl('');
        }
    };

    const handleRemoveImage = (index) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleTestimonialChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            testimonial: {
                ...(prev.testimonial || { text: '', author: '', rating: 5 }),
                [field]: value
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSave = {
            ...formData,
            testimonial: showTestimonial ? formData.testimonial : null
        };
        onSave(dataToSave);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl my-8">
                <form onSubmit={handleSubmit}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">
                            {project ? 'Projekt bearbeiten' : 'Neues Projekt'}
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Projekttitel *
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Kategorie
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => handleChange('category', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                >
                                    {CATEGORIES.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Standort
                                </label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => handleChange('location', e.target.value)}
                                    placeholder="z.B. Wetzlar"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Jahr
                                </label>
                                <input
                                    type="number"
                                    value={formData.year}
                                    onChange={(e) => handleChange('year', parseInt(e.target.value))}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Dauer
                                </label>
                                <input
                                    type="text"
                                    value={formData.duration}
                                    onChange={(e) => handleChange('duration', e.target.value)}
                                    placeholder="z.B. 2 Wochen"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Descriptions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Beschreibung
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Herausforderung
                                </label>
                                <textarea
                                    value={formData.challenge}
                                    onChange={(e) => handleChange('challenge', e.target.value)}
                                    rows={2}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Lösung
                                </label>
                                <textarea
                                    value={formData.solution}
                                    onChange={(e) => handleChange('solution', e.target.value)}
                                    rows={2}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bilder
                            </label>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={newImageUrl}
                                    onChange={(e) => setNewImageUrl(e.target.value)}
                                    placeholder="Bild-URL eingeben..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                />
                                <Button type="button" variant="outline" onClick={() => handleAddImage('before')}>
                                    +Vorher
                                </Button>
                                <Button type="button" variant="outline" onClick={() => handleAddImage('after')}>
                                    +Nachher
                                </Button>
                            </div>
                            {formData.images?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {formData.images.map((img, i) => (
                                        <div key={i} className="relative group">
                                            <img
                                                src={img.url}
                                                alt={img.alt}
                                                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                            />
                                            <span className={`absolute top-1 left-1 text-[10px] px-1 rounded ${img.type === 'before' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                                                }`}>
                                                {img.type === 'before' ? 'V' : 'N'}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(i)}
                                                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                            </label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    placeholder="Tag hinzufügen..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                />
                                <Button type="button" variant="outline" onClick={handleAddTag}>
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            {formData.tags?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {formData.tags.map((tag, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(i)}
                                                className="hover:text-red-500"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Testimonial */}
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowTestimonial(!showTestimonial)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-700"
                            >
                                {showTestimonial ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                Kundenbewertung {showTestimonial ? 'ausblenden' : 'hinzufügen'}
                            </button>
                            {showTestimonial && (
                                <div className="mt-3 p-4 bg-yellow-50 rounded-lg border border-yellow-100 space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Bewertungstext
                                        </label>
                                        <textarea
                                            value={formData.testimonial?.text || ''}
                                            onChange={(e) => handleTestimonialChange('text', e.target.value)}
                                            rows={2}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Autor
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.testimonial?.author || ''}
                                                onChange={(e) => handleTestimonialChange('author', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Bewertung (1-5)
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="5"
                                                value={formData.testimonial?.rating || 5}
                                                onChange={(e) => handleTestimonialChange('rating', parseInt(e.target.value))}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Abbrechen
                        </Button>
                        <Button type="submit" className="bg-[#00b050] hover:bg-[#009040] text-white">
                            <Save className="w-4 h-4 mr-2" />
                            Speichern
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ProjectManager = () => {
    const { projects, updateContent } = useContent();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [message, setMessage] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const projectsList = projects?.projects || [];

    const showMessage = (text, type = 'info') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Möchten Sie dieses Projekt wirklich löschen?')) {
            const updatedProjects = projectsList.filter(p => p.id !== id);
            updateContent('baris_content_projects', {
                ...projects,
                projects: updatedProjects
            });
            showMessage('Projekt gelöscht', 'success');
        }
    };

    const handleSave = (projectData) => {
        let updatedProjects;
        if (editingProject) {
            updatedProjects = projectsList.map(p =>
                p.id === projectData.id ? projectData : p
            );
        } else {
            updatedProjects = [...projectsList, projectData];
        }

        updateContent('baris_content_projects', {
            ...projects,
            projects: updatedProjects
        });

        showMessage(
            editingProject ? 'Projekt aktualisiert' : 'Projekt erstellt',
            'success'
        );
        setIsModalOpen(false);
        setEditingProject(null);
    };

    const handleAddNew = () => {
        setEditingProject(null);
        setIsModalOpen(true);
    };

    const handleView = (project) => {
        window.open(`/referenzen/${project.id}`, '_blank');
    };

    // Filter projects
    const filteredProjects = projectsList.filter(project => {
        const matchesFilter = filter === 'all' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.location?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-heading">Projekte</h1>
                    <p className="text-gray-500">Verwalten Sie Ihre Referenzprojekte</p>
                </div>
                <Button onClick={handleAddNew} className="bg-[#1a3a52] hover:bg-[#152d40] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Neues Projekt
                </Button>
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

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Gesamt</p>
                    <p className="text-2xl font-bold text-gray-900">{projectsList.length}</p>
                </div>
                {CATEGORIES.map(cat => (
                    <div key={cat.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">{cat.name}</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {projectsList.filter(p => p.category === cat.id).length}
                        </p>
                    </div>
                ))}
            </div>

            {/* Filter & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Projekte durchsuchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${filter === 'all' ? 'bg-[#1a3a52] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Alle
                        </button>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${filter === cat.id ? 'bg-[#1a3a52] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                    <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Keine Projekte gefunden</p>
                    <Button onClick={handleAddNew} variant="outline" className="mt-4">
                        <Plus className="w-4 h-4 mr-2" />
                        Erstes Projekt erstellen
                    </Button>
                </div>
            )}

            {/* Modal */}
            <ProjectModal
                project={editingProject}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingProject(null);
                }}
                onSave={handleSave}
            />
        </div>
    );
};

export default ProjectManager;
