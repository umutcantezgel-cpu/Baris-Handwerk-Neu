Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, typsichere Datenmodelle fuer das gesamte Projekt zu entwickeln. Jedes Interface, jeder Type und jede Datenstruktur muss strict-typed, dokumentiert und referentiell integer sein. Erstelle einen Implementierungsplan mit Type-Hierarchie, Interface-Design und Validierungs-Schema.

═══ CHAIN-LINK-HEADER ═══ SEQ-12 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-11 → EXPANSION-PHASE-01.md
→ NÄCHSTE: SEQ-13 → EXPANSION-PHASE-03.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══

Analysiere die bestehende Daten-Struktur aus Phase 1 und den bestehenden Code. Formalisiere und typsichere ALLE verwendeten Datenmodelle. Extrahiere hardcodierte oder Platzhalter-Daten aus Seiten-Dateien in ein strukturiertes, TypeScript-basiertes Daten-Ökosystem. Alle Daten-Domänen und deren Feldmengen leiten sich DIREKT aus dem bestehenden Projekt-Kontext ab — KEINE künstlichen Vorgaben wie "alle bestehenden Datensaetze (Anzahl ergibt sich aus dem Code)" oder "8+ Domänen". Jede Daten-Domain wird nur SOWEIT ausgebaut, wie sie tatsächlich im Projekt verwendet wird.

═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══

Diese Phase operiert unter striktem Zero-Breakage: Jeder neue Code wird parallel zu bestehendem Code entwickelt. Die Phase 1 Routen bleiben funktionstüchtig bis sie explizit an die neuen Daten-Layer angebunden werden. Build und Type-Checking bestehen zu jedem Zeitpunkt.

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

ULTRATHINK-TASK 0: Erfasse den aktuellen Zustand — CODE-FIRST

Aktion 0.1: PFLICHT — Lies den GESAMTEN bestehenden Code:
• Scanne ALLE Verzeichnisse: Existiert bereits ein /lib/, /src/lib/, /data/, /src/data/ Verzeichnis?
• Gibt es bereits TypeScript-Interfaces/Types? (z.B. types.ts, interfaces.ts, *.d.ts)
• Gibt es bereits Daten-Dateien? (JSON, TS-Exporte, hardcodierte Arrays in Seiten-Dateien?)
• Erstelle INVENTAR: [BESTEHENDE DATEN] → [PFAD] → [FELDER] → [VERWENDET VON]

Aktion 0.2: LESE .ai-expansion-context.md UND .pipeline-master-state.md — VOLLSTÄNDIG UND ANALYTISCH
  • Welche Routen existieren? → Erstelle ROUTING-TABELLE: [Route] → [Status: Bestehend/Neu] → [Data Needs: None/Services/BlogPosts/etc.]
  • Welche Daten sind hardcodiert oder als Platzhalter vorhanden?
    → DATEN-AUDIT: Durchsuche ALLE .tsx-Dateien nach:
      - PLACEHOLDER_* Arrays (definiert in dieser Datei, nicht importiert)
      - Lorem ipsum, "TODO", "Mock Data", "wird geladen" Strings
      - Hardcodierte Objekt-Literale mit Daten (services, posts, team, etc.)
    → Für JEDE Platzhalter-Location: [File] → [Data-Type] → [Fields] → [Count] → [Target: /lib/data/X.ts]
  • Welche Komponenten benötigen Daten?
    → KOMPONENTEN-DATEN-GRAPH: Welche Komponenten rendern Daten?
      - ServiceCard: Benötigt Service[]
      - BlogCardPreview: Benötigt BlogPost[]
      - TeamGrid: Benötigt TeamMember[]
    → Nutze diese Tabelle später zur Daten-Verteilung

Aktion 0.3: Führe npm run build aus. Dokumentiere: Gibt es aktuell Fehler?

Aktion 0.4: Führe npx tsc --noEmit aus. Stelle sicher: Zero Type-Fehler vor Beginn der Phase.

Aktion 0.5: ABGLEICH — Identifiziere Daten-Bedarf je Route. Erstelle Matrix:
  | Route | Bestehende Daten? | Benötigte Daten | Aktion |
  |-------|-------------------|-----------------|--------|
  | /leistungen | hardcodiert in page.tsx | Service[] | EXTRAHIEREN → /lib/data/services.ts |
  | /blog | keine | BlogPost[] | NEU ERSTELLEN |
  → Bestehende Daten werden EXTRAHIERT und formalisiert, nicht verworfen.

═══ BLOCK A — DATEN-ARCHITEKTUR & TYPE FOUNDATION ═══

ULTRATHINK-TASK 1: Daten-Verzeichnis und Ordnerstruktur prüfen/erstellen

Aktion 1.0: PFLICHT — Prüfe ob Daten-Verzeichnisse bereits existieren
  → Falls /lib/data/ oder äquivalent existiert: NUTZE das bestehende Verzeichnis
  → Falls /lib/types/ oder äquivalent existiert: ERWEITERE bestehende Types
  → Falls nichts existiert: Erstelle neue Verzeichnisse gemäß Projekt-Konventionen

Aktion 1.1: Sicherstelle Daten-Verzeichnis (NUR erstellen falls nicht vorhanden)
  Pfad gemäß Projekt-Struktur: /lib/data/ oder /src/lib/data/ oder /src/data/

Aktion 1.2: Sicherstelle Types-Verzeichnis (NUR erstellen falls nicht vorhanden)
  /lib/types/ oder /src/types/ — gemäß bestehender Konvention

Aktion 1.3: Definiere folgende Daten-Dateien (PRÜFE ob äquivalent bereits existiert):
• services.ts – Alle Service-Angebote (PRÜFE: existieren Services bereits irgendwo?)
• team.ts – Team-Mitglieder (PRÜFE: existieren Team-Daten bereits?)
• blog.ts – Blog-Posts
• testimonials.ts – Kundenbewertungen
• case-studies.ts – Fallstudien
• faq.ts – Häufig gestellte Fragen
• company.ts – Firma-Metadaten
• navigation.ts – Navigations-Strukturen
  → Wenn Daten bereits in Seiten-Dateien hardcodiert sind: EXTRAHIERE sie hierher

