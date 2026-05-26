Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 8 der Engineering-Pipeline (Error Handling) als robustes Fehler-Management-System zu implementieren. Error Boundaries, Fallback-UIs, Retry-Logik und User-Feedback muessen jeden Edge-Case abdecken. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-28 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-27 → ZERO-BREAKAGE-PHASE-07.md
→ NÄCHSTE: SEQ-29 → ZERO-BREAKAGE-PHASE-09.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese Next.js/React/TypeScript-Website so umfassend barrierefrei zu gestalten, dass JEDER Mensch — unabhängig von visuellen, motorischen, auditiven oder kognitiven Fähigkeiten — die Website vollständig nutzen, verstehen und mit ihr interagieren kann. Phase 1 hat die technischen WCAG-Grundlagen gelegt (semantisches HTML, ARIA, Kontraste). Phase 7 hat adaptive Präferenzen implementiert. Phase 8 geht darüber hinaus: Sie macht Barrierefreiheit zu einem ERLEBNIS, nicht zu einer Pflichtübung. Jede Accessibility-Maßnahme wird als erstklassige React-Komponente mit TypeScript-Enforcement implementiert. Dies ist Phase 8 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–7:
- Semantische HTML-Struktur und ARIA-Attribute (Phase 1)
- Design-Token-System und Farbkontraste (Phase 2)
- Typografie-System und Schriftgrößen (Phase 3)
- Animations-System und reduced-motion (Phase 4)
- Trust-Komponenten und Formular-Architektur (Phase 5)
- Performance-Optimierungen (Phase 6)
- DeviceProvider, Kontrast-Adaption, Touch-Optimierung (Phase 7)

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 7. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 14 Zeilen.

Schritt 0.3 — Pre-Flight Accessibility-Audit:
BEVOR du änderst, führe ein vollständiges Audit durch:

1. axe-core Scan: Installiere @axe-core/cli und scanne JEDE Route. Dokumentiere JEDE Violation.
2. Lighthouse Accessibility: Score pro Route dokumentieren.
3. Kontrast-Check: Prüfe JEDE Farbkombination im Token-System.
4. Tastatur-Test: Navigiere JEDE Route NUR mit Tastatur. Dokumentiere Probleme.
5. Heading-Audit: h1-h6 Hierarchie pro Route (aus Phase 1, hier validieren).
6. ARIA-Audit: Alle aria-Attribute auf Korrektheit prüfen.
7. Alt-Text-Audit: Jedes Bild prüfen (vorhanden? aussagekräftig? dekorativ korrekt markiert?).
8. Formular-Audit: Labels, Required-Hinweise, Fehlermeldungen, autocomplete-Attribute.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### ♿ Accessibility-Audit & Barrierefreiheit

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — VISUELLE BARRIEREFREIHEIT AUF HÖCHSTEM NIVEAU
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: KONTRAST-SYSTEM ÜBER WCAG AA HINAUS

Schritt 1.1 — WCAG AAA für Kerntext:
Phase 1 hat AA sichergestellt (4.5:1). Phase 8 hebt auf AAA:
- Body-Text, Lead-Text, Card-Beschreibungen: 7:1
- Überschriften, Labels, CTA-Texte: 4.5:1 (AAA für großen Text)
- Sekundärer Text: 4.5:1
- Placeholder-Text in Formularen: 4.5:1 (häufig zu schwach!)

Erstelle eine Kontrast-Matrix als TypeScript-Konstante, die bei jedem Build validiert werden kann.

Schritt 1.2 — Dynamische Kontrast-Verstärkung:
useEnhancedContrast()-Hook via DeviceProvider (Phase 7):
- prefers-contrast: more → High-Contrast-Token-Varianten
- Smooth Transition (400ms auf CSS Custom Properties)

Schritt 1.3 — Farbenblindheit-Kompensation:
- Protanopie, Deuteranopie, Tritanopie berücksichtigen
- Erfolg (Grün) und Fehler (Rot) NIEMALS nur durch Farbe — immer Icon + Text + Farbe (3 Kanäle)
- Diagramme/Visualisierungen: Muster ZUSÄTZLICH zu Farben
- Test mit Chrome DevTools → Rendering → Emulate Vision Deficiencies

Schritt 1.4 — Fokus-Indikator-System verfeinern:
- Doppelter Fokusring: 2px weiß + 2px Brand-Farbe/Schwarz (auf JEDEM Hintergrund sichtbar)
- Fokusring-Offset: 2px
- Typ-spezifisch: Buttons (um ganzen Button), Links (um Text), Cards (um Card), Inputs (außen), Checkboxen (um Control+Label)

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: BILDBARRIEREFREIHEIT PERFEKTIONIEREN

