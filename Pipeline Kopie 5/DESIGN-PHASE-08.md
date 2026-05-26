Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 8 der Design-Pipeline (Visual Hierarchy) als praezise visuelle Hierarchie-Komposition umzusetzen. Kontrast, Groesse, Farbe und Positionierung muessen den Blick des Users chirurgisch fuehren. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-49 von 72 ═══ Pipeline: DESIGN ═══
← VORHERIGE: SEQ-48 → DESIGN-PHASE-07.md
→ NÄCHSTE: SEQ-50 → DESIGN-PHASE-09.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte visuelle Gestaltung dieser Next.js/React/TypeScript-Website so zu perfektionieren, dass sie nicht nur barrierefrei ist, sondern dass Barrierefreiheit selbst zum DESIGN-FEATURE wird. Accessibility ist kein Kompromiss — sie ist eine Design-Chance. WCAG AAA Kontraste, Farbenblindheits-sichere Paletten, perfekte Fokus-Indikatoren und kognitive Entlastung werden in ein atemberaubendes Gesamtbild integriert. Dies ist Design-Phase 8 von 10 der Supreme Design & UX Pipeline.

═══ PROTOKOLL ═══
5 Design-Säulen: Radikale visuelle Inklusion, Kontrast-Perfektion, Farbenblindheits-sichere Paletten, elegante Fokus-Indikatoren, kognitive Entlastung. Tech: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. Nur Formspree + Calendly. KEIN Dark Mode, KEIN Sentry. Code = Single Source of Truth.

═══ STEP 0: PRE-FLIGHT ACCESSIBILITY VISUAL DISCOVERY ═══
Lese .ai-design-context.md. Führe visuelle Zugänglichkeits-Bestandsaufnahme durch:
1. Kontrast-Audit: Jede Text-auf-Hintergrund-Kombination, gemessen mit WCAG-Formel (Luma-basiert)
2. Farb-nur-Informationen: Gibt es Stellen, wo Farbe der EINZIGE Indikator ist? (Fehler, Status, Links)
3. Fokus-Indikatoren: Jedes interaktive Element — ist der Fokus sichtbar? Wie sieht er aus?
4. Touch-Ziele: Jeder Button, Link, Input — gemessene Größe
5. Animations-Sicherheit: prefers-reduced-motion aus Phase 5 — verifiziert?
6. Text-Lesbarkeit: Schriftgrößen, Zeilenhöhen, Buchstabenabstand gegen Phase-2-Standards

═══ BLOCK A — KONTRAST-PERFEKTION ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: WCAG AAA KONTRAST-UPGRADE
Zielstandard: WCAG Level AAA für maximale Zugänglichkeit

Aktion 1.1: Kontrast-Referenzen etablieren
- Kleine Text (<18px Normal oder <14px Bold): Minimum 7:1 Kontrastverhältnis
- Große Text (≥18px Normal oder ≥14px Bold): Minimum 4.5:1 Kontrastverhältnis
- UI-Elemente (Borders, Icons): Minimum 3:1 gegen benachbarte Farben
- Graphiken/Diagramme: 3:1 Kontrastverhältnis für Differenzierung

Aktion 1.2: Token-basierte Kontrast-Messung
Überprüfe JEDE Kombination aus Phase-1-Farbtokens gegen die Hintergrundfamilie:
- Primary-Farbe auf weiß, auf surface, auf grauem Hintergrund
- Text-Farben auf allen Hintergrund-Varianten
- Secondary-Farben, Accent-Farben, Status-Farben
- Neutral grays: auf primary, auf secondary, auf white

Aktion 1.3: Link-Kontrast-Sicherung
- Link-Farbe muss 7:1 gegen body text (falls ≤18px) sein
- Links dürfen sich NICHT ausschließlich durch Farbe unterscheiden
- Implement: underline bei Default-State oder hover-Indikator
- Besuchte Links: ebenfalls 7:1 Kontrast, aber dunklere oder andere Hue

Aktion 1.4: Fehlgeschlagene Farben anheben
- Wenn eine Farbe AAA verfehlt: Dunkel-Variante um einen Shade vertiefen oder Helles aufhellen
- Beispiel: Wenn Primary-600 auf white nur 6:2:1 ist, nutze Primary-700
- Marken-Identität bewahren: Änderung sollte subtil sein, keine drastische Hue-Verschiebung
- Dokumentiere jede Anpassung in .ai-design-context.md mit Vorher/Nachher-Wert

