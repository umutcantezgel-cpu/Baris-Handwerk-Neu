Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 18 der Engineering-Pipeline (Third-Party Scripts) mit kontrolliertem Script-Management zu implementieren. Analytics, Tracking, Consent-Management und Script-Loading muessen performant und DSGVO-konform sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-38 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-37 → ZERO-BREAKAGE-PHASE-17.md
→ NÄCHSTE: SEQ-39 → ZERO-BREAKAGE-PHASE-19.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das Growth-Verhalten, Personalisierungs-Mechanismen und Conversion-Optimierungen des Systems zu verstärken.

ZERO-BREAKAGE PROTOCOL

5 PILLARS:
1. READ-BEFORE-WRITE: Alle Änderungen müssen vorherige Versionen lesen und verstehen
2. SURGICAL INJECTION: Minimale, gezielte Codeänderungen ohne Umstrukturierung
3. ATOMIC VALIDATION: npm run build && npm run lint && npx tsc --noEmit (JEDER commit)
4. STATE HANDOFF: Implizite Zustandsübergabe zwischen Tasks über Dokumentation
5. SELF-OPTIMIZING LOOP: Jede Task validiert sich selbst gegen Vorgänger

TECH-STACK CONSTRAINTS:
- Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- FORMSPREE + CALENDLY: einzige externe Integrationen
- VERBOTEN: Headless CMS, externe AI APIs, Sentry, Newsletter, i18n
- GOLDEN RULE: Code ist Single Source of Truth (SSOT)

═══════════════════════════════════════════════════════════════════

STEP 0: KONTEXT-SYNC UND PRE-FLIGHT-DISCOVERY

Lese alle existierenden Hooks, Middleware, GA4-Integration und Segment-Daten — AUDIT:
   - Suche src/middleware.ts: Muss visitor_type Cookie setzen basierend auf visitHistory
   - Verifiziere: visitor_type Cookie existiert mit Werten (new-visitor|returning|converted)
   - Verifiziere: x-visitor-segment Header wird gesetzt in Response (server-seitig)
   - Prüfe src/data/ auf vorhandene metrics.json und content-relations.ts:
     * Existieren? Falls nein: erstelle Template-Dateien (metrics.json mit leeren Werten)
     * Struktur: metrics.json = { projects_completed, active_clients, requests_this_week, satisfaction_rate }
     * content-relations.ts = ContentGraph { [contentId]: { related: string[], relatedScore: {} } }
   - KRITISCH: Alle Komponenten müssen Server-Side-Rendering (middleware header) nutzen, um FOUC zu vermeiden:
     * NextJS App Router: Komponenten mit 'use client' directive können nicht server-seitig Segment prüfen
     * Solution: useVisitorSegment() Hook nutzt Middleware-Header als SSR-Quelle
     * Validiere: Keine <PersonalizedHero> mit 'use client' — muss Server-Component sein

═══════════════════════════════════════════════════════════════════

BLOCK A — NUTZER-SEGMENTIERUNG UND BEHAVIORAL TARGETING

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: NUTZER-SEGMENT-ENGINE

Entwickle ein robustes Segmentierungs-System mit 6 Zielgruppen:
- new-visitor: Erstes Mal auf der Site (visitor_type=new, gesetzt im Middleware)
- returning-explorer: Rückkehrender Nutzer ohne Anfrage (visitor_type=returning, visited_pages >= 3)
- service-interested: Hat Service-Page besucht (entry_type=service_click)
- high-intent: Auf Kontakt/Calendly-Seite (entry_type=conversion_funnel)
- converted: Hat bereits kontaktiert (conversion_status=contacted)
- blog-reader: Hauptsächlich Blog-Content (entry_type=blog, visited_pages >= 5 blog)

Implementierung:
- Middleware (src/middleware.ts): Setze x-visitor-segment Header basierend auf Cookies
- Hook (src/hooks/useVisitorSegment.ts): Client-seitige Segmentierung mit Priority Rules
- GA4 Integration: Segment als custom_segment Dimension per event
- LocalStorage: Segment in userData Object speichern
- Validierung: Segment muss immer gesetzt sein, Default = new-visitor

