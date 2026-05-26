===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-30 (ZERO-BREAKAGE-PHASE-10), vor SEQ-31 (ZERO-BREAKAGE-PHASE-11)
BLOCK-NUMMER: 11 (TESTING-AUTOMATISIERUNG)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-architectural-context.md (Komponenten-Map, API-Struktur)
  - .ai-api-context.md (Route-Definitionen fuer API-Tests)
  - .ai-db-context.md (Schema fuer Testcontainers)
AUSGANGS-KONTEXTDATEI: .ai-testing-context.md
AUSGANGS-TRIGGER: SEQ-31 (ZERO-BREAKAGE-PHASE-11) darf erst starten, wenn TA-10
  erfolgreich abgeschlossen, Coverage-Thresholds erreicht (Statements 80%,
  Branches 75%, Functions 80%, Lines 80%), E2E-Suite gruen und Mutation-Score
  >= 80% ist.
DEFEKT-RUECKFUEHRUNG: Bei Testing-Defekten wird der Loop ab TA-01 neu
  gestartet, anschliessend alle abhaengigen Phasen ab SEQ-31.

===============================================================================

═══════════════════════════════════════════════════════════════════════════════
ANTIGRAVITY PIPELINE-SYSTEM: TESTING-AUTOMATISIERUNG-PIPELINE
Erschoepfende Spezifikation der automatisierten Qualitaetssicherung und Test-Orchestrierung
═══════════════════════════════════════════════════════════════════════════════

DEFINITORISCHES FUNDAMENT

Diese Spezifikation regelt die vollstaendige automatisierte Test-Infrastruktur fuer Next.js-Applikationen im Antigravity-Ökosystem. Das Dokument behandelt die Orchestrierung von Unit-, Component-, Integration-, E2E-, Performance- und Mutation-Tests über eine strukturierte 10-Phasen-Pipeline. Ziel ist die Erzeugung eines fehlertolerant selbstoptimierenden Test-Regimes mit definierten Metriken, automatischer Daten-Verwaltung und kontinuierlicher Qualitaetsüberwachung.

Der Code ist die Single Source of Truth (SSOT). Dieses Dokument orchestriert die Ausführungsstrategie.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-01 — UNIT-TESTING-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- Rohes Projekt-Codebase (TypeScript, Next.js mit App Router, React 18+)
- Existing vitest.config.ts (falls vorhanden) oder Null-State
- Package-Dependencies: vitest, @vitest/ui, @vitest/coverage-v8, msw, @testing-library/react

OUTPUT:
- Fully-konfiguriertes vitest.config.ts mit Environment-Isolation
- Etablierte Mocking-Strategie (MSW Server, vi.mock()-Patterns)
- Coverage-Baseline-Report (Istanbul/v8 Provider)
- Test-Naming-Convention-Stylesheet

DEPENDENCIES:
- Node.js >= 18.0.0
- TypeScript >= 5.0 (strict mode erzwungen)
- vitest >= 1.0.0

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Vitest-Konfiguration initialisieren
   - Datei erstellen: __tests__/setup/vitest.config.ts
   - Environment-Setting: node mit happy-dom (nicht jsdom für Unit-Tests)
   - Globals: true (test, describe, it, expect ohne Imports)
   - Test-Timeout: 10000ms für Unit-Tests
   - Seed-Setting für deterministische Randomisierung

2. MSW (Mock Service Worker) Server initialisieren
   - Datei erstellen: __tests__/mocks/server.ts
   - setupServer() mit standardisierten API-Endpoints
   - Globale Request-Handler für REST-Patterns
   - Error-Response-Fixtures für Edge-Cases

3. vi.mock()-Strategie etablieren
   - Modul-Mock-Registry erstellen
   - Auto-Mocking für node_modules deaktivieren (explizit nur bei Bedarf)
   - Dynamic-Import-Fallbacks für Conditional-Mocking

4. Coverage-Thresholds definieren
   - global.statements: 80%, branches: 75%, functions: 80%, lines: 80%
   - Per-Directory-Overrides (z.B. __tests__ excluded, src/components: 85%)
   - Coverage-Provider: v8 (Istanbul)

5. Test-Naming-Convention dokumentieren
   - Pattern: [unit.test.ts | spec.ts] für alle Test-Dateien
   - Beschreibung-Format: describe("ModuleName", () => { it("should...") })
   - AAA-Pattern erzwingen (Arrange, Act, Assert)

6. Coverage-Report generieren (Baseline)
   - Command: vitest run --coverage
   - Reporter: html, json, text
   - Baseline speichern für Trend-Tracking

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- __tests__/setup/vitest.config.ts (konfiguriert Environments, Globals, Timeouts)
- __tests__/mocks/server.ts (MSW setupServer mit Standard-Endpoints)
- __tests__/mocks/handlers.ts (Request-Handler für GET, POST, PUT, DELETE)
- __tests__/setup/test-utils.ts (Custom render() mit Provider-Wrapping)
- coverage/baseline.json (Initial-Coverage-Snapshot für Regression-Tracking)
- .nycrc.json oder vitest.config.coverage-Sektion (Coverage-Konfiguration)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

ARCHITEKTUR-VALIDATOR (AV):
- Verifiziert dass vitest.config.ts Strict-Mode und Environment-Isolation einhält
- Prüft Coverage-Thresholds sind nicht unter definierten Minimums
- Validiert MSW-Server wird vor jeden Test-Suite initialisiert (beforeAll)

TEST-STRUKTUR-ENFORCER (TSE):
- Prüft alle Test-Dateien folgen Naming-Convention
- Validiert AAA-Pattern in mindestens 90% der Tests
- Flaggt describe()-Blöcke ohne aussagekräftige Beschreibung

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-01-U1: Vitest-Environment-Isolation hardening
Stelle sicher dass each test-file erhält isolation durch separate globals und module cache.
Implementiere reset-modules zwischen Tests für Modul-State-Leakage-Prevention.
Validiere dass vi.resetAllMocks() in afterEach() aufgerufen wird.

TASK TA-01-U2: MSW-Handler-Strategie für Complex-API-Patterns
Erweitere MSW-Handlers auf WebSocket-Unterstützung für Real-Time-APIs.
Implementiere Request-Delay-Simulation für Network-Latency-Testing.
Erstelle Handler-Factory für Bulk-Endpoint-Generierung.

TASK TA-01-U3: Coverage-Trend-Tracking Infrastructure
Speichere Coverage-Reports in versionsierter Historie (git-tracked JSON).
Implementiere Coverage-Regression-Detection (Alerts wenn Statements < Baseline - 2%).
Automatisiere Report-Upload zu Codecov oder Coveralls.

TASK TA-01-U4: AAA-Pattern-Enforcement via ESLint
Schreibe Custom-ESLint-Rule (prefer-aaa-pattern) die Test-Struktur validiert.
Regel sollte Arrange/Act/Assert-Kommentare enforced oder mindestens Section-Separation.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-01-A | vitest.config.ts ist syntaktisch korrekt | Syntaxfehler bei vitest run | Korrigiere vitest.config.ts und teste mit vitest --inspect-config |
| VG-TA-01-B | MSW Server startet vor Test-Suite | Server.listen() fails | Überprüfe setupServer() Aufruf in beforeAll() Hook |
| VG-TA-01-C | Coverage-Report wird generiert | vitest run --coverage fehlgeschlagen | Installiere @vitest/coverage-v8 Package |
| VG-TA-01-D | Mindestens 70% Statements-Coverage erreicht | coverage/coverage-final.json < 70 | Schreibe fehlende Unit-Tests, Ziel: 80% |
| VG-TA-01-E | Alle Test-Dateien folgen Naming-Convention | *.test.js statt *.spec.js gemischt | Benenne Tests um zu einheitlichem Pattern |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-01 ist freigegeben wenn:
✓ vitest.config.ts ist vollständig konfiguriert (Environment, Globals, Timeout)
✓ MSW Server ist initialisiert und lädt alle API-Endpoints
✓ Coverage-Baseline mindestens 70% Statements, 65% Branches, 70% Functions, 70% Lines
✓ Test-Naming-Convention ist dokumentiert und durchgesetzt
✓ Keine Unit-Tests haben Timeout-Fehler (< 10s pro Test)
✓ All validation gates (VG-TA-01-A bis VG-TA-01-E) sind PASS

AUTO-TRIGGER zu PHASE TA-02: Wenn alle Bedingungen erfüllt, wird PHASE TA-02 automatisch initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-02 — COMPONENT-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- Abgeschlossene PHASE TA-01 (vitest.config.ts, MSW-Server, Coverage-Baseline)
- React-Komponenten aus src/components/ (Functional Components mit Hooks)
- Package-Dependencies: @testing-library/react, @testing-library/user-event, jest-axe, playwright

