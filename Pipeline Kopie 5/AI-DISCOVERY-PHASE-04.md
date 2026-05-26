Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, alle Textinhalte der Website fuer LLM-Verarbeitung zu optimieren, eine Knowledge-Graph-Struktur aufzubauen, und sicherzustellen, dass die Inhalte in AI-Antworten (Google AI Overviews, Perplexity, ChatGPT) korrekt zitiert und dargestellt werden. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Content-Optimierungen, Strukturierungsmassnahmen und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-60 von 72 === Pipeline: AI-Discovery ===
<- VORHERIGE: SEQ-59 -> AI-DISCOVERY-PHASE-03.md
-> NAECHSTE: SEQ-61 -> AI-DISCOVERY-PHASE-05.md
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
3. .ai-discovery-context.md (Entity-Map, Schema-Status, Crawler-Status)
4. Alle Content-Dateien im Projekt (Blog, Services, FAQ, Team)

===============================================================================
ULTRATHINK-LANGZEITTASK A: LLM-OPTIMIERTE CONTENT-STRUKTUR
===============================================================================

A.1) CONTENT-ANALYSE FUER LLM-VERSTAENDLICHKEIT:
     Analysiere JEDEN Textinhalt des Projekts auf LLM-Verarbeitbarkeit:

     PRUEFKRITERIEN:
       Klarheit: Ist der Text ohne visuellen Kontext verstaendlich?
       Selbsterklaerend: Enthaelt jeder Absatz genuegend Kontext?
       Faktendichte: Sind konkrete Fakten extrahierbar?
       Zitierbarkeit: Koennen einzelne Saetze als Antwort-Snippet dienen?
       Entitaets-Klarheit: Sind Subjekte eindeutig benannt (kein "wir", "unser" ohne Kontext)?

     ANTI-PATTERNS IDENTIFIZIEREN:
       Marketing-Floskeln ohne Informationsgehalt ("Wir sind die Besten").
       Kontextabhaengige Aussagen ("Hier finden Sie..." ohne URL-Kontext).
       Implizites Wissen (Annahmen, die nur Insider verstehen).
       Zirkulaere Verweise ("Mehr dazu auf unserer Seite").

A.2) CONTENT-RESTRUCTURING FUER AI-SNIPPETS:
     Optimiere die Textstruktur fuer AI-Antwort-Generierung:

     INVERTED-PYRAMID-PRINZIP:
       Erster Satz jeder Sektion: Kernaussage (zitierbar als Snippet).
       Zweiter Satz: Wichtigste Ergaenzung/Kontext.
       Rest: Details, Beispiele, Vertiefung.

     ENTITY-FIRST-WRITING:
       Nenne den Firmennamen explizit statt "wir/unser".
       Nenne Service-Namen explizit statt "unsere Leistungen".
       Nenne Standort-Informationen explizit.
       Beispiel: STATT "Wir bieten professionelle Webentwicklung"
                 BESSER "[Firmenname] bietet professionelle Webentwicklung in [Stadt]"

     DEFINITION-PATTERN:
       Fuer Fachbegriffe und Services:
       "[Begriff] ist [Definition]. [Firmenname] [Kontext/Angebot]."

A.3) FAQ-OPTIMIERUNG FUER AI OVERVIEWS:
     FAQ-Inhalte sind DER primaere Vektor fuer AI-Zitierungen.

     OPTIMIERUNG:
       Jede Frage als vollstaendiger Fragesatz (nicht als Stichwort).
       Jede Antwort beginnt mit einer direkten, zitierbareren Kernaussage.
       Antworten sind 40-60 Woerter lang (optimale Snippet-Laenge).
       Fragen decken die haeufigsten Such-Intentionen ab.
       Fragen verwenden natuerliche Sprache (wie Menschen fragen wuerden).

     FAQ-ERWEITERUNG:
       Analysiere die Service-Seiten und identifiziere fehlende FAQ-Eintraege.
       Erstelle FAQ-Vorschlaege basierend auf:
         "Was ist [Service]?" (Definitions-Fragen)
         "Wie funktioniert [Service]?" (Prozess-Fragen)
         "Was kostet [Service]?" (Preis-Fragen)
         "Warum [Firmenname] fuer [Service]?" (Entscheidungs-Fragen)
         "[Service] in [Stadt]?" (Lokale Fragen)

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK B: KNOWLEDGE-GRAPH-INTEGRATION
───────────────────────────────────────────────────────────────────────────────

B.1) INTERNES KNOWLEDGE-GRAPH-NETZ AUFBAUEN:
     Erstelle ein dichtes Netz aus Entitaets-Verknuepfungen:

     VERKNUEPFUNGS-STRATEGIE:
       Service -> FAQ (Jeder Service hat mindestens 3 FAQ-Eintraege).
       Service -> Case Study (Jeder Service hat mindestens 1 Referenz).
       Service -> Team (Jeder Service hat einen Ansprechpartner).
       Blog -> Service (Jeder Blog-Beitrag verlinkt relevante Services).
       Team -> Blog (Autoren verlinken auf ihre Beitraege).

     INTERNAL-LINKING-AUDIT:
       Pruefe alle internen Links auf Konsistenz.
       Identifiziere verwaiste Seiten (keine eingehenden Links).
       Identifiziere Sackgassen (keine ausgehenden Links).
       Erstelle eine Link-Matrix (Quelle -> Ziel -> Anchor-Text).

B.2) ENTITY-DISAMBIGUIERUNG:
     Stelle sicher, dass jede Entitaet eindeutig identifizierbar ist:
       Konsistente Benennung ueber alle Seiten hinweg.
       Keine unterschiedlichen Bezeichnungen fuer denselben Service.
       Konsistente Firmen-Schreibweise (inkl. Rechtsform).
       Konsistente Personen-Namen (Vor- und Nachname).

