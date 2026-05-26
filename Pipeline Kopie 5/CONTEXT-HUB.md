═══════════════════════════════════════════════════════════════════════════════
CONTEXT-HUB — ZENTRALES REGISTER ALLER GETEILTEN KONTEXT-SPEICHERORTE
═══════════════════════════════════════════════════════════════════════════════

Dieses Dokument ist das zentrale Nachschlagewerk fuer ALLE Kontextdateien,
die waehrend der Pipeline-Ausfuehrung erstellt, gelesen und aktualisiert werden.
Jede Kontextdatei dient als geteiltes Gedaechtnis zwischen Phasen, Pipelines
und zukuenftigen LLM-Sessions (Antigravity, Claude, GPT, Gemini, etc.).

SSOT-DIREKTIVE: Der Code ist die einzige Wahrheit. Die Kontextdateien sind
das GEDAECHTNIS — aber wenn sie dem Code widersprechen, GEWINNT DER CODE.
Kontextdateien werden dann an den Code angepasst, nicht umgekehrt.

ZWECK: Maximale Lesbarkeit und Kontext-Kontinuitaet fuer LLMs.
REGEL: Jede Kontextdatei nutzt das unten definierte LLM-SCAN-FORMAT.
SPEICHERORT: Alle Kontextdateien werden im PROJEKT-ROOT erstellt (nicht im Pipeline-Ordner).
LEBENSDAUER: Alle Kontextdateien sind PERSISTENT — sie werden NIE geloescht, nur erweitert.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 1: VOLLSTAENDIGES KONTEXTDATEI-REGISTER
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
DATEI 1: .pipeline-master-state.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: MASTER-ORCHESTRATOR (alle Pipelines)
Erstellt von: START.md (Schritt 1-5)
Aktualisiert von: JEDE Phase (Schritt D: Handoff)
Gelesen von: JEDE Phase (Schritt A: Context Load)
Zweck: Meta-Zustand aller 156 Phasen — Tech-Stack-Profil, Framework-Mapping,
       Code-Inventur, Sequenz-Tracker, Baseline-Metriken, Defect-Log, Handoff-Notizen
Lebensdauer: Gesamte Pipeline-Laufzeit + persistent fuer Zukunft
Format: Strukturiertes Key-Value + Tabellen (Schema: MASTER-ORCHESTRATOR.md SEKTION 3)

ULTRATHINK-ERWEITERUNG — AKTUALISIERUNGS-PFLICHTEN:
  Jede Phase MUSS folgende Felder aktualisieren:
  - SEQUENZ-TRACKER: Status der aktuellen Phase (PENDING → IN_PROGRESS → COMPLETED)
  - LETZTE METRIKEN: tsc, lint, build nach Abschluss
  - HANDOFF-NOTIZEN: Was ist relevant fuer die naechste Phase
  - DEFECT-LOG: Neue Defekte hinzufuegen (falls aufgetreten)
  - CODE-INVENTUR: Neue/geaenderte Dateien dokumentieren
  Bei Pipeline-Grenzen ZUSAETZLICH:
  - AKTUELLE PIPELINE: Aktualisieren auf neue Pipeline-Nummer
  Eine Phase die diese Aktualisierung NICHT durchfuehrt, verletzt den MASTER-ORCHESTRATOR.

───────────────────────────────────────────────────────────────────────────────
DATEI 1b: .ai-discovery-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 0 (DISCOVERY)
Erstellt von: DISCOVERY-PHASE-01 (bei Start)
Aktualisiert von: DISCOVERY-PHASE-01 bis 10
Gelesen von: Pipeline 1, 2, 3, 4, OMNI, zukuenftige LLM-Sessions
Zweck: Forensischer Gesamtbericht der bestehenden Code-Basis — molekulare Analyse
       aller Aspekte des Projekts VOR jeder Transformation.
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:FUNDAMENT] → Framework, Versionen, Dependencies, Config, Ordnerstruktur (Phase 1)
  [SECTION:ROUTEN-TOPOLOGIE] → Alle Routen, Navigations-Graph, API-Endpoints, Redirects (Phase 2)
  [SECTION:KOMPONENTEN-TAXONOMIE] → Komponentenkatalog, Hooks, State, Import-Graph (Phase 3)
  [SECTION:DATENMODELL-TOPOLOGIE] → Types, Interfaces, Datenquellen, Datenfluss, Integritaet (Phase 4)
  [SECTION:STYLING-ANATOMIE] → Farben, Typografie, Spacing, Animationen, Design-Methodik (Phase 5)
  [SECTION:PERFORMANCE-BASELINE] → Build-Metriken, Bundle-Analyse, Assets, Lade-Strategien (Phase 6)
  [SECTION:ACCESSIBILITY-BASELINE] → Semantik, ARIA, Tastatur, Kontraste, Motion (Phase 7)
  [SECTION:SECURITY-STATUS] → Headers, Secrets, Vulnerabilities, DSGVO, Input-Validierung (Phase 8)
  [SECTION:CODE-QUALITAET] → TypeScript-Status, Linting, Duplikation, Anti-Patterns (Phase 9)
  [SECTION:GESUNDHEITS-SCORE] → Quantifizierter Score pro Kategorie (Phase 10)
  [SECTION:TRANSFORMATIONS-ROADMAP] → Priorisierte Luecken-Liste und Zuordnung zu Pipelines (Phase 10)

───────────────────────────────────────────────────────────────────────────────
DATEI 1c: .discovery-state.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 0 (DISCOVERY)
Erstellt von: DISCOVERY-PHASE-01 (bei Start)
Aktualisiert von: DISCOVERY-PHASE-01 bis 10
Gelesen von: Director General, Director of Expansion (vor Start)
Zweck: Interner Fortschritts-Tracker der Discovery-Pipeline.
       Phase-Status, offene Fragen, Handoff-Bereitschaft.

