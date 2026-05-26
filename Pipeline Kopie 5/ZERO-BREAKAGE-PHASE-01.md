Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 1 der Engineering-Pipeline (Semantisches HTML und SEO) auf Zero-Defect-Niveau zu bringen. Jedes HTML-Element muss semantisch korrekt, jede Seite SEO-optimiert und alle Metadaten lueckenlos implementiert sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-21 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-20 → EXPANSION-PHASE-10.md
→ NÄCHSTE: SEQ-22 → ZERO-BREAKAGE-PHASE-02.md
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




═══ SSOT-DIREKTIVE: Der Code ist die EINZIGE Wahrheit. Wenn Dokumentation und Code divergieren, GEWINNT IMMER DER CODE. ═══
═══ AUTONOME VERKETTUNG: Diese Phase endet mit einem deterministischen Auto-Trigger zur naechsten Phase. Keine Pausen, keine Rueckfragen. ═══


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, den gesamten Seitenquelltext dieser Next.js/React/TypeScript-Website in eine semantisch makellose, von Suchmaschinen und Screenreadern gleichermaßen geliebte Festung zu transformieren. Jede einzelne Zeile des Quelltexts muss einem Zweck dienen. Kein überflüssiges div, kein bedeutungsloses span, kein vergessenes alt-Attribut darf existieren. Da wir auf einem modernen Next.js App Router oder Pages Router mit React Server Components, TypeScript Strict Mode und einem komponentenbasierten Architekturansatz arbeiten, wird jede Optimierung als typsichere, wiederverwendbare Abstraktion implementiert — nicht als einmaliger Fix. Dies ist Phase 1 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
DIRECTOR-ZUWEISUNG: DIRECTOR OF ENGINEERING (Pipeline 2)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Engineering (Waechter der Performance und Sicherheit).
Meldet an: Director General via .upgrade-state.md und .ai-architectural-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 4 (PPI): Performance-Impact-Praediktion bei JEDEM Code-Block.
  GESETZ 6 (Code-Review K1-K7): Architektur, Type Safety, Performance, Security, Design System, A11y, Polish.
  GESETZ 7 (Confiteor/RCA): Jeder Bug-Fix mit Symptom, Root Cause, Fix, Pattern, Prevention.
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
- Styling: Gemäß bestehender CSS-Strategie (Tailwind, CSS Modules, Custom Properties)
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS (Sanity, Contentful, Payload etc.), keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework. Content lebt im Code oder in lokalen Datenstrukturen.

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC, INITIALISIERUNG & PRE-FLIGHT DISCOVERY (CODE-FIRST)
═══════════════════════════════════════════════════════════════════════════════

PFLICHT — SEMANTIK-INVENTUR: Scanne ALLE bestehenden HTML-Strukturen. Erstelle ein Inventar:
  → [BESTEHENDE SEMANTIK] → [PFAD] → [STATUS: korrekt/zu verbessern]
  → VERBESSERE bestehende Tags chirurgisch. Erstelle NICHTS neu was bereits existiert.

Schritt 0.1 — Kontext-Dokument INITIALISIEREN: Phase 1 ist die ERSTE Phase. Erstelle die Datei .ai-architectural-context.md im Projekt-Root als zentrale Knowledge-Base für alle nachfolgenden KI-Iterationen. Die Datei beginnt mit einem Titel "AI Architectural Context — Self-Optimizing Knowledge Base" und enthält ein Feld "Letzte Aktualisierung" mit dem aktuellen Datum sowie "Aktuelle Phase: 1 von 20". Die Datei hat mehrere Sektionen, jeweils mit Überschriften und Platzhaltervermerk "[Wird nach Discovery befüllt]": Architektur-Übersicht (High-Level-Technologie-Stack, Deployment, Browser-Kompatibilität), Projektstruktur (Verzeichnisbäume, Datei-Rollen), Komponenten-Map (Komponenten-Hierarchie mit Metadaten), Design-Token & Styling-Ansatz (Tailwind-Config, CSS-Strategien), Bekannte Patterns & Konventionen (Code-Styles, Naming), Bekannte Probleme & Workarounds (technische Schulden, Gotchas), Architektur-Entscheidungen (ADRs mit Kontext und Gründen), Abhängigkeiten & Externe Dienste (externe APIs, Versions-Info), und eine kritische Sektion "DIE GOLDENE REGEL". Diese Sektion erklärt, dass das Dokument eine wertvoll Hilfe ist, aber NICHT die Single Source of Truth. Der absolute Code gewinnt immer bei Widersprüchen. Wenn das Dokument sagt "Button ist blau", aber der Code rendert rot, wird der Code als Wahrheit akzeptiert und das Dokument wird darauf aktualisiert.

