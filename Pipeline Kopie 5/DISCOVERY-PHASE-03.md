Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, eine KOMPONENTEN-TAXONOMIE auf molekularer Ebene zu erstellen. Katalogisiere jede einzelne Komponente, jeden Hook, das State-Management und den vollstaendigen Abhaengigkeitsgraphen des bestehenden Projekts. Erstelle einen Implementierungsplan mit Scan-Reihenfolge, Taxonomie-Schema und Dependency-Validierung.

═══ CHAIN-LINK-HEADER ═══ SEQ-03 von 72 ═══ Pipeline: Discovery ═══
← VORHERIGE: SEQ-02 → DISCOVERY-PHASE-02.md
→ NAECHSTE: SEQ-04 → DISCOVERY-PHASE-04.md
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
DISCOVERY-PHASE-03: KOMPONENTEN-TAXONOMIE UND ABHAENGIGKEITS-GRAPH
═══════════════════════════════════════════════════════════════════════════════

DEFINITION: Phase 3 katalogisiert JEDE einzelne Komponente im Projekt. Nicht
nur die UI-Komponenten — auch Hooks, Utilities, Contexts, Provider, HOCs.
Fuer jede Komponente wird ein vollstaendiger Steckbrief erstellt: Props, State,
Side Effects, Abhaengigkeiten, Wiederverwendbarkeit, Komplexitaet.
Der Abhaengigkeits-Graph zeigt, welche Komponente welche importiert — und
deckt zirkulaere Abhaengigkeiten und ueberfluessige Kopplung auf.
ERGEBNIS: .ai-discovery-context.md Sektion KOMPONENTEN-TAXONOMIE vollstaendig befuellt.

ULTRATHINK-LANGZEITTASK 3.1: KOMPONENTEN-KATALOG (VOLLSTAENDIG)
─────────────────────────────────────────────────────────────────────────────
Fuer JEDE .tsx/.jsx Datei die eine Komponente exportiert:
  Name (PascalCase? Korrekt benannt?).
  Typ: Server Component / Client Component ('use client'?) / Shared.
  Props-Interface: Vollstaendig typisiert? Optional vs. Required?
  Interner State: Welche useState/useReducer? Komplexitaet?
  Side Effects: Welche useEffect? Dependency Arrays korrekt?
  Custom Hooks: Welche werden genutzt? Eigene oder externe?
  Kinder-Komponenten: Welche Komponenten werden gerendert?
  Datei-Groesse: Zeilen Code. Ueber 150 Zeilen? (Kandidat fuer Refactoring)
  Export-Art: Default Export oder Named Export?
  Co-located Files: .test.tsx? .module.css? .stories.tsx? index.ts?
Erstelle fuer jede Komponente einen Steckbrief im Format:
  [NAME] | [TYP] | [PROPS] | [STATE] | [EFFECTS] | [ZEILEN] | [TESTS: JA/NEIN]

ULTRATHINK-LANGZEITTASK 3.2: HOOKS-INVENTUR
─────────────────────────────────────────────────────────────────────────────
Erfasse ALLE Custom Hooks im Projekt:
  Name (use-Prefix?).
  Parameter und Return-Types (vollstaendig typisiert?).
  Interne Logik: Was tut der Hook? Wie komplex ist er?
  Abhaengigkeiten: Welche anderen Hooks/Utilities nutzt er?
  Verwendung: In welchen Komponenten wird er eingesetzt?
  Wiederverwendbarkeit: Ist er generisch oder an eine Komponente gebunden?

ULTRATHINK-LANGZEITTASK 3.3: CONTEXT UND STATE-MANAGEMENT KARTIERUNG
─────────────────────────────────────────────────────────────────────────────
Erfasse das gesamte State-Management:
  React Contexts: Welche existieren? Was speichern sie?
  Zustand/Jotai/Redux/Recoil: Externes State-Management vorhanden?
  Server State: React Query / SWR / tRPC im Einsatz?
  Fuer JEDEN Context/Store:
    Welche Daten werden gespeichert?
    Welche Komponenten konsumieren ihn?
    Gibt es Performance-Probleme (zu breiter Context)?
    Ist der State korrekt typisiert?

ULTRATHINK-LANGZEITTASK 3.4: ABHAENGIGKEITS-GRAPH ERSTELLEN
─────────────────────────────────────────────────────────────────────────────
Erstelle den vollstaendigen Import-Graph:
  Fuer JEDE Datei: Welche anderen Dateien importiert sie?
  Identifiziere:
    ZIRKULAERE ABHAENGIGKEITEN: A importiert B, B importiert A.
    TIEFE KETTEN: A → B → C → D → E (zu tief gekoppelt).
    GOTT-KOMPONENTEN: Komponenten die 10+ andere importieren.
    WAISEN-DATEIEN: Dateien die von NICHTS importiert werden (Dead Code Kandidaten).
    BARREL EXPORTS: Existieren index.ts Re-Exports? Korrekt strukturiert?
  Dokumentiere den Graph als Adjazenzliste im LLM-SCAN-FORMAT.

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-03 ABGESCHLOSSEN ═══ Pipeline: Discovery ═══
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
   [ ] .discovery-state.md aktualisiert (Phase 03 COMPLETE)
   [ ] Erkenntnisse fuer nachfolgende Phasen vorbereitet
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

═══ DISCOVERY-PHASE-03 ABGESCHLOSSEN → WEITER MIT DISCOVERY-PHASE-04.md ═══
