Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 2 der QA-Pipeline (Static Error Hunting I) als ersten systematischen Fehler-Scan durchzufuehren. TypeScript-Fehler, Lint-Verstoesse und Build-Warnungen muessen vollstaendig identifiziert und behoben werden. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-63 von 72 ═══ Pipeline: QA ═══
← VORHERIGE: SEQ-62 → QA-PHASE-01.md
→ NÄCHSTE: SEQ-64 → QA-PHASE-03.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, ALLE TypeScript-Fehler, logischen Inkonsistenzen und Hydration-Mismatches aus dem Phase-1 Defect-Log zu eliminieren und darüber hinaus eine ZERO-DEFECT Ausgangslage für Phase 3 zu schaffen.

PHASE 2 VON 10: STATIC ERROR HUNTING I — TYPES, LOGIC & HYDRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STATUS: In Progress | Pipeline: QA Phase 2 | Tech Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md

OPENING
───────────────────────────────────────────────────────────────────────────

Phase 2 beginnt die systematische und chirurgische Fehlerbeseitigung nach Abschluss aller Feature-Development-Phasen. JEDER TypeScript-Fehler, JEDE logische Inkonsistenz und JEDER Hydration-Mismatch aus dem Phase-1 Defect-Log wird strukturiert und nachverfolgbar behoben. Am Ende dieser Phase besteht npx tsc --noEmit mit exakt ZERO Fehlern. Dies ist QA-Phase 2 von insgesamt 10 Qualitätssicherungsphasen.

Tech Stack: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. Integrationspunkte: Formspree für E-Mail-Handling, Calendly für Meeting-Buchungen. KEINE Dark Mode Implementierung, KEIN Sentry Error Tracking.


═══ ZERO-DEFECT PROTOKOLL ═══
Static Deep Scan Methode mit 13-Task-Struktur über 4 konzentrierte Blöcke


═══ STEP 0: DEFECT-LOG LADEN ═══
───────────────────────────────────────────────────────────────────────────

Task 0.1 — Defect-Log Review
Lade .qa-defect-log.md und filtere alle CRITICAL und HIGH Severity Defects. Kategorisiere nach Type, Logic, Hydration. Dokumentiere Zeile, Komponente, beschreibender Fehler. Dies ist die Master-Referenzliste für alle nachfolgenden Blöcke.

Task 0.2 — Pipeline-State Marker
Lade .qa-pipeline-state.md und markiere Phase 2 als in_progress mit Timestamp. Setze Baseline-Referenz auf Phase-1 Ausgangszustand (letzter erfolgreicher npm run build Output).

Task 0.3 — Baseline-Build Durchführung
Führe npm run build aus um Pre-Phase-2 Baseline zu erzeugen. Dokumentiere Warning-Anzahl, Error-Anzahl, Build-Dauer. Dies dient als Vergleichspunkt für BLOCK D Validation.


═══ BLOCK A — TYPESCRIPT ZERO-ERROR KAMPAGNE ═══
Tasks 1–4 | Eliminiere ALLE Typ-bezogenen Fehlklassifikationen


ULTRATHINK-TASK 1: Implicit Any Elimination
───────────────────────────────────────────────────────────────────────────

Durchsuche JEDE Datei im src/ Verzeichnis nach impliziten any-Deklarationen. Fokus-Punkte:

Event-Handler: onClick, onChange, onSubmit etc. Parameter sind oft (e: any). Ersetze mit spezifischen React-Typen (React.MouseEvent, React.ChangeEvent, React.FormEvent). Beachte HTMLElement-Spezifizierung (HTMLButtonElement, HTMLInputElement).

API-Response Handling: fetch() oder axios Calls wo response.data als any typisiert ist. Erstelle entsprechende Interface/Type für Response-Shape. Nutze generische Response-Wrapper wenn Pattern sich wiederholt.

Dynamic Imports und Module-Loading: import() statements ohne Type-Assertion werden gefunden und mit korrekten dynamischen Types versehen. Fallback-Types für unbekannte Module.

Browser APIs: localStorage, sessionStorage, window-Objekt Zugriffe ohne Typ-Guard. Wrap in Type-Checks oder nutze optional chaining mit fallbacks.


ULTRATHINK-TASK 2: Missing Type Definitions
───────────────────────────────────────────────────────────────────────────

Scannen aller React-Komponenten auf Props-Parameter ohne Interface/Type Definition. Jeder Component mit Props erhält explizites Interface mit Feld-Dokumentation. Props-Types bevorzugt über inline-Typisierung für Readability.

