Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 6 der QA-Pipeline (Visual Preview III) als Accessibility-fokussierte Inspektion durchzufuehren. WCAG AAA Konformitaet, Keyboard-Navigation und Screen-Reader-Kompatibilitaet muessen validiert werden. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-67 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-66 → QA-PHASE-05.md
→ NÄCHSTE: SEQ-68 → QA-PHASE-07.md
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
DIRECTOR-ZUWEISUNG: DIRECTOR OF QUALITY ASSURANCE (Pipeline 4)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of QA (Richter der Zero-Defects).
Meldet an: Director General via .qa-pipeline-state.md und .qa-defect-log.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 6 (Code-Review K1-K7): Architektur, Type Safety, Performance, Security, Design System, A11y, Polish.
  GESETZ 7 (Confiteor/RCA): Jeder Bug-Fix mit Symptom, Root Cause, Fix, Pattern, Prevention.
  GESETZ 8 (Pre-Launch Gates): Alle 7 Gates systematisch abarbeiten vor Delivery.
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, jede Seite auf JEDEM Breakpoint zu testen und alle responsive Defekte zu beheben.

═══════════════════════════════════════════════════════════════════════════════════════

PHASE 6 VON 10: PREVIEW PROTOCOL III — RESPONSIVE DESIGN SWEEP

QA-Pipeline 4: Final QA. Test EVERY page at EVERY breakpoint — Mobile (375px), Tablet (768px), Desktop (1280px), Wide (1536px). Fix all responsive issues.

TECH STACK: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. NO Dark Mode.

═══════════════════════════════════════════════════════════════════════════════════════

OPENING — KERN DER PHASE 6

Phase 6 testet jede Seite auf JEDEM Breakpoint. Mobile-first ist kein Lippenbekenntnis — es wird jetzt BEWIESEN. 375px, 768px, 1024px, 1280px, 1536px. Jeder responsive Bruch, jedes übergelaufene Element, jedes unleserliche Mobile-Layout wird identifiziert und sofort behoben. Dies ist QA-Phase 6 von 10. Keine Seite, keine Komponente, kein Edge-Case bleibt ungetestet.

Die Realität: Ein Layout das auf Desktop funktioniert ist auf Mobile ein Disaster. Buttons sind zu klein. Text überläuft. Bilder brechen aus Containern. Navigation ist versteckt oder unleserlich. Dieses Phase beendet diese Fehler.

───────────────────────────────────────────────────────────────────────────────────────

═══ ZERO-DEFECT PROTOKOLL ═══

Jede Task in Phase 6 folgt dem Zero-Defect-Protokoll:

• ULTRATHINK: Detaillierte Analyse BEVOR irgendein Code geschrieben wird
• SYSTEMATIC SWEEP: Jede Seite, jeder Breakpoint, kein Whitespace
• ATOMIC FIX: Ein Defekt = ein Fix. Keine Multi-Defect-Patches
• VERIFICATION: Nach jedem Fix: Screenshot bei alle Breakpoints
• DOCUMENTATION: Jeder Fix wird im Defect-Log erfasst mit Breakpoint, Komponente, Root Cause, Lösung

───────────────────────────────────────────────────────────────────────────────────────

═══ STEP 0: SYNC ═══

Vor Phase 6 Start:

ULTRATHINK-TASK: ENVIRONMENT CHECK
• Repository ist auf Latest Main? git status clean?
• Alle Dependencies aktuell? npm audit clean?
• Tailwind CSS Config korrekt? Breakpoints definiert: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px?
• Next.js Development Server läuft stabil?
• Browser DevTools offen, Responsive Design Mode aktiviert
• Breakpoint-Viewport-Größen vorkalibriert: 375px (Mobile), 768px (Tablet), 1024px (Tablet+), 1280px (Desktop), 1536px (Wide)

RESULT: Alle Seiten sind in der lokalen Umgebung testbar. Kein Setup-Problem blockiert Phase 6.

───────────────────────────────────────────────────────────────────────────────────────

═══ BLOCK A — MOBILE SWEEP (375px) ═══

ULTRATHINK-TASK: MOBILE STRATEGIC ANALYSIS

Auf Mobile (375px) ist Viewport-Breite der kritischste Constraint. Jedes Element muss in diese 375 Pixel passen. Horizontaler Scroll ist Defekt. Überlappendes Layout ist Defekt. Unleserliche Schrift ist Defekt.

