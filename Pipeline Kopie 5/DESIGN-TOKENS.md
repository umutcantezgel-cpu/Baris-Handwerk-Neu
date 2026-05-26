Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, das DESIGN-TOKEN-SYSTEM als verbindliche Referenz fuer die gesamte Design-Pipeline zu etablieren. Jeder Token (Farben, Typografie, Spacing, Animationen, Breakpoints) muss aus dem bestehenden Code extrahiert, systematisiert und als Single Source of Truth dokumentiert werden. Erstelle einen Implementierungsplan mit Token-Extraktion, Systematisierung und Enforcement-Regeln.

═══ CHAIN-LINK-HEADER ═══ SEQ-41 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-40 → ZERO-BREAKAGE-PHASE-20.md
→ NAECHSTE: SEQ-42 → DESIGN-PHASE-01.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md uebersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas aenderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══

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
DESIGN TOKENS — REFERENZDOKUMENT (SEQ-31)
═══════════════════════════════════════════════════════════════════════════════

SSOT-DIREKTIVE: Der Code (tailwind.config, globals.css) ist die einzige Wahrheit.
Dieses Dokument ist die REFERENZ fuer die Design-Phasen (SEQ-42 bis SEQ-51) und
das OMNI-CLOSED-LOOP Token-Enforcement-Audit (SEQ-62 Block C).
Wenn die Token-Werte im Code von diesem Dokument abweichen, GEWINNT DER CODE.
Dieses Dokument wird dann an den Code angepasst.

ULTRATHINK-LANGZEITTASK — TOKEN-SYSTEM VOLLSTAENDIG DEFINIEREN:

Diese Phase liest die bestehenden Design-Tokens aus dem Code (tailwind.config, globals.css,
theme.ts, oder equivalent) und dokumentiert sie vollstaendig. Fehlende Token-Kategorien
werden identifiziert und in den naechsten Design-Phasen (SEQ-32 bis SEQ-41) implementiert.

═══════════════════════════════════════════════════════════════════════════════
1. FARB-PALETTE (COLOR TOKENS)
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
1.1 PRIMAER- UND NEUTRAL-FARBEN
───────────────────────────────────────────────────────────────────────────────

  red-500       #EF4444  → Action, Urgency, Primary CTAs
  charcoal-900  #0F172A  → Solid dark structures, Background anchors
  charcoal-500  #64748B  → Secondary text, muted surfaces
  off-white     #FAFAFA  → Default background for cards (Abgrenzung von purem Weiss)

