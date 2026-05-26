═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY DESIGN-KREATIVITAETS-DIREKTIVE
Version: 1.0.0
Autoritaet: Governance-Dokument (Rang 2 — direkt unter ENFORCEMENT-DIRECTIVES)
Geltungsbereich: Alle Design-Phasen (DESIGN-PHASE-01 bis DESIGN-PHASE-10),
                 DESIGN-TOKENS.md, alle visuellen Entscheidungen der Pipeline
Letzte Aktualisierung: 2026-04-05
═══════════════════════════════════════════════════════════════════════════════

PFLICHTLEKTUERE-REFERENZ:
  Vor Ausfuehrung JEDER Design-Phase MUSS dieses Dokument vollstaendig
  gelesen und internalisiert werden. Es ergaenzt die ENFORCEMENT-DIRECTIVES
  um die vierte Direktive: KONTROLLIERTE KREATIVITAET.

  Zugehoerige Pflichtdokumente:
  - ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (hoechste Autoritaet)
  - ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md (Ausfuehrungsautoritaet)
  - DESIGN-TOKENS.md (Token-Definitionen, SSOT fuer visuelle Werte)
  - CONTEXT-HUB.md (Kontext-Dateien-Registry)

═══════════════════════════════════════════════════════════════════════════════
SEKTION 1: PRAEMBEL — KONTROLLIERTE KREATIVITAET ALS VIERTE DIREKTIVE
═══════════════════════════════════════════════════════════════════════════════

  Kreativitaet ohne Kontrolle ist Chaos. Kontrolle ohne Kreativitaet ist
  Stagnation. Die Antigravity-Pipeline operiert im Spannungsfeld zwischen
  beiden Extremen und loest diesen Widerspruch durch ein wissenschaftlich
  fundiertes Regelwerk, das Kreativitaet nicht einschraenkt, sondern
  kanalisiert.

  KERNPRINZIP:
  Jede visuelle Entscheidung in der Pipeline MUSS durch mindestens eines
  der folgenden vier Fundamente begruendet sein:
    1. Mathematische Proportion (Goldener Schnitt / Phi)
    2. Farbpsychologie und Wahrnehmungswissenschaft
    3. Visuelle Fuehrung und Aufmerksamkeitssteuerung
    4. Validierung durch Preview-Funktion

  Entscheidungen, die auf keinem dieser Fundamente stehen, sind
  willkuerlich und werden vom Validierungssystem abgelehnt.

  SSOT-VERANKERUNG:
  Der Code ist die Single Source of Truth. Design-Tokens im Code
  ueberschreiben jede Dokumentation. Dieses Dokument definiert die
  REGELN, nach denen Tokens gesetzt werden — nicht die Tokens selbst.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 2: GOLDENER SCHNITT — MATHEMATISCHE AESTHETIK (PHI = 1.618033988749)
═══════════════════════════════════════════════════════════════════════════════

  Der Goldene Schnitt (Phi, 1.618...) ist keine aesthetische Meinung,
  sondern ein mathematisches Verhaeltnis, das in Natur, Architektur und
  Kunst als harmonisch wahrgenommen wird. Die Pipeline nutzt Phi als
  Grundlage fuer alle proportionalen Entscheidungen.

─────────────────────────────────────────────────────────────────────────────
2.1 LAYOUT-PROPORTIONEN
─────────────────────────────────────────────────────────────────────────────

  REGEL 2.1.1 — CONTENT-SIDEBAR-VERHAELTNIS:
  Bei zweispaltigen Layouts MUSS das Verhaeltnis Content:Sidebar
  dem Goldenen Schnitt entsprechen:
    Content-Breite = Gesamtbreite * (1 / (1 + 1/PHI)) = ~61.8%
    Sidebar-Breite = Gesamtbreite * (1 / (1 + PHI))   = ~38.2%

  REGEL 2.1.2 — HERO-SECTION-PROPORTIONEN:
  Hero-Bereiche MUESSEN mindestens eine Phi-Proportion aufweisen:
    - Bild-zu-Text-Verhaeltnis: 61.8% : 38.2% (oder umgekehrt)
    - Vertikale Teilung: Headline bei 38.2% der Hero-Hoehe
    - CTA-Platzierung: Im unteren Phi-Punkt (61.8% der Hoehe)

  REGEL 2.1.3 — GRID-DIVISIONEN:
  CSS-Grid-Definitionen SOLLEN Phi-basierte Spaltenverhaeltnisse nutzen:
    Zwei Spalten:  1fr 1.618fr  (oder 1.618fr 1fr)
    Drei Spalten:  1fr 1.618fr 1fr
    Asymmetrisch:  1fr 2.618fr  (Phi zum Quadrat)

  REGEL 2.1.4 — CONTAINER-VERSCHACHTELUNG:
  Verschachtelte Container SOLLEN ihre Breite um den Faktor 1/PHI
  reduzieren. Ein aeusserer Container von 1200px ergibt:
    Ebene 1: 1200px
    Ebene 2: 741px  (1200 / PHI)
    Ebene 3: 458px  (741 / PHI)

