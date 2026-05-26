Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 4 der Engineering-Pipeline (Performance I) auf maximale Ladegeschwindigkeit zu optimieren. Core Web Vitals, LCP, CLS und INP muessen die Schwellenwerte fuer Premium-Qualitaet unterschreiten. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-24 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-23 → ZERO-BREAKAGE-PHASE-03.md
→ NÄCHSTE: SEQ-25 → ZERO-BREAKAGE-PHASE-05.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Animationsschicht dieser Next.js/React/TypeScript-Website so zu orchestrieren, dass sich jede Interaktion physikalisch überzeugend anfühlt, jeder Scroll-Übergang den Besucher tiefer in die Seite zieht, und die Website den Eindruck eines lebendigen, reaktiven Organismus erweckt — nicht eines statischen Dokuments. Da wir auf einem modernen Next.js Stack arbeiten, werden alle Animationen als React Hooks, wiederverwendbare Komponenten und CSS-basierte Systeme implementiert — mit Framer Motion als primärer Animations-Bibliothek (oder alternativ CSS-only für maximale Performance). Jede Animation respektiert prefers-reduced-motion als unverletzliches Gesetz. Dies ist Phase 4 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Animation: Framer Motion (bevorzugt) ODER CSS-only Transitions
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

SICHERHEITSREGELN FÜR PHASE 4:
- Performance ist heilig. KEINE Animation darf INP über 100ms treiben.
- NUR transform und opacity animieren. NIEMALS width, height, margin, padding, top, left.
- prefers-reduced-motion ist GESETZ. Jede Animation hat ein Reduced-Motion-Äquivalent.
- Animationen sind Client Components. Keine Server Component versehentlich zur Client Component machen — stattdessen wrappen.
- Keine Animation über 1000ms.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere besonders:
- Design-Token-System (Phase 2)
- Typography-Komponente (Phase 3)
- Performance-Baseline (CLS-Werte)
- Server/Client Component Aufteilung

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Verifiziere Phase 1-3 Abschluss. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 9 Zeilen.

Schritt 0.3 — Pre-Flight Discovery für Animationen:
1. Bestehende Animationen: Grep nach transition, animation, @keyframes, framer-motion, motion., animate. Was existiert?
2. Framer Motion Status: Installiert? Version? LazyMotion?
3. Performance-Baseline: Lighthouse → INP + CLS. Dokumentieren.
4. prefers-reduced-motion: Bereits respektiert? Grep nach prefers-reduced-motion, useReducedMotion.
5. Client Components: Welche? Animationen können NUR dort leben.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🎬 Animations-System

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — ANIMATIONS-FUNDAMENT UND PHYSIK-SYSTEM
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: ANIMATIONS-TOKEN-SYSTEM

Schritt 1.1 — Easing-Kurven als Design-Token:
CSS Custom Properties UND TypeScript-Konstanten:
- --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1) — Elemente kommen IN den Viewport
- --ease-in: cubic-bezier(0.4, 0.0, 1, 1) — Elemente VERLASSEN den Viewport
- --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1) — Position-Wechsel
- --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) — Federphysik mit Überschwingen
- --ease-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55) — Spielerisch

Framer Motion Äquivalente:
- spring-snappy: { type: "spring", stiffness: 400, damping: 30 }
- spring-smooth: { type: "spring", stiffness: 200, damping: 20 }
- spring-bouncy: { type: "spring", stiffness: 300, damping: 15 }

Schritt 1.2 — Duration-Token:
- --duration-instant: 100ms (Checkbox, Button-Active)
- --duration-fast: 150ms (Hover, Tooltip, Focus)
- --duration-normal: 250ms (Card-Hover, Dropdown, Tab)
- --duration-slow: 400ms (Modal, Akkordeon)
- --duration-dramatic: 600ms (Hero-Entrance, Sektion-Reveal)
- --duration-cinematic: 1000ms (Erster Seitenaufruf — MAXIMUM)

