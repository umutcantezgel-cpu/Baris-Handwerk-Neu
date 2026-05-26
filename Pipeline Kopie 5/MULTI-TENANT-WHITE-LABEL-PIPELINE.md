===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-72 / ME-06 (OMNI-CLOSED-LOOP Abschluss) — OPTIONAL
BLOCK-NUMMER: 20 (MULTI-TENANT — nur bei Aktivierung)
AKTIVIERUNGSBEDINGUNG: .ai-discovery-context.md enthaelt "multi-tenant: true"
  ODER der Operator hat die MT-Pipeline explizit aktiviert.
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - Alle vorherigen Kontext-Dateien (zertifizierte Codebasis)
AUSGANGS-KONTEXTDATEI: .ai-tenant-context.md
AUSGANGS-TRIGGER: Loop-Entscheidung (BLOCK 21). Wenn alle Metriken im
  Zielbereich liegen: ZERTIFIZIERT und Production-Deployment. Sonst:
  Defekt-Routing und partieller Neudurchlauf.
DEFEKT-RUECKFUEHRUNG: Bei Multi-Tenant-Defekten wird der Loop ab MT-01 neu
  gestartet, anschliessend erneute OMNI-Zertifizierung.

===============================================================================

ANTIGRAVITY PIPELINE-SYSTEM: MULTI-TENANT UND WHITE-LABEL PIPELINE

═══════════════════════════════════════════════════════════════════════════════

EXECUTIVE-SUMMARY

Dieses Dokument definiert die vollständige, fehlerfreie Multi-Tenant-White-Label-Pipeline für autonome Systeme. Sie umfasst 8 Phasen, die von Tenant-Isolation über Theming bis zu Compliance führen. Jede Phase ist eine unverletzliche Spezifikation mit numerischen Operative Steps, Validation-Gates und expliziten Chain-Link-Abhängigkeiten. Diese Pipeline erzwingt einen Infinite Optimizing Loop und ist die Single Source of Truth (SSOT) für alle Implementierungen.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-01 — TENANT-ISOLATION-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Systemarchitektur-Anforderungen, Database-Setup, Request-Objekt-Stream
OUTPUT: Tenant-Context-Propagation-Middleware, AsyncLocalStorage-Registry, Tenant-Resolver-Implementierung
ABHÄNGIGKEITEN: Security-Pipeline (Auth-Tokens), DB-Migration-Pipeline (Initial-Schema)
TRIGGER-QUELLE: OMNI-SYSTEM-INIT oder Deployment-Workflow

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. ENTSCHEIDUNGSMATRIX ERSTELLEN: Analysiere Tenant-Isolations-Strategien:
   - Schema-Basiert (separate PostgreSQL-Schema pro Tenant, overhead minimal, migration komplex)
   - Row-Basiert (shared tables, tenant_id column, WHERE-Filter obligatorisch, höchste Performance)
   - Database-Basiert (separate DB pro Tenant, maximale Isolation, operational overhead hoch)
   Entscheidung: Row-basiert als Standard (Typ: ENUM mit fallback auf Schema für Enterprise)

2. TENANT-CONTEXT-PROPAGATION definieren: AsyncLocalStorage als Speicher für Tenant-Kontext.
   Initialisiere Context mit: tenantId (UUID), tenantSlug (string), tenantPlan (enum), tenantDomain (string),
   requestId (UUID), userId (UUID | null), permissions (string[]), features (Feature-Flags-Map).

3. MIDDLEWARE-TENANT-RESOLUTION implementieren (Priorität, strikt in dieser Reihenfolge):
   a) JWT-Token-Claim (x-tenant-id im Authorization-Bearer-Token)
   b) HTTP-Header (x-tenant-id, case-insensitive)
   c) Subdomain-Extraktion (*.tenantslug.domain.com regex match)
   d) Fallback auf Default-Tenant (error wenn nicht setzbar)

4. TENANT-REGISTRY entwickeln: Erstelle in-memory Cache (Redis als Backup) mit:
   - tenantId -> tenantConfig mapping
   - TTL: 5 Minuten, invalidation on webhook event
   - Struktur: { tenantId, slug, domain, plan, limits, features, theme, customDomain }

5. VALIDATION-GATE im Middleware: Wenn Tenant nicht gefunden, HTTP 403 Forbidden werfen mit:
   { error: "Tenant not found or access denied", errorCode: "TENANT_RESOLUTION_FAILED" }

6. ZOD-CONFIG-SCHEMA definieren für Tenant-Objekt (vollständig typisiert).

7. ASYNC-LOCAL-STORAGE-BINDING: Implementiere Store-Funktion mit Context-Run Pattern.

8. ERROR-HANDLING für Edge-Cases: Null Tenant nach Fallback, Invalid tenantId format, Registry-Inconsistency.

9. PERFORMANCE-OPTIMIZATION: Tenant-Kontext als Request-Local, JS single-threaded.

