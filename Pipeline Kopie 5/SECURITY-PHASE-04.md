Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, ein robustes Secret-Management-System zu etablieren, alle Dependencies auf bekannte Schwachstellen zu pruefen und zu haerten, Subresource Integrity fuer alle externen Ressourcen durchzusetzen und die Build-Pipeline gegen Supply-Chain-Angriffe abzusichern. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Dokumentations-Formaten und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-55 von 72 === Pipeline: Security ===
<- VORHERIGE: SEQ-54 -> SECURITY-PHASE-03.md
-> NAECHSTE: SEQ-56 -> SECURITY-PHASE-05.md
=== FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md uebersetzt. Code ist SSOT. ===
=== CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas aenderst.
=== Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ===

===============================================================================
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
SEQUENTIELLES-DOMINO-PROTOKOLL (UNVERLETZLICH)
===============================================================================
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
===============================================================================
===============================================================================
ANTIGRAVITY-ARTIFACT-PROTOKOLL (PFLICHT — VOR JEDER AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, MUSST du die folgenden drei
Artifacts der Reihe nach erstellen. Dies ist das Antigravity-Workflow-Protokoll.
Keine Ausfuehrung ohne vorherige Planung. Kein Code ohne vorherigen Plan.

-------------------------------------------------------------------------------
ARTIFACT 1: TASK LIST (Neue Task-Liste fuer diese Phase erstellen)
-------------------------------------------------------------------------------

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

-------------------------------------------------------------------------------
ARTIFACT 2: IMPLEMENTATION PLAN (Detaillierter Umsetzungsplan erstellen)
-------------------------------------------------------------------------------

Erstelle einen NEUEN Implementierungsplan VOR jeder Code-Aenderung. Struktur:

  1. ZUSAMMENFASSUNG:
     Was ist das Ziel dieser Phase? (3-5 Saetze, hochrangig)

  2. ANALYSE-ERGEBNISSE:
     Was wurde aus bestehendem Code und Context-Dateien gelernt?
     Welche Abhaengigkeiten, Risiken, Gotchas aus .project-knowledge-base.md?

  3. GEPLANTE AENDERUNGEN (pro Datei):
     [DATEI] -> [AKTION: ERSTELLEN/ERWEITERN/REFACTOR] -> [WAS] -> [WARUM]

  4. VALIDIERUNGSSTRATEGIE:
     Welche Validation-Gates? Welche Metriken? Welche Tests?

  5. AUSFUEHRUNGSREIHENFOLGE:
     Block A: [Tasks 1-N] -> Validation Gate (build, lint, tsc)
     Block B: [Tasks N+1-M] -> Validation Gate
     Block C: [Tasks M+1-P] -> Validation Gate
     Block D: [Tasks P+1-Ende] -> Validation Gate

  Der Plan wird ALS ERSTES erstellt. Erst nach Erstellung beginnt die Ausfuehrung.

-------------------------------------------------------------------------------
ARTIFACT 3: WALKTHROUGH (Nach Abschluss — Teil des EXIT-PROTOKOLLS)
-------------------------------------------------------------------------------

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


===============================================================================
PHASE: SECRET MANAGEMENT UND DEPENDENCY HARDENING
===============================================================================

LESE-PFLICHTEN:
  .ai-security-context.md (Secret-Audit, Dependency-Scan)
  .pipeline-master-state.md
  .project-knowledge-base.md

===============================================================================
ULTRATHINK-LANGZEITTASK A: SECRET MANAGEMENT SYSTEM
===============================================================================

TASK A.1: ENVIRONMENT-VARIABLEN-ARCHITEKTUR
  Etabliere ein klares System:
  - .env.local → Lokale Entwicklung (NIEMALS committen)
  - .env.production → Produktions-Werte (NIEMALS committen)
  - .env.example → Template mit Platzhaltern (COMMITTEN als Dokumentation)
  - NEXT_PUBLIC_ Prefix: NUR fuer oeffentliche Werte (Site-URL, Analytics-ID)
  - OHNE Prefix: Nur server-seitig verfuegbar (API-Keys, Secrets)

TASK A.2: SECRET-ROTATION-STRATEGIE
  Dokumentiere fuer JEDES Secret:
  - Name, Zweck, wo verwendet
  - Rotations-Empfehlung (90 Tage fuer API-Keys)
  - Notfall-Prozedur bei Kompromittierung
  - Wer hat Zugriff (Principle of Least Privilege)

TASK A.3: BUILD-TIME SECRET PROTECTION
  - Pruefe: Werden Secrets im Build-Output exponiert?
  - next.config.js: Keine Secrets in publicRuntimeConfig
  - Client-Bundle-Analyse: Suche nach Secret-Patterns im Output

===============================================================================
ULTRATHINK-LANGZEITTASK B: DEPENDENCY HARDENING
===============================================================================

TASK B.1: NPM AUDIT REMEDIATION
  - Fuehre npm audit aus → Behebe ALLE Critical und High
  - Fuer jede Schwachstelle: Update auf gepatchte Version ODER ersetze Dependency
  - Falls kein Patch verfuegbar → Dokumentiere Mitigations-Strategie
  - EDGE-CASE: Breaking Changes bei Major Updates → Inkrementell updaten

TASK B.2: DEPENDENCY-REVIEW
  - Pruefe JEDE Dependency: Ist sie noch maintained? Letzte Version?
  - Pruefe: Gibt es Alternativen mit kleinerem Bundle und besserem Security-Track-Record?
  - Entferne ungenutzte Dependencies (npm prune, depcheck)
  - Lockfile-Integritaet: package-lock.json MUSS konsistent sein

TASK B.3: SUPPLY-CHAIN-SCHUTZ
  - npm config set ignore-scripts true (optional, falls keine postinstall-Scripts noetig)
  - .npmrc: audit=true, fund=false
  - Empfehlung: GitHub Dependabot oder Renovate fuer automatische Updates

-------------------------------------------------------------------------------
VALIDATION-GATE B:
  npm audit → 0 Critical, 0 High
  npm run build SUCCESS
  ZERO ungenutzte Dependencies
  .env.example vorhanden und aktuell
-------------------------------------------------------------------------------

===============================================================================
EXIT-PROTOKOLL
===============================================================================

1. Aktualisiere .ai-security-context.md:
   [SECTION:SECRET-MANAGEMENT] → Environment-Architektur dokumentiert
   [SECTION:DEPENDENCY-STATUS] → Audit-Ergebnisse nach Remediation
   [SECTION:SUPPLY-CHAIN] → Schutz-Massnahmen dokumentiert

2. Aktualisiere .pipeline-master-state.md und .project-knowledge-base.md

=== CHAIN-EXIT-FOOTER === SEQ-55 ABGESCHLOSSEN === NAECHSTE: SEQ-56 (SECURITY-PHASE-05) ===