Schritt 1.3 — Stagger-Token:
- --stagger-fast: 50ms pro Element
- --stagger-normal: 80ms pro Element
- --stagger-slow: 120ms pro Element
- Max 8 gestaggerte Elemente. Ab dem 9. erscheinen alle gleichzeitig.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: REDUCED-MOTION-SYSTEM (MANDATORY — VOR ALLEN ANDEREN ANIMATIONEN)

Schritt 2.1 — useReducedMotion()-Hook:
Falls nicht vorhanden, erstelle:
- Liest prefers-reduced-motion via matchMedia
- SSR-kompatibel (Default: false auf Server)
- Im DeviceProvider integrieren (falls aus Phase 7 vorhanden, sonst standalone)

Schritt 2.2 — Reduced-Motion-Strategie:
Bei reduced-motion: reduce:
- ALLE Transitions/Animationen → instant (duration: 0)
- Scroll-Reveals → Elemente sofort sichtbar (opacity: 1, transform: none)
- Hero-Animation → Elemente sofort in Endposition
- Counter-Animationen → Endwert sofort
- Hover-Effekte → Reduziert auf Farb-/Opacity-Änderung

Schritt 2.3 — CSS-Fallback:
  IMPLEMENTIERUNGSANWEISUNG (CSS-STILREGELN):
    Fuer den Selektor '@media (prefers-reduced-motion: reduce)' werden folgende Eigenschaften gesetzt:
    Fuer den Selektor '*, *::before, *::after' werden folgende Eigenschaften gesetzt:
      Die Eigenschaft animation-duration erhaelt den Wert 0.01ms !important.
      Die Eigenschaft animation-iteration-count erhaelt den Wert 1 !important.
      Die Eigenschaft transition-duration erhaelt den Wert 0.01ms !important.
      Die Eigenschaft scroll-behavior erhaelt den Wert auto !important.
    Umfang: Die Implementierung umfasst circa 8 Zeilen Logik.
ZUSÄTZLICH zu komponentenspezifischen Anpassungen.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — SCROLL-REVEAL & HERO-ANIMATION
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SCROLL-REVEAL-SYSTEM

Schritt 3.1 — <AnimateIn /> Komponente:
Client Component ('use client'):
- Intersection Observer basiert (threshold: 0.2)
- Props: direction ('up'|'down'|'left'|'right'|'none'), delay (ms), duration (Token), once (boolean, default true)
- Animation: Von opacity:0 + translateY(24px) → opacity:1 + translateY(0)
- Reduced-Motion: Sofort sichtbar

Schritt 3.2 — <StaggerContainer /> Komponente:
Wraps Kinder und staggert deren Erscheinen:
- Props: stagger (Token: 'fast'|'normal'|'slow'), children
- Kinder werden sequentiell mit Delay animiert
- Max 8 Kinder gestaggert

Schritt 3.3 — Scroll-Reveal auf bestehende Sektionen anwenden:
CHIRURGISCH: Wrappe bestehende Sektionen in <AnimateIn /> OHNE deren Logik zu ändern. Beispiel:
VORHER: <TestimonialSection />
NACHHER: <AnimateIn><TestimonialSection /></AnimateIn>

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: HERO-EINGANGSANIMATION

Sequenz für die Hero-Sektion (first page load):
1. Headline: Fade-in + slide-up (0ms delay, --duration-dramatic)
2. Sub-Headline: Fade-in + slide-up (150ms delay)
3. CTA-Button: Fade-in + scale (300ms delay)
4. Trust-Bar: Fade-in (450ms delay)
5. Hero-Bild (falls vorhanden): Fade-in + leichter Scale (200ms delay)

Total Sequenz-Dauer: ≤1000ms.
Reduced-Motion: Alle Elemente sofort sichtbar.
Nur beim ERSTEN Seitenaufruf — bei Navigation zurück NICHT wiederholen (Session-State).

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — MIKRO-INTERAKTIONEN UND PAGE-TRANSITIONS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: HOVER & INTERACTION MICRO-ANIMATIONS

