═══════════════════════════════════════════════════════════════════════════════
MASTER-ORCHESTRATOR — VERKETTUNGS-ENGINE FUER ALLE 72 PHASEN
═══════════════════════════════════════════════════════════════════════════════

Dieses Dokument definiert die INTERNE Verkettungslogik. Es wird von CLAUDE.md
referenziert und von START.md getriggert. Es ist NICHT dazu gedacht, direkt
als Prompt verwendet zu werden.

SSOT-DIREKTIVE: Der Code ist die einzige Wahrheit. Wenn Dokumentation und Code
divergieren, GEWINNT IMMER DER CODE. Diese Regel durchdringt JEDEN Schritt dieses Orchestrators.

AUTONOME VERKETTUNGSDIREKTIVE: Jede Phase endet mit einem deterministischen Auto-Trigger
zur naechsten Phase. Der Infinite Optimizing Loop hat keine toten Enden, keine Pausen,
keine Rueckfragen. Wenn Unsicherheit besteht → Lese CLAUDE.md, CONTEXT-HUB.md und dieses Dokument.

SEQUENTIELLES-DOMINO-PROTOKOLL (VERSTAERKUNG DER AUTONOMEN VERKETTUNG):
Die AUTONOME VERKETTUNGSDIREKTIVE wird durch das SEQUENTIELLE-DOMINO-PROTOKOLL VERSTAERKT.
Der Auto-Trigger in SCHRITT D.6 wird SOFORT nach Abschluss einer Phase ausgefuehrt.
Die Pipeline arbeitet wie ein Domino-Effekt: Eine Phase faellt, die naechste startet SOFORT.
- IMMER nur EIN Phasen-Dokument gleichzeitig im Speicher. KEIN paralleles Lesen.
- Nach Abschluss einer Phase: EXIT-PROTOKOLL ausfuehren, dann SOFORT das naechste Phasen-Dokument laden.
- KEIN Warten auf den Nutzer. KEINE Pausen. KEINE Rueckfragen.
- Die einzige Unterbrechung ist ein KRITISCHER FEHLER (siehe ERROR-RECOVERY.md).
Details: Siehe SEQUENTIELLES-DOMINO-PROTOKOLL in jedem Phasen-Dokument und in START.md.

ENFORCEMENT-DIRECTIVES-REFERENZ (PFLICHTLEKTUERE):
Dieses Dokument wird durch ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md VERSTAERKT.
Die vier unverletzlichen Direktiven (Verschaerftes Domino-Protokoll, Zehnfach-Validierung,
Null-Externe-Software) UEBERSCHREIBEN bei Konflikten JEDE Anweisung in diesem Dokument.
Lese ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md VOR dem Start der ersten Phase.

DESIGN-KREATIVITAETS-DIREKTIVE: ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md
  (Pflichtlektuere fuer Design-Phasen SEQ-42 bis SEQ-51 — Goldener Schnitt,
   Farbpsychologie, Visuelle Fuehrung, Preview-Validierung)

MASTER-LOOP-ORCHESTRATOR-REFERENZ:
Dieses Dokument definiert den Phase-Lifecycle fuer die 72 Kern-Phasen (Ring 1).
Fuer die erweiterte 156-Phasen-Architektur mit 9 Erweiterungs-Pipelines (Ring 2)
und dem geschlossenen Meta-Loop (Ring 3) konsultiere:
ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md
Dort sind definiert: Injection-Points, linearisierte Ausfuehrungssequenz,
Erweiterungs-Pipeline-Kontextdateien, Defect-Routing ueber alle 27 Module.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 1: PHASE-LIFECYCLE (GILT FUER JEDE DER 72 PHASEN)
═══════════════════════════════════════════════════════════════════════════════

Jede Phase durchlaeuft exakt diesen 4-Schritt-Zyklus. Keine Abkuerzungen. Keine Ueberspringungen.