───────────────────────────────────────────────────────────────────────────────
DATEI 2: .ai-expansion-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 1 (EXPANSION)
Erstellt von: EXPANSION-PHASE-01 (bei Abschluss)
Aktualisiert von: EXPANSION-PHASE-02 bis 10
Gelesen von: Pipeline 2, 3, 4, OMNI, zukuenftige LLM-Sessions
Zweck: Vollstaendige Karte des Projekts — Route-Map, File-Inventar,
       Daten-Modelle, Content-Struktur, Navigations-Architektur
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:ROUTE-MAP] → Jede Route mit Pfad, Datei, Status, Layout, Datenquellen, SEO-Status
  [SECTION:FILE-INVENTAR] → Jede erstellte/geaenderte Datei mit Pfad, Typ, Groesse, Abhaengigkeiten
  [SECTION:DATEN-MODELLE] → Jedes Interface/Type mit Feldern, Validierung, Referenzen
  [SECTION:CONTENT-STRUKTUR] → Content-Hierarchie, Seiten-Typen, Template-Zuordnungen
  [SECTION:NAVIGATIONS-ARCHITEKTUR] → Menue-Struktur, Breadcrumbs, Link-Topologie, Sitemap
  [SECTION:FORMULAR-INTEGRATIONEN] → Formspree-Endpunkte, Calendly-Widgets, Kontaktformulare
  [SECTION:ENTSCHEIDUNGEN] → Architektur-Entscheidungen mit BEGRUENDUNG und ALTERNATIVEN
  [SECTION:BEKANNTE-PROBLEME] → Offene Issues mit WORKAROUND und GEPLANTEM FIX
  [SECTION:HANDOFF-NOTIZEN] → Kritische Informationen fuer Pipeline 2

───────────────────────────────────────────────────────────────────────────────
DATEI 3: .ai-architectural-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 2 (ENGINEERING)
Erstellt von: ZERO-BREAKAGE-PHASE-01 (bei Abschluss)
Aktualisiert von: ZERO-BREAKAGE-PHASE-02 bis 20
Gelesen von: Pipeline 3, 4, OMNI, zukuenftige LLM-Sessions
Zweck: Technische Architektur-Karte — Komponenten-Map, Design Patterns,
       SEO-Status, Performance-Baseline, Security-Audit, API-Struktur
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:KOMPONENTEN-MAP] → Jede Komponente mit Props, Pattern, Abhaengigkeiten, Test-Status
  [SECTION:DESIGN-PATTERNS] → Verwendete Patterns (Composition, Compound, HOC) mit Beispielen
  [SECTION:SEO-STATUS] → Metadata-Abdeckung pro Route, JSON-LD-Schemas, Sitemap, Robots, Canonical
  [SECTION:PERFORMANCE-BASELINE] → LCP, CLS, INP, Bundle-Size, Lighthouse-Score, Core Web Vitals
  [SECTION:SECURITY-AUDIT] → CSP-Header, DSGVO-Status, Secrets-Management, Cookie-Consent
  [SECTION:API-STRUKTUR] → Endpunkte, Request/Response-Formate, Rate-Limits, Error-Handling
  [SECTION:TESTING-STATUS] → Test-Coverage, Test-Typen (Unit/Integration/E2E), fehlende Tests
  [SECTION:ERROR-HANDLING] → Error-Boundary-Karte, Fallback-UI-Strategien, Logging
  [SECTION:ENTSCHEIDUNGEN] → Technische Entscheidungen mit BEGRUENDUNG
  [SECTION:BEKANNTE-PROBLEME] → Technische Schulden, Performance-Bottlenecks
  [SECTION:HANDOFF-NOTIZEN] → Kritische Informationen fuer Pipeline 3

───────────────────────────────────────────────────────────────────────────────
DATEI 4: .ai-design-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 3 (DESIGN)
Erstellt von: DESIGN-PHASE-01 (bei Abschluss)
Aktualisiert von: DESIGN-PHASE-02 bis 10
Gelesen von: Pipeline 4, 5, 6, OMNI, zukuenftige LLM-Sessions

───────────────────────────────────────────────────────────────────────────────
DATEI 4b: .ai-security-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 4 (SECURITY)
Erstellt von: SECURITY-PHASE-01 (bei Abschluss)
Aktualisiert von: SECURITY-PHASE-02 bis 05
Gelesen von: Pipeline 5, 6, OMNI, zukuenftige LLM-Sessions
Zweck: Sicherheits-Gedaechtnis — Security-Audit-Ergebnisse, CSP-Header-Konfiguration,
       Input-Validierungs-Strategien, Secrets-Management, Compliance-Status, Zertifizierungen
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:SECURITY-AUDIT] → Threat-Model, Identifizierte Vulnerabilities, CVSS-Scores
  [SECTION:CSP-HEADERS] → Implementierte CSP-Policy, Nonce-Handling, Frame-Ancestors
  [SECTION:INPUT-VALIDIERUNG] → Validierungs-Strategien pro Feature, Sanitization-Regeln
  [SECTION:SECRETS-MANAGEMENT] → Umgebungsvariablen-Handling, Key-Rotation, Audit-Logs
  [SECTION:COMPLIANCE-STATUS] → DSGVO-Checkliste, WCAG-Compliance, Datenschutz-Status
  [SECTION:ZERTIFIZIERUNGEN] → Erhaltene Zertifikate, Audit-Reports, Compliance-Nachweise
  [SECTION:BEKANNTE-PROBLEME] → Sicherheits-Schulden, Workarounds, Geplanzte Fixes
  [SECTION:HANDOFF-NOTIZEN] → Kritische Informationen fuer Pipeline 5

