Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, die Website fuer AI-Crawler (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, etc.) optimal zugaenglich zu machen, eine llms.txt-Datei zu erstellen, robots.txt und Sitemap zu optimieren, und sicherzustellen, dass alle Inhalte fuer KI-Systeme crawlbar und interpretierbar sind. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Konfigurationsschritten, Testmethoden und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-59 von 72 === Pipeline: AI-Discovery ===
<- VORHERIGE: SEQ-58 -> AI-DISCOVERY-PHASE-02.md
-> NAECHSTE: SEQ-60 -> AI-DISCOVERY-PHASE-04.md
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
ANTIGRAVITY-ARTIFACT-PROTOKOLL (PFLICHT VOR JEDER AUSFUEHRUNG)
===============================================================================
VOR der Ausfuehrung dieser Phase MUESSEN drei Artifacts erstellt werden:

ARTIFACT 1 — TASK LIST:
  Format: Nummerierte Liste aller Aufgaben dieser Phase.
  Jede Aufgabe mit eindeutiger ID (z.B. T-57.01, T-57.02, ...).
  Status-Tracking: [ ] Offen, [~] In Arbeit, [x] Abgeschlossen.
  Schaetzung der Komplexitaet pro Aufgabe (S/M/L/XL).

ARTIFACT 2 — IMPLEMENTATION PLAN:
  Format: Technischer Implementierungsplan.
  Fuer jede Aufgabe: Datei(en), Aenderungstyp, Abhaengigkeiten.
  Reihenfolge der Ausfuehrung mit Begruendung.
  Risiko-Einschaetzung und Fallback-Strategie.

ARTIFACT 3 — WALKTHROUGH (NACH Ausfuehrung):
  Format: Chronologischer Durchlauf aller durchgefuehrten Aenderungen.
  Pro Aenderung: Datei, Vorher/Nachher, Begruendung.
  Zusammenfassung der Validierungsergebnisse.
  Liste aller offenen Punkte fuer nachfolgende Phasen.

===============================================================================
LESE-PFLICHTEN VOR AUSFUEHRUNG
===============================================================================
1. .pipeline-master-state.md (Aktueller Pipeline-Zustand)
2. .project-knowledge-base.md (Projekt-Gedaechtnis)
3. .ai-discovery-context.md (Schema-Status aus SEQ-57/58)
4. .ai-security-context.md (CSP/Headers aus Pipeline 4)
5. robots.txt, sitemap.xml (falls vorhanden im Projekt)

===============================================================================
ULTRATHINK-LANGZEITTASK A: ROBOTS.TXT & CRAWLER-MANAGEMENT
===============================================================================

A.1) ROBOTS.TXT AUDIT UND OPTIMIERUNG:
     Pruefe die bestehende robots.txt (oder erstelle sie):

     PFLICHT-KONFIGURATION:
       User-agent: *
       Allow: /
       Disallow: /api/
       Disallow: /admin/
       Disallow: /_next/static/ (falls Next.js — Framework-abhaengig)
       Sitemap: https://[domain]/sitemap.xml

     AI-CRAWLER EXPLIZIT ERLAUBEN:
       User-agent: GPTBot
       Allow: /

       User-agent: Google-Extended
       Allow: /

       User-agent: PerplexityBot
       Allow: /

       User-agent: ClaudeBot
       Allow: /

       User-agent: Applebot-Extended
       Allow: /

       User-agent: ChatGPT-User
       Allow: /

       User-agent: cohere-ai
       Allow: /

       User-agent: anthropic-ai
       Allow: /

     CRAWL-DELAY STRATEGIE:
       Setze KEINEN Crawl-Delay fuer AI-Bots (verlangsamt Indexierung).
       Falls noetig, Rate-Limiting serverseitig statt via robots.txt.

A.2) SITEMAP.XML OPTIMIEREN:
     Pruefe die bestehende Sitemap (oder konfiguriere automatische Generierung):

     PFLICHT-ANFORDERUNGEN:
       Alle oeffentlichen Seiten enthalten.
       lastmod-Timestamps korrekt und aktuell.
       changefreq und priority sinnvoll gesetzt.
       Maximale Groesse: 50.000 URLs oder 50 MB.
       Bei Ueberschreitung: Sitemap-Index verwenden.

     OPTIMIERUNG FUER AI-CRAWLER:
       Image-Sitemap fuer wichtige Bilder.
       Video-Sitemap falls Video-Inhalte vorhanden.
       News-Sitemap falls Blog/News-Bereich vorhanden.