───────────────────────────────────────────────────────────────────────────────
SCHRITT A: EINGANG (CONTEXT LOAD)
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK SCHRITT A — KONTEXT-LADUNG:

  A.1) MASTER-STATE LADEN:
       Lese .pipeline-master-state.md → Aktueller Zustand, Framework-Mapping, Baseline, Defect-Log.
       PRUEFE: Stimmt die aktuelle Phase (SEQ-XX) mit der erwarteten ueberein?
       PRUEFE: Ist der Status korrekt (sollte IN_PROGRESS oder PENDING sein)?
       Falls Inkonsistenz → Korrigiere den State BEVOR die Phase beginnt.

  A.2) PROJEKT-GEDAECHTNIS LADEN:
       Lese .project-knowledge-base.md VOLLSTAENDIG.
       Extrahiere: Gotchas, Architektur-Entscheidungen, bekannte Probleme, Workarounds.
       JEDE Phase die diesen Schritt ueberspringt, riskiert bekannte Fehler zu wiederholen.
       Dies ist NICHT optional. Es ist PFLICHT.

  A.3) SEQUENZ-NUMMER IDENTIFIZIEREN:
       Identifiziere die aktuelle Sequenz-Nummer (SEQ-XX) aus dem Sequenz-Tracker.
       Verifiziere: Alle vorherigen Phasen sind COMPLETED.
       Falls eine vorherige Phase NICHT COMPLETED ist → STOPP. Konsultiere CONTINUE.md.

  A.4) PHASE-DATEI LADEN:
       Lese die entsprechende Phase-Datei vollstaendig.
       Verinnerliche JEDEN Task, JEDE Anforderung, JEDES Validation-Gate.
       KEINE selektive Lesung. KEIN Ueberfliegen. Vollstaendige kognitive Erfassung.

  A.5) FRAMEWORK-MAPPING ANWENDEN:
       Lade das Framework-Mapping aus .pipeline-master-state.md.
       Uebersetze JEDEN Next.js-spezifischen Verweis in der Phase-Datei in das tatsaechliche Framework.
       EDGE-CASE: Phase-Datei erwaehnt ein Feature das im Framework nicht existiert (z.B. Server Components in Vite)?
       → Dokumentiere als "NICHT ANWENDBAR" und ueberspringe den spezifischen Task.
       → Dokumentiere WARUM in den Handoff-Notizen.

  A.6) PIPELINE-KONTEXT LADEN (FALLS PIPELINE-WECHSEL):
       Falls dies die ERSTE Phase einer neuen Pipeline ist:
       Lese die Kontextdatei der VORHERIGEN Pipeline:
       Pipeline 1 Eintritt (SEQ-11) → Lese .ai-discovery-context.md
       Pipeline 2 Eintritt (SEQ-21) → Lese .ai-expansion-context.md
       Pipeline 3 Eintritt (SEQ-41) → Lese .ai-architectural-context.md
       Pipeline 4 Eintritt (SEQ-52) → Lese .ai-design-context.md
       Pipeline 5 Eintritt (SEQ-57) → Lese .ai-security-context.md
       Pipeline 6 Eintritt (SEQ-62) → Lese .ai-discovery-context-p5.md
       OMNI Eintritt (SEQ-72) → Lese ALLE Kontextdateien

  A.7) CONTEXT-HUB KONSULTIEREN (BEI UNKLARHEIT):
       Falls unklar ist welche Kontextdatei gelesen werden muss:
       Lese CONTEXT-HUB.md SEKTION 1 (Kontextdatei-Register) → Dort steht exakt wer was liest.

  A.8) CODE-INVENTUR-ABGLEICH:
       VOR der Task-Generation: Lese die Code-Inventur aus .pipeline-master-state.md.
       Fuer jeden Task der Phase: Existiert die betroffene Datei/Komponente BEREITS im Code?
       JA → Der Task ERWEITERT den bestehenden Code. KEIN Neuschreiben.
       NEIN → Der Task ERSTELLT die Datei/Komponente NEU.
       PLATZHALTER → Der Task IMPLEMENTIERT den Platzhalter.

───────────────────────────────────────────────────────────────────────────────
SCHRITT B: TASK-GENERATION (ERSTELLE DETAILLIERTE TASK-LISTE)
───────────────────────────────────────────────────────────────────────────────

ANTIGRAVITY-ARTIFACT-PFLICHT (SCHRITT B):
BEVOR die Task-Liste erstellt wird, MUSS das ANTIGRAVITY-ARTIFACT-PROTOKOLL aus dem
aktuellen Phasen-Dokument befolgt werden. Konkret:
  B.0.1) ARTIFACT 1 (TASK LIST) ERSTELLEN:
         Bereinige ALLE vorherigen Tasks. Erstelle eine NEUE, vollstaendige Task-Liste
         fuer diese Phase als Markdown-Checkliste mit den Bereichen ERLEDIGT / AKTUELLER TASK / KOMMENDE TASKS.
         Jeder Task ist ATOMAR: Eine messbare Aktion, betroffene Dateien, Validierungskriterium.
         Gruppierung in Bloecke A/B/C/D mit Validation-Gate zwischen jedem Block.
         Die Liste wird LAUFEND aktualisiert (neue Tasks bei Entdeckung, Streichung bei Obsoleszenz).
  B.0.2) ARTIFACT 2 (IMPLEMENTATION PLAN) ERSTELLEN:
         Erstelle einen NEUEN Implementierungsplan VOR jeder Code-Aenderung:
         1. ZUSAMMENFASSUNG (3-5 Saetze, Ziel der Phase)
         2. ANALYSE-ERGEBNISSE (Code, Context-Dateien, Gotchas aus .project-knowledge-base.md)
         3. GEPLANTE AENDERUNGEN ([DATEI] → [AKTION] → [WAS] → [WARUM])
         4. VALIDIERUNGSSTRATEGIE (Validation-Gates, Metriken, Tests)
         5. AUSFUEHRUNGSREIHENFOLGE (Block A/B/C/D mit Validation Gates)
  ERST NACH Erstellung von ARTIFACT 1 und ARTIFACT 2 beginnt die eigentliche Task-Generation
  und Ausfuehrung. Kein Code ohne vorherigen Plan. Keine Ausfuehrung ohne vorherige Planung.

ULTRATHINK-LANGZEITTASK SCHRITT B — TASK-LISTE ERSTELLEN:

  B.1) PHASE-TASKS IN FRAMEWORK-NATIVE INSTRUKTIONEN UEBERSETZEN:
       Jeder Task aus der Phase-Datei wird in eine konkrete, ausfuehrbare Instruktion umgewandelt.
       Abstrakt: "Erstelle eine Hero-Section mit Call-to-Action"
       Konkret: "Erstelle /src/components/sections/HeroSection.tsx mit Props-Interface
       HeroSectionProps { headline: string; subheadline: string; ctaText: string; ctaHref: string; },
       verwende Tailwind-Klassen aus dem bestehenden Design-Token-System,
       implementiere aria-label auf dem CTA-Button, responsive ab 375px."

  B.2) ATOMARE, MESSBARE SUB-AKTIONEN:
       Jeder Task wird in Sub-Aktionen zerlegt die einzeln validierbar sind.
       Jede Sub-Aktion hat:
       - BESCHREIBUNG: Was genau wird getan (1-2 Saetze)
       - BETROFFENE DATEIEN: Welche Dateien werden erstellt/geaendert
       - VALIDIERUNGSKRITERIUM: Wie wird geprueft ob die Sub-Aktion erfolgreich war
       - ABHAENGIGKEITEN: Welche anderen Sub-Aktionen muessen vorher abgeschlossen sein

  B.3) GRUPPIERUNG IN BLOECKE MIT VALIDATION-GATES:
       Tasks werden in Bloecke A, B, C, D gruppiert.
       Zwischen JEDEM Block: Validation-Gate (npm run build && npm run lint && npx tsc --noEmit).
       BLOCK-GROESSE: Maximal 5-8 Tasks pro Block. Nicht mehr.
       Ein Block soll in einer logischen Einheit abschliessbar sein.
       Typische Block-Aufteilung:
       Block A: Datenmodelle und Types
       Block B: Komponenten und UI
       Block C: Routing und Integration
       Block D: Polish, Accessibility, Edge-Cases

  B.4) PRUEFE GEGEN BEKANNTE GOTCHAS:
       Lese [SECTION:GOTCHAS] aus .project-knowledge-base.md.
       Fuer jeden Task: Gibt es ein bekanntes Gotcha das diesen Task betrifft?
       Falls JA → Integriere den Workaround PROAKTIV in den Task, nicht reaktiv nach dem Fehler.

