Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 8 der QA-Pipeline (Visual Preview V) als Cross-Browser-Inspektion abzuschliessen. Chrome, Firefox, Safari und Edge muessen visuell identisch und funktional fehlerfrei sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-69 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-68 → QA-PHASE-07.md
→ NÄCHSTE: SEQ-70 → QA-PHASE-09.md
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
DIRECTOR-ZUWEISUNG: DIRECTOR OF QUALITY ASSURANCE (Pipeline 4)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of QA (Richter der Zero-Defects).
Meldet an: Director General via .qa-pipeline-state.md und .qa-defect-log.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 6 (Code-Review K1-K7): Architektur, Type Safety, Performance, Security, Design System, A11y, Polish.
  GESETZ 7 (Confiteor/RCA): Jeder Bug-Fix mit Symptom, Root Cause, Fix, Pattern, Prevention.
  GESETZ 8 (Pre-Launch Gates): Alle 7 Gates systematisch abarbeiten vor Delivery.
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Phase 8 von 10 — PREVIEW PROTOCOL V — ANIMATIONS, MICRO-UX & ACCESSIBILITY vollständig zu absolvieren und zu validieren. Dies ist die finale QA-Phase vor dem Deployment-Finale.

PHASE: 8 von 10
TITEL: Preview Protocol V — Animations, Micro-UX & Accessibility
PIPELINE: Final QA
FOKUS: Alle Animationen, Micro-Interactions, Hover-States, Focus-Management, WCAG AAA Accessibility
STATUS: In Progress

TECH STACK:
━ Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md
━ TypeScript Strict Mode, Tailwind CSS v4
━ NO Dark Mode, NO Sentry Integration
━ GPU-beschleunigt: transform, opacity
━ Mobile-First, Touch-Ready, Keyboard-Native

═══════════════════════════════════════════════════════════════════════════════════════
═══ ZERO-DEFECT PROTOKOLL ═══
═══════════════════════════════════════════════════════════════════════════════════════

Keine Animation wird ruckelig deployment commit. Kein Hover-State bleibt reaktionslos. Kein
Focus-Ring wird übersehen. Kein WCAG-Level-AA-Fehler überlebt diesen Checkpoint. Diese Phase
perfektioniert das Gefühl der Website — das letzte psychologische Micro-Momentum vor Nutzer-
Vertrauen vollständig aufgebaut ist.

Butterweiche Scrolls. Sofortige Hover-Reaktionen. Keyboard-freundliche Navigation ohne Fallen.
WCAG AAA Level: Kontrast ≥ 7:1, Focus-Indicator immer sichtbar, alle dynamischen Inhalte
aria-live, alle Bilder mit sinnvollem alt, alle Formular-Labels korrekt verknüpft.

═══════════════════════════════════════════════════════════════════════════════════════
═══ STEP 0: SYNC ═══
═══════════════════════════════════════════════════════════════════════════════════════

▪ Lokaler Snapshot: git status, HEAD commit
▪ Verifikation: Alle bisherigen Phases (1-7) erfolgreich deployed?
▪ Browser-Cache: Clear vor jedem Test (DevTools > Anwendung > Cache leeren)
▪ Geräte-Liste: Chrome (Win10/Mac), Firefox (Win10/Mac), Safari (Mac), Edge (Win10)
▪ Mobile: iPhone 13/15 (Safari), Pixel 7/8 (Chrome Android)
▪ Assistive Tech: NVDA (Win), JAWS-Trial (Win), VoiceOver (Mac), TalkBack (Android)
▪ Test-Checklist: Alle 14 Tasks = Checkbox-Liste mit Timestamps

═══════════════════════════════════════════════════════════════════════════════════════
═══ BLOCK A — ANIMATIONS-AUDIT ═══
═══════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK-A1: SCROLLREVEAL-PRÜFUNG

Alle ScrollReveal-Elemente — jede Komponente mit Scroll-Trigger Animation:

