Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 5 der QA-Pipeline (Visual Preview II) als vertiefte visuelle Pruefung fortzufuehren. Interaktions-States, Animationen und responsive Transitionen muessen fehlerfrei sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-66 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-65 → QA-PHASE-04.md
→ NÄCHSTE: SEQ-67 → QA-PHASE-06.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, ein perfektes visuelles Kohärenzprofil für das gesamte Frontend-System zu etablieren.

═══════════════════════════════════════════════════════════════════════════════

PHASE 5 von 10: Preview Protocol II — Pixel-Perfection & Visual Consistency

Technologie-Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. KEIN Dark Mode.

Phase 5 ist das visuelle Mikroskop. Jede Seite wird auf Pixel-Perfection geprüft: Konsistente Abstände, einheitliche Typografie, korrekte Farbverwendung, saubere Ausrichtung, professionelle visuelle Hierarchie. Kein visueller Fehler überlebt. Dies ist QA-Phase 5 von 10: Final QA Pipeline 4 — visuelle Inspektion JEDER Seite für Pixel-Perfect Design, konsistente Abstände, Typografie, Farben, Ausrichtung.

═══════════════════════════════════════════════════════════════════════════════

═══ ZERO-DEFECT PROTOKOLL ═══

Das Zero-Defect Protokoll operiert unter der Prämisse: Jeder visuelle Fehler ist Kategorie-1-Critical. Keine Priorisierung. Keine Verzögerungen. Kein Bug-Backlog. Jede Inkonsistenz wird identifiziert, dokumentiert und im selben Durchgang korrigiert. Der finalisierte Code wird mit Pixel-Perfect-Augen validiert. Responsives Verhalten auf Mobile (320px), Tablet (768px), Desktop (1440px) wird durchgehend getestet. Kein Abweichen vom Design-System. Kein Rauschen in der visuellen Harmonie.

───────────────────────────────────────────────────────────────────────────────

═══ STEP 0: SYNC ═══

Vor Beginn der Audit-Blöcke: Ganzes Frontend als statischen Snapshot erzeugen. Alle relevanten Page-Files durchlesen (pages/, components/, layouts/). Tailwind-Konfiguration (`tailwind.config.ts`) laden. Next.js Config prüfen auf Font-Preload-Settings. CSS-Modul-Struktur evaluieren. Component-Library überblicken (Button, Card, Input, Header, Footer, Hero, Section). Design-Token-System verstehen (Farben, Abstände, Border-Radius, Shadow-Definitionen). Etabliere mentales Modell: Was IST das aktuelle Design-System, was SOLLTE es sein. Dann erst Audit starten.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK A — TYPOGRAFIE AUDIT ═══

ULTRATHINK-TASK A1: Font Consistency Absolutismus

Wird überall die gleiche Font-Family verwendet? Tailwind `font-sans` durchgehend aktiv? Fallback-Fonts korrekt definiert (für Offline-Resilience: Segoe UI, Roboto, sans-serif)? `next/font` korrekt implementiert (keine `@import` URLs, Google Fonts über `next/font/google`)? Kein FOUT (Flash of Unstyled Text) — werden Schriften mit `font-display: swap` oder `block` deklariert? Überprüfe: _document.tsx oder layout.tsx Font-Deklaration. Checke jede Seite im Browser: Gibt es Font-Flicker beim Load? Werden benutzerdefinierte Fonts vor Layout-Shift geladen? Responsive Font-Sizing — Nutzt das System `fluid typography` oder `clamp()`-basierte Skalierung für Überschriften? Falls nicht, werden dann Media-Queries für Font-Größe pro Breakpoint gesetzt? Atomare Validierung: Font-Family: 1 Familie (z.B. "Inter", "Geist Sans"), 3-4 Gewichte (400, 500, 600, 700), keine Serif-Vermischung.

ULTRATHINK-TASK A2: Type Scale Hierarchie Stabilität