───────────────────────────────────────────────────────────────────────────────
SCHRITT C: EXECUTION (ABARBEITUNG MIT ATOMIC VALIDATION)
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK SCHRITT C — AUSFUEHRUNG:

  C.1) BLOCK-WEISE ABARBEITUNG:
       Arbeite Block A ab → VALIDATION-GATE → npm run build && npm run lint && npx tsc --noEmit
       Arbeite Block B ab → VALIDATION-GATE → npm run build && npm run lint && npx tsc --noEmit
       Arbeite Block C ab → VALIDATION-GATE → npm run build && npm run lint && npx tsc --noEmit
       Arbeite Block D ab → VALIDATION-GATE → npm run build && npm run lint && npx tsc --noEmit

  C.2) VALIDATION-GATE PROTOKOLL:
       Bei JEDEM Validation-Gate:
       ERFOLG (build=SUCCESS, lint=0 errors, tsc=0 errors):
       → Weiter zum naechsten Block.
       → Dokumentiere Metriken in .pipeline-master-state.md unter LETZTE METRIKEN.

       FEHLER:
       → STOPP. SOFORT.
       → Identifiziere welcher Task des aktuellen Blocks den Fehler verursacht hat.
       → Fix den Fehler CHIRURGISCH (siehe ERROR-RECOVERY.md Protokoll R.1).
       → Re-Validate.
       → Falls Fix erfolgreich → Weiter.
       → Falls Fix fehlschlaegt nach 3 Versuchen → Dokumentiere als BLOCKED → Weiter zum naechsten Block.
         (Die OMNI-Phase wird BLOCKED-Fehler erneut aufgreifen.)
       → NIEMALS einen Fehler ignorieren. NIEMALS einen Block mit Fehlern abschliessen.

  C.3) INKREMENTELLES STATE-UPDATE:
       Nach jedem Block: Aktualisiere .pipeline-master-state.md mit:
       - Aktueller Block (A/B/C/D) und Status
       - Letzte Metriken
       - Entdeckte Defekte (falls vorhanden)
       Dies ermoeglicht Recovery nach Unterbrechung (siehe CONTINUE.md).

  C.4) CODE-QUALITAETS-INVARIANTEN:
       Waehrend der Ausfuehrung gelten zu JEDEM Zeitpunkt:
       - KEIN any-Typ (ausser mit dokumentierter Begruendung)
       - KEIN @ts-ignore
       - KEIN eslint-disable ohne inline-Kommentar der erklaert WARUM
       - KEIN console.log (ausser in Entwicklungs-Guards: if (process.env.NODE_ENV === 'development'))
       - KEIN Magic Number/String ohne benannte Konstante
       - KEIN inline-style wenn Tailwind verfuegbar
       - JEDE neue Komponente hat ein Props-Interface mit JSDoc
       - JEDE neue Funktion hat einen beschreibenden Namen und optional JSDoc
       - JEDER neue Hook hat einen use-Prefix und dokumentierte Rueckgabewerte

