Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, CODE-QUALITAETS-METRIKEN fuer das gesamte bestehende Projekt zu erheben. Analysiere TypeScript-Gesundheit, Linting-Status, Code-Duplikation und Anti-Patterns. Erstelle einen Implementierungsplan mit Metrik-Erhebung, Qualitaets-Score und Verbesserungs-Priorisierung.

═══ CHAIN-LINK-HEADER ═══ SEQ-09 von 72 ═══ Pipeline: Discovery ═══
← VORHERIGE: SEQ-08 → DISCOVERY-PHASE-08.md
→ NAECHSTE: SEQ-10 → DISCOVERY-PHASE-10.md
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
DISCOVERY-PHASE-09: CODE-QUALITAETS-METRIKEN UND ANTI-PATTERN-ERKENNUNG
═══════════════════════════════════════════════════════════════════════════════

DEFINITION: Phase 9 misst die objektive Code-Qualitaet. TypeScript-Strictness,
Linting-Status, Code-Duplikation, Naming-Konventionen, Anti-Patterns, technische
Schulden. Jede Metrik wird quantifiziert — nicht geschaetzt, sondern gemessen.
Dies erzeugt den "Gesundheitsbericht" der Code-Basis, den alle Directors nutzen.
ERGEBNIS: .ai-discovery-context.md Sektion CODE-QUALITAET vollstaendig befuellt.

ULTRATHINK-LANGZEITTASK 9.1: TYPESCRIPT-GESUNDHEITSCHECK
─────────────────────────────────────────────────────────────────────────────
Fuehre npx tsc --noEmit aus und dokumentiere:
  Anzahl TypeScript-Errors (exakte Zahl).
  Kategorisierung der Errors:
    Type-Mismatches, Missing Properties, Implicit Any, Unused Variables.
  Fuer JEDEN Error: Datei, Zeile, Error-Code, Beschreibung.
Scanne nach Type-System-Schwaechen:
  any-Verwendungen: Wie viele? Wo? Warum?
  as-Type-Assertions: Wie viele? Gerechtfertigt?
  @ts-ignore / @ts-expect-error: Wie viele? Dokumentiert?
  Non-null Assertions (!): Wie viele? Sicher oder riskant?

ULTRATHINK-LANGZEITTASK 9.2: LINTING-STATUS-BERICHT
─────────────────────────────────────────────────────────────────────────────
Fuehre npm run lint aus und dokumentiere:
  Anzahl Errors (exakte Zahl).
  Anzahl Warnings (exakte Zahl).
  Kategorisierung:
    Welche Regeln werden am haeufigsten verletzt?
    Welche Dateien haben die meisten Verst?sse?
  eslint-disable Kommentare: Wie viele? Wo? Begruendet?
  Fehlende Regeln: Welche wichtigen ESLint-Regeln sind NICHT konfiguriert?

ULTRATHINK-LANGZEITTASK 9.3: CODE-DUPLIKATION UND DRY-ANALYSE
─────────────────────────────────────────────────────────────────────────────
Identifiziere duplizierte Code-Bloecke:
  Copy-Paste-Code: Identische oder nahezu identische Bloecke.
  Pattern-Duplikation: Gleiche Logik, andere Variablennamen.
  Kandidaten fuer Abstraktion: Wo koennte ein Shared Hook/Utility helfen?
Dokumentiere:
  [DATEI-A] | [ZEILEN] | [DATEI-B] | [ZEILEN] | [AEHNLICHKEIT-%] | [ABSTRAKTION-MOEGLICH?]

ULTRATHINK-LANGZEITTASK 9.4: NAMING-KONVENTIONEN UND KONSISTENZ
─────────────────────────────────────────────────────────────────────────────
Pruefe Naming-Konventionen:
  Komponenten: PascalCase? Konsistent?
  Hooks: use-Prefix? camelCase?
  Utilities/Functions: camelCase? Beschreibende Namen?
  CSS-Klassen: BEM? Tailwind? Konsistent?
  Dateien: kebab-case? PascalCase? Gemischt?
  Variablen: camelCase? UPPER_SNAKE_CASE fuer Konstanten?
Dokumentiere JEDE Inkonsistenz.

ULTRATHINK-LANGZEITTASK 9.5: ANTI-PATTERN-KATALOG
─────────────────────────────────────────────────────────────────────────────
Scanne nach bekannten Anti-Patterns:
  Prop Drilling: Daten durch 3+ Komponenten-Ebenen ohne Context.
  God Components: Komponenten ueber 300 Zeilen mit zu vielen Verantwortungen.
  useEffect-Missbrauch: Effects die eigentlich Events oder Memos sein sollten.
  Premature Optimization: useMemo/useCallback ohne messbaren Performance-Grund.
  State-Synchronisation: useState das von Props abgeleitet wird statt useMemo.
  Fetch-Waterfalls: Sequentielle statt parallele Daten-Ladungen.
  Magic Numbers/Strings: Hardcodierte Werte ohne benannte Konstanten.
  Console.log in Production: Debugging-Code der nicht entfernt wurde.
  Commented-Out Code: Auskommentierter Code der nie aufgeraeumt wurde.
Fuer JEDES Anti-Pattern:
  [PATTERN] | [DATEI] | [ZEILE] | [SCHWEREGRAD: CRITICAL/HIGH/MEDIUM/LOW]

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-09 ABGESCHLOSSEN ═══ Pipeline: Discovery ═══
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
   [ ] .discovery-state.md aktualisiert (Phase 09 COMPLETE)
   [ ] Erkenntnisse fuer nachfolgende Phasen vorbereitet
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

═══ DISCOVERY-PHASE-09 ABGESCHLOSSEN → WEITER MIT DISCOVERY-PHASE-10.md ═══