ULTRATHINK-ERWEITERUNG — FARB-SKALEN:
Die obigen 4 Tokens sind die KERN-Primitives. Fuer ein vollstaendiges Design-System
werden in den Design-Phasen (SEQ-32/33) folgende Skalen generiert:

  PRIMAER-SKALA (red):
    red-50, red-100, red-200, red-300, red-400, red-500, red-600, red-700, red-800, red-900, red-950
    → Generiert aus red-500 via HSL-Interpolation
    → red-500 bleibt der Anker. Alle anderen Stufen leiten sich ab.

  NEUTRAL-SKALA (charcoal):
    charcoal-50, charcoal-100, charcoal-200, charcoal-300, charcoal-400, charcoal-500,
    charcoal-600, charcoal-700, charcoal-800, charcoal-900, charcoal-950
    → Generiert aus charcoal-900 und charcoal-500 via lineare Interpolation

  HINTERGRUND-ABSTUFUNGEN:
    bg-primary     → off-white (#FAFAFA) fuer helle Bereiche
    bg-secondary   → charcoal-50 (generiert) fuer subtile Abgrenzung
    bg-tertiary    → charcoal-100 (generiert) fuer staerkere Abgrenzung
    bg-inverse     → charcoal-900 fuer dunkle Sektionen
    bg-page        → #FFFFFF fuer den Seiten-Hintergrund

───────────────────────────────────────────────────────────────────────────────
1.2 SEMANTISCHE STATUS-FARBEN
───────────────────────────────────────────────────────────────────────────────

  status-success  #10B981  (emerald) → Operation complete, Verify checks
  status-warning  #F59E0B  (amber)   → Interventions, Needs attention
  status-info     #3B82F6  (blue)    → Highlights, System states
  status-error    #EF4444  (red-500) → Fehlerzustaende, Validierungsfehler

ULTRATHINK-ERWEITERUNG — STATUS-VARIANTEN:
  Jede Status-Farbe braucht 3 Varianten fuer verschiedene Kontexte:
    *-bg    → Hintergrund fuer Badges/Alerts (Opacity 10-15%)
    *-text  → Text-Farbe auf hellem Hintergrund (volle Saettigung)
    *-border → Border-Farbe (Opacity 30-40%)
  Beispiel: status-success-bg: #10B98119, status-success-text: #10B981, status-success-border: #10B98166

───────────────────────────────────────────────────────────────────────────────
1.3 INTERAKTIONS-FARBEN
───────────────────────────────────────────────────────────────────────────────

  ULTRATHINK-ERWEITERUNG — INTERAKTIONS-TOKENS (in SEQ-32/33 zu implementieren):
    focus-ring     → Farbe und Breite des Fokus-Rings (WCAG AAA konform)
    hover-overlay  → Semi-transparentes Overlay fuer Hover-States
    active-overlay → Semi-transparentes Overlay fuer Active-States
    disabled-opacity → Opacity fuer deaktivierte Elemente (0.5)
    link-default   → Standard-Link-Farbe
    link-hover     → Hover-Link-Farbe
    link-visited   → Visited-Link-Farbe (falls verwendet)

═══════════════════════════════════════════════════════════════════════════════
2. TYPOGRAFIE-SYSTEM (TYPOGRAPHY TOKENS)
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
2.1 FONT-STACK
───────────────────────────────────────────────────────────────────────────────

  Primaer-Font: Inter
  Geladen via Framework-native Font-Optimierung (next/font, vite-plugin-fonts, etc.)
  Fallback-Stack: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
  Mono-Font: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace (fuer Code-Bloecke)

───────────────────────────────────────────────────────────────────────────────
2.2 GROESSEN-SKALA (FLUID TYPE SCALE)
───────────────────────────────────────────────────────────────────────────────

  ULTRATHINK-ERWEITERUNG — TYPE-SCALE (in SEQ-33/34 zu implementieren):
  Basierend auf einer Major-Third-Skala (1.250 Ratio) mit Fluid-Interpolation:

  --text-xs:       clamp(0.694rem, 0.66rem + 0.17vw, 0.8rem)     → 11-13px
  --text-sm:       clamp(0.833rem, 0.79rem + 0.22vw, 0.96rem)    → 13-15px
  --text-base:     clamp(1rem, 0.95rem + 0.25vw, 1.15rem)        → 16-18px
  --text-lg:       clamp(1.2rem, 1.13rem + 0.35vw, 1.38rem)      → 19-22px
  --text-xl:       clamp(1.44rem, 1.35rem + 0.45vw, 1.66rem)     → 23-27px
  --text-2xl:      clamp(1.728rem, 1.61rem + 0.59vw, 2rem)       → 28-32px
  --text-3xl:      clamp(2.074rem, 1.93rem + 0.72vw, 2.4rem)     → 33-38px
  --text-4xl:      clamp(2.488rem, 2.3rem + 0.94vw, 2.88rem)     → 40-46px
  --text-display:  clamp(2.986rem, 2.75rem + 1.18vw, 3.456rem)   → 48-55px

  WICHTIG: Diese Werte sind STARTWERTE. Sie werden in SEQ-33/34 gegen den bestehenden Code
  abgeglichen und angepasst. Der Code ist SSOT.

───────────────────────────────────────────────────────────────────────────────
2.3 ZEILENHOEHEN (LINE-HEIGHT TOKENS)
───────────────────────────────────────────────────────────────────────────────

  Hand-tuned Curve — groessere Schrift = engere Zeilenhoehe:

  --lh-body:      1.7   → Fuer Body-Text (text-base, text-sm, text-xs)
  --lh-lead:      1.5   → Fuer Lead-Text und groessere Absaetze (text-lg)
  --lh-heading:   1.3   → Fuer Ueberschriften (text-xl, text-2xl)
  --lh-display:   1.15  → Fuer grosse Ueberschriften (text-3xl, text-4xl)
  --lh-hero:      1.05  → Fuer Display/Hero-Text (text-display)

───────────────────────────────────────────────────────────────────────────────
2.4 BUCHSTABENABSTAND (LETTER-SPACING TOKENS)
───────────────────────────────────────────────────────────────────────────────

  Inverse proportionale Logik — groessere Schrift = engerer Abstand:

  --ls-body:      0em       → Neutral fuer Body-Text
  --ls-caps:      0.05em    → Fuer Caps-Labels und Overlines
  --ls-heading:   -0.01em   → Leicht enger fuer Ueberschriften
  --ls-display:   -0.02em   → Enger fuer grosse Ueberschriften
  --ls-hero:      -0.03em   → Am engsten fuer Display/Hero-Text

───────────────────────────────────────────────────────────────────────────────
2.5 FONT-GEWICHTE
───────────────────────────────────────────────────────────────────────────────

  ULTRATHINK-ERWEITERUNG (in SEQ-33/34 zu implementieren):
  --font-normal:    400  → Body-Text
  --font-medium:    500  → UI-Labels, Navigation, Buttons
  --font-semibold:  600  → Sub-Headings, Emphasis
  --font-bold:      700  → Headings, CTAs

═══════════════════════════════════════════════════════════════════════════════
3. SPACING-SYSTEM (8PX-GRID-MATHEMATIK)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-ERWEITERUNG — SPACING-SKALA (in SEQ-35 zu implementieren):

Das Spacing-System basiert auf einem 8px-Grid. Alle Abstaende sind Vielfache von 4px (Halb-Grid)
oder 8px (Voll-Grid). KEINE anderen Werte sind erlaubt.

  --space-0:    0px       → Kein Abstand
  --space-0.5:  2px       → Micro-Spacing (Border-Width, Separator)
  --space-1:    4px       → Halb-Grid (Icon-Gaps, Input-Padding-Y)
  --space-2:    8px       → Basis-Grid (Inline-Gaps, Button-Padding-Y)
  --space-3:    12px      → 1.5x Grid (Card-Padding-X klein)
  --space-4:    16px      → 2x Grid (Standard-Gap, Card-Padding)
  --space-5:    20px      → 2.5x Grid
  --space-6:    24px      → 3x Grid (Section-Gap intern)
  --space-8:    32px      → 4x Grid (Section-Gap mittel)
  --space-10:   40px      → 5x Grid
  --space-12:   48px      → 6x Grid (Section-Gap gross)
  --space-16:   64px      → 8x Grid (Section-Padding)
  --space-20:   80px      → 10x Grid (Hero-Padding)
  --space-24:   96px      → 12x Grid (Section-Margin gross)
  --space-32:   128px     → 16x Grid (Page-Section-Separator)

VERBOTEN: Pixel-Werte die nicht in dieser Skala sind. KEINE 13px, KEINE 27px, KEINE 55px.
Ausnahme: 1px fuer Borders (--space-0.5 ist 2px, 1px ist ein halbes Halb-Grid — akzeptabel fuer Hairlines).

═══════════════════════════════════════════════════════════════════════════════
4. ELEVATION UND TIEFE (SHADOW TOKENS)
═══════════════════════════════════════════════════════════════════════════════

  elevation-0:  none                                    → Flache Elemente, kein Schatten
  elevation-1:  0 1px 3px rgba(0,0,0,0.06),
                0 1px 2px rgba(0,0,0,0.04)              → Resting Cards (subtile Grenze)
  elevation-2:  0 4px 6px rgba(0,0,0,0.07),
                0 2px 4px rgba(0,0,0,0.05)              → Hover State (Interaktivitaets-Cue)
  elevation-3:  0 10px 15px rgba(0,0,0,0.08),
                0 4px 6px rgba(0,0,0,0.04)              → Primary Prominence (Buttons, Modals)
  elevation-4:  0 20px 25px rgba(0,0,0,0.1),
                0 8px 10px rgba(0,0,0,0.04)             → Overlays (Dropdowns, Tooltips)
  elevation-5:  0 25px 50px rgba(0,0,0,0.12)            → Modals, Sheets

ULTRATHINK-ERWEITERUNG:
  Alle Schatten-Werte werden als CSS Custom Properties in globals.css deklariert.
  Tailwind-Config: boxShadow-Erweiterung fuer Utility-Klassen (shadow-elevation-1, etc.).

═══════════════════════════════════════════════════════════════════════════════
5. BORDER-RADIUS TOKENS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-ERWEITERUNG (in SEQ-35/36 zu implementieren):

  --radius-sm:     4px    → Inputs, kleine Elemente
  --radius-md:     8px    → Buttons, Cards, Standard-Radius
  --radius-lg:     12px   → Grosse Cards, Modals
  --radius-xl:     16px   → Feature-Cards, Hero-Elemente
  --radius-2xl:    24px   → Pill-Buttons, Tags, Badges
  --radius-full:   9999px → Kreisfoermige Elemente (Avatare, Dots)

═══════════════════════════════════════════════════════════════════════════════
6. BREAKPOINTS (RESPONSIVE TOKENS)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-ERWEITERUNG (in SEQ-36 zu implementieren):

  xs:   375px   → Minimum Viewport (iPhone SE)
  sm:   640px   → Grosse Phones, kleine Tablets
  md:   768px   → Tablets
  lg:   1024px  → Desktop-Einstieg
  xl:   1280px  → Standard Desktop
  2xl:  1536px  → Grosse Displays

  VERBOTEN: Breakpoints ausserhalb dieser Skala. KEINE 500px, KEINE 900px, KEINE 1100px.
  Der OMNI-CLOSED-LOOP (SEQ-62 Block C) erzwingt Responsive-Compliance von 375px bis 1536px.

═══════════════════════════════════════════════════════════════════════════════
7. ANIMATION UND MOTION TOKENS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-ERWEITERUNG (in SEQ-37/38 zu implementieren):

───────────────────────────────────────────────────────────────────────────────
7.1 DURATION TOKENS
───────────────────────────────────────────────────────────────────────────────
  --duration-instant:   0ms     → Keine Transition (Sofort-Feedback)
  --duration-fast:      100ms   → Micro-Interactions (Hover, Focus)
  --duration-normal:    200ms   → Standard-Transitions (Color, Opacity)
  --duration-moderate:  300ms   → Content-Transitions (Expand, Collapse)
  --duration-slow:      500ms   → Aufmerksamkeits-Transitions (Modal, Drawer)
  --duration-slower:    700ms   → Entrance-Animationen (Fade-In, Slide)

───────────────────────────────────────────────────────────────────────────────
7.2 EASING TOKENS
───────────────────────────────────────────────────────────────────────────────
  --ease-default:     cubic-bezier(0.4, 0, 0.2, 1)    → Standard (Material-like)
  --ease-in:          cubic-bezier(0.4, 0, 1, 1)       → Element verlässt den Viewport
  --ease-out:         cubic-bezier(0, 0, 0.2, 1)       → Element betritt den Viewport
  --ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1)    → Element bleibt im Viewport
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1) → Federnder Effekt (CTAs, Emphasis)