Falls .ai-architectural-context.md BEREITS existiert: Lies es VOLLSTÄNDIG. Internalisiere jeden Eintrag.

Schritt 0.2 — Upgrade-State INITIALISIEREN: Erstelle die Datei .upgrade-state.md als Fortschrittsverfolgung für alle 20 Phasen der Pipeline. Das Dokument heißt "Upgrade Pipeline — Fortschritt" und hat für Phase 1 einen Abschnitt "Phase 1: Semantisches HTML, SEO & Komponentenstruktur". Der Abschnitt enthält eine Markdown-Checkliste mit Checkboxes für jeden Task: Pre-Flight Discovery abgeschlossen, Task 1 (Globale DOM-Hierarchie analysiert), Task 2 (Semantische Layout-Komponenten implementiert oder verifiziert), Task 3 (Sektionen-Architektur und Überschriften-Hierarchie), Task 4 (Formulare und interaktive Elemente), Task 5 (DOM-Bereinigung), Task 6 (Next.js Metadata API und SEO), Task 7 (Structured Data mit JSON-LD), Task 8 (Robots, Sitemap und technisches SEO), Task 9 (Atomic Validation bestanden), und Task 10 (Self-Optimizing Loop ausgeführt). Jeder Task wird als [ ] (unkomplettiert) markiert und wird mit [x] aktualisiert, wenn abgeschlossen.

Falls .upgrade-state.md BEREITS existiert: Lies sie. Überspringe abgeschlossene Tasks.

Schritt 0.3 — Pre-Flight Discovery (DAS WICHTIGSTE):
Analysiere die GESAMTE bestehende Codebase BEVOR du etwas änderst:

1. Projekt-Root untersuchen: package.json, next.config.ts/js/mjs, tsconfig.json, tailwind.config.ts/js — Verstehe den exakten Tech-Stack, Dependencies, Build-Konfiguration.

2. Router-Typ identifizieren: Existiert app/ (App Router) oder pages/ (Pages Router)? Oder beides? Dies bestimmt ALLE folgenden Entscheidungen.

3. Komponentenbaum kartieren: Beginne beim Root-Layout (app/layout.tsx oder pages/_app.tsx). Kartiere JEDE verschachtelte Layout-Datei, jede Page, jede importierte Komponente. Erfasse:
   - Welche HTML-Elemente rendert jede Komponente?
   - Server Component oder Client Component ('use client')?
   - Welche ARIA-Attribute existieren bereits?
   - Wo werden generische divs statt semantischer Elemente verwendet?

4. Überschriften-Hierarchie pro Route: Erstelle für JEDE Route einen Outline-Baum. Markiere Lücken (h1 → h3 ohne h2) und Duplikate.

5. Landmark-Regions inventarisieren: Hat jede Seite header, nav (mit aria-label), main, footer? Wo fehlen sie?

6. Bestehende SEO-Infrastruktur dokumentieren:
   - Existiert generateMetadata()? In welchen Dateien?
   - Gibt es JSON-LD Schemas? Welche Typen?
   - Existiert robots.ts/txt? sitemap.ts/xml?
   - Wie werden title und meta aktuell gesetzt?