OUTPUT:
- Component-Test-Suite mit 100% Komponenten-Abdeckung
- Accessibility-Report (WCAG AAA Compliance)
- Custom-Render-Wrapper mit Theme/Router/i18n-Providers
- Snapshot-Testing-Policy Dokumentation

DEPENDENCIES:
- @testing-library/react >= 14.0
- @testing-library/user-event >= 14.0
- jest-axe >= 8.0
- vitest (von PHASE TA-01)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Custom render()-Wrapper implementieren
   - Datei: __tests__/setup/custom-render.tsx
   - Wrapping von Theme-Provider (Material-UI, Shadcn, etc.)
   - Router-Provider (Next.js Router-Mock oder <BrowserRouter>)
   - i18n-Provider (i18next Mock)
   - Redux/Zustand-Store (falls verwendet)

2. React Testing Library Best Practices etablieren
   - Query-Hierarchie: getByRole() > getByLabelText() > getByPlaceholderText() > getByText()
   - Vermeide container.querySelector() (Implementation-Details)
   - Verwende userEvent statt fireEvent
   - Test-Assertion-Pattern: expect(element).toBeInTheDocument()

3. Event-Simulation und User-Interaction
   - userEvent.click() für Button-Clicks
   - userEvent.type() für Text-Input mit Typverzögerung
   - userEvent.selectOption() für Select-Elemente
   - userEvent.upload() für File-Input
   - Validiere onChange/onSubmit Callbacks wurden aufgerufen

4. Async State-Updates testen
   - waitFor() für State-Updates und DOM-Mutationen
   - Use act() wrapper wenn nötig (allerdings Testing-Library wrapped automatisch)
   - screen.findBy*() für Async Queries (implicit waitFor)

5. Accessibility-Testing mit jest-axe
   - axe-scan nach jedem render()
   - Validiere aria-labels, roles, aria-describedby
   - Check für Color-Contrast (WCAG AAA: 7:1 für normal text)
   - WCAG-Level setzen auf 'wcag2aa' oder 'wcag2aaa'

6. Snapshot-Testing-Strategie
   - Nur Snapshots für komplexe/stabile Komponenten (nicht für jeden Button)
   - Snapshots sollten < 50 Zeilen bleiben
   - Update Snapshots nur nach beabsichtigter Design-Änderung
   - Git-Commits sollten Snapshot-Änderungen dokumentieren

7. Form-Interaction-Testing
   - Test Form-Submit mit Mock-onSubmit Handler
   - Validiere Validation-Error-Messages erscheinen
   - Test Field-Reset nach Submit
   - Teste Disabled-State während Request

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- __tests__/setup/custom-render.tsx (Custom render() mit Providers)
- __tests__/setup/test-providers.tsx (Provider-Komponenten für DRY-ness)
- src/components/**/*.test.tsx (Component-Test-Dateien, 1:1 mit Komponenten)
- __tests__/accessibility/a11y-baseline.json (WCAG Compliance Report)
- __tests__/snapshots/*.snap (Snapshot-Dateien, versioniert in Git)
- __tests__/mocks/next-router.ts (Next.js Router Mock)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

COMPONENT-COVERAGE-VALIDATOR (CCV):
- Prüft dass jede exportierte Komponente mindestens 1 Test hat
- Validiert Snapshot-Dateigröße < 50 Zeilen
- Flaggt Tests die container.querySelector() verwenden

ACCESSIBILITY-COMPLIANCE-CHECKER (ACC):
- Führt axe-Scan auf alle Komponenten durch
- Validiert WCAG AAA Compliance (mindestens für kritische Komponenten)
- Erstellt Accessibility-Report mit Failed-Rules

ASYNC-HANDLER (AH):
- Überwacht waitFor() Timeouts und sugguriert Erhöhung
- Validiert dass findBy*() Queries verwendet werden für async content
- Warnt vor race-conditions in Tests

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-02-U1: Testing-Library Query-Hierarchie Enforcement
Schreibe ESLint-Rule (prefer-query-hierarchy) die erzwingt getByRole() vor getByText().
Implementiere Auto-Fix dass getByText() Queries zu getByRole() konvertiert.

TASK TA-02-U2: Accessibility-Baselining und Trend-Tracking
Speichere WCAG-Audit-Reports in Git-History (axe-core JSON exports).
Automatisiere Alert wenn neue Accessibility-Violations in Components entstehen.
Erstelle Dashboard dass WCAG-Violations über Zeit tracked.

TASK TA-02-U3: Snapshot-Diffing Intelligence
Implementiere Custom-Snapshot-Serializer der nur Strukturelle Änderungen flaggt.
Ignoriere deterministische Werte (IDs, Timestamps, UUIDs) in Snapshots.
Automatisiere "safe" Snapshot-Updates die nur Whitespace-Änderungen sind.

TASK TA-02-U4: Form-Testing Framework
Erstelle Form-Test-Builder Pattern dass komplexe Form-Szenarien vereinfacht.
Builder-Methoden: withValues(), withValidationErrors(), withAsyncSubmit()
Implementiere Chain-Pattern für Fluent API.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-02-A | Custom render() wrapper ist korrekt | Tests mit custom render() fehlgeschlagen | Überprüfe Providers sind korrekt gewrapped |
| VG-TA-02-B | Accessibility-Scan zeigt 0 WCAG AAA violations | axe scan reports > 0 violations | Behebe Color-Contrast, aria-labels, Heading-Struktur |
| VG-TA-02-C | Alle Komponenten haben mindestens 1 Test | Komponente ohne Test gefunden | Schreibe Test für jede exportierte Komponente |
| VG-TA-02-D | Snapshot-Dateien sind < 50 Zeilen | Snapshot > 50 Zeilen erkannt | Splitte Snapshot oder verwende Custom-Serializer |
| VG-TA-02-E | Keine container.querySelector() in Tests | querySelector() Aufruf gefunden | Ersetze mit Testing-Library Query (getByRole, etc.) |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-02 ist freigegeben wenn:
✓ Alle Komponenten haben Component-Tests (mindestens render + user interaction)
✓ Custom render() Wrapper ist implementiert mit allen Providers
✓ Accessibility-Scan zeigt 0 WCAG AAA violations
✓ Snapshot-Testing-Policy ist dokumentiert und durchgesetzt
✓ Keine Tests verwenden container.querySelector() (100% Testing-Library API)
✓ Form-Tests validieren Submit, Validation, Reset, Disabled-States
✓ All validation gates (VG-TA-02-A bis VG-TA-02-E) sind PASS

AUTO-TRIGGER zu PHASE TA-03: Integration-Testing wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-03 — INTEGRATION-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01 (vitest, MSW) und PHASE TA-02 (Component Tests) abgeschlossen
- Next.js API-Routes (app/api/**/route.ts)
- PostgreSQL Datenbank (oder Test-DB)
- Package-Dependencies: supertest, testcontainers, @testcontainers/postgresql, node-postgres

OUTPUT:
- API-Route Integration-Tests mit Supertest
- Datenbank-Tests mit Testcontainers (automatisch spun-up PostgreSQL)
- Auth-Flow-Tests (Login/Session/Logout)
- Middleware-Testing
- Transaktionsbasierte Test-Isolation

DEPENDENCIES:
- supertest >= 6.3
- testcontainers >= 10.0
- @testcontainers/postgresql >= 10.0
- pg >= 8.0 (PostgreSQL client)
- vitest (von PHASE TA-01)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. API-Route-Testing mit Supertest
   - Datei: __tests__/integration/api/[route].integration.test.ts
   - Import Next.js handler (GET, POST, PUT, DELETE)
   - Simuliere Requests mit supertest
   - Validiere Status, Headers, Response-Body

2. Testcontainers-Setup
   - Datei: __tests__/integration/db/postgres-container.ts
   - StartContainers beim beforeAll()
   - Datenbank-Migrations während Container-Init
   - StopContainers beim afterAll()

3. Transaktionsbasierte Test-Isolation
   - Jeden Test in eigener Transaktion wrappen
   - afterEach() führt ROLLBACK aus
   - Verhindert Test-Pollution durch vorige Test-Daten

4. Auth-Flow-Testing
   - Test Login mit korrekt/fehlerhaft Credentials
   - Test Session-Cookie wird gespeichert
   - Test Protected Routes sind nur mit Session erreichbar
   - Test Logout löscht Session

5. Service-Layer-Testing
   - Test Business-Logic mit echten DB-Queries
   - Verwende Factory-Pattern für Test-Daten
   - Validiere Datenbank-Zustand nach Operation