▪ Animation-Start: Triggert die Animation korrekt beim Scrollen ins Viewport? (Inspect:
  IntersectionObserver Callback erfolgreich? Observer.js Logs sauberen Trigger?)

▪ Single-Fire-Regel: Animiert NUR beim ersten Mal in den Viewport? (Nicht bei Scroll-Up,
  nicht bei Browser-Resize, nicht bei Carousel-Change.)

▪ Timing-Audit: Ist die Animation flüssig? 200-400ms für Standard-Reveal, 150-200ms für
  leichte Fades. Easing: ease-out (schneller Anfang, sanftes Ende). Keine abgehackte
  keyframe-Interpolation.

▪ GPU-Check: transform: translateY / translateX / scale + opacity. Keine top/left/width/height
  Animationen (Layout-Shift-Killer).

▪ prefers-reduced-motion: Test mit Chrome DevTools > Accessibility > Prefers reduced motion.
  Animationen MÜSSEN deaktiviert sein. Inhalte MÜSSEN sofort sichtbar sein (keine Wartezeit).

▪ Defekte-Kandidaten: Hero Section, Feature Cards, Testimonial Carousel, CTA Button Reveal,
  Blog Post Cards, Footer Section.

Status: [ ] PASS [ ] FAIL (Defekte vermerken)


ULTRATHINK-TASK-A2: COUNTER-ANIMATION-PRÜFUNG

Stats-Counter-Komponente (z.B. "10M+ Users", "500+ Projects"):

▪ Zähl-Start: Beginnt bei 0? Endet bei korrekt definierten Zielwert (10, 500, 100, etc.)?

▪ Easing-Funktion: ease-out für natürliche Beschleunigung? (d.h. schnell am Anfang, dann
  langsamer). Keine linear-Zählung (wirkt mechanisch).

▪ Dauer: ~2000ms insgesamt angemessen? Weder zu schnell (unleserlich), noch zu langsam
  (langweilig).

▪ Trigger: Zählt NUR beim ersten Scroll-In-View-Event? Danach bleibt Counter bei Endwert.
  (Kein Reset bei Re-Scroll.)

▪ Endwert-Genauigkeit: Letzter angezeigte Wert EXAKT der Zielwert? (Keine Off-by-One,
  Rounding-Fehler.)

▪ Dezimalstellen: Wenn Dezimalzahlen -> Korrekte Formatierung (2 Dezimalstellen, keine
  Reihe 0.999999).

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-A3: TRANSITIONS-AUDIT

Sämtliche Button-, Card-, Modal-, Link-Transitions:

▪ Button-Hover: Beim Hover sofortige Farbänderung (150-200ms). Untergrund ändert Farbe oder
  Opacity? Keine visible delay (> 200ms wirkt laggy). cursor: pointer? Alle 5 Button-Typen
  getestet: Primary, Secondary, Tertiary, Danger, Disabled?

▪ Card-Hover: Hover-State: Leichtes Lift (transform: translateY(-4px) oder scale(1.02))?
  Shadow-Tiefe erhöht (shadow-md → shadow-lg)? Border-Radius bleibt konsistent? Z-Index
  Manager läuft (keine Overlays).

▪ Link-Underline: Animated underline bei Hover? (width: 0% → 100%, duration: 200ms, bottom:
  -2px). Oder Text-Color-Change smooth? Konsistent auf ALLEN Links (Nav, inline, Footer)?

▪ Modal-Animations: Modal-Open: Backdrop fade-in (opacity 0→1, 150ms), Modal-Card scale
  (scale 0.95→1.0, 300ms) + fade-in parallel. Modal-Close: Reverse Animation, 200ms.
  Escape-Key: Animation + Close funktioniert?

▪ Drawer/Sidebar: Slide-in von links/rechts (300ms, transform: translateX). Backdrop fade
  parallel. Close-Animation: Reverse oder schneller (200ms).

