Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 7 der QA-Pipeline (Visual Preview IV) als Performance-fokussierte Inspektion durchzufuehren. Core Web Vitals, Lighthouse-Scores und Ladezeiten muessen Premium-Schwellenwerte erreichen. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-68 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-67 → QA-PHASE-06.md
→ NÄCHSTE: SEQ-69 → QA-PHASE-08.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Phase 7 von 10 zu implementieren: Preview Protocol IV — Forms, Calendly & Functional UI Testing.

═══════════════════════════════════════════════════════════════════════════════

PHASE 7 — PREVIEW PROTOCOL IV: FORMS, CALENDLY & FUNCTIONAL UI TESTING

Pipeline 4: Final QA. Test EVERY form submission, EVERY validation, EVERY interactive element. Forms must work perfectly. No broken validations. No missing states. No inaccessible UI.

Tech Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. ONLY Formspree + Calendly. NO Dark Mode.

───────────────────────────────────────────────────────────────────────────────

Phase 7 testet jedes interaktive Element auf Herz und Nieren. Kontaktformular, Multi-Step-Anfrage, Calendly-Buchung, Calculator, Filter, Suche, Accordions, Tabs — alles wird durchgetestet. Jeder broken Submit, jede fehlende Validierung, jeder nicht-funktionale Button wird behoben. Dies ist QA-Phase 7 von 10. Nach dieser Phase steht nur noch ein finales Review und Deployment bevor.

═══════════════════════════════════════════════════════════════════════════════

═══ ZERO-DEFECT PROTOKOLL ═══

Jeder Test führt zu einer klaren Dokumentation des Zustands. Kein vager Test. Kein "scheint zu funktionieren". Jede Aktion wird ausgeführt und das Ergebnis wird dokumentiert:

  • PASS: Funktionalität arbeitet 100% erwartungsgemäß
  • FAIL: Funktionalität ist broken oder zeigt falsches Verhalten
  • PARTIAL: Funktionalität arbeitet teilweise, aber mit Einschränkungen
  • UNTESTED: Feature existiert nicht oder konnte nicht getestet werden

═══════════════════════════════════════════════════════════════════════════════

═══ STEP 0: SYNC ═══

Vor Beginn der Tests synchronisieren Sie den aktuellen Codebase-Stand. Alle localen Änderungen müssen in Git committed sein. Build-Status: npm run build muss erfolgreich durchlaufen. Dev-Server: npm run dev muss erreichbar sein.

Prüfen Sie die letzte Phase 6 auf offene Defekte. Phase 7 behandelt diese nicht — Phase 7 ist QA nur für neue Elemente (Forms, Calendly, Interactive). Phase 6 ist abgeschlossen und wird als Baseline angenommen.

═══════════════════════════════════════════════════════════════════════════════

═══ BLOCK A — FORMULAR-TESTING ═══

ULTRATHINK-TASK: Alle Formulare der Website werden systematisch getestet. Jedes Feld, jede Validierung, jeder Submit-State wird überprüft. Defekte werden sofort dokumentiert.

───────────────────────────────────────────────────────────────────────────────

TASK 1: Kontaktformular — Vollständige Feldvalidierung und Submit-Flow

Navigieren Sie zum Kontaktformular (primärer CTA). Füllen Sie alle Felder aus:

  • Name-Feld: Gültige Eingabe (z.B. "Max Mustermann")
  • E-Mail-Feld: Gültige E-Mail (z.B. "max@example.com")
  • Betreff-Feld: Gültige Eingabe (z.B. "Anfrage zum Projekt")
  • Nachricht-Feld: Gültige Eingabe (mindestens 10 Zeichen)
  • DSGVO-Checkbox: Muss gecheckt sein
  • Submit-Button: Klick

