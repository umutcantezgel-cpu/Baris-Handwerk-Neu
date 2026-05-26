Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 8 der Expansion-Pipeline (Navigation und Internal Linking) als lueckenloses Navigationsnetz zu implementieren. Jeder Link muss bidirektional verifiziert, SEO-optimiert und barrierefrei navigierbar sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-18 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-17 → EXPANSION-PHASE-07.md
→ NÄCHSTE: SEQ-19 → EXPANSION-PHASE-09.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══

Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, jede einzelne der alle bestehenden Routen (Anzahl ergibt sich aus dem Code) zum SEO-Magneten zu machen. Echte Next.js generateMetadata Funktionen, echte JSON-LD Structured Data für Organization, BreadcrumbList, Service, Article, FAQ und LocalBusiness, eine dynamische sitemap.ts und robots.ts — alles programmatisch aus Phase-2 Daten generiert. Dies ist Expansion-Phase 8 von 10 der 10X Foundation Expansion Pipeline.

Phase 8 macht ALLE Routen zum SEO-Magneten. Analysiere den bestehenden Code auf:
- Welche Routen existieren bereits? (Aus App-Struktur, nicht Vorgabe)
- Existieren bereits Metadata-Funktionen oder generateMetadata?
- Existieren bereits JSON-LD oder sitemap/robots-Dateien?

Für JEDE gefundene Route: Implementiere echte generateMetadata. Für JEDE geplante Seite: Generiere Metadata programmatisch aus Phase-2 Daten. Verwende AUSSCHLIESSLICH Werte, die bereits im Code oder in den Daten existieren.


═══════════════════════════════════════════════════════════════════════════════
═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══
═══════════════════════════════════════════════════════════════════════════════

Dieser Task-Katalog ist eine tiefgreifende Inventory-Kontrolle. KEIN rollback. KEIN revert. Jeder Schritt:
1. Lies bestehenden Code
2. Erweitere oder erstelle Funktionen
3. Update .ai-expansion-context.md (Lesbarkeit)
4. Schreibe alle neuen Dateien in /lib/seo und /components/seo
5. Integriere in bestehende page.tsx-Dateien ohne zu löschen

Checkpoint nach Task 4, Task 8, Task 11, Task 14.


═══════════════════════════════════════════════════════════════════════════════
═══ STEP 0: SYNC & DISCOVERY (CODE-FIRST) ═══

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

═══════════════════════════════════════════════════════════════════════════

PFLICHT — SEO-INVENTUR:
  → Existiert bereits ein /lib/seo/ Verzeichnis? Existieren Metadata-Utilities?
  → Haben Seiten bereits metadata oder generateMetadata? → ERWEITERN, nicht überschreiben
  → Existiert bereits eine sitemap.ts, robots.ts? → ERWEITERN
  → Existiert bereits JSON-LD irgendwo im Code?
  → INVENTAR: [BESTEHENDE SEO-INFRASTRUKTUR] → [PFAD] → [STATUS]

1. Inventar aller Seiten-Dateien (gemäß Framework-Mapping):
   - Welche Seiten haben BEREITS metadata? → BEHALTEN und ERWEITERN
   - Welche Seiten haben KEINE metadata? → HINZUFÜGEN
   - Fehlende Meta-Tags? Duplikat-Titles? Leere Descriptions?

2. Phase-2 Daten laden (PRÜFE ob Daten-Dateien existieren):
   - services.ts: Service-Titel, Descriptions, Keywords
   - blog.ts: Blog-Titel, Excerpts, Categories
   - case-studies.ts: Case-Study-Titel, Summaries

3. Prüfe Routing-Struktur:
   - Trailing Slash Konsistenz
   - URL-Slug Format (deutsche Umlaut-Konvention: ue statt ü)
   - Kanonische URLs für Duplikate


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK A — METADATA SYSTEM ═══ (Tasks 1-4)
═══════════════════════════════════════════════════════════════════════════════

TASK 1: Metadata-Utility prüfen/erstellen (/lib/seo/metadata.ts)
─────────────────────────────────────────────────────────

PRÜFE: Existiert bereits /lib/seo/metadata.ts oder äquivalent? → Falls JA: ERWEITERN
Falls NEIN: DATEI: /lib/seo/metadata.ts (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN mit dynamischen Werten)

