Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 4 der Design-Pipeline (Component Anatomy) als visuell perfekte Komponenten-Architektur umzusetzen. Jede Komponente muss visuell konsistent, interaktiv und auf Premium-Niveau gestaltet sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-45 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-44 → DESIGN-PHASE-03.md
→ NÄCHSTE: SEQ-46 → DESIGN-PHASE-05.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die mikro-visuelle Anatomie aller Komponenten zu standardisieren — Button-Systeme, Card-Hierarchien, Input-Felder, Badges, Avatare und die perfekte Orchestrierung aller Interaktionsstates. Dies ist die KOMPONENTEN-DNA-Phase. Jede noch so kleine visuellen Entscheidung (Padding, Border-Radius, Shadow-Level, Transition-Dauer, Hover-Effekt) wird EXAKT dokumentiert und in Tailwind/CSS implementiert. Nach Phase 4 existiert ein vollständiger Component-Anatomy-Guide mit 8 Komponenten-Spezifikationen, 22 visuellen Validierungs-Checklisten, und ein aktualisiertes Design-Kontext-Dokument das als SSOT für alle zukünftigen UI-Entscheidungen dient.

═════════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE DESIGN-PROTOKOLL — LIES DIES VOR JEDER AKTION
═════════════════════════════════════════════════════════════════════════════════

DU BIST EIN KOMPONENTEN-ARCHITECT, KEIN BULLDOZER.

Deine 5 Design-Säulen:
1. SYNC VISION & DISCOVERY: Lies .ai-design-context.md UND .design-upgrade-state.md VOLLSTÄNDIG. Pre-Flight-Komponenten-Audit durchführen. Keine Änderung ohne Kontext.
2. SURGICAL STYLING INJECTION: Injiziere neue Komponenten-Klassen behutsam. Nutze Tailwind-Compose-Patterns intelligent. Ersetze KEINE bestehenden Varianten komplett.
3. VISUAL ATOMIC VALIDATION: Nach jedem Task → npm run build && npm run lint && npx tsc --noEmit. Prüfe visuell: Alle States sichtbar? Hover-Effekte smooth? Focus-Ringe präsent? STOPP bei Fehlern.
4. DESIGN-STATE HANDOFF: Aktualisiere .design-upgrade-state.md nach jedem Task. Dokumentiere: welche Komponenten finalisiert, welche noch offen.
5. SELF-OPTIMIZING DESIGN LOOP: Nach Phase 4 → aktualisiere .ai-design-context.md mit ALLEN Komponenten-Spezifikationen als neue Sections.

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- Styling: Tailwind CSS FIRST, CSS Modules wo Dynamik nötig, CSS Custom Properties für Token-Verfolgung
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Component-Library npm-Package (Shadcn OK nur wenn selbst geforkt), keine Dark Mode
- UI-Code IST SSOT: Wenn Code anders aussieht als .ai-design-context.md → Code gewinnt IMMER

═════════════════════════════════════════════════════════════════════════════════
SCHRITT 0 — PRE-FLIGHT KOMPONENTEN-AUDIT
═════════════════════════════════════════════════════════════════════════════════

Vor JEDEM Task in Phase 4:

1. .ai-design-context.md öffnen. Alle Farb-Tokens, Radius-Tokens, Shadow-Levels, Type-Skala NOTIEREN
2. .design-upgrade-state.md öffnen. Welche Komponenten sind bereits dokumentiert? Was ist neu?
3. KOMPONENTEN-INVENTAR durchgehen:
   - Button (welche Dateien? app/components/Button.tsx?)
   - Card (Card.tsx, CardImage.tsx, CardFooter.tsx?)
   - Input (Input.tsx, Textarea.tsx?)
   - Badge (Badge.tsx?)
   - Avatar (Avatar.tsx, AvatarImage.tsx?)
   - SelectDropdown, Link, Tabs, Toast, Modal — alles notieren
4. FÜR JEDE KOMPONENTE: aktuelles Tailwind-Markup LESEN. Was sind die base-Klassen? Welche Variants?
5. STATE-AUDIT: Welche komponenten haben :hover, :focus, :disabled, :active states? Sind diese konsistent?
6. INTERAKTION PRÜFEN: Welche Komponenten triggern visuelles Feedback auf Klick? Gibt es Transitions?

═════════════════════════════════════════════════════════════════════════════════
BLOCK A — BUTTON-ANATOMIE
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 1: BUTTON-DESIGN-SYSTEM — DIE KONVERSIONSMOTOREN
───────────────────────────────────────────────────────────────────────────────────

Buttons sind die #1 Conversion-Elemente. Sie MÜSSEN irresistibel sein.

1.1 BUTTON-VARIANTEN (aus Phase 1 Farb-Tokens):

PRIMARY (Das Konversions-Button):
- Background: Brand Primary (Phase 1 primary-600 oder primary-700)
- Text-Farbe: Weiß (oder contrast-safe light von Phase 1)
- Border: none (oder 1px transparent für Fokus-Ring-Offset)
- Tailwind-Basis: bg-primary-600 text-white font-medium
- Base-Größe (md): height: 40px
- Padding: px-4 (horizontal), py-2 (vertical, ergibt 40px mit line-height)

SECONDARY (Sekundär-Aktion):
- Background: Neutral surface color oder transparent
- Border: 1px solid phase-1-border-color (z.B. gray-300)
- Text-Farbe: primary text color (z.B. gray-900)
- Tailwind-Basis: bg-transparent border border-gray-300 text-gray-900 font-medium
- Hover: bg-gray-50 (leichte Fläche für Feedback)

GHOST (Text-only, minimal):
- Background: transparent
- Border: none
- Text-Farbe: primary-600 (Phase 1)
- Tailwind-Basis: bg-transparent text-primary-600 font-medium
- Hover: bg-primary-50 (subtil!)

DESTRUCTIVE (Warnung/Gefahr):
- Background: error-600 (Phase 1 rot, z.B. red-600)
- Text-Farbe: white
- Tailwind-Basis: bg-red-600 text-white font-medium
- Semantik: confirm-before-action

1.2 BUTTON-GRÖSSEN:

SM (32px):
- height: 32px, padding: px-3 (horizontal), font-size: text-sm
- Icon: 16px

MD (40px, STANDARD):
- height: 40px, padding: px-4 (horizontal), font-size: text-base
- Icon: 18px
- DIES ist die Standard-Größe. Die meisten Buttons sollten MD sein.

