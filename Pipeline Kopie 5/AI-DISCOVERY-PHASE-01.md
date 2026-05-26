Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, die gesamte bestehende Code-Basis auf semantisches HTML zu auditieren, maschinenlesbare Entitaeten zu extrahieren, und eine vollstaendige Entity-Map zu erstellen, die als Grundlage fuer alle nachfolgenden AI-Discovery-Phasen dient. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Analyse-Schritten, Refactoring-Massnahmen und Validierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-57 von 72 === Pipeline: AI-Discovery ===
<- VORHERIGE: SEQ-56 -> SECURITY-PHASE-05.md
-> NAECHSTE: SEQ-58 -> AI-DISCOVERY-PHASE-02.md
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
3. .ai-security-context.md (Security-Kontext aus Pipeline 4)
4. .ai-design-context.md (Design-Kontext aus Pipeline 3)
5. Alle Layout- und Page-Dateien im Projekt (SSOT)

===============================================================================
ULTRATHINK-LANGZEITTASK A: SEMANTIC HTML AUDIT
===============================================================================

A.1) HTML-ELEMENT-INVENTAR ERSTELLEN:
     Scanne JEDE Seite und Komponente des Projekts.
     Dokumentiere fuer JEDES HTML-Element:
       - Aktuell verwendetes Tag (z.B. <div>, <span>)
       - Semantisch korrektes Tag (z.B. <article>, <nav>, <aside>, <main>, <section>)
       - Kontext und Rolle im Seitenlayout
       - Prioritaet der Korrektur (KRITISCH / HOCH / MITTEL / NIEDRIG)

     KRITISCHE PRUEFPUNKTE:
       Jede Seite hat GENAU EIN <main>-Element.
       Navigation verwendet <nav> mit aria-label.
       Artikel-Inhalte verwenden <article> mit <header> und <footer>.
       Seitenbereiche verwenden <section> mit beschreibender Ueberschrift.
       Ergaenzende Inhalte verwenden <aside>.
       Listen verwenden <ul>/<ol>/<dl> statt <div>-Ketten.
       Tabellen verwenden <table> mit <thead>, <tbody>, <caption>.
       Formulare verwenden <fieldset>, <legend>, <label>.

A.2) HEADING-HIERARCHIE VALIDIEREN:
     Pruefe auf JEDER Seite die Ueberschriften-Struktur:
       Genau ein <h1> pro Seite (muss den Seiteninhalt beschreiben).
       Keine uebersprungenen Ebenen (kein h1 -> h3 ohne h2).
       Hierarchie spiegelt die inhaltliche Struktur wider.
       Alle Ueberschriften sind beschreibend (keine generischen Texte wie "Mehr erfahren").

A.3) LANDMARK-ROLLEN ZUWEISEN:
     Stelle sicher, dass ARIA-Landmarks korrekt gesetzt sind:
       role="banner" fuer den globalen Header.
       role="navigation" fuer Navigations-Bereiche.
       role="main" fuer den Hauptinhalt.
       role="contentinfo" fuer den globalen Footer.
       role="complementary" fuer ergaenzende Inhalte.
       role="search" fuer Suchbereiche.
     HINWEIS: Semantische HTML5-Elemente implizieren diese Rollen.
     Explizite role-Attribute NUR wo das semantische Element nicht verwendet werden kann.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK B: ENTITY EXTRACTION & MAPPING
───────────────────────────────────────────────────────────────────────────────

B.1) ENTITAETEN IDENTIFIZIEREN:
     Durchsuche den gesamten Content des Projekts nach maschinenlesbaren Entitaeten:

     ORGANISATIONS-ENTITAETEN:
       Firmenname, Rechtsform, Gruendungsjahr
       Adresse (Strasse, PLZ, Stadt, Land)
       Telefonnummern, E-Mail-Adressen
       Oeffnungszeiten (falls relevant)
       Social-Media-Profile
       Logo-URL, Unternehmens-Beschreibung

     PERSONEN-ENTITAETEN:
       Team-Mitglieder mit Name, Rolle, Beschreibung
       Kontaktpersonen mit Zustaendigkeiten
       Autoren von Blog-Beitraegen

     SERVICE-ENTITAETEN:
       Dienstleistungen mit Name, Beschreibung, Kategorie
       Preise (falls vorhanden)
       Einzugsgebiet / Verfuegbarkeit

     CONTENT-ENTITAETEN:
       Blog-Beitraege mit Titel, Autor, Datum, Kategorie
       FAQ-Eintraege mit Frage und Antwort
       Referenzen / Case Studies
       Bewertungen / Testimonials

