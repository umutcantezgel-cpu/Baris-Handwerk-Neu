Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, die KONTEXT-KONSOLIDIERUNG aller Discovery-Ergebnisse durchzufuehren. Berechne den Projekt-Gesundheits-Score, priorisiere Transformationsziele, befuelle die .ai-discovery-context.md und bereite den Handoff an die Expansion-Pipeline vor. Erstelle einen Implementierungsplan mit Konsolidierungs-Strategie, Scoring-Methodik und Handoff-Protokoll.

═══ CHAIN-LINK-HEADER ═══ SEQ-10 von 72 ═══ Pipeline: Discovery ═══
← VORHERIGE: SEQ-09 → DISCOVERY-PHASE-09.md
→ NAECHSTE: SEQ-11 → EXPANSION-PHASE-01.md
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
DISCOVERY-PHASE-10: KONTEXT-KONSOLIDIERUNG UND TRANSFORMATIONSBEREITSCHAFT
═══════════════════════════════════════════════════════════════════════════════

DEFINITION: Phase 10 ist die Synthese. Alle Erkenntnisse aus Phase 1-9 werden
zu einem einzigen, kohaerenten Projekt-Profil konsolidiert. Die Context-Dateien
werden finalisiert, die Transformations-Prioritaeten definiert und die Pipeline
wird fuer die Expansion-Phase vorbereitet. Am Ende dieser Phase hat jedes
KI-System — ob Antigravity, Claude oder ein anderes — ein VOLLSTAENDIGES Bild
der bestehenden Code-Basis und kann FEHLERFREI mit der Transformation beginnen.
ERGEBNIS: Alle Context-Dateien finalisiert. .pipeline-master-state.md initialisiert.
Pipeline ist bereit fuer EXPANSION-PHASE-01.

ULTRATHINK-LANGZEITTASK 10.1: DISCOVERY-CONTEXT KONSOLIDIEREN
─────────────────────────────────────────────────────────────────────────────
Konsolidiere alle Sektionen der .ai-discovery-context.md:
  Sektion FUNDAMENT (Phase 1): Framework, Dependencies, Config, Ordnerstruktur.
  Sektion ROUTEN-TOPOLOGIE (Phase 2): Alle Routen, Navigations-Graph, API-Endpoints.
  Sektion KOMPONENTEN-TAXONOMIE (Phase 3): Komponentenkatalog, Hooks, State, Graph.
  Sektion DATENMODELL-TOPOLOGIE (Phase 4): Types, Datenquellen, Datenfluss, Integritaet.
  Sektion STYLING-ANATOMIE (Phase 5): Farben, Typografie, Spacing, Animationen.
  Sektion PERFORMANCE-BASELINE (Phase 6): Build-Metriken, Bundle, Assets, Lade-Strategien.
  Sektion ACCESSIBILITY-BASELINE (Phase 7): Semantik, ARIA, Tastatur, Kontraste.
  Sektion SECURITY-STATUS (Phase 8): Headers, Secrets, Vulnerabilities, DSGVO.
  Sektion CODE-QUALITAET (Phase 9): TypeScript, Linting, Duplikation, Anti-Patterns.
Pruefe:
  Sind alle Sektionen vollstaendig befuellt?
  Gibt es Widersprueche zwischen Sektionen?
  Ist das Format konsistent (LLM-SCAN-FORMAT)?

ULTRATHINK-LANGZEITTASK 10.2: PROJEKT-GESUNDHEITS-SCORE BERECHNEN
─────────────────────────────────────────────────────────────────────────────
Erstelle einen quantifizierten Gesundheitsbericht:
  ARCHITEKTUR-SCORE (0-100):
    Ordnerstruktur, Komponenten-Organisation, Abhaengigkeits-Tiefe.
  TYPE-SAFETY-SCORE (0-100):
    TypeScript-Errors, any-Count, Strict-Config.
  PERFORMANCE-SCORE (0-100):
    Bundle-Size, Build-Speed, Asset-Optimierung.
  ACCESSIBILITY-SCORE (0-100):
    Semantik, ARIA, Kontraste, Tastatur, Motion.
  SECURITY-SCORE (0-100):
    Headers, Secrets, Vulnerabilities, DSGVO.
  CODE-QUALITAETS-SCORE (0-100):
    Linting, Duplikation, Naming, Anti-Patterns.
  GESAMT-SCORE: Gewichteter Durchschnitt aller Einzel-Scores.
Dokumentiere in .pipeline-master-state.md unter GESUNDHEITS-BASELINE.