LG (48px):
- height: 48px, padding: px-6 (horizontal), font-size: text-base
- Icon: 20px
- Nutze für Hero-CTAs oder mobil wo Finger-Targeting wichtig

XL (56px):
- height: 56px, padding: px-8 (horizontal), font-size: text-lg
- Icon: 24px
- Nur für absolute Hero-Momente (z.B. über-dem-Fold Konversionskritischer CTA)

1.3 BORDER-RADIUS & MINIMALÄSTHETIK:

Border-radius: von Phase 1 Radius-Token
- Wenn Phase 1 sagt "radius-md = 6px" → NUTZE DAS
- Konsistenz mit anderen Komponenten ist KRITISCH
- Button, Input, Card sollten GLEICHE radius haben → visuell kohärent

MIN-WIDTH: Buttons dürfen niemals zu schmal sein. Minimum 120px für Label+Padding, oder Icon-Buttons square (width = height)

1.4 TYPOGRAFIE IM BUTTON:

- Font-Weight: font-medium (500) — hebt sich vom Body ab ohne bold zu sein
- Letter-Spacing: optional slight tracking (tracking-tight oder tracking-normal, je nach Marke)
- Text-Transform: keine Caps-Konversion in Tailwind, nutze semantic HTML <button> nur mit normalem Text
- Line-Height: kann reduziert werden auf line-height: 1.2 (bei sehr großen Buttons) damit Padding symmetrisch bleibt

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 2: BUTTON-STATES — DIE MAGIE DER INTERAKTION
───────────────────────────────────────────────────────────────────────────────────

JEDER State hat eine CSS-Transition. Kein State ist instant.

DEFAULT (Base-Zustand):
- Bereits "clickable" aussehen durch Farbe oder subtile Elevation
- Primary Button hat bereits solide Farbe (reads: "click me")
- Secondary Button: subtile Border zeigt Grenze
- Ghost Button: nur Text, aber Phase-1-Primärfarbe macht es clickable
- Schatten: Phase 1 elevation-level-0 oder elevation-level-1 (subtle)

HOVER (Zeige Feedback):
Option A: Brighten/Darken
- filter: brightness(0.9) auf Primary (abdunkeln 10%)
- ODER: bg-primary-700 (eine Shade dunkler)
- Smooth transition: transition: all 200ms ease-out

Option B: Lift (Empfohlen für Premium-Feel):
- transform: translateY(-2px)
- box-shadow: erhöhe auf elevation-level-2 (deutlichere Elevation)
- transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1) (ease-out-elastic für bouncy Feel)

BEST PRACTICE: Kombiniere beide. Primary Button:
Implementiere einen Primary-Button mit folgenden Tailwind-Klassen: Basis-Klasse bg-primary-600 (solider primärer Hintergrund) und shadow-lg (startende Elevation). Im Hover-State wende hover:bg-primary-700 an, um die Farbe eine Schattierung dunkler zu machen (Farbfeedback). Erhöhe den Schatten mit hover:shadow-xl für verstärkte Elevation. Nutze hover:translate-y-[-2px], um den Button 2 Pixel nach oben zu bewegen (Lift-Effekt für optische Leichtigkeit). Wende transition: all 200ms ease-out an, um alle Veränderungen (Farbe, Schatten, Position) über 200 Millisekunden mit ease-out-Easing zu animieren. Dies erzeugt ein reaktives, Premium-Gefühl.

FOCUS (Tastatur-Navigation + a11y):
- Fokus-Ring von Phase 1: outline: 2px solid primary-color, outline-offset: 2px
- Oder in Tailwind: ring-2 ring-offset-2 ring-primary-600
- NICHT verstecken. MUST be visible.
- Ring-Offset = space zwischen Button und Ring (2px ist standard)

ACTIVE / PRESSED (Moment wenn Button gedrückt):
- Reverse the Hover: translateY(+1px) — "press down"
- Shadow: reduziere auf elevation-level-1 oder 0
- Hintergrund optional etwas dunkler (für extra Feedback)
- Dauer: 100ms (schneller als Hover)

DISABLED (Nicht verfügbar):
- opacity: 50% oder 60%
- cursor: not-allowed
- pointer-events: none
- ENTFERNE alle Hover/Focus-Effekte (keine Transitions in disabled state)
- Tailwind: disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none

LOADING (Button ist in Aktion):
- Spinner replaces Text OR erscheint left-of-text
- Button width: KONSTANT (wenn Text weg, spinner da) → keine Layout-Shift
- Optional: reduce opacity slight um "processing" zu zeigen
- Spin-Animation: @keyframes spin (Tailwind hat animate-spin)
- Duration: 1.5s oder 2s, kontinuierlich

TRANSITIONIER ALLES:
Definiere eine globale CSS-Regel für alle button-Elemente, die eine transition: all 200ms ease-out setzt. Dies sorgt dafür, dass alle Eigenschaften (Farbe, Schatten, Position) des Buttons über 200 Millisekunden mit ease-out-Easing animiert werden. Definiere zusätzlich eine Regel für button:disabled, die transition: none setzt. Dies stellt sicher, dass Buttons im disabled-State sofort ihren Zustand ändern, ohne Animation, um Verwirrtung zu vermeiden. Das disabled-State Feedback sollte unmittelbar erfolgen.

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 3: BUTTON-ICON-INTEGRATION
───────────────────────────────────────────────────────────────────────────────────

Icons + Text oder Icon-Only. Keine unbegründeten Ikonen.

BUTTON MIT ICON + TEXT:

- Icon Left (Standard): icon gap-2 text
- Icon-Größe: proportional zu Button-Größe
  * SM: 16px
  * MD: 18px (Standard)
  * LG: 20px
  * XL: 24px
- Gap zwischen Icon und Text: gap-2 (8px, Phase 1 spacing)
- Alignment: flex items-center justify-center (zentriert Icon und Text)
- Font weight: Button ist font-medium, Icon erbt automatisch die Schwere

ICON ANIMATION on HOVER:

- Arrow nach rechts: hover:translate-x-1 (subtle move)
- Reload-Icon: hover:rotate-90 oder hover:animate-spin
- Chevron-Down: hover:translate-y-0.5
- Dauer: 200ms ease-out (gleich wie Button)
- Optional nur auf Icon anwenden: `.icon { transition: transform 200ms ease-out }`