▪ Mobile-Unterschied: Touch-Devices KEIN stuck-Hover-State nach Tap? (z.B. button:hover
  bleibt nicht "aktiviert"). Mobile-Tap: Kurzer Feedback-Flash (opacity oder scale pulse)?

▪ Dropdown-Transitions: Open: max-height 0 → auto, opacity 0→1, 200ms. Close: Reverse,
  150ms. Keine flackernde Animation, kein Content-Overflow.

Status: [ ] PASS [ ] FAIL


═══════════════════════════════════════════════════════════════════════════════════════
═══ BLOCK B — MICRO-UX & INTERACTION DETAILS ═══
═══════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK-B4: BUTTON-STATES-AUDIT

JEDER Button auf der Website (Primary, Secondary, Tertiary, Danger, Ghost, Icon):

▪ Default-State: Normale Farbe, readable Text, korrekte Padding/Height (min. 44x44px für
  Touch-Target).

▪ Hover-State: Visuell unterscheidbar. Hintergrund-Farbe dunkler oder Opacity 0.8? Text
  ändert zu Contrast-Color? Transformation smooth (150-200ms).

▪ Active-State: Button.active oder :active Pseudo-Klasse? Farbe noch dunkler oder
  scale(0.98) Feedback? Border oder Shadow-Verstärkung?

▪ Disabled-State: Opacity 0.5 oder grayscale(100%)? cursor: not-allowed? Text-Farbe
  aufgehellt? onclick='return false' oder disabled-Attribut funktioniert? KEINE Click-Events
  auf disabled Buttons.

▪ Loading-State: Button mit Spinner/Skeleton? Spinner rotiert smooth (1s pro Rotation)?
  Loading-Text: "Saving..." oder Icon statt Text? Disabled während Loading? Breite ändert
  sich nicht (width: fixed).

▪ Focus-State: Focus-Ring sichtbar? outline: 2px solid, offset: 2px? Farbe: High-Contrast
  (WCAG AAA)? keyboard-Nutzer können fokussierten Button mit Space/Enter aktivieren?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-B5: INPUT-STATES-AUDIT

JEDES Input-Feld (Text, Email, Password, TextArea, Select, Checkbox, Radio):

▪ Default-State: Border sichtbar? Background: white/transparent? Placeholder-Text sichtbar
  (opacity 0.5 oder 0.7)? Padding ausreichend (8-12px innen)?

▪ Focus-State: Border-Farbe zu Primary-Color? outline: 2px solid + 2px offset? Shadow:
  subtle box-shadow (e.g., shadow-sm)? Placeholder ändert sich oder bleibt? Focus-Ring
  NICHT vom Border überlagert.

▪ Filled-State: Placeholder verschwindet bei Eintrag? Label (wenn floating) hebt sich nach
  oben? Value sichtbar und lesbar? Cursor: text-Cursor blinkt? Remove-Button (×) oder
  Clear-Icon wenn Input filled?

▪ Error-State: Border: rot (–red-500 oder Danger-Color)? Background: leicht rötlicher Tint?
  Error-Message direkt unter Input sichtbar (aria-describedby)? Icon: Exclamation? Farbe
  hilft nicht ALLEIN (Kontrast auch Form).

▪ Disabled-State: opacity 0.5? Background: gray oder disabled-pattern? cursor: not-allowed?
  Value sichtbar aber nicht bearbeitbar? Focus-Ring nicht triggern wenn Tab über.

▪ Success-State: (Optional, wenn Validation) Border: grün? Checkmark-Icon? "Success
  Message" oder kurzer Toast?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-B6: LOADING-STATES-AUDIT

Alle Datenlader-Szenarien:

▪ Skeleton-Screens: Wo werden asynchrone Daten geladen (API-Calls)? Skeleton-Component sichtbar
  statt Blank-Space? Skeleton-Größe = Content-Größe (NO Layout-Shift)? Skeleton-Animation:
  Subtle pulse (opacity 0.7→1→0.7, 1.5s)?

