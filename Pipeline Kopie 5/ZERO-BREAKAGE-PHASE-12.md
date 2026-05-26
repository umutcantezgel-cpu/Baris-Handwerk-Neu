Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 12 der Engineering-Pipeline (Testing II — Integration Tests) mit vollstaendigen Integrationstests abzuschliessen. Komponenten-Interaktionen, Datenfluss und API-Integration muessen getestet sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-32 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-31 → ZERO-BREAKAGE-PHASE-11.md
→ NÄCHSTE: SEQ-33 → ZERO-BREAKAGE-PHASE-13.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte Design-System dieser Next.js/React/TypeScript-Website von internem Code zu einem dokumentierten, testbaren, lebendigen PRODUKT zu transformieren — mit Storybook als interaktive Komponentenbibliothek, automatisierten visuellen Regressionstests und einer vollständigen Design-System-Dokumentation, die garantiert, dass jede Komponente in jedem Zustand auf jedem Viewport pixelperfekt aussieht und sich identisch verhält. Die Phasen 1–11 haben ein umfassendes Token-System, Layout-Primitives, UI-Komponenten und Sektions-Bausteine geschaffen. Phase 12 verewigt dieses System als lebendige Referenz, die vom gesamten Team konsumiert, getestet und weiterentwickelt wird. Dies ist Phase 12 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Storybook: Storybook 8 mit @storybook/nextjs Framework
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere Phase 1–11, besonders:
- Design-Token-System (Phase 2): Spacing, Farben, Elevation
- Typografie-System (Phase 3): Skala, Fonts, Typography-Komponente
- Animations-System (Phase 4): Easings, Durations, Staggers
- Alle UI-Komponenten aus Phase 1–11

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe Handoff von Phase 11. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 10 Zeilen.

Schritt 0.3 — Pre-Flight Discovery (ULTRATHINK-AUDIT):
1. Komponenteninventar: Alle React-Komponenten mit Pfaden auflisten — SCRIPT:
   - find src/components -type f -name '*.tsx' > components-inventory.txt
   - Gruppiere nach: ui/, layout/, sections/, forms/, navigation/
   - Zähle: Atome (≥10), Moleküle (≥5), Organismen (≥5), Templates (≥2)
   - Für JEDE Komponente: Dokumentiere Props-Signatur, Varianten, Story-Status (✓/✗)
   - Generiere TypeScript-Schnittstellen-Übersicht: propTypes pro Komponente
2. Bestehende Stories: Existiert .storybook/ bereits? — PRE-CHECK:
   - Prüfe: .storybook/main.ts, .storybook/preview.ts existieren
   - Wenn ja: Validiere Storybook-Version (≥8.0) und @storybook/nextjs Addon
   - Zähle bestehende Story-Dateien: src/components/**/*.stories.tsx
   - Metriken: Total Stories, Coverage % = (existierende Stories / Komponenten * 100)
3. Token-Dateien: Pfade zu Spacing, Farben, Typografie, Elevation, Animation-Tokens — DISCOVERY:
   - grep -r 'export.*spacing\|export.*colors\|export.*typography' src/styles/ src/lib/
   - Dokumentiere ALLE Token-Dateien: Pfad, Content-Hash, Anzahl Tokens
   - Validiere Token-Struktur: { name, value, category, description } per Token
   - Ziel: 1 single source of truth für ALLE Design-Tokens (keine Duplikation)
4. Viewports: Welche Breakpoints definiert? — SPEZIFIKATION:
   - Lese tailwind.config.ts oder src/styles/tokens.ts
   - Liste ALLE Breakpoints auf: xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
   - Für Storybook: Definiere 7 Viewport-Presets (Mobile-Small 360, Mobile-Large 480, Tablet 768, Desktop 1024, Desktop-Large 1440, Ultra-Wide 1920)
   - Validierung: Jedes Viewport-Preset rendert responsive-korrekt