Falls Metadata-Utilities bereits existieren: Erweitere sie um folgende Anforderungen:
- Alle Hart-codierten Werte (Domain, Firmenname, Social Handles) MÜSSEN aus environment variables oder constants kommen
- Nutze process.env.NEXT_PUBLIC_SITE_URL, process.env.NEXT_PUBLIC_SITE_NAME
- Falls nicht vorhanden: Extrahiere aus package.json oder bestehenden Config-Dateien

Beispiel-Struktur (nicht hart-codiert):
- title: `${pageTitle} | ${getCompanyName()}`
- metadataBase: new URL(getBaseUrl())
- Domain: Aus config, nicht hard-codiert als process.env.NEXT_PUBLIC_SITE_URL
- Firmenname: Aus config oder kompiliert


TASK 2: Metadata für bestehende Seiten
──────────────────────────────────────

PRÜFE den Code auf bestehende Routen in /app. Für JEDE existierende page.tsx-Datei:
- Existiert bereits ein metadata export oder generateMetadata?
- Falls NEIN: Ergänze Metadata basierend auf den tatsächlichen Inhalten.
- WICHTIG: Nutze NIEMALS hart-codierte Werte wie process.env.NEXT_PUBLIC_SITE_URL oder 'Firmenname'.
  Stattdessen: Extrahiere diese aus Konfiguration (package.json, environment, constants).

Beispiel-Pattern (nicht hart-codiert):
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My App';

  export const metadata = {
    title: `Page Title | ${siteName}`,
    description: 'Actual page description based on content',
    openGraph: { url: `${siteUrl}/path`, ... }
  };


TASK 3: Dynamische Seiten Metadata
───────────────────────────────────

DATEI: /app/(services)/leistungen/[slug]/page.tsx (generateMetadata)

Die generateMetadata-Funktion ist als Server-seitige asynchrone Funktion zu implementieren. Sie empfängt ein Objekt mit der Eigenschaft params, welche den slug-Parameter der Route beinhaltet. Die Funktion importiert zunächst das generateMetadata-Utility aus '@/lib/seo/metadata' sowie die getAllServices-Funktion aus '@/lib/data/services'.

Der Ablauf ist: Lade alle verfügbaren Services asynchron. Durchsuche das Services-Array nach dem Eintrag, dessen slug-Eigenschaft mit dem params.slug übereinstimmt. Falls kein Service mit diesem Slug gefunden wird, gib ein minimales Fallback-Metadaten-Objekt mit title 'Service nicht gefunden' zurück.

Falls der Service gefunden wurde, rufe das generateServiceMetadata-Utility auf und übergebe ein Objekt mit folgenden Feldern: title (aus service.name), description (aus service.shortDescription), url (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, dem Pfad-Präfix '/leistungen/' und dem service.slug), keywords (entweder aus service.keywords oder fallback auf ein Array mit service.name und dem String 'Service'), ogType (hardcodiert als 'article'). Das Utility gibt das vollständig konfigurierte Metadaten-Objekt zurück.

DATEI: /app/(blog)/blog/[slug]/page.tsx (generateMetadata)

Die generateMetadata-Funktion ist als Server-seitige asynchrone Funktion zu implementieren. Sie empfängt ein Objekt mit der Eigenschaft params, welche den slug-Parameter enthält. Importiere das generateBlogMetadata-Utility aus '@/lib/seo/metadata' sowie getAllBlogPosts aus '@/lib/data/blog'.

Der Ablauf ist: Lade alle Blog-Posts asynchron. Durchsuche das Posts-Array nach einem Eintrag, dessen slug mit params.slug übereinstimmt. Falls kein Post gefunden wird, gib ein Fallback-Objekt mit title 'Artikel nicht gefunden' zurück.

Falls der Post existiert, rufe generateBlogMetadata auf und übergebe: title (aus post.title), description (aus post.excerpt), url (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, '/blog/', post.slug), keywords (entweder post.tags falls vorhanden, ansonsten leeres Array), ogType (auf 'article' gesetzt). Die Funktion gibt das konfigurierte Metadaten-Objekt zurück.

DATEI: /app/(portfolio)/referenzen/[slug]/page.tsx (generateMetadata)