6. Middleware-Testing
   - Test Authentication-Middleware
   - Test Error-Handling-Middleware
   - Test Rate-Limiting-Middleware

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- __tests__/integration/setup/postgres-container.ts (Testcontainers setup)
- __tests__/integration/setup/migrations.ts (DB-Migration Runner)
- __tests__/integration/api/**/*.integration.test.ts (API-Route Tests)
- __tests__/integration/auth/auth.integration.test.ts (Auth-Flow Tests)
- __tests__/integration/db/service.integration.test.ts (Service-Layer Tests)
- __tests__/mocks/next-request.ts (Next.js Request Mock)
- __tests__/factories/user.factory.ts (Test-Data Factory)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

DATABASE-ISOLATION-ENFORCER (DIE):
- Validiert dass jeden Test in Transaktion läuft
- Prüft ROLLBACK wird nach Test aufgerufen
- Warnt vor Daten-Leakage zwischen Tests

API-RESPONSE-VALIDATOR (ARV):
- Schaut dass API-Responses korrektes Status-Code haben
- Validiert JSON-Schema gegen Definierte Contracts
- Flaggt Unexpected-Fields in Response

AUTH-CHAIN-VALIDATOR (ACV):
- Prüft dass Login/Logout/Session-Flows komplett sind
- Validiert Cookies werden korrekt gespeichert/gelöscht

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-03-U1: Transactional-Isolation Automatisierung
Schreibe Test-Wrapper dass automatisch beforeEach SAVEPOINT, afterEach ROLLBACK macht.
Verhindere Daten-Leakage durch zentralisierte Transaction-Management.

TASK TA-03-U2: API-Contract-Testing
Implementiere Contract-Testing mittels OpenAPI/Swagger-Specs.
Validiere API-Responses matchen dokumentierten Schemas.
Generiere Tests automatisch aus OpenAPI-YAML.

TASK TA-03-U3: Auth-Session-Persistence Testing
Teste dass Session-Cookies über Multiple Requests persistent sind.
Validiere JWT-Tokens (falls verwendet) sind korrekt signed.
Teste Logout invalidiert Sessions auf Server-Seite.

TASK TA-03-U4: Database-State-Verification
Implementiere Datenbankabfrage-Helper dass Test-Setup verifiziert.
Beispiel: expectUserInDatabase({email, id, role})
Automatisiere Daten-Cleanup nach fehlgeschlagenen Tests.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-03-A | Testcontainers PostgreSQL startet | Container fails zu starten | Überprüfe Docker ist verfügbar, Ports sind free |
| VG-TA-03-B | API-Route Handler werden korrekt aufgerufen | supertest requests fehlgeschlagen | Überprüfe Route-Mapping, Request-Format |
| VG-TA-03-C | Transaktionsbasierte Isolation funktioniert | Daten-Leakage zwischen Tests | Überprüfe ROLLBACK wird nach jedem Test aufgerufen |
| VG-TA-03-D | Auth-Flow Tests zeigen Sessions werden verwaltet | Session ist nicht vorhanden nach Login | Überprüfe Cookie-Handling in Test-Setup |
| VG-TA-03-E | Service-Layer-Tests nutzen echte DB | Tests verwenden Mocks statt echte DB | Entferne Mocks, nutze echte Testcontainers DB |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-03 ist freigegeben wenn:
✓ Testcontainers PostgreSQL startet automatisch vor Tests
✓ Alle API-Routes haben Supertest Integration-Tests
✓ Transaktionsbasierte Test-Isolation funktioniert ohne Daten-Leakage
✓ Auth-Flow-Tests validieren Login/Session/Logout komplett
✓ Service-Layer Tests nutzen echte Datenbank-Queries
✓ Middleware-Tests für Critical-Middleware vorhanden
✓ All validation gates (VG-TA-03-A bis VG-TA-03-E) sind PASS

AUTO-TRIGGER zu PHASE TA-04: E2E-Testing wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-04 — E2E-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01, TA-02, TA-03 abgeschlossen
- Next.js App mit vollständiger UI und APIs
- Package-Dependencies: @playwright/test, pixelmatch, playwright

OUTPUT:
- Playwright E2E Test-Suite mit Page-Object-Model
- Cross-Browser-Testing (Chromium, Firefox, WebKit)
- Mobile-Viewport-Tests
- Visual-Regression-Testing mit Screenshots
- Authentication-State Sharing zwischen Tests

DEPENDENCIES:
- @playwright/test >= 1.40
- pixelmatch >= 5.3
- playwright >= 1.40
- @types/pixelmatch >= 5.2

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Playwright Konfiguration
   - Datei: playwright.config.ts
   - webServer port auf Next.js Dev-Server
   - baseURL konfigurieren
   - Timeout: 30000ms für E2E Tests
   - Retries für CI: 2 (lokal: 0)

2. Page-Object-Model Implementieren
   - Datei: __tests__/e2e/pages/BasePage.ts
   - BasePage mit common navigation methods
   - Spezifische Pages: LoginPage, DashboardPage, ProfilePage
   - Encapsulate Selectors, expose high-level methods

3. Cross-Browser-Matrix Setup
   - Chromium, Firefox, WebKit in parallel
   - fullyParallel: true für maksimale Geschwindigkeit
   - workers: 4 für CI-Parallelisierung

4. Mobile-Viewport-Testing
   - Fixture: mobileViewport (iPhone SE, iPad, Pixel 5)
   - Tests auf mobile viewports wiederholen
   - Touch-Events testen statt Click-Events

5. Visual-Regression-Testing
   - page.screenshot() nach kritischen User-Actions
   - pixelmatch für Vergleich gegen Baseline
   - Baseline-Screenshots in Git speichern
   - Threshold setzen auf 0.01 (1% Abweichung tolerieren)

6. Authentication-State Sharing
   - globalSetup.ts führt Login aus
   - storageState speichert Cookies/LocalStorage
   - Alle Tests erben authentifizierten State

7. Test-Fixtures für DRY-ness
   - Eigene Fixtures: authenticatedPage, adminPage, guestPage
   - Fixtures vor jedem Test aktivieren

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- playwright.config.ts (Playwright-Konfiguration mit Browsern, Timeout, baseURL)
- __tests__/e2e/pages/BasePage.ts (Basis-Page-Object)
- __tests__/e2e/pages/*.page.ts (Spezifische Page-Objects für jede Seite)
- __tests__/e2e/fixtures/auth.ts (Authentication Fixtures)
- __tests__/e2e/global-setup.ts (Global Setup Login)
- __tests__/e2e/specs/**/*.e2e.test.ts (E2E Test-Dateien)
- __tests__/e2e/screenshots/baseline/ (Baseline-Screenshots)
- __tests__/e2e/screenshots/actual/ (Aktuelle Test-Screenshots)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

PAGE-OBJECT-CONSISTENCY-CHECKER (POCC):
- Validiert dass alle Selectors sind robuste (role queries vor CSS)
- Prüft dass Selectors sind nicht zu spezifisch
- Warnt vor Hard-Coded Selectors statt Page-Object Methods

VISUAL-REGRESSION-VALIDATOR (VRV):
- Prüft dass Screenshots werden korrekt generiert
- Validiert pixelmatch Threshold ist konsistent
- Flaggt Unexpected-Diff im Visual-Regression

CROSS-BROWSER-CONSISTENCY-CHECKER (CBCC):
- Validiert dass Tests laufen auf allen 3 Browsern
- Warnt vor Browser-Spezifischen Test-Skips
- Prüft dass Mobile-Viewports werden getestet

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-04-U1: Page-Object-Model Automatisierung
Schreibe Code-Generator dass vom UI-Selectors automatisch Page-Objects generiert.
Generator parst HTML, identifiziert role attributes, generiert getByRole() methods.

TASK TA-04-U2: Visual-Regression-Diffing Intelligence
Implementiere Smart-Diffing dass ignoriert Date/Time-Strings in Screenshots.
Generiere Diff-Reports mit highlighted Änderungen.
Automatisiere Baseline-Updates bei beabsichtigten Design-Changes.

TASK TA-04-U3: Mobile-Viewport-Test-Matrix Expansion
Erweitere Viewports auf 10+ Devices (iPhone 14, Pixel 7, iPad Air, etc.)
Implementiere Device-Profile Registry.
Automatisiere Responsive-Design-Testing across Viewports.