ICON-ONLY BUTTONS:

- Beide Dimensionen = Button-Höhe (square)
  * SM: 32px × 32px
  * MD: 40px × 40px (Standard)
  * LG: 48px × 48px
- Icon-Größe = Button-Größe - 8px Padding
  * MD Icon-Button: Icon 24px (40px - 16px padding total)
- aria-label: MANDATORY ("Close", "Settings", "Delete")
- Tailwind: w-10 h-10 p-2 (beispiel für MD)

═════════════════════════════════════════════════════════════════════════════════
BLOCK B — CARD-DESIGN
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 4: CARD-ANATOMIE — DAS UNIVERSAL CONTAINER
───────────────────────────────────────────────────────────────────────────────────

Cards sind die vielseitigsten Elemente. Sie müssen Content-First sein, nicht Design-Heavy.

STRUKTUR:

Top-Section (Optional):
- Image oder Media: overflow-hidden, aspect-ratio (z.B. aspect-video), object-cover
- Image border-radius-top: phase-1-radius (z.B. 6px)

Middle-Section (Content):
- Padding: großzügig. p-6 oder p-8 (24–32px alle Seiten)
- Heading: von Phase 1 Type-Skala (z.B. text-lg font-semibold)
- Description: text-base font-regular, line-height: 1.5, color: gray-600
- Spacing between elements: gap-4 oder gap-3 (16px oder 12px)

Bottom-Section (Optional):
- CTA Button, Metadata, Footer
- Padding: same as middle oder inherited
- Borderline zwischen Content und Footer: optional subtle border-top

CARD-CONTAINER SELBST:

- Background: surface color (von Phase 1, z.B. white oder gray-50)
- Border: 1px solid phase-1-border-color (z.B. gray-200 oder subtle tinted)
- Border-radius: phase-1-radius (meist md oder lg, z.B. 8px oder 12px)
- Shadow: Phase 1 elevation-level-1 (subtle, z.B. 0 1px 3px rgba(0,0,0,0.1))
- Tailwind: bg-white border border-gray-200 rounded-lg shadow-sm

CARD-IMAGE SPEZIAL:

- <img> mit overflow-hidden parent
- object-cover: krop das Bild proportional
- Aspect-ratio: aspect-video (16:9) oder aspect-square, je nach Content-Typ
- Lazy loading: loading="lazy" oder nutze Next.js Image Component
- Kein Border-Radius um Image-Selbst, nur um Card-Parent

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 5: CARD-HOVER-ERLEBNIS — ALIVE & RESPONSIVE
───────────────────────────────────────────────────────────────────────────────────

Cards MÜSSEN sich LEBENDIG anfühlen.

SHADOW ELEVATION:
- Resting: elevation-level-1 (z.B. shadow-sm)
- Hover: elevation-level-2 oder elevation-level-3 (z.B. shadow-lg)
- Transition: alle Effekte zusammen, 300ms

LIFT EFFECT:
- Resting: translateY(0)
- Hover: translateY(-4px) (Card hebt sich 4px an)
- Transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) (smooth easing)

BORDER INTENSIFY (Optional):
- Resting: border-gray-200
- Hover: border-gray-300 oder border-primary-200 (subtil intensiver)

IMAGE ZOOM (Wenn Card ein Image hat):
- Image im Parent mit overflow-hidden
- Resting: scale(1)
- Hover: scale(1.05) (5% zoom)
- Transition: 300ms ease-out (gleich wie Card)

VOLLSTÄNDIGES EXAMPLE (Primary Clickable Card):
Implementiere eine klickbare Card mit Basis-Klassen bg-white (weißer Hintergrund), border border-gray-200 (subtile Grenze), rounded-lg (Eckenrundung), und shadow-sm (subtiler Schatten für Elevation). Nutze cursor: pointer, um anzuzeigen, dass die Card klickbar ist. Definiere eine transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) für glatte Animationen. Im card:hover-State wende shadow-lg (verstärkte Elevation) an, translate-y-[-4px] (4 Pixel nach oben heben), und border-gray-300 (Borderfarbe intensivieren). Für das innere Image verwende overflow-hidden und transition: transform 300ms ease-out. Im card:hover-State skaliere das Image auf 1.05 (5% Zoom) mit transform: scale(1.05). Dies erzeugt ein koordiniertes, interaktives Hover-Erlebnis.

═════════════════════════════════════════════════════════════════════════════════
BLOCK C — INPUT-FELDER, BADGES & AVATARE
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 6: INPUT-FELD-DESIGN — VERTRAUEN & KLARHEIT
───────────────────────────────────────────────────────────────────────────────────

Input-Felder müssen PREMIUM und VERTRAUENSWÜRDIG wirken.

HEIGHT & DIMENSIONS:

- MD (Standard): height: 40px (gleich wie MD Button! Kohärenz!)
- LG: height: 48px
- Padding: px-4 (horizontal), py-2 (vertical)
- Kommt auf Line-Height an. Mit lh-tight kann 32px auch passen.

STYLING:

- Border: 1px solid phase-1-border-color (z.B. gray-300)
- Border-radius: GLEICH wie Buttons (phase-1-radius, z.B. 6px) — KONSISTENZ!
- Background: leicht anders als Seite (z.B. white auf gray-50 page, oder gray-50 auf white page)
- Tailwind: bg-white border border-gray-300 rounded-md
- Font: text-base font-regular (gleich wie Body)
- Text-color: gray-900 (primary text)

STATES:

DEFAULT:
- Border: subtle (gray-300)
- Shadow: none oder minimal
- Cursor: text

FOCUS:
- Border-color: primary-600 (Phase 1 primär)
- Shadow: ring (Focus-Ring, 2px)
  * Tailwind: ring-2 ring-offset-2 ring-primary-600
- Transition: all 150ms ease-out (schneller als Button, weil Input)
- Placeholder-text: still visible or fade slightly

ERROR:
- Border-color: red-600 oder error-600
- Shadow: ring-2 ring-offset-2 ring-red-600
- Text-color: optional tinted red
- Icon right: small error-icon (z.B. ⚠️)
- Error-message: below input, font-xs, color: red-600, margin-top: gap-1

