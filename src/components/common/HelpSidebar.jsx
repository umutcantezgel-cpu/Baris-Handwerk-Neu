import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  FileText,
  CheckSquare,
  ChevronRight,
  Clock,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '@/config/site';

const HelpSidebar = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentView, setCurrentView] = useState('main'); // main, emergency, guides, checklists
  const [activeItem, setActiveItem] = useState(null);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset view when closing
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setCurrentView('main');
        setActiveItem(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (currentView !== 'main') {
          setCurrentView('main');
        } else {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, currentView]);

  const quickHelpCards = [
    {
      id: 'emergency',
      icon: AlertCircle,
      title: 'Erste Hilfe Ratgeber',
      description: 'Was tun bei Rohrbruch, Heizungsausfall & Co?',
      color: 'from-[var(--color-feedback-error)] to-red-600',
      iconColor: 'bg-[var(--color-feedback-error)]'
    },
    {
      id: 'guides',
      icon: FileText,
      title: 'Anleitungen',
      description: 'Schritt-für-Schritt Guides für häufige Fragen',
      color: 'from-[var(--color-blue-500)] to-[var(--color-blue-600)]',
      iconColor: 'bg-[var(--color-blue-500)]'
    },
    {
      id: 'checklists',
      icon: CheckSquare,
      title: 'Checklisten',
      description: 'Wartung, Winterfest & Energiesparen',
      color: 'from-[var(--color-brand-secondary)] to-[var(--color-brand-primary)]',
      iconColor: 'bg-[var(--color-brand-secondary)]'
    }
  ];

  const navigate = useNavigate();

  // ... (existing code for effect hooks if any other logic needed) ...

  const popularFAQs = [
    {
      text: 'Wie oft sollte meine Heizung gewartet werden?',
      type: 'view',
      target: 'faq_maintenance'
    },
    {
      text: 'Was tun bei einem Wasserrohrbruch?',
      type: 'view',
      target: 'faq_burst'
    },
    {
      text: 'Wie kann ich Energie sparen?',
      type: 'view',
      target: 'faq_energy'
    },
    {
      text: 'Wann ist eine Rohrreinigung notwendig?',
      type: 'view',
      target: 'faq_cleaning'
    },
    {
      text: 'Kosten für eine Heizungswartung?',
      type: 'view',
      target: 'faq_cost'
    }
  ];

  const detailedContent = {
    emergency: {
      title: 'Erste Hilfe Ratgeber',
      color: 'text-[var(--color-feedback-error)]',
      items: [
        {
          title: 'Wasserrohrbruch',
          content: '1. Hauptwasserhahn sofort schließen.\n2. Strom im betroffenen Bereich abschalten.\n3. Mobiliar retten & Wasser aufwischen.\n4. Kontaktieren Sie uns: +49 172 9475061'
        },
        {
          title: 'Heizungsausfall',
          content: '1. Prüfen Sie den Notschalter.\n2. Prüfen Sie den Wasserdruck (Soll: 1.5 - 2.0 bar).\n3. Prüfen Sie die Brennstoffzufuhr.\n4. Bei Fehlercode: Notieren und anrufen.'
        },
        {
          title: 'Gasgeruch',
          content: '1. KEINE Schalter betätigen, kein Feuer!\n2. Fenster & Türen öffnen.\n3. Gashahn schließen (wenn möglich).\n4. Haus verlassen & Feuerwehr (112) rufen.'
        }
      ]
    },
    guides: {
      title: 'Anleitungen',
      color: 'text-[var(--color-blue-600)]',
      items: [
        {
          title: 'Heizung entlüften',
          content: '1. Umwälzpumpe abstellen.\n2. Heizkörperthermostate voll aufdrehen.\n3. Entlüftungsschlüssel ansetzen & öffnen bis Wasser kommt.\n4. Wieder schließen & Wasserdruck prüfen.'
        },
        {
          title: 'Wasserdruck nachfüllen',
          content: '1. Verbindungsschlauch anschließen.\n2. Beide Hähne langsam öffnen.\n3. Manometer beobachten (bis ca. 1.8 bar).\n4. Hähne schließen & Schlauch entfernen.'
        }
      ]
    },
    checklists: {
      title: 'Checklisten',
      color: 'text-[var(--color-brand-secondary)]',
      items: [
        {
          title: 'Heizung Winter-Check',
          content: '- [ ] Wasserdruck prüfen\n- [ ] Heizkörper entlüften\n- [ ] Thermostate prüfen\n- [ ] Wartungstermin vereinbaren'
        },
        {
          title: 'Energiesparen',
          content: '- [ ] Raumtemperaturen anpassen\n- [ ] Stoßlüften statt Kippen\n- [ ] Heizkörper nicht zustellen\n- [ ] Nachtabsenkung nutzen'
        }
      ]
    },
    faq_maintenance: {
      title: 'Heizungswartung',
      color: 'text-[var(--color-neutral-900)]',
      items: [
        {
          title: 'Wie oft ist eine Wartung nötig?',
          content: 'Wir empfehlen eine jährliche Wartung, idealerweise vor Beginn der Heizperiode (September/Oktober). Dies sichert die Effizienz der Anlage, spart Heizkosten und verlängert die Lebensdauer Ihrer Heizung.'
        }
      ]
    },
    faq_burst: {
      title: 'Verhalten bei Wasserrohrbruch',
      color: 'text-[var(--color-feedback-error)]',
      items: [
        {
          title: 'Sofortmaßnahmen',
          content: '1. Hauptwasserhahn sofort zudrehen (meist im Keller).\n2. Strom im betroffenen Bereich abschalten (Sicherungen raus).\n3. Feuerwehr rufen, falls Wasserpegel stark steigt.\n4. Rufen Sie uns an: +49 172 9475061'
        }
      ]
    },
    faq_energy: {
      title: 'Energie sparen',
      color: 'text-[var(--color-brand-secondary)]',
      items: [
        {
          title: 'Effektive Spartipps',
          content: '• Hydraulischer Abgleich der Heizung (bis zu 15% Ersparnis)\n• Programmierbare Thermostate nutzen\n• Heizkörper nicht durch Möbel verdecken\n• Regelmäßiges Entlüften der Heizkörper'
        }
      ]
    },
    faq_cleaning: {
      title: 'Rohrreinigung',
      color: 'text-[var(--color-neutral-900)]',
      items: [
        {
          title: 'Wann ist sie notwendig?',
          content: 'Eine professionelle Reinigung ist ratsam bei:\n• Wiederkehrenden Verstopfungen\n• Gluckernden Geräuschen im Abfluss\n• Unangenehmen Gerüchen\n• Langsam ablaufendem Wasser'
        }
      ]
    },
    faq_cost: {
      title: 'Kosten Heizungswartung',
      color: 'text-[var(--color-neutral-900)]',
      items: [
        {
          title: 'Kostenschätzung',
          content: 'Die Kosten variieren je nach Anlagentyp (Gas, Öl, Wärmepumpe) und Wartungsumfang. In der Regel beginnen professionelle Wartungen ab ca. 150€. Für ein genaues Angebot kontaktieren Sie uns gerne.'
        }
      ]
    }
  };


  const handleCallbackRequest = (e) => {
    e.preventDefault();
    console.log('Callback request:', phone);
    setPhone('');
  };

  const handleFAQClick = (faq) => {
    if (faq.type === 'view') {
      setCurrentView(faq.target);
    } else if (faq.type === 'route') {
      navigate(faq.target);
      onClose(); // Close sidebar when navigating away
    }
  };

  const renderContent = () => {
    if (currentView === 'main') {
      return (
        <div className="space-y-[var(--spacing-6)]">
          {/* Quick Help Cards */}
          <div>
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-3)]">Schnelle Hilfe</h3>
            <div className="space-y-[var(--spacing-3)]">
              {quickHelpCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentView(card.id)}
                    className="min-h-[44px] w-full text-left bg-[var(--color-neutral-0)] border border-[var(--color-border-default)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] hover:shadow-lg hover:border-[var(--color-interactive-primary)] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-[var(--spacing-3)]">
                      <div className={`${card.iconColor} p-2 rounded-[var(--radius-base)] flex-shrink-0 text-white shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-[var(--color-neutral-900)] mb-1 group-hover:text-[var(--color-interactive-primary)] transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">{card.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-interactive-primary)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Popular FAQ Items */}
          <div>
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-3)]">Häufige Fragen</h3>
            <div className="space-y-2">
              {popularFAQs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleFAQClick(faq)}
                  className="min-h-[44px] w-full text-left px-[var(--spacing-4)] py-[var(--spacing-3)] rounded-[var(--radius-base)] hover:bg-[var(--color-neutral-100)] transition-colors group flex items-center justify-between"
                >
                  <span className="text-[var(--color-text-primary)] group-hover:text-[var(--color-neutral-900)] text-sm">
                    {faq.text}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-interactive-primary)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div>
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-3)]">Kontaktieren Sie uns</h3>

            {/* Email */}
            <div className="bg-[var(--color-neutral-50)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] mb-[var(--spacing-3)] border border-[var(--color-border-default)]">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-[var(--color-brand-secondary)]" />
                <h4 className="font-semibold text-[var(--color-neutral-900)]">E-Mail Support</h4>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-[var(--spacing-3)]">
                Schreiben Sie uns eine Nachricht. Wir antworten werktags innerhalb eines Arbeitstages.
              </p>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Button
                  variant="outline"
                  className="min-h-[44px] w-full hover:bg-[var(--color-brand-secondary)] hover:text-white hover:border-[var(--color-brand-secondary)] transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail schreiben
                </Button>
              </a>
            </div>

            {/* Callback Request */}
            <div className="bg-[var(--color-neutral-50)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] border border-[var(--color-border-default)]">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-[var(--color-brand-secondary)]" />
                <h4 className="font-semibold text-[var(--color-neutral-900)]">Rückruf anfordern</h4>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-[var(--spacing-3)]">
                Wir rufen Sie zum Wunschtermin zurück.
              </p>
              <form onSubmit={handleCallbackRequest} className="space-y-[var(--spacing-3)]">
                <Input
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="min-h-[44px]"
                  required
                />
                <Button
                  type="submit"
                  className="min-h-[44px] w-full bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white shadow-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Rückruf anfordern
                </Button>
              </form>
            </div>
          </div>


          {/* Bottom Padding */}
          <div className="h-6"></div>
        </div>
      );
    }

    // Detail Views (Emergency, Guides, Checklists)
    const data = detailedContent[currentView];
    if (!data) return null;

    return (
      <div className="space-y-[var(--spacing-6)] animate-in slide-in-from-right-8 fade-in duration-300">
        <button
          onClick={() => setCurrentView('main')}
          className="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-neutral-900)] transition-colors mb-2"
        >
          <div className="bg-[var(--color-neutral-100)] p-1 rounded-full mr-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </div>
          Zurück zur Übersicht
        </button>

        <div className="mb-[var(--spacing-6)]">
          <h2 className={`text-2xl font-bold ${data.color} mb-2`}>{data.title}</h2>
          <p className="text-[var(--color-text-secondary)]">
            {currentView === 'emergency' && 'Schnelle Hilfe in Notsituationen.'}
            {currentView === 'guides' && 'Detaillierte Anleitungen für Ihre Haustechnik.'}
            {currentView === 'checklists' && 'Praktische Listen für Wartung & Pflege.'}
          </p>
        </div>

        <div className="space-y-[var(--spacing-4)]">
          {data.items.map((item, idx) => (
            <div key={idx} className="bg-[var(--color-neutral-0)] border border-[var(--color-border-default)] rounded-[var(--radius-lg)] p-[var(--spacing-5)] hover:shadow-md transition-all">
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-3 flex items-start gap-2">
                {currentView === 'checklists' ? <CheckSquare className="w-5 h-5 text-[var(--color-brand-secondary)] mt-0.5" /> : null}
                {item.title}
              </h3>
              <div className="text-[var(--color-text-secondary)] text-sm whitespace-pre-line leading-relaxed pl-1">
                {item.content}
              </div>
            </div>
          ))}

          {currentView === 'faq_cost' && (
            <Button
              onClick={() => {
                navigate('/contact');
                onClose();
              }}
              className="w-full bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white mt-4"
            >
              <FileText className="w-4 h-4 mr-2" />
              Angebot anfordern
            </Button>
          )}
        </div>

        <div className="bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] mt-[var(--spacing-8)]">
          <div className="flex gap-3">
            <div className="bg-[var(--color-blue-100)] p-2 rounded-lg h-fit">
              <Phone className="w-5 h-5 text-[var(--color-blue-600)]" />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-blue-900)] mb-1">Noch Fragen?</h4>
              <p className="text-sm text-[var(--color-blue-800)] mb-3">Unsere Experten helfen Ihnen gerne weiter.</p>
              <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-[var(--color-blue-600)] font-medium hover:underline text-sm">
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-[var(--color-background-surface-primary)] z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--color-background-surface-primary)]/95 backdrop-blur-md border-b border-[var(--color-border-default)] px-[var(--spacing-6)] py-[var(--spacing-4)]">
          <div className="flex items-center justify-between mb-[var(--spacing-4)]">
            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Hilfe & Support</h2>
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors rounded-lg hover:bg-[var(--color-neutral-100)]"
              aria-label="Close help sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar - Only show in main view */}
          {currentView === 'main' && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
              <Input
                type="text"
                placeholder="Wie können wir Ihnen helfen?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 min-h-[44px] rounded-[var(--radius-lg)] border-[var(--color-border-default)] focus:ring-[var(--color-interactive-focus)]"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-[var(--spacing-6)] py-[var(--spacing-6)]">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default HelpSidebar;