Funktionen ohne Return-Type Annotation werden gescannt. Alle Funktionen erhalten explizite Return-Types, besonders kritisch bei Promises (async Funktionen → Promise<T>). Implizite Returns werden eliminiert.

State Management: useState Calls ohne Generic-Type werden identifiziert. Jeder useState erhält explizites Generic mit initialem Type, nicht inferred. Beispiel: useState<UserData | null>(null) statt useState(null).

Custom Hooks: Alle custom Hooks (useEffect, useContext Wrapper) erhalten vollständige Type-Signaturen. Hook Return-Types sind explizit definiert.


ULTRATHINK-TASK 3: Generic Constraint Fixes
───────────────────────────────────────────────────────────────────────────

Array-Methoden: Array.find() gibt T | undefined zurück. Implementiere null-checks und weigere Dich, null-assertions (!) zu verwenden außer wenn logik-getestet. Non-null assertion nur mit Dokumentation warum Existence garantiert ist.

Object.keys() und Object.entries(): Diese geben (string | number | symbol)[] zurück, nicht keyof T. Nutze Type-Helper-Funktionen um korrektes narrowing zu ermöglichen. Implementiere typed-key Patterns statt string-Indexing auf Objects.

Dynamic Route Parameters: [slug].tsx files wo slug als any gelesen wird → implementiere Type-Cast mit Validierung. useParams() Hook typ-sicher gestalten mit Route-spezifischen generics.

Conditional Type Guards: Nutze typeof, instanceof, keyof und custom Type Guards um Typen zu narrowen statt Casts zu verwenden.


ULTRATHINK-TASK 4: Strict Mode Compliance
───────────────────────────────────────────────────────────────────────────

Überprüfe tsconfig.json auf folgende strict Settings: strict: true (Master-Flag), noUncheckedIndexedAccess, noImplicitReturns, exactOptionalPropertyTypes, noImplicitThis, strictNullChecks, strictFunctionTypes.

Für jeden Fehler der durch strikte Einstellungen aufgedeckt wird: Implementiere korrekten Fix, nicht Flag-Deaktivierung. Wenn Optional-Properties existieren, verwende exakte Syntax (property?: Type nicht property: Type | undefined).

Generische Funktionen mit this-Kontext: Nutze this-Parameter in Function Signature statt impliziter this-Benutzung.

Überprüfe npm run build Ausgabe auf alle Fehler und bearbeite diese bis Zero-Fehler erreicht.


═══ BLOCK B — LOGIK-FEHLER BEHEBEN ═══
Tasks 5–7 | Eliminiere Runtime-Logik-Fehler und Edge-Case-Mängel


ULTRATHINK-TASK 5: Null/Undefined Safety
───────────────────────────────────────────────────────────────────────────

Audit JEDES array.find(), array.filter() oder array[index] auf fehlende Bounds-Checks. Implementiere korrekten Umgang mit undefined Returns statt blind auf Result zu vertrauen. Nutze Optional Chaining (.?) wo sinnvoll, aber nicht exzessiv.

Fallback-Werte für fehlende Daten: Wenn Service, User-Daten oder Config-Werte nicht geladen werden können, implementiere konsistente Fehlerbehandlung (z.B. Service-Slug existiert nicht → 404-Redirect oder Error-Boundary Trigger).

Error-States: Komponenten die auf externe Daten angewiesen sind, erhalten Error-States mit Nutzer-Information. Kein Silent Failure.

Destructuring Safety: Object-Destructuring mit Fallback-Values. Array-Destructuring mit Length-Checks.


ULTRATHINK-TASK 6: Conditional Logic Robustheit
───────────────────────────────────────────────────────────────────────────

Audit JEDE if/else Chain, switch Statement, ternary Expression auf Vollständigkeit. Gibt es unreachable Code? Gibt es Branches die niemals ausgeführt werden? Identifiziere und eliminiere.

Falsy-Handling: Überprüfe ob false, 0, "" oder [] fälschlich als Fehler-Condition behandelt werden. Beispiel: if (count) schlägt fehl wenn count === 0 aber 0 ist valider Wert. Nutze explizite Vergleiche (count > 0 statt if (count)).

Switch Statements: Sicherstelle dass default Case existiert oder alle enum-Werte abgedeckt sind. Default Case dokumentieren wenn nicht nötig (satisfies exhaustiveness check).

