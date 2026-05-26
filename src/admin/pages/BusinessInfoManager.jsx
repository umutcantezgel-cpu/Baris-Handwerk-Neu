import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Save, Building2, Phone, Mail, MapPin, Clock, Globe, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessInfoManager = () => {
    const { siteConfig, updateContent } = useContent();
    const [formData, setFormData] = useState(siteConfig);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e, section, field) => {
        if (section) {
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [field]: e.target.value
                }
            });
        } else {
            setFormData({
                ...formData,
                [field]: e.target.value
            });
        }
    };

    const handleAddressChange = (e, field) => {
        setFormData({
            ...formData,
            contact: {
                ...formData.contact,
                address: {
                    ...formData.contact.address,
                    [field]: e.target.value
                }
            }
        });
    };

    const handleHoursChange = (e, field) => {
        setFormData({
            ...formData,
            contact: {
                ...formData.contact,
                hours: {
                    ...formData.contact.hours,
                    [field]: e.target.value
                }
            }
        });
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage(null);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const success = updateContent('baris_content_site', formData);

        if (success) {
            setMessage({ type: 'success', text: 'Änderungen erfolgreich gespeichert!' });
        } else {
            setMessage({ type: 'error', text: 'Fehler beim Speichern.' });
        }

        setIsSaving(false);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-heading">Unternehmensdaten</h1>
                    <p className="text-gray-500">Verwalten Sie hier Ihre grundlegenden Firmeninformationen.</p>
                </div>
                <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#00b050] hover:bg-[#009040] text-white"
                >
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? 'Speichert...' : 'Speichern'}
                </Button>
            </div>

            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                    {message.text}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* General Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 border-b pb-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        Allgemein
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Firmenname</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange(e, null, 'name')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Slogan</label>
                        <input
                            type="text"
                            value={formData.slogan}
                            onChange={(e) => handleChange(e, null, 'slogan')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Beschreibung</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange(e, null, 'description')}
                            rows={4}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 border-b pb-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        Kontakt
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Telefon (Anzeige)</label>
                            <input
                                type="text"
                                value={formData.contact.phone}
                                onChange={(e) => handleChange(e, 'contact', 'phone')}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Telefon (Link)</label>
                            <input
                                type="text"
                                value={formData.contact.phoneLink}
                                onChange={(e) => handleChange(e, 'contact', 'phoneLink')}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="+49..."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                value={formData.contact.email}
                                onChange={(e) => handleChange(e, 'contact', 'email')}
                                className="w-full pl-9 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 border-b pb-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Adresse
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Straße & Hausnummer</label>
                        <input
                            type="text"
                            value={formData.contact.address.street}
                            onChange={(e) => handleAddressChange(e, 'street')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">PLZ & Stadt</label>
                        <input
                            type="text"
                            value={formData.contact.address.zipCity}
                            onChange={(e) => handleAddressChange(e, 'zipCity')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>

                {/* Hours */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 border-b pb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Öffnungszeiten
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Mo - Fr</label>
                        <input
                            type="text"
                            value={formData.contact.hours.weekdays}
                            onChange={(e) => handleHoursChange(e, 'weekdays')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Samstag</label>
                        <input
                            type="text"
                            value={formData.contact.hours.saturday}
                            onChange={(e) => handleHoursChange(e, 'saturday')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 border-b pb-2">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        Social Media
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Instagram URL</label>
                        <div className="relative">
                            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="url"
                                value={formData.social?.instagram || ''}
                                onChange={(e) => handleChange(e, 'social', 'instagram')}
                                className="w-full pl-9 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="https://www.instagram.com/..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoManager;