H1-H6 Größen-Hierarchie: Ist sie mathematisch konsistent (z.B. modular scale 1.125:1 oder 1.25:1)? H1 überall gleich groß (nicht 48px auf einer Seite, 56px auf einer anderen)? Body-Text überall 16px oder konsistentes Baseline? Line-Height leserlich: Body-Text 1.5-1.7 (nicht 1.2), Überschriften 1.1-1.3. Letter-Spacing: -0.02em für Überschriften, 0 für Body. Prüfe JEDE Seite: Homepage, About, Products, Contact, 404, Form-Pages. Sind alle Text-Elemente in derselben Größen-Familie definiert? Textcolor konsistent (nicht mehrere Shade-Varianten ohne System). Responsive Scale: Wird H1 auf Mobile verkleinert? Sind die Relationen beibehalten? Überprüfe Live: Scrolle alle Seiten. Wirkt die Typografie harmonisch oder chaotisch?

ULTRATHINK-TASK A3: Text Overflow & Responsives Verhalten

Gibt es abgeschnittenen Text? Truncation mit Ellipsis (`text-ellipsis`, `truncate`) wo nötig (z.B. in Tables, langen Titles)? Lange deutsche Wörter die Container sprengen? Testing: "Medienunternehmen", "Verantwortlichkeiten", "Mehrwertsteuergesetz" — brechen diese Wörter die Layout aus? Responsive Überschriften: Skaliert H1 auf Mobile korrekt (sollte nicht unter 24px fallen, nicht über 48px auf Mobile)? Text in Cards: Überschrift in Card skaliert korrekt, bleibt lesbar? CTA-Text in Buttons: Passt in Button ohne Überlauf? Prüfe Formular-Labels: Alle vollständig sichtbar? Textarea-Placeholder zentriert/lesbar? Modal-Titel passt? Checklist: 0 Text-Overflow Fehler, 0 unsichtbare Wörter, 100% Responsive Readability über alle Breakpoints.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK B — SPACING & ALIGNMENT ═══

ULTRATHINK-TASK B4: Section Spacing Kongruenz

Ist der vertikale Abstand zwischen Sektionen konsistent? Pattern: `py-16` oder `py-20` oder `py-24`? Wird die gleiche Padding-Top/Bottom auf allen Seiten angewendet? Hero-Sektion zur Content-Sektion: Gleicher Abstand überall, oder variert je nach Page? Durchmesser-Messung: Nimm Ruler/DevTools. Miss den Abstand (in px oder Tailwind-Units) zwischen: Hero-Hero__Bottom und Content__Top. Dann überprüfe auf: Homepage, About-Page, Product-Page, Contact-Page, Blog-Landing. Sollen alle gleich sein? Oder folgt eine Hierarchie? Tabelle anlegen: [Page] | [Hero-Bottom] | [Content-Top] | [Gap-Summe] | [Status: ✓/✗]. Kein Abstand sollte mehr als ±8px variieren (1 Tailwind-Unit). Spacing-System definieren: `space-y-6` für Standard, `space-y-8` für große Übergänge. Dann überall unified implementieren.

ULTRATHINK-TASK B5: Component Spacing Uniformität

Cards haben gleichen Gap zwischen Elementen? If Card mit `p-6`, sollte JEDE Card `p-6` haben (nicht p-4 auf einer, p-8 auf der anderen). Grid-Layouts: Alle `gap-6`, nicht gemischt `gap-4`, `gap-6`, `gap-8`? Buttons Padding: Standard-Button `px-6 py-2`, Large-Button `px-8 py-3`, konsistent verwendet? Input-Felder: Alle `h-10`, nicht `h-10` auf einem, `h-12` auf anderem? Forms: Label-zu-Input Abstand `gap-2` oder `gap-3`? Flex-Spacing in Header: Nav-Items `space-x-6`, Logo-zu-Nav `gap-8`? Component-Audit: Öffne jeden Component-File (Button.tsx, Card.tsx, Input.tsx). Dokumentiere Padding, Margin, Gap. Prüfe: Sind alle Instanzen konsistent? Oder variieren Custom-Props unsystematisch? Measurement: Nimm Screenshot jeder Component in Isolation. Miss mit DevTools. Vergleiche. Abweichungen < 4px sind akzeptabel (Browser-Rendering). > 4px ist Fehler.

