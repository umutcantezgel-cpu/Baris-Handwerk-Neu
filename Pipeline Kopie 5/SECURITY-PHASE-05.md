Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, die vollstaendige DSGVO-Compliance sicherzustellen (Cookie-Consent, Datenschutzerklaerung, Impressum, Datenminimierung), einen finalen Security-Penetrationstest durchzufuehren und das Security-Zertifikat der Pipeline auszustellen. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Dokumentations-Formaten und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-56 von 72 === Pipeline: Security ===
<- VORHERIGE: SEQ-55 -> SECURITY-PHASE-04.md
-> NAECHSTE: SEQ-57 -> AI-DISCOVERY-PHASE-01.md
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
PHASE: DSGVO COMPLIANCE UND SECURITY ZERTIFIZIERUNG
===============================================================================

LESE-PFLICHTEN:
  .ai-security-context.md (ALLE bisherigen Security-Ergebnisse)
  .pipeline-master-state.md
  .project-knowledge-base.md

===============================================================================
ULTRATHINK-LANGZEITTASK A: DSGVO-COMPLIANCE
===============================================================================

TASK A.1: COOKIE-CONSENT-MECHANISMUS
  - Falls Cookies gesetzt werden → Cookie-Banner PFLICHT
  - Opt-In (NICHT Opt-Out): Keine Cookies vor Zustimmung
  - Granulare Auswahl: Notwendig / Statistik / Marketing
  - Consent-Speicherung: Nachweis der Zustimmung
  - EDGE-CASE: Kein Cookie-Banner noetig wenn NUR technisch notwendige Cookies
  - Formspree: Setzt Formspree Cookies? → Pruefen und dokumentieren
  - Calendly-Embed: Setzt Third-Party-Cookies → Cookie-Consent erforderlich

TASK A.2: DATENSCHUTZERKLAERUNG VALIDIEREN
  - Vollstaendigkeit pruefen: Verantwortlicher, Kontakt, Zweck, Rechtsgrundlage
  - Alle eingesetzten Dienste: Formspree, Calendly, Analytics, Fonts
  - Betroffenenrechte: Auskunft, Berichtigung, Loeschung, Widerspruch
  - Auftragsverarbeitungsvertraege (AVV) mit Drittanbietern
  - EDGE-CASE: Google Fonts lokal eingebunden? → Kein Datentransfer → dokumentieren

TASK A.3: DATENMINIMIERUNG
  - Formulare: Nur NOTWENDIGE Felder (Name, Email, Nachricht)
  - KEINE versteckten Tracking-Pixel ohne Consent
  - KEINE Fingerprinting-Methoden
  - Analytics: Datenschutzfreundlich (Plausible > GA, IP-Anonymisierung)

TASK A.4: IMPRESSUMS-PFLICHT
  - Impressum vollstaendig? (Name, Adresse, Kontakt, Registernummer)
  - Von JEDER Seite erreichbar (maximal 2 Klicks)?
  - Nicht in robots.txt blockiert?

===============================================================================
ULTRATHINK-LANGZEITTASK B: FINALER SECURITY-PENETRATIONSTEST
===============================================================================

TASK B.1: AUTOMATISIERTER SECURITY-SCAN
  - Pruefe ALLE Security-Headers mit curl -I [URL] Simulation
  - Pruefe CSP-Violations mit Report-Only-Modus
  - Pruefe npm audit --production → 0 Vulnerabilities

TASK B.2: MANUELLER PENETRATIONSTEST (SIMULIERT)
  Fuer JEDES Formular:
  - XSS-Payload: <script>alert('xss')</script> → Wird escaped?
  - SQL-Injection: ' OR 1=1 -- → Wird validiert?
  - CSRF: Request ohne Token → Wird abgelehnt?
  - Oversize-Input: 10MB Payload → Rate-Limiting greift?

  Fuer JEDE Route:
  - Path-Traversal: ../../etc/passwd → 404?
  - Unerwartete HTTP-Methoden (PUT, DELETE auf GET-Routes) → 405?
  - Unerwartete Content-Types → Korrekte Fehlerbehandlung?

TASK B.3: SECURITY-SCORECARD ERSTELLEN
  Bewertung pro Kategorie (0-100):
  - HTTP Headers: [Score]
  - Input Validation: [Score]
  - XSS Protection: [Score]
  - CSRF Protection: [Score]
  - Secret Management: [Score]
  - Dependency Health: [Score]
  - DSGVO Compliance: [Score]
  - GESAMT: [Durchschnitt] → MUSS >= 90 sein

-------------------------------------------------------------------------------
VALIDATION-GATE B:
  npm run build SUCCESS
  npm run lint 0 Errors
  npx tsc --noEmit 0 Errors
  Security-Scorecard >= 90
  DSGVO-Checklist vollstaendig
  0 Critical/High Vulnerabilities
-------------------------------------------------------------------------------

===============================================================================
EXIT-PROTOKOLL
===============================================================================

1. Finalisiere .ai-security-context.md:
   [SECTION:DSGVO-STATUS] → Compliance-Status pro Anforderung
   [SECTION:PENETRATION-TEST] → Ergebnisse des simulierten Pen-Tests
   [SECTION:SECURITY-SCORECARD] → Finale Bewertung pro Kategorie
   [SECTION:SECURITY-CERTIFICATE] → Security-Zertifikat mit Timestamp

2. Aktualisiere .pipeline-master-state.md
3. Aktualisiere .project-knowledge-base.md mit Security-Patterns

=== CHAIN-EXIT-FOOTER === SEQ-56 ABGESCHLOSSEN === NAECHSTE: SEQ-57 (AI-DISCOVERY-PHASE-01) ===