TASK TA-04-U4: Performance-Budget in E2E
Gemessene Performance-Metriken während E2E (LCP, FCP, CLS).
Implementiere Assertions dass Metrics sind unter Budget.
Generiere Performance-Trends von Test-Laufen.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-04-A | Playwright Config ist korrekt | playwright test fehlgeschlagen | Überprüfe webServer Port, baseURL |
| VG-TA-04-B | Page-Objects sind implementiert für alle Seiten | Keine Page-Object für Seite | Schreibe Page-Object für jede User-Seite |
| VG-TA-04-C | Cross-Browser-Tests laufen auf 3 Browsern | Nur Chromium Tests vorhanden | Ergänze Firefox, WebKit zu playwright.config.ts |
| VG-TA-04-D | Mobile-Viewport-Tests existieren | Keine Mobile-Tests | Schreibe Tests mit mobile fixtures |
| VG-TA-04-E | Baseline-Screenshots sind in Git | Screenshots nicht versioniert | Committe baseline/ zu Git |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-04 ist freigegeben wenn:
✓ Playwright Config unterstützt Chromium, Firefox, WebKit
✓ Page-Object-Model implementiert für alle Critical User Flows
✓ Cross-Browser-Matrix läuft parallel ohne Fehler
✓ Mobile-Viewport-Tests existieren (mindestens 3 Devices)
✓ Visual-Regression-Baseline-Screenshots sind gespeichert
✓ Authentication-State ist global geteilt zwischen Tests
✓ All validation gates (VG-TA-04-A bis VG-TA-04-E) sind PASS

AUTO-TRIGGER zu PHASE TA-05: Performance-Testing wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-05 — PERFORMANCE-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-04 (E2E Tests) abgeschlossen
- Next.js App mit gebautem Production-Bundle
- Package-Dependencies: lighthouse, k6, bundlewatch, web-vitals

OUTPUT:
- Lighthouse CI Integration in GitHub Actions
- Web-Vitals Assertions (LCP, CLS, INP unter Budgets)
- Bundle-Size Regression Testing
- Load-Testing mit k6 (Ramp-up, Stress, Spike)
- Performance-Budget Enforcement

DEPENDENCIES:
- lighthouse >= 11.0
- k6 >= 0.50
- bundlewatch >= 0.3
- web-vitals >= 3.0
- @lighthouse/ci-github-comment >= 1.0

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Lighthouse CI Konfigurieren
   - Datei: lighthouserc.json
   - uploadArtifacts: true
   - budgets für Performance, Accessibility, Best Practices, SEO
   - Assertions: auditRefs mit passing threshold

2. Web-Vitals Budgets Definieren
   - LCP (Largest Contentful Paint): < 2.5 Sekunden
   - CLS (Cumulative Layout Shift): < 0.1
   - INP (Interaction to Next Paint): < 200 Millisekunden
   - TTFB (Time to First Byte): < 600 Millisekunden

3. Bundle-Size Regression Testing
   - Datei: bundlewatch.config.json
   - Track JavaScript Bundle Size
   - Alert wenn Bundle > 5% größer wird
   - Separate Budgets für Gzip vs Uncompressed

4. Load-Testing mit k6
   - Datei: __tests__/performance/load-test.js
   - VU (Virtual Users) Ramp-up: 0 -> 50 -> 100 over 3 minutes
   - Stress Test: 100 VU for 10 minutes
   - Spike Test: Sudden 500 VU for 30 seconds
   - Thresholds: http_req_duration < 500ms (95th percentile)

5. Performance-Budget Enforcement
   - GitHub Actions Step prüft Lighthouse Scores
   - Build fails wenn Budget überschritten
   - Comment auf PR mit Performance-Impact

6. Critical-Path Rendering Tests
   - Messe Critical-Resources Loading
   - Validiere dass CSS/JS blocking nicht über 300ms sind
   - Test Preload-Hinweise sind korrekt konfiguriert

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- lighthouserc.json (Lighthouse CI Config mit Budgets)
- bundlewatch.config.json (Bundle-Size Regression Config)
- __tests__/performance/load-test.js (k6 Load-Test Skript)
- __tests__/performance/stress-test.js (k6 Stress-Test)
- __tests__/performance/spike-test.js (k6 Spike-Test)
- .github/workflows/lighthouse-ci.yml (GitHub Actions Workflow)
- __tests__/performance/web-vitals.test.ts (Web-Vitals Assertions)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

LIGHTHOUSE-BUDGET-ENFORCER (LBE):
- Prüft dass Lighthouse Scores erfüllen Budgets
- Validiert alle 5 Audits (Performance, Accessibility, etc.)
- Alerts bei Score-Regression

BUNDLE-SIZE-GUARDIAN (BSG):
- Überwacht Bundle-Size Trends
- Flaggt Unexpected Dependencies
- Empfiehlt Code-Splitting Opportunities

LOAD-TEST-ANALYZER (LTA):
- Analysiert k6 Test Results
- Identifiziert Bottlenecks (High Response Times)
- Prüft dass Thresholds werden erfüllt

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-05-U1: Web-Vitals Monitoring Automatisierung
Implementiere Real-User-Monitoring (RUM) dass Web-Vitals sammelt von Production.
Integriere mit Datadog/New Relic für Continuous-Monitoring.
Generiere Alerts wenn RUM-Metrics brechen Budgets.

TASK TA-05-U2: Bundle-Analyzer Integrations
Integriere source-map-explorer zur Bundle-Composition-Analyse.
Automatisiere Reports von größten Dependencies.
Vorschlag-Engine für Lazy-Loading Opportunities.

TASK TA-05-U3: k6 Load-Test Szenario Expansion
Erweitere auf 10+ Realistic-Load-Szenarien (User Journey simulations).
Parameterisiere VU-Count, Ramp-Duration basierend auf Expected-Traffic.
Generiere Load-Test-Results-Trends.

TASK TA-05-U4: Performance-Budget Intelligence
Implementiere Smart-Budgets dass dynamisch adjustieren basierend auf Device/Network.
Beispiel: Lower-LCP-Budget für 3G Networks.
Automatically-Detect Performance-Regression Patterns.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-05-A | Lighthouse Score >= 90 | Score < 90 | Optimiere Performance, Accessibility, Best Practices |
| VG-TA-05-B | LCP < 2.5 Sekunden | LCP > 2.5s | Lazy-Load Images, Optimize Critical Resources |
| VG-TA-05-C | CLS < 0.1 | CLS > 0.1 | Fix Layout Shifts (set Image Dimensions, avoid Font-Swaps) |
| VG-TA-05-D | Bundle-Size unter Budget | Bundle > 5% größer | Tree-Shake Unused Code, Implementiere Code-Splitting |
| VG-TA-05-E | k6 Load-Test erfüllt Thresholds | Response Times > 500ms | Identifiziere Bottlenecks, Optimize Datenbank, Scale Server |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-05 ist freigegeben wenn:
✓ Lighthouse CI ist konfiguriert und läuft in GitHub Actions
✓ Web-Vitals Budgets sind definiert (LCP, CLS, INP)
✓ Bundle-Size Regression Testing ist aktiv
✓ k6 Load-Tests (Ramp-up, Stress, Spike) sind implementiert
✓ Performance-Budget Enforcement flaggt Regressions
✓ Critical-Path Rendering < 300ms
✓ All validation gates (VG-TA-05-A bis VG-TA-05-E) sind PASS

AUTO-TRIGGER zu PHASE TA-06: Test-Data-Management wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-06 — TEST-DATA-MANAGEMENT
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-03, TA-04, TA-05 abgeschlossen (alle Tests existieren)
- Package-Dependencies: @faker-js/faker, factory.ts oder similar

OUTPUT:
- Factory-Pattern für alle Domain-Models (User, Post, Order, etc.)
- Faker.js Integration für realistische Dummy-Daten
- Deterministische Seeds für Reproduzierbarkeit
- Cleanup-Strategien (truncate vs transaction-rollback)
- Fixture-Management System

DEPENDENCIES:
- @faker-js/faker >= 8.0
- factory.ts (oder typescript-factory-library)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Factory-Pattern Implementieren
   - Datei: __tests__/factories/user.factory.ts
   - Export createUser(overrides?) function
   - Default-Werte für alle required fields
   - Faker.js für realistische Werte (emails, names, etc.)
   - Support für Nested-Objects (User with Posts, Orders with Items)

2. Builder-Pattern für Komplexe Objekte
   - Datei: __tests__/builders/OrderBuilder.ts
   - Method-Chaining: builder.withUser().withItems(3).withShipping().build()
   - Each-Method speichert Partial-Override
   - Final build() Assembly

3. Deterministische Seeds
   - Faker.seed(12345) mit Umgebung-spezifischem Seed
   - DETERMINISTIC_SEED env-Variable setzbar
   - Reproduzierbarkeit für fehlgeschlagene Tests

