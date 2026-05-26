import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export default function CookieConsentComponent() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: /^_gid/,   // regex: match all cookies starting with '_gid'
                    }
                ]
            }
        },
        externalMedia: {
            autoClear: {
                cookies: [
                    {
                        name: /^NID/, // Google Maps
                    }
                ]
            }
        }
      },
      language: {
        default: 'de',
        autoDetect: 'browser',
        translations: {
          de: {
            consentModal: {
              title: 'Wir respektieren Ihre Privatsphäre',
              description: 'Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten. Externe Inhalte (z.B. Google Maps) werden nur mit Ihrer Zustimmung geladen.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              showPreferencesBtn: 'Einstellungen',
              footer: '<a href="/datenschutz">Datenschutzerklärung</a> | <a href="/impressum">Impressum</a>'
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              savePreferencesBtn: 'Einstellungen speichern',
              closeIconLabel: 'Schließen',
              serviceCounterLabel: 'Dienste',
              sections: [
                {
                  title: 'Technisch notwendige Cookies',
                  description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich.',
                  linkedCategory: 'necessary'
                },
                {
                    title: 'Externe Medien',
                    description: 'Ermöglicht das Laden von externen Inhalten wie Google Maps.',
                    linkedCategory: 'externalMedia'
                },
                {
                  title: 'Analyse & Statistik',
                  description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
                  linkedCategory: 'analytics'
                }
              ]
            }
          }
        }
      },
      onFirstConsent: ({ cookie }) => {
          // Notify app about consent update
          window.dispatchEvent(new CustomEvent('consentUpdated', { detail: { 
              maps: CookieConsent.acceptedCategory('externalMedia'),
              analytics: CookieConsent.acceptedCategory('analytics')
          }}));
      },
      onChange: ({ cookie, changedCategories, changedServices }) => {
          // Notify app about consent update
          window.dispatchEvent(new CustomEvent('consentUpdated', { detail: { 
              maps: CookieConsent.acceptedCategory('externalMedia'),
              analytics: CookieConsent.acceptedCategory('analytics')
          }}));
          
          if (changedCategories.includes('analytics') && !CookieConsent.acceptedCategory('analytics')) {
             // If analytics disabled, reload to clear specific non-cookie storages if needed
             // window.location.reload(); 
          }
      }
    });
    
    // Listen for custom event to open preferences
    const handleShowPreferences = () => {
        CookieConsent.showPreferences();
    };
    window.addEventListener('showConsentBanner', handleShowPreferences);
    
    return () => {
        window.removeEventListener('showConsentBanner', handleShowPreferences);
    }
  }, []);

  return null;
}

// Helper to check consent synchronously if needed elsewhere
export const hasConsent = (category) => {
    return CookieConsent.acceptedCategory(category);
};