───────────────────────────────────────────────────────────────────────────────
DATEI 4c: .ai-discovery-context-p5.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 5 (AI-DISCOVERY)
Erstellt von: AI-DISCOVERY-PHASE-01 (bei Abschluss)
Aktualisiert von: AI-DISCOVERY-PHASE-02 bis 05
Gelesen von: Pipeline 6, OMNI, zukuenftige LLM-Sessions
Zweck: KI-Optimierungs-Gedaechtnis — Identifizierte Code-Pattern-Verbesserungen,
       Performance-Optimierungsempfehlungen, Accessibility-Auto-Fixes, Code-Qualitaets-Verbesserungen
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:CODE-PATTERN-ANALYSE] → Identifizierte Patterns, Verbesserungsempfehlungen, ROI-Analysen
  [SECTION:PERFORMANCE-OPTIMIERUNGEN] → Empfohlene Optimierungen, geschaetzte Verbesserungen
  [SECTION:ACCESSIBILITY-FIXES] → Automatisch identifizierte A11y-Maengel, Fixes, WCAG-Compliance
  [SECTION:CODE-QUALITAETS-OPTIMIERUNGEN] → Duplikationen, Anti-Patterns, Refactoring-Empfehlungen
  [SECTION:RECOMMENDATIONS-SUMMARY] → Zusammenfassung aller KI-Empfehlungen mit Prioritaeten
  [SECTION:HANDOFF-NOTIZEN] → Kritische Informationen fuer Pipeline 6

───────────────────────────────────────────────────────────────────────────────
DATEI 5: .ai-qa-context.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 6 (QA)
Erstellt von: QA-PHASE-01 (bei Abschluss)
Aktualisiert von: QA-PHASE-02 bis 10
Gelesen von: OMNI, zukuenftige LLM-Sessions
Zweck: Visuelles Design-Gedaechtnis — Brand DNA, Token-System, Farb-Mappings,
       Typografie-Entscheidungen, Animations-Regeln, Accessibility-Audit
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert

ULTRATHINK-ERWEITERUNG — PFLICHT-SEKTIONEN:
  [SECTION:BRAND-DNA] → Farb-Philosophie, Marken-Persoenlichkeit, visueller Stil, Moodboard-Referenzen
  [SECTION:TOKEN-SYSTEM] → Vollstaendiges Token-Register (Farben, Spacing, Typo, Shadow, Animation)
                           Referenz: DESIGN-TOKENS.md (SEQ-31)
  [SECTION:FARB-MAPPINGS] → Semantische Zuordnungen (primary, secondary, accent, status, background)
  [SECTION:TYPOGRAFIE-SYSTEM] → Font-Stack, Groessen-Skala, Gewichte, Zeilenhoehen, Letter-Spacing
  [SECTION:ANIMATIONS-REGELN] → Motion-Tokens, Durations, Easings, prefers-reduced-motion-Status
  [SECTION:ACCESSIBILITY-AUDIT] → WCAG AAA Kontrast-Verhaeltnisse, Fokus-Management, ARIA-Abdeckung
  [SECTION:RESPONSIVE-STRATEGIE] → Breakpoints, Layout-Shifts, Touch-Targets, Mobile-First-Entscheidungen
  [SECTION:KOMPONENTEN-ANATOMIE] → Visuelle Anatomie von Buttons, Cards, Inputs, Navigation (Spacing, Farben)
  [SECTION:ENTSCHEIDUNGEN] → Design-Entscheidungen mit BEGRUENDUNG
  [SECTION:HANDOFF-NOTIZEN] → Kritische Informationen fuer Pipeline 4

───────────────────────────────────────────────────────────────────────────────
DATEI 6: .project-knowledge-base.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: ALLE Pipelines (geteiltes Wissen)
Erstellt von: START.md (bei Pipeline-Initialisierung)
Aktualisiert von: JEDE Phase die neues Wissen extrahiert
Gelesen von: JEDE Phase, JEDE zukuenftige LLM-Session, JEDES AI-Tool
Zweck: Persistentes Projekt-Gedaechtnis — Das kollektive Wissen ueber das Projekt:
       - Bekannte Architektur-Entscheidungen und WARUM sie getroffen wurden
       - Bekannte Gotchas, Fallstricke und Workarounds
       - Abhaengigkeiten zwischen Komponenten
       - Business-Logik die nicht im Code offensichtlich ist
       - Stil-Konventionen und Namens-Muster
       - Haeufige Fehlerquellen und wie sie geloest wurden
       - Performance-kritische Pfade
       - Externe Integrationen und deren Konfiguration
Lebensdauer: PERMANENT — Ueberlebt die Pipeline, wird zum lebenden Projekt-Dokument

ULTRATHINK-ERWEITERUNG — AKTUALISIERUNGS-DISZIPLIN:
  JEDE Phase extrahiert neues Wissen. Kein Wissen darf verloren gehen.
  Typische Wissens-Extraktion pro Pipeline:
  Pipeline 1: Routing-Entscheidungen, Daten-Architektur, Content-Strategie
  Pipeline 2: Code-Patterns, Performance-Optimierungen, Security-Entscheidungen
  Pipeline 3: Design-Entscheidungen, Token-Philosophie, Accessibility-Strategien
  Pipeline 4: Fehler-Muster, Regressions-Anfaelligkeiten, Test-Strategien
  OMNI: Systemische Erkenntnisse, Cross-Pipeline-Korrelationen

───────────────────────────────────────────────────────────────────────────────
DATEI 7: .qa-defect-log.md
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 6 (QA) + OMNI-CLOSED-LOOP
Erstellt von: QA-PHASE-01
Aktualisiert von: JEDE QA-Phase, OMNI-CLOSED-LOOP, ERROR-RECOVERY
Gelesen von: Pipeline 6, OMNI, zukuenftige LLM-Sessions
Zweck: Kumulatives Fehler-Protokoll — Jeder Bug hat ID, Severity, Root-Cause,
       Fix-Status, betroffene Dateien, Regressions-Test
Lebensdauer: Persistent

