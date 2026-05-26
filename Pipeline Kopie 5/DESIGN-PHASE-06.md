Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 6 der Design-Pipeline (Cognitive UX) als kognitiv optimierte Benutzererfahrung zu gestalten. Visuelle Hierarchie, Aufmerksamkeitssteuerung, Cognitive Load und Decision Architecture muessen Premium sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-47 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-46 → DESIGN-PHASE-05.md
→ NÄCHSTE: SEQ-48 → DESIGN-PHASE-07.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══


===============================================================================
ENFORCEMENT-DIREKTIVEN-REFERENZ (PFLICHTLEKTUERE VOR AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, lies:
  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (Direktive 1, 2, 3 und 4)
  ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md (Pflichtlektuere fuer Design-Phasen)
───────────────────────────────────────────────────────────────────────────────
KREATIVITAETS-DIREKTIVE-REFERENZ (PFLICHT FUER ALLE DESIGN-PHASEN)
───────────────────────────────────────────────────────────────────────────────
  Jede visuelle Entscheidung MUSS durch eines der vier Fundamente begruendet sein:
    1. Mathematische Proportion (Goldener Schnitt / PHI = 1.618)
    2. Farbpsychologie und Wahrnehmung (60-30-10-Regel, Branchen-Matrix)
    3. Visuelle Fuehrung (F/Z/Gutenberg-Muster, Fokuspunkt-Hierarchie)
    4. Preview-Validierung (Screenshots, Phi-Check, Anti-AI-Look-Test)
  Minimum-Validierungsstufe fuer Design-Phasen: 6X (statt 5X)
───────────────────────────────────────────────────────────────────────────────

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
DIRECTOR-ZUWEISUNG: DIRECTOR OF DESIGN (Pipeline 3)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Design (Meister der kognitiven UX und Aesthetik).
Meldet an: Director General via .design-upgrade-state.md und .ai-design-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 3 (Anti-AI-Look): 5-Sekunden-Test, 3 Signature Elements, keine generischen Patterns.
  GESETZ 5 (Component-Standard): PascalCase, Props-Interface, Kreativ-Pruefung, Feature-Ordner.
  GESETZ 8 Gate 3 (Accessibility): WCAG AAA Kontraste, Tastatur-Navigation, Screen-Reader.
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte Navigations- und Interaktionserlebnis dieser Next.js/React/TypeScript-Website so zu perfektionieren, dass jeder Nutzer MÜHELOS durch die Seite gleitet — ohne nachzudenken, ohne sich zu verirren, ohne kognitive Überlastung. Phase 5 hat Bewegung hinzugefügt. Phase 6 macht die Navigation selbst zu einem Design-Meisterwerk. Dies ist Design-Phase 6 von 10 der Supreme Design & UX Pipeline.

═══════════════════════════════════════════════════════════════════════════════

DESIGN-PHASE 6 VON 10: COGNITIVE UX & NAVIGATION FLUIDITY

═══ PROTOCOL & TECH-RESTRIKTIONEN ═══

5 Design Pillars aktiv: Klarheit, Zweck, Konsistenz, Emotionale Resonanz, Technische Exzellenz
Tech-Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md
Erlaubte Integrations: Formspree (Kontaktformulare), Calendly (Terminbuchung)
ABSOLUTES VERBOT: Dark Mode, Sentry, externe Tracking-Tools, Datenverlust-Risiken
Quelle der Wahrheit: Code ist SSOT. Alle Designs müssen in CSS + React implementierbar sein
Kontext-Dateien: .ai-design-context.md (lesen zu Phase-Start), .design-upgrade-state.md (aktualisieren zu Phase-Ende)

═══ SCHRITT 0: PRE-FLIGHT NAVIGATION DISCOVERY ═══

Vor dem Schreiben der Tasks: Analysiere die aktuelle Navigations-Infrastruktur

1. AKTUELLE NAVIGATION KARTOGRAPHIEREN
   - Header-Navigation vorhanden? (Links, Logo, Menü-Trigger)
   - Mobile-Menü-Typ: Hamburger / Bottom-Sheet / Slide-Out / Drawer?
   - Footer-Navigation: Struktur (Spalten, Kategorien)?
   - Breadcrumbs: Auf welchen Seiten sichtbar?
   - Scroll-Verhalten: Sticky Header? Transformation?

2. HIERARCHIE-ANALYSE
   - Wie viele Navigations-Ebenen existieren? (1-Ebene, 2-Ebene, Dropdown?)
   - Items pro Ebene: Primäre Nav (Zahl), Dropdowns (Zahl)?
   - Mobile vs. Desktop: Unterschiedliche Struktur?

3. ACTIVE STATE & VISUELLE HINWEISE
   - Wie wird die aktuelle Seite angezeigt?
   - Animation auf State-Change?
   - Focus-Indicator für Keyboard-Navigation?

4. USER FLOW PRIMÄR
   - Welcher Pfad ist am häufigsten: Landing → Service → Contact?
   - Oder: Landing → Gallery → Booking?
   - Bottleneck-Punkte (wo verlassen Nutzer?)?

5. CTA-PLATZIERUNG AUDIT
   - Wo sind Primary CTAs? (Hero, Mid-Page, End-Page?)
   - Sind sie immer sichtbar (auch auf Scroll)?
   - Mobile-spezifische CTAs?

═══════════════════════════════════════════════════════════════════════════════

BLOCK A — HEADER & PRIMÄRE NAVIGATION

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: HEADER-DESIGN-PERFEKTION

Header ist die erste Interaktion. Muss sein: Sauber, Selbstbewusst, Funktional.

Struktur & Layout:
• Logo links ausgerichtet (min. 120px bis max. 160px Breite)
• Navigations-Links zentriert oder rechts, abhängig von Symmetrie
• Primary CTA Button rechts (z.B. "Jetzt Kontakt")
• Höhe: 64px Standard, optional 80px für generous Spacing

Sticky & Scroll-Verhalten:
• Header bleibt oben auf Scroll
• Background: surface-color mit backdrop-blur (blur-md) für Glass-Morphism
• Subtle Shadow erscheint erst nach 10-20px Scroll (transition: box-shadow 300ms ease)
• Optional: leichte Höhen-Reduktion beim Scroll (80px → 64px)

Z-Index & Hierarchie:
• z-index: 40 (über Seiten-Content, unter Modals/Dropdowns)
• Dropdowns: z-index: 50
• Modals: z-index: 50+

Logo-Details:
• Proper SVG oder Bild-Asset (nicht Text)
• Home-Link (href="/")
• aria-label="Unternehmensname"
• Responsive Sizing: max-w-[140px] desktop, max-w-[110px] mobile

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: NAVIGATION-LINKS ANIMATION & STATES

Desktop Navigation Links müssen Eleganz + Feedback kombinieren.

Visual Design:
• Font: font-medium, text-sm bis text-base (nicht zu groß)
• Spacing: gap-8 bis gap-10 zwischen Items
• Color: text-neutral-700 (oder Brand-Primär leicht angepasst)
• Letter-spacing: minimal (tracking-tight oder normal)

State-Management (4 States):
1. Default: Neutral color, no underline
2. Hover: Smooth color-transition (200-300ms), optional animated underline
3. Active: Eindeutige Indikator — WÄHLE EINE:
   → Underline mit border-b-2 brand-color
   → Background-Pill (px-3 py-1 rounded-md bg-brand-light)
   → Bold weight (font-bold)
4. Focus (Keyboard): Outline ring-2 ring-offset-2 ring-brand-color

Dropdown-Menüs (falls verwendet):
• Trigger: auf Desktop Hover, auf Mobile Click
• Entrance: fade-in + translateY(-10px) mit Ease-out (150ms)
• Background: surface-color mit 1px border-neutral-200
• Shadow: elevation md (0 4px 6px rgba(0,0,0,0.1))
• Items: py-2 px-3, min. 40px height für Touch
• Divider: optional horizontal line zwischen Gruppen
• Exit: reverse animation, kein brusker Disappear

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: MOBILE-NAVIGATION MEISTERWERK

Mobile Menu muss sich NATIVE anfühlen, nicht wie nachträglicher Hack.

Trigger (Hamburger Icon):
• Position: fixed oben-rechts (bei nicht-sticky Header) oder in Header
• Size: 24x24px Icon in 44x44px Click-Area (Touch-Safe)
• Animation: 3-Balken morpht zu X (smooth rotate + transform)
• Color: brand-primary, bei Hover leicht heller

Menu-Container:
• Typ: Full-Screen-Overlay (preferred) oder Slide-from-Right-Panel
• Background: rgba(0,0,0,0.5) auf Rest der Page (Scrim)
• Menu-Self: bg-white, z-index: 50

Menu-Items:
• Spacing: py-4 px-6 pro Item (großzügig)
• Font: text-lg, font-medium
• Height: min. 48px-56px (Fat-Finger Safe)
• Staggered Animation: Item 1 enters 0ms, Item 2 enters 50ms, Item 3 enters 100ms
• Entrance: translateX(20px) + opacity-0 → translateX(0) + opacity-100 (300ms ease-out)

Close-Verhalten:
• Close-Button: Icon rechts oben im Menu
• Swipe-to-Close: Optional (swipe right schließt Menu)
• Esc-Taste schließt auch Menu
• Clicking outside menu (auf Scrim) schließt Menu

Focus & Accessibility:
• Focus Trap: Bei Menu offen, Tab bleibt im Menu
• First Item erhält Focus automatisch
• Keyboard-Navigation: Arrow-Keys optional für Item-Navigation

Body-Scroll:
• Wenn Menu offen: body overflow-hidden (Scroll-Lock)
• Kein Flicker, smooth transition

═══════════════════════════════════════════════════════════════════════════════

BLOCK B — INFORMATIONS-ARCHITEKTUR & WAYFINDING

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: BREADCRUMB-NAVIGATION DESIGN

Breadcrumbs sagen "Wo bin ich in der Hierarchie?"

Visual Design:
• Position: unterhalb Header, oberhalb Main Content (mt-2 mb-6)
• Spacing: px-6 py-2
• Font: text-sm, color-neutral-600 (subtle)
• Separator: " / " oder " > " (nicht mit Pfeilen-Icon übertreiben)

State-Management:
• Inactive Items (Links): color-neutral-600, underline-optional-on-hover
• Current Page (nicht Link): color-neutral-900, font-medium, nicht klickbar
• Hover: Farbe leicht dunkler, evtl. underline erscheint

Responsive Anpassung:
• Desktop: Volle Breadcrumb (Home / Services / Web Design)
• Mobile: Gekürzt (Home / Web Design) oder Parent + Current nur
• Option: Auf sehr kleinen Screens nur "< Back" statt Breadcrumb

Semantik:
• <nav aria-label="Breadcrumb">
• <ol> statt <ul>
• Letzte Item: aria-current="page"

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: FOOTER ALS NAVIGATION-HUB

Footer ist das "Safety Net" — Nutzer scrollen hier hin, wenn sie nicht fanden, was sie suchten.

Struktur:
• Background: distinct (surface-dark oder neutral-900 mit 95% opacity)
• Padding: py-12 px-6 desktop, py-8 px-4 mobile
• Layout: 3-4 Spalten auf Desktop, Stacked auf Mobile

Spalten-Inhalte:
1. Unternehmen: Über uns, Team, Blog, Karriere
2. Services: Alle Service-Links (grouped by category)
3. Kontakt: Phone (clickable tel:), Email (clickable mailto:), Adresse
4. Rechtlich: Datenschutz, Impressum, AGB, Cookies

Design Details:
• Section Header: font-bold, text-base, mb-4
• Links: text-sm, color-neutral-500, hover: color-brand-primary (smooth 200ms)
• Spacing: mb-8 zwischen Spalten
• Icons: Social Links (LinkedIn, Twitter, etc.) mit 20x20px, hover: scale(1.1)

Contact Info Hervorhebung:
• Phone: als Link (href="tel:+49...")
• Email: als Link (href="mailto:...")
• Address: plain text oder als Link (href="https://maps.google.com...")

CTA im Footer:
• "Jetzt Kontakt aufnehmen" Button, brand-primary Stil
• Position: vor Copyright oder rechts oben im Footer
• Als letzter Conversion-Push

Copyright & Meta:
• Unten: © 2026 Company. Alle Rechte vorbehalten.
• Rechts: kleinere Links zu Datenschutz, Impressum
• Font: text-xs, color-neutral-600

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: SCROLL-ORIENTIERUNG & FORTSCHRITT

Lange Seiten brauchen visuelle Hinweise "Wo bin ich? Wie viel ist noch zu kommen?"

Scroll Progress Bar:
• Position: fixed oben, über alle anderen Elemente hinweg
• Height: 2-3px
• Color: brand-primary mit opacity-80
• Width: (scrolled / totalHeight) * 100%
• Update: On scroll event mit requestAnimationFrame (smooth)

Back-to-Top Button:
• Position: fixed bottom-6 right-6
• Sichtbar nach: 300px+ Scroll
• Entrance: fade-in + scale (0.8 → 1.0) mit 150ms
• Icon: Pfeil nach oben (24x24px)
• Background: brand-primary, hover: brand-dark
• Click: window.scrollTo({ top: 0, behavior: 'smooth' })
• Accessibility: aria-label="Zum Anfang springen"

Section Anchors & Smooth Scroll:
• Interne Links mit #id funktionieren mit: scroll-behavior: smooth
• Jeder Major-Section erhält eine ID (services, about, contact)
• Smooth-Scroll Animation: 400-600ms Dauer

Visual Landmarks:
• Jede Section hat distinct Background oder Border
• Farbliche Variation (alternierend: white, neutral-50, white)
• Clear Section Headers zur Orientierung
• Optional: Section-Nummern im Design (1/5, 2/5, etc.)

═══════════════════════════════════════════════════════════════════════════════

BLOCK C — KOGNITIVE ENTLASTUNG & MENTALE MODELLE

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: MILLER'S LAW IM NAVIGATION-DESIGN

Menschliches Kurzzeitgedächtnis: 7±2 Items maximal.

Primäre Navigation Regel:
• Max. 7 Items in Header Navigation
• Aktuell: Zähle Items und dokumentiere
• Falls zu viele: Group in Dropdown oder entferne Low-Priority Items

Grouping Strategie:
• Verwende visuelle Divider (spacing + optional border-right) zwischen Gruppen
• Logische Cluster: (Home, Leistungen) | (Über uns, Blog) | (Kontakt)
• Dropdown nutzen für: (Leistungen > Web Design, Branding, etc.)

Visuelle Hierarchie:
• Size: Primary Items größer (text-base) vs. Secondary (text-sm)
• Color: Primary dunkel, Secondary heller
• Position: Wichtigste Links zuerst (von links nach rechts)

Priorisierung:
1. Home (implizit durch Logo)
2. Services / Leistungen
3. About / Über uns
4. Blog / News (optional)
5. Contact / Kontakt
6-7. Spezialseiten (Datenschutz später im Footer)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: HICK'S LAW — ENTSCHEIDUNGSZEIT MINIMIEREN

Je weniger Wahlen, desto schneller die Entscheidung.

One Primary CTA pro Section:
• Hero: "Jetzt Kontakt" (groß, auffällig)
• Services Section: "Mehr erfahren" auf jeder Karte (secondary) + 1 großer "Alle Services" (primary)
• Testimonials: keine CTA, nur Info
• Final Section: "Jetzt Anfrage senden" (groß, primary)

Visual Hierarchy durch Design:
• Primary CTA: bg-brand-primary, text-white, padding-lg (px-8 py-3)
• Secondary CTA: bg-brand-light, text-brand-primary, padding-md (px-6 py-2)
• Tertiary: link-style, underline-on-hover

Progressive Disclosure:
• Accordion für lange Listen (Services mit Details)
• "Mehr lesen" Links statt Wall-of-Text
• Expandable Cards für Specs / Features
• Tabs für verschiedene Kategorien

Konsistente Pattern Wiederholung:
• Wenn Karten auf einer Seite klickbar sind, sind sie überall klickbar
• Button-Styling konsistent über alle Pages
• Hover-States immer gleich
• Click-Feedback (ripple, color-change) konsistent

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: FITTS'S LAW — KLICKZIELE OPTIMIEREN

Größere Ziele sind schneller zu treffen.

Button-Sizing:
• Minimum Height: 44px (Apple), Ideal: 48px+ (Accessibilität)
• Minimum Width: 44px
• Padding: px-4 py-3 mindestens (nicht zu knapp)
• Spacing zwischen Buttons: gap-4 mindestens

Edge-Targets (Mobile):
• Buttons nahe am Screen-Edge: Extend click area into "invisible" zone
• Bottom CTA: 12px Abstand zum Screen-Bottom (nicht unter Fingers)
• Fitts-Empfehlung: Ziele sollten > 7mm sein (bei 375px Viewport ≈ 28px)

Fat-Finger-Safe Spacing:
• Zwischen interaktiven Elementen: gap-3 mindestens (12px)
• Keine Buttons direkt nebeneinander ohne Spacing
• Links in Text: Sufficient spacing zum nächsten Link

Sticky CTA auf Mobile:
• Position: fixed bottom-0 left-0 right-0
• Background: weiß mit box-shadow nach oben
• Padding: py-3 px-4
• Button: full-width oder mit gutters (px-4)
• Sichtbar nach: 200px Scroll (nicht gleich am Anfang)
• Animation: slideUp aus dem Bottom bei Aktivierung

═══════════════════════════════════════════════════════════════════════════════

BLOCK D — CONVERSION-OPTIMIERTER USER FLOW

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: DER GOLDENE PFAD

User Journey wird visualisiert und optimiert.

Primärer Pfad kartographieren:
1. Landing (Hero + Value Prop)
2. Service/Leistungs-Seite (Was tun wir?)
3. Case Studies / Testimonials (Vertrauen aufbauen)
4. Contact / Booking (Conversion)

Sekundäre Pfade:
• Blog/Resources (Education Path)
• Pricing (wenn zutreffend)
• Portfolio / Work (Social Proof)

Visueller Flow:
• Jede Section beantwortet EINE Frage und zeigt den nächsten Schritt
• Pfeile oder Gradients können Blick-Richtung lenken (downward, dann rightward)
• Whitespace ist Richtungsanzeige (mehr Space = Pause, dann neuer Fokus)

CTA-Platzierung im Flow:
• Hero CTA: "Jetzt starten" (primär, groß)
• Nach Services (bei Scroll vorbei): "Unser Angebot entdecken"
• Nach Testimonials: "Sie sind nächster?" (Conversion CTA)
• Footer: "Schreiben Sie uns" (Fallback)
• Keine CTA in jeder Section (Überload)

Keine Dead Ends:
• Jede Section hat einen Next-Step (Link, Button oder visueller Hinweis)
• Blog-Posts: Related Posts + Back to Services
• Service Pages: "Ähnliche Services" oder "Kostenlose Beratung"
• Footer: immer Kontakt-Option sichtbar

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN & HANDOFF ZU PHASE 7

Update Documentation mit Phase-6-Findings:

In .ai-design-context.md hinzufügen:
• Navigation Design Rules (Header 64-80px, Sticky, Glass-Blur)
• Mobile Menu Specs (Full-Screen, Staggered Animation, 48px+ Items)
• Cognitive UX Principles: Miller's Law (max 7 items), Hick's Law (1 CTA/section), Fitts's Law (44-48px targets)
• CTA Placement Strategy (Hero, Services, Testimonials, Footer)
• Scroll Behavior (Progress Bar optional, Back-to-Top at 300px)

In .design-upgrade-state.md hinzufügen:
• Phase 6 Status: ✓ COMPLETE
• Navigation Structure: [Updated with specs]
• Mobile Menu: [Full-Screen Overlay, Staggered Entrance]
• Cognitive Load: [Miller's + Hick's + Fitts's Laws implemented]
• User Flow: [Goldener Pfad definiert]
• Next Phase: Phase 7 (Emotional & Psychological Visuals — Farben, Typographie, Bildsprache)

═══════════════════════════════════════════════════════════════════════════════

FINALE VALIDIERUNG — DESIGN-PHASE 6 CHECKLIST

Navigation & Structure:
☐ Header 64-80px, sticky mit scroll-shadow
☐ Header bg hat backdrop-blur glass effect
☐ Logo links, korrekte Größe, Home-Link
☐ Primary Nav Links: max 7 items (Miller's Law)
☐ Nav Links haben Hover + Active State mit Animation
☐ Mobile Menu: Full-Screen mit Staggered Entrance
☐ Hamburger Icon morphs zu X bei Click
☐ Mobile Menu Items min. 48px height
☐ Focus Trap im Mobile Menu implementiert
☐ Body-Scroll disabled bei offenem Menu

Wayfinding & User Orientation:
☐ Breadcrumbs vorhanden (falls 2+ Seiten-Ebenen)
☐ Footer Navigation: 3-4 Spalten, Kontakt prominent
☐ Footer CTA Button "Jetzt Kontakt"
☐ Back-to-Top Button bei 300px Scroll
☐ Section Anchors mit smooth-scroll
☐ Visual Landmarks (Section Variation in BG/Border)

Cognitive Load Management:
☐ Hick's Law: 1 Primary CTA pro Section
☐ Fitts's Law: Buttons 48px+, 44px Touch-Area min.
☐ Spacing zwischen Interactive Elementen: gap-3+
☐ Progressive Disclosure (Accordions für Listen)
☐ Konsistente Button Styling über alle Pages

User Flow & Conversion:
☐ Goldener Pfad: Landing → Service → Trust → Action
☐ Keine Dead Ends (jede Section hat Next-Step)
☐ Sticky CTA auf Mobile nach 200px Scroll
☐ CTA-Hierarchy klar (Primary > Secondary > Tertiary)
☐ Form eingebunden (Formspree) oder Calendly Booking

Code Quality:
☐ Alle Animationen mit CSS Transitions/Keyframes (kein Flicker)
☐ Mobile Menu: ARIA Labels, Semantic HTML (<nav>, <menu>)
☐ Keyboard Navigation funktioniert (Tab, Esc, Arrow Keys)
☐ No Dark Mode, no Sentry, only Formspree + Calendly
☐ TypeScript strict mode, Tailwind utilities nur

Handoff Status:
☐ .ai-design-context.md aktualisiert
☐ .design-upgrade-state.md aktualisiert
☐ Phase 6 COMPLETE, Ready for Phase 7


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: LANDING PAGE PREMIUM PATTERNS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-46: SCROLL-SNAP SECTIONS (FULLSCREEN STORYTELLING)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Fullscreen-Sections mit Scroll-Snap erzeugen ein App-artiges
  Seitenuebergangs-Gefuehl. Jede Section ist eine eigene "Slide".
  Inspiriert von: Antigravity "Snap-Stop Scroll-Trigger".

  PFLICHT-IMPLEMENTIERUNG:
    Hero + 3-5 Key-Sections als scroll-snap Container.
    Jede Section: min-height: 100vh, scroll-snap-align: start.
    KEIN Scroll-Hijacking — User kann weiterhin frei scrollen.
    Snap ist ein VORSCHLAG, kein Zwang (scroll-snap-type: y proximity).

  CSS-PATTERN:
    Der aeussere Container (snap-container) erhaelt scroll-snap-type auf
    y proximity (vertikales Snapping im sanften Modus — der Browser schlaegt
    Snap-Positionen vor, erzwingt sie aber nicht). Dazu overflow-y auto fuer
    Scroll-Faehigkeit und height 100vh fuer volle Viewport-Hoehe.
    Jede einzelne Section (snap-section) erhaelt scroll-snap-align start
    (Snap-Punkt am oberen Rand), eine Mindesthoehe von 100vh, und wird als
    Flexbox mit zentrierter Ausrichtung (align-items center, justify-content
    center) dargestellt, sodass der Inhalt vertikal und horizontal zentriert ist.

  KRITISCHE REGELN:
    IMMER "proximity" verwenden, NIEMALS "mandatory" (frustriert User).
    Mobile: Scroll-Snap deaktivieren unter 768px (zu restriktiv auf Touch).
    Keyboard-Navigation muss zwischen Sections funktionieren.
    Jede Section braucht eine eigene Entrance-Animation (CC-37).

CHEATCODE CC-47: HORIZONTALE SCROLL-MARQUEE (SOCIAL PROOF BAND)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Endlos scrollende Logos/Testimonials signalisieren Vertrauen
  und Aktivitaet. Der "running ticker" Effekt.

  PFLICHT-IMPLEMENTIERUNG:
    Unendlicher Loop: Content wird dupliziert fuer nahtlosen Uebergang.
    CSS-only Animation (translateX, keine JS).
    Pause on Hover (animation-play-state: paused).
    2 Geschwindigkeiten: Normal (30s Loop) und Schnell (15s Loop).

  CSS-PATTERN:
    Der aeussere Marquee-Container erhaelt overflow hidden und white-space
    nowrap, damit der Inhalt horizontal ueberlaufen kann ohne umzubrechen.
    Die innere Track-Ebene (marquee-track) wird als Flex-Container mit 48px
    Gap zwischen den Elementen dargestellt und erhaelt eine Animation namens
    marquee-scroll mit 30 Sekunden Dauer, linearem Easing und unendlicher
    Wiederholung. Bei Hover auf dem aeusseren Container wird die
    animation-play-state des Tracks auf paused gesetzt (Pause bei
    Mausberuehrung). Die Keyframe-Animation verschiebt den Track von
    translateX(0) zu translateX(-50%) — da der Inhalt dupliziert wird,
    entsteht ein nahtloser unendlicher Loop-Effekt.

  EINSATZGEBIETE:
    Kunden-Logos ("Vertraut von...") — unter dem Hero
    Testimonial-Snippets — als Trenn-Element zwischen Sections
    Tech-Stack-Icons — in About/Team-Sections
    Auszeichnungen/Zertifikate — im Footer-Bereich


═══ CHAIN-EXIT-FOOTER ═══ SEQ-47 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — 36 LANDING-PAGE-ARCHETYPEN (AUS DOC 09)
═══════════════════════════════════════════════════════════════════════════════

DIE PIPELINE VERFUEGT UEBER 36 KONVERSIONS-OPTIMIERTE LANDING-PAGE-ARCHETYPEN.
DER ARCHETYP WIRD DURCH DAS PRODUKT-VERTIKAL BESTIMMT (DOC 10 MAPPING).

HIGH-CONVERSION STANDARDS (1-10):
  1. Hero + Features + CTA: Standard SaaS. Parallax Hero, Feature Card Hover Lift.
     CTA Kontrast 7:1. Sticky Navbar CTA.
  2. Hero + Testimonials + CTA: Social Proof fokussiert. Testimonials VOR Primary CTA.
  3. Product Demo + Features: Interaction-First. Embedded Mockup/Auto-Play Video.
  4. Minimal Single Column: Kein Ablenkung. Direkt Text + Single CTA. Kein Nav-Clutter.
  5. Funnel (3-Step): Step-Farben (Rot=Problem, Orange=Prozess, Gruen=Loesung).
  6. Comparison Table + CTA: "Wir vs Andere". Eigene Reihe hervorheben.
  7. Lead Magnet + Form: Single Intent. Form-Felder <= 3.
  8. Pricing Page + CTA: Empfohlenen Tier hervorheben. Monthly/Yearly Toggle.
  9. Video-First Hero: Dark Overlay 60% auf Auto-Play Video. Weisser Text.
  10. Scroll-Triggered Storytelling: Narrative per Scroll. Kapitel-Farb-Transitions.

SPEZIALISIERTE ARCHETYPEN (11-36):
  11. AI Personalization: Dynamischer Hero-Swap basierend auf Segment.
  12. Waitlist/Coming Soon: Countdown, Email-Form above fold, Scarcity.
  15. App Store Style: Device-Mockups, Karussell-Screenshots, Store-Badges.
  17. Immersive/Interactive: WebGL/3D, gamifiziert. MUSS Skip-Option enthalten.
  21. Before-After Transformation: Slider-Interaktion. Grau vs Vibrant.
  22. Marketplace/Directory: Massive Search-Bar als Primary CTA.
  26. Portfolio Grid: Masonry Grid. Hover Overlay Info. Lazy Loading kritisch.
  28. Bento Grid Showcase: Apple-Style. Tilt-Effekt, Staggered Reveals.
  30. AI-Driven Dynamic Landing: Try-It Input im Hero. Generierung bei Click.

STRUKTURELLE ORDNUNGS-LOGIK:
  Fuer JEDEN Landing-Page-Archetyp die exakte Section-Reihenfolge einhalten.
  Abweichung bricht das psychologische Conversion-Mapping.
  Alle Strukturelemente MUESSEN die Aesthetik-Definitionen aus Doc 08 verwenden.

SEKTION-LAYOUT-PATTERNS (AUS DOC 18):
  Hero: min-h-[80vh] flex items-center, max-w-4xl text-center space-y-6
  Feature Grid: py-16, max-w-6xl mx-auto, grid md:grid-cols-2 lg:grid-cols-3 gap-8
  Two-Column: grid lg:grid-cols-2 gap-12 items-center
  Container: mx-auto max-w-7xl px-4 sm:px-6 lg:px-8

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

SSOT DIRECTIVE: Der Code ist die einzige Wahrheit.
Responsive-Implementierungen müssen im Code GELTEN, nicht in .ai-design-context.md.

  PREVIEW-VALIDIERUNG (SCHRITT D.5 — NUR DESIGN-PHASEN):
   [ ] Screenshots in 3 Viewports generiert (375px, 768px, 1440px)
   [ ] Phi-Proportions-Check bestanden (Layout 61.8%/38.2%)
   [ ] 60-30-10-Farbregel validiert
   [ ] Fokuspunkt-Hierarchie verifiziert (1 primaer, 2-3 sekundaer)
   [ ] 5-Sekunden-Anti-AI-Look-Test bestanden (min. 6X)
   [ ] Vorher-Nachher-Vergleich erstellt
   [ ] Visuelle Regression geprueft (max 5% Pixel-Abweichung)

1. ATOMIC VALIDATION (NICHT VERHANDELBAR):
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS
   □ npm run dev → Website responsive auf 375px, 768px, 1440px
   □ Lighthouse Performance ≥ 90 auf Mobile & Desktop
   □ Lighthouse Responsive Design ✓ (getestet auf sm:, md:, lg:, xl:, 2xl:)

2. RESPONSIVE-SPEZIFISCHE VALIDIERUNGEN:
   □ Mobile (375px): Alle Content sichtbar, kein Horizontalscroll, Touch-Targets ≥40px
   □ Tablet (768px): Layout adaptiert, keine Spacing-Anomalien
   □ Desktop (1440px): Full-Width-Layouts optimal, Container-Max-Widths respektiert
   □ Breakpoint-Konsistenz: Alle responsive Changes verwenden standardisierte Breakpoints
   □ Grid Behavior: 1-Spalte (Mobile) → 2-Spalte (Tablet) → 3-4 Spalte (Desktop)
   □ Typography Responsive: Fonts skalieren via clamp() (kein Media-Query Jump)
   □ Image Responsive: srcset/sizes verwendet, <picture> für Art Direction (falls nötig)
   □ Hamburger Menu: Mobile Navigation funktioniert, Drawer animiert smooth
   □ Form Fields: Mobile-Input-Optimiert (Keyboard-Type, Size, Padding)

3. STATE UPDATE (DOKUMENTATION ERFORDERLICH):
   □ .pipeline-master-state.md → SEQ-37 als ✅ COMPLETED markieren
   □ Build-Metriken: [TIMESTAMP] SEQ-37 | Build: SUCCESS | Duration: Xm Ys | Responsive-Breakpoints: 5 | Errors: 0
   □ Breakpoint-Strategy Snapshot (Pixel-Werte, CSS-Klassen)

4. DESIGN-CONTEXT CHECKPOINT:
   □ .ai-design-context.md Sektion "Breakpoints & Responsive-Strategy" vollständig (≥1500 Wörter)
   □ Breakpoints dokumentiert mit Pixel-Werten (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
   □ Grid Layout dokumentiert pro Breakpoint (1-Spalte → 2 → 3-4)
   □ Typography Responsive-Strategie dokumentiert (clamp() Nutzung)
   □ Image Responsive-Strategie dokumentiert (srcset, sizes, Picture Element)
   □ Touch-Target Größen dokumentiert (≥40px Mobile, ≥32px Desktop)
   □ Mobile-First Strategie dokumentiert (base Styles für Mobile, dann erweitern)

5. A11Y CHECKPOINT:
   □ Touch-Targets: Mobile ≥40px × 40px (Finger-Größe)
   □ Spacing: Mobile Padding/Margin > Desktop (weniger Space auf kleinen Screens)
   □ Text-Readability: Zeilenlänge auf Mobile sinnvoll (nicht zu breit)
   □ Focus-Order: Keyboard Navigation funktioniert auf allen Breakpoints

6. AUTOMATISCHER HANDOFF ZU SEQ-38:
   → NÄCHSTE PHASE: SEQ-48 → DESIGN-PHASE-07.md (Visual Hierarchy & Contrast Audit)

   HANDOFF-NOTIZ:
   "Phase SEQ-37 hat Responsive Refinement komplett definiert.
   ALLE Breakpoints sind standardisiert, getestet, a11y-optimiert.
   Layouts skalieren smooth von 375px → 1440px.

   READY STATE: Website ist fully responsive, Mobile-first optimiert ✓"

   → Lese DESIGN-PHASE-07.md CHAIN-LINK-HEADER
   → Starte SEQ-38 mit aktuellem .ai-design-context.md als Input

═══ PHASE SEQ-37 → SEQ-38: HANDOFF AKTIV ═══