Aktion 1.5: Kontrast-Validierungstool
- Nutze WebAIM Contrast Checker oder apca-w3 für Perceptual Contrast
- Teste mit realen Farb-Token-Werten (hex oder rgb)
- Führe Protokoll: "Token XYZ auf Hintergrund ABC = 7.8:1 ✓ AAA"

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: UI-ELEMENT-KONTRAST UND GRENZEN
Nicht-Text-Elemente zugänglich machen

Aktion 2.1: Button-Rand-Kontrast
- Button mit border: minimum 3:1 gegen Background
- Transparent buttons: Hover-State zeigt 3:1-Rand
- Fokus-Ring ersetzt niemals den Rand, sondern ERGÄNZT ihn

Aktion 2.2: Eingabfeld-Zustand-Kontrast
- Default-State: border 1px, 3:1 gegen background
- Focus-State: border 2px oder ring, 3:1 oder größer
- Error-State: rote border 2px + error-icon + error-text, Red 3:1 gegen white
- Disabled-State: sichtbar gemacht mit Schraffur oder grauem Icon, nicht einfach unsichtbar

Aktion 2.3: Icon-Kontrast (bei Icon-Buttons)
- Icon allein in einem Button: Icon-Farbe + Button-bg = 3:1 minimum
- Oder: Icon + Button-border sorgen zusammen für Kontrast
- Icon-with-Text: Icon bestätigt Text-Bedeutung, braucht nicht eigenständig 3:1

Aktion 2.4: Placeholder-Text-Reparatur
- Standard-Placeholder ist oft grau-400: zu dunkel = Kontrast-Fehler
- Lösung: Placeholder mind. grau-500, besser grau-600
- Oder: Label statt Placeholder verwenden (best practice ohnehin)

Aktion 2.5: Status-Badges und Kennzeichnungen
- Farbiger Badge (Status: Active, Draft, Error): 3:1 Kontrast zur Hintergrundfarbe
- Zusätzliches visuelles Signal: Text-Label, Icon oder Muster (s. Block B)

═══ BLOCK B — FARBENBLINDHEITS-SICHERES DESIGN ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: COLOR-BLINDNESS SIMULATION UND VALIDIERUNG
Teste die Palette durch alle Sehfehler-Typen

Aktion 3.1: Deuteranopia (Rot-Grün-Blindheit, ~6% männlich)
- Rote und grüne Farben werden beide als Grau/Braun wahrgenommen
- Betroffen: Error (rot) vs. Success (grün), Rot-Grün-Charts
- Teste mit Deuteranopia-Filter (Color Oracle, Sim Daltonism App)
- Frage: Können Nutzer Rot und Grün immer noch unterscheiden? Nein → Problem

Aktion 3.2: Protanopia (Rot-Grün-Variante, ~1% männlich)
- Ähnlich wie Deuteranopia, aber leicht andere Wahrnehmung
- Validiere das gleiche wie 3.1

Aktion 3.3: Tritanopia (Blau-Gelb-Blindheit, sehr selten ~0.001%)
- Blau und Gelb werden verwechselt
- Relevanz: Wenn Palette viel Blau-Gelb nutzt, teste
- Meist nicht kritisch, aber für maximale Inklusion prüfen

Aktion 3.4: Achromatopsia (Komplette Farbenblindheit, extrem selten)
- Nur Graustufen sichtbar
- Test: Konvertiere gesamte UI zu Grayscale, prüfe Lesbarkeit und Element-Unterscheidung
- Kontrastanforderungen (Block A) sichern dies weitgehend ab

Aktion 3.5: Dokumentation Farb-Wahrnehmung
- Für jede kritische Farb-Kombination: "Deuteranopia: unterscheidbar? Ja/Nein"
- Markiere Problem-Paare im .ai-design-context.md

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: FARB-UNABHÄNGIGE INFORMATIONS-KODIERUNG
Nie Farbe als EINZIGEN Indikator nutzen

Aktion 4.1: Error-Handling
- Altes Muster: Text wird rot
- Neues Muster: Rote Farbe + Icon (!) + Fehlertext + Position neben Input
- Beispiel: <span class="text-red-600"><ExclamationIcon /> Passwort ist zu kurz</span>

Aktion 4.2: Success-Bestätigung
- Altes Muster: Grüner Hintergrund
- Neues Muster: Grüne Farbe + CheckmarkIcon + Bestätigungstext
- Konsistenz: gleiche Icons immer für gleiche Status