Schritt 5.1 — Button-Animations:
- Hover: translateY(-1px) + elevation-Wechsel (--duration-fast, --ease-out)
- Active/Press: translateY(0) + scale(0.98) (--duration-instant)
- Focus: Fokusring-Animation (--duration-fast)

Schritt 5.2 — Card-Animations:
- Hover: translateY(-4px) + elevation-Wechsel (--duration-normal, --ease-out)
- Touch: scale(0.98) auf Press (--duration-instant)

Schritt 5.3 — Link-Animations:
- Hover: Underline-Animation (width 0→100%, --duration-fast)
- Focus: Fokusring (--duration-fast)

Schritt 5.4 — Navigation-Animations:
- Mobile-Menu: Slide-in von rechts (--duration-slow, --ease-out)
- Dropdown: Scale-Y von oben (--duration-normal, --ease-out)
- Active-Link-Indicator: Slide-Transition (--duration-normal)

Schritt 5.5 — Formular-Feedback:
- Validierung-Erfolg: Grünes Häkchen fade-in (--duration-fast)
- Validierung-Fehler: Shake-Animation (6px, 3 Zyklen, --duration-fast) + rote Umrandung
- Submit-Loading: Spinner-Rotation + Button-Text fade-out (--duration-fast)
- Submit-Erfolg: Häkchen-Animation mit Draw-Effect (--duration-slow)

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: PAGE-TRANSITION-CHOREOGRAFIE

Schritt 6.1 — Route-Wechsel-Animation:
Subtil. Nicht aufdringlich:
- Ausgehende Seite: opacity 1→0.95 (--duration-fast)
- Eingehende Seite: opacity 0.95→1 + leichter translateY(-8px→0) (--duration-normal)
- Implementiere über Next.js Layout-Boundaries oder Framer Motion AnimatePresence

Schritt 6.2 — Loading-State-Animation:
loading.tsx: Skeleton-Pulse-Animation (opacity 0.5↔1 Cycle, --duration-slow, infinite).
Reduced-Motion: Statisches Grau statt Pulse.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 4 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 7.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎬 Animations-System:
- Easing-Token (5 Kurven + 3 Spring-Configs)
- Duration-Token (6 Stufen)
- Stagger-Token (3 Stufen)
- Reduced-Motion-Implementierung
- AnimateIn und StaggerContainer (Pfade, Props)
- Hero-Sequenz-Choreografie
- Mikro-Interaktionen pro Elementtyp
- Performance-Impact (INP vorher/nachher)

Schritt 7.2 — .upgrade-state.md finalisieren.

Schritt 7.3 — Handoff an Phase 5:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 7 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 4
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ INP <100ms auf ALLEN Routen
□ CLS <0.03 auf ALLEN Routen
□ prefers-reduced-motion: JEDE Animation hat Fallback
□ NUR transform + opacity animiert (keine Layout-Properties)
□ Keine Animation >1000ms
□ Animations-Token als CSS Custom Properties + TypeScript
□ AnimateIn + StaggerContainer Komponenten funktional
□ Hero-Sequenz: ≤1000ms Gesamtdauer, nur beim ersten Aufruf
□ Hover-Animations auf Buttons, Cards, Links
□ Mobile-Menu Slide-Animation
□ Formular-Feedback-Animationen
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 5


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: ERROR BOUNDARIES & RESILIENCE PATTERNS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-05: HIERARCHISCHE ERROR BOUNDARIES
───────────────────────────────────────────────────────────────────────────────
  WARUM: Ein Fehler in einer Komponente darf NIEMALS die gesamte App killen.
  PFLICHT-IMPLEMENTIERUNG:
    Global Error Boundary: app/error.tsx (faengt alle unbehandelten Fehler)
    Not-Found Boundary: app/not-found.tsx (404-Handling mit Design)
    Route-Segment Boundaries: app/[route]/error.tsx (pro Route isoliert)
    Component-Level: Suspense + ErrorBoundary um risikoreiche Sections

  DESIGN-ANFORDERUNG AN ERROR-PAGES:
    KEIN generisches "Oops, something went wrong".
    JEDE Error-Page MUSS:
      - Das Brand-Design beibehalten (Logo, Farben, Typografie)
      - Einen klaren CTA haben ("Zurueck zur Startseite", "Erneut versuchen")
      - Kontext geben (Was ist passiert? Was kann der User tun?)
      - SEO-konform sein (404 sendet HTTP 404, nicht 200)

  ARCHITEKTUR:
    Die Error-Handling-Architektur besteht aus mehreren ebenen. Die globale Error-Komponente auf Root-Ebene wird als Client Component implementiert und faengt alle unkontrollierten Fehler in der gesamten Anwendung ab. Die 404-Komponente wird als Server Component ausgeführt. Pro Route lassen sich isolierte Error-Handler platzieren. Als letzte Sicherheitsmassnahme existiert eine zusaetzliche globale Error-Fallback-Komponente fuer Fehler in Layouts.

