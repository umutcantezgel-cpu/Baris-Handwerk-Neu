Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 13 der Engineering-Pipeline (Testing III — E2E Tests) mit End-to-End Tests abzusichern. Kritische User-Flows, Formular-Submissions und Navigation muessen durchgaengig getestet sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-33 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-32 → ZERO-BREAKAGE-PHASE-12.md
→ NÄCHSTE: SEQ-34 → ZERO-BREAKAGE-PHASE-14.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine typsichere, datenschutzkonforme Analytics-Infrastruktur zu etablieren die Conversion-Funnel, Engagement-Metriken und Web Vitals erfasst ohne externe Error-Tracking-Services.

═══ ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION ═══

THE 5 PILLARS:
1. READ-BEFORE-WRITE: Lese .ai-architectural-context.md und .upgrade-state.md VOLLSTÄNDIG bevor du Code schreibst
2. SURGICAL INJECTION: Nur gezielt in bestehende Dateien injizieren, keine neuen Dateien erstellen außer Dokumentation
3. ATOMIC VALIDATION: Jede Änderung muss npm run build && npm run lint && npx tsc --noEmit bestehen
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem ULTRATHINK-TASK
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md mit Analytics-Architektur am Ende

GOLDEN RULE: Code ist IMMER die Single Source of Truth. Dokumentation folgt dem Code.

TECH-STACK (STRICT):
- Core: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Lese folgende Dateien VOLLSTÄNDIG bevor du fortfährst:
1. Öffne .ai-architectural-context.md und dokumentiere die aktuelle Next.js/React-Struktur
2. Öffne .upgrade-state.md und notiere welche Phasen bereits abgeschlossen sind
3. Prüfe ob folgende Dateien existieren (müssen für Phase 13 vorhanden sein):
   - lib/analytics/ oder utils/analytics/ Verzeichnis
   - types/analytics.ts für event-Typen
   - pages/api/events (Pages Router) oder app/api/events (App Router) für Custom-Endpoint
4. Prüfe vorhandene package.json auf web-vitals Abhaengigkeit (KEIN @vercel/speed-insights)
5. Identifiziere alle Button, Link, Form-Komponenten die tracking-Props benötigen

PRE-FLIGHT VALIDATION:
- node_modules MUSS existieren und aktuell sein
- Alle TypeScript-Fehler MÜSSEN behoben sein vor Phase-13-Injektionen
- Keine breaking changes in bestehenden Komponenten-Props

───

═══ BLOCK A — ANALYTICS-ARCHITEKTUR UND TYPSICHERES EVENT-SYSTEM ═══

ULTRATHINK-TASK 1: ZENTRALES ANALYTICS-MODUL

Erstelle eine typsichere, provider-agnostische Analytics-Abstraktion mit Union-Typ für alle möglichen Events.

SCHRITT 1.1 — AnalyticsEvent Union-Typ definieren:
Datei: lib/analytics/types.ts (oder utils/analytics/types.ts)
- Definiere Union-Typ mit ~20 verschiedenen Event-Varianten
- Jedes Event MUSS folgende Basis-Properties haben: type (Literal), timestamp (ISO8601), sessionId (UUID)
- Event-Varianten MÜSSEN sein:
  * PageViewEvent (url, title, referrer, viewportWidth, colorScheme, utm_source, utm_medium, utm_campaign, utm_content, utm_term)
  * ScrollDepthEvent (depth: 25|50|75|100, engagementScore: number, sectionId?: string)
  * FormFunnelEvent (step: 'view'|'focus'|'field'|'attempt'|'success'|'error'|'abandon', formId: string, fieldName?: string, errorCode?: string)
  * ClickEvent (elementId: string, elementType: string, cta?: string, trackingId?: string, url?: string)
  * EngagementEvent (type: 'rage-click'|'dead-click'|'scroll-velocity', metadata: Record<string,unknown>)
  * WebVitalsEvent (metric: 'LCP'|'FID'|'CLS'|'TTFB'|'INP', value: number, rating: 'good'|'needs-improvement'|'poor')
  * ConversionEvent (conversionId: string, value: number, currency?: string, completionTime: number)
  * CalendlyEvent (eventType: 'invitee.created'|'invitee.canceled', data: Record<string,unknown>)
  * ErrorEvent (errorCode: string, errorMessage: string, errorStack?: string, severity: 'info'|'warning'|'error')