Priority-Logik: converted > high-intent > service-interested > returning-explorer > blog-reader > new-visitor

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: PERSONALISIERTE INHALTE PRO SEGMENT

Erstelle Personalisierungs-Mapping für jeden Segment:

NUTZER-SEGMENT → HERO-HEADLINE (Beispiele):
- new-visitor: "Professionelle Webentwicklung für Ihr Geschäft"
- returning-explorer: "Willkommen zurück! Sehen Sie unsere neuen Services"
- service-interested: "[SERVICE_NAME] — Speziell für Ihr Projekt"
- high-intent: "Starten Sie noch heute. Kostenlose Beratung in 24h"
- converted: "Danke! Lesen Sie Case Studies ähnlicher Projekte"
- blog-reader: "Case Study: Von Strategie zur Realität"

NUTZER-SEGMENT → CTA-TEXT:
- new-visitor: "Kostenlose Anfrage stellen"
- returning-explorer: "Jetzt kontaktieren"
- service-interested: "Service anfragen"
- high-intent: "Termin buchen (kostenlos)"
- converted: "Nächstes Projekt planen"
- blog-reader: "Ähnliche Projekte sehen"

NUTZER-SEGMENT → TRUST-SIGNALS:
- new-visitor: "Über X abgeschlossene Projekte"
- service-interested: "Y Unternehmen vertrauen uns"
- high-intent: "Z erfolgreiche Anfragen diese Woche"
- converted: "Zufriedene Kunden in Europa & USA"

Komponenten-Architektur:
- <PersonalizedHero /> mit segment prop, SSR-rendered via middleware
- <PersonalizedCta /> mit action prop (contact, calendly, blog)
- <PersonalizedTrust /> mit segment-spezifischen Metriken
- Alle Komponenten: Flash of Unstyled Content vermeiden via server middleware header

Tracking: Jede Personalisierung loggen: personalization_view event mit segment dimension

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: BEHAVIORAL TARGETING

Implementiere 4 verhaltensspezifische Trigger-Systeme:

1. EXIT-INTENT (Desktop only):
   - Mouse verlässt Viewport oben (pageY < 20)
   - Zeige "Verlassen Sie die Seite?" Modal mit Angebot
   - Tracking: exit_intent_trigger event
   - Respektiere: prefers-reduced-motion → keine Animation

2. SCROLL-DEPTH TRIGGERING:
   - Bei 75% Scroll-Tiefe: Kontextuales CTA Banner einblenden
   - Beispiel: "Interessiert? Jetzt unverbindlich anfragen"
   - Tracking: scroll_depth_cta_75 event
   - Vermeide: mehrfaches Triggern (sessionStorage Flag)

3. TIME-BASED ENGAGEMENT:
   - Nach 60 Sekunden aktive Nutzung (nicht idle): Soft CTA anzeigen
   - Beispiel: "Fragen? Kontaktieren Sie uns live"
   - Tracking: time_engagement_cta_60s event
   - Reset bei jedem neuen Page View

4. RETURN-VISITOR RE-ENGAGEMENT:
   - Wenn visitor_type=returning: "Willkommen zurück" Banner mit Neuerungen
   - Nur 1x pro Session zeigen (sessionStorage)
   - Tracking: return_visitor_banner event

Accessibility:
- Alle Trigger respektieren prefers-reduced-motion CSS media query
- Modals/Banners müssen dismissbar sein
- Keyboard-Navigation für alle CTAs

═══════════════════════════════════════════════════════════════════

BLOCK B — DYNAMISCHER SOCIAL PROOF UND TRUST

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: DYNAMISCHER SOCIAL PROOF

Baue ein Metrics-System mit echten oder klar als aspirational gekennzeichneten Zahlen:

Datenquelle: src/data/metrics.json (manuell aktualisierbar oder Formspree Webhook Counter):
{
  "projects_completed": 42,
  "active_clients": 18,
  "requests_this_week": 7,
  "satisfaction_rate": 96,
  "last_request_timestamp": "2026-03-22T14:30:00Z"
}

Komponenten:
- <DynamicCounter /> mit Props: metric (string), label (string), format (number|percentage)
- Count-Up Animation triggered via IntersectionObserver (bei Element sichtbar)
- Animationsdauer: 1.2s, Easing: ease-out

Recency-Signale:
- Berechne aus last_request_timestamp: "Letzte Anfrage vor 2 Stunden"
- Format: "vor X [Minuten|Stunden|Tagen]"
- Update: alle 60 Sekunden mit requestAnimationFrame

Regeln:
- KEINE Fake-Daten — alle Zahlen müssen real sein ODER deutlich als Ziel gekennzeichnet ("Unser Ziel: X")
- Bei fehlenden Daten: Counter als disabled zeigen mit Loading-Skelett
- Validierung: Jede Metrik hat min/max bounds (z.B. satisfaction_rate 0-100)

Webhook Integration (optional):
- Formspree kann counter_incremented Event senden
- Middleware erhöht metrics.json value um 1
- Cached für 5 Minuten zur Performance-Optimierung

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: INTELLIGENTE CONTENT-EMPFEHLUNGEN

Entwickle Content-Relations-Graph für contextuelle Verknüpfung:

Dateistruktur: src/data/content-relations.ts
  IMPLEMENTIERUNGSANWEISUNG:
    Exportiere die folgenden Elemente: contentRelations.
    Umfang: Die Implementierung umfasst circa 10 Zeilen Logik.

Komponenten:
- <RelatedContent /> mit Props: currentId (string), limit (number, default 3)
- Sortierung: Nach relatedScore absteigend
- Format: 3-spaltig auf Desktop, 1-spaltig auf Mobile
- Fallback: Wenn keine Relations → zeige "Mehr Services"

Einsatzorte:
- Am Ende von Blog-Posts: "Das könnte Sie auch interessieren"
- In Service-Pages: Cross-Service-Empfehlungen (z.B. Web → SEO)
- Segment-aware: High-intent bekommt CTA-Heavy Empfehlungen

Tracking:
- recommendation_click event: {contentId, recommendedId, rank, segment}
- Nutze für Optimierung des Relation-Graphen monatlich

═══════════════════════════════════════════════════════════════════

BLOCK C — INTERAKTIVE CONVERSION-TOOLS

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: INTERAKTIVE ELEMENTE

Implementiere 3 interaktive Tools:

1. PREIS-KALKULATOR:
   - Input: Projekt-Komplexität (einfach/mittel/komplex), Dauer (1-12 Monate)
   - Output: Geschätzter Preis-Range (z.B. "3.000 - 8.000 EUR")
   - Segment-Spezifik: service-interested sieht detaillierte Breakdown
   - Ende: "Lassen Sie sich individuell beraten" CTA zu Formspree
   - Tracking: calculator_start, calculator_result, calculator_cta_click

2. SERVICE-QUIZ:
   - 4 Fragen: "Was ist Ihr Hauptziel?", "Welche Technologie?", "Budget?", "Timeline?"
   - Logik: Antworten → Score pro Service (Web, SEO, App, Beratung)
   - Output: "Wir empfehlen: Web Development + SEO"
   - Ende: "Termin buchen" Button zu Calendly mit query params (service, recommendationType)
   - Tracking: quiz_start, quiz_complete, quiz_result, quiz_cta_click

3. BEFORE/AFTER SLIDER:
   - Case Study Visuals (alte Website ↔ neue Website)
   - Verwendung: src/components/CaseStudySlider.tsx
   - Mobile-friendly: Touch-Swipe oder Slider-Control
   - Tracking: case_study_slider_view, slider_interaction