Die generateMetadata-Funktion ist als asynchrone Server-Funktion zu implementieren, die das params-Objekt mit dem slug-Parameter empfängt. Importiere generateCaseMetadata aus '@/lib/seo/metadata' und getAllCaseStudies aus '@/lib/data/case-studies'.

Der Ablauf ist: Lade alle Case Studies asynchron. Durchsuche das Cases-Array nach einem Eintrag, dessen slug-Eigenschaft gleich params.slug ist. Falls keine Case Study gefunden wird, gib ein Fallback-Metadaten-Objekt mit title 'Case Study nicht gefunden' zurück.

Falls die Case Study gefunden wurde, rufe generateCaseMetadata auf und übergebe folgende Felder: title (zusammengesetzt aus caseStudy.clientName, Trennzeichen ' | ' und dem String 'Case Study'), description (aus caseStudy.summary), url (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, '/referenzen/', caseStudy.slug), keywords (entweder caseStudy.tags falls vorhanden, ansonsten Array mit 'Case Study'), ogType (hardcodiert als 'article'). Das Utility gibt das vollständig konfigurierte Metadaten-Objekt zurück.


TASK 4: Metadata Validierung
─────────────────────────────

VALIDATOR-SCRIPT: /scripts/validate-metadata.ts (Checkpoint-Prüfung)

Führe aus: npm run validate-metadata

Prüfpunkte:
- [ ] Keine Duplikat-Titles in der Website
- [ ] Jede Description ist unique
- [ ] Jede Seite hat canonical URL
- [ ] Alle OpenGraph title/description sind nicht leer
- [ ] Alle URLs sind absolute (process.env.NEXT_PUBLIC_SITE_URL)
- [ ] Robots-Meta nur auf Legal-Seiten (noindex)
- [ ] Keywords Array ist nicht leer


CHECKPOINT NACH TASK 4: Alle Static Pages + generateMetadata sind deployed. Keine 404er.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK B — JSON-LD STRUCTURED DATA ═══ (Tasks 5-8)
═══════════════════════════════════════════════════════════════════════════════

TASK 5: JSON-LD Utility prüfen/erstellen (/lib/seo/jsonld.ts)
─────────────────────────────────────────────

PRÜFE: Existiert bereits /lib/seo/jsonld.ts oder äquivalent? → Falls JA: ERWEITERN
Falls NEIN: DATEI: /lib/seo/jsonld.ts

Die createOrganizationSchema-Funktion ist eine exportierte Funktion ohne Parameter, die ein Objekt mit JSON-LD-Struktur für Schema.org Organization zurückgibt. Die Funktion konstruiert ein Objekt mit folgenden Eigenschaften: '@context' (hardcodiert als 'https://schema.org'), '@type' (hardcodiert als 'Organization'), name (aus Firmenkonfiguration oder environment variable), url (aus process.env.NEXT_PUBLIC_SITE_URL), logo (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL und '/logo.png'). Das Objekt enthält zudem ein sameAs-Array mit URLs zu sozialen Profilen (LinkedIn, Twitter etc., die Werte sollten aus Konfiguration kommen). Ein contactPoint-Unterobjekt wird mit '@type' 'ContactPoint', contactType 'Customer Support', email (aus process.env.NEXT_PUBLIC_CONTACT_EMAIL mit Fallback auf 'info@example.com') und telephone (aus Konfiguration) erstellt. Das Objekt wird retourniert.

Die createLocalBusinessSchema-Funktion ist eine exportierte Funktion ohne Parameter, die ein Objekt mit JSON-LD-Struktur für Schema.org LocalBusiness zurückgibt. Das Objekt enthält: '@context' (hardcodiert als 'https://schema.org'), '@type' (hardcodiert als 'LocalBusiness'), name (Firmenname aus Konfiguration), url (aus process.env.NEXT_PUBLIC_SITE_URL), telephone (Firmennummer aus Konfiguration), email (aus process.env.NEXT_PUBLIC_CONTACT_EMAIL mit Fallback auf 'info@example.com'). Ein address-Unterobjekt wird mit '@type' 'PostalAddress' erstellt, welches folgende Felder enthält: streetAddress (Straßenaddresse aus Konfiguration), addressLocality (Stadt aus Konfiguration), postalCode (Postleitzahl aus Konfiguration), addressCountry (Ländercode, normalerweise 'DE' oder aus Konfiguration). Das Objekt wird retourniert.

