Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 14 der Engineering-Pipeline (API Routes und Backend) als robuste Backend-Schicht zu implementieren. API-Endpoints, Validierung, Error-Handling und Typsicherheit muessen Zero-Defect sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-34 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-33 → ZERO-BREAKAGE-PHASE-13.md
→ NÄCHSTE: SEQ-35 → ZERO-BREAKAGE-PHASE-15.md
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


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine vollständige Testing Pyramid & Quality Infrastructure für das Zero-Breakage & Self-Optimizing Upgrade Pipeline-System zu etablieren.

═══ ZERO-BREAKAGE PROTOKOLL ═══

FIVE PILLARS:
1. READ-BEFORE-WRITE: Understand code paths completely before modification
2. SURGICAL INJECTION: Minimal, targeted changes; maximum precision
3. ATOMIC VALIDATION: npm run build && npm run lint && npx tsc --noEmit post each change
4. STATE HANDOFF: .upgrade-state.md tracks context across phases
5. SELF-OPTIMIZING LOOP: .ai-architectural-context.md evolves continuously

TECH-STACK (IMMUTABLE):
- Core: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md (Auto-Detection via package.json)
- Styling: Tailwind CSS, CSS Modules, or CSS Custom Properties
- External Services: ONLY Formspree (contact form) and Calendly (booking)
- FORBIDDEN: Headless CMS, external AI-APIs, Sentry/error-tracking SaaS, newsletters, i18n frameworks

GOLDEN RULE: Code ist IMMER die SSOT (Single Source of Truth)

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Before any test implementation (ULTRATHINK-PRE-FLIGHT):
1. Read current test coverage baseline (if any) — AUDIT:
   - Suche existierende test-Dateien: find src -name '*.test.ts*' -o -name '*.spec.ts*'
   - Installiere vitest: npm list vitest (falls nicht vorhanden)
   - Run: npm run test:coverage (falls Script existiert) → dokumentiere Baseline
   - Falls Tests nicht existieren: Baseline = 0%, Zielwert = 80%+
2. Identify critical user journeys: Contact → Formspree, Calendar → Calendly, Content → Navigation — MAPPING:
   - Schreibe Test-Personas: new-user (landing → service), returning-user (blog → form), converter (form → confirmation)
   - Trace journeys: JEDE Journey muss ≥3 Komponenten durchlaufen
   - Dokumentiere: Alle Micro-Conversions pro Journey (button-click → form-open → form-submit)
   - Priorisiere Journeys nach Conversion-Value (form > booking > engagement)
3. Map component hierarchy: Atoms → Molecules → Organisms → Pages — STRUCTURE:
   - Create tests/component-hierarchy.json mit vollständiger Struktur
   - Für JEDEN Level: Zähle Komponenten, definiere minimale Test-Cases pro Level
   - Atome: ≥3 test cases (render, state change, event handler)
   - Organismen: ≥5 test cases (integration, error states, async behavior)
   - Pages: ≥8 test cases (full user journey, responsive, accessibility)
4. Define quality gates (IMMUTABLE CONSTRAINTS):
   - Unit tests: ≥80% line coverage, ≥70% branch coverage
   - Integration tests: ≥80% happy-path, ≥60% error-path coverage
   - E2E tests: ≥90% critical journeys pass, ≥90 Lighthouse, 0 console errors
   - Accessibility: 0 axe-core violations on ALL pages (WCAG 2.1 AA)
   - Performance: LCP <2.5s, CLS <0.1, FID <100ms on all routes
5. Document testing strategy in .ai-architectural-context.md with:
   - Test pyramid ratio (unit:integration:e2e = 60:20:20)
   - Critical journey mappings with expected test cases
   - Coverage baseline and target per component type
   - Quality gate thresholds and measurements

───────────────────────────────────────

═══ BLOCK A — UNIT-TESTS (FUNDAMENT DER PYRAMIDE) ═══

ULTRATHINK-TASK 1: VITEST SETUP UND KONFIGURATION

1.1 Install dependencies: Installiere die folgenden Dev-Dependencies mit npm install -D: vitest (Test-Framework), @vitest/ui (UI für Vitest), jsdom (DOM-Implementierung für Tests), @testing-library/react (React Testing Library), @testing-library/jest-dom (DOM-Matcher), @testing-library/user-event (User-Event-Simulation), @vitest/coverage-v8 (Coverage-Provider).

1.2 Create vitest.config.ts: Erstelle eine Vitest-Konfigurationsdatei. Importiere defineConfig aus vitest/config, das React-Plugin aus @vitejs/plugin-react und das path-Modul aus Node.js. Die Standardkonfiguration hat das React-Plugin aktiviert. Im test-Objekt: Setze das Environment auf jsdom für DOM-Simulation, verweise auf die Setup-Datei unter ./tests/setup.ts, aktiviere globale Test-Funktionen. In der coverage-Konfiguration: Nutze v8 als Provider mit Ausgaben in Text-, JSON-, HTML- und LCOV-Formaten. Stelle all auf true für vollständigen Dateiscan. Definiere include-Pattern als src/**/*.{ts,tsx} (alle TypeScript und TSX-Dateien im src-Ordner) und exclude-Pattern mit src/**/*.d.ts (Typ-Definitionen) und src/**/*.stories.tsx (Storybook-Dateien). Setze Coverage-Thresholds auf 80% für lines, functions und statements sowie 70% für branches. Unter resolve.alias: Konfiguriere @ als Alias für path.resolve(__dirname, './src') zur Ermöglichung absoluter Imports.

