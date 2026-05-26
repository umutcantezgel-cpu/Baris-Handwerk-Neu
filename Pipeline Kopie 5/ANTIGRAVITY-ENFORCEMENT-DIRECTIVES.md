ANTIGRAVITY ENFORCEMENT DIRECTIVES
Verschaerftes Regelwerk fuer autonome Pipeline-Ausfuehrung

===============================================================================
DOKUMENTSTATUS: OBERSTE AUTORITAET
===============================================================================

Dieses Dokument enthaelt VIER unverletzliche Direktiven, die fuer JEDE einzelne
Phase der gesamten ANTIGRAVITY-Pipeline gelten. Diese Direktiven ueberschreiben
widerspruechliche Anweisungen in einzelnen Phasen-Dokumenten.

Jede ausfuehrende KI MUSS dieses Dokument VOR dem Start einer beliebigen Phase
lesen. Es wird in CONTEXT-HUB.md als PFLICHTLEKTUERE registriert.

Die vier Direktiven sind:
  1. VERSCHAERFTES DOMINO-PROTOKOLL (Individueller Implementierungsplan pro SEQ)
  2. ZEHNFACH-VALIDIERUNGSDIREKTIVE (10X — Expansion ohne Neuerstellung)
  3. NULL-EXTERNE-SOFTWARE-DIREKTIVE (Keine externen Dienste)
  4. KONTROLLIERTE-KREATIVITAETS-DIREKTIVE (Wissenschaftlich fundierte Design-Entscheidungen)

===============================================================================
DIREKTIVE 1: VERSCHAERFTES DOMINO-PROTOKOLL
===============================================================================

KERNPRINZIP: Jede SEQ erhaelt ihren eigenen, individuellen und umfangreichen
Implementierungsplan mit eigenen, vielschichtigen Tasks. Keine SEQ wird
uebersprungen, abgekuerzt oder oberflaechlich behandelt. Jede SEQ erhaelt die
volle Aufmerksamkeit und Bearbeitungszeit, die sie verdient.

-------------------------------------------------------------------------------
PHASE-LIFECYCLE (GILT FUER JEDE EINZELNE SEQ)
-------------------------------------------------------------------------------

Wenn eine neue Phase (SEQ-XX) gestartet wird, durchlaeuft sie ZWINGEND die
folgenden sieben Schritte in exakt dieser Reihenfolge:

SCHRITT A — KONTEXT-LADEN
  Lies die im LESE-PFLICHTEN-Block der Phase definierten Kontextdateien.
  Lies .pipeline-master-state.md fuer den aktuellen Gesamtzustand.
  Lies das eine Phasen-Dokument der aktuellen SEQ vollstaendig.
  KEIN anderes Phasen-Dokument darf gleichzeitig im Speicher sein.

SCHRITT B — BESTANDSAUFNAHME
  Lies den GESAMTEN bestehenden Code, der fuer diese Phase relevant ist.
  Dokumentiere:
    - Welche Dateien existieren bereits
    - Welche Funktionalitaet ist bereits implementiert
    - Welche Qualitaet hat der bestehende Code (Types, Tests, Lint)
    - Welche Luecken bestehen gegenueber den Anforderungen dieser Phase
  KEINE Aenderung wird vorgenommen, bevor die Bestandsaufnahme abgeschlossen ist.