Schritt 2.1 — Alt-Text-Qualitäts-Audit:
JEDER Alt-Text nach Kriterien:
- Beschreibt INHALT und KONTEXT (nicht Format)
- Spezifisch: "Fünf Teammitglieder am Whiteboard" statt "Teambild"
- Länge: 50–150 Zeichen
- Dekorativ: alt="" (nicht fehlend, nicht "Dekoration")
- Funktional (Icon-Buttons): Beschreibt FUNKTION ("Zur Startseite", "Menü öffnen")
- Infografiken: Kurzer alt + aria-describedby auf ausführlichen Text

Schritt 2.2 — TypeScript-Enforcement:
Erstelle strenge Typisierung (PRÜFE ob Image-Wrapper aus Phase 6 existiert, ERWEITERE ihn):
  IMPLEMENTIERUNGSANWEISUNG:
    Definiere die folgenden Typen/Interfaces: ImageVariant.
    Umfang: Die Implementierung umfasst circa 4 Zeilen Logik.

Schritt 2.3 — Komplexe Bilder:
Infografiken, Charts: Kurzer alt + expandierbarer Text (<details><summary>Bildbeschreibung</summary>...</details>) oder aria-describedby.

Schritt 2.4 — SVG-Barrierefreiheit:
- Inhaltstragende: role="img" + aria-label oder <title>
- Dekorative: aria-hidden="true" + focusable="false"
- Interaktive: In <button>/<a> gewrapped, SVG aria-hidden, Wrapper hat aria-label

Schritt 2.5 — Video-Barrierefreiheit:
- Untertitel: <track kind="captions">
- Transkript: Expandierbarer Bereich
- Kein Autoplay (außer stumm + dekorativ)
- Player: Tastaturzugänglich

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: TASTATUR-BEDIENBARKEIT PERFEKTIONIEREN

Schritt 3.1 — Vollständiger Tastatur-Walkthrough:
Teste JEDE Route. Dokumentiere JEDES nicht-bedienbare Element:
- Tab/Shift+Tab: Logische Reihenfolge
- Enter/Leertaste: Aktiviert Buttons, Links, Checkboxen
- Escape: Schließt Modals, Dropdowns, Mobile-Menu
- Pfeiltasten: Innerhalb Tabs, Dropdowns, Radios, Karussells
- Home/End: Erstes/letztes in Gruppe

Schritt 3.2 — Optionale Keyboard-Shortcuts (Power-User):
useKeyboardShortcuts()-Hook:
- /: Fokus Suchfeld
- g+h: Startseite, g+c: Kontakt
- ?: Hilfe-Overlay
- DEAKTIVIERT wenn Input fokussiert

Schritt 3.3 — Roving-Tabindex:
Für Tabs, Toolbars, Radio-Gruppen:
- Ein Element tabindex="0", Rest tabindex="-1"
- Pfeiltasten bewegen Fokus innerhalb der Gruppe
- Tab springt zur nächsten Gruppe
- useRovingTabIndex()-Hook oder Headless-UI/Radix

Schritt 3.4 — Fokus-Management bei dynamischen Inhalten:
Definiere Fokus-Regeln:
- Modal öffnet → erstes interaktives Element
- Modal schließt → Trigger-Element
- Akkordeon öffnet → Fokus bleibt auf Trigger
- Toast → Fokus bleibt, aria-live angekündigt
- Route wechselt → main oder h1
- Formular-Fehler → erstes fehlerhaftes Feld
- Element entfernt → nächstes logisches Element
- Dropdown öffnet → erste Option, schließt → Trigger

Erstelle useFocusManagement()-Hook für zentrale Implementierung.

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: SCREEN-READER-ERLEBNIS OPTIMIEREN

Schritt 4.1 — Screen-Reader-Test:
Teste mit VoiceOver (Mac) oder NVDA (Windows) auf JEDER Route:
- Logische Vorlesereihenfolge
- Überschriften als Überschriften erkennbar
- Links und Buttons korrekt benannt
- Bilder beschrieben oder dekorativ
- Widgets funktionieren (Tabs, Akkordeons, Modals)
- Zustandsänderungen angekündigt
- Skip-Navigation funktional

Schritt 4.2 — Landmark-Navigation validieren:
- banner (header), navigation (nav), main, complementary (aside), contentinfo (footer)
- Jede nav hat unterscheidendes aria-label
- Genau ein main pro Seite

Schritt 4.3 — Heading-Navigation:
- h1 genau einmal pro Route
- Keine Sprünge
- sr-only Headings wo nötig

