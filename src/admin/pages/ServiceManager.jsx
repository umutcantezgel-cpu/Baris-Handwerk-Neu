import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Save, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceManager = () => {
    const { services, updateContent } = useContent();
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState(null);

    const handleEdit = (service) => {
        setEditingId(service.id);
        setEditForm({ ...service });
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditForm(null);
    };

    const handleChange = (field, value) => {
        setEditForm({ ...editForm, [field]: value });
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...editForm.features];
        newFeatures[index] = value;
        setEditForm({ ...editForm, features: newFeatures });
    };

    const addFeature = () => {
        setEditForm({ ...editForm, features: [...editForm.features, ''] });
    };

    const removeFeature = (index) => {
        const newFeatures = editForm.features.filter((_, i) => i !== index);
        setEditForm({ ...editForm, features: newFeatures });
    };

    const handleSave = async () => {
        setIsSaving(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const updatedServices = services.map(s =>
            s.id === editingId ? editForm : s
        );

        const success = updateContent('baris_content_services', updatedServices);

        if (success) {
            setMessage({ type: 'success', text: 'Dienstleistung aktualisiert!' });
            setEditingId(null);
            setEditForm(null);
        } else {
            setMessage({ type: 'error', text: 'Fehler beim Speichern.' });
        }

        setIsSaving(false);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 font-heading">Dienstleistungen verwalten</h1>
                <p className="text-gray-500">Bearbeiten Sie hier Ihre angebotenen Leistungen.</p>
            </div>

            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                    {message.text}
                </div>
            )}

            <div className="grid gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {editingId === service.id ? (
                            // Edit Mode
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-blue-900">Leistung bearbeiten</h3>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" onClick={handleCancel} size="sm">
                                            <X className="w-4 h-4 mr-1" /> Abbrechen
                                        </Button>
                                        <Button onClick={handleSave} disabled={isSaving} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                            <Save className="w-4 h-4 mr-1" /> Speichern
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
                                        <input
                                            type="text"
                                            value={editForm.title}
                                            onChange={(e) => handleChange('title', e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Untertitel</label>
                                        <input
                                            type="text"
                                            value={editForm.subtitle}
                                            onChange={(e) => handleChange('subtitle', e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
                                        <textarea
                                            value={editForm.description}
                                            onChange={(e) => handleChange('description', e.target.value)}
                                            rows={3}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                                        <div className="space-y-2">
                                            {editForm.features.map((feature, idx) => (
                                                <div key={idx} className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={feature}
                                                        onChange={(e) => handleFeatureChange(idx, e.target.value)}
                                                        className="flex-1 p-2 border rounded-lg"
                                                    />
                                                    <Button variant="ghost" size="icon" onClick={() => removeFeature(idx)} className="text-red-500 hover:text-red-700">
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button variant="outline" size="sm" onClick={addFeature} className="mt-2">
                                                <Plus className="w-4 h-4 mr-1" /> Feature hinzufügen
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // View Mode
                            <div className="p-6 flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.bgGradient} flex items-center justify-center text-blue-900`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                                        <p className="text-sm text-green-600 font-medium">{service.subtitle}</p>
                                        <p className="text-gray-500 mt-1 text-sm line-clamp-2">{service.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {service.features.slice(0, 3).map((f, i) => (
                                                <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                                                    {f}
                                                </span>
                                            ))}
                                            {service.features.length > 3 && (
                                                <span className="text-xs text-gray-400 flex items-center">+{service.features.length - 3} weitere</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" onClick={() => handleEdit(service)} className="text-gray-400 hover:text-blue-600">
                                    <Edit2 className="w-5 h-5" />
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceManager;