Aktion 1.4: Dokumentiere in .pipeline-master-state.md die Ordnerstruktur und extrahierte Daten.

ULTRATHINK-TASK 2: Basis-Types definieren und exportieren

Aktion 2.1: ERSTELLE /lib/types/index.ts MIT ULTRA-STRIKTEM TYPENSYSTEM
  DATEI-STRUKTUR:
Die Datei /lib/types/index.ts dient als zentrale Single Source of Truth (SSOT) für alle Daten-Shapes des Projekts. Sie enthält ausschließlich TypeScript-Definitionen ohne Implementierung oder Laufzeit-Logik.

PRIMITIVE TYPEN UND TYPE GUARDS:

Definiere folgende Primitive Types für die Runtime-Validierung:
- ContentLength: Objekt mit Feld minChars (erforderlich, number) und maxChars (optional, number). Beschreibt Längenvorgaben für Text-Inhalte.
- SlugFormat: String, nur Kleinbuchstaben, Bindestriche, keine Sonderzeichen.
- ISODateTime: String im ISO 8601 Format (z.B. "2024-03-29T14:30:00Z").
- ImagePath: String mit ausschließlich relativen Pfaden unter /images/, kein absoluter oder externer URL.

BASE TYPES MIT BRANDED SEMANTIK:

Definiere zwei Branded String-Types für maximale Compile-Time-Sicherheit:
- Id: String-basierter Typ mit unveränderlichem __brand Symbol "Id". Diese Branding verhindert versehentliche Vermischung von IDs mit gewöhnlichen Strings.
- Slug: String-basierter Typ mit unveränderlichem __brand Symbol "Slug". Slugs sind URL-sichere, eindeutige Identifizierer in Kleinbuchstaben.

Exportiere zwei Helper-Funktionen:
- createId(id: string): Id — Konvertiert einen gewöhnlichen String zu typisierten Id, ohne Runtime-Validierung (reine Cast-Operation für Compile-Time-Sicherheit).
- createSlug(slug: string): Slug — Konvertiert einen gewöhnlichen String zu typisierten Slug.

INTERFACE SERVICE:

Definiere Interface Service mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation des Services.
- slug: Slug (erforderlich) — URL-sichere Kennung für Links und Routes.
- title: string (erforderlich) — Name des Services.
- shortDescription: string (erforderlich) — Kurzbeschreibung, typischerweise 1-2 Sätze.
- fullDescription: string (optional) — Erweiterte Beschreibung mit zusätzlichen Details.
- icon: string (optional) — Icon-Name oder Referenz zu SVG-Grafik.
- features: string[] (optional) — Array mit Feature-Beschreibungen. Anzahl orientiert sich an tatsächlichen Daten aus Phase 1.
- benefits: string[] (optional) — Array mit Vorteils-Beschreibungen.
- process: Array von Objekten (optional) — Jedes Prozess-Schritt-Objekt hat title (string), description (string) und optionalen duration (string, z.B. "2 Wochen").
- pricing: Objekt (optional) — Enthält currency (optional, "EUR" oder "USD"), amount (optional, number), interval (optional, "one-time", "monthly", "yearly"), features (optional, string[]).
- relatedServices: Slug[] (optional) — Array von Slug-Referenzen zu verwandten Services.
- metadata: Objekt (optional) — SEO-Metadaten mit title, description und keywords (alle optional, alle string).
- order: number (optional) — Sortierindex für Reihenfolge in Listen.

INTERFACE TEAM MEMBER:

Definiere Interface TeamMember mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation.
- slug: Slug (erforderlich) — URL-sichere Kennung.
- name: string (erforderlich) — Vollständiger Name der Person.
- role: string (optional) — Job-Titel oder Funktionsbezeichnung.
- department: string (optional) — Abteilung oder Bereich.
- bio: string (optional) — Längere Biografie oder Beschreibung.
- shortBio: string (optional) — Kurzbeschreibung für Übersichtsseiten.
- image: ImagePath (optional) — Pfad zum Profilbild unter /images/.
- skills: string[] (optional) — Array mit Fähigkeiten oder Kompetenzen. Anzahl ist adaptiv und basiert auf tatsächlichen Daten.
- social: Objekt (optional) — Profile-Links mit optionalen Feldern linkedin (string), github (string), twitter (string).
- order: number (optional) — Sortierindex.

INTERFACE BLOG POST:

Definiere Interface BlogPost mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation.
- slug: Slug (erforderlich) — URL-sichere Kennung für Blog-Route.
- title: string (erforderlich) — Artikel-Titel.
- excerpt: string (optional) — Kurze Zusammenfassung für Übersichtsseiten.
- content: string (erforderlich) — Vollständiger Artikel-Text im Markdown oder HTML.
- author: Slug (optional) — Referenz zu TeamMember.slug des Autors.
- publishedAt: ISODateTime (erforderlich) — Veröffentlichungsdatum und -zeit.
- updatedAt: ISODateTime (optional) — Letzte Aktualisierung.
- category: string (optional) — Kategorie des Artikels, wird aus tatsächlichen Daten bestimmt.
- tags: string[] (optional) — Array mit Tags für Klassifizierung. Anzahl ist adaptiv.
- readingTime: number (optional) — Geschätzte Lesezeit in Minuten.
- featured: boolean (optional) — Flag, ob Artikel prominent angezeigt werden soll.
- metadata: Objekt (optional) — SEO-Metadaten mit title, description, keywords (alle optional, alle string).

INTERFACE TESTIMONIAL:

Definiere Interface Testimonial mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation.
- clientName: string (erforderlich) — Name des Kunden.
- clientRole: string (optional) — Position oder Titel des Kunden.
- company: string (optional) — Unternehmen des Kunden.
- companyLogo: ImagePath (optional) — Pfad zum Logo.
- quote: string (erforderlich) — Vollständiges Zitat oder Testimonial-Text.
- shortQuote: string (optional) — Kurzversion für Teaser.
- rating: number (optional) — Bewertung, typisch 1-5.
- serviceSlug: Slug (optional) — Referenz zu Service, auf den sich das Testimonial bezieht.
- featured: boolean (optional) — Flag für prominente Anzeige.
- date: ISODateTime (optional) — Datum des Testimonials.

