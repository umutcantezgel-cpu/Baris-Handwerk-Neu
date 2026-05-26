Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, auf Basis der in SEQ-57 erstellten Entity-Map ein vollstaendiges Schema.org/JSON-LD-System zu implementieren, das alle identifizierten Entitaeten maschinenlesbar annotiert und fuer Google Rich Results, AI Overviews und Knowledge Graph optimiert. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schema-Definitionen, Validierungskriterien und Test-Methoden.

=== CHAIN-LINK-HEADER === SEQ-58 von 72 === Pipeline: AI-Discovery ===
<- VORHERIGE: SEQ-57 -> AI-DISCOVERY-PHASE-01.md
-> NAECHSTE: SEQ-59 -> AI-DISCOVERY-PHASE-03.md
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
3. .ai-discovery-context.md (Entity-Map aus SEQ-57)
4. .ai-design-context.md (Brand-Informationen)
5. Alle Page- und Layout-Dateien im Projekt (SSOT)

===============================================================================
ULTRATHINK-LANGZEITTASK A: JSON-LD ARCHITEKTUR
===============================================================================

A.1) SCHEMA-STRATEGIE DEFINIEREN:
     Bestimme die optimale JSON-LD-Injektionsmethode fuer das Projekt:

     OPTION 1 (Next.js App Router):
       Verwende <script type="application/ld+json"> in layout.tsx/page.tsx.
       Erstelle eine zentrale generateJsonLd()-Utility-Funktion.
       TypeScript-Typisierung fuer alle Schema-Objekte.

     OPTION 2 (Next.js Pages Router):
       Verwende next/head oder _document.tsx.
       Zentrale Schema-Generierung in lib/schema.ts.

     OPTION 3 (Anderes Framework):
       Passe die Injektionsmethode an das erkannte Framework an.
       Dokumentiere die Framework-spezifische Loesung.

     FUER ALLE OPTIONEN GILT:
       EINE zentrale Datei fuer Schema-Definitionen (z.B. lib/schema.ts).
       TypeScript-Interfaces fuer JEDES Schema-Objekt.
       Wiederverwendbare Generierungs-Funktionen.
       KEINE hartcodierten Werte — alles aus der Entity-Map oder CMS.

A.2) ORGANISATION-SCHEMA IMPLEMENTIEREN:
     Schema-Typ: Organization (oder LocalBusiness falls passend).
     PFLICHT-PROPERTIES:
       @type, name, url, logo, description
       address (PostalAddress), telephone, email
       sameAs (Array aller Social-Media-URLs)
       foundingDate, numberOfEmployees (falls bekannt)
     OPTIONAL (falls Daten vorhanden):
       openingHoursSpecification
       areaServed, priceRange
       aggregateRating

     IMPLEMENTIERUNG:
       Erstelle generateOrganizationSchema(): WithContext<Organization>.
       Injiziere in das Root-Layout (global auf allen Seiten sichtbar).
       Validiere mit schema-dts TypeScript-Typen.

A.3) WEBSITE-SCHEMA IMPLEMENTIEREN:
     Schema-Typ: WebSite.
     PFLICHT-PROPERTIES:
       @type: "WebSite"
       name, url, description
       publisher (Referenz auf Organization)
       potentialAction: SearchAction (falls Suchfunktion vorhanden)
     Injiziere in das Root-Layout zusammen mit Organization.

A.4) BREADCRUMB-SCHEMA IMPLEMENTIEREN:
     Schema-Typ: BreadcrumbList.
     Erstelle eine dynamische generateBreadcrumbSchema()-Funktion:
       Liest die aktuelle Route und generiert die Breadcrumb-Kette.
       Jedes itemListElement hat position, name, item (URL).
       Root ist immer die Startseite.
     Injiziere auf JEDER Seite ausser der Startseite.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK B: SEITEN-SPEZIFISCHE SCHEMAS
───────────────────────────────────────────────────────────────────────────────