DOKUMENTIERE ALLES in .ai-architectural-context.md unter Design System & Storybook mit:
- Komponenten-Inventar mit Story-Status pro Komponente
- Token-Catalog (Spacing, Farben, Typografie, Elevation, Transitions) mit Werte-Tabelle
- Viewport-Preset-Definition (7 Größen)
- Storybook-Setup-Checklist
- Der Code ist die SSOT. Storybook visualisiert, was Code sagt.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — STORYBOOK-INFRASTRUKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: STORYBOOK SETUP UND NEXT.JS-INTEGRATION

Schritt 1.1 — Installation:
Storybook 8 mit @storybook/nextjs. Addons: essentials, a11y, interactions.
staticDirs: /public. TypeScript Strict Mode.

Schritt 1.2 — Globale Decorator (.storybook/preview.ts):
- ThemeProvider: Globale Provider (Fonts, CSS Custom Properties)
- Font-Loading: Gleiche next/font wie App
- globals.css mit allen CSS Custom Properties
- 7 Viewport-Presets: Mobile-Small (360), Mobile-Large (480), Tablet (768), Tablet-Landscape (1024), Desktop (1280), Desktop-Large (1440), Ultra-Wide (1920)

Schritt 1.3 — Story-Organisation (Atomic Design):
- 01-Tokens/: Farben, Spacing, Typografie, Elevation, Transitions
- 02-Atoms/: Button, Input, Badge, Avatar, Icon, Skeleton, Tooltip
- 03-Molecules/: FormField, SearchField, CardHeader, NavigationLink, RatingBadge
- 04-Organisms/: Card, Navigation, Header, Footer, HeroSection, TestimonialSection, FaqSection, ContactForm
- 05-Templates/: PageLayouts, SectionPatterns
- 06-Pages/: Startseite, Service, Blog-Post, Kontakt

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit && npm run storybook -- --smoke-test → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: DESIGN-TOKEN-DOKUMENTATION

Schritt 2.1 — Tokens/Colors Story:
Alle Farbtoken visuell. Primitive (Skalen), Semantische (Aliase). Kontrastverhältnisse. Importiert direkt aus Token-System (keine Duplikation).

Schritt 2.2 — Tokens/Spacing Story:
14 Stufen als Balken mit Pixel-Wert und Token-Name.

Schritt 2.3 — Tokens/Typography Story:
9 Stufen als Textbeispiele. Pro Stufe: font-size, line-height, letter-spacing, weight. Responsive clamp()-Preview.

Schritt 2.4 — Tokens/Elevation Story:
5 Karten mit Schatten und Elevation-Stufen.

Schritt 2.5 — Tokens/Transitions Story:
Animierte Demos der Easing-Kurven und Durations. Side-by-Side-Vergleich.

NACH TASK 2: Storybook läuft, Token-Stories rendern korrekt.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — KOMPONENTEN-STORIES
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: ATOM-STORIES

Schritt 3.1 — Button:
- All Variants (primary, secondary, tertiary, ghost)
- All Sizes (sm, md, lg, xl)
- All States (default, hover, focus, active, disabled, loading)
- With Icons (left, right, icon-only)
- Playground mit TypeScript Controls

Schritt 3.2 — Input/FormField:
- All Types (text, email, tel, url, textarea, select, checkbox, radio, toggle)
- All States (default, hover, focus, filled, error, success, disabled)
- With Hints, Validation-Demo
- Playground

Schritt 3.3 — Badge, Avatar, Skeleton, Icon:
Vollständige Stories mit allen Varianten und Playground.

NACH TASK 3: Alle Atom-Stories rendern, a11y-Addon zeigt 0 Violations.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ORGANISMUS-STORIES