SCHRITT C — INDIVIDUELLER IMPLEMENTIERUNGSPLAN
  Erstelle einen EIGENEN, MASSGESCHNEIDERTEN Implementierungsplan fuer diese
  spezifische SEQ. Dieser Plan ist KEIN generischer Template — er ist eine
  praezise, auf den aktuellen Codezustand zugeschnittene Operationsanweisung.

  DER IMPLEMENTIERUNGSPLAN MUSS ENTHALTEN:

  C.1 SITUATIONSANALYSE (Was ist der IST-Zustand?)
      - Zusammenfassung der Bestandsaufnahme aus Schritt B
      - Identifizierte Staerken des bestehenden Codes
      - Identifizierte Schwaechen und Luecken
      - Abhaengigkeiten zu vorherigen Phasen

  C.2 ZIELDEFINITION (Was ist der SOLL-Zustand nach dieser Phase?)
      - Konkrete, messbare Ergebnisse
      - Qualitaetsstandards die erreicht werden muessen
      - Abgrenzung: Was gehoert zu DIESER Phase, was nicht

  C.3 TASK-DEKOMPOSITION (Wie kommt man vom IST zum SOLL?)
      Erstelle eine vielschichtige Task-Hierarchie mit MINDESTENS drei Ebenen:

      EBENE 1 — HAUPTAUFGABEN (3-7 pro Phase)
        Uebergeordnete Arbeitspakete die den Kern der Phase bilden.

      EBENE 2 — TEILAUFGABEN (2-5 pro Hauptaufgabe)
        Konkrete Implementierungsschritte innerhalb jeder Hauptaufgabe.

      EBENE 3 — MIKROAUFGABEN (1-3 pro Teilaufgabe)
        Atomare, einzeln ausfuehrbare und validierbare Schritte.

      JEDE AUFGABE auf jeder Ebene hat:
        - Einen eindeutigen Bezeichner (z.B. SEQ-11.3.2.1)
        - Eine praezise Beschreibung (Was wird getan?)
        - Ein Eingangskriterium (Wann kann diese Aufgabe starten?)
        - Ein Ausgangskriterium (Wann ist diese Aufgabe erledigt?)
        - Ein Validierungskriterium (Wie wird Erfolg gemessen?)

  C.4 RISIKOANALYSE (Was kann schiefgehen?)
      - Identifizierte Risiken mit Eintrittswahrscheinlichkeit
      - Mitigationsstrategien pro Risiko
      - Fallback-Plaene bei kritischen Fehlern

  C.5 ZEITABSCHAETZUNG (Relative Komplexitaet)
      Kategorisiere die Phase als:
        LEICHT (primaer Konfiguration und Verdrahtung)
        MITTEL (signifikante Code-Aenderungen mit klarem Pfad)
        SCHWER (komplexe Architekturentscheidungen, viele Abhaengigkeiten)
        KRITISCH (fundamentale Strukturaenderungen, hohes Regressionsrisiko)

SCHRITT D — AUSFUEHRUNG
  Arbeite den Implementierungsplan aus Schritt C sequentiell ab.
  EBENE 1 Aufgaben werden in der definierten Reihenfolge abgearbeitet.
  Innerhalb jeder EBENE 1 Aufgabe werden die EBENE 2 und EBENE 3 Aufgaben
  sequentiell abgearbeitet.

  NACH JEDER EBENE-1-AUFGABE:
    - Fuehre ein Zwischen-Validation-Gate aus:
      tsc --noEmit (TypeScript-Pruefung)
      eslint . (Lint-Pruefung)
      npm run build (Build-Pruefung)
    - Wenn ein Gate fehlschlaegt: SOFORT beheben bevor die naechste Aufgabe beginnt.
    - Dokumentiere das Ergebnis im Implementierungsplan.

SCHRITT E — ABSCHLUSS-VALIDIERUNG
  Nach Abarbeitung ALLER Aufgaben des Implementierungsplans:
    - Fuehre das VOLLSTAENDIGE Validation-Gate aus:
      tsc --noEmit (0 Errors)
      eslint . (0 Errors, 0 Warnings)
      npm run build (SUCCESS)
      npm run test (falls Tests existieren — alle gruen)
    - Pruefe JEDEN einzelnen Punkt der Zieldefinition aus Schritt C.2.
    - Wenn ein Ziel nicht erreicht wurde: Zurueck zu Schritt D.

SCHRITT F — KONTEXT-AKTUALISIERUNG
  Aktualisiere die Kontextdateien gemaess dem EXIT-PROTOKOLL der Phase.
  Aktualisiere .pipeline-master-state.md:
    - Aktuelle Phase auf COMPLETED setzen
    - Naechste Phase auf PENDING setzen
    - Ergebniszusammenfassung eintragen
    - Bekannte Probleme dokumentieren

SCHRITT G — DOMINO-TRIGGER
  Gib den strukturierten Abschlussbericht aus:

  ═══════════════════════════════════════════════════════════════════════════
  PHASE [SEQ-XX] — [PHASENNAME] — ABGESCHLOSSEN
  ═══════════════════════════════════════════════════════════════════════════
  IMPLEMENTIERUNGSPLAN: [Anzahl] Hauptaufgaben, [Anzahl] Teilaufgaben, [Anzahl] Mikroaufgaben
  ABGEARBEITETE TASKS: [Anzahl] von [Gesamt] (100%)
  VALIDATION-GATE: tsc OK | lint OK | build OK | tests OK
  CONTEXT-UPDATES: [Liste der aktualisierten Kontextdateien]
  ERGEBNISSE: [3-5 Saetze Zusammenfassung]
  BEKANNTE PROBLEME: [Falls vorhanden, sonst "Keine"]
  NAECHSTE PHASE: SEQ-[XX+1] → [Dateiname der naechsten Phase]
  AUTO-TRIGGER: SOFORT — KEINE PAUSE — KEIN WARTEN
  ═══════════════════════════════════════════════════════════════════════════

  Lade SOFORT das naechste Phasen-Dokument und beginne mit SCHRITT A.
  Der Domino-Effekt duldet KEINE Unterbrechung.