7. DOM-Redundanzen zählen: Identifiziere überflüssige Wrapper-divs. Ziel: DOM-Tiefe <15, Knoten <1500 pro Route.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter den passenden Sektionen.

═══════════════════════════════════════════════════════════════════════════════
UNIVERSELLE SICHERHEITSREGELN FÜR ALLE TASKS
═══════════════════════════════════════════════════════════════════════════════

1. Niemals blind überschreiben. Wenn eine Datei existiert, LIES sie zuerst. Verstehe ihre Logik.
2. Abwärtskompatibilität ist Gesetz. Jede Änderung harmoniert mit bestehendem Code. Keine Breaking Changes.
3. Ein Task, ein Commit. Nach jedem Task: npm run build && npm run lint && npx tsc --noEmit. Fehler? STOPP & Fix.
4. Bestehende Business-Logik NIEMALS entfernen. Unklar? Dokumentiere als Frage im Kontext-Dokument.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — SEMANTISCHE KOMPONENTENARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: GLOBALE DOM-HIERARCHIE-ANALYSE UND KOMPONENTENPLAN

Schritt 1.1 — Server vs. Client Components kartieren:
In Next.js App Router ist die Unterscheidung fundamental:
- Server Components (default): Rendern HTML auf dem Server, kein Client-JS
- Client Components ('use client'): useState, useEffect, onClick, Browser-APIs

Semantische HTML-Struktur primär in Server Components — sie erzeugen das initiale HTML für Suchmaschinen und Screenreader.

Schritt 1.2 — Überschriften-Hierarchie über Layout-Grenzen validieren:
Bei verschachtelten Layouts (app/layout.tsx → app/services/layout.tsx → app/services/seo/page.tsx) muss die Heading-Kaskade über ALLE Layout-Ebenen konsistent sein.

Schritt 1.3 — Landmark-Regions-Inventar:
Jede gerenderte Seite MUSS aufweisen:
- Genau ein <header>
- Mindestens ein <nav> mit aria-label
- Genau ein <main> mit id="main-content"
- Genau ein <footer>

Schritt 1.4 — Redundanz-Analyse:
DOM-Knoten zählen. Überflüssige Wrapper-divs identifizieren. Ziel: DOM-Tiefe <15, Knoten <1500.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: SEMANTISCHE LAYOUT-KOMPONENTEN IMPLEMENTIEREN ODER VERIFIZIEREN

CHIRURGISCHE ANWEISUNG: Prüfe ZUERST ob diese Komponenten bereits existieren. Wenn ja: Verbessere. Wenn nein: Erstelle. Überschreibe NIEMALS eine bestehende, funktionierende Komponente blind.

Schritt 2.1 — Root-Layout als semantisches Gerüst:
app/layout.tsx muss rendern:
1. <SkipNav /> als allererstes im <body>
2. <Header /> → semantisches <header>
3. <main id="main-content">{children}</main>
4. <Footer /> → semantisches <footer>

Zwischen <header> und <main> kein semantisch bedeutungsloses div.

Schritt 2.2 — Header-Komponente:
- Semantisches <header>
- Logo als Next.js <Link> mit alt "[Markenname] — Zur Startseite"
- Hauptnavigation in <nav aria-label="Hauptnavigation">
- Navigation-Links als Next.js <Link>
- Mobile-Menü als Client Component mit aria-expanded, Fokus-Management

Schritt 2.3 — Footer-Komponente:
- Semantisches <footer>
- Sekundäre Navigation: <nav aria-label="Footer-Navigation">
- Kontaktinfos in <address>
- Rechtliche Links: <nav aria-label="Rechtliche Informationen">
- Social-Media: <nav aria-label="Soziale Medien">