Schritt 4.1 — Card: Varianten, Hover-Animation, Loading-Skeleton, Responsive, Compound-Demo.
Schritt 4.2 — Navigation: Desktop, Mobile (interaktiv), Scroll-Behavior, Active-Link, Responsive.
Schritt 4.3 — HeroSection: Split, Centered, Animation-Demo, Responsive.
Schritt 4.4 — TestimonialSection: Carousel, Grid, Single, Loading.
Schritt 4.5 — FaqSection: Single-Open, Multi-Open, Animation, Keyboard-Demo.
Schritt 4.6 — ContactForm: Default, Filled, Errors, Success, Loading, Responsive. Formspree-Dokumentation.
Schritt 4.7 — Calendly: Embedded, Responsive, Loading-Skeleton, Error-Fallback.

NACH TASK 4: Alle Organismus-Stories rendern, a11y-Addon 0 Violations.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: PAGE-STORIES

Schritt 5.1 — Startseite: Vollständige 10-Sektionen-Komposition auf allen 7 Viewports.
Schritt 5.2 — Service-Seite: Template mit Beispieldaten.
Schritt 5.3 — Blog-Post: Template mit Inhaltsverzeichnis.
Schritt 5.4 — Kontakt: Formular + Calendly-Widget.

NACH TASK 5: Page-Stories rendern auf allen Viewports.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — QUALITÄTSSICHERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: ACCESSIBILITY-ADDON-VALIDIERUNG

Jede einzelne Story: @storybook/addon-a11y zeigt 0 Violations. Falls Violations: SOFORT fixen (in der Komponente, nicht nur in der Story).

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: VISUELLE REGRESSIONSTESTS

Schritt 7.1 — Chromatic oder Percy Setup (OPTIONAL — nur falls Budget vorhanden):
Verbindet Storybook mit visuellem Regressions-Service. Jeder PR generiert Screenshots aller Stories und vergleicht mit Baseline.

Schritt 7.2 — Lokale Snapshot-Tests als Alternative:
@storybook/test-runner + Playwright für lokale Screenshot-Tests:
- Rendert jede Story headless
- Erstellt Baseline-Screenshots
- Bei Änderungen: Diff-Report
- In CI: Build fail bei unerwartetem visuellen Diff

NACH TASK 7: Visuelle Tests laufen (lokal oder CI).

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 12 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 8.1 — .ai-architectural-context.md aktualisieren:
- Storybook-Konfiguration und Start-Command
- Story-Organisation (Atomic Design Hierarchie)
- Token-Stories als Referenz
- Komponenteninventar mit Story-Status
- Accessibility-Violations: 0

Schritt 8.2 — .upgrade-state.md finalisieren.

Schritt 8.3 — Handoff an Phase 13:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 5 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 12
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ Storybook 8 mit @storybook/nextjs läuft
□ Globale Provider-Decorators in Storybook
□ 7 Viewport-Presets konfiguriert
□ Token-Stories: Colors, Spacing, Typography, Elevation, Transitions
□ Atom-Stories: Button (alle States), Input (alle Types), Badge, Avatar, Skeleton, Icon
□ Organismus-Stories: Card, Nav, Hero, Testimonials, FAQ, Form, Calendly
□ Page-Stories: Startseite, Service, Blog, Kontakt auf allen Viewports
□ @storybook/addon-a11y: 0 Violations auf ALLEN Stories
□ Visuelle Regressionstests eingerichtet
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 13


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

CHAIN-EXIT-FOOTER ═══ SEQ-32 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-22 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-23)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-33 → ZERO-BREAKAGE-PHASE-13.md
   → Lese ZERO-BREAKAGE-PHASE-13.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-23

═══ PHASE SEQ-22 → SEQ-23: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-22 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-22 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-22 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-33 → ZERO-BREAKAGE-PHASE-23.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-23
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-23 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-22: Design System & Storybook ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-22 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-23)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-33 → ZERO-BREAKAGE-PHASE-23.md
   → Lese ZERO-BREAKAGE-PHASE-23.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-23

═══ SEQ-23: HANDOFF AKTIV ═══