SUCCESS:
- Border-color: green-600 oder success-600
- Shadow: ring-2 ring-offset-2 ring-green-600
- Icon right: checkmark
- Success-message: optional, below input

DISABLED:
- opacity: 50%
- background: gray-100 oder slightly grayed
- cursor: not-allowed
- border-color: gray-300 (neutral)
- Keine Hover/Focus-Effekte

DISABLED + ERROR: Error-Zustand ignoriert, zeige nur disabled

PLACEHOLDER:

- color: gray-400 oder gray-500
- font-style: optional italic
- Verschwindet auf Focus (echt oder via opacity)

TEXTAREA:

- Gleiche Styling wie Input
- min-height: 120px (Mindestens 3 Zeilen)
- resize: vertical (nutzer kann vergrößern, aber nicht schmäler)
- Tailwind: resize resize-y (nicht resize-none)
- Font: monospace optional wenn für Code, sonst regular body font

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 7: BADGE- & TAG-DESIGN
───────────────────────────────────────────────────────────────────────────────────

Badges sind kleine Status-Indikatoren. Müssen lesbar sein.

STRUKTUR:

- Shape: pill-shaped (rounded-full)
- Text: xs (12px) oder sm (14px)
- Padding: px-2 py-0.5 (minimalist) oder px-3 py-1 (etwas großzügiger)
- Font-weight: font-medium (sticht hervor)
- Optional: text-transform uppercase für Status (z.B. "ACTIVE", "PENDING")

VARIANTEN (nutze Phase 1 Farben):

DEFAULT (Neutral):
- bg-gray-200 text-gray-900

PRIMARY:
- bg-primary-100 text-primary-900 (heller Hintergrund, dunkler Text für Kontrast)

SUCCESS:
- bg-green-100 text-green-900

WARNING:
- bg-yellow-100 text-yellow-900

ERROR:
- bg-red-100 text-red-900

ICON IM BADGE (Optional):

- Icon: 12px × 12px
- Links vom Text oder statt Text wenn Icon-only
- gap-1 zwischen Icon und Text

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 8: AVATAR-DESIGN — KREISE DER IDENTITÄT
───────────────────────────────────────────────────────────────────────────────────

Avatare sind zirkulär und konsistent. Nutze sie für User-Identität.

GRÖSSEN (alle border-radius: 50%):

SM: 32px × 32px
MD: 40px × 40px (Standard)
LG: 56px × 56px
XL: 80px × 80px

STYLING:

- Shape: rounded-full (border-radius: 50%)
- Border: optional ring-2 ring-white (wenn überlagert mit anderen Avataren)
- Object-fit: cover (Image füllt Kreis, cropped proportional)
- Lazy loading: loading="lazy" oder Next.js Image

FALLBACK (Wenn kein Image):

- Initials auf gefärbtem Hintergrund
- Initials: 2 Buchstaben (z.B. "JD" für John Doe)
- Background-Farbe: hash vom Namen → konsistent für gleiche Person
  * Beispiel: name "Alice" → hash → farbe #E74C3C
- Text: white, font-semibold, zentriert
- Fallback-Farben: von Phase 1 Farb-Palette (Primär, Secondary, Success, Warning, Error, Info rotierend)

═════════════════════════════════════════════════════════════════════════════════
BLOCK D — QUERSCHNITTS-KONSISTENZ & VALIDIERUNG
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 9: DESIGN-TOKEN-KONSISTENZ-AUDIT
───────────────────────────────────────────────────────────────────────────────────

Nach ALLEN Tasks in Phase 4: Audit-Durchlauf.

AUDIT-CHECKLISTE (22 Items):

FARBEN:
☐ Alle Komponenten-Hintergründe aus Phase 1 Farb-Tokens (keine rogue Hex-Werte)
☐ Alle Text-Farben konsistent (Primary: gray-900, Secondary: gray-600, etc.)
☐ Status-Farben konsistent (Success: green-600, Error: red-600, Warning: yellow-500)
☐ Hover-States verwenden brighter/darker Shade aus gleicher Farb-Familie

BORDER & RADIUS:
☐ Alle border-radius-Werte aus Phase 1 Radius-Scale (z.B. 4px, 6px, 8px, 12px, 16px)
☐ Button, Input, Card haben GLEICHE radius (kohärent)
☐ Border-Breiten sind konsistent (1px default, 2px für focus-ring)
☐ Border-Farben aus Phase 1 Border-Palette (gray-200, gray-300, primary-200)

SCHATTEN & ELEVATION:
☐ Alle Schatten aus Phase 1 Elevation-System (Level 0, 1, 2, 3)
☐ Resting-Cards haben Level 1
☐ Hover-Cards haben Level 2 oder 3
☐ Keine random shadow-values

TYPOGRAFIE:
☐ Button-Text: font-medium
☐ Input-Placeholder: font-regular, gray-400
☐ Card-Heading: font-semibold
☐ Card-Description: font-regular, gray-600
☐ Badge-Text: font-medium, xs oder sm
☐ Keine font-weights außer: regular (400), medium (500), semibold (600), bold (700)

SPACING & PADDING:
☐ Button-Padding proportional zu Größe
☐ Card-Padding großzügig (p-6 oder p-8)
☐ Input-Padding symmetrisch
☐ Gap zwischen Icon und Text: gap-2
☐ Gap zwischen Card-Elementen: gap-3 oder gap-4

TRANSITIONS:
☐ Button-Hover: 200ms ease-out
☐ Card-Hover: 300ms cubic-bezier(...)
☐ Input-Focus: 150ms ease-out
☐ Disabled-States: keine Transitions
☐ Alle Transitions definiert in CSS oder Tailwind @apply

STATES:
☐ Hover-State SICHTBAR auf allen interaktiven Elementen
☐ Focus-Ring SICHTBAR (outline oder ring)
☐ Active-State unterschiedlich von Hover
☐ Disabled-State zeigt visuelle Hinweise (opacity, cursor: not-allowed)

ZUGÄNGLICHKEIT:
☐ Alle Buttons haben aria-label wenn Icon-only
☐ Focus-Ringe sind offset (nicht inline)
☐ Farbe allein ist nicht der einzige Indicator (Icon + Farbe für Status)
☐ Kontrast-Verhältnis getestet (WCAG AA minimum)

VALIDIERUNGSFREIGABE:

