"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InstagramLogo as Instagram } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { COMPANY_DATA } from '@/config/company';
import { useContent } from '@/contexts/ContentContext';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { hasStoredConsent } from '@/components/common/ConsentManager';

const PremiumMap = dynamic(() => import('@/components/common/PremiumMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white/40">
      <MapPin className="w-8 h-8 animate-pulse" />
    </div>
  ),
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Bitte wählen Sie einen Bereich'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacyAccepted: z.boolean().refine(val => val === true, 'Sie müssen die Datenschutzerklärung akzeptieren')
});

export default function Contact() {
  const { siteConfig } = useContent();
  const [mapsConsent, setMapsConsent] = useState(hasStoredConsent('maps'));

  useEffect(() => {
    const handleConsentUpdate = (e) => {
      if (e.detail && e.detail.maps !== undefined) {
        setMapsConsent(e.detail.maps);
      }
    };
    window.addEventListener('consentUpdated', handleConsentUpdate);
    return () => window.removeEventListener('consentUpdated', handleConsentUpdate);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacyAccepted: false,
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateField = (name, value) => {
    // Define individual field schemas for v4 compatibility
    const fieldSchemas = {
      name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
      email: z.string().email('Ungültige E-Mail-Adresse'),
      phone: z.string().optional(),
      service: z.string().min(1, 'Bitte wählen Sie einen Bereich'),
      message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
      privacyAccepted: z.boolean().refine(val => val === true, 'Sie müssen die Datenschutzerklärung akzeptieren')
    };
    try {
      fieldSchemas[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: null }));
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: err.errors[0].message }));
      }
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) {
      // Silently fail for bots
      setIsSubmitting(false);
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitError(null);

    try {
      contactSchema.parse(formData);

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mojjaoar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Neue Kontaktanfrage von ${formData.name}`,
        })
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      // Track Form Submission
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          'event_category': 'contact',
          'event_label': formData.service
        });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: formData.service,
          currency: 'EUR',
          value: 0
        });
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacyAccepted: false
      });
    } catch (err) {
      setIsSubmitting(false);
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach(error => {
          if (error.path[0]) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Network or other error
        setSubmitError('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.');
        console.error('Form submission error:', err);
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [siteConfig.contact.phone],
      action: `tel:${siteConfig.contact.phoneLink}`
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: [siteConfig.contact.email],
      action: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: [siteConfig.contact.address.street, siteConfig.contact.address.zipCity],
      action: 'https://maps.google.com/?q=Linsenbergstrasse+9+35586+Wetzlar'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: [`Mo-Fr: ${siteConfig.contact.hours.weekdays.split(': ')[1]}`, `Sa: ${siteConfig.contact.hours.saturday.split(': ')[1]}`],
      action: null
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: ['@batherm_haustechnik'],
      action: 'https://www.instagram.com/bathermhaustechnik'
    }
  ];

  return (
    <PageWrapper className="relative min-h-screen pt-[var(--spacing-32)] pb-[var(--spacing-20)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] bg-[var(--color-background-surface-secondary)]">
      <SEO title="Kontakt" description="Kontaktieren Sie uns für ein kostenloses Angebot. Wir sind für Sie da." keywords="Kontakt, Terminbuchung, Angebot, Wetzlar" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[var(--spacing-16)]">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] tracking-tight">
            Kontakt aufnehmen zu Batherm Haustechnik in Wetzlar
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto font-light">
            Sie möchten Kontakt aufnehmen für eine persönliche Fachberatung, ein transparentes Angebot oder einen schnellen Vor-Ort-Termin? Unser Meisterbetrieb für Sanitär, Heizung und Klimatechnik in Wetzlar steht Ihnen persönlich, telefonisch und digital zur Seite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-[var(--spacing-12)] mb-[var(--spacing-20)]">
          <div className="space-y-[var(--spacing-6)]">
            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">Wie können wir Ihnen helfen?</h2>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
                  <div className="p-[var(--spacing-6)] flex items-start gap-[var(--spacing-4)]">
                    <div className="w-12 h-12 rounded-[var(--radius-base)] bg-[var(--color-brand-secondary)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--color-brand-secondary)]/20">
                      <Icon className="w-6 h-6 text-[var(--color-brand-secondary)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => <p key={idx} className="text-[var(--color-text-secondary)]">{detail}</p>)}
                      {info.action && (
                        <a href={info.action} target="_blank" rel="noreferrer" className="inline-block mt-2 text-[var(--color-interactive-primary)] font-medium hover:underline min-h-[44px] flex items-center">
                          {info.icon === Phone ? 'Jetzt anrufen' : info.icon === Mail ? 'E-Mail senden' : info.icon === MapPin ? 'Route planen' : 'Instagram Profil öffnen'} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-[var(--radius-lg)] p-[var(--spacing-6)]">
              <div className="flex items-start gap-[var(--spacing-4)]">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Dringender Notfall?</h4>
                  <p className="text-amber-800 text-sm mb-3">Bei Rohrbruch, totalem Heizungsausfall im Winter oder Gasgeruch erreichen Sie unseren 24h-Notdienst rund um die Uhr.</p>
                  <a href={`tel:${siteConfig.contact.phoneLink}`} className="inline-flex items-center text-amber-900 font-bold hover:underline min-h-[44px]">
                    <Phone className="w-4 h-4 mr-2" />Notruf: {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-neutral-0)] rounded-[var(--radius-xl)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-lg)] p-[var(--spacing-8)]">
            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-2)]">Nachricht senden</h2>
            <p className="text-[var(--color-text-secondary)] mb-[var(--spacing-6)]">Füllen Sie das Formular aus – wir melden uns schnellstmöglich bei Ihnen.</p>
            {isSuccess ? (
              <div className="bg-green-500/10 border-2 border-green-500/30 rounded-[var(--radius-lg)] p-[var(--spacing-8)] text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-[var(--spacing-4)]" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Vielen Dank für Ihre Nachricht!</h3>
                <p className="text-green-800 mb-[var(--spacing-6)]">Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 min-h-[44px]">Weitere Nachricht senden</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[var(--spacing-6)]">
                <input type="text" name="website" value={formData.website || ''} onChange={(e) => handleChange('website', e.target.value)} style={{ position: 'absolute', opacity: 0, zIndex: -1, height: 0, width: 0 }} tabIndex="-1" aria-hidden="true" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">Name *</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} disabled={isSubmitting} className={`w-full px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] border ${errors.name ? 'border-red-500' : 'border-[var(--color-neutral-300)]'} focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive-focus)] bg-white text-[var(--color-neutral-900)] min-h-[48px]`} placeholder="Ihr vollständiger Name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-[var(--spacing-4)]">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">E-Mail *</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} disabled={isSubmitting} className={`w-full px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] border ${errors.email ? 'border-red-500' : 'border-[var(--color-neutral-300)]'} focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive-focus)] bg-white text-[var(--color-neutral-900)] min-h-[48px]`} placeholder="ihre.email@beispiel.de" />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">Telefon</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} disabled={isSubmitting} className="w-full px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] border border-[var(--color-neutral-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive-focus)] bg-white text-[var(--color-neutral-900)] min-h-[48px]" placeholder="06441 123456" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">Gewünschte Leistung</label>
                  <select id="service" value={formData.service} onChange={(e) => handleChange('service', e.target.value)} disabled={isSubmitting} className="w-full px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] border border-[var(--color-neutral-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive-focus)] bg-white text-[var(--color-neutral-900)] min-h-[48px]">
                    <option value="">Bitte wählen...</option>
                    <option value="sanitaer">Sanitärtechnik & Badrenovierung</option>
                    <option value="heizung">Heizungstechnik & Wärmepumpen</option>
                    <option value="klima">Klimatechnik & Lüftung</option>
                    <option value="wartung">Wartung & Inspektion</option>
                    <option value="beratung">Kostenlose Energieberatung</option>
                    <option value="notdienst">Dringender Notdienst</option>
                    <option value="sonstiges">Sonstiges Anliegen</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">Ihre Nachricht *</label>
                  <textarea id="message" rows="4" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} disabled={isSubmitting} className={`w-full px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] border ${errors.message ? 'border-red-500' : 'border-[var(--color-neutral-300)]'} focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive-focus)] bg-white text-[var(--color-neutral-900)] resize-none`} placeholder="Beschreiben Sie kurz Ihr Vorhaben..." />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>}
                </div>
                <div className="bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] rounded-lg p-4 flex gap-3 text-sm text-[var(--color-blue-900)]">
                  <Lock className="w-5 h-5 text-[var(--color-blue-700)] flex-shrink-0" />
                  <p>Ihre Daten werden sicher via SSL-Verschlüsselung übertragen. Wir nutzen Ihre Angaben ausschließlich zur Beantwortung Ihrer Anfrage.</p>
                </div>
                <div className="flex items-start gap-[var(--spacing-3)]">
                  <input type="checkbox" id="privacyAccepted" checked={formData.privacyAccepted} onChange={(e) => handleChange('privacyAccepted', e.target.checked)} disabled={isSubmitting} className="mt-1 w-4 h-4 rounded border-[var(--color-border-default)] text-[var(--color-interactive-primary)]" />
                  <label htmlFor="privacyAccepted" className="text-sm text-[var(--color-text-secondary)]">Ich stimme der <a href="/datenschutz" target="_blank" rel="noreferrer" className="text-[var(--color-interactive-primary)] underline">Datenschutzerklärung</a> zu. *</label>
                </div>
                {errors.privacyAccepted && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.privacyAccepted}</p>}
                {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
                <Button type="submit" size="lg" className="w-full bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] min-h-[48px]" disabled={isSubmitting}>
                  {isSubmitting ? 'Wird gesendet...' : <><Send className="w-5 h-5 mr-2" />Anfrage absenden</>}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="h-[400px] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--color-border-default)] bg-[var(--color-neutral-100)] relative mb-16">
          {mapsConsent ? <PremiumMap /> : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[var(--color-neutral-0)]">
              <MapPin className="w-12 h-12 text-[var(--color-neutral-400)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Karte deaktiviert</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">Bitte bestätigen Sie die Cookie-Einstellungen, um die Karte zu sehen.</p>
              <Button onClick={() => window.dispatchEvent(new CustomEvent('showConsentBanner'))} variant="outline"><ShieldCheck className="w-4 h-4 mr-2" />Karte aktivieren</Button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihr Weg zum Festpreis-Angebot</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">{step}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step === 1 ? 'Unverbindliche Erstberatung' : step === 2 ? 'Präziser Vor-Ort-Termin' : 'Detailliertes Festpreisangebot'}</h4>
                    <p className="text-sm text-gray-600">{step === 1 ? 'Sie schildern Ihr Anliegen.' : step === 2 ? 'Meister prüft die Gegebenheiten.' : 'Transparente Kostenaufstellung.'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Einsatzgebiet</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {['Wetzlar', 'Gießen', 'Marburg', 'Limburg', 'Dillenburg', 'Friedberg'].map(city => (
                <span key={city} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> {city}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