ULTRATHINK-LANGZEITTASK 10.3: TRANSFORMATIONS-PRIORITAETEN DEFINIEREN
─────────────────────────────────────────────────────────────────────────────
Basierend auf den Scores und Erkenntnissen, definiere Prioritaeten:
  P0 BLOCKER: Dinge die VOR jeder Transformation gefixt werden muessen.
    Build bricht? TypeScript kompiliert nicht? Security-Leck?
  P1 CRITICAL: Dinge die in den ersten Phasen adressiert werden muessen.
    Architektur-Defizite, fehlende Type-Safety, Performance-Killer.
  P2 HIGH: Wichtige Verbesserungen die frueh angegangen werden sollten.
    Design-System-Luecken, Accessibility-Defizite, Code-Duplikation.
  P3 MEDIUM: Optimierungen die im Laufe der Pipeline adressiert werden.
    Naming-Inkonsistenzen, fehlende Tests, UX-Verfeinerungen.
  P4 LOW: Nice-to-haves die am Ende der Pipeline adressiert werden koennen.
Erstelle die TRANSFORMATIONS-ROADMAP in .pipeline-master-state.md:
  Welche Pipeline (Expansion/Engineering/Design/QA) adressiert welche Prioritaet?
  In welcher Phase wird welches Problem angegangen?

ULTRATHINK-LANGZEITTASK 10.4: CONTEXT-DATEIEN FUER NACHFOLGENDE PIPELINES
─────────────────────────────────────────────────────────────────────────────
Initialisiere die Context-Dateien fuer die 4 nachfolgenden Pipelines:
  .ai-expansion-context.md: Prefill mit Routen-Topologie und Datenmodell-Erkenntnissen.
  .ai-architectural-context.md: Prefill mit Performance-Baseline und Anti-Pattern-Liste.
  .ai-design-context.md: Prefill mit Styling-Anatomie und Accessibility-Baseline.
  .ai-qa-context.md: Prefill mit Code-Qualitaets-Metriken und Security-Status.
  .pipeline-master-state.md: Initialisiere mit:
    CODE-INVENTUR (vollstaendig aus Phase 1-9).
    FRAMEWORK-MAPPING (aus Phase 1).
    GESUNDHEITS-BASELINE (aus Task 10.2).
    TRANSFORMATIONS-ROADMAP (aus Task 10.3).
    DISCOVERY-STATUS: COMPLETE.
    NAECHSTE-PHASE: EXPANSION-PHASE-01.

ULTRATHINK-LANGZEITTASK 10.5: KI-LESBARKEITS-OPTIMIERUNG
─────────────────────────────────────────────────────────────────────────────
Optimiere ALLE Discovery-Outputs fuer maximale KI-Lesbarkeit:
  LLM-SCAN-FORMAT: [LLM-CONTEXT-START], [SECTION:NAME], [/SECTION] Tags.
  Konsistente Datenformate: Tabellen, Matrizen, Schluessel-Wert-Paare.
  Keine Prosa-Bloecke ohne Struktur — alles maschinenlesbar.
  Keine Mehrdeutigkeiten — jede Aussage ist eindeutig und verifizierbar.
  Cross-Referenzen: Jede Sektion verweist auf abhaengige Sektionen.
  Versionierung: Timestamp und Phase-Nummer in jedem Context-Update.
Fuehre den LESBARKEITS-TEST durch:
  Koennte ein KI-System NUR mit den Context-Dateien (ohne Code-Zugriff)
  die Architektur des Projekts vollstaendig beschreiben?
  Falls NEIN: Welche Informationen fehlen? → Ergaenze sie.

ULTRATHINK-LANGZEITTASK 10.6: HANDOFF AN EXPANSION-PIPELINE
─────────────────────────────────────────────────────────────────────────────
Generiere den formalen Handoff-Bericht:
  DISCOVERY-ZUSAMMENFASSUNG (1 Seite):
    Framework, Groesse, Gesundheits-Score, Top-5-Probleme, Top-5-Staerken.
  EXPANSION-BRIEFING:
    Welche Routen existieren und brauchen Erweiterung?
    Welche Datenmodelle sind unvollstaendig?
    Welche Komponenten sind Kandidaten fuer Refactoring?
    Welche Design-System-Luecken muessen adressiert werden?
  WARNUNGEN FUER ALLE DIRECTORS:
    Bekannte Fallstricke im bestehenden Code.
    Framework-spezifische Eigenheiten die beachtet werden muessen.
    Dependencies die problematisch sind (veraltet, vulnerabel, zu gross).
Aktualisiere .discovery-state.md:
  STATUS: COMPLETE.
  HANDOFF: EXPANSION-PHASE-01 bereit.
  DATUM und TIMESTAMP.

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-10 ABGESCHLOSSEN ═══ Pipeline: Discovery ═══
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
   [ ] .discovery-state.md aktualisiert (Phase 10 COMPLETE)
   [ ] Erkenntnisse fuer nachfolgende Phasen vorbereitet
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

═══ DISCOVERY-PHASE-10 ABGESCHLOSSEN → WEITER MIT EXPANSION-PHASE-01.md ═══
