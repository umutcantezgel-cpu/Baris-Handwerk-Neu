"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, Lock, ShieldCheck } from 'lucide-react';
import { InstagramLogo as Instagram } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { COMPANY_DATA } from '@/config/company';
import { useContent } from '@/contexts/ContentContext';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { z } from 'zod';
import { hasStoredConsent } from '@/components/common/ConsentManager';
import PremiumMap from '@/components/common/PremiumMap';

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
      action: '/instagram'
    }
  ];

  return (
    <PageWrapper className="relative min-h-screen py-[var(--spacing-20)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] bg-[var(--color-background-surface-secondary)]">
      <SEO
        title="Kontakt"
        description="Kontaktieren Sie uns für ein kostenloses Angebot. Wir sind für Sie da. Schnelle Reaktionszeit garantiert."
        keywords="Kontakt, Terminbuchung, Angebot, Wetzlar"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[var(--spacing-16)]">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] tracking-tight">
            Kontakt aufnehmen
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto font-light">
            Wir sind für Sie da – persönlich, telefonisch oder per E-Mail
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-[var(--spacing-12)] mb-[var(--spacing-20)]">
          {/* Contact Info Cards */}
          <div className="space-y-[var(--spacing-6)]">
            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">
              Wie können wir Ihnen helfen?
            </h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group">
                  <div className="p-[var(--spacing-6)] flex items-start gap-[var(--spacing-4)]">
                    <div className="w-12 h-12 rounded-[var(--radius-base)] bg-[var(--color-brand-secondary)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--color-brand-secondary)]/20">
                      <Icon className="w-6 h-6 text-[var(--color-brand-secondary)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-[var(--color-text-secondary)]">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-2 text-[var(--color-interactive-primary)] font-medium hover:underline min-h-[44px] flex items-center"
                        >
                          {info.icon === Phone ? 'Jetzt anrufen' :
                            info.icon === Mail ? 'E-Mail senden' :
                              info.icon === Instagram ? 'Profil besuchen' :
                                'Route planen'} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-neutral-0)] rounded-[var(--radius-xl)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)]">
            <div className="p-[var(--spacing-8)]">
              <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">
                Anfrage senden
              </h2>

              {isSuccess ? (
                <div className="text-center py-[var(--spacing-12)] animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-[var(--color-brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--color-brand-secondary)]/20">
                    <Send className="w-8 h-8 text-[var(--color-brand-secondary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Vielen Dank!</h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="border-[var(--color-brand-secondary)] text-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-secondary)] hover:text-white"
                  >
                    Neue Anfrage senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-[var(--spacing-6)]">
                  {/* Honeypot Field - Hidden for humans */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website || ''}
                    onChange={(e) => handleChange('website', e.target.value)}
                    style={{ position: 'absolute', opacity: 0, zIndex: -1, height: 0, width: 0 }}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Ihr vollständiger Name"
                      className={`h-12 border-[var(--color-border-default)] focus:border-[var(--color-interactive-focus)] focus:ring-[var(--color-interactive-focus)] ${errors.name ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="ihre.email@beispiel.de"
                      className={`h-12 border-[var(--color-border-default)] focus:border-[var(--color-interactive-focus)] focus:ring-[var(--color-interactive-focus)] ${errors.email ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+49 170 12345678"
                      className="h-12 border-[var(--color-border-default)] focus:border-[var(--color-interactive-focus)] focus:ring-[var(--color-interactive-focus)]"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                      Interessiert an *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      disabled={isSubmitting}
                      className={`w-full h-12 px-3 rounded-md border bg-white text-[var(--color-text-primary)] border-[var(--color-border-default)] focus:border-[var(--color-interactive-focus)] focus:ring-1 focus:ring-[var(--color-interactive-focus)] focus:outline-none ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option value="">Bitte wählen...</option>
                      {COMPANY_DATA.business.primaryServices.map((svc, idx) => (
                        <option key={idx} value={svc.toLowerCase()}>{svc}</option>
                      ))}
                      <option value="beratung">Allgemeine Beratung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                      Ihre Nachricht *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      disabled={isSubmitting}
                      className={`border-[var(--color-border-default)] focus:border-[var(--color-interactive-focus)] focus:ring-[var(--color-interactive-focus)] ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>}
                  </div>

                  {/* Security Notice */}
                  <div className="bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] rounded-lg p-4 flex gap-3 text-sm text-[var(--color-blue-900)]">
                    <Lock className="w-5 h-5 text-[var(--color-blue-700)] flex-shrink-0" />
                    <p>
                      Ihre Daten werden sicher via SSL-Verschlüsselung übertragen.
                      Wir nutzen Ihre Angaben ausschließlich zur Beantwortung Ihrer Anfrage.
                      Eine Weitergabe an Dritte findet nicht statt.
                    </p>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-[var(--spacing-3)]">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={(e) => handleChange('privacyAccepted', e.target.checked)}
                      disabled={isSubmitting}
                      className="mt-1 w-4 h-4 rounded border-[var(--color-border-default)] text-[var(--color-interactive-primary)] focus:ring-[var(--color-interactive-focus)]"
                    />
                    <label htmlFor="privacyAccepted" className="text-sm text-[var(--color-text-secondary)]">
                      Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                      Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht.
                      Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an {COMPANY_DATA.contact.email} widerrufen.
                      Detaillierte Informationen finden Sie in der{' '}
                      <a href="/datenschutz" target="_blank" rel="noreferrer" className="text-[var(--color-interactive-primary)] underline hover:no-underline">
                        Datenschutzerklärung
                      </a>. *
                    </label>
                  </div>
                  {errors.privacyAccepted && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.privacyAccepted}</p>}

                  {/* Error Message Display */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3 text-sm text-red-800">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] min-h-[48px] shadow-[var(--shadow-sm)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Wird gesendet...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Anfrage absenden
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-[var(--color-text-tertiary)] text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map with Consent Gate */}
        <div className="h-[400px] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--color-border-default)] bg-[var(--color-neutral-100)] relative">
          {mapsConsent ? (
            <PremiumMap />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[var(--color-neutral-0)]">
              <MapPin className="w-12 h-12 text-[var(--color-neutral-400)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">
                Karte deaktiviert
              </h3>
              <p className="text-[var(--color-text-secondary)] max-w-md mb-6">
                Um die Google Maps Karte anzuzeigen, benötigen wir Ihre Einwilligung.
                Dabei werden Daten an Google übertragen.
              </p>
              <Button
                onClick={() => window.dispatchEvent(new CustomEvent('showConsentBanner'))}
                variant="outline"
                className="border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white"
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                Karte aktivieren (Cookie-Einstellungen)
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
