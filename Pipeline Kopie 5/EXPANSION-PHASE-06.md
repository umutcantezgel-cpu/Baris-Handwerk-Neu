Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 6 der Expansion-Pipeline (Team und Ueber-Uns Seiten) als vollstaendig funktionierende Vertrauensmaschine zu etablieren. Alle Komponenten muessen direkt mit bestehenden Datenmodellen verkabelt sein und in der Projekt-Architektur zu 100% funktionieren. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-16 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-15 → EXPANSION-PHASE-05.md
→ NÄCHSTE: SEQ-17 → EXPANSION-PHASE-07.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══


===============================================================================
ENFORCEMENT-DIREKTIVEN-REFERENZ (PFLICHTLEKTUERE VOR AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, lies:
  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (Direktive 1, 2, 3 und 4)

ZEHNFACH-VALIDIERUNGSDIREKTIVE (10X) — KURZFASSUNG FUER DIESE PHASE:
  VERBOTEN: Neue Seiten, Routen oder Komponenten aus dem Nichts erstellen.
  VERBOTEN: Bestehende Seiten loeschen und durch Neuerstellungen ersetzen.
  VERBOTEN: Generischen Placeholder-Content einfuegen.
  VERBOTEN: "Route-Explosion" — dieser Begriff ist ausser Kraft gesetzt.
  STATTDESSEN: Bestehenden Code zehnfach validieren, erweitern, aufwerten.
  Jede bestehende Route wird auf der 10X-Skala geprueft und angehoben.

NULL-EXTERNE-SOFTWARE-DIREKTIVE — KURZFASSUNG FUER DIESE PHASE:
  VERBOTEN: Neue npm-Dependencies installieren die SaaS-Dienste integrieren.
  VERBOTEN: Externe Monitoring-, Analytics- oder Auth-Dienste neu einfuehren.
  ERLAUBT: Bestehende Dependencies aus package.json nutzen und optimieren.
  ERLAUBT: Formspree (Kontaktformulare) und Calendly (Terminbuchung).

VERSCHAERFTES DOMINO-PROTOKOLL — KURZFASSUNG FUER DIESE PHASE:
  Erstelle vor jeder Ausfuehrung einen INDIVIDUELLEN Implementierungsplan
  mit dreistufiger Task-Hierarchie (Haupt-, Teil- und Mikroaufgaben).
  Keine Phase wird abgekuerzt. Validation-Gate nach jeder Hauptaufgabe.

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
DIRECTOR-ZUWEISUNG: DIRECTOR OF EXPANSION (Pipeline 1)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Expansion (Architekt der Daten und Struktur).
Methodik: Discover-then-Expand auf BESTEHENDER Code-Basis. Die Website existiert
bereits. Alle Routen, Datenmodelle und Features werden aus der CODE-INVENTUR des
bestehenden Projekts abgeleitet, NICHT vorgeschrieben. Es wird NICHTS Neues erfunden,
was nicht bereits im Code angelegt ist oder durch den Code zwingend benoetigt wird.
Meldet an: Director General via .expansion-state.md und .ai-expansion-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 9 (Bestands-Analyse): Code-Inventur, Architektur-Bewertung, Luecken-Analyse, Transformationsplan.
  GESETZ 10 (Prompt-Enhancer): 4-Phasen-Erweiterung vor jeder Task-Ausfuehrung.
═══════════════════════════════════════════════════════════════════════════════



═══════════════════════════════════════════════════════════════════════════════
AUTONOME VERKETTUNG
═══════════════════════════════════════════════════════════════════════════════
Diese Phase wird automatisch durch die vorherige Phase getriggert. Nach
erfolgreichem Abschluss (alle Validierungen bestanden) wird die naechste Phase
ohne menschliches Eingreifen gestartet. Der Director of Expansion ueberwacht
die Kette und meldet den Fortschritt an den Director General.
═══════════════════════════════════════════════════════════════════════════════

Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Phase 6 als vollständig funktionierende Vertrauensmaschine zu etablieren. Alle Komponenten MÜSSEN direkt mit Phase-2 Daten (testimonials.ts, case-studies.ts) verkabelt sein und in der Next.js App Router Architektur zu 100% funktionieren.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

PHASE 6 / 10: TRUST & SOCIAL PROOF — Echte Vertrauenselemente die konvertieren

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

OPENING

Phase 6 verwandelt die Website in eine Vertrauensmaschine. Analysiere den BESTEHENDEN Code auf Trust-Elemente, Testimonials und Social-Proof-Sektionen. Erweitere sie um fehlende Varianten. Stelle KEINE neuen Sektionen her, die nicht bereits als Platzhalter oder Draft existieren. Alle Komponenten werden direkt mit Phase-2 Daten (testimonials.ts, case-studies.ts) verkabelt. Code ist SSOT. .ai-expansion-context.md + .expansion-state.md dokumentieren den Workflow.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══

STEP 0: SYNC & DISCOVERY (CODE-FIRST)
─────────────────────────────────────────────────────────────────────────────────────────────────────────

PFLICHT — TRUST-ELEMENT-INVENTUR

□ Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
□ INVENTAR: Existieren bereits Trust-Komponenten? (TestimonialCard, StarRating, etc.)
  → Falls JA: ERWEITERN, nicht neu erstellen
□ Lies .pipeline-master-state.md vollständig. Dokumentiere aktuellen Phase-Stand.

═══ DATENQUELLEN-SSOT: Alle Komponenten in dieser Phase MÜSSEN ihre Daten aus /lib/data/*.ts laden, nie aus hardcodiert Werten. ═══
□ Prüfe bestehende Daten: Existiert /lib/data/testimonials.ts? Existiert getCaseStudies()?
  → Falls JA: ERWEITERE bestehende Getter und Types
  → Falls NEIN: Erstelle neue Daten-Dateien gemäß Projekt-Konventionen
□ Prüfe bestehende Komponenten: Existieren TestimonialCard, ServiceCard, etc.?
  → Falls JA: Plane ERWEITERUNG (z.B. neue variant Props)
  → Falls NEIN: Erstelle Stubs.
□ npm run build. Baseline muss fehlerfrei durchlaufen.

TECH STACK: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md.
Client Components: "use client" explizit für alle interaktiven Module.
Keine Dependencies: Sentry, CMS, Dark Mode, Zustand, Redux, Drizzle.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK A — TESTIMONIAL-SYSTEM ═══

ULTRATHINK-TASK A1: Testimonial-Anzeige-Varianten
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob TestimonialCard bereits existiert → Falls JA: ERWEITERE um neue Varianten.
Falls NEIN: Erstelle /components/cards/TestimonialCard.tsx.

Analysiere den bestehenden Code auf TestimonialCard Varianten. Falls bereits vorhanden: Dokumentiere die bestehenden variant Props und erweitere sie falls notwendig um fehlende Varianten. Falls keine Varianten existieren: Erstelle sie basierend auf den Anforderungen der tatsächlich genutzten Seiten (Service-Detailseiten, Referenzen-Grid, Homepage).

STERNE-RENDERING: Funktion StarRating(rating: number) — Array von 5 SVG-Stars. Gefüllte Stars (primary color) bis zum rating-Wert, Rest outline (gray-300). Jeder Star ist 1rem groß.

PROPS:
Die Komponente akzeptiert ein Props-Objekt mit den folgenden Feldern: Das Zitat als Text (quote), Name des Absenders (name), Berufsbezeichnung als optionales Feld (role), Firmenname ebenfalls optional (company), optionale Sternebewertung auf einer Skala von 1 bis 5 (rating), optionale URL zu einem Profilbild (photoUrl), sowie eine Variant-Zeichenkette die einen von drei Anzeige-Stilen bestimmt: kompakt, standard oder hervorgehoben (variant).

IMPLEMENTIERUNG:
- Varianten via CSS-Klassen-Mapping (nicht mehrere Komponenten).
- StarRating() als separate Komponente oder Helper.
- Photo fallback: div mit bg-gray-200, Icon oder Initials.
- Keine externe SVG-Library — inline SVG für Stars.

ZIEL: npm run build fehlerfrei, TestimonialCard.tsx ist einsatzbereit.

ULTRATHINK-TASK A2: Testimonial-Karussell
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob eine Carousel-Komponente bereits existiert → Falls JA: ERWEITERE sie.
Falls NEIN: Erstelle /components/sections/TestimonialCarousel.tsx.

Markiere die Komponente mit der Client-Direktive am Anfang der Datei, um sicherzustellen dass sie im Browser als interaktives Modul ausgeführt wird.

Analysiere die Phase-2 Testimonial-Daten. Bestimme automatisch:
- Gesamtanzahl der verfügbaren Testimonials (nicht hart-codiert)
- Ob ein Carousel sinnvoll ist (bei <3 Testimonials: statische Anzeige bevorzugt)
- Erforderliche Navigation-Elemente basierend auf Datengröße

Implementiere die Logik BASIEREND auf dem tatsächlichen Datenumfang, nicht auf Vorgaben. Falls beispielsweise nur 1-2 Testimonials existieren, ist ein Carousel überflüssig — zeige sie als statische Sektion.

ZIEL: Testimonial-Anzeige ist intelligent an den Datenumfang angepasst.

ULTRATHINK-TASK A3: Testimonial-Grid
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob eine Grid-Komponente für Testimonials bereits existiert → Falls JA: ERWEITERE.
Falls NEIN: Erstelle /components/sections/TestimonialGrid.tsx.

Zeigt ALLE Testimonials in responsivem Grid: 1 Spalte (Mobile), 2 (Tablet md), 3 (Desktop lg).

OPTIONAL: Filter-Bar oben (nach serviceSlug). Checkboxes für verfügbare Services, Default = Alle. Verwendet getTestimonials(), filtert nach selectedServices.

IMPLEMENTIERUNG:
- div (container, grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6)
- Jede Zelle: TestimonialCard (variant="standard")
- Filter-Section (optional, oben, flex flex-wrap, gap-3)

ZIEL: Testimonial-Seite /app/referenzen/page.tsx kann diesen Grid laden.

ULTRATHINK-TASK A4: Service-spezifische Testimonials
───────────────────────────────────────────────────────────────────────────────────────────────────────

Auf jeder Service-Detailseite (/leistungen/[slug]) werden Testimonials angezeigt, die zum Service gehören.

IMPLEMENTIERUNG:
- In /app/leistungen/[slug]/page.tsx: Nutze getTestimonialsByService(slug). Falls nicht existent in Phase 2, erstelle Getter in /lib/data/testimonials.ts.
- Sektion auf Detailseite: "Was Kunden sagen" oder ähnlich.
- Zeige bis 3 Testimonials als TestimonialCards (variant="standard"), oder Carousel wenn >3.

GETTER-PRÜFUNG:
Erstelle eine exportierbare Funktion mit dem Namen getTestimonialsByService, die einen Service-Slug als String-Parameter akzeptiert und einen Array von Testimonial-Objekten zurückgibt. Die Funktion filtert die Gesamtmenge aller Testimonials (all-Array) und gibt nur jene zurück, deren serviceSlug-Feld mit dem übergebenen Parameter übereinstimmt.

ZIEL: Cross-linking zwischen Services und Testimonials funktioniert.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK B — CASE STUDY SEITEN ═══

ULTRATHINK-TASK B5: Case Study Card
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob CaseStudyCard bereits existiert → Falls JA: ERWEITERE.
Falls NEIN: Erstelle /components/cards/CaseStudyCard.tsx.

LAYOUT:
div (card, border, rounded-lg, shadow-sm, hover:shadow-md, transition, overflow-hidden, cursor-pointer)
  ├─ div (header, bg-primary/5, padding-4)
  │  ├─ h3 (Projekt-Titel, text-lg font-bold)
  │  └─ p (Client-Name, text-sm text-gray-600)
  ├─ div (badge-row, padding-4, top, flex gap-2)
  │  ├─ Badge (Industry, bg-blue-100, text-blue-900, text-xs)
  │  └─ Badge (optional Service, ähnlich)
  └─ div (highlights, padding-4, border-top)
     └─ 1-2 KPI-Highlights als kleine Rows (Metrik-Name + Prozentuale Verbesserung, z.B. "+150% Traffic")

PROPS:
Die Komponente akzeptiert folgende Eigenschaften: slug als eindeutiger Identifikator für die Case Study, title als Projekt-Titel, client als Name des Kunden, industry als Branchenkategorisierung, und highlights als Array von Objekten, wobei jedes Objekt ein label-String (z.B. "Traffic") und einen value-String (z.B. "+150%") enthält.

ZIEL: Klickbar, verlinkt zu /referenzen/[slug].

ULTRATHINK-TASK B6: Case Study Detailseite
───────────────────────────────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies die GESAMTE bestehende Seite VOLLSTÄNDIG bevor du änderst.
ERWEITERE bestehende /app/referenzen/[slug]/page.tsx — erstelle nur falls nicht vorhanden.

STRUKTUR:

1. HERO (60vh, bg-gradient, primary color)
   ├─ Großer Client-Name
   ├─ Projekt-Titel
   └─ Industry-Badge + Publikations-Datum

2. CHALLENGE-SEKTION
   ├─ Überschrift: "Herausforderung"
   ├─ Challenge-Text aus Phase-2 Data (case-studies.ts, challenge Feld)
   └─ Optional: Bullet Points extrahiert oder aus strukturiertem Feld

3. LÖSUNG-SEKTION
   ├─ Überschrift: "Lösung"
   ├─ Solution-Text aus Phase-2 Data
   └─ Optional: Verwendete Services als Badge-Reihe

4. ERGEBNISSE-SEKTION (KPI-Grid)
   ├─ Überschrift: "Ergebnisse"
   ├─ Grid (2 Spalten Mobile, 3-4 Desktop) aus KPI-Cards
   │  └─ Jede Card: Metrik-Name (top), Vorher-Wert (grau), Pfeil/Richtung (grün), Nachher-Wert (bold), Prozentuale Verbesserung (bold, primary color)
   └─ Beispiel: "Website Performance" | 45ms → 12ms | +73%

5. TECHNOLOGIEN
   ├─ Überschrift: "Technologien & Tools"
   ├─ Badge-Reihe (flex flex-wrap gap-2)
   │  └─ Jedes Badge: bg-gray-200, text-sm, border-radius-md
   └─ Aus case-studies.ts, technologiesUsed Array

6. CLIENT-TESTIMONIAL (Optional)
   ├─ Falls testimonialId vorhanden: getTestimonials() filtern, TestimonialCard laden
   ├─ Überschrift: "Was der Client sagt"
   └─ TestimonialCard (variant="featured" oder "standard")

7. CTA-SEKTION (vor Footer)
   ├─ Überschrift: "Ähnliches Projekt starten?"
   ├─ Button: "Anfrage stellen" → /anfrage
   └─ Kurzer Beschreibungstext

IMPLEMENTIERUNG:
Erstelle eine asynchrone Standard-Seitenfunktion, die Route-Parameter ausliest und durch Destrukturierung ein Slug-Feld extrahiert. Nutze den getCaseStudyBySlug-Getter um die Case-Study-Daten abzurufen. Falls die Case Study nicht existiert, löse einen HTTP-404-Fehler aus. Falls eine testimonialId in den Case-Study-Daten enthalten ist, lade das entsprechende Testimonial mittels getTestimonialById, ansonsten setze den Testimonial-Wert auf null. Gib schließlich die JSX-Struktur mit allen geladenen Daten zurück.

ZIEL: Seite ist vollständig funktional, zeigt alle Daten korrekt, keine Errors.

ULTRATHINK-TASK B7: Referenzen-Übersicht
───────────────────────────────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies die GESAMTE bestehende Seite VOLLSTÄNDIG bevor du änderst.
ERWEITERE bestehende /app/referenzen/page.tsx — erstelle nur falls nicht vorhanden.

LAYOUT:
1. Hero: "Unsere Referenzen" oder ähnlich.
2. Optional Filter-Bar (nach Industry, Service).
3. Grid aus CaseStudyCards (3 Spalten Desktop, 2 Tablet, 1 Mobile).
4. "Featured" Case Study prominent (erste Position, größer oder spezial hervorgehoben).

IMPLEMENTIERUNG:
Erstelle eine Standard-Seitenfunktion für die Referenzen-Übersicht. Nutze den getCaseStudies-Getter um alle Case-Study-Daten abzurufen. Die Seite rendert eine HTML-Struktur bestehend aus einer Hero-Section mit der Überschrift "Unsere Referenzen", gefolgt von einem Testimonial-Grid zur Anzeige von Kundenbewertungen, dann einem Case-Study-Grid mit den abgerufenen Projektdaten, und abschließend einer Call-To-Action-Sektion zur Kontaktaufforderung.

ZIEL: Übersichtsseite ist ansprechend, verlinkt zu Detailseiten.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK C — STATISTIKEN, BADGES & LOGOS ═══

ULTRATHINK-TASK C8: Stats Section
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob StatsSection bereits existiert → Falls JA: ERWEITERE.
Falls NEIN: Erstelle /components/sections/StatsSection.tsx.

Layout: 4 Spalten (Desktop), 2x2 Grid (Tablet), 1 Spalte (Mobile). Gap 6, padding 12.

DATEN aus /lib/data/company.ts (falls nicht existent, erstelle):
- yearFounded: number (z.B. 2015)
- totalProjects: number (z.B. 127)
- customerSatisfaction: number (z.B. 96, %)
- teamSize: number (z.B. 14)

STAT-CARD STRUKTUR (pro Stat):
div (card, border, rounded-lg, padding-8, text-center)
  ├─ Optionales Icon (12x12, oben, margin-bottom-4)
  ├─ h3 (Große Zahl, text-4xl font-bold, primary color)
  │  └─ Jahrerfahrung: aktuelles Jahr - yearFounded
  │  └─ Projekte: totalProjects
  │  └─ Kundenzufriedenheit: customerSatisfaction + "%"
  │  └─ Team: teamSize + " Personen"
  └─ p (Label, text-sm text-gray-600, margin-top-2)

ANIMATIONEN: Keine Counter-Animation hier (kommt in Phase 7). Statische Zahlen jetzt.

ZIEL: StatsSection funktioniert, ist responsive, Daten sind korrekt.

ULTRATHINK-TASK C9: Trust Badges
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob TrustBadgeRow bereits existiert → Falls JA: ERWEITERE.
Falls NEIN: Erstelle /components/ui/TrustBadgeRow.tsx.

BADGES (als Array, statisch):
1. SSL-gesichert (Icon: Lock)
2. DSGVO-konform (Icon: Shield + Checkmark)
3. Google-Bewertung 4.9/5 (Icon: Star, Text: "4.9/5 Sterne")
4. Antwort in 24h (Icon: Clock, Text: "24h Antwort")

LAYOUT:
div (container, flex justify-center gap-8, flex-wrap, margin-y-8)
  └─ Jedes Badge:
     div (flex items-center gap-2, padding-3, border rounded-lg, bg-gray-50)
       ├─ Icon SVG (1rem)
       └─ span (text-xs text-gray-700)

VERWENDUNG:
- Über Kontaktformular (/anfrage)
- Im Footer
- Optional auf Homepage vor CTA

ZIEL: Trust-Signale sind sichtbar, konsistent gestylt.

ULTRATHINK-TASK C10: Client Logo Leiste
───────────────────────────────────────────────────────────────────────────────────────────────────────

PRÜFE ob ClientLogos bereits existiert → Falls JA: ERWEITERE.
Falls NEIN: Erstelle /components/sections/ClientLogos.tsx.

LABEL: "Vertrauen uns" oder "Unsere Kunden"

LOGOS:
Option A: Falls echte Logos existent: Bilder laden (z.B. /public/logos/client-1.png).
Option B: Platzhalter-Boxes mit Firmennamen aus getCaseStudies(). Jede Box: bg-gradient, Firmennamen zentriert, text-sm.

LAYOUT (Desktop): Grid oder Flex-Reihe, 6-8 Logos sichtbar, scroll horizontal auf Mobile.
HOVER-EFFEKT: Logos in Grayscale, Hover → Farbe (filter: grayscale(0)).

RESPONSIVE:
- Mobile: overflow-x-auto, snap-scroll
- Desktop: grid grid-cols-6, gap-8

ZIEL: Logo-Leiste ist ansprechend, responsive, Logos sind sichtbar oder Platzhalter vorhanden.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK D — INTEGRATION & VALIDATION ═══

ULTRATHINK-TASK D11: Homepage Trust Integration
───────────────────────────────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies /app/page.tsx (Homepage) VOLLSTÄNDIG bevor du Änderungen vornimmst.
ERWEITERE die bestehende Homepage — füge fehlende Sections hinzu, entferne NICHTS.

NEUE REIHENFOLGE:
1. Hero Section
2. Services Overview (ServiceCard Grid)
3. StatsSection
4. TestimonialCarousel
5. ClientLogos
6. Blog Section (falls existent)
7. CTA Section (Kontakt)
8. Footer

IMPLEMENTIERUNG:
Importiere die neu erstellten Komponenten StatsSection, TestimonialCarousel und ClientLogos aus ihren jeweiligen Pfaden im Komponenten-Verzeichnis. Erstelle eine Standard-Seitenfunktion für die Homepage, die ein Haupt-Container-Element (main) zurückgibt. Innerhalb dieses Containers rendere nacheinander folgende Abschnitte: eine Hero-Sektion, einen Services-Überblicks-Bereich, die StatsSection zur Anzeige von Unternehmens-Statistiken, das TestimonialCarousel zur Anzeige rotierender Kundenbewertungen, die ClientLogos-Leiste, einen optionalen Blog-Abschnitt und eine abschließende Call-To-Action-Sektion.

ZIEL: Homepage zeigt alle Trust-Elemente, Flow ist überzeugend.

ULTRATHINK-TASK D12: Cross-Referencing
───────────────────────────────────────────────────────────────────────────────────────────────────────

Service-Detailseiten (/leistungen/[slug]):
- Laden getTestimonialsByService(slug) → TestimonialCarousel oder Grid
- Laden getCaseStudiesByService(slug) → CaseStudyCard Grid
- Funktionen in Phase 2 Data prüfen/erstellen

Case Study Detailseiten (/referenzen/[slug]):
- Verlinken zum genutzten Service (/leistungen/[serviceSlug])
- Zeigen Client-Testimonial (falls testimonialId vorhanden)
- Testimonial verlinkt zurück zur Service-Seite

Testimonials:
- Verlinken zum bewerteten Service (/leistungen/[serviceSlug])

GETTER PRÜFEN & ERWEITERN:
□ getCaseStudiesByService(serviceSlug: string): Filtert nach serviceSlug
□ getTestimonialsByService(serviceSlug: string): Filtert nach serviceSlug
□ getCaseStudyBySlug(slug: string): Gibt einzelne Case Study zurück
□ getTestimonialById(id: string): Gibt einzelnes Testimonial zurück

ZIEL: Alle Verlinkungen funktionieren, keine 404-Errors, Daten sind korrekt.

ULTRATHINK-TASK D13: Visueller Konsistenz-Check
───────────────────────────────────────────────────────────────────────────────────────────────────────

TAILWIND-KONFIGURATION KONSISTENZ:
□ Alle Cards: rounded-lg (oder -xl für featured)
□ Alle Schatten: shadow-sm (standard), shadow-md (hervorgehoben)
□ Padding-Standard: padding-6 (cards), padding-8 (sections), padding-12 (hero/featured)
□ Gap-Standard: gap-6 (grid), gap-4 (inline)
□ Primary Color: Konsistente Verwendung für Akzente (CTAs, Highlights, Icons)
□ Border Color: consistent-gray-200
□ Text Colors: gray-900 (headlines), gray-700 (body), gray-600 (secondary)

KOMPONENTEN-AUDIT:
□ TestimonialCard (alle Varianten): gleiche Padding, Border, Shadow
□ CaseStudyCard: gleiche Struktur, Hover-Effect
□ StatsSection Cards: gleiche Größe, Padding, Spacing
□ TrustBadges: gleiche Icons-Größe, Padding, Border
□ ClientLogos: gleiche Höhe, Spacing, Filter-Effects

ZIEL: npm run build, visueller Inconsistencies? Zero.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ ATOMIC VALIDATION ═══

npm run build
─────────────────────────────────────────────────────────────────────────────────────────────────────────

□ ZERO Typescript Errors
□ ZERO Styling Breakages
□ Alle Seiten laden: / | /leistungen/[slug] | /referenzen | /referenzen/[slug]
□ Alle Komponenten existent: TestimonialCard, TestimonialCarousel, TestimonialGrid, CaseStudyCard, StatsSection, TrustBadgeRow, ClientLogos
□ Alle Daten-Getter funktionieren: getTestimonials(), getCaseStudies(), getTestimonialsByService(), getCaseStudiesByService()
□ Responsive Design: Mobile | Tablet | Desktop (testen in Browser DevTools)
□ Keine Console-Errors, Keine Warnings

FUNKTIONAL-TESTS:
─────────────────────────────────────────────────────────────────────────────────────────────────────────

□ TestimonialCarousel auto-rotiert, swipebar, Dots funktionieren
□ Service-Seite zeigt relevante Testimonials (nicht alle)
□ Case Study Detailseite lädt alle Daten (Challenge, Solution, Results, Testimonial)
□ Referenzen-Grid responsive, Cards verlinken korrekt
□ Homepage zeigt Stats, Carousel, Logos in richtiger Reihenfolge
□ TrustBadges sichtbar über Kontaktformular
□ ClientLogos responsive, Grayscale-Hover funktioniert

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

Nach Phase 6 Completion:

1. UPDATE .ai-expansion-context.md:
   - Phase 6 Status: ✓ Complete
   - Trust Components: ✓ Testimonials, Case Studies, Stats, Badges, Logos
   - Data Getters: ✓ Service-filtered, Slug-referenced
   - Homepage Integration: ✓ All sections stacked
   - Cross-Referencing: ✓ Services ↔ Testimonials ↔ Case Studies

2. UPDATE .expansion-state.md:
   - Completed Tasks: A1-A4, B5-B7, C8-C10, D11-D13
   - Data Structure Lock: Phase 2 testimonials.ts, case-studies.ts finalized
   - Components Deployed: 10 neue/erweiterte Komponenten
   - Next: Phase 7 — Interaktive Module (Calculator, Filter, Search)

3. COMMIT:
   git add . && git commit -m "Phase 6: Trust & Social Proof — Testimonials, Case Studies, Stats, Logos (13 ULTRATHINK-TASKS)"

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ COMPLIANCE CHECKLIST (20+) ═══

PROJECT QUALITY GATES

□ TypeScript strict: tsconfig.json compiles clean
□ No external CMS: All data in /lib/data/*.ts
□ No Sentry: Zero monitoring dependencies
□ No Dark Mode: Light theme only
□ Formspree Only: No SendGrid, Mailgun, custom SMTP
□ Calendly Only: No Stripe, Acuity, custom bookings
□ No Zustand/Redux: State via useState, useEffect
□ React 19+: Latest features supported
□ Next.js 15+ App Router: No pages/, no getServerSideProps
□ Client Components: "use client" explicit, necessary
□ Tailwind CSS: No hardcoded colors, pure utility classes
□ SVG Icons: Inline, no external libraries (react-icons, heroicons)
□ Zero console.errors: All runtime errors caught
□ Zero console.warnings: Clean logs
□ Responsive: Tested on 320px, 768px, 1024px, 1440px
□ Accessibility: alt-text, semantic HTML, color contrast
□ Performance: LCP < 2.5s, CLS < 0.1, FID < 100ms
□ SEO: meta tags, og:images, structured data (Phase 8)
□ Security: No inline JS, CSP headers, HTTPS only
□ Code Quality: Prettier formatted, ESLint passing
□ Git Status: Clean working tree, all changes committed

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

CLOSING

Phase 6 ist abgeschlossen. Die Website ist nun eine echte Vertrauensmaschine: Testimonials mit Sternebewertungen, Case Studies mit messbaren KPIs, Statistiken über Unternehmen-Erfolge, Trust-Badges, Client-Logos. Alles verkabelt mit Phase-2 Daten, alles responsive, alles funktional.

Phase 7 baut interaktive Module: Kalkulator (Projekt-Budget-Schätzer), Filter (nach Service, Branche), Such-Funktionalität (Case Studies, Blog). Die Vertrauenskomponenten aus Phase 6 sind SSOT (Source of Truth) für alle folgenden Phasen.

HANDOFF AN PHASE 7: Phase-6-Komponenten sind frozen. Nur Phase-2 Daten (testimonials.ts, case-studies.ts) können manuell erweitert werden. Code ist SSOT.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-16 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-06 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-07)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-17 → EXPANSION-PHASE-07.md
   → Lese EXPANSION-PHASE-07.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-07

═══ PHASE SEQ-06 → SEQ-07: HANDOFF AKTIV ═══