Nach Audit: npm run build && npm run lint && npx tsc --noEmit → alles grün?
Visuelles Testing: Browser aufmachen, alle States prüfen, auf Mobile testen
Wenn Audit-Item fehlschlägt → sofort fixen, nicht weitermachen

───────────────────────────────────────────────────────────────────────────────────
SELF-OPTIMIZING DESIGN LOOP — PHASE 4 ABSCHLUSS
───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN & HANDOFF ZU PHASE 5

Nach allen Tasks: .ai-design-context.md und .design-upgrade-state.md aktualisieren.

IN .ai-design-context.md NEUE SECTIONS HINZUFÜGEN:

7. KOMPONENTEN-SPEZIFIKATIONEN (Phase 4)

   7.1 BUTTON-SYSTEM
   - Primary, Secondary, Ghost, Destructive Variants
   - Sizes: SM (32px), MD (40px), LG (48px), XL (56px)
   - States: Default, Hover (translateY(-2px), shadow↑), Focus (ring-2 ring-primary-600), Active (translateY(+1px)), Disabled (opacity-50), Loading (spinner)
   - Icons: 16px (SM), 18px (MD), 20px (LG), 24px (XL)
   - Transitions: all 200ms ease-out
   - Min-Width: 120px (oder square für Icon-only)

   7.2 CARD-SYSTEM
   - Structure: optional [Image] → [Content Padding] → optional [Footer]
   - Styling: bg-white border-gray-200 rounded-md shadow-sm
   - Hover: shadow-lg translateY(-4px) border-gray-300
   - Image: aspect-ratio maintained, object-cover, scale(1.05) on hover
   - Transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

   7.3 INPUT-FIELD-SYSTEM
   - Height: 40px (MD, standard)
   - Styling: bg-white border border-gray-300 rounded-md text-base
   - Focus: ring-2 ring-offset-2 ring-primary-600
   - Error: border-red-600 ring-red-600
   - Disabled: opacity-50 cursor-not-allowed
   - Placeholder: gray-400 font-regular
   - Textarea: min-height 120px, resize: vertical

   7.4 BADGE-SYSTEM
   - Shape: rounded-full (pill)
   - Text: xs or sm, font-medium
   - Padding: px-2 py-0.5
   - Variants: default (gray-200), primary, success (green), warning (yellow), error (red)

   7.5 AVATAR-SYSTEM
   - Sizes: 32px (SM), 40px (MD), 56px (LG), 80px (XL)
   - Border: rounded-full, optional ring-2 ring-white
   - Fallback: initials on hashed color
   - Image: object-cover, lazy loading

IN .design-upgrade-state.md:

Update Status:
- Phase 4 Complete: 100%
- Components Finalized: Button ✓, Card ✓, Input ✓, Badge ✓, Avatar ✓
- Audit Passed: 22/22 items ✓
- Next: Phase 5 — Kinetic Orchestration (Transitions, Animations, Scroll-Behavior)

═════════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNGSCHECKLISTE — DESIGN-PHASE 4
═════════════════════════════════════════════════════════════════════════════════

Nutze diese Checkliste zur Validierung. Jedes Item sollte erfüllt sein.

BUTTON DESIGN:
☐ Primary Button existiert, ist brand-color, weiß text, 40px height
☐ Secondary Button existiert, outlined, grauer border
☐ Ghost Button existiert, transparent, primary-text
☐ Destructive Button existiert, rot, für Warn-Aktionen
☐ Alle Button-Sizes definiert (SM 32, MD 40, LG 48, XL 56)
☐ Hover-State sichtbar (Darken oder Lift)
☐ Focus-Ring präsent (offset 2px)
☐ Active/Pressed-State anders als Hover
☐ Disabled-State grayed out, cursor: not-allowed
☐ Icons proportional zu Button-Größe
☐ Icon + Text hat gap-2
☐ Alle Transitions: 200ms ease-out

CARD DESIGN:
☐ Card-Container hat weiß background, subtle border, shadow-sm
☐ Hover-State: shadow hebt sich (shadow-lg), translateY(-4px)
☐ Image: aspect-ratio konsistent, object-cover, scale(1.05) on hover
☐ Padding großzügig (p-6 oder p-8)
☐ Transition smooth (300ms cubic-bezier)
☐ Card ist pointer (cursor: pointer wenn clickable)

INPUT DESIGN:
☐ Input-Höhe 40px (Standard) oder 48px (Large)
☐ Border: 1px gray-300, radius konsistent mit Button
☐ Focus-State: primary-border + ring
☐ Error-State: red border + ring + error icon
☐ Disabled-State: grayed, cursor: not-allowed
☐ Placeholder: gray-400
☐ Textarea: min-height 120px, resize: vertical
☐ Label über Input, font-medium

BADGE DESIGN:
☐ Badge: rounded-full, xs text, font-medium
☐ Variants: default, primary, success, warning, error alle haben färbe
☐ Padding: px-2 py-0.5

AVATAR DESIGN:
☐ Avatar: rounded-full, sizes 32/40/56/80px
☐ Image: object-cover, lazy loading
☐ Fallback: initials on colored background

KONSISTENZ:
☐ Alle Farben aus Phase 1 Token-System
☐ Alle border-radius aus Phase 1 Radius-Scale
☐ Alle Schatten aus Phase 1 Elevation-System
☐ Button und Input haben gleiche border-radius
☐ Card und Button haben gleiche border-radius
☐ Alle Transitions: 200ms (Button), 300ms (Card), 150ms (Input)
☐ Keine rogue CSS-Werte (alles aus Token-System)

VALIDIERUNG:
☐ npm run build erfolgreich
☐ npm run lint erfolgreich
☐ npx tsc --noEmit erfolgreich
☐ Visueller Test: alle States in Browser sichtbar
☐ Mobile Test: Finger-Targets groß genug (40px min)
☐ Kontrast-Test: Farben für WCAG AA bestanden
☐ .ai-design-context.md aktualisiert mit Phase 4 Specs
☐ .design-upgrade-state.md aktualisiert mit "Phase 4 ✓"