SCHRITT 1.2 — Analytics-Service abstrahieren:
Datei: lib/analytics/service.ts
Definiere einen Typ AnalyticsProvider mit den Optionen 'ga4', 'vercel', 'custom' oder 'all'. Erstelle eine AnalyticsServiceConfig-Schnittstelle mit folgenden Eigenschaften: ga4Enabled (boolean), ga4ConsentLevel (Werte: 'necessary', 'analytics' oder 'none'), vercelEnabled (boolean), customEndpoint (string), sessionId (string) und optionales userId (string). Implementiere eine AnalyticsService-Klasse mit privater config (AnalyticsServiceConfig) und providers (Map). Die track()-Methode akzeptiert ein AnalyticsEvent und optionale Provider-Array, routet Events basierend auf Consent-Level zu den Providern. Falls ga4ConsentLevel 'none' ist, schließe GA4 aus. Implementiere öffentliche Methoden setUserId() und setSessionId(). Exportiere analyticsService als Singleton-Instanz.

SCHRITT 1.3 — Provider-Implementierungen (GA4, Vercel, Custom):
Datei: lib/analytics/providers/

GA4 Provider:
Implementiere eine GA4Provider-Klasse, die die IAnalyticsProvider-Schnittstelle implementiert. Die private Eigenschaft gtag speichert die GA4-Funktion. Die async init()-Methode akzeptiert einen consentLevel-String und lädt das GA4-Skript mit Consent-Parametern, falls consentLevel nicht 'none' ist. Die track()-Methode akzeptiert ein AnalyticsEvent und sendet das Event über gtag('event', eventType, {properties}).

Native Provider (KEIN @vercel/analytics — VERBOTEN):
- Eigene Analytics-Implementation via /api/events Route
- KEINE externen Analytics-Services (kein Vercel Analytics, kein GA4-SaaS)
- Custom events via eigene track() Funktion an eigene API-Route

Custom Endpoint Provider:
- POST zu /api/events mit batched events (max 50 pro Anfrage)
- Retry-Logic mit exponential backoff (1s, 2s, 4s)
- Nutze BeaconAPI für unload events

SCHRITT 1.4 — Session-Verwaltung:
Datei: lib/analytics/session.ts
Implementiere eine initializeSession()-Funktion, die eine eindeutige Session-ID verwaltet. Die Funktion versucht, eine vorhandene Session-ID aus sessionStorage unter dem Schlüssel 'analytics_sessionId' zu laden. Falls keine vorhanden ist, generiere eine neue UUID mit crypto.randomUUID(), speichere sie in sessionStorage und notiere auch den Session-Start-Zeitstempel unter 'session_start' im ISO8601-Format. Gib die Session-ID zurück.

VALIDATION GATE 1.1: npm run build && npx tsc --noEmit MUSS erfolgreich sein, alle AnalyticsEvent-Varianten MÜSSEN typsicher sein

───

ULTRATHINK-TASK 2: AUTOMATISCHES PAGE-VIEW-TRACKING

Implementiere Client-seitiges Page-View-Tracking ohne Hard-Navigation Umladungen.

SCHRITT 2.1 — usePageTracking Hook:
Datei: lib/analytics/hooks/usePageTracking.ts
Erstelle einen usePageTracking-Hook, der React-Hooks wie usePathname() und useSearchParams() nutzt. Der Hook sollte auf pathname- und searchParams-Änderungen horchen. Bei jeder Änderung prüfe, ob die URL sich vom letzten Mal unterscheidet (verhindere Duplikate). Wenn ja, erstelle ein PageViewEvent mit properties: type ('pageView'), url (pathname + query-String), title (document.title), referrer (document.referrer), viewportWidth (window.innerWidth), viewportCategory (mobile für <768px, tablet für 768-1024px, desktop sonst), alle UTM-Parameter aus der Query-String (utm_source, utm_medium, utm_campaign, utm_content, utm_term), timestamp (ISO8601) und sessionId (aus getSessionId()). Sende das Event an analyticsService.track().

