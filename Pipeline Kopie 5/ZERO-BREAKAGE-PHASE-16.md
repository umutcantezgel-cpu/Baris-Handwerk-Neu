Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 16 der Engineering-Pipeline (Image Optimization) als maximale Bildoptimierung umzusetzen. Formate, Groessen, Lazy Loading, Blur-Placeholders und Art Direction muessen Premium-Qualitaet liefern. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-36 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-35 → ZERO-BREAKAGE-PHASE-15.md
→ NÄCHSTE: SEQ-37 → ZERO-BREAKAGE-PHASE-17.md
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
SSOT-DIREKTIVE (UNVERLETZLICH)
═══════════════════════════════════════════════════════════════════════════════
Der Code ist die SSOT (Single Source of Truth). Wenn Dokumentation und Code
divergieren, GEWINNT IMMER DER CODE. Lies den GESAMTEN bestehenden Code BEVOR
du etwas aenderst. Existierender Code wird ERWEITERT, nie ersetzt.
Validierung: npm run build && npm run lint && npx tsc --noEmit nach JEDEM Block.
DIRECTOR: Director of Engineering (Pipeline 2) — meldet an Director General.
PFLICHT-GESETZE: GESETZ 1 (Ultrathink), GESETZ 2 (100K-Mindset), GESETZ 4 (PPI),
GESETZ 6 (Code-Review K1-K7), GESETZ 7 (Confiteor/RCA bei Bug-Fixes).
═══════════════════════════════════════════════════════════════════════════════


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese Next.js/React/TypeScript-Website auf Enterprise-Grade Security und vollständige DSGVO-Compliance zu heben — jede Eingabe wird sanitisiert, jeder Header gehärtet, jede Datenverarbeitung dokumentiert und jedes Cookie rechtlich abgesichert. Kein Angriff auf die OWASP Top 10 darf erfolgreich sein, kein Datenschutzverstoß darf möglich sein, und die Website soll das Vertrauen eines Nutzers in derselben Sekunde gewinnen, in der er sie besucht. Die Phasen 1–15 haben eine funktionale, performante, zugängliche und analytisch durchleuchtete Website geschaffen. Phase 16 macht sie unangreifbar und rechtskonform. Dies ist Phase 16 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- STRIKT VERBOTEN: Kein Headless CMS (Sanity, Contentful, Payload etc.), keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework. Content lebt im Code oder in lokalen Datenstrukturen.

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md vollständig. Verstehe den aktuellen Architektur-Zustand.

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 15. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 13 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — ## Phase 16: Enterprise Security & DSGVO-Compliance
    — - [ ] Task 1: DSGVO-Tiefenaudit und Datenverarbeitungsinventar
    — - [ ] Task 2: Cookie-Consent-System (DSGVO-konform)
    — - [ ] Task 3: Datenschutzerklärung und Impressum
    — - [ ] Task 4: Content Security Policy (CSP)
    — - [ ] Task 5: Security-Headers Hardening
    — - [ ] Task 6: Input-Sanitisierung und XSS-Prävention
    — - [ ] Task 7: CSRF-Schutz und Formularsicherheit
    — - [ ] Task 8: Rate-Limiting und DDoS-Grundschutz
    — - [ ] Task 9: Dependency-Audit und Supply-Chain-Security
    — - [ ] Task 10: Security-Testing und Penetrationstest-Checkliste
    — - [ ] Task 11: Self-Optimizing Loop


Schritt 0.3 — Pre-Flight Security-Audit:
BEVOR du änderst, führe ein vollständiges Security-Audit durch:

1. Headers-Check: Rufe die Website auf und prüfe ALLE Response-Headers. Dokumentiere fehlende Security-Headers.
2. CSP-Check: Existiert eine Content Security Policy? Wie strikt? Welche Quellen erlaubt?
3. Cookie-Audit: Welche Cookies werden gesetzt? Von wem? Mit welchen Flags (Secure, HttpOnly, SameSite)?
4. Dependency-Audit: npm audit ausführen. JEDE Vulnerability dokumentieren (Severity, Package, Fix).
5. Input-Audit: Alle Eingabefelder identifizieren (Kontaktformular, Suche, URL-Parameter). Wie werden sie validiert?
6. Drittanbieter-Audit: Welche externen Scripts werden geladen? (Calendly, GA4, Formspree). Welche Daten senden sie?
7. Environment-Variables: Welche env-Vars existieren? Sind sie korrekt als NEXT_PUBLIC_ vs. serverseitig getrennt?
8. HTTPS: Wird HTTPS erzwungen? Existiert HSTS?
9. Datenschutzerklärung: Existiert sie? Ist sie vollständig? Letzte Aktualisierung?
10. Impressum: Existiert es? Enthält es alle Pflichtangaben nach §5 TMG?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### 🔒 Security & DSGVO-Status

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — DSGVO-COMPLIANCE & DATENSCHUTZ
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: DSGVO-TIEFENAUDIT UND DATENVERARBEITUNGSINVENTAR

Schritt 1.1 — Verarbeitungsverzeichnis erstellen:
Dokumentiere JEDE Datenverarbeitung auf der Website:

Verarbeitung 1 — Kontaktformular (Formspree):
- Erhobene Daten: Name, E-Mail, Telefon (optional), Betreff, Nachricht
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) ODER Art. 6 Abs. 1 lit. f (berechtigtes Interesse)
- Empfänger: Formspree Inc. (Auftragsverarbeiter, USA — Standardvertragsklauseln prüfen)
- Speicherdauer: Im Formspree-Dashboard bis manueller Löschung
- Löschmechanismus: Manuell im Formspree-Dashboard oder via API

Verarbeitung 2 — Terminbuchung (Calendly):
- Erhobene Daten: Name, E-Mail, gewählter Termin
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
- Empfänger: Calendly LLC (Auftragsverarbeiter, USA)
- Speicherdauer: Gemäß Calendly-Richtlinien
- Hinweis: Calendly setzt eigene Cookies — erfordert Consent

Verarbeitung 3 — Google Analytics 4 (falls aktiviert):
- Erhobene Daten: IP (anonymisiert), Seitenaufrufe, Events, Gerätedaten
- Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
- Empfänger: Google Ireland Limited
- Speicherdauer: 14 Monate (GA4-Standard)
- WICHTIG: NUR nach expliziter Einwilligung aktivieren

Verarbeitung 4 — Vercel Analytics (cookieless):
- Erhobene Daten: Aggregierte Seitenaufrufe, Web Vitals (KEINE personenbezogenen Daten)
- Rechtsgrundlage: Art. 6 Abs. 1 lit. f (berechtigtes Interesse — cookieless, aggregiert)
- KEIN Consent erforderlich

Verarbeitung 5 — Technisch notwendige Cookies:
- visitor_type Cookie: Erstbesucher/Wiederkehrend (UX-Anpassung)
- experiment_* Cookies: A/B-Test-Varianten (kein Tracking, keine PII)
- Rechtsgrundlage: Art. 6 Abs. 1 lit. f (berechtigtes Interesse)
- consent_status Cookie: Speichert die Cookie-Einwilligung selbst

Schritt 1.2 — Auftragsverarbeitungsverträge (AVV) prüfen:
Checke ob AVVs bestehen mit:
- Formspree: Data Processing Agreement (DPA) vorhanden?
- Calendly: DPA vorhanden?
- Google Analytics: DPA vorhanden?
- Vercel: DPA vorhanden? (Vercel hat ein Standard-DPA)
Dokumentiere den Status und verlinke die DPAs.

Schritt 1.3 — Datentransfer in Drittländer (USA):
Seit dem EU-US Data Privacy Framework:
- Prüfe ob Formspree, Calendly und Google im DPF-Register gelistet sind
- Falls JA: Dokumentiere als Rechtsgrundlage für Drittlandtransfer
- Falls NEIN: Standardvertragsklauseln (SCCs) als Absicherung dokumentieren

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: COOKIE-CONSENT-SYSTEM

Schritt 2.1 — Cookie-Banner-Komponente erstellen:
Erstelle eine <CookieConsent />-Client-Komponente:

Anforderungen (DSGVO + TTDSG):
- Erscheint beim ERSTEN Besuch (kein consent_status Cookie vorhanden)
- Drei Optionen: "Alle akzeptieren" (primärer Button), "Nur Essentiell" (sekundärer Button), "Einstellungen" (Link)
- KEINE vorangekreuzten Checkboxen für nicht-essentielle Cookies
- "Alle ablehnen" muss genauso einfach sein wie "Alle akzeptieren" (DSGVO-Anforderung)
- Cookie-Banner darf KEINEN Inhalt verdecken (fixed bottom, nicht als Modal)
- Schließen des Banners = "Nur Essentiell" (NICHT "Alle akzeptieren")

Schritt 2.2 — Cookie-Kategorien: Definiere einen TypeScript-Type namens ConsentCategory, der ein Literal-Union mit drei möglichen Werten ist: 'essential' für technisch notwendige Cookies, 'analytics' für Analyse- und Tracking-Cookies, und 'marketing' für Marketing-Cookies. Erstelle eine Interface namens ConsentState, die den Zustand der Benutzer-Einwilligung repräsentiert. Das Feld 'essential' ist immer true und nicht deaktivierbar, da diese Cookies technisch notwendig sind. Das Feld 'analytics' ist ein boolean und steuert, ob GA4 und Scroll-Tracking aktiviert sind. Das Feld 'marketing' ist ein boolean und steuert, ob Calendly-Cookies und UTM-Tracking aktiviert sind. Das Feld 'timestamp' ist ein String und speichert, wann die Einwilligung erteilt wurde (ISO 8601 Format). Das Feld 'version' ist ein String und zeigt die Version der Consent-Konfiguration an, um zu erkennen, wenn ein Nutzer erneut zustimmen muss (Re-Consent bei Config-Updates).

Schritt 2.3 — Consent-Persistenz:
- Speichere als consent_status Cookie (JSON-encoded, HttpOnly: false da Client-seitig lesbar)
- Cookie-Laufzeit: 365 Tage (DSGVO erlaubt max. 12 Monate, dann Re-Consent)
- SameSite: Lax, Secure: true (nur HTTPS)
- Bei Version-Änderung: Re-Consent erzwingen (Banner erneut anzeigen)

Schritt 2.4 — Consent-Integration mit Analytics (Phase 13):
- Das Analytics-Modul prüft bei JEDEM trackEvent() den Consent-Status
- GA4 wird NUR aktiviert wenn analytics === true
- Calendly-Widget wird NUR geladen wenn marketing === true
- Vercel Analytics läuft IMMER (cookieless, kein Consent nötig)
- Google Consent Mode V2: gtag('consent', 'default', { analytics_storage: 'denied' }) → nach Consent: gtag('consent', 'update', { analytics_storage: 'granted' })