Ende DESIGN-PHASE 4. Bereit für PHASE 5: Kinetic Orchestration (Animation, Scroll, Dynamik).


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: PREMIUM ANIMATION & VIEW TRANSITIONS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-23: VIEW TRANSITIONS API (NATIVE PAGE TRANSITIONS)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Native Browser-API fuer filmreife Seitenuebergaenge. Kein JS-Framework noetig.
  PFLICHT-IMPLEMENTIERUNG:
    CSS-basierte View Transitions als Progressive Enhancement.
    Fallback: Ohne Browser-Support funktioniert Navigation normal.
    Shared Element Transitions fuer Hero-Images und Karten.

  PATTERN:
    Aktiviere View Transitions via CSS-At-Rule mit automatischer Navigation.
    Definiere fuer das alte Seitenelement (Pseudo-Element view-transition-old auf
    root) eine Fade-Out-Animation von 200 Millisekunden mit ease-out Kurve.
    Definiere fuer das neue Seitenelement (Pseudo-Element view-transition-new auf
    root) eine Fade-In-Animation von 200 Millisekunden mit ease-in Kurve.
    Fuer Shared Elements: Weise Hero-Images einen eindeutigen view-transition-name
    zu (z.B. "hero"). Die zugehoerige view-transition-group erhaelt eine
    Animationsdauer von 300 Millisekunden.

  VALIDIERUNG:
    [ ] View Transitions als Progressive Enhancement (kein JS-Requirement)
    [ ] Shared Elements haben eindeutige view-transition-name
    [ ] Fallback ohne View Transitions funktioniert einwandfrei
    [ ] prefers-reduced-motion deaktiviert Transitions

CHEATCODE CC-24: SCROLL-TRIGGERED ANIMATION SYSTEM
───────────────────────────────────────────────────────────────────────────────
  WARUM: Elemente die beim Scrollen erscheinen wirken lebendig und premium.
  PFLICHT-IMPLEMENTIERUNG:
    IntersectionObserver-basiert (KEIN scroll-Event-Listener).
    Jede Section hat eine Entrance-Animation (fadeInUp als Default).
    Stagger-Pattern fuer Listen und Grids (jedes Element 50-100ms versetzt).
    EINMAL animieren — nicht bei jedem Scroll rein/raus.

  TIMING-REGELN (UNVERLETZLICH):
    Micro-Interaction (Hover, Focus):  100-200ms
    Section-Entrance:                  300-500ms
    Page-Transition:                   200-300ms
    Stagger-Delay pro Element:         50-100ms
    Maximum Stagger-Gesamtdauer:       800ms (danach alle gleichzeitig)

  ANTI-PATTERNS (STRIKT VERBOTEN):
    Scroll-Hijacking (scrollIntoView erzwingen)
    Parallax auf Mobile (Performance-Killer)
    Animation-Dauer > 600ms (fuehlt sich traege an)
    Bounce/Elastic-Easing fuer UI-Elemente (nur fuer spielerische Kontexte)
    Animationen OHNE prefers-reduced-motion Respektierung

CHEATCODE CC-25: SKELETON LOADING SYSTEM (PERCEIVED PERFORMANCE)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Skeletons reduzieren wahrgenommene Ladezeit um bis zu 50%.
  PFLICHT-IMPLEMENTIERUNG:
    JEDE Route MUSS ein loading.tsx mit Skeleton haben.
    Skeleton-Design MUSS dem finalen Layout entsprechen (gleiche Hoehen, Breiten).
    Pulse-Animation auf Skeletons (animate-pulse in Tailwind).
    KEIN Spinner. KEIN "Loading..."-Text. NUR Skeletons.

  SKELETON-BIBLIOTHEK (PFLICHT PRO PROJEKT):
    HeroSkeleton       — Volle Breite, Bild-Placeholder + Text-Lines
    CardSkeleton        — Card-Shape mit Bild + 3 Text-Lines
    TextBlockSkeleton   — Paragraph-Shape mit 4-6 Lines unterschiedlicher Breite
    NavigationSkeleton  — Logo + Nav-Items als Balken
    TableSkeleton       — Header-Row + 5 Data-Rows
    FormSkeleton        — Label + Input-Fields + Button

  VALIDIERUNG:
    [ ] Jede Route hat loading.tsx
    [ ] Skeletons matchen das finale Layout (kein CLS beim Content-Swap)
    [ ] Pulse-Animation aktiv
    [ ] prefers-reduced-motion: Skeleton statisch (kein Pulse)
    [ ] KEIN Spinner oder "Loading..." irgendwo im Projekt