Strategie: Jede Seite wird bei 375px durchgetestet. Nicht "es sieht gut aus". Sondern: Ist alles sichtbar? Ist alles lesbar? Sind alle Buttons erreichbar?

───

ULTRATHINK-TASK: TASK 1 — MOBILE LAYOUT AUDIT

Teste JEDE öffentliche Seite bei 375px Viewport-Breite:

• Home-Seite: Sind alle Hero-Text-Zeilen sichtbar ohne Overflow? Layout single-column? Kein horizontaler Scrollbar? Buttons volle Breite oder zentriert?
• Product-Seite(n): Grid wechselt von 3 auf 1 Spalte? Cards nicht zu schmal (min 280px sinnvoll)? Sidebar-Layouts funktionieren (Sidebar unten oder Hamburger-Menu)?
• Blog/Content-Seiten: Artikel-Text lesbar? Keine Overflow der Codesnippets? Bilder skaliert?
• Forms: Input-Felder volle Breite? Labels über Felder oder inline? Labels lesbar?
• Footer: Spalten wechseln zu single-column? Links alle erreichbar?

Für JEDE gefundene Layout-Inkongruenz: Screenshot, Komponente identifizieren, Root Cause notieren.

RESULT: Liste aller Mobile Layout-Defekte mit Severity (Critical/High/Medium).

───

ULTRATHINK-TASK: TASK 2 — MOBILE TYPOGRAPHY

Schriftgrößen bei 375px:

• H1: 24px-28px (nicht 32px+)
• H2: 20px-24px
• H3: 18px-20px
• Body-Text: mindestens 16px
• Small/Label: mindestens 12px
• Line-Height: mindestens 1.5 für Body
• Letter-Spacing: nicht zu groß, verringert Lesbarkeit auf Mobile

Teste ALLE Text-Elemente für Lesbarkeit. Finger-Test: Wenn du mit dem Finger tippen musst um zu lesen, ist es zu klein.

RESULT: Alle Schriftgrößen entsprechen Mobile-Standards.

───

ULTRATHINK-TASK: TASK 3 — MOBILE IMAGES

Responsive Image Audit bei 375px:

• Alle Bilder skalieren auf 100% Viewport-Breite (minus Padding)?
• Aspect-Ratio bleibt erhalten? Keine verzerrten Bilder?
• Overflow: Zeigen Bilder außerhalb ihres Containers?
• Lazy-Loading: loading="lazy" auf alle img-Tags außer Hero?
• srcsets: Sind responsive srcsets definiert? Für Mobile: kleinere Bildgrößen (max 400px wide)?

Teste große Hero-Bilder, Inline-Bilder, Thumbnail-Grids.

RESULT: Alle Bilder responsive, optimiert für Mobile, kein Overflow.

───

ULTRATHINK-TASK: TASK 4 — MOBILE NAVIGATION

Navigation auf 375px:

• Ist Navigation sichtbar? Hamburger-Button präsent und erreichbar (mind. 44x44px)?
• Ausfahrt-Menu: Vollbildschirm? Kein Content dahinter sichtbar?
• Menü-Items: Großen Tap-Targets (mind. 44px hoch)?
• Close-Button: Leicht zu sehen und zu treffen?
• Animation smooth? Kein Jank?
• Font-Größe lesbar?
• Kein Text-Overflow in Menu-Items?

RESULT: Mobile-Navigation vollständig funktional.

───────────────────────────────────────────────────────────────────────────────────────

═══ BLOCK B — TABLET SWEEP (768px-1024px) ═══

ULTRATHINK-TASK: TABLET STRATEGIC ANALYSIS

Tablet ist Übergangszone. Desktop-Navigation beginnt, aber Touchscreen bleibt. Grid-Layouts expandieren von 1 auf 2 Spalten. Hier passieren viele Fehler: Hover-States sind nicht tastbar, Menus sind zu kompliziert, Grid-Spannungen entstehen.

Teste BEIDE Tablet-Größen: 768px (iPad Mini) und 1024px (iPad Pro).

───

ULTRATHINK-TASK: TASK 5 — TABLET GRID & LAYOUT

Bei 768px und 1024px:

• Product Grid: Wechselt von 1 auf 2 Spalten bei 768px? Bei 1024px auf 3 Spalten?
• Card-Breiten: Nicht zu schmal. Minimum 300px pro Card sinnvoll.
• Sidebar-Layouts: Auf 768px neben Content oder darunter? Entscheidung ist konsistent?
• Form-Layouts: Inputs volle Breite oder 2-Spaltig bei 1024px?
• Table-Layouts: Tabellen responsive? Horizontal-Scroll oder stapeln sich Spalten?