▪ Spinner-Components: Wenn Content-Fetch länger dauert, Spinner sichtbar? Spinner
  mittig/relevant? "Loading..." Text oder aria-label="Loading content"? Spinner rotiert
  smooth (60fps, 1s pro Rotation)?

▪ Layout-Stability: Wenn Skeleton verschwindet und Content erscheint, KEIN Shift? (Heights
  pre-allocated). Keine vertikale Jump, kein Flash.

▪ Calendly-Embed: Besonderheit — Calendly lädt asynchron. Placeholder sichtbar? Spinner
  während Embed rendert? Kein "white-box-of-nothing"?

▪ Form-Submit: Submit-Button beim Click disabled + Spinner? Text ändert zu "Submitting..."?
  Spinner sichtbar? Nach Success: Toast-Feedback oder Redirect-Animation? Error:
  Toast-Error + Button re-enabled?

▪ Pagination/Lazy-Load: Wenn "Load More" geklickt, Button disabled? Spinner beim Button?
  Nach Load: Neue Items erscheinen smooth (fade-in 200ms)? Keine Duplizierung?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-B7: EMPTY-STATES-AUDIT

Alle "Keine Daten"-Szenarien:

▪ Suchresultate: Keine Resultate gefunden? Hilfreiche Meldung: "Keine Projekte gefunden.
  Neues Projekt erstellen?" + Link oder Button? Nicht nur "No results" blanko.

▪ Gefilterte Kategorien: Blog-Post-Kategorie ohne Posts? Fallback-Content oder Meldung:
  "Keine Blog-Posts in dieser Kategorie. Alle Blog-Posts zeigen?" + Link?

▪ Warenkorb/Liste: Leer-Zustand mit Icon (z.B. Cart-Icon, Box-Icon)? Meldung:
  "Warenkorb ist leer. Zum Shoppen..."? Call-to-Action Button?

▪ Filter-Anwendung: Alle Filter aktiviert, keine Resultate? Meldung: "Keine Projekte
  passen zu diesen Filtern. Filter zurücksetzen?" + Reset-Button?

▪ Design: Empty-State-Icon mittig, Meldung unterhalb, CTA am Ende? Textgröße: heading (lg)
  oder body (md), nicht tiny. Farbe: Neutralgrau, nicht Error-Rot.

Status: [ ] PASS [ ] FAIL


═══════════════════════════════════════════════════════════════════════════════════════
═══ BLOCK C — ACCESSIBILITY DEEP-AUDIT ═══
═══════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK-C8: KEYBOARD-NAVIGATION-AUDIT

GESAMTE Website nur mit Tastatur bedienbar:

▪ Tab-Reihenfolge: Tab-Taste durch alle interaktiven Elemente (Buttons, Links, Inputs,
  Selects). Reihenfolge = logische DOM-Reihenfolge (oben→unten, links→rechts)? Keine
  Sprünge, keine Hidden-Elemente in Tab-Reihe?

▪ Enter/Space-Aktivierung: Button: Enter/Space. Links: Enter. Checkbox: Space. Select:
  Arrow-Down um zu öffnen. Alles funktioniert ohne Mouse?

▪ Escape-Handling: Modal offen? Escape schließt. Dropdown offen? Escape schließt. Mobile-Nav
  offen? Escape schließt. Keine Escape-Listener auf unkritischen Elementen.

▪ Arrow-Keys: Tabs-Komponente: Arrow-Left/Right wechselt Tab? Menu-Items: Arrow-Up/Down
  navigiert? Keine Ignore des Arrow-Key-Inputs, sondern aktives Management.

▪ Screen-Reader-Compatibility: Keyboard + NVDA/JAWS + VoiceOver getestet?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-C9: SCREEN-READER-READINESS

AssistiveTech-Kompatibilität (NVDA, JAWS, VoiceOver):