Schritt 2.5 — Cookie-Einstellungen nachträglich ändern:
- Ein Link "Cookie-Einstellungen" im Footer öffnet ein Modal mit den Kategorien
- Nutzer kann jederzeit Consent widerrufen oder erweitern
- Bei Widerruf: Entsprechende Cookies werden gelöscht, Scripts deaktiviert

Schritt 2.6 — Cookie-Inventar für Datenschutzerklärung: Erstelle eine maschinenlesbare Datendatei in src/lib/cookie-inventory.ts, die als Single Source of Truth für alle Cookies auf der Website dient. Diese Datei exportiert eine konstante Array namens COOKIE_INVENTORY, das die Details aller gesetzten Cookies enthält. Jeder Eintrag im Array ist ein Objekt mit folgenden Eigenschaften: 'name' (Cookie-Name wie 'consent_status'), 'category' (one of: 'essential', 'analytics', 'marketing'), 'duration' (wie lange das Cookie bestehen bleibt, z.B. '365 Tage'), 'purpose' (Zweck auf Deutsch), und 'provider' (Quelle, wie 'Eigen' für hauseigene Cookies oder 'Google' für Google Analytics Cookies). Beispiele: consent_status ist essentiell, 365 Tage, speichert die Cookie-Einwilligung, Provider ist Eigen. visitor_type ist essentiell, unterscheidet Erste und wiederkehrende Besucher. _ga und _ga_* sind Analytics-Cookies von Google mit 2-jähriger Dauer. experiment_* sind essentielle Cookies für A/B-Tests mit 30 Tagen Dauer. Dieses Inventar wird von der Datenschutzerklärungskomponente importiert und automatisch gerendert, sodass es keine Duplikation gibt und die Dokumentation immer aktuell ist.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: DATENSCHUTZERKLÄRUNG UND IMPRESSUM

Schritt 3.1 — Datenschutzerklärung (/datenschutz):
Erstelle eine vollständige Datenschutzerklärung als Seite. Inhalt:

1. Verantwortlicher: Name, Adresse, Kontaktdaten (aus den Unternehmensdaten)
2. Datenschutzbeauftragter: Falls erforderlich (>20 Mitarbeiter mit regelmäßiger Datenverarbeitung)
3. Erhebung personenbezogener Daten:
   - Kontaktformular (Formspree): Welche Daten, Zweck, Rechtsgrundlage, Empfänger, Speicherdauer
   - Terminbuchung (Calendly): Welche Daten, Zweck, Rechtsgrundlage, Empfänger
   - Website-Analyse (GA4): Was wird erfasst, Consent-Pflicht, Anonymisierung, Opt-Out
   - Vercel Analytics: Cookieless, aggregiert, kein Consent nötig
4. Cookies und Tracking:
   - Cookie-Tabelle (automatisch aus COOKIE_INVENTORY generiert — SSOT!)
   - Kategorien erklären (Essentiell, Analyse, Marketing)
   - Hinweis auf Cookie-Einstellungen
5. Rechte der betroffenen Person:
   - Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17)
   - Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21)
   - Widerruf der Einwilligung (Art. 7 Abs. 3)
   - Beschwerderecht bei der Aufsichtsbehörde
6. Datenübermittlung in Drittländer (USA):
   - EU-US Data Privacy Framework Status
   - Standardvertragsklauseln als Absicherung
7. SSL-Verschlüsselung: Hinweis auf HTTPS
8. Hosting: Vercel (Standort, DPA)

WICHTIG: Die Cookie-Tabelle wird aus COOKIE_INVENTORY importiert und als React-Komponente gerendert. Wenn ein neues Cookie hinzugefügt wird, aktualisiert sich die Datenschutzerklärung automatisch.