B.1) SERVICE-SEITEN ANNOTIEREN:
     Schema-Typ: Service oder Product.
     Fuer JEDE Service-Seite:
       name, description, provider (Ref Organization)
       serviceType, areaServed
       offers (falls Preise vorhanden): Offer mit price, priceCurrency
     Erstelle generateServiceSchema(service: ServiceEntity): WithContext<Service>.

B.2) BLOG-BEITRAEGE ANNOTIEREN:
     Schema-Typ: Article oder BlogPosting.
     Fuer JEDEN Blog-Beitrag:
       headline, description, datePublished, dateModified
       author (Person-Schema mit name, url)
       publisher (Ref Organization mit logo)
       image (ImageObject mit url, width, height)
       mainEntityOfPage
     Erstelle generateArticleSchema(article: ContentEntity): WithContext<Article>.

B.3) FAQ-SEITEN ANNOTIEREN:
     Schema-Typ: FAQPage.
     Fuer JEDE FAQ-Sektion:
       mainEntity: Array von Question-Objekten
       Jede Question hat name und acceptedAnswer (Answer mit text)
     WICHTIG: FAQPage-Schema NUR auf Seiten, die tatsaechlich FAQ-Inhalte zeigen.
     NICHT auf Seiten verwenden, die keine Frage-Antwort-Struktur haben.
     Erstelle generateFAQSchema(faqs: FAQEntity[]): WithContext<FAQPage>.

B.4) TEAM-/UEBER-UNS-SEITEN ANNOTIEREN:
     Schema-Typ: AboutPage + Person.
     Fuer JEDES Team-Mitglied:
       @type: "Person"
       name, jobTitle, description, image
       worksFor (Ref Organization)
       sameAs (Social-Media-Profile)
     Erstelle generatePersonSchema(person: PersonEntity): WithContext<Person>.

B.5) KONTAKT-SEITE ANNOTIEREN:
     Schema-Typ: ContactPage.
     Verknuepfe mit Organization-Schema.
     Falls Kontaktformular vorhanden: potentialAction mit CommunicateAction.

B.6) REFERENZEN / CASE STUDIES ANNOTIEREN:
     Schema-Typ: CreativeWork oder Review.
     Fuer JEDE Referenz:
       name, description, datePublished
       author (Kunde/Auftraggeber)
       about (Ref Service)
     Falls Bewertungen: AggregateRating auf der Uebersichtsseite.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-LANGZEITTASK C: VALIDATION & RICH-RESULT-OPTIMIERUNG
───────────────────────────────────────────────────────────────────────────────

C.1) SCHEMA-VALIDATION DURCHFUEHREN:
     Teste JEDES Schema-Objekt mit folgenden Methoden:
       TypeScript-Kompilierung: npx tsc --noEmit (Zero Errors).
       JSON-LD-Syntax: Validiere die generierte JSON-Ausgabe.
       Schema.org-Konformitaet: Pruefe gegen schema.org/docs/schemas.html.
       Google Rich Results Test: Dokumentiere erwartete Rich-Result-Typen.

C.2) RICH-RESULT-EIGNUNG PRUEFEN:
     Dokumentiere fuer jede Seite, welche Rich Results moeglich sind:
       Organization: Knowledge Panel
       BreadcrumbList: Breadcrumb-Anzeige in SERPs
       FAQPage: FAQ-Dropdown in SERPs
       Article: Article-Karussell, Google Discover
       Service/Product: Service-Snippets
       Person: People Also Ask, Knowledge Panel

C.3) SCHEMA-GRAPH VERKNUEPFEN:
     Stelle sicher, dass alle Schema-Objekte korrekt verknuepft sind:
       Organization ist publisher in Article-Schemas.
       Person hat worksFor-Referenz auf Organization.
       Service hat provider-Referenz auf Organization.
       Alle @id-Referenzen sind konsistent und aufloesbar.
     Verwende @graph-Pattern falls mehrere Schemas auf einer Seite.

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
[ ] Organization-Schema auf allen Seiten praesent
[ ] BreadcrumbList-Schema auf allen Unterseiten
[ ] Seiten-spezifische Schemas korrekt implementiert
[ ] Alle @id-Referenzen konsistent
[ ] JSON-LD-Syntax fehlerfrei (kein ungueliges JSON)
[ ] Kein visueller Regressionsbruch

