Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 15 der Engineering-Pipeline (State Management) als praezise Zustandsverwaltung zu implementieren. Client-State, Server-State, Cache-Strategien und State-Hydration muessen konsistent und performant sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-35 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-34 → ZERO-BREAKAGE-PHASE-14.md
→ NÄCHSTE: SEQ-36 → ZERO-BREAKAGE-PHASE-16.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══

===============================================================================
ENFORCEMENT-DIREKTIVEN-REFERENZ (PFLICHTLEKTUERE VOR AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, lies:
  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (Direktive 1, 2, 3 und 4)

NULL-EXTERNE-SOFTWARE-DIREKTIVE — KURZFASSUNG:
  VERBOTEN: Neue npm-Dependencies installieren die SaaS-Dienste integrieren.
  ERLAUBT: Bestehende Dependencies aus package.json nutzen und optimieren.
  ERLAUBT: Formspree und Calendly als einzige externe Dienste.

VERSCHAERFTES DOMINO-PROTOKOLL — KURZFASSUNG:
  Erstelle vor jeder Ausfuehrung einen INDIVIDUELLEN Implementierungsplan
  mit dreistufiger Task-Hierarchie. Validation-Gate nach jeder Hauptaufgabe.

===============================================================================
═══════════════════════════════════════════════════════════════════════════════
SEQUENTIELLES-DOMINO-PROTOKOLL (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
LIES NUR DIESES EINE DOKUMENT. FUEHRE NUR DIESE EINE PHASE AUS. DANN SOFORT WEITER.

Die Pipeline arbeitet als Domino-Effekt: Dieses Dokument lesen, vollstaendig
ausfuehren, dann SOFORT das naechste Phasen-Dokument laden und ausfuehren.
IMMER nur EIN Dokument im Speicher. KEINE Pausen. KEIN Warten auf den Nutzer.

VERBOTEN:
  Mehrere Phasen-Dokumente gleichzeitig lesen.
  Den gesamten Pipeline-Ordner auf einmal einlesen.
  Auf den Nutzer warten, bevor die naechste Phase gestartet wird.
  Pausen zwischen Phasen einlegen.

ERLAUBT:
  Dieses eine Phasen-Dokument vollstaendig lesen und ausfuehren.
  Context-Dateien lesen die im LESE-PFLICHTEN-Block dieser Phase stehen.
  MASTER-ORCHESTRATOR.md konsultieren bei Unklarheiten.
  Context-Dateien aktualisieren gemaess EXIT-PROTOKOLL.
  Nach Abschluss dieser Phase SOFORT die naechste Phase starten.

NACH ABSCHLUSS DIESER PHASE:
  1. Fuehre das EXIT-PROTOKOLL vollstaendig aus.
  2. Aktualisiere die Context-Dateien.
  3. Gib einen strukturierten ABSCHLUSSBERICHT:
     PHASE [XX] ABGESCHLOSSEN
     ERGEBNISSE: [Was wurde erreicht]
     CONTEXT-UPDATES: [Welche Dateien aktualisiert]
     NAECHSTE PHASE: [Name der naechsten Phase]
     AUTO-TRIGGER: SOFORT
  4. Lade SOFORT das naechste Phasen-Dokument und beginne mit SCHRITT A.
═══════════════════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-ARTIFACT-PROTOKOLL (PFLICHT — VOR JEDER AUSFUEHRUNG)
═══════════════════════════════════════════════════════════════════════════════

BEVOR du mit der Ausfuehrung dieser Phase beginnst, MUSST du die folgenden drei
Artifacts der Reihe nach erstellen. Dies ist das Antigravity-Workflow-Protokoll.
Keine Ausfuehrung ohne vorherige Planung. Kein Code ohne vorherigen Plan.

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 1: TASK LIST (Neue Task-Liste fuer diese Phase erstellen)
───────────────────────────────────────────────────────────────────────────────

Bereinige ALLE vorherigen Tasks. Erstelle eine NEUE, vollstaendige Task-Liste
fuer diese Phase als Markdown-Checkliste. Die Liste hat drei Bereiche:

  ERLEDIGT (aus vorherigen Phasen, Context-Dateien als Quelle):
    [x] Bereits abgeschlossene Voraussetzungen

  AKTUELLER TASK (genau EINER, markiert mit Pfeil):
    [ ] --> Der Task der JETZT ausgefuehrt wird

  KOMMENDE TASKS (in ausfuehrungsreifer Reihenfolge):
    [ ] Alle weiteren Tasks dieser Phase

  Regeln:
  - Jeder Task ist ATOMAR: Eine messbare Aktion, eine klare Erfolgsbedingung.
  - Jeder Task benennt BETROFFENE DATEIEN und VALIDIERUNGSKRITERIUM.
  - Die Liste wird LAUFEND aktualisiert (neue Tasks bei Entdeckung, Streichung bei Obsoleszenz).
  - Gruppierung in Bloecke A/B/C/D mit Validation-Gate zwischen jedem Block.

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 2: IMPLEMENTATION PLAN (Detaillierter Umsetzungsplan erstellen)
───────────────────────────────────────────────────────────────────────────────

Erstelle einen NEUEN Implementierungsplan VOR jeder Code-Aenderung. Struktur:

  1. ZUSAMMENFASSUNG:
     Was ist das Ziel dieser Phase? (3-5 Saetze, hochrangig)

  2. ANALYSE-ERGEBNISSE:
     Was wurde aus bestehendem Code und Context-Dateien gelernt?
     Welche Abhaengigkeiten, Risiken, Gotchas aus .project-knowledge-base.md?

  3. GEPLANTE AENDERUNGEN (pro Datei):
     [DATEI] → [AKTION: ERSTELLEN/ERWEITERN/REFACTOR] → [WAS] → [WARUM]

  4. VALIDIERUNGSSTRATEGIE:
     Welche Validation-Gates? Welche Metriken? Welche Tests?

  5. AUSFUEHRUNGSREIHENFOLGE:
     Block A: [Tasks 1-N] → Validation Gate (build, lint, tsc)
     Block B: [Tasks N+1-M] → Validation Gate
     Block C: [Tasks M+1-P] → Validation Gate
     Block D: [Tasks P+1-Ende] → Validation Gate

  Der Plan wird ALS ERSTES erstellt. Erst nach Erstellung beginnt die Ausfuehrung.

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 3: WALKTHROUGH (Nach Abschluss — Teil des EXIT-PROTOKOLLS)
───────────────────────────────────────────────────────────────────────────────

Nach Abschluss ALLER Tasks erstellst du einen Walkthrough als Abschlussbericht:

  DURCHGEFUEHRTE AENDERUNGEN:
    Jede erstellte, geaenderte, geloeschte Datei mit Begruendung.

  VALIDIERUNGSERGEBNISSE:
    Finale Metriken: build, lint, tsc — Vorher vs. Nachher.

  ERKENNTNISSE UND NEUE GOTCHAS:
    Architektur-Entscheidungen, entdeckte Patterns, Warnungen fuer Folge-Phasen.

  TEST-ANLEITUNG:
    Wie kann die Korrektheit dieser Phase verifiziert werden?

  Der Walkthrough wird in die Context-Dateien und den Abschlussbericht geschrieben.




═══════════════════════════════════════════════════════════════════════════════
SSOT-DIREKTIVE (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
Der Code ist die SSOT (Single Source of Truth). Wenn Dokumentation und Code
divergieren, GEWINNT IMMER DER CODE. Lies den GESAMTEN bestehenden Code BEVOR
du etwas aenderst. Existierender Code wird ERWEITERT, nie ersetzt.
Validierung: npm run build && npm run lint && npx tsc --noEmit nach JEDEM Block.
DIRECTOR: Director of Engineering (Pipeline 2) — meldet an Director General.
PFLICHT-GESETZE: GESETZ 1 (Ultrathink), GESETZ 2 (100K-Mindset), GESETZ 4 (PPI),
GESETZ 6 (Code-Review K1-K7), GESETZ 7 (Confiteor/RCA bei Bug-Fixes).
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Formspree & Calendly als Premium-integrierte Conversion-Maschinen ins Next.js-Ökosystem einzubetten, während strikte Zero-Breakage-Protokolle gewährleistet bleiben und das System sich selbst optimiert.

═══ ZERO-BREAKAGE PROTOKOLL ═══

Alle Änderungen folgen dem READ-BEFORE-WRITE Pattern. Code ist IMMER die Single Source of Truth. Surgical Injection garantiert Isolation. Atomic Validation verhindert Halbzustände. State Handoff sichert Datenkonsistenz. Self-Optimizing Loop federt Fehler ab. KEIN Headless CMS. KEIN externe AI-APIs. KEIN Sentry/Error-SaaS. KEIN Newsletter-Systeme. KEIN i18n-Frameworks. Tech-Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md, ONLY Formspree + Calendly.

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Bevor erste Task startet (ULTRATHINK-PRE-FLIGHT): Existierende TypeScript-Konfiguration prüfen — AUDIT:
   - Verifiziere tsconfig.json: "strict": true, "noImplicitAny": true, "strictNullChecks": true
   - Run: npx tsc --noEmit → muss 0 errors sein
   - Alle aktuellen Komponenten-Exports in pages/ oder app/ Router dokumentieren:
     * find src/app -name 'page.tsx' | xargs grep -l 'export' → finde ALLE Route-Komponenten
     * Für JEDE Route: Dokumentiere Props-Shape, Data-Dependencies, Error-Boundaries
   - Environment-Variablen-Setup prüfen:
     * .env.example muss enthalten: NEXT_PUBLIC_FORMSPREE_ID, NEXT_PUBLIC_CALENDLY_URL
     * .env.local muss diese Variablen setzen (nicht in Repo commitzen)
     * Validiere zur Build-Zeit: if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) throw new Error()
   - Existierende Form/Conversion-Komponenten identifizieren (zu refactorn):
     * grep -r 'formspree\|calendly\|contact.*form' src/components --include='*.tsx'
     * Kategorisiere: Legacy-Formen (alt), Neue Formen (neu, bereits Formspree)
     * Plan: Legacy → neue Architecture migrieren mittels Surgical Injection
   - Abhängigkeiten-Audit (zod, zustand, sonst minimalistisch):
     * npm list zod (oder equivalent) → check Versionen. HINWEIS: Formular-Handling via eigene Hooks (useFormSubmission), KEIN react-hook-form als externe Dependency erforderlich.
     * Prüfe: Keine Sentry, keine externe AI-APIs, keine Newsletter-Libraries
     * Validiere: Nur Formspree + Calendly als externe Services
   - Browser-DevTools-Setup für Formspree Webhook & Calendly postMessage Debugging:
     * DevTools → Network → Filter nach 'formspree' → inspiziere POST Requests
     * DevTools → Console → Suche nach 'Calendly' — sollte widget.js geladen sein
     * Test-Submission durchführen, Respons-Header prüfen (HTTP 200 mit submission-ID)

═══ BLOCK A — FORMSPREE PREMIUM-INTEGRATION ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 1: FORMSPREE-ARCHITEKTUR OPTIMIEREN

Zweck: Typsicher, robust, honeypot-geschützt, retry-fähig Formspree-Submission Layer.

Lösungs-Architektur:
- FormspreeConfig interface mit formId (env-driven), endpoint (https://formspree.io/f/), autoRespond (boolean)
- FormspreeSubmission interface: { name, email, phone, subject, message, honeypot, timestamp }
- FormspreeResult interface: { success, submissionId, timestamp, error?, retryable? }
- FormspreeError enum: NETWORK_TIMEOUT, SPAM_DETECTED, RATE_LIMIT, VALIDATION_FAILED, UNKNOWN

Implementierung:
- lib/formspree/config.ts: const FORMSPREE_CONFIG = { formId: process.env.NEXT_PUBLIC_FORMSPREE_ID!, endpoint: 'https://formspree.io/f/' }
- lib/formspree/submission.ts: submitToFormspree(data: FormspreeSubmission): Promise<FormspreeResult>
  - Honeypot-Check (if data.honeypot) return { success: false, submissionId: '', timestamp: Date.now(), error: 'Spam detected' }
  - fetch mit retry-logic (3x, exponential backoff: 1s, 2s, 4s)
  - Response-Parsing mit error-boundaries (HTTP 422 = Validation, 429 = Rate Limit, 5xx = Server)
  - Submission-Response mit ID (von Formspree: data.submissionId)
  - Progress: Fehlgeschlagen? error + retryable = true -> UI darf Retry anbieten

Validation Gates:
✓ process.env.NEXT_PUBLIC_FORMSPREE_ID setzt (oder Fallback zu Test-ID)
✓ Fetch-Fehler propagieren als retryable: true
✓ Honeypot triggert Failure silent (kein UI-Hinweis, logs only)
✓ TypeScript strict: alle Parameter type-checked

───────────────────────────────────────────────

ULTRATHINK-TASK 2: WELTKLASSE-KONTAKTFORMULAR-KOMPONENTE

Zweck: 3 Varianten (full/compact/inline) mit vollständiger UX & Fehlerbehandlung.

Komponenten-Struktur:
- components/ContactForm.tsx (full, standard use case)
  - 5 required + 1 honeypot field: name (text), email (email), phone (tel/optional), subject (select: "Support"/"Sales"/"Partnership"/"Other"), message (textarea, min 10 chars), honeypot (hidden input, must be empty)
  - Zod schema (lib/schemas/contact.ts): Erstelle eine strikte Validierungsschema-Datei, die alle Kontaktformular-Felder definiert. Das Schema erzwingt folgende Validierungsregeln: Das Feld 'name' muss ein String sein mit einer Mindestlänge von 2 Zeichen und einer Höchstlänge von 100 Zeichen. Das Feld 'email' muss ein gültiges E-Mail-Format erfüllen. Das Feld 'phone' muss entweder leer sein oder ein internationales Telefonnummernformat mit optionalem Plus-Zeichen und 1-15 Ziffern erfüllen, es ist optional. Das Feld 'subject' muss eines von vier vordefinierten Werten sein: 'Support', 'Sales', 'Partnership' oder 'Other'. Das Feld 'message' muss ein String mit mindestens 10 Zeichen und höchstens 5000 Zeichen sein. Das Feld 'honeypot' darf nur ein leerer String sein und ist Pflicht zur Spam-Erkennung. Nutze die Zod-Bibliothek für diese Definitionsdatei.
  - State Machine via useReducer: Implementiere einen TypeScript-Typen namens 'FormState', welcher den kompletten Zustand des Formulars abbildet. Der Zustand hat ein Feld 'stage' (ein Literal-Union mit vier möglichen Werten: 'idle', 'submitting', 'success', 'error'), ein Feld 'data' (die aktuellen Formulardaten nach ContactFormSchema), ein optionales Feld 'error' (Fehlertext), ein optionales Feld 'retryable' (boolesch, ob eine Wiederholung möglich ist), und ein optionales Feld 'submissionId' (die Referenznummer der erfolgreichen Einreichung). Der 'idle'-Zustand ist der Initialzustand, in dem der Benutzer Eingaben vornehmen kann. Der 'submitting'-Zustand zeigt an, dass das Formular gerade versendet wird: der Submit-Button ist deaktiviert und ein Lade-Spinner wird angezeigt. Der 'success'-Zustand wird nach erfolgreicher Einreichung aktiviert und zeigt eine personalisierte Erfolgsmeldung an, die den Namen des Benutzers und eine Referenzkennung (RefID) enthält. Der 'error'-Zustand wird bei Fehlern angezeigt und zeigt eine Fehlermeldung an. Wenn das Feld 'retryable' true ist, wird zusätzlich ein "[Try Again]" Button angezeigt.

- components/ContactFormCompact.tsx (inline, footer or sidebar)
  - Same schema, but: no phone field, 3-field only (name/email/message), inline button
  
- components/ContactFormInline.tsx (super-lightweight)
  - Email + message only, 1-line submit

Verhaltens-Spezifikationen:
- All 3 variants import { submitToFormspree } aus lib/formspree/submission.ts
- Success-State: Form cleared, message displayed 5s (auto-dismiss), then reset to idle
- Error-State: Show error text, [Try Again] button if retryable, else link to mailto: fallback
- Loading: Button text changes to "Sending...", disabled, spinner/pulse indicator
- Validation error (zod): Show inline error under field, red border

───────────────────────────────────────────────

ULTRATHINK-TASK 3: FORMULAR-UX-PERFEKTION

Zweck: Multi-stage Validation, Smart Suggestions, Progress, Autosave, Anti-Spam, Keyboard UX.

Validierungs-Strategie:
- onChange: nur Positive Validierung (Grünes Häkchen wenn valid, null check nur länge), kein Error-Show
- onBlur: Full Validierung (zod parse), Show Error if fails, Email Typo-Suggest (gmial → gmail, gmai.com → gmail.com, yaho → yahoo)
- onSubmit: All Fields Required + Final zod-check, honeyspot empty-check, CSRF-Token validate (if applicable)

Fortschritts-Indikator:
- Bei 3+ Feldern mit Werten: Zeige Progress Bar (3/5 filled, 60%)
- Visual: <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" style={{width: `${progressPercent}%`}}></div>

Autosave (sessionStorage):
- Nach jedem gültigen onChange: sessionStorage.setItem('contact-form-draft', JSON.stringify(formData))
- Beim Mount: try { restore aus sessionStorage }, falls exists
- "Draft restored" Toast (2s) oder silent

Doppel-Submit-Prävention:
- Button disabled während submitting
- zusätzlich: if (form.stage === 'submitting') return early in handleSubmit
- localstorage Flag: 'lastSubmissionTime' + 30s cooldown

Keyboard UX:
- Tab-Reihenfolge korrekt (name → email → phone → subject → message → [Submit] → honeypot am Ende)
- Enter-to-submit auf textarea (Shift+Enter für Zeilenumbruch)
- Escape zum Dismiss von success-message
- Fokus-Management: Nach error: focus auf fehlerhaftes Feld

───────────────────────────────────────────────

ULTRATHINK-TASK 4: FORMULAR-VARIANTEN FÜR VERSCHIEDENE KONTEXTE

Zweck: Context-aware Formulare mit eingebetteten Trust-Signalen.

Implementations-Ort:
- /services page: <ContactFormWithPreselect subject="Support" /> → subject-Feld read-only, nur message/name/email verfügbar
- /footer: <ContactFormCompact /> → nur email+message
- /modals/BookDemo: <ContactFormModal /> → Mit Calendly-Button auf Success ("Great! Want to book a demo?")
- /careers: <ContactFormCareer /> → Custom schema mit CV-Upload (NICHT an Formspree, aber über separate Backend)

FormTrustBar Subkomponent: Erstelle eine Komponente namens FormTrustBar in der Datei components/FormTrustBar.tsx, die als exportierte Funktion definiert wird. Diese Komponente rendert ein Container-Div mit Flex-Layout, das mehrere Vertrauens-Indikatoren anzeigt. Das Container-Div hat Klassen für Flexbox-Layout mit Lücken zwischen Elementen, kleine Textgröße und grau Textfarbe mit oben Abstand. Die Komponente zeigt alternierend Symbole und Text an: zuerst ein Lock-Symbol mit Breite und Höhe von 4 Einheiten, gefolgt vom Text "Your data is secure & never shared", dann ein Shield-Symbol mit gleichen Dimensionen, und abschließend der Text "GDPR compliant". Diese Komponente signalisiert dem Benutzer, dass die Dateneingabe sicher ist und die Datenschutzrichtlinien eingehalten werden.

Kontextualisierung:
- Service page: "Contact us about {serviceName}" als pre-filled subject-hint
- Modal: "We'll follow up within 24 hours" Trust-Message
- Footer: Minimal FormTrustBar, Link zu Privacy Policy

═══ BLOCK B — CALENDLY PREMIUM-INTEGRATION ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 5: CALENDLY-EINBETTUNGS-ARCHITEKTUR

Zweck: 3 Varianten (inline/popup/badge), Lazy-Load, Brand-Customization, Fallback-UI.

Components:
- components/CalendlyEmbed.tsx (inline, 600px height, full-width)
  - Lazy-Load via next/script (strategy="lazyOnload")
  - Skeleton Placeholder während Load (SkeletonCalendar 600px)
  - CalendlyEmbed-Konfiguration: Definiere eine TypeScript-Interface namens CalendlyConfig, die alle Konfigurationsoptionen für die Calendly-Einbettung enthält. Das Feld 'url' ist ein erforderlicher String, der die Calendly-Profil-URL enthält (Format: https://calendly.com/yourname). Das Feld 'variant' ist ein erforderliches Literal mit drei möglichen Werten: 'inline' für eingebettete Kalender, 'popup' für Pop-up-Fenster-Variante, oder 'badge' für Abzeichen-Variante. Das Feld 'hideEventDetails' ist optional und boolean und steuert, ob Ereignisdetails angezeigt werden. Das Feld 'primaryColor' ist optional und ein String im Hexadezimal-Format (z.B. '#0066FF') für die Primärfarbe des Widgets. Das Feld 'textColor' ist optional und definiert die Textfarbe. Das Feld 'prefill' ist optional und enthält ein verschachteltes Objekt mit optionalen Feldern 'name', 'email' und 'sms', die vorab mit Benutzerdaten gefüllt werden können.
  - next/script Integration: Verwende die Next.js Script-Komponente zum Laden des Calendly-Widgets. Die Script-Komponente lädt das Calendly-Widget-JavaScript von der URL https://assets.calendly.com/assets/external/widget.js mit der Strategie 'lazyOnload', was bedeutet, dass das Script erst geladen wird, wenn es benötigt wird. Parallel dazu rendere ein Div-Container mit der Klasse 'calendly-inline-widget'. Dieses Div erhält als Datenattribut 'data-url' die konstruierte Calendly-URL, die aus der Basis-URL (config.url) und einem Query-Parameter besteht, der 'hide_event_details' auf true setzt, wenn diese Option in der Config aktiviert ist. Calendly lädt diese URL automatisch durch sein Widget-Script.
  - Brand Colors via URL params: ...?primary_color=0066FF&text_color=000000

- components/CalendlyPopup.tsx (Link-triggered popup)
  - onClick: Calendly.showPopupWidget(url)
  - Button text: "Schedule a Demo" oder contextual

- components/CalendlyBadge.tsx (bottom-right badge, always visible)
  - Calendly.initBadgeWidget({...})

Fallback UI (bei Calendly-Outage): Implementiere eine fehlertolerante Fallback-Logik, die prüft, ob das Calendly-Widget im globalen window-Objekt vorhanden ist. Falls das Calendly-Objekt nicht verfügbar ist (Zeichen für eine Outage oder fehlende Internetverbindung), wird statt des normalen Widgets ein alternatives Div-Element angezeigt. Dieses Fallback-Div hat Rand, Padding, gerundete Ecken und zentrierte Textausrichtung. Der Text informiert den Benutzer, dass die Terminbuchungsfunktion gerade nicht verfügbar ist, und bietet eine Alternative: eine E-Mail-Adresse (hello@company.com) zum Kontakt. Diese Strategie sorgt dafür, dass Benutzer immer einen Weg haben, Kontakt aufzunehmen, auch wenn das externe Calendly-Service nicht erreichbar ist.

Prefill & UTM Forwarding:
- Extract route params: ?utm_source=campaign&utm_medium=email
- In CalendlyEmbed: Prefill name/email from Form wenn verfügbar (via Context oder Props)
- URL-Konstruktion: https://calendly.com/yourname?name={name}&email={email}&utm_source={utm}

───────────────────────────────────────────────

ULTRATHINK-TASK 6: CALENDLY-TRACKING UND ANALYTICS

Zweck: Event-Tracking via postMessage, GA4 Integration, Funnel Analysis.

Implementation: Erstelle eine Datei lib/tracking/calendly.ts mit einer TypeScript-Interface namens CalendlyEvent. Diese Interface definiert ein erforderliches Feld 'event', das ein Literal sein kann mit drei möglichen Werten: 'event_type_viewed' (wenn der Benutzer einen Ereignistyp anschaut), 'date_and_time_selected' (wenn ein Termin ausgewählt wird), oder 'event_scheduled' (wenn eine Buchung abgeschlossen ist). Es gibt auch ein optionales Feld 'payload' mit verschachtelten optionalen Feldern für Ereignisnamen und Startzeit. Implementiere eine exportierte Funktion namens initCalendlyTracking(), die zuerst prüft, ob der Code im Browser läuft (window ist definiert). Falls ja, registriere einen globalen 'message'-Event-Listener am window-Objekt. Dieser Listener prüft, ob eingehende postMessage-Events das Feld 'event' haben und dieses mit 'calendly' beginnt. Falls ja, interpretiere die eingehenden Daten als CalendlyEvent und rufe die Tracking-Funktion trackCalendlyEvent() auf. Diese Tracking-Funktion prüft, ob die globale Google Analytics-Funktion (window.gtag) verfügbar ist. Wenn das Event 'event_scheduled' ist, sende ein GA4-Event 'calendly_booking_completed' mit einem Wert von 1 (volle Konversion). Wenn das Event 'date_and_time_selected' ist, sende ein GA4-Event 'calendly_time_selected' mit einem Wert von 0.5 (Mikro-Konversion). Diese Struktur ermöglicht es, Benutzerinteraktionen mit Calendly zu verfolgen und in Google Analytics 4 zu analysieren.

Invocation: Call initCalendlyTracking() in Layout oder useEffect auf seiten mit CalendlyEmbed.

GA4 Goals:
- calendly_booking_completed (conversion, value=1)
- calendly_time_selected (micro, value=0.5)
- Funnel: Embed viewed → Time selected → Booking completed

Dashboard Metrics:
- Calendly CTR: (bookings / views) %
- Avg Time from view to booking
- Top booked slots (day/time)

───────────────────────────────────────────────

ULTRATHINK-TASK 7: FORMULAR-CALENDLY-BRÜCKE

Zweck: ConversionSwitch component, Form↔Calendly handover, unified conversion experience.

Components:
- components/ConversionSwitch.tsx (tabs or cards)
  - 2 Tabs: "Get in Touch" (Form) | "Book a Demo" (Calendly)
  - State: activeTab (form | calendly)
  - Form-Tab: <ContactForm onSuccess={handleFormSuccess} />
  - Calendly-Tab: <CalendlyEmbed {...config} />
  - CSS: Smooth transition, Underline indicator

Data Handover (Form → Calendly): Implementiere einen Event-Handler namens handleFormSuccess, der nach erfolgreicher Formulareinreichung aufgerufen wird. Dieser Handler erhält die vollständig validierten Formulardaten als Parameter vom Typ ContactFormSchema. Zuerst werden diese Daten in einen zentralen Zustand-Management-Store (z.B. Zustand oder React Context) geschrieben. Die zu speichernden Felder sind: name, email und phone des Benutzers. Der Handler ruft eine Setter-Methode setPrefill() auf dem Store auf, um diese Daten zu speichern. Danach wird der aktive Tab der Konversions-Switch-Komponente auf 'calendly' gesetzt, was die Ansicht zur Calendly-Einbettung wechselt. Die bereits im Store gespeicherten Daten werden dann automatisch vom Calendly-Widget über URL-Parameter gelesen und zum Vorausfüllen des Terminbuchungsformulars verwendet. Damit wird eine nahtlose Übergabe der Benutzerdaten vom Kontaktformular zum Calendly-Widget erreicht, ohne dass der Benutzer diese Daten erneut eingeben muss.

Post-Conversion Experience:
- After Calendly booking: "Perfect! Confirmation email sent. We'll see you then!" + autoclose or redirect to /thank-you
- Fallback: Both form & Calendly submissions → Welcome Email workflow (Formspree notification email or backend handler)

═══ BLOCK C — FORMSPREE-BACKEND-OPTIMIERUNG ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 8: FORMSPREE-KONFIGURATION MAXIMIEREN

Zweck: Formspree Dashboard full-feature config, webhooks, reply-to automation.

Formspree Dashboard Checklist:
- Email Notifications: Set "Reply-To" Field = email
- Custom Reply Email: noreply@company.com (optional, or use Formspree default)
- Email Templates: Customize auto-reply text ("Thanks for contacting us...")
- Spam Protection: Enable reCAPTCHA or Formspree AI (if available)
- Submissions Storage: Enable "Store submissions" in dashboard
- Webhooks (optional, advanced): POST to /api/webhooks/formspree
  - Webhook payload: { submissionId, name, email, subject, message, timestamp }
  - Use case: Custom CRM sync, Slack notification, etc.

Optional Backend Webhook Handler: Erstelle eine optionale Backend-API-Route in pages/api/webhooks/formspree.ts als Webhook-Empfänger für Formspree-Einreichungen. Diese async-Funktion akzeptiert zwei Parameter: req (NextApiRequest) und res (NextApiResponse). Prüfe zuerst die HTTP-Methode: nur POST-Requests sind erlaubt. Alle anderen Methoden erhalten eine 405 (Method Not Allowed) Antwort. Aus dem Request-Body extrahiere die wichtigsten Felder: submissionId (eindeutige Kennung), email, name, subject und message. Diese Daten können dann für verschiedene Zwecke verarbeitet werden: Logging in die Datenbank oder in die Konsole, Integration mit externen Services wie Slack (über Slack-Webhook-URL), CRM-Systeme oder E-Mail-Notification-Services. Das Beispiel zeigt, wie man optional eine Slack-Nachricht mit den Kontaktinformationen senden könnte, indem man den Slack-Webhook aufruft. Die Antwort ist ein einfaches JSON mit dem Status 'received: true', um Formspree zu bestätigen, dass der Webhook empfangen wurde. Falls kein Slack-Webhook benötigt wird, ist auch ein reines Logging ausreichend.

Environment Setup:
- NEXT_PUBLIC_FORMSPREE_ID=xxxxx (Public, safe)
- Formspree Secret API Key (NOT in .env, use Dashboard only for webhooks)

───────────────────────────────────────────────

ULTRATHINK-TASK 9: MULTI-FORMULAR-STRATEGIE

Zweck: Verschiedene Forms für verschiedene Zwecke, zentrale ID-Verwaltung.

Forms Inventory:
1. Primary Contact Form (Support/Sales) → NEXT_PUBLIC_FORMSPREE_ID
2. Quick Inquiry Form (Footer) → NEXT_PUBLIC_FORMSPREE_ID_QUICK
3. Career/Job Application → NEXT_PUBLIC_FORMSPREE_ID_CAREERS
4. Partnership Inquiry → NEXT_PUBLIC_FORMSPREE_ID_PARTNER

Management (lib/formspree/forms.ts): Erstelle eine zentrale Verwaltungsdatei lib/formspree/forms.ts, die alle Formspree-Formular-IDs verwaltet. Definiere ein exportiertes Konstanten-Objekt namens FORMSPREE_FORMS, das vier Einträge enthält. Der Eintrag 'contact' enthält die primäre Formspree-ID aus der Umgebungsvariablen NEXT_PUBLIC_FORMSPREE_ID (erforderlich, mit ! erzwungen). Der Eintrag 'quick' enthält die spezielle Formular-ID für schnelle Anfragen aus NEXT_PUBLIC_FORMSPREE_ID_QUICK, mit Fallback zur primären ID, falls nicht gesetzt. Der Eintrag 'careers' enthält die Karriere-Formular-ID aus NEXT_PUBLIC_FORMSPREE_ID_CAREERS mit gleichem Fallback-Verhalten. Der Eintrag 'partner' enthält die Partner-Anfrage-ID aus NEXT_PUBLIC_FORMSPREE_ID_PARTNER mit gleichem Fallback. Zusätzlich erstelle eine exportierte Funktion getFormId(), die einen Parameter namens 'type' akzeptiert, der eine der Schlüssel des FORMSPREE_FORMS-Objekts sein muss (typsicher durch keyof-Typ-Abfrage). Diese Funktion gibt den String-Wert der entsprechenden Formular-ID zurück. Falls eine spezielle Formular-ID nicht konfiguriert ist, wird automatisch auf die primäre Kontakt-Formular-ID zurückgegriffen.

Usage: Verwende die getFormId()-Funktion, indem du sie mit einem String-Literal aufrufen, der einer der unterstützten Formulartypen ist (z.B. 'contact', 'quick', 'careers', 'partner'). Die Funktion gibt eine String-ID zurück. Diese ID wird dann zusammen mit den Formulardaten an die submitToFormspree()-Funktion übergeben, indem man die Daten mit dem Spread-Operator (...data) zusammen mit der formId als Objekt-Eigenschaft übermittelt. Das Ergebnis ist ein Promise, das durch await aufgelöst werden kann, um das Ergebnis der Formulareinreichung zu erhalten.

Fallback: Wenn Env-Var nicht gesetzt, nutze default (primary contact form).

═══ BLOCK D — CONVERSION-OPTIMIERUNG UND A/B-TESTING ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 10: FORMULAR-A/B-TESTS

Zweck: 4 Test-Kandidaten, Tracking pro Variante, result-based optimization.

Test-Setup via localStorage/URL params: Erstelle eine Datei lib/ab-testing/formAbTest.ts mit einem exportierten TypeScript-Type namens FormVariant, der ein Literal-Union mit vier möglichen Werten ist: 'control', 'short', 'trust-first' und 'calendly-first'. Implementiere eine exportierte Funktion assignFormVariant(), die für jeden Benutzer konsistent eine Formular-Variante bestimmt. Die Funktion prüft zuerst, ob der Code im Browser läuft (window ist definiert). Falls nicht (Server-Side-Rendering), gebe die Standard-Variante 'control' zurück. Falls ja, prüfe, ob eine Varianten-Zuweisung bereits im localStorage unter dem Schlüssel 'form-ab-variant' gespeichert ist. Falls ja, gib die gespeicherte Variante zurück (mit type-Assertion als FormVariant). Falls nein, weise zufällig eine der vier Varianten zu, indem man ein Array mit allen Varianten erstellt und einen zufälligen Index aussucht (mit Math.random() multipliziert mit der Array-Länge und Math.floor() für Abrundung). Speichere diese zugewiesene Variante im localStorage ab, damit sie bei zukünftigen Besuchen erneut verwendet wird, und gebe sie zurück. Dies stellt sicher, dass jeder Benutzer konsistent die gleiche Variante sieht, bis er die Browser-Daten löscht.

4 Candidates:
1. **Control**: 5 fields (name/email/phone/subject/message), standard CTA "Send Message"
2. **Short**: 3 fields only (name/email/message), CTA "Quick Contact"
3. **Trust-First**: 5 fields + Trust badges above form, CTA "Send Securely"
4. **Calendly-First**: ConversionSwitch with Calendly tab active by default, CTA "Schedule or Send"

Tracking:
  IMPLEMENTIERUNGSANWEISUNG (TYPESCRIPT-BLOCK, 9 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — const variant = assignFormVariant();
    — gtag('event', 'form_submission_success', { variant, value: 1 });


GA4 Conversion Funnel:
- form_variant_view (all) → form_interaction (name field focused) → form_submission_success (value=1)
- Weekly review: Conversion rate per variant
- Winner: Highest conversion rate wins, deploy as new control

Result-Based Optimization:
- If trust-first wins: Make trust badges always-visible on next phase
- If short wins: Reduce field count on all forms
- If calendly-first wins: Make Calendly primary, form secondary

═══ SELF-OPTIMIZING LOOP — PHASE 15 ABSCHLUSS ═══

Nach jedem Deployment: Formspree Dashboard prüfen (Spam count, submission rate). GA4 Dashboards laden (Form conversion, Calendly funnel). A/B-Test-Ergebnisse via GA4 Comparison Tool reviewen (daily, min. 500 sessions pro variant). Fehlgeschlagene Submissions in Formspree Dashboard analysieren (error types, retry patterns). Feedback-Loop: Wenn error rate > 5%, sofort Honeypot-Logic oder Validation-Schema überprüfen.

Weekly Optimization Ritual:
- Monday: Check submissions count (healthy = 50+/week)
- Wednesday: A/B test results (confidence level needed?)
- Friday: Variant winner decision + deployment

Alerting (optional):
- If Formspree error rate > 10% for 1h: Email alert
- If Calendly outage detected: Show fallback UI, log incident
- If conversion rate drops > 20% YoY: Flag for investigation

═══ FINALE VALIDIERUNG PHASE 15 ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 11: FINAL-AUDIT

Checklist vor Abschluss Phase 15:

Form Architecture:
☐ FormspreeConfig interface exists (lib/formspree/config.ts)
☐ FormspreeSubmission & FormspreeResult interfaces typed
☐ submitToFormspree() function with retry logic (3x, exponential backoff)
☐ Honeypot field integrated (hidden, must be empty)
☐ Env variables documented (NEXT_PUBLIC_FORMSPREE_ID, etc.)

ContactForm Component:
☐ ContactForm.tsx full variant (5+1 fields) with Zod schema
☐ ContactFormCompact.tsx (3 fields: name/email/message)
☐ ContactFormInline.tsx (2 fields: email/message)
☐ useReducer state machine (idle→submitting→success/error) working
☐ Success message shows personalised (name + RefID)
☐ Error message shows with [Try Again] CTA if retryable
☐ All 3 variants share common submitToFormspree logic

UX Enhancements:
☐ onChange: Positive validation only (green checkmark)
☐ onBlur: Full validation + Error show
☐ Email typo suggestions (gmial→gmail) functional
☐ Progress indicator visible at 3+ fields
☐ Autosave to sessionStorage every 5s
☐ Double-submit prevention (button disabled, 30s cooldown)
☐ Keyboard UX: Tab-order correct, Shift+Enter on textarea, Escape to dismiss

Form Variants & Context:
☐ Service page form with pre-selected subject
☐ Footer inline form (compact variant)
☐ Modal form with focus management
☐ FormTrustBar subcomponent visible

Calendly Integration:
☐ CalendlyEmbed.tsx (inline, 600px, lazy-load)
☐ CalendlyPopup.tsx (button-triggered)
☐ CalendlyBadge.tsx (optional, bottom-right)
☐ Skeleton placeholder during load
☐ Brand colors customizable via URL params
☐ Fallback UI on Calendly outage
☐ Prefill working (name/email from Form)
☐ UTM params forwarded

Calendly Tracking:
☐ postMessage event listener set up (event_type_viewed, date_and_time_selected, event_scheduled)
☐ GA4 conversion events firing (calendly_booking_completed)
☐ Calendly funnel visible in GA4 (view→select→book)

Form-Calendly Bridge:
☐ ConversionSwitch component (tabs: Form | Calendly)
☐ Data handover on Form success (prefill Calendly with form data)
☐ Post-conversion experience (confirm message + CTA)
☐ Both flows track to GA4 conversion goal

Formspree Backend:
☐ Formspree Dashboard config complete (Reply-To, templates, spam filter)
☐ Optional webhook handler (/api/webhooks/formspree) documented
☐ Submissions storage enabled in dashboard

Multi-Form Strategy:
☐ FORMSPREE_FORMS constant defined (contact, quick, careers, partner)
☐ getFormId() helper function working
☐ Fallback to primary form if env var missing

A/B Testing:
☐ 4 test variants defined (control, short, trust-first, calendly-first)
☐ assignFormVariant() function with localStorage tracking
☐ GA4 events firing per variant (form_variant_view, form_submission_success)
☐ Conversion funnel visible in GA4
☐ Weekly analysis process documented

TypeScript & Code Quality:
☐ tsconfig.json strict: true
☐ All Form/Calendly functions have explicit return types
☐ Zod schema validates all user inputs
☐ No any types used
☐ Error types enumerated (FormspreeError, CalendlyError)
☐ Environment variables typed (type safety on process.env)

Testing & Validation:
☐ Manual test: Fill form, submit, success message appears
☐ Manual test: Try honeypot, submission rejected silently
☐ Manual test: Network timeout, [Try Again] CTA appears
☐ Manual test: Calendly widget loads, booking creates GA4 event
☐ Manual test: Form→Calendly handover, prefill populated
☐ Manual test: All 3 form variants render without errors
☐ Manual test: Mobile responsive, form readable on 375px width
☐ Console: No TypeScript errors (strict mode)
☐ Console: No runtime errors in browser console
☐ Network Tab: Formspree requests are POSTing to correct endpoint

Deployment:
☐ All .env variables set in production
☐ Vercel/hosting provider secrets configured
☐ Formspree webhooks set to production URL (if applicable)
☐ GA4 tracking ID configured for production
☐ Calendly URL points to correct account
☐ A/B test variants initialized
☐ Form success message tested end-to-end

Documentation:
☐ README updated with Form/Calendly integration guide
☐ Environment variables documented (.env.example)
☐ Formspree config checklist in comments
☐ Calendly customization guide documented
☐ A/B testing analysis process documented in WIKI or Notion
☐ Monitoring alerts set (optional, fallback email)

Phase 15 Complete.


═══════════════════════════════════════════════════════════════════════════════
═══ 
─────────────────────────────────────────────────────────────────────────────
ERWEITERTES EXIT-PROTOKOLL (DIRECTOR OF ENGINEERING):
─────────────────────────────────────────────────────────────────────────────
1. ATOMIC VALIDATION:
   [ ] npx tsc --noEmit → 0 Errors
   [ ] npm run lint → 0 Errors/Warnings
   [ ] npm run build → SUCCESS
2. PPI-BEWERTUNG (GESETZ 4):
   [ ] Kein Code-Block mit CRITICAL Impact ohne dokumentierte Begruendung
   [ ] Alle WARNING-Impacts mit Mitigationsstrategie versehen
3. CODE-REVIEW K1-K7 (GESETZ 6):
   [ ] K1 Architektur: Max 150 Zeilen/Datei, max 20 Zeilen/Funktion
   [ ] K2 Type Safety: Null any, Zod fuer externe Daten
   [ ] K3 Performance: Stabile Props, Code Splitting
   [ ] K4 Security: Keine exponierten Secrets
   [ ] K5 Design System: Tokens statt Magic Numbers
   [ ] K6 Accessibility: Semantische Elemente, Focus States
   [ ] K7 Premium Polish: Skeleton Screens, Error States
4. KNOWLEDGE-BASE UPDATE:
   [ ] .project-knowledge-base.md mit neuen Erkenntnissen aktualisiert
   [ ] Falls Bug-Fix: RCA im Confiteor-Format (GESETZ 7) dokumentiert
5. SELF-OPTIMIZATION CHECK:
   [ ] Benennungen konsistent (camelCase Funktionen, PascalCase Komponenten)
   [ ] JSDoc auf allen exportierten Funktionen
   [ ] Keine TODO/FIXME ohne Ticket-Referenz
6. CONTEXT-UPDATE UND HANDOFF:
   [ ] .upgrade-state.md aktualisiert (aktuelle Phase, offene Issues, naechste Phase)
   [ ] .ai-architectural-context.md aktualisiert (neue Patterns, Entscheidungen)
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

CHAIN-EXIT-FOOTER ═══ SEQ-35 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-25 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-26)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-36 → ZERO-BREAKAGE-PHASE-16.md
   → Lese ZERO-BREAKAGE-PHASE-16.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-26

═══ PHASE SEQ-25 → SEQ-26: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-25 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-25 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-25 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-36 → ZERO-BREAKAGE-PHASE-26.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-26
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-26 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-25: Formspree & Calendly Premium-Integration ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-25 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-26)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-36 → ZERO-BREAKAGE-PHASE-26.md
   → Lese ZERO-BREAKAGE-PHASE-26.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-26



═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: STATE MANAGEMENT & PATTERN LIBRARY
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-11: FEATURE FLAGS OHNE EXTERNEN SERVICE
───────────────────────────────────────────────────────────────────────────────
  WARUM: A/B-Testing und schrittweises Rollout ohne Drittanbieter.
  PFLICHT-IMPLEMENTIERUNG:
    JSON-Config im Code: /lib/feature-flags.ts
    Environment-basiert: Flags koennen per ENV ueberschrieben werden.
    TypeScript-typisiert: Jeder Flag ist dokumentiert und typisiert.

  IMPLEMENTATION-PATTERN:
    Feature-Flags werden in einer zentralen TypeScript-Datei definiert. Jedes Flag wird von einer entsprechenden Umgebungsvariable kontrolliert. Die Testimonial-Sektion kann deaktiviert werden. Animationen koennen systemweit aus- und eingeschaltet werden. Die Preistabelle wird nur bei expliziter Aktivierung angezeigt. Das Kontaktformular ist grundsaetzlich immer aktiv und kann nicht deaktiviert werden. Der gesamte Flags-Objekt wird als unveraenderbar deklariert, um Typsicherheit zu ermoeglichen. Ein Typ wird exportiert, um alle moeglichen Flag-Namen zu enumerieren.

  VERWENDUNG IN KOMPONENTEN:
    Im Komponenten-Code wird das Flags-Objekt importiert und verwendet, um Sektionen bedingt zu rendern. Eine Sektion wird nur angezeigt, wenn das entsprechende Flag aktiv ist.

  VALIDIERUNG:
    [ ] Alle optionalen Sections sind hinter Feature Flags
    [ ] Flags sind typisiert und dokumentiert
    [ ] ENV-Override funktioniert fuer jedes Flag

CHEATCODE CC-12: CUSTOM HOOK LIBRARY (WIEDERVERWENDBARE PATTERNS)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Eliminiert Code-Duplizierung, erzwingt Konsistenz.
  PFLICHT-HOOKS (jedes Projekt MUSS diese haben):

    useMediaQuery(query: string): boolean
      Responsive Logik in JS wenn CSS nicht reicht.

    useIntersectionObserver(ref, options): boolean
      Scroll-basierte Sichtbarkeit (Lazy Loading, Animationen).

    useScrollPosition(): { x: number; y: number }
      Header-Shrink, Back-to-Top, Parallax.

    useLocalStorage<T>(key, initialValue): [T, (v: T) => void]
      Persistente User-Preferences (Cookie-Consent, UI-State).

    useDebounce<T>(value: T, delay: number): T
      Suchfelder, Resize-Handler, Input-Validierung.

    useCopyToClipboard(): { copied: boolean; copy: (text: string) => void }
      Share-Funktionalitaet, Code-Blocks.

    useFormSubmission(url: string): { submit, isLoading, error, success }
      Einheitliches Formular-Handling mit Retry und Validierung.

  ARCHITEKTUR:
    /hooks/useMediaQuery.ts
    /hooks/useIntersectionObserver.ts
    /hooks/useScrollPosition.ts
    /hooks/useLocalStorage.ts
    /hooks/useDebounce.ts
    /hooks/useCopyToClipboard.ts
    /hooks/useFormSubmission.ts
    /hooks/index.ts (Barrel Export)

CHEATCODE CC-13: COMPOUND COMPONENT PATTERN
───────────────────────────────────────────────────────────────────────────────
  WARUM: Flexible, kompositionierbare APIs wie die besten Open-Source-Libraries.
  PFLICHT-IMPLEMENTIERUNG:
    Komplexe UI-Elemente (Accordion, Tabs, Modal, Dropdown) MUESSEN
    das Compound Component Pattern verwenden.

  BEISPIEL-ARCHITEKTUR:
    Akkordeon-Komponenten werden zur Strukturierung von FAQ-Inhalten verwendet. Jedes Akkordeon-Element besteht aus einem eindeutigen Schlüssel, einem Trigger-Text mit der Frage und einem Content-Bereich mit der entsprechenden Antwort. Der Benutzer kann einzelne Items ausklappen, um die vollständige Antwort zu sehen.

  VORTEILE (ERKLAERE DEM CLIENT):
    Flexibilitaet: Reihenfolge und Inhalt frei konfigurierbar.
    Barrierefreiheit: ARIA-Attribute zentral im Root verwaltet.
    Wartbarkeit: Jedes Sub-Element ist isoliert testbar.


═══ SEQ-26: HANDOFF AKTIV ═══