Aktion 4.3: Links in Text-Kontext
- Altes Muster: nur Farbe
- Neues Muster: Farbe (7:1 Kontrast zu Body-Text) + Underline (default oder hover)
- Oder: Text + Icon-Indicator (→) + Hover-Underline
- Besuchte Links: andere Farbe + visuelles Signal (nicht nur dunklere Farbe)

Aktion 4.4: Status-Badges
- Altes Muster: farbiger Kreis (grün/rot/grau)
- Neues Muster: Farbiger Kreis + Text-Label + optional Icon
- Beispiel: <Badge color="success" icon={<CheckIcon />}>Active</Badge>

Aktion 4.5: Form-Erforderliche Felder
- Altes Muster: Sternchen ist rot
- Neues Muster: Sternchen (beliebig farbig) + Text "Pflichtfeld" oder "(erforderlich)"
- Oder: aria-required="true" + sichtbares Label

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: SICHERE FARB-PAARE DEFINIEREN
Intelligente Palette für alle Sehtypen

Aktion 5.1: Universell unterscheidbare Paare
- Blau + Orange: extrem unterscheidbar, auch bei Deuteranopia
- Blau + Gelb: gut unterscheidbar
- Dunkelblau + Hellgrau: gut auf white
- Violett + Grün (wenn Grün mehr Gelb-Anteil): unterscheidbar

Aktion 5.2: Problematische Paare vermeiden
- Rot + Grün: nur bei Deuteranopia-Nutzer unsichtbar Unterschied
- Hell-Rot + Hell-Grün: bei Protanopia ähnlich grau
- Blau + Violett: bei Tritanopia problematisch

Aktion 5.3: Markenfarben-Rettung
- Falls Marke Rot + Grün nutzt: Additives visuelles System einführen
- Beispiel: Error = Rot + Icon (!), Success = Grün + Icon (✓)
- Oder: Muster/Textur hinzufügen (Error hat Schraffur, Success hat Punkte)
- Oder: Shape-Differenzierung (Error = Hexagon, Success = Kreis)

Aktion 5.4: Palette-Safe-List dokumentieren
- Erstelle Tabelle im .ai-design-context.md:
  "Farb-Paar | Deuteranopia | Protanopia | Tritanopia | Empfehlung"

═══ BLOCK C — FOKUS-INDIKATOREN & INTERAKTIVE ZUGÄNGLICHKEIT ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: FOKUS-RING-DESIGN-SYSTEM
Fokus ist nicht "nur Funktionalität", sondern Design-Feature

Aktion 6.1: Ring-Spezifikation
- Größe: 2px solid Linie
- Farbe: primary token (7:1 Kontrast zu background)
- Offset: 2px Abstand vom Element (outline-offset: 2px)
- Form: rechteckig mit leicht gerundeten Ecken (border-radius: 2px)

Aktion 6.2: CSS-Implementation (Tailwind)
- Standard-Buttons: ring-2 ring-primary ring-offset-2 ring-offset-white
- Auf farbigem Hintergrund: ring-2 ring-white ring-offset-2 ring-offset-primary
- Alternative (box-shadow): box-shadow: 0 0 0 2px white, 0 0 0 4px primary

Aktion 6.3: Kontrastanforderung für Ring
- Ring-Farbe muss 3:1 gegen den Untergrund haben
- Bei lightbg: primary-ring über white = ok
- Bei dark-bg: white-ring über dark = ok
- Test mit beiden Szenarien

Aktion 6.4: Focus-within für Compound Components
- Card mit mehreren Links: zeige ring auf Card-border bei child-focus
- Beispiel: border wird ring-2, wenn ein Link darin fokussiert ist
- CSS: .card:focus-within { @apply ring-2 ring-primary; }

Aktion 6.5: Anti-Pattern: outline:none
- NIEMALS outline: none ohne sichtbaren Ersatz
- Wenn default-ring nicht passt: custom-ring definieren, niemals entfernen

Aktion 6.6: Focus-Sichtbarkeit auf allen Hintergründen
- Teste Ring auf: white, surface, primary, secondary, dark, jeder Komponente
- Ring muss überall mindestens 3:1 haben oder einen Offset haben
- Beispiel: auf primary bg → weißer Ring mit dunkelgrauem offset

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: TOUCH-TARGET-OPTIMIERUNG UND SPACING
Größe ist Zugänglichkeit

Aktion 7.1: Minimum-Größe: 44×44px
- Alle interaktiven Elemente: Button, Link, Checkbox, Radio, Select
- WCAG 2.5.5 Level AAA empfiehlt 44×44px Mindestgröße
- Gilt auch für Touch-Fläche, nicht nur sichtbarer Größe