Schritt 2.4 — SkipNav-Komponente:
Visuell versteckt, bei Tastaturfokus sichtbar. Verweist auf #main-content. Text: "Zum Hauptinhalt springen".

Schritt 2.5 — Breadcrumbs-Komponente:
<nav aria-label="Navigationspfad"> mit <ol> > <li>. Aktuelle Seite: aria-current="page", NICHT verlinkt.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SEKTIONEN-ARCHITEKTUR UND ÜBERSCHRIFTEN-HIERARCHIE

Schritt 3.1 — Section-Wrapper-Komponente:
Falls nicht vorhanden: <Section /> mit Props id, ariaLabel/ariaLabelledBy, className, children. Rendert <section>. Jede <section> MUSS identifizierbar sein.

Schritt 3.2 — Überschriften-Hierarchie reparieren:
JEDE Route: Genau eine <h1>. Keine Sprünge (kein h3 ohne h2). Layouts und Pages spielen zusammen.

Schritt 3.3 — Semantische Content-Komponenten:
- <Article /> → <article> (Blog-Posts, Testimonials, Service-Karten)
- <Aside /> → <aside> mit aria-label
- <Figure /> → <figure> + <figcaption>

Schritt 3.4 — Listen-Semantik:
- Navigation: <ul> > <li> in <nav>
- Feature-Listen: <ul> > <li>
- Schritte: <ol> > <li>
- Keine div-Ketten die visuell wie Listen aussehen

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — FORMULARE, INTERAKTION & DOM-QUALITÄT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: FORMULARE UND INTERAKTIVE ELEMENTE

Schritt 4.1 — Formular-Architektur verifizieren:
Prüfe ALLE bestehenden Formulare:
- Sichtbares <label> verknüpft über htmlFor/id
- Input mit spezifischstem type (email, tel, url, search)
- Hilfetext via aria-describedby
- Fehlermeldung mit role="alert" und aria-describedby
- required + aria-required="true" bei Pflichtfeldern
- Korrekte autocomplete-Attribute

Schritt 4.2 — Button-Semantik:
- <button> für Aktionen
- Next.js <Link> für Navigation
- Icon-Buttons: aria-label
- Toggle-Buttons: aria-pressed
- Menü-Buttons: aria-expanded + aria-haspopup

Schritt 4.3 — Live-Regionen:
- Formular-Fehlermeldungen: role="alert"
- Toast-Benachrichtigungen: role="alert"
- Lade-Indikatoren: aria-live="polite"

Schritt 4.4 — Route-Change-Announcement:
<RouteAnnouncer /> lauscht auf usePathname()-Änderungen, aktualisiert visuell verstecktes aria-live="assertive" Element.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: DOM-BEREINIGUNG

Schritt 5.1 — React-Fragmente statt Wrapper-divs:
Jeder div ohne Styling-Zweck und semantische Bedeutung → ersetze durch <></>.

Schritt 5.2 — Component Composition:
Keine Komponente >5 DOM-Ebenen allein.

Schritt 5.3 — TypeScript Strict Mode verifizieren:
- tsconfig.json: strict: true
- Keine any Types in Komponenten-Props
- Alle Event-Handler korrekt typisiert

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — SEO-INFRASTRUKTUR & STRUCTURED DATA
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: NEXT.JS METADATA API UND SEO

Schritt 6.1 — Root-Metadata:
Im Root-Layout metadata/generateMetadata() mit:
- title (Template-Pattern: { default: '[Marke]', template: '%s | [Marke]' })
- description, metadataBase (kanonische Domain)
- openGraph (Type, Locale, Sitename, Default-Image)
- twitter (Card-Type, Site, Creator)
- robots (index, follow)
- alternates.canonical
- viewport (width=device-width, initial-scale=1) — OHNE maximum-scale=1 oder user-scalable=no

Schritt 6.2 — Route-spezifische Metadata:
JEDE page.tsx: Individueller Title (≤60 Zeichen), Description (≤155 Zeichen), OG-Tags, kanonische URL.

