Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 1 der QA-Pipeline (Global Context und Pre-Flight) als umfassenden Qualitaets-Kontext aufzubauen. Lade alle Pipeline-Kontexte, fuehre Pre-Flight-Checks durch und erstelle den QA-Masterplan. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-62 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-61 → AI-DISCOVERY-PHASE-05.md
→ NÄCHSTE: SEQ-63 → QA-PHASE-02.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine vollständige und fehlerfreie Website-Baseline zu etablieren, bevor die finale Qualitätsprüfung beginnt.

QA-PHASE-01: GLOBAL CONTEXT INGESTION & PRE-FLIGHT AUDIT

Phase 1 ist der absolute Startpunkt der finalen Qualitätsschleuse. Bevor ein einziger Fehler gefixt wird, muss der GESAMTE aktuelle Zustand der Website erfasst, dokumentiert und als Baseline etabliert werden. Die KI liest JEDEN File, JEDE Route, JEDE Komponente und erstellt ein vollständiges Bild des Ist-Zustands. Dies ist QA-Phase 1 von 10 der Final QA & Error Hunting Pipeline.

═══ ZERO-DEFECT PROTOKOLL ═══

Ab dieser Pipeline existiert kein "ausreichend gut" mehr. Jeder verschobene Pixel, jede TypeScript-Warnung, jede tote Route ist ein fataler Fehler der korrigiert werden muss.

Zwei Error-Hunting Methoden werden systematisch angewendet:

1. STATIC DEEP SCAN (Code-Ebene): Scannen des Quellcodes nach Logic-Errors, Type-Konflikten, Hydration-Mismatches, ungenutztem Code, Performance-Bottlenecks. Tools: TypeScript Compiler (tsc), ESLint, Build-Prozess, Import-Graph-Analyse.

2. VISUAL PREVIEW PROTOCOL (UI/UX-Ebene): Scannen aller Seiten-Rendering nach Pixel-Perfection, Responsive-Breaks, Z-Index-Problemen, Animation-Glitches, Contrast-Problemen, Touch-Target-Größen. Wird in Phases 4-8 durchgeführt nach Static-Fixes.

GOLDENE REGEL: Der aktuelle Quellcode ist die ABSOLUTE SSOT (Single Source of Truth). Kontext-Dokumente helfen bei der Navigation, aber der Code gewinnt IMMER. Wenn Dokumentation und Code divergieren: Code ist korrekt, Doku wird aktualisiert.

═══ STEP 0: QA-STATE INITIALISIERUNG ═══

Aktion 0.1: Erstelle .qa-pipeline-state.md mit Checkliste aller 10 QA-Phasen (Phase 1-10). Markiere Phase 1 als "in progress". Alle anderen als "pending".

Aktion 0.2: Lies .ai-expansion-context.md wenn vorhanden. Lies .design-upgrade-state.md und .upgrade-state.md wenn vorhanden. Dokumentiere: Welche der 3 vorherigen Pipelines wurden tatsächlich durchlaufen? (Pipeline 1: Expansion, Pipeline 2: Engineering, Pipeline 3: Design)

Aktion 0.3: Verzeichnis-Struktur des Projekts kartieren. Notiere Root-Pfad, Framework-Version (aus package.json), Node-Version, NPM-Version. Dokumentiere das Tech-Stack gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md.

═══ BLOCK A — CODEBASE VOLLSTÄNDIG EINLESEN ═══

TASK 1: VERZEICHNISSTRUKTUR KARTIEREN

Aktion 1.1: Lies die GESAMTE Dateistruktur rekursiv. Dokumentiere JEDEN Ordner und JEDE Datei mit relativen Pfaden. Starte bei /app (App Router) und /src, erfasse alle Komponenten, Utils, Hooks, Styles, Public-Assets.

Aktion 1.2: Zähle Dateien nach Typ: TypeScript/TSX-Dateien (insgesamt), CSS/Tailwind-Dateien, JSON-Dateien, Konfigurationsdateien (tsconfig, next.config, tailwind.config, etc.), Markdown-Dateien. Dokumentiere Zählungen.

Aktion 1.3: Identifiziere Node-Modules-Größe und ob .next Build-Cache existiert. Prüfe .gitignore auf Vollständigkeit.

