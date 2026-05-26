Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 5 der Design-Pipeline (Micro-interactions) als lebendiges Interaktions-System zu implementieren. Hover-States, Transitions, Feedback-Animationen und Motion-Design muessen natuerlich und performant sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-46 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-45 → DESIGN-PHASE-04.md
→ NÄCHSTE: SEQ-47 → DESIGN-PHASE-06.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das visuelle Bewegungs- und Animationssystem dieser Next.js/React/TypeScript Website wie ein weltklasse Film zu choreografieren — jede Bewegung hat Zweck, Gewicht und emotionale Resonanz. Phase 4 hat die Komponentenanatomie etabliert. Phase 5 bringt sie zum LEBEN. Dies ist Design-Phase 5 von 10 der Supreme Design & UX Pipeline.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE DESIGN-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

DESIGN PILLAR 1 — SYNC VISION & DISCOVERY
Lies .ai-design-context.md (Brand DNA, Farben, Typografie, Abstände, Komponenten aus Phasen 1-4). Lies .design-upgrade-state.md. Pre-Flight Animation Discovery durchführen:

1. Existierende Animationen: Grep für transition, animation, @keyframes, framer-motion, transform in allen Komponenten
2. Existierende Hover-States: dokumentieren, was bei jedem interaktiven Element beim Hovern passiert
3. prefers-reduced-motion: Wird es respektiert? Wo?
4. Animation-Performance: Nutzen Animationen nur transform+opacity? (GPU-beschleunigt)
5. Page-Transitions: Existieren sie? Wie implementiert?

DESIGN PILLAR 2 — SURGICAL STYLING INJECTION
Neue CSS-Klassen sorgfältig hinzufügen, DOM/Logik nie zerstören. Animation-Klassen zu tailwind.config.ts erweitern.

DESIGN PILLAR 3 — VISUAL ATOMIC VALIDATION
npm run build && npm run lint && npx tsc --noEmit + visueller Check. Keine Fehler, keine Warnings.

DESIGN PILLAR 4 — DESIGN-STATE HANDOFF
.design-upgrade-state.md mit Phase-5-Fortschritt aktualisieren. Checkpoint vor Phase 6.

DESIGN PILLAR 5 — SELF-OPTIMIZING DESIGN LOOP
.ai-design-context.md mit Motion-Token-System, Reduced-Motion-Details, Hover-Choreografie, Scroll-Reveal-Konfiguration aktualisieren.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — ANIMATIONS-TOKEN-SYSTEM
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 1: MOTION-DESIGN-TOKENS DEFINIEREN
───────────────────────────────────────────────────────────────────────────────

Definiere die Animation-Vokabeln mit CSS Custom Properties in globals.css:

EASING-KURVEN (fünf Stufen):
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)    [standard Balance]
--ease-out: cubic-bezier(0.0, 0, 0.2, 1)       [Eingang/Exit, natürlich]
--ease-in: cubic-bezier(0.4, 0, 1, 1)          [Einleitungsbewegung]
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) [Bouncy, Freude]
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94) [Seide, elegant]

DURATIONEN (sechs Stufen):
--duration-instant: 100ms
--duration-fast: 150ms
--duration-normal: 250ms
--duration-slow: 400ms
--duration-slower: 600ms
--duration-slowest: 1000ms

STAGGER-WERTE:
--stagger-fast: 50ms
--stagger-normal: 100ms
--stagger-slow: 150ms

Registriere ALLE in globals.css UND erweitere tailwind.config.ts:
transitionDuration: { instant: '100ms', fast: '150ms', normal: '250ms', slow: '400ms', slower: '600ms', slowest: '1000ms' }
transitionTimingFunction: { 'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)', 'ease-smooth': '...' }

REGEL: Keine Animation >1000ms. Nie ease-linear für UI-Elemente. Immer ease-out für Eingänge.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 2: PREFERS-REDUCED-MOTION — MANDATORY FIRST
───────────────────────────────────────────────────────────────────────────────

KRITISCH: Implementiere das Reduced-Motion-System VOR allen anderen Animationen.

In globals.css:
Implementiere eine globale Media-Query für Nutzer, die Bewegungen bevorzugen reduziert zu sehen. Diese Media-Query sollte auf alle Elemente (mit dem Selektor *, *::before und *::after) angewendet werden. Setze die animation-duration auf 0,01 Millisekunden (praktisch sofort) mit dem !important Flag, um sicherzustellen, dass sie alle anderen Animation-Durationen überschreibt. Setze ebenfalls transition-duration auf 0,01 Millisekunden, um alle CSS-Übergänge zu deaktivieren. Setze animation-iteration-count auf 1, um sicherzustellen, dass Animationen nur einmal laufen, ohne zu wiederholen. Dies respektiert die Bewegungspräferenzen von Benutzern mit vestibulärem Ungleichgewicht oder Motion-Sickness-Anfälligkeit.