ULTRATHINK-ERWEITERUNG — DEFECT-LOG FORMAT:
  Jeder Eintrag MUSS folgende Felder haben:
  | ID | SEQ | Severity | File | Description | Root-Cause-Pipeline | Fix | Status | Regression-Test |

  Severity-Stufen: CRITICAL / HIGH / MEDIUM / LOW
  Status-Stufen: OPEN / IN_PROGRESS / FIXED / BLOCKED / WONT_FIX

  REGELN:
  - Eintraege werden NIE geloescht, nur Status-Updates.
  - FIXED-Eintraege behalten ihre vollstaendige Historie.
  - BLOCKED-Eintraege werden von OMNI-CLOSED-LOOP erneut aufgegriffen.
  - Jeder FIXED-Eintrag MUSS einen Regression-Test definieren.

───────────────────────────────────────────────────────────────────────────────
DATEI 8: PIPELINE-INTERNE STATE-TRACKER
───────────────────────────────────────────────────────────────────────────────
Besitzer: Pipeline 4 (QA) + OMNI-CLOSED-LOOP
Erstellt von: QA-PHASE-01
Aktualisiert von: JEDE QA-Phase, OMNI-CLOSED-LOOP, ERROR-RECOVERY
Gelesen von: Pipeline 4, OMNI, zukuenftige LLM-Sessions
Zweck: Kumulatives Fehler-Protokoll — Jeder Bug hat ID, Severity, Root-Cause,
       Fix-Status, betroffene Dateien, Regressions-Test
Lebensdauer: Persistent

ULTRATHINK-ERWEITERUNG — DEFECT-LOG FORMAT:
  Jeder Eintrag MUSS folgende Felder haben:
  | ID | SEQ | Severity | File | Description | Root-Cause-Pipeline | Fix | Status | Regression-Test |

  Severity-Stufen: CRITICAL / HIGH / MEDIUM / LOW
  Status-Stufen: OPEN / IN_PROGRESS / FIXED / BLOCKED / WONT_FIX

  REGELN:
  - Eintraege werden NIE geloescht, nur Status-Updates.
  - FIXED-Eintraege behalten ihre vollstaendige Historie.
  - BLOCKED-Eintraege werden von OMNI-CLOSED-LOOP erneut aufgegriffen.
  - Jeder FIXED-Eintrag MUSS einen Regression-Test definieren.

───────────────────────────────────────────────────────────────────────────────
DATEI 8: PIPELINE-INTERNE STATE-TRACKER
───────────────────────────────────────────────────────────────────────────────
Die folgenden Dateien sind Pipeline-interne Zustandstracker:
- .discovery-state.md         → Interner Fortschritt Pipeline 0 (SEQ-01 bis SEQ-10)
- .expansion-state.md         → Interner Fortschritt Pipeline 1 (SEQ-11 bis SEQ-20)
- .upgrade-state.md           → Interner Fortschritt Pipeline 2 (SEQ-21 bis SEQ-40)
- .design-upgrade-state.md    → Interner Fortschritt Pipeline 3 (SEQ-41 bis SEQ-51)
- .security-upgrade-state.md  → Interner Fortschritt Pipeline 4 (SEQ-52 bis SEQ-56)
- .ai-discovery-state.md      → Interner Fortschritt Pipeline 5 (SEQ-57 bis SEQ-61)
- .qa-pipeline-state.md       → Interner Fortschritt Pipeline 6 (SEQ-62 bis SEQ-71)
- .omni-closed-loop-state.md  → Meta-Phase Zustand (SEQ-72)

ULTRATHINK-ERWEITERUNG — STATE-TRACKER FORMAT:
  Jeder Pipeline-interne State-Tracker folgt dem gleichen Schema:
  PIPELINE: [Name]
  AKTUELLE PHASE: SEQ-[XX]
  AKTUELLER BLOCK: [A/B/C/D]
  AKTUELLER TASK: [Nummer und Beschreibung]
  LETZTE VALIDATION: [Timestamp + Ergebnis]
  OFFENE TASKS: [Liste]
  ABGESCHLOSSENE TASKS: [Liste mit Timestamps]
  ENTDECKTE DEFEKTE: [Liste mit Defect-IDs]
  Dies ermoeglicht praezise Recovery nach Session-Unterbrechung (CONTINUE.md Szenario A).

───────────────────────────────────────────────────────────────────────────────
DATEI 9: ERWEITERUNGS-PIPELINE KONTEXTDATEIEN (RING 2)
───────────────────────────────────────────────────────────────────────────────
Die folgenden Kontextdateien werden von den 8 Erweiterungs-Pipelines erstellt
und vom ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR verwaltet. Sie propagieren
Zustand zwischen Ring-2-Pipelines und dem Hauptstrang (Ring 1).

  .ai-cicd-context.md          → CI/CD-Pipeline (Injection: SEQ-40, Block 15)
  .ai-api-context.md           → API-Design-Pipeline (Injection: SEQ-40, Block 16)
  .ai-testing-context.md       → Testing-Pipeline (Injection: SEQ-40, Block 17)
  .ai-i18n-context.md          → I18N-Pipeline (Injection: SEQ-20, Block 09)
  .ai-monitoring-context.md    → Monitoring-Pipeline (Injection: SEQ-71, Block 20)
  .ai-content-context.md       → Content-Workflow-Pipeline (Injection: SEQ-20, Block 10)
  .ai-db-context.md            → Datenbank-Pipeline (Injection: SEQ-40, Block 14)
  .ai-tenant-context.md        → Multi-Tenant-Pipeline (Injection: SEQ-51, Block 19)
  .ai-seo-metrik-context.md       → SEO-Metrik-Pipeline (Injection: SEQ-71, Block 17b)
  .ai-design-kreativitaet-context.md  → Persistenter Zustand fuer Kreativitaets-Entscheidungen (Farben, Phi, Fuehrung, Preview)

Besitzer: Jeweilige Erweiterungs-Pipeline
Erstellt von: Erste Phase der jeweiligen Erweiterungs-Pipeline
Aktualisiert von: Alle Phasen der jeweiligen Erweiterungs-Pipeline
Gelesen von: MASTER-LOOP-ORCHESTRATOR, OMNI-CLOSED-LOOP, Folge-Pipelines
Lebensdauer: Persistent — wird NIE geloescht, nur erweitert
Gate-Bedingung: Erweiterungs-Pipeline startet NUR wenn Ring-1-Injection-Phase COMPLETED ist