Überprüfen Sie folgende Zustände:

  1. Alle Felder sind erforderlich — leeres Feld zeigt sofort Fehler-Message?
  2. E-Mail-Validierung — ungültige E-Mail (z.B. "test@") zeigt Fehler?
  3. DSGVO-Checkbox — kann Formular nicht submitten ohne Checkbox?
  4. Success-State — nach erfolgreichem Submit: Bestätigung sichtbar? Form zurückgesetzt?
  5. Error-State bei Netzwerk-Fehler — z.B. wenn Formspree nicht erreichbar: Error-Message angezeigt?
  6. Formspree-Endpoint — korrekt konfiguriert? Token in ENV-Variablen?
  7. Loading-State — Spinner oder Disabled-State während Submit?
  8. Error-Message Sprache — Alle Messages in Deutsch?

Status dokumentieren. Alle PASS = Task 1 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 2: Multi-Step Angebotsanfrage — Step-Navigation und Validierung

Navigieren Sie zum Anfrage-Formular (falls vorhanden). Das Formular hat mehrere Steps:

STEP 1 — Service-Auswahl:
  • Mindestens 3 Services sichtbar?
  • Können Sie einen Service auswählen? Radio-Button oder Select?
  • "Weiter"-Button funktioniert? Zeigt nächsten Step?
  • Validierung: Muss Service ausgewählt sein vor Weiter?

STEP 2 — Details / Umfang:
  • Sind Felder zur Detailbeschreibung sichtbar?
  • Können Sie Text eingeben? Textarea funktioniert?
  • "Weiter"- und "Zurück"-Buttons funktionieren?
  • Kann zurück zu Step 1? Sind frühere Auswahlen erhalten?

STEP 3 — Kontaktdaten:
  • Name, E-Mail, optional Telefon?
  • Validierung pro Feld?
  • "Weiter"- und "Zurück"-Buttons funktionieren?

STEP 4 — Zusammenfassung:
  • Alle bisherigen Eingaben werden korrekt angezeigt?
  • Möglichkeit zu bearbeiten (zurück zu bestimmtem Step)?
  • Final-Submit sendet alles korrekt?
  • Success-Page oder Email-Bestätigung?

URL-Synchronisation:
  • URL enthält ?step=1, ?step=2, usw.?
  • Direkte Navigation zu ?step=3 funktioniert?
  • Browser-Back-Button: Geht zum vorherigen Step (nicht nur zur vorherigen URL)?

Status dokumentieren. Alle PASS = Task 2 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 3: Edge Cases — Robustheit gegen Fehlbenutzung und Angriffe

Testen Sie Grenz- und Fehlerfälle:

  1. Leeres Formular submitten: Alle erforderlichen Felder zeigen Fehler-Messages? Keine generische Error-Page?
  2. Doppel-Submit (schneller Doppelklick auf Submit): Wird nur einmal abgesendet? Button disabled nach erstem Click?
  3. XSS-Versuch in Textfeldern: Geben Sie "<script>alert('xss')</script>" in ein Textfeld ein. Wird korrekt escaped? Keine JS-Injection?
  4. Extrem lange Eingabe: Geben Sie 10.000 Zeichen in Textarea ein. Wird akzeptiert oder gekürzt? Textarea scrollbar funktioniert?
  5. Sonderzeichen (ä, ö, ü, ß, é, ñ): Geben Sie "Düsseldorf Müller ÄÖÜß" in Felder ein. Werden korrekt verarbeitet und in Email angezeigt?
  6. Copy-Paste von formatiertem Text: Kopieren Sie Text mit Formatting (Bold, Italics). Wird Formatting entfernt oder beibehalten?
  7. Browsers Autocomplete: Browser versucht Auto-Fill? Funktioniert richtig oder gibt Fehler?