INTERFACE CASE STUDY:

Definiere Interface CaseStudy mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation.
- slug: Slug (erforderlich) — URL-sichere Kennung.
- title: string (erforderlich) — Titel der Case Study.
- client: string (erforderlich) — Name des Kunden.
- industry: string (optional) — Branche des Kunden.
- challenge: string (optional) — Ausführliche Beschreibung der Herausforderung.
- solution: string (optional) — Ausführliche Beschreibung der Lösung.
- results: Array von Objekten (optional) — Jedes Ergebnis-Objekt hat metric (string), value (string) und optionalen improvement (string, z.B. "+45%").
- technologies: string[] (optional) — Array mit verwendeten Technologien.
- testimonialId: Id (optional) — Referenz zu Testimonial-ID.
- duration: string (optional) — Projektdauer (z.B. "3 Monate").
- year: number (optional) — Projektvollendungs-Jahr.
- featured: boolean (optional) — Flag für prominente Anzeige auf Übersichtsseiten.
- metadata: Objekt (optional) — SEO-Metadaten mit title, description, keywords (alle optional, alle string).

INTERFACE FAQ:

Definiere Interface FAQ mit folgenden Feldern:
- id: Id (erforderlich) — Eindeutige Identifikation.
- question: string (erforderlich) — Frage (typisch 10-50 Zeichen).
- answer: string (erforderlich) — Antwort-Text (mindestens 200 Zeichen, 1-3 Absätze).
- category: string (optional) — FAQ-Kategorie für Gruppierung. Wird aus tatsächlichen Daten bestimmt.
- serviceSlug: Slug (optional) — Referenz zu Service, auf den sich die FAQ bezieht.
- order: number (optional) — Sortierindex für Reihenfolge in FAQs.

INTERFACE COMPANY INFO:

Definiere Interface CompanyInfo mit folgenden Feldern:
- name: string (erforderlich) — Unternehmensname für Überschriften und Branding.
- legalName: string (optional) — Vollständiger rechtlicher Name des Unternehmens.
- address: string (optional) — Unternehmensadresse (Straße, Hausnummer, PLZ, Stadt).
- phone: string (optional) — Telefonnummer mit Ländervorwahl (z.B. "+49 30 1234567").
- email: string (optional) — E-Mail-Adresse für Kontakt und Support.
- foundedYear: number (optional) — Gründungsjahr als vierstellige Jahreszahl (z.B. 2010).
- employeeCount: number (optional) — Anzahl der Mitarbeiter.
- certifications: string[] (optional) — Array mit Zertifizierungen oder Awards (z.B. ["ISO 9001", "B-Corp", "GDPR-konform"]).
- socialMedia: Objekt (optional) — Social-Media-Links mit optionalen Feldern linkedin, twitter, instagram (alle string, vollständige URLs).
- openingHours: Objekt (optional) — Öffnungszeiten als Key-Value-Paare. Keys sind Tage oder Zeiträume (z.B. "Monday-Friday", "Saturday", "Sunday"), Values sind Uhrzeiten als Strings (z.B. "9:00-17:00", "10:00-14:00", "Geschlossen").

EXPORT UND ANFORDERUNGEN:

Exportiere alle definierten Interfaces und Types aus /lib/types/index.ts. Anforderungen:
- KEIN any oder unknown verwendet (strict typing durchgängig).
- Optionale Felder sind mit dem ?:-Operator explizit gekennzeichnet.
- Branded Types für Id und Slug bieten Compile-Time-Sicherheit und verhindern versehentliche Type-Vermischung.
- Alle String-Felder sind dokumentiert, beschreibend kommentiert und zeigen erwarteten Inhalt und Format.
- Keine hard-codierten Werte oder Enums im Typ-Definitionen — alles bleibt flexibel und adaptiv.

Aktion 2.2: IMPLEMENTIERUNG UND VALIDIERUNG
  - Implementiere ALLE definierten Types in /lib/types/index.ts
  - npm run build MUSS bestehen
  - npx tsc --noEmit MUSS Zero-Fehler zurückgeben
• shortBio: string (1-2 Sätze)
• image: string (Pfad zur Bild-Datei)
• skills: string[]
• social?: { linkedin?: string; github?: string; twitter?: string }
• order: number (für Sortierung)

Aktion 2.4: Definiere Interface BlogPost mit Feldern:
• id: string
• slug: string
• title: string
• excerpt: string (2-3 Sätze)
• content: string (Mindestens 1000 Zeichen, 3+ Absätze)
• author: string (slug-Referenz zu TeamMember)
• publishedAt: string (ISO 8601)
• updatedAt: string (ISO 8601)
• category: string
• tags: string[]
• readingTime: number (in Minuten)
• featured: boolean
• metadata: { title: string; description: string; keywords: string[] }

Aktion 2.5: Definiere Interface Testimonial mit Feldern:
• id: string
• clientName: string
• clientRole: string
• company: string
• companyLogo?: string (optionaler Pfad)
• quote: string (Vollständiges Zitat)
• shortQuote: string (Kurzes Zitat für Übersichten)
• rating: number (1-5)
• serviceSlug?: string (optional, slug-Referenz)
• featured: boolean
• date: string (ISO 8601)

Aktion 2.6: Definiere Interface CaseStudy mit Feldern:
• id: string
• slug: string
• title: string
• client: string
• industry: string
• challenge: string (Absatz)
• solution: string (Absatz)
• results: { metric: string; value: string; improvement?: string }[]
• technologies: string[]
• testimonialId?: string (optional)
• duration: string (z.B. "3 Monate")
• year: number
• featured: boolean
• metadata: { title: string; description: string; keywords: string[] }

Aktion 2.7: Definiere Interface FAQ mit Feldern:
• id: string
• question: string
• answer: string (Absatz, 200+ Zeichen)
• category: string
• serviceSlug?: string (optional)
• order: number