ULTRATHINK-TASK B6: Alignment & Grid-Basierte Konsistenz

Ist alles sauber auf einem Grid ausgerichtet? Tailwind Grid: `grid-cols-12` oder 8er-System? Prüfe: Alle Container nutzen die gleiche Spalten-Anzahl? Content ist Left-Aligned, Center-Aligned, oder Right-Aligned? Konsistenz: Falls Homepage Content links-aligned, sollte About-Page auch links-aligned sein (nicht zentral). Text-Alignment: Body-Text immer `text-left`. Überschriften: Immer `text-left` oder `text-center`? Nicht gemischt. Überprüfe JEDE Seite. Icon-Text Alignment: Icons und Text neben einander — sind Icons vertikal zentriert zu Text (`align-middle`)? Oder sieht es aus wie Baseline-Mismatch? CTA-Buttons: Sind sie horizontal zentriert in ihrem Container? Oder link-aligned? Konsistenz überprüfen. Hover-State Alignment: Wenn Button vergrößert sich beim Hover, rutscht alles andere? Oder nutzt Button `transition-transform scale-105` mit `transform-gpu`? Prüfe: 0 Versatz beim Hover. Visual Checklist: Content Grid, Icon Alignment, Button Centering, Text Alignment — alle grün?

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK C — FARBE & KONTRAST ═══

ULTRATHINK-TASK C7: Color Consistency Absolutismus

Wird die Primary-Farbe überall gleich verwendet? Definiere: Primary ist z.B. `blue-600`. Checke: Alle CTA-Buttons `bg-blue-600`? Oder sind sie `blue-500`, `blue-700` auf verschiedenen Seiten? Sekundäre Farben (Gray, Success, Error, Warning, Info) — konsistent verwendet? Hover-States: `hover:bg-blue-700` auf allen Buttons, oder gemischt? Link-Farben: Alle Links `text-blue-600 underline`? Visited-State: `visited:text-purple-600`? Status-Farben konsistent: Success ist überall `green-600`, Error ist überall `red-600`, Warning ist überall `amber-600`. Prüfe: Badge-Farben, Alert-Farben, Text-Color-Semantik. Tailwind-Config-Audit: Öffne `tailwind.config.ts`. Sind Custom-Colors definiert? Falls ja, nutzt das ganze App diese Custom-Palette, oder fallback auf Standard-Tailwind-Farben? Consistency-Rule: 1 Primary-Farbe, 1 Secondary, 1 Accent. Alle anderen sind Graustufen oder semantisch (success/error). Messung: Screenshot jede Seite. Color-Picker (Browser DevTools) auf alle Buttons, Links, Backgrounds. Logs in Spreadsheet: [Element] | [Seite A] | [Seite B] | [Seite C] | [Konsistent?]. Sollen alle ✓ sein.

ULTRATHINK-TASK C8: WCAG AAA Kontrast-Compliance

Text-on-Background Kontrast: Für Body-Text (mindestens 16px) muss Kontrast sein ≥ 4.5:1 (WCAG AA). Für Large-Text (≥ 18px oder ≥ 14px Bold) muss Kontrast sein ≥ 3:1. Für AAA nutze ≥ 7:1 für Body, ≥ 4.5:1 für Large. Tool: WebAIM Contrast Checker oder axe DevTools. Prüfe: Buttons (Text auf Button-Background lesbar?). Placeholder-Text (Input-Placeholder nicht zu hell?). Footer-Text auf dunklem/farbigem Hintergrund lesbar? Form-Labels, Hints, Error-Messages alle kontrast-geprüft? Focus-Ringe sichtbar und lesbar? (Mindestens 3px, kontrastreich). Hover-States: Falls Button-Farbe beim Hover sich ändert, ist der neue Kontrast auch >= AA? Checklist: Alle Text-Elemente durchgehen, Contrast überprüfen, Fehler dokumentieren, Farben-Fix vornehmen (z.B. hellerer Hintergrund, dunklerer Text).