1.3 Create tests/setup.ts: Erstelle eine Setup-Datei für Vitest. Importiere @testing-library/jest-dom für erweiterte Matcher und das vi-Modul aus vitest. Mocke das Next.js-Router-Modul mit vi.mock('next/router'), das ein useRouter-Hook zurückgibt, welcher ein Objekt mit push als Mock-Funktion, leerem query-Objekt und pathname '/' enthält. Mocke das Next.js-Image-Modul mit vi.mock('next/image') als default-Export, der die props als ein img-HTML-Element mit denselben props rendert. Mocke das Next.js-Fonts-Modul mit vi.mock('next/font/google'), das einen Inter-Export zurückgibt, welcher ein Objekt mit einem style-Property zurückgibt, das ein fontFamily als 'sans-serif' enthält.

1.4 Create tests/test-utils.tsx: Erstelle eine Test-Utility-Datei. Importiere React und render sowie RenderOptions aus @testing-library/react. Definiere eine Komponente AllProviders, die ein Objekt mit children-Property vom Typ React.ReactNode erhält. Diese Komponente rendert ein div-Element mit dem data-testid-Attribut gesetzt auf 'provider-wrapper' und rendert die children-Props darin.

Definiere eine customRender-Funktion, die ein ui-Parameter vom Typ React.ReactElement und optionale options vom Typ Omit<RenderOptions, 'wrapper'> erhält. Diese Funktion ruft render mit dem ui auf und übergibt ein Objekt mit wrapper gesetzt auf AllProviders und den Rest der options. Exportiere alle Exports aus @testing-library/react und exportiere customRender als render-Alias.

1.5 Update package.json scripts: Füge drei npm-Script-Einträge in package.json ein. Das erste Script mit Namen "test" führt vitest ohne zusätzliche Flags aus. Das zweite Script "test:ui" führt vitest mit dem --ui-Flag aus für die interaktive UI. Das dritte Script "test:coverage" führt vitest run mit dem --coverage-Flag aus zur Coverage-Messung.

───────────────────────────────────────

ULTRATHINK-TASK 2: UTILITY-FUNKTIONEN UNIT-TESTEN

2.1 Create tests for validation utilities (src/utils/validation.test.ts): Erstelle Unit-Tests für Validierungsfunktionen. Teste Zod-Schemas wie parseEmail, parsePhoneNumber und parseFormData mit mindestens 3 Fällen pro Schema (gültig, ungültig, Edge-Case). Jedes Schema sollte einen Test für gültige Eingaben, einen für ungültige Eingaben und einen für Edge-Cases (leere Strings, Unicode-Zeichen, SQL-Injection-Versuche) haben. Strukturiere Tests mit describe-Blöcken nach Funktionsnamen und it-Blöcken nach Testfall. Ein Beispiel: describe('validateEmail', ...) mit it-Blöcken für akzeptable, verwerfbare und grenzwertige E-Mail-Adressen.

2.2 Test date/time utilities (src/utils/date.test.ts):
- formatDate, parseISO, getTimeToNow with timezone handling
- Cover: past dates, future dates, timezone conversions, invalid inputs

2.3 Test formatting utilities (src/utils/format.test.ts):
- formatPhoneNumber, formatCurrency, truncateString with edge cases
- Example: truncateString('abcdefg', 3) → 'abc...', truncateString('ab', 3) → 'ab'

2.4 Test custom hooks with renderHook (src/hooks/useContactForm.test.ts): Teste Custom-Hooks wie useContactForm. Nutze die renderHook-Funktion aus @testing-library/react um den Hook zu instantiieren. Verwende act() um State-Updates zu wrappen. Der result.current objekt enthält die Hook-Rückgabe. Teste Form-State-Management durch Setzen von Email, Validation durch Überprüfung von Fehlermeldungen und Submission durch Überprüfung von Callback-Aufrufen.

───────────────────────────────────────

ULTRATHINK-TASK 3: REACT-KOMPONENTEN UNIT-TESTEN

