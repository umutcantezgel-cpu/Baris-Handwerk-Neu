Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 7 der Engineering-Pipeline (Accessibility II) mit fortgeschrittener Barrierefreiheit abzuschliessen. Keyboard-Navigation, Kontrast-Verhaeltnisse, Animations-Kontrolle und assistive Technologien muessen WCAG AAA erfuellen. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-27 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-26 → ZERO-BREAKAGE-PHASE-06.md
→ NÄCHSTE: SEQ-28 → ZERO-BREAKAGE-PHASE-08.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Benutzeroberfläche dieser Next.js/React/TypeScript-Website so zu transformieren, dass sie den individuellen Nutzer ERKENNT — sein Gerät, seine Präferenzen, seinen Kontext, seine Fähigkeiten — und sich in Echtzeit anpasst, um für JEDEN Besucher das optimale Erlebnis zu liefern. Adaptives UI geht über Responsive Design hinaus: Es reagiert nicht nur auf die Bildschirmgröße, sondern auf das gesamte Nutzungsprofil. Da wir auf einem Next.js Stack mit Middleware, Server Components und Client-Side Hooks arbeiten, können wir Anpassungen sowohl serverseitig (vor dem Rendern) als auch clientseitig (nach der Hydration) vornehmen. Dies ist Phase 7 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–6:
- Projektstruktur, Router-Typ, Komponentenbaum
- Design-Token-System, Typografie, Animations-System
- Conversion-Architektur, Trust-Komponenten
- Performance-Optimierungen, Rendering-Strategien pro Route
- Bundle-Größen, Bild-Pipeline, Font-Konfiguration

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 6. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 13 Zeilen.

Schritt 0.3 — Pre-Flight Discovery für Adaptives UI:
1. Bestehende Responsive-Patterns: Welche Breakpoints werden verwendet? Tailwind-Defaults oder Custom?
2. Bestehende Media-Queries: Werden prefers-reduced-motion, prefers-contrast bereits respektiert?
3. Navigation: Wie funktioniert das Mobile-Menü? Hamburger? Bottom-Sheet?
4. Bilder: Werden verschiedene Crops pro Breakpoint geliefert (Art Direction)?
5. Middleware: Existiert middleware.ts? Was macht sie?
7. Cookie-Management: Welche Cookies werden gesetzt? Wie?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### 🎨 Adaptives UI & Nutzerpräferenzen

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — GERÄTE-ERKENNUNG UND KONTEXTUELLE ANPASSUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: GERÄTE-KONTEXT-SYSTEM

Schritt 1.1 — useDeviceContext()-Hook:
Prüfe ob ein ähnlicher Hook bereits existiert. Falls ja: erweitere. Falls nein: erstelle.

Return-Typ (TypeScript Interface):
  IMPLEMENTIERUNGSANWEISUNG:
    Definiere die folgenden Typen/Interfaces: DeviceContext.
    Umfang: Die Implementierung umfasst circa 13 Zeilen Logik.

SSR-kompatibel: Auf dem Server sichere Defaults (isMobile: false, isReducedMotion: false). Nach Hydration echte Werte. Kombiniert mehrere window.matchMedia-Listener und Navigator API.

Schritt 1.2 — Server-seitige Geräte-Erkennung via Middleware:
In middleware.ts (ERWEITERE die bestehende, erstelle KEINE neue):
- Lese User-Agent-Header → setze Cookie/Header mit Geräte-Klassifikation (mobile/tablet/desktop)
- Server Components lesen Header BEVOR HTML-Stream beginnt → korrekte Variante sofort
- Eliminiert "Flash of Wrong Layout"

Schritt 1.3 — DeviceProvider-Context:
<DeviceProvider /> im Root-Layout. Jede Kind-Komponente nutzt useDevice(). Keine eigenen matchMedia-Listener nötig.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: VERBINDUNGSQUALITÄT-BASIERTE ANPASSUNG

Schritt 2.1 — Netzwerk-adaptives Bildladen:
<AdaptiveImage /> erweitert next/image:
- 4G/WiFi: Volle Qualität, Blur-Platzhalter, AVIF
- 2G/3G oder Save-Data: quality={60}, kleinere sizes, aggressiveres Lazy-Loading
- Offline: Gecachte Version oder Low-Res-Fallback
- Nutzt Navigator.connection mit Fallback auf 4G

Schritt 2.2 — Netzwerk-adaptives Video:
<AdaptiveVideo />:
- Schnell: Auto-Play (muted, autoplay)
- Langsam: Statisches Poster, Play-Button für manuelles Laden
- Save-Data: Kein Auto-Load