ULTRATHINK-TASK C9: Visual Hierarchy Maximierung

Ist auf jeder Seite klar, was das Wichtigste ist? Größe (H1 ist größer als Body), Farbe (CTA in Primary-Farbe), Position (Hero oben, wichtig), Weight (Bold für Überschriften). CTAs stechen hervor? Sind sie die prominenteste Farbe auf der Seite (nicht grau Buttons wie andere)? Sekundäre Elemente treten zurück? Footer-Links, FAQ-Items, etc. sind visuell nicht so hervorstechend wie Primäre CTAs? Kein visuelles Chaos? Überprüfe: Zu viele Farben auf einer Seite (> 4 Farben)? Zu viele Font-Gewichte (> 3)? Zu viele unterschiedliche Element-Größen (> 5 diskrete Größen)? Visual-Noise-Check: Scrolle die Seite. Fühlt sich gut an oder überwältigend? Wireframe-View: Ignoriere Farben und Text. Nur Größen und Abstände. Ist die Hierarchie durch Layout-Struktur klar, ohne Farbe zu nutzen? Falls nicht, ist es visual-debt. Prüfe alle Seiten auf diese Metriken.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK D — CONSISTENCY SWEEP & FIXES ═══

ULTRATHINK-TASK D10: Cross-Page Konsistenz-Vergleich

Vergleiche: Sieht die Hero-Section auf JEDER Seite nach dem gleichen Design-System aus? Miss: Hero-Höhe (sollte gleich sein), Hero-Padding, Hero-Font-Größe, Hero-Hintergrund (Farbe/Gradient). Hero-Konsistenz: [Homepage] [About] [Products] [Blog] [Contact] — alle identisch oder bewusste Variationen? Falls unterschiedlich, ist das intentional oder Fehler? Cards überall gleich? Border-Radius (4px, 8px, 12px?), Shadow (`shadow-sm`, `shadow-md`?), Padding, Gap zwischen Card-Elementen? Buttons überall gleich? Border-Radius, Padding, Font-Weight, Hover-Effect (Farbe-Change, Scale, Shadow?). Section-Headers überall gleich? Font-Größe, Spacing above/below, Alignment? Prüfe: 5-10 Key-Components. Erstelle Vergleichs-Matrix: [Component] | [Page-1-Sizing] | [Page-2-Sizing] | [Page-3-Sizing] | [Match?]. Sollen alle ✓ sein. Abweichungen dokumentieren: Ist das acceptable Variation oder Bug?

ULTRATHINK-TASK D11: Visual Bug Fix Execution

JEDER gefundene visuelle Defekt wird SOFORT gefixt. Keine "später"-Notizen. Keine Bug-Reports für Phase 6. Fixing ist CORE der Phase 5. Defekt-Kategorien:
- Spacing-Fehler: Abstand stimmt nicht. Fix: Tailwind-Klasse anpassen (z.B. `py-6` → `py-8`).
- Color-Fehler: Farbe inkonsistent. Fix: Farbe vereinheitlichen (z.B. alle Buttons auf `bg-blue-600`).
- Font-Fehler: Typ-Größe/Weight falsch. Fix: `text-xl font-semibold` setzen.
- Alignment-Fehler: Element nicht ausgerichtet. Fix: `flex items-center`, `text-center` o.ä.
- Overflow-Fehler: Text bricht aus Container. Fix: `truncate`, Container-Width erhöhen, oder Font verkleinern.
- Contrast-Fehler: Text nicht lesbar. Fix: Text-Farbe oder Background-Farbe ändern.
Pro Fehler: 1. Identifizieren (Screenshot, Path, Element, Problem). 2. Root-Cause finden (falsche Klasse, fehlende Klasse, Inline-Style). 3. Fix schreiben (exakter Code-Change). 4. Validieren (Live-Test im Browser). 5. Dokumentieren (Defect-Log).