4. Cleanup-Strategien
   - Transaktionsbasierte Cleanup für Integration-Tests (ROLLBACK)
   - Explicit truncate() für E2E-Tests
   - Cascade-Delete für Related-Data

5. Fixture-Management
   - Datei: __tests__/fixtures/seed.ts
   - beforeAll() lädt Seed-Fixtures
   - Fixtures sind versioniert in JSON
   - Deterministische Ordnung (kein Randomisieren)

6. Data-Relationship-Tracking
   - TrackIds von erstellten Objekten
   - Cleanup in Reverse-Order (Foreign-Key-Respekt)

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- __tests__/factories/user.factory.ts
- __tests__/factories/post.factory.ts
- __tests__/factories/order.factory.ts (falls E-Commerce)
- __tests__/builders/OrderBuilder.ts
- __tests__/fixtures/seed.ts
- __tests__/fixtures/seed-data.json (versioniert)
- __tests__/setup/cleanup.ts (Cleanup Utilities)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

FACTORY-CONSISTENCY-CHECKER (FCC):
- Prüft dass Factories decken alle Domain-Models
- Validiert dass Default-Werte sind realistische
- Flaggt Factories ohne Faker.js Integration

SEED-DETERMINISM-VALIDATOR (SDV):
- Prüft dass DETERMINISTIC_SEED ist gesetzt
- Validiert dass Tests mit selben Seed reproduzierbar sind

DATA-LEAKAGE-PREVENTER (DLP):
- Überwacht dass Cleanup wird aufgerufen nach Tests
- Flaggt orphaned-Daten in Datenbank

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-06-U1: Factory-Auto-Generation
Schreibe Code-Generator dass von TypeScript-Interfaces automatisch Factories generiert.
Generator scannt @domain Ordner, generiert factory.ts für jeden Type.

TASK TA-06-U2: Relationship-Graph Tracking
Implementiere Graph dass Datenbank-Relationships tracked (Foreign-Keys).
Auto-Cleanup in Reverse-Topological-Order.
Prev ervent Constraint-Violations beim Löschen.

TASK TA-06-U3: Faker-Strategie Intelligenz
Implementiere Smart-Seeding dass contextual-appropriate Faker-Data generiert.
Beispiel: createUser() für Author nutzt different Faker-Locale als createUser() für Customer.

TASK TA-06-U4: Fixture-Versioning und Migration
Versioniere Fixtures in Git mit Change-Tracking.
Implementiere Migration-Scripts wenn Schema sich ändert.
Auto-Migrate alte Fixtures zu neuem Schema.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-06-A | Factories existieren für alle Models | Model ohne Factory | Generiere Factory-File |
| VG-TA-06-B | Faker.js Integration vorhanden | Fake-Daten sind nicht realistisch | Nutze Faker für Emails, Names, etc. |
| VG-TA-06-C | DETERMINISTIC_SEED ist gesetzt | Tests nicht reproduzierbar | Setze DETERMINISTIC_SEED env-Variable |
| VG-TA-06-D | Cleanup wird aufgerufen nach Tests | Orphaned-Daten in DB | Überprüfe afterEach/afterAll Cleanup-Calls |
| VG-TA-06-E | Builder-Pattern für Complex-Objects | Factories sind zu verbose | Implementiere Builder-Pattern |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-06 ist freigegeben wenn:
✓ Alle Domain-Models haben Factories
✓ Faker.js ist für realistische Daten integriert
✓ Deterministische Seeds ermöglichen Reproduzierbarkeit
✓ Cleanup-Strategien sind implementiert (Transaktionen und Truncate)
✓ Builder-Pattern für komplexe Objekte ist verfügbar
✓ Fixture-Management System ist etabliert
✓ All validation gates (VG-TA-06-A bis VG-TA-06-E) sind PASS

AUTO-TRIGGER zu PHASE TA-07: Test-Pyramide-Enforcement wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-07 — TEST-PYRAMIDE-ENFORCEMENT
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01 bis TA-06 abgeschlossen (alle Tests existieren)
- Test-Suite mit Unit, Component, Integration, E2E Tests

OUTPUT:
- Test-Kategorisierung (Unit: 70%, Integration: 20%, E2E: 10%)
- Automatische Ratio-Checks in CI
- Test-Count-Metriken pro Kategorie
- Build-Failure bei Pyramiden-Verletzung
- Custom ESLint-Rules für Test-Struktur

DEPENDENCIES:
- vitest (mit Tags)
- @playwright/test (mit Annotations)
- eslint (für Custom-Rules)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Test-Kategorisierung via Vitest-Tags
   - Unit-Tests: @unit Tag
   - Component-Tests: @component Tag
   - Integration-Tests: @integration Tag
   - Jeder Test hat genau einen Tag

2. Test-Kategorisierung via Playwright-Annotations
   - E2E-Tests: @tag.e2e Annotation
   - Performance-Tests: @tag.performance

3. Test-Count-Metriken Sammlung
   - Skript: scripts/analyze-test-pyramid.ts
   - Zähle Tests pro Kategorie
   - Berechne Prozentuale Verhältnisse
   - Generiere Bericht (text + JSON)

4. Enforcement in CI
   - GitHub Actions Step führt Analyse aus
   - Prüfe Unit-Tests >= 70%
   - Prüfe Integration-Tests >= 15%, <= 25%
   - Prüfe E2E-Tests >= 5%, <= 15%
   - Fail Build wenn Ratio verletzt

5. Custom ESLint-Rules
   - Rule: test-must-have-category-tag
   - Prüft dass jeder Test genau ein Tag hat
   - Auto-Fix möglich für einfache Fälle

6. Test-Reporting
   - Generiere Report in HTML-Format
   - Zeige Pyramide-Visualisierung
   - Track Trends über Zeit

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- vitest.config.ts mit include Patterns für Tags
- scripts/analyze-test-pyramid.ts (Analysten-Skript)
- eslint-plugins/test-pyramid-rules.ts (ESLint Custom-Rules)
- .github/workflows/test-pyramid-check.yml (GitHub Actions)
- __tests__/pyramid/pyramid-report.json (Report-Output)
- __tests__/pyramid/pyramid-baseline.json (Baseline für Trend-Tracking)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

PYRAMID-RATIO-VALIDATOR (PRV):
- Prüft dass Test-Ratio erfüllt Targets
- Alertet wenn Unit-Tests < 70%
- Warnt wenn E2E-Tests > 15%

TEST-TAG-CONSISTENCY-CHECKER (TTCC):
- Validiert dass jeder Test genau 1 Tag hat
- Flaggt Tests ohne Tags oder mit Multiple-Tags

TREND-ANALYZER (TA):
- Tracked Pyramiden-Ratio über Zeit
- Identifiziert Drift zu schlechterer Ratio

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-07-U1: Pyramiden-Ratio Intelligente Anpassung
Implementiere Adaptive-Targets basierend auf Codebase-Größe.
Kleine Codebases: 60/30/10 Unit/Integration/E2E.
Große Codebases: 70/20/10.

TASK TA-07-U2: Test-Tag Automatisierung
Schreibe AST-Parser dass identifiziert Test-Typ automatically.
Beispiel: Tests in __tests__/integration/ -> @integration Tag.
Auto-Apply Tags zu Test-Dateien.

TASK TA-07-U3: Pyramiden-Visualization Dashboard
Erstelle Web-Dashboard dass Pyramide visualisiert.
Zeige Real-Time Test-Counts.
Highlight Kategorien die Ratio verletzen.

TASK TA-07-U4: Enforcement Policy Customization
Implementiere YAML-Config dass Enforce-Targets customizable macht.
Beispiel: unit: {min: 65, max: 75}, integration: {min: 20, max: 30}

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-07-A | Alle Tests haben genau 1 Kategorie-Tag | Tests ohne oder mit 2+ Tags | Schreibe ESLint Auto-Fix oder tag manuell |
| VG-TA-07-B | Unit-Tests >= 70% | Unit-Ratio < 70% | Schreibe mehr Unit-Tests |
| VG-TA-07-C | Integration-Tests 15-25% | Ratio außerhalb Range | Balance Test-Suite |
| VG-TA-07-D | E2E-Tests 5-15% | Ratio außerhalb Range | Reduziere redundante E2E, erhöhe Unit/Integration |
| VG-TA-07-E | Test-Pyramid-Report wird generiert | Report nicht vorhanden | Führe analyze-test-pyramid Skript aus |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-07 ist freigegeben wenn:
✓ Alle Tests haben Kategorie-Tags (@unit, @component, @integration, @e2e)
✓ Test-Ratio ist 70/20/10 (Unit/Integration/E2E)
✓ analyze-test-pyramid Skript läuft in CI
✓ Build fails wenn Pyramiden-Ratio verletzt
✓ Custom ESLint-Rules enforced Tag-Konsistenz
✓ Test-Pyramid-Report wird generiert
✓ All validation gates (VG-TA-07-A bis VG-TA-07-E) sind PASS

