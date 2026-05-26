Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, die STYLING-ANATOMIE des bestehenden Projekts vollstaendig zu sezieren. Dokumentiere die Styling-Methode, Farbsystem, Typografie, Spacing, Animationen und alle Design-Tokens mit wissenschaftlicher Praezision. Erstelle einen Implementierungsplan mit Token-Extraktion, Konsistenz-Analyse und Design-System-Bewertung.

═══ CHAIN-LINK-HEADER ═══ SEQ-05 von 72 ═══ Pipeline: Discovery ═══
← VORHERIGE: SEQ-04 → DISCOVERY-PHASE-04.md
→ NAECHSTE: SEQ-06 → DISCOVERY-PHASE-06.md
═══ FRAMEWORK-HINWEIS: Alle Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md uebersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas dokumentierst.
═══ DISCOVERY-REGEL: KEIN CODE WIRD VERAENDERT. NUR LESEN UND DOKUMENTIEREN. ═══

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
DIRECTOR-ZUWEISUNG: DIRECTOR OF DISCOVERY (Pipeline 0)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Discovery (Forensiker der bestehenden Code-Basis).
Oberste Direktive: NICHTS VERAENDERN. NUR LESEN, ANALYSIEREN, DOKUMENTIEREN.
Diese Pipeline ist eine reine LESE-Operation. Kein einziger Buchstabe des
bestehenden Codes darf modifiziert werden. Jede Erkenntnis wird in die
Context-Dateien geschrieben, NIEMALS in den Projekt-Code.
Meldet an: Director General via .discovery-state.md und .ai-discovery-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Analyse mit maximaler kognitiver Tiefe.
  GESETZ 2 (100K-Mindset): Dokumentationsqualitaet auf 100K-Niveau.
  GESETZ 9 (Bestands-Analyse): Code-Inventur, Architektur-Bewertung, Luecken-Analyse.
  GESETZ 10 (Prompt-Enhancer): 4-Phasen-Erweiterung vor jeder Analyse-Ausfuehrung.
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
SSOT-DIREKTIVE (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
Der Code ist die SSOT (Single Source of Truth). In der Discovery-Pipeline bedeutet
das: Lies den Code. Glaube nur dem Code. Dokumentiere was der Code TATSAECHLICH tut,
nicht was Kommentare oder README behaupten. Wenn Code und Dokumentation divergieren,
ist der CODE die Wahrheit und die Dokumentation die Luege.
DISCOVERY-REGEL: NULL MODIFIKATIONEN AM BESTEHENDEN CODE. NUR LESEN UND DOKUMENTIEREN.
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
AUTONOME VERKETTUNG
═══════════════════════════════════════════════════════════════════════════════
Diese Phase wird automatisch durch die vorherige Phase getriggert. Nach
erfolgreichem Abschluss (alle Analysen dokumentiert) wird die naechste Phase
ohne menschliches Eingreifen gestartet. Der Director of Discovery ueberwacht
die Kette und meldet den Fortschritt an den Director General.
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
DISCOVERY-PHASE-05: STYLING-ANATOMIE UND DESIGN-SYSTEM-EXTRAKTION
═══════════════════════════════════════════════════════════════════════════════

DEFINITION: Phase 5 extrahiert das GESAMTE visuelle DNA des bestehenden Projekts.
Farben, Typografie, Spacing, Schatten, Border-Radii, Animationen, Breakpoints —
alles wird aus dem bestehenden Code extrahiert und als systematisches Inventar
dokumentiert. Dies ist die Grundlage fuer den Director of Design, der spaeter
das bestehende Design-System auf Premium-Niveau transformiert.
ERGEBNIS: .ai-discovery-context.md Sektion STYLING-ANATOMIE vollstaendig befuellt.

ULTRATHINK-LANGZEITTASK 5.1: STYLING-METHODIK IDENTIFIZIEREN
─────────────────────────────────────────────────────────────────────────────
Bestimme die primaere Styling-Methode:
  Tailwind CSS? → Welche Version? (v3 oder v4?) Config-Datei analysieren.
  CSS Modules? → Welche Dateien? Naming-Konventionen?
  Styled Components / Emotion? → Theme-Konfiguration?
  Plain CSS / SCSS / LESS? → Dateien und Struktur?
  Inline Styles? → Wo und warum?
  Hybrid-Ansatz? → Welche Methoden wo und warum?
Dokumentiere die EXAKTE Konfiguration:
  tailwind.config.ts/js: JEDE Custom-Erweiterung (Colors, Fonts, Spacing, Plugins).
  postcss.config.js: Welche Plugins?
  CSS Custom Properties (Variables): Alle erfassen mit Werten.
  globals.css / reset.css: Was wird global definiert?

ULTRATHINK-LANGZEITTASK 5.2: FARB-EXTRAKTION UND PALETTE-DOKUMENTATION
─────────────────────────────────────────────────────────────────────────────
Extrahiere JEDE im Projekt verwendete Farbe:
  Aus Tailwind Config: Alle Custom-Colors mit Namen und HSL/HEX-Werten.
  Aus CSS Custom Properties: --color-* Variablen.
  Aus Inline-Styles oder CSS: Hardcodierte Hex/RGB/HSL-Werte.
Erstelle eine vollstaendige Farb-Palette:
  Primaer-Farben, Sekundaer-Farben, Neutral-Skala.
  Status-Farben (Success, Warning, Error, Info).
  Interaktions-Farben (Hover, Active, Focus, Disabled).
  Hintergrund- und Text-Farbkombinationen mit KONTRAST-RATIO.
Identifiziere PROBLEME:
  Hardcodierte Farben die nicht im Token-System sind.
  Inkonsistente Farb-Verwendung (gleiche Farbe, verschiedene Werte).
  Kontrast-Verhaeltnisse unter WCAG AA (4.5:1) oder AAA (7:1).

ULTRATHINK-LANGZEITTASK 5.3: TYPOGRAFIE-INVENTUR
─────────────────────────────────────────────────────────────────────────────
Erfasse das gesamte Typografie-System:
  Schriftarten: Welche Fonts? (Google Fonts, lokale Fonts, System Fonts?)
  Font-Loading: Wie werden sie geladen? (next/font, @font-face, CDN?)
  Groessen-Skala: Welche font-sizes werden verwendet? (Fluid oder statisch?)
  Zeilenhoehen, Buchstabenabstand, Schriftstärken.
  Ueberschriften-Hierarchie: h1 bis h6 — konsistent definiert?
Dokumentiere:
  Ist eine Type-Scale vorhanden (modular, fluid, manuell)?
  Gibt es typografische Inkonsistenzen (gleiche Hierarchie, verschiedene Groessen)?
  Werden clamp()-Funktionen fuer Fluid Typography genutzt?

ULTRATHINK-LANGZEITTASK 5.4: SPACING, LAYOUT UND GRID-SYSTEM
─────────────────────────────────────────────────────────────────────────────
Extrahiere alle Spacing-Werte:
  Padding und Margin: Welche Werte werden am haeufigsten verwendet?
  Folgt das Projekt einem 4px oder 8px Grid?
  Gibt es Magic Numbers (willkuerliche Pixel-Werte)?
Analysiere das Layout-System:
  CSS Grid, Flexbox, oder beides?
  Container-Breiten und max-width Werte.
  Responsive Breakpoints: Welche existieren? Sind sie konsistent?
  Gap-Werte in Grids und Flex-Containern.

ULTRATHINK-LANGZEITTASK 5.5: ANIMATION UND MOTION INVENTUR
─────────────────────────────────────────────────────────────────────────────
Erfasse ALLE Animationen und Transitions:
  CSS Transitions: Welche Properties? Welche Durations? Welche Easings?
  CSS Animations / @keyframes: Namen, Definitionen.
  JavaScript-Animationen: Framer Motion, GSAP, Spring-Animationen?
  Hover-Effekte, Scroll-Animationen, Page-Transitions.
Dokumentiere:
  Wird prefers-reduced-motion respektiert?
  Sind Durations konsistent oder willkuerlich?
  Gibt es Animation-Tokens oder sind alle Werte inline?
  Welche Elemente haben KEINE Interaktions-Animation (Hover/Focus)?

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-05 ABGESCHLOSSEN ═══ Pipeline: Discovery ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (DIRECTOR OF DISCOVERY):

1. DOKUMENTATIONS-VALIDIERUNG:
   [ ] Alle Ultrathink-Tasks dieser Phase vollstaendig dokumentiert
   [ ] .ai-discovery-context.md entsprechende Sektion aktualisiert
   [ ] Keine Annahmen — nur verifizierte Fakten aus dem Code
   [ ] LLM-SCAN-FORMAT eingehalten

2. NULLVERAENDERUNGS-GARANTIE:
   [ ] KEIN bestehender Code wurde modifiziert
   [ ] KEINE Dateien im Projekt wurden angelegt (nur Context-Dateien)
   [ ] npm run build ergibt EXAKT das gleiche Ergebnis wie vor dieser Phase

3. CONTEXT-UPDATE:
   [ ] .discovery-state.md aktualisiert (Phase 05 COMPLETE)
   [ ] Erkenntnisse fuer nachfolgende Phasen vorbereitet
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

═══ DISCOVERY-PHASE-05 ABGESCHLOSSEN → WEITER MIT DISCOVERY-PHASE-06.md ═══