B.3) TOPICAL-AUTHORITY-SIGNALE:
     Baue thematische Autoritaet auf:
       Jedes Kern-Thema hat eine Pillar-Page (umfassende Hauptseite).
       Cluster-Seiten vertiefen Teilaspekte und verlinken zur Pillar-Page.
       Pillar-Page verlinkt zu allen Cluster-Seiten.
       Content-Tiefe: Mindestens 3 Hierarchie-Ebenen pro Thema.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK C: AI-ANTWORT-OPTIMIERUNG
───────────────────────────────────────────────────────────────────────────────

C.1) GOOGLE AI OVERVIEWS OPTIMIERUNG:
     Optimiere Inhalte fuer die Auswahl als AI Overview-Quelle:
       Direkte Antworten auf Fragen im ersten Absatz.
       Strukturierte Listen fuer Prozess-Beschreibungen.
       Vergleichstabellen fuer Feature-Uebersichten.
       Eindeutige Fakten mit Quellenangabe (Zahlen, Daten).

C.2) PERPLEXITY/CHATGPT AUFFINDBARKEIT:
     Optimiere fuer Conversational AI-Suche:
       Natuerliche Sprache statt SEO-Keyword-Stuffing.
       Vollstaendige Antworten (kein "Kontaktieren Sie uns fuer mehr").
       Autoritaetssignale: Expertise-Indikatoren im Content.
       Aktualitaet: Datums-Angaben in zeitkritischen Inhalten.

C.3) CITATION-READINESS SICHERSTELLEN:
     Stelle sicher, dass AI-Systeme den Content korrekt zitieren koennen:
       Jede Seite hat einen eindeutigen, beschreibenden Titel.
       Jede Seite hat eine extrahierbare Zusammenfassung (meta description).
       Autor-Informationen sind maschinenlesbar.
       Veroeffentlichungsdatum ist maschinenlesbar.
       URL-Struktur ist sprechend und stabil (keine Parameter-URLs).

===============================================================================

═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — AI AGENT INTEGRATION (AUS DOC 13/20)
═══════════════════════════════════════════════════════════════════════════════

METADATA UND SEO ARCHITEKTUR (AUS DOC 13):
  Next.js Metadata API verwenden:
    export const metadata: Metadata = {
      title: 'Page Title | Brand',
      description: 'Compelling meta description unter 160 Zeichen.',
      openGraph: { title: '...', description: '...', images: ['/og-image.png'] },
    }
  Pro-Seite-Metadata fuer optimale SEO und AI-Auffindbarkeit.

AI-AGENT-KONTEXT-STRATEGIE (AUS DOC 20):
  Diese 20 Kontext-Dokumente bilden eine eigenstaendige Design-Wissensbasis
  die jeder AI-Coding-Assistent nutzen kann fuer:
    Website-Upgrade (visuelles Design und UX)
    Neue Komponenten nach Design-System-Regeln generieren
    Aesthetische Konflikte aufloesen und Konsistenz wahren
    Korrekte Design-Tokens fuer das Produkt-Vertikal anwenden

  KONTEXT-PRIORISIERUNG:
    Minimal (Quick Component Work): Doc 06, 07, 15, 17, 18
    Voll (Complete Website Upgrade): Doc 01-20 in Prioritaetsreihenfolge

  KREUZREFERENZ-KARTE:
    Farben        -> Doc 06 + 05
    Fonts         -> Doc 07
    Aesthetik     -> Doc 08 + 05
    Landing Pages -> Doc 09 + 10
    Charts        -> Doc 11 + 06
    Icons         -> Doc 12 + 19
    Next.js       -> Doc 13 + 03
    Animation     -> Doc 14 + 04
    Tailwind      -> Doc 15 + 01
    Accessibility -> Doc 16 + 04

VALIDATION-GATE (MUSS BESTANDEN WERDEN)
===============================================================================
[ ] npm run build ERFOLGREICH (Zero Errors)
[ ] npm run lint ERFOLGREICH (Zero Warnings)
[ ] npx tsc --noEmit ERFOLGREICH (Zero Type-Errors)
[ ] Content-Analyse fuer alle Seiten durchgefuehrt
[ ] Entity-First-Writing auf allen Service-Seiten umgesetzt
[ ] FAQ-Inhalte fuer AI-Snippets optimiert
[ ] Internal-Linking-Audit abgeschlossen
[ ] Keine verwaisten Seiten oder Sackgassen
[ ] Knowledge-Graph-Verknuepfungen dokumentiert

===============================================================================
EXIT-PROTOKOLL
===============================================================================
1. Aktualisiere .ai-discovery-context.md:
     CONTENT-OPTIMIERUNG-STATUS: ABGESCHLOSSEN
     LLM-READINESS: [Prozent der optimierten Seiten]
     FAQ-COVERAGE: [Anzahl FAQ-Eintraege pro Service]
     KNOWLEDGE-GRAPH-STATUS: VERKNUEPFT
     INTERNAL-LINKING-SCORE: [Ergebnis des Audits]
     TOPICAL-AUTHORITY: [Dokumentation der Pillar/Cluster-Struktur]
     OFFENE-PUNKTE: [Liste falls vorhanden]

2. Aktualisiere .pipeline-master-state.md:
     SEQ-60: ABGESCHLOSSEN
     SEQ-61: IN_PROGRESS

=== CHAIN-EXIT-FOOTER === SEQ-60 ABGESCHLOSSEN ===
-> NAECHSTE PHASE: SEQ-61 -> AI-DISCOVERY-PHASE-05.md (AI Search Validation & Certification)
-> AUTO-TRIGGER: Lade SOFORT das naechste Phasen-Dokument (DOMINO-EFFEKT).
===============================================================================