───────────────────────────────────────────────────────────────────────────────
SCHRITT D: AUSGANG (HANDOFF — AUTO-TRIGGER FUER DEN INFINITE LOOP)
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK SCHRITT D — HANDOFF UND VERKETTUNG:

  D.1) FINALE VALIDATION (PFLICHT — NICHT UEBERSPRINGBAR):
       npm run build → MUSS SUCCESS sein.
       npm run lint → MUSS 0 Errors sein.
       npx tsc --noEmit → MUSS 0 Errors sein.
       Falls EINER fehlschlaegt → Zurueck zu Schritt C. Die Phase ist NICHT abgeschlossen.

  D.2) .PIPELINE-MASTER-STATE.MD AKTUALISIEREN:
       - Markiere SEQ-XX als COMPLETED mit ISO-8601 Timestamp
       - Dokumentiere finale Build-Metriken (Build-Zeit, Error-Count, Warning-Count)
       - Schreibe HANDOFF-NOTIZEN:
         Was wurde in dieser Phase erreicht? (Zusammenfassung, 3-5 Saetze)
         Was ist relevant fuer die naechste Phase? (Abhaengigkeiten, Voraussetzungen)
         Welche Entscheidungen wurden getroffen und WARUM?
         Welche bekannten Einschraenkungen bestehen?
       - Aktualisiere Defect-Log (neue Defekte, behobene Defekte)
       - Aktualisiere Code-Inventur (neue Dateien, geaenderte Dateien, geloeschte Dateien)

  D.3) .PROJECT-KNOWLEDGE-BASE.MD AKTUALISIEREN (PFLICHT — NICHT UEBERSPRINGBAR):
       - Neues Wissen extrahieren:
         Architektur-Entscheidungen die in dieser Phase getroffen wurden
         Neue Gotchas die entdeckt wurden
         Patterns die etabliert wurden und in Zukunft beibehalten werden muessen
         Performance-kritische Entscheidungen
       - [SECTION:CHANGELOG] mit Phase-Eintrag ergaenzen:
         Format: [DATUM] [SEQ-XX] Beschreibung der Aenderungen
       - [SECTION:BEKANNTE-PROBLEME] aktualisieren falls noetig
       - VERSION inkrementieren

  D.4) SELF-OPTIMIZATION CHECK (LLM-LESBARKEIT):
       Pruefe JEDEN in dieser Phase erstellten oder geaenderten Code:
       - Sind alle neuen Dateien klar und sprechend benannt?
         (getUserProfile.ts > getData.ts, HeroSection.tsx > Section1.tsx)
       - Haben alle exportierten Funktionen/Komponenten JSDoc-Kommentare?
         Minimum: @description, @param (fuer Funktionen), @returns
       - Folgen neue Komponenten dem etablierten Muster?
         (Wenn bestehende Komponenten PascalCase nutzen → neue auch)
       - Ist der Code fuer einen LLM beim ERSTEN Lesen sofort verstaendlich?
         Test: Kann ein LLM ohne zusaetzlichen Kontext verstehen was dieser Code tut?
       - Gibt es Magic Numbers die eine benannte Konstante brauchen?
       - Gibt es Dateien mit mehr als 200 Zeilen die aufgeteilt werden sollten?
       Falls NEIN bei einem Punkt → Refactor BEVOR die Phase als abgeschlossen gilt.
       Dokumentiere Lesbarkeits-Verbesserungen in Handoff-Notizen.

  D.4b) ARTIFACT 3 (WALKTHROUGH) ERSTELLEN (PFLICHT — TEIL DES EXIT-PROTOKOLLS):
        Nach Abschluss ALLER Tasks dieser Phase erstelle einen Walkthrough als Abschlussbericht:
        DURCHGEFUEHRTE AENDERUNGEN:
          Jede erstellte, geaenderte, geloeschte Datei mit Begruendung.
        VALIDIERUNGSERGEBNISSE:
          Finale Metriken: build, lint, tsc — Vorher vs. Nachher.
        ERKENNTNISSE UND NEUE GOTCHAS:
          Architektur-Entscheidungen, entdeckte Patterns, Warnungen fuer Folge-Phasen.
        TEST-ANLEITUNG:
          Wie kann die Korrektheit dieser Phase verifiziert werden?
        Der Walkthrough wird in die Context-Dateien (.project-knowledge-base.md, Pipeline-State)
        und den strukturierten Abschlussbericht geschrieben.
        KEIN EXIT ohne WALKTHROUGH. KEIN Abschlussbericht ohne vorherige Dokumentation.

───────────────────────────────────────────────────────────────────────────────
SCHRITT D.5 — PREVIEW-VALIDIERUNG (NUR DESIGN-PHASEN SEQ-42 BIS SEQ-51)
───────────────────────────────────────────────────────────────────────────────

  Dieser Schritt wird AUSSCHLIESSLICH fuer Design-Phasen ausgefuehrt.
  Er ergaenzt den Standard-Lifecycle um eine visuelle Qualitaetssicherung.

  D.5.1 — Screenshot-Generierung:
    Automatisierte Screenshots aller veraenderten Komponenten/Seiten in:
      Mobile (375px), Tablet (768px), Desktop (1440px)

  D.5.2 — Phi-Proportions-Check:
    Pruefung ob Layout-Proportionen den Goldener-Schnitt-Regeln entsprechen
    (61.8% / 38.2% Verhaeltnisse, Container-Verschachtelung)

  D.5.3 — Farb-Audit:
    60-30-10-Farbverteilung, WCAG-AAA-Kontraste, Farbenblindheit-Simulation

  D.5.4 — Fokuspunkt-Test:
    Analyse ob primaerer Fokuspunkt innerhalb von 5 Sekunden erkennbar ist

  D.5.5 — Visueller Regressions-Check:
    Vergleich mit vorherigem Stand (max 5% Pixel-Abweichung in unkritischen Bereichen)

  REFERENZ: ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md SEKTION 5

  D.6) PIPELINE-KONTEXT AKTUALISIEREN (FALLS LETZTE PHASE EINER PIPELINE):
       Falls dies die letzte Phase einer Pipeline ist (SEQ-10, SEQ-20, SEQ-40, SEQ-51, SEQ-61):
       Konsultiere SEKTION 2 (Inter-Pipeline Transition Rules).
       Erstelle oder finalisiere die Pipeline-Kontextdatei.

  D.7) PHASE ABSCHLIESSEN UND AUTO-TRIGGER (SEQUENTIELLES-DOMINO-PROTOKOLL):
       Aktualisiere .pipeline-master-state.md:
         AKTUELLE PHASE: SEQ-[XX+1]
         AKTUELLER STATUS: IN_PROGRESS
       Gib den strukturierten Abschlussbericht aus:
         PHASE [SEQ-XX] ABGESCHLOSSEN
         ERGEBNISSE: [Zusammenfassung der erledigten Tasks, 3-5 Saetze]
         CONTEXT-UPDATES: [Welche Kontextdateien aktualisiert wurden]
         NAECHSTE PHASE: [SEQ-XX+1] ([Phasen-Dateiname])
         AUTO-TRIGGER: SOFORT
       DOMINO-VERKETTUNG: Lese SOFORT das naechste Phasen-Dokument.
       Beginne SOFORT mit SCHRITT A (Context Load) fuer die naechste Phase.
       KEIN Warten. KEINE Pause. KEIN Prompt erforderlich.
       Der Infinite Optimizing Loop duldet keinen Stillstand.

═══════════════════════════════════════════════════════════════════════════════
SEKTION 2: INTER-PIPELINE TRANSITION RULES
═══════════════════════════════════════════════════════════════════════════════

Beim Uebergang zwischen Pipelines gelten zusaetzliche Regeln.
Diese Uebergaenge sind die kritischsten Punkte der gesamten Pipeline.
Ein fehlerhafter Uebergang propagiert Fehler in ALLE nachfolgenden Phasen.