===============================================================================
EXIT-PROTOKOLL
===============================================================================
1. Aktualisiere .ai-discovery-context.md:
     JSON-LD-STATUS: IMPLEMENTIERT
     SCHEMA-TYPEN: [Liste aller implementierten Schema-Typen]
     RICH-RESULT-EIGNUNG: [Dokumentation pro Seite]
     SCHEMA-GRAPH-STATUS: VERKNUEPFT
     OFFENE-PUNKTE: [Liste falls vorhanden]

2. Aktualisiere .pipeline-master-state.md:
     SEQ-58: ABGESCHLOSSEN
     SEQ-59: IN_PROGRESS


═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: RICH SNIPPETS & ADVANCED STRUCTURED DATA
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-30: MAXIMALE SERP-REAL-ESTATE (RICH SNIPPETS CHEATSHEET)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Rich Snippets erhoehen CTR um 20-40%. Mehr SERP-Platz = mehr Klicks.
  PFLICHT-SCHEMA-TYPEN PRO SEITENTYP:

    HOMEPAGE:
      Organization (Name, Logo, URL, Social-Links)
      WebSite (SearchAction fuer Sitelinks-Searchbox)
      BreadcrumbList (Root-Breadcrumb)

    SERVICE-SEITEN:
      Service (Name, Description, Provider, AreaServed)
      FAQPage (Haeufige Fragen zum Service)
      BreadcrumbList (Home → Services → [Service])

    BLOG/ARTIKEL:
      Article (Headline, Author, DatePublished, DateModified, Image)
      BreadcrumbList (Home → Blog → [Artikel])
      Person (Author-Schema verknuepft)

    KONTAKT-SEITE:
      LocalBusiness oder Organization (Adresse, Telefon, Oeffnungszeiten)
      ContactPage (Typ-Markierung)
      BreadcrumbList

    ABOUT-SEITE:
      AboutPage (Typ-Markierung)
      Person ODER Organization (Team/Gruender-Details)
      BreadcrumbList

    FAQ-SEITE:
      FAQPage (ALLE Fragen als Question/Answer-Paare)
      BreadcrumbList

  VALIDIERUNG:
    [ ] Jede Seite hat mindestens 2 Schema-Typen
    [ ] Google Rich Results Test besteht fuer jede Seite
    [ ] Keine Schema-Warnungen oder Fehler
    [ ] BreadcrumbList auf JEDER Unterseite (nicht nur Homepage)

CHEATCODE CC-31: OG-IMAGE-GENERIERUNG (AUTOMATISCHE SOCIAL CARDS)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Geteilte Links auf Social Media brauchen ansprechende Preview-Bilder.
  PFLICHT-IMPLEMENTIERUNG:
    Statische OG-Images fuer Hauptseiten (1200x630px).
    Dynamische OG-Images fuer Blog-Posts via next/og (NATIV in Next.js, KEIN externes Paket).
    Fallback-OG-Image fuer Seiten ohne spezifisches Bild.

  HINWEIS: ImageResponse ist seit Next.js 14 nativ unter 'next/og' verfuegbar.
  KEIN npm install noetig. KEIN @vercel/og. KEIN Satori separat.

  METADATA-INTEGRATION:
    Die Metadaten werden mit der Next.js Metadata API definiert. Für Social-Media-Sharing wird Open-Graph konfiguriert und eine dynamische OG-Image-URL mit Seitentitel als Query-Parameter bereitgestellt. Die Bildabmessungen müssen genau 1200 x 630 Pixel betragen. Twitter wird mit der Vorschlag eines Large-Image-Cards konfiguriert, damit geteilte Links optimal dargestellt werden.

=== CHAIN-EXIT-FOOTER === SEQ-58 ABGESCHLOSSEN ===
-> NAECHSTE PHASE: SEQ-59 -> AI-DISCOVERY-PHASE-03.md (AI-Crawler Accessibility)
-> AUTO-TRIGGER: Lade SOFORT das naechste Phasen-Dokument (DOMINO-EFFEKT).
===============================================================================