Erstelle einen Custom-Hook namens useReducedMotion in lib/hooks/useReducedMotion.ts. Dieser Hook sollte die matchMedia-API nutzen, um zu überprüfen, ob der Benutzer prefers-reduced-motion: reduce in den Betriebssystem-Einstellungen aktiviert hat. Der Hook gibt einen booleschen Wert zurück (true, wenn Bewegungen reduziert sein sollen). Verwende diesen Hook in allen JavaScript-basierten Animationen (besonders in Framer Motion oder benutzerdefinierten useEffect-Hooks), um anzupassen, ob Animationen abgespielt werden oder sofort zum finalen Zustand springen. Dies ermöglicht proaktive Accessibility auf Client-Seite, nicht nur über CSS.

Falls Framer Motion: Wickle AnimatePresence in <MotionConfig reducedMotion="user">

JEDE Animationen, die in dieser Phase hinzugefügt werden, MUSS diesen Media Query respektieren. Das ist nicht verhandelbar — Accessibility first.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — HOVER-STATES & MICRO-INTERACTIONS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 3: BUTTON-HOVER-CHOREOGRAFIE
───────────────────────────────────────────────────────────────────────────────

Primary Buttons:
- Hover: background darkens (bg-primary-700) + translateY(-1px) + box-shadow erhöht sich (Shadow Level 0→1)
- Übergang: transition-all duration-fast ease-out
- Active/Pressed: translateY(1px) + box-shadow sinkt (Level 0) — Druck-Gefühl
- Focus: ring-2 ring-primary-500 ring-offset-2 mit duration-normal timing (nicht instant)

Secondary/Ghost Buttons:
- Hover: background erscheint (transparent → bg-primary-50) + border-color intensiviert (border-primary-400)
- Transition: duration-fast ease-out
- Disabled State: opacity-50 cursor-not-allowed, keine Transitions

Alle Transitions verwenden var(--duration-fast) und var(--ease-out). Keine Rotationen, keine komplexen Transforms.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 4: CARD-HOVER-ORCHESTRATION
───────────────────────────────────────────────────────────────────────────────

Card Container:
- Hover: translateY(-4px) + shadow-level-1 → shadow-level-2
- Transition: duration-slow ease-smooth (400ms, kubisch-bezier für Eleganz)
- Overflow: hidden (bei Kind-Bildern)

Image Inside Card:
- Hover: scale(1.03) (zoom rein ins Container)
- Transition: duration-slow ease-smooth (gleich wie Parent für Synchronisation)
- Parent overflow-hidden verhindert visuellen Bruch

Optional Border Transition:
- border-color: neutral-200 → primary-300 bei Hover (duration-normal)

Group Hover Syntax (Tailwind):
Verwende die Tailwind-CSS-Gruppe-Funktion, um koordinierte Hover-Effekte auf Parent und Child-Elementen zu erreichen. Das Parent-Element erhält die Klasse group sowie hover:shadow-2xl (verstärkt den Schatten bei Hover) und transition-shadow duration-slow. Das Kind-Element (Image) erhält die Klasse group-hover:scale-103 (skaliert bei Parent-Hover), sowie transition-transform duration-slow. Dies stellt sicher, dass das Parent-Element über die Gruppe seine Hover-Klasse mit allen seinen Kindern kommuniziert, ohne dass einzelne onClick-Handler nötig sind.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 5: LINK- UND NAVIGATION-HOVER
───────────────────────────────────────────────────────────────────────────────

Text Links (Inline):
- Hover: Underline Animation (links-to-right mittels ::after Pseudo-Element)
- ::after { content: '', width: 0 → 100%, position: absolute, bottom: -2px, transition: width duration-normal ease-out }
- Keine Color-Änderung, nur Underline-Animation
- Fokus: ring-2 ring-primary-500

Navigation Items (Horizontal Menu):
- Aktiv-Indikator: Slides zwischen Items (transform: translateX)
- Easing: ease-smooth
- Dauer: duration-normal (250ms)
- Implementierung: CSS :nth-child Selector + calc() für Dynamic Position

Footer Links:
- Hover: color: primary-600 (mit transition-colors duration-fast)
- Keine Scale, keine Translate — nur Farbe, schnell

═══════════════════════════════════════════════════════════════════════════════
ULTRATHINK-TASK 6: INPUT-FOKUS-ANIMATION
═══════════════════════════════════════════════════════════════════════════════

Input Focus State:
- Border Color: neutral-300 → primary-500 (transition-colors duration-normal)
- Focus Ring: ring-2 ring-primary-500 ring-offset-2 (kein Instant-Erscheinen, kurze Transition)
- Box Shadow: optional inset shadow bei Focus