Ternary-Verkettung: Mehrfach-ternaries sind error-prone. Refaktor zu expliziten if/else wenn Lesbarkeit leidet.


ULTRATHINK-TASK 7: Async/Await Safety & Race Conditions
───────────────────────────────────────────────────────────────────────────

Alle async Funktionen erhalten try/catch Blöcke. Keine unbehandelt rejectable Promises. Error-Handling dokumentiert mit Fallback-Verhalten.

Floating Promises: Suche nach await-fehlenden Promise-Calls (z.B. fetch() ohne await in async Context). Diese müssen entweder awaited oder explizit im void-Context verwendet werden (void fetchData()).

Race Conditions: Bei parallelen Fetches oder State-Updates müssen Cleanup und abort Mechanismen vorhanden sein. useEffect Dependencies überprüfen um sicherzustellen dass alte Requests abgebrochen werden wenn Dependencies sich ändern.

AbortController: Fetch-Requests nutzen AbortController um in-flight Requests zu canceln wenn Component unmountet.


═══ BLOCK C — HYDRATION MISMATCHES ═══
Tasks 8–10 | Eliminiere Server/Client Divergenzen


ULTRATHINK-TASK 8: Server/Client Boundary Audit
───────────────────────────────────────────────────────────────────────────

Überprüfe JEDE "use client" Directive. Ist die Komponente tatsächlich client-only? Kann sie als Server Component refaktoriert werden? Minimiere Client Components wo möglich.

Server-only APIs (fs, path, process.env Secrets, headers(), cookies()) werden überprüft. Diese dürfen NICHT in Client Components verwendet werden. Wenn nötig, nutze Server Actions oder API Routes als Bridge.

Import-Ketten: Eine Server Component darf NICHT direktly ein Client Component importieren. Wenn Composition nötig ist, nutze children-Pattern oder wrapper Server Component mit Client Child.

Server/Client Props-Passing: Daten die vom Server zum Client gehen, werden überprüft auf Serializability. Keine Funktionen, Dates (außer ISO-Strings), WeakMaps.


ULTRATHINK-TASK 9: Dynamic Content Hydration Mismatch
───────────────────────────────────────────────────────────────────────────

Identifiziere Elemente die sich zwischen Initial-Server-Render und Client-Hydration unterscheiden. Dies sind die häufigsten Fehler:

Zeitstempel (Date.now(), new Date()): Werden auf Server anders sein als auf Client. Entweder auf Client-only verschieben (useEffect), oder mit suppressHydrationWarning markieren mit Kommentar warum.

Random-Werte: Math.random() erzeugt Server-seitig andere Werte als Client-seitig. Nutze deterministische seeding oder verschiebe zu useEffect.

Window/Document Dependencies: window.location, document.referrer, window.innerWidth — diese sind Server-seitig nicht verfügbar. Verschiebe zu useEffect mit Fallback-Values.

localStorage/sessionStorage: Diese sind nur Client-seitig verfügbar. Implementiere in useEffect oder useSyncExternalStore.

Conditional Rendering basierend auf Browser-Capabilities: Feature-Detection gehört in useEffect, nicht in Initial-Render.


ULTRATHINK-TASK 10: useEffect Hook Robustheit
───────────────────────────────────────────────────────────────────────────

JEDER useEffect erhält Cleanup-Funktion Überprüfung. Event-Listeners (addEventListener) brauchen removeEventListener Cleanup. Timers (setTimeout, setInterval) brauchen clearTimeout/clearInterval. Subscriptions brauchen unsubscribe.

Dependency Arrays: Überprüfe dass ALL Abhängigkeiten im Dependency-Array sind. Linting-Warnings (eslint-plugin-react-hooks) müssen ernst genommen werden. Keine arbiträren Suppressions ohne Dokumentation.

Infinite Loops: Erkenne Patterns wo useEffect sich selbst triggert (setState in useEffect ohne Condition). Implementiere Abort-Signals oder State-Guards um Loops zu brechen.

Multiple Effects: Wenn mehrere useEffects für zusammenhängende Logik nötig sind, dokumentiere die Reihenfolge und Abhängigkeiten zwischen ihnen.


═══ BLOCK D — VALIDATION & DEFECT-LOG UPDATE ═══
Tasks 11–13 | Verifiziere ZERO-DEFECT Status und Update Documentation