Aktion 2.8: Definiere Interface CompanyInfo mit Feldern:
• name: string
• legalName: string
• address: string
• phone: string
• email: string
• foundedYear: number
• employeeCount: number
• certifications: string[]
• socialMedia: { linkedin?: string; twitter?: string; instagram?: string }
• openingHours?: { [key: string]: string }

Aktion 2.9: Stelle sicher, dass /lib/types/index.ts alle Interfaces exportiert. Kein "any" oder "unknown" ohne explizites Handling.

ULTRATHINK-TASK 3: Typsichere Getter-Funktionen erstellen

Aktion 3.1: In /lib/data/services.ts, nach dem Data-Array, exportiere diese Getter-Funktionen:
• getAllServices(): Service[] – Gibt alle Services zurück, sortiert nach Order (falls vorhanden)
• getServiceBySlug(slug: string): Service | undefined – Sucht einen Service exakt nach slug
• getFeaturedServices(): Service[] – Gibt nur Services mit featured: true zurück
• getServicesByCategory(category: string): Service[] – Filtert nach Kategorie (falls Feld vorhanden)

Aktion 3.2: JEDER GETTER HAT EXAKTEN RETURN-TYPE — FULL ERROR HANDLING & PERFORMANCE PATTERNS

GETTER-TEMPLATE FÜR ALLE DATEN-MODULE:

Die Struktur für /lib/data/services.ts und äquivalente Module ist standardisiert. Das Modul beginnt mit einem Import-Statement, das die Service-Interfaces und den Slug-Type aus /lib/types importiert. Dies gibt TypeScript-Zugang zu den strikten Typdefinitionen.

Nach dem Import folgt die Daten-Deklaration als eine Konstante namens services mit dem Typ Service[]. Dieses Array wird in der Aktion 4 befüllt und enthält 8+ Service-Objekte, die alle erforderlichen Felder mit echten Daten haben. Das Array ist statisch und wird zur Build-Time evaluiert.

Alle übrigen Module (team.ts, blog.ts, case-studies.ts, testimonials.ts, faq.ts, company.ts) folgen einem ähnlichen Muster: Import der Types → Konstanten-Deklaration des Daten-Arrays → Getter-Funktionen mit expliziten Return-Types → Development-Mode Assertions für Data-Integrität.

GETTER-FUNKTIONEN MIT ULTRA-STRIKTEM ERROR HANDLING:

Alle Getter-Funktionen sind so strukturiert, dass sie typsicher sind, keine Exceptions werfen und für Production sofort einsatzfähig sind. Das Getter-Template zeigt die Implementierungsmuster für alle Daten-Module (services.ts, blog-posts.ts, case-studies.ts, etc.).

GETTER getAllServices():

Diese Funktion hat den Return-Type Service[] (explizit, nicht Service | null). Sie gibt ein neues Array zurück, das alle Service-Objekte enthält, sortiert nach dem optionalen order-Feld. Die Sortierlogik ist: Wenn ein Service order definiert hat, wird dieses Feld für die Sortierung herangezogen; andernfalls wird der Service als Infinity behandelt und am Ende der Liste positioniert. Das Array wird vor der Sortierung gecopiert (Spread-Operator), um Mutationen des Original-Arrays zu vermeiden. Performance ist O(n log n) für die Sortierung bei einer unveränderlichen, statischen Liste. Diese Funktion throw-t niemals eine Exception.

GETTER getServiceBySlug(slug):

Diese Funktion akzeptiert einen Parameter slug vom Typ Slug oder string und gibt Service | undefined zurück. Wichtig: undefined wird verwendet, nicht null, für explizite Semantik. Die Funktion implementiert einen Type-Guard: Sie prüft zuerst, ob slug vorhanden ist und vom Typ string ist. Ist dies nicht der Fall, wird eine WARN-Nachricht zur Laufzeit geloggt und undefined zurückgegeben. Die Funktion führt eine lineare Suche im statischen Array durch mit Array.find(), was O(n) ist, aber da das Array klein ist (typisch 8-20 Items), ist dies akzeptabel. Wenn kein Service mit dem gegebenen slug gefunden wird, wird eine DEBUG-Nachricht geloggt und undefined zurückgegeben. Die Funktion throw-t niemals.

GETTER getFeaturedServices():

Diese Funktion hat den Return-Type Service[] und gibt nur Services zurück, bei denen featured !== false ist. Das bedeutet: Services mit featured: true werden eingeschlossen, Services ohne das featured-Feld werden ebenfalls eingeschlossen (optionale Felder). Nur Services mit featured: false werden explizit ausgeschlossen. Diese Funktion ist ideal für die Homepage Hero-Section oder andere prominente Bereiche. Performance ist O(n) für die Filter-Operation.

GETTER getServicesByCategory(category):

Diese Funktion hat den Return-Type Service[]. Sie filtert alle Services nach einer gegebenen category. WICHTIG: Bevor diese Funktion implementiert wird, muss geprüft werden, ob das Service-Interface tatsächlich ein category-Feld enthält. Falls nicht vorhanden, kann diese Funktion alternativ Tags oder Features als Filterkriterium verwenden. Der Parameter category ist ein string. Die Filterlogik vergleicht den Parameter exakt mit s.category (falls vorhanden) oder nutzt alternativen Ansatz mit Array-Methoden wie includes(). Performance ist O(n).

GETTER getCaseStudiesByService(serviceSlug):

Diese Funktion hat den Return-Type CaseStudy[] und implementiert einen Join zwischen CaseStudies und Services. Sie akzeptiert einen serviceSlug vom Typ Slug. Die Funktion importiert getCaseStudies() aus case-studies.ts und filtert die Case Studies danach, ob technologies-Array einen Eintrag enthält, der den serviceSlug enthält (case-insensitive Vergleich mit toLowerCase()). Falls technologies nicht definiert ist, wird false zurückgegeben (fallback). Diese Funktion wird später (Phase 6) mit Memoization optimiert, um Redundanz zu vermeiden. Performance ist aktuell O(n*m) (n Services, m technologien pro Service), aber akzeptabel für kleine Datenmengen.

INVARIANTEN UND CONSTRAINTS ZUR BUILD-TIME:

Im Development-Mode (process.env.NODE_ENV === 'development') werden Data-Integrität-Assertions ausgeführt:
- Prüfe: Sind alle Slugs im Services-Array eindeutig (keine Duplikate)? Falls Duplikate gefunden werden, wird ein ERROR geloggt.
- Prüfe: Hat jeder Service ALLE erforderlichen Felder (id, slug, title)? Falls ein Service ein erforderliches Feld vermisst, wird ein WARN geloggt mit dem Service-Title.

Diese Assertions laufen zur Build-Time (bei npm run build) und helfen, Data-Fehler frühzeitig zu erkennen.

ANFORDERUNGEN FÜR ALLE GETTER:

- Expliziter Return-Type (z.B. Service | undefined, NOT Service | null). Die Semantik von undefined und null unterscheidet sich deutlich.
- Keine Exceptions throw-en. Alle Error-Cases werden mittels undefined oder fallback-Werte gehandhabt. Bei Edge-Cases wird geloggt (console.warn, console.debug), nicht geworfen.
- Inline-Dokumentation mit JSDoc-Kommentaren: @returns für Rückgabewert, @param für Parameter, Performance-Hinweis (O(n), O(n log n)), Fehler-Handling-Verhalten.
- Type-Guards für Input-Parameter: Prüfe slug != null und typeof === string vor Verarbeitung.
- Development-Mode Assertions zur Validierung der Daten-Integrität.
- Alle Getter sind reine Funktionen: Keine State-Mutation, keine Seiteneffekte (außer Logging).

Aktion 3.3: In /lib/data/team.ts, exportiere:
• getAllTeamMembers(): TeamMember[]
• getTeamMemberBySlug(slug: string): TeamMember | undefined
• getTeamMembersByDepartment(department: string): TeamMember[]
• getTeamByOrder(): TeamMember[] – Sortiert nach order-Feld

Aktion 3.4: In /lib/data/blog.ts, exportiere:
• getAllBlogPosts(): BlogPost[]
• getBlogPostBySlug(slug: string): BlogPost | undefined
• getFeaturedBlogPosts(): BlogPost[]
• getBlogPostsByCategory(category: string): BlogPost[]
• getBlogPostsByAuthor(authorSlug: string): BlogPost[]
• getBlogPostsSorted(order: 'desc' | 'asc'): BlogPost[]

Aktion 3.5: In /lib/data/testimonials.ts, exportiere:
• getAllTestimonials(): Testimonial[]
• getFeaturedTestimonials(): Testimonial[]
• getTestimonialsByService(serviceSlug: string): Testimonial[]
• getTestimonialsByRating(minRating: number): Testimonial[]

Aktion 3.6: In /lib/data/case-studies.ts, exportiere:
• getAllCaseStudies(): CaseStudy[]
• getCaseStudyBySlug(slug: string): CaseStudy | undefined
• getFeaturedCaseStudies(): CaseStudy[]
• getCaseStudiesByIndustry(industry: string): CaseStudy[]

Aktion 3.7: In /lib/data/faq.ts, exportiere:
• getAllFAQs(): FAQ[]
• getFAQsByCategory(category: string): FAQ[]
• getFAQsByService(serviceSlug: string): FAQ[]
• getFAQsSortedByOrder(): FAQ[]

Aktion 3.8: Teste jeden Getter lokal: npx tsc --noEmit bestätigt korrekte Typisierung.

═══ BLOCK B — SEED DATA: SERVICES & TEAM ═══

ULTRATHINK-TASK 4: Service-Daten befüllen

Aktion 4.1: Befuelle /lib/data/services.ts mit vollstaendigen Service-Objekten fuer ALLE Services die im bestehenden Code referenziert werden. Leite die Service-Liste aus den bestehenden Routen und Daten ab:
• webdesign (slug) – Webdesign
• webentwicklung – Webentwicklung & Progressive Web Apps
• seo-optimierung – SEO-Optimierung
• online-marketing – Online-Marketing & Kampagnenmanagement
• ecommerce – E-Commerce Lösungen
• app-entwicklung – Mobile & Native App Entwicklung
• ui-ux-design – UI/UX-Design & User Research
• wartung-support – Wartung, Support & Monitoring

Aktion 4.2: Jeder Service-Eintrag MUSS diese Felder 100% befüllt haben:
• Alle 8 Basis-Felder (id, slug, title, shortDescription, fullDescription, icon)
• Features als Strings (Anzahl ergibt sich aus dem tatsaechlichen Service)
• Benefits als Strings (Anzahl ergibt sich aus dem tatsaechlichen Service)
• Process-Steps mit title und description (Anzahl ergibt sich aus dem tatsaechlichen Prozess)
• Optional: pricing und relatedServices
• Metadata mit title, description, keywords (SEO)

Aktion 4.3: Die Slugs müssen exakt zu Phase-1 Routen passen. Beispiel: Slug "webdesign" entspricht Route /leistungen/webdesign.

Aktion 4.4: Schreibe realistische deutsche Texte. Features und Benefits müssen konkret und messbar sein.

Aktion 4.5: relatedServices soll auf verwandte Services verweisen (array von slugs). Beispiel: webdesign verweist auf ui-ux-design.

Aktion 4.6: Exportiere am Ende: const services: Service[] = [...]. Nutze getAllServices() Getter.

ULTRATHINK-TASK 5: Team-Daten befüllen

Aktion 5.1: Befülle /lib/data/team.ts mit Team-Mitglieder entsprechend der tatsaechlichen Teamgroesse des Projekts. Diese Rollen MÜSSEN vorhanden sein:
• Geschäftsführer/in
• Lead Developer (Backend oder Full-Stack)
• UI/UX Designer
• SEO Specialist
• Project Manager
• Junior Developer

Aktion 5.2: Nutze realistische deutsche Namen und Orte.

Aktion 5.3: Jeder TeamMember-Eintrag MUSS:
• id, slug (slug-format: max-mueller, keine Umlaute)
• name, role, department (z.B. "Geschäftsleitung", "Entwicklung", "Design")
• bio (2-3 Absätze à 3-5 Sätze), shortBio (1-2 Sätze)
• image: string (Pfad, z.B. "/images/team/max-mueller.jpg" – Bilder müssen nicht existieren, nur Pfade)
• skills: string[] (5-8 Skills je Person)
• social?: linkedin und github Links
• order: number (1-6 für Sortierung)