VERWALTUNGS-AUTORITAET: ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md
ENFORCEMENT-AUTORITAET: ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md

───────────────────────────────────────────────────────────────────────────────
DATEI 10: PFLICHTLEKTUERE-DOKUMENTE (GOVERNANCE)
───────────────────────────────────────────────────────────────────────────────
Die folgenden Dokumente sind PFLICHTLEKTUERE fuer JEDE ausfuehrende KI
BEVOR die erste Phase gestartet wird:

  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md
    Inhalt: Verschaerftes Domino-Protokoll (7-Schritt-Lifecycle A-G pro SEQ),
            Zehnfach-Validierungsdirektive (10X), Null-Externe-Software-Direktive
    Gelesen von: JEDE Phase, JEDE Pipeline, JEDE ausfuehrende KI
    Autoritaet: Ueberschreibt ALLE anderen Anweisungen bei Konflikten

  ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md
    Inhalt: Kontrollierte Design-Kreativitaet (Golden Ratio, Farbpsychologie, Visuelles Guidance, Preview-Validierung)
    Gelesen von: Design-Phasen SEQ-42 bis SEQ-51 (DESIGN-PHASE-01 bis DESIGN-PHASE-10)
    Autoritaet: Definiert Kreativitaets-Rahmenbedingungen fuer alle Design-Entscheidungen

  ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md
    Inhalt: Geschlossener Meta-Loop ueber alle 27 Pipeline-Module,
            3-Ring-Architektur, 8 Injection-Points, 21 linearisierte Bloecke,
            Defect-Routing-Tabelle (14 Kategorien), 22 Zertifizierungs-Metriken
    Gelesen von: START.md, CONTINUE.md, OMNI-CLOSED-LOOP, alle Erweiterungs-Pipelines
    Autoritaet: Definiert die Ausfuehrungsreihenfolge aller 156 Phasen

═══════════════════════════════════════════════════════════════════════════════
SEKTION 2: LLM-SCAN-FORMAT (PFLICHTFORMAT FUER ALLE KONTEXTDATEIEN)
═══════════════════════════════════════════════════════════════════════════════

Jede Kontextdatei MUSS folgendes Format verwenden, damit LLMs sie schnell
parsen und verstehen koennen:

───────────────────────────────────────────────────────────────────────────────
FORMAT-VORLAGE:
───────────────────────────────────────────────────────────────────────────────

[LLM-CONTEXT-START]
DATEI: [Dateiname]
PROJEKT: [Projektname aus package.json]
PIPELINE: [1-EXPANSION / 2-ENGINEERING / 3-DESIGN / 4-QA / OMNI]
LETZTE-AKTUALISIERUNG: [ISO-8601 Timestamp]
AKTUALISIERT-VON: [Phase die zuletzt geschrieben hat, z.B. SEQ-05 EXPANSION-PHASE-05]
VERSION: [Inkrementell, z.B. v14]
NAECHSTER-LESER: [Welche Phase wird diese Datei als naechstes lesen]
[LLM-CONTEXT-END]

[SECTION:ZUSAMMENFASSUNG]
2-3 Saetze: Was enthaelt diese Datei und warum ist sie wichtig.
[/SECTION]

[SECTION:INVENTAR]
Strukturierte Daten: Listen, Tabellen, Key-Value-Paare.
Jeder Eintrag hat: Name, Pfad, Status, Beschreibung.
[/SECTION]

[SECTION:ENTSCHEIDUNGEN]
Architektur-Entscheidungen mit Begruendung.
Format: ENTSCHEIDUNG → BEGRUENDUNG → ALTERNATIVEN (verworfen) → DATUM
[/SECTION]

[SECTION:BEKANNTE-PROBLEME]
Offene Issues, technische Schulden, Workarounds.
Format: PROBLEM → WORKAROUND → GEPLANTER FIX → SEVERITY → BETRIFFT-PHASE
[/SECTION]

[SECTION:HANDOFF-NOTIZEN]
Was muss die naechste Phase / der naechste LLM wissen?
Kritische Informationen die nicht offensichtlich sind.
Strukturiert nach Prioritaet: KRITISCH → WICHTIG → INFORMATIV
[/SECTION]

───────────────────────────────────────────────────────────────────────────────
WARUM DIESES FORMAT:
───────────────────────────────────────────────────────────────────────────────

1. [LLM-CONTEXT-START/END] Tags ermoeglichen schnelles Identifizieren als Kontextdatei
2. [SECTION:NAME] Tags erlauben gezieltes Springen zu relevanten Abschnitten
3. Strukturierte Daten (Listen, Tabellen) sind fuer LLMs leichter parsbar als Fliesstext
4. Explizite ENTSCHEIDUNGEN + BEGRUENDUNGEN verhindern dass LLMs Architektur-Entscheidungen rueckgaengig machen
5. BEKANNTE-PROBLEME verhindern dass LLMs Zeit auf bereits bekannte Issues verschwenden
6. HANDOFF-NOTIZEN sind das "Fluestern ins Ohr" fuer den naechsten Agenten
7. VERSION ermoeglicht Aenderungs-Tracking ueber Sessions hinweg
8. NAECHSTER-LESER signalisiert welche Phase die Datei als naechstes konsumiert

ULTRATHINK-ERWEITERUNG — FORMAT-VALIDIERUNG:
  Beim Erstellen/Aktualisieren einer Kontextdatei MUSS geprueft werden:
  - Hat die Datei [LLM-CONTEXT-START] und [LLM-CONTEXT-END] Tags?
  - Sind alle Pflicht-Felder im Header befuellt?
  - Hat jede [SECTION] ein korrespondierendes [/SECTION]?
  - Ist die VERSION inkrementiert worden?
  - Ist der LETZTE-AKTUALISIERUNG Timestamp aktuell?
  Fehlende oder korrupte Kontextdateien werden von CONTINUE.md aus dem Code rekonstruiert (SSOT).