Floating Labels (falls verwendet):
- Resting: translateY(0) scale(1) color-neutral-500
- Focus/Filled: translateY(-24px) scale(0.85) color-primary-600
- Transition: duration-normal ease-out
- Background: white (zur Lesbarkeit über Border)

Validation Icons:
- Success: fadeIn + translateX(-4px → 0) bei focus
- Error: fadeIn + translateX(4px → 0)
- Dauer: duration-fast (150ms)
- Easing: ease-out

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — SCROLL-REVEAL & ENTRANCE-ANIMATIONEN
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 7: SCROLL-REVEAL-SYSTEM
───────────────────────────────────────────────────────────────────────────────

Erstelle eine AnimateIn-Komponente im Pfad components/Motion/AnimateIn.tsx, die die Intersection Observer API nutzt, um zu erkennen, wann ein Element in den Viewport scrollt. Diese Komponente sollte ein Wrapper-Komponente sein, die Kinder-Elemente animiert, wenn sie sichtbar werden. Der Komponente wird ein type-Prop übergeben (z.B. "fadeInUp"), um den Animationstyp zu bestimmen. Beispiel-Verwendung: <AnimateIn type="fadeInUp"><YourComponent /></AnimateIn>. Die Komponente sollte automatisch die Intersection Observer einrichten und die Animationen basierend auf der Sichtbarkeit des Elements auslösen.

Types:
- fadeInUp (default): opacity 0→1 + translateY(20px → 0)
- fadeInDown: opacity 0→1 + translateY(-20px → 0)
- fadeIn: nur opacity
- slideInLeft: translateX(-40px → 0) + opacity 0→1
- slideInRight: translateX(40px → 0) + opacity 0→1

Konfiguration:
- Duration: duration-slow (400ms)
- Easing: ease-out
- Threshold: 0.15 (Element 15% sichtbar triggert Animation)
- Once: true (animiere nur beim ersten Erscheinen)
- Root Margin: "-50px" (starte 50px vor sichtbarem Viewport)

StaggerContainer für Child-Elemente:
Implementiere eine StaggerContainer-Komponente, die mehrere AnimateIn-Kinder enthält und sie mit einer Zeitverzögerung nacheinander animiert. Der Container akzeptiert ein staggerChildren-Prop (z.B. 100 Millisekunden), das die Verzögerung zwischen der Animation jedes Kind-Elements definiert. Beispiel: <StaggerContainer staggerChildren={100}><AnimateIn><Item1 /></AnimateIn><AnimateIn><Item2 /></AnimateIn><AnimateIn><Item3 /></AnimateIn></StaggerContainer>. Das erste Element startet sofort bei Sichtbarkeit, das zweite Element wartet 100 Millisekunden, das dritte wartet 200 Millisekunden und so weiter. Dies erzeugt einen kaskadenähnlichen Animations-Effekt, bei dem die Elemente sequentiell aufgedeckt werden.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 8: SEKTIONS-SPEZIFISCHE EINGANGS-ANIMATIONEN
───────────────────────────────────────────────────────────────────────────────

Hero Section (Priorität MAX):
- Headline: fadeInUp delay-0ms
- Subheadline: fadeInUp delay-100ms
- CTA Button: fadeInUp delay-200ms + scaleIn (0.95 → 1)
- Image/Video: fadeInUp delay-300ms
- Alle nutzen duration-slow ease-out

Stats/Zahlen (CountUp Effect):
- Von 0 zu target-Zahl während Scroll-Animation
- useCountUp Hook: animiere mit easing-out über duration-slow
- Trigger beim Sichtbarwerden
- Format: "1.2K+" oder "99%"

Testimonials Grid:
- Alterniere: Left-Slide, Right-Slide, Left-Slide für visuales Interesse
- Jede Card: slideIn + fadeIn mit stagger-slow (150ms zwischen Cards)
- Dauer: duration-slow

Cards Grid (Produkte, Case Studies, etc.):
- Stagger-Animation: Erste Card delay-0, Zweite delay-100ms, Dritte delay-200ms etc.
- Type: fadeInUp
- Max Delay: 300ms (nicht zu lang)

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — PAGE-TRANSITIONS & GLOBALE ANIMATION
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 9: SEITEN-ÜBERGANGS-ANIMATION
───────────────────────────────────────────────────────────────────────────────

Route Change Transitions:
- Nutze Next.js App Router mit Layout-basierter Animation
- Oder: Framer Motion AnimatePresence mit layoutId="page"
- Effekt: Subtle Fade (opacity 1 → 0 → 1)
- Dauer: 200ms (schnell, nicht störend)
- Easing: ease-smooth

Loading Progress Bar (bei slow Connection):
- Thin bar at top: height-1 bg-primary-500
- Animiere width: 0% → 90% während loading
- Nach Page-Load: width 90% → 100% dann fadeOut
- Dauer: 300ms
- Easing: ease-out