───────────────────────────────────────────────────────────────────────────────
7.3 PREFERS-REDUCED-MOTION PFLICHT
───────────────────────────────────────────────────────────────────────────────
  JEDE Animation MUSS einen prefers-reduced-motion Guard haben:
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  Dieses Snippet wird in globals.css injiziert (falls nicht bereits vorhanden).
  WCAG AAA erfordert dies — es ist NICHT optional.

═══════════════════════════════════════════════════════════════════════════════
8. Z-INDEX SKALA
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-ERWEITERUNG (in SEQ-36 zu implementieren):

  --z-base:       0      → Standard-Ebene
  --z-dropdown:   10     → Dropdowns, Popovers
  --z-sticky:     20     → Sticky Headers, Fixed Navigation
  --z-overlay:    30     → Overlay-Hintergrund (Backdrop)
  --z-modal:      40     → Modale Dialoge
  --z-toast:      50     → Toast-Notifications
  --z-tooltip:    60     → Tooltips (immer oben)

  VERBOTEN: z-index-Werte ausserhalb dieser Skala. KEIN z-index: 999, KEIN z-index: 9999.

═══════════════════════════════════════════════════════════════════════════════
TOKEN-DEKLARATION IM CODE
═══════════════════════════════════════════════════════════════════════════════