-------------------------------------------------------------------------------
VERBOTENE VERHALTENSWEISEN
-------------------------------------------------------------------------------

  VERBOTEN: Eine Phase in weniger als 3 Nachrichten abschliessen (ausser bei
  trivialen Konfigurationsphasen). Jede Phase verdient gruendliche Behandlung.

  VERBOTEN: Den Implementierungsplan ueberspringen und direkt mit Code beginnen.
  Kein Code ohne vorherigen Plan.

  VERBOTEN: Tasks aus dem Implementierungsplan stillschweigend ueberspringen.
  Jeder Task wird entweder ausgefuehrt oder explizit als "nicht anwendbar"
  dokumentiert mit Begruendung.

  VERBOTEN: Auf den Nutzer warten. Die Pipeline laeuft autonom.

  VERBOTEN: Mehrere Phasen in einer Nachricht behandeln. EINE Phase pro
  Nachrichtenzyklus. Vollstaendig und gruendlich.

===============================================================================
DIREKTIVE 2: ZEHNFACH-VALIDIERUNGSDIREKTIVE (10X)
===============================================================================

KERNPRINZIP: Waehrend der gesamten Pipeline — insbesondere waehrend der
EXPANSION-Pipeline (SEQ-11 bis SEQ-20) — werden KEINE neuen Seiten, Routen
oder Komponenten aus dem Nichts erstellt. Stattdessen wird der BESTEHENDE
Code zehnfach (10X) validiert, erweitert und aufgewertet.

-------------------------------------------------------------------------------
WAS 10X BEDEUTET
-------------------------------------------------------------------------------

10X ist kein Marketing-Begriff. Es ist ein konkreter, messbarer Standard:

  1X = Der bestehende Code funktioniert.
  2X = Der Code ist typsicher (TypeScript strict, keine any-Typen).
  3X = Der Code ist fehlerfrei (ESLint 0 Errors, 0 Warnings).
  4X = Der Code ist getestet (Unit-Tests fuer alle kritischen Pfade).
  5X = Der Code ist performant (Core Web Vitals im gruenen Bereich).
  6X = Der Code ist barrierefrei (WCAG AAA, semantisches HTML, ARIA).
  7X = Der Code ist SEO-optimiert (Meta-Tags, Schema.org, Sitemap).
  8X = Der Code ist sicher (keine XSS, CSRF, Injection-Vektoren).
  9X = Der Code ist visuell exzellent (Anti-AI-Look, Premium-Design).
  10X = Der Code ist einzigartig (keine generischen Patterns, Weltklasse-Unikat).

JEDE Phase der Expansion muss den bestehenden Code von seinem aktuellen X-Level
auf das naechsthoehere Level anheben. Am Ende der Expansion (SEQ-20) muss der
Code mindestens auf 5X sein. Die restlichen Level werden in den Folge-Pipelines
(Zero-Breakage, Design, Security, AI-Discovery) erreicht.

-------------------------------------------------------------------------------
VERBOTENE AKTIONEN IN DER EXPANSION-PIPELINE
-------------------------------------------------------------------------------

  STRENG VERBOTEN: Neue Seiten oder Routen erstellen, die nicht bereits in der
  bestehenden Codebasis als Platzhalter oder Skeleton existieren.

  STRENG VERBOTEN: Bestehende Seiten loeschen und durch Neuerstellungen ersetzen.

  STRENG VERBOTEN: Die bestehende Komponentenstruktur verwerfen und eine neue
  Architektur von Grund auf aufbauen.

  STRENG VERBOTEN: Seiten oder Komponenten mit generischem Placeholder-Content
  fuellen ("Lorem ipsum", "Coming soon", leere Sektionen).

