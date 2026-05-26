Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 2 der Engineering-Pipeline (UI/UX-Raumarchitektur) als praezise Raumkomposition zu implementieren. Layouts, Spacing und visuelle Hierarchie muessen mathematisch konsistent und designtechnisch auf Weltklasse-Niveau sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-22 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-21 → ZERO-BREAKAGE-PHASE-01.md
→ NÄCHSTE: SEQ-23 → ZERO-BREAKAGE-PHASE-03.md
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




═══ SSOT-DIREKTIVE: Der Code ist die EINZIGE Wahrheit. Wenn Dokumentation und Code divergieren, GEWINNT IMMER DER CODE. ═══
═══ AUTONOME VERKETTUNG: Diese Phase endet mit einem deterministischen Auto-Trigger zur naechsten Phase. Keine Pausen, keine Rueckfragen. ═══


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte visuelle Layout dieser Next.js/React/TypeScript-Website in ein architektonisches Meisterwerk zu transformieren, in dem jeder Pixel einem mathematischen Gesetz gehorcht, jeder Weißraum atmet und die räumliche Staffelung den Besucher das Gefühl gibt, einen dreidimensionalen Premium-Raum zu betreten. Da wir auf einem modernen Next.js Stack mit React Server Components, TypeScript Strict Mode und komponentenbasierter Architektur arbeiten, wird jedes visuelle System als typsicheres Design-Token-System, wiederverwendbare React-Komponente und systematische CSS-Architektur (Tailwind, CSS Modules oder CSS Custom Properties) implementiert. Dies ist Phase 2 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
DIRECTOR-ZUWEISUNG: DIRECTOR OF ENGINEERING (Pipeline 2)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Engineering (Waechter der Performance und Sicherheit).
Meldet an: Director General via .upgrade-state.md und .ai-architectural-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 4 (PPI): Performance-Impact-Praediktion bei JEDEM Code-Block.
  GESETZ 6 (Code-Review K1-K7): Architektur, Type Safety, Performance, Security, Design System, A11y, Polish.
  GESETZ 7 (Confiteor/RCA): Jeder Bug-Fix mit Symptom, Root Cause, Fix, Pattern, Prevention.
═══════════════════════════════════════════════════════════════════════════════

ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN CHIRURG, KEIN BULLDOZER.

Deine 5 Säulen:
1. READ-BEFORE-WRITE: Lies JEDE Datei VOLLSTÄNDIG bevor du sie änderst
2. SURGICAL INJECTION: Erweitere bestehenden Code, überschreibe ihn NIEMALS blind
3. ATOMIC VALIDATION: Nach JEDEM Task → npm run build && npm run lint && npx tsc --noEmit
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem Task
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md am Ende der Phase

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

MIGRATIONS-STRATEGIE FÜR PHASE 2: Token-System NEBEN bestehendem Code einführen. Bestehende Werte SCHRITTWEISE auf Tokens migrieren. KEINE bestehenden Styles löschen bis Token-Ersatz verifiziert. Visueller Vergleich bei JEDEM Schritt — die Seite muss IDENTISCH aussehen oder besser.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1:
- Router-Typ und Projektstruktur
- Alle Komponenten die Phase 1 erstellt/modifiziert hat
- Bestehende Patterns und Konventionen
- Den Handoff-Abschnitt von Phase 1

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Verifiziere Phase 1 Abschluss. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 8 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — ## Phase 2: UI/UX-Raumarchitektur & Design-Token-System
    — - [ ] Task 1: Spacing-Token-System
    — - [ ] Task 2: Layout-Primitives (Stack, Cluster, Grid, Container)
    — - [ ] Task 3: Spaltenraster-System
    — - [ ] Task 4: Elevation-System
    — - [ ] Task 5: Farb-Token-System (3-Tier: Primitive→Semantic→Component)
    — - [ ] Task 6: Self-Optimizing Loop