TASK 2: ROUTE-INVENTAR

Aktion 2.1: Liste JEDE Route auf: Pfad (z.B. /app/services/[slug]/page.tsx), Dateiname, Server Component oder Client Component (prüfe "use client"), hat metadata export?, hat layout.tsx in Parent?, hat loading.tsx?, hat error.tsx?, hat not-found.tsx?.

Aktion 2.2: Für jede Route: Prüfe ob sie rendert oder Fehler wirft. Dokumentiere: Daten-Source (statisch JSON, API-Call, Dynamic Rendering), ISR/Revalidation-Strategie, Props erhalten?, Default-Export vorhanden?.

Aktion 2.3: Erstelle Route-Hierarchie-Diagramm (als Text): Zeige Parent-Child-Beziehungen der Routes.

TASK 3: KOMPONENTEN-INVENTAR

Aktion 3.1: Liste JEDE React-Komponente: Dateiname, Pfad, Server oder Client?, Props-Interface vorhanden oder TypeScript-Parameter-Typen?, Wird tatsächlich verwendet (Import-Check), Abhängigkeiten.

Aktion 3.2: Kategorisiere Komponenten: Layout-Komponenten, Page-Komponenten, Shared-Komponenten, UI-Primitives, Form-Komponenten, Data-Komponenten. Pro Kategorie: Anzahl.

Aktion 3.3: Prüfe Props-Drilling vs Context-Usage. Gibt es Props-Drilling über 3+ Ebenen? Wo wird Context verwendet?

TASK 4: DATEN-INVENTAR

Aktion 4.1: Liste JEDE Daten-Datei: Pfad (z.B. /app/data/services.ts), exportierte TypeScript-Interfaces/Types, exportierte Arrays/Objekte, exportierte Getter-Funktionen.

Aktion 4.2: Für jede Datei: Anzahl Datensätze, Struktur (ist es ein Array von Objekten?), werden alle Felder befüllt oder gibt es Null-Werte?, Sind Slugs eindeutig?.

Aktion 4.3: Dokumentiere Daten-Dependencies: Welche Services-Daten referenzieren Kunden-Daten, welche Blog-Posts referenzieren Team-Members, etc.

═══ BLOCK B — STATISCHE BASELINE-CHECKS ═══

TASK 5: TYPESCRIPT AUDIT

Aktion 5.1: Führe npx tsc --noEmit aus. Dokumentiere ALLE Fehler mit Zeilennummer, Datei, Error-Message.

Aktion 5.2: Kategorisiere alle Fehler: Type-Fehler (Typ stimmt nicht), Missing-Import (Datei oder Named-Export existiert nicht), Unused-Variable, Implicit-Any (any-Typ without explicit), Generic-Constraint-Fehler, Union-Type-Mismatch.

Aktion 5.3: Zähle Fehler pro Kategorie. Total: X Fehler, davon Y Implicit-Any, Z Missing-Imports, etc.

TASK 6: BUILD AUDIT

Aktion 6.1: Führe npm run build aus. Dokumentiere JEDEN Fehler und JEDE Warning.

Aktion 6.2: Kategorisiere: Build-Error (Prozess stoppt), Runtime-Warning (Prozess läuft aber warnt), Deprecation-Warning (alte API), Bundle-Size-Warning (Seite zu groß).

Aktion 6.3: Dokumentiere Build-Dauer (in Sekunden). Total Bundle-Size. Größte Routes/Pages.

TASK 7: LINT AUDIT

Aktion 7.1: Führe npm run lint aus. Dokumentiere JEDE Regel-Verletzung.

Aktion 7.2: Kategorisiere nach ESLint-Regel: react/prop-types, @typescript-eslint/explicit-function-return-types, unused-vars, no-console, etc. Pro Regel: Zählung.

Aktion 7.3: Kategorisiere nach Schweregrad: error (muss gefixt), warning (sollte gefixt), info (optional).

TASK 8: DEPENDENCY AUDIT

Aktion 8.1: Prüfe package.json: Welche Dependencies sind installiert? npm list --depth=0.