Schritt 4.4 — Formulare im Screenreader:
- Labels korrekt vorgelesen
- Pflichtfelder als "erforderlich" angekündigt
- Hilfetexte bei Fokus (aria-describedby)
- Fehlermeldungen bei Fokus
- Erfolgs-/Fehler-Zustand: role="alert"

Schritt 4.5 — Versteckte Inhalte:
- aria-hidden="true" NUR ohne fokussierbare Kinder
- .sr-only (VisuallyHidden) korrekt eingesetzt
- Dekorative Elemente: aria-hidden="true"
- Inaktive Nav-Varianten: aria-hidden oder display:none

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — MOTORISCHE BARRIEREFREIHEIT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: MOTORISCHE EINSCHRÄNKUNGEN BERÜCKSICHTIGEN

Schritt 5.1 — Großzügige Touch-Targets:
- Primäre CTAs: 48×48px minimum, besser 56×48px
- Nav-Links Mobile: 48px Höhe + 8px Abstand
- Checkboxen/Radios: Gesamtes Label klickbar
- Schließen-Buttons: 44×44px minimum
- Footer-Links Mobile: 44px Höhe

Schritt 5.2 — Fehlertoleranz:
- Jede Swipe-Aktion hat Button-Alternative
- Undo für destruktive Aktionen
- Keine zeitkritischen Klicks
- Pointer-Cancellation: Aktion bei mouseup/touchend, nicht mousedown/touchstart

Schritt 5.3 — Drag-and-Drop-Alternativen:
Falls vorhanden: IMMER tastaturbasierte Alternative (Buttons "Nach oben/unten"). Visuell sichtbar.

Schritt 5.4 — Keine Hover-Only-Informationen:
- Tooltips: Per Fokus UND Hover
- Dropdowns: Per Klick ODER Hover
- Info-Icons: Per Klick (Popover)
- Regel: ALLES hat Klick/Fokus-Alternative

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: TIMING UND ZEITBASIERTE INHALTE

Schritt 6.1 — Karussell-Timing:
- Auto-Rotation: Max 8 Sekunden, Pause-Button sichtbar
- Pause bei Hover, Fokus, prefers-reduced-motion
- Manuelle Navigation immer verfügbar

Schritt 6.2 — Zeitlimits:
- Auto-schließende Toasts: ≥5s + manuell schließbar + Screenreader-angekündigt
- Formulare: KEIN Zeitlimit
- Counter-Animationen: Endwert sofort bei reduced-motion

Schritt 6.3 — Kein Blinken:
- WCAG 2.3.1: Max 3 Flashes/Sekunde
- Keine Stroboskop-Effekte
- Hochfrequente Scroll-Animationen nur bei reduced-motion: no-preference

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — KOGNITIVE BARRIEREFREIHEIT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: KOGNITIVE LAST MINIMIEREN

Schritt 7.1 — Konsistente Patterns:
- Navigation: Jede Seite gleiche Stelle, gleiche Struktur
- CTAs: Gleicher Stil für gleiche Aktion
- Icons: Gleiches Icon für gleiche Funktion
- Labels: Immer über dem Feld
- Fehlermeldungen: Immer rot + Icon + unter dem Feld

Pattern-Konsistenz-Checkliste erstellen und auf jeder Route validieren.

Schritt 7.2 — Klare Sprache:
- Keine Fachbegriffe ohne Erklärung
- Startseite: Max 20 Wörter/Satz, max 4 Sätze/Absatz
- Aktive Sprache
- Keine doppelten Verneinungen

Schritt 7.3 — Orientierungshilfen:
- Breadcrumbs (Phase 1 validieren)
- Aktiver Nav-Link hervorgehoben (Phase 2 validieren)
- Browser-Tab beschreibt aktuelle Seite
- "Zurück nach oben"-Button bei langen Seiten
- Fortschrittsbalken bei Multi-Step-Formularen

Schritt 7.4 — Fehlerprävention:
- Echtzeit-Validierung
- Bestätigungs-Dialoge vor destruktiven Aktionen
- Undo wo möglich
- Klare Fehlermeldungen (nicht "Fehler 500")

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: AUDITIVE BARRIEREFREIHEIT

Schritt 8.1 — Audio-Inhalte:
- Videos: Untertitel mit Sprache + Geräusche ("[Applaus]")
- Podcasts/Audio: Texttranskript
- Audio-Feedback: Immer begleitet von visueller Bestätigung
- Kein Content NUR über Audio

Schritt 8.2 — Visuelle Alternativen:
<Feedback />-Komponente: IMMER visuell + optional auditiv.
- Formular erfolgreich: Grünes Häkchen + Text
- Benachrichtigung: Toast + Text
- Chat-Widget: Visueller Badge

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — AUTOMATISIERTE UND MANUELLE TESTING-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: AUTOMATISIERTE ACCESSIBILITY-TESTS