Schritt 0.3 — Pre-Flight Discovery für Styling:
1. Styling-Ansatz identifizieren: Tailwind? CSS Modules? styled-components? Mischung? Konfigurationen?
2. Bestehende Farbwerte: Grep nach Hex (#), RGB, HSL, Tailwind-Farben. JEDE Farbe dokumentieren.
3. Bestehende Abstandswerte: Grep nach margin, padding, gap, Tailwind Spacing-Klassen.
4. Bestehende Schatten: Grep nach box-shadow, shadow-Klassen.
5. Bestehende Breakpoints: Welche Media-Queries oder Tailwind-Breakpoints?
6. Bestehende CSS Custom Properties: Existieren --var() Definitionen?
7. Existierende CSS Custom Properties und Design Tokens?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🎨 Design-Token & Styling-Ansatz

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — DESIGN-TOKEN-SYSTEM ALS TYPSICHERE SINGLE SOURCE OF TRUTH
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: SPACING-TOKEN-SYSTEM

Schritt 1.1 — Token-Dateien erstellen:
src/styles/tokens/spacing.ts (oder gemäß bestehender Struktur).

14-stufige Spacing-Skala (Basiseinheit 4px):
- space-0: 0px
- space-1: 4px (Mikro: Icon-zu-Text)
- space-2: 8px (Fein: Label-zu-Input)
- space-3: 12px (Klein: Button-Padding)
- space-4: 16px (Basis: Card-Padding, Standard-Gap)
- space-5: 20px
- space-6: 24px (Komposition: Card-Element-Gap)
- space-7: 32px (Gruppen)
- space-8: 40px (Abschnitt)
- space-9: 48px (Sektion-Klein)
- space-10: 64px (Sektion-Mittel)
- space-11: 80px (Sektion-Groß)
- space-12: 96px (Zwischen Major-Sektionen)
- space-13: 128px (Maximum)

Als TypeScript const assertion UND CSS Custom Properties in globals.css.

Schritt 1.2 — Fluid-Spacing-Token:
Responsive Abstände mit clamp():
- --space-section: clamp(48px, 8vw, 96px)
- --space-container: clamp(16px, 4vw, 48px)
- --space-gap: clamp(16px, 2vw, 24px)

Schritt 1.3 — Tailwind-Integration:
Falls Tailwind: Erweitere spacing in tailwind.config.ts mit den Token-Werten.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: LAYOUT-PRIMITIVES

Schritt 2.1 — <Stack /> Komponente:
Vertikales Layout mit konsistentem gap. Props: gap (Spacing-Token), as (HTML-Element), align, className, children. Rendert flexbox column.

Schritt 2.2 — <Cluster /> Komponente:
Horizontales Layout mit Wrap. Props: gap, justify, align, wrap, className, children. Rendert flexbox row wrap.

Schritt 2.3 — <Grid /> Komponente:
CSS Grid. Props: columns (responsive), gap, minItemWidth, className, children.

Schritt 2.4 — <Container /> Komponente:
Maximale Breite + zentriert + responsive Padding. Props: size ('narrow'|'default'|'wide'|'full'), className, children.
- narrow: max-w-3xl (720px)
- default: max-w-6xl (1152px)
- wide: max-w-7xl (1280px)
- full: 100%

Schritt 2.5 — <Section /> Komponente erweitern:
Falls aus Phase 1 vorhanden: Erweitern mit spacing-Props (paddingY als Spacing-Token). Falls nicht: erstellen.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SPALTENRASTER-SYSTEM

Schritt 3.1 — 12-Spalten-Grid:
CSS Custom Properties:
- --grid-columns: 12
- --grid-gutter: clamp(16px, 2vw, 24px)
- --grid-margin: clamp(16px, 4vw, 48px)

Schritt 3.2 — Responsive Breakpoints:
- Mobile (<768px): 4 Spalten
- Tablet (768–1024px): 8 Spalten
- Desktop (>1024px): 12 Spalten

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ELEVATION-SYSTEM

5-stufiges Elevation-System als CSS Custom Properties:
- --elevation-0: none (Fläche auf Basis-Ebene)
- --elevation-1: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06) (Leicht angehoben: Cards)
- --elevation-2: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06) (Mittel: Hover-Cards, Dropdowns)
- --elevation-3: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) (Hoch: Modals, Popovers)
- --elevation-4: 0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04) (Maximum: Sticky-Header-Scroll)

Transitions: Elevation-Wechsel mit --duration-normal und --ease-out.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — FARB-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: 3-TIER-FARB-TOKEN-SYSTEM

Schritt 5.1 — Tier 1: Primitive Farben:
Reine Farbwerte ohne semantische Bedeutung. Benannt nach Farbe+Stufe:
--color-blue-50 bis --color-blue-900 (10 Stufen)
Für: Brand-Farbe, Neutral-Palette (Grau), Akzent-Farbe, Semantic (Erfolg, Warnung, Fehler, Info).

Schritt 5.2 — Tier 2: Semantische Farben:
Bedeutungsbasierte Aliase der Primitiven:
- --color-primary: var(--color-blue-600)
- --color-on-primary: var(--color-white)
- --color-surface: var(--color-gray-50)
- --color-on-surface: var(--color-gray-900)
- --color-error: var(--color-red-600)
- --color-success: var(--color-green-600)
Dies sind die semantischen Farben die von Komponenten konsumiert werden.

Schritt 5.3 — Tier 3: Komponenten-Farben:
Spezifische Farben für UI-Elemente:
- --color-button-primary-bg: var(--color-primary)
- --color-button-primary-text: var(--color-on-primary)
- --color-card-bg: var(--color-surface)
- --color-header-bg: var(--color-surface)