═══════════════════════════════════════════════════════════════════════════════
SEKTION 3: .PROJECT-KNOWLEDGE-BASE.MD — PERSISTENTES PROJEKT-GEDAECHTNIS
═══════════════════════════════════════════════════════════════════════════════

Die Knowledge Base ist das WICHTIGSTE Dokument fuer zukuenftige LLM-Sessions.
Sie wird bei START.md initialisiert und bei JEDER Phase erweitert.
Sie ueberlebt die Pipeline und dient als dauerhaftes, lebendes Projekt-Dokument.

PFLICHT-SEKTIONEN:

[SECTION:PROJEKT-IDENTITAET]
- Projektname, Zweck, Zielgruppe, USP
- Tech-Stack (aus .pipeline-master-state.md uebernommen)
- Deployment-Ziel (Vercel, Netlify, selbst-gehostet, etc.)
- Repository-URL (falls vorhanden)
- Package-Manager und Node-Version
[/SECTION]

[SECTION:ARCHITEKTUR-KARTE]
- Verzeichnisstruktur mit Zweck jedes Ordners
- Routing-Uebersicht (alle Routen mit Beschreibung und Status)
- Komponenten-Hierarchie (welche Komponente nutzt welche)
- Datenfluss-Diagramm (woher kommen Daten, wohin fliessen sie)
- Shared State (globaler State, Context-Provider-Hierarchie)
[/SECTION]

[SECTION:DESIGN-SYSTEM]
- Farb-Palette mit Variablennamen und Hex-Codes
- Typografie-System (Schriftarten, Groessen, Gewichte)
- Spacing-System (Abstands-Skala, Grid-Mathematik)
- Animations-Bibliothek (verwendete Transitions/Keyframes)
- Referenz auf DESIGN-TOKENS.md (SEQ-31)
[/SECTION]

[SECTION:BUSINESS-LOGIK]
- Nicht-offensichtliche Geschaeftsregeln
- Warum bestimmte Dinge so sind wie sie sind
- Kundenanforderungen die im Code nicht sichtbar sind
- Branchen-spezifische Terminologie
[/SECTION]

[SECTION:GOTCHAS]
- Bekannte Fallstricke und deren Loesung
- Workarounds die in Zukunft aufgeraeumt werden sollten
- Browser-spezifische Hacks mit Erklaerung
- Fragile Code-Bereiche die besondere Vorsicht erfordern
- Regressions-anfaellige Features
[/SECTION]

[SECTION:EXTERNE-INTEGRATIONEN]
- Formspree: Konfiguration, Formulare, Endpunkte, Rate-Limits
- Calendly: Einbettung, Styling, Event-Typen, Embed-URL
- Andere APIs: Endpunkte, Auth-Mechanismus, Rate-Limits, Error-Handling
- Analytics: Tracking-Tool, Events, Consent-Management
[/SECTION]

[SECTION:PERFORMANCE-KRITISCH]
- LCP-Kandidaten und ihre Optimierung
- Bundle-Size-kritische Imports
- Lazy-Loading-Strategien
- Font-Loading-Strategie
- Image-Optimierungs-Strategie
- Critical CSS / Above-the-Fold-Optimierung
[/SECTION]

[SECTION:CHANGELOG]
Chronologische Liste aller signifikanten Aenderungen:
[DATUM] [PIPELINE:PHASE] Beschreibung der Aenderung
(Neueste Eintraege oben)
[/SECTION]

═══════════════════════════════════════════════════════════════════════════════
SEKTION 4: KONTEXT-FLUSS-DIAGRAMM
═══════════════════════════════════════════════════════════════════════════════

Wer schreibt was, wer liest was — vollstaendige Datenfluss-Matrix:

ERSTELLER              DATEI                              LESER
───────────────────    ─────────────────────────────────   ──────────────────────
START.md               .pipeline-master-state.md          ALLE Phasen
START.md               .project-knowledge-base.md         ALLE Phasen + Zukunft
DISCOVERY 01-10        .ai-discovery-context.md           EXP, ENG, DESIGN, SEC, AI, QA, OMNI
DISCOVERY 01-10        .discovery-state.md                DISCOVERY intern
EXPANSION 01-10        .ai-expansion-context.md           ENG, DESIGN, SEC, AI, QA, OMNI
EXPANSION 01-10        .expansion-state.md                EXPANSION intern
ENGINEERING 01-20      .ai-architectural-context.md       DESIGN, SEC, AI, QA, OMNI
ENGINEERING 01-20      .upgrade-state.md                  ENGINEERING intern
DESIGN 01-10           .ai-design-context.md              SEC, AI, QA, OMNI
DESIGN 01-10           .design-upgrade-state.md           DESIGN intern
SECURITY 01-05         .ai-security-context.md            AI, QA, OMNI
SECURITY 01-05         .security-upgrade-state.md         SECURITY intern
AI-DISCOVERY 01-05     .ai-discovery-context-p5.md        QA, OMNI
AI-DISCOVERY 01-05     .ai-discovery-state.md             AI-DISCOVERY intern
QA 01-10               .ai-qa-context.md                  OMNI, Zukunft
QA 01-10               .qa-defect-log.md                  QA, OMNI
QA 01-10               .qa-pipeline-state.md              QA intern
OMNI                   .omni-closed-loop-state.md         OMNI intern
JEDE Phase             .project-knowledge-base.md         ALLE + Zukunft
JEDE Phase             .pipeline-master-state.md          ALLE Phasen
CI-CD 01-10            .ai-cicd-context.md                MASTER-LOOP, OMNI
API-DESIGN 01-10       .ai-api-context.md                 MASTER-LOOP, OMNI
TESTING 01-10          .ai-testing-context.md             MASTER-LOOP, OMNI
I18N 01-08             .ai-i18n-context.md                MASTER-LOOP, OMNI
MONITORING 01-08       .ai-monitoring-context.md          MASTER-LOOP, OMNI
CONTENT-WF 01-08       .ai-content-context.md             MASTER-LOOP, OMNI
DATENBANK 01-08        .ai-db-context.md                  MASTER-LOOP, OMNI
MULTI-TENANT 01-08     .ai-tenant-context.md              MASTER-LOOP, OMNI
SEO-METRIK 01-10       .ai-seo-metrik-context.md          MASTER-LOOP, PM, OMNI