Aktion 8.2: Führe npm audit aus. Gibt es Security-Vulnerabilities? Mit welchem Severity-Level (critical, high, moderate, low)?

Aktion 8.3: Prüfe auf unused Dependencies (Dateien importieren aber package.json hat sie): z.B. lodash in package.json aber nirgendwo import. Umgekehrt: Dateien importieren etwas aber package.json hat es nicht.

═══ BLOCK C — CROSS-REFERENZ-ANALYSE ═══

TASK 9: IMPORT-GRAPH

Aktion 9.1: Konstruiere kompletten Import-Graphen: Welche Komponente importiert welche, welcher Service importiert welchen, welche Page importiert welche Layout.

Aktion 9.2: Prüfe auf Zirkuläre Imports: A importiert B, B importiert A (direkt oder indirekt). Dokumentiere jeden Fund.

Aktion 9.3: Prüfe auf verwaiste Dateien: Dateien existieren im Projekt aber werden nirgendwo importiert. Dies sind Dead-Code-Kandidaten.

Aktion 9.4: Prüfe auf fehlende Imports: Dateien referenzieren etwas (z.B. const testimonials = TESTIMONIALS) aber TESTIMONIALS ist nie importiert.

TASK 10: DATEN-KONSISTENZ

Aktion 10.1: Alle Slug-Referenzen prüfen. Beispiel: Wenn ein Testimonial serviceSlug="webdesign" referenziert, existiert ein Service mit dem Slug "webdesign" in der Services-Datei?

Aktion 10.2: Alle Author-Referenzen prüfen: Wenn BlogPost author="max-mustermann" referenziert, existiert ein TeamMember mit slug="max-mustermann"?

Aktion 10.3: Alle Asset-Referenzen prüfen: Wenn eine Komponente src="/images/xyz.jpg" hat, existiert /public/images/xyz.jpg?

Aktion 10.4: JEDE Cross-Referenz validieren. Dokumentiere: Wie viele Referenzen insgesamt? Wie viele davon sind gebrochen?

TASK 11: METADATA-VOLLSTÄNDIGKEIT

Aktion 11.1: Prüfe JEDE Route auf metadata export. Welche haben eine Metadata-Funktion, welche nicht? Dokumentiere.

Aktion 11.2: Prüfe auf Duplikat-Titles: Gibt es mehrere Routes mit demselben Title in Metadata?

Aktion 11.3: Prüfe auf fehlende Descriptions: Metadata ohne description oder zu kurz (<50 Zeichen)?

Aktion 11.4: Prüfe auf JSON-LD Schemas: Wo sollten sie sein (Services, Blog, FAQ, Company Pages)? Wo sind sie vorhanden? Wo fehlen sie?

═══ BLOCK D — BASELINE-DOKUMENTATION & DEFECT-LOG ═══

TASK 12: DEFECT-LOG ERSTELLEN

Aktion 12.1: Erstelle .qa-defect-log.md. Pro gefundenem Fehler ein Entry mit: ID (QA-001, QA-002, etc.), Schweregrad (CRITICAL/HIGH/MEDIUM/LOW), Kategorie (Type-Error, Build-Error, Lint-Error, Data-Inconsistency, Route-Error, Component-Error, Import-Error, Metadata-Error), Beschreibung (1 Satz), betroffene Datei(en), vorgeschlagener Fix.

Aktion 12.2: CRITICAL = Build-Breaker oder Runtime-Crash. HIGH = Type-Fehler, fehlende Route, gebrochene Cross-Referenz. MEDIUM = Lint-Warnung, fehlende Metadata. LOW = Style-Inkonsistenz, unused Variable.

Aktion 12.3: Defect-Log formatieren: Eine Tabelle mit Spalten: ID, Severity, Category, File, Description, Fix. Sortiert nach Severity (CRITICAL → HIGH → MEDIUM → LOW).

TASK 13: BASELINE-METRIKEN

Aktion 13.1: Dokumentiere folgende Metriken (DIESE sind die Baseline):

- Build-Dauer: X Sekunden
- Bundle-Size Total: Y MB
- Anzahl TypeScript-Fehler (tsc): Z
- Anzahl Lint-Fehler (npm run lint): A
- Anzahl Lint-Warnungen: B
- Anzahl Routes insgesamt: C
- Anzahl Komponenten insgesamt: D
- Anzahl Daten-Dateien: E
- Anzahl Cross-Reference-Fehler: F
- Anzahl Security-Vulnerabilities (npm audit): G