CHEATCODE CC-06: GRACEFUL DEGRADATION
───────────────────────────────────────────────────────────────────────────────
  WARUM: Die Seite MUSS auch ohne JavaScript grundlegend funktionieren.
  PFLICHT-IMPLEMENTIERUNG:
    Server Components rendern HTML ohne JS — das ist der Baseline.
    Progressive Enhancement: JS-Features als Aufwertung, nicht Voraussetzung.
    Formulare funktionieren mit nativer HTML-Validierung als Fallback.
    Navigation funktioniert mit Standard-Links als Fallback.

  CHECKLISTE:
    [ ] Hauptinhalt sichtbar ohne JavaScript (SSR/SSG)
    [ ] Formulare haben action-Attribut als Fallback
    [ ] Links nutzen href (nicht onClick-only Navigation)
    [ ] Bilder haben width/height (kein Layout Shift ohne JS)
    [ ] Kritische Styles sind nicht JS-abhaengig

CHEATCODE CC-07: RETRY-LOGIK MIT EXPONENTIAL BACKOFF
───────────────────────────────────────────────────────────────────────────────
  WARUM: Netzwerk-Fehler sind normal. Intelligentes Retry verhindert Frustration.
  PFLICHT-IMPLEMENTIERUNG:
    Jeder externe API-Call (Formspree, Calendly) MUSS Retry-Logik haben.
    Pattern: 3 Versuche, exponentiell (1s, 2s, 4s), dann User-Feedback.

  IMPLEMENTATION-PATTERN:
    Die Retry-Logik implementiert ein exponentielles Backoff-Verfahren. Bei jedem API-Aufruf werden bis zu drei Versuche unternommen. Sollte die Anfrage erfolgreich sein, wird das Ergebnis sofort zurückgegeben. Bei Server-Fehlern (HTTP 5xx) wird die Anfrage wiederholt. Client-Fehler (HTTP 4xx) werden nicht wiederholt, da sie auf ungueltige Anfragen hindeuten. Zwischen den Versuchen wird eine exponentiell steigende Wartezeit eingehalten: 1 Sekunde nach dem ersten Fehlschlag, 2 Sekunden nach dem zweiten, 4 Sekunden nach dem dritten. Nur beim letzten Fehlschlag wird der Fehler an den Aufrufer weitergeleitet.

  VALIDIERUNG:
    [ ] Formspree-Calls nutzen Retry-Pattern
    [ ] User sieht Loading-State waehrend Retry
    [ ] Nach finalem Fehler: klare Fehlermeldung mit Handlungsanweisung


═══ CHAIN-EXIT-FOOTER ═══ SEQ-24 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-14 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-15)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-25 → ZERO-BREAKAGE-PHASE-05.md
   → Lese ZERO-BREAKAGE-PHASE-05.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-15


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

═══ PHASE SEQ-14 → SEQ-15: HANDOFF AKTIV ═══