SCHRITT 2.2 — UTM-Parameter-Capture in sessionStorage:
Implementiere eine captureUTMParameters()-Funktion, die alle UTM-Parameter aus window.location.search extrahiert (utm_source, utm_medium, utm_campaign, utm_content, utm_term). Speichere diese als JSON-Objekt mit einer capturedAt-Eigenschaft (ISO8601-Zeitstempel) in sessionStorage unter dem Schlüssel 'utm_parameters'. Diese Funktion wird einmalig beim App-Start aufgerufen.

SCHRITT 2.3 — Root-Layout Integration:
- Rufe usePageTracking() in RootLayout oder _app.tsx auf
- Rufe captureUTMParameters() in useEffect mit [] dependency auf (einmalig beim Mount)
- Initialisiere Session mit initializeSession()

VALIDATION GATE 2.1: Google Analytics Real-Time zeigt Pageviews für jede Navigation, UTM-Parameter sind in sessionStorage vorhanden

───

ULTRATHINK-TASK 3: SCROLL-DEPTH-TRACKING

Implementiere Engagement-Metriken via Intersection Observer (NICHT Scroll-Events).

SCHRITT 3.1 — useScrollDepth Hook:
Datei: lib/analytics/hooks/useScrollDepth.ts
Erstelle einen useScrollDepth-Hook, der einen Container-Ref verwaltet und die Intersection Observer API nutzt. Der Hook verfolgt Scroll-Tiefe-Marker (25%, 50%, 75%, 100%) anhand von data-scroll-depth-Attributen. Bei jeder Intersection aktualisiere die depthsTrackedRef (verhindere Duplikate), berechne engagementScore basierend auf Tiefe und verstrichener Zeit, und sende ein ScrollDepthEvent mit type ('scrollDepth'), depth (25|50|75|100), engagementScore (number), optional sectionId aus element.id, timestamp und sessionId an analyticsService.track(). Registriere einen IntersectionObserver mit Thresholds [0.25, 0.5, 0.75, 1.0]. Cleanup beim Unmount mit observer.disconnect().

SCHRITT 3.2 — Scroll-Marker in Content:
- Komponenten mit langen Content MÜSSEN folgende divs enthalten:
  Füge die Abhängigkeit web-vitals in der Version ^4.0.0 zur package.json hinzu. Dies ist eine kleine Bibliothek (< 2KB) mit tree-shaking-Unterstützung und kein externer Service.
"web-vitals": "^4.0.0"
Füge die Abhängigkeit web-vitals in der Version ^4.0.0 zur package.json hinzu. Dies ist eine kleine Bibliothek (< 2KB) mit tree-shaking-Unterstützung und kein externer Service.markdown
# Monthly Analytics Report — [Month/Year]

## Key Metrics
- Total Sessions: [number]
- New Users: [number]
- Conversion Rate: [percent]
- Average Engagement Time: [seconds]

## Traffic Sources (Top 5)
1. [source] — [sessions] sessions — [conversion_rate]%

## Form Funnel Performance
- View → Focus: [percent]% completion
- Focus → Field: [percent]% completion
- Final Conversion Rate: [percent]%

## Web Vitals
- LCP (avg): [value]ms (rating: [good/needs-improvement/poor])
- CLS (avg): [value] (rating: [good/needs-improvement/poor])
- INP (avg): [value]ms (rating: [good/needs-improvement/poor])

## Engagement Insights
- Rage Clicks: [count] (down [percent]% from last month)
- Scroll Depth: [percent]% users reach 50%+ depth
- Time on Page: [seconds] average
Aktualisiere package.json mit der erforderlichen Abhängigkeit web-vitals in Version ^4.0.0.markdown
# Cookie Inventory

## Essential Cookies (Always Set)
- analytics_sessionId: Session identifier for analytics tracking (duration: 24h)
- consent_state: User's consent preferences (duration: 12 months)