-------------------------------------------------------------------------------
ERLAUBTE AKTIONEN IN DER EXPANSION-PIPELINE
-------------------------------------------------------------------------------

  ERLAUBT: Bestehende Seiten um fehlende Sektionen ERWEITERN (z.B. eine
  bestehende About-Seite um ein Team-Section ergaenzen).

  ERLAUBT: Bestehende Komponenten VERFEINERN (z.B. eine einfache Card-Komponente
  zu einer vollstaendig typisierten, barrierefreien, animierten Card aufwerten).

  ERLAUBT: Bestehende Datenmodelle HAERTEN (z.B. TypeScript-Interfaces mit
  strikteren Typen, Zod-Validierung, dokumentierten Feldern).

  ERLAUBT: Bestehende Navigation VERBESSERN (z.B. Breadcrumbs, Sub-Navigation,
  Mobile-Menu, Keyboard-Navigation hinzufuegen).

  ERLAUBT: Bestehende Formulare ERWEITERN (z.B. Validierung, Fehlerbehandlung,
  Accessibility, Multi-Step-Logik hinzufuegen).

  ERLAUBT: Sub-Routen fuer bestehende Seiten erstellen, WENN die Elternseite
  bereits existiert und die Sub-Route eine logische Vertiefung darstellt
  (z.B. /blog existiert → /blog/[slug] ist erlaubt).

-------------------------------------------------------------------------------
10X-PRUEFPROTOKOLL (PFLICHT VOR JEDER EXPANSION-PHASE)
-------------------------------------------------------------------------------

Vor dem Start jeder Expansion-Phase (SEQ-11 bis SEQ-20) muss die ausfuehrende KI
das folgende Pruefprotokoll durchlaufen:

  PRUEFUNG 1: BESTANDSAUFNAHME
    - Wie viele Seiten/Routen existieren aktuell?
    - Welche Komponenten existieren und was ist ihr Qualitaetsniveau?
    - Was ist der aktuelle X-Level jeder Seite?

  PRUEFUNG 2: DELTA-ANALYSE
    - Welches X-Level soll nach DIESER Phase erreicht werden?
    - Welche konkreten Luecken muessen geschlossen werden?
    - Welche bestehenden Elemente werden aufgewertet?

  PRUEFUNG 3: KEINE-NEUERSTELLUNG-CHECK
    - Wird in dieser Phase eine NEUE Seite erstellt? → VERBOTEN (ausser Sub-Route)
    - Wird eine bestehende Seite ERSETZT? → VERBOTEN
    - Wird eine bestehende Komponente VERWORFEN? → VERBOTEN
    - Wird generischer Placeholder-Content eingefuegt? → VERBOTEN

  Nur wenn alle drei Pruefungen bestanden sind, darf die Phase starten.

-------------------------------------------------------------------------------
ANWENDUNG AUF EXPANSION-PHASE-01 (SEQ-11)
-------------------------------------------------------------------------------

Das bestehende EXPANSION-PHASE-01.md spricht von "Route-Explosion" und
"30+ Routen erstellen". Diese Formulierung wird hiermit UEBERSCHRIEBEN:

  ALTE ANWEISUNG: "30+ Routen auf der bestehenden Code-Basis erstellen"
  NEUE ANWEISUNG: "Bestehende Routen-Architektur analysieren, validieren und
  zehnfach aufwerten. Fehlende TypeScript-Typen ergaenzen, SEO-Metadaten
  vervollstaendigen, Fehlerbehandlung implementieren, Accessibility sicherstellen.
  Sub-Routen NUR fuer bestehende Elternseiten, KEINE Neuerstellungen."

  ALTE ANWEISUNG: "Route-Explosion durchfuehren"
  NEUE ANWEISUNG: "Route-Validierung und -Haertung durchfuehren. Jede bestehende
  Route wird auf die 10X-Skala geprueft und mindestens um 2 Level angehoben."

  Diese Ueberschreibung gilt kraft der ENFORCEMENT-DIRECTIVES-Autoritaet.

===============================================================================
DIREKTIVE 3: NULL-EXTERNE-SOFTWARE-DIREKTIVE
===============================================================================

KERNPRINZIP: Die ANTIGRAVITY-Pipeline installiert, integriert oder referenziert
KEINE externe Software, SaaS-Dienste, Monitoring-Plattformen oder Cloud-Services
waehrend der Ausfuehrung. Alles was implementiert wird, muss innerhalb der
bestehenden Codebasis und des bestehenden Tech-Stacks loesbar sein.