Alle Token-Variablen werden global deklariert in:
  - globals.css / app.css (als CSS Custom Properties: --token-name: value)
  - tailwind.config (als Theme-Erweiterung: theme.extend.colors, spacing, etc.)

Tailwind-Utility-Klassen muessen die Tokens verwenden:
  RICHTIG: text-charcoal-900, bg-off-white, shadow-elevation-2, rounded-md
  FALSCH:  text-[#0F172A], bg-[#FAFAFA], shadow-[custom], rounded-[8px]

Die einzige Ausnahme fuer Arbitrary-Values: Wenn ein Token fuer den Anwendungsfall
NICHT existiert UND die Erstellung eines neuen Tokens dokumentiert und gerechtfertigt ist.


═══════════════════════════════════════════════════════════════════════════════
9. MOLEKULARE DESIGN-WISSENSBASIS (EXTRAHIERT AUS 20 KONTEXT-DOKUMENTEN)
═══════════════════════════════════════════════════════════════════════════════

DIESE SEKTION ENTHAELT DAS KONDENSIERTE WISSEN AUS 20 REFERENZ-DOKUMENTEN,
DAS ALS BINDENDE GRUNDLAGE FUER ALLE DESIGN-ENTSCHEIDUNGEN DIENT.

───────────────────────────────────────────────────────────────────────────────
9.1 TOKEN-RESOLUTION-ARCHITEKTUR (AUS DOC 01/02)
───────────────────────────────────────────────────────────────────────────────

  TOKEN-AUFLOESUNGS-PIPELINE:
  Bei der Analyse einer bestehenden Website durchlaeuft das System diese Domaenen:
    1. COLOR-DOMAIN: Ausgeloest durch Hex-Werte, RGB, semantische Color-Tokens.
    2. TYPOGRAPHY-DOMAIN: Ausgeloest durch Font-Family, Serif/Sans, Monospace.
    3. STYLE-DOMAIN: Ausgeloest durch Minimalist, Glassmorphism, Brutalist etc.
    4. LANDING-DOMAIN: Ausgeloest durch CTA, Conversion, Hero, Pricing.
    5. PRODUCT-DOMAIN: Ausgeloest durch SaaS, E-Commerce, Fintech, Healthcare.
    6. CHART-DOMAIN: Ausgeloest durch Visualization, Trend, Pie, Scatter.

  MULTI-DOMAIN-AGGREGATION:
  Das System queried 5 Domaenen simultan und merged die Ergebnisse:
    product (max 1) -> Bestimmt die Vertikale
    style (max 3)   -> CSS-Variablen, Effekte, Performance, A11y
    color (max 2)   -> Vollstaendige 16-Token semantische Palette
    landing (max 2) -> Section-Ordering, CTA-Placement
    typography (max 2) -> Font-Pairings, Google Fonts URLs, Tailwind Config

  STYLE-PRIORITY-BOOSTING:
  Der Resolver haengt bis zu 2 Style-Priority-Keywords an die Query:
    SaaS       -> boosted: Glassmorphism + Flat Design
    Healthcare -> boosted: Neumorphism + Accessible & Ethical
    E-Commerce -> boosted: Vibrant & Block-based + Motion-Driven
    Finance    -> boosted: Data-Dense + Accessible & Ethical
    Gaming     -> boosted: 3D & Hyperrealism + Retro-Futurism

  MATCH-SCORING:
    Exakter Match im Style-Category-Name = +10
    Match im Keywords-String = +3
    Match in anderem Feld = +1
    Fallback auf erstes Ergebnis wenn keine Matches.

───────────────────────────────────────────────────────────────────────────────
9.2 CSS-VARIABLE-OUTPUT-SCHEMA (PFLICHT-VARIABLEN PRO DESIGN-SYSTEM)
───────────────────────────────────────────────────────────────────────────────

  Jedes aufgeloeste Design-System MUSS diese Standard-Properties emittieren:

  :root {
    --color-primary: [Wert];
    --color-on-primary: [Kontrastfarbe];
    --color-secondary: [Wert];
    --color-accent: [Wert];
    --color-background: [Wert];
    --color-foreground: [Wert];
    --color-card: [Wert];
    --color-card-foreground: [Wert];
    --color-muted: [Wert];
    --color-muted-foreground: [Wert];
    --color-border: [Wert];
    --color-destructive: [Wert];
    --color-ring: [Wert];
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
  }

  TAILWIND-INTEGRATION (tailwind.config.ts):
  colors: { primary: 'hsl(var(--primary))', secondary: 'hsl(var(--secondary))', ... }
  borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' }
  fontFamily: { sans: ['var(--font-sans)'], serif: ['var(--font-serif)'], mono: ['var(--font-mono)'] }

───────────────────────────────────────────────────────────────────────────────
9.3 ELEVATION-HIERARCHIE (DETAILLIERT AUS DOC 15)
───────────────────────────────────────────────────────────────────────────────

  Level 0 — Flat (inline):       none
  Level 1 — Cards, Inputs:       0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
  Level 2 — Dropdowns, Popovers: 0 4px 6px -1px rgba(0,0,0,0.1)
  Level 3 — Modals, Dialoge:     0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
  Level 4 — Toast, Command:      0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)

  GETOENETE SCHATTEN (statt generisches Schwarz):
    card-shadow:         0 8px 30px rgba(0, 0, 0, 0.06)
    card-shadow-colored: 0 8px 30px rgba(37, 99, 235, 0.15) (primary-getoeint)
    card-shadow-dark:    0 8px 30px rgba(0, 0, 0, 0.3)