AUTO-TRIGGER zu PHASE TA-08: Mutation-Testing wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-08 — MUTATION-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01 bis TA-07 abgeschlossen
- Vollständige Unit-Test-Suite (PHASE TA-01)
- Package-Dependencies: stryker, stryker-api, stryker-html-reporter

OUTPUT:
- Stryker Integration und Konfiguration
- Kill-Ratio >= 80% für alle Mutanten-Typen
- Mutation-Score-Tracking
- Surviving-Mutants-Analyse
- Inkrementelles Mutation-Testing für CI

DEPENDENCIES:
- stryker >= 7.0
- stryker-html-reporter >= 7.0
- @stryker-mutator/core >= 7.0

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Stryker Konfiguration
   - Datei: stryker.conf.json
   - testRunner: vitest
   - mutator: typescript
   - reporters: html, json, cleartext
   - Timeout: 5000ms (1x Unit-Test-Timeout)

2. Mutanten-Typen konfigurieren
   - Arithmetic: +/-, *//, %
   - Boolean: true/false, !/&&, ||
   - String: "", fallback values
   - Conditional: <, >, <=, >=, ===, !==
   - Array: slicing mutations
   - Object: property mutations

3. Kill-Ratio Thresholds
   - global threshold: 80%
   - breakOnThreshold: true (Build fails wenn < 80%)

4. Mutation-Score-Tracking
   - JSON-Report speichern für jede Mutation-Run
   - Baseline etablieren (erste Run)
   - Trends über Zeit tracken

5. Surviving-Mutants-Analyse
   - Identifiziere Mutanten die nicht getötet werden
   - Generiere Report mit Code-Zeilen die nicht covered sind
   - Vorschläge für zusätzliche Tests

6. Inkrementelles Mutation-Testing
   - Nur Dateien die sich geändert haben mutieren
   - Baseline-Vergleich für Changed-Files
   - Performance-Optimierung für CI

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- stryker.conf.json (Stryker-Konfiguration)
- __tests__/mutation/baseline-score.json (Baseline Kill-Ratio)
- reports/mutation/index.html (HTML-Report nach Stryker-Run)
- scripts/analyze-mutations.ts (Survivors-Analyse-Skript)
- .github/workflows/mutation-testing.yml (GitHub Actions Workflow)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

MUTATION-SCORE-VALIDATOR (MSV):
- Prüft dass Kill-Ratio >= 80%
- Alerts wenn Ratio unter Threshold fällt
- Tracked Trends über Zeit

SURVIVING-MUTANT-ANALYZER (SMA):
- Identifiziert Surviving-Mutants
- Empfiehlt Tests für Coverage-Gaps
- Generiert actionable Vorschläge

INCREMENTAL-MUTATION-OPTIMIZER (IMO):
- Prüft welche Dateien sich geändert haben
- Optimiert Mutation-Runs auf Changed-Files only
- Skaliert auf große Codebases

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-08-U1: Surviving-Mutants Intelligente Analyse
Implementiere AST-basierte Analyse die Surviving-Mutants kategorisiert.
Beispiel: Kategorisiere als "unused-conditional", "untested-edge-case", etc.
Generiere Prioritized-List von Tests zum Schreiben.

TASK TA-08-U2: Mutation-Testing Dashboard
Erstelle Web-Dashboard dass Kill-Ratio visualisiert.
Zeige Surviving-Mutants mit Code-Links.
Trends über Zeit.

TASK TA-08-U3: Stryker-Schnelligkeit Optimierungen
Implementiere Mutant-Filtering dass offensichtlich-killable Mutanten removed.
Beispiel: Mutanten in Test-Dateien selbst.
Speed-up Mutation-Testing um 50%.

TASK TA-08-U4: Mutation-Testing Integration in PR-Checks
Integriere Stryker in GitHub Actions.
Kommentiere PR wenn Mutation-Score fällt.
Blockiere Merge wenn Score < 80%.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-08-A | Stryker Config ist korrekt | stryker command fehlgeschlagen | Überprüfe stryker.conf.json Syntax |
| VG-TA-08-B | Kill-Ratio >= 80% | Ratio < 80% | Schreibe Tests um Surviving-Mutants zu töten |
| VG-TA-08-C | Mutation-Score Baseline ist etabliert | Baseline-Datei nicht vorhanden | Führe stryker aus, speichere baseline-score.json |
| VG-TA-08-D | Keine Regression in Kill-Ratio | Kill-Ratio fällt < (Baseline - 5%) | Schreibe Tests für neue Surviving-Mutants |
| VG-TA-08-E | HTML-Report wird generiert | Report nicht vorhanden | Überprüfe reporters: [html] in stryker.conf.json |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-08 ist freigegeben wenn:
✓ Stryker ist konfiguriert und läuft ohne Fehler
✓ Kill-Ratio >= 80% für alle Mutanten-Typen
✓ Baseline-Score ist etabliert und tracked
✓ Surviving-Mutants sind analysiert und dokumentiert
✓ Inkrementelles Mutation-Testing ist implementiert
✓ HTML-Report wird generiert
✓ All validation gates (VG-TA-08-A bis VG-TA-08-E) sind PASS

AUTO-TRIGGER zu PHASE TA-09: Continuous-Testing wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-09 — CONTINUOUS-TESTING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01 bis TA-08 abgeschlossen
- Vollständige Test-Suite (Unit, Component, Integration, E2E, Mutation)

OUTPUT:
- Watch-Mode Konfiguration (vitest --watch)
- Pre-Commit-Hooks (nur geänderte Dateien)
- Pre-Push-Hooks (vollständige Test-Suite)
- Test-Parallelisierung mit Vitest-Workspaces
- Test-Splitting für CI-Parallelisierung

DEPENDENCIES:
- vitest (mit watch mode)
- husky (pre-commit/push hooks)
- lint-staged (run commands on staged files)
- turbo (für test parallelization)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Watch-Mode Konfigurieren
   - vitest --watch (default)
   - Automatisches Re-Run bei File-Änderungen
   - Smart file tracking (nur Änderungen re-test)