───────────────────────────────────────────────────────────────────────────────
PIPELINE 0 → 1 (SEQ-10 → SEQ-11): DISCOVERY → EXPANSION
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 0→1:

  T0.a) DISCOVERY-PHASE-10 ERSTELLT .ai-discovery-context.md:
        Diese Kontextdatei wird in DISCOVERY-PHASE-10 (Kontext-Konsolidierung) erstellt.
        Pflicht-Sektionen: Siehe CONTEXT-HUB.md DATEI 1b.
        PRUEFE: Existiert die Datei? Sind alle 11 Pflicht-Sektionen befuellt?
        FALLS FEHLEND → DISCOVERY-PHASE-10 wurde nicht korrekt abgeschlossen.
        → Rekonstruiere aus den Einzelergebnissen der Discovery-Phasen 01-09.

  T0.b) Pipeline 1 Phase 1 (EXPANSION-PHASE-01, SEQ-11) MUSS .ai-discovery-context.md lesen — PFLICHT.

  T0.c) NULLVERAENDERUNGS-GARANTIE PRUEFEN:
        Die Discovery-Pipeline darf KEINE Code-Aenderungen vorgenommen haben.
        Fuehre aus: git diff --stat (falls Git verfuegbar) → MUSS leer sein.
        Falls Aenderungen erkannt → KRITISCHER DEFEKT. Revertiere und dokumentiere.

───────────────────────────────────────────────────────────────────────────────
PIPELINE 1 → 2 (SEQ-20 → SEQ-21): EXPANSION → ENGINEERING
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 1→2:

  T1.a) ERSTELLE .ai-expansion-context.md:
        Nutze das LLM-SCAN-FORMAT aus CONTEXT-HUB.md.
        Pflicht-Sektionen:
        [SECTION:ROUTE-MAP] → Alle Routen mit Pfad, Datei, Status, Datenquellen
        [SECTION:FILE-INVENTAR] → Alle erstellten/geaenderten Dateien dieser Pipeline
        [SECTION:DATEN-MODELLE] → Alle Interfaces, Types, Datenstrukturen
        [SECTION:CONTENT-STRUKTUR] → Content-Hierarchie, Navigations-Architektur
        [SECTION:NAVIGATIONS-ARCHITEKTUR] → Menue-Struktur, Link-Topologie
        [SECTION:ENTSCHEIDUNGEN] → Architektur-Entscheidungen mit Begruendung
        [SECTION:BEKANNTE-PROBLEME] → Offene Issues, technische Schulden
        [SECTION:HANDOFF-NOTIZEN] → Was muss Pipeline 2 wissen

  T1.b) Pipeline 2 Phase 1 MUSS .ai-expansion-context.md lesen — das ist PFLICHT.

───────────────────────────────────────────────────────────────────────────────
PIPELINE 2 → 3 (SEQ-40 → SEQ-41): ENGINEERING → DESIGN
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 2→3:

  T2.a) ERSTELLE .ai-architectural-context.md:
        Pflicht-Sektionen:
        [SECTION:KOMPONENTEN-MAP] → Alle Komponenten mit Props, Abhaengigkeiten, Patterns
        [SECTION:DESIGN-PATTERNS] → Verwendete Patterns (Composition, Compound, etc.)
        [SECTION:SEO-STATUS] → Metadata-Abdeckung, JSON-LD, Sitemap, Robots
        [SECTION:PERFORMANCE-BASELINE] → LCP, CLS, INP, Bundle-Size, Lighthouse-Score
        [SECTION:SECURITY-AUDIT] → CSP, DSGVO, Secrets-Management
        [SECTION:API-STRUKTUR] → Endpoints, Formspree-Config, Calendly-Config
        [SECTION:TESTING-STATUS] → Test-Coverage, Test-Typen, fehlende Tests

  T2.b) Pipeline 3 Phase 1 MUSS .ai-architectural-context.md lesen.
  T2.c) DESIGN-TOKENS.md wird als Referenz-Dokument geladen (SEQ-41).

───────────────────────────────────────────────────────────────────────────────
PIPELINE 3 → 4 (SEQ-51 → SEQ-52): DESIGN → SECURITY
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 3→4:

  T3.a) ERSTELLE .ai-design-context.md:
        Pflicht-Sektionen:
        [SECTION:BRAND-DNA] → Farb-Philosophie, Typografie-Entscheidungen, visueller Stil
        [SECTION:TOKEN-SYSTEM] → Vollstaendiges Token-Register (Farben, Spacing, Typo, Animation)
        [SECTION:FARB-MAPPINGS] → Semantische Farb-Zuordnungen (primary, secondary, accent, status)
        [SECTION:TYPOGRAFIE-SYSTEM] → Font-Stack, Groessen-Skala, Gewichte, Zeilenhoehen
        [SECTION:ANIMATIONS-REGELN] → Motion-Tokens, Durations, Easings, prefers-reduced-motion
        [SECTION:ACCESSIBILITY-AUDIT] → WCAG AAA Status, Kontrast-Verhaeltnisse, Fokus-Management

  T3.b) Pipeline 4 Phase 1 MUSS .ai-security-context.md lesen (nicht .ai-design-context.md).

───────────────────────────────────────────────────────────────────────────────
PIPELINE 4 → 5 (SEQ-56 → SEQ-57): SECURITY → AI-DISCOVERY
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 4→5:

  T4.a) ERSTELLE .ai-security-context.md:
        Pflicht-Sektionen:
        [SECTION:SECURITY-AUDIT] → Threat-Model, Identifizierte Vulnerabilities, CVSS-Scores
        [SECTION:CSP-HEADERS] → Implementierte CSP-Policy, Nonce-Handling, Frame-Ancestors
        [SECTION:INPUT-VALIDIERUNG] → Validierungs-Strategien pro Feature, Sanitization-Regeln
        [SECTION:SECRETS-MANAGEMENT] → Umgebungsvariablen-Handling, Key-Rotation, Audit-Logs
        [SECTION:COMPLIANCE-STATUS] → DSGVO-Checkliste, WCAG-Compliance, Datenschutz-Status
        [SECTION:ZERTIFIZIERUNGEN] → Erhaltene Zertifikate, Audit-Reports, Compliance-Nachweise

  T4.b) Pipeline 5 Phase 1 MUSS .ai-security-context.md lesen.