───────────────────────────────────────────────────────────────────────────────
9.4 PRE-DELIVERY-CHECKLISTE (AUS DOC 02/20 — PFLICHT VOR JEDEM DESIGN-ABSCHLUSS)
───────────────────────────────────────────────────────────────────────────────

  [ ] Keine Emojis als Icons — ausschliesslich SVG (Lucide, Heroicons, Phosphor)
  [ ] cursor: pointer auf ALLEN klickbaren Elementen
  [ ] Hover-States mit smooth Transitions (150-300ms, ease-out)
  [ ] Active-States mit sofortigem visuellen Feedback (scale(0.97))
  [ ] Focus-States sichtbar fuer Keyboard-Navigation (focus-visible:ring-2)
  [ ] Text-Kontrast >= 4.5:1 (WCAG AA Minimum)
  [ ] prefers-reduced-motion respektiert
  [ ] Responsive getestet: 375px, 640px, 768px, 1024px, 1280px, 1536px
  [ ] Alle Bilder haben alt-Text
  [ ] Alle Form-Inputs haben Labels
  [ ] Alle interaktiven Targets >= 44x44px
  [ ] Kein CLS (Cumulative Layout Shift) — alle Bilder mit Dimensionen

───────────────────────────────────────────────────────────────────────────────
9.5 PRODUKT-VERTIKAL-MAPPING (AUSZUG AUS DOC 05/10 — 163 KATEGORIEN)
───────────────────────────────────────────────────────────────────────────────

  Die ausfuehrende KI MUSS das Produkt-Vertikal der bestehenden Website identifizieren
  und das folgende Mapping anwenden:

  SaaS (General):
    Style: Glassmorphism + Flat Design
    Landing: Hero + Features + CTA
    Color: Trust Blue (#2563EB) + Orange Accent (#EA580C)
    Typography: Inter / Plus Jakarta Sans
    Effekte: Subtle Hover (200-250ms), backdrop-filter blur

  E-Commerce:
    Style: Vibrant & Block-based
    Landing: Feature-Rich Showcase
    Color: Success Green (#059669) + Orange Accent (#EA580C)
    Typography: Rubik / Nunito Sans
    Effekte: Card Hover Lift + Scale

  Healthcare:
    Style: Neumorphism + Accessible & Ethical
    Landing: Social Proof-Focused
    Color: Calm Cyan (#0891B2) + Health Green (#059669)
    Typography: Figtree / Noto Sans
    Effekte: Soft Box-Shadow, Smooth Press (150ms)
    PFLICHT: WCAG AAA Compliance

  Finance/Banking:
    Style: Minimalism + Accessible & Ethical
    Landing: Trust & Authority
    Color: Navy (#0F172A) + Trust Blue
    Typography: IBM Plex Sans
    Effekte: Smooth Number Animations, Security Indicators
    PFLICHT: Security-First Design

  Portfolio/Agency:
    Style: Brutalism/Motion-Driven + Minimalism
    Landing: Storytelling-Driven
    Color: Bold Primaries oder Monochrom
    Typography: Space Grotesk / DM Sans
    Effekte: Scroll-Triggered, CSS Animations / IntersectionObserver

  AI/Chatbot:
    Style: AI-Native UI + Minimalism
    Landing: Interactive Product Demo
    Color: Neutral + AI Purple (#6366F1)
    Typography: Inter
    Effekte: Streaming Text, Typing Indicators, Fade-In

  ANTI-PATTERNS (UNIVERSELL VERBOTEN):
    Emojis als Icons verwenden (immer SVG).
    Fehlender cursor:pointer auf klickbaren Elementen.
    Layout-Shifting Hovers (scale transforms die umgebende Elemente verschieben).
    Low-Contrast Text (unter WCAG 4.5:1).
    Instant State Changes ohne Transition (150-300ms Minimum).
    Unsichtbare Focus-States (focus:ring PFLICHT).


═══════════════════════════════════════════════════════════════════════════════
SEKTION PHI: GOLDENER-SCHNITT-REFERENZ-SYSTEM (ERGAENZUNG)
═══════════════════════════════════════════════════════════════════════════════

KREATIVITAETS-DIREKTIVE-REFERENZ:
  Dieses Kapitel ergaenzt das bestehende Token-System um Phi-basierte
  Proportionen gemaess ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md.
  Die bestehenden Tokens (8px-Grid, Major-Third-Skala) bleiben SSOT.
  Die Phi-Werte dienen als ALTERNATIVE REFERENZ fuer Design-Entscheidungen.

───────────────────────────────────────────────────────────────────────────────
PHI.1 LAYOUT-PROPORTIONS-TOKENS
───────────────────────────────────────────────────────────────────────────────

  --phi:               1.618033988749
  --phi-inverse:       0.618033988749
  --phi-squared:       2.618033988749
  --phi-cubed:         4.236067977499

  LAYOUT-ANWENDUNG (CSS Grid / Flexbox):
    Zwei-Spalten-Layout:     1fr 1.618fr  (38.2% / 61.8%)
    Drei-Spalten-Layout:     1fr 1.618fr 1fr
    Hero Content/Image:      Verhaeltnis 61.8% : 38.2%
    Container-Verschachtelung: Jede Ebene = vorherige / PHI

───────────────────────────────────────────────────────────────────────────────
PHI.2 PHI-SPACING-SKALA (ALTERNATIV ZUM 8PX-GRID)
───────────────────────────────────────────────────────────────────────────────

  Die Phi-Spacing-Skala konvergiert mit der Fibonacci-Folge und ist
  kompatibel mit dem bestehenden 8px-Grid bei Basis 8:

  --phi-space-xs:    4px    (Basis / 2)
  --phi-space-sm:    8px    (Basis)
  --phi-space-md:    13px   (8 * PHI, gerundet)
  --phi-space-lg:    21px   (13 * PHI, gerundet — Fibonacci)
  --phi-space-xl:    34px   (21 * PHI, gerundet — Fibonacci)
  --phi-space-2xl:   55px   (34 * PHI, gerundet — Fibonacci)
  --phi-space-3xl:   89px   (55 * PHI, gerundet — Fibonacci)

  INNEN-AUSSEN-VERHAELTNIS:
    Wenn Padding = X, dann Margin = X * PHI (oder umgekehrt).
    Beispiel: padding: 21px → margin: 34px (Phi-Verhaeltnis)

───────────────────────────────────────────────────────────────────────────────
PHI.3 PHI-TYPOGRAFIE-SKALA (ALTERNATIV ZUR MAJOR-THIRD-SKALA)
───────────────────────────────────────────────────────────────────────────────

  --phi-text-sm:       0.618rem   (9.9px — Minimum Lesbarkeit)
  --phi-text-base:     1.000rem   (16px — Referenzgroesse)
  --phi-text-lg:       1.618rem   (25.9px — PHI^1)
  --phi-text-xl:       2.618rem   (41.9px — PHI^2)
  --phi-text-2xl:      4.236rem   (67.8px — PHI^3)
  --phi-text-3xl:      6.854rem   (109.7px — PHI^4)
  --phi-text-display:  11.089rem  (177.4px — PHI^5)

  PHI-ZEILENHOEHEN:
    Fliesstext:        1.618  (exakt Phi — harmonischste Zeilenhoehe)
    Ueberschriften:    1.2 bis 1.3
    Display-Text:      1.0 bis 1.1

───────────────────────────────────────────────────────────────────────────────
PHI.4 BILD-PROPORTIONS-TOKENS
───────────────────────────────────────────────────────────────────────────────

  --aspect-golden:     1.618 / 1    (Goldenes Rechteck)
  --aspect-golden-inv: 1 / 1.618    (Goldenes Hochformat)
  --aspect-phi-crop-h: 61.8%        (Horizontaler Phi-Beschnitt-Punkt)
  --aspect-phi-crop-v: 38.2%        (Vertikaler Phi-Beschnitt-Punkt)

───────────────────────────────────────────────────────────────────────────────
PHI.5 FARBWAHRNEHMUNGS-REFERENZ
───────────────────────────────────────────────────────────────────────────────

  KREATIVITAETS-DIREKTIVE-KOPPLUNG:
  Die Farbpsychologie-Regeln sind in ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md
  SEKTION 3 definiert. Hier die Token-relevanten Kernregeln:

  60-30-10-FARBREGEL:
    --color-dominant-ratio:    60%   (Hintergrund, grosse Flaechen)
    --color-secondary-ratio:   30%   (Sektionen, Cards, Bereiche)
    --color-accent-ratio:      10%   (CTAs, Links, Highlights)

  KONTRAST-MINDESTWERTE (UEBER WCAG HINAUS):
    --contrast-primary-text:   7:1   (WCAG AAA)
    --contrast-secondary-text: 4.5:1 (WCAG AA)
    --contrast-large-text:     3:1   (WCAG AA Large, 24px+)
    --contrast-interactive:    3:1   (gegen Nachbarelemente)

  DARK-MODE-KALIBRIERUNG:
    Primaerfarben:   Saettigung -10% bis -20%
    Hintergrund:     Nicht #000, sondern #121212 Minimum
    Text:            Nicht #FFF, sondern #E5E5E5 Maximum
    Akzentfarben:    Helligkeit +10% bis +15%

═══════════════════════════════════════════════════════════════════════════════
SEKTION 10: ENTERPRISE-CHEATCODE-REGISTER (100K-WERT-GARANTIE)
═══════════════════════════════════════════════════════════════════════════════

  DIESES REGISTER LISTET ALLE 35 ENTERPRISE-CHEATCODES DIE IN DER PIPELINE
  VERANKERT SIND. JEDER CHEATCODE IST EIN WERTSTEIGERNDER BAUSTEIN DER
  DAS ENDERGEBNIS VON EINER STANDARD-WEBSITE ZU EINEM PREMIUM-PRODUKT
  MIT EINEM MARKTWERT VON MINDESTENS 100.000 EUR TRANSFORMIERT.

───────────────────────────────────────────────────────────────────────────────
PERFORMANCE & ARCHITEKTUR (in ZERO-BREAKAGE Pipeline):
───────────────────────────────────────────────────────────────────────────────
  CC-01  Incremental Static Regeneration (ISR)      → ZB-PHASE-01
  CC-02  Streaming SSR mit React Suspense           → ZB-PHASE-01
  CC-03  Prefetching-Strategie (Zero-Latenz)        → ZB-PHASE-01
  CC-04  Environment-Config-Hierarchie              → ZB-PHASE-01
  CC-05  Hierarchische Error Boundaries             → ZB-PHASE-04
  CC-06  Graceful Degradation                       → ZB-PHASE-04
  CC-07  Retry-Logik mit Exponential Backoff        → ZB-PHASE-04
  CC-08  Stale-While-Revalidate Caching             → ZB-PHASE-14
  CC-09  Rate-Limiting ohne CAPTCHA                 → ZB-PHASE-14
  CC-10  API-Route Security Patterns                → ZB-PHASE-14
  CC-11  Feature Flags ohne externen Service        → ZB-PHASE-15
  CC-12  Custom Hook Library (7 Pflicht-Hooks)      → ZB-PHASE-15
  CC-13  Compound Component Pattern                 → ZB-PHASE-15
  CC-14  Automatisches Format-Switching AVIF/WebP   → ZB-PHASE-16
  CC-15  Font-Loading Performance (next/font)       → ZB-PHASE-16
  CC-16  Critical CSS & Bundle Optimization         → ZB-PHASE-16
  CC-17  Web Vitals Tracking (ohne Drittanbieter)   → ZB-PHASE-19
  CC-18  Lighthouse CI Gate (Score >= 90)           → ZB-PHASE-19
  CC-19  Bundle Size Monitoring                     → ZB-PHASE-19

───────────────────────────────────────────────────────────────────────────────
DESIGN & UX PREMIUM (in DESIGN Pipeline):
───────────────────────────────────────────────────────────────────────────────
  CC-20  Slot-basierte Component-Architektur        → DESIGN-PHASE-03
  CC-21  Polymorphe Komponenten (as-Prop)           → DESIGN-PHASE-03
  CC-22  Variant-System mit CVA                     → DESIGN-PHASE-03
  CC-23  View Transitions API                       → DESIGN-PHASE-04
  CC-24  Scroll-Triggered Animation System          → DESIGN-PHASE-04
  CC-25  Skeleton Loading System                    → DESIGN-PHASE-04
  CC-26  Optimistic UI                              → DESIGN-PHASE-05
  CC-27  Scroll Restoration & Navigation State      → DESIGN-PHASE-05
  CC-28  Virtual Scrolling                          → DESIGN-PHASE-05
  CC-29  Smart Back-to-Top Button                   → DESIGN-PHASE-05

───────────────────────────────────────────────────────────────────────────────
SEO & AI-DISCOVERABILITY (in AI-DISCOVERY Pipeline):
───────────────────────────────────────────────────────────────────────────────
  CC-30  Maximale SERP-Real-Estate (Rich Snippets)  → AI-DISCOVERY-PHASE-02
  CC-31  OG-Image-Generierung (Social Cards)        → AI-DISCOVERY-PHASE-02
  CC-32  RSS/Atom Feed (Content Syndication)        → AI-DISCOVERY-PHASE-03
  CC-33  Automatische Sitemap mit lastmod           → AI-DISCOVERY-PHASE-03
  CC-34  Canonical URL Management                   → AI-DISCOVERY-PHASE-03
  CC-35  Robots.txt mit AI-Crawler-Optimierung      → AI-DISCOVERY-PHASE-03

───────────────────────────────────────────────────────────────────────────────
KONTROLLIERTE KREATIVITAET (in DESIGN Pipeline — NEU):
───────────────────────────────────────────────────────────────────────────────
  CC-36  Goldener-Schnitt-Layout-System (PHI)          → DESIGN-PHASE-01
  CC-37  Farbpsychologie-Branchen-Matrix               → DESIGN-PHASE-02
  CC-38  60-30-10-Farbverteilungs-Enforcement          → DESIGN-PHASE-02
  CC-39  Visuelle-Fuehrungs-Patterns (F/Z/Gutenberg)   → DESIGN-PHASE-06
  CC-40  Preview-Validierung im Domino-Lifecycle (D.5) → DESIGN-PHASE-01-10
  CC-41  Anti-AI-Look-5-Sekunden-Test                  → DESIGN-PHASE-10
  CC-42  Phi-basiertes Spacing/Typografie-System        → DESIGN-TOKENS

───────────────────────────────────────────────────────────────────────────────
WERT-KALKULATION (WARUM 100K+):
───────────────────────────────────────────────────────────────────────────────
  Performance-Cheatcodes (CC-01..04, 08, 14..19):  ~25.000 EUR Wert
    ISR + Streaming + Prefetch + Caching + Monitoring = Enterprise-Grade Performance
  Resilience-Cheatcodes (CC-05..07, 09..10):       ~15.000 EUR Wert
    Error Handling + Retry + Rate Limiting + API Security = Produktionsreife
  Component-Architektur (CC-11..13, 20..22):       ~20.000 EUR Wert
    Feature Flags + Custom Hooks + CVA + Polymorphie = Skalierbare Codebasis
  UX-Premium (CC-23..29):                          ~20.000 EUR Wert
    View Transitions + Skeletons + Optimistic UI = Awwwards-Level Feeling
  SEO/AI-Discovery (CC-30..35):                    ~20.000 EUR Wert
    Rich Snippets + OG-Images + RSS + AI-Crawler = Maximale Sichtbarkeit
  GESAMT (bisherig):                                ~100.000 EUR MARKTWERT
  Kontrollierte-Kreativitaet (CC-36..42):              ~15.000 EUR Wert
    Phi-Layout + Farbpsychologie + Preview = Wissenschaftlich fundierte Aesthetik
  NEUER GESAMT:                                        ~115.000 EUR MARKTWERT

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-41 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   [ ] npx tsc --noEmit → 0 Errors
   [ ] npm run lint → 0 Errors
   [ ] npm run build → SUCCESS

2. STATE UPDATE:
   [ ] .pipeline-master-state.md → SEQ-31 als COMPLETED markieren
   [ ] Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   [ ] Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   [ ] Handoff-Notizen schreiben (Was ist relevant fuer SEQ-32)
   [ ] .project-knowledge-base.md aktualisieren (Token-System dokumentieren)

3. AUTOMATISCHER HANDOFF:
   → NAECHSTE PHASE: SEQ-42 → DESIGN-PHASE-01.md
   → Lese DESIGN-PHASE-01.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste fuer Phase SEQ-32
   → DER INFINITE LOOP SETZT FORT.

═══ PHASE SEQ-31 → SEQ-32: HANDOFF AKTIV ═══