ULTRATHINK-ERWEITERUNG — LESE-PFLICHTEN PRO PIPELINE:
  Pipeline 0 (DISCOVERY) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT — falls von START.md erstellt)
    .project-knowledge-base.md (PFLICHT — falls existent)
    Kein Code wird veraendert. Nur Context-Dateien werden geschrieben.

  Pipeline 1 (EXPANSION) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-discovery-context.md (PFLICHT — vollstaendige Projekt-Analyse aus Discovery)
    .expansion-state.md (PFLICHT, falls existent)

  Pipeline 2 (ENGINEERING) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-expansion-context.md (PFLICHT — enthaelt Route-Map, Daten-Modelle)
    .upgrade-state.md (PFLICHT, falls existent)

  Pipeline 3 (DESIGN) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-expansion-context.md (PFLICHT — enthaelt Content-Struktur)
    .ai-architectural-context.md (PFLICHT — enthaelt Komponenten-Map, Patterns)
    DESIGN-TOKENS.md (PFLICHT — Referenzdokument fuer Token-System)
    .design-upgrade-state.md (PFLICHT, falls existent)

  Pipeline 4 (SECURITY) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-architectural-context.md (PFLICHT — enthaelt Security-Baseline)
    .security-upgrade-state.md (PFLICHT, falls existent)

  Pipeline 5 (AI-DISCOVERY) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-architectural-context.md (PFLICHT)
    .ai-design-context.md (PFLICHT)
    .ai-security-context.md (PFLICHT)
    .ai-discovery-state.md (PFLICHT, falls existent)

  Pipeline 6 (QA) liest bei Eintritt:
    .pipeline-master-state.md (PFLICHT)
    .project-knowledge-base.md (PFLICHT)
    .ai-expansion-context.md (PFLICHT)
    .ai-architectural-context.md (PFLICHT)
    .ai-design-context.md (PFLICHT)
    .ai-security-context.md (PFLICHT)
    .ai-discovery-context-p5.md (PFLICHT)
    .qa-pipeline-state.md (PFLICHT, falls existent)
    .qa-defect-log.md (PFLICHT, falls existent)

  OMNI-CLOSED-LOOP liest bei Eintritt:
    ALLE oben genannten Dateien (PFLICHT — OHNE AUSNAHME)

═══════════════════════════════════════════════════════════════════════════════
SEKTION 4B: MOLEKULARE DESIGN-WISSENSBASIS (context_documents/)
═══════════════════════════════════════════════════════════════════════════════

VERZEICHNIS: context_documents/
ZWECK: 20 Referenz-Dokumente mit extrahiertem molekularem Design-Wissen.
        Diese Dokumente bilden die VOLLSTAENDIGE Design-Wissensbasis, aus der
        alle Design-Phasen ihre Tiefenerkenntnisse beziehen.
ERSTELLUNG: Automatisch kopiert aus den Original-Referenzdokumenten.
VERWENDUNG: Kontext-Injektion fuer KI-Agenten bei Design-Aufgaben.

DOKUMENT-REGISTER:
  01_core_search_engine_architecture.md   — Token-Resolution-Pipeline, 6 Domaenen, Scoring-Algorithmus
  02_design_system_generation.md          — UX-Reasoning-Layer, 163 Kategorien, Output-Payload
  03_cli_installation_and_tooling.md      — Stack-Empfehlungen, Projektstruktur, cn()-Utility
  04_ux_guidelines.md                     — 10 Kategorien molekularer UX-Heuristiken
  05_ui_reasoning_and_foundations.md       — 163 Produkt-Kategorien mit Style/Color/Typography-Mapping
  06_color_theory_and_palettes.md         — 162 Hex-Paletten nach Vertikal, 16-Token Semantic Mapping
  07_typography_and_fonts.md              — 73 Font-Pairings inkl. 27+ internationale Schriften
  08_ui_styles_and_aesthetics.md          — 80 Design-Aesthetiken mit CSS-Variablen
  09_landing_page_strategies.md           — 36 Landing-Page-Archetypen mit Conversion-Psychologie
  10_product_type_adaptations.md          — 161 Produkt-Vertikalen mit UI/Dashboard/Landing-Mapping
  11_chart_types_and_data_viz.md          — 22 Chart-Typen mit A11y-Bewertung (A-D)
  12_iconography_and_assets.md            — Phosphor-Icon-Dictionary, 5 aesthetik-spezifische Systeme
  13_react_native_and_expo_core.md        — Next.js App Router, Server/Client Components
  14_animation_and_reanimated.md          — Framer Motion Patterns, Timing-Tabelle, Anti-Patterns
  15_styling_nativewind_and_skia.md       — Tailwind HSL-Config, Glassmorphism, Gradient-Techniken
  16_mobile_touch_and_haptics.md          — Touch-Targets 44x44px, WCAG 2.1 Checkliste
  17_component_buttons_and_inputs.md      — Button-Hierarchie, Interaktions-States, Form-Architektur
  18_component_cards_and_layout.md        — Card-Architektur, CSS-Grid, 4pt/8pt-Raster
  19_iconography_and_lucide.md            — Lucide React, Sizing-Regeln, next/image, Avatar-System
  20_ai_agent_platform_integrations.md    — Kontext-Injektions-Strategie, Upgrade-Workflow