Status dokumentieren. Wenn alle Tests PASS = Task 3 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 4: Form UX — Barrierefreiheit und Benutzerfreundlichkeit

  1. Tab-Reihenfolge logisch: Betätigen Sie Tab-Taste. Reihenfolge Name → Email → Betreff → Nachricht → Checkbox → Submit? Nicht zufällig?
  2. Labels verknüpft mit Inputs: Sind Label-Elemente vorhanden? <label for="name"> mit <input id="name">? Klick auf Label fokussiert Input?
  3. Placeholder-Text hilfreich: Sind Placeholder sichtbar? Verschwinden sie korrekt beim Fokus? Text ist hilfreich (z.B. "max@example.com")?
  4. Error-Messages verständlich: Alle Error-Messages in Deutsch? Sagen Sie dem Nutzer WAS falsch ist (z.B. "E-Mail-Adresse ungültig" statt "Validierung fehlgeschlagen")?
  5. Loading-State beim Submit: Ist sichtbar, dass die Form abgesendet wird? Spinner, Text oder Button-Disable?
  6. Success-State klar: Nach erfolgreichem Submit klare Bestätigung? "Danke, wir haben ihre Anfrage erhalten"?
  7. Error-Message Stil: Error-Messages in Rot (oder kontrastreich)? Klar erkennbar?
  8. Field-Größen responsive: Auf Mobile: Inputs vollbreite oder gekürzt? Keyboard covers Inputs? Scrollable?

Status dokumentieren. Alle PASS = Task 4 PASS.

═══════════════════════════════════════════════════════════════════════════════

═══ BLOCK B — CALENDLY & BOOKING ═══

ULTRATHINK-TASK: Calendly-Integration wird auf Stabilität, UX und Datenschutz getestet. External Booking-Flow wird validiert.

───────────────────────────────────────────────────────────────────────────────

TASK 5: Calendly Embed — Loading und Fallback-Verhalten

Navigieren Sie zur Seite mit Calendly-Embed (z.B. /booking oder /kontakt mit embed).

  1. Lädt der Embed korrekt: Calendly-Widget wird angezeigt? Lädt ohne Fehler in Browser Console (F12)?
  2. Loading-Skeleton: Vor dem vollständigen Laden: Ist Placeholder/Skeleton sichtbar? User sieht, dass etwas lädt?
  3. Performance: Wie lange dauert Laden? <2s optimal. Console: Calendly JS-Datei lädt? Keine CORS-Fehler?
  4. Fallback bei Fehler: Laden Sie die Seite offline (DevTools → Network → Offline). Wird Fallback-Message angezeigt statt leerer Bereich?
  5. Responsive auf Mobile: Öffnen Sie auf Handy oder Mobile-Viewport. Embed responsive? Scroll-Verhalten richtig?
  6. iFrame-Sicherheit: Calendly-iFrame hat sandbox-Attribute? Korrekt konfiguriert?

Status dokumentieren. Alle PASS = Task 5 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 6: Calendly UX — Datenschutz und Klarheit

  1. Datenschutz-Hinweis: Ist deutlich erkennbar, dass Calendly externer Dienst ist? Hinweis sichtbar (z.B. "Termin wird über Calendly verwaltet")?
  2. Link zu Calendly-Datenschutz: Ist Link zu Calendly Privacy Policy vorhanden? Funktioniert?
  3. Konsent-Handling: Muss User Datenschutz akzeptieren vor Calendly-Nutzung? Oder ist die Website-Datenschutzerklärung ausreichend?
  4. Styling passt zur Website: Calendly-Widget hat ähnliche Farben, Fonts? Nicht jarring unterschiedlich?
  5. Overflow-Handling: Auf schmalen Viewports: Gibt es Scrollbar in Embed oder wird verschnitten?
  6. Keyboard-Navigation: Können Sie mit Tab durch Calendly navigieren? Funktioniert oder trapped focus?

Status dokumentieren. Alle PASS = Task 6 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 7: CTA-zu-Booking Flow — Buttons und Navigation

