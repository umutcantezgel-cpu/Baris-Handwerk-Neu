Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 7 der Expansion-Pipeline (Legal Pages und Compliance) rechtssicher und DSGVO-konform zu implementieren. Impressum, Datenschutz und AGB muessen typsicher, vollstaendig und mit der bestehenden Architektur integriert sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-17 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-16 → EXPANSION-PHASE-06.md
→ NÄCHSTE: SEQ-18 → EXPANSION-PHASE-08.md
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

Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die Website mit echten interaktiven Modulen zum Leben zu erwecken. Ein funktionierender Projektkosten-Rechner, URL-synchronisierte Filter für Services und Blog, eine Client-seitige Suchfunktion, animierte Counter, Scroll-Reveal-Animationen und eine Tab-Komponente — alles echte Client Components die FUNKTIONIEREN. Dies ist Expansion-Phase 7 von 10 der 10X Foundation Expansion Pipeline.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
PHASE 7 — INTERACTIVE MODULES: CODE-DISCOVERY & ADAPTIVE EXPANSION
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TECH STACK: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md.
─────────────────────────────────────────────────────────────────────────────────────────────────────────
• Runtime: Gemäß Projekt-Framework (Auto-Detection via package.json)
• Styling: Gemäß bestehender CSS-Strategie (Tailwind, CSS Modules, etc.)
• Forms: Formspree (EmailJS-Alternative gestrichen)
• Kalender: Calendly Widget (Embed nur, keine Integration)
• State: React Hooks (useState, useEffect, useCallback, useRef)
• Performance: Code Splitting, Client-only mit "use client"
• Observables: IntersectionObserver (native, kein Polyfill nötig)
• VERBOTEN: CMS, Sentry, Dark Mode, externe Analytics-Library

AUSGANGSLAGE
─────────────────────────────────────────────────────────────────────────────────────────────────────────
Phase 6 lieferte statische Struktur. Phase 7 macht Seiten interaktiv:
Analysiere den bestehenden Code auf vorhandene interaktive Module (Calculator, Filter, Suche, Konfiguratoren).
Für JEDES gefundene Modul: Erweitere es auf Produktionsreife. Falls KEINE interaktiven Module existieren: Dokumentiere in den Handoff-Notizen.
Erfinde KEINE neuen interaktiven Features, die nicht bereits im Code existieren oder als Platzhalter vorhanden sind.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

1. Alle neuen Dateien müssen die Client-Komponenten-Direktive am Header enthalten, um sicherzustellen dass sie im Browser als interaktive Module ausgeführt werden
2. Keine Änderung an Phase-6-Komponenten außer: import von Interaktiven in bestehende Seiten
3. Alle Filter und Suche nutzen React-Hooks für URL-Parameter-Handhabung (useSearchParams zum Lesen der URL und useRouter zum Navigieren), damit URLs teilbar sind
4. Performance-Budget: Kein Modul über 20KB gzipped
5. Accessibility: ARIA-Labels, Keyboard-Navigation, prefers-reduced-motion respektieren
6. Code = SSOT: .ai-expansion-context.md und .expansion-state.md als Quelle der Wahrheit

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
STEP 0: SYNC & DISCOVERY (CODE-FIRST)
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

PFLICHT — INTERAKTIVITÄTS-INVENTUR:
  → Scanne ALLE bestehenden Dateien: Gibt es bereits interaktive Komponenten?
  → Prüfe: Existiert bereits ein Calculator, Filter, SearchBar, Accordion, Tabs?
  → Prüfe: Existieren bereits Animationshelfer (ScrollReveal, IntersectionObserver-Hooks)?
  → INVENTAR: [BESTEHENDE INTERAKTIVE MODULE] → [PFAD] → [FUNKTIONALITÄT]
  → WENN ein Modul bereits existiert das du erstellen sollst: ERWEITERN, nicht neu erstellen

Konsultiere .pipeline-master-state.md, Phase-2 Daten, Phase-3 Komponenten-Katalog.
Stelle sicher: Daten-Dateien existieren und sind aktuell.
Wenn nicht: ERWEITERE bestehende oder erstelle minimal-Stubs damit Komponenten compilieren.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK A — PROJEKT-KOSTEN-RECHNER
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK TASK 1: Calculator-Komponente
───────────────────────────────────────────────────────────────────────────────────────────────────────────
PRÜFE den bestehenden Code:
- Existiert bereits ein Calculator oder Preisrechner?
- Falls JA: Dokumentiere die bestehende Struktur aus dem Code (Service-Typen, Scope-Optionen, Preise).
- Falls NEIN: Notiere in den Handoff-Notizen, dass kein Calculator vorhanden ist.

