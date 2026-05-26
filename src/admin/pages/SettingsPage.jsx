import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { useAuth } from '@/contexts/AuthContext';
import { authService } from '@/services/authService';
import {
    Settings,
    User,
    Bell,
    Palette,
    Globe,
    Database,
    Shield,
    Save,
    Check,
    AlertCircle,
    Moon,
    Sun,
    Monitor,
    Trash2,
    ShieldCheck,
    Download,
    Upload,
    FileJson
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SettingSection = ({ title, description, icon: Icon, children, variant = 'default' }) => (
    <div className={`bg-white rounded-xl shadow-sm border overflow-hidden ${variant === 'danger' ? 'border-red-100' : 'border-gray-100'
        }`}>
        <div className={`p-6 border-b ${variant === 'danger' ? 'border-red-100 bg-red-50/50' : 'border-gray-100'
            }`}>
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${variant === 'danger' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                    <Icon className={`w-5 h-5 ${variant === 'danger' ? 'text-red-600' : 'text-blue-600'}`} />
                </div>
                <div>
                    <h3 className={`font-bold ${variant === 'danger' ? 'text-red-900' : 'text-gray-900'}`}>{title}</h3>
                    <p className={`text-sm ${variant === 'danger' ? 'text-red-700' : 'text-gray-500'}`}>{description}</p>
                </div>
            </div>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const ToggleSwitch = ({ enabled, onChange, label, description }) => (
    <div className="flex items-center justify-between py-3">
        <div>
            <p className="font-medium text-gray-900">{label}</p>
            {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
        <button
            onClick={() => onChange(!enabled)}
            className={`relative w-12 h-6 rounded-full transition-colors ${enabled ? 'bg-[#00b050]' : 'bg-gray-300'
                }`}
        >
            <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
            />
        </button>
    </div>
);

const SettingsPage = () => {
    const { user } = useAuth();
    const { siteConfig, settings, updateContent, clearAllContent } = useContent();

    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState(null);

    // Profile Settings
    const [profile, setProfile] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || ''
    });

    // Settings from Context
    const [notifications, setNotifications] = useState(settings?.notifications || {
        emailNotifications: true,
        contactFormAlerts: true,
        weeklyReports: false,
        securityAlerts: true
    });

    const [appearance, setAppearance] = useState(settings?.appearance || {
        theme: 'light',
        compactMode: false
    });

    // Site Settings
    const [siteSettings, setSiteSettings] = useState({
        siteName: siteConfig?.name || 'Batherm Haustechnik',
        language: 'de',
        timezone: 'Europe/Berlin',
        maintenanceMode: false // Not implemented in siteConfig yet, purely client side for now
    });

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleSaveProfile = async () => {
        setIsSaving(true);
        const result = await authService.updateProfile(profile);
        setIsSaving(false);
        if (result.success) {
            showMessage('success', 'Profil erfolgreich aktualisiert!');
            // Refresh logic if needed, but Context updates should handle it
        } else {
            showMessage('error', 'Fehler beim Speichern.');
        }
    };

    // Password changes are disabled for security - credentials are system-protected

    const handleSaveSettings = (section, data) => {
        setIsSaving(true);
        // We merge into the existing settings object structure
        const newSettings = {
            notifications: section === 'notifications' ? data : notifications,
            appearance: section === 'appearance' ? data : appearance
        };

        const success = updateContent('baris_content_settings', newSettings);
        setIsSaving(false);

        if (success) {
            showMessage('success', 'Einstellungen gespeichert!');
        } else {
            showMessage('error', 'Fehler beim Speichern.');
        }
    };

    const handleSaveSite = () => {
        setIsSaving(true);
        // Update siteConfig partially
        const newSiteConfig = {
            ...siteConfig,
            name: siteSettings.siteName
            // Add other fields if supported in siteConfig structure
        };
        const success = updateContent('baris_content_site', newSiteConfig);
        setIsSaving(false);
        if (success) {
            showMessage('success', 'Website-Einstellungen gespeichert!');
        } else {
            showMessage('error', 'Fehler beim Speichern.');
        }
    };

    const handleFactoryReset = () => {
        if (window.confirm('WARNUNG: Dies wird ALLE Ihre Änderungen löschen und die Website auf den Auslieferungszustand zurücksetzen. Dies kann nicht rückgängig gemacht werden. Fortfahren?')) {
            clearAllContent();
            localStorage.clear(); // Nuclear option to be safe
            window.location.reload();
        }
    };

    // Export all content as JSON
    const handleExport = () => {
        try {
            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                data: {}
            };

            // Collect all localStorage keys starting with 'baris_'
            const keys = Object.keys(localStorage).filter(k => k.startsWith('baris_'));
            keys.forEach(key => {
                try {
                    exportData.data[key] = JSON.parse(localStorage.getItem(key));
                } catch {
                    exportData.data[key] = localStorage.getItem(key);
                }
            });

            // Create downloadable file
            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `batherm-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showMessage('success', 'Backup erfolgreich heruntergeladen!');
        } catch (error) {
            showMessage('error', 'Fehler beim Export: ' + error.message);
        }
    };

    // Import content from JSON file
    const handleImport = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);

                if (!importData.data || typeof importData.data !== 'object') {
                    throw new Error('Ungültiges Backup-Format');
                }

                if (window.confirm(`Backup vom ${new Date(importData.exportDate).toLocaleDateString('de-DE')} importieren? Dies überschreibt alle aktuellen Daten.`)) {
                    Object.entries(importData.data).forEach(([key, value]) => {
                        localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
                    });

                    showMessage('success', 'Backup erfolgreich importiert! Seite wird neu geladen...');
                    setTimeout(() => window.location.reload(), 1500);
                }
            } catch (error) {
                showMessage('error', 'Fehler beim Import: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset input
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 font-heading">Einstellungen</h1>
                <p className="text-gray-500">Verwalten Sie Ihre Kontoeinstellungen und Präferenzen</p>
            </div>

            {/* Message Toast */}
            {message && (
                <div className={`flex items-center gap-3 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {message.type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="font-medium">{message.text}</span>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <SettingSection
                    title="Profil"
                    description="Ihre persönlichen Kontoinformationen"
                    icon={User}
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">E-Mail</label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Telefon</label>
                            <input
                                type="tel"
                                value={profile.phone}
                                onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                        <Button
                            onClick={handleSaveProfile}
                            disabled={isSaving}
                            className="w-full bg-[#1a3a52] hover:bg-[#152d40] text-white mt-4"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            Profil speichern
                        </Button>
                    </div>
                </SettingSection>

                {/* Security Settings - Read Only */}
                <SettingSection
                    title="Sicherheit"
                    description="System-geschützte Zugangssicherheit"
                    icon={Shield}
                >
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="w-6 h-6 text-green-600" />
                                <h4 className="font-bold text-green-900">Passwort ist geschützt</h4>
                            </div>
                            <p className="text-sm text-green-700">
                                Die Anmeldedaten sind systemseitig gesichert und können nicht über den Browser geändert werden.
                                Dies schützt vor unbefugten Manipulationen.
                            </p>
                        </div>
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Benutzername</span>
                                <span className="font-medium text-gray-900">Arslan</span>
                            </div>
                            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Passwort-Status</span>
                                <span className="font-medium text-green-600 flex items-center gap-1">
                                    <Check className="w-4 h-4" /> Sicher
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Schutz-Level</span>
                                <span className="font-medium text-blue-600">SHA-256 Hash</span>
                            </div>
                        </div>
                    </div>
                </SettingSection>

                {/* Notification Settings */}
                <SettingSection
                    title="Benachrichtigungen"
                    description="E-Mail und System-Benachrichtigungen"
                    icon={Bell}
                >
                    <div className="space-y-1 divide-y divide-gray-100">
                        <ToggleSwitch
                            enabled={notifications.emailNotifications}
                            onChange={(val) => setNotifications(prev => ({ ...prev, emailNotifications: val }))}
                            label="E-Mail-Benachrichtigungen"
                            description="Erhalten Sie wichtige Updates per E-Mail"
                        />
                        <ToggleSwitch
                            enabled={notifications.contactFormAlerts}
                            onChange={(val) => setNotifications(prev => ({ ...prev, contactFormAlerts: val }))}
                            label="Kontaktformular-Benachrichtigungen"
                            description="Sofortige Benachrichtigung bei neuen Anfragen"
                        />
                        <ToggleSwitch
                            enabled={notifications.weeklyReports}
                            onChange={(val) => setNotifications(prev => ({ ...prev, weeklyReports: val }))}
                            label="Wöchentliche Berichte"
                            description="Zusammenfassung der Website-Aktivitäten"
                        />
                        <ToggleSwitch
                            enabled={notifications.securityAlerts}
                            onChange={(val) => setNotifications(prev => ({ ...prev, securityAlerts: val }))}
                            label="Sicherheitswarnungen"
                            description="Warnungen bei verdächtigen Aktivitäten"
                        />
                    </div>
                    <Button
                        onClick={() => handleSaveSettings('notifications', notifications)}
                        disabled={isSaving}
                        className="w-full bg-[#1a3a52] hover:bg-[#152d40] text-white mt-4"
                    >
                        <Bell className="w-4 h-4 mr-2" />
                        Benachrichtigungen speichern
                    </Button>
                </SettingSection>

                {/* Appearance Settings */}
                <SettingSection
                    title="Darstellung"
                    description="Anpassen der Benutzeroberfläche"
                    icon={Palette}
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Farbschema</label>
                            <div className="flex gap-3">
                                {[
                                    { id: 'light', icon: Sun, label: 'Hell' },
                                    { id: 'dark', icon: Moon, label: 'Dunkel' },
                                    { id: 'system', icon: Monitor, label: 'System' },
                                ].map(theme => (
                                    <button
                                        key={theme.id}
                                        onClick={() => setAppearance(prev => ({ ...prev, theme: theme.id }))}
                                        className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${appearance.theme === theme.id
                                            ? 'border-[#1a3a52] bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <theme.icon className={`w-6 h-6 ${appearance.theme === theme.id ? 'text-[#1a3a52]' : 'text-gray-400'
                                            }`} />
                                        <span className={`text-sm font-medium ${appearance.theme === theme.id ? 'text-[#1a3a52]' : 'text-gray-600'
                                            }`}>{theme.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <ToggleSwitch
                                enabled={appearance.compactMode}
                                onChange={(val) => setAppearance(prev => ({ ...prev, compactMode: val }))}
                                label="Kompakter Modus"
                                description="Reduzierte Abstände für mehr Inhalt"
                            />
                        </div>

                        <Button
                            onClick={() => handleSaveSettings('appearance', appearance)}
                            disabled={isSaving}
                            className="w-full bg-[#1a3a52] hover:bg-[#152d40] text-white"
                        >
                            <Palette className="w-4 h-4 mr-2" />
                            Darstellung speichern
                        </Button>
                    </div>
                </SettingSection>

                {/* Site Settings */}
                <SettingSection
                    title="Website"
                    description="Allgemeine Website-Einstellungen"
                    icon={Globe}
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Website-Name</label>
                            <input
                                type="text"
                                value={siteSettings.siteName}
                                onChange={(e) => setSiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Sprache</label>
                            <select
                                value={siteSettings.language}
                                onChange={(e) => setSiteSettings(prev => ({ ...prev, language: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent outline-none"
                            >
                                <option value="de">Deutsch</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <ToggleSwitch
                                enabled={siteSettings.maintenanceMode}
                                onChange={(val) => setSiteSettings(prev => ({ ...prev, maintenanceMode: val }))}
                                label="Wartungsmodus"
                                description="Website für Besucher deaktivieren"
                            />
                        </div>

                        <Button
                            onClick={handleSaveSite}
                            disabled={isSaving}
                            className="w-full bg-[#1a3a52] hover:bg-[#152d40] text-white"
                        >
                            <Globe className="w-4 h-4 mr-2" />
                            Website-Einstellungen speichern
                        </Button>
                    </div>
                </SettingSection>

                {/* Data Management - Export/Import */}
                <SettingSection
                    title="Datensicherung"
                    description="Backup erstellen oder wiederherstellen"
                    icon={Database}
                >
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-center gap-3 mb-2">
                                <FileJson className="w-6 h-6 text-blue-600" />
                                <h4 className="font-bold text-blue-900">Backup & Wiederherstellung</h4>
                            </div>
                            <p className="text-sm text-blue-700 mb-4">
                                Exportieren Sie alle Inhalte als JSON-Datei oder stellen Sie ein früheres Backup wieder her.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Button
                                onClick={handleExport}
                                className="bg-[#00b050] hover:bg-[#009040] text-white"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Backup herunterladen
                            </Button>

                            <label className="cursor-pointer">
                                <Button
                                    as="span"
                                    variant="outline"
                                    className="w-full border-[#1a3a52] text-[#1a3a52] hover:bg-blue-50 pointer-events-none"
                                >
                                    <Upload className="w-4 h-4 mr-2" />
                                    Backup importieren
                                </Button>
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleImport}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            Backups enthalten: Dienstleistungen, Projekte, Team, Blog-Beiträge, Einstellungen
                        </p>
                    </div>
                </SettingSection>

                {/* Danger Zone - Factory Reset */}
                <SettingSection
                    title="Gefahrenzone"
                    description="Irreversible Aktionen durchführen"
                    icon={AlertCircle}
                    variant="danger"
                >
                    <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2">Werkseinstellungen zurücksetzen</h4>
                            <p className="text-sm text-red-700 mb-4">
                                Dies löscht alle von Ihnen vorgenommenen Änderungen (Texte, Einstellungen, Team, etc.) und setzt die Website auf den ursprünglichen Zustand zurück.
                            </p>
                            <Button
                                variant="destructive"
                                onClick={handleFactoryReset}
                                className="w-full bg-red-600 hover:bg-red-700 text-white"
                            >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Alles zurücksetzen
                            </Button>
                        </div>
                    </div>
                </SettingSection>

            </div>
        </div>
    );
};

export default SettingsPage;