Aktion 7.2: Button-Richtlinien
- Primary-Button: min 44px Höhe (py-2.5 = 10px * 2 + text), min 64px Breite
- Secondary-Button: 40px Höhe, aber mit padding
- Icon-Button: 44×44px minimum (Tailwind: w-11 h-11)
- Text-Link: padding: 4px 0 + Hover-underline = wirksame Größe

Aktion 7.3: Mobile Navigation
- Nav-Items: minimum 44px tall, besser 48px (py-3)
- Tabs: minimum 44px high, mit ausreichend Padding
- Spacing zwischen Tab-Items: mindestens 8px

Aktion 7.4: Form-Elemente
- Checkbox/Radio: 20×20px sichtbar, aber 44×44px Touch-Zone (unsichtbares Padding)
- Input-Feld: 40px Höhe minimum
- Select-Dropdown: 40px minimum, Optionen auch 40px tall

Aktion 7.5: Close-Button und kleine Controls
- Close (×)-Button: 44×44px, NICHT 16×16px
- Mini-Icon-Button: wenn kleiner als 44px, umgeben mit padding für Touch-Zone

Aktion 7.6: Spacing zwischen Targets
- Mindestens 8px Lücke zwischen interaktiven Elementen
- Verhindert Verwechslung bei impräzisem Tippen
- Besonders auf Mobile: großzügiger Spacing

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: KOGNITIVE BARRIEREFREIHEIT IM DESIGN
Mentale Entlastung durch Struktur

Aktion 8.1: Text-Lesbarkeit
- Zeilenlänge (measure): max 75 Zeichen pro Zeile (Optimal: 50-80)
- Tailwind: max-w-3xl (48rem ≈ 80 Zeichen bei 1rem = 16px)
- Auf Desktop: max-w-2xl in Content-Cards
- Line-Height: 1.6 oder 1.7 für body-text (Tailwind: leading-relaxed)

Aktion 8.2: Absatz-Spacing
- Zwischen Absätzen: space-y-4 minimum (16px)
- Zwischen Sections: space-y-6 oder space-y-8
- Visueller Rhythmus entspricht kognitiven Pausen

Aktion 8.3: Heading-Hierarchie
- h1, h2, h3 optisch klar unterschiedlich (Größe, Gewicht, Farbe)
- h1: 32px bold (Tailwind: text-4xl font-bold)
- h2: 24px semibold (Tailwind: text-2xl font-semibold)
- h3: 20px semibold (Tailwind: text-xl font-semibold)
- Skip-Links: Nutzer können zu h2 springen, nicht nur lineares Lesen

Aktion 8.4: Konsistente Komponenten-Designs
- Button-Typ A sieht immer gleich aus (auch auf Seite 5)
- Card-Design konsistent
- Form-Label-Placement konsistent (oben, nicht inline)
- Farbgebung für Status gleich überall

Aktion 8.5: Vorhersagbare Interaktionen
- Click auf einen Link navigiert (nicht nur hover-Effekt)
- Focus/Hover-Zustände sind identisch (oder hover ist Superset von focus)
- Error-Message erscheint direkt neben dem fehlerhaften Feld
- Submit-Button deaktiviert sich nach Click (verhindert Double-Submit)

Aktion 8.6: Fehlerbehandlung in Sprache
- Fehlertext: einfach, nicht technisch
- Beispiel: "Passwort braucht mindestens 8 Zeichen" statt "Regex: (?=.*[A-Za-z0-9@$!%*#?&]) failed"
- Position: direkt über oder unter dem Feld
- Zeitrahmen: nicht zeitlich limitiert (keine 5-Sekunden-Warnung)

Aktion 8.7: Progress-Indikatoren
- Multi-Step-Prozess: zeige "Schritt 2 von 5"
- Progress-Bar: wachsende visuelle Anzeige
- Breadcrumbs: zeige Navigations-Pfad
- Estimated-Time: wenn Prozess länger dauert

═══ SELF-OPTIMIZING DESIGN LOOP — PHASE 8 ABSCHLUSS ═══

ULTRATHINK-TASK 9: KONTEXT AKTUALISIEREN UND HANDOFF ZU PHASE 9

Aktion 9.1: .ai-design-context.md Erneuerung
Aktualisiere folgende Sections:

[WCAG AAA Contrast Matrix]
- Token | Background | Ratio | Status | Anpassung
- Primary | White | 7.2:1 | ✓ | Keine
- Primary-600 | Surface-50 | 5.8:1 | X | → Primary-700 nutzen