Die createBreadcrumbSchema-Funktion ist eine exportierte Funktion, die ein Array von Breadcrumb-Objekten als Parameter empfängt. Jedes Objekt in diesem Array hat die Struktur { name: string; url: string }. Die Funktion gibt ein JSON-LD-Objekt mit '@context' 'https://schema.org' und '@type' 'BreadcrumbList' zurück. Das Objekt enthält ein itemListElement-Feld, welches durch map-Iteration über das breadcrumbs-Array erstellt wird. Für jedes Item wird mit indexOf ein Objekt mit '@type' 'ListItem', position (Index plus 1), name (aus item.name), und item (aus item.url) erstellt. Alle Elemente werden in einem Array gesammelt und als itemListElement-Eigenschaft zurückgegeben.

Die createServiceSchema-Funktion ist eine exportierte Funktion, die ein Objekt mit den Eigenschaften name (string), description (string) und url (string) als Parameter empfängt. Die Funktion gibt ein JSON-LD-Objekt mit '@context' 'https://schema.org' und '@type' 'Service' zurück. Das Objekt enthält die Felder name (aus service.name), description (aus service.description) und url (aus service.url),
    sowie ein provider-Unterobjekt mit '@type' 'Organization' und name aus Konfiguration.

Die createArticleSchema-Funktion ist eine exportierte Funktion, die ein Objekt als Parameter empfängt mit den erforderlichen Eigenschaften headline (string), description (string), datePublished (string im ISO-Format), url (string), sowie optionalen Eigenschaften dateModified (string) und author (string). Die Funktion gibt ein JSON-LD-Objekt mit '@context' 'https://schema.org' und '@type' 'Article' zurück. Das Objekt enthält: headline (aus article.headline), description (aus article.description), datePublished (aus article.datePublished), dateModified (aus article.dateModified falls vorhanden, sonst fallback auf article.datePublished), url (aus article.url). Das author-Feld wird als Unterobjekt mit '@type' 'Person' und name (aus article.author falls vorhanden, ansonsten String 'Autor') erstellt. Das publisher-Feld wird als Unterobjekt mit '@type' 'Organization' und name aus Konfiguration erstellt.

Die createFAQSchema-Funktion ist eine exportierte Funktion, die ein Array von FAQ-Objekten als Parameter empfängt. Jedes Objekt hat die Struktur { question: string; answer: string }. Die Funktion gibt ein JSON-LD-Objekt mit '@context' 'https://schema.org' und '@type' 'FAQPage' zurück. Das mainEntity-Feld wird durch map-Iteration über das faqs-Array erstellt: Für jedes Item wird ein Objekt mit '@type' 'Question', name (aus item.question) und acceptedAnswer (ein Unterobjekt mit '@type' 'Answer' und text aus item.answer) erzeugt. Alle Question-Objekte werden in einem Array gesammelt.

Die createWebsiteSchema-Funktion ist eine exportierte Funktion ohne Parameter, die ein JSON-LD-Objekt mit '@context' 'https://schema.org' und '@type' 'WebSite' zurückgibt. Das Objekt enthält: name (Firmenname aus Konfiguration), url (aus process.env.NEXT_PUBLIC_SITE_URL). Ein searchAction-Unterobjekt wird mit '@type' 'SearchAction' erstellt, welches ein target-Feld (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, '/search?q={search_term_string}') und query_input (hardcodiert als 'required name=search_term_string') enthält.


TASK 6: JSON-LD Server Component (/components/seo/JsonLd.tsx)
─────────────────────────────────────────────────────────────

DATEI: /components/seo/JsonLd.tsx

Die JsonLd-Komponente ist eine React-Komponente (Server Component), die ein Schript-Element mit JSON-LD-Daten in den Dokumentenkopf einfügt. Die Komponente exportiert zunächst ein TypeScript-Interface JsonLdProps mit einer data-Eigenschaft vom Typ Record<string, any>, welche beliebige JSON-LD-Objekte akzeptiert. Die JsonLd-Funktion ist die Standard-Export-Komponente, die das JsonLdProps-Interface als Parameter destructured empfängt. Sie gibt ein script-Element zurück mit type-Attribut 'application/ld+json'. Das dangerouslySetInnerHTML-Objekt wird mit __html gesetzt, welches das data-Objekt mittels JSON.stringify() in einen String konvertiert. Dies ermöglicht die sichere Einbettung von strukturierten Daten.