3.1 Atom components (src/components/atoms/*.test.tsx), ≥5 tests each:
- Button: default, disabled, loading, variant, size, onClick
- FormField: value change, validation error, help text, required indicator
- Badge: variants (success/error/warning), sizes
- Avatar: image load, fallback, initial, size
- Skeleton: width, height, animation

3.2 Test structure example (src/components/atoms/Button.test.tsx): Strukturiere Tests für Button-Komponente mit describe-Block. Erstelle fünf it-Blöcke: Der erste rendert Button mit Default-Styling und überprüft mit screen.getByRole('button') ob das Element im Document ist. Der zweite rendert Button mit disabled-Prop und überprüft mit toBeDisabled(). Der dritte erstellt eine Mock-Funktion mit vi.fn(), rendert Button mit onClick-Prop, simuliert Click mit userEvent.click() und überprüft ob die Mock-Funktion aufgerufen wurde. Der vierte rendert Button mit variant="secondary"-Prop und überprüft ob die CSS-Klasse 'bg-gray-200' vorhanden ist mit toHaveClass(). Der fünfte rendert Button, führt axe-Accessibility-Audit durch und überprüft dass keine Violations vorhanden sind.

3.3 Organism components (src/components/organisms/*.test.tsx), ≥8 tests each:
- ContactForm: field rendering, form submission to Formspree, validation, error handling, success message
- FaqSection: accordion toggle, search filtering, keyboard navigation
- Navigation: active link highlighting, mobile menu, responsive layout

3.4 ContactForm integration test (Formspree mocked): Strukturiere einen describe-Block für ContactForm-Tests. Im ersten it-Block: Erstelle eine Mock-Funktion mockFetch mit vi.fn() die mit mockResolvedValue({ ok: true }) eine erfolgreich Response simuliert. Setze global.fetch auf mockFetch. Rendere ContactForm, fülle das Email-Feld mit userEvent.type() unter Verwendung von screen.getByLabelText(/email/i), fülle das Message-Feld ebenfalls, klicke den Send-Button. Nutze waitFor() um sicherzustellen dass mockFetch mit einem String der 'formspree.io' enthält und einem Object mit method 'POST' aufgerufen wurde. Im zweiten it-Block: Rendere ContactForm ohne zu füllen, klicke Send und überprüfe dass eine Validierungsfehler-Nachricht "email is required" angezeigt wird.

3.5 CRITICAL: Run axe-core on EVERY component in EVERY state: Importiere die axe-Funktion aus jest-axe. Für jeden Component-Test: Rendere die Komponente und dekonstruiere den container aus dem render-Rückgabewert. Rufe axe(container) auf um einen Accessibility-Audit durchzuführen. Überprüfe dass results.violations eine leere Liste ist (Länge 0), was bedeutet dass keine WCAG-Verletzungen vorhanden sind.

═══ BLOCK B — INTEGRATION-TESTS ═══

ULTRATHINK-TASK 4: SERVER-LOGIK TESTEN

4.1 Test Formspree wrapper (src/lib/formspree.test.ts):
- Mock fetch for success responses (200 OK)
- Mock validation errors (400 Bad Request)
- Mock rate limiting (429 Too Many Requests)
- Test email sanitization and CORS handling

4.2 Example Formspree test: Strukturiere einen describe-Block für submitFormToFormspree-Funktion. Erstelle ein it-Block: Setze global.fetch auf eine Mock-Funktion mit vi.fn() die mit mockResolvedValue() ein Objekt mit ok: true und einer json-Methode zurückgibt (async Funktion die { success: true } auflöst). Rufe submitFormToFormspree mit einem Objekt auf das email und message enthält. Überprüfe dass result.success gleich true ist. Überprüfe dass global.fetch mit der Formspree-Endpoint-URL 'https://formspree.io/f/YOUR_FORM_ID' und einem beliebigen Objekt aufgerufen wurde.

4.3 Test metadata generation (src/lib/metadata.test.ts):
- generateMetadata for pages, blog posts
- Verify og:title, og:description, og:image, canonical URL
- Test schema.org JSON-LD generation

4.4 Test analytics module (src/lib/analytics.test.ts):
- Consent logic: should not send before user consent
- Page view tracking with metadata
- Event tracking with parameters
- Test with gtag mock

═══ BLOCK C — END-TO-END-TESTS (SPITZE DER PYRAMIDE) ═══

ULTRATHINK-TASK 5: PLAYWRIGHT SETUP

5.1 Install Playwright: Installiere das @playwright/test-Paket als Dev-Dependency mit npm install -D @playwright/test.

5.2 Create playwright.config.ts: Importiere defineConfig und devices aus @playwright/test. Konfiguriere testDir auf './tests/e2e' für E2E-Tests. Setze fullyParallel auf true für parallele Ausführung. forbidOnly prüft ob der CI-Environment-Variable gesetzt ist (strikte Prüfung: doppeltes Ausrufezeichen konvertiert zu boolean). retries wird auf 2 in CI-Umgebung oder 0 lokal gesetzt. workers wird auf 1 in CI-Umgebung gesetzt, lokal undefined für Auto-Erkennung. reporter ist 'html' für HTML-Reports. use-Objekt setzt baseURL auf 'http://localhost:3000', trace auf 'on-first-retry' und screenshot auf 'only-on-failure'. projects-Array definiert fünf Browser-Konfigurationen: chromium (Desktop Chrome), firefox (Desktop Firefox), webkit (Desktop Safari), mobile-chrome (Pixel 5-Gerät) und mobile-safari (iPhone 12-Gerät) — jede nutzt entsprechende Geräte aus dem devices-Import. webServer-Objekt spezifiziert das Startup-Kommando 'npm run build && npm run start', die URL auf 'http://localhost:3000' und reuseExistingServer wird auf true lokal gesetzt (false in CI).

5.3 Create tests/e2e/helpers.ts: Importiere Page und expect aus @playwright/test. Definiere eine async Funktion fillAndSubmitContactForm die einen Page-Parameter und zwei String-Parameter (email, message) erhält. Die Funktion nutzt page.fill() um das Email-Input-Feld zu füllen mit dem Selektor '[name="email"]', page.fill() wieder um das Message-Feld mit '[name="message"]' zu füllen und page.click() um den Submit-Button mit dem Selektor 'button[type="submit"]' zu klicken. Definiere auch eine async Funktion expectAccessibilityNoViolations die einen Page-Parameter erhält. Diese Funktion führt page.evaluate() aus um axe.run() im Browser-Kontext auszuführen, speichert die results und überprüft dass results.violations die Länge 0 hat.

5.4 Update package.json:
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"

───────────────────────────────────────

ULTRATHINK-TASK 6: CRITICAL-PATH E2E-TESTS

6.1 Navigation test (tests/e2e/navigation.spec.ts): Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Navigiere zuerst mit page.goto('/') zur Root-URL. Überprüfe mit expect(page).toHaveTitle() dass der Page-Title ein Regex mit 'Home' enthält. Klicke dann auf den Link mit page.click('a[href="/about"]'). Überprüfe dass die URL mit expect(page).toHaveURL() das Regex /\/about/ enthält. Überprüfe dass der h1-Heading mit page.locator('h1').toContainText() den Text 'About' enthält.

6.2 Contact form test (Formspree mocked): Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Nutze page.route() um alle Anfragen an '**/formspree.io/**' abzufangen und route.abort() um sie zu blocken (Mocking). Navigiere mit page.goto('/contact') zur Kontakt-Seite. Fülle das Email-Input-Feld mit page.fill('[name="email"]', 'test@example.com'). Fülle das Message-Input-Feld mit page.fill('[name="message"]', 'Test message'). Klicke den Submit-Button mit page.click('button[type="submit"]'). Überprüfe dass ein Element mit dem Text 'Thank you' mit expect(page.locator('text=Thank you')).toBeVisible() sichtbar ist, mit einem Timeout von 5000 Millisekunden.

6.3 Calendly widget test: Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Navigiere mit page.goto('/book') zur Booking-Seite. Nutze page.frameLocator('iframe[src*="calendly"]') um das Calendly-Iframe zu lokalisieren (mit CSS-Selektor für src-Attribute die "calendly" enthalten). Überprüfe mit expect() dass ein Element innerhalb des Iframes mit dem data-name-Attribut "event_list" sichtbar ist mit toBeVisible().

6.4 Blog navigation: Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Navigiere mit page.goto('/blog') zur Blog-Seite. Lokalisiere alle Blog-Post-Links mit page.locator('a[href*="/blog/"]') (CSS-Selektor für a-Elemente mit href-Attribut das "/blog/" enthält). Zähle die Anzahl der Post-Links mit await postLinks.count() und überprüfe dass die count größer als 0 ist mit expect(count).toBeGreaterThan(0). Klicke auf den ersten Link mit await postLinks.first().click(). Überprüfe dass ein article-Element sichtbar ist mit expect(page.locator('article')).toBeVisible().

6.5 Responsive mobile: Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Setze die Viewport-Größe mit page.setViewportSize() auf 375px Breite und 812px Höhe (iPhone-Größe). Navigiere mit page.goto('/') zur Root-URL. Lokalisiere das nav-Element mit page.locator('nav') und überprüfe dass es sichtbar ist mit toBeVisible(). Klicke auf den Toggle-Menu-Button mit page.click('[aria-label="Toggle menu"]') (ARIA-Label-Selektor für Accessibility). Überprüfe dass der About-Link innerhalb der Navigation mit expect(page.locator('nav [href="/about"]')).toBeVisible() sichtbar ist nach dem Toggle.

───────────────────────────────────────

ULTRATHINK-TASK 7: ACCESSIBILITY E2E-AUDIT

7.1 Create tests/e2e/accessibility.spec.ts: Importiere test und expect aus @playwright/test. Importiere injectAxe und checkA11y aus axe-playwright.

7.2 Install axe integration: Installiere das axe-playwright-Paket als Dev-Dependency mit npm install -D axe-playwright.

7.3 Audit all routes in 2 modes (Desktop/Mobile): Definiere einen test.describe-Block namens 'Accessibility Audit'. Definiere ein routes-Array mit den Pfaden '/', '/about', '/blog', '/contact' und '/services'. Definiere ein viewports-Array mit zwei Objekten: das erste hat name 'desktop' mit width 1280 und height 720, das zweite hat name 'mobile' mit width 375 und height 812. Nutze zwei verschachtelte for-Schleifen über routes und viewports. Für jede Kombination erstelle einen test-Block mit dynamischem Namen. Setze die Viewport-Größe mit page.setViewportSize(), navigiere zur Route mit page.goto(). Nutze await injectAxe(page) um axe in die Seite einzuspritze. Nutze await checkA11y() um die Accessibility zu prüfen, mit null als Selektor (alle Elemente) und Optionen die detailedReport und detailedReportOptions mit html true enthalten.

7.4 Keyboard navigation walkthrough: Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Navigiere mit page.goto('/') zur Root-URL. Drücke die Tab-Taste mit await page.keyboard.press('Tab') um das nächste Element zu fokussieren. Nutze await page.evaluate() um das document.activeElement?.tagName abzurufen und speichere das Ergebnis in der focused-Variable. Überprüfe dass das Array ['A', 'BUTTON', 'INPUT'] die focused-Variable mit toContain() enthält. Lokalisiere den ersten Button mit page.locator('button').first(). Fokussiere den Button mit await button.focus(). Drücke Enter mit await page.keyboard.press('Enter'). Überprüfe dass eine Aktion occurriert ist (z.B. Navigation, Zustandsänderung).

7.5 Screen reader testing (semantic HTML): Definiere einen test-Block mit einer async Funktion die ein Objekt mit page-Property erhält. Navigiere mit page.goto('/') zur Root-URL. Überprüfe dass die nav-Element mit expect(page.locator('nav')).toBeDefined() vorhanden ist (Navigation-Landmark). Überprüfe dass die main-Element mit expect(page.locator('main')).toBeDefined() vorhanden ist (Main-Content-Landmark). Zähle die Anzahl der h1-Elemente mit await page.locator('h1').count() und überprüfe dass die Anzahl größer als 0 ist mit expect(h1Count).toBeGreaterThan(0) (Überschriften-Struktur).

═══ BLOCK D — VISUAL REGRESSION UND PERFORMANCE-TESTS ═══

ULTRATHINK-TASK 8: VISUAL REGRESSION MIT PLAYWRIGHT

8.1 Create tests/e2e/visual-regression.spec.ts: Importiere test und expect aus @playwright/test.

8.2 Screenshot matrix per route: Definiere einen test.describe-Block namens 'Visual Regression'. Definiere ein routes-Array mit den Pfaden '/', '/about', '/blog' und '/contact'. Definiere ein variants-Array mit zwei Objekten: das erste hat name 'desktop' mit viewport-Objekt (width 1280, height 720), das zweite hat name 'mobile' mit viewport-Objekt (width 375, height 812). Nutze zwei verschachtelte for-Schleifen über routes und variants. Für jede Kombinationerstelle einen test-Block mit dynamischem Namen (route und variant). Setze die Viewport-Größe mit page.setViewportSize(variant.viewport). Navigiere mit page.goto(route). Nutze page.waitForLoadState('networkidle') um auf Netzwerk-Idle zu warten und page.waitForTimeout(500) um 500ms zu warten (Animationen). Nutze expect(page).toHaveScreenshot() um einen Full-Page-Screenshot mit Mask-Farbe '#ff00ff' zu erstellen und zu speichern mit dem Namen aus route.slice(1) (ohne führendes /) und variant.name.

8.3 Component screenshot library: Definiere einen test-Block 'Button component variants'. Navigiere mit page.goto('/storybook?path=/story/button') zur Storybook-Button-Story. Definiere ein variants-Array mit den Strings 'default', 'secondary', 'disabled' und 'loading'. Nutze eine for-Schleife über variants. Für jede Variante lokalisiere den Button mit page.locator() unter Verwendung eines data-variant-Attribut-Selektors (`[data-variant="${variant}"]`). Nutze expect(button).toHaveScreenshot() um einen Screenshot mit dem Namen `button-${variant}.png` zu erstellen und zu speichern.

8.4 Interactive state screenshots: Definiere einen test-Block 'Form validation states'. Navigiere mit page.goto('/contact') zur Kontakt-Seite. Lokalisiere das form-Element mit page.locator('form') und erstelle einen Screenshot mit expect(page.locator('form')).toHaveScreenshot('form-pristine.png'). Klicke auf den Submit-Button mit page.click('button[type="submit"]') ohne Formular auszufüllen (um Validierungsfehler zu triggern). Erstelle erneut einen Screenshot mit expect(page.locator('form')).toHaveScreenshot('form-errors.png'). Fülle das Email-Feld mit page.fill('[name="email"]', 'test@example.com'). Erstelle einen letzten Screenshot mit expect(page.locator('form')).toHaveScreenshot('form-filled.png') um den ausgefüllten Formular-Zustand zu dokumentieren.

───────────────────────────────────────

ULTRATHINK-TASK 9: PERFORMANCE-TESTS

9.1 Create tests/e2e/performance.spec.ts: Importiere test und expect aus @playwright/test.

9.2 Lighthouse audit (≥90 score): Definiere einen test-Block 'should achieve Lighthouse score ≥90'. Require das lighthouse-Modul. Require das chrome-launcher-Modul. Starte Chrome mit chromeLauncher.launch() und setze chromeFlags auf ['--headless'] für headless-Modus. Definiere ein options-Objekt mit logLevel 'info', output 'json' und port aus chrome.port. Rufe lighthouse('http://localhost:3000', options) auf um einen Audit durchzuführen. Überprüfe dass runnerResult.lhr.categories.performance.score multipliziert mit 100 größer gleich 90 ist mit expect(). Überprüfe dass runnerResult.lhr.categories.accessibility.score multipliziert mit 100 größer gleich 90 ist mit expect(). Beende Chrome mit await chrome.kill().

9.3 Bundle size assertions (≤150KB per route): Definiere einen test-Block 'should maintain bundle size limits'. Definiere ein routes-Array mit ['/', '/about', '/blog', '/contact']. Nutze eine for-Schleife über routes. Für jede Route navigiere mit page.goto(route). Nutze page.evaluate() um im Browser-Kontext die Performance-API zu nutzen: Rufe performance.getEntriesByType('navigation') auf und hole das erste Element (Index 0, vom Typ PerformanceNavigationTiming). Rückgabe ein Objekt mit transferSize und decodedBodySize Properties. Überprüfe dass metrics.transferSize kleiner als 150 * 1024 Bytes (150KB) mit expect().toBeLessThan() ist. Logge den Route und die Größe in KB mit console.log() und .toFixed(2) für zwei Dezimalstellen.

9.4 Core Web Vitals assertions: Definiere einen test-Block 'should pass Core Web Vitals thresholds'. Definiere ein vitals-Objekt vom Typ any. Registriere einen page.on('console')-Event-Listener der auf alle Console-Meldungen prüft und Meldungen die 'web-vitals' enthalten im vitals-Objekt speichert. Navigiere mit page.goto('/') zur Root-URL. Warte mit page.waitForLoadState('networkidle') bis der Netzwerk idle ist. Nutze page.evaluate() um im Browser-Kontext ein Objekt mit Metrics zu erstellen. Das lcp-Property wird mit einer Promise erstellt, die einen PerformanceObserver instantiiert, der auf 'largest-contentful-paint' Event-Typ prüft und buffered: true setzt. Der Observer holt die letzte Entry aus der entryList und resolved mit lastEntry.startTime. Überprüfe dass (metrics as any).lcp kleiner als 2500 Millisekunden ist mit expect().toBeLessThan().

═══ BLOCK E — CI/CD-INTEGRATION UND QUALITY-GATES ═══

ULTRATHINK-TASK 10: GITHUB ACTIONS PIPELINE

10.1 Create .github/workflows/test.yml: Erstelle eine GitHub Actions Workflow-Datei. Der Workflow hat den Namen 'Test Pipeline'. Der on-Trigger wird auf push und pull_request gesetzt: push auf branches [main, develop], pull_request auf branches [main]. Der jobs-Block definiert fünf parallele Jobs. Der lint-and-typecheck-Job läuft auf ubuntu-latest: Checkout mit actions/checkout@v4, Setup Node 18 mit npm-Cache, npm ci ausführen, npm run lint ausführen, npx tsc --noEmit ausführen. Der unit-tests-Job läuft auf ubuntu-latest: Checkout, Setup Node 18, npm ci, npm run test:coverage, codecov/codecov-action@v3 mit files ./coverage/coverage-final.json. Der build-Job läuft auf ubuntu-latest: Checkout, Setup Node 18, npm ci, npm run build, actions/upload-artifact@v3 mit name 'build' und path '.next'. Der e2e-tests-Job läuft auf ubuntu-latest und benötigt den build-Job: Checkout, Setup Node 18, npm ci, npx playwright install, npm run test:e2e, actions/upload-artifact@v3 (bei Fehler) mit name 'playwright-report' und path 'playwright-report/'. Der storybook-Job läuft auf ubuntu-latest: Checkout, Setup Node 18, npm ci, npm run storybook:build, actions/upload-artifact@v3 mit name 'storybook' und path 'storybook-static'. Der quality-gate-Job läuft auf ubuntu-latest und benötigt alle anderen Jobs mit if: always(): Shell-Schritt prüft dass alle Dependency-Jobs erfolgreich waren (lhr.categories.performance und accessibility), Fehler bei fehlgeschlagenen Jobs mit exit 1.

10.2 PR comment with metrics:
- Add step to post test summary as PR comment
- Include: coverage %, test counts, performance metrics, Lighthouse scores

───────────────────────────────────────

ULTRATHINK-TASK 11: TEST-DOKUMENTATION

11.1 Create docs/TESTING.md:
- Overview: Testing pyramid, coverage targets, test types
- Setup: Installation, configuration, running tests
- Writing tests: Patterns for units, integration, E2E
- CI/CD: GitHub Actions pipeline explanation
- Flaky tests: Strategy for handling intermittent failures

11.2 Create PR review checklist (docs/REVIEW_CHECKLIST.md):
- [ ] Unit tests added for utilities/hooks
- [ ] Component tests cover ≥5 states with accessibility
- [ ] Integration tests verify Formspree/Calendly mocking
- [ ] E2E tests verify critical user journeys
- [ ] Visual regression baseline updated
- [ ] Performance tests pass (Lighthouse ≥90, bundle <150KB)
- [ ] No console errors or warnings
- [ ] Coverage maintained ≥80%

11.3 Flaky test strategy:
- Retry mechanism in CI (2 retries for E2E)
- Timeout configuration per test type (unit: 5s, E2E: 30s)
- Document known flaky tests with issue links
- Monitor flaky test trends in metrics

═══ SELBST-OPTIMIERENDER LOOP — PHASE 14 ABSCHLUSS ═══

12.1 Update .upgrade-state.md:
- Phase 14 complete: Testing infrastructure established
- Coverage: 80%+ unit tests, comprehensive E2E suite
- Quality gates: All CI/CD pipelines operational
- Next phase: Phase 15 (Deployment & Monitoring)

12.2 Update .ai-architectural-context.md:
- Add: Testing pyramid implementation details
- Add: Vitest + Playwright configuration
- Add: Formspree/Calendly mocking strategy
- Add: GitHub Actions 5-job parallel pipeline
- Add: Accessibility audit methodology (axe-core 4-mode matrix)
- Note: Zero console errors enforcement enabled

12.3 Validate state transitions:
- All code changes committed with atomic validation
- npm run build && npm run lint && npx tsc --noEmit ✓
- npm run test:coverage reports ≥80% ✓
- npm run test:e2e runs without flakes ✓

═══ FINALE VALIDIERUNG PHASE 14 ═══

ULTRATHINK-TASK 12: FINAL-AUDIT

Complete the following checklist:

☑ Vitest configured with jsdom, coverage thresholds (80/80/70), globals enabled
☑ Test setup file mocks Next.js (router, Image, fonts)
☑ Custom render with providers exported in test-utils.tsx
☑ Unit tests: ≥3 per utility, ≥5 per atom, ≥8 per organism
☑ All components run axe-core in all states
☑ ContactForm tests mock Formspree with fetch interception
☑ FaqSection tests verify accordion and search functionality
☑ Custom hooks tested with renderHook
☑ Integration tests cover: Formspree responses, metadata generation, analytics consent
☑ E2E tests: navigation, contact form, Calendly, blog, mobile responsive
☑ Accessibility E2E covers 2 viewports (Desktop/Mobile) with axe-playwright
☑ Keyboard navigation tested (Tab, Enter, Space, Arrow keys)
☑ Screen reader semantics verified (nav, main, heading structure)
☑ Visual regression: 2 variants per route (desktop/mobile)
☑ Component interactive states screenshotted (form pristine/errors/filled)
☑ Lighthouse audit target ≥90 verified
☑ Bundle size assertion ≤150KB per route
☑ Core Web Vitals thresholds checked (LCP <2.5s, FID <100ms, CLS <0.1)
☑ GitHub Actions pipeline: 5 parallel jobs (lint, unit, build, E2E, storybook)
☑ Quality gates enforce all checks pass before merge
☑ PR comments include coverage, performance, Lighthouse metrics
☑ docs/TESTING.md complete with patterns and setup instructions
☑ docs/REVIEW_CHECKLIST.md defines test coverage requirements
☑ Flaky test strategy documented with retries and timeouts
☑ Zero console errors enforced in all tests
☑ .upgrade-state.md: Phase 14 marked complete
☑ .ai-architectural-context.md: Testing strategy documented for Phase 15 handoff


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

CHAIN-EXIT-FOOTER ═══ SEQ-34 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-24 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-25)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-35 → ZERO-BREAKAGE-PHASE-15.md
   → Lese ZERO-BREAKAGE-PHASE-15.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-25

═══ PHASE SEQ-24 → SEQ-25: HANDOFF AKTIV & AUTOMATISCH ═══

HANDOFF-VALIDIERUNGS-CHECKLIST (MUSS 100% GRÜN SEIN):
──────────────────────────────────────────────────────────────
✓ npm run build → 0 errors, 0 warnings
✓ npm run lint → 0 errors, 0 warnings  
✓ npx tsc --noEmit → 0 errors, 0 warnings (strict mode)
✓ npm run test → Alle Tests grün (falls Testsuiten existieren)
✓ .ai-architectural-context.md aktualisiert mit Phase SEQ-24 Ergebnissen
✓ .upgrade-state.md: Phase SEQ-24 markiert als ✅ COMPLETED mit Timestamp
✓ Alle ULTRATHINK-Tasks in Phase SEQ-24 sind implementiert
✓ Kein Feature wurde zerstört (Zero-Breakage Protokoll befolgt)
✓ Alle Komponenten sind typsicher (strict TypeScript, 0 any-types)

AUTO-TRIGGER-LOGIK:
──────────────────────────────────────────────────────────────
WENN alle obigen ✓ grün sind:
→ AUTOMATISCHER HANDOFF zu SEQ-35 → ZERO-BREAKAGE-PHASE-25.md
→ Nächste KI liest CHAIN-LINK-HEADER von Phase SEQ-25
→ Framework-Mapping aus .pipeline-master-state.md wird angewandt
→ Detaillierte Task-Liste für Phase SEQ-25 wird generiert
→ INFINITE OPTIMIZATION LOOP setzt sich fort

FALLS VALIDIERUNG FEHLSCHLÄGT:
──────────────────────────────────────────────────────────────
❌ Build-Error → STOPP. Fix alle TypeScript/ESLint-Fehler BEVOR nächste Phase.
❌ Test-Fehler → STOPP. Alle Tests müssen grün sein BEVOR nächste Phase.
❌ .ai-architectural-context.md nicht aktualisiert → STOPP. Dokumentation ist SSOT-Quelle.
❌ Feature zerstört (Z.B. Form bricht, Navigation bricht) → STOPP. Read-Before-Write-Protokoll verletzt.

PHASE SEQ-24: Testing Pyramid & Quality Infrastructure ✅ ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-24 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-25)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-35 → ZERO-BREAKAGE-PHASE-25.md
   → Lese ZERO-BREAKAGE-PHASE-25.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-25



═══════════════════════════════════════════════════════════════════════════════
ENTERPRISE-CHEATCODE-BLOCK: API PATTERNS & CACHING-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

CHEATCODE CC-08: STALE-WHILE-REVALIDATE CACHING
───────────────────────────────────────────────────────────────────────────────
  WARUM: Sofortige Antworten aus Cache, Frische im Hintergrund.
  PFLICHT-IMPLEMENTIERUNG:
    Server-Side: Next.js fetch() mit { next: { revalidate: N } }
    Client-Side: SWR-Pattern fuer dynamische Daten (useSWR oder React Query NICHT
    als Dependency — eigene Implementation mit fetch + useState + useEffect).
    HTTP Headers: Cache-Control mit stale-while-revalidate Direktive.

  CACHE-STRATEGIE PRO CONTENT-TYP:
    Statische Seiten:       ISR mit revalidate = 3600 (1h)
    Blog/News:              ISR mit revalidate = 60 (1min) + on-demand
    Kontakt/Formular:       Kein Cache (dynamic = 'force-dynamic')
    Assets (Bilder/Fonts):  Immutable Cache (Cache-Control: public, max-age=31536000)
    API-Responses:          stale-while-revalidate=60

CHEATCODE CC-09: RATE-LIMITING FUER FORMULARE (SPAM-SCHUTZ OHNE CAPTCHA)
───────────────────────────────────────────────────────────────────────────────
  WARUM: Kein CAPTCHA noetig — intelligentes Rate Limiting ist unsichtbar.
  PFLICHT-IMPLEMENTIERUNG:
    Honeypot-Feld (unsichtbar, Bots fuellen es aus → Submission verwerfen).
    Time-Based-Check: Submission < 3 Sekunden nach Laden = Bot.
    Client-Side Throttle: Button nach Submit 10s deaktivieren.

  IMPLEMENTATION-PATTERN: Honeypot-Feld: Erstelle ein input-HTML-Element mit type="text", name="_gotcha" und style="display:none" um es visuell zu verstecken. Zeit-Prüfung: Speichere const loadTime = Date.now() wenn das Formular geladen wird. Vor dem Submit: Prüfe if (Date.now() - loadTime < 3000) und return wenn True (zu schnell = Bot). Submit-Button: setSubmitting(true) und setTimeout(() => setSubmitting(false), 10000) um den Button 10 Sekunden lang zu deaktivieren.

  VALIDIERUNG:
    [ ] Honeypot-Feld in jedem Formular vorhanden
    [ ] Time-Check implementiert (Minimum 3s zwischen Load und Submit)
    [ ] Submit-Button deaktiviert sich nach Klick fuer 10s
    [ ] Kein sichtbares CAPTCHA auf der Seite (UX-Killer)

CHEATCODE CC-10: API-ROUTE SECURITY PATTERNS
───────────────────────────────────────────────────────────────────────────────
  WARUM: Jede API-Route ist ein potenzieller Angriffsvektor.
  PFLICHT-IMPLEMENTIERUNG:
    Input-Validierung mit Zod (NIEMALS req.body blind vertrauen).
    CORS-Headers explizit setzen (keine Wildcards in Production).
    Rate-Limiting pro IP (via Headers oder Middleware).
    Response-Typisierung (TypeScript Return Types).

  PATTERN: Importiere z aus dem zod-Modul. Definiere ein schema mit z.object() das ein Objekt mit name-Property vom Typ string.min(1) (mindestens 1 Zeichen) und email-Property vom Typ string.email() spezifiziert. Exportiere eine async POST-Funktion die ein Request-Parameter erhält. Extrahiere den Body mit await req.json(). Validiere den Body mit schema.safeParse(body). Falls Validierung fehlschlägt (!result.success): Rückgabe Response.json({ error: result.error }, { status: 400 }). Falls Validierung erfolgreich: Leite die Daten an Formspree weiter.


═══ SEQ-25: HANDOFF AKTIV ═══