[Color-Blindness Validation]
- Farb-Paar | Deuteranopia | Protanopia | Tritanopia | Ampel
- Primary + Secondary | ✓ | ✓ | ✓ | Green

[Focus Ring Specification]
- 2px solid primary
- 2px offset
- Visible on white, surface, and primary bg
- Implementation: Tailwind ring-2 ring-primary ring-offset-2

[Touch Target Audit]
- Button: 44×48px ✓
- Icon-Button: 44×44px ✓
- Input: 40px height ✓
- Link: 44px touch-zone via padding ✓

[Cognitive Accessibility Rules]
- Line-length: max 75 characters
- Line-height: 1.6 minimum
- Heading hierarchy: 4 levels
- Error messaging: plain language, positioned near source
- No time limits on error messages

Aktion 9.2: Validation Checklist
Vor Phase 9 durchlaufen:
☐ WCAG AAA 7:1 für alle Text-Kombinationen verifiziert
☐ 4.5:1 für große Text (≥18px) bestätigt
☐ UI-Element-Kontrast 3:1 auf allen Elementen
☐ Farbblindheits-Simulator durchlaufen (alle 4 Typen)
☐ Keine Farb-nur-Indikatoren: alle haben Icon/Text/Pattern
☐ Link-Underline oder Hover-Indikator auf allen Links
☐ Focus-Ring sichtbar auf jedem interaktiven Element
☐ Focus-Ring auf allen Background-Farben getestet
☐ Touch-Targets ≥44×44px für alle Buttons/Links
☐ Spacing zwischen Targets ≥8px
☐ prefers-reduced-motion aus Phase 5 nochmal verifiziert
☐ Text-Zeilenlänge ≤75 Zeichen
☐ Line-Height ≥1.6
☐ Absatz-Spacing konsistent (space-y-4+)
☐ Heading-Hierarchie optisch unterscheidbar
☐ Error-Messages sprachlich einfach und positioniert
☐ Disabled-States visuell erkennbar (nicht nur grau)
☐ Konsistenz: Komponenten-Design gleich überall

Aktion 9.3: Handoff-Dokument
Erstelle handoff-notes.md:
- Phase 8 abgeschlossen: Alle Kontrast-, Farb-, und Fokus-Anforderungen erfüllt
- Ready für Phase 9: Thematic Harmony & Visual Consistency
- Phase-9-Fokus: Übergreifende visuelle Harmonie, Design-System-Vollständigkeit
- Offene Fragen (falls vorhanden): [List hier]

═══ FINALE VALIDIERUNG DESIGN-PHASE 8 ═══

QUALITÄTSPRÜFUNG — 22-Punkte Accessibility & Inclusion Audit:

1. ☐ Alle Text-Elemente ≤18px haben 7:1 WCAG AAA Kontrast
2. ☐ Alle großen Text ≥18px haben 4.5:1 AAA Kontrast
3. ☐ Primary-Farbe auf White: 7:1+
4. ☐ Primary-Farbe auf Surface: 7:1+
5. ☐ Link-Farbe zu Body-Text: 7:1+
6. ☐ Alle UI-Element-Borders: 3:1 gegen Hintergrund
7. ☐ Icon-Kontrast (Icon-Buttons): 3:1
8. ☐ Placeholder-Text: minimum grau-600 oder Label statt Placeholder
9. ☐ Status-Badges: Farbe + Text-Label + ggf. Icon
10. ☐ Deuteranopia-Simulation: Alle Elemente unterscheidbar
11. ☐ Protanopia-Simulation: Alle Elemente unterscheidbar
12. ☐ Tritanopia-Simulation: kritische Paare ok
13. ☐ Achromatopsia-Grayscale: lesbar und navigierbar
14. ☐ Error-Status: Farbe + Icon + Text
15. ☐ Success-Status: Farbe + Icon + Text
16. ☐ Links: Underline oder Hover-Indikator
17. ☐ Required-Fields: Asterisk + "(Pflichtfeld)"-Text
18. ☐ Focus-Ring sichtbar auf white bg
19. ☐ Focus-Ring sichtbar auf primary bg
20. ☐ Focus-Ring sichtbar auf surface bg
21. ☐ Touch-Target Minimum: 44×44px für alle Buttons
22. ☐ prefers-reduced-motion: Keine Auto-Animationen bei Setting

Status: Bereit für Phase 9
Nächster Schritt: Thematic Harmony & Visual Consistency Audit