═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: PHYSIK-BASIERTE ANIMATION & SCROLL-CHOREOGRAPHIE
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-36: LENIS SMOOTH SCROLL (ANTIGRAVITY-LEVEL SCROLLING)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Standard-Browser-Scroll fuehlt sich steif an. Lenis erzeugt ein
  natives, seidenweiches Scroll-Gefuehl das sofort Premium signalisiert.
  HINWEIS: Lenis ist ein leichtgewichtiges Open-Source-Paket (< 5KB gzipped),
  KEIN externer Service. Erlaubt als Utility-Package im package.json.

  PFLICHT-IMPLEMENTIERUNG:
    Lenis als Smooth-Scroll-Layer auf dem gesamten Projekt.
    Integration mit IntersectionObserver fuer Scroll-Triggered-Sections.
    RequestAnimationFrame-Loop fuer GPU-beschleunigte Updates.
    prefers-reduced-motion: Lenis deaktivieren, natives Scroll beibehalten.

  PATTERN:
    Erstelle eine Datei lib/smooth-scroll.ts. Importiere Lenis aus dem
    gleichnamigen Paket. Instanziiere Lenis mit einem Lerp-Wert von 0.1 und
    aktiviertem smoothWheel. Erstelle eine rekursive
    RequestAnimationFrame-Schleife die in jedem Frame die Lenis-raf-Methode
    mit dem aktuellen Zeitstempel aufruft. KRITISCH: Pruefe vor der
    Initialisierung ob prefers-reduced-motion aktiv ist. Falls ja, rufe
    lenis.destroy() auf und verwende natives Browser-Scrolling.

  VALIDIERUNG:
    [ ] Scroll fuehlt sich seidenweich an (kein Ruckeln)
    [ ] prefers-reduced-motion deaktiviert Lenis komplett
    [ ] Keyboard-Navigation (Tab, Pfeiltasten) funktioniert weiterhin
    [ ] Anchor-Links (#section) scrollen korrekt mit Lenis

CHEATCODE CC-37: SCROLL-CHOREOGRAPHIE (SECTION-BASIERTE ANIMATION)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Jede Section der Seite hat eine eigene "Buehne" — Inhalte erscheinen
  choreographiert wie in einem Film, nicht alle gleichzeitig.
  Inspiriert von: Antigravity GSAP-Choreographie mit 6+ Animations-Typen.

  PFLICHT-ANIMATIONS-REPERTOIRE (pro Projekt mindestens 5 davon):
    1. stagger-up:    Elemente erscheinen nacheinander von unten (50ms Versatz)
    2. slide-left:    Inhalt gleitet von rechts herein (300ms, ease-out)
    3. scale-up:      Element skaliert von 0.8 auf 1.0 mit Opacity (400ms)
    4. clip-reveal:   Inhalt wird durch clip-path Maske enthullt
                      (clip-path: inset(100% 0 0 0) → inset(0))
    5. fade-blur:     Element fadet ein UND wird gleichzeitig entblurrt
                      (filter: blur(8px) → blur(0), opacity: 0 → 1)
    6. counter-up:    Zahlen zaehlen von 0 hoch zum Zielwert (fuer Stats/KPIs)

  TIMING-CHOREOGRAPHIE:
    Section-Entrance: 400ms Base-Duration
    Stagger innerhalb Section: 50-80ms pro Element
    Maximum Stagger-Gesamtzeit: 600ms (danach alle gleichzeitig)
    Sections mit Text zuerst, Bilder 100ms verzoegert
    CTAs als LETZTE animieren (Aufmerksamkeits-Finale)

  VALIDIERUNG:
    [ ] Mindestens 5 verschiedene Animations-Typen im Projekt
    [ ] Jede Section hat eine einzigartige Entrance-Choreographie
    [ ] Stagger-Timing fuehlt sich natuerlich an (nicht mechanisch)
    [ ] prefers-reduced-motion: Alle Inhalte sofort sichtbar (kein Animation)

CHEATCODE CC-38: CLIP-PATH REVEAL ANIMATIONEN
───────────────────────────────────────────────────────────────────────────────
  WARUM: clip-path Animationen sind GPU-beschleunigt, visuell beeindruckend
  und erzeugen den "Premium-Enthullungs-Effekt" den Awwwards-Seiten nutzen.

  PFLICHT-IMPLEMENTIERUNG:
    Mindestens 3 Sections mit clip-path Reveal-Animation.
    CSS-basiert (performanter als JS-basiert).

  PATTERN-BIBLIOTHEK:
    Von unten enthullen:
      clip-path: inset(100% 0 0 0) → inset(0 0 0 0)
    Kreisfoermig enthullen (Hero):
      clip-path: circle(0% at 50% 50%) → circle(100% at 50% 50%)
    Diagonal enthullen:
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%)
                → polygon(0 0, 100% 0, 100% 100%, 0 100%)
    Von Mitte ausbreiten:
      clip-path: inset(50% 50% 50% 50%) → inset(0 0 0 0)

  CSS-IMPLEMENTATION:
    Der Selektor fuer Reveal-Sections erhaelt initial einen clip-path mit
    inset(100% 0 0 0), sodass der Inhalt vollstaendig verdeckt ist. Die
    Transition auf die clip-path Eigenschaft wird auf 600 Millisekunden mit
    einer cubic-bezier Kurve (0.77, 0, 0.175, 1) gesetzt — dies erzeugt einen
    eleganten, beschleunigenden Enthullungseffekt. Sobald die Klasse "visible"
    per IntersectionObserver hinzugefuegt wird, wechselt clip-path zu
    inset(0 0 0 0) und der Inhalt wird vollstaendig sichtbar.

CHEATCODE CC-39: DYNAMISCHE ZAHLEN-ANIMATION (COUNTER-UP)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Statistiken die hochzaehlen signalisieren Wachstum und Erfolg.
  Jede Seite mit Zahlen (Kunden, Projekte, Umsatz) MUSS Counter-Animation haben.

  PFLICHT-IMPLEMENTIERUNG:
    IntersectionObserver-getriggert (zaehlt nur wenn sichtbar).
    Easing: Schnell am Anfang, verlangsamt zum Ende (ease-out).
    Suffix-Support: "500+" → zaehlt zu 500, zeigt dann "+".
    Locale-Formatierung: 1.000.000 (nicht 1000000).
    Duration: 1500-2500ms je nach Zahlengroesse.

  PATTERN:
    Implementiere eine Funktion animateCounter die ein HTML-Element, einen
    Zielwert (Zahl) und eine optionale Dauer (Standard 2000ms) entgegennimmt.
    Die Funktion nutzt requestAnimationFrame fuer eine zeitbasierte Animation.
    In jedem Frame wird der Fortschritt berechnet (verstrichene Zeit geteilt
    durch Gesamtdauer, auf Maximum 1 begrenzt). Auf den Fortschritt wird ein
    cubic ease-out Easing angewendet (Formel: 1 minus (1 minus Fortschritt)
    hoch 3). Der angezeigte Wert ist das Produkt aus Easing-Wert und Zielwert,
    abgerundet und mit deutscher Locale-Formatierung (Tausenderpunkte). Die
    Animation laeuft solange der Fortschritt kleiner 1 ist.


═══ CHAIN-EXIT-FOOTER ═══ SEQ-45 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — ANIMATION UND MOTION DESIGN (AUS DOC 04/14)
═══════════════════════════════════════════════════════════════════════════════

ANIMATIONS-PHILOSOPHIE — JEDE ANIMATION MUSS EINEN ZWECK ERFUELLEN:
  Spatial Orientation: Hilft Nutzern zu verstehen wo sie sind (Page Transitions).
  Feedback: Bestaetigt Nutzer-Aktionen (Button Clicks, Form Submissions).
  Hierarchy: Lenkt Aufmerksamkeit (Hero Entrance, CTA Pulse).
  Continuity: Erhaelt Kontext bei State Changes (Modal Open/Close).
  Animationen ohne Zweck sind Rauschen. Entfernen.