Schritt 5.4 — 80/15/5 Farbregel validieren:
- 80% Neutral (Hintergrund, Cards, Text): Weiß, Off-White, Grau-Palette
- 15% Brand-Farbe: CTAs, Links, Akzente, aktive States
- 5% Akzent: Besondere Highlights, Badges, Hover-States

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 2 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 6.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎨 Design-Token & Styling-Ansatz:
- Alle Token-Dateien und ihre Pfade
- Spacing-Skala mit allen 14 Stufen
- Layout-Primitives (Stack, Cluster, Grid, Container) mit Props
- Elevation-System
- Farb-Token-System (3 Tiers)
- Migrations-Fortschritt (welche Komponenten nutzen bereits Tokens)

Schritt 6.2 — .upgrade-state.md finalisieren.

Schritt 6.3 — Handoff an Phase 3:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 5 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — - Token-Dateipfade: [Pfade]
    — - Bestehende Schriftarten und Ladestrategien: [Details]
    — - Tailwind-Konfiguration-Erweiterungen: [Details]
    — - Layout-Primitives die Typografie-Tokens brauchen: [Liste]


═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 2
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ Website sieht IDENTISCH aus wie vor Phase 2 (oder besser)
□ 14-stufiges Spacing-Token-System als TS + CSS Custom Properties
□ Layout-Primitives: Stack, Cluster, Grid, Container als typsichere Komponenten
□ 12-Spalten-Grid responsive (4/8/12)
□ 5-stufiges Elevation-System
□ 3-Tier-Farb-Token-System (Primitive→Semantic→Component)
□ Kontraste ≥4.5:1 für alle Farbkombinationen
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 3


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-22 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — NEXT.JS CORE ARCHITEKTUR (AUS DOC 03/13)
═══════════════════════════════════════════════════════════════════════════════

SERVER-FIRST RENDERING PARADIGMA:
  Next.js App Router: Server Components als Default. "use client" NUR bei Interaktivitaet.
  Progressive Enhancement: Website MUSS mit deaktiviertem JavaScript funktionieren (SSR/SSG).
  Performance Budget: Lighthouse >= 90 in allen Kategorien.

PROJEKT-STRUKTUR-KONVENTION:
  src/app/              -> Pages & Layouts (App Router)
  src/components/ui/    -> Primitive Komponenten (Button, Input, Card, Modal)
  src/components/layout/ -> Strukturelle (Header, Footer, Sidebar, Container)
  src/components/sections/ -> Page Sections (Hero, Features, Pricing, FAQ)
  src/lib/              -> Utilities, Constants, Helpers (cn(), formatters)
  src/hooks/            -> Custom React Hooks
  src/types/            -> TypeScript Type Definitions
  tailwind.config.ts    -> Design Token Definitionen

SERVER VS CLIENT COMPONENTS:
  Server Component: Direktes async/await Data Fetching, KEINE Event Handlers, KEIN State.
  Client Component: Event Handlers, useState/useEffect, Browser APIs (window, localStorage).
  Kompositions-Pattern: <ServerComponent> -> <ClientInteractiveChild />

STATE MANAGEMENT:
  URL State:     searchParams, useRouter (filterbar, teilbar).
  Local UI:      useState/useReducer (komponentengebunden).
  Global Client: Zustand/Jotai (Theme, Sidebar, Toast).
  Server State:  React Query (async Data mit Background Refresh).

PERFORMANCE BEST PRACTICES:
  Code Splitting: Automatisch per Route. dynamic() fuer schwere Client-Komponenten.
  Streaming SSR:  <Suspense> mit Skeleton-Fallbacks fuer langsame Server-Komponenten.
  Static Gen:     generateStaticParams() fuer bekannte dynamische Routen.
  Bundle Analysis: ANALYZE=true next build mit @next/bundle-analyzer.
  Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1.

CN() UTILITY (PFLICHT IN JEDEM PROJEKT):
  import { clsx, type ClassValue } from "clsx"
  import { twMerge } from "tailwind-merge"
  export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-12 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-13)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-23 → ZERO-BREAKAGE-PHASE-03.md
   → Lese ZERO-BREAKAGE-PHASE-03.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-13


4. KNOWLEDGE-BASE UPDATE (PFLICHT):
   [ ] .project-knowledge-base.md → Neues Wissen aus dieser Phase extrahieren
   [ ] Architektur-Entscheidungen mit Begruendung dokumentieren
   [ ] Entdeckte Gotchas in [SECTION:GOTCHAS] eintragen
   [ ] [SECTION:CHANGELOG] mit Phase-Eintrag ergaenzen

5. SELF-OPTIMIZATION CHECK:
   [ ] Alle neuen Dateien klar und sprechend benannt
   [ ] Alle exportierten Funktionen/Komponenten haben JSDoc
   [ ] Neue Komponenten folgen dem etablierten Muster
   [ ] Code ist fuer einen LLM beim ERSTEN Lesen sofort verstaendlich
   [ ] Keine Magic Numbers ohne benannte Konstante
   [ ] Falls NEIN bei einem Punkt → Refactor BEVOR die Phase als abgeschlossen gilt

═══ PHASE SEQ-12 → SEQ-13: HANDOFF AKTIV ═══