Schritt 9.1 — Unit-Tests mit jest-axe:
Für JEDE Komponente: render → axe → expect(await axe(container)).toHaveNoViolations()
CI-Integration: Build fail bei Violations.

Schritt 9.2 — E2E-Tests mit Playwright + axe:
Pro Route: navigate → AxeBuilder.analyze() → 0 Violations.
Zusätzlich: Tab-Navigation, Modal-Fokus, Formular-Fehler.

Schritt 9.3 — Lighthouse in CI:
accessibility Score ≥95 als Quality-Gate. Build fail bei <95.

Schritt 9.4 — ESLint jsx-a11y strict:
Validiere Konfiguration. ZERO Errors bei jedem Commit:
- alt-text, anchor-has-content, aria-props, aria-role
- click-events-have-key-events, heading-has-content
- label-has-associated-control, no-static-element-interactions

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: MANUELLE ACCESSIBILITY-TESTS

Schritt 10.1 — Tastatur-Test (15 Min/Route):
□ Tab logische Reihenfolge
□ Fokus-Indikator überall sichtbar
□ Kein Fokus-Trap (außer Modals)
□ Enter/Leertaste aktiviert
□ Escape schließt Overlays
□ Skip-Nav funktioniert

Schritt 10.2 — Screenreader-Test (20 Min/Route):
□ Heading-Hierarchie logisch
□ Bilder korrekt beschrieben
□ Links/Buttons verständlich benannt
□ Formulare: Labels, Pflicht, Fehler
□ Zustandsänderungen angekündigt
□ Landmarks funktionieren

Schritt 10.3 — Zoom-Test:
□ 200%: Kein Inhalt verschwindet/überlappt
□ 400%: Hauptinhalt lesbar/bedienbar
□ Schriftgröße 24px: Layout passt sich an
□ Pinch-to-Zoom: Funktioniert

Schritt 10.4 — Kognitive Szenarien:
□ 5s-Verständnis-Test: Was bietet die Website?
□ 60s-Formular-Test: Kontaktformular ausfüllbar?
□ Fehlermeldungen verständlich?
□ Navigation-Pattern nach 2 Seiten verstanden?

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: ACCESSIBILITY-STATEMENT

Schritt 11.1 — Seite /barrierefreiheit erstellen:
- WCAG-Konformitätsgrad (Ziel: 2.1 Level AA, teilweise AAA)
- Unterstützte Technologien
- Bekannte Einschränkungen (ehrlich!)
- Kontakt für Feedback
- Datum letzte Überprüfung

Schritt 11.2 — Feedback-Mechanismus:
E-Mail auf der Accessibility-Seite. Optional: Widget auf jeder Seite.

NACH TASK 11: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 8 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 12: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 12.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### ♿ Accessibility-Audit & Barrierefreiheit:
- axe-core Ergebnisse VORHER und NACHHER
- Lighthouse Accessibility Scores VORHER und NACHHER
- Kontrast-Matrix mit allen Farbkombinationen
- Fokus-Management-Regeln
- Tastatur-Test-Ergebnisse
- Screen-Reader-Test-Ergebnisse
- Neue Hooks (useEnhancedContrast, useRovingTabIndex, useFocusManagement, useKeyboardShortcuts)
- Accessibility-Statement-URL

Schritt 12.2 — .upgrade-state.md finalisieren.

Schritt 12.3 — Handoff an Phase 9:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 6 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 8
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ axe-core: ZERO Violations auf allen Routen
□ Lighthouse Accessibility: ≥95 auf allen Routen
□ WCAG AAA Kontraste für Kerntext (7:1)
□ Keine Information nur durch Farbe
□ Doppelter Fokusring auf jedem Hintergrund sichtbar
□ Alt-Texte: Qualitätsgeprüft, TypeScript-enforced
□ Tastatur: Jede Route vollständig bedienbar
□ Screen-Reader: Logische Vorlesereihenfolge
□ Touch-Targets: ≥48×48px
□ Keine Hover-Only-Informationen
□ Karussell: Pause-Button, keine Auto-Rotation bei reduced-motion
□ Kognitive Patterns konsistent
□ Accessibility-Statement unter /barrierefreiheit
□ eslint-plugin-jsx-a11y strict: ZERO Errors
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 9


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-28 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-18 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-19)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-29 → ZERO-BREAKAGE-PHASE-09.md
   → Lese ZERO-BREAKAGE-PHASE-09.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-19


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

═══ PHASE SEQ-18 → SEQ-19: HANDOFF AKTIV ═══