-------------------------------------------------------------------------------
VOLLSTAENDIGE VERBOTSLISTE
-------------------------------------------------------------------------------

  KATEGORIE: MONITORING UND ANALYTICS
    VERBOTEN: Sentry, Datadog, New Relic, Bugsnag, LogRocket, FullStory,
    Amplitude, Mixpanel, Segment, Heap, PostHog, Plausible, Umami, Fathom
    STATTDESSEN: Eigene Error-Boundary-Logik, console.error mit strukturiertem
    Format, navigator.sendBeacon fuer Custom-Events, Performance-Observer-API

  KATEGORIE: CI/CD UND DEPLOYMENT
    VERBOTEN: Vercel, Netlify, Railway, Render, Fly.io, Heroku, AWS Amplify
    als NEUE Integration waehrend der Pipeline-Ausfuehrung
    STATTDESSEN: Wenn bereits ein Deployment-Ziel existiert, wird es genutzt.
    Die Pipeline konfiguriert KEINE neuen Hosting-Dienste.
    AUSNAHME: GitHub Actions ist erlaubt, da es Teil des Repository-Oekosystems ist.

  KATEGORIE: DATENBANK UND BACKEND
    VERBOTEN: Supabase, Firebase, PlanetScale, Neon, Turso, Convex, Appwrite
    als NEUE Integration waehrend der Pipeline-Ausfuehrung
    STATTDESSEN: Wenn bereits eine Datenbank existiert, wird sie genutzt und
    optimiert. Keine neuen Datenbank-Dienste einfuehren.

  KATEGORIE: CMS UND CONTENT
    VERBOTEN: Contentful, Sanity, Strapi, Payload CMS, Ghost, WordPress
    als NEUE Integration waehrend der Pipeline-Ausfuehrung
    STATTDESSEN: Content wird als MDX-Dateien im Repository verwaltet
    (Content-as-Code-Prinzip).

  KATEGORIE: AUTHENTIFIZIERUNG
    VERBOTEN: Auth0, Clerk, Supabase Auth, Firebase Auth
    als NEUE Integration waehrend der Pipeline-Ausfuehrung
    STATTDESSEN: Wenn Auth existiert, wird sie genutzt. Sonst wird
    cookie-basierte Session-Logik mit dem bestehenden Framework implementiert.

  KATEGORIE: STATE-MANAGEMENT
    VERBOTEN: Redux, MobX, Zustand, Jotai, Recoil als NEUE Abhaengigkeit
    STATTDESSEN: React Context, URL-State, Server-State (wenn SSR vorhanden).

  KATEGORIE: EMAIL UND KOMMUNIKATION
    ERLAUBT (einzige Ausnahmen): Formspree fuer Kontaktformulare,
    Calendly fuer Terminbuchung. Diese beiden Dienste sind die EINZIGEN
    erlaubten externen Integrationen im gesamten System.

  KATEGORIE: ZAHLUNGSSYSTEME
    VERBOTEN als neue Integration waehrend Pipeline-Ausfuehrung.
    Wenn Stripe oder ein anderer Zahlungsdienst bereits existiert, wird er
    genutzt und optimiert, aber nicht neu eingefuehrt.

-------------------------------------------------------------------------------
ANWENDUNGSREGEL
-------------------------------------------------------------------------------

Wenn ein Phasen-Dokument die Integration eines externen Dienstes vorschreibt
(z.B. "Integriere Sentry fuer Error-Tracking" oder "Konfiguriere Datadog"),
wird diese Anweisung AUTOMATISCH uminterpretiert als:

  "Implementiere die AEQUIVALENTE Funktionalitaet mit bordmitteln des
  bestehenden Tech-Stacks. Nutze native Browser-APIs, Framework-Features
  und selbstgeschriebene Utility-Funktionen."

Beispiele fuer Uminterpretation:
  "Integriere Sentry" → Implementiere eine ErrorBoundary-Komponente mit
  strukturiertem Error-Logging in eine lokale JSON-Datei oder console.error.

  "Konfiguriere Lighthouse CI" → Fuehre Lighthouse manuell als Teil des
  Build-Prozesses aus und pruefe die Scores im Terminal.

  "Integriere Stripe" → Implementiere die Zahlungslogik nur wenn Stripe
  bereits in package.json als Dependency existiert.