Schritt 6.3 — Dynamische Routen:
Falls [slug] existiert: generateMetadata() liest Slug-Daten und generiert individuelle Metadata.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: STRUCTURED DATA (JSON-LD)

Schritt 7.1 — JSON-LD Helper-Komponente:
<JsonLd /> als Server Component. Akzeptiert typisiertes Schema-Objekt, rendert <script type="application/ld+json">.

Schritt 7.2 — Schemas implementieren:
- Organization (Root-Layout): Name, URL, Logo, Kontakt, Social-Links
- WebSite (Root-Layout): Name, URL, Search-Action
- LocalBusiness (falls lokal): Adresse, Öffnungszeiten, Geo
- BreadcrumbList (Unterseiten): Automatisch aus Pfad
- FAQPage (FAQ-Seiten): Fragen und Antworten
- BlogPosting (Blog-Einzelseiten): Titel, Autor, Datum, Bild
- Service (Service-Seiten): Name, Beschreibung, Provider

Schritt 7.3 — Schema-Validierung:
JEDES Schema im Google Rich Results Test: 0 Fehler, 0 Warnungen.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: ROBOTS, SITEMAP UND TECHNISCHES SEO

Schritt 8.1 — robots.ts:
app/robots.ts mit rules (userAgent *, allow /, disallow /api/ /dev/), sitemap-URL.

Schritt 8.2 — sitemap.ts:
app/sitemap.ts mit ALLEN öffentlichen Routen, lastModified, changeFrequency, priority. Dynamische [slug]-Routen eingeschlossen.

Schritt 8.3 — Technisches SEO:
- Kanonische URLs auf jeder Seite
- Keine Soft-404s
- lang="de" auf <html>
- Keine blockierenden Ressourcen im <head>

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 1 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 9.1 — .ai-architectural-context.md DRASTISCH erweitern:
Es gibt KEIN Zeilenlimit. Schreibe ALLES auf:
- Architektur-Übersicht: Router-Typ, Verzeichnisstruktur, Rendering-Strategie
- Komponenten-Map: JEDE Komponente, Pfad, Funktion, Server/Client
- Bestehende Patterns: Datenladung, State-Management, UI-Bibliotheken
- SEO-Infrastruktur: Metadata, Schemas, Lücken
- Gelöste Probleme und offene Fragen
- Architektur-Entscheidungen mit Begründung

Schritt 9.2 — .upgrade-state.md finalisieren:
Alle Tasks abhaken. Nicht-abgeschlossene Tasks begründen.

Schritt 9.3 — Handoff an Phase 2:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 5 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — - Bestehende Styling-Patterns: [Liste]
    — - CSS-Architektur (Tailwind/Modules/Custom Properties): [Details]
    — - Potenzielle Konflikte bei Token-Einführung: [Liste]
    — - Komponenten die gestyled werden müssen: [Pfade]


═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 1
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ JEDE Route rendert korrekt
□ Navigation funktioniert
□ Formulare sind nutzbar
□ header → nav → main → footer auf jeder Seite
□ Überschriften-Hierarchie lückenlos auf jeder Route
□ Landmark-Regions komplett
□ Alt-Texte auf allen Bildern
□ Metadata auf jeder Route individuell
□ JSON-LD validiert im Rich Results Test
□ robots.txt und sitemap.xml korrekt generiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist umfassend befüllt
□ .upgrade-state.md ist aktuell mit Handoff an Phase 2


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: CORE ARCHITECTURE PATTERNS (100K-WERT-GARANTIE)
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-01: INCREMENTAL STATIC REGENERATION (ISR)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Statische Seiten mit dynamischer Frische. Beste Performance + SEO.
  PFLICHT-IMPLEMENTIERUNG:
    Jede Seite die keine Echtzeit-Daten braucht MUSS statisch generiert werden.
    Revalidierung ueber on-demand Revalidation (revalidatePath / revalidateTag).
    KEIN Polling, KEIN Client-Side-Fetching fuer statische Inhalte.

  IMPLEMENTATION-PATTERN:
    export const revalidate = 3600; // 1 Stunde
    Alternativ kann die Revalidierung auch bedarfsgesteuert durch eine dedizierte API-Route erfolgen. Diese Route empfaengt eine Anfrage und fuehrt die Revalidierung eines spezifizierten Pfads durch. Sie gibt dann eine bestaetigung als JSON-Antwort an den Client zurueck.

  VALIDIERUNG:
    [ ] Jede statische Route hat expliziten revalidate-Wert
    [ ] On-demand Revalidation fuer Content-Updates konfiguriert
    [ ] Build-Output zeigt SSG-Routen (nicht SSR) fuer statische Seiten