PRIMAERE BIBLIOTHEK: FRAMER MOTION (motion/react)

  SPRING-PHYSIK (BEVORZUGT FUER INTERAKTIVE ELEMENTE):
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}

  STAGGERED LIST ENTRANCE:
    container: { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
    item: { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

  SCROLL-TRIGGERED (whileInView):
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}

  PAGE TRANSITIONS (AnimatePresence):
    mode="wait", key={pathname}
    initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, exit={{ opacity: 0 }}

TIMING-RICHTLINIEN (VERBINDLICH):
  Hover-Effekte:       150-200ms, ease-out
  Button-Press:        100-150ms, ease-in
  Modal Open:          250-350ms, ease-out / spring
  Modal Close:         200-250ms, ease-in
  Page Transition:     300-400ms, ease-in-out / spring
  Tooltip Show:        150ms, ease-out
  Loading Skeleton:    1.5-2s, ease-in-out (Loop)

PERFORMANCE-REGELN:
  NUR transform und opacity animieren — NIEMALS width, height, top, left.
  will-change: transform SPARSAM verwenden.
  Maximal 2-3 gleichzeitige Animationen pro Viewport (60fps erhalten).
  CSS-Animationen fuer Loop-Effekte (Skeleton, Spinner).

CSS-ONLY ANIMATIONEN (wenn Framer Motion Overkill):
  .btn { transition: all 200ms ease-out; }
  .btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
  .btn:active { transform: scale(0.97); }

ANTI-PATTERNS (VERBOTEN):
  Mehr als 3 Elemente gleichzeitig beim Page Load animieren.
  animation-duration > 500ms fuer UI-Feedback.
  linear Easing fuer UI-Transitions (wirkt roboterhaft).
  Animationen die User-Interaktion blockieren.
  Auto-Playing schwere Animationen above-the-fold ohne prefers-reduced-motion.

PREFERS-REDUCED-MOTION (WCAG AAA — NICHT OPTIONAL):
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  In Framer Motion: useReducedMotion() Hook verwenden.

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

SSOT DIRECTIVE: Der Code ist die einzige Wahrheit.
Component-Implementierungen müssen im Code GELTEN, nicht in .ai-design-context.md.

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
   □ npm run dev → Alle Komponenten rendern, Interactive States sichtbar
   □ Lighthouse Performance ≥ 90, Accessibility ≥ 95
   □ Keyboard Navigation: Tab durch alle Interactive Elemente, Focus-Ring sichtbar

2. COMPONENT-SPEZIFISCHE VALIDIERUNGEN:
   □ Button Konsistenz: Alle Varianten (primary, secondary, ghost, destructive) standardisiert
   □ Button States: Hover, Active, Focus, Disabled sichtbar und unterscheidbar
   □ Card Konsistenz: Radius, Padding, Shadow einheitlich
   □ Form-Elemente: Input, Select, Textarea, Checkbox, Radio standardisiert mit States
   □ Modal/Dialog: Z-Index, Overlay, Focus-Trap implementiert
   □ State Validation: alle 4 States (Hover, Active, Focus, Disabled) auf jedem Element
   □ Color-Token Konsistenz: grep -r "bg-\[#" src/ → <5 (keine inline Farben)
   □ Radius-Konsistenz: grep -r "rounded-\[" src/ → <5 (keine inline Radius)

3. STATE UPDATE (DOKUMENTATION ERFORDERLICH):
   □ .pipeline-master-state.md → SEQ-35 als ✅ COMPLETED markieren
   □ Build-Metriken: [TIMESTAMP] SEQ-35 | Build: SUCCESS | Duration: Xm Ys | Components: NN | Errors: 0
   □ Component-Inventory Snapshot (welche Komponenten? welche Varianten?)
   □ Design-Decision Records für jede Komponente-Familie archivieren

4. DESIGN-CONTEXT CHECKPOINT:
   □ .ai-design-context.md Sektion "Komponenten-spezifische Design-Regeln" vollständig (≥2500 Wörter)
   □ Button-Varianten dokumentiert mit Spezifikationen (Größe, Padding, Typografie)
   □ Button States dokumentiert (Hover, Active, Focus, Disabled mit genauen Farb-Werten)
   □ Card-Styling dokumentiert (Radius, Padding, Shadow-Level, Border)
   □ Form-Element-Design dokumentiert (Border, Focus-Ring, Padding, Error-State)
   □ Modal/Dialog-Styling dokumentiert (Z-Index, Overlay-Opacity, Animation)
   □ Focus-Ring Spezifikation dokumentiert (Breite, Farbe, Offset, WCAG-Konformität)
   □ Alle State-Varianten (Hover, Active, Focus, Disabled) dokumentiert

5. ACCESSIBILITY CHECKPOINT:
   □ Focus-Ring auf ALLEN Interactive Elementen (Button, Input, Link, Modal)
   □ Focus-Order sinnvoll (Tab → vorhersehbare Reihenfolge)
   □ Disabled-State visuell unterscheidbar (nicht nur Farbe, auch Cursor: not-allowed)
   □ Kontrast: Alle Text-auf-Hintergrund Kombinationen ≥ 4.5:1 (WCAG AA)
   □ Error-State: Rot + zusätzliches visuelles Signal (Icon, Text)
   □ ARIA Labels wo nötig (Icon-Buttons, etc.)

6. AUTOMATISCHER HANDOFF ZU SEQ-36:
   → NÄCHSTE PHASE: SEQ-46 → DESIGN-PHASE-05.md (Micro-Interactions & Animations)

   HANDOFF-NOTIZ (für nächste Phase):
   "Phase SEQ-35 hat Component Anatomy & Interactive States komplett definiert.
   ALLE Komponenten-Varianten sind spezifiziert, standardisiert, implementiert.
   ALLE States (Hover, Active, Focus, Disabled) sind visuell klar und konsistent.

   KRITISCHE INPUTS FÜR SEQ-36:
   - Alle Component-Farben und Styles sind tokenized
   - Focus-Ring Spezifikation (Breite, Offset, Farbe)
   - Button-Größen und Padding (baseline für Animation-Targets)
   - Card Shadow-Levels (für Elevation-Animationen)
   - Brand-DNA aus Phase 1 (Animationen müssen zu Persönlichkeit passen)

   AUSGANGSBASIS:
   - Components sind statisch, aber State-ready
   - Keine Hover/Active/Focus CSS-Animationen noch (Phase 5)
   - Alle States sichtbar, aber nicht animated

   READY STATE: Components sind robust, konsistent, a11y-compliant ✓"

   → Lese DESIGN-PHASE-05.md CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Starte SEQ-36 mit aktuellem .ai-design-context.md als Input

═══ PHASE SEQ-35 → SEQ-36: HANDOFF AKTIV ═══
