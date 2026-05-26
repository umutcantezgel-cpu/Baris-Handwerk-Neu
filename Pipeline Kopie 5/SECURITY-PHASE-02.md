Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, alle HTTP-Security-Headers (CSP, HSTS, CORS, X-Frame-Options, Permissions-Policy, Referrer-Policy) zu implementieren und eine strikte Content-Security-Policy aufzubauen die alle Inline-Scripts und externen Ressourcen kontrolliert. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Dokumentations-Formaten und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-53 von 72 === Pipeline: Security ===
<- VORHERIGE: SEQ-52 -> SECURITY-PHASE-01.md
-> NAECHSTE: SEQ-54 -> SECURITY-PHASE-03.md
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
PHASE: HTTP SECURITY HEADERS UND CSP IMPLEMENTATION
===============================================================================

LESE-PFLICHTEN:
  .ai-security-context.md (Threat-Model, Attack-Surface)
  .pipeline-master-state.md
  .project-knowledge-base.md

===============================================================================
ULTRATHINK-LANGZEITTASK A: SECURITY-HEADERS VOLLSTAENDIG IMPLEMENTIEREN
===============================================================================

TASK A.1: CONTENT-SECURITY-POLICY (CSP)
  Erstelle eine strikte CSP:
  default-src 'self';
  script-src 'self' [nur explizit erlaubte Domains];
  style-src 'self' 'unsafe-inline' [falls Tailwind/CSS-in-JS];
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' [Formspree, Calendly, Analytics];
  frame-src [Calendly-Domain falls eingebettet];
  object-src 'none';
  base-uri 'self';
  form-action 'self' [Formspree-Domain];
  frame-ancestors 'none';
  upgrade-insecure-requests;
  EDGE-CASE: Inline-Scripts (z.B. Analytics, Calendly) → Nonce-basierte CSP oder Hash.
  EDGE-CASE: Tailwind/styled-components → style-src korrekt konfigurieren.
  VALIDATION: Browser-Console auf CSP-Violations pruefen (0 Violations).

TASK A.2: HTTP STRICT TRANSPORT SECURITY (HSTS)
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  PRUEFE: Ist die Domain auf der HSTS-Preload-Liste? Falls nein → Empfehlung dokumentieren.

TASK A.3: WEITERE PFLICHT-HEADERS
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 0 (veraltet, CSP ersetzt dies)
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp (falls keine Third-Party-Embeds)
  Cross-Origin-Resource-Policy: same-origin

TASK A.4: SUBRESOURCE INTEGRITY (SRI)
  Fuer JEDES externe Script/Stylesheet:
  - Berechne SHA-384 Hash
  - Fuege integrity= und crossorigin="anonymous" hinzu
  - EDGE-CASE: CDN-Ressourcen die sich aendern → SRI nicht moeglich → dokumentieren

TASK A.5: COOKIE-SECURITY (FALLS COOKIES VERWENDET)
  Set-Cookie Attribute:
  Secure; HttpOnly; SameSite=Strict; Path=/
  KEINE Cookies ohne Secure-Flag.
  KEINE Session-Cookies ohne HttpOnly.
  Consent-Banner DSGVO-konform (falls Cookies gesetzt werden).

-------------------------------------------------------------------------------
VALIDATION-GATE A:
  npm run build SUCCESS
  ALLE Headers in Framework-Config implementiert
  CSP: 0 Violations in Browser-Console
  SecurityHeaders.com Check: A+ Rating (oder dokumentierte Abweichung)
-------------------------------------------------------------------------------

===============================================================================
ULTRATHINK-LANGZEITTASK B: CORS-KONFIGURATION
===============================================================================

TASK B.1: CORS-POLICY DEFINIEREN
  - Erlaubte Origins: NUR die eigene Domain (kein Wildcard *)
  - Erlaubte Methoden: GET, POST (nur was benoetigt wird)
  - Erlaubte Headers: Content-Type, Authorization (nur was benoetigt wird)
  - Credentials: Nur falls Session-Management vorhanden
  - EDGE-CASE: Formspree/Calendly API-Calls → werden client-seitig gehandhabt, CORS auf deren Seite

TASK B.2: RATE-LIMITING STRATEGIE
  - API-Routes: Rate-Limiting implementieren (z.B. 100 Requests/Minute)
  - Formulare: Honeypot + Rate-Limiting + Client-Side Throttling
  - EDGE-CASE: Kein Backend? → Client-Side Throttling + Formspree-eigenes Rate-Limiting dokumentieren

-------------------------------------------------------------------------------
VALIDATION-GATE B:
  npm run build SUCCESS
  npm run lint 0 Errors
  npx tsc --noEmit 0 Errors
  CORS korrekt konfiguriert (keine Wildcard Origins)
-------------------------------------------------------------------------------

===============================================================================
EXIT-PROTOKOLL
===============================================================================

1. Aktualisiere .ai-security-context.md:
   [SECTION:SECURITY-HEADERS] → Alle implementierten Headers mit Werten
   [SECTION:CSP-POLICY] → Vollstaendige CSP-Direktive
   [SECTION:CORS-POLICY] → CORS-Konfiguration
   [SECTION:SRI-MANIFEST] → Alle externen Ressourcen mit SRI-Hashes

2. Aktualisiere .pipeline-master-state.md und .project-knowledge-base.md

=== CHAIN-EXIT-FOOTER === SEQ-53 ABGESCHLOSSEN === NAECHSTE: SEQ-54 (SECURITY-PHASE-03) ===