Aktion 5.4: Schreibe authentische Bios mit Erfahrung, Expertise und Persönlichkeit.

Aktion 5.5: Exportiere am Ende: const teamMembers: TeamMember[] = [...].

ULTRATHINK-TASK 6: Bestehende Routen an neue Daten anbinden (CHIRURGISCH)

Aktion 6.0: PFLICHT — Lies die GESAMTE bestehende Seiten-Datei BEVOR du sie änderst.
  → Verstehe den bestehenden Code vollständig
  → Identifiziere wo genau Platzhalter/hardcodierte Daten stehen
  → Plane die MINIMALE Änderung um Daten-Import einzuführen

Aktion 6.1: Service-Übersicht (gemäß Framework-Mapping):
  → Lies die GESAMTE Datei zuerst
  → Ersetze NUR die Daten-Quelle, nicht das Layout oder die Struktur
  → Import gemäß Projekt-Alias-Konfiguration (@ oder relative Pfade)

Aktion 6.2: Service-Detail (dynamische Route):
  → Lies die GESAMTE Datei zuerst
  → Ersetze NUR den Daten-Abruf, behalte Layout/Styling bei
  → Füge notFound()-Handling hinzu wenn nicht vorhanden

Aktion 6.3: Team-Seite:
  → Lies die GESAMTE Datei zuerst
  → Ersetze NUR die Daten-Quelle

Aktion 6.4: Teste: npm run build bestätigt Zero Fehler.
  → Falls Fehler: Lies die Fehlermeldung, finde die Ursache, fixe CHIRURGISCH

═══ BLOCK C — SEED DATA: CONTENT & TRUST ═══

ULTRATHINK-TASK 7: Blog-Daten erstellen

Aktion 7.1: Befülle /lib/data/blog.ts mit Blog-Posts entsprechend dem bestehenden Content-Umfang.

Aktion 7.2: Jeder Post MUSS:
• id, slug, title, excerpt (2-3 Sätze), content (mindestens 1000 Zeichen, 3+ Absätze mit Überschriften)
• author: slug-Referenz zu einem TeamMember (z.B. "max-mueller")
• publishedAt, updatedAt (ISO Strings, realistische Daten im 2025-2026 Bereich)
• category: einer von ["Webdesign", "Technologie", "Marketing", "Branchennews"]
• tags: string[] (3-5 Tags pro Post)
• readingTime: number (Schätzung basierend auf Content-Länge)
• featured: boolean (mindestens 3 Posts als featured: true)
• metadata: SEO-Daten

Aktion 7.3: Content muss substantiell sein. Beispiel-Kategorien:
• "Webdesign" – Trends 2025, Responsives Design, User Experience
• "Technologie" – Next.js 15, React Patterns, TypeScript Best Practices
• "Marketing" – SEO Tipps, Content Strategy, Conversion Optimization
• "Branchennews" – Industrie-Updates, Case Studies, Innovationen

Aktion 7.4: Nutze realistische deutsche Texte mit Absätzen und Struktur.

Aktion 7.5: Exportiere: const blogPosts: BlogPost[] = [...].

ULTRATHINK-TASK 8: Testimonials und Case Studies

Aktion 8.1: Befülle /lib/data/testimonials.ts mit Testimonials entsprechend den vorhandenen Kundenstimmen.

Aktion 8.2: Variiere Ratings (nicht alle 5 Sterne), Services, und Kunden-Typen.

Aktion 8.3: Jedes Testimonial:
• clientName, clientRole (z.B. "Geschäftsführer", "Marketing Manager"), company
• quote (Vollständiges Zitat, 2-3 Sätze), shortQuote (1-2 Sätze)
• rating: 4-5 (meisten), ein paar 3er
• serviceSlug: Referenz zu einem Service (z.B. "webentwicklung")
• featured: mindestens 5 true, Rest false
• date: realistische ISO Strings

Aktion 8.4: In /lib/data/case-studies.ts, befuelle Case Studies entsprechend den tatsaechlich vorhandenen Referenzprojekten.

Aktion 8.5: Jede Case Study:
• id, slug, title, client (Firmenname), industry (z.B. "E-Commerce", "Fintech", "Healthcare")
• challenge: Problem-Beschreibung (Absatz)
• solution: Lösungs-Beschreibung (Absatz)
• results: { metric: string; value: string; improvement?: string }[] (mindestens 3 Metriken, z.B. ["Traffic +340%", "Conversion +25%", "Load Time -60%"])
• technologies: string[] (z.B. ["Next.js", "React", "PostgreSQL", "Stripe"])
• duration: "3 Monate", "6 Wochen", etc.
• year: 2023, 2024, 2025
• featured: mindestens 3 true
• metadata: SEO

Aktion 8.6: Results MÜSSEN konkrete, messbare Verbesserungen zeigen.

Aktion 8.7: Exportiere: const testimonials: Testimonial[] = [...]; const caseStudies: CaseStudy[] = [...].

ULTRATHINK-TASK 9: FAQ und Company-Info

Aktion 9.1: Befülle /lib/data/faq.ts mit MINDESTENS 20 FAQ-Einträgen.

Aktion 9.2: Kategorien (jeweils 5+ FAQs):
• Allgemein (Über das Unternehmen, Kontakt, Prozess)
• Preise (Preismodelle, Zahlungsbedingungen, Rabatte)
• Prozess (Projektablauf, Timeline, Kommunikation)
• Technisch (Stack, Sicherheit, Performance, Hosting)
• Support (Wartung, SLA, Erreichbarkeit)

Aktion 9.3: Jede FAQ:
• question, answer (substantielle Antwort, 200+ Zeichen, 2-3 Sätze minimum)
• category (einer der oben)
• serviceSlug: optional, z.B. Fragen zu E-Commerce refieren auf ecommerce
• order: number für Sortierung innerhalb Kategorie

Aktion 9.4: Erstelle /lib/data/company.ts mit einem einzigen Export: const companyInfo: CompanyInfo.