Allgemeine Regeln:
- Alle Tools müssen Loading-State haben (Skeleton oder Spinner)
- Alle Ergebnisse müssen shareable sein via Social/Copy (tracking: tool_result_share)
- Error Handling: Validiere Input, zeige User-freundliche Errors
- Accessibility: Full keyboard navigation, ARIA labels

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: STICKY CTA UND ENGAGEMENT-TRIGGER

Baue Sticky-CTA-Bar mit Smart-Timing-Logik:

Komponente: <StickyCta />

Sichtbarkeit:
- Desktop (>=1024px): Immer in rechter Sidebar, Fixed Position
- Tablet (768-1023px): Nach 30% Scroll, Sticky Bottom Bar
- Mobile (<768px): Nach 30% Scroll, Sticky Bottom Bar

Smart-Timing:
- NICHT anzeigen wenn: Nutzer bereits Formspree besucht hat (sessionStorage flag)
- NICHT anzeigen wenn: Nutzer Calendly geöffnet hat (sessionStorage flag)
- RESET: Bei jedem neuen Tab/Window (aber nicht bei Page Reload)
- Variante pro Segment: high-intent zeigt "Jetzt buchen", new-visitor zeigt "Kostenlos anfragen"

Dismissal:
- Close-Button: X in rechter oberer Ecke
- Speichert Dismissal in sessionStorage (key: sticky_cta_dismissed)
- Nicht auf demselben Seitenbesuch erneut anzeigen
- Bei neuem Tab → erneut zeigen (neuer Session)

A/B Testing Integration:
- Props: variant (control|variant_a|variant_b)
- Tracking: sticky_cta_impression, sticky_cta_click, sticky_cta_dismiss
- Dimensionen: variant, segment, scroll_depth_on_show

═══════════════════════════════════════════════════════════════════

BLOCK D — OPTIMIERUNGSKREISLAUF

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: SYSTEMATISCHER OPTIMIERUNGSKREISLAUF

Etabliere monatliche Optimization-Cycle:

PROZESS:
1. Analyze (Woche 1): Sammle Daten aus GA4, Vercel Analytics, Form-Funnel, Scroll-Depth
2. Hypothesize (Woche 1-2): Identifiziere Top-3 Optimierungs-Kandidaten
3. Test (Woche 2-3): A/B Test via Phase 13 Experiment-System
4. Implement (Woche 3): Code-Änderungen, Validierung, Deployment
5. Measure (Woche 4): Resultat-Analyse, Dokumentation, nächster Zyklus

Datenquellen:
- GA4: conversion_rate, exit_rate, scroll_depth_distribution, user_journey_paths
- Vercel Analytics: Core Web Vitals (INP, CLS, LCP) pro Seite
- Form Funnel: form_view → form_start → form_submit (drop-off % pro Step)
- Rage Clicks: Detektiere doppel-klicks (sessionStorage counter, event tracking)
- Heatmaps: Scroll-Depth (Percentile Distribution), Click-Density pro Element

Dokumentation: src/data/optimization-log.ts
  IMPLEMENTIERUNGSANWEISUNG:
    Exportiere die folgenden Elemente: optimizationLog.
    Umfang: Die Implementierung umfasst circa 12 Zeilen Logik.

Priorisierung: ICE-Score für jeden Kandidaten
- Impact: Estimated % improvement in conversion rate (1-100)
- Confidence: Datengütigkeit (0-1)
- Effort: Dev effort in days (1-21)
- ICE = (Impact × Confidence) / Effort

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: CONVERSION-RATE-BENCHMARKS

Definiere Baseline-Metriken und Zielwerte:

CONVERSION PATHS:
1. Blog-Post → Related-Content Click: Baseline 8%, Ziel 12%
2. Homepage → Service-Seite Klick: Baseline 6%, Ziel 10%
3. Service-Seite → Form-View: Baseline 35%, Ziel 50%
4. Form-View → Form-Submit: Baseline 22%, Ziel 30%
5. Calendly-Link → Booking: Baseline 18%, Ziel 25%