Implementiere BASIEREND auf dem tatsächlichen Code:
- Welche Service-Typen existieren? (Aus Phase-2 Daten, nicht aus Vorgaben)
- Welche Scope-Optionen sind sinnvoll für dieses Projekt?
- Welche Features sind relevant?
- Welche Preislogik ist im Code bereits definiert oder geplant?

ULTRATHINK-TASK TASK 2: Preisberechnung (Detaillierte Logik)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Falls ein Preisrechner im Code existiert:
- Lese die bestehende Preismatrix aus dem Code (SSOT, nicht aus diesem Dokument).
- Dokumentiere alle Basis-Preise, Multiplikatoren und Feature-Zuschläge.
- Erweitere die Komponente auf volle Produktionsreife basierend auf den echten Daten.

Falls KEIN Preisrechner existiert:
- Überspringe diesen Task.
- Dokumentiere in den Handoff-Notizen, dass kein Preisrechner vorhanden ist.

ULTRATHINK-TASK TASK 3: Module-Integration basierend auf Code
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Analysiere den Code auf bestehende Seiten:
- Wo existiert /app/anfrage oder ähnliche Request-Seiten?
- Wo existiert /app/preisrechner oder ähnliche Price-Seiten?
- Wo können interaktive Module sinnvoll integriert werden?

Integriere Module NUR an Stellen, wo sie bereits geplant sind oder als Platzhalter existieren.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK B — FILTER & SUCH-SYSTEME
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK TASK 4: Service-Filter
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/ServiceFilter.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)