═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: PREMIUM VISUAL EFFECTS & GLASSMORPHISM
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-43: FROSTED-GLASS SYSTEM (BACKDROP-FILTER ARCHITEKTUR)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Glassmorphism ist DER Premium-Effekt 2024-2026. Richtig eingesetzt
  erzeugt er Tiefe, Eleganz und einen sofortigen "teuer"-Eindruck.

  PFLICHT-IMPLEMENTIERUNG:
    Glass-Level-System (wie Shadow-Levels, aber fuer Blur):
      Glass-0: Kein Blur (Standard-Element)
      Glass-1: backdrop-filter: blur(8px) — Navbar, Tooltips
      Glass-2: backdrop-filter: blur(16px) — Modals, Drawers
      Glass-3: backdrop-filter: blur(24px) — Overlays, Hero-Widgets

  CSS-VARIABLEN:
    Definiere im Root-Selektor sechs Custom Properties: --glass-bg als
    semi-transparentes Weiss (rgba 255,255,255 mit 0.7 Opazitaet),
    --glass-border als stark transparentes Weiss (0.3 Opazitaet),
    --glass-shadow als weicher grossflaechiger Schatten (8px Offset,
    32px Blur, schwarze Farbe mit 0.06 Opazitaet), sowie drei Blur-Stufen
    --glass-blur-sm (8px), --glass-blur-md (16px) und --glass-blur-lg (24px).
    Die Klasse glass-card kombiniert diese Variablen: Hintergrund auf
    --glass-bg, backdrop-filter auf --glass-blur-md mit 180% Saettigung,
    ein 1px solider Border in --glass-border, der --glass-shadow Schatten,
    und ein border-radius von 16 Pixeln fuer weiche Ecken.

  FALLBACK (Browser ohne backdrop-filter):
    background: rgba(255, 255, 255, 0.95) — fast opak als Fallback.
    @supports (backdrop-filter: blur(1px)) { /* Glass-Styles */ }

  VALIDIERUNG:
    [ ] Glass-Effekt sichtbar auf allen Glass-Elementen
    [ ] Fallback fuer Safari < 15 / Firefox < 103 funktioniert
    [ ] Text auf Glass-Elementen hat ausreichend Kontrast (WCAG AA)
    [ ] Performance: Kein Jank durch backdrop-filter auf Mobile

CHEATCODE CC-44: GRADIENT-MESH & AURORA-EFFEKTE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Animierte Gradient-Blobs im Hintergrund erzeugen den
  "Antigravity-Look" — schwebende Farbwolken die sich langsam bewegen.

  PFLICHT-IMPLEMENTIERUNG:
    2-3 grosse Gradient-Blobs im Hero-Hintergrund.
    Langsame CSS-Animation (8-15s Loop, infinite).
    Blobs ueberlagern sich mit mix-blend-mode fuer Farbmischung.
    KEINE Canvas/JS noetig — reines CSS.

  CSS-PATTERN:
    Die Basis-Klasse aurora-blob erhaelt absolute Positionierung, einen
    border-radius von 50% (Kreisform), einen filter blur von 80 Pixeln
    fuer den weichen Wolken-Effekt, eine Opazitaet von 0.4, und eine
    CSS-Animation namens aurora-float mit 12 Sekunden Dauer, ease-in-out
    Easing, infinite Wiederholung und alternate Richtung.
    Blob 1 ist 600x600 Pixel gross, nutzt die Primaerfarbe als Hintergrund,
    positioniert bei -20% oben und -10% links, ohne Animationsverzoegerung.
    Blob 2 ist 500x500 Pixel, nutzt die Akzentfarbe, positioniert bei 20%
    oben und -15% rechts, mit -4 Sekunden Verzoegerung (startet versetzt).
    Blob 3 ist 400x400 Pixel, nutzt die Sekundaerfarbe, positioniert bei
    -10% unten und 30% links, mit -8 Sekunden Verzoegerung.
    Die Keyframe-Animation aurora-float bewegt das Element von der
    Ausgangsposition (translate 0,0 und scale 1) zu einer leichten
    Verschiebung (30px rechts, 20px hoch) mit minimaler Skalierung (1.1).

  KRITISCHE REGELN:
    filter: blur(80px) ist teuer — NUR im Hero, NICHT auf jeder Section.
    prefers-reduced-motion: Statische Blobs (keine Animation).
    Opacity max 0.4 — zu stark = unleserlicher Text.
    Z-Index: HINTER dem Content (z-index: -1).

