Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 11 der Engineering-Pipeline (Testing I — Unit Tests) mit lueckenlosen Unit-Tests zu implementieren. Jede Utility-Funktion, jeder Hook und jede kritische Logik muss testabgedeckt sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-31 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-30 → ZERO-BREAKAGE-PHASE-10.md
→ NÄCHSTE: SEQ-32 → ZERO-BREAKAGE-PHASE-12.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══

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
═══════════════════════════════════════════════════════════════════════════════
SEQUENTIELLES-DOMINO-PROTOKOLL (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
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
═══════════════════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-ARTIFACT-PROTOKOLL (PFLICHT — VOR JEDER AUSFUEHRUNG)
═══════════════════════════════════════════════════════════════════════════════

BEVOR du mit der Ausfuehrung dieser Phase beginnst, MUSST du die folgenden drei
Artifacts der Reihe nach erstellen. Dies ist das Antigravity-Workflow-Protokoll.
Keine Ausfuehrung ohne vorherige Planung. Kein Code ohne vorherigen Plan.

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 1: TASK LIST (Neue Task-Liste fuer diese Phase erstellen)
───────────────────────────────────────────────────────────────────────────────

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

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 2: IMPLEMENTATION PLAN (Detaillierter Umsetzungsplan erstellen)
───────────────────────────────────────────────────────────────────────────────

Erstelle einen NEUEN Implementierungsplan VOR jeder Code-Aenderung. Struktur:

  1. ZUSAMMENFASSUNG:
     Was ist das Ziel dieser Phase? (3-5 Saetze, hochrangig)

  2. ANALYSE-ERGEBNISSE:
     Was wurde aus bestehendem Code und Context-Dateien gelernt?
     Welche Abhaengigkeiten, Risiken, Gotchas aus .project-knowledge-base.md?

  3. GEPLANTE AENDERUNGEN (pro Datei):
     [DATEI] → [AKTION: ERSTELLEN/ERWEITERN/REFACTOR] → [WAS] → [WARUM]

  4. VALIDIERUNGSSTRATEGIE:
     Welche Validation-Gates? Welche Metriken? Welche Tests?

  5. AUSFUEHRUNGSREIHENFOLGE:
     Block A: [Tasks 1-N] → Validation Gate (build, lint, tsc)
     Block B: [Tasks N+1-M] → Validation Gate
     Block C: [Tasks M+1-P] → Validation Gate
     Block D: [Tasks P+1-Ende] → Validation Gate

  Der Plan wird ALS ERSTES erstellt. Erst nach Erstellung beginnt die Ausfuehrung.

───────────────────────────────────────────────────────────────────────────────
ARTIFACT 3: WALKTHROUGH (Nach Abschluss — Teil des EXIT-PROTOKOLLS)
───────────────────────────────────────────────────────────────────────────────

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




═══════════════════════════════════════════════════════════════════════════════
SSOT-DIREKTIVE (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
Der Code ist die SSOT (Single Source of Truth). Wenn Dokumentation und Code
divergieren, GEWINNT IMMER DER CODE. Lies den GESAMTEN bestehenden Code BEVOR
du etwas aenderst. Existierender Code wird ERWEITERT, nie ersetzt.
Validierung: npm run build && npm run lint && npx tsc --noEmit nach JEDEM Block.
DIRECTOR: Director of Engineering (Pipeline 2) — meldet an Director General.
PFLICHT-GESETZE: GESETZ 1 (Ultrathink), GESETZ 2 (100K-Mindset), GESETZ 4 (PPI),
GESETZ 6 (Code-Review K1-K7), GESETZ 7 (Confiteor/RCA bei Bug-Fixes).
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte SEO-Strategie dieser Next.js/React/TypeScript-Website von "gutes SEO" zu "dominantes SEO" zu transformieren — die Website erscheint nicht nur in Suchergebnissen, sondern DOMINIERT die SERPs mit Rich Results, Featured Snippets, Knowledge-Panel-Signalen und AI-Search-Optimierung für Google SGE/AI Overviews. Phase 1 hat das technische SEO-Fundament gelegt (Metadata API, Structured Data, Sitemap, Robots). Phase 11 baut darauf auf und verwandelt die Website in eine Suchmaschinen-Autorität, die für ihre Kern-Keywords die unangefochtene Nummer 1 ist. Dies ist Phase 11 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN CHIRURG, KEIN BULLDOZER.

Deine 5 Säulen:
1. READ-BEFORE-WRITE: Lies JEDE Datei VOLLSTÄNDIG bevor du sie änderst
2. SURGICAL INJECTION: Erweitere bestehenden Code, überschreibe ihn NIEMALS blind
3. ATOMIC VALIDATION: Nach JEDEM Task → npm run build && npm run lint && npx tsc --noEmit
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem Task
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md am Ende der Phase

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere Phase 1–10, besonders:
- SEO-Infrastruktur aus Phase 1 (Metadata, JSON-LD, Sitemap, Robots)
- Content-Architektur aus Phase 10 (Sektions-Blaupausen, Blog-Template)
- FAQ-Sektionen und ihre Platzierung

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe Handoff von Phase 10. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 10 Zeilen.

Schritt 0.3 — Pre-Flight SEO-Audit (ULTRATHINK-TIEFE):
1. Bestehende JSON-LD Schemas: Welche Typen existieren? (Phase 1) — AUDIT DURCHFÜHREN:
   - grep für 'Schema\|SchemaOrg\|jsonld' in src/lib/schema.ts
   - Dokumentiere ALLE implementierten Typen (Article, BreadcrumbList, FAQPage, Organisation, Person, Product)
   - Prüfe: sind Attribute alle befüllt? (author, datePublished, dateModified, headline, description)
   - Validiere via schema.org JSON-LD validator
   - Messung: Anzahl gültiger Schemas pro Seite (Ziel: ≥1 pro Hauptseite, ≥2 pro Blog-Artikel)
2. FAQ-Sektionen: Haben sie FAQPage-Schema? — SPEZIFIKATION:
   - Erwartetes Schema: @type: FAQPage mit mainEntity: [{@type: Question, acceptedAnswer: Answer}]
   - Validiere: Alle QA-Paare haben name (Frage), text (Antwort, 40-60 Wörter)
   - Messbar: Sind ≥3 FAQ-Sektionen pro Service-Seite vorhanden?
   - Prüfe: Sind FAQs strukturiert via <Accordion> mit automatischem Schema-Generation
3. Blog-Posts: Haben sie BlogPosting-Schema? Autoren-Info? — STRUKTUR:
   - BlogPosting @type mit author (Person-Schema), datePublished, dateModified, article.wordCount
   - Autor muss Person-Schema haben: name, bio, image, jobTitle, sameAs (Twitter/LinkedIn)
   - Validierung: Jeder Blog-Post hat ≥50 Wörter pro Absatz (readability für Featured Snippets)
   - Tracking-Metrik: % von Blog-Posts mit vollständigem Author-Schema (Ziel: 100%)
4. Interne Verlinkung: Wie viele eingehende Links hat jede Seite? — AUDIT-SCRIPT:
   - Schreibe src/lib/seo/link-audit.ts: Link-Mapping und Equity-Berechnung
   - Zähle für JEDE Seite: .internalLinks Count (bidirektional, Anchor-Text-relevanz)
   - Berechne Link-Equity mittels Ranking-Score: (eingehende_Links * Anchor_Keyword_Match) / 10
   - Ziel: Jede Seite hat ≥3 eingehende Links mit relevantem Ankertext
   - Erstelle Bericht: src/data/link-audit-report.json mit vollständiger Link-Map
5. Content-Lücken: Welche relevanten Keywords fehlen? — KEYWORD-RESEARCH:
   - Verwende bestehenden Service-Content als Baseline
   - Erzeuge "People Also Ask" Query-Liste pro Service
   - Identifiziere Keywords mit >100 monatl. Suchvolumen, die nicht abgedeckt sind
   - Markiere als "Content-Gap" in .ai-architectural-context.md
   - Priorisierung: ICE-Scoring (Impact × Confidence / Effort)

DOKUMENTIERE ALLES in .ai-architectural-context.md unter Advanced SEO & Content-Strategie mit:
- Link-Audit-Bericht (interne Verlinkung pro Seite)
- Schema-Validierungs-Metriken (% valid per type)
- Content-Gap-Inventar mit Priorisierung
- FAQ-Abdeckung pro Service-Seite
- Der Code ist die SSOT. Dokumentation folgt dem tatsächlichen Verhalten.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — FEATURED-SNIPPET-EROBERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: SNIPPET-TYPEN IDENTIFIZIEREN UND CONTENT FORMATIEREN

Schritt 1.1 — Snippet-Typ-Mapping pro Keyword:
4 Haupttypen:
- Paragraph-Snippet (häufigst): Frage als H2/H3, Antwort 40–60 Wörter DIREKT darunter
- Listen-Snippet: H2 mit Keyword, darunter HTML ol/ul mit 5–8 kurzen Punkten
- Tabellen-Snippet: Semantische HTML-Tabelle (thead, tbody, th, td)
- Video-Snippet: VideoObject-Schema + Kapitelmarkierungen

Schritt 1.2 — <SnippetAnswer /> Komponente:
Props: question (→ H2/H3), shortAnswer (40–60 Wörter, prominent), detailedAnswer (ReactNode).
Generiert automatisch FAQPage-Schema via <JsonLd /> aus Phase 1.

Schritt 1.3 — "People Also Ask" erobern:
Pro Ziel-Keyword: 15–20 PAA-Fragen recherchieren. 5–7 relevanteste in FAQ aufnehmen. Akkordeon + FAQPage-Schema.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: TABELLEN-SNIPPETS UND VERGLEICHS-CONTENT

Schritt 2.1 — <ComparisonTable /> Komponente:
Semantische HTML-Tabelle. Responsive (scrollbar oder Card-Reformat). Eigene Lösung hervorgehoben.

Schritt 2.2 — <PricingTable /> (falls Pakete existieren):
Semantische Tabelle, empfohlenes Paket hervorgehoben, CTA pro Spalte.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — AI-SEARCH UND E-E-A-T
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: CONTENT FÜR AI-ZITIERUNG OPTIMIEREN

Schritt 3.1 — Conversational Authority:
- Definitionen: Glasklare Ein-Satz-Definition am Anfang jedes Fachbegriff-Abschnitts
- Antworten: Antwort im ERSTEN Satz, dann Details
- Statistiken: Quelle + Datum angeben

Schritt 3.2 — Unique Data:
2–3 datenbasierte Content-Pieces mit eigenen Daten (Branchen-Analyse, Benchmarks, proprietäre Frameworks). Nicht kopierbar → AI zitiert als unique Source.

Schritt 3.3 — Entity-Optimierung:
- NAP konsistent auf allen Plattformen
- Organization-Schema mit sameAs-Links
- Konsistente Marken-Schreibweise

Schritt 3.4 — Author-Entity für Blog:
Jeder Artikel: Autor mit Profil, Foto, Bio, Social-Links. Person-Schema im JSON-LD.

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: CONTENT-FRESHNESS-STRATEGIE

Schritt 4.1 — <LastUpdated /> Komponente:
"Zuletzt aktualisiert am [Datum]" auf Service-Seiten und Blog-Posts. dateModified im Schema.

Schritt 4.2 — Content-Decay-Detection:
src/content/audit.ts: Liste aller Seiten mit lastReviewDate. CI-Warnung bei >90 Tagen. Dev-Banner auf veralteten Seiten.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CONTENT-CLUSTER UND VERLINKUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: HUB-AND-SPOKE-CONTENT-MODELL

Schritt 5.1 — Pillar-Seiten:
Jeder Kern-Service = Pillar (2000–5000 Wörter). Inhaltsverzeichnis, Links zu Cluster-Seiten. URL: /[service-name] (Root-Level).

Schritt 5.2 — Cluster-Seiten:
5–10 pro Pillar. Vertiefen Unterthemen. Bidirektionale Verlinkung: Cluster → Pillar und Cluster → Cluster. Signalisiert topical authority.

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: INTERNE-VERLINKUNG-SYSTEMATIK

Schritt 6.1 — Verlinkungsmatrix (src/lib/internal-links.ts):
Pro Seite: relatedPages Array. <RelatedContent /> am Seitenende.

Schritt 6.2 — Kontextuelle Links:
In Fließtexten: Links zu Cluster/Pillar mit keyword-relevanten Ankertexten.

Schritt 6.3 — Validierung:
Build-Script prüft: Jede Seite hat ≥3 eingehende interne Links.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: E-E-A-T-SIGNALE MAXIMIEREN

Experience: Case Studies mit konkreten Ergebnissen, Vorher/Nachher.
Expertise: Autoren-Profile, Qualifikationen, Zertifizierungen auf der Website.
Authoritativeness: Externe Erwähnungen, Gastbeiträge, Branchenverzeichnisse.
Trustworthiness: Impressum, Datenschutz, SSL, Kontaktdaten, Bewertungen.

Implementiere als Checkliste die bei jedem Build validiert wird.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 11 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 8.1 — .ai-architectural-context.md aktualisieren:
- Snippet-Strategie und SnippetAnswer-Komponente
- Content-Cluster-Architektur (Pillars + Clusters)
- Interne-Verlinkung-Matrix
- E-E-A-T-Maßnahmen
- Content-Freshness-System

Schritt 8.2 — .upgrade-state.md finalisieren.

Schritt 8.3 — Handoff an Phase 12:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 5 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 11
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ <SnippetAnswer /> Komponente mit FAQPage-Schema
□ 3–5 Snippet-optimierte Abschnitte pro Service-Seite
□ PAA-Fragen in FAQ-Sektionen
□ <ComparisonTable /> mit semantischer HTML-Tabelle
□ AI-Search: Glasklare Definitionen, direkte Antworten
□ 2+ Pieces mit eigenen Daten
□ Entity-Signale: NAP konsistent, Organization-Schema mit sameAs
□ <LastUpdated /> auf Service- und Blog-Seiten
□ Content-Cluster: Pillar + Cluster mit bidirektionaler Verlinkung
□ Jede Seite ≥3 eingehende interne Links
□ E-E-A-T-Checkliste implementiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 12


═══════════════════════════════════════════════════════════════════════════════
═══ 
─────────────────────────────────────────────────────────────────────────────
ERWEITERTES EXIT-PROTOKOLL (DIRECTOR OF ENGINEERING):
─────────────────────────────────────────────────────────────────────────────
1. ATOMIC VALIDATION:
   [ ] npx tsc --noEmit → 0 Errors
   [ ] npm run lint → 0 Errors/Warnings
   [ ] npm run build → SUCCESS
2. PPI-BEWERTUNG (GESETZ 4):
   [ ] Kein Code-Block mit CRITICAL Impact ohne dokumentierte Begruendung
   [ ] Alle WARNING-Impacts mit Mitigationsstrategie versehen
3. CODE-REVIEW K1-K7 (GESETZ 6):
   [ ] K1 Architektur: Max 150 Zeilen/Datei, max 20 Zeilen/Funktion
   [ ] K2 Type Safety: Null any, Zod fuer externe Daten
   [ ] K3 Performance: Stabile Props, Code Splitting
   [ ] K4 Security: Keine exponierten Secrets
   [ ] K5 Design System: Tokens statt Magic Numbers
   [ ] K6 Accessibility: Semantische Elemente, Focus States
   [ ] K7 Premium Polish: Skeleton Screens, Error States
4. KNOWLEDGE-BASE UPDATE:
   [ ] .project-knowledge-base.md mit neuen Erkenntnissen aktualisiert
   [ ] Falls Bug-Fix: RCA im Confiteor-Format (GESETZ 7) dokumentiert
5. SELF-OPTIMIZATION CHECK:
   [ ] Benennungen konsistent (camelCase Funktionen, PascalCase Komponenten)
   [ ] JSDoc auf allen exportierten Funktionen
   [ ] Keine TODO/FIXME ohne Ticket-Referenz
6. CONTEXT-UPDATE UND HANDOFF:
   [ ] .upgrade-state.md aktualisiert (aktuelle Phase, offene Issues, naechste Phase)
   [ ] .ai-architectural-context.md aktualisiert (neue Patterns, Entscheidungen)
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)

CHAIN-EXIT-FOOTER ═══ SEQ-31 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-21 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-22)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-32 → ZERO-BREAKAGE-PHASE-12.md
   → Lese ZERO-BREAKAGE-PHASE-12.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-22

═══ PHASE SEQ-21 → SEQ-22: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-21 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-21 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-21 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-32 → ZERO-BREAKAGE-PHASE-22.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-22
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-22 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-21: Advanced SEO Dominanz ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-21 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-22)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-32 → ZERO-BREAKAGE-PHASE-22.md
   → Lese ZERO-BREAKAGE-PHASE-22.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-22

═══ SEQ-22: HANDOFF AKTIV ═══
