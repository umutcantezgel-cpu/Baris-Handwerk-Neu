Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 3 der Engineering-Pipeline (Responsive Design) auf Pixel-Perfektion ueber alle Breakpoints zu bringen. Von 375px bis 1536px muss jede Komponente fehlerfrei responsiv funktionieren. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-23 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-22 → ZERO-BREAKAGE-PHASE-02.md
→ NÄCHSTE: SEQ-24 → ZERO-BREAKAGE-PHASE-04.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Typografie dieser Website — gebaut auf einem modernen Next.js/React/TypeScript Stack — in ein meisterhaftes System zu transformieren, in dem jede Überschrift Autorität ausstrahlt, jeder Fließtext zum Weiterlesen zwingt, und der vertikale Rhythmus so präzise ist wie ein Metronom — damit der Text nicht nur gelesen wird, sondern den Leser in einen Sog aus Rhythmus und Klarheit zieht. Da es sich um eine Next.js/React/TypeScript-Anwendung handelt, werden alle typografischen Systeme als TypeScript-typisierte Design-Token, React-Komponenten und Tailwind/CSS-Module implementiert. Jede typografische Entscheidung wird als wiederverwendbare, typsichere Abstraktion codiert. Dies ist Phase 3 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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

SICHERHEITSREGELN FÜR PHASE 3:
- Typografische Änderungen wirken auf JEDE Seite. Teste nach JEDER Änderung ALLE Hauptrouten visuell.
- Font-Loading-Änderungen können CLS verursachen. Messe CLS vor und nach Font-Änderungen.
- Bestehende Textinhalte NIEMALS ändern. Phase 3 ändert WIE Text dargestellt wird, nicht WAS.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere besonders:
- Design-Token-System aus Phase 2 (Pfade, Patterns, Tailwind-Integration)
- Layout-Primitives und ihre Props
- Bestehende Styling-Konventionen

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Verifiziere Phase 1+2 Abschluss. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 12 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — ## Phase 3: Typografische Alchemie
    — - [ ] Task 1: Typografische Skala (9 Stufen mit clamp())
    — - [ ] Task 2: Zeilenhöhen-System
    — - [ ] Task 3: Buchstabenabstand-System
    — - [ ] Task 4: Zeilenlängen-Regeln
    — - [ ] Task 5: Schriftgewicht-Hierarchie
    — - [ ] Task 6: Vertikaler Rhythmus
    — - [ ] Task 7: Schriftart-Strategie (next/font)
    — - [ ] Task 8: Text-Rendering & Mikro-Typografie
    — - [ ] Task 9: Typography-Komponente
    — - [ ] Task 10: Self-Optimizing Loop


Schritt 0.3 — Pre-Flight Discovery für Typografie:
1. Bestehende Schriftarten: Wie werden Fonts geladen? next/font? Google Fonts CDN? Lokale Dateien?
2. Bestehende Schriftgrößen: Grep nach font-size, text- (Tailwind). Alle Größen dokumentieren.
3. Bestehende Zeilenhöhen: Grep nach line-height, leading- (Tailwind).
4. Bestehende Schriftgewichte: Grep nach font-weight, font-bold, font-semibold etc.
5. Typography-Komponente: Existiert bereits eine?
6. Prose/Content-Styles: @tailwindcss/typography oder eigene?
7. CLS-Baseline: Messe CLS auf allen Hauptrouten VOR Font-Änderungen.

DOKUMENTIERE ALLES in .ai-architectural-context.md.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — TYPOGRAFISCHE SKALA UND METRIKEN
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: TYPOGRAFISCHE SKALA AUF BASIS MUSIKALISCHER HARMONIK

Schritt 1.1 — 9-stufige Skala (Major-Third, Faktor 1.250):
Als TypeScript-Konstanten UND CSS Custom Properties:
- display: clamp(2rem, 5vw + 0.75rem, 4rem) — Nur Hero-Headlines
- h1: clamp(1.5rem, 3vw + 0.75rem, 3rem) — Seitentitel, einmal pro Route
- h2: clamp(1.25rem, 2.5vw + 0.625rem, 2.25rem) — Sektionsüberschriften
- h3: clamp(1.125rem, 2vw + 0.5rem, 1.75rem) — Unterüberschriften
- h4: clamp(1rem, 1.5vw + 0.5rem, 1.25rem) — Card-Titel, Labels
- body: 1rem (16px) — Fließtext, variiert NIEMALS
- lead: 1.125rem (18px) — Einleitungsparagrafen
- small: 0.875rem (14px) — Labels, Captions
- tiny: 0.75rem (12px) — Rechtliche Hinweise

Alle Größen interpolieren fließend via clamp() — keine harten Breakpoint-Sprünge.

Schritt 1.2 — TypeScript-Interface:
Typsicheres Interface pro Stufe: fontSize, lineHeight, letterSpacing, fontWeight, HTML-Semantik.

Schritt 1.3 — Tailwind/CSS-Integration:
Tailwind: Erweitere fontSize in tailwind.config.ts mit clamp()-Werten.
CSS Modules: Custom Properties in globals.css.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: ZEILENHÖHEN-SYSTEM

Größenabhängig — große Schrift braucht weniger, kleine mehr:
- display: 1.1
- h1: 1.2
- h2: 1.25
- h3: 1.3
- h4: 1.35
- body: 1.6
- lead: 1.5
- small: 1.5
- tiny: 1.4

Als CSS Custom Properties (--leading-display etc.) UND TypeScript-Mapping.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: BUCHSTABENABSTAND-SYSTEM