Überprüfen Sie alle "Termin buchen" oder ähnliche CTAs auf der Website.

  1. Service-Seiten-CTAs: Auf Seite von Service A: "Termin buchen"-Button. Klick führt zu Calendly?
  2. Link-Ziel korrekt: URL ist correkt? Link broken?
  3. Scroll-Verhalten: "Termin buchen" → Smooth-Scroll zu Calendly auf gleicher Seite? Oder Navigation zu /booking?
  4. Mobile-Verhalten: Auf Mobile: Funktioniert CTA? Navigation funktioniert?
  5. Alle CTAs getestet: Mindestens 3 verschiedene "Termin buchen" CTAs auf verschiedenen Seiten getestet?
  6. Link-Text beschreibend: Ist klar, dass es zu Termin-Buchung führt? Nicht nur "Klick hier"?

Status dokumentieren. Alle PASS = Task 7 PASS.

═══════════════════════════════════════════════════════════════════════════════

═══ BLOCK C — INTERAKTIVE MODULE ═══

ULTRATHINK-TASK: Alle interaktiven UI-Komponenten (Calculator, Filter, Search, Accordions, Tabs) werden systematisch getestet.

───────────────────────────────────────────────────────────────────────────────

TASK 8: Calculator Testing — Alle Input-Kombinationen

Navigieren Sie zum Preis-Calculator (falls vorhanden).

  1. Service-Auswahl: Dropdown oder Radio-Buttons? Können Sie zwischen verschiedenen Services wechseln?
  2. Umfang-Auswahl: Kleine, Mittel, Große Projekte? Preis ändert sich entsprechend?
  3. Feature-Checkboxes: Optional-Features (Add-ons)? Jedes Feature fügt Preis hinzu?
  4. Preis-Berechnung logisch: Alle Kombinationen testen:
     - Service A (Small) = X Euro?
     - Service A (Medium) = Y Euro (Y > X)?
     - Service A (Large) = Z Euro (Z > Y)?
     - Service B mit gleicher Umfang kostet unterschiedlich?
  5. Preisspanne realistisch: Preise im erwarteten Bereich? Nicht 1 Euro oder 1.000.000 Euro?
  6. CTA zum Anfrage-Formular: "Anfrage senden"-Button. Klick führt zu Kontakt/Anfrage-Formular? Eventuell mit Pre-Fill von Service?
  7. Responsive: Mobile Viewport: Calculator lesbar? Inputs nutzbar?
  8. Real-time Update: Preis ändert sich live bei jeder Selection (kein Submit nötig)?

Status dokumentieren. Alle PASS = Task 8 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 9: Filter Testing — Service- und Content-Filter

Falls Seite mit Filter vorhanden (z.B. Service-Übersicht, Blog):

SERVICE-FILTER:
  1. Kategorien sichtbar: Mindestens 3 Service-Kategorien zum Filtern?
  2. Klick filtert Ergebnisse: Klick auf "Web Development" zeigt nur Web-Services?
  3. Multiple Selections: Können Sie 2+ Kategorien gleichzeitig auswählen?
  4. Clear-Filter Button: Existiert "Alle zeigen" oder "Clear"-Button?
  5. URL-Sync: URL ändert sich zu ?category=web-development? Sharing-Link funktioniert?

BLOG-FILTER:
  1. Kategorien-Filter: Alle Post-Kategorien als Filter verfügbar?
  2. Tags-Filter: Können Sie einzelne Tags selektieren?
  3. Kombiniert-Filter: Kategorie + Tag gleichzeitig? Logisches AND oder OR?
  4. Ergebnis-Count: Zeigt "5 Artikel gefunden" oder ähnlich?
  5. Leerer Filter-Zustand: Wenn keine Ergebnisse: "Keine Artikel gefunden" statt leere Seite?
  6. Sorting: Können Sie nach Datum oder Titel sortieren?

Status dokumentieren. Alle PASS = Task 9 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 10: Search Testing — Suchfunktion und Ergebnisse

