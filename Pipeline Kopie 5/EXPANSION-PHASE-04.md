Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, ein Blog- und Content-System auf dem bestehenden Projekt aufzubauen. Das System muss SEO-optimiert, typsicher und mit der bestehenden Architektur nahtlos integriert sein. Erstelle einen Implementierungsplan mit Content-Architektur, Rendering-Strategie und SEO-Integration.

═══ CHAIN-LINK-HEADER ═══ SEQ-14 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-13 → EXPANSION-PHASE-03.md
→ NÄCHSTE: SEQ-15 → EXPANSION-PHASE-05.md
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

Analysiere die bestehende Navigation des Projekts aus Phase 3. Erweitere die Header-, Footer- und Mobile-Navigation auf Basis der tatsächlichen Routen-Struktur und verfügbaren Daten. Alle Navigation-Daten werden DYNAMISCH aus den existierenden Quellen generiert (/lib/data/*, Route-Struktur). KEINE hartcodierten Menüs oder erfundenen Navigation-Strukturen. Die Navigation ergibt sich aus dem Code.

PHASE 4 ÜBERBLICK
═══════════════════════════════════════════════════════════════════════════════

Phase 4 erweitert die bestehende Navigation adaptiv basierend auf den tatsächlichen Routen und Daten des Projekts. Header, Footer und Mobile-Navigation werden überprüft und erweitert. Mega-Menüs, Breadcrumbs und Wayfinding-Systeme werden NUR dann hinzugefügt, wenn sie aus der bestehenden Route-Struktur logisch folgen.

Tech-Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. Alle Next.js-Referenzen werden übersetzt. Keine CMS, kein Sentry, kein Dark Mode. Nur Formspree + Calendly als externe Integrationen. Die Navigation nutzt das Self-Hosting-Modell: Alle Daten in /lib/data/*, Code ist Source-of-Truth.


═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

Vorbedingung: Phase 3 Header.tsx, Footer.tsx, MobileNav.tsx existieren und sind funktional.

SCHRITT 0: SYNC & DISCOVERY (CODE-FIRST)
───────────────────────────────────────────────────────────────────────────────

0.1 PFLICHT — Lies den GESAMTEN bestehenden Navigation-Code:
    → Lies Header.tsx VOLLSTÄNDIG (alle Zeilen, alle Imports)
    → Lies MobileNav.tsx VOLLSTÄNDIG (falls vorhanden)
    → Lies Footer.tsx VOLLSTÄNDIG (falls vorhanden)
    → Lies /lib/data/navigation.ts (falls vorhanden)
    → INVENTAR: Welche Nav-Komponenten existieren bereits? Was ist ihr aktueller Stand?

0.2 ABGLEICH — Erstelle Mapping:
    | Phase-4-Task | Existiert bereits? | Aktion |
    |-------------|-------------------|--------|
    | Mega-Dropdown | NEIN im Header | NEU HINZUFÜGEN |
    | Breadcrumbs | NEIN | NEU ERSTELLEN |
    | Mobile Nav | JA (MobileNav.tsx) | ERWEITERN |
    | Footer Links | JA (Footer.tsx) | DYNAMISCH MACHEN |

0.3 Lese .pipeline-master-state.md für Routen-Inventur und Services-Daten.

0.4 npm run build als Baseline. Alle Tests müssen green sein.


═══════════════════════════════════════════════════════════════════════════════
BLOCK A — MEGA-NAVIGATION SYSTEM (Tasks ULTRATHINK-1 bis 4)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: NAVIGATION-STRUKTUR ANALYSIEREN UND DYNAMISCH GENERIEREN
───────────────────────────────────────────────────────────────────────────────

Aktion 1.1: PRÜFE OB NAVIGATION-DATEN EXISTIEREN
  - Falls /lib/data/navigation.ts existiert: Analysiere den Code, prüfe ob er dynamisch ist
  - Falls nicht existiert: Entscheide, ob Navigation-Daten benötigt werden (wahrscheinlich JA)

Aktion 1.2: NAVIGATION-STRUKTUR DYNAMISCH ABLEITEN (NICHT HARTCODIEREN)
  - Lese ALLE bestehenden Routes aus der CODE-INVENTUR
  - Erstelle Navigation-Struktur dynamisch aus diesen Routes:
    - Main Nav: alle Top-Level Routes (/, /leistungen, /blog, etc.)
    - Sub-Navs: Gruppierungen die sich aus der Route-Hierarchie ergeben
  - LESE Service-Daten aus /lib/data/services.ts (falls vorhanden) für Dynamic Service-Links
  - KEINE hartcodierten Routen wie "/ueber-uns/team" — nur wenn diese Routes existieren

Aktion 1.3: NAVIGATION-TYPES DEFINIEREN (MINIMAL UND ADAPTIV)
  - Definiere NavigationLink, NavigationGroup als flexible Interfaces
  - Optionale Felder für Features, die möglicherweise vorhanden sind (Mega-Dropdown, Icons, etc.)
  - KEINE Pflicht-Felder für Features die nicht benötigt werden

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Flattens navigation config to array of all links (for sitemap, accessibility tree)
 */
export function getAllNavigationLinks(): NavigationLink[] {
  const config = getNavigationConfig();
  return [
    ...config.main,
    ...config.services.items,
    ...config.company.items,
    ...config.legal,
    ...config.social,
  ];
}

/**
 * Finds a link by href (for active-state matching)
 */
export function findNavigationLink(href: string): NavigationLink | undefined {
  return getAllNavigationLinks().find(
    link =>
      (link.activeMatch === 'exact' && link.href === href) ||
      (link.activeMatch === 'prefix' && href.startsWith(link.href))
  );
}
```

ANFORDERUNGEN:
  □ KEIN any-Types
  □ Dynamic: services aus getAllServices() importiert (NICHT hardcodiert)
  □ Utility-Functions: getAllNavigationLinks(), findNavigationLink() für Header-Active-State
  □ External-Links gekennzeichnet (öffnet target="_blank" mit rel="noopener noreferrer")
  □ Icon-Fields vorhanden für visuelle Marker im Mega-Dropdown
  □ Typ-Sicherheit: NavigationGroup.items ist IMMER NavigationLink[]


ULTRATHINK-TASK 2: DESKTOP MEGA-DROPDOWN
───────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies Header.tsx VOLLSTÄNDIG bevor du etwas änderst.
Erweitere Header.tsx (NICHT ersetzen — bestehenden Code BEWAHREN):

├─ "Leistungen" NavItem bekommt state isOpen (useState)
├─ onMouseEnter/onMouseLeave für Desktop-Hover
├─ Dropdown-Panel mit position absolute, z-50, rechts unten vom Item
├─ Panel zeigt Grid 2 Spalten (Services a-d, Services e-h)
├─ Jedes Service-Item: Icon (optional) + label + description (80 Zeichen max)
├─ Keyboard: onKeyDown für Tab (durch Items), Escape (schließt Panel)
├─ Backdrop onClick schließt Panel
├─ "use client" Direktive oben
├─ Styling: bg-white, shadow-lg, rounded-lg, p-6, border-t-4 mit Brand-Farbe
└─ Transitions: opacity 200ms, scaleY smooth (transform-origin top)


ULTRATHINK-TASK 3: MOBILE NAVIGATION UPGRADE
───────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies MobileNav.tsx VOLLSTÄNDIG bevor du etwas änderst.
Erweitere MobileNav.tsx (bestehende Funktionalität BEWAHREN):

├─ Full-Screen Overlay (fixed, inset-0, z-40)
├─ Animierter Fade-In (opacity 0→1 beim Mount, 200ms)
├─ Backdrop mit bg-black/50 und onClick → closeNav()
├─ Navigation Panel: max-w-xs, from-top sliding (oder fade), bg-white
├─ Accordion für "Leistungen": [+] Icon, bei Click expanded zeigt alle Services
├─ Touch-optimiert: min-h-12 (48px) pro Item, lg gap zwischen Groups
├─ Close-Button (X Icon) Top-Right, aria-label "Navigation schließen"
├─ Body Scroll-Lock: overflow-hidden wenn isOpen
├─ Alle Links aus getNavigationConfig(), onClick → closeNav()
└─ Submenu Indentation: pl-4 oder Farbe dunkler


ULTRATHINK-TASK 4: CTA IN NAVIGATION
───────────────────────────────────────────────────────────────────────────────

Add prominent Call-to-Action Button:

├─ Desktop Header: Button rechts neben Letztem NavItem, 16px gap
├─ Button Text: "Jetzt Anfragen" oder "Kontakt"
├─ Button Variant: primary (aus Phase 3 Button-Komponente), hover darken
├─ Mobile Nav: CTA Button Top (unter Close) oder Bottom (über Footer-Links)
├─ href="/kontakt" oder öffnet Formspree-Modal (später Phase 5)
├─ Aria-label: "Kontaktanfrage öffnen"
└─ Tracking-Attribut: data-cta="header-nav"


═══════════════════════════════════════════════════════════════════════════════
BLOCK B — BREADCRUMB & WAYFINDING (Tasks ULTRATHINK-5 bis 7)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: BREADCRUMB-KOMPONENTE
───────────────────────────────────────────────────────────────────────────────

Prüfe ob Breadcrumb-Komponente bereits existiert → Falls JA: ERWEITERN
Falls NEIN: Erstelle /components/ui/Breadcrumb.tsx (Pfad gemäß Projekt-Konvention):

├─ "use client" Direktive
├─ Hook: usePathname() für aktuellen Pfad
├─ Mapping-Objekt: { "leistungen": "Leistungen", "ueber-uns": "Über Uns", ... }
├─ Split pathname by "/", filter empty strings
├─ Generiere Breadcrumb-Array mit href rebuilding
├─ Letztes Segment: no href, aria-current="page"
├─ Trennzeichen: Chevron Icon (ChevronRight, color-muted)
├─ Schema: JSON-LD BreadcrumbList itemListElement Array
├─ Props: optional hideHome (default false)
├─ Return: <nav aria-label="Breadcrumb"> mit ol + li Structure
└─ Styling: text-sm, text-muted, gap-2, flex wrap, mb-4


ULTRATHINK-TASK 6: BREADCRUMB INTEGRATION
───────────────────────────────────────────────────────────────────────────────

Integriere Breadcrumbs site-wide:

├─ NOT auf Homepage (/ route)
├─ JA auf /leistungen, /leistungen/[slug], /ueber-uns, /blog, /blog/[slug], /referenzen, /kontakt
├─ Platzierung: direkt unter Header, über Heading h1
├─ Komponenten-Import: import Breadcrumb from "@/components/ui/Breadcrumb"
├─ Layout-Pattern: margin-top: 2rem (from Header), margin-bottom: 1rem (from Content)
├─ Prüfe alle 20+ Seiten-Templates
└─ Tests: Route /leistungen/web-design sollte zeigen "Home › Leistungen › Web-Design"


ULTRATHINK-TASK 7: ACTIVE STATE HIGHLIGHTING
───────────────────────────────────────────────────────────────────────────────

NavLinks zeigen visuell aktive Seite:

├─ Hook: usePathname() in Header
├─ Logic: isActive = pathname.startsWith(item.href) oder pathname === item.href
├─ Für /leistungen/* → "Leistungen" NavItem bleibt highlighted
├─ Visual Indikator: border-b-2 border-primary (3px) oder font-bold + text-primary
├─ Hover-State separat (lighter, unterscheidbar von aktiv)
├─ Mobile Nav: Text-Farbe darken wenn aktiv
├─ Transition: smooth 200ms für Farb-Änderungen
└─ Aria-current="page" für aktuelle Link


═══════════════════════════════════════════════════════════════════════════════
BLOCK C — FOOTER EXPANSION & SEKUNDÄR-NAV (Tasks ULTRATHINK-8 bis 10)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: DYNAMISCHER FOOTER
───────────────────────────────────────────────────────────────────────────────

PFLICHT: Lies Footer.tsx VOLLSTÄNDIG bevor du etwas änderst.
Erweitere Footer.tsx (bestehende Struktur BEWAHREN, nur Daten-Quellen dynamisieren):

├─ Imports: getNavigationConfig(), getAllServices(), getCompanyInfo()
├─ Layout: 4-Spalten Desktop (lg:), 2-Spalten Tablet (md:), 1 Spalte Mobile
├─ Spalte 1 "Services": getAllServices().map(s => <Link href={`/leistungen/${s.slug}`}>{s.name}</Link>)
├─ Spalte 2 "Unternehmen": (Team, Karriere, Blog, Referenzen aus Navigation)
├─ Spalte 3 "Legal": getNavigationConfig().legal.map()
├─ Spalte 4 "Kontakt": Email, Phone, Address aus getCompanyInfo()
├─ Copyright: © {new Date().getFullYear()} Company Name. All rights reserved.
├─ Social Icons: LinkedIn, GitHub, Twitter mit aria-labels
├─ Styling: bg-muted/5, border-t, p-12 lg:p-16
└─ Newsletter CTA (optional): E-mail Input mit Subscribe Button


ULTRATHINK-TASK 9: BACK-TO-TOP BUTTON
───────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/BackToTop.tsx:

├─ "use client" Direktive
├─ State: showButton = window.scrollY > 400px (useEffect + Listener)
├─ onClick: window.scrollTo({ top: 0, behavior: "smooth" })
├─ Icon: ChevronUp oder ArrowUp, animated (rotate on hover)
├─ Positioning: fixed, bottom-8, right-8, z-30
├─ Styling: bg-primary, text-white, rounded-full, w-12 h-12, shadow-lg
├─ Visibility: opacity 0 / pointer-none wenn showButton=false, 200ms transition
├─ Aria-label: "Zurück nach oben"
├─ Hover-State: scale 1.1, shadow-xl
└─ Integriere in RootLayout.tsx als letztes Element vor </body>


ULTRATHINK-TASK 10: INHALTSVERZEICHNIS (OPTIONAL FÜR LANGE SEITEN)
───────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/TableOfContents.tsx (optional):

├─ "use client" Direktive
├─ Props: headings Array oder automatisch aus DOM (querySelectorAll("h2, h3"))
├─ Generiere Sprunglinks mit Heading-IDs
├─ Struktur: nested ul (h2 → h3 indent)
├─ Desktop: Sticky Sidebar (top-32, max-h-96, overflow-auto)
├─ Mobile: Collapsible Accordion (chevron icon, expandable)
├─ Active Link Highlighting: basierend auf viewport intersection
├─ Styling: text-sm, text-muted, link-hover underline
├─ Optional: Nur für Seiten mit 3+ Headings rendern
└─ Nutzen auf: /leistungen/[slug] (Service Details), /blog/[slug]


═══════════════════════════════════════════════════════════════════════════════
BLOCK D — VALIDATION & USER FLOW (Tasks ULTRATHINK-11 bis 13)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: LINK-AUDIT
───────────────────────────────────────────────────────────────────────────────

Alle Navigation-Links müssen zu existierenden Routen führen:

├─ Header NavLinks: prüfe gegen Phase-1 Routes (/leistungen, /ueber-uns, /blog, etc.)
├─ Mega-Dropdown Services: /leistungen/[slug] → validate alle 8 slugs
├─ Footer Links: alle hrefs müssen resolvierbar sein
├─ Breadcrumb Mapping: sämtliche Segments müssen gelistet sein
├─ CTA href="/kontakt" → /kontakt Route MUSS existieren
├─ Externe Links: Social (LinkedIn, GitHub) mit vollständigen URLs
├─ Test: npm run build sollte KEINE unresolved href warnings zeigen
└─ Manuell: Klick jeden Footer-Link, navigiere jede Seite, 404-Check


ULTRATHINK-TASK 12: KEYBOARD-NAVIGATION
───────────────────────────────────────────────────────────────────────────────

Volle Keyboard-Accessibility:

├─ Header Tab-Reihenfolge: Logo (optional focusable) → NavItems → CTA Button
├─ Mega-Dropdown: Tab enters Panel, Arrows navigate Items, Escape closes
├─ Mobile Nav: Tab-Trap wenn geöffnet (Shift+Tab am Anfang wraps zu Ende)
├─ Alle Buttons/Links: tabIndex={0} falls nicht natürlich focusable
├─ Focus Indicator: outline-2 outline-primary, offset-2
├─ Skip-Link (optional): "Skip to Main Content" Link versteckt, bei Focus sichtbar
├─ Tests: Keyboard-only Navigation die ganze Site navigierbar
└─ Screen Reader: aria-label auf Icons, aria-expanded auf Dropdowns


ULTRATHINK-TASK 13: RESPONSIVE PRÜFUNG
───────────────────────────────────────────────────────────────────────────────

Breakpoint-Überprüfung mit echten Devices:

├─ Desktop 1024px+: Volle Header-Nav mit Mega-Dropdown, Footer 4-spaltig
├─ Tablet 768-1023px: Hamburger Icon + vereinfachte NavItems (nur Hauptkategorien)
├─ Mobile unter 768px: Nur Hamburger, Full-Screen Drawer, Footer stapelbar
├─ Tailwind Media Queries: hidden lg:flex für Desktop Nav, flex lg:hidden für Hamburger
├─ Breakpoint Konstanten in /lib/constants.ts: BREAKPOINT_LG=1024, BREAKPOINT_MD=768
├─ Device Testing: iPhone 12 (390px), iPad (768px), Desktop (1440px)
├─ Screenshot-Audit: Alle 3 Viewport-Größen
└─ Performance: Mega-Dropdown should not block on Mobile (hide/remove from DOM)


═══════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

□ /lib/data/navigation.ts erstellt und typsicher
□ Header.tsx mit Mega-Dropdown für Leistungen
□ MobileNav.tsx mit Accordion und Full-Screen Overlay
□ CTA Button in Header und Mobile Nav integriert
□ /components/ui/Breadcrumb.tsx mit JSON-LD Schema
□ Breadcrumbs auf allen Unterseiten (außer Homepage)
□ NavLinks zeigen active state mit usePathname()
□ Footer mit dynamischen Service-Links
□ Back-to-Top Button integriert und funktional
□ TableOfContents.tsx für Service/Blog-Seiten (optional)
□ Alle Links resolvierbar, keine 404s
□ Keyboard-Navigation: Tab durch alle Elemente
□ Focus Indicators sichtbar und kontrastreich
□ Desktop 1024px+ zeigt volle Nav
□ Tablet 768-1023px zeigt Hamburger
□ Mobile <768px zeigt volles Drawer
□ Footer responsive auf allen Viewports
□ npm run build erfolgreich
□ npm run lint hat keine Fehler
□ Alle TypeScript Types strict (noAny)
□ Code versioniert, .expansion-state.md aktualisiert


═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════

Nach Phase 4:

Aktualisiere .ai-expansion-context.md:
├─ Phase 4 Status: ABGESCHLOSSEN
├─ Navigation-Struktur dokumentiert
├─ Breakpoints definiert
├─ Alle Komponenten-Pfade gelistet
└─ Known Limitations & Optimierungen notiert

Aktualisiere .expansion-state.md:
├─ Task-Completion Log (alle 13 Tasks)
├─ Build Status: ✓ green
├─ Browser Test Results: Desktop / Tablet / Mobile
├─ Accessibility Score (optional Lighthouse)
└─ Handoff Notes für Phase 5

Phase 5 baut auf Navigation auf: Formspree-Integration, Calendly-Widget, Form-Validation, Conversion Tracking.


═══════════════════════════════════════════════════════════════════════════════

PHASE 4 COMPLETE WHEN:
• Alle 13 ULTRATHINK-TASKS abgeschlossen
• Keine TypeScript Fehler
• npm run build produziert keine Warnungen
• Link-Audit bestätigt keine 404s
• Keyboard-Navigation auf allen Komponenten funktioniert
• Responsive auf Mobile / Tablet / Desktop getestet
• .expansion-state.md mit Phase 4 Completion markiert

TARGET: 500-650 Zeilen Phase-4-Code. Handoff zu Phase 5 nach Validation.


═══════════════════════════════════════════════════════════════════════════════
SINGLE SOURCE OF TRUTH ANKER (SSOT) — PHASE 4
═══════════════════════════════════════════════════════════════════════════════

Phase 4 macht Navigation zum intelligenten System. Der Code in /lib/data/navigation.ts und
/components/layout/Header.tsx ist die SSOT.

WENN Navigation-Links in Code anders aussehen als diese Doku:
  → CODE GEWINNT
  → Doku wird aktualisiert
  → Phase 5 wird mit dem AKTUELLEN Code arbeiten, nicht mit Doku-Version

CRITICAL: Wenn eine Route existiert (z.B. /ueber-uns), MUSS sie in NavigationConfig sein.
Falls Route fehlt: Das ist Data-Quality-Issue, nicht Doku-Error. Phase 4 wird das aufgreifen.

═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-14 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-04 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-05)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-15 → EXPANSION-PHASE-05.md
   → Lese EXPANSION-PHASE-05.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-05

═══ PHASE SEQ-04 → SEQ-05: HANDOFF AKTIV ═══