───────────────────────────────────────────────────────────────────────────────
PIPELINE 5 → 6 (SEQ-61 → SEQ-62): AI-DISCOVERY → QA
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 5→6:

  T5.a) ERSTELLE .ai-discovery-context-p5.md:
        Pflicht-Sektionen:
        [SECTION:CODE-PATTERN-ANALYSE] → Identifizierte Patterns, Verbesserungsempfehlungen
        [SECTION:PERFORMANCE-OPTIMIERUNGEN] → Empfohlene Optimierungen, geschaetzte Verbesserungen
        [SECTION:ACCESSIBILITY-FIXES] → Automatisch identifizierte A11y-Maengel, Fixes
        [SECTION:CODE-QUALITAETS-OPTIMIERUNGEN] → Duplikationen, Anti-Patterns, Refactoring
        [SECTION:RECOMMENDATIONS-SUMMARY] → Zusammenfassung aller KI-Empfehlungen mit Prioritaeten

  T5.b) Pipeline 6 Phase 1 MUSS .ai-discovery-context-p5.md lesen.

───────────────────────────────────────────────────────────────────────────────
PIPELINE 6 → OMNI (SEQ-71 → SEQ-72): QA → OMNI-CLOSED-LOOP
───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASK TRANSITION 6→OMNI:

  T6.a) ERSTELLE .ai-qa-context.md:
        Pflicht-Sektionen:
        [SECTION:TEST-ERGEBNISSE] → Unit-Tests, E2E-Tests, Lighthouse-Scores
        [SECTION:COMPLIANCE-STATUS] → WCAG AAA, DSGVO, Performance-Budgets
        [SECTION:OFFENE-SCHULDEN] → Technische Schulden die nicht behoben werden konnten
        [SECTION:REGRESSIONS-TESTS] → Definierte Regressions-Tests und deren Status

  T6.b) ERSTELLE/AKTUALISIERE .qa-defect-log.md:
        Kumulatives Fehler-Protokoll ALLER gefundenen und behobenen Defekte.
        Format pro Eintrag:
        | ID | SEQ | Severity | File | Description | Root-Cause | Fix | Status |

  T6.c) AKTUALISIERE .project-knowledge-base.md:
        Finale QA-Erkenntnisse, Performance-Benchmarks, bekannte Limitierungen.

  T6.d) OMNI-PHASE MUSS ALLE Kontextdateien lesen:
        .pipeline-master-state.md
        .project-knowledge-base.md
        .ai-expansion-context.md
        .ai-architectural-context.md
        .ai-design-context.md
        .ai-security-context.md
        .ai-discovery-context-p5.md
        .ai-qa-context.md
        .qa-defect-log.md

  T6.e) ERWEITERUNGS-PIPELINE-KONTEXTE LADEN:
        Die OMNI-Phase MUSS zusaetzlich ALLE Ring-2-Kontextdateien lesen:
        .ai-cicd-context.md, .ai-api-context.md, .ai-testing-context.md,
        .ai-i18n-context.md, .ai-monitoring-context.md, .ai-content-context.md,
        .ai-db-context.md, .ai-tenant-context.md, .ai-seo-metrik-context.md
        Diese Dateien werden von ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md verwaltet.
        Falls eine Datei fehlt → Die zugehoerige Erweiterungs-Pipeline wurde nicht ausgefuehrt.
        Dokumentiere als WARNUNG, nicht als FEHLER (Erweiterungs-Pipelines sind optional).

═══════════════════════════════════════════════════════════════════════════════
SEKTION 3: .PIPELINE-MASTER-STATE.MD SCHEMA
═══════════════════════════════════════════════════════════════════════════════

Das folgende Schema ist BINDEND. Jede Abweichung ist ein Parse-Fehler fuer spaete Phasen.

TECH-STACK-PROFIL (AUTO-DETECTED):
  Framework: [auto-detected] ([exakte Version])
  React: [version]
  TypeScript: [version] ([strict: true/false])
  Styling: [approach + version]
  Routing: [type]
  State: [library oder "none"]
  Build: [command]
  Dev: [command → port]
  Lint: [command → tool + version]
  TypeCheck: [command]
  Test: [command → tool oder "none"]
  Node: [version]
  Package-Manager: [tool + version]

FRAMEWORK-MAPPING:
  [Next.js Concept] → [Actual Implementation]
  /app/page.tsx → [...]
  /app/[slug]/page.tsx → [...]
  export const metadata → [...]
  generateStaticParams → [...]
  <Link> → [...]
  <Image> → [...]
  useRouter() → [...]
  'use client' → [...]
  next.config.js → [...]
  /app/layout.tsx → [...]
  /app/loading.tsx → [...]
  /app/error.tsx → [...]
  /app/not-found.tsx → [...]
  Server Actions → [...]
  middleware.ts → [...]

VERBOTEN-REGELN-AUDIT:
  [REGEL] → [VERSTOESSE] → [DATEIEN] → [WIRD IN SEQ-XX BEHOBEN]

CODE-INVENTUR:
  ROUTEN:
    [ROUTE] → [DATEI] → [STATUS] → [TYP] → [DATEN]
  KOMPONENTEN:
    [KOMPONENTE] → [PFAD] → [PROPS] → [IMPORTS] → [VERWENDET VON]
  DATEN:
    [MODELL] → [PFAD] → [FELDER] → [REFERENZIERT VON]
  STYLING:
    [TOKEN-TYP] → [NAME] → [WERT] → [DEFINIERT IN]