Aktion 9.5: CompanyInfo MUSS enthalten:
• name: "Agenturname" (realistisch, deutsch)
• legalName: vollständiger Firmenname mit Rechtsform
• address: Straße, PLZ Ort, Deutschland
• phone: "+49 ... " Format
• email: kontakt@agentur.de
• foundedYear: 2015, 2018, 2020 (realistisch)
• employeeCount: 8-15 (realistisch für beschriebenes Team)
• certifications: ["ISO 27001", "DSGVO Compliant"] oder ähnlich
• socialMedia: { linkedin: "linkedin.com/company/...", twitter: "@...", instagram: "@..." }
• openingHours: { Mo-Fr: "09:00-18:00", Sa-So: "Geschlossen" }

Aktion 9.6: Exportiere: export const companyInfo: CompanyInfo = {...}.

═══ BLOCK D — INTEGRATION & VALIDATION ═══

ULTRATHINK-TASK 10: Alle Routen an echte Daten anbinden

Aktion 10.1: Durchsuche alle Page-Komponenten (/app/**/*.tsx) nach Platzhalter-Texten wie "Lorem Ipsum", "TODO", "Mock Data", etc.

Aktion 10.2: Jede Route, die Daten benötigt, MUSS einen Import aus /lib/data/ haben.

Aktion 10.3: Für Blog-Seite (/app/blog/page.tsx): import { getAllBlogPosts, getFeaturedBlogPosts }. Zeige echte Posts statt Platzhalter.

Aktion 10.4: Für Blog-Detail (/app/blog/[slug]/page.tsx): import { getBlogPostBySlug }. Nutze die Getter.

Aktion 10.5: Für FAQ-Seite: import { getAllFAQs, getFAQsByCategory }. Organisiere nach Kategorien.

Aktion 10.6: Für Referenzen/Case Studies Seite: import { getAllCaseStudies, getFeaturedCaseStudies }.

Aktion 10.7: Für Über Uns / Team: bereits in Task 6 gemacht.

Aktion 10.8: Teste jede Route lokal: npm run dev, visitiere jede URL, bestätige echte Daten.

Aktion 10.9: npm run build bestätigt Zero Fehler.

ULTRATHINK-TASK 11: Cross-Referenzen und Daten-Verknüpfung

Aktion 11.1: Services refieren auf verwandte Case Studies. In Service-Detail, zeige eine "Fallstudien"-Sektion mit getCaseStudiesByService() (dieser Getter muss noch erstellt werden, falls nicht vorhanden).

Aktion 11.2: Blog-Posts können auf Services verlinken. Tags können Service-Slugs sein.

Aktion 11.3: Testimonials sind Services zugeordnet. In Service-Detail, zeige relevante Testimonials via getTestimonialsByService(serviceSlug).

Aktion 11.4: Case Studies können Testimonial-Referenzen enthalten. Wenn testimonialId gesetzt, zeige das entsprechende Testimonial in der Case Study.

Aktion 11.5: FAQs können Services zugeordnet sein. Service-Detail kann die relevanten FAQs anzeigen.

Aktion 11.6: Alle Verknüpfungen nutzen slug-basierte Referenzen, NICHT object references. Dies ermöglicht einfache JSON-Serialisierung und Build-Time Integration.

ULTRATHINK-TASK 12: Type-Safety Audit und finale Validierung

Aktion 12.1: Führe npx tsc --noEmit aus. Null Fehler akzeptiert. Jeder Error wird dokumentiert und behoben.

Aktion 12.2: Jede Daten-Datei muss typsichere Exports haben. Keine any-Types außer wo absolut unvermeidbar (und dann dokumentiert).

Aktion 12.3: Nutze strict: true in tsconfig.json. Stelle sicher noImplicitAny: true.

Aktion 12.4: Jede Getter-Funktion hat expliziten Return-Type, nicht inferred.

Aktion 12.5: Keine unused variables, keine dead code in Daten-Dateien.

Aktion 12.6: Teste: npm run build, bestätige Zero Fehler, Zero Warnings.

═══ ATOMIC VALIDATION ═══

Aktion V.1: npm run build BESTÄTIGT — ZERO FEHLER, ZERO WARNINGS (KRITISCH)
  Protokoll:
  □ Führe npm run build aus, speichere die KOMPLETTE console-Ausgabe
  □ Prüfe: "Compiled successfully" oder äquivalent?
  □ Prüfe: Keine TS1005, TS2307, etc. Fehler?
  □ Falls Warnings: Dokumentiere JEDES einzeln in .expansion-state.md
  □ Falls Fehler: Stoppe SOFORT, fixe es, re-run build, continue nur wenn PASS

Aktion V.2: npx tsc --noEmit BESTÄTIGT — ZERO TYPE-FEHLER (NICHT IGNORIERBAR)
  Protokoll:
  □ Führe npx tsc --noEmit aus (skips emit, nur Type-Check)
  □ Output MUSS sein: "error TS" = 0 matches
  □ Erlaubte Warnings (wenn konfiguriert): strictNullChecks implicitAny ecc.
  □ Falls irgendein TS Error: FIX sofort, rerun, continue nur bei PASS