-------------------------------------------------------------------------------
BESTEHENDE DEPENDENCIES SCHUETZEN
-------------------------------------------------------------------------------

  WICHTIG: Diese Direktive verbietet NICHT die Nutzung von Dependencies die
  BEREITS in package.json stehen. Sie verbietet NUR das HINZUFUEGEN neuer
  externer Dienste und SaaS-Integrationen.

  Wenn package.json bereits "next-auth" enthaelt → Nutzen und optimieren.
  Wenn package.json bereits "@sentry/nextjs" enthaelt → Nutzen und optimieren.
  Wenn package.json NICHT "sentry" enthaelt → NICHT hinzufuegen.

  Die ausfuehrende KI prueft IMMER zuerst package.json, bevor sie eine
  Dependency referenziert oder konfiguriert.

===============================================================================
DIREKTIVE 4: KONTROLLIERTE-KREATIVITAETS-DIREKTIVE
===============================================================================

KERNPRINZIP: Jede visuelle und aesthetische Entscheidung in der Pipeline MUSS
durch mindestens eines der folgenden vier wissenschaftlichen Fundamente
begruendet sein. Willkuerliche aesthetische Entscheidungen sind verboten.

DIE VIER FUNDAMENTE:

  FUNDAMENT 1 — MATHEMATISCHE PROPORTION (Goldener Schnitt / PHI = 1.618)
    Layouts, Typografie-Skalen, Spacing und Bild-Proportionen MUESSEN sich
    an Phi-Verhaeltnissen orientieren oder ihre Abweichung begruenden.
    Referenz: DESIGN-KREATIVITAETS-DIREKTIVE.md SEKTION 2

  FUNDAMENT 2 — FARBPSYCHOLOGIE UND WAHRNEHMUNG
    Farbentscheidungen MUESSEN die Branchen-Farbmatrix, die 60-30-10-Regel,
    Farbgewicht-Hierarchie und WCAG-AAA-Kontraste einhalten.
    Referenz: DESIGN-KREATIVITAETS-DIREKTIVE.md SEKTION 3

  FUNDAMENT 3 — VISUELLE FUEHRUNG UND AUFMERKSAMKEITSSTEUERUNG
    Blickverlaufsmuster (F/Z/Gutenberg), visuelles Gewicht, Whitespace-Regeln
    und visueller Rhythmus MUESSEN bewusst eingesetzt werden.
    Referenz: DESIGN-KREATIVITAETS-DIREKTIVE.md SEKTION 4

  FUNDAMENT 4 — PREVIEW-VALIDIERUNG
    Jede Design-Phase durchlaeuft einen erweiterten Validierungsschritt (D.5)
    mit Screenshot-Generierung, Phi-Check, Farb-Audit und Anti-AI-Look-Test.
    Referenz: DESIGN-KREATIVITAETS-DIREKTIVE.md SEKTION 5

-------------------------------------------------------------------------------
ANWENDUNGSBEREICH
-------------------------------------------------------------------------------

  Diese Direktive gilt fuer:
    - Alle Design-Phasen (DESIGN-PHASE-01 bis DESIGN-PHASE-10, SEQ-42 bis SEQ-51)
    - DESIGN-TOKENS.md (Token-Definitionen)
    - Alle visuellen Entscheidungen in anderen Pipelines (z.B. Zero-Breakage UI-Fixes)

  Minimum-Validierungsstufe fuer Design-Phasen: 6X (statt 5X fuer funktionale Phasen)
    1X-3X: Template-Look → ABGELEHNT
    4X-5X: Angepasstes Template → ABGELEHNT fuer Design-Phasen
    6X-7X: Individuelles Design → MINIMUM
    8X-9X: Herausragendes Design → ZIEL
    10X:   Awwwards-wuerdig → IDEAL

  DETAIL-SPEZIFIKATION: ANTIGRAVITY-DESIGN-KREATIVITAETS-DIREKTIVE.md

===============================================================================
REGISTRIERUNG IN CONTEXT-HUB
===============================================================================

Dieses Dokument wird als PFLICHTLEKTUERE in CONTEXT-HUB.md registriert:

  DATEI: ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md
  TYP: Governance-Dokument (oberste Autoritaet)
  LESE-PFLICHT: Vor dem Start JEDER Phase
  AENDERUNGSRECHT: Nur durch den Operator (Mensch)
  GELTUNGSBEREICH: Alle 156 Phasen, alle 27 Pipeline-Module

===============================================================================
DOKUMENTSTATUS
===============================================================================

  Version: 1.1.0
  Erstellt: 2026-04-05
  Autoritaet: OBERSTE — ueberschreibt widerspruechliche Phasen-Anweisungen
  Sprache: Deutsch