10. LOGGING-REQUIREMENT: Jede Tenant-Resolution MUSS loggen mit Timing.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- middleware.ts (150+ Zeilen)
- tenantContext.ts (Hook + getTenantContext)
- TenantSchema.ts (Zod vollständig)
- tenantRegistry.ts (Cache mit Redis-Fallback)
- tenantMiddleware.test.ts (Unit-Tests)
- types/tenant.ts (Interfaces)

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: TENANT-ARCHITECT
Verantwortung: Middleware-Logik, Context-Propagation, Registry-Konsistenz
Kritisches Skill: AsyncLocalStorage, JWT-Parsing, Regex
Eskalations-Pfad: Wenn Tenant-Resolution > 100ms: Optimization-Sprint

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT01-01: Robust JWT-Token-Validation mit JWKS + grace-period fallback.
TASK-MT01-02: Tenant-Context-Leak-Prevention durch parallele Requests.
TASK-MT01-03: Subdomain-Regex-Edge-Cases (deep nesting, dashes, TLDs).
TASK-MT01-04: Fallback-Domain-Management für Admin-Testing.
TASK-MT01-05: Prometheus-Metriken für Resolution-Monitoring.

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT01-01 | Tenant muss via mindestens eine Methode resolviert werden | CRITICAL |
| GATE-MT01-02 | TenantId muss UUID v4 Format erfüllen | CRITICAL |
| GATE-MT01-03 | Tenant-Registry hit-rate MUSS > 95% sein | HIGH |
| GATE-MT01-04 | AsyncLocalStorage darf nicht leaken | CRITICAL |
| GATE-MT01-05 | Middleware-Response-Time < 50ms (p99) | HIGH |
| GATE-MT01-06 | Tenant-Kontext darf nicht in Error-Responses geloggt werden | CRITICAL |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: Middleware antwortet auf 100 Requests mit korrekter Tenant-Resolution.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-02 — WHITE-LABEL-THEMING

Das System hat bestätigt: Tenant-Context ist verfügbar. Nachfolgende Phase nutzt Context für Theme-Injection.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-02 — WHITE-LABEL-THEMING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Config mit theme-Objekt (MT-01), CSS-System, Frontend-Build
OUTPUT: Dynamic Theme-Injection-Engine, Runtime-Theme-Override-Middleware, Theme-CSS-Artifacts
ABHÄNGIGKEITEN: MT-01 (Tenant-Context), Design-System-Pipeline
TRIGGER-QUELLE: Nach GATE-MT01-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. THEME-SCHEMA definieren mit Zod (Farben, Fonts, Logos, Dark-Mode-Varianten, Custom-CSS).

2. CSS-CUSTOM-PROPERTIES-OVERRIDE-CHAIN implementieren:
   System-Level -> Tenant-Level -> Runtime CSS-Variables.

3. BUILD-TIME vs RUNTIME-DECISION: Pre-built CSS Files oder dynamische Injection.

4. DYNAMIC-THEME-INJECTION-MIDDLEWARE (Server-Side): tenantContext -> Theme-Query -> Dark-Mode-Detection.

5. LOGO-INJECTION für Header, Login, Emails, PDFs mit Cache-Busting.

6. FONT-LOADING optimieren mit Google Fonts API, swap-Strategy, Custom-Fonts über CDN.

7. DARK-MODE-VARIANTEN: System + User + Tenant-Level mit Priorität-Hierarchie.

8. FAVICON-UND-PWA-MANIFEST: dynamische Generation pro Tenant, Icon-Sets (192px, 512px).

9. THEME-PREVIEW-ENGINE: Admin-Panel Live-Vorschau mit 500ms Polling.

10. PERFORMANCE-KRITIKALIEN: Font-Loading < FCP, Theme-Injection < 100ms, keine DOM-Reflows.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- themeConfig.ts, themeMiddleware.ts, ThemeProvider.tsx, useTheme.ts
- /public/themes/ (pre-built CSS), theme-runtime.ts, themePreview.tsx
- types/theme.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: THEMING-ARCHITECT
Verantwortung: CSS-Orchestration, Performance, Multi-Variant-Management
Kritisches Skill: CSS-Variables, SSR-Timing, Font-Loading-Strategien
Eskalations-Pfad: Wenn Theme-Load > 150ms: Cache-Optimization

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT02-01: Zero-FOUC mit CSS-In-Head-Strategie vor Body-Render.
TASK-MT02-02: Font-Weight-Fallback mit Metrik-Kompatibilität.
TASK-MT02-03: Dark-Mode-Contrast-Audit für WCAG AAA (7:1 Ratio).
TASK-MT02-04: Cache-Invalidation-Strategie bei Theme-Änderung.
TASK-MT02-05: Theme-A/B-Testing mit Segment-Tracking.

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT02-01 | Tenant-Colors MÜSSEN valide Hex-Format sein | CRITICAL |
| GATE-MT02-02 | Theme-Injection darf SSR nicht verzögern (< 100ms) | HIGH |
| GATE-MT02-03 | WCAG AAA Contrast-Ratio erfüllt | HIGH |
| GATE-MT02-04 | Dark-Mode-Varianten brechen nicht Accessibility | CRITICAL |
| GATE-MT02-05 | Logo-URL HTTPS oder Data-URI | CRITICAL |
| GATE-MT02-06 | Custom-CSS keine script-Tags (XSS-Prevention) | CRITICAL |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: 5 verschiedene Tenants mit unterschiedlichen Themes,
Dark-Mode-Toggle funktioniert, Logo-Load < 500ms.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-03 — DOMAIN-MANAGEMENT