BASELINE (Stand: [ISO-8601]):
  npm run build: [SUCCESS/FAILED] ([Xs]) [Warnungen]
  npm run lint: [X errors, Y warnings]
  npx tsc --noEmit: [X errors]
  Routen: [X total, Y aktiv, Z leer]
  Komponenten: [X total]
  Datendateien: [X total]
  Design-Tokens: [X Farben, Y Spacing, Z Fonts]
  PRE-EXISTING-DEFECTS: [X total]

SEQUENZ-TRACKER:
  SEQ-01 (DISCOVERY-PHASE-01): [PENDING/IN_PROGRESS/COMPLETED/BLOCKED] [Timestamp]
  SEQ-02 (DISCOVERY-PHASE-02): [PENDING/IN_PROGRESS/COMPLETED/BLOCKED] [Timestamp]
  ... (alle 72 Eintraege — keine Abkuerzung)

AKTUELLE PHASE: SEQ-[XX]
AKTUELLE PIPELINE: [0-DISCOVERY / 1-EXPANSION / 2-ENGINEERING / 3-DESIGN / 4-QA / OMNI]
AKTUELLER STATUS: [IN_PROGRESS / BLOCKED / COMPLETED]
AKTUELLER BLOCK: [A / B / C / D]

LETZTE METRIKEN:
  tsc: [X errors]
  lint: [X errors, Y warnings]
  build: [SUCCESS/FAILED] ([Xs])
  Timestamp: [ISO-8601]

DEFECT-LOG (KUMULATIV):
  | ID | SEQ | Severity | File | Description | Root-Cause | Fix | Status |
  |----|-----|----------|------|-------------|------------|-----|--------|
  (Jeder Eintrag bleibt permanent — auch nach Fix. Status wechselt zu FIXED.)

HANDOFF-NOTIZEN (AKTUELLE PHASE):
  [Strukturierter Text: Was wurde erreicht, was ist relevant fuer die naechste Phase,
   welche Entscheidungen wurden getroffen und warum, welche Einschraenkungen bestehen]

PRE-EXISTING-DEFECTS (AUS START-SEQUENZ):
  [DEFEKT] → [DATEI] → [BESCHREIBUNG] → [WIRD IN SEQ-XX BEHOBEN]

═══════════════════════════════════════════════════════════════════════════════
SEKTION 4: FEHLER-ROUTING-MATRIX (AUTORITATIVES SCHEMA)
═══════════════════════════════════════════════════════════════════════════════

Fehler werden IMMER an die Root-Cause-Pipeline zurueckgeroutet.
Dieses Schema ist AUTORITATIV — es ueberschreibt jede andere Fehler-Klassifizierung.

ULTRATHINK-LANGZEITTASK — FEHLER-ROUTING MIT ERWEITERTEN UNTER-TYPEN:

───────────────────────────────────────────────────────────────────────────────
PIPELINE 1 (EXPANSION) — DATEN- UND STRUKTUR-FEHLER:
───────────────────────────────────────────────────────────────────────────────
  Fehlende Route, Orphan Page                      → Pipeline 1
  Gebrochene Datenreferenz, Slug-Mismatch          → Pipeline 1
  Fehlende/inkorrekte Navigation-Links              → Pipeline 1
  Unvollstaendiges Datenmodell                      → Pipeline 1
  Content-Luecke (Seite ohne Inhalt)               → Pipeline 1
  Falsche Route-Verschachtelung                     → Pipeline 1

───────────────────────────────────────────────────────────────────────────────
PIPELINE 2 (ENGINEERING) — CODE-QUALITAETS- UND ARCHITEKTUR-FEHLER:
───────────────────────────────────────────────────────────────────────────────
  TypeScript Error, Missing Types                   → Pipeline 2
  Performance-Regression, Bundle-Size               → Pipeline 2
  Security-Luecke, CSP-Fehler                      → Pipeline 2
  Fehlende Error-Boundary, unbehandelte Exception   → Pipeline 2
  State-Management-Fehler, Race Condition           → Pipeline 2
  API-Integration-Fehler (Formspree, Calendly)     → Pipeline 2
  Fehlende/inkorrekte Validierung                   → Pipeline 2
  Build-Konfigurationsfehler                        → Pipeline 2

───────────────────────────────────────────────────────────────────────────────
PIPELINE 3 (DESIGN) — VISUELLE UND UX-FEHLER:
───────────────────────────────────────────────────────────────────────────────
  Farb-Inkonsistenz, Magic-Value im Styling         → Pipeline 3
  Responsive-Break, Touch-Target zu klein           → Pipeline 3
  Kontrast-Fehler, Farb-Token-Fehler                → Pipeline 3
  Typografie-Inkonsistenz, falsche Font-Gewichte    → Pipeline 3
  Spacing-Inkonsistenz, Grid-Verletzung             → Pipeline 3
  Animation-Fehler, fehlende reduced-motion         → Pipeline 3
  Design-Token-Verletzung                           → Pipeline 3

───────────────────────────────────────────────────────────────────────────────
PIPELINE 4 (QA) — QUALITAETS- UND COMPLIANCE-FEHLER:
───────────────────────────────────────────────────────────────────────────────
  Dead Code, console.log in Produktion              → Pipeline 4
  Fehlende Metadata, SEO-Luecke                    → Pipeline 4
  Fehlender Test, unzureichende Coverage            → Pipeline 4
  WCAG-Verletzung, fehlende ARIA-Attribute          → Pipeline 4
  DSGVO-Verletzung, fehlende Consent-Mechanismen    → Pipeline 4
  Fehlende Dokumentation, Storybook-Luecke         → Pipeline 4

