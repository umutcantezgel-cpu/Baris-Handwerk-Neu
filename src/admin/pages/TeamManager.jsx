import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import {
    Users,
    Plus,
    Edit3,
    Trash2,
    Mail,
    Phone,
    Award,
    Star,
    MoreVertical,
    Upload,
    X,
    Save,
    User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamMemberCard = ({ member, onEdit, onDelete }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
            <div className="h-32 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b]" />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-10 h-10 text-gray-400" />
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="pt-14 pb-6 px-6 text-center">
            <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
            <p className="text-sm text-[#00b050] font-medium mt-1">{member.role}</p>

            {member.specializations && member.specializations.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {member.specializations.slice(0, 3).map((spec, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                        >
                            {spec}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                {member.email && (
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#1a3a52]">
                        <Mail className="w-5 h-5" />
                    </a>
                )}
                {member.phone && (
                    <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-[#1a3a52]">
                        <Phone className="w-5 h-5" />
                    </a>
                )}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(member)}
                    className="text-gray-600"
                >
                    <Edit3 className="w-4 h-4 mr-1" />
                    Bearbeiten
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(member.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    </div>
);

const TeamMemberModal = ({ member, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState(member || {
        name: '',
        role: '',
        email: '',
        phone: '',
        image: '',
        specializations: [],
        bio: ''
    });
    const [newSpec, setNewSpec] = useState('');

    if (!isOpen) return null;

    const handleAddSpecialization = () => {
        if (newSpec.trim()) {
            setFormData(prev => ({
                ...prev,
                specializations: [...(prev.specializations || []), newSpec.trim()]
            }));
            setNewSpec('');
        }
    };

    const handleRemoveSpecialization = (index) => {
        setFormData(prev => ({
            ...prev,
            specializations: prev.specializations.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">
                        {member ? 'Teammitglied bearbeiten' : 'Neues Teammitglied'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Photo Upload */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                {formData.image ? (
                                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-10 h-10 text-gray-400" />
                                )}
                            </div>
                            <button
                                type="button"
                                className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#1a3a52] rounded-full flex items-center justify-center text-white hover:bg-[#152d40]"
                            >
                                <Upload className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Position *</label>
                            <input
                                type="text"
                                value={formData.role}
                                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">E-Mail</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Telefon</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Kurzbiografie</label>
                        <textarea
                            value={formData.bio}
                            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Spezialisierungen</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newSpec}
                                onChange={(e) => setNewSpec(e.target.value)}
                                placeholder="z.B. Sanitärtechnik"
                                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSpecialization())}
                            />
                            <Button
                                type="button"
                                onClick={handleAddSpecialization}
                                className="bg-[#1a3a52] hover:bg-[#152d40] text-white"
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                        {formData.specializations && formData.specializations.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {formData.specializations.map((spec, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm"
                                    >
                                        {spec}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSpecialization(i)}
                                            className="text-blue-400 hover:text-blue-700"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                        >
                            Abbrechen
                        </Button>
                        <Button
                            type="submit"
                            className="bg-[#00b050] hover:bg-[#009040] text-white"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            Speichern
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const TeamManager = () => {
    const { team, updateContent } = useContent();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState(null);

    // Use team data from context, fallback to empty array if undefined
    const teamMembers = team || [];

    const handleEdit = (member) => {
        setEditingMember(member);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Möchten Sie dieses Teammitglied wirklich löschen?')) {
            const updatedTeam = teamMembers.filter(m => m.id !== id);
            updateContent('baris_content_team', updatedTeam);
        }
    };

    const handleSave = (memberData) => {
        let updatedTeam;
        if (memberData.id) {
            // Update existing member
            updatedTeam = teamMembers.map(m => m.id === memberData.id ? memberData : m);
        } else {
            // Add new member
            updatedTeam = [...teamMembers, { ...memberData, id: Date.now() }];
        }
        updateContent('baris_content_team', updatedTeam);
    };

    const handleAddNew = () => {
        setEditingMember(null);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-heading">Team verwalten</h1>
                    <p className="text-gray-500">Verwalten Sie Ihre Teammitglieder und deren Profile</p>
                </div>
                <Button
                    onClick={handleAddNew}
                    className="bg-[#1a3a52] hover:bg-[#152d40] text-white"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Neues Teammitglied
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Gesamtes Team</p>
                            <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Meister</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {teamMembers.filter(m => m.role.toLowerCase().includes('meister')).length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Star className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Spezialisierungen</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {new Set(teamMembers.flatMap(m => m.specializations || [])).size}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map(member => (
                    <TeamMemberCard
                        key={member.id}
                        member={member}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {/* Modal */}
            <TeamMemberModal
                member={editingMember}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingMember(null);
                }}
                onSave={handleSave}
            />
        </div>
    );
};

export default TeamManager;