Alert-Schwellen:
- Wenn conversion rate WoW um >20% fällt → Incident-Alert (GA4 Scheduled Report)
- Wenn Form-Submit-Rate unter 18% fällt → Investigate: UX-Issue oder Form-Bug?
- Wenn Calendly-Booking unter 15% fällt → A/B Test Calendly-Platzierung

Tracking je Conversion-Path:
- Jeder Step ist ein GA4 Event mit path_step Dimension
- Funnel-View: GA4 Conversion Paths Report monatlich reviewen
- Goal: Keine Step sollte >30% Abbruch haben

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN UND HANDOFF

Aktualisiere nach Phase 18 Implementierung:

Dateistruktur aktualisieren:
- src/hooks/useVisitorSegment.ts (neu)
- src/hooks/useBehavioralTrigger.ts (neu)
- src/components/PersonalizedHero.tsx (neu)
- src/components/PersonalizedCta.tsx (neu)
- src/components/DynamicCounter.tsx (neu)
- src/components/RelatedContent.tsx (neu)
- src/components/PriceCalculator.tsx (neu)
- src/components/ServiceQuiz.tsx (neu)
- src/components/StickyCta.tsx (neu)
- src/data/metrics.json (neu)
- src/data/content-relations.ts (neu)
- src/data/optimization-log.ts (neu)
- src/middleware.ts (erweitert: visitor segment header)

Kontext-Übergabe an Phase 19:
- Alle Segmente sind stabil und validiert
- Personalisierungs-System ist produktiv (0 Flash-Issues)
- Behavioral Triggers respektieren Accessibility
- Optimization-Loop läuft automatisch monatlich
- GA4 Events sind konsistent (überprüft in Phase 19)

═══════════════════════════════════════════════════════════════════

FINALE VALIDIERUNG PHASE 18

✓ Middleware setzt x-visitor-segment Header korrekt (0 undefined)
✓ useVisitorSegment() Hook funktioniert ohne Race Conditions
✓ 6 Segmente sind definiert und haben alle >80% Coverage
✓ PersonalizedHero wird Server-seitig gerendert (kein FOUC)
✓ PersonalizedCta verschiedet je Segment (QA: manuell testen)
✓ DynamicCounter zählt smooth und respektiert prefers-reduced-motion
✓ RelatedContent zeigt Recommendations mit Score >0.7
✓ PriceCalculator validiert Input und zeigt Errors korrekt
✓ ServiceQuiz Score-Logik berechnet Top-Service korrekt
✓ StickyCta dismissal speichert in sessionStorage und zeigt nicht 2x
✓ Exit-Intent Modal zeigt nur auf Desktop (prüfe viewport width)
✓ Scroll-Depth Trigger zeigt bei 75%, sessionStorage verhindert Duplikate
✓ Time-Based CTA zeigt nach 60s Activity (prüfe event logging)
✓ Return-Visitor Banner zeigt nur 1x (sessionStorage Flag)
✓ Alle GA4 Events sind namenskonform und haben correct dimensions
✓ optimization-log.ts hat mind. 3 Einträge (Template-Beispiele)
✓ Conversion-Path Metriken sind in GA4 als Goals definiert
✓ npm run build kompiliert fehlerfrei (0 TypeScript Errors)
✓ npm run lint findet keine Violations (Eslint + Prettier)
✓ npx tsc --noEmit erfolgreich (Strict Mode)

═══════════════════════════════════════════════════════════════════


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

CHAIN-EXIT-FOOTER ═══ SEQ-38 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-28 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-29)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-39 → ZERO-BREAKAGE-PHASE-19.md
   → Lese ZERO-BREAKAGE-PHASE-19.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-29

═══ PHASE SEQ-28 → SEQ-29: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-28 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-28 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-28 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-39 → ZERO-BREAKAGE-PHASE-29.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-29
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-29 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-28: Growth & Personalisierung ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-28 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-29)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-39 → ZERO-BREAKAGE-PHASE-29.md
   → Lese ZERO-BREAKAGE-PHASE-29.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-29

═══ SEQ-29: HANDOFF AKTIV ═══