CHEATCODE CC-02: STREAMING SSR MIT REACT SUSPENSE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Sofortige Shell-Darstellung, Daten streamen progressiv ein.
  PFLICHT-IMPLEMENTIERUNG:
    Jede Route mit Daten-Fetching MUSS loading.tsx haben.
    Schwere Komponenten in Suspense Boundaries wrappen.
    Server Components als Default — Client Components NUR fuer Interaktivitaet.

  ARCHITEKTUR-PATTERN:
    Die Architektur sieht vor, dass Seiten als Server Components implementiert werden. Fuer optimale Ladezeiten wird fuer jede Route eine Loading-Komponente mit Skeleton-Inhalten bereitgestellt. Besonders datenintensive Sektionen werden mit React Suspense umhüllt, um incremental zu rendern und schneller erste Inhalte anzuzeigen.

  KRITISCHE REGELN:
    NIEMALS eine Route OHNE loading.tsx deployen.
    NIEMALS await in der Root-Page wenn Suspense moeglich ist.
    JEDE Suspense-Boundary braucht einen GESTALTETEN Skeleton (kein Spinner).

CHEATCODE CC-03: PREFETCHING-STRATEGIE (NAVIGATION OHNE LATENZ)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Null-Latenz-Navigation. Der User merkt keinen Seitenuebergang.
  PFLICHT-IMPLEMENTIERUNG:
    Next.js Link-Prefetching: Standard-Verhalten beibehalten (prefetch={true}).
    DNS-Prefetch fuer externe Domains (Fonts, CDN, API).
    Preconnect fuer kritische Third-Party-Origins.

  HEAD-INJEKTIONEN (layout.tsx oder metadata):
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://formspree.io" />
    <link rel="preconnect" href="https://calendly.com" />

  VALIDIERUNG:
    [ ] Alle internen Links nutzen next/link (KEIN <a href>)
    [ ] DNS-Prefetch fuer jede externe Domain konfiguriert
    [ ] Preconnect fuer Fonts und kritische Services aktiv
    [ ] Navigation fuehlt sich instant an (< 100ms wahrgenommen)

CHEATCODE CC-04: ENVIRONMENT-CONFIG-HIERARCHIE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Professionelle Trennung von Dev/Staging/Production.
  PFLICHT-IMPLEMENTIERUNG:
    .env.local (lokale Overrides, NIEMALS committen)
    .env.development (Dev-spezifisch)
    .env.production (Prod-spezifisch)
    .env (Shared Defaults)

  TYPISIERTES CONFIG-PATTERN:
    Alle Umgebungsvariablen und Konfigurationswerte werden in einer zentralisierten Konfigurationsdatei gesammelt. Diese Datei exportiert ein unveraenderbares Konfigurationsobjekt mit allen erforderlichen Einstellungen: Basis-URL der Seite, Formspree-ID fuer die Integration des Kontaktformulars, Calendly-URL fuer Terminbuchungen und ein Kennzeichen zur Unterscheidung zwischen Produktions- und Entwicklungsumgebung.

  SICHERHEITSREGEL:
    Sensible Werte NIEMALS mit NEXT_PUBLIC_ prefixen.
    Build schlaegt fehl wenn PFLICHT-Variablen fehlen (Zod-Validierung im Config).


