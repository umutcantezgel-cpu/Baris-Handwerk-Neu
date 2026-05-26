Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, alle in den vorherigen AI-Discovery-Phasen implementierten Massnahmen zu validieren, einen umfassenden AI-Auffindbarkeits-Score zu berechnen, und eine formale Zertifizierung der KI-Auffindbarkeit auszustellen. Erstelle einen vollstaendigen Validierungsplan mit konkreten Test-Szenarien, Scoring-Methodik und Zertifizierungskriterien.

=== CHAIN-LINK-HEADER === SEQ-61 von 72 === Pipeline: AI-Discovery ===
<- VORHERIGE: SEQ-60 -> AI-DISCOVERY-PHASE-04.md
-> NAECHSTE: SEQ-62 -> QA-PHASE-01.md
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
3. .ai-discovery-context.md (VOLLSTAENDIG — alle vorherigen Phasen)
4. .ai-security-context.md (Security-Status)
5. Alle implementierten Schema-Dateien und llms.txt

===============================================================================
ULTRATHINK-LANGZEITTASK A: VOLLSTAENDIGER VALIDIERUNGS-DURCHLAUF
===============================================================================

A.1) SEMANTIC-HTML-VALIDIERUNG (RUECKBLICK SEQ-57):
     Re-Validiere alle semantischen HTML-Aenderungen:
       Jede Seite: Genau 1 <main>, korrekte Heading-Hierarchie.
       Landmark-Rollen korrekt zugewiesen.
       Entity-Map noch konsistent mit dem aktuellen Code.
       Kein Regressionsbruch seit SEQ-57.

A.2) JSON-LD-VALIDIERUNG (RUECKBLICK SEQ-58):
     Vollstaendiger Schema-Test:
       Extrahiere das JSON-LD von JEDER Seite (zur Build-Zeit oder SSR-Output).
       Validiere JSON-Syntax (JSON.parse darf nicht fehlschlagen).
       Pruefe @type, @context, @id auf Korrektheit.
       Pruefe alle Pflicht-Properties pro Schema-Typ.
       Pruefe @graph-Verknuepfungen (keine gebrochenen @id-Referenzen).
       Dokumentiere Ergebnis pro Seite in einer Validierungs-Matrix.

     RICH-RESULT-ELIGIBILITY-TEST:
       Pruefe fuer jede Seite die erwarteten Rich Results:
       [ ] Organization -> Knowledge Panel
       [ ] BreadcrumbList -> Breadcrumb-Snippet
       [ ] FAQPage -> FAQ-Dropdown
       [ ] Article -> Article-Karussell
       [ ] Service -> Service-Snippet
       [ ] Person -> People-Card

A.3) CRAWLER-ACCESSIBILITY-VALIDIERUNG (RUECKBLICK SEQ-59):
     Pruefe die vollstaendige Crawler-Kette:
       robots.txt erreichbar und korrekt.
       sitemap.xml erreichbar, valide und vollstaendig.
       llms.txt erreichbar und inhaltlich korrekt.
       Alle AI-Crawler explizit erlaubt.
       Kein noindex auf oeffentlichen Seiten.
       Canonical-Tags konsistent.
       SSR-Content ohne JavaScript zugaenglich.
       Meta-Tags auf allen Seiten vollstaendig.

A.4) CONTENT-QUALITAETS-VALIDIERUNG (RUECKBLICK SEQ-60):
     Pruefe die LLM-Optimierung aller Inhalte:
       Entity-First-Writing auf allen Service-Seiten.
       FAQ-Inhalte: Mindestens 3 pro Service, Snippet-Laenge 40-60 Woerter.
       Internal-Linking: Keine verwaisten Seiten, keine Sackgassen.
       Knowledge-Graph: Alle Pillar/Cluster-Verknuepfungen intakt.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK B: AI-AUFFINDBARKEITS-SCORECARD
───────────────────────────────────────────────────────────────────────────────

B.1) SCORING-METHODIK DEFINIEREN:
     Berechne einen AI-Discovery-Score (0-100) basierend auf:

     KATEGORIE 1 — SEMANTIC FOUNDATION (25 Punkte):
       Semantisches HTML korrekt (10 Punkte)
       Heading-Hierarchie fehlerfrei (5 Punkte)
       Landmark-Rollen vollstaendig (5 Punkte)
       Entity-Map konsistent (5 Punkte)

     KATEGORIE 2 — STRUCTURED DATA (25 Punkte):
       Organization-Schema vorhanden (5 Punkte)
       BreadcrumbList auf allen Unterseiten (5 Punkte)
       Seiten-spezifische Schemas implementiert (5 Punkte)
       Schema-Graph korrekt verknuepft (5 Punkte)
       Rich-Result-Eignung fuer mind. 3 Typen (5 Punkte)

     KATEGORIE 3 — CRAWLER ACCESS (25 Punkte):
       robots.txt optimiert (5 Punkte)
       sitemap.xml vollstaendig (5 Punkte)
       llms.txt erstellt und verlinkt (5 Punkte)
       SSR/SSG fuer alle kritischen Inhalte (5 Punkte)
       Meta-Tags auf allen Seiten vollstaendig (5 Punkte)

     KATEGORIE 4 — CONTENT QUALITY (25 Punkte):
       Entity-First-Writing umgesetzt (5 Punkte)
       FAQ-Coverage (mind. 3 pro Service) (5 Punkte)
       Internal-Linking-Score > 80% (5 Punkte)
       Knowledge-Graph-Struktur aufgebaut (5 Punkte)
       Citation-Readiness auf allen Seiten (5 Punkte)

