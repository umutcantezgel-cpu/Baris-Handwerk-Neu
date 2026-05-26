Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, ein vollstaendiges Security-Audit der bestehenden Code-Basis durchzufuehren, die Angriffsoberflaeche zu kartieren, ein Threat-Model nach OWASP-Methodik zu erstellen und alle identifizierten Schwachstellen priorisiert zu dokumentieren. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Dokumentations-Formaten und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-52 von 72 === Pipeline: Security ===
<- VORHERIGE: SEQ-51 -> DESIGN-PHASE-10.md
-> NAECHSTE: SEQ-53 -> SECURITY-PHASE-02.md
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
PHASE: SECURITY AUDIT UND THREAT MODELING
===============================================================================

LESE-PFLICHTEN (VOR BEGINN DIESER PHASE):
  .pipeline-master-state.md (Aktueller Zustand, Baseline)
  .project-knowledge-base.md (Bekannte Gotchas, Architektur-Entscheidungen)
  .ai-architectural-context.md (Komponenten-Map, API-Struktur)
  .ai-design-context.md (Token-System, Client-Side Patterns)

DIRECTOR: DIRECTOR OF SECURITY (WAECHTER DER ANGRIFFSOBERFLAECHE)
PFLICHT-GESETZE: GESETZ 1 (Ultrathink), GESETZ 2 (100K-Mindset), GESETZ 8 (Pre-Launch Gates)

===============================================================================
ULTRATHINK-LANGZEITTASK A: ANGRIFFSOBERFLAECHEN-KARTIERUNG
===============================================================================

TASK A.1: OWASP TOP 10 MAPPING AUF BESTEHENDEN CODE
  Analysiere den gesamten bestehenden Code gegen die OWASP Top 10 (2021):
  A01 Broken Access Control → Pruefe alle Routen auf Autorisierung
  A02 Cryptographic Failures → Pruefe Verschluesselung, Token-Handling
  A03 Injection → Pruefe alle Inputs (Forms, URL-Params, API)
  A04 Insecure Design → Pruefe Architektur-Patterns auf Schwachstellen
  A05 Security Misconfiguration → Pruefe Configs (next.config, headers)
  A06 Vulnerable Components → npm audit, bekannte CVEs in Dependencies
  A07 Authentication Failures → Pruefe Session-Management, Token-Validierung
  A08 Data Integrity Failures → Pruefe Deserialisierung, CI/CD
  A09 Logging Failures → Pruefe Logging-Mechanismen, Monitoring
  A10 SSRF → Pruefe Server-Side Requests, Redirect-Handling

  Dokumentationsformat pro Schwachstelle:
  | ID | OWASP-Kategorie | Datei | Zeile | Severity | Beschreibung | Empfohlener Fix |

TASK A.2: ATTACK-SURFACE ENUMERATION
  Erstelle eine vollstaendige Angriffsoberflaeche:
  - Alle oeffentlich erreichbaren Routen (GET, POST, PUT, DELETE)
  - Alle Formulare und deren Validierungsstatus
  - Alle externen Integrationen (Formspree, Calendly, Analytics)
  - Alle Client-Side APIs (localStorage, sessionStorage, Cookies)
  - Alle dynamischen Routen mit User-Input ([slug], searchParams)
  - Alle Third-Party Scripts und deren Berechtigungen

TASK A.3: THREAT MODEL ERSTELLEN (STRIDE-METHODIK)
  Fuer JEDE identifizierte Angriffsflaeche:
  S (Spoofing) → Kann die Identitaet gefaelscht werden?
  T (Tampering) → Koennen Daten manipuliert werden?
  R (Repudiation) → Kann eine Aktion abgestritten werden?
  I (Information Disclosure) → Werden sensible Daten exponiert?
  D (Denial of Service) → Kann der Dienst blockiert werden?
  E (Elevation of Privilege) → Kann unbefugter Zugriff erlangt werden?

  Ergebnis: THREAT-MODEL-MATRIX in .ai-security-context.md

TASK A.4: DEPENDENCY-VULNERABILITY-SCAN
  Fuehre aus: npm audit --json
  Fuer JEDE gefundene Schwachstelle:
  - CVE-Nummer und CVSS-Score dokumentieren
  - Betroffene Dependency und Version
  - Empfohlene Aktion: Update / Replace / Mitigate / Accept
  - CRITICAL und HIGH: MUESSEN in dieser Pipeline behoben werden
  - MEDIUM: Dokumentieren, Empfehlung fuer Fix
  - LOW: Dokumentieren

-------------------------------------------------------------------------------
VALIDATION-GATE A:
  npm run build SUCCESS
  npm run lint 0 Errors
  npx tsc --noEmit 0 Errors
  Threat-Model-Matrix vollstaendig erstellt
  Dependency-Scan dokumentiert
-------------------------------------------------------------------------------

===============================================================================
ULTRATHINK-LANGZEITTASK B: SECRET-EXPOSURE-AUDIT
===============================================================================

TASK B.1: ENVIRONMENT-VARIABLEN PRUEFEN
  Scanne ALLE Dateien auf exponierte Secrets:
  - .env, .env.local, .env.production — NIEMALS in Git committed?
  - NEXT_PUBLIC_ Prefix: NUR fuer nicht-sensible Daten erlaubt
  - API-Keys, Tokens, Passwort-Strings im Code → KRITISCHER DEFEKT
  - Build-Output pruefen: Sind Secrets im Client-Bundle?

TASK B.2: GIT-HISTORY-SCAN
  Pruefe git log auf versehentlich committete Secrets:
  - .env Dateien in der History?
  - API-Keys in alten Commits?
  - Empfehlung: git-secrets oder gitleaks Integration

TASK B.3: HARDCODED CREDENTIALS SCAN
  Regex-basierter Scan auf:
  - API-Keys: [a-zA-Z0-9]{32,}
  - JWT-Tokens: eyJ[a-zA-Z0-9_-]+
  - Connection Strings: postgres://, mongodb://, redis://
  - Private Keys: -----BEGIN (RSA|EC|DSA) PRIVATE KEY-----

-------------------------------------------------------------------------------
VALIDATION-GATE B:
  ZERO exponierte Secrets im Client-Bundle
  ZERO hardcoded Credentials im Code
  .gitignore enthaelt alle sensitiven Dateien
-------------------------------------------------------------------------------

===============================================================================
EXIT-PROTOKOLL
===============================================================================

1. Erstelle .ai-security-context.md mit:
   [SECTION:THREAT-MODEL] → STRIDE-Analyse pro Angriffsflaeche
   [SECTION:OWASP-AUDIT] → OWASP Top 10 Mapping mit Findings
   [SECTION:DEPENDENCY-SCAN] → npm audit Ergebnisse mit Empfehlungen
   [SECTION:SECRET-AUDIT] → Ergebnis des Secret-Exposure-Audits
   [SECTION:ATTACK-SURFACE] → Vollstaendige Angriffsflaechen-Kartierung
   [SECTION:SECURITY-BASELINE] → Aktueller Security-Stand als Baseline

2. Aktualisiere .pipeline-master-state.md
3. Aktualisiere .project-knowledge-base.md mit Security-Gotchas

=== CHAIN-EXIT-FOOTER === SEQ-52 ABGESCHLOSSEN === NAECHSTE: SEQ-53 (SECURITY-PHASE-02) ===