CHEATCODE CC-45: TEXT-GRADIENT & TYPOGRAFIE-EFFEKTE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Gradient-Text auf Ueberschriften ist der "Apple-Effekt" —
  sofortiger High-End-Eindruck.

  PFLICHT-IMPLEMENTIERUNG:
    Hero-Headline: Gradient-Text (Primary → Accent).
    Section-Headlines: Optional, max 1 pro Seite (nicht inflationaer).

  CSS-PATTERN:
    Die Klasse gradient-text erhaelt einen linearen Gradient als Hintergrund
    mit 135 Grad Winkel, verlaufend von der Primaerfarbe zur Akzentfarbe.
    Mittels background-clip: text (und dem webkit-Prefix fuer Safari) wird
    der Gradient auf die Textform zugeschnitten. Die Textfuellfarbe wird auf
    transparent gesetzt (webkit-text-fill-color: transparent), sodass der
    Gradient durch die Buchstabenformen sichtbar wird.

  ERGAENZENDE TYPOGRAFIE-EFFEKTE:
    Text-Reveal: Buchstaben erscheinen einzeln (nur Hero, max 1x pro Seite).
    Split-Text: Woerter animieren einzeln ein (stagger-up auf Wort-Ebene).
    Highlight-Underline: Animierte Unterstreichung die bei Scroll erscheint
      (background-size: 0% 3px → 100% 3px, background-position: bottom).

  KRITISCHE REGELN:
    Gradient-Text: Fallback-Farbe setzen fuer alte Browser.
    Text-Reveal: NUR einmal pro Seite. NUR im Hero.
    WCAG: Gradient muss Mindest-Kontrast zum Hintergrund einhalten.
    prefers-reduced-motion: Kein Text-Reveal, normaler Text.


═══ CHAIN-EXIT-FOOTER ═══ SEQ-49 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════


═══════════════════════════════════════════════════════════════════════════════
MOLEKULARE WISSENSINJEKTION — 80 DESIGN-AESTHETIKEN (AUS DOC 08)
═══════════════════════════════════════════════════════════════════════════════

DIE PIPELINE VERFUEGT UEBER 80 SPEZIFISCHE DESIGN-SYSTEME MIT EXAKTEN CSS-VARIABLEN.
DIE AUSFUEHRENDE KI MUSS DAS RICHTIGE SYSTEM BASIEREND AUF DEM PRODUKT-VERTIKAL WAEHLEN.

WEB-KLASSIKER (1-10):
  1. Minimalism/Swiss: Monochrom #000/#FFF. Subtle Hover 200ms. radius: 0px. grid, gap: 2rem.
  2. Neumorphism: Pastell #C8E0F4. Dual Shadow (-5px/-5px, 5px/5px). radius: 14px.
  3. Glassmorphism: rgba(255,255,255,0.15). backdrop-filter blur(10-20px). glass-opacity: 0.15.
  4. Brutalism: Pure RGB. KEINE Transitions. Scharfe Ecken (0px).
  5. 3D & Hyperrealism: WebGL/Three.js. Parallax 3-5 Layers.
  6. Vibrant & Block-based: Neon #39FF14, #BF00FF. 48px+ Gaps, 32px+ Type.
  7. Data-Dense: Kompakte Informationsdarstellung. High-Contrast auf hellem Hintergrund. Tabellen-optimiert.
  8. Accessible & Ethical: WCAG AAA, 7:1+ Kontrast. Focus Rings 3-4px. 44x44px Targets.
  9. Claymorphism: Double Shadows, Thick Borders (3-4px), radius 16-24px.
  10. Aurora UI: Mesh Gradients, bg-size 200%, 8-12s Animation Loop.

2020s TREND-AESTHETIKEN (39-50):
  39. Bento Box Grid: Apple-Style, Asymmetric Grid, Soft Shadows, radius 16-24px.
  41. Cyberpunk UI: #0D0D0D Base, Matrix Green #00FF00.
  43. AI-Native UI: Chatbot Format, Streaming Text, Pulse Typing, AI Purple #6366F1.
  47. Exaggerated Minimalism: font-size: clamp(3rem, 10vw, 12rem), extreme Whitespace.
  48. Kinetic Typography: Morphing Text, background-clip: text, Scroll-Triggered.

MOBILE-NATIVE OPTIMIERUNGEN (69-80):
  69. Bauhaus Mobile: Hard 4px Offset Shadow, 900 Typography, KEIN smooth Hover.
  71. Modern Dark Cinema: LinearGradient, Animated Blobs, BlurView Navigation.
  73. Terminal CLI Mobile: OLED Black #050505, Matrix Green, ASCII, Blinking Cursor 500ms.
  75. Flat Design Mobile: Keine Shadows. Touch Targets >= 48x48.
  76. Material You MD3: Tonal Backgrounds, Container Pills (radius 999px).