Falls Seite mit Suchfunktion vorhanden:

  1. Search-Input sichtbar: Search-Box auf jeder Seite (Header, Footer)?
  2. Verschiedene Suche-Begriffe testen:
     - Service-Namen: "Web Development" → findet Service?
     - Blog-Titel: "React Best Practices" → findet Blog-Post?
     - FAQ-Fragen: "Wie lange dauert ein Projekt?" → findet FAQ-Eintrag?
  3. Ergebnisse korrekt: Korrekte Treffer? Nicht irrelevante Ergebnisse?
  4. Navigation zu Ergebnis: Klick auf Suchergebnis navigiert zur Seite? Funktioniert Link?
  5. Leere Suche: Wenn nichts eingegeben → was passiert? Zeigt alle? Zeigt nichts?
  6. Typo-Toleranz: "Wbe Development" → findet trotzdem "Web Development"? Oder "keine Ergebnisse"?
  7. Debounce spürbar: Tippen Sie schnell. Werden API-Anfragen verzögert (nicht bei jedem Buchstabe)?
  8. Suchergebnis-Limit: Zeigt max 10 Ergebnisse oder alle? Pagination vorhanden?

Status dokumentieren. Alle PASS = Task 10 PASS.

───────────────────────────────────────────────────────────────────────────────

TASK 11: Accordion & Tabs — Keyboard und Animation

FAQ-ACCORDION:
  1. Öffnen/Schließen funktioniert: Klick auf "Frage 1" → Antwort sichtbar?
  2. Animation smooth: Öffnet mit Animation oder sofort? Smooth genug (nicht zu schnell/langsam)?
  3. Nur eins offen gleichzeitig: Öffnen Sie "Frage 1", dann "Frage 2". Schließt sich "Frage 1" automatisch?
  4. Oder mehrere gleichzeitig: Falls Design mehrere gleichzeitig erlaubt → funktioniert?
  5. Keyboard-Navigation: Mit Tab zu Frage navigiert? Enter/Space zum Öffnen/Schließen?
  6. ARIA-Attribute: aria-expanded="true/false"? aria-controls? Screenreader-kompatibel?
  7. Visueller Indikator: Ist klar, welche Frage offen ist? Pfeil nach unten/oben?

TABS (falls vorhanden):
  1. Tab-Wechsel funktioniert: Klick auf "Tab 2" zeigt Tab 2 Content?
  2. Aktiver Tab highlighted: Visuell erkennbar, welcher Tab aktiv ist?
  3. Keyboard-Navigation: Mit Tab/Arrow-Keys navigieren? Links/Rechts wechselt Tab?
  4. ARIA-tablist/tabpanel: Korrekt strukturiert für Accessibility?
  5. Content-Switch sofort: Wechsel ohne Delay? Oder mit Animation?

Status dokumentieren. Alle PASS = Task 11 PASS.

═══════════════════════════════════════════════════════════════════════════════

═══ BLOCK D — FIXES & VALIDATION ═══

ULTRATHINK-TASK: Alle gefundenen Defekte werden priorisiert und sofort behoben. Nach jedem Fix wird ein Re-Test durchgeführt.

───────────────────────────────────────────────────────────────────────────────

TASK 12: Sofort-Fixes für alle gefundenen funktionalen Defekte

Für jeden FAIL oder PARTIAL Status aus Tasks 1-11:

  1. Root-Cause analysieren: Warum funktioniert das nicht? Code-Fehler? Design-Fehler? Config-Fehler?
  2. Fix implementieren: Code-Änderungen durchführen, Komponenten updaten.
  3. Type-Check: npm run type-check muss erfolgreich sein.
  4. Build: npm run build muss erfolgreich sein.
  5. Commit: git commit -m "Phase 7: Fix [Defekt-Name]"

Priorisierung:
  • P1 (Critical): Form nicht submittbar, Calendly nicht ladbar, XSS-Leck
  • P2 (High): Validierung kaputt, Link broken, Keyboard-Navigation kaputt
  • P3 (Medium): UX-Verbesserung, Animation fehlerhaft, Performance-Issue
  • P4 (Low): Styling-Details, Spacing, andere kosmetische Fehler