▪ Image-alt-Attribute: JEDES Bild (img-Tag) hat alt-Attribute? Sinnvoll, nicht "image"
  oder "photo". Dekorativ? alt=""? Funktional? alt="Beschreibung des Inhalts"?

▪ Icon-Labels: Icons ohne Text (FontAwesome, Material-Icons, Feather)? aria-label=
  "Label" oder aria-hidden="true" wenn dekorativ? "Menu" Icon: aria-label="Open menu",
  "Close" Icon: aria-label="Close modal"?

▪ Form-Labels: JEDES Input hat korrekt verknüpftes Label (label htmlFor="input-id")? Nicht
  nur Placeholder als Label. Radio/Checkbox: aria-label oder label umhüllt Input?

▪ Live-Regions: Toast-Notifikationen: role="alert" aria-live="polite"? Form-Validierung:
  aria-live="assertive" + aria-describedby auf Error-Meldung? Dynamische Inhalte:
  aria-live="polite" oder aria-busy="true" während Laden?

▪ Headings-Hierarchie: h1 oben, dann h2, h3 etc.? Keine Sprünge (z.B. h1 → h3). Screen
  Reader kann Outline mittels Headings navigieren?

▪ Länder-Text-Alternative: YouTube-Embed / Spotify-Embed? aria-label oder <noscript> mit
  Link-Alternative?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-C10: FOCUS-MANAGEMENT-AUDIT

Focus-Ringe und Focus-Ordnung:

▪ Focus-Ring-Sichtbarkeit: ALLE interaktiven Elemente (Button, Link, Input, Select,
  Checkbox, Radio) haben sichtbaren Focus-Ring? outline: 2px solid + 2px offset? Farbe:
  High-Contrast gegen Background? (z.B. Blue auf White: ✓, Blue auf Dark: ✓)

▪ Focus-Ring-Konsistenz: Alle Buttons/Links/Inputs same Outline-Farbe? Kein Mix von
  Outline-Stilen. Outline > Border nicht vom Border überlagert.

▪ Tab-Reihenfolge-Logik: Manuelle tabindex Überprüfung: KEINE tabindex > 0 außer für
  Skip-Links. tabindex="0" für Custom-Components. tabindex="-1" für Hidden/Non-Focusable.

▪ Skip-to-Content-Link: Erste fokussierbare Element? "Skip to Main Content" Link am
  Seiten-Anfang? Focus springt zu main-Content-Container (id="main")?

▪ Focus-Trap in Modals: Modal offen? Tab sperrt Focus innerhalb Modal? Tab auf letztem
  Button in Modal → zu erstem Button (Cycle)? Escape schließt Modal?

▪ Focus-Visible-Styling: :focus-visible benutzt statt :focus? Kein "outline: none" auf
  :focus? Firefox: outline sichtbar?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-C11: ARIA-AUDIT

ARIA-Attribute auf komplexen Komponenten:

▪ Accordion-Panels: role="button" auf Trigger? aria-expanded="true/false" aktualisiert sich
  bei Toggle? aria-controls="panel-id" zeigt auf Content-Container?

▪ Tabs: Container: role="tablist"? Trigger-Buttons: role="tab", aria-selected="true/false"?
  Content-Panels: role="tabpanel", aria-labelledby="tab-id"?

▪ Modals: Dialog-Element: role="dialog" oder <dialog>-Element? aria-modal="true"?
  aria-labelledby="title-id"? Focus-Management (FocusTrap)?

▪ Navigation: <nav> mit aria-label="Navigation" oder aria-label="Primary navigation"?
  Multiple navs? aria-label unterscheidet (e.g., "Primary Nav", "Footer Nav")?

▪ Dropdown-Menu: role="menu"? role="menuitem" auf Items? aria-expanded="true/false" auf
  Trigger?

▪ Custom-Select: role="combobox", aria-expanded, aria-haspopup="listbox", aria-owns?
  Keyboard-Handling: Arrow-Keys funktionieren?