GLASSMORPHISM-IMPLEMENTIERUNG (DETAIL):
  CSS: background rgba(255,255,255,0.08), backdrop-filter blur(16px) saturate(180%),
       border 1px solid rgba(255,255,255,0.12)
  Tailwind: bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl
  ACHTUNG: backdrop-filter ist GPU-intensiv. Nur above-the-fold Hero/Nav verwenden.

GRADIENT-TECHNIKEN:
  Text-Gradient: background linear-gradient, -webkit-background-clip: text,
                 -webkit-text-fill-color: transparent
  Aurora/Mesh: background-size 400% 400%, animation aurora-shift 12s infinite
  PFLICHT: @media (prefers-reduced-motion: reduce) { .aurora { animation: none; } }

CSS-PERFORMANCE-REGELN:
  contain: layout style paint auf komplexen Card-Grids.
  content-visibility: auto fuer below-the-fold Sections.
  Prefer opacity und transform fuer animierte Properties.

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

SSOT DIRECTIVE: Der Code ist die einzige Wahrheit.
Performance-Optimierungen müssen im Code GELTEN, verifiziert via Lighthouse.

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
   □ npm run dev → Website lädt schnell, keine Rendering-Blockierungen
   □ Lighthouse Performance Score ≥ 95 (Mobile & Desktop)
   □ Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

2. PERFORMANCE-SPEZIFISCHE VALIDIERUNGEN:
   □ Bundle-Size: Main JS < 150KB gzipped, CSS < 50KB gzipped
   □ Image Optimization: WebP, AVIF mit Fallbacks, Sizes/Srcset
   □ Font-Loading: preload Critical Fonts, subset Optimization, swap display
   □ CSS-Efficiency: Keine unused Styles, Tailwind Purge aktiv
   □ JavaScript Splitting: Critical Code inline, Rest lazy-loaded
   □ Render Performance: 60fps auf Animationen, kein Jank auf Scrolling
   □ Network Tab: <100 Requests, <2MB Total Size (ohne große Assets)

3. POLISH VALIDIERUNGEN:
   □ Typography Polish: Hyphenation, Text-Wrap-Balance, Widows/Orphans
   □ Image Polish: Aspect Ratios standardisiert, Placeholder-States
   □ Spacing Audit: Kein unerwartetes Whitespace, Konsistenz check
   □ Shadow/Elevation: Konsistent, subtle, nicht übertriben
   □ Border/Radius: Einheitlich nach Phase 1 Definitions
   □ Color Blending: Keine unangenehmen Farbkombinationen
   □ Micro-Details: Cursor-States, Selection Colors, Focus Rings

4. STATE UPDATE (DOKUMENTATION ERFORDERLICH):
   □ .pipeline-master-state.md → SEQ-39 als ✅ COMPLETED markieren
   □ Build-Metriken: [TIMESTAMP] SEQ-39 | Build: SUCCESS | Duration: Xm Ys | LH-Score: XX | Errors: 0
   □ Performance-Baseline dokumentieren (Lighthouse Scores, Core Web Vitals)

5. DESIGN-CONTEXT CHECKPOINT:
   □ .ai-design-context.md Sektion "Performance & Polish" vollständig (≥1000 Wörter)
   □ Performance-Strategie dokumentiert (Image Optimization, Font Loading, Bundle Size)
   □ Core Web Vitals Targets dokumentiert
   □ Polish-Checklist dokumentiert (Typo, Spacing, Shadows, Details)
   □ Known Limitations dokumentiert (wenn vorhanden)

6. AUTOMATISCHER HANDOFF ZU SEQ-40:
   → NÄCHSTE PHASE: SEQ-50 → DESIGN-PHASE-09.md (Color System Migration)

   HANDOFF-NOTIZ:
   "Phase SEQ-39 hat Performance & Polish komplett durchgeführt.
   WEBSITE ist blitzschnell (LH ≥95), detailreich, polished.
   Jedes Pixel ist optimiert, kein Performance-Deficit mehr.

   READY STATE: Website ist Production-Ready, Performance optimized ✓"

   → Lese DESIGN-PHASE-09.md CHAIN-LINK-HEADER
   → Starte SEQ-40 mit aktuellem .ai-design-context.md als Input

═══ PHASE SEQ-39 → SEQ-40: HANDOFF AKTIV ═══