Schritt 2.3 — Netzwerk-adaptive Animationen:
useAdaptiveAnimation()-Hook:
- Schnell + leistungsstark: Volle Animationen
- Langsam ODER schwach (hardwareConcurrency < 4): Nur Opacity-Fades
- Interagiert mit DeviceContext und Phase 4 Animations-System

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: TOUCH VS. POINTER OPTIMIERUNG

Schritt 3.1 — Touch-spezifische Anpassungen:
Touch-Geräte:
- Hover-Effekte DEAKTIVIERT oder durch Tap-Effekte ersetzt
- Touch-Targets: Mindestens 48×48px
- Swipe-Gesten auf Karussells aktiviert
- Long-Press statt Hover für Tooltips
- Bottom-Sheet-Dialoge statt Desktop-Modals

Pointer-Geräte (Maus):
- Hover-Effekte aktiv
- Tooltips bei Hover
- Desktop-Modals zentriert

Schritt 3.2 — CSS @media (hover) und @media (pointer):
  IMPLEMENTIERUNGSANWEISUNG (CSS-STILREGELN):
    Fuer den Selektor '@media (hover: hover) and (pointer: fine)' werden folgende Eigenschaften gesetzt:
    Fuer den Selektor '@media (hover: none) and (pointer: coarse)' werden folgende Eigenschaften gesetzt:
    Umfang: Die Implementierung umfasst circa 6 Zeilen Logik.
Zuverlässiger als JS-Touch-Detection.

Schritt 3.3 — Hybride Geräte:
Surface, iPad mit Tastatur: Hover aktiv + große Touch-Targets + Swipe UND Click.
CSS: @media (any-hover: hover) and (any-pointer: fine)

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: VIEWPORT-ADAPTIVE INHALTSDARSTELLUNG

Schritt 4.1 — Content-Prioritäts-System:
<ResponsiveContent priority="high|medium|low" />:
- high: ALLE Viewports (Hero, CTA, Kontakt)
- medium: Tablet+Desktop, Mobile als Akkordeon/"Mehr anzeigen"
- low: Desktop only, Mobile ausgeblendet

Server-seitig: Mobile-first rendern. Desktop-Inhalte per CSS display:none auf Mobile (SEO sieht alles).

Schritt 4.2 — Adaptive Navigation:
- Desktop: Volle horizontale Navigation
- Tablet: Kompakter, "Mehr"-Dropdown
- Mobile: Hamburger mit Full-Screen-Overlay
- HTML für alle Varianten server-seitig, CSS steuert Sichtbarkeit

Schritt 4.3 — Adaptive Tabellen:
<ResponsiveTable />:
- Desktop: Standard
- Tablet: Horizontal scrollbar mit Scroll-Hinweis
- Mobile: Gestapelte Cards (Key-Value-Paare)
- Container-Queries statt Viewport (funktioniert auch in schmaler Sidebar)

Schritt 4.4 — Art Direction für Bilder:
<AdaptiveImage /> mit sources-Prop:
- Desktop: 16:9 Breitformat
- Tablet: 4:3
- Mobile: 3:4 oder 1:1 (Hauptmotiv fokussiert)

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — NUTZERPRÄFERENZEN UND ACCESSIBILITY-ADAPTION
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: KONTRAST- UND TRANSPARENZ-ADAPTION

Schritt 6.1 — prefers-contrast: more:
- Textkontraste ≥7:1
- Subtile Schatten → klare Borders (2px solid)
- Transparenzen → solider Hintergrund
- Icon-Strichstärke erhöht
- Fokus-Indikatoren vergrößert (3px)

Schritt 6.2 — prefers-reduced-transparency: reduce:
- Glasmorphismus → solid
- Halbtransparente Overlays → solid
- Alpha-Farben → opak

Schritt 6.3 — forced-colors (Windows Hochkontrast):
- Alle Farben vom System → akzeptieren
- Transparente Borders auf Buttons (im Hochkontrast sichtbar)
- outline statt box-shadow für Fokus
- SVG-Icons: currentColor

Implementiere als CSS Custom Properties mit @media-Query Overrides.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SCHRIFTGRÖSSEN-ANPASSUNG

Schritt 7.1 — Zoom und Textvergrößerung:
- KEIN maximum-scale=1 oder user-scalable=no
- Alle Schriftgrößen in rem
- Test: Browser-Schriftgröße 24px → Layout darf nicht brechen
- Keine festen Höhen auf Text-Containern, flex-wrap auf Button-Gruppen