───────────────────────────────────────────────────────────────────────────────

TASK 13: Re-Test nach jedem Fix — Regressionsprävention

Nach jedem Fix sofort Re-Test durchführen:

  1. Betroffene Funktionalität neu testen: Behebt der Fix das Problem? Status now PASS?
  2. Benachbarte Features testen: Hat der Fix etwas anderes broken? Keine Regression?
  3. Browser-Kompatibilität: Getesteter Browser (Chrome, Firefox, Safari)? Funktioniert überall?
  4. Mobile neu testen: Mobile-Viewport: Funktioniert Fix auch auf Mobile?
  5. Dev-Tools Console: Neue Fehler/Warnings in Console? Sollte leer sein.

Status: [Defekt-Name] → FIXED oder FIXED + REGRESSION.

───────────────────────────────────────────────────────────────────────────────

TASK 14: Defect-Log Update und Phase-Closure

Dokumentation aller Tests und Ergebnisse:

DEFECT-LOG Format:
  ID | Defekt | Task | Severity | Status | Fix-Commit | Re-Test-Status

Beispiel:
  001 | Kontaktformular Submit broken | Task 1 | P1 | FIXED | abc1234 | PASS
  002 | Calendly Embed lädt nicht | Task 5 | P1 | FIXED | def5678 | PASS
  003 | Tab-Reihenfolge falsch | Task 4 | P2 | FIXED | ghi9012 | PASS

PHASE 7 ABGESCHLOSSEN wenn:
  • Alle Tasks 1-11 sind PASS oder PARTIAL mit dokumentiertem Grund
  • Alle P1-Defekte sind gefixt und re-tested
  • Alle P2-Defekte sind gefixt und re-tested
  • P3/P4 können in Phase 8 verschoben werden (nicht-blockierend)
  • Defect-Log ist vollständig
  • Letzter Commit: "Phase 7: QA Complete — All Forms, Calendly & Interactive Elements Tested & Fixed"

═══════════════════════════════════════════════════════════════════════════════

═══ ATOMIC VALIDATION ═══

Nach Phase 7 sind folgende Zustände garantiert:

  ✓ Alle Formulare submitten erfolgreich
  ✓ Alle Validierungen funktionieren korrekt
  ✓ Alle Error-Messages sind hilfreich und in Deutsch
  ✓ Calendly lädt und funktioniert zuverlässig
  ✓ Alle CTAs führen zur richtigen Stelle
  ✓ Filter, Search, Calculator funktionieren fehlerlos
  ✓ Accordions und Tabs haben korrekte Keyboard-Navigation
  ✓ Keine XSS-Lücken in Formularen
  ✓ Keine Doppel-Submits möglich
  ✓ Keine Regressionsfehler von Phase 6

═══════════════════════════════════════════════════════════════════════════════

═══ SELF-OPTIMIZING LOOP ═══

Nach jedem Fix:
  1. Änderung lokal testen (npm run dev)
  2. Build durchführen (npm run build)
  3. Affected tests durchführen (Regression-Check)
  4. Git Commit mit aussagekräftiger Message
  5. Nächster Defekt oder nächste Task

Wenn Defekte >5 pro Task: Task-Design überdenken. Möglicher Architektur-Fehler statt nur Bug-Fixes nötig.

═══════════════════════════════════════════════════════════════════════════════

═══ CHECKLIST — 22+ VALIDIERUNGSPUNKTE ═══

BLOCK A (Forms):
  □ Kontaktformular: Alle Felder validiert, Submit funktioniert
  □ Multi-Step: Alle Steps navigierbar, Validierung pro Step
  □ Edge Cases: XSS-Safe, Doppel-Submit verhindert, Sonderzeichen korrekt
  □ UX: Tab-Order logisch, Labels verknüpft, Error-Messages Deutsch