B.2) ENTITY-MAP ERSTELLEN:
     Erstelle eine strukturierte Entity-Map als TypeScript-Interface:
       interface ProjectEntityMap {
         organization: OrganizationEntity;
         persons: PersonEntity[];
         services: ServiceEntity[];
         content: ContentEntity[];
         locations: LocationEntity[];
         faq: FAQEntity[];
       }
     Diese Map dient als SSOT fuer alle nachfolgenden Schema.org-Implementierungen.

B.3) ENTITY-BEZIEHUNGEN DOKUMENTIEREN:
     Erstelle ein Beziehungs-Diagramm (als Textbeschreibung):
       Organisation -> bietet an -> Services
       Organisation -> hat Mitarbeiter -> Personen
       Personen -> sind Autoren von -> Blog-Beitraege
       Services -> haben Referenzen -> Case Studies
       FAQ -> bezieht sich auf -> Services

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK C: SEMANTIC REFACTORING & VALIDATION
───────────────────────────────────────────────────────────────────────────────

C.1) REFACTORING DURCHFUEHREN:
     Ersetze alle identifizierten nicht-semantischen Elemente:
       WICHTIG: Aenderungen muessen CSS-kompatibel sein.
       Pruefe vor JEDEM Refactoring, ob Styling-Selektoren betroffen sind.
       Erstelle fuer jede Aenderung einen Vorher/Nachher-Vergleich.
       Teste nach jedem Batch von Aenderungen die visuelle Integritaet.

C.2) MASCHINENLESBARKEIT TESTEN:
     Validiere die semantische Struktur mit folgenden Methoden:
       HTML-Outline-Algorithmus: Jede Seite muss eine logische Gliederung ergeben.
       Screenreader-Simulation: Navigiere jede Seite nur per Ueberschriften und Landmarks.
       Content-Extraktion: Extrahiere den reinen Text — er muss ohne CSS verstaendlich sein.

C.3) ENTITY-MAP VALIDIEREN:
     Pruefe die Entity-Map gegen den tatsaechlichen Code:
       Jede Entitaet muss im Code auffindbar sein.
       Keine verwaisten Entitaeten (im Code aber nicht in der Map).
       Keine Phantom-Entitaeten (in der Map aber nicht im Code).

===============================================================================
VALIDATION-GATE (MUSS BESTANDEN WERDEN)
===============================================================================
[ ] npm run build ERFOLGREICH (Zero Errors)
[ ] npm run lint ERFOLGREICH (Zero Warnings fuer semantische Regeln)
[ ] npx tsc --noEmit ERFOLGREICH (Zero Type-Errors)
[ ] Jede Seite hat genau ein <main>-Element
[ ] Heading-Hierarchie auf allen Seiten korrekt
[ ] Entity-Map vollstaendig und validiert
[ ] Kein visueller Regressionsbruch nach Refactoring

===============================================================================
EXIT-PROTOKOLL
===============================================================================
1. Aktualisiere .ai-discovery-context.md:
     SEMANTIC-HTML-STATUS: VALIDIERT
     ENTITY-MAP: [Pfad zur Entity-Map-Datei]
     HEADING-AUDIT: BESTANDEN
     LANDMARK-AUDIT: BESTANDEN
     OFFENE-PUNKTE: [Liste falls vorhanden]

2. Aktualisiere .pipeline-master-state.md:
     SEQ-57: ABGESCHLOSSEN
     SEQ-58: IN_PROGRESS

=== CHAIN-EXIT-FOOTER === SEQ-57 ABGESCHLOSSEN ===
-> NAECHSTE PHASE: SEQ-58 -> AI-DISCOVERY-PHASE-02.md (Schema.org & JSON-LD Implementation)
-> AUTO-TRIGGER: Lade SOFORT das naechste Phasen-Dokument (DOMINO-EFFEKT).
===============================================================================