TASK 7: JSON-LD auf allen Seiten
─────────────────────────────────

DATEI: /app/page.tsx (Homepage)

Die Home-Komponente ist die Default-Export-Komponente für die Startseite. Sie importiert die JsonLd-Komponente aus '@/components/seo/JsonLd' sowie die Schema-Builder-Funktionen createOrganizationSchema, createLocalBusinessSchema und createWebsiteSchema aus '@/lib/seo/jsonld'. Die Komponente gibt ein React Fragment zurück, das mehrere JsonLd-Komponenten als Kinder enthält. Jede JsonLd-Komponente wird mit dem data-Prop aufgerufen: Die erste mit dem Rückgabewert von createOrganizationSchema(), die zweite mit createLocalBusinessSchema(), die dritte mit createWebsiteSchema(). Nach diesen drei JSON-LD-Skripten folgt der Rest des Homepage-Inhalts, welcher als Platzhalter gekennzeichnet ist.

DATEI: /app/(services)/leistungen/[slug]/page.tsx

Die ServicePage-Komponente ist eine asynchrone Server-Komponente, die das params-Objekt mit dem slug-Parameter empfängt. Sie importiert JsonLd aus '@/components/seo/JsonLd' und createServiceSchema aus '@/lib/seo/jsonld'. Zudem wird eine getServiceBySlug-Funktion verwendet, um den Service-Datensatz zu laden.

Der Ablauf ist: Lade den Service-Datensatz asynchron mittels getServiceBySlug(params.slug). Gib ein React Fragment zurück, das eine JsonLd-Komponente mit dem data-Prop enthält. Das data-Prop wird mit dem Rückgabewert von createServiceSchema gefüllt, welches ein Objekt mit drei Feldern erhält: name (aus service.name), description (aus service.description), url (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, '/leistungen/', service.slug). Nach der JsonLd-Komponente folgt der Rest des Seiteninhalts als Platzhalter.

DATEI: /app/(blog)/blog/[slug]/page.tsx

Die BlogPage-Komponente ist eine asynchrone Server-Komponente, die das params-Objekt mit dem slug-Parameter empfängt. Sie importiert JsonLd und createArticleSchema.

Der Ablauf ist: Lade den Blog-Post asynchron mittels getBlogPostBySlug(params.slug). Gib ein React Fragment zurück mit einer JsonLd-Komponente, die mit dem Rückgabewert von createArticleSchema aufgerufen wird. Das Objektargument für createArticleSchema enthält folgende Felder: headline (aus post.title), description (aus post.excerpt), datePublished (aus post.publishedAt im ISO-Format), dateModified (aus post.updatedAt), author (aus post.author), url (zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL, '/blog/', post.slug). Nach der JsonLd-Komponente folgt der Rest des Seiteninhalts.

DATEI: /app/(pages)/faq/page.tsx

Die FAQPage-Komponente ist eine Standard-React-Komponente (synchron). Sie importiert JsonLd und createFAQSchema. Innerhalb der Komponente wird ein faqs-Array definiert, das mehrere FAQ-Objekte enthält. Jedes Objekt hat die Struktur { question: string; answer: string }. Das Array kann statisch oder dynamisch (z.B. aus einer Datenquelle) gefüllt werden.

Die Komponente gibt ein React Fragment mit einer JsonLd-Komponente zurück, die mit dem Rückgabewert von createFAQSchema(faqs) aufgerufen wird. Dies serialisiert alle FAQ-Einträge in JSON-LD-Format. Nach der JsonLd-Komponente folgt der sichtbare Seiteninhalt mit den FAQs in HTML-Format.


TASK 8: BreadcrumbList JSON-LD
──────────────────────────────

Update /components/navigation/Breadcrumb.tsx:

Die Breadcrumb-Komponente ist eine React-Komponente, die ein items-Array als Prop empfängt. Das items-Array enthält Objekte mit Struktur { name: string; url: string }. Die Komponente importiert JsonLd und createBreadcrumbSchema.

