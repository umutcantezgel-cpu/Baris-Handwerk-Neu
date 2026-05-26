Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, alle Benutzer-Eingaben mit Zod-Schemas zu validieren, Cross-Site-Scripting (XSS) durch Output-Encoding und Sanitization zu verhindern, CSRF-Schutz fuer alle Formulare zu implementieren und SQL/NoSQL-Injection-Vektoren zu eliminieren. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Dokumentations-Formaten und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-54 von 72 === Pipeline: Security ===
<- VORHERIGE: SEQ-53 -> SECURITY-PHASE-02.md
-> NAECHSTE: SEQ-55 -> SECURITY-PHASE-04.md
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
PHASE: INPUT VALIDATION, XSS UND CSRF PRAEVENTION
===============================================================================

LESE-PFLICHTEN:
  .ai-security-context.md (Attack-Surface, Threat-Model)
  .pipeline-master-state.md
  .project-knowledge-base.md

===============================================================================
ULTRATHINK-LANGZEITTASK A: INPUT VALIDATION MIT ZOD
===============================================================================

TASK A.1: ZOD-SCHEMA FUER JEDES FORMULAR
  Fuer JEDES Formular im Projekt:
  - Erstelle ein Zod-Schema mit exakten Feld-Definitionen
  - String-Felder: z.string().min(1).max(500).trim()
  - Email: z.string().email()
  - Telefon: z.string().regex(/^[+]?[0-9\s-()]+$/)
  - URLs: z.string().url()
  - KEIN z.any(), KEIN z.unknown() fuer User-Input
  - Validation SOWOHL Client-Side (UX) ALS AUCH Server-Side (Security)

TASK A.2: URL-PARAMETER UND SEARCHPARAMS VALIDIERUNG
  - Alle [slug] Parameter: z.string().regex(/^[a-z0-9-]+$/).max(200)
  - Alle searchParams: Explizites Schema, unbekannte Params ignorieren
  - KEIN direkter Zugriff auf params ohne Validierung
  - EDGE-CASE: Encoded Characters in URLs (%20, %3C) → Dekodieren + Validieren

TASK A.3: FEHLERBEHANDLUNG BEI INVALIDEN INPUTS
  - Zeige benutzerfreundliche Fehlermeldungen (KEINE technischen Details)
  - Logge technische Details server-seitig (falls Backend vorhanden)
  - NIEMALS den invaliden Input zurueck an den User rendern (Reflection XSS)

-------------------------------------------------------------------------------
VALIDATION-GATE A:
  npm run build SUCCESS
  Jedes Formular hat Zod-Schema
  Jeder URL-Parameter hat Validierung
-------------------------------------------------------------------------------

===============================================================================
ULTRATHINK-LANGZEITTASK B: XSS-PRAEVENTION
===============================================================================

TASK B.1: OUTPUT-ENCODING AUDIT
  - React/JSX escaped automatisch → ABER: dangerouslySetInnerHTML MUSS geprueft werden
  - Suche nach dangerouslySetInnerHTML → Falls vorhanden: DOMPurify Sanitization PFLICHT
  - Suche nach document.write, innerHTML, outerHTML → VERBOTEN
  - Suche nach eval(), new Function(), setTimeout(string) → VERBOTEN

TASK B.2: DOM-BASIERTE XSS-VEKTOREN
  - window.location, document.referrer, document.URL → Nicht direkt rendern
  - URL-Fragmente (#) → Nicht direkt in DOM einfuegen
  - postMessage Handler → Origin validieren

TASK B.3: STORED XSS PRAEVENTION
  - Alle Daten die aus externen Quellen kommen (CMS, API, Datenbank):
    Sanitize VOR dem Rendern mit DOMPurify oder aehnlichem
  - EDGE-CASE: Markdown-Rendering → Sanitize nach dem Parsen

===============================================================================
ULTRATHINK-LANGZEITTASK C: CSRF-SCHUTZ
===============================================================================

TASK C.1: CSRF-TOKEN IMPLEMENTATION
  - Formulare die Daten senden → CSRF-Token oder SameSite-Cookie-Schutz
  - Formspree-Formulare: Honeypot-Feld als Anti-Bot-Massnahme
  - SameSite=Strict auf allen Cookies (verhindert CSRF bei Cookie-Auth)

TASK C.2: CLICKJACKING-SCHUTZ
  - X-Frame-Options: DENY (bereits in Phase 02 implementiert)
  - frame-ancestors 'none' in CSP (bereits in Phase 02 implementiert)
  - Verifiziere: Kein iframe-Embedding der eigenen Seite moeglich

-------------------------------------------------------------------------------
VALIDATION-GATE C:
  npm run build SUCCESS
  npm run lint 0 Errors
  npx tsc --noEmit 0 Errors
  ZERO dangerouslySetInnerHTML ohne Sanitization
  ZERO eval/innerHTML/document.write
  Alle Formulare mit CSRF-Schutz oder Honeypot
-------------------------------------------------------------------------------

===============================================================================
EXIT-PROTOKOLL
===============================================================================

1. Aktualisiere .ai-security-context.md:
   [SECTION:INPUT-VALIDATION] → Alle Zod-Schemas dokumentiert
   [SECTION:XSS-AUDIT] → Ergebnis des XSS-Audits
   [SECTION:CSRF-STATUS] → CSRF-Schutz-Status pro Formular

2. Aktualisiere .pipeline-master-state.md und .project-knowledge-base.md

=== CHAIN-EXIT-FOOTER === SEQ-54 ABGESCHLOSSEN === NAECHSTE: SEQ-55 (SECURITY-PHASE-04) ===