Theme-System produktionsreif. Nachfolgende Phase managed Custom-Domains.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-03 — DOMAIN-MANAGEMENT
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Slug, Custom-Domain-Request, DNS-API-Credentials, SSL-System
OUTPUT: Domain-Mapping-Registry, SSL-Zertifikat (Let's Encrypt), Reverse-Proxy-Config
ABHÄNGIGKEITEN: MT-01 (Tenant-Resolution mit Domain-Header), External (Let's Encrypt, DNS)
TRIGGER-QUELLE: Nach GATE-MT02-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. DOMAIN-MAPPING-SCHEMA mit Zod (domain, tenant_id, verification-Status, SSL-Status).

2. CUSTOM-DOMAIN-REQUEST-FLOW: Validation -> Token-Generation -> DNS-Polling -> Verification.

3. WILDCARD-SSL-STRATEGIE (Let's Encrypt DNS-01): *.domain + domain, DNS-Provider-Integration.

4. DNS-KONFIGURATION (CNAME für Non-Root, A/ALIAS für Root, Wildcard-Subdomain).

5. REVERSE-PROXY-KONFIGURATION (Caddy oder Nginx): Dynamic Config per Domain, Health-Checks.

6. DOMAIN-VERIFIZIERUNG (Multi-Step): DNS-CNAME-Lookup, HTTPS-Connectivity, Response-Check.

7. SSL-ZERTIFIKAT-LIFECYCLE: Issue via DNS-01, Monitor, 30-Tage-Renewal, Fallback-Alert.

8. FALLBACK-DOMAIN-HANDLING: tenant-{slug}.antigravity.io immer verfügbar, Health-Check-Fallback.

9. DOMAIN-TRANSFER-SZENARIO: Alte + neue Domain live für Transition, dann Deaktivierung.

10. PERFORMANCE-METRIKEN: Domain-Resolution < 10ms, SSL-Handshake valid, Reverse-Proxy < 50ms.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- domainMapping.ts, domainService.ts, dnsPollWorker.ts, reverseProxyConfig.ts
- letsEncryptClient.ts, dnsProviderAdapter.ts, domainVerification.tsx
- types/domain.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: INFRASTRUCTURE-ARCHITECT
Verantwortung: DNS-Orchestration, SSL-Lifecycle, Reverse-Proxy-Config
Kritisches Skill: ACME-Protokoll, DNS-API, Reverse-Proxy
Eskalations-Pfad: Wenn SSL-Renewal > 3x fehlschlägt: Manual-Review

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT03-01: DNS-Propagation-Handling (24-48h) mit Retry-Logic, Support-Ticket.
TASK-MT03-02: SSL-Certificate-Revocation via ACME RevokeCert.
TASK-MT03-03: Subdomain-Management (api.*, admin.*) unter Wildcard.
TASK-MT03-04: Health-Checks + Alerting (DNS-Resolution, SSL-Handshake, HTTP-Response).
TASK-MT03-05: Domain-Takeover-Prevention (30-Tage-Holding-Period).

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT03-01 | Domain-Syntax RFC 1035 konform | CRITICAL |
| GATE-MT03-02 | Nur eine primary domain pro Tenant | CRITICAL |
| GATE-MT03-03 | SSL-Zertifikat gültig bevor Domain aktiv | CRITICAL |
| GATE-MT03-04 | DNS-Verifizierung bestanden (CNAME oder A) | CRITICAL |
| GATE-MT03-05 | Reverse-Proxy Health-Check erfolgreich | HIGH |
| GATE-MT03-06 | SSL-Renewal 100% Erfolgsquote | HIGH |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: 3 Custom-Domains aktiv mit gültigen SSL-Zertifikaten,
DNS-Verifizierung erfolgreich, Reverse-Proxy routet fehlerfrei.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-04 — FEATURE-FLAGS

Domain-Management live. Nachfolgende Phase implementiert Tenant-spezifische Feature-Toggles.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-04 — FEATURE-FLAGS
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Config, Feature-Catalog, User-Segmentation, Plan-Information
OUTPUT: Feature-Flag-System mit Tenant-Scoping, Gradual-Rollout-Engine, A/B-Testing-Framework
ABHÄNGIGKEITEN: MT-01 (Tenant-Context), MT-06 (Plan-Info), API-Design-Pipeline
TRIGGER-QUELLE: Nach GATE-MT03-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. FEATURE-FLAG-SCHEMA mit Zod (flagKey, enabled, type, tenantOverrides, rolloutPercentage, segments, tiers).

2. FEATURE-FLAG-REGISTRY: Redis Cache (TTL 5min) + PostgreSQL Fallback, invalidation via Webhook.

3. EVALUATION-ENGINE (Server-Side): Tenant-Override -> Percentage -> Segment -> Tier -> Global-Default.

4. CLIENT-SIDE-EVALUATION (Optional): Safe Flags nur, window.__FLAGS__, useFeature Hook.

5. GRADUAL-ROLLOUT-STRATEGIE: 0% -> 10% -> 50% -> 100%, Segment-Progression, Tier-Gates.

6. A/B-TESTING-Framework: 2 Varianten pro Flag, consistent hash(userId), Analytics-Tracking.

7. FLAG-LIFECYCLE-MANAGEMENT: PLANNING -> STAGING -> PRODUCTION -> STABLE -> DEPRECATED -> ARCHIVED.

8. AUDIT-LOGGING für Flag-Änderungen: { timestamp, adminId, flagKey, change, oldValue, newValue }.

9. PLAN-TIER-GATES: Free max 5, Pro max 20, Enterprise all Features.

10. DEFAULT-FLAGS definieren: 'new_dashboard' (10%), 'dark_mode' (100%), 'advanced_analytics' (enterprise).

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- featureFlag.ts, featureFlagService.ts, featureFlagMiddleware.ts, useFeature.ts
- flagAdmin.tsx, flagAudit.ts, /docs/features.md, types/flags.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: FEATURE-ARCHITECT
Verantwortung: Flag-Design, Rollout-Orchestration, A/B-Testing-Setup
Kritisches Skill: Probabilistic-Hashing, Segment-Matching, Statistical-Analysis
Eskalations-Pfad: Wenn Flag-Evaluation > 50ms: Cache-Optimization

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT04-01: Consistent-Hashing (hash(userId + flagKey) % 100) für deterministic User-Assignment.
TASK-MT04-02: Circular-Dependency-Prevention (DAG-Validation bei Flag-Creation).
TASK-MT04-03: Silent-Rollback-on-Error (Fallback zu global-default, alerting > 5% failure).
TASK-MT04-04: Flag-Performance-Profiling (weekly Report, Alert > 100ms).
TASK-MT04-05: Experiment-Sample-Size-Calculator für User-Facing-UI.

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT04-01 | Flag-Key Syntax lowercase + underscores | CRITICAL |
| GATE-MT04-02 | Tenant-Tier-Override konform mit Plan-Limits | CRITICAL |
| GATE-MT04-03 | Percentage + Segment konsistent | HIGH |
| GATE-MT04-04 | Flag-Evaluation nie User-sichtbar (server-side) | CRITICAL |
| GATE-MT04-05 | Archived-Flags aus Evaluationen ausgeschlossen | HIGH |
| GATE-MT04-06 | A/B-Test-Konsistenz: User immer gleiche Variant | CRITICAL |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: 10 Flags definiert, 5 A/B-Tests aktiv, Flag-Evaluation < 50ms (p99), Audit-Logs komplett.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-05 — DATEN-ISOLATION

Feature-Flag-System produktionsreif. Nachfolgende Phase implementiert Tenant-Daten-Isolation.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-05 — DATEN-ISOLATION
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Database-Schema, Prisma ORM, Tenant-Context (MT-01), Daten-Modelle
OUTPUT: Tenant-scoped Query-Engine, PostgreSQL-RLS-Policies, Cross-Tenant-Prevention-Layer
ABHÄNGIGKEITEN: MT-01 (Tenant-Context), DB-Migration-Pipeline, Prisma-Setup
TRIGGER-QUELLE: Nach GATE-MT04-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. TENANT-ID-FOREIGN-KEY-STRUKTUR: Alle Tenant-Tables tenant_id UUID NOT NULL, FK CASCADE, UNIQUE-Constraint.

2. PRISMA-MIDDLEWARE für Auto-WHERE-Filtering: Intercepte Queries, auto-inject tenant_id WHERE.

3. PRISMA-SCHEMA Anpassung: tenantId Field, Relation, Unique-Constraint pro Tenant.

4. POSTGRESQL-ROW-LEVEL-SECURITY (RLS): ALTER TABLE ENABLE RLS, CREATE POLICY per Operation.

5. SHARED vs TENANT-TABELLEN definieren: Users/Tenants/Flags = SHARED, Projects/Tasks = TENANT-SCOPED.

6. CROSS-TENANT-PREVENTION-LAYER: Query-Guard nach Execution, Mismatch = Error + HIGH-Log.

7. FIELD-LEVEL-ENCRYPTION (optional): PII-Felder verschlüsseln, Prisma Middleware, Key pro Tenant.

8. QUERY-LOGGING UND AUDIT: Alle Daten-Zugriffe loggen, Alert bei WHERE-Missing oder Cross-Tenant.

9. MIGRATION-SAFEGUARDS: Bestehende Daten tenant_id zuweisen, RLS-Policies aktivieren, Verifizieren.

10. PERFORMANCE-OPTIMIERUNGEN: Query-Planner + Indexes, Ziel < 100ms (p99).

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- prismaMiddleware.ts, db.migrations, schema.prisma, databaseGuards.ts
- queryLogging.ts, /docs/database-schema.md, types/database.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: DATABASE-ARCHITECT
Verantwortung: Schema-Design, RLS-Policy-Management, Query-Performance
Kritisches Skill: PostgreSQL, Prisma, Query-Optimization
Eskalations-Pfad: Wenn Query > 500ms: Query-Plan-Review

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT05-01: Automatic Tenant-Context-Propagation in Background-Workers.
TASK-MT05-02: Cross-Tenant-Query-Scenario-Test (Tenant A reads Tenant B = 0 Rows).
TASK-MT05-03: RLS-Policy-Edge-Cases (No Tenant-Context, NULL tenant_id, Super-Admin).
TASK-MT05-04: Encryption-Key-Rotation ohne Downtime.
TASK-MT05-05: Query-Performance-Benchmarking + Dashboard für Top-20-Queries.

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT05-01 | Alle Tenant-Tables tenant_id Column + FK | CRITICAL |
| GATE-MT05-02 | PostgreSQL RLS aktiviert | CRITICAL |
| GATE-MT05-03 | Prisma Middleware auto-inject tenant_id | CRITICAL |
| GATE-MT05-04 | Cross-Tenant-Query-Test 100% Isolation | CRITICAL |
| GATE-MT05-05 | Field-Level-Encryption schützt PII | HIGH |
| GATE-MT05-06 | Query-Logging erfasst alle Zugriffe | HIGH |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: 100 Queries auf isolierte Daten erfolgreich, RLS-Policies verifiziert,
Cross-Tenant-Prevention-Tests bestanden, Query-Performance < 100ms (p99).

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-06 — BILLING UND SUBSCRIPTION

Daten-Isolation fehlerlos. Nachfolgende Phase implementiert Billing-System.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-06 — BILLING UND SUBSCRIPTION
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Identität (MT-01), Plan-Definition, Usage-Daten, Stripe-API
OUTPUT: Billing-Engine, Subscription-Manager, Invoice-Generator, Usage-Tracking-System
ABHÄNGIGKEITEN: MT-01 (Tenant-Context), Stripe-Account, Database-Schema
TRIGGER-QUELLE: Nach GATE-MT05-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. SUBSCRIPTION-PLAN-SCHEMA mit Zod (planName, price, limits, features, supportLevel, trialDays).

2. SUBSCRIPTION-ENTITY-SCHEMA (subscriptionId, tenantId, stripeSubscriptionId, status, periods, metadata).

3. STRIPE-INTEGRATION: Product + Price per Plan, API-Calls, Webhook-Handling, Error-Management.

4. METERED-BILLING für Usage: Tägliche Aggregation, Stripe-Event-Submission, Monatliche Excess-Berechnung.

5. UPGRADE/DOWNGRADE-WORKFLOW: Proration, Feature-Flag-Updates, Audit-Logging, User-Communication.

6. GRACE-PERIOD-HANDLING: past_due -> Retry -> unpaid -> Suspension -> Termination (nach 30 Tage).

7. INVOICE-GENERATION: PDF mit Tenant-Logo, Line-Items, Total, Due-Date, Archive + Email.

8. USAGE-TRACKING-SYSTEM: Zentrale Metriken-Table, Tägliche Aggregation, Alerts bei Limit-Näherung.

9. FREE-PLAN-LIMITS: Soft-Limit (90%), Hard-Limit, Auto-Reset nach 30 Tage.

10. ENTERPRISE-CUSTOM-BILLING: Custom-Pricing, Manual-Subscription, Annual-Billing.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- billingPlan.ts, subscription.ts, stripeClient.ts, billingService.ts, usageTracking.ts
- invoiceGenerator.ts, billingWebhook.ts, billingUI.tsx, types/billing.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: BILLING-ARCHITECT
Verantwortung: Subscription-Lifecycle, Payment-Flow, Usage-Accounting
Kritisches Skill: Stripe-API, Proration, Financial-Compliance
Eskalations-Pfad: Wenn Payment-Failure > 20%: Stripe-Config-Review

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT06-01: Prorationing-Accuracy (15. von 30 Tagen Upgrade).
TASK-MT06-02: Trial-Period-Enforcement (Suspension ohne Zahlmethode).
TASK-MT06-03: Usage-Audit-Trail (Immutable für Disputes).
TASK-MT06-04: Currency-Conversion (Tägliche Kurs-Sync).
TASK-MT06-05: Tax-Calculation (Integration mit Tax-API).

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT06-01 | Subscription mit valider Stripe ID | CRITICAL |
| GATE-MT06-02 | Plan-Limits Enforcement | CRITICAL |
| GATE-MT06-03 | Trial-Expiration suspendiert | HIGH |
| GATE-MT06-04 | Stripe-Webhooks verarbeitet | CRITICAL |
| GATE-MT06-05 | Invoice-PDF generiert + archiviert | HIGH |
| GATE-MT06-06 | Usage-Aggregation täglich 100% komplett | HIGH |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: Subscription-Lifecycle komplett, Invoices generiert,
Usage-Tracking aktiv, Stripe-Webhooks verified.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-07 — ONBOARDING-AUTOMATISIERUNG

Billing-System live. Nachfolgende Phase implementiert Self-Service-Provisioning.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-07 — ONBOARDING-AUTOMATISIERUNG
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Registration-Request, Plan-Selection (MT-06), Email, Company-Info
OUTPUT: Automated Provisioning Pipeline, Schema-Setup, Seed-Data, Welcome-Wizard, Admin-Account
ABHÄNGIGKEITEN: MT-01 (Tenant-Context), MT-05 (Database-Isolation), MT-06 (Subscription)
TRIGGER-QUELLE: Nach GATE-MT06-06 bestätigt, ODER User klickt "Sign Up"

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. ONBOARDING-REQUEST-SCHEMA mit Zod (email, companyName, slug, names, plan, country, trial-flag).

2. SELF-SERVICE-PROVISIONING-WORKFLOW: Request-Validation, Slug-Check, Tenant-Creation, Async-Job-Queue.

3. AUTOMATED-SCHEMA-SETUP: Row-based oder Schema-based Setup, Tenant-Status update.

4. SEED-DATA per Plan-Typ: Free (1 project), Pro (5 projects), Enterprise (custom).

5. WELCOME-WIZARD (Frontend): 5 Schritte (Workspace, Team, Integration, Billing, Done), Progress-Tracking.

6. ADMIN-ACCOUNT-CREATION: User-Erstellung, Email-Verification-Pending, Magic-Link (24h TTL).

7. DEFAULT-CONFIG per Tier: Free (1 ws, 5 projects), Pro (3 ws, 50 projects, 1 domain), Enterprise (unlimited).

8. TRIAL-MANAGEMENT: Optional 14/30 Tage, Subscription-Update, Feature-Flag 'trial_banner', Warnmails.

9. ONBOARDING-METRICS: signup-to-first-action, wizard-completion, invitation-count, Dashboard.

10. ERROR-RECOVERY: Provisioning-Retry 3x, Email-Queue, Admin-Error-Alert.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- onboardingRequest.ts, onboardingService.ts, tenantProvisioning.ts, welcomeWizard.tsx
- adminAccountCreation.ts, defaultConfigPerTier.ts, trialManagement.ts, onboardingMetrics.ts
- /scripts/seed-tenant-data.ts, types/onboarding.ts

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: ONBOARDING-ARCHITECT
Verantwortung: User-Experience, Provisioning-Automation, Trial-Management
Kritisches Skill: UX-Design, Automation-Workflows, Customer-Psychology
Eskalations-Pfad: Wenn Provisioning-Success < 95%: Job-Queue-Investigation

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT07-01: Zero-Downtime-Provisioning (Warm-Up Phase mit Spinner).
TASK-MT07-02: Wizard-Abandonment-Recovery (Email nach 1h).
TASK-MT07-03: Bulk-Team-Invitation (100 Emails, Async, Batch-Email).
TASK-MT07-04: Trial-to-Paid-Conversion (10% Coupon, Track-Rate).
TASK-MT07-05: Onboarding-A/B-Test (5 vs 3 Schritte, Winner-Rollout).

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT07-01 | Tenant nach Signup existieren (provisioning) | CRITICAL |
| GATE-MT07-02 | Admin-Account erstellt + Email-verified | CRITICAL |
| GATE-MT07-03 | Seed-Data pro Plan konsistent | HIGH |
| GATE-MT07-04 | Welcome-Wizard 100% Users zeigen | HIGH |
| GATE-MT07-05 | Trial-Ende suspendiert | CRITICAL |
| GATE-MT07-06 | Onboarding-Completion-Rate > 70% | HIGH |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: 10 Tenants erfolgreich onboarded, Wizard-Completion > 70%,
Admin-Accounts verified, Seed-Data konsistent.

Expliziter Trigger zur nächsten Phase:
→ TRIGGER: PHASE MT-08 — COMPLIANCE

Provisioning-System produktionsreif. Finale Phase implementiert Compliance-Framework.

═══════════════════════════════════════════════════════════════════════════════
PHASE MT-08 — COMPLIANCE
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER

INPUT: Tenant-Data (alle Phasen), Regulatorische Requirements, Audit-Log-Stream, Data-Export-Requests
OUTPUT: Compliance-Framework, Data-Residency-Enforcement, Right-to-Deletion-Engine,
Audit-Log-Archive, Data-Export-Generator, Consent-Management-System
ABHÄNGIGKEITEN: Alle vorherigen Phasen, Legal-Input, Data-Privacy-Policy
TRIGGER-QUELLE: Nach GATE-MT07-06 bestätigt

───────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. DATEN-RESIDENCY-ENFORCEMENT: Tenant-Country-Field, EU/US-Region-Binding, Intra-Region-Replication-Only.

2. DSGVO-COMPLIANCE (EU): Data-Protection-Policy, Legal-Basis, processingPurpose, dataRetentionDays (default 90).

3. CCPA-COMPLIANCE (USA/California): "Sell My Data" opt-out, canSellData Flag, User-Request-Handling.

4. TENANT-DATENSCHUTZ-POLICIES mit Zod: legalBasis, DPA, DPO, retention, cookies, analytics, thirdParties, CCPA-Opt-Out.

5. RIGHT-TO-DELETION (Tenant-Offboarding): Status 'deleted', 30-Tage-Grace, Hard-Delete-Job, Anonymize-Audit, Keep-Billing-7y.

6. AUDIT-LOG-ARCHITECTURE (Immutable): logId, tenantId, userId, action, resourceType, changes, ip, userAgent, timestamp, status.

7. DATA-EXPORT (Article 20): User-Request, ZIP mit CSV+JSON, Background-Job (< 30s), Email + 7-Tage-Download-Link.

8. CONSENT-MANAGEMENT: First-Visit-Banner, Choices (Essential, Analytics, Marketing), localStorage + httpOnly-Cookie, Revocation.

9. RETENTION-POLICIES: Audit-Logs (1-3y), Deleted-User-Data (anonym 30d), Billing-Records (7y), Marketing-Data (opt-out), Cron-Cleanup.

10. COMPLIANCE-REPORTS: Monthly (Data-Access), Annual (Data-Minimization-Audit), Ad-Hoc (DSAR, Regulatorische Fragen), PDF + Charts.

───────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- complianceConfig.ts, dataResidency.ts, auditLogger.ts, gdprEngine.ts, ccpaEngine.ts
- dataExportGenerator.ts, tenantOffboarding.ts, consentManager.ts, retentionPolicies.ts
- complianceReporting.ts, types/compliance.ts, /docs/legal-compliance.md

───────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

Rolle: COMPLIANCE-ARCHITECT
Verantwortung: Legal-Interpretation, Audit-Trail-Integrity, Data-Privacy-Enforcement
Kritisches Skill: DSGVO/CCPA-Knowledge, Data-Classification, Immutable-Systems
Eskalations-Pfad: Wenn Audit-Anomaly: Escalate to Legal + Security

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

TASK-MT08-01: Immutable-Audit-Log-Verification (Cryptographic Hash-Chain, weekly).
TASK-MT08-02: DSGVO-Article-5-Compliance-Check (Purpose, Minimization, Storage-Limit).
TASK-MT08-03: Automated-DSAR-Response (< 24h, legal-requirement 30d).
TASK-MT08-04: Regional-Data-Sync-Auditing (Daily Cross-Region Leak Detection).
TASK-MT08-05: Consent-Withdrawal-Enforcement (Stop + Retroactive Delete).

───────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-ID | Bedingung | Striktheit |
|---------|-----------|-----------|
| GATE-MT08-01 | Tenant-Data in korrekter Region | CRITICAL |
| GATE-MT08-02 | Audit-Logs immutable (INSERT-only) | CRITICAL |
| GATE-MT08-03 | Right-to-Deletion nach 30d komplett | CRITICAL |
| GATE-MT08-04 | Data-Export mit allen Personal-Data | CRITICAL |
| GATE-MT08-05 | Retention-Policies täglich durchgesetzt | HIGH |
| GATE-MT08-06 | Consent-Management double-opt-in | CRITICAL |
| GATE-MT08-07 | Compliance-Reports monatlich generiert | HIGH |

───────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Bedingung für Completion: DSGVO + CCPA Framework implementiert, Audit-Log-Integrity verified,
Right-to-Deletion erfolgreich tested, Data-Export für 3 users successful, Compliance-Reports generiert.

FINAL-TRIGGER FÜR PIPELINE-COMPLETION:
→ PIPELINE MT COMPLETE: OMNI-CLOSED-LOOP ACTIVATED

Multi-Tenant-White-Label-Pipeline ist vollständig implementiert und produktionsreif.
Nachfolgende Automationen: OMNI-SYSTEM-INTEGRATION, kontinuierliche Monitoring + Compliance-Audits.

═══════════════════════════════════════════════════════════════════════════════
CROSS-PIPELINE-ABHÄNGIGKEITEN
═══════════════════════════════════════════════════════════════════════════════

SECURITY-PIPELINE:
  Input: Auth-Tokens, JWT-Secrets, API-Keys
  Trigger: vor MT-01
  Dependencies: Tenant-Resolution braucht JWT-Validation
  Output: Secure-Token-Strategy, Encryption-Keys pro Tenant

DESIGN-SYSTEM-PIPELINE:
  Input: Component-Library, CSS-System
  Trigger: parallel zu MT-02
  Dependencies: Theme-Injection nutzt Design-System-Tokens
  Output: Tenant-agnostic CSS-Variables + Overrides

DB-MIGRATION-PIPELINE:
  Input: Initial-Schema, Migration-Scripts
  Trigger: vor MT-01 + MT-05
  Dependencies: Tenant-Isolation braucht Schema-Setup
  Output: Versioned DB-Schema, RLS-Policies

API-DESIGN-PIPELINE:
  Input: Endpoint-Specifications, Rate-Limiting-Rules
  Trigger: parallel zu MT-04 + MT-06
  Dependencies: Billing nutzt Metered-API-Calls
  Output: Documented REST-API, Swagger/OpenAPI-Specs

═══════════════════════════════════════════════════════════════════════════════
KONFIGURATIONS-SPEZIFIKATION
═══════════════════════════════════════════════════════════════════════════════

ENVIRONMENT-VARIABLES (Production):
  DATABASE_URL: postgres://user:pass@host:5432/db
  STRIPE_API_KEY: sk_live_...
  STRIPE_WEBHOOK_SECRET: whsec_...
  LETTENCRYPT_EMAIL: ops@antigravity.io
  DNS_PROVIDER: cloudflare | route53 | namecheap
  DNS_API_KEY: (provider-specific)
  TENANT_REGISTRY_REDIS_URL: redis://host:6379/0
  JWT_SIGNING_KEY: (64-byte hex)
  ENCRYPTION_KEY_ROTATION_DAYS: 90
  AUDIT_LOG_RETENTION_DAYS: 365
  GDPR_COMPLAINT_EMAIL: compliance@antigravity.io
  CCPA_PRIVACY_POLICY_URL: https://...
  SUPPORT_EMAIL: support@antigravity.io
  LOGO_UPLOAD_MAX_SIZE_MB: 5
  CUSTOM_DOMAIN_SETUP_TIMEOUT_MINUTES: 10

FEATURE-FLAG-DEFAULTS:
  'multi_tenant_isolation': true
  'custom_domain_support': true
  'white_label_theming': true
  'advanced_analytics': false (pro+ only)
  'sso_saml': false (enterprise only)

═══════════════════════════════════════════════════════════════════════════════
METRIKEN UND KPIS
═══════════════════════════════════════════════════════════════════════════════

OPERATIONAL-METRICS:

1. Tenant-Provisioning: Success-Rate 99.5%, Mean-Time < 60s, Wizard-Completion > 70%
2. Data-Isolation: Cross-Tenant-Incidents 0, Query-Response-Time (p99) < 100ms, RLS-Violations 0
3. Theming: Theme-Load-Time < 100ms, WCAG-AAA 100%, Dark-Mode-Toggle < 50ms
4. Domain-Management: Activation-Success > 95%, SSL-Renewal 100%, Health-Check > 99%
5. Feature-Flags: Evaluation-Time < 50ms (p99), A/B-Sample-Quality > 95%, Rollout-Accuracy 100%
6. Billing: Subscription-Creation 99.9%, Payment-Success > 95%, Invoice-Generation < 5s
7. Compliance: Audit-Log-Completeness 100%, Data-Deletion < 5s, Audit-Pass-Rate 100%

BUSINESS-METRICS:

1. Customer-Acquisition: Signup-to-Active > 50%, Trial-Conversion > 20%, Time-to-First-Action < 24h
2. Retention: Churn-Rate < 5% monthly, NPS > 40, Plan-Upgrade-Rate > 10%
3. Revenue: MRR $X, ARPU $Y, LTV:CAC > 3:1
4. Compliance: Incidents 0, Audit-Pass 100%, Response-Time < 24h avg

═══════════════════════════════════════════════════════════════════════════════

DOKUMENT-ENDE

Dieses Dokument ist die Single Source of Truth (SSOT) für die Multi-Tenant-White-Label-Pipeline.
Alle 8 Phasen sind vollständig spezifiziert. Code ist die Implementierung dieser Spezifikation.
Monitoring + Optimization ist kontinuierlich nach Deployment.