Zu Beginn wird mittels createBreadcrumbSchema(items) ein schema-Objekt erzeugt, das die Breadcrumb-Struktur als JSON-LD serialisiert. Die Komponente gibt ein React Fragment zurück mit zwei Kindern: Erstens eine JsonLd-Komponente mit dem data-Prop gesetzt auf das schema-Objekt. Zweitens ein nav-Element mit aria-label 'Breadcrumb' und CSS-Klassen für Flexbox-Layout (gap-2). Das nav-Element iteriert über alle items mittels map: Für jeden Index wird ein a-Element mit href (aus item.url) und key (Indexnummer) erstellt. Der Link-Text ist item.name. Nach jedem Link (ausser dem letzten) wird ein span mit Trennzeichen '/' eingefügt.


CHECKPOINT NACH TASK 8: Alle JSON-LD Schemas sind deployed. Google Search Console zeigt Rich Results.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK C — SITEMAP, ROBOTS & TECHNISCHES SEO ═══ (Tasks 9-11)
═══════════════════════════════════════════════════════════════════════════════

TASK 9: Dynamische Sitemap (/app/sitemap.ts)
──────────────────────────────────────────────

DATEI: /app/sitemap.ts

Die sitemap-Datei exportiert eine asynchrone Standard-Funktion, die einen Rückgabewert vom Typ Promise<MetadataRoute.Sitemap> hat. Sie importiert die MetadataRoute-Typ aus 'next' sowie die Funktionen getAllServices, getAllBlogPosts und getAllCaseStudies aus den entsprechenden Daten-Modulen.

Der Ablauf ist wie folgt: Zunächst wird ein staticRoutes-Array vom Typ MetadataRoute.Sitemap definiert, das alle statischen Seiten enthält. Jeder Eintrag ist ein Objekt mit: url (absolute URL aus process.env.NEXT_PUBLIC_SITE_URL + Pfad), lastModified (aktuelles Datum als new Date()), changeFrequency (Wert wie 'weekly', 'monthly', 'daily', 'yearly'), priority (Zahl zwischen 0.0 und 1.0). Statische Routen sind: Homepage (priority 1.0, weekly), Leistungen (0.9, monthly), Blog (0.8, daily), Referenzen (0.8, monthly), FAQ (0.7, monthly), Über uns (0.7, yearly), Kontakt (0.6, yearly), Impressum (0.3, yearly), Datenschutz (0.3, yearly), AGB (0.3, yearly).

Dann werden Services asynchron geladen, gemappt zu serviceRoutes (URL aus process.env.NEXT_PUBLIC_SITE_URL/leistungen/{slug}, lastModified = aktuelles Datum, changeFrequency = 'monthly', priority = 0.8).

Blog-Posts werden asynchron geladen, gemappt zu blogRoutes (URL aus process.env.NEXT_PUBLIC_SITE_URL/blog/{slug}, lastModified = parsedatum aus publishedAt, changeFrequency = 'weekly', priority = 0.7).

Case Studies werden asynchron geladen, gemappt zu caseRoutes (URL aus process.env.NEXT_PUBLIC_SITE_URL/referenzen/{slug}, lastModified = aktuelles Datum, changeFrequency = 'monthly', priority = 0.8).

Alle vier Arrays (staticRoutes, serviceRoutes, blogRoutes, caseRoutes) werden mittels Spread-Operator zusammengefasst und als Sitemap-Array retourniert.


TASK 10: Robots.txt (/app/robots.ts)
────────────────────────────────────

DATEI: /app/robots.ts

Die robots-Datei exportiert eine Standard-Funktion ohne Parameter, die einen Wert vom Typ MetadataRoute.Robots zurückgibt. Sie importiert MetadataRoute aus 'next'.

Die Funktion gibt ein Objekt mit zwei Top-Level-Eigenschaften zurück: rules (Regelwerk für Web-Crawler) und sitemap (Link zur XML-Sitemap). Das rules-Objekt definiert: userAgent (Wildcard '*' gilt für alle Crawler), allow (Pfad '/' ist erlaubt, d.h. die gesamte Website darf gecrawlt werden), disallow (Array mit Pfaden, die nicht gecrawlt werden dürfen: '/api/', '/admin/', '/*.json$' für alle JSON-Dateien). Das sitemap-Feld enthält die absolute URL zur sitemap.xml, zusammengesetzt aus process.env.NEXT_PUBLIC_SITE_URL und '/sitemap.xml'.


