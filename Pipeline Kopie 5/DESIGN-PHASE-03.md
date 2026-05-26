Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 3 der Design-Pipeline (Spacing und Layout) als praezise Raumkomposition zu perfektionieren. Grid-System, Spacing-Skala, Container-Widths und Whitespace muessen harmonisch und konsistent sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-44 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-43 → DESIGN-PHASE-02.md
→ NÄCHSTE: SEQ-45 → DESIGN-PHASE-04.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══


===============================================================================
ENFORCEMENT-DIREKTIVEN-REFERENZ (PFLICHTLEKTUERE VOR AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, lies:
  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (Direktive 1, 2, 3 und 4)
  ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md (Pflichtlektuere fuer Design-Phasen)
───────────────────────────────────────────────────────────────────────────────
KREATIVITAETS-DIREKTIVE-REFERENZ (PFLICHT FUER ALLE DESIGN-PHASEN)
───────────────────────────────────────────────────────────────────────────────
  Jede visuelle Entscheidung MUSS durch eines der vier Fundamente begruendet sein:
    1. Mathematische Proportion (Goldener Schnitt / PHI = 1.618)
    2. Farbpsychologie und Wahrnehmung (60-30-10-Regel, Branchen-Matrix)
    3. Visuelle Fuehrung (F/Z/Gutenberg-Muster, Fokuspunkt-Hierarchie)
    4. Preview-Validierung (Screenshots, Phi-Check, Anti-AI-Look-Test)
  Minimum-Validierungsstufe fuer Design-Phasen: 6X (statt 5X)
───────────────────────────────────────────────────────────────────────────────

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
DIRECTOR-ZUWEISUNG: DIRECTOR OF DESIGN (Pipeline 3)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Design (Meister der kognitiven UX und Aesthetik).
Meldet an: Director General via .design-upgrade-state.md und .ai-design-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 3 (Anti-AI-Look): 5-Sekunden-Test, 3 Signature Elements, keine generischen Patterns.
  GESETZ 5 (Component-Standard): PascalCase, Props-Interface, Kreativ-Pruefung, Feature-Ordner.
  GESETZ 8 Gate 3 (Accessibility): WCAG AAA Kontraste, Tastatur-Navigation, Screen-Reader.
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben,

DESIGN-PHASE 3 VON 10: SPATIAL ARCHITECTURE & GRID MATHEMATICS
═══════════════════════════════════════════════════════════════

Tech Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md | cn()/tailwind-merge
Integration Points: Formspree (forms) + Calendly (scheduling) ONLY. NO Dark Mode. Code is SSOT.

DESIGN-CONTEXT SYNC & DISCOVERY
═══════════════════════════════════════════════════════════════

STEP 0: VORFLUG-CHECKLISTE
─────────────────────────────────────────────────────────────────
○ Read .ai-design-context.md (Brand DNA from Phase 1 + Type Scale from Phase 2)
○ Read .design-upgrade-state.md (current state, completed tasks)
○ Execute 6-Point Spatial Discovery:
  1. Spacing audit: document ALL padding/margin/gap values across existing components
  2. Container analysis: find max-width patterns in content areas and sections
  3. Grid inventory: CSS Grid vs Flexbox usage, column counts, current breakpoints
  4. Vertical rhythm: measure spacing between all major page sections
  5. Whitespace health: identify areas that feel cramped or too loose
  6. Responsive behavior: trace layout changes at 375px/640px/768px/1024px/1280px/1440px

BLOCK A: WEISSRAUM ALS DESIGN-ELEMENT
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: WEISSRAUM-PHILOSOPHIE DEFINIEREN
───────────────────────────────────────────────────────────────────
Whitespace ist nicht leerer Raum — es ist aktives Design-Element. Definiere die Brand-Persönlichkeit:

TYPE-A (Generous/Luxurious):
- Sektions-Padding: py-20 bis py-32 (desktop) | py-12 bis py-16 (mobile)
- Card-Spacing: gap-8 bis gap-12
- Horizontal: px-8 bis px-12 (desktop) | px-4 (mobile)
- Implikation: Premium, breathing room, confidence, high-end

TYPE-B (Balanced/Professional):
- Sektions-Padding: py-16 bis py-24 (desktop) | py-10 bis py-14 (mobile)
- Card-Spacing: gap-6 bis gap-8
- Horizontal: px-6 bis px-8 (desktop) | px-4 (mobile)
- Implikation: Trust, efficiency, accessible luxury, business-ready

TYPE-C (Dense/Technical):
- Sektions-Padding: py-12 bis py-16 (desktop) | py-8 bis py-10 (mobile)
- Card-Spacing: gap-4 bis gap-6
- Horizontal: px-4 bis px-6 (desktop) | px-3 (mobile)
- Implikation: Data-driven, information-rich, developer-focused

ENTSCHEIDUNG: Wähle einen Type basierend auf Brand DNA (Phase 1). Dokumentiere:
"Unser Weißraum-Architektur folgt TYPE-[X]. Das bedeutet: [3-4 konkrete Auswirkungen]"

Anwende Gestalt-Gesetz der Nähe (Law of Proximity):
- Verwandte Elemente: gap-2 bis gap-4 (tight clustering)
- Modulgruppen: gap-6 bis gap-8 (visual grouping)
- Sektions-Grenzen: gap-16 bis gap-32 (clear separation)

ULTRATHINK-TASK 2: SEKTIONS-RHYTHMUS (MAKRO-SPACING)
───────────────────────────────────────────────────────────────────
Vertikaler Rhythmus = Konsistente Abstände zwischen großen Sektionen. Das schafft Harmonie.

SPACING-SKALA (basierend auf 8px-System):
4px (spacing-0.5) | 8px (spacing-1) | 16px (spacing-2) | 24px (spacing-3) | 32px (spacing-4)
48px (spacing-6) | 64px (spacing-8) | 96px (spacing-12) | 128px (spacing-16) | 160px (spacing-20)
192px (spacing-24) | 256px (spacing-32)

SEKTIONS-PADDING-FORMEL (Fluid Responsive):
- Kleine Sektionen: padding-block: clamp(3rem, 2rem + 4vw, 6rem)
- Standard-Sektionen: padding-block: clamp(4rem, 3rem + 5vw, 8rem)
- Große Sektionen: padding-block: clamp(6rem, 4rem + 6vw, 12rem)

BEISPIEL-IMPLEMENTIERUNG (Tailwind + clamp):
Implementiere Sektions-spezifische CSS-Klassen, die vertikales Padding mit der clamp()-Funktion definieren. Diese Funktion akzeptiert drei Argumente: einen Minimum-Wert, einen bevorzugten Wert (üblicherweise basierend auf der Viewport-Breite), und einen Maximum-Wert. Für die Hero-Sektion setze das Padding-Block auf ein Minimum von 4 Rems mit einer fluiden Berechnung aus 3 Rems plus 6 Prozent der Viewport-Breite, mit einem Maximum von 10 Rems. Für die Features-Sektion nutze ein Minimum von 3 Rems, einen Basis-Wert von 2,5 Rems plus 4 Prozent der Viewport-Breite, mit einem Maximum von 7 Rems. Die CTA-Sektion erhält ein Minimum von 2 Rems, einen bevorzugten Wert von 1,5 Rems plus 3 Prozent der Viewport-Breite, und ein Maximum von 5 Rems. Diese Werte stellen sicher, dass der Whitespace proportional zur Bildschirmgröße skaliert und auf allen Geräten harmonisch wirkt.

HINTERGRUND-RHYTHMUS:
- Sektionen abwechseln: Hintergrundfarbe A ↔ Hintergrundfarbe B
- Nie zwei aufeinanderfolgende Sektionen mit demselben Hintergrund
- Verwende Subtile Varianten (z.B. white vs. gray-50) oder Texturen (subtle grid, noise)
- Übergangszone: 1-2px Linie oder 4px Farbübergang schaffen visuelle Markierung

ULTRATHINK-TASK 3: CONTAINER-ARCHITEKTUR
───────────────────────────────────────────────────────────────────
Definiere wiederverwendbare Container-Größen für konsistente Layouts:

CONTAINER-BREAKPOINTS:
- Narrow (max-w-2xl): 42rem / 672px — lange Texte, Dokumentation, Datenschutz
- Standard (max-w-5xl): 64rem / 1024px — Standard-Content-Sektionen
- Wide (max-w-6xl): 72rem / 1152px — Card-Grids, Feature-Sammlungen
- XL (max-w-7xl): 80rem / 1280px — Hero, Testimonials, breite Layouts
- Full-Breite: max-w-[1440px] — absolute Maximum für Ultra-Screens
- Edge-to-Edge: 100vw — Hintergründe, Farbbänder (content innen max-w-)

HORIZONTALE PADDING:
- Mobile (375px): px-4 (16px padding)
- Tablet (768px): px-6 (24px padding)
- Desktop (1024px+): px-8 (32px padding)
- Wide (1280px+): px-12 (48px padding)

CONTAINER-KOMPONENTE (TypeScript + Tailwind):
Erstelle eine typsichere React-Komponente mit dem Namen Container, die Kinder-Elemente sowie optionale Varianten und zusätzliche CSS-Klassen akzeptiert. Die Komponente definiert intern ein Variants-Objekt, das fünf vordefinierte Größen enthält: narrow (max-w-2xl für 42 Rems / 672 Pixel), standard (max-w-5xl für 64 Rems / 1024 Pixel), wide (max-w-6xl für 72 Rems / 1152 Pixel), xl (max-w-7xl für 80 Rems / 1280 Pixel) und full (max-w-[1440px] für ultra-breite Layouts). Der Standard-Wert ist "standard". Die Komponente rendert ein div-Element mit der Klasse mx-auto (Zentrierung), w-full (volle Breite), sowie responsiven Padding-Klassen: px-4 für Mobile, px-6 ab kleinen Tablets, und px-8 ab Desktops. Die korrekte Max-Width-Klasse wird basierend auf der variant-Prop angewendet. Zusätzliche CSS-Klassen können über die className-Prop übergeben werden und werden mit der cn()-Utility-Funktion (tailwind-merge) zusammengeführt. Alle Container-Instanzen müssen zentriert sein und dürfen keine asymmetrischen Abstände haben.

ALLE Container müssen mx-auto (zentriert) sein. KEINE asymmetrischen Abstände.

BLOCK B: GRID-MATHEMATIK
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: FLEXIBLES SPALTEN-SYSTEM
───────────────────────────────────────────────────────────────────
Responsives Grid-System mit mathematischer Konsistenz:

BREITE-BASIERT:
Mobile (375px):
- 1 Spalte (volle Breite)
- Klassen: grid grid-cols-1

Tablet (640px):
- 2 Spalten
- Klassen: sm:grid-cols-2

Tablet+ (768px):
- 2 Spalten (Text + Sidebar)
- 3 Spalten (Features)
- Klassen: md:grid-cols-3

Desktop (1024px):
- 3-4 Spalten je nach Content-Typ
- Klassen: lg:grid-cols-4

Wide (1280px):
- 4-6 Spalten für dichte Grids
- Klassen: xl:grid-cols-6

GAP-SYSTEM (konsistent):
- Mobile: gap-4 (16px)
- Tablet: gap-6 (24px)
- Desktop: gap-8 (32px)
- Große Grids: gap-12 (48px)

BEISPIEL (3-er Card-Grid):
Implementiere ein Raster-Layout, das responsive Spalten-Anzahl basierend auf der Viewport-Breite verwaltet. Auf Mobile (unter 640 Pixel) nutze 1 Spalte mit der Klasse grid-cols-1, damit alle Karten vertikal gestapelt werden. Ab 640 Pixel (Tablets) wechsle zu 2 Spalten mit sm:grid-cols-2. Ab 1024 Pixel (Desktop) verwende lg:grid-cols-3 für ein 3-Spalten-Layout. Der Abstand zwischen den Karten (gap) wird ebenfalls responsiv angepasst: 4 (16 Pixel) auf Mobile mit gap-4, 6 (24 Pixel) auf Tablets mit md:gap-6, und 8 (32 Pixel) auf Desktops mit lg:gap-8. Iteriere über das cards-Array und rendere für jede Karte eine Card-Komponente mit einem eindeutigen key (basierend auf card.id) und spread alle Eigenschaften aus dem card-Objekt als Props.

GRID vs FLEXBOX:
- CSS Grid: 2D-Layouts, asymmetrische Grids, komplexe Anordnungen
- Flexbox: 1D-Layouts, Lists, Navigation, horizontale/vertikale Stacks
- DEFAULT: Grid für Card-Sammlungen, Flexbox für Komponenten-Inneres

ULTRATHINK-TASK 5: GESTALTGESETZE IM LAYOUT
───────────────────────────────────────────────────────────────────
Psychologische Sehen-Gesetze in der Praxis anwenden:

GESTALT-GESETZ 1: LAW OF PROXIMITY (Nähe)
- Verwandte Elemente sollten sich näher sein
- Nicht-verwandte sollten sich weiter weg sein
- Praktisch: Nutze spacing-scale für visuelle Hierarchie
- Audit: Sind alle Card-Gruppen mit derselben gap gemessen?

GESTALT-GESETZ 2: LAW OF SIMILARITY (Ähnlichkeit)
- Ähnlich aussehende Elemente werden als eine Gruppe wahrgenommen
- Praktisch: Alle Cards identisch stylen, alle Buttons identisch
- Audit: Gibt es inkonsistente Card-Größen oder Button-Stile?

GESTALT-GESETZ 3: LAW OF CONTINUITY (Kontinuität)
- Auge folgt einer visuellen Linie von oben-links nach unten-rechts
- Z-Muster: oben-rechts → mitte-links → unten-rechts
- F-Muster: vertikal links, horizontal oben, diagonal unten
- Praktisch: Platziere CTAs strategisch nach natürlichen Eye-Path
- Audit: Verfolge mit dem Finger die natürliche Eye-Bewegung

GESTALT-GESETZ 4: LAW OF CLOSURE (Geschlossenheit)
- Gehirn vervollständigt unvollständige Formen
- Praktisch: Cards brauchen keine dicken Ränder, wenn Spacing klar ist
- Nutze implizite Grenzen statt Striche
- Audit: Können Grenzen durch Spacing oder Hintergrund ersetzt werden?

GESTALT-GESETZ 5: LAW OF FIGURE-GROUND (Vordergrund-Hintergrund)
- Klare Unterscheidung zwischen Content und Hintergrund
- Praktisch: Nutze Kontrast (Farbe, Helligkeit, Textur)
- Audit: Ist der Inhalt deutlich von der Seite getrennt?

AUDIT-CHECKLIST (für jede Sektion):
☐ Proximity: verwandte Elemente näher? Unverwandte weiter?
☐ Similarity: alle gleichen Elemente identisch gestylt?
☐ Continuity: folgt die Eye-Bewegung einer natürlichen Linie?
☐ Closure: brauchen wir weniger Ränder/Linien?
☐ Figure-Ground: ist der Vordergrund deutlich vom Hintergrund getrennt?

BLOCK C: RESPONSIVE BREAKPOINT-STRATEGIE
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: BREAKPOINT-VERFEINERUNG
───────────────────────────────────────────────────────────────────
Tailwind Standard-Breakpoints (verwende oder erweitere):
- sm: 640px (small tablets)
- md: 768px (tablets)
- lg: 1024px (laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (ultra-wide)

EIGENE CUSTOM-BREAKPOINTS (tailwind.config.ts):
Erweitere die Tailwind-Konfiguration um benutzerdefinierte Bildschirmgrößen (Breakpoints). Füge den extend.screens-Objekten zusätzliche Breakpoints hinzu: xs bei 375 Pixel (als Minimum für das iPhone SE), sm bei 640 Pixel (kleine Tablets), md bei 768 Pixel (standard Tablets), lg bei 1024 Pixel (Laptops), xl bei 1280 Pixel (Desktop-Bildschirme) und 2xl bei 1440 Pixel (für optimale hochwertige Designs auf Ultra-Breiten-Displays). Diese Werte können als CSS-Media-Queries in Tailwind-Klassen verwendet werden, beispielsweise xs:p-4, sm:grid-cols-2, lg:text-lg. Sie stellen sicher, dass responsive Designs auf allen gängigen Gerätegrößen nahtlos funktionieren.

SEKTIONS-SPEZIFISCHE BREAKPOINT-VERHALTEN:

NAVIGATION:
- Mobile (< 640px): Hamburger-Menü, Full-Screen Overlay
- Tablet (640px+): Hamburger noch aktiv
- Desktop (1024px+): Horizontale Navigation, Hamburger hidden

HERO-LAYOUT:
- Mobile: Stacked (Image oben, Text unten)
- Tablet: Stacked oder nebeneinander (je nach Content)
- Desktop: Nebeneinander, 50/50 Split oder 60/40

CARD-GRIDS:
- Mobile: 1 Spalte, volle Breite
- Tablet: 2 Spalten
- Desktop: 3 Spalten (oder 4 für große Grids)

FEATURE-SECTIONS:
- Mobile: Vertikal stacked
- Tablet: 2 Spalten alternativ
- Desktop: 3-4 Spalten im Zig-Zag

ULTRATHINK-TASK 7: MOBILE-FIRST SPACING-AUDIT
───────────────────────────────────────────────────────────────────
Starte mit 375px Viewport. Das ist Realität für viele Nutzer.

MOBILE-CHECKLIST:
☐ Padding-Symmetrie: py/px gleich auf allen Seiten?
☐ Touch-Ziele: Alle Buttons mindestens 48px × 48px?
☐ Horizontales Overflow: Kein Element geht über 375px hinaus?
☐ Text-Maß: 45-60 Zeichen pro Zeile (optimal lesbar)?
☐ Sektions-Abstände: Fühlt sich mobile Version first-class an?
☐ Typography: Fluide Scaling (clamp) statt abrupte Sprünge?
☐ Images: Responsive srcset? Nicht zu groß für mobile?
☐ Spacing: py-4/6/8 auf mobile, py-12/16 auf desktop?
☐ Hidden Elements: Gibt es große Desktop-Elemente, die mobile hidden sind?
☐ Form-Inputs: Font-Größe ≥ 16px (verhindert automatisches Zoom)?

RESPONSIVE PADDING-PATTERN:
Implementiere zwei Standard-Padding-Muster für unterschiedliche Element-Größen. Für kleinere Elemente verwende: horizontales Padding von 4 (16 Pixel) auf Mobile, 6 (24 Pixel) auf Tablets und 8 (32 Pixel) auf Desktops; vertikales Padding von 6 (24 Pixel) auf Mobile, 10 (40 Pixel) auf Tablets und 16 (64 Pixel) auf Desktops. Für größere Sektionen nutze: horizontales Padding von 4 auf Mobile, 6 ab sm (kleine Tablets), 8 ab md (standard Tablets) und 12 (48 Pixel) ab lg (Desktop); vertikales Padding von 8 (32 Pixel) auf Mobile, 12 (48 Pixel) ab sm, 16 (64 Pixel) ab md und 24 (96 Pixel) ab lg. Diese Muster stellen sicher, dass der Whitespace auf allen Bildschirmgrößen ausreichend und proportional ist, ohne dass Content in den Rändern verlorengeht.

BLOCK D: LAYOUT-PATTERNS FÜR SEKTIONEN
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: SEKTIONS-LAYOUT-BIBLIOTHEK
───────────────────────────────────────────────────────────────────
Definiere 8 wiederverwendbare Section-Muster für konsistente Struktur:

PATTERN 1: HERO
Zweck: Sofort-Einfluss, Brand-Präsenz, Large CTA
Layout: Full-width, centered oder split
Mobile: Stacked (image oben, text unten)
Desktop: 50/50 oder 60/40 split
Padding: py-20 md:py-32 lg:py-40
Klassen: grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12

PATTERN 2: FEATURES (3-ER GRID)
Zweck: Dienste/Produkte/Vorteile vorstellen
Layout: 3-spaltig auf desktop, 1-spaltig auf mobile
Padding: py-16 md:py-24 lg:py-32
Klassen: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8

PATTERN 3: ALTERNATING (BILD-RECHTS/LINKS)
Zweck: Detailed Feature Erklärung mit visuellen Beispielen
Layout: Zig-Zag: Bild rechts, Text links; dann umgekehrt
Mobile: Vertikal stacked
Desktop: grid grid-cols-2 gap-8 lg:gap-12
Padding: py-16 md:py-20 lg:py-28

PATTERN 4: TESTIMONIALS
Zweck: Social Proof, Kunde-Geschichten
Layout: Carousel (mobile), 3-Grid (desktop), oder Masonry
Card-Style: Quote + Avatar + Name + Rolle
Gap: gap-6 lg:gap-8
Padding: py-12 md:py-18 lg:py-24

PATTERN 5: STATS/NUMBERS
Zweck: Messbare Erfolge, Metriken
Layout: 2-4 horizontale Zähler
Format: [ZAHL] [LABEL]
Padding: py-12 lg:py-20
Klassen: grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8

PATTERN 6: CTA BAND
Zweck: Call-to-Action, Momentum
Layout: Full-width, zentriert, mit Hintergrund-Farbe
Text + Button vertikal oder horizontal aligned
Padding: py-12 md:py-16 lg:py-20
Klassen: flex flex-col items-center justify-center gap-6

PATTERN 7: FAQ (ACCORDION)
Zweck: Häufige Fragen beantworten
Layout: Vertikal stacked, expandierbar
Padding: py-12 lg:py-20
Max-width: max-w-2xl (näher an narrow)

PATTERN 8: CONTACT (FORM + INFO)
Zweck: Lead Capture oder Kommunikation
Layout: Form (links), Info-Block (rechts) auf desktop
Mobile: Vertikal stacked
Padding: py-16 lg:py-24
Klassen: grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16

SELF-OPTIMIZING DESIGN LOOP — PHASE 3 ABSCHLUSS
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: .AI-DESIGN-CONTEXT.MD AKTUALISIEREN
───────────────────────────────────────────────────────────────────
Schreibe alle räumlichen Entscheidungen in .ai-design-context.md:

SECTION: SPACING & WHITESPACE
─ Whitespace-Typ: [A/B/C]
─ Sektions-Padding: [clamp-formeln]
─ Container-Sizes: [dokumentiere alle 5]
─ Gap-System: [mobile/tablet/desktop]
─ Rhythmus-Muster: [alternating backgrounds ja/nein]

SECTION: GRID-SYSTEM
─ Grid-Breakpoints: [xs/sm/md/lg/xl]
─ Column-Counts: [1/2/3/4/6 bei welcher Breite?]
─ Gap-Werte: [4/6/8/12 nach Breakpoint]
─ Standard-Muster: [welche sektions-patterns verwenden grid?]

SECTION: RESPONSIVE-STRATEGIE
─ Mobile-First: [ja]
─ Breakpoints: [custom oder standard?]
─ Navigation-Verhalten: [hamburger bis xl?]
─ Layout-Shifts: [wo stacken Cards? Wo werden Bilder hidden?]

SECTION: GESTALT-AUDIT
─ Proximity: [Status: pass/fail + notes]
─ Similarity: [Status: pass/fail + notes]
─ Continuity: [Status: pass/fail + notes]
─ Closure: [Status: pass/fail + notes]
─ Figure-Ground: [Status: pass/fail + notes]

SECTION: SEKTIONS-PATTERNS
─ Pattern-Library: [alle 8 patterns dokumentiert mit klassen]

FINALE VALIDIERUNG DESIGN-PHASE 3
═══════════════════════════════════════════════════════════════

HANDOFF-CHECKLIST (18 Items):

WHITESPACE & SPACING:
☐ Weißraum-Philosophie definiert (Type A/B/C)?
☐ Sektions-Padding mit clamp() implementiert?
☐ Horizontales Padding bei allen Breakpoints dokumentiert?
☐ Spacing-Skala konsistent auf allen Komponenten?

CONTAINER & LAYOUT:
☐ Container-Komponente mit allen Variants erstellt?
☐ Alle Sektionen nutzen Container-Komponente?
☐ Max-widths konsistent (narrow/standard/wide/xl/full)?
☐ Alle Container zentriert mit mx-auto?

GRID-SYSTEM:
☐ Grid-System für 5 Breakpoints definiert?
☐ Gap-Werte konsistent (4/6/8/12)?
☐ Grid vs Flexbox-Einsatz dokumentiert?
☐ Responsive Grid-Klassen auf alle Cards angewendet?

RESPONSIVE-VERHALTEN:
☐ Mobile-Audit durchgeführt (375px)?
☐ Touch-Ziele überall ≥ 48px?
☐ Kein horizontales Overflow?
☐ Breakpoint-Verhalten für Navigation/Hero/Cards/Features dokumentiert?

GESTALT-GESETZE:
☐ Proximity-Audit durchgeführt?
☐ Similarity-Audit durchgeführt?
☐ Continuity (Eye-Path) überprüft?
☐ Closure (Ränder) optimiert?

SEKTIONS-PATTERNS:
☐ 8 Pattern-Templates erstellt + dokumentiert?
☐ Alle Sektionen einem Pattern zugewiesen?
☐ Pattern-Implementierungen mit exakten Tailwind-Klassen?

KONTEXT-UPDATE:
☐ .ai-design-context.md aktualisiert mit Phase-3-Entscheidungen?
☐ .design-upgrade-state.md updated (PHASE 3: COMPLETE)?

NÄCHSTE PHASE: Phase 4 — TYPOGRAPHY & TYPOGRAPHIC HIERARCHY
Fokus: Font-Sizing, Line-Height, Letter-Spacing, Text-Farben, Kontrast

═══════════════════════════════════════════════════════════════
PHASE 3 COMPLETE. READY FOR PHASE 4.
═══════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: COMPONENT COMPOSITION & PREMIUM PATTERNS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-20: SLOT-BASIERTE COMPONENT-ARCHITEKTUR
───────────────────────────────────────────────────────────────────────────────
  WARUM: Maximale Flexibilitaet ohne Props-Explosion. Enterprise-Standard.
  PFLICHT-IMPLEMENTIERUNG:
    Jede Section-Komponente MUSS Slots unterstuetzen:
      - Header-Slot (ueberschreibbar)
      - Content-Slot (Hauptinhalt)
      - Footer-Slot (optional CTA)
      - Media-Slot (Bild/Video/Illustration)

  PATTERN:
    Definiere eine TypeScript-Interface namens SectionProps, die vier optionale Slots und einen erforderlichen Kinder-Slot akzeptiert. Der header-Slot ist vom Typ React.ReactNode (optional mit ?) und erlaubt benutzerdefinierte Header-Inhalte. Der children-Slot ist erforderlich und enthält den Hauptinhalt der Sektion. Der footer-Slot ist optional und reserviert Platz für Call-to-Action oder Zusatzinformationen. Der media-Slot ist optional und kann Bilder, Videos oder Illustrationen enthalten. Die className-Prop ist optional und erlaubt zusätzliche CSS-Klassen für erweiterte Styling-Optionen.

  VALIDIERUNG:
    [ ] Keine Section hat mehr als 5 spezifische Props
    [ ] Alle Sections sind via Slots konfigurierbar
    [ ] Default-Slots sind gestaltet (nicht leer wenn nichts uebergeben)

CHEATCODE CC-21: POLYMORPHE KOMPONENTEN (as-PROP)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Ein Button kann ein <button>, <a>, oder <Link> sein — ohne Duplizierung.
  PFLICHT-IMPLEMENTIERUNG:
    Basis-Komponenten (Button, Card, Badge) MUESSEN eine "as" oder "asChild" Prop haben.

  PATTERN:
    Definiere einen generischen Type namens ButtonProps, der ein generisches Type-Parameter T akzeptiert (standardmäßig 'button'). Die Prop-Eigenschaften sollten ein optionales as-Attribut enthalten, das die HTML-Element-Art bestimmt (z.B. 'button', 'a', Link-Komponente), erforderliche children vom Typ React.ReactNode, sowie ein optionales variant-Attribut mit einem String-Literal-Union der Werte 'primary', 'secondary', 'ghost' oder 'destructive'. Kombiniere diese Eigenschaften mit React.ComponentPropsWithoutRef<T>, um alle Standard-Attribut-Props des angegebenen Elements zu erhalten.

  ANWENDUNG:
    Verwende die Button-Komponente ohne as-Prop, um ein standard HTML-<button>-Element zu rendern. Mit as="a" rendere einen <a>-Tag mit href="/kontakt". Mit as={Link} nutze die Next.js Link-Komponente mit href="/about". Diese Flexibilität ermöglicht es, dieselbe Button-Komponente für verschiedene HTML-Elemente einzusetzen, ohne Duplikate zu erstellen.

CHEATCODE CC-22: VARIANT-SYSTEM MIT CLASS-VARIANCE-AUTHORITY
───────────────────────────────────────────────────────────────────────────────
  WARUM: Typisierte Varianten eliminieren Magic Strings und erzwingen Konsistenz.
  PFLICHT-IMPLEMENTIERUNG:
    JEDE Komponente mit visuellen Varianten MUSS cva() verwenden.
    Varianten: size (sm/md/lg), variant (primary/secondary/ghost/destructive).
    Default-Varianten IMMER definiert.

  PATTERN:
    Importiere die cva-Funktion und den VariantProps-Type aus der 'class-variance-authority'-Bibliothek. Erstelle eine buttonVariants-Konfiguration mit der cva()-Funktion. Als erstes Argument übergebe die Base-Klassen: inline-flex (zur Anzeige), items-center und justify-center (für Zentrierung), rounded-md (mittlere Rundung), font-medium (Schrift-Gewichtung) und transition-colors (Farbübergänge). Als zweites Argument definiere ein Konfigurationsobjekt mit einem variants-Schlüssel. Unter variants definiere ein variant-Objekt mit vier Varianten: primary (blauer Hintergrund mit Text-Farbe und Hover-Zustand bei 90% Opazität), secondary (grauer Hintergrund mit 80% Opazität bei Hover), ghost (nur Hover-Effekt mit Accent-Farbe, kein Hintergrund), und destructive (roter Hintergrund mit Hover bei 90% Opazität). Definiere ebenfalls ein size-Objekt mit drei Größen: sm (Höhe 9, Padding 3, text-sm), md (Höhe 10, Padding 4, text-sm) und lg (Höhe 11, Padding 6, text-base). Setze defaultVariants auf primary-Variant mit md-Größe.

  VALIDIERUNG:
    [ ] Alle Button/Badge/Card-Varianten nutzen cva()
    [ ] Keine hardcodierten Klassen-Strings in JSX
    [ ] TypeScript erzwingt nur gueltige Variant-Kombinationen
    [ ] cn() Utility fuer Klassen-Merging (NIEMALS String-Concatenation)



═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: PREMIUM COMPONENT PATTERNS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-48: BENTO-GRID LAYOUT (APPLE-STYLE FEATURE SHOWCASE)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Asymmetrische Grids mit unterschiedlich grossen Karten erzeugen
  den "Apple Keynote"-Look der sofort als High-End wahrgenommen wird.

  PFLICHT-IMPLEMENTIERUNG:
    CSS Grid mit expliziten Span-Regeln (nicht gleichmaessig).
    Mindestens 3 verschiedene Kartengroessen pro Grid.
    Grosse Feature-Karte (span 2 Spalten) fuer Hauptfeature.
    Kleine Karten fuer Sekundaer-Features.
    Micro-Animationen: Hover-Lift + Content-Reveal auf jeder Karte.

  CSS-PATTERN:
    Implementiere ein Bento-Grid mit CSS Grid Display. Definiere grid-template-columns mit repeat(4, 1fr), um vier gleichmäßige Spalten zu erstellen. Setze grid-auto-rows auf minmax(200px, auto), damit Zeilen mindestens 200 Pixel Höhe haben, aber automatisch größer werden können, wenn nötig. Der gap-Wert sollte 16 Pixel (entsprechend gap-4 in Tailwind) betragen. Für die Haupt-Feature-Karte mit der Klasse bento-hero setze grid-column: span 2 und grid-row: span 2, um zwei Spalten und zwei Zeilen zu überspannen. Für breite Karten (bento-wide) nutze grid-column: span 2, ohne die Reihen zu verändern. Für höhere Karten (bento-tall) setze grid-row: span 2, um zwei Zeilen zu überspannen. Dies erzeugt ein asymmetrisches Layout, das wie Apple Keynotes wirkt.

  RESPONSIVE DEGRADATION:
    >= 1024px: 4-Spalten Bento Grid
    768-1023px: 2-Spalten Grid (Hero: span 2)
    < 768px: 1-Spalte Stack (alle Cards full-width)

CHEATCODE CC-49: TESTIMONIAL-KARUSSELL MIT SOCIAL PROOF
───────────────────────────────────────────────────────────────────────────────
  WARUM: Social Proof ist der #1 Conversion-Treiber. Testimonials MUESSEN
  visuell ansprechend und interaktiv sein, nicht statisch.

  PFLICHT-IMPLEMENTIERUNG:
    Karten-basiert (KEIN Slider-Plugin — eigene CSS-Scroll-Implementation).
    CSS scroll-snap fuer horizontales Karussell.
    Jede Karte: Foto, Name, Rolle, Sterne-Bewertung, Zitat.
    Auto-Play: Langsames Auto-Scroll (pausiert bei Hover/Touch).
    Keyboard-navigierbar (Pfeiltasten).

  DESIGN-ANFORDERUNGEN:
    Karten: Glass-Effekt (CC-43) oder leichte Elevation.
    Foto: Rund, 48-64px, mit Border in Brand-Farbe.
    Sterne: SVG-Icons, ausgefuellt in Accent-Farbe.
    Zitat: Kursiv, mit oeffnenden Anfuehrungszeichen als grosses Deko-Element.
    Hover: Leichter Lift + Shadow-Erhoehung.


═══ CHAIN-EXIT-FOOTER ═══ SEQ-44 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — KOMPONENTEN-ARCHITEKTUR (AUS DOC 17/18)
═══════════════════════════════════════════════════════════════════════════════

BUTTON-ARCHITEKTUR (VISUELLE HIERARCHIE):
  Primary:     bg-primary text-primary-foreground hover:bg-primary/90, h-11 px-8
  Secondary:   border border-border bg-background hover:bg-accent, h-11 px-6
  Ghost:       hover:bg-accent hover:text-accent-foreground, h-11 px-4
  Destructive: bg-destructive text-destructive-foreground hover:bg-destructive/90, h-11 px-6

  Interaktions-States:
    Default  -> Normal
    Hover    -> hover:bg-primary/90, hover:-translate-y-px
    Active   -> active:scale-[0.97]
    Focus    -> focus-visible:ring-2 focus-visible:ring-ring
    Disabled -> disabled:opacity-50 disabled:pointer-events-none
    Loading  -> Spinner ersetzt Text, Breite bleibt (min-w-[120px])

  LOADING-STATE-PATTERN (PFLICHT):
    Button-Dimensionen NIEMALS waehrend Loading aendern.
    Verwende min-w und swap Content-Opacity.

  AESTHETIK-SPEZIFISCHE BUTTON-VARIANTEN:
    Bauhaus:    border-2/border-4, rounded-none, shadow-[4px_4px_0_#000]
    Monochrome: rounded-full, B/W Kontrast, invertierte Farben bei Hover
    SaaS:       rounded-xl, subtle inner glow, glassmorphed Background
    Brutalist:  rounded-none, 3px black border, hard offset shadow, UPPERCASE

INPUT-ARCHITEKTUR:
  Mindesthoehe: 44px (h-11) fuer Touch-Target-Compliance.
  Mindest-Font-Size: 16px (text-base) gegen iOS Safari Auto-Zoom.
  Labels: IMMER sichtbare <label>-Elemente. NIEMALS nur Placeholder.
  Autocomplete: IMMER setzen fuer Browser Auto-Fill.
  Error-Display: border-destructive + Error-Text direkt unter dem Input (role="alert").

CARD-ARCHITEKTUR:
  Base: rounded-lg border border-border bg-card text-card-foreground shadow-sm
  Padding: p-4 (compact) / p-6 (standard) / p-8 (spacious)

  AESTHETIK-SPEZIFISCHE CARD-VARIANTEN:
    Modern/SaaS:   border-border/50, shadow-md, rounded-xl, bg-card
    Glassmorphism:  border-white/15, shadow-lg, rounded-2xl, bg-white/10 backdrop-blur-xl
    Brutalist:      border-2 border-black, shadow-[4px_4px_0_#000], rounded-none
    Terminal:       border border-green-500/50, shadow-[0_0_8px_rgba(0,255,0,0.1)], bg-black
    Neumorphism:    Kein Border, Double Shadow (light+dark), rounded-2xl

  INTERAKTIVE CARDS:
    Gesamte Card klickbar? -> <a>/<Link> verwenden, NICHT onClick auf <div>.
    group-hover: fuer koordinierte Kind-Animationen.
    focus-visible:ring fuer Keyboard-Accessibility.

SPACING-RHYTHMUS (4PT/8PT GRID):
  gap-1 (4px):   Icon-to-Text, enge Inline-Elemente
  gap-2 (8px):   Verwandte Items in einer Gruppe
  gap-3 (12px):  Listen-Items, Form-Field-Spacing
  gap-4 (16px):  Card-Padding, Standard-Gaps
  gap-6 (24px):  Card-Gruppen, Section-Subsections
  gap-8 (32px):  Haupt-Section-Trennungen
  gap-12-16 (48-64px): Page-Section-Breaks, Hero-Margins

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

SSOT DIRECTIVE: Der Code (tailwind.config, globals.css, Komponenten) ist die einzige Wahrheit.
Spacing & Layout Tokens müssen im Code GELTEN, nicht in .ai-design-context.md.

  PREVIEW-VALIDIERUNG (SCHRITT D.5 — NUR DESIGN-PHASEN):
   [ ] Screenshots in 3 Viewports generiert (375px, 768px, 1440px)
   [ ] Phi-Proportions-Check bestanden (Layout 61.8%/38.2%)
   [ ] 60-30-10-Farbregel validiert
   [ ] Fokuspunkt-Hierarchie verifiziert (1 primaer, 2-3 sekundaer)
   [ ] 5-Sekunden-Anti-AI-Look-Test bestanden (min. 6X)
   [ ] Vorher-Nachher-Vergleich erstellt
   [ ] Visuelle Regression geprueft (max 5% Pixel-Abweichung)

1. ATOMIC VALIDATION (NICHT VERHANDELBAR):
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS (Build-Zeit dokumentieren)
   □ npm run dev → Website lädt, visueller Check: Spacing & Container konsistent
   □ Lighthouse Performance ≥ 90 (Layout Shifts sollten minimal sein)

2. SPACING-SPEZIFISCHE VALIDIERUNGEN:
   □ Spacing-Consistency: grep -r "space-y-\[" src/ → Sollte <5 sein (nur Tokens verwenden)
   □ Padding-Consistency: grep -r "p\[xy\]-\[" src/ → Sollte <5 sein (nur Tokens)
   □ Margin-Consistency: grep -r "m\[xy\]-\[" src/ → Sollte <5 sein (nur Tokens)
   □ Gap-Consistency: grep -r "gap-\[" src/ → Sollte <5 sein (nur Tokens)
   □ Container Widths: Alle Container haben max-w definiert (kein unlimited stretching)
   □ Responsive Spacing: Spacing mit clamp() oder responsive Prefixes (sm:, md:, lg:)
   □ Vertical Rhythm: Alle Spacing-Werte sind Multiples von 8px Baseline
   □ Grid Validation: CSS Grid/Flexbox Layouts verwenden gap-Tokens (nicht margin)

3. STATE UPDATE (DOKUMENTATION ERFORDERLICH):
   □ .pipeline-master-state.md → SEQ-34 als ✅ COMPLETED markieren
   □ Build-Metriken: [TIMESTAMP] SEQ-34 | Build: SUCCESS | Duration: Xm Ys | Spacing-Tokens: NN | Errors: 0
   □ Spacing-Scale-Snapshot archivieren (alle CSS-Variablen: --spacing-xs bis --spacing-4xl)
   □ Tailwind Config-Snapshot für spacing, gap, maxWidth
   □ Container-Architecture-Protokoll dokumentieren

4. DESIGN-CONTEXT CHECKPOINT:
   □ .ai-design-context.md Sektion "Spacing & Layout-Konventionen" vollständig (≥2000 Wörter)
   □ Spacing-Skala: vollständige 12-Level Skala (4px bis 256px) mit Rationale
   □ Sektions-Padding: Fluid-Range für kleine/standard/große Sektionen (clamp-Formeln)
   □ Hintergrund-Rhythmus dokumentiert (Farbwechsel zwischen Sektionen)
   □ Container-Architecture: max-widths pro Container-Typ dokumentiert
   □ Breakpoints & Responsive Grid: Alle Breakpoints (sm, md, lg, xl, 2xl) dokumentiert
   □ Gutters & Padding: Mobile vs Desktop Padding-Strategien dokumentiert
   □ Gestalt-Gesetze (Proximity, Continuity) in Layout-Regeln reflektiert

5. LAYOUT CHECKPOINT:
   □ Grid System: 12-Column oder 24-Column Grid definiert (oder CSS Grid Auto-Placement)
   □ Container Queries: Falls verwendet, alle query-Breakpoints dokumentiert
   □ Responsive Behavior: Mobil (375px) → Tablet (768px) → Desktop (1440px) getestet
   □ Overflow Handling: Keine horizontalen Scrollbars auf Mobile
   □ Viewport Alignment: Alle Elemente alignen zu 8px Grid (visuell prüfen)

6. AUTOMATISCHER HANDOFF ZU SEQ-35:
   → NÄCHSTE PHASE: SEQ-45 → DESIGN-PHASE-04.md (Component Anatomy & Interactive States)

   HANDOFF-NOTIZ (für nächste Phase):
   "Phase SEQ-34 hat Spacing & Layout-Foundation definiert.
   ALLE Spacing-Werte sind tokenized, responsive (clamp() wo nötig), visuell konsistent.

   KRITISCHE INPUTS FÜR SEQ-35:
   - Baseline Unit für Spacing (8px standard)
   - Sektions-Padding Ranges (clamp-Formeln)
   - Vertikaler Rhythmus Regeln
   - Breakpoints und Pixel-Werte
   - Max-Width Konventionen pro Container

   READY STATE: Layout fehlerfrei, Spacing tokenized, Rhythm etabliert ✓"

   → Lese DESIGN-PHASE-04.md CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Starte SEQ-35 mit aktuellem .ai-design-context.md als Input

═══ PHASE SEQ-34 → SEQ-35: HANDOFF AKTIV ═══