ULTRATHINK-TASK 11: TypeScript Strict Compilation
───────────────────────────────────────────────────────────────────────────

Führe npx tsc --noEmit aus. Output MUSS exakt ZERO Fehler sein. Keine Warnings die als Fehler fungieren. Dokumentiere Output mit Timestamp.

Wenn Fehler verbleiben, BLOCKIERE Phase 2 Completion bis alle behoben sind. Kategorisiere verbleibende Fehler in: Type Errors (Block A Fix), Logic Errors (Block B Fix), Hydration Errors (Block C Fix).


ULTRATHINK-TASK 12: Build-Warning Reduktion
───────────────────────────────────────────────────────────────────────────

Führe npm run build aus. Vergleiche Warning-Anzahl mit Phase-1 Baseline. Ziel: Weniger oder gleich viele Warnings wie Baseline, idealerweise signifikant weniger.

Dokumentiere jede Warning mit Quelle und Fix-Status. Nutze build.ignore Patterns nur wenn explicitly justified.


ULTRATHINK-TASK 13: Defect-Log Update & Statistik
───────────────────────────────────────────────────────────────────────────

Aktualisiere .qa-defect-log.md für JEDEN Defect aus Phase 1:
- Markiere als RESOLVED mit Timestamp und Kurz-Beschreibung des Fix
- Dokumentiere welcher Task (1–13) den Fix implementierte
- Kopiere Defect in RESOLVED-Sektion

Statistik-Berechnung: Zähle CRITICAL Defects behoben, HIGH Defects behoben, Gesamt RESOLVED. Dokumentiere verbleibende CRITICAL/HIGH. Ziel: ZERO CRITICAL, ≤5 HIGH.

Markiere .qa-pipeline-state.md auf complete für Phase 2 mit Final Statistics.


═══ ATOMIC VALIDATION LOOP ═══
───────────────────────────────────────────────────────────────────────────

Validierungsschwelle: JEDE Task in Block A–D muss vor nächster Task eine Partial-Validation durchlaufen. Tasks 1–4 validieren gegen npx tsc. Tasks 5–7 validieren gegen npm run build und Logic-Tests. Tasks 8–10 validieren gegen hydration logs (next dev Warnings). Tasks 11–13 sind Final-Validierungen.


═══ SELF-OPTIMIZING LOOP & HANDOFF ZU PHASE 3 ═══
───────────────────────────────────────────────────────────────────────────

Wenn Phase 2 komplett ist (Task 13 dokumentiert): Erzeuge Phase-3 Übergabedokument mit:
- Restliche technische Schulden (wenn vorhanden)
- Performance-Baseline (Lighthouse, Bundle-Size)
- Security-Baseline (dependency audit, exposed secrets scan)
- State-Management-Status

Phase 3 fokussiert auf Performance, Security, und State-Konsistenz.


═══ COMPLIANCE CHECKLIST ═══
───────────────────────────────────────────────────────────────────────────

□ Defect-Log geladen und gefiltert
□ Pipeline-State markiert als in_progress
□ Phase-1 Baseline npm run build erfolgreich
□ Task 1 komplett: Kein implicit any mehr
□ Task 2 komplett: Alle Props/Returns typisiert
□ Task 3 komplett: Generics constraint-korrekt
□ Task 4 komplett: tsconfig strict: true validated
□ Task 5 komplett: Null/Undefined safety implementiert
□ Task 6 komplett: Conditional logic audited
□ Task 7 komplett: Async/await with error handling
□ Task 8 komplett: Server/Client boundary verified
□ Task 9 komplett: Hydration mismatches resolved
□ Task 10 komplett: useEffect cleanup complete
□ npx tsc --noEmit = ZERO errors
□ npm run build warnings ≤ baseline
□ Defect-Log Phase 2 fully updated
□ Pipeline-State marked complete
□ CRITICAL defects: 0 remaining
□ HIGH defects: ≤5 remaining
□ Phase-3 Übergabedokument erzeugt
□ Code review durchgeführt
□ Keine Regressions in Features


CLOSING: PHASE 2 COMPLETE → PHASE 3 INCOMING

PHASE-2-SUMMARY:
Der Code ist die SSOT. Alle 13 Tasks über 4 Blöcke sind abgeschlossen. TypeScript ist strict und fehlerfrei. Logik ist robust. Hydration ist korrekt. Keine Regressions. Die Website ist ZERO-DEFECT auf Static-Analysis Ebene.
───────────────────────────────────────────────────────────────────────────