═══ DATENQUELLEN-SSOT: Alle Komponenten in dieser Phase MÜSSEN ihre Daten aus /lib/data/*.ts laden, nie aus hardcodiert Werten. ═══
Markiere die Komponente mit der Client-Direktive am Anfang der Datei. Die Komponente akzeptiert Props mit einem Services-Array, das aus der zentralen Datenquelle /lib/data/services.ts geladen wird

UI:
  Horizontal Tabs/Buttons: "Alle" + kategorien aus Services
  Z.B. Alle | Webdesign | E-Commerce | Entwicklung | Support

State: activeCategory via useState

Logik beim Klick:
  Den aktiven Kategorie-State aktualisieren
  Gefilterte Services anzeigen durch Anwendung einer Filter-Funktion auf das Services-Array
  URL aktualisieren mittels Router-Navigation, um Query-Parameter zu setzen (z.B. ?kategorie=webdesign)
  Browser Back/Forward-Funktionalität gewährleisten, damit die Kategorie-Auswahl wiederhergestellt wird

Animation:
  Services-Container: CSS transition (opacity 150ms, transform 150ms)
  Beim Filter-Wechsel: opacity-0 translate-y-4 kurz, dann opacity-100 translate-y-0
  Tailwind: transition-all duration-150

Service-Karte (aus Phase 6 oder neue):
  Icon, Titel, Kurzbeschreibung, "Mehr erfahren" Link

ULTRATHINK-TASK TASK 5: Blog-Filter & Tags
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/BlogFilter.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

Markiere die Komponente mit der Client-Direktive am Anfang der Datei. Die Komponente akzeptiert Props mit einem Posts-Array, das aus der zentralen Datenquelle /lib/data/blog.ts geladen wird

UI:
  Kategorie-Tabs (horizontal): Alle | Webdesign | Marketing | Entwicklung | ...
  Tags (unter Kategorie): Badge-Buttons in Grau/Blau, klickbar
    Z.B. [SEO] [Performance] [React] [UX Design]

State: activeCategory, activeTags (Array, mehrfach auswählbar)

Logik:
  Filter mit BEIDEN Bedingungen durch AND-Logik anwenden: Die kategorie-Bedingung und die Tags-Bedingung müssen beide erfüllt sein, bevor Posts angezeigt werden. Falls keine Kategorie ausgewählt ist, werden alle Kategorien akzeptiert. Falls keine Tags ausgewählt sind, werden alle Tags akzeptiert.
  URL mit Query-Parametern aktualisieren (z.B. ?kategorie=webdesign&tags=seo,performance)
  Router-Hooks nutzen um URL-Parameter zu synchronisieren

Sortierung:
  Dropdown: "Neueste zuerst" (default), "Älteste zuerst"
  State: sortOrder
  Sortierung angewendet NACH Filter

Animation: Wie ServiceFilter (transition-all)

ULTRATHINK-TASK TASK 6: Suchfunktion
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/SearchBar.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

Markiere die Komponente mit der Client-Direktive am Anfang der Datei. Akzeptiere optionale Props zur Anpassung des Placeholder-Texts

UI:
  Input-Feld + Lupen-Icon (rechts in Input, nicht als eigener Button)
  Placeholder: "Suche Services, Blog, FAQ..."
  Maximale Breite: Responsive (100% auf Mobile, max-w-md auf Desktop)

Suche (Client-seitig, kein API):
  Durchsucht: /lib/data/services.ts, /lib/data/blog.ts, /lib/data/faq.ts
  Felder: title, description, content, tags
  Case-insensitive

Debounce:
  Nutze React-Hooks (useCallback und useRef) um einen Debounce-Timer zu implementieren
  Zeitverzögerung von 500ms (nicht 300ms, da dies zu aggressiv wäre)
  Trigger die Suche beim "change"-Event des Input-Felds

Ergebnis-Dropdown:
  Unter dem Input, maximal 10 Ergebnisse, gruppiert nach Typ:
    "Services (2)"
    • Service Name — beschreibung
    • Service Name — beschreibung
    "Blog (3)"
    • Post Titel
    "FAQ (1)"
    • Frage

  Hover: Hintergrund leicht grau
  Click: Navigiert zu Detail-Seite (/leistungen#service-id, /blog/[slug], /faq#faq-id)

Keyboard:
  Enter: Navigiert zum ersten Ergebnis
  Escape: Dropdown schließt
  Arrow Down/Up: Durch Ergebnisse navigieren (optional, aber schön)

Logik:
  Verwalte zwei State-Variablen: searchTerm für den Sucheingabe-Text und results für die gefundenen Ergebnisse
  Nutze den useEffect-Hook mit Debounce, der auf Änderungen des searchTerm reagiert
  Wenn die Sucheingabe weniger als 2 Zeichen enthält, breche die Suche ab und lösche den Debounce-Timer

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK C — ANIMATIONEN & DYNAMISCHE ELEMENTE
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK TASK 7: Animierter Counter
───────────────────────────────────────────────────────────────────────────────────────────────────────────
PFLICHT: Lies bestehende StatsSection VOLLSTÄNDIG bevor du änderst.
Datei: ERWEITERE StatsSection aus Phase 6. Erstelle AnimatedCounter.tsx NUR falls kein Counter existiert.

Markiere die Komponente mit der Client-Direktive am Anfang der Datei.

Logik:
  Nutze den nativen IntersectionObserver API um den Container zu beobachten
  Starte die Animation, wenn der Counter sichtbar wird (mit threshold-Wert von 0.3)
  Stelle sicher dass die Animation nur einmal ausgelöst wird, durch Verwendung eines useRef-Flags
  Implementiere eine requestAnimationFrame-Schleife um den Wert von 0 bis zum Zielwert hochzuzählen
  Animationsdauer: 2 Sekunden mit ease-out Easing-Funktion für sanfte Verzögerung am Ende

Props:
  target als numerischer Wert für die Zielzahl beim Counter, label als Text-String zur Beschreibung der Metrik, suffix als optionaler String für Zusatzzeichen wie "+", "%" oder "€"

Rendering:
  Gib ein Div-Element mit großer Schrift (Text-Größe 3rem, fettes Gewicht) aus, das den aktuellen displayValue enthält, gefolgt von einem Paragraph-Element in grauer Farbe, das den Label-Text anzeigt

Code-Struktur:
  Initialisiere den displayValue mit 0 mittels useState, ebenso wie die useRef-Referenzen für Container und Animation-Flag
  Nutze einen useEffect-Hook um den IntersectionObserver zu registrieren. Sobald der Container sichtbar wird und die Animation noch nicht ausgelöst wurde, setze das Animation-Flag und starte die animateCounter-Funktion
  Die animateCounter-Funktion misst die verstrichene Zeit seit Animation-Start, berechnet den Fortschritt als Anteil der 2-Sekunden-Dauer, wendet eine ease-out Funktion an, und aktualisiert den displayValue mittels setDisplayValue. Die requestAnimationFrame-Schleife wird wiederholt aufgerufen bis der Fortschritt 100% erreicht

RESPEKTIERE: prefers-reduced-motion
  Prüfe die System-Einstellung für reduzierte Bewegungen mittels window.matchMedia API. Falls der Nutzer reduzierte Animationen bevorzugt, springe direkt zum Zielwert ohne Animation

ULTRATHINK-TASK TASK 8: Scroll-Reveal
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/ScrollReveal.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

Markiere die Komponente mit der Client-Direktive am Anfang der Datei.

Props:
  children als React-Node zur Kapselung von Unter-Komponenten, stagger als optionaler Boolean (Standard: false) um Verzögerungen zu aktivieren, delay als optionale Zahl in Millisekunden für die Verzögerung pro Kind-Element

Logik:
  Wrapper um children
  IntersectionObserver mit threshold 0.1
  Initial: opacity-0 translate-y-4
  Bei Sichtbarkeit: opacity-100 translate-y-0
  Transition: transition-all duration-500 ease-out

Wenn stagger=true:
  Jedes Kind bekommt einen delay (via CSS oder inline style)
  1. Kind: delay-0
  2. Kind: delay-100
  3. Kind: delay-200
  etc.

Code-Struktur:
  Erstelle einen Container-Div mit Referenz zum Observer und CSS-Klassen für Übergänge. Der Container ändert seine Sichtbarkeit und Positionierung je nach isVisible-Status (volle Deckkraft und normaler Position wenn sichtbar, sonst teilweise transparent und nach unten verschoben)
  Iteriere über alle Kind-Elemente mittels React.Children.map, umhülle jedes Kind in ein Wrapper-Div mit optionaler Transitionsverschiebung basierend auf dem stagger-Parameter und dem Index

Verwendung:
  Nutze die ScrollReveal-Komponente als Wrapper um mehrere Elemente, mit optionalen Parametern für staggers (staggered Erscheinung) und einer Verzögerung von 100 Millisekunden zwischen den Elementen

ULTRATHINK-TASK TASK 9: Tab-Komponente
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/Tabs.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

Markiere die Komponente mit der Client-Direktive am Anfang der Datei.

Props:
  tabs als Array von Objekten, wobei jedes Objekt ein label-String und einen content-ReactNode enthält, defaultActiveTab als optionale Zahl zur Vorgabe des initial aktiven Tabs (Standard: 0)

State: activeTab via useState

UI:
  Tab-List (horizontal):
    Buttons mit label
    Active Tab: Border-Bottom (3px) in Primary-Color, Text bold
    Inactive: Gray-500, kein Border

  Tab-Panel:
    Nur aktiver Content wird angezeigt
    Smooth Fade-In (opacity transition 200ms)

Keyboard Navigation:
  Arrow Left: Vorheriger Tab
  Arrow Right: Nächster Tab
  Home: Erster Tab
  End: Letzter Tab

ARIA:
  Verwende semantische ARIA-Rollen um die Tab-Struktur zu kennzeichnen: tablist für den Container, tab-Rolle für jeden Tab-Button mit aria-selected für den aktiven Zustand, und aria-controls um den Button mit seinem Panel zu verknüpfen. Tab-Panels erhalten die tabpanel-Rolle mit eindeutiger ID und aria-labelledby um zum entsprechenden Button verlinkt zu werden

CSS Klassen:
  Für aktive Tabs: 4-Pixel untere Linie in Blau mit fetten Schrift, für inaktive Tabs: grauer Text mit dunkelgrauem Hover-Effekt

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK D — INTEGRATION & VALIDATION
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK TASK 10: FAQ-Seite mit Accordion
───────────────────────────────────────────────────────────────────────────────────────────────────────────
PFLICHT: Lies bestehende FAQ-Seite VOLLSTÄNDIG bevor du sie änderst.
Datei: ERWEITERE /app/faq/page.tsx — erstelle NUR falls nicht vorhanden.

Struktur:
  <header> mit Titel und Beschreibung
  <SearchBar /> zum Durchsuchen
  Accordion-Liste mit FAQ-Items
  Gruppiert nach Kategorie (von /lib/data/faq.ts)

Accordion-Komponente (aus Phase 3 oder neu):
  "use client"
  Props: items Array mit question, answer, category, id
  State: expandedId (welcher ist offen)
  Click: Toggle expandedId
  Animation: max-height 300ms ease-in-out

Search-Integration:
  SearchBar filtert FAQ-Items
  Filter-Logik: question.includes(searchTerm) || answer.includes(searchTerm)
  Gefilterte Items anzeigen

ULTRATHINK-TASK TASK 11: Interaktive Module auf Seiten verteilen
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Ort der Module:

  /app/leistungen (Services) → ServiceFilter einbinden
    `<ServiceFilter services={allServices} />`
    
  /app/blog → BlogFilter einbinden
    `<BlogFilter posts={allBlogPosts} />`
    
  /app/anfrage → ProjectCalculator einbinden (über oder neben Formular)
    `<ProjectCalculator />`
    
  /components/layout/Header.tsx oder neues /app/header-search.tsx
    → SearchBar einbinden (global abrufbar)
    
  /app/home (oder bestehende Landing) → StatsSection mit AnimatedCounter
    → ScrollReveal um Hero, Features, Testimonials wrappen
    
  /app/services/[slug] oder FAQ → Tabs für verschiedene Abschnitte

ULTRATHINK-TASK TASK 12: Performance-Check
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Anforderungen:
  ✓ Alle Client-Komponenten haben "use client" am Top
  ✓ Lazy-Loading: ProjectCalculator, ServiceFilter, BlogFilter = dynamische Imports mit React.lazy
  ✓ Bundle-Size pro Modul unter 20KB gzipped
  ✓ IntersectionObserver native (kein Polyfill)
  ✓ prefers-reduced-motion respektiert (Animationen deaktiviert wenn User eingestellt)
  ✓ Keine Render-Loops oder N+1 Queries (alles lokale In-Memory Suche)
  ✓ TypeScript strict mode: Keine any-Types

Lazy-Loading Beispiel:
  const ProjectCalculator = dynamic(
    () => import('@/components/interactive/ProjectCalculator'),
    { loading: () => <div>Lädt...</div> }
  );

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

□ ProjectCalculator.tsx kompiliert ohne Fehler
□ Preismatrix ist hardcoded und korrekt (alle Services, Scopes, Features)
□ Preis-Range wird angezeigt (Min/Max Format stimmt)
□ ServiceFilter filtert und URL-Sync funktioniert
□ BlogFilter mit kombinierten Kategorien+Tags-Filter
□ SearchBar durchsucht alle 3 Datenquellen, Debounce funktioniert
□ AnimatedCounter zählt nur 1× hoch wenn sichtbar
□ ScrollReveal animiert bei Scroll-In, respektiert prefers-reduced-motion
□ Tabs-Komponente: Keyboard (Arrow, Home, End) funktionieren
□ FAQ-Seite mit Accordion und Search-Filter
□ Calculator auf /anfrage erreichbar
□ ServiceFilter auf /leistungen erreichbar
□ BlogFilter auf /blog erreichbar
□ SearchBar im Header/global erreichbar
□ Alle Module unter 20KB gzipped (nextra analysis)
□ Keine "any" Types in TypeScript
□ ARIA-Labels auf Tabs, Accordion, Buttons
□ Mobile-Responsiv: Filter-Buttons stacken, SearchBar resize
□ Dark Mode: NICHT implementiert (explizit ausgeschlossen)
□ Sentry/Analytics: NICHT eingebunden
□ Formspree-Integration auf /anfrage funktionstüchtig
□ Calendly Widget integriert (embed link, nicht API)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Nach Completion:
  1. Update .ai-expansion-context.md: "Phase 7 ✓ COMPLETE — Alle interaktiven Module live"
  2. Update .expansion-state.md: Aktuelle Komponenten-Liste mit Import-Paths
  3. NextPhase Pointer: "Phase 8 beginnt SEO & Metadata Infrastruktur"
  4. Code ist SSOT: Komponenten sind selbsterklärend durch Props-Types und interne Logik

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
PHASE 7 COMPLETE ✓
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Live-Module mit 0 Backend-Abhängigkeit. Interaktivität ist CPU-seitig, Performance-optimal, SEO-neutral.
Nutzer kann Preise rechnen, Services filtern, Blog durchsuchen, Zahlen hochzählen sehen, Tabs wechseln.
Alle Features gebunden an Phase-2 Daten (Services, Blog, FAQ) → bei Daten-Update alle Module refreshed.

Nächste Phase: Phase 8 — SEO, Meta-Tags, Open Graph, Structured Data (JSON-LD) für alle Seiten.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-17 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY 

SEO ERROR-HANDLING SPECIFICATION:

Für alle SEO-Implementierungen in Phase-07:

1. META-TAG-GENERATION:
   • Falls page.description undefined: Nutze fallback-description (Aus Phase-2 Services)
   • Falls page.keywords leer: Nutze auto-generated keywords aus page.title (First 3 words)
   • Längen-Validierung: description max. 160 chars, title max. 60 chars
   • Wenn überlang: truncate mit "..." suffix

2. CANONICAL-URL-LOGIK:
   • Canonical MUSS immer gesetzt sein (auch wenn self-reference)
   • Protocol: IMMER https://
   • Domain: Aus process.env.NEXT_PUBLIC_BASE_URL (fallback: 'example.com' bei undefined)
   • Path: Aus dynamic routing (slug parameter)
   • Query-params: NICHT in Canonical (nur path)

3. OG-TAGS (Open Graph):
   • og:image: Falls custom image undefined → nutze logo.png als fallback
   • og:image size: MUSS 1200x630 sein (überprüfen zur build-time)
   • Falls Bild ungültig/broken: Fallback zu Logo, NICHT leeres og:image
   • og:title: Nutze page.title (gleich wie HTML-title)
   • og:description: Nutze page.description (gleich wie meta-description)

4. STRUCTURED DATA (JSON-LD):
   • Erzeuge zur BUILD-TIME (nicht runtime) wenn möglich
   • Falls schema.org/Organization undefined: Fallback zu generic Organization schema
   • Falls schema.org/Article missing author: Nutze siteAuthor aus config
   • Validierung: Überprüfe gegen schema.org DTD (optional, via external API)

5. ROBOTS & CRAWL-HINTS:
   • robots.txt: Dynamisch generiert in /public/robots.txt
   • Disallow: /admin, /api/internal, /.ai-expansion-context.md (KRITISCH)
   • Sitemap.xml: Generiert aus alle routes (dynamisch in Phase-02-getData)
   • sitemap.xml: MUSS bei Build aktualisiert werden

6. EDGE-CASE: DYNAMIC ROUTES
   • Für /leistungen/[slug], /blog/[slug]: Überprüfe ob slug existiert
   • Falls nicht: notFound() aufrufen (nicht 404, Next.js standard)
   • Canonical-URL: slug MUSS url-encoded sein (nicht raw)




SEO VALIDATION-GATES (PHASE-07):
──────────────────────────────────────────────────────────────────────────────

GATE-1 (Meta Tags):
  □ next/head oder Head-Komponente: Alle pages haben <title>, <meta name="description">
  □ npm run build: Keine Warnungen zu fehlenden meta tags
  □ Page title: 30-60 Zeichen
  □ Meta description: 120-160 Zeichen
  □ Alle dynamischen Seiten (/leistungen/[slug]) haben dynamische title/description

GATE-2 (Canonical URLs):
  □ Jede page hat genau 1 <link rel="canonical">
  □ Canonical ist absolut URL (nicht relativ)
  □ Canonical-Duplikate verhindet: grep -r "rel="canonical"" src/ | sort | uniq -c | awk '$1>1'
  □ Self-references Canonical sind ok (z.B. /blog/post → canonical /blog/post)

GATE-3 (OG Tags):
  □ og:title, og:description, og:image auf allen social-shareable pages
  □ og:image ist absolute URL
  □ og:image size: 1200x630px (überprüfbar mit imagemagick: identify og-image.jpg)
  □ og:type gesetzt (website, article, etc.)

GATE-4 (Structured Data):
  □ JSON-LD <script> tags vorhanden auf relevanten pages
  □ Schema.org validation: https://validator.schema.org (externe Prüfung)
  □ Keine syntax-errors in JSON-LD (parse JSON zur build-time)
  □ Fallback-Schemas: Mindestens Organization schema auf homepage

GATE-5 (Crawl-Hints):
  □ robots.txt existiert und ist korrekt
  □ Disallow-Liste: /admin, /api/internal, /.ai-expansion-context.md
  □ sitemap.xml existiert und ist valide XML
  □ sitemap.xml enthält alle wichtigen routes (mindestens 10 URLs)

GATE-6 (Next.js Specific):
  □ next.config.js: keine console.warn bei build
  □ next/head imports: Alle korrekt
  □ Dynamic routes: notFound() benutzt bei invalid slug (kein 404-fallback)
  □ Build-time: next build erfolgreich (zero errors, zero warnings)

FAILURE = STOPPE, debugge, retry


EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-07 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-08)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-18 → EXPANSION-PHASE-08.md
   → Lese EXPANSION-PHASE-08.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-08

═══ PHASE SEQ-07 → SEQ-08: HANDOFF AKTIV ═══