A.3) META-ROBOTS UND X-ROBOTS-TAG:
     Pruefe JEDE Seite auf korrekte Indexierungs-Anweisungen:
       Oeffentliche Seiten: <meta name="robots" content="index, follow">
       Nicht-indexierbare Seiten: <meta name="robots" content="noindex, nofollow">
       Paginierte Seiten: rel="canonical" auf die Hauptseite.
       Doppelte Inhalte: Canonical-Tags korrekt gesetzt.
       max-snippet, max-image-preview, max-video-preview: Nicht restriktiv setzen.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK B: LLMS.TXT IMPLEMENTIERUNG
───────────────────────────────────────────────────────────────────────────────

B.1) LLMS.TXT ERSTELLEN:
     Erstelle eine /llms.txt im Root des Projekts (oeffentlich zugaenglich):

     FORMAT (gemaess llmstxt.org-Spezifikation):
       Zeile 1: Projektname und Kurzbeschreibung
       Abschnitt "About": Ausfuehrliche Beschreibung des Unternehmens/Projekts
       Abschnitt "Services": Liste aller Dienstleistungen mit Beschreibung
       Abschnitt "Contact": Kontaktinformationen
       Abschnitt "Links": Wichtige Seiten mit URLs

     INHALT MUSS:
       In klarem, einfachem Deutsch geschrieben sein.
       Alle Kern-Entitaeten aus der Entity-Map abdecken.
       Keine HTML-Tags enthalten (reiner Klartext oder Markdown).
       Maximal 2000 Woerter (LLM-Context-Window-freundlich).

B.2) LLMS-FULL.TXT ERSTELLEN (OPTIONAL):
     Falls der Projekt-Content umfangreich ist:
       /llms-full.txt mit detaillierteren Informationen.
       Alle Service-Beschreibungen vollstaendig.
       FAQ-Inhalte komplett.
       Team-Informationen detailliert.

B.3) VERLINKUNG SICHERSTELLEN:
     llms.txt muss erreichbar sein unter:
       https://[domain]/llms.txt
       Verlinke in <head>: <link rel="llms" href="/llms.txt">
       Verlinke in robots.txt: # LLMs: /llms.txt
     Stelle sicher, dass der Webserver die Datei als text/plain ausliefert.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK C: RENDER-ZUGAENGLICHKEIT & CONTENT-DELIVERY
───────────────────────────────────────────────────────────────────────────────

C.1) SERVER-SIDE RENDERING (SSR) PRUEFEN:
     AI-Crawler koennen oft KEIN JavaScript ausfuehren.
     Pruefe fuer JEDE Seite:
       Ist der Inhalt im initialen HTML-Response enthalten?
       Werden kritische Inhalte per SSR/SSG gerendert?
       Ist der Content ohne JavaScript zugaenglich?

     FALLS CLIENT-SIDE RENDERING GEFUNDEN:
       Identifiziere alle Inhalte, die nur per CSR geladen werden.
       Migriere kritische Inhalte zu SSR/SSG.
       Verwende Dynamic Imports NUR fuer nicht-kritische Interaktionen.

C.2) OPEN-GRAPH UND META-TAGS OPTIMIEREN:
     Pruefe JEDE Seite auf vollstaendige Meta-Tags:

     PFLICHT-TAGS:
       <title> (50-60 Zeichen, beschreibend)
       <meta name="description"> (150-160 Zeichen)
       <meta property="og:title">
       <meta property="og:description">
       <meta property="og:image"> (1200x630px empfohlen)
       <meta property="og:url">
       <meta property="og:type">
       <meta name="twitter:card">
       <meta name="twitter:title">
       <meta name="twitter:description">
       <meta name="twitter:image">
       <link rel="canonical">

C.3) CONTENT-ACCESSIBILITY FUER AI:
     Stelle sicher, dass AI-Systeme den Content optimal verarbeiten koennen:
       Keine wichtigen Inhalte in Bildern ohne Alt-Text.
       Keine wichtigen Inhalte nur in Videos ohne Transkript.
       Keine wichtigen Inhalte nur in PDFs ohne HTML-Aequivalent.
       Tabellen-Daten mit korrekten Headers und Scope-Attributen.
       Code-Beispiele in <pre><code> mit Sprach-Annotation.