TASK 11: Canonical URLs & Technisches SEO
──────────────────────────────────────────

Standard in createMetadata():
- alternates.canonical wird gesetzt
- Trailing Slash Konsistenz: Alle URLs enden OHNE /
- URL-Slugs: Deutsche Umlaute als: ue (ü), ae (ä), oe (ö)
- Keine /index Pages
- HTTPS überall


CHECKPOINT NACH TASK 11: Sitemap.xml und robots.txt sind live. Alle URLs sind canonical.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK D — VALIDATION & AUDIT ═══ (Tasks 12-14)
═══════════════════════════════════════════════════════════════════════════════

TASK 12: SEO Completeness Audit Script
───────────────────────────────────────

DATEI: /scripts/audit-seo.ts

Führe aus: npm run audit:seo

Prüfungen:
- [ ] Alle Seiten in sitemap.xml?
- [ ] Alle Seiten haben generateMetadata?
- [ ] Alle Seiten haben JSON-LD?
- [ ] Keine Duplikat-Titles?
- [ ] Keine Duplikat-Descriptions?
- [ ] Canonical URLs sind korrekt?
- [ ] OpenGraph Images alle vorhanden?
- [ ] Robots-Meta auf Legal-Seiten (noindex)?


TASK 13: Schema Validation
──────────────────────────

DATEI: /scripts/validate-schema.ts

Validiere alle JSON-LD Objekte gegen Schema.org:
- Organization: name ✓, url ✓, logo ✓
- Article: headline ✓, author ✓, datePublished ✓
- FAQPage: mainEntity Array ✓, Question ✓, Answer ✓
- Service: name ✓, description ✓, provider ✓
- BreadcrumbList: itemListElement Array ✓


TASK 14: Performance Impact Check
──────────────────────────────────

Alle JSON-LD Scripts zusammen max 50kb pro Seite.
Keine zirkulären Referenzen.
Keine redundanten Schemas.


CHECKPOINT NACH TASK 14: Alle Validierungen grün. SEO Score 95+.


═══════════════════════════════════════════════════════════════════════════════
═══ ATOMIC VALIDATION ═══
═══════════════════════════════════════════════════════════════════════════════

BUILD-COMMAND: npm run build -- --verbose

Erwartet:
- Keine build errors
- Alle page.tsx kompilieren
- Alle generateMetadata() funktionieren
- sitemap.ts generiert 30+ Einträge
- robots.ts ist erreichbar unter /robots.txt


═══════════════════════════════════════════════════════════════════════════════
═══ SELF-OPTIMIZING LOOP & HANDOFF ═══
═══════════════════════════════════════════════════════════════════════════════

Update /data/.ai-expansion-context.md:
  Phase 8 COMPLETE: ✓ Metadata System, ✓ JSON-LD, ✓ Sitemap/Robots, ✓ Validierung
  alle bestehenden Routen (Anzahl ergibt sich aus dem Code) sind SEO-optimiert. Alle Metadata programmatisch. JSON-LD auf allen Seiten.

Update /data/.expansion-state.md:
  Phase 8 → Phase 9 (State Management & Data Flow): Zustandsverwaltung für User Preferences, Session State, API Cache.

CODE = SINGLE SOURCE OF TRUTH.
Keine manuellen Meta-Tags.
Alle Inhalte sind in /lib/data oder komponenten-intern.


═══════════════════════════════════════════════════════════════════════════════
═══ COMPLIANCE CHECKLIST (22+ items) ═══
═══════════════════════════════════════════════════════════════════════════════

METADATA SYSTEM:
□ createMetadata() Utility existiert und ist typsicher
□ Alle statischen Seiten nutzen metadata export
□ Alle dynamischen Seiten haben generateMetadata()
□ Keine Duplikat-Titles
□ Keine leeren Descriptions
□ Alle canonical URLs sind absolut