Status: [ ] PASS [ ] FAIL


═══════════════════════════════════════════════════════════════════════════════════════
═══ BLOCK D — FIXES & VALIDATION ═══
═══════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK-D12: ANIMATION-FIXES

Jede in Tasks A1-A3 identifizierte ruckelige/fehlerhafte Animation:

▪ GPU-Optimization: Alle transform/opacity Animationen? Keine top/left/width/height
  Animationen? will-change: transform, opacity auf animierten Elementen?

▪ Frame-Rate: Chrome DevTools > Performance Tab während Animation. 60fps konstant? Wenn
  Ruckeln: GPU-Hardware-Acceleration prüfen (GPU_RENDERING flag aktivieren).

▪ Easing-Functions: ease-out für Reveal-Animationen, linear für Spinner, ease-in-out für
  Modal-Closes. Consistency-Check über alle Animationen.

▪ Timing-Justification: Alle Durations 150-400ms validiert? Keine 100ms (zu schnell), keine
  > 500ms (zu langsam).

▪ prefers-reduced-motion Fix: Alle @media (prefers-reduced-motion: reduce) Block
  hinzugefügt? animation: none oder duration: 0ms? Inhalt sofort sichtbar?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-D13: ACCESSIBILITY-FIXES

Alle in Tasks C8-C11 identifizierten Accessibility-Defekte:

▪ Fehlende ARIA: Missing aria-label, aria-describedby, aria-expanded? Alle hinzugefügt?
  ARIA-Tests mit NVDA/VoiceOver validiert?

▪ Focus-Ring-Hinzufügung: Fehlende outline: 2px solid? Hinzugefügt auf alle Interactive
  Elements? :focus-visible Fallback für ältere Browser?

▪ Alt-Texte: Alle Bilder mit sinnvollem alt? Dekorative mit alt=""? Menschen/Produkte/
  Illustrationen mit beschreibendem alt? Länge < 125 Zeichen?

▪ Keyboard-Handling: Tab-Reihenfolge korrigiert? Escape-Handler hinzugefügt? Arrow-Key
  Navigation für Tabs/Menu? Skip-to-Content Link vorhanden?

▪ Contrast-Validation: Alle Text-Farben WCAG AAA Kontrast ≥ 7:1? Helfer-Text/Placeholders:
  ≥ 4.5:1?

Status: [ ] PASS [ ] FAIL


ULTRATHINK-TASK-D14: DEFECT-LOG-UPDATE

Alle Defekte aus A1-D13 dokumentiert:

▪ Log-Format: | Task | Defekt-Beschreibung | Severity | Fix-Status | Timestamp |

▪ Severity-Level:
   - Critical: Animation broken, keyboard navigation fails, WCAG Level-A violation
   - High: Animation sluggish, missing focus-ring, WCAG Level-AA violation
   - Medium: Minor animation timing, missing aria-label, minor contrast issue
   - Low: Nicer-to-have animation tweaks, cosmetic focus-ring styling

▪ Fix-Status: [PENDING], [IN-PROGRESS], [FIXED], [DEPLOYED]

▪ Closing Log: Alle Critical & High fixiert? Log in git/Project-Tracker exportiert?

Status: [ ] PASS [ ] FAIL


═══════════════════════════════════════════════════════════════════════════════════════
═══ ATOMIC VALIDATION & SELF-OPTIMIZING LOOP ═══
═══════════════════════════════════════════════════════════════════════════════════════

Nach jedem Defekt-Fix:
1. Atom-Test: Testiere NUR die fixierte Komponente isoliert (z.B. nur Button-Hover)
2. Regression-Check: Teste alle benachbarten Komponenten (z.B. alle Button-Typen)
3. Holistic-Pass: Ganze Website durchlaufen, sanity-check
4. DevTools-Check: Lighthouse, Wave, axe DevTools für Accessibility
5. Cross-Browser: Chrome, Firefox, Safari, Edge (desktop + mobile)
6. Re-Document: Jeder Fix wird ins Defect-Log mit Timestamp + Evidence-Link dokumentiert