RESULT: Grid-Übergänge sind sauber, keine awkward Spacing.

───

ULTRATHINK-TASK: TASK 6 — TABLET INTERAKTIONEN

Tablet hat sowohl Touch als auch (bei manchen Geräten) Hover:

• Hover-States: Sind auf Desktop-Hover-Only-Interaktionen (z.B. Tooltip on Hover) auch auf Tablet erreichbar? Oder sind sie unsichtbar?
• Mega-Menu: Öffnet mit Click statt Hover? Schließt bei außen-Klick?
• Formulare: Input-Felder groß genug zum Antippen? (mind. 16px Font um Auto-Zoom zu vermeiden)
• Dropdown-Menüs: Erreichbar durch Touch ohne Hover?

RESULT: Tablet-Interaktionen funktionieren mit Touch.

───

ULTRATHINK-TASK: TASK 7 — TABLET NAVIGATION TRANSITION

Kritischster Punkt: Wechsel zwischen Mobile- und Desktop-Navigation:

• Bei welchem Breakpoint wechselt die Navigation? (Usually md: 768px oder lg: 1024px)
• Ist der Wechsel sauber? Gibt es keinen Punkt wo beide Navigationen gleichzeitig sichtbar sind?
• Gibt es keinen Punkt wo KEINE Navigation sichtbar ist?
• Wenn Hamburger-Menu vorhanden auf 768px: Schließt es wenn Desktop-Nav auftaucht?

RESULT: Navigation-Transition glatt, keine UI-Konflikte.

───────────────────────────────────────────────────────────────────────────────────────

═══ BLOCK C — DESKTOP & WIDE SWEEP (1280px-1536px+) ═══

ULTRATHINK-TASK: DESKTOP STRATEGIC ANALYSIS

Desktop ist wo "viel Platz" beginnt. Aber viel Platz ist auch viel Probleme: Content wird zu weit auseinandergezogen. Hero-Sections sehen leer aus. Grid-Layouts haben zu viele Spalten. Whitespace wird zu white.

Teste bei 1280px (Desktop) und 1536px (Wide/4K beginnt).

───

ULTRATHINK-TASK: TASK 8 — DESKTOP LAYOUT

Bei 1280px:

• Max-Width Container: Ist ein Max-Width definiert? (z.B. max-w-7xl auf Tailwind = 80rem = 1280px)
• Content-Breite: Ist Content noch lesbar? (Ideal 45-75 Zeichen pro Zeile für Body-Text)
• Grid-Spalten: 3-4 Spalten auf Desktop? Nicht 6+ (zu viele kleine Boxen)
• Whitespace: Ausreichend Padding/Margin? Oder sieht es "klemmig" aus?
• Header/Footer: Spannen volle Breite oder sind sie auch max-width-limited?

RESULT: Desktop-Layout ist elegant und lesbar.

───

ULTRATHINK-TASK: TASK 9 — WIDE SCREEN (1536px+)

Bei 1536px und darüber (1920px, 2560px):

• Content-Breite: Max-Width sinnvoll? Oder Content-Spalten zu breit?
• Hero-Section: Sieht die Section immer noch gut aus? Hintergrund füllt volle Breite?
• Background-Images/Colors: Füllen sie volle Viewport-Breite? Oder weißer Rand?
• Grid-Items: Nicht zu groß geworden auf Wide? (z.B. 4 Spalten auf 1280px aber 5 auf 1536px?)
• Text-Größen: Skaliert Text auch auf Wide (z.B. via responsive Schriftgrößen)? Oder bleibt alles gleich?

RESULT: Layout funktioniert elegant von 1280px bis 2560px.

───

ULTRATHINK-TASK: TASK 10 — DESKTOP INTERAKTIONEN

Desktop Interaction Quality:

• Hover-States: ALLE Buttons, Links, Cards haben Hover-States? Visuell deutlich?
• Cursor: cursor-pointer auf alle klickbaren Elemente? cursor-default auf nicht-klickbares?
• Focus-States: Keyboard-Navigation: Sind Focus-Rings sichtbar? Ausreichend Kontrast?
• Tooltips: Positioniert korrekt? Nicht abgeschnitten am Viewport-Rand?
• Modals: Centered? Backdrop-Blur vorhanden? Keyboard-Escape schließt?