─────────────────────────────────────────────────────────────────────────────
2.2 TYPOGRAFIE-SKALIERUNG
─────────────────────────────────────────────────────────────────────────────

  REGEL 2.2.1 — PHI-BASIERTE SCHRIFTGROESSEN-SKALA:
  Die primaere Typografie-Skala KANN auf Phi basieren (Alternative zur
  bestehenden Skala in DESIGN-TOKENS.md). Beide Skalen sind zulaessig:

  PHI-SKALA (Referenz):
    base:    1.000rem  (16px)
    sm:      0.618rem  (9.9px — Minimum fuer Lesbarkeit)
    md:      1.000rem  (16px)
    lg:      1.618rem  (25.9px)
    xl:      2.618rem  (41.9px — PHI^2)
    2xl:     4.236rem  (67.8px — PHI^3)
    3xl:     6.854rem  (109.7px — PHI^4)
    display: 11.089rem (177.4px — PHI^5)

  INTEGRATION MIT DESIGN-TOKENS:
  Falls die bestehende Skala in DESIGN-TOKENS.md abweicht, gilt der Code
  als SSOT. Die Phi-Skala dient als Orientierung, nicht als Zwang.

  REGEL 2.2.2 — ZEILENHOEHE AUS PHI:
  Empfohlene Zeilenhoehen basierend auf Phi:
    Fliesstext:     1.618 (exakt Phi)
    Ueberschriften: 1.2 bis 1.3 (visuell kompakter)
    Display-Text:   1.0 bis 1.1 (eng gesetzt)

  REGEL 2.2.3 — VERTIKALER RHYTHMUS:
  Der vertikale Abstand zwischen Textbloecken SOLL ein Vielfaches der
  Basis-Zeilenhoehe sein, skaliert mit Phi:
    Absatz-Abstand:    1 * Basiszeile
    Sections-Abstand:  PHI * Basiszeile
    Kapitel-Abstand:   PHI^2 * Basiszeile

─────────────────────────────────────────────────────────────────────────────
2.3 SPACING UND ABSTANDS-SYSTEM
─────────────────────────────────────────────────────────────────────────────

  REGEL 2.3.1 — PHI-SPACING-SKALA:
  Ergaenzend zum 8px-Grid in DESIGN-TOKENS.md KANN eine Phi-basierte
  Spacing-Skala verwendet werden:
    xs:   4px   (8 / 2)
    sm:   8px   (Basis)
    md:   13px  (8 * PHI, gerundet)
    lg:   21px  (13 * PHI, gerundet)
    xl:   34px  (21 * PHI, gerundet — Fibonacci!)
    2xl:  55px  (34 * PHI, gerundet — Fibonacci!)
    3xl:  89px  (55 * PHI, gerundet — Fibonacci!)

  BEACHTE: Die Fibonacci-Folge konvergiert gegen Phi. Fibonacci-Werte
  sind daher automatisch Phi-kompatibel und mit dem 8px-Grid vereinbar
  wenn die Basis 8 betraegt.

  REGEL 2.3.2 — INNEN- VS. AUSSEN-SPACING:
  Padding (innen) und Margin (aussen) SOLLEN im Phi-Verhaeltnis stehen:
    Wenn Padding = X, dann Margin = X * PHI (oder umgekehrt)

  REGEL 2.3.3 — KOMPONENTENABSTAENDE:
  Abstaende zwischen Komponenten SOLLEN der Phi-Skala folgen:
    Zwischen verwandten Elementen:   sm (8px)
    Zwischen Gruppen:                md (13px) oder lg (21px)
    Zwischen Sektionen:              xl (34px) oder 2xl (55px)
    Zwischen Hauptbereichen:         3xl (89px)

─────────────────────────────────────────────────────────────────────────────
2.4 BILD- UND MEDIEN-PROPORTIONEN
─────────────────────────────────────────────────────────────────────────────

  REGEL 2.4.1 — GOLDENE SEITENVERHAELTNISSE:
  Bilder und Medienelemente SOLLEN eines dieser Verhaeltnisse nutzen:
    Goldenes Rechteck:  1 : 1.618 (exakt)
    Doppeltes Quadrat:  1 : 2 (nah an PHI + 0.382)
    Photograph-Standard: 2 : 3 (0.667, nah an 1/PHI = 0.618)
    Widescreen:         9 : 16 (0.5625, akzeptable Abweichung)

  REGEL 2.4.2 — BILD-BESCHNITT NACH PHI:
  Wenn Bilder beschnitten werden, SOLL der Fokuspunkt auf einem
  Phi-Schnittpunkt liegen (analog zur Drittel-Regel, aber praeziser):
    Horizontaler Phi-Punkt: 38.2% oder 61.8% der Bildbreite
    Vertikaler Phi-Punkt:   38.2% oder 61.8% der Bildhoehe

  REGEL 2.4.3 — LOGO-PROPORTIONEN:
  Logo-Container SOLLEN im Goldenen Rechteck dimensioniert werden.
  Mindest-Freiraum um das Logo: Hoehe des Logos / PHI auf jeder Seite.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 3: FARBVERSTAENDNIS, WAHRNEHMUNG UND FUEHRUNG
═══════════════════════════════════════════════════════════════════════════════

  Farbe ist das maechtigste Werkzeug der visuellen Kommunikation. Sie
  wird 60.000 Mal schneller verarbeitet als Text und loest unmittelbare
  emotionale Reaktionen aus. Die Pipeline behandelt Farbe nicht als
  Dekoration, sondern als strategisches Kommunikationsinstrument.