JSON-LD STRUCTURED DATA:
□ createOrganizationSchema() generiert valides Schema
□ createArticleSchema() auf allen Blog-Posts
□ createServiceSchema() auf allen Service-Seiten
□ createFAQSchema() auf FAQ-Seite
□ createBreadcrumbSchema() automatisch aus Navigation
□ JsonLd.tsx Server Component injiziert alle Scripts

SITEMAP & ROBOTS:
□ /app/sitemap.ts existiert
□ Sitemap hat 30+ URLs
□ /app/robots.ts existiert
□ robots.txt erlaubt /, disallowt /api/, /admin/
□ Sitemap Link in robots.txt

TECHNISCHES SEO:
□ Alle URLs haben canonical
□ Trailing Slash Konsistenz (ohne /)
□ URL-Slugs mit Umlaut-Konvention
□ Keine /index Pages
□ HTTPS überall
□ Keine Duplicate Content

VALIDIERUNG:
□ Build erfolgreich
□ Keine Kompilierungsfehler
□ Alle Dateien in /lib/seo und /components/seo
□ Alle page.tsx Dateien aktualisiert
□ SEO Audit Script läuft
□ Schema Validation erfolgreich
□ Performance: <50kb JSON-LD pro Seite


═══════════════════════════════════════════════════════════════════════════════

Phase 8 COMPLETE.

Phase 8 hat die Website von zufälligen Meta-Tags zu einem SEO-System transformiert.
Jede Route ist programmatisch optimiert. Metadaten, JSON-LD, Sitemap, Robots — alles
läuft automatisch. Keine manuellen Einträge. Code ist SSOT.

Phase 9: State Management & Data Flow. Zustandsverwaltung, User Preferences, Session Cache.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-18 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY 

PERFORMANCE ERROR-HANDLING SPECIFICATION:

Für alle Performance-Optimierungen in Phase-08:

1. LAZY-LOADING EDGE-CASES:
   • React.lazy() + Suspense: Fallback-UI ist IMMER defined (nicht null)
   • Fallback: <div className="h-48 bg-gray-100 animate-pulse">Loading...</div>
   • Fehler beim Lazy-Load: ErrorBoundary wrappet die Komponente
   • Timeout: Falls lazy component > 10s nicht geladen → zeige Fehler-UI

2. ANALYTICS ERROR-RESILIENCE:
   • Analytics-Aufruf fehlgeschlagen? Schweige still, nicht blocker für User-Experience
   • Try-catch um alle tracking().send() Aufrufe
   • Fallback: console.warn aber nicht console.error (nicht user-facing)
   • Offline-Modus: Wenn navigator.onLine === false → queue events, sync wenn online

3. IMAGE-OPTIMIZATION:
   • next/image: Alle <img> tags als <Image> refactored
   • Missing src: Fallback zu grey-placeholder.jpg
   • Broken image: next/image auto-fallback funktioniert
   • Lazy-Loading: loading="lazy" auf Fold-below-images

4. BUNDLE-SIZE:
   • Build-Analyser: Nutze next-bundle-analyzer bei npm run build
   • Chunk-Size-Limits: Setze max chunk size 200KB (nach gzip)
   • Überschüsse: Dynamic imports via React.lazy()
   • Tree-shaking: Ensure unused exports entfernt werden (überprüf via webpack-analyze)

5. RENDERING-PERFORMANCE:
   • React.memo: Komponenten die pure sind → wrap mit React.memo
   • useCallback: Dependencies exakt gematched (linter: eslint exhaustive-deps)
   • useMemo: Expensive computations gememoized (z.B. filtered arrays)
   • KEIN Inline-Functions in render (erstelle const BEFORE return)

6. ANALYTICS-DATA-PRIVACY:
   • PII-Daten NICHT in analytics: Keine email, user IDs, API keys
   • Anonymisierung: User-ID → hash(user-email) wenn tracking user behavior
   • Local-Storage: GDPR-konform (nur mit Consent)
   • Analytics-Vendor: Überprüfe GDPR-compliance (z.B. Vercel Web Analytics ist ok)


EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-08 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-09)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-19 → EXPANSION-PHASE-09.md
   → Lese EXPANSION-PHASE-09.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-09

═══ PHASE SEQ-08 → SEQ-09: HANDOFF AKTIV ═══