KRITISCH: Blockiere Navigation nicht. Animation ist kosmetisch, nicht blocking. Nutze startTransition() in React 18.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 10: SCROLL-VERHALTEN VERFEINERN
───────────────────────────────────────────────────────────────────────────────

Smooth Scroll:
- html { scroll-behavior: smooth; }
- Anchor Links (#section) scrollen sanft
- Dauer: ~1s (Browser-native)

Scroll-to-Top Button:
- Erscheint nach 300px Scroll
- FadeIn Animation (opacity 0 → 1) duration-fast
- Scrollt smoothly to top (window.scrollTo({ top: 0, behavior: 'smooth' }))
- Position: fixed bottom-6 right-6
- Hover: scaleUp (1.1x) + rotateZ(10deg)

Parallax Effects (OPTIONAL, Performance-geprüft):
- NUR wenn performant (transform: translateZ for GPU acceleration)
- SEHR SUBTIL: max 10% Offset
- Beispiel: Image translateY basierend auf scrollY mit easing

Sticky Elements (Headers, Sidebars):
- Smooth transition zum sticky state (Shadow erscheint)
- box-shadow: 0 2px 8px opacity-0 → opacity-0.1
- Dauer: duration-normal (250ms)
- Nicht instant

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING DESIGN LOOP — PHASE 5 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF
───────────────────────────────────────────────────────────────────────────────

Aktualisiere .ai-design-context.md mit:

1. Complete Motion Token System:
   - Alle Easing-Kurven (Bezier-Werte)
   - Alle Durationsstufen
   - Alle Stagger-Intervalle
   - Registrierung in Tailwind-Config

2. Reduced-Motion Implementation:
   - Global CSS Media Query
   - useReducedMotion() Hook Pfad
   - Framer Motion Setup (falls genutzt)

3. Hover Choreography für jeden Component-Type:
   - Buttons (Primary/Secondary/Ghost)
   - Cards
   - Links
   - Inputs
   - Navigation

4. Scroll-Reveal System:
   - AnimateIn Component Pfad
   - StaggerContainer Usage
   - Default Types
   - Threshold Konfiguration

5. Page Transition Approach:
   - Implementation (Framer Motion oder Next.js)
   - Duration/Easing
   - Loading State Details

6. Performance Rules:
   - ONLY transform + opacity (GPU-accelerated)
   - Keine Layout-Triggers (width, height, margin während animation)
   - Keine shadow-Animationen außer Box-Shadow
   - INP <100ms (Input Pending Time)

7. Measurement & Validation:
   - npm run build: 0 errors
   - npm run lint: 0 warnings
   - npx tsc --noEmit: strict mode passed
   - Visual check: alle Animationen flüssig @60fps

Handoff zu Phase 6: Cognitive UX & Navigation Fluidity — hier werden die Animationen in Navigation-Patterns und Information Architecture integriert.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG DESIGN-PHASE 5 — MOTION DESIGN CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

MOTION TOKEN SYSTEM (4 Items):
☐ 5 Easing-Kurven in CSS Custom Properties definiert
☐ 6 Duration-Stufen in globals.css registriert
☐ 3 Stagger-Werte zentral konfiguriert
☐ Tailwind-Config erweitert (transitionDuration, transitionTimingFunction)

ACCESSIBILITY & PERFORMANCE (5 Items):
☐ @media prefers-reduced-motion global implementiert
☐ useReducedMotion() Hook erstellt und getestet
☐ Alle Animationen respektieren Reduced-Motion
☐ Nur transform + opacity animiert (keine Layout-Shifts)
☐ Keine Animation >1000ms

HOVER-STATES (6 Items):
☐ Button Hover: Lift-Effect (translateY + Shadow)
☐ Button Active: Press-Effect (translateY down)
☐ Card Hover: Elevation + Image Zoom
☐ Link Hover: Underline-Animation (LTR)
☐ Navigation Hover: Active-Indikator Slide
☐ Input Focus: Border Color + Ring Transition

SCROLL-REVEAL (5 Items):
☐ AnimateIn Component implementiert
☐ StaggerContainer für Child-Elemente
☐ Hero Section: Sequenzielle Eingänge
☐ Stats: CountUp-Animation
☐ Cards Grid: Staggered Reveal

PAGE TRANSITIONS (3 Items):
☐ Route-Change Fade implementiert
☐ Loading Progress Bar (bei slow connection)
☐ Keine Navigation-Blockierung

SCROLL BEHAVIOR (2 Items):
☐ html { scroll-behavior: smooth; }
☐ Scroll-to-Top Button mit Fade + Smooth

CONTEXT & HANDOFF (1 Item):
☐ .ai-design-context.md mit Motion-System aktualisiert

BUILD & DEPLOY (2 Items):
☐ npm run build: 0 errors, 0 warnings
☐ npm run lint && npx tsc --noEmit: zero warnings
☐ Visual Check: Alle Animationen smooth @60fps, INP <100ms

TOTAL: ~22 Validierungspunkte. Phase 5 ist COMPLETE, wenn alle Checkboxes grün sind.

HANDOFF READY für Phase 6: Cognitive UX & Navigation Fluidity.


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: UX PREMIUM PATTERNS & MICRO-INTERACTIONS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-26: OPTIMISTIC UI (SOFORTIGES FEEDBACK)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Der User sieht das Ergebnis SOFORT — Server-Antwort kommt spaeter.
  PFLICHT-IMPLEMENTIERUNG:
    Formular-Submit: Sofort "Erfolgreich gesendet" anzeigen.
    Bei Server-Fehler: Rollback mit Fehlermeldung.
    Toggle-Aktionen: Sofort visuell umschalten, Server im Hintergrund.

  PATTERN:
    Implementiere ein Optimistic UI Pattern in drei Schritten: Zunächst, wenn der Benutzer den "Absenden"-Button klickt, aktualisiere die UI sofort mit einem Erfolgs-State (z.B. grünes Checkmark, Danke-Nachricht) ohne auf die Server-Antwort zu warten. Zweitens, lasse den API-Call im Hintergrund asynchron ausführen. Drittens, behandle zwei Szenarien: Falls der Server erfolgreich antwortet, ändere nichts in der UI, da sie bereits den korrekten State anzeigt. Falls der Server einen Fehler zurückgibt, setze die UI zurück zum Formular-State und zeige die Fehlermeldung an, damit der Benutzer erneut versuchen kann.

  VALIDIERUNG:
    [ ] Kein "Bitte warten" nach Button-Klick — sofortiges visuelles Feedback
    [ ] Fehler-Rollback funktioniert zuverlaessig
    [ ] User kann waehrend Server-Call NICHT erneut submitten

CHEATCODE CC-27: SCROLL RESTORATION & NAVIGATION STATE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Zurueck-Button MUSS zur exakten Scroll-Position zurueckkehren.
  PFLICHT-IMPLEMENTIERUNG:
    Next.js: experimental.scrollRestoration in next.config.ts
    Manuelle Scroll-Speicherung fuer modale Overlays (Body-Lock + Position-Restore).

  PATTERN:
    Konfiguriere Scroll-Wiederherstellung in next.config.ts, indem du das experimental-Objekt mit scrollRestoration: true erweiterst. Dies aktiviert automatische Scroll-Position-Restauration beim Navigieren. Für modale Overlays implementiere ein manuelles Body-Lock-System: Speichere die aktuelle scrollY-Position mit window.scrollY. Setze dann document.body.style.position auf 'fixed' und document.body.style.top auf -${scrollY}px, um das Scrollen des Hintergrunds zu verhindern und die Position zu speichern. Bei Schließen des Modals setze document.body.style.position wieder auf einen leeren String (zurück zu normal) und rufe window.scrollTo(0, scrollY) auf, um zur ursprünglichen Position zurückzukehren.

CHEATCODE CC-28: VIRTUAL SCROLLING FUER LANGE LISTEN
───────────────────────────────────────────────────────────────────────────────
  WARUM: 100+ Elemente im DOM = Performance-Tod. Virtual Scrolling rendert nur Sichtbares.
  PFLICHT-IMPLEMENTIERUNG:
    Listen mit > 50 Elementen MUESSEN Virtual Scrolling nutzen.
    EIGENE Implementation mit IntersectionObserver + Window-Berechnung (KEINE externe Library).
    KEIN react-window, KEIN react-virtualized — native Loesung mit useIntersectionObserver Hook.

  WANN EINSETZEN:
    Blog-Archive mit > 50 Posts
    Team-Seiten mit > 30 Mitgliedern
    Portfolio-Galerien mit > 40 Projekten
    FAQ-Seiten mit > 30 Fragen
    Preis-Tabellen mit > 20 Zeilen

CHEATCODE CC-29: SMART BACK-TO-TOP BUTTON
───────────────────────────────────────────────────────────────────────────────
  WARUM: Einfach, aber ein Zeichen von Liebe zum Detail.
  PFLICHT-IMPLEMENTIERUNG:
    Erscheint nach 400px Scroll (fadeIn, NICHT abrupt).
    Smooth Scroll nach oben (scroll-behavior: smooth).
    Position: fixed, bottom-right, z-index angemessen.
    ARIA: aria-label="Zurueck nach oben".
    Verschwindet wenn User oben ist.

  DESIGN-REGELN:
    Icon: ChevronUp (Lucide) oder ArrowUp.
    Groesse: 44x44px Minimum (Touch-Target).
    Stil: Sekundaer-Farbe, leichter Schatten, border-radius: 50%.
    Hover: Leichter Lift (translateY(-2px) + Shadow-Erhoehung).



═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: IMMERSIVE UX & INTERAKTIONS-PHYSIK
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-40: MORPHING NAVBAR (FROSTED-GLASS-PILL ON SCROLL)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Die Navbar transformiert sich beim Scrollen von full-width zu einer
  kompakten, schwebenden Frosted-Glass-Pill. Sofortiger Premium-Eindruck.
  Inspiriert von: Antigravity "Navbars that morph into frosted-glass pills".

  PFLICHT-IMPLEMENTIERUNG:
    State 1 (Top): Volle Breite, transparent, groesseres Logo.
    State 2 (Scrolled > 80px): Kompakt, backdrop-blur, border-radius,
    zentriert schwebend, leichter Schatten, kleineres Logo.
    Transition: 300ms ease-out, transform + backdrop-filter + padding.

  CSS-PATTERN:
    Definiere die Navbar als fixed positioniert mit 100% Breite und einer globalen Transition von all 300ms ease-out. Im scrolled-State (Klasse .navbar.scrolled) ändere die Breite auf max(60%, 600px), um eine maximale Breite von 600 Pixeln zu nutzen, oder mindestens 60% der Viewport-Breite, je nachdem, was größer ist. Setze margin auf 12px auto für vertikalen und zentrierten horizontalen Abstand, und positioniere mit left: 50% plus transform: translateX(-50%), um die Navbar zu zentrieren. Aktiviere den Frosted-Glass-Effekt mit backdrop-filter: blur(12px) saturate(180%), um ein verschwommenes, gesättigtes Hintergrund-Aussehen zu erzeugen. Setze background auf rgba(255,255,255,0.75) für eine semi-transparente weiße Oberfläche. Runde die Ecken vollständig mit border-radius: 9999px, setze Padding auf 8px 24px (oben/unten und links/rechts), füge einen leichten Schatten mit box-shadow: 0 4px 30px rgba(0,0,0,0.08) hinzu, und definiere einen subtilen Border mit border: 1px solid rgba(255,255,255,0.3).

  VALIDIERUNG:
    [ ] Navbar morpht smoothly beim Scroll (kein Sprung)
    [ ] Frosted-Glass-Effekt sichtbar (backdrop-filter)
    [ ] Logo-Groesse animiert mit (kleiner bei scrolled)
    [ ] Mobile: Navbar bleibt full-width (kein Morphing auf < 768px)
    [ ] prefers-reduced-motion: Sofortiger Zustandswechsel (keine Transition)

CHEATCODE CC-41: MAUS-REAKTIVE ELEMENTE (REPULSION/ATTRACTION)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Elemente die auf die Maus reagieren erzeugen einen "lebendig"-Effekt.
  Inspiriert von: Antigravity Physik-Engine mit Maus-Abstossungskraft.

  PFLICHT-IMPLEMENTIERUNG:
    Hero-Section: Hintergrund-Elemente (Gradients, Shapes) folgen der Maus
    mit leichter Verzoegerung (lerp/easing).
    Buttons: Magnetischer Pull-Effekt — Button bewegt sich leicht zur Maus
    wenn Maus innerhalb von 100px (Attraction).
    Karten: Subtiler 3D-Tilt basierend auf Mausposition (perspective + rotateX/Y).

  PATTERN (MAUS-FOLLOWER):
    Implementiere einen Mouse-Move-Event-Listener, der die Mausposition kontinuierlich überwacht. Berechne die relative Position der Maus im Viewport, indem du e.clientX durch window.innerWidth teilst, subtrahiere 0.5 (für Zentrierung), und multipliziere mit 20, um eine maximale Verschiebung von 20 Pixeln zu erzeugen. Wiederhole dies für die Y-Achse mit e.clientY. Aktualisiere dann die transform-Eigenschaft des Elements auf translate(${x}px, ${y}px). Für sanftere Animation implementiere Lerp (Linear Interpolation): speichere currentX und targetX Werte, und aktualisiere currentX mit currentX += (targetX - currentX) * 0.08 (die 0.08 ist der Easing-Faktor für Glätte). Dies erzeugt einen verzögerten Folge-Effekt, bei dem das Element der Maus mit einer visuellen Trägheit folgt.

  PATTERN (MAGNETISCHER BUTTON):
    Registriere einen mousemove-Event-Listener auf einem Button-Element. Wenn die Maus über dem Button bewegt wird, berechne die Bounding-Rectangle des Buttons mit getBoundingClientRect(). Berechne die relative Mausposition innerhalb des Buttons, indem du e.clientX minus rect.left minus die halbe Button-Breite (rect.width / 2) subtrahierst. Wiederhole dies für die Y-Achse mit e.clientY. Multipliziere die x- und y-Werte mit 0.3 (um die Bewegung subtil zu halten), und aktualisiere die transform-Eigenschaft auf translate(${x * 0.3}px, ${y * 0.3}px). Wenn die Maus den Button verlässt (mouseleave-Event), setze die transform auf translate(0, 0) zurück, um das Element zur Ruheposition zu bewegen. Dies erzeugt einen magnetischen Effekt, bei dem der Button leicht zur Maus "gezogen" wird.

  KRITISCHE REGELN:
    NUR auf Desktop (pointer: fine). NICHT auf Touch-Geraeten.
    Bewegung subtil halten (max 20px Verschiebung).
    IMMER prefers-reduced-motion respektieren.
    Performance: requestAnimationFrame, NICHT mousemove direkt.

CHEATCODE CC-42: PARALLAX-TIEFENEBENEN (PSEUDO-3D OHNE WEBGL)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Tiefenwirkung ohne 3D-Library. Verschiedene Scroll-Geschwindigkeiten
  erzeugen raeumliche Tiefe wie in einem Diorama.
  Inspiriert von: Antigravity "Tiefenbasierte Skalierung fuer 3D-Effekte".

  PFLICHT-IMPLEMENTIERUNG:
    3-5 Parallax-Ebenen pro Hero-Section.
    Ebene 0 (Hintergrund): Scrollt am langsamsten (0.3x Scroll-Speed)
    Ebene 1 (Mittelgrund):  Scrollt mittel (0.6x)
    Ebene 2 (Vordergrund):  Scrollt normal (1.0x)
    Ebene 3 (Ueber-Vordergrund): Scrollt schneller (1.2x)

  CSS-ONLY-PATTERN (performant, GPU-beschleunigt):
    Definiere einen .parallax-container mit perspective: 1px (erzeugt eine schwache 3D-Perspektive), overflow-y: auto (erlaubt Scrollen) und height: 100vh (volle Viewport-Höhe). Der Hintergrund (.parallax-bg) nutzt transform: translateZ(-2px) scale(3), um 3D-Tiefe zu schaffen und größer zu skalieren (da der Browser versucht, die fehlende Tiefe zu kompensieren). Der Mittelgrund (.parallax-mid) nutzt transform: translateZ(-1px) scale(2), um eine mittlere Ebene zu erzeugen. Der Vordergrund (.parallax-fg) nutzt transform: translateZ(0), um auf der normalen Ebene zu bleiben. Während der Benutzer scrollt, werden diese Ebenen mit unterschiedlichen Geschwindigkeiten bewegt, was einen pseudo-3D-Tiefeneffekt erzeugt, ohne externe WebGL-Bibliotheken zu benötigen.

  KRITISCHE REGELN:
    NUR auf Desktop (ab 1024px). Mobile: Statische Anordnung.
    NUR in Hero/Header-Sections. NICHT auf der gesamten Seite.
    prefers-reduced-motion: Alle Ebenen auf translateZ(0).
    Performance-Test: Kein Jank bei 60fps Scroll.


═══ CHAIN-EXIT-FOOTER ═══ SEQ-46 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — RESPONSIVE INTERACTION DESIGN (AUS DOC 04/16)
═══════════════════════════════════════════════════════════════════════════════

DREI SIMULTANE INPUT-MODALITAETEN:
  Mouse (Desktop): Hover, Click, Right-Click, Drag
  Touch (Mobile/Tablet): Tap, Swipe, Pinch, Long-Press
  Keyboard (Power Users, A11y): Tab, Enter, Space, Escape, Arrow Keys

TOUCH-TARGETS (STRENGE REGEL):
  Kein interaktives Element darf kleiner als 44x44px sein.
  Mindestens 8px Abstand zwischen benachbarten Touch-Targets.
  touch-action: manipulation setzen gegen 300ms Tap-Delay.

MOBILE-SPEZIFISCHE WEB-REGELN:
  100dvh statt 100vh verwenden (Mobile Browser Chrome).
  Input-Text immer >= 16px (verhindert iOS Safari Auto-Zoom).
  overscroll-behavior: contain gegen Pull-to-Refresh-Interferenz.
  @media (hover: none) fuer Touch-Only-Geraete:
    card:hover { transform: none; } (Hover-Effekte deaktivieren)

BREAKPOINT-STRATEGIE (MOBILE FIRST):
  < 640px:    Single Column, Stacked, Full-Width Cards, Hamburger Nav
  640-767px:  Single Column, breitere Gutters
  768-1023px: 2-Column Grid moeglich, Side-by-Side
  1024-1279px: Multi-Column, Sidebar sichtbar, erweiterte Cards
  >= 1280px:  max-w-7xl mx-auto, grosszuegiger Whitespace

INTERAKTIONS-STATES (VOLLSTAENDIG):
  Hover (Desktop Only):
    transition: all 200ms ease-out
    hover: translateY(-1px), box-shadow: var(--shadow-md)
    NIEMALS hover fuer kritische Information (Touch hat kein Hover)

  Active/Press (Alle Geraete):
    active: scale(0.97), transition-duration: 100ms

  Focus (Keyboard Navigation):
    focus-visible: outline 2px solid hsl(var(--ring)), outline-offset 2px
    focus:not(:focus-visible): outline none (nur fuer Mouse-Nutzer)
    NIEMALS outline:none global setzen.

  Disabled:
    opacity: 0.5, cursor: not-allowed, pointer-events: none

SCROLL-VERHALTEN:
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
  scroll-margin-top: 80px auf Anchor-Targets (Offset fuer Sticky Headers).
  IntersectionObserver fuer Scroll-Triggered Effects (NICHT Scroll-Event-Listener).

UX-HEURISTIKEN (AUS DOC 04):
  Navigation:
    Sticky Navigation darf Content nicht verdecken (padding-top = nav height).
    Aktive Seite visuell markieren (text-primary border-b-2).
    Back-Button-Verhalten niemals brechen.
    Breadcrumbs bei 3+ Ebenen Tiefe.

  Layout:
    Z-Index strikt skaliert (10, 20, 30, 50). KEIN z-[9999].
    overflow-hidden nicht blind anwenden (Content-Clipping pruefen).
    max-width fuer Textcontent: 65-75ch (max-w-prose).
    Space fuer async Content reservieren (aspect-ratio, fixed height) gegen CLS.

  Forms:
    Jeder Input braucht ein sichtbares Label.
    Inline-Validierung (on blur/type).
    autocomplete, inputmode, type korrekt setzen.
    Inputs muessen interaktiv aussehen (sichtbare Borders/Backgrounds).

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

SSOT DIRECTIVE: Der Code ist die einzige Wahrheit.
Animation-Implementierungen müssen im Code GELTEN, nicht in .ai-design-context.md.

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
   □ npm run dev → Alle Animationen spielen korrekt, kein Jank
   □ Lighthouse Performance ≥ 90 (Animations sollten nicht Rendering blockieren)
   □ Reduced Motion: prefers-reduced-motion Query funktioniert auf ALLEN Animationen

2. ANIMATION-SPEZIFISCHE VALIDIERUNGEN:
   □ Hover-Animationen: Button, Link, Card sichtbar und glatt
   □ Transition-Dauern: konsistent pro Element-Typ (Button: 200ms, Card: 300ms, etc.)
   □ Easing-Funktionen: konsistent (ease-out für Eingänge, ease-in für Ausgänge)
   □ Reduced Motion: grep -r "prefers-reduced-motion" src/ → ALLE Animations respektieren dies
   □ GPU Acceleration: transform + opacity nutzen (nicht left/top/width)
   □ No Jank: 60fps auf Desktop, 30fps min auf Mobile (DevTools Performance prüfen)
   □ Stagger-Effekte: konsistent angewendet (falls verwendet, 50-150ms zwischen Items)

3. STATE UPDATE (DOKUMENTATION ERFORDERLICH):
   □ .pipeline-master-state.md → SEQ-36 als ✅ COMPLETED markieren
   □ Build-Metriken: [TIMESTAMP] SEQ-36 | Build: SUCCESS | Duration: Xm Ys | Animation-Tokens: NN | Errors: 0
   □ Animation-Vocabulary Snapshot (Durations, Easings, Stagger-Werte)

4. DESIGN-CONTEXT CHECKPOINT:
   □ .ai-design-context.md Sektion "Animations- & Transitions-Vokabular" vollständig (≥1500 Wörter)
   □ Transition-Durations dokumentiert (instant, fast, normal, slow, slower, slowest)
   □ Easing-Funktionen dokumentiert mit Kontexten
   □ Stagger-Werte dokumentiert (falls verwendet)
   □ prefers-reduced-motion Strategie dokumentiert
   □ Komponenten-spezifische Animations dokumentiert (Button-Hover, Card-Lift, etc.)

5. AUTOMATISCHER HANDOFF ZU SEQ-37:
   → NÄCHSTE PHASE: SEQ-47 → DESIGN-PHASE-06.md (Responsive Refinement)

   HANDOFF-NOTIZ:
   "Phase SEQ-36 hat Micro-Interactions & Animations komplett definiert.
   ALLE Transitions sind tokenized, smooth, a11y-compliant (prefers-reduced-motion).
   READY STATE: Animations sind performant, konsistent, ready für responsive testing ✓"

   → Lese DESIGN-PHASE-06.md CHAIN-LINK-HEADER
   → Starte SEQ-37 mit aktuellem .ai-design-context.md als Input

═══ PHASE SEQ-36 → SEQ-37: HANDOFF AKTIV ═══