Phase 2 abgeschlossen: Static Error Hunting I hat ALLE TypeScript-Fehler, logischen Mängel und Hydration-Mismatches systematisch beseitigt. Website ist ZERO-DEFECT auf Static-Analysis Ebene. npm run build und npx tsc --noEmit produzieren saubere Output.

Phase 3 startet: Static Error Hunting II fokussiert auf Performance-Optimierungen, Security-Audits und State-Management-Konsistenz. Build-Output wird mit Lighthouse validiert. Dependencies werden auf bekannte Vulnerabilities gescannt.


═══════════════════════════════════════════════════════════════════════════════
═══ PHASE-2-COMPLETION-CHECKLIST (25+ ITEMS) ═══
═══════════════════════════════════════════════════════════════════════════════

BLOCKADE: Alle folgenden Items müssen TRUE sein für Phase-2-Abschluss:

├─ TYPESCRIPT KOMPILATION
│  ☐ Task 1: npx tsc --noEmit → ZERO Errors
│  ☐ Task 2: Alle Props-Interfaces typisiert (keine impliziten any)
│  ☐ Task 3: Generic Constraints korrekt (Array.find(), Object.keys() typed)
│  ☐ Task 4: tsconfig.json strict: true validiert und aktiv
│  ☐ Keine Type-Assertions (!) außer explizit dokumentiert
│
├─ LOGIK-FEHLER
│  ☐ Task 5: Null/Undefined Safety durchgecheckt (alle .find() haben Bounds-Check)
│  ☐ Task 6: Conditional Logic audited (kein unreachable Code, keine Falsy-Bugs)
│  ☐ Task 7: Async/Await mit try/catch (keine unbehandelt Promises)
│  ☐ Race Conditions eliminiert (AbortController in useEffect)
│
├─ HYDRATION
│  ☐ Task 8: Server/Client Boundary audited (kein fs in Client-Komponenten)
│  ☐ Task 9: Dynamische Inhalte in useEffect verschoben (Date.now(), Math.random())
│  ☐ Task 10: useEffect cleanup-Funktionen vorhanden (addEventListener → removeEventListener)
│  ☐ Keine suppressHydrationWarning ohne Dokumentation
│
├─ BUILD & LINT
│  ☐ Task 11: npm run build → ZERO Errors, ZERO Warnings
│  ☐ Task 12: npm run lint → ZERO Errors, ZERO Critical Warnings
│  ☐ Task 13: Defect-Log aktualisiert mit [RESOLVED] Status
│  ☐ Alle CRITICAL Defects von Phase 1 sind RESOLVED
│  ☐ Alle HIGH Defects von Phase 1 sind RESOLVED (oder dokumentiert deferral)
│
├─ DOKUMENTATION
│  ☐ .qa-defect-log.md zeigt Phase-2-Entries mit Fix-Commits
│  ☐ .qa-pipeline-state.md Phase 2 = COMPLETED
│  ☐ Statistik dokumentiert: X Defects gefunden, Y behoben
│  ☐ Performance-Regression-Audit durchgeführt (Bundle-Size vs Phase-1?)
│
├─ REGRESSIONS
│  ☐ Keine neuen npm run build Errors durch Fixes
│  ☐ Keine neuen npm run lint Errors durch Fixes
│  ☐ Keine Features broken durch Type-Fixes
│  ☐ npm run dev läuft stabil (keine neuen Console-Errors)

BLOCKADE: Wenn irgendein Item FALSE ist, Phase 2 ist NICHT abgeschlossen. Fix + Repeat.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-63 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-43 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (Phase-2 Stats: X→0 Errors)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-44)
   □ Performance-Regression-Check: Bundle-Size vs Phase-1 dokumentieren

3. INTER-PIPELINE-KONTEXT:
   ─ Aktualisiere .ai-qa-context.md mit Phase-2-Ausgangszustand
   ─ Dokumentiere welche Defects in Phase 2 vs Phase 3 verschoben wurden
   ─ Markiere in .pipeline-master-state.md Type-Fehler-Eintrag als gelöst

4. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-64 → QA-PHASE-03.md
   → Lese QA-PHASE-03.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Nutze Phase-1/2-Defect-Log als Referenz für Performance/Security-Audits in Phase-3
   → Erstelle detaillierte Task-Liste für Phase SEQ-44

═══ PHASE SEQ-43 → SEQ-44: HANDOFF AKTIV ═══