Schritt 7.2 — Text-Spacing-Override (WCAG 1.4.12):
Test mit: line-height 1.5×, letter-spacing 0.12em, word-spacing 0.16em, paragraph-spacing 2×. Nichts darf brechen.

Schritt 7.3 — Optionaler <FontSizeControl />:
3 Stufen: Normal (16px), Groß (18px), Sehr groß (20px). Ändert font-size auf html. Cookie-persistent.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — LOKALISIERUNG UND KULTURELLE ADAPTION
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SPRACHSPEZIFISCHE ANPASSUNGEN

WICHTIG: Kein i18n-Framework installieren. Lokalisierung nur über Utility-Komponenten.

Schritt 8.1 — Typografische Lokalisierung:
- Deutsche Anführungszeichen: „so" und ‚so'
- Gedankenstrich: – (Halbgeviertstrich)
- Datum: TT.MM.JJJJ
- Zahlen: 1.000,00
- Telefon: +49 Format
- Implementiere als <FormattedDate />, <FormattedNumber />, <FormattedPhone /> Utility-Komponenten

Schritt 8.2 — NAP-Konsistenz:
Name, Adresse, Telefon identisch auf Website und allen Verzeichnissen. LocalBusiness-Schema validieren.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — NUTZERVERHALTEN-ADAPTION
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: WIEDERKEHRENDE BESUCHER ERKENNEN

Schritt 9.1 — useVisitorType()-Hook:
- Erstbesuch: Cookie visitor_type=new
- Wiederbesuch: visitor_type=returning
- Server Components lesen Cookie und passen Seite VOR dem Render an

Schritt 9.2 — Adaptive Inhalte:
Erstbesucher: Volle Erklärungen, prominente Trust-Signale, "So funktioniert's", CTA "Kostenlos kennenlernen"
Wiederkehrende: Kürzere Texte, prominentere CTAs "Jetzt starten", optional "Willkommen zurück", Direktlink Kontaktformular

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: FORMULAR-INTELLIGENZ

Schritt 10.1 — Adaptives Kontaktformular (Formspree-basiert):
- Mobile: 3 Felder (Name, Email/Telefon, Nachricht)
- Desktop: Optionale Zusatzfelder (Budget, Service-Dropdown)
- Service-Seite: Betreff vorselektiert

Schritt 10.2 — Intelligente Validierung:
- Telefon: Verschiedene Formate akzeptieren, automatisch formatieren
- E-Mail: Tippfehler-Korrektur (gnail→gmail)
- Custom Zod-Refinements mit freundlichen Fehlermeldungen

Schritt 10.3 — Autosave (sessionStorage):
Formulare >5 Felder: Automatisch alle 5s speichern. Bei Reload: wiederherstellen. Bei Submit: löschen.

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: PRINT-OPTIMIERUNG

Schritt 11.1 — Print-Stylesheet in globals.css:
@media print:
- Nav, Footer, Sidebar, Cookie-Banner, Sticky-CTAs: display: none
- Text schwarz auf weiß
- Links zeigen URL: a[href]::after { content: " (" attr(href) ")" }
- break-inside: avoid auf Cards, Tabellen, Bildern
- Logo einblenden

Schritt 11.2 — Print-Test auf jeder Hauptseite.

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 7 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 11.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎨 Adaptives UI & Nutzerpräferenzen:
- DeviceProvider-Architektur und alle Hooks
- Responsive-Patterns und Breakpoints
- Middleware-Erweiterungen
- Visitor-Type-System
- Print-Stylesheet-Scope
- Formular-Intelligenz-Features

Schritt 11.2 — .upgrade-state.md finalisieren.

Schritt 11.3 — Handoff an Phase 8:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 6 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 7
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ useDeviceContext()-Hook: SSR-kompatibel, kein Hydration-Mismatch
□ Server-seitige Geräte-Erkennung via Middleware
□ Verbindungsqualität-basiertes Bildladen (<AdaptiveImage />)
□ Touch-Optimierung: 48px Targets, keine Hover-Only-Interaktionen
□ CSS @media (hover) und @media (pointer) korrekt
□ prefers-contrast und prefers-reduced-transparency respektiert
□ forced-colors (Windows Hochkontrast) unterstützt
□ Zoom auf 200% bricht nichts
□ Print-Stylesheet funktional
□ Wiederkehrende-Besucher-Erkennung aktiv
□ Formular-Intelligenz implementiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 8


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-27 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-17 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-18)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-28 → ZERO-BREAKAGE-PHASE-08.md
   → Lese ZERO-BREAKAGE-PHASE-08.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-18


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

═══ PHASE SEQ-17 → SEQ-18: HANDOFF AKTIV ═══