B.2) SCORE BERECHNEN UND DOKUMENTIEREN:
     Berechne den Score fuer jede Kategorie.
     Gesamtscore muss >= 85 sein fuer Zertifizierung.
     Falls < 85: Dokumentiere ALLE Defizite und erstelle Massnahmenplan.
     Re-Validiere nach Behebung der Defizite.

B.3) BENCHMARK GEGEN BEST PRACTICES:
     Vergleiche die Implementierung mit Branchenstandards:
       Sind alle von Google empfohlenen Schema-Typen implementiert?
       Entspricht die llms.txt dem aktuellen Standard (llmstxt.org)?
       Sind die Meta-Tags konform mit Open Graph Protocol?
       Ist die Content-Struktur vergleichbar mit Top-Websites der Branche?

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK C: ZERTIFIZIERUNG & DOKUMENTATION
───────────────────────────────────────────────────────────────────────────────

C.1) AI-DISCOVERY-ZERTIFIKAT ERSTELLEN:
     Erstelle ein formales Zertifizierungs-Dokument:

     ANTIGRAVITY AI-DISCOVERY-ZERTIFIKAT
     ====================================
     Projekt: [Projektname]
     Datum: [Aktuelles Datum]
     Pipeline-Version: [72-Phasen-System]
     Pruefer: Antigravity Meta-Architect

     ERGEBNIS:
       Gesamtscore: [XX]/100
       Status: [ZERTIFIZIERT / BEDINGT ZERTIFIZIERT / NICHT BESTANDEN]

     KATEGORIEN:
       Semantic Foundation: [XX]/25
       Structured Data: [XX]/25
       Crawler Access: [XX]/25
       Content Quality: [XX]/25

     IMPLEMENTIERTE MASSNAHMEN:
       [Zusammenfassung aller implementierten AI-Discovery-Features]

     OFFENE PUNKTE:
       [Liste falls vorhanden, mit Prioritaet und Deadline]

C.2) EMPFEHLUNGEN FUER LAUFENDEN BETRIEB:
     Dokumentiere Empfehlungen fuer die Wartung:
       Schema-Validierung bei jedem Deploy (CI/CD-Integration).
       llms.txt bei Content-Aenderungen aktualisieren.
       Sitemap-Generierung automatisiert.
       Quarterly-Review der AI-Crawler-Landschaft (neue Bots).
       Content-Audit alle 6 Monate (Aktualitaet, neue FAQs).

C.3) MONITORING-SETUP-EMPFEHLUNGEN:
     Dokumentiere empfohlene Monitoring-Massnahmen:
       Google Search Console: Rich-Result-Reports ueberwachen.
       Schema-Markup-Validator in CI/CD einbinden.
       Crawler-Log-Analyse: AI-Bot-Aktivitaet tracken.
       Rankings fuer AI-relevante Suchanfragen monitoren.

===============================================================================
VALIDATION-GATE (MUSS BESTANDEN WERDEN)
===============================================================================
[ ] npm run build ERFOLGREICH (Zero Errors)
[ ] npm run lint ERFOLGREICH (Zero Warnings)
[ ] npx tsc --noEmit ERFOLGREICH (Zero Type-Errors)
[ ] Semantic-HTML-Validierung BESTANDEN
[ ] JSON-LD-Validierung BESTANDEN (alle Seiten)
[ ] Crawler-Accessibility BESTANDEN
[ ] Content-Qualitaet BESTANDEN
[ ] AI-Discovery-Score >= 85/100
[ ] Zertifikat erstellt und dokumentiert
[ ] Kein Regressionsbruch in allen vorherigen Phasen

===============================================================================
EXIT-PROTOKOLL
===============================================================================
1. Aktualisiere .ai-discovery-context.md:
     AI-DISCOVERY-SCORE: [XX]/100
     ZERTIFIZIERUNGS-STATUS: [ZERTIFIZIERT / BEDINGT / NICHT BESTANDEN]
     SEMANTIC-FOUNDATION-SCORE: [XX]/25
     STRUCTURED-DATA-SCORE: [XX]/25
     CRAWLER-ACCESS-SCORE: [XX]/25
     CONTENT-QUALITY-SCORE: [XX]/25
     ZERTIFIKAT-PFAD: [Pfad zum Zertifikats-Dokument]
     WARTUNGS-EMPFEHLUNGEN: [Zusammenfassung]
     PIPELINE-5-STATUS: ABGESCHLOSSEN

2. Aktualisiere .pipeline-master-state.md:
     SEQ-61: ABGESCHLOSSEN
     SEQ-62: IN_PROGRESS

=== CHAIN-EXIT-FOOTER === SEQ-61 ABGESCHLOSSEN ===
-> NAECHSTE PHASE: SEQ-62 -> QA-PHASE-01.md (Global Context & Pre-Flight)
-> AUTO-TRIGGER: Lade SOFORT das naechste Phasen-Dokument (DOMINO-EFFEKT).
-> PIPELINE-UEBERGANG: Pipeline 5 (AI-Discovery) -> Pipeline 6 (QA)
===============================================================================