2. Pre-Commit-Hooks Setup
   - Datei: .husky/pre-commit
   - lint-staged Konfiguration in package.json
   - Nur Tests für geänderte Dateien ausführen
   - Beispiel: "**/*.test.ts": ["vitest run --related {}"

3. Pre-Push-Hooks Setup
   - Datei: .husky/pre-push
   - Führe VOLLSTÄNDIGE Test-Suite aus
   - Blocker wenn Tests fehlschlagen
   - Skip-Option mit --no-verify nur für Notfälle

4. Vitest-Workspaces Konfigurieren
   - Separate workspace.ts für jede Test-Kategorie
   - Unit-Workspace, Component-Workspace, Integration-Workspace
   - Parallele Execution
   - Shared-Worker für Konfiguration

5. Test-Splitting für CI
   - Partitioniere Tests in N Shards
   - Shard 1: Tests 1-X
   - Shard 2: Tests X+1-Y
   - CI läuft alle Shards parallel

6. Performance-Optimierungen
   - Cache vitest dependencies zwischen Runs
   - Caching von vite config compilation
   - Reuse worker processes

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- vitest.config.ts (Watch-Mode enabled)
- vitest.workspace.ts (Workspace-Definition)
- .husky/pre-commit (Pre-Commit Hook)
- .husky/pre-push (Pre-Push Hook)
- package.json (lint-staged Config)
- .github/workflows/test-ci-sharding.yml (CI-Sharding Workflow)
- scripts/shard-tests.ts (Test-Sharding Utility)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

WATCH-MODE-OPTIMIZER (WMO):
- Überwacht Watch-Mode Performance
- Identifiziert Slow-to-Rerun Tests
- Empfiehlt File-Isolation Improvements

PRE-HOOK-ENFORCER (PHE):
- Prüft dass Pre-Commit/Pre-Push Hooks sind installed
- Validiert dass Tests werden ausgeführt
- Alerts wenn Hooks disabled oder bypassed

SHARDING-COORDINATOR (SC):
- Optimiert Test-Verteilung auf CI-Shards
- Balanciert Load (evite Skew)
- Tracks Shard-Performance

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-09-U1: Intelligente Test-File Tracking
Implementiere Dependency-Graph dass identifies welche Tests müssen re-run.
Wenn source/components/Button.tsx sich ändert, nur Button-Tests re-run.
Nutze AST-Analyse für Import-Tracking.

TASK TA-09-U2: Watch-Mode UX Improvements
Implementiere Color-Coded Output dass schnell Status zeigt.
Keyboard-Shortcuts (p für Print-Failures, d für Debug, q für Quit).
Auto-Open Failed-Test in Editor.

TASK TA-09-U3: Pre-Hook Bypass Detection
Implementiere Linting dass--no-verify Commits detected und alerts.
Generiere Report von Bypassed-Commits.
Optional: blockiere Bypasses in CI.

TASK TA-09-U4: Test-Splitting Intelligence
Implementiere ML-basierte Predicting von Test-Duration.
Auto-Balance Shards um Slowest-Shard zu minimieren.
Continuous-Learning von historischen Duration-Data.

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-09-A | Vitest Watch-Mode funktioniert | vitest --watch fehlgeschlagen | Überprüfe vitest.config.ts watch-Settings |
| VG-TA-09-B | Pre-Commit Hooks sind installed | husky install fehlgeschlagen | Führe husky install aus |
| VG-TA-09-C | Pre-Push Hooks sind installed | Pre-Push Hook nicht vorhanden | Überprüfe .husky/pre-push |
| VG-TA-09-D | lint-staged funktioniert | lint-staged Befehl fehlgeschlagen | Überprüfe lint-staged Config in package.json |
| VG-TA-09-E | Test-Sharding funktioniert in CI | CI-Shards fehlgeschlagen | Überprüfe GitHub Actions Workflow, Shard-Parameters |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-09 ist freigegeben wenn:
✓ Vitest Watch-Mode ist funktionsfähig und schnell
✓ Pre-Commit Hooks sind installed (nur geänderte Dateien)
✓ Pre-Push Hooks sind installed (vollständige Suite)
✓ Vitest Workspaces sind konfiguriert für Parallelisierung
✓ Test-Sharding funktioniert in CI
✓ Performance ist akzeptabel (Watch-Mode < 5s für einzelne Test)
✓ All validation gates (VG-TA-09-A bis VG-TA-09-E) sind PASS

AUTO-TRIGGER zu PHASE TA-10: Test-Reporting wird initialisiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE TA-10 — TEST-REPORTING UND ANALYTICS
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT:
- PHASE TA-01 bis TA-09 abgeschlossen
- Alle Test-Artifacts vorhanden (Coverage, Performance, Mutation, etc.)

OUTPUT:
- Coverage-Trends über Zeit
- Flaky-Test-Detection und Quarantine
- Test-Duration-Tracking
- CI-Dashboard mit Metriken
- JUnit-XML-Reports
- HTML-Coverage-Reports
- Test-Gap-Analyse

DEPENDENCIES:
- codecov.io (Cloud Service)
- coveralls.io (Alternative)
- vitest (für Coverage-Reports)
- playwright (für Test-Duration)
- @actions/github (für PR Comments)

─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. Coverage-Trends Setup
   - vitest run --coverage
   - Upload zu Codecov oder Coveralls
   - Track Trends über Git-History
   - Alert wenn Coverage < (Baseline - 2%)

2. Flaky-Test-Detection
   - Konfiguriere vitest retries: 2
   - Logge jeden Retry als Potential-Flakiness
   - Sammle Flaky-Test-Stats
   - Quarantine Tests mit > 50% Flakiness (skip mit comment)

3. Test-Duration-Tracking
   - vitest generiert test duration in Reporter
   - Speichere Durations in JSON-Format
   - Identifiziere Slow-Tests (top 10%)
   - Alert wenn Test-Duration > Baseline + 50%

4. CI-Dashboard
   - Web-Dashboard mit Test-Metriken
   - Coverage Trends (Graph)
   - Test-Count Trends
   - Flaky-Test List
   - Performance Regressions

5. JUnit-XML-Report Generation
   - vitest reporter: junit
   - Speichere XML für CI-Integration
   - GitHub Actions parst Reports automatisch

6. HTML-Coverage-Reports
   - vitest coverage reporter: html
   - Interactive-Coverage-Report mit Drill-Down
   - Covered vs Uncovered Lines visualisiert

7. Test-Gap-Analyse
   - Skript: scripts/analyze-test-gaps.ts
   - Identifiziere Funktionen ohne Tests
   - Suche nach uncovered Branches
   - Generiere List von Gap-Candidates

─────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- .github/workflows/coverage-upload.yml (Codecov Upload)
- scripts/analyze-flaky-tests.ts (Flaky-Test Analyzer)
- scripts/analyze-test-duration.ts (Duration Tracker)
- scripts/analyze-test-gaps.ts (Gap Analyzer)
- vitest.config.ts (Coverage + Duration Reporters)
- dashboard/ (Web-Dashboard Source)
- reports/coverage/ (HTML Coverage Reports)
- reports/junit/ (JUnit XML Reports)

─────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

COVERAGE-TREND-VALIDATOR (CTV):
- Tracks Coverage über Git-History
- Alerts wenn Regression > 2%
- Prüft Baseline ist in Git

FLAKY-TEST-QUARANTINE-MANAGER (FTQM):
- Detektiert Flaky-Tests automatisch
- Quarantined Tests mit Komment
- Blocked PRs bis Flakiness resolved

TEST-DURATION-REGRESSOR (TDR):
- Tracks Test-Duration Trends
- Alerts für Slow-Test Regressions
- Empfiehlt Performance-Optimierungen

DASHBOARD-MANAGER (DM):
- Synchronisiert Daten zu Web-Dashboard
- Updatert Metriken nach jedem Test-Run
- Renders Visualisierungen

─────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK TA-10-U1: Flaky-Test Root-Cause Analyse
Implementiere Analyzer dass Flaky-Tests kategorisiert nach wahrscheinlicher Ursache.
Beispiele: Async-Timing, Network-Latency, Race-Conditions, Randomization.
Generiere Repair-Vorschläge für jede Kategorie.

TASK TA-10-U2: Test-Duration Predictive Monitoring
Implementiere Regression-Modell dass Test-Duration predicted.
Wenn aktueller Run > Predicted-Duration + Threshold, alert.
Auto-Track Historical-Durations für Modell-Training.

TASK TA-10-U3: Coverage-Gap Prioritization
Implementiere Scoring dass Coverage-Gaps prioritized.
High-Priority: Uncovered Branches in Business-Logic.
Low-Priority: Uncovered Branches in Boilerplate/Utilities.
Generiere Prioritized-List zum Schreiben von Tests.

TASK TA-10-U4: Test-Analytics Dashboard Expansion
Erweitere Dashboard mit Interactive-Features.
Drill-Down in spezifische Tests.
Time-Series Graphs für Alle Metriken.
Exportable Reports (CSV, PDF).

─────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Validierung | Fail-Kriterium | Remediation |
|---------|------------|-----------------|-------------|
| VG-TA-10-A | Coverage-Reports werden generiert | vitest --coverage fehlgeschlagen | Überprüfe @vitest/coverage-v8 Installation |
| VG-TA-10-B | Codecov Upload funktioniert | Codecov API Error | Überprüfe CODECOV_TOKEN in GitHub Secrets |
| VG-TA-10-C | Flaky-Test Detection ist aktiv | Keine Flaky-Test Stats | Überprüfe vitest retries Config |
| VG-TA-10-D | Test-Duration wird tracked | Duration-JSON nicht generiert | Überprüfe vitest reporter Config |
| VG-TA-10-E | CI-Dashboard ist verfügbar | Dashboard URL nicht erreichbar | Deploy Dashboard-Server oder Statische-Files |

─────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Ausgang aus PHASE TA-10 ist freigegeben wenn:
✓ Coverage-Trends werden getracked über Zeit
✓ Flaky-Test-Detection identifiziert wiederholte Fehler
✓ Flaky-Tests werden automatisch quarantined
✓ Test-Duration wird tracked und gepredicted
✓ CI-Dashboard zeigt Live-Metriken
✓ JUnit-XML-Reports werden generiert für CI-Integration
✓ HTML-Coverage-Reports sind interaktiv und aussagekräftig
✓ Test-Gap-Analyse identifiziert Coverage-Candidates
✓ All validation gates (VG-TA-10-A bis VG-TA-10-E) sind PASS

═══════════════════════════════════════════════════════════════════════════════
CROSS-PIPELINE-ABHAENGIGKEITEN
═══════════════════════════════════════════════════════════════════════════════

INTEGRATION MIT CI/CD-PIPELINE

1. GitHub Actions Workflows
   - test-ci.yml: Unit + Component Tests (Pre-Commit)
   - test-integration.yml: Integration Tests (Pre-Push)
   - test-e2e.yml: E2E Tests (Post-Merge)
   - test-performance.yml: Performance Tests (Post-Merge)
   - mutation-testing.yml: Mutation Tests (Scheduled)
   - coverage-report.yml: Coverage Trends (Post-Merge)

2. Pre-Merge Checks
   - Unit + Component Tests MÜSSEN PASS sein
   - Coverage darf nicht fallen < (Baseline - 2%)
   - Test-Pyramid-Ratio muss 70/20/10 sein
   - Flaky-Tests müssen 0 sein

3. Post-Merge Automation
   - E2E Tests auf Staging-Environment
   - Performance-Tests und Lighthouse CI
   - Coverage-Trends werden tracked und kommentiert
   - Mutation-Testing läuft inkrementell

4. Production-Monitoring Integration
   - Sentry für Runtime-Errors
   - DataDog für Performance-Monitoring
   - LogRocket für Session-Replay
   - Alerts wenn Production-Errors > Baseline

DEFECT-ELIMINATION-PIPELINE INTEGRATION

1. Bug-Fix-Workflow
   - Regression-Test wird geschrieben (reproduziert Bug)
   - Regression-Test startet mit red status
   - Bug wird gefixet, Test wird green
   - Test wird zu Test-Suite hinzugefügt (Permanent)

2. Zero-Breakage Commitment
   - Alle Tests vor Merge auf Main PASS
   - No Flaky Tests vor Merge
   - No Regressions in Performance
   - No Accessibility Violations

3. Test-Failure Triage
   - Automatische Failure-Analyse kategorisiert Bug
   - "Test-Bug" (Flaky): Quarantine oder Fix
   - "Code-Bug" (Regression): Blocker bis Gefixet
   - "Timeout" (Performance): Scale oder Optimize

4. Quarantine-Management
   - Flaky Tests werden in separate Suite moved
   - Quarantined-Tests blockieren nicht Merge
   - Tracking von Quarantine-Duration
   - Alert wenn Quarantine > 7 Tage

═══════════════════════════════════════════════════════════════════════════════
KONFIGURATIONS-SPEZIFIKATION
═══════════════════════════════════════════════════════════════════════════════

VITEST CENTRAL CONFIGURATION

vitest.config.ts:
- Environment: node (mit happy-dom für Component-Tests)
- Globals: true
- Test-Timeout: 10000ms (Unit), 30000ms (Integration)
- Coverage-Provider: v8
- Coverage-Thresholds: Statements 80%, Branches 75%, Functions 80%, Lines 80%
- Include-Pattern: **/*.test.ts, **/*.spec.ts
- Exclude-Pattern: node_modules, dist, coverage
- Reporters: default, html, json, junit
- Watch-Enabled: true

PLAYWRIGHT CONFIGURATION

playwright.config.ts:
- webServer: { command: "npm run dev", port: 3000 }
- baseURL: http://localhost:3000
- Timeout: 30000ms
- fullyParallel: true
- workers: 4
- Retries: 0 (lokal), 2 (CI)
- Browsers: chromium, firefox, webkit
- Reporter: html, json, junit
- Screenshot: only-on-failure
- Video: retain-on-failure

MSW CONFIGURATION

__tests__/mocks/server.ts:
- setupServer() mit Globalen Handlers
- Alle Standard REST-Endpoints gemockt
- Error-Responses für Edge-Cases
- beforeAll: server.listen()
- afterEach: server.resetHandlers()
- afterAll: server.close()

STRYKER CONFIGURATION

stryker.conf.json:
- testRunner: vitest
- mutator: typescript
- mutateRelation: { include: "src/**/*.ts", exclude: "**/*.test.ts" }
- Kill-Ratio-Threshold: 80%
- breakOnThreshold: true
- Reports: html, json, progress-bar

GITHUB ACTIONS MATRIX

- Node.js Versions: 18, 20, 22
- OS: ubuntu-latest, windows-latest, macos-latest
- Test-Shards: 4
- Parallel-Workers: 4

═══════════════════════════════════════════════════════════════════════════════
METRIKEN UND KPIS
═══════════════════════════════════════════════════════════════════════════════

CRITICAL METRIKEN (muss auf Dashboard sein)

1. Test-Coverage: Target >= 80% Statements
   - Baseline: Initial Coverage-Run
   - Alert-Threshold: Falls < (Baseline - 2%)
   - Trend: Graph über 90 Tage

2. Test-Pyramide-Ratio: Target 70% Unit / 20% Integration / 10% E2E
   - Validation: Automatisch nach Test-Run
   - Alert: Falls Ratio verletzt
   - Dashboard-Widget: Pyramide-Visualisierung

3. Flaky-Tests: Target 0 (oder < 1%)
   - Detection: Automatisch nach Retries
   - Quarantine: Tests mit > 50% Flakiness
   - SLA: Flaky-Tests müssen < 7 Tage Quarantine sein

4. Test-Duration (P95): Target < 5 seconds pro Test
   - Tracking: vitest Reporter
   - Alert: Falls P95 > (Baseline + 50%)
   - Slow-Tests: Top 10% Liste

5. Mutation-Kill-Ratio: Target >= 80%
   - Baseline: Erste Mutation-Run
   - Alert: Falls < (Baseline - 5%)
   - Survivors: Analyze top 20 Surviving-Mutants

6. Performance-Score (Lighthouse): Target >= 90
   - Metrics: LCP < 2.5s, CLS < 0.1, INP < 200ms
   - Alert: Falls Score < 85
   - Regressions: Tracked pro Commit

TRACKING UND REPORTING

Coverage-Trends:
- git-tracked baseline.json Files
- Codecov/Coveralls Cloud-API Integration
- Dashboard-Widget zeigt Trend-Graph

Test-Results:
- JUnit-XML generiert von Vitest
- GitHub Actions parst Reports
- Commit-Status setzt sich automatisch

Mutation-Scores:
- Stryker JSON-Reports versioniert
- Stored in __tests__/mutation/ Directory
- Trends über Zeit visualisiert

Performance-Metrics:
- Lighthouse-Report als HTML im Repo
- WebVitals.json für Zeitreihe
- k6-Results als HAR-Files

DASHBOARD IMPLEMENTATION

Web-Dashboard (dashboard/):
- Real-Time Test-Metrics
- Coverage-Trend-Graphs
- Test-Pyramid-Visualization
- Flaky-Test-List
- Performance-Regression-Alerts
- Mutation-Score-History
- Top-10 Slow-Tests

Dashboard-Update-Trigger:
- Nach vitest run (Coverage, Duration)
- Nach Playwright run (E2E Duration, Screenshots)
- Nach Stryker run (Mutation-Score)
- Nach Lighthouse run (Performance)

ALERTING-RULES

- Coverage-Regression > 2%: Slack + GitHub Comment
- Flaky-Test Detected: Block PR bis Fixed
- Performance-Regression > 10%: Slack Alert
- Mutation-Score Drop > 5%: Email-Alert
- Test-Duration P95 Regression > 50%: Slack Alert
- Build-Fail auf Main: PagerDuty Alert

═══════════════════════════════════════════════════════════════════════════════
DOKUMENTABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

Diese 10-Phasen-Pipeline orchestriert die vollständige automatisierte Test-Infrastruktur für Next.js-Applikationen. Jede Phase ist strukturiert mit:

- CHAIN-LINK-HEADER (Input/Output/Dependencies)
- DOMINO-PROTOKOLL (Nummerierte Schritte)
- ARTIFACT-PROTOKOLL (Deliverables)
- DIRECTOR-ZUWEISUNG (Validatoren)
- ULTRATHINK-LANGZEITTASKS (Zukunfts-Optimierungen)
- VALIDATION-GATES (Metriken-Tabellen)
- EXIT-PROTOKOLL (Abschluss-Kriterien)

Der automatisierte Handoff zwischen Phasen ist durch EXIT-PROTOKOLLE definiert. Implementierende KI-Systeme nutzen diese Spezifikation als SSOT. Konfigurationen sind zentral dokumentiert in der KONFIGURATIONS-SPEZIFIKATION-Sektion.

Continuous Optimization wird durch ULTRATHINK-LANGZEITTASKS angetrieben. Metriken und KPIs sind in der finalen METRIKEN-Sektion dokumentiert und auf dem CI-Dashboard sichtbar.

Status: TERMINAL. Alle Phasen dokumentiert. Handoff zur Implementierung freigegeben.