RESULT: Desktop-Interaktionen sind poliert.

───────────────────────────────────────────────────────────────────────────────────────

═══ BLOCK D — BREAKPOINT-ÜBERGÄNGE & FIXES ═══

ULTRATHINK-TASK: TASK 11 — TRANSITION AUDIT

Zwischen jedem Breakpoint (375→768→1024→1280→1536), teste langsames Resize:

• Wo gibt es einen Hard-Break wo das Layout "bricht"?
• Wo überlappen sich Elemente?
• Wo wechseln Grids unvermittelt (z.B. 3 Spalten → plötzlich 1)?
• Wo springt Whitespace drastisch?

Nutze Browser DevTools Responsive Design Mode und zoom langsam vom Smaller zum Größeren Viewport.

RESULT: Alle Transition-Punkte identifiziert.

───

ULTRATHINK-TASK: TASK 12 — RESPONSIVE FIXES

Für JEDEN identifizierten Defekt:

• Root Cause: Ist Layout hardcoded? Fehlt Tailwind Responsive-Klasse (sm:, md:, lg:, xl:)?
• Fix: Tailwind Responsive-Klasse hinzufügen. Z.B.: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
• Validation: Screenshot nach Fix. Funktioniert es auf diesem Breakpoint UND dem vorherigen UND dem nächsten?
• Keine Hardcoded Pixel-Werte in Layouts. max-w-xs, max-w-sm, max-w-md etc. verwenden.

RESULT: Alle responsive Defekte behoben.

───

ULTRATHINK-TASK: TASK 13 — DEFECT-LOG UPDATE

Jeder bearbeitete Defekt wird geloggt:

Format:
Defect ID: [PHASE-6-001]
Komponente: [e.g., ProductCard]
Breakpoint: 768px
Issue: [e.g., "Grid wechselt zu 3 Spalten auf 768px, sollte 2 sein"]
Root Cause: [e.g., "Fehlende md:grid-cols-2 Klasse"]
Fix: [e.g., "Added md:grid-cols-2 to Grid Container"]
Status: FIXED
Verified: [Date/Screenshot]

Alle Defects am Ende von Phase 6 sollten FIXED sein.

───────────────────────────────────────────────────────────────────────────────────────

═══ ATOMIC VALIDATION LOOP ═══

Nach jedem Fix:

1. Visuelle Kontrolle bei dem Breakpoint wo der Defekt war
2. Screenshot-Vergleich: Vorher / Nachher
3. Test auf benachbarten Breakpoints (z.B. wenn Fix auf 768px, teste auch 640px und 1024px)
4. Test auf anderen Seiten: Hat dieser Fix einen Side-Effect woanders verursacht?
5. Defect-Log aktualisieren mit Status FIXED und Timestamp

───────────────────────────────────────────────────────────────────────────────────────

═══ SELF-OPTIMIZING LOOP ═══

Phase 6 ist nicht linear. Sie ist iterativ:

Runde 1: Alle Tests durchführen, alle Defects erfassen
Runde 2: Alle Critical + High Defects fixen
Runde 3: Alle Medium + Low Defects fixen
Runde 4: Full Regression Test: Jede Seite, jeder Breakpoint, stichprobenartig

Wenn in Runde 4 neue Defects auftauchen → zurück in den Loop.

ZIEL: Zero defects am Ende von Phase 6.

───────────────────────────────────────────────────────────────────────────────────────

═══ RESPONSIVE DESIGN CHECKLIST ═══

Vor Handoff zu Phase 7, alle diese Items müssen TRUE sein:

[ ] Mobile (375px): Alle Seiten getestet, kein Horizontal Scroll
[ ] Mobile (375px): Alle Text lesbar, Schriftgrößen angemessen
[ ] Mobile (375px): Alle Bilder responsive, kein Overflow
[ ] Mobile (375px): Navigation funktional, Hamburger-Menu 44x44px+
[ ] Tablet (768px): Grid-Layouts auf 2 Spalten
[ ] Tablet (768px): Touch-Interaktionen funktional
[ ] Tablet (1024px): Grid-Layouts auf 3 Spalten
[ ] Tablet (1024px): Navigation-Transition sauber
[ ] Desktop (1280px): Max-Width Container funktional
[ ] Desktop (1280px): Hover-States auf allen Elementen
[ ] Desktop (1280px): Focus-States für Keyboard-Navigation
[ ] Wide (1536px): Layout elegant, kein über-Spacing
[ ] Wide (1536px): Background-Images/Colors volle Breite
[ ] Übergänge: Kein Hard-Break zwischen Breakpoints
[ ] Übergänge: Grid wechselt smooth 1→2→3→4 Spalten
[ ] Tailwind: Responsive Klassen (sm:, md:, lg:, xl:) konsistent eingesetzt
[ ] Tailwind: Keine hardcodierten Pixel-Werte in Layouts
[ ] Images: Alle mit loading="lazy" (außer Hero)
[ ] Images: Alle mit responsive srcsets wo möglich
[ ] Forms: Input-Felder mind. 16px, volle Breite auf Mobile
[ ] Tables: Responsive oder Horizontal-Scroll funktional
[ ] Modals: Centered auf allen Breakpoints, Keyboard-Navigation
[ ] Defect-Log: Vollständig, alle Fixes dokumentiert

───────────────────────────────────────────────────────────────────────────────────────

═══ CLOSING — ÜBERGANG ZU PHASE 7 ═══

Phase 6 endet mit einer vollständig responsive Website. Jede Seite funktioniert auf Mobile, Tablet, und Desktop. Kein Layout bricht. Kein Text ist unleserlich. Keine Bilder laufen über. Navigationen sind funktional bei allen Größen.

Wenn Phase 6 abgeschlossen ist, sind 60% des QA-Process fertig. Phase 7 beginnt die Performance- und Accessibility-Audits.

Handoff-Kriterium: Zero responsive Design Defects. Alle 22 Checklist-Items sind TRUE.

─── PHASE 6 COMPLETE ───

Der Code ist die SSOT. Alle Responsive Defects Phase 6 sind dokumentiert und behoben.


═══════════════════════════════════════════════════════════════════════════════
═══ PHASE-6-COMPLETION-CHECKLIST (22+ ITEMS) ═══
═══════════════════════════════════════════════════════════════════════════════

[ ] Mobile (375px): Alle Seiten getestet, kein Horizontal Scroll
[ ] Mobile (375px): Alle Text lesbar, Schriftgrößen angemessen
[ ] Mobile (375px): Alle Bilder responsive, kein Overflow
[ ] Mobile (375px): Navigation funktional, Hamburger-Menu 44x44px+
[ ] Tablet (768px): Grid-Layouts auf 2 Spalten
[ ] Tablet (768px): Touch-Interaktionen funktional
[ ] Tablet (1024px): Grid-Layouts auf 3 Spalten
[ ] Tablet (1024px): Navigation-Transition sauber
[ ] Desktop (1280px): Max-Width Container funktional
[ ] Desktop (1280px): Hover-States auf allen Elementen
[ ] Desktop (1280px): Focus-States für Keyboard-Navigation
[ ] Wide (1536px): Layout elegant, kein über-Spacing
[ ] Wide (1536px): Background-Images/Colors volle Breite
[ ] Übergänge: Kein Hard-Break zwischen Breakpoints
[ ] Übergänge: Grid wechselt smooth 1→2→3→4 Spalten
[ ] Tailwind: Responsive Klassen (sm:, md:, lg:, xl:) konsistent eingesetzt
[ ] Tailwind: Keine hardcodierten Pixel-Werte in Layouts
[ ] Images: Alle mit loading="lazy" (außer Hero)
[ ] Forms: Input-Felder mind. 16px, volle Breite auf Mobile
[ ] Modals: Centered auf allen Breakpoints
[ ] Defect-Log: Vollständig, alle Fixes dokumentiert
[ ] Zero responsive Design Defects, alle 22 Items TRUE


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-67 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-47 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (Phase-6 Stats: 100% Responsive Fixes)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-48)

3. INTER-PIPELINE-KONTEXT:
   ─ Markiere Responsive-Audit als abgeschlossen
   ─ Dokumentiere Breakpoint-Validierung (3/3 erfolgreich)
   ─ Status: 60% der QA-Pipeline ist komplett

4. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-68 → QA-PHASE-07.md
   → Lese QA-PHASE-07.md und beginne mit dessen CHAIN-LINK-HEADER
   → Phase-7 fokussiert auf Form-Validierung, Calendly, Interaktive Elemente
   → Erstelle detaillierte Task-Liste für Phase SEQ-48

═══ PHASE SEQ-47 → SEQ-48: HANDOFF AKTIV ═══