===============================================================================
VALIDATION-GATE (MUSS BESTANDEN WERDEN)
===============================================================================
[ ] npm run build ERFOLGREICH (Zero Errors)
[ ] npm run lint ERFOLGREICH (Zero Warnings)
[ ] npx tsc --noEmit ERFOLGREICH (Zero Type-Errors)
[ ] robots.txt korrekt konfiguriert und erreichbar
[ ] sitemap.xml vollstaendig und valide
[ ] llms.txt erstellt und erreichbar
[ ] Alle AI-Crawler explizit erlaubt
[ ] Alle Seiten per SSR/SSG crawlbar
[ ] Meta-Tags auf allen Seiten vollstaendig
[ ] Canonical-Tags korrekt gesetzt

===============================================================================
EXIT-PROTOKOLL
===============================================================================
1. Aktualisiere .ai-discovery-context.md:
     ROBOTS-TXT-STATUS: OPTIMIERT
     SITEMAP-STATUS: VALIDIERT
     LLMS-TXT-STATUS: ERSTELLT
     SSR-AUDIT: BESTANDEN
     META-TAGS-STATUS: VOLLSTAENDIG
     AI-CRAWLER-ACCESS: ALLE ERLAUBT
     OFFENE-PUNKTE: [Liste falls vorhanden]

2. Aktualisiere .pipeline-master-state.md:
     SEQ-59: ABGESCHLOSSEN
     SEQ-60: IN_PROGRESS


═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: SEO MAXIMIERUNG & DISCOVERABILITY
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-32: RSS/ATOM FEED (CONTENT SYNDICATION)
───────────────────────────────────────────────────────────────────────────────
  WARUM: RSS-Feeds ermoeglichen automatische Content-Distribution und Monitoring.
  PFLICHT-IMPLEMENTIERUNG:
    /feed.xml Route fuer RSS 2.0 Feed.
    /atom.xml Route fuer Atom Feed.
    Automatisch generiert aus Blog/News-Inhalten.
    <link rel="alternate" type="application/rss+xml"> im Head.

CHEATCODE CC-33: AUTOMATISCHE SITEMAP MIT LASTMOD
───────────────────────────────────────────────────────────────────────────────
  WARUM: Google crawlt effizienter mit aktuellen lastmod-Timestamps.
  PFLICHT-IMPLEMENTIERUNG:
    Next.js: app/sitemap.ts (automatische Generierung).
    Jede URL hat lastmod (letztes Aenderungsdatum).
    changeFrequency basierend auf Content-Typ.
    priority basierend auf Seitentyp (Homepage = 1.0, Service = 0.8, Blog = 0.6).

CHEATCODE CC-34: CANONICAL URL MANAGEMENT
───────────────────────────────────────────────────────────────────────────────
  WARUM: Duplicate Content zerstoert SEO. Canonicals sind die Loesung.
  PFLICHT-IMPLEMENTIERUNG:
    JEDE Seite hat eine explizite Canonical URL.
    Trailing Slash konsistent (entweder immer oder nie).
    www vs. non-www: Eine Version waehlen, Redirect fuer die andere.
    Next.js: metadataBase in Root Layout setzen.

  VALIDIERUNG:
    [ ] Jede Seite hat genau EINE Canonical URL
    [ ] Kein Trailing-Slash-Mismatch
    [ ] www → non-www Redirect (oder umgekehrt) konfiguriert
    [ ] metadataBase in Root Layout gesetzt

CHEATCODE CC-35: ROBOTS.TXT MIT AI-CRAWLER-OPTIMIERUNG
───────────────────────────────────────────────────────────────────────────────
  WARUM: AI-Suchmaschinen (Perplexity, ChatGPT, Claude) sind die Zukunft.
  PFLICHT-IMPLEMENTIERUNG:
    Explizit ALLE bekannten AI-Crawler erlauben:
      GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Applebot-Extended,
      Google-Extended, Amazonbot, FacebookBot, Twitterbot, LinkedInBot.
    Sitemap-URL in robots.txt referenzieren.
    Disallow nur fuer /api/ und /admin/ (falls vorhanden).

=== CHAIN-EXIT-FOOTER === SEQ-59 ABGESCHLOSSEN ===
-> NAECHSTE PHASE: SEQ-60 -> AI-DISCOVERY-PHASE-04.md (LLM-Optimized Content & Knowledge Graph)
-> AUTO-TRIGGER: Lade SOFORT das naechste Phasen-Dokument (DOMINO-EFFEKT).
===============================================================================