═══════════════════════════════════════════════════════════════════════════════════════
═══ FINAL VALIDATION CHECKLIST (22+ Items) ═══
═══════════════════════════════════════════════════════════════════════════════════════

ANIMATIONS:
[ ] ScrollReveal auf allen Seiten flüssig, 200-400ms, kein Re-Trigger
[ ] Counter-Animationen zählen korrekt, ease-out, 2s, Endwert exakt
[ ] Button-Hover smooth 150-200ms, keine Delay > 200ms
[ ] Card-Hover Lift + Shadow-Verstärkung funktioniert
[ ] Modal Open/Close smooth, 300ms / 200ms
[ ] Drawer Slide-In/Out smooth, transform nur
[ ] prefers-reduced-motion deaktiviert alle Animationen korrekt

MICRO-UX:
[ ] Alle 5 Button-States vorhanden + visuell unterscheidbar
[ ] Alle Input-States (Default, Focus, Filled, Error, Disabled) funktionieren
[ ] Loading-States: Spinner rotiert 60fps, Skeleton 1.5s pulse
[ ] Empty-States: Hilfreich, mit CTA, nicht blank

ACCESSIBILITY:
[ ] Gesamte Website per Tastatur navigierbar, logische Tab-Reihenfolge
[ ] Alle Bilder mit sinnvollem alt-Text oder alt=""
[ ] Alle Icons mit aria-label oder aria-hidden="true"
[ ] Alle Formulare: Labels korrekt verknüpft (htmlFor, aria-describedby)
[ ] Focus-Ringe auf ALLEN interaktiven Elementen sichtbar, 2px offset
[ ] Skip-to-Content Link vorhanden + funktioniert
[ ] Focus-Trap in Modals funktioniert
[ ] ARIA: Accordion aria-expanded, Tabs role=tablist/tab/tabpanel aria-selected,
  Modals role=dialog aria-modal, Nav aria-label
[ ] Live-Regions für Toast, Form-Success, Dynamische Inhalte
[ ] Kontrast WCAG AAA: Text ≥ 7:1, Helper-Text ≥ 4.5:1
[ ] Tested mit NVDA / JAWS / VoiceOver
[ ] Lighthouse Accessibility Score ≥ 95
[ ] axe DevTools Report: 0 Critical, 0 High
[ ] Wave Report: 0 Errors, < 5 Warnings (nur niedrig-priority)


═══════════════════════════════════════════════════════════════════════════════════════
═══ CLOSING ═══
═══════════════════════════════════════════════════════════════════════════════════════

Phase 8 ist komplett validiert. Keine Animations-Ruckler, kein fehlender Focus-Ring, keine
WCAG-Verletzung. Das Gefühl der Website ist butterweich, responsive, barrierfrei.

Alle Defekte sind dokumentiert, kritische sind fixiert, deploying zum Testable-Zustand.
Phase 9 folgt: E2E-Automation, Performance-Profiling, Load-Testing.

NÄCHSTE PHASE: 9 von 10 — DEAD CODE ELIMINATION & CODEBASE STERILIZATION

Der Code ist die SSOT. Alle Animations-, Micro-UX-, und Accessibility-Defects sind dokumentiert und behoben.

═══════════════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-69 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-49 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-50)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-70 → QA-PHASE-09.md
   → Lese QA-PHASE-09.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-50

3. INTER-PIPELINE-KONTEXT:
   ─ Markiere Animation-Audit als abgeschlossen
   ─ Dokumentiere WCAG AAA Level Achievement
   ─ Status: 80% der QA-Pipeline ist komplett

═══ PHASE SEQ-49 → SEQ-50: HANDOFF AKTIV ═══