Aktion V.3: DATENSATZ-ZÄHLUNG UND STRUKTURELLE INTEGRITÄT
  Zählung: Mindestens 200 Datensatz-Einträge (Summe aller /lib/data/*.ts Exports)
  □ Services: Genau 8 oder mehr, alle Felder befüllt
  □ TeamMembers: Genau 6 oder mehr, order-Feld unique + sorted
  □ BlogPosts: Genau 10 oder mehr, published dates = ISO 8601 format
  □ Testimonials: Genau 12 oder mehr, ratings 1-5 int nur
  □ CaseStudies: Genau 5 oder mehr, results array min 3 items je case
  □ FAQs: Genau 20 oder mehr, category-Feld normalized (case-consistent)
  □ CompanyInfo: Genau 1 Object, alle required Felder vorhanden
  □ Navigation (optional): Falls separate Datei, min 15 Items (Menu + Footer)

  STRUKTURELLE CHECKS:
  □ Alle Slug-Felder: lowercase, hyphens only, no special chars, < 100 chars
  □ Alle ID-Felder: Unique UUID v4 oder ähnlich, NICHT Integer
  □ Alle ISO-DateTime Felder: Valid ISO 8601 (z.B. "2025-03-15T14:30:00Z")
  □ Alle Array-Längen: Services.features >= 4, TeamMembers.skills >= 5, BlogPost.content >= 1500 chars
  □ Keine Circular References: Keine bidirektionalen Verweise ohne Slug-Keys

Aktion V.4 (ZUSÄTZLICH): GETTER-FUNCTION VERIFIZIERUNG
  □ getServiceBySlug("webdesign") → Service object mit vollständigen Feldern
  □ getAllBlogPosts() → Array, .length === (erwartete Zahl)
  □ getFeaturedServices() → Array mit nur featured: true items
  □ getTeamMemberBySlug("invalid-slug") → undefined (nicht null)
  □ getAllFAQs().length >= 20
  □ getCompanyInfo() → CompanyInfo object mit address, phone, email, etc.
  • alle bestehenden Services
  • alle Team-Mitglieder
  • alle Blog-Posts
  • alle Testimonials
  • 5 Case Studies
  • 20 FAQs
  • 1 Company-Info Objekt
  • Navigation-Struktur (falls separat)
  = 63 Basis-Einträge. Zusätzliche Tiefe (Sub-Arrays in Process Steps, Results, Features) erreicht alle bestehenden Datensaetze (Anzahl ergibt sich aus dem Code).

Aktion V.4: Jede Route zeigt echte Daten statt Platzhalter-Text
Aktion V.5: Jeder Getter gibt typsichere Rückgabewerte zurück
Aktion V.6: Kein bestehendes Projekt wurde gebrochen

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

Nach Abschluss dieser Phase:

1. Aktualisiere .ai-expansion-context.md mit:
   • Verzeichnis-Struktur (/lib/data/, /lib/types/)
   • Alle erstellten Daten-Module und deren Exports
   • Alle Getter-Funktionen und deren Signaturen
   • Routing: Welche Routen nutzen welche Daten-Module?

2. Aktualisiere .expansion-state.md mit:
   • Phase 2 Status: COMPLETE
   • Datensatz-Zählung: 200+
   • Type Safety Status: STRICT, ZERO errors
   • Ready for Phase 3: JA

3. Exportiere die Getter-Funktionen und deren Signaturen in eine GETTER_MANIFEST.txt für Phase 3 Referenz.

═══════════════════════════════════════════════════════════════════════════════
SINGLE SOURCE OF TRUTH ANKER (SSOT) — PHASE 2
═══════════════════════════════════════════════════════════════════════════════

Der Code ist die SSOT (Single Source of Truth). Die Dateien /lib/data/*.ts sind das verbindliche Spec.
Alle Dokumentation folgt dem Code, NICHT umgekehrt.

KRITISCHE RULE: Falls bestehende Datensätze im Code anders sind als diese Doku beschreibt:
  → CODE WINS
  → Diese Doku wird aktualisiert
  → .expansion-state.md wird mit Anmerkung versehen ("Code diverged from spec on 2025-03-26, updated")

BEISPIEL-SZENARIEN:
  1. BlogPost im Code hat updatedAt, aber Doku erwähnt nur publishedAt?
     → Code ist Wahrheit. Doku wird aktualisiert.
  2. Service.relatedServices im Code hat 10 Items, aber Doku sagt "max 5"?
     → Code ist Wahrheit. Doku wird auf 10 korrigiert.
  3. FAQ.answer im Code hat 50 Zeichen, aber Doku fordert 200+?
     → Code ist Wahrheit. Wenn unter 200, ist das Data-Quality-Issue, nicht Doku-Error.
     → Phase 2 validiert und fixe es DANN, Doku wird aktualisiert.

HANDOFF ZU PHASE 3:
  Phase 3 wird den Code aus /lib/data/* direkt lesen (nicht Doku), um Komponenten zu erstellen.
  Deshalb MUSS Code jetzt 100% valide sein.

═══════════════════════════════════════════════════════════════════════════════
═══ COMPLIANCE CHECKLIST ═══

□ /lib/data/ Verzeichnis existiert
□ /lib/types/index.ts existiert mit 8+ Interfaces
□ /lib/data/services.ts: 8+ Services, vollständig befüllt
□ /lib/data/team.ts: 6+ TeamMembers, vollständig befüllt
□ /lib/data/blog.ts: 10+ BlogPosts, vollständig befüllt
□ /lib/data/testimonials.ts: 12+ Testimonials
□ /lib/data/case-studies.ts: 5+ CaseStudies mit messbaren Results
□ /lib/data/faq.ts: 20+ FAQs kategorisiert
□ /lib/data/company.ts: CompanyInfo vollständig
□ Alle Getter-Funktionen exportiert und typsicher
□ /app/leistungen/page.tsx nutzt getAllServices()
□ /app/leistungen/[slug]/page.tsx nutzt getServiceBySlug()
□ /app/uber-uns/page.tsx nutzt getAllTeamMembers()
□ /app/blog/page.tsx nutzt getAllBlogPosts()
□ /app/blog/[slug]/page.tsx nutzt getBlogPostBySlug()
□ FAQ-Seite existiert und nutzt getAllFAQs()
□ Case Studies / Referenzen Seite nutzt getAllCaseStudies()
□ Cross-Referenzen funktionieren (Services → Case Studies, Blog → Services)
□ npx tsc --noEmit: ZERO Fehler
□ npm run build: ZERO Fehler
□ npm run dev: Alle Routen zeigen echte Daten

Phase 2 Abschluss: Der Daten-Layer ist vollständig, typsicher, und Build-validiert. Phase 3 wird die atomaren UI-Komponenten erstellen, die diese Daten in schöner Gestaltung präsentieren. Der Code ist bereit für die nächste Iterationsstufe.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-12 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-02 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-03)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-13 → EXPANSION-PHASE-03.md
   → Lese EXPANSION-PHASE-03.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-03

═══ PHASE SEQ-02 → SEQ-03: HANDOFF AKTIV ═══