───────────────────────────────────────────────────────────────────────────────
SELF-OPTIMIZATION (AKTUELLE PHASE) — LESBARKEITS-FEHLER:
───────────────────────────────────────────────────────────────────────────────
  Unlesbarer Code, fehlende JSDoc                   → SELF-OPTIMIZATION
  Inkonsistentes Muster, Magic Numbers              → SELF-OPTIMIZATION
  Datei mit > 200 Zeilen ohne Aufteilung           → SELF-OPTIMIZATION
  Nicht-sprechende Variablennamen                   → SELF-OPTIMIZATION

───────────────────────────────────────────────────────────────────────────────
META-FEHLER (PIPELINE-INFRASTRUKTUR):
───────────────────────────────────────────────────────────────────────────────
  Fehlende Kontext-Datei-Aktualisierung             → CONTEXT-HUB Pflicht-Verletzung
  Veraltete Knowledge Base                          → SCHRITT D Handoff-Pflicht
  Inkonsistenter Pipeline-State                     → MASTER-ORCHESTRATOR Verletzung
  Fehlende Validation-Gate-Pruefung                → SCHRITT C Pflicht-Verletzung

═══════════════════════════════════════════════════════════════════════════════
SEKTION 5: SELF-OPTIMIZATION CHECK (ERWEITERT)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-LANGZEITTASK — CODE-QUALITAET UND LLM-LESBARKEIT:

Dieser Check wird am Ende JEDER Phase ausgefuehrt (SCHRITT D.4).
Er ist NICHT optional. Er ist PFLICHT.

  5.1) NAMING-KONVENTION:
       Dateien: PascalCase fuer Komponenten, camelCase fuer Utilities, kebab-case fuer Routes
       Variablen: camelCase, beschreibend, keine Abkuerzungen (getUserData > getUD)
       Typen/Interfaces: PascalCase mit Suffix Props/State/Config (HeroSectionProps)
       Konstanten: UPPER_SNAKE_CASE fuer echte Konstanten (MAX_RETRY_COUNT)

  5.2) JSDOC-PFLICHT:
       Jede exportierte Funktion: @description, @param, @returns
       Jede exportierte Komponente: @description, @example (mit JSX)
       Jedes exportiertes Interface: @description fuer das Interface, @description fuer jedes Property
       EDGE-CASE: Interne Helper-Funktionen (nicht exportiert) → JSDoc empfohlen, nicht Pflicht.

  5.3) MUSTER-KONSISTENZ:
       Wenn bestehende Komponenten ein Pattern verwenden (z.B. forwardRef, Composition),
       muessen neue Komponenten das GLEICHE Pattern verwenden.
       Wenn bestehender Code eine Ordnerstruktur folgt (z.B. feature-basiert),
       muss neuer Code die GLEICHE Struktur verwenden.
       KEIN Muster-Bruch ohne dokumentierte Begruendung in .project-knowledge-base.md.

  5.4) DATEIGROESSE UND SPLITTING:
       Dateien mit > 200 Zeilen → Pruefe ob sinnvoll teilbar.
       Dateien mit > 300 Zeilen → MUSS geteilt werden (ausser es ist eine Datendatei).
       Splitting-Strategie: Extrahiere Hooks, Utility-Funktionen, Sub-Komponenten in eigene Dateien.

  5.5) LLM-LESBARKEITS-TEST:
       Stelle dir vor, ein LLM liest diesen Code zum ERSTEN Mal, ohne zusaetzlichen Kontext.
       Kann es sofort verstehen:
       - Was die Datei tut?
       - Welche Abhaengigkeiten sie hat?
       - Wie sie in die Gesamtarchitektur passt?
       Falls NEIN → Fuege Kommentare, JSDoc, oder klarere Naming hinzu.

═══════════════════════════════════════════════════════════════════════════════
CROSS-REFERENZ: ERWEITERTE PIPELINE-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

Dieses Dokument (MASTER-ORCHESTRATOR) definiert Ring 1 (72 Kern-Phasen).
Fuer das vollstaendige System konsultiere zusaetzlich:

  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md   → Unverletzliche Direktiven (Domino, 10X, Software-Ban)
  ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md → Ring 2 + Ring 3 (156 Phasen, 27 Module, Closed Loop)
  CONTEXT-HUB.md                          → Kontextdatei-Register (inkl. 8 Erweiterungs-Kontexte)
  START.md                                → Initialer Trigger (laedt Enforcement + Loop-Orchestrator)

HIERARCHIE DER AUTORITAET:
  1. ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (hoechste Autoritaet — ueberschreibt alles)
  2. ANTIGRAVITY-MASTER-LOOP-ORCHESTRATOR.md (Loop-Architektur und Ausfuehrungsreihenfolge)
  3. MASTER-ORCHESTRATOR.md (dieses Dokument — Phase-Lifecycle und Transitions)
  4. Einzelne Phasen-Dokumente (Task-spezifische Anweisungen)

═══════════════════════════════════════════════════════════════════════════════
DER ORCHESTRATOR IST BEREIT. START.md TRIGGERT DIE SEQUENZ.
DER INFINITE LOOP HAT KEINE TOTEN ENDEN.
JEDE PHASE WIRD SEQUENTIELL AUSGEFUEHRT — DOMINO-VERKETTUNG OHNE UNTERBRECHUNG.
JEDE PHASE DURCHLAEUFT DAS ANTIGRAVITY-ARTIFACT-PROTOKOLL:
  SCHRITT B: ARTIFACT 1 (TASK LIST) + ARTIFACT 2 (IMPLEMENTATION PLAN) VOR der Ausfuehrung.
  SCHRITT D: ARTIFACT 3 (WALKTHROUGH) ALS Teil des EXIT-PROTOKOLLS.
  KEINE PHASE OHNE ARTIFACTS. KEINE AUSFUEHRUNG OHNE PLAN. KEIN EXIT OHNE WALKTHROUGH.
═══════════════════════════════════════════════════════════════════════════════