CROSS-REFERENZ ZU PIPELINE-PHASEN:
  DESIGN-TOKENS.md       ← Docs 01, 02, 05, 06, 15
  DESIGN-PHASE-01        ← Doc 06 (Farbpaletten)
  DESIGN-PHASE-02        ← Doc 07 (Typografie)
  DESIGN-PHASE-03        ← Docs 17, 18 (Komponenten)
  DESIGN-PHASE-04        ← Doc 14 (Animation)
  DESIGN-PHASE-05        ← Docs 04, 16 (UX/Mobile)
  DESIGN-PHASE-06        ← Docs 09, 10 (Landing Pages)
  DESIGN-PHASE-07        ← Doc 11 (Charts)
  DESIGN-PHASE-08        ← Docs 08, 15 (Aesthetiken)
  DESIGN-PHASE-09        ← Docs 12, 19 (Icons)
  DESIGN-PHASE-10        ← Doc 16 (A11y/Validierung)
  ZERO-BREAKAGE-01..03   ← Doc 13 (Next.js Architektur)
  AI-DISCOVERY-02, -04   ← Doc 20 (AI-Agent-Integration)

═══════════════════════════════════════════════════════════════════════════════
SEKTION 4C: ENTERPRISE-CHEATCODE-SYSTEM (35 CODES, 100K-WERT-GARANTIE)
═══════════════════════════════════════════════════════════════════════════════

ZWECK: 35 Enterprise-Level-Cheatcodes die in die Pipeline-Phasen injiziert wurden.
        Diese Codes transformieren jede Website die durch die Pipeline laeuft
        von einer Standard-Website zu einem Premium-Produkt mit 100.000 EUR Marktwert.

CHEATCODE-VERTEILUNG IN DER PIPELINE:
  ZERO-BREAKAGE-PHASE-01  ← CC-01..04 (ISR, Streaming SSR, Prefetching, Env-Config)
  ZERO-BREAKAGE-PHASE-04  ← CC-05..07 (Error Boundaries, Graceful Degradation, Retry)
  ZERO-BREAKAGE-PHASE-14  ← CC-08..10 (Caching, Rate-Limiting, API Security)
  ZERO-BREAKAGE-PHASE-15  ← CC-11..13 (Feature Flags, Custom Hooks, Compound Components)
  ZERO-BREAKAGE-PHASE-16  ← CC-14..16 (Image CDN, Font Performance, Bundle Optimization)
  ZERO-BREAKAGE-PHASE-19  ← CC-17..19 (Web Vitals, Lighthouse CI, Bundle Monitoring)
  DESIGN-PHASE-03          ← CC-20..22 (Slots, Polymorphie, CVA Variants)
  DESIGN-PHASE-04          ← CC-23..25 (View Transitions, Scroll Animations, Skeletons)
  DESIGN-PHASE-05          ← CC-26..29 (Optimistic UI, Scroll Restore, Virtual Scroll, Back-to-Top)
  AI-DISCOVERY-PHASE-02    ← CC-30..31 (Rich Snippets, OG-Images)
  AI-DISCOVERY-PHASE-03    ← CC-32..35 (RSS, Sitemap, Canonical, AI-Crawler)
  DESIGN-TOKENS.md         ← Vollstaendiges Cheatcode-Register (Sektion 10)
  OMNI-CLOSED-LOOP.md      ← Audit B.8 (Cheatcode-Compliance-Pruefung, Min. 30/35)

REFERENZ: Vollstaendige Cheatcode-Beschreibungen in DESIGN-TOKENS.md Sektion 10.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 5: ANWEISUNGEN FUER ZUKUENFTIGE LLM-SESSIONS
═══════════════════════════════════════════════════════════════════════════════

Wenn du als LLM (Antigravity, Claude, GPT, Gemini, etc.) zum ersten Mal
an diesem Projekt arbeitest, folge dieser Lese-Reihenfolge:

SCHRITT 0: Lese ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (PFLICHT — Domino-Protokoll, 10X, Software-Ban)
SCHRITT 0b: Lese ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md (PFLICHT — Loop-Architektur, Injection-Points)
SCHRITT 1: Lese .project-knowledge-base.md (Gesamtbild verstehen)
SCHRITT 2: Lese .pipeline-master-state.md (Technischer Status, Sequenz-Tracker)
SCHRITT 3: Lese die fuer deine Aufgabe relevante Kontextdatei:
           - Neue Features/Routen?    → .ai-expansion-context.md
           - Code-Qualitaet/Bugs?     → .ai-architectural-context.md + .ai-qa-context.md
           - Design-Aenderungen?      → .ai-design-context.md + DESIGN-TOKENS.md
           - Alles?                   → Alle Kontextdateien lesen
SCHRITT 4: Erst DANN den Code lesen und arbeiten

PFLICHT AM ENDE JEDER SESSION:
- Aktualisiere .project-knowledge-base.md mit neuem Wissen
- Dokumentiere: Was wurde geaendert, warum, und was sollte der naechste Agent wissen
- Inkrementiere die VERSION in jeder aktualisierten Kontextdatei
- Aktualisiere den LETZTE-AKTUALISIERUNG Timestamp

ULTRATHINK-ERWEITERUNG — KONTEXT-HYGIENE:
  Kontextdateien die laenger als 3 Pipeline-Laeufe nicht aktualisiert wurden, sind VERDAECHTIG.
  Pruefe: Stimmen die Informationen noch mit dem Code ueberein? (SSOT-Regel)
  Falls NEIN → Rekonstruiere aus dem Code und aktualisiere die Kontextdatei.
  Das Gedaechtnis muss FRISCH und KORREKT sein — veraltetes Gedaechtnis ist schlimmer als kein Gedaechtnis.

═══════════════════════════════════════════════════════════════════════════════
DER CONTEXT-HUB IST DAS GEDAECHTNIS. OHNE IHN IST JEDE SESSION EIN NEUANFANG.
DER INFINITE LOOP UEBERLEBT NUR MIT INTAKTEM GEDAECHTNIS.
═══════════════════════════════════════════════════════════════════════════════