ULTRATHINK-TASK D12: Defect-Log Aktualisierung & Metriken

Erstelle CSV oder Markdown-Tabelle: [#] | [Defect] | [Page] | [Component] | [Severity] | [Fix] | [Status] | [Time]. Severity-Skala: Critical (keine Funktion möglich), High (visuell broken), Medium (unauffällig aber falsch), Low (Pixel-Tweaks). Am Ende Phase 5: Total Defects Logged, Total Defects Fixed, Total Defects Remaining (sollte = 0). Fix-Durchsatz dokumentieren (z.B. 47 Defects in 8 Hours = 5.875 Defects/Hour). Sei-Wert berechnen: % Defects Fixed This Phase. Ziel: 100%.

───────────────────────────────────────────────────────────────────────────────

═══ ATOMIC VALIDATION LOOP ═══

Nach jedem Fix sofort Validieren:
1. Aktuellen Component in DevTools öffnen.
2. Responsive Sizes testen: 320px (Mobile), 768px (Tablet), 1440px (Desktop).
3. Farbe mit Color-Picker überprüfen.
4. Contrast mit axe oder WebAIM testen (falls Farb-Fix).
5. Alignment überprüfen (DevTools Ruler oder Inspector Grid).
6. Visual Regression prüfen: Sieht es jetzt besser aus? Habe ich etwas anderes gebrochen?
7. In Defect-Log eintragen: Status = FIXED, Date/Time.
8. Nächsten Defect angreifen.

═══════════════════════════════════════════════════════════════════════════════

═══ SELF-OPTIMIZING LOOP ═══

Diese Phase ist selbst-verstärkend. Jeder Fix verbessert die Gesamt-Konsistenz. Nach ~30% der Fixes werden Patterns sichtbar (z.B. "alle Hero-Sections brauchen +4px Top-Padding"). Diese Patterns werden Batch-fixiert (alle Hero-Sections auf einmal updaten, statt einzeln). Nach ~60% wird die Konsistenz so stark, dass neue Fehler auffallen (z.B. eine Seite sieht plötzlich anders aus). Nach ~90% sind nur noch Edge-Cases und Pixel-Tweaks übrig. Ziel ist ein zustand, wo das gesamte Frontend nach EINEM Designers Hand aussieht, nicht wie eine Sammlung verschiedener Designers.

═══════════════════════════════════════════════════════════════════════════════

═══ PHASE 5 COMPLETION CHECKLIST ═══

Block A (Typografie):
☐ Font-Families vereinheitlicht (nur 1 Hauptfont)
☐ Font-Fallbacks korrekt definiert
☐ next/font korrekt implementiert, kein FOUT
☐ Type-Scale überall konsistent (H1-H6, Body)
☐ Line-Height überall 1.5-1.7 für Body
☐ Letter-Spacing korrekt (-0.02em Heading, 0 Body)
☐ Keine Text-Overflow-Fehler auf allen Seiten/Breakpoints
☐ Responsive Font-Sizing auf Mobile/Tablet/Desktop

Block B (Spacing & Alignment):
☐ Section-Spacing konsistent (± 8px Toleranz)
☐ Component-Spacing uniform (Cards, Buttons, Inputs)
☐ Grid-Alignment überall sauber (0 Versatz-Fehler)
☐ Icon-Text Alignment konsistent
☐ CTA-Button Zentrierung konsistent
☐ Hover-State verursacht keine Alignment-Shifts

Block C (Farbe & Kontrast):
☐ Primary-Farbe überall gleich
☐ Secondary/Status-Farben konsistent
☐ Hover-States konsistent
☐ Link-Farben einheitlich
☐ WCAG AA Kontrast überall ✓ (mindestens 4.5:1 Body)
☐ Focus-Ringe sichtbar und kontrastreich
☐ Visual Hierarchy klar auf jeder Seite

Block D (Consistency Sweep):
☐ Hero-Sections cross-page identisch
☐ Cards überall gleich
☐ Buttons überall gleich
☐ Section-Headers überall gleich
☐ Alle visuellen Defekte dokumentiert
☐ Alle Defekte gefixed (0 Remaining)
☐ Defect-Log aktualisiert mit 100% Fix-Rate
☐ Keine Visual Regressions nach Fixes

═══════════════════════════════════════════════════════════════════════════════

═══ CLOSING: PHASE 5 ABGESCHLOSSEN ═══

Phase 5 ist das visuelle Fundament für Phase 6 (Interaktivität & Micro-Interactions). Wenn Phase 5 perfekt ist, wird Phase 6 nur noch Bewegung und Feedback hinzufügen, ohne die visuelle Kohärenz zu brechen. Keine Reparaturen nötig. Nur Optimierungen.

Ausfahrt-Kriterium Phase 5: Frontend sieht pixel-perfect aus. Jede Seite, jeder Component, jedes Element folgt exakt dem Design-System. Keine Farb-Variationen, keine Spacing-Fehler, keine Typografischen Inkonsistenzen. Ready for Phase 6: Micro-Interactions & Usability Feedback Protocol.

Zeitbudget Phase 5: 8-12 Stunden. Defect-Density erwartet: 40-80 Fehler im durchschnittlichen Frontend. Mit optimiertem Audit & Batch-Fixing sollten diese in 10-12h behoben sein.

Nächste Phase: QA-PHASE-06.md — Phase 6 von 10: "Responsive Design Sweep"

Der Code ist die SSOT. Alle visuellen Defekte Phase 5 sind dokumentiert und behoben. Frontend ist pixel-perfect.


═══════════════════════════════════════════════════════════════════════════════
═══ PHASE-5-COMPLETION-CHECKLIST (20+ ITEMS) ═══
═══════════════════════════════════════════════════════════════════════════════

☐ Font-Families vereinheitlicht (Block A1)
☐ Font-Fallbacks korrekt definiert
☐ Type-Scale überall konsistent (H1-H6, Body)
☐ Section-Spacing konsistent ± 8px (Block B4)
☐ Component-Spacing uniform (Cards, Buttons, Inputs)
☐ Grid-Alignment überall sauber
☐ Primary-Farbe überall gleich (Block C7)
☐ Secondary/Status-Farben konsistent
☐ WCAG AAA Kontrast überall ✓ (≥ 7:1 Body) (Block C8)
☐ Visual Hierarchy klar auf jeder Seite
☐ Hero-Sections cross-page identisch (Block D10)
☐ Cards überall gleich
☐ Buttons überall gleich
☐ Alle visuellen Defekte dokumentiert (Block D11)
☐ Alle Defekte gefixed (0 Remaining)
☐ Defect-Log 100% Fix-Rate
☐ Keine Visual Regressions nach Fixes
☐ Responsive Verhalten auf 3 Breakpoints validiert
☐ Tailwind Config optimiert und aktuell
☐ Design-System konsistent dokumentiert


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-66 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-46 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (Phase-5 Stats: 100% Visual Fixes)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-47)

3. INTER-PIPELINE-KONTEXT:
   ─ Aktualisiere .design-upgrade-state.md mit Pixel-Perfect-Status
   ─ Dokumentiere Design-System-Konsistenz
   ─ Markiere Visual QA als abgeschlossen

4. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-67 → QA-PHASE-06.md
   → Lese QA-PHASE-06.md und beginne mit dessen CHAIN-LINK-HEADER
   → Phase-6 fokussiert auf Responsive Design aller Breakpoints
   → Erstelle detaillierte Task-Liste für Phase SEQ-47

═══ PHASE SEQ-46 → SEQ-47: HANDOFF AKTIV ═══