Schritt 3.2 — Impressum (/impressum):
Vollständiges Impressum nach §5 TMG:
- Firmenname, Rechtsform
- Vertretungsberechtigte Person(en)
- Postanschrift (KEIN Postfach)
- Telefon, E-Mail
- Umsatzsteuer-ID (falls vorhanden)
- Handelsregister und Registernummer (falls eingetragen)
- Zuständige Aufsichtsbehörde (falls regulierter Beruf)
- Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
- Streitschlichtung: Link zur EU-OS-Plattform (https://ec.europa.eu/consumers/odr)

Schritt 3.3 — Verlinkung:
- Datenschutz und Impressum Links im Footer (IMMER sichtbar, auf JEDER Seite)
- Links in der Cookie-Banner-Erklärung
- Links bei jedem Formular ("Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.")

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — SECURITY-HEADERS UND CSP-HARDENING
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: CONTENT SECURITY POLICY (CSP)

Schritt 4.1 — CSP-Architektur:
Implementiere die CSP über Next.js Security Headers in next.config.ts (oder middleware.ts):

Basis-Policy: Implementiere eine strikte Content Security Policy als HTTP-Header. Die Policy hat folgende Direktiven: 'default-src' ist auf 'self' gesetzt, was bedeutet, dass standardmäßig nur Ressourcen von der gleichen Origin geladen werden. 'script-src' erlaubt Scripts von der eigenen Domain ('self'), einem zufälligen Nonce für Inline-Scripts ('{RANDOM}' wird bei jedem Request durch einen kryptographischen Wert ersetzt), von Calendly Assets und vom Google Tag Manager. 'style-src' erlaubt Styles von der eigenen Domain, erlaubt auch inline Styles (mit 'unsafe-inline'), und von Calendly. 'img-src' erlaubt Bilder von der eigenen Domain, von Data-URIs (inline Bilder), von HTTPS-Quellen und von Blob-URIs. 'font-src' erlaubt Schriftarten nur von der eigenen Domain. 'connect-src' erlaubt Verbindungen zu der eigenen Domain, zu Formspree.io, Google Analytics, Calendly und Vercel Web Vitals. 'frame-src' erlaubt Iframes nur von Calendly. 'base-uri' beschränkt die HTML-base-Element-URI auf die eigene Domain. 'form-action' erlaubt Formularabsendungen nur an die eigene Domain oder zu Formspree. 'frame-ancestors' wird auf 'none' gesetzt, um zu verhindern, dass die Website in Iframes eingebettet wird (verhindert Clickjacking). 'upgrade-insecure-requests' zwingt automatisches Upgrade aller HTTP-Anfragen zu HTTPS.

Schritt 4.2 — Nonce-basierte Script-Ausführung:
Für Inline-Scripts (Next.js generiert welche):
- Generiere eine kryptographische Nonce pro Request in middleware.ts
- Setze die Nonce im CSP-Header: script-src 'nonce-{NONCE}'
- Übergib die Nonce an Next.js via headers()
- Next.js Script-Komponente unterstützt nonce-Prop: <Script nonce={nonce} />

ALTERNATIV (einfacher): script-src 'self' 'unsafe-inline' — weniger sicher aber kompatibler. Dokumentiere die Entscheidung.

Schritt 4.3 — CSP-Reporting:
- Setze report-uri oder report-to Header
- Erstelle eine API-Route /api/csp-report die Violations loggt (console.error)
- KEIN externer CSP-Reporting-Service (kein Sentry, kein Report-URI.com)
- Log-Format: { violatedDirective, blockedURI, documentURI, timestamp }

Schritt 4.4 — CSP im Report-Only Modus testen:
ZUERST: Content-Security-Policy-Report-Only Header setzen. Beobachte die Violations. Erst wenn 0 Violations über 48h → auf enforcing umschalten.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: SECURITY-HEADERS HARDENING

Schritt 5.1 — Vollständiges Header-Set:
Konfiguriere in next.config.ts unter headers():

Schritt 5.1 — Vollständiges Header-Set: Definiere ein TypeScript-Array namens securityHeaders in der next.config.ts-Datei. Dieses Array enthält eine Liste von Objekten, die jeweils einen HTTP-Security-Header definieren. Der erste Header 'X-DNS-Prefetch-Control' mit Wert 'on' aktiviert DNS-Prefetching für bessere Performance. Der Header 'Strict-Transport-Security' mit Wert 'max-age=63072000; includeSubDomains; preload' erzwingt HTTPS für 2 Jahre, wendet es auf Subdomains an, und signalisiert, dass die Domain für HSTS-Preload registriert ist. 'X-Content-Type-Options' mit Wert 'nosniff' verhindert MIME-Sniffing. 'X-Frame-Options' mit Wert 'DENY' verhindert, dass die Website in Iframes eingebettet wird. 'X-XSS-Protection' mit Wert '0' deaktiviert den Browser-XSS-Filter, da moderne CSP dieser Funktion überlegen ist. 'Referrer-Policy' mit Wert 'strict-origin-when-cross-origin' kontrolliert, welche Referrer-Information bei Cross-Site-Requests gesendet wird. 'Permissions-Policy' mit Wert 'camera=(), microphone=(), geolocation=(), interest-cohort=()' deaktiviert den Zugriff auf Kamera, Mikrofon, Geolocation und die Privacy-invasive FLoC/Topics API.

Schritt 5.2 — Permissions-Policy granular setzen:
- camera=(): Kein Kamerazugriff
- microphone=(): Kein Mikrofonzugriff
- geolocation=(): Kein Standortzugriff
- interest-cohort=(): Opt-Out aus FLoC/Topics API (Privacy)
- payment=(): Keine Payment Request API (nicht benötigt)
- usb=(), bluetooth=(): Nicht benötigt

Schritt 5.3 — HSTS Preload:
- Registriere die Domain bei hstspreload.org
- Voraussetzung: HSTS-Header mit includeSubDomains und preload Direktive
- Prüfe: Alle Subdomains unterstützen HTTPS

Schritt 5.4 — Header-Validierung:
Teste alle Headers mit:
- securityheaders.com → Ziel: A+ Rating
- Mozilla Observatory → Ziel: A+ Rating
- Manuell: curl -I https://domain.de und jeden Header prüfen

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — OWASP TOP 10 ABSICHERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: INPUT-SANITISIERUNG UND XSS-PRÄVENTION

Schritt 6.1 — React's Built-in XSS-Schutz:
React escaped standardmäßig alle Werte in JSX. ABER:
- NIEMALS dangerouslySetInnerHTML verwenden (außer für sanitisierten Markdown-Output)
- Grep nach dangerouslySetInnerHTML in der gesamten Codebase. Jede Verwendung prüfen und absichern oder entfernen.
- Falls Markdown gerendert wird: Verwende eine Sanitisierung-Library (z.B. sanitize-html oder DOMPurify) VOR dem Rendering

Schritt 6.2 — URL-Parameter-Sanitisierung:
Jeder URL-Parameter (searchParams) der in der UI angezeigt wird:
- Escape HTML-Entities
- Validiere gegen erlaubte Werte (Whitelist, nicht Blacklist)
- Beispiel: Blog-Suche — der Suchbegriff wird angezeigt: "Ergebnisse für: {query}" → query muss escaped sein
- Implementiere als sanitizeSearchParam(param: string): string Utility

Schritt 6.3 — Formular-Input-Validierung (Defense-in-Depth):
Die Zod-Schemas aus Phase 5 und Phase 15 sind die erste Verteidigungslinie:
- Client-seitige Validierung (UX)
- Server-seitige Re-Validierung in API-Routes (falls vorhanden)
- Formspree validiert serverseitig (dritte Linie)

Zusätzliche Maßnahmen:
- Max-Length auf allen Input-Feldern (HTML-Attribut UND Zod-Schema)
- Keine SQL oder NoSQL-Injection möglich (kein Datenbank-Backend)
- E-Mail-Validierung: Strikt gegen RFC 5322

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: CSRF-SCHUTZ UND FORMULARSICHERHEIT

Schritt 7.1 — CSRF bei Formspree:
Formspree-Formulare senden direkt an Formspree's Server (nicht an eine eigene API-Route). CSRF-Schutz:
- Formspree verwendet Origin-Checking (nur erlaubte Domains können submittieren)
- Konfiguriere die erlaubte Domain im Formspree-Dashboard
- SameSite-Cookies: Alle eigenen Cookies haben SameSite=Lax (verhindert Cross-Site-Request)

Schritt 7.2 — CSRF bei eigenen API-Routes:
Falls eigene API-Routes existieren (/api/analytics, /api/csp-report, /api/webhook/formspree):
- Prüfe Origin-Header: request.headers.get('origin') muss die eigene Domain sein
- Prüfe Referer-Header als Fallback
- Optional: Custom CSRF-Token via Cookie + Header Double-Submit Pattern

Schritt 7.3 — Honeypot-Validierung härten:
Das Honeypot-Feld (_gotcha) aus Phase 15:
- Visuell versteckt (position: absolute; left: -9999px; tabindex: -1)
- aria-hidden="true" (Screenreader sollen es ignorieren)
- autocomplete="off" (Browser sollen es nicht befüllen)
- Wenn ausgefüllt: Submission wird SILENT blockiert (kein Fehler an den Bot, einfach Success simulieren)

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: RATE-LIMITING UND DDOS-GRUNDSCHUTZ

Schritt 8.1 — Client-seitiges Rate-Limiting:
Für das Kontaktformular:
- Nach erfolgreichem Submit: Deaktiviere den Button für 60 Sekunden
- Speichere den Timestamp des letzten Submits im sessionStorage
- Bei erneutem Submit innerhalb von 60s: Zeige "Bitte warten Sie einen Moment" statt den Request zu senden
- Dies ist UX-Schutz, NICHT Security-Schutz (Client-seitig umgehbar)

Schritt 8.2 — Server-seitiges Rate-Limiting (API-Routes):
Falls eigene API-Routes existieren:
- Implementiere ein einfaches In-Memory-Rate-Limiting basierend auf IP
- Verwende Next.js Middleware oder den API-Route-Handler
- Limit: 10 Requests pro Minute pro IP auf /api/*
- Bei Überschreitung: 429 Too Many Requests mit Retry-After Header
- WICHTIG: In-Memory-Store funktioniert nur mit einem Server-Instanz (für Vercel: Edge Middleware mit KV oder einfach Client-seitig schützen)

Schritt 8.3 — Formspree's eingebauter Schutz:
Formspree hat eingebautes Rate-Limiting und Spam-Schutz. Dokumentiere:
- Rate-Limit: 50 Submissions/Monat (Free) oder gemäß Plan
- Spam-Filter: Automatisch aktiv
- Honeypot: Konfiguriert (_gotcha)
- reCAPTCHA: DEAKTIVIERT (wir verwenden Honeypot — besser für UX und Accessibility)

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — DEPENDENCY-SECURITY UND TESTING
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: DEPENDENCY-AUDIT UND SUPPLY-CHAIN-SECURITY

Schritt 9.1 — npm audit:
Führe npm audit aus und dokumentiere JEDE Vulnerability:
- Critical: SOFORT beheben (npm audit fix oder manuelles Upgrade)
- High: Innerhalb dieser Phase beheben
- Moderate: Dokumentieren und im nächsten Sprint beheben
- Low: Dokumentieren

Schritt 9.2 — Abhängigkeiten minimieren:
Prüfe JEDE Dependency in package.json:
- Wird sie tatsächlich verwendet? (Grep nach Imports)
- Gibt es eine kleinere Alternative? (z.B. date-fns statt moment)
- Kann die Funktionalität nativ implementiert werden? (z.B. eigene cn() statt clsx + tailwind-merge)
- Entferne unbenutzte Dependencies

Schritt 9.3 — Lock-File-Integrität:
- package-lock.json oder pnpm-lock.yaml MUSS im Git sein
- npm ci statt npm install in CI (reproduzierbare Builds)
- Prüfe: Lock-File ist aktuell und konsistent mit package.json

Schritt 9.4 — Renovate/Dependabot:
Falls GitHub verwendet wird:
- Konfiguriere Dependabot (.github/dependabot.yml) für automatische Security-Updates
- Nur Patch- und Minor-Updates automatisch erstellen
- Major-Updates manuell reviewen

Schritt 9.5 — Environment-Variables Security:
- Prüfe: KEINE Secrets in NEXT_PUBLIC_* Variables (nur öffentliche IDs)
- Prüfe: .env.local ist in .gitignore
- Prüfe: Keine API-Keys oder Secrets im Client-Bundle (grep im .next/static Ordner)
- Formspree Form-ID ist öffentlich (NEXT_PUBLIC_FORMSPREE_FORM_ID) — das ist OK, sie ist nicht secret
- Calendly URL ist öffentlich — OK

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: SECURITY-TESTING UND PENETRATIONSTEST-CHECKLISTE

Schritt 10.1 — Automatisierte Security-Tests:
Erstelle tests/security/ mit folgenden Tests:

security-headers.test.ts:
- Teste: Alle Security-Headers sind in der Response vorhanden
- Teste: CSP enthält keine unsafe-eval (oder dokumentierte Ausnahme)
- Teste: HSTS ist gesetzt mit korrektem max-age
- Teste: X-Frame-Options ist DENY
- Teste: Referrer-Policy ist gesetzt

csp-validation.test.ts:
- Teste: CSP erlaubt nur die dokumentierten Quellen
- Teste: CSP blockiert inline-scripts (oder nonce ist korrekt)
- Teste: CSP erlaubt Formspree, Calendly, GA4, Vercel Analytics — und NICHTS anderes

input-sanitization.test.ts:
- Teste: XSS-Payloads in Suchparametern werden escaped
- Teste: HTML-Injection in Formulardaten wird neutralisiert
- Teste: Überlange Eingaben werden abgeschnitten (max-length)

Schritt 10.2 — Manuelle Penetrationstest-Checkliste:
Erstelle docs/SECURITY-CHECKLIST.md:

□ XSS: Versuche <script>alert(1)</script> in jedem Eingabefeld und URL-Parameter
□ CSRF: Versuche ein Formular von einer anderen Domain abzusenden
□ Clickjacking: Versuche die Website in einem iframe einzubetten
□ Open Redirect: Versuche einen redirect-Parameter zu manipulieren
□ Information Disclosure: Prüfe ob Fehlerseiten Stack-Traces zeigen
□ HTTP Methods: Prüfe ob unerwartete Methods (PUT, DELETE) auf API-Routes möglich sind
□ Cookie Security: Prüfe Secure, HttpOnly, SameSite Flags auf allen Cookies
□ HTTPS: Prüfe ob HTTP auf HTTPS redirectet (kein Mixed Content)
□ Directory Traversal: Versuche /../ in URL-Pfaden
□ Source Code Exposure: Prüfe ob .env, .git, oder Source-Maps öffentlich zugänglich sind

Schritt 10.3 — Lighthouse Best Practices:
Führe Lighthouse "Best Practices" Audit aus:
- Ziel: 100/100
- Häufige Probleme: Mixed Content, fehlende HTTPS, vulnerable Libraries

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 16 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 11.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🔒 Security & DSGVO:
- Cookie-Consent-Architektur und Consent-Kategorien
- CSP-Policy (vollständig dokumentiert)
- Security-Headers (vollständige Liste)
- DSGVO-Verarbeitungsverzeichnis (Zusammenfassung)
- Datenschutzerklärung- und Impressum-Pfade
- Dependency-Audit-Ergebnis
- Security-Test-Abdeckung

Schritt 11.2 — .upgrade-state.md finalisieren.

Schritt 11.3 — Handoff an Phase 17:
  IMPLEMENTIERUNGSANWEISUNG (CODE-BLOCK, 8 Zeilen):
    Implementiere den beschriebenen Block mit folgenden Kernaspekten:
    — - Cookie-Consent-System: [Implementiert, Pfade]
    — - CSP-Policy: [Modus: Report-Only oder Enforcing]
    — - Security-Headers: [securityheaders.com Rating]
    — - npm audit: [Ergebnis: 0 vulnerabilities]
    — - Environment-Variables: [Dokumentiert, keine Secrets im Client]
    — - Formspree DSGVO-Status: [AVV vorhanden?]
    — - Calendly DSGVO-Status: [AVV vorhanden?]


═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 16
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ DSGVO-Verarbeitungsverzeichnis vollständig dokumentiert
□ AVV-Status für Formspree, Calendly, Google, Vercel dokumentiert
□ Drittlandtransfer-Rechtsgrundlage dokumentiert (DPF oder SCCs)
□ Cookie-Consent-Banner: 3 Optionen (Alle/Essentiell/Einstellungen), DSGVO-konform
□ Consent-Kategorien: Essential (immer), Analytics (Consent), Marketing (Consent)
□ Consent-Persistenz: Cookie mit Timestamp und Version
□ Analytics-Integration: KEIN GA4-Event ohne Consent
□ Vercel Analytics: Läuft ohne Consent (cookieless)
□ Datenschutzerklärung: Vollständig, automatische Cookie-Tabelle aus COOKIE_INVENTORY
□ Impressum: Vollständig nach §5 TMG
□ Footer-Links: Datenschutz + Impressum auf jeder Seite sichtbar
□ CSP: Implementiert (Report-Only oder Enforcing)
□ CSP erlaubt nur: self, Formspree, Calendly, GA4, Vercel Analytics
□ CSP-Reporting auf eigene API-Route (KEIN externes SaaS)
□ Security-Headers: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
□ securityheaders.com: A+ Rating (oder dokumentierte Abweichung)
□ Kein dangerouslySetInnerHTML ohne Sanitisierung
□ URL-Parameter-Sanitisierung implementiert
□ Honeypot-Feld gehärtet (visuell versteckt, aria-hidden, autocomplete off)
□ Client-seitiges Rate-Limiting auf Kontaktformular
□ npm audit: 0 Critical, 0 High Vulnerabilities
□ Keine unbenutzten Dependencies
□ Lock-File im Git, npm ci in CI
□ Keine Secrets in NEXT_PUBLIC_* Variables
□ Keine Secrets im Client-Bundle
□ Security-Tests: Headers, CSP, Input-Sanitisierung
□ Penetrationstest-Checkliste erstellt (docs/SECURITY-CHECKLIST.md)
□ Lighthouse Best Practices: 100/100
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 17


═══════════════════════════════════════════════════════════════════════════════
═══ 
─────────────────────────────────────────────────────────────────────────────
ERWEITERTES EXIT-PROTOKOLL (DIRECTOR OF ENGINEERING):
─────────────────────────────────────────────────────────────────────────────
1. ATOMIC VALIDATION:
   [ ] npx tsc --noEmit → 0 Errors
   [ ] npm run lint → 0 Errors/Warnings
   [ ] npm run build → SUCCESS
2. PPI-BEWERTUNG (GESETZ 4):
   [ ] Kein Code-Block mit CRITICAL Impact ohne dokumentierte Begruendung
   [ ] Alle WARNING-Impacts mit Mitigationsstrategie versehen
3. CODE-REVIEW K1-K7 (GESETZ 6):
   [ ] K1 Architektur: Max 150 Zeilen/Datei, max 20 Zeilen/Funktion
   [ ] K2 Type Safety: Null any, Zod fuer externe Daten
   [ ] K3 Performance: Stabile Props, Code Splitting
   [ ] K4 Security: Keine exponierten Secrets
   [ ] K5 Design System: Tokens statt Magic Numbers
   [ ] K6 Accessibility: Semantische Elemente, Focus States
   [ ] K7 Premium Polish: Skeleton Screens, Error States
4. KNOWLEDGE-BASE UPDATE:
   [ ] .project-knowledge-base.md mit neuen Erkenntnissen aktualisiert
   [ ] Falls Bug-Fix: RCA im Confiteor-Format (GESETZ 7) dokumentiert
5. SELF-OPTIMIZATION CHECK:
   [ ] Benennungen konsistent (camelCase Funktionen, PascalCase Komponenten)
   [ ] JSDoc auf allen exportierten Funktionen
   [ ] Keine TODO/FIXME ohne Ticket-Referenz
6. CONTEXT-UPDATE UND HANDOFF:
   [ ] .upgrade-state.md aktualisiert (aktuelle Phase, offene Issues, naechste Phase)
   [ ] .ai-architectural-context.md aktualisiert (neue Patterns, Entscheidungen)
   [ ] Naechste Phase wird automatisch getriggert (AUTONOME VERKETTUNG)



═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY-CHEATCODE-BLOCK: GPU-BESCHLEUNIGTE RENDERING-PATTERNS
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-50: SPRITE-CACHING & GPU-COMPOSITING (PERFORMANCE-ARCHITEKTUR)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Animationen die nicht auf der GPU laufen sind der #1 Jank-Verursacher.
  Antigravity nutzt Sprite-Caching und GPU-Texturen fuer 60fps-Garantie.

  PFLICHT-IMPLEMENTIERUNG:
    REGEL 1: Nur transform und opacity animieren.
      NIEMALS: width, height, top, left, margin, padding animieren.
      IMMER: translateX/Y/Z, scale, rotate, opacity.

    REGEL 2: will-change als Performance-Hint (sparsam einsetzen).
      NUR auf Elementen die AKTIV animiert werden.
      will-change: transform auf Scroll-animierte Elemente.
      NACH Animation entfernen (Memory-Leak-Risiko).

    REGEL 3: GPU-Layer-Promotion fuer komplexe Animationen.
      transform: translateZ(0) erzwingt eigenen Compositing-Layer.
      NUR wenn noetig — zu viele Layer = Memory-Overhead.

    REGEL 4: Offscreen-Canvas fuer Partikel/Hintergruende.
      Komplexe Hintergrund-Animationen in OffscreenCanvas auslagern.
      Haupt-Thread bleibt frei fuer User-Interaktion.

  PERFORMANCE-CHECKLISTE:
    [ ] Chrome DevTools → Performance Tab: Kein rotes Jank
    [ ] Alle Animationen auf GPU (Layers Panel pruefen)
    [ ] will-change nur auf aktiv animierten Elementen
    [ ] Kein Layout-Thrashing (kein Read-Write-Read in einem Frame)
    [ ] requestAnimationFrame fuer JS-basierte Animationen
    [ ] 60fps auf Mid-Range-Geraeten (nicht nur High-End)
    [ ] Animations-Budget: Max 16ms pro Frame (60fps = 1000ms/60)


CHAIN-EXIT-FOOTER ═══ SEQ-36 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-26 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-27)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-37 → ZERO-BREAKAGE-PHASE-17.md
   → Lese ZERO-BREAKAGE-PHASE-17.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-27

═══ PHASE SEQ-26 → SEQ-27: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-26 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-26 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-26 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-37 → ZERO-BREAKAGE-PHASE-27.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-27
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-27 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-26: SEO-Dominierung & Indexierung ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-26 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-27)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-37 → ZERO-BREAKAGE-PHASE-27.md
   → Lese ZERO-BREAKAGE-PHASE-27.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-27



═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: IMAGE CDN & ASSET OPTIMIZATION
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-14: AUTOMATISCHES FORMAT-SWITCHING (AVIF/WEBP/JPEG)
───────────────────────────────────────────────────────────────────────────────
  WARUM: AVIF ist 50% kleiner als WebP, WebP 30% kleiner als JPEG.
  PFLICHT-IMPLEMENTIERUNG:
    Next.js Image Component: Konvertiert automatisch zu AVIF/WebP.
    ALLE Bilder MUESSEN ueber next/image laufen (KEIN natives <img>).
    Externe Bilder: In next.config.ts unter images.remotePatterns registrieren.

  KONFIGURATION:
    In der next.config.ts (bzw. dem framework-aequivalenten Config-File) wird
    das images-Objekt konfiguriert: Die erlaubten Formate sind AVIF und WebP
    (in dieser Priorisierung). Die deviceSizes definieren die Breakpoints
    fuer responsive Bilder: 640, 750, 828, 1080, 1200, 1920 und 2048 Pixel.
    Die imageSizes fuer Icons und Thumbnails: 16, 32, 48, 64, 96, 128, 256
    und 384 Pixel. Der minimumCacheTTL wird auf 31536000 Sekunden gesetzt,
    was exakt einem Jahr entspricht.

  VALIDIERUNG:
    [ ] Kein einziges natives <img> Tag im gesamten Projekt
    [ ] AVIF als primaeres Format im Response-Header bestaetigt
    [ ] Alle Bilder haben explizite width + height (kein CLS)
    [ ] Bilder above-the-fold haben priority={true}
    [ ] Bilder below-the-fold haben loading="lazy" (Default)

CHEATCODE CC-15: FONT-LOADING PERFORMANCE
───────────────────────────────────────────────────────────────────────────────
  WARUM: Fonts sind der #1 CLS-Verursacher und blockieren oft First Paint.
  PFLICHT-IMPLEMENTIERUNG:
    next/font fuer ALLE Fonts (Google Fonts ODER lokale Fonts).
    KEIN <link> Tag fuer Google Fonts (blockiert Rendering).
    Font-Display: swap (Text sofort sichtbar, Font tauscht spaeter).
    Variable Fonts bevorzugen (1 File statt 6 Weight-Files).

  PATTERN:
    Importiere die gewuenschten Schriftarten ueber das Framework-eigene
    Font-System (z.B. next/font/google). Instanziiere jede Schriftart mit
    dem Subset "latin", display "swap" und einer CSS-Variable (z.B.
    --font-sans fuer die Grundschrift, --font-serif fuer die Akzentschrift).
    Im Body-Element werden beide Variablen als Klassen angewendet, sodass
    sie im gesamten Projekt ueber CSS Custom Properties verfuegbar sind.

  VALIDIERUNG:
    [ ] Alle Fonts ueber next/font geladen (KEIN externes <link>)
    [ ] Font-Display: swap konfiguriert
    [ ] Variable Fonts wo verfuegbar
    [ ] Kein FOUT (Flash of Unstyled Text) sichtbar
    [ ] Kein CLS durch Font-Swap (size-adjust konfiguriert)

CHEATCODE CC-16: CRITICAL CSS & BUNDLE OPTIMIZATION
───────────────────────────────────────────────────────────────────────────────
  WARUM: Jedes Kilobyte zaehlt fuer Core Web Vitals.
  PFLICHT-IMPLEMENTIERUNG:
    Tailwind Purge: Nur verwendete Klassen im Build.
    Dynamic Imports fuer schwere Komponenten (Charts, Maps, Editoren).
    Bundle Analyzer: Regelmaessig pruefen, keine >100KB Chunks.

  PATTERN:
    Schwere Komponenten (Charts, Maps, Editoren) werden per Dynamic Import
    geladen. Die dynamische Import-Funktion erhaelt den Pfad zur Komponente.
    Als loading-Option wird eine Skeleton-Komponente uebergeben, die waehrend
    des Ladens angezeigt wird. Fuer Komponenten die das Window-Objekt
    benoetigen (z.B. Charts) wird ssr auf false gesetzt, sodass sie nur
    clientseitig gerendert werden.

  PERFORMANCE-BUDGETS:
    First Load JS pro Route:    < 100KB (gzipped)
    Total Bundle:               < 300KB (gzipped)
    Largest Contentful Paint:   < 2.5s
    Cumulative Layout Shift:    < 0.1
    First Input Delay:          < 100ms
    Time to Interactive:        < 3.5s


═══ SEQ-27: HANDOFF AKTIV ═══