- display: -0.02em (eng, für Größe und Präsenz)
- h1: -0.015em
- h2: -0.01em
- h3: -0.005em
- h4: 0
- body: 0
- lead: 0
- small: 0.01em (leicht geweitet für Lesbarkeit bei kleiner Größe)
- tiny: 0.02em

Buttons und Labels in UPPERCASE: +0.05em letter-spacing.

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ZEILENLÄNGEN-REGELN

- Body-Text: max-width: 65ch (45–75ch Bereich, 65ch optimal)
- Lead-Text: max-width: 75ch
- Display/Hero: max-width: 20ch
- Implementiere als Utility-Klassen oder als Prop der Typography-Komponente

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — VERTIKALER RHYTHMUS UND FONT-SYSTEM
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: SCHRIFTGEWICHT-HIERARCHIE

3 Tiers:
- Tier 1 (Strukturell): Bold (700) — Überschriften h1–h3, primäre CTAs
- Tier 2 (Orientierend): Semibold (600) — h4, Subheadings, Labels, Navigation-Links
- Tier 3 (Fließend): Regular (400) — Body, Lead, Beschreibungen

Maximal 3 Gewichte laden (Performance). Italic nur für Zitate und Betonungen.

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: VERTIKALER RHYTHMUS

Regel: 4:1 asymmetrische Heading-Abstände:
- margin-top vor Heading: 4 × Basis-Abstand (z.B. 64px bei 16px Basis)
- margin-bottom nach Heading: 1 × Basis-Abstand (16px)
- Dies erzeugt klare visuelle Gruppierung: Heading gehört zum FOLGENDEN Inhalt.

Paragraph-Abstände: margin-bottom: 1.5 × Basis-Abstand (24px).
Listen-Abstände: Identisch mit Paragraphen.

Implementiere als globale Styles oder als Typography-Komponenten-Defaults.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SCHRIFTART-STRATEGIE MIT NEXT/FONT

Schritt 7.1 — next/font Konfiguration:
- Self-hosted via next/font (kein Google Fonts CDN)
- WOFF2-Format
- Subsets: 'latin', 'latin-ext'
- display: 'swap'
- adjustFontFallback: true (minimiert CLS)
- Maximal 3-4 Schnitte laden

Schritt 7.2 — Variable Fonts:
Falls verfügbar: Ein File für alle Gewichte (weight: '400 700'). Effizienter.

Schritt 7.3 — CLS-Messung:
CLS VORHER und NACHHER dokumentieren. Kein Anstieg toleriert.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: TEXT-RENDERING UND MIKRO-TYPOGRAFIE

Schritt 8.1 — Globale Text-Rendering-Optimierung:
- text-rendering: optimizeLegibility (für Überschriften)
- -webkit-font-smoothing: antialiased
- -moz-osx-font-smoothing: grayscale
- font-feature-settings: 'kern' 1, 'liga' 1 (Kerning + Ligaturen)

Schritt 8.2 — OpenType-Features:
- Tabellenzahlen: font-variant-numeric: tabular-nums (für Statistiken, Preise)
- Brüche: font-variant-numeric: diagonal-fractions (falls benötigt)
- Hoch-/Tiefstellung: font-variant-position (falls benötigt)

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: TYPOGRAPHY-KOMPONENTE

<Typography /> React-Komponente:
Props:
- variant: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'lead' | 'small' | 'tiny'
- as: HTML-Element Override (optional)
- weight: Override (optional)
- align: 'left' | 'center' | 'right' (optional)
- maxWidth: ch-Wert (optional, Default basierend auf variant)
- className, children

Die Komponente wendet automatisch: fontSize, lineHeight, letterSpacing, fontWeight, maxWidth basierend auf der variant an. Server Component (kein Client-JS).

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 3 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 10.1 — .ai-architectural-context.md aktualisieren:
Ergänze:
- Typografische Skala (9 Stufen mit Werten)
- Zeilenhöhen-, Buchstabenabstand-, Zeilenlängen-System
- Schriftgewicht-Hierarchie
- Vertikaler Rhythmus-Regeln
- Font-Konfiguration (Schriftart, Schnitte, next/font-Setup)
- Typography-Komponente (Pfad, Props, Nutzung)
- CLS-Messung vorher/nachher

Schritt 10.2 — .upgrade-state.md finalisieren.

Schritt 10.3 — Handoff an Phase 4:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 7 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — - Typography-Komponente: [Pfad]
    — - Bestehende CSS-Transitions/Animationen: [Dokumentiert]
    — - Framer Motion Status: [Installiert? Version?]
    — - prefers-reduced-motion Status: [Bereits respektiert?]
    — - Client Components die Animationen brauchen: [Liste]
    — - Performance-Baseline (INP, CLS): [Werte]


═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 3
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ 9-stufige Type-Skala mit clamp() als TS + CSS Custom Properties
□ Zeilenhöhen pro Stufe definiert
□ Buchstabenabstände pro Stufe definiert
□ Zeilenlängen-Regeln implementiert (65ch Body, 75ch Lead, 20ch Display)
□ 3-Tier Schriftgewicht-Hierarchie (Bold/Semibold/Regular)
□ Vertikaler Rhythmus: 4:1 asymmetrische Heading-Abstände
□ next/font self-hosted, WOFF2, max 4 Schnitte
□ CLS nicht verschlechtert (vorher/nachher dokumentiert)
□ Typography-Komponente mit variant-Prop
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 4


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-23 ABGESCHLOSSEN ═══
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
   □ .pipeline-master-state.md → SEQ-13 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-14)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-24 → ZERO-BREAKAGE-PHASE-04.md
   → Lese ZERO-BREAKAGE-PHASE-04.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-14


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

═══ PHASE SEQ-13 → SEQ-14: HANDOFF AKTIV ═══