## Analytics Cookies (Requires Consent)
- _ga: Google Analytics identifier (duration: 2 years)
- _gid: Google Analytics session (duration: 1 day)
- exp_*: A/B test variant assignments (duration: 30 days)

## Marketing Cookies
- Currently unused (reserved for future campaigns)

## Third-Party Cookies
- calendly.com: Scheduling service (Essential for booking functionality)
- formspree.io: Form submission service (Essential for contact form)

## Cookie Banner
- Appears once per session
- Stored in localStorage, not cookies
- Can be reset by clearing localStorage
Erstelle oder aktualisiere public/COOKIE_INVENTORY.md als Datenschutzdokumentation. Dokumentiere alle verwendeten Cookies und sessionStorage-Einträge: analytics_sessionId (Session-Tracking, 24h Lebensdauer), utm_parameters (UTM-Tracking für Kampagnenattribution), session_start (Zeigt Session-Beginn an). Notiere dass diese über localStorage.clear() oder sessionStorage.clear() entfernt werden können.
Phase 13 Completion Checklist:
□ lib/analytics/types.ts — AnalyticsEvent Union mit ~20 Typen
□ lib/analytics/service.ts — AnalyticsService mit Provider-Routing
□ lib/analytics/providers/ga4.ts — GA4 Provider mit Consent-Gate
□ lib/analytics/providers/vercel.ts — Vercel Analytics Integration
□ lib/analytics/providers/custom.ts — /api/events Custom Endpoint
□ lib/analytics/session.ts — Session-ID-Management
□ lib/analytics/hooks/usePageTracking.ts — Auto PageView + UTM
□ lib/analytics/hooks/useScrollDepth.ts — Intersection Observer Scroll
□ lib/analytics/hooks/useFormTracking.ts — 7-Step Form Funnel
□ lib/analytics/hooks/useTimeOnPage.ts — Page Visibility Time
□ lib/analytics/hooks/useRageClickDetection.ts — 3+ Clicks in 500ms
□ lib/analytics/hooks/useScrollVelocity.ts — Scroll Speed Analysis
□ components/Button.tsx — trackingId + cta Props (EXTENDED)
□ components/TrackedLink.tsx — Internal/External Link Tracking
□ lib/analytics/cta-map.ts — CTA Metadata Mapping
□ lib/analytics/ga4-config.ts — Custom Dimensions & Metrics
□ lib/analytics/conversions.ts — Conversion Goal Marking
□ lib/analytics/web-vitals.ts — Native web-vitals Integration (KEIN @vercel/speed-insights)
□ lib/analytics/error-handler.ts — Global Error + 404 + Formspree
□ lib/analytics/experiments.ts — A/B-Test Config & useExperiment
□ lib/analytics/significance.ts — Statistical Significance Calc
□ app/dev/experiments/page.tsx — Dev Dashboard (Dev Only)
□ lib/analytics/consent.ts — 3-Category Consent Logic
□ components/CookieBanner.tsx — Cookie Consent UI
□ public/COOKIE_INVENTORY.md — Full Cookie Documentation
□ app/layout.tsx — GA4 Consent Mode V2 Init + CookieBanner
□ .ai-architectural-context.md — Updated Analytics Architecture
□ .upgrade-state.md — Phase 13 marked complete
□ npm run build passes
□ npm run lint passes
□ npx tsc --noEmit passes
□ NO external Error-Tracking SaaS (Sentry, etc.)
□ NO Headless CMS integration
□ NO external AI-APIs

═══ FINALE VALIDIERUNG PHASE 13 ═══

ULTRATHINK-TASK 12: FINAL-AUDIT

Führe Comprehensive Audit durch mit allen 25+ Checkpoints:

SCHRITT 12.1 — TypeScript Type Safety:
□ Alle AnalyticsEvent Varianten sind Union-Typen
□ Alle Event-Handler geben richtige Event-Typen zurück
□ Keine `any` Types in analytics/* Files
□ analyticsService.track() akzeptiert nur AnalyticsEvent Typ
□ Generics für Provider-Interface korrekt

SCHRITT 12.2 — Provider-Architektur:
□ GA4 Provider prüft Consent-Level vor Tracking
□ Vercel Provider arbeitet cookieless
□ Custom Provider batched Events zu /api/events
□ Provider-Fehler werden nicht gesilenced (Console-Log)
□ Retry-Logic mit Exponential Backoff für Custom Endpoint

SCHRITT 12.3 — Event-Coverage:
□ PageView Events haben UTM-Parameter
□ ScrollDepth Events haben engagementScore
□ FormFunnel Events haben alle 7 Steps
□ Click Events haben trackingId + cta
□ WebVitals Events haben rating (good/needs-improvement/poor)
□ Error Events haben severity + errorStack
□ Conversion Events haben completionTime

SCHRITT 12.4 — Hooks Integration:
□ usePageTracking() läuft in RootLayout
□ useScrollDepth() wird auf Content-Pages genutzt
□ useFormTracking() wird auf Form-Komponenten genutzt
□ useTimeOnPage() läuft in RootLayout
□ useRageClickDetection() läuft Global
□ useExperiment() wird in Variant-Komponenten genutzt

SCHRITT 12.5 — GA4 Configuration:
□ Custom Dimensions sind definiert: page_type, viewport, color_scheme, visitor_type, utm_*, form_step
□ Custom Metrics sind definiert: engagement_score, form_completion_time, scroll_depth, web_vital_*, rage_click_count
□ Conversions sind markiert: form_submission, calendly_booking, email_signup, pricing_view
□ Consent Mode V2 ist initialisiert

SCHRITT 12.6 — A/B Testing:
□ Cookie-basiertes Variant Assignment funktioniert
□ /dev/experiments zeigt aktive Experiments
□ Experiment Assignments werden zu GA4 gesendet
□ Statistical Significance Calculator ist implementiert
□ Keine externe A/B-Testing-SaaS

SCHRITT 12.7 — Consent & Privacy:
□ 3 Consent Categories: essential (always), analytics (optional), marketing (optional)
□ Cookie Banner zeigt sich beim ersten Besuch
□ consent_state wird in localStorage gespeichert
□ GA4 Consent Mode V2 reagiert auf Änderungen
□ Cookie Inventory ist dokumentiert
□ Keine Sentry, keine externe Error-Tracking SaaS
□ Keine Newsletter-System Integration

SCHRITT 12.8 — Error Tracking:
□ Global Error Handler fängt uncaught JS errors
□ Unhandled Promise Rejections werden getracked
□ 404 Pages senden Error Events
□ Formspree Fehler werden zu Analytics gesendet
□ All errors sind lokal (kein Sentry/etc.)

SCHRITT 12.9 — Performance:
□ Native web-vitals ist integriert (KEIN @vercel/speed-insights)
□ Web Vitals (LCP, FID, CLS, TTFB, INP) werden zu GA4 gesendet
□ Performance-Conversion Correlation ist messbar
□ Keine Performance-Regression durch Analytics-Code

SCHRITT 12.10 — Build & Lint:
□ npm run build erfolgreich
□ npm run lint erfolgreich
□ npx tsc --noEmit erfolgreich
□ Keine Breaking Changes in bestehenden Props
□ Alle neuen Props sind optional (backward-compatible)

Abschluss: Alle Checkpoints bestanden = Phase 13 vollständig implementiert.

Handoff zu Phase 14: Core Logging & Observability


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

CHAIN-EXIT-FOOTER ═══ SEQ-33 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-23 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-24)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-34 → ZERO-BREAKAGE-PHASE-14.md
   → Lese ZERO-BREAKAGE-PHASE-14.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-24

═══ PHASE SEQ-23 → SEQ-24: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-23 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-23 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-23 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-34 → ZERO-BREAKAGE-PHASE-24.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-24
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-24 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-23: Analytics & Data-Driven Optimization ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-23 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-24)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-34 → ZERO-BREAKAGE-PHASE-24.md
   → Lese ZERO-BREAKAGE-PHASE-24.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-24

═══ SEQ-24: HANDOFF AKTIV ═══