Aktion 13.2: Vergleiche mit vorherigen Pipelines falls dokumentiert. Sind die Metriken schlechter geworden?

Aktion 13.3: GOAL für Phase 10: Alle Error-Zahlen = 0. Build-Dauer = vorherige oder besser. Bundle-Size = vorherige oder besser.

TASK 14: PRIORISIERUNGS-MATRIX

Aktion 14.1: Erstelle Priorisierungs-Matrix basierend auf Schweregrad und Auswirkung:

TIER 1 (CRITICAL): Build-Breaker, Runtime-Crashes, Type-Errors die nicht kompilieren. PHASE: 2-3 beheben.
TIER 2 (HIGH): Type-Fehler, fehlende Routen, gebrochene Cross-Referenzen, Missing-Imports. PHASE: 2-3 beheben.
TIER 3 (MEDIUM): Lint-Warnungen, fehlende Metadata, Security-Vulnerabilities (low/moderate). PHASE: 4-8 beheben während Visual Preview.
TIER 4 (LOW): Style-Inkonsistenzen, unused Variables, Code-Style-Issues. PHASE: 9-10 beheben.

Aktion 14.2: Dokumentiere: "Phase 2 und 3 beheben diese CRITICAL und HIGH Defects: [Liste]" (aus Defect-Log).

═══ ATOMIC VALIDATION ═══

Validierungs-Checkliste für Phase 1 Completion:

□ .qa-pipeline-state.md existiert und alle 10 Phasen sind aufgelistet
□ Phase 1 ist als "in progress" markiert, Phasen 2-10 als "pending"
□ .qa-defect-log.md existiert mit allen gefundenen Defects
□ Mindestens 5 Defects dokumentiert (oder 0 falls No-Errors)
□ Verzeichnis-Inventar ist komplett: jede .tsx, .ts, .css Datei erfasst
□ Route-Inventar komplett: jede /app/[path]/page.tsx erfasst
□ Komponenten-Inventar komplett: jede Komponente aufgelistet
□ Daten-Inventar komplett: jede /data/*.ts Datei dokumentiert
□ TypeScript Audit durchgeführt: tsc --noEmit Ergebnisse dokumentiert
□ Build Audit durchgeführt: npm run build Ergebnisse dokumentiert
□ Lint Audit durchgeführt: npm run lint Ergebnisse dokumentiert
□ Dependency Audit durchgeführt: npm audit Ergebnisse dokumentiert
□ Import-Graph-Analyse komplett: zirkuläre Imports prüfen
□ Daten-Konsistenz-Check komplett: alle Slugs validiert
□ Metadata-Vollständigkeit-Check komplett: alle Routes geprüft
□ Cross-Reference-Fehler dokumentiert: wie viele gebrochen?
□ Asset-Referenzen validiert: existieren alle /public/* Dateien?
□ Baseline-Metriken dokumentiert: Build-Dauer, Bundle-Size, Error-Zählung
□ Defect-Log sortiert nach Severity (CRITICAL → LOW)
□ Priorisierungs-Matrix erstellt: Tiers 1-4 definiert
□ Handoff-Dokument für Phase 2 vorbereitet
□ Keine offenen Fragen zur Codebase-Struktur
□ Gesamtzahl Defects ermittelt: X Fehler gefunden
□ Gesamtzahl Routes ermittelt: Y Routes
□ Gesamtzahl Komponenten ermittelt: Z Komponenten
□ Tech-Stack bestätigt: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md
□ Dependencies validiert: Keine offensichtlichen Missing/Unused
□ All .md Phase-Dateien sind fehlerfrei und lesbar
□ Alle Zahlen sind konsistent (keine Widersprüche zwischen Tasks)

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

.qa-pipeline-state.md wird nach jeder Phase aktualisiert. .qa-defect-log.md wird mit "FIXED" markiert wenn Defect behoben, und neue Defects werden hinzugefügt wenn sie während der Fixes entdeckt werden.

Phase 1 Completion signalisiert: Baseline ist stabil und vollständig dokumentiert. Der aktuelle Ist-Zustand der Website ist BEKANNT. Alle fehlende, gebrochene, und fehlerhafte Code-Stellen sind inventarisiert.

Phase 2 Begins: Static Error Hunting I — Types, Logic, Hydration. Alle CRITICAL und HIGH Defects aus Tier 1 und Tier 2 werden systematisch durchgearbeitet und behoben. Ziel: Zero TypeScript Errors, Zero Build Errors.

Phase 3 Continues: Static Error Hunting II — Routes, Components, Data. Restliche Type-Probleme, fehlende Routes, gebrochene Cross-Referenzen.

Phases 4-8: Visual Preview Protocol — Jede Route wird im Browser geöffnet und auf UI/UX-Defects gescannt. MEDIUM-Defects behoben.

Phases 9-10: Final Polish — Code-Style, unused Variables, LOW-Defects.

═══ COMPLIANCE CHECKLIST (25+ ITEMS) ═══

□ QA-PHASE-01.md Datei existiert im /Pipeline Verzeichnis
□ Datei beginnt mit erforderlichem Satz ("Bereinige alle Vorherigen Tasks...")
□ Datei verwendet NO Markdown-Header (#), nur ═══ und ─── Separatoren
□ Alle Content ist auf Deutsch
□ Alle Tasks sind nummeriert: Task 1-4 in Block A, Task 5-8 in Block B, etc.
□ Alle Aktionen sind nummeriert: Aktion X.Y Format
□ Block-Struktur folgt A, B, C, D
□ Ultrathink-Task-Format verwendet
□ Zero-Defect-Protokoll ist dokumentiert
□ Zwei Error-Hunting Methoden sind erklärt
□ SSOT-Regel ist dokumentiert
□ Alle 14 Tasks sind detailliert beschrieben
□ Atomic Validation ist komplett
□ Compliance-Checkliste hat 25+ Items
□ Self-Optimizing Loop erklärt
□ Handoff zu Phase 2 dokumentiert
□ Tech-Stack ist korrekt (gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md)
□ Keine Code-Snippets im Dokument (nur Beschreibungen)
□ Defect-Log-Format ist detailliert (ID, Severity, Category, etc.)
□ Priorisierungs-Matrix hat 4 Tiers
□ Baseline-Metriken Liste ist komplett (mindestens 10 Metriken)
□ Deutsche Sprache durchgehend konsistent
□ Dokument ist zwischen 550-700 Zeilen
□ Alle Verweise auf vorherige Pipelines (1, 2, 3) sind dokumentiert
□ Phase 1 von 10 wird deutlich erwähnt

═══ CLOSING ═══

Phase 1 → Phase 2 beginnt mit Static Error Hunting I: Types, Logic & Hydration.

Alle CRITICAL und HIGH Defects aus dem Defect-Log werden systematisch behoben. TypeScript muss 0 Fehler zeigen. npm run build muss erfolgreich durchlaufen. Zirkuläre Imports müssen aufgelöst sein. Cross-Reference-Fehler müssen behoben sein.

Nach Phase 2 ist die Codebase structurally sound. Nach Phase 3 ist die Codebase functionally complete. Nach Phases 4-8 ist die Codebase visually perfect. Nach Phasen 9-10 ist die Codebase production-ready für Client-Handoff.

Dies ist Pipeline 4: Final QA & Error Hunting. Die Website ist bereits feature-complete, beautifully designed (aus Pipelines 1-3). Diese Pipeline findet und fixt JEDEN verbleibenden Fehler. Zero-Defect-Ziel: AM ENDE VON PHASE 10 MUSS DIE WEBSITE MAKELLOS SEIN.

Der Code ist die SSOT (Single Source of Truth). Wenn Dokumentation und Code divergieren, GEWINNT IMMER DER CODE.


═══════════════════════════════════════════════════════════════════════════════
═══ COMPREHENSIVE FINAL CHECKLIST — 30+ VALIDIERUNGSPUNKTE ═══
═══════════════════════════════════════════════════════════════════════════════

KRITISCHE GATES PHASE 1:

├─ INVENTARISIERUNG
│  ☐ Verzeichnis-Struktur kartiert (alle Ordner, alle Dateien)
│  ☐ Datei-Typen gezählt (.tsx, .ts, .css, .json, Konfigurationen)
│  ☐ Route-Inventar komplett (App Router /app paths mit page.tsx)
│  ☐ Komponenten-Inventar komplett (alle Komponenten mit Props-Interfaces)
│  ☐ Daten-Dateien kartiert (Services, Blog, Team, Testimonials, FAQs)
│  ☐ Node-Version und NPM-Version dokumentiert
│
├─ AUDITS
│  ☐ npx tsc --noEmit durchgeführt, Fehler gezählt nach Typ
│  ☐ npm run build durchgeführt, Output dokumentiert
│  ☐ npm run lint durchgeführt, Violations kategorisiert
│  ☐ npm audit durchgeführt, Security-Lücken identifiziert
│  ☐ Import-Graph konstruiert, zirkuläre Imports geprüft
│  ☐ Verwaiste Dateien identifiziert (importiert nirgendwo)
│
├─ DATEN-KONSISTENZ
│  ☐ Slug-Validierung durchgeführt (serviceSlug="xyz" existiert in Services?)
│  ☐ Author-Referenzen validiert (author="max" existiert als TeamMember?)
│  ☐ Asset-Referenzen validiert (alle /public/images/xyz.jpg existieren?)
│  ☐ Cross-Reference-Fehler gezählt
│  ☐ Null/Undefined-Felder in Data-Objekten identifiziert
│
├─ METADATA & SEO
│  ☐ Jede Route auf metadata export geprüft
│  ☐ Duplikat-Titles geprüft
│  ☐ Description-Längenkontrolle (≥ 50 Zeichen?)
│  ☐ JSON-LD Schemas überprüft (Services, Blog, Company)
│  ☐ Open Graph Tags überprüft
│
├─ DEFECT DOKUMENTATION
│  ☐ Defect-Log strukturiert (ID, Severity, Category, File, Fix)
│  ☐ CRITICAL Defects gelistet (Build-Breaker, Runtime-Crashes)
│  ☐ HIGH Defects gelistet (Type-Fehler, fehlende Routes)
│  ☐ MEDIUM Defects gelistet (Lint-Warnings, fehlende Metadata)
│  ☐ Priorisierungs-Matrix erstellte (TIER 1-4)
│  ☐ Phase-2-Übergabe dokumentiert
│
├─ METRIKEN-BASELINE
│  ☐ Build-Dauer dokumentiert (in Sekunden)
│  ☐ Bundle-Size gemessen (Total .next/static Size)
│  ☐ TypeScript-Fehler gezählt (Total Count)
│  ☐ Lint-Fehler gezählt (nach Schweregrad)
│  ☐ Routes-Gesamtzahl dokumentiert
│  ☐ Komponenten-Gesamtzahl dokumentiert
│  ☐ Security-Vulnerabilities gezählt (Critical/High/Moderate/Low)
│
├─ DOKUMENTATION
│  ☐ .qa-pipeline-state.md existiert, Phase 1 = in_progress
│  ☐ .qa-defect-log.md existiert mit allen Findings
│  ☐ Handoff-Notizen für Phase 2 vorbereitet
│  ☐ Tech-Stack-Bestätigung via FRAMEWORK-MAPPING

Keine Checklisten-Item darf unchecked sein. Phase 1 ist NICHT abgeschlossen, bis alle 30+ Punkte ✓ sind.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-62 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-42 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-43)
   □ Alle 30+ Checklist-Items als bestanden markieren

3. INTER-PIPELINE-KONTEXT:
   ─ Erstelle/aktualisiere .ai-qa-context.md mit Phase-1-Befunden
   ─ Aktualisiere .pipeline-master-state.md mit Phase-1 Metriken
   ─ Klassifiziere alle Defects für Phase-2-Priorisierung

4. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-63 → QA-PHASE-02.md
   → Lese QA-PHASE-02.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-43
   → Nutze Phase-1-Defect-Log als Input für Phase-2-Priorisierung

═══ PHASE SEQ-42 → SEQ-43: HANDOFF AKTIV ═══