─────────────────────────────────────────────────────────────────────────────
3.1 FARBPSYCHOLOGIE NACH BRANCHEN-VERTIKALEN
─────────────────────────────────────────────────────────────────────────────

  REGEL 3.1.1 — BRANCHEN-FARBMATRIX:
  Die Primaerfarbe MUSS zur Branche des Kunden passen. Wenn der bestehende
  Code bereits Farben definiert (SSOT), werden diese beibehalten, aber
  auf psychologische Konsistenz geprueft.

  MATRIX (Branche → Empfohlene Primaerfarben → Psychologische Wirkung):

  Technologie/SaaS:
    Primaer: Blau (#0066FF bis #2563EB), Cyan, Indigo
    Wirkung: Vertrauen, Innovation, Zuverlaessigkeit, Kompetenz
    Vermeiden: Warme Toene als Primaerfarbe (wirkt unserioes)

  Gesundheit/Medizin:
    Primaer: Blau (#0EA5E9), Gruen (#10B981), Weiss
    Wirkung: Sauberkeit, Vertrauen, Heilung, Ruhe
    Vermeiden: Rot als Primaerfarbe (Assoziation: Gefahr, Blut)

  Finanzen/Banking:
    Primaer: Dunkelblau (#1E3A5F), Gold (#C9A84C), Gruen
    Wirkung: Stabilitaet, Wohlstand, Serioesitaet, Tradition
    Vermeiden: Grelle Farben (wirkt unserioes)

  E-Commerce/Retail:
    Primaer: Orange (#F97316), Rot (#EF4444), Gruen (Kaufsignal)
    Wirkung: Dringlichkeit, Energie, Kaufimpuls, Vertrauen
    Vermeiden: Gedaempfte Farben fuer CTAs

  Umwelt/Nachhaltigkeit:
    Primaer: Gruen (#22C55E bis #16A34A), Erdtoene, Braun
    Wirkung: Natur, Wachstum, Nachhaltigkeit, Authentizitaet
    Vermeiden: Kuenstlich wirkende Neonfarben

  Luxus/Premium:
    Primaer: Schwarz (#0A0A0A), Gold (#D4AF37), Tiefes Violett
    Wirkung: Exklusivitaet, Eleganz, Zeitlosigkeit, Prestige
    Vermeiden: Billig wirkende Farbkombinationen

  Bildung/EdTech:
    Primaer: Blau (#3B82F6), Orange (#FB923C), Violett (#8B5CF6)
    Wirkung: Wissen, Neugier, Kreativitaet, Zugaenglichkeit
    Vermeiden: Zu konservative Paletten (wirkt langweilig)

  Gastronomie/Food:
    Primaer: Rot (#DC2626), Orange (#EA580C), Gelb (#EAB308)
    Wirkung: Appetit, Waerme, Energie, Einladung
    Vermeiden: Blau (appetithemmend), Grau

  Kreativ/Agentur:
    Primaer: Violett (#7C3AED), Pink (#EC4899), Gradient-Kombinationen
    Wirkung: Kreativitaet, Innovation, Kuhnheit, Einzigartigkeit
    Vermeiden: Generische Corporate-Farben

  Recht/Kanzlei:
    Primaer: Dunkelblau (#1E40AF), Burgunder (#7F1D1D), Grau (#374151)
    Wirkung: Autoritaet, Tradition, Vertrauenswuerdigkeit, Serioesitaet
    Vermeiden: Verspielte oder trendige Farben

─────────────────────────────────────────────────────────────────────────────
3.2 FARBWAHRNEHMUNG UND VISUELLE HIERARCHIE
─────────────────────────────────────────────────────────────────────────────

  REGEL 3.2.1 — 60-30-10-REGEL (UNVERLETZLICH):
  Jede Seite MUSS die 60-30-10-Farbregel einhalten:
    60% — Dominante Farbe (Hintergrund, grosse Flaechen)
    30% — Sekundaere Farbe (Sektionen, Cards, Bereiche)
    10% — Akzentfarbe (CTAs, Links, Highlights, Icons)

  VALIDATION: Eine automatisierte Pruefung SOLL die Flaechenanteile
  der drei Farbgruppen messen. Abweichungen >5% erfordern Begruendung.

  REGEL 3.2.2 — FARBGEWICHT UND AUFMERKSAMKEIT:
  Farben haben visuelles "Gewicht". Schwerere Farben ziehen mehr
  Aufmerksamkeit an:
    Schwerstes Gewicht: Gesaettigte warme Farben (Rot, Orange)
    Mittleres Gewicht:  Gesaettigte kuehle Farben (Blau, Gruen)
    Leichtestes Gewicht: Ungesaettigte Farben, Pastelltoene, Grau

  ANWENDUNG:
    - CTAs MUESSEN die schwerste verfuegbare Akzentfarbe nutzen
    - Hintergruende MUESSEN die leichteste Farbe nutzen
    - Sekundaere Elemente MUESSEN zwischen CTA und Hintergrund liegen
    - Deaktivierte Elemente MUESSEN deutlich leichter sein als aktive

  REGEL 3.2.3 — FARBTEMPERATUR UND EMOTIONALE STEUERUNG:
  Die Farbtemperatur einer Seite MUSS konsistent mit ihrer Funktion sein:
    Warme Seiten (Rot/Orange/Gelb-dominiert):
      Geeignet fuer: Landing Pages, CTAs, Angebote, Emotionale Inhalte
      Wirkung: Energie, Dringlichkeit, Naehe, Waerme

    Kuehle Seiten (Blau/Gruen/Violett-dominiert):
      Geeignet fuer: Dashboards, Dokumentation, Analytik, Informationen
      Wirkung: Ruhe, Objektivitaet, Professionalitaet, Vertrauen

    Neutrale Seiten (Grau/Weiss/Schwarz-dominiert):
      Geeignet fuer: Formulare, Einstellungen, Content-lastige Seiten
      Wirkung: Klarheit, Reduktion, Fokus auf Inhalt

  REGEL 3.2.4 — KONTRAST-HIERARCHIE (UEBER WCAG HINAUS):
  WCAG AA/AAA definiert Mindestkontraste. Die Pipeline geht weiter:
    Primaerer Text:     Kontrastratio >= 7:1 (WCAG AAA)
    Sekundaerer Text:   Kontrastratio >= 4.5:1 (WCAG AA)
    Grosser Text (24px+): Kontrastratio >= 3:1 (WCAG AA Large)
    Interaktive Elemente: Kontrastratio >= 3:1 gegen Nachbarn
    Deaktivierte Elemente: Kontrastratio >= 2:1 (sichtbar aber gedaempft)

  ZUSAETZLICH:
    - Farbkombinationen MUESSEN auf Deuteranopie, Protanopie und
      Tritanopie getestet werden (Farbenblindheit-Simulation)
    - Informationen DUERFEN NIEMALS nur durch Farbe codiert werden
    - Jede Farbcodierung MUSS durch Form, Text oder Muster ergaenzt werden

─────────────────────────────────────────────────────────────────────────────
3.3 FARBFUEHRUNG — AUFMERKSAMKEIT DURCH FARBE LENKEN
─────────────────────────────────────────────────────────────────────────────

  REGEL 3.3.1 — CHROMATISCHE PROGRESSION:
  Die Farbintensitaet SOLL entlang des Nutzer-Flows zunehmen:
    Einstieg (Hero):        Reduziert, einladend, dominant neutral
    Orientierung (Content): Sekundaerfarbe fuehrt Augen durch Sektionen
    Konversion (CTA):       Maximale Farbintensitaet, hoechster Kontrast

  REGEL 3.3.2 — ISOLATION DURCH FARBE:
  Ein einzelnes farbiges Element in einer monochromen Umgebung erzeugt
  maximale Aufmerksamkeit (Von-Restorff-Effekt):
    - CTAs SOLLEN farblich isoliert sein (einziges Element in Akzentfarbe)
    - Nicht mehr als 2 Elemente pro Viewport im Akzentton
    - Warnungen/Fehler nutzen eine exklusive Signalfarbe (Rot)

  REGEL 3.3.3 — FARBUEBERGAENGE:
  Farbuebergaenge zwischen Sektionen MUESSEN harmonisch sein:
    Erlaubt: Uebergaenge innerhalb einer Farbfamilie (Hell-zu-Dunkel)
    Erlaubt: Komplementaer-Kontraste mit neutralem Puffer dazwischen
    Verboten: Abrupte Wechsel zwischen zwei gesaettigten Farben
    Verboten: Mehr als 3 verschiedene Hintergrundfarben pro Seite

  REGEL 3.3.4 — DARK-MODE-FARBFUEHRUNG:
  Im Dark Mode MUESSEN alle Farbregeln neu kalibriert werden:
    - Primaerfarben: Saettigung um 10-20% reduzieren (gegen Augenbelastung)
    - Hintergrund: Nicht reines Schwarz (#000), sondern Dunkelgrau (#121212)
    - Text: Nicht reines Weiss (#FFF), sondern Off-White (#E5E5E5)
    - Akzentfarben: Helligkeit um 10-15% erhoehen fuer Sichtbarkeit
    - Schatten: Werden zu subtilen Lichteffekten (Glow statt Shadow)
    - Kontrast-Hierarchie bleibt identisch (Ratios bleiben gleich)

═══════════════════════════════════════════════════════════════════════════════
SEKTION 4: VISUELLE FUEHRUNG UND AUFMERKSAMKEITSSTEUERUNG
═══════════════════════════════════════════════════════════════════════════════

  Das menschliche Auge folgt vorhersagbaren Mustern. Die Pipeline nutzt
  diese Muster, um Nutzer intuitiv durch Inhalte zu fuehren, ohne dass
  sie bewusst navigieren muessen.

─────────────────────────────────────────────────────────────────────────────
4.1 BLICKVERLAUFSMUSTER (EYE-TRACKING-PATTERNS)
─────────────────────────────────────────────────────────────────────────────

  REGEL 4.1.1 — F-MUSTER (CONTENT-LASTIGE SEITEN):
  Fuer textlastige Seiten (Blog, Dokumentation, Artikel) gilt:
    1. Starke erste Zeile (volle Breite lesen)
    2. Absinken auf linke Seite
    3. Zweiter horizontaler Scan (kuerzer als erster)
    4. Vertikales Scannen der linken Kante

  KONSEQUENZ FUER DAS DESIGN:
    - Wichtigste Information in den ersten 2 Zeilen
    - Ueberschriften linksbuendig (nicht zentriert)
    - Hervorhebungen am Zeilenanfang platzieren
    - Rechte Spalte fuer sekundaere Informationen

  REGEL 4.1.2 — Z-MUSTER (LANDING PAGES, MARKETING):
  Fuer visuelle Seiten mit wenig Text gilt:
    1. Links oben → Rechts oben (horizontaler Scan)
    2. Rechts oben → Links unten (diagonaler Scan)
    3. Links unten → Rechts unten (horizontaler Scan)

  KONSEQUENZ FUER DAS DESIGN:
    - Logo: Links oben (Startpunkt)
    - Navigation/Key Action: Rechts oben (erster Fixationspunkt)
    - Hero-Bild/Content: Zentrale Diagonale
    - CTA: Rechts unten (Endpunkt, Konversion)

  REGEL 4.1.3 — GUTENBERG-DIAGRAMM (AUSGEWOGENE LAYOUTS):
  Fuer ausgewogene Seiten mit gemischtem Content:
    Primaerer Bereich (links oben):     Hoechste natuerliche Aufmerksamkeit
    Starker Leerlauf (rechts oben):     Zweite Aufmerksamkeitszone
    Schwacher Leerlauf (links unten):   Geringste natuerliche Aufmerksamkeit
    Terminaler Bereich (rechts unten):  Abschluss-Aufmerksamkeit (CTA!)

  ANWENDUNG:
    - Markenelemente: Primaerer Bereich (links oben)
    - CTA/Konversion: Terminaler Bereich (rechts unten)
    - Sekundaere Navigation: Starker Leerlauf (rechts oben)
    - Nebensaechliches: Schwacher Leerlauf (links unten)

─────────────────────────────────────────────────────────────────────────────
4.2 VISUELLES GEWICHT UND BALANCE
─────────────────────────────────────────────────────────────────────────────

  REGEL 4.2.1 — GEWICHTSFAKTOREN:
  Jedes visuelle Element hat ein Gewicht, bestimmt durch:
    Groesse:     Groessere Elemente sind schwerer
    Farbe:       Gesaettigte/dunkle Farben sind schwerer
    Kontrast:    Hoher Kontrast zum Hintergrund = schwerer
    Isolation:   Isolierte Elemente wirken schwerer als gruppierte
    Komplexitaet: Komplexe Formen sind schwerer als einfache
    Position:    Elemente am Rand sind schwerer als im Zentrum

  REGEL 4.2.2 — ASYMMETRISCHE BALANCE:
  Perfekte Symmetrie wirkt statisch und langweilig. Die Pipeline
  bevorzugt asymmetrische Balance:
    - Ein grosses, leichtes Element balanciert ein kleines, schweres
    - Content-Bereiche (gross, hell) balancieren CTAs (klein, farbig)
    - Whitespace auf einer Seite balanciert Content auf der anderen

  REGEL 4.2.3 — FOKUSPUNKT-HIERARCHIE:
  Jeder Viewport MUSS genau EINEN primaeren Fokuspunkt haben:
    Primaer:   1 Element (CTA, Headline, Hero-Bild)
    Sekundaer: 2-3 Elemente (unterstuetzende Information)
    Tertiaer:  Alles andere (Navigation, Footer, Meta-Info)

  VALIDATION:
    5-Sekunden-Test: Wird der primaere Fokuspunkt innerhalb von
    5 Sekunden wahrgenommen? Wenn nicht → Redesign erforderlich.

─────────────────────────────────────────────────────────────────────────────
4.3 WHITESPACE ALS DESIGN-WERKZEUG
─────────────────────────────────────────────────────────────────────────────

  REGEL 4.3.1 — MIKRO-WHITESPACE:
  Abstaende innerhalb von Komponenten (Padding, Line-Height, Letter-Spacing):
    - MUSS konsistent mit der Spacing-Skala sein
    - MUSS ausreichend fuer Lesbarkeit und Touch-Targets (min 44px)
    - DARF NICHT komprimiert werden, um "mehr Content" unterzubringen

  REGEL 4.3.2 — MAKRO-WHITESPACE:
  Abstaende zwischen Sektionen und Hauptbereichen:
    - MUSS proportional zur Inhalts-Wichtigkeit sein
    - Mehr Whitespace um wichtige Elemente = mehr Aufmerksamkeit
    - MUSS der Phi-Spacing-Skala folgen (SEKTION 2.3)

  REGEL 4.3.3 — AKTIVER WHITESPACE:
  Whitespace ist kein "leerer Raum", sondern ein aktives Designelement:
    - Whitespace um CTAs: Mindestens 2x der CTA-Hoehe auf allen Seiten
    - Whitespace um Headlines: Mindestens 1.5x der Font-Groesse oben und unten
    - Whitespace zwischen Sektionen: Mindestens 2x der internen Spacing

  REGEL 4.3.4 — DICHTE-GRADIENT:
  Die Informationsdichte SOLL von oben nach unten zunehmen:
    Hero (oben):     Minimale Dichte, maximaler Whitespace
    Content (mitte): Mittlere Dichte, ausgewogener Whitespace
    Footer (unten):  Hoechste Dichte, kompakter Whitespace

─────────────────────────────────────────────────────────────────────────────
4.4 VISUELLER RHYTHMUS UND FLOW
─────────────────────────────────────────────────────────────────────────────

  REGEL 4.4.1 — REPETITION MIT VARIATION:
  Wiederholende Elemente (Cards, Listen, Grid-Items) MUESSEN einen
  konsistenten Rhythmus aufweisen:
    - Gleiche Hoehe, gleiche Abstande, gleiche Typografie
    - ABER: Ein Element darf hervorgehoben sein (Featured Card, Highlighted Item)
    - Verhaeltnis: Maximal 1 hervorgehobenes Element pro 5 regulaere

  REGEL 4.4.2 — SEKTIONS-RHYTHMUS:
  Sektionen SOLLEN einem alternierenden Rhythmus folgen:
    - Hell/Dunkel-Wechsel der Hintergruende
    - Links/Rechts-Wechsel bei Bild-Text-Kombinationen
    - Dicht/Luftig-Wechsel bei der Informationsdichte

  REGEL 4.4.3 — SCROLL-RHYTHMUS:
  Der vertikale Scroll-Flow MUSS "Atem-Pausen" einbauen:
    - Nach jedem inhaltlich dichten Abschnitt: Whitespace-Pause
    - Mindestens alle 3-4 Scroll-Viewports: Visueller Ankerpunkt
    - Kein Bereich darf laenger als 2 Viewports ohne visuellen Wechsel sein

  REGEL 4.4.4 — ANIMATIONS-RHYTHMUS:
  Scroll-getriggerte Animationen MUESSEN rhythmisch gestaffelt sein:
    - Stagger-Delay: 50-100ms zwischen sequentiellen Elementen
    - Dauer: 300-500ms fuer Einblendungen, 200-300ms fuer Interaktionen
    - Easing: Immer ease-out fuer Einblendungen, ease-in-out fuer Bewegung
    - NIEMALS: Alle Elemente gleichzeitig animieren (wirkt amateurhaft)

═══════════════════════════════════════════════════════════════════════════════
SEKTION 5: PREVIEW-FUNKTION — VISUELLE VALIDIERUNG IM PIPELINE-LIFECYCLE
═══════════════════════════════════════════════════════════════════════════════

  Die Preview-Funktion ist das Qualitaetssicherungsinstrument fuer alle
  visuellen Entscheidungen. Sie wird in den Domino-Protokoll-Lifecycle
  als Pflichtschritt zwischen Phase-Ausfuehrung (D) und Exit-Validierung
  (E) integriert.

─────────────────────────────────────────────────────────────────────────────
5.1 PREVIEW IM DOMINO-LIFECYCLE (NEUER SCHRITT D.5)
─────────────────────────────────────────────────────────────────────────────

  Der bestehende 7-Schritt-Lifecycle (A-G) wird fuer Design-Phasen um
  einen Unter-Schritt erweitert:

    A — Kontext laden (Context Files lesen)
    B — Bestandscode analysieren (SSOT pruefen)
    C — Tasks ausfuehren (Implementierung)
    D — Validierung (Build/Lint/TSC)
    D.5 — PREVIEW-VALIDIERUNG (NUR DESIGN-PHASEN)
    E — Exit-Protokoll (Domino-Kette pruefen)
    F — Kontext aktualisieren (Context Files schreiben)
    G — Naechste Phase triggern (Auto-Trigger)

  SCHRITT D.5 UMFASST:
    1. Screenshot-Generierung: Automatisierte Screenshots aller
       veraenderten Komponenten/Seiten in 3 Viewports:
         Mobile (375px), Tablet (768px), Desktop (1440px)
    2. Phi-Proportions-Check: Automatisierte Pruefung ob Layout-
       Proportionen den Phi-Regeln aus SEKTION 2 entsprechen
    3. Farb-Audit: Automatisierte Pruefung der 60-30-10-Verteilung,
       Kontrast-Ratios und Farbkonsistenz
    4. Fokuspunkt-Test: Analyse ob primaerer Fokuspunkt erkennbar ist
    5. Visueller Regressions-Check: Vergleich mit vorherigem Stand
       (Pixel-Diff, Schwellwert: max 5% Abweichung in unkritischen Bereichen)

─────────────────────────────────────────────────────────────────────────────
5.2 KOMPONENTEN-PREVIEW-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

  REGEL 5.2.1 — ISOLIERTE KOMPONENTEN-PREVIEW:
  Jede neu erstellte oder wesentlich veraenderte Komponente MUSS
  isoliert gerendert und geprueft werden:
    1. Render in Isolation (Storybook-aehnlich, ohne globalen Kontext)
    2. Render mit Dummy-Daten (lange Texte, kurze Texte, fehlende Bilder)
    3. Render in allen Breakpoints (Mobile, Tablet, Desktop)
    4. Render im Dark Mode und Light Mode

  REGEL 5.2.2 — ANATOMIE-PREVIEW:
  Fuer komplexe Komponenten SOLL ein Anatomie-Overlay generiert werden:
    - Padding und Margin sichtbar machen (Box-Model-Overlay)
    - Phi-Linien einblenden (61.8% und 38.2% Markierungen)
    - Grid-Linien sichtbar machen
    - Typografie-Baseline-Grid einblenden

  REGEL 5.2.3 — EDGE-CASE-PREVIEW:
  Jede Komponente MUSS mit folgenden Edge Cases getestet werden:
    - Leer-Zustand (keine Daten)
    - Ueberlauf-Zustand (extrem lange Inhalte)
    - Minimal-Zustand (kuerzeste moegliche Inhalte)
    - Fehler-Zustand (Fehlermeldungen, Ladezustaende)
    - Deaktiviert-Zustand (disabled, readonly)

─────────────────────────────────────────────────────────────────────────────
5.3 SEITEN-PREVIEW-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

  REGEL 5.3.1 — FULL-PAGE-PREVIEW:
  Nach Abschluss jeder Design-Phase MUSS ein Full-Page-Preview
  aller betroffenen Seiten erstellt werden:
    1. Mobile-First-Pruefung (375px Viewport)
    2. Tablet-Pruefung (768px Viewport)
    3. Desktop-Pruefung (1440px Viewport)
    4. Ultra-Wide-Pruefung (1920px+ Viewport)

  REGEL 5.3.2 — SCROLL-EXPERIENCE-PREVIEW:
  Die komplette Scroll-Erfahrung MUSS geprueft werden:
    - Scroll-Rhythmus: Gibt es "Atempausen"? (REGEL 4.4.3)
    - Animations-Timing: Sind Scroll-Animationen rhythmisch? (REGEL 4.4.4)
    - Content-Dichte: Wird die Dichte-Gradient-Regel eingehalten? (REGEL 4.3.4)
    - Visueller Fluss: Fuehrt die Seite den Nutzer zum CTA?

  REGEL 5.3.3 — VORHER-NACHHER-VERGLEICH:
  Fuer jede modifizierte Seite MUSS ein Side-by-Side-Vergleich
  erstellt werden:
    Links:  Vorheriger Zustand (vor der Phase)
    Rechts: Aktueller Zustand (nach der Phase)
    Delta:  Explizite Benennung aller visuellen Aenderungen

─────────────────────────────────────────────────────────────────────────────
5.4 ANTI-AI-LOOK-PREVIEW (5-SEKUNDEN-TEST)
─────────────────────────────────────────────────────────────────────────────

  REGEL 5.4.1 — 5-SEKUNDEN-VORSCHAU-TEST:
  Jedes Design-Ergebnis MUSS den "5-Sekunden-Test" bestehen:
    1. Erste Impression (0-2 Sekunden):
       - Ist die Marke erkennbar?
       - Ist die Farbstimmung konsistent mit der Branche?
       - Gibt es einen klaren visuellen Fokuspunkt?
    2. Orientierung (2-4 Sekunden):
       - Ist die Navigation auffindbar?
       - Ist die Informationshierarchie klar?
       - Weiss der Nutzer, was er tun soll?
    3. Einzigartigkeit (4-5 Sekunden):
       - Sieht die Seite EINZIGARTIG aus?
       - Ist sie unterscheidbar von Template-Websites?
       - Wuerde man sie auf den ersten Blick als "KI-generiert" erkennen?
       → Wenn ja: SOFORTIGES REDESIGN (10X-Skala Stufe 5 oder hoeher noetig)

  REGEL 5.4.2 — ANTI-TEMPLATE-PRUEFUNG:
  Das Design MUSS sich von gaengigen Templates unterscheiden:
    - Keine Standard-Bootstrap/Tailwind-Layouts ohne Anpassung
    - Keine generischen Stock-Photo-Hero-Sections
    - Keine Cookie-Cutter-Card-Grids ohne visuelle Variation
    - Mindestens 3 einzigartige visuelle Elemente pro Seite

  REGEL 5.4.3 — KREATIVITAETS-SCHWELLE:
  Die 10X-Validierungsskala aus ENFORCEMENT-DIRECTIVES wird um ein
  visuelles Kreativitaets-Kriterium erweitert:
    1X-3X: Template-Look (ABGELEHNT)
    4X-5X: Angepasstes Template (ABGELEHNT fuer Design-Phasen)
    6X-7X: Individuelles Design mit erkennbarer Handschrift (MINIMUM)
    8X-9X: Herausragendes Design mit innovativen Elementen
    10X:   Awwwards-wuerdig, einzigartig, ikonisch

  Fuer Design-Phasen gilt: Minimum-Validierungsstufe ist 6X (statt 5X
  wie fuer funktionale Phasen). Alles unter 6X wird zurueckgewiesen.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 6: INTEGRATION IN BESTEHENDE PIPELINE-STRUKTUR
═══════════════════════════════════════════════════════════════════════════════

─────────────────────────────────────────────────────────────────────────────
6.1 BETROFFENE DOKUMENTE UND AENDERUNGEN
─────────────────────────────────────────────────────────────────────────────

  Dieses Dokument erfordert Anpassungen in folgenden Dateien:

  1. ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md:
     → 4. Direktive hinzufuegen: "Kontrollierte Kreativitaet"
     → Verweis auf dieses Dokument als Detailspezifikation

  2. DESIGN-TOKENS.md:
     → Phi-Spacing-Skala als Alternative ergaenzen
     → Phi-Typografie-Skala als Alternative ergaenzen
     → Farbpsychologie-Referenz hinzufuegen
     → Golden-Ratio-Referenzen in Layout-Tokens

  3. DESIGN-PHASE-01.md bis DESIGN-PHASE-10.md:
     → KREATIVITAETS-DIREKTIVE-REFERENZ in jede Phase injizieren
     → Preview-Schritt D.5 in Exit-Protokoll jeder Phase einfuegen
     → Phi-Proportions-Checkliste in relevante Phasen einbauen

  4. ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md:
     → Dieses Dokument als Pflichtlektuere fuer Design-Phasen registrieren
     → Preview-Schritt D.5 im Phase-Lifecycle erwaehnen

  5. CONTEXT-HUB.md:
     → .ai-design-kreativitaet-context.md als neue Kontext-Datei registrieren

  6. OMNI-CLOSED-LOOP.md:
     → Dokumentenzahl aktualisieren (92 → 93)
     → Kreativitaets-Direktive in Pflichtlektuere aufnehmen

  7. README.md:
     → Neues Governance-Dokument in Dateiliste aufnehmen

─────────────────────────────────────────────────────────────────────────────
6.2 KONTEXT-DATEI: .ai-design-kreativitaet-context.md
─────────────────────────────────────────────────────────────────────────────

  ZWECK: Persistenter Zustand fuer Kreativitaets-Entscheidungen zwischen
  Design-Phasen. Wird von jeder Design-Phase gelesen und geschrieben.

  STRUKTUR DER KONTEXT-DATEI:
    FARB-ENTSCHEIDUNGEN:
      Branche: [erkannte Branche]
      Primaerfarbe: [Hex-Wert] (Quelle: Code/SSOT)
      Farbtemperatur: [warm/kuehl/neutral]
      60-30-10-Verteilung: [Prozentuale Anteile]
      Dark-Mode-Anpassungen: [ja/nein, Details]

    PHI-PROPORTIONEN:
      Layout-Typ: [2-spaltig/3-spaltig/asymmetrisch]
      Content-Sidebar-Ratio: [aktuelles Verhaeltnis]
      Typografie-Skala: [Phi/Standard/Custom]
      Spacing-Skala: [Phi/8px-Grid/Hybrid]

    VISUELLE-FUEHRUNG:
      Primaeres Blickmuster: [F/Z/Gutenberg]
      Fokuspunkt-Hierarchie: [Primaer/Sekundaer/Tertiaer]
      Scroll-Rhythmus: [Sektionsanzahl/Pausen]

    PREVIEW-ERGEBNISSE:
      Letzter-Preview-Stand: [Datum/Phase]
      Anti-AI-Score: [1X-10X]
      Offene-Maengel: [Liste]

─────────────────────────────────────────────────────────────────────────────
6.3 ENFORCEMENT-KOPPLUNG
─────────────────────────────────────────────────────────────────────────────

  Die Kreativitaets-Direktive wird in die ENFORCEMENT-DIRECTIVES als
  vierte unverletzliche Direktive eingebettet:

  DIREKTIVE 4: KONTROLLIERTE KREATIVITAET (fuer Design-Phasen)
    "Jede visuelle Entscheidung MUSS durch mathematische Proportion,
     Farbpsychologie, visuelle Fuehrung oder Preview-Validierung
     begruendet sein. Willkuerliche aesthetische Entscheidungen sind
     verboten. Details: ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md"

  AUTORITAETS-HIERARCHIE (aktualisiert):
    Rang 1: ENFORCEMENT-DIRECTIVES (hoechste Autoritaet)
    Rang 2: DESIGN-KREATIVITAETS-DIREKTIVE (fuer Design-Phasen)
    Rang 3: MASTER-LOOP-ORCHESTRATOR (Ausfuehrungsautoritaet)
    Rang 4: MASTER-ORCHESTRATOR (Ring-1-Steuerung)
    Rang 5: Einzelne Phasen-Dokumente

═══════════════════════════════════════════════════════════════════════════════
SEKTION 7: VALIDIERUNGS-CHECKLISTE
═══════════════════════════════════════════════════════════════════════════════

  Jede Design-Phase MUSS vor dem Exit folgende Checkliste abarbeiten:

  PHI-PROPORTIONEN:
    [ ] Layout-Verhaeltnisse pruefen (61.8% / 38.2%)
    [ ] Typografie-Skala gegen Phi-Referenz validieren
    [ ] Spacing gegen Phi-Skala validieren
    [ ] Bild-Proportionen pruefen
    [ ] Container-Verschachtelung pruefen

  FARBWAHRNEHMUNG:
    [ ] 60-30-10-Regel validieren
    [ ] Farbgewicht-Hierarchie pruefen
    [ ] Farbtemperatur-Konsistenz pruefen
    [ ] WCAG AAA Kontraste pruefen
    [ ] Farbenblindheit-Simulation durchfuehren
    [ ] Dark-Mode-Anpassungen pruefen

  VISUELLE FUEHRUNG:
    [ ] Blickverlaufsmuster identifiziert und umgesetzt
    [ ] Fokuspunkt-Hierarchie validiert (1 primaer, 2-3 sekundaer)
    [ ] Whitespace-Regeln eingehalten
    [ ] Visueller Rhythmus konsistent
    [ ] Scroll-Experience geprueft

  PREVIEW:
    [ ] Screenshots in 3 Viewports generiert
    [ ] Vorher-Nachher-Vergleich erstellt
    [ ] 5-Sekunden-Test bestanden
    [ ] Anti-AI-Look verifiziert (min. 6X)
    [ ] Edge-Cases getestet
    [ ] Visuelle Regression geprueft

═══════════════════════════════════════════════════════════════════════════════
ENDE DER DESIGN-KREATIVITAETS-DIREKTIVE
Version 1.0.0 — Gueltig ab sofort fuer alle Design-Phasen
═══════════════════════════════════════════════════════════════════════════════