═══ CHAIN-EXIT-FOOTER ═══ SEQ-21 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — NEXT.JS CORE ARCHITEKTUR (AUS DOC 03/13)
═══════════════════════════════════════════════════════════════════════════════

SERVER-FIRST RENDERING PARADIGMA:
  Next.js App Router: Server Components als Default. "use client" NUR bei Interaktivitaet.
  Progressive Enhancement: Website MUSS mit deaktiviertem JavaScript funktionieren (SSR/SSG).
  Performance Budget: Lighthouse >= 90 in allen Kategorien.

PROJEKT-STRUKTUR-KONVENTION:
  src/app/              -> Pages & Layouts (App Router)
  src/components/ui/    -> Primitive Komponenten (Button, Input, Card, Modal)
  src/components/layout/ -> Strukturelle (Header, Footer, Sidebar, Container)
  src/components/sections/ -> Page Sections (Hero, Features, Pricing, FAQ)
  src/lib/              -> Utilities, Constants, Helpers (cn(), formatters)
  src/hooks/            -> Custom React Hooks
  src/types/            -> TypeScript Type Definitions
  tailwind.config.ts    -> Design Token Definitionen

SERVER VS CLIENT COMPONENTS:
  Server Component: Direktes async/await Data Fetching, KEINE Event Handlers, KEIN State.
  Client Component: Event Handlers, useState/useEffect, Browser APIs (window, localStorage).
  Kompositions-Pattern: <ServerComponent> -> <ClientInteractiveChild />

STATE MANAGEMENT:
  URL State:     searchParams, useRouter (filterbar, teilbar).
  Local UI:      useState/useReducer (komponentengebunden).
  Global Client: Zustand/Jotai (Theme, Sidebar, Toast).
  Server State:  React Query (async Data mit Background Refresh).

PERFORMANCE BEST PRACTICES:
  Code Splitting: Automatisch per Route. dynamic() fuer schwere Client-Komponenten.
  Streaming SSR:  <Suspense> mit Skeleton-Fallbacks fuer langsame Server-Komponenten.
  Static Gen:     generateStaticParams() fuer bekannte dynamische Routen.
  Bundle Analysis: ANALYZE=true next build mit @next/bundle-analyzer.
  Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1.

CN() UTILITY (PFLICHT IN JEDEM PROJEKT):
  import { clsx, type ClassValue } from "clsx"
  import { twMerge } from "tailwind-merge"
  export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-11 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-12)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-22 → ZERO-BREAKAGE-PHASE-02.md
   → Lese ZERO-BREAKAGE-PHASE-02.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-12


4. KNOWLEDGE-BASE UPDATE (PFLICHT):
   [ ] .project-knowledge-base.md → Neues Wissen aus dieser Phase extrahieren
   [ ] Architektur-Entscheidungen mit Begruendung dokumentieren
   [ ] Entdeckte Gotchas in [SECTION:GOTCHAS] eintragen
   [ ] [SECTION:CHANGELOG] mit Phase-Eintrag ergaenzen

5. SELF-OPTIMIZATION CHECK:
   [ ] Alle neuen Dateien klar und sprechend benannt
   [ ] Alle exportierten Funktionen/Komponenten haben JSDoc
   [ ] Neue Komponenten folgen dem etablierten Muster
   [ ] Code ist fuer einen LLM beim ERSTEN Lesen sofort verstaendlich
   [ ] Keine Magic Numbers ohne benannte Konstante
   [ ] Falls NEIN bei einem Punkt → Refactor BEVOR die Phase als abgeschlossen gilt

═══ PHASE SEQ-11 → SEQ-12: HANDOFF AKTIV ═══