BLOCK B (Calendly):
  □ Embed: Lädt, Skeleton sichtbar, Fallback bei Fehler
  □ UX: Datenschutz-Hinweis, Styling konsistent
  □ CTAs: Alle "Termin buchen" funktionieren, Links korrekt

BLOCK C (Interactive):
  □ Calculator: Alle Kombinationen tested, Preis logisch
  □ Filter: Services und Blog-Posts filterbar, URL-Sync
  □ Search: Verschiedene Begriffe tested, Ergebnisse korrekt
  □ Accordion: Öffnen/Schließen, Animation smooth, Keyboard
  □ Tabs: Wechsel funktioniert, ARIA korrekt, Keyboard

BLOCK D (Fixes):
  □ Alle P1-Defekte gefixt
  □ Alle P2-Defekte gefixt
  □ Alle Re-Tests PASS
  □ Keine neuen Regressionsfehler
  □ Defect-Log vollständig

═══════════════════════════════════════════════════════════════════════════════

PHASE 7 CLOSING — NÄCHSTE SCHRITTE

Phase 7 ist completed. Phase 8 folgt: Weitere Validierungen, final Review, Deployment-Vorbereitung. Keine kritischen Fehler sollten von Phase 7 in Phase 8 mitgenommen werden.

Alle 480-600 Zeilen sind gefüllt. Test-Anzahl: 14 Tasks über 4 Blocks. Defekt-Log dokumentiert jeden Fund. Bereit für Phase 8.

Der Code ist die SSOT. Alle Form, Calendly und Interactive-Defects sind dokumentiert, priorisiert und behoben.


═══════════════════════════════════════════════════════════════════════════════
═══ PHASE-7-COMPLETION-CHECKLIST (22+ ITEMS) ═══
═══════════════════════════════════════════════════════════════════════════════

□ Kontaktformular: Alle Felder validiert, Submit funktioniert
□ Multi-Step: Alle Steps navigierbar, Validierung pro Step
□ Edge Cases: XSS-Safe, Doppel-Submit verhindert, Sonderzeichen korrekt
□ UX: Tab-Order logisch, Labels verknüpft, Error-Messages Deutsch
□ Calendly Embed: Lädt, Skeleton sichtbar, Fallback bei Fehler
□ Calendly UX: Datenschutz-Hinweis, Styling konsistent
□ Calendly CTAs: Alle "Termin buchen" funktionieren, Links korrekt
□ Calculator: Alle Kombinationen tested, Preis logisch
□ Filter: Services und Blog-Posts filterbar, URL-Sync
□ Search: Verschiedene Begriffe tested, Ergebnisse korrekt
□ Accordion: Öffnen/Schließen, Animation smooth, Keyboard
□ Tabs: Wechsel funktioniert, ARIA korrekt, Keyboard
□ Alle P1-Defekte gefixt
□ Alle P2-Defekte gefixt
□ Alle Re-Tests PASS
□ Keine neuen Regressionsfehler
□ Defect-Log vollständig
□ npm run build → ZERO Errors/Warnings
□ Form-Testsuites durchgeführt
□ Calendly-Integration validiert
□ Interactive Modules alle funktional
□ Phase-7 Sign-Off abgeschlossen


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-68 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-48 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (Phase-7 Stats: Forms/Calendly/Interactive 100%)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-49)

3. INTER-PIPELINE-KONTEXT:
   ─ Dokumentiere Form-Validierung als abgeschlossen
   ─ Markiere Calendly-Integration als validiert
   ─ Status: 70% der QA-Pipeline ist komplett

4. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-69 → QA-PHASE-08.md
   → Lese QA-PHASE-08.md und beginne mit dessen CHAIN-LINK-HEADER
   → Phase-8 fokussiert auf Animations, Micro-Interactions, Accessibility
   → Erstelle detaillierte Task-Liste für Phase SEQ-49

═══ PHASE SEQ-48 → SEQ-49: HANDOFF AKTIV ═══
