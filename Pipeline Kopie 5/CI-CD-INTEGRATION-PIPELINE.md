===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-40 (ZERO-BREAKAGE-PHASE-20), vor SEQ-41 (DESIGN-TOKENS)
BLOCK-NUMMER: 13 (CI/CD-INTEGRATION)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-architectural-context.md (Build-Config, Test-Setup)
  - .ai-testing-context.md (Test-Suites fuer CI-Integration)
AUSGANGS-KONTEXTDATEI: .ai-cicd-context.md
AUSGANGS-TRIGGER: SEQ-41 (DESIGN-TOKENS) darf erst starten, wenn CI-10
  erfolgreich abgeschlossen, CI-Pipeline gruen (build + lint + tsc + test +
  Lighthouse), Branch-Protection aktiv und Preview-Deployments funktional sind.
DEFEKT-RUECKFUEHRUNG: Bei CI/CD-Defekten wird der Loop ab CI-01 neu
  gestartet, anschliessend alle abhaengigen Phasen ab SEQ-41.

===============================================================================

ANTIGRAVITY PIPELINE-SYSTEM: CI/CD-INTEGRATION-PIPELINE
Kontinuierliche Integration und Deployment-Automatisierung für Zero-Defect-Systeme

Dokumentversion: 2.0
Gültig ab: 2026-04-05
Sprache: Deutsch
Status: Produktionsfreigabe

═══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY

Die CI/CD-Integration-Pipeline ist das neuralgische Zentrum des Antigravity-Ökosystems. Sie orchestriert den gesamten Lebenszyklus von der Code-Einreichung über automatisierte Quality Gates bis zur Produktionsfreigabe. Jede Phase ist ein deterministischer Determinant für Qualität, Geschwindigkeit und Zuverlässigkeit.

Die Pipeline besteht aus 10 Kernphasen:
1. GitHub Actions Workflow-Architektur (Multi-Stage, Matrix-Parallelisierung)
2. Branch-Protection-Regelwerk (Enforcement von Reviews und Status-Checks)
3. Automated Quality Gates (Zero-Defect-Enforcement)
4. Release-Automatisierung (Semantic Versioning, Changelog-Generierung)
5. Environment-Management (Staging, Preview, Production)
6. Monitoring-Integration (Observability, Rollback-Mechanismen)
7. Selbstheilungs-Mechanismen (Auto-Retry, Dependabot, Security-Patching)
8. Docker-Container-Pipeline (Multi-Stage, Security-Scanning)
9. Infrastructure-as-Code (Terraform/Pulumi Orchestration)
10. Pipeline-Telemetrie und Optimierung (Build-Time-Tracking, Cost-Analysis)

RICHTLINIE: Der Code ist die Single Source of Truth (SSOT). Diese Dokumentation beschreibt die operative Realität, nicht umgekehrt.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-01 — GITHUB ACTIONS WORKFLOW-ARCHITEKTUR

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Push zu beliebigem Branch, Pull Request Creation, Manual Dispatch
OUTPUT: Workflow-Executions mit Artifact-Links, Status-Badges, Matrix-Results
ABHÄNGIGKEITEN: GitHub Actions enabled, Node.js 18/20/22 Target-Runtimes
UPSTREAM: Git Push-Event
DOWNSTREAM: Phase CI-02 (Branch-Protection-Checks)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Workflow-Datei ".github/workflows/main.yml" erstellen mit Event-Triggern: push, pull_request, workflow_dispatch, schedule (nächtliche Builds)

2. Matrix-Strategy definieren für Node-Versionen [18, 20, 22]. Jede Version läuft in isoliertem Job-Container parallel.

3. Checkout-Step mit fetch-depth: 0 durchführen für vollständige Git-Historie zur Blame-Information für Lighthouse CI.

4. Node-Version via matrix.node-version dynamisch setzen. Actions/setup-node@v4 mit cache: 'npm' nutzen.

5. npm ci statt npm install durchführen. Abhängigkeiten werden aus package-lock.json frozen installiert für Determinismus.

6. node_modules-Caching implementieren. Cache-Key: "node-${{ runner.os }}-${{ matrix.node-version }}-${{ hashFiles('**/package-lock.json') }}". Cache-Paths: node_modules/, .next/cache/

7. Parallel-Jobs definieren: build, lint, typecheck, unit-tests, integration-tests, lighthouse-ci. Separate Umgebung und Timeout pro Job.

8. Artifact-Passing implementieren: Build-Output wird als GitHub Artifact hochgeladen mit retention-days: 5. Folgejobs downloaden via actions/download-artifact@v4.

9. Reusable Workflows erstellen für komplexe Tasks. Parent-Workflow ruft Kind-Workflows mit "uses: ./.github/workflows/..." auf.

10. Composite Actions für häufig wiederholte Steps erstellen. Action-Definition in "actions/setup-node-and-cache/action.yml" mit inputs/outputs.

11. Environment-Secrets selektiv injecten via "environment:" Directive. PR-Events kriegen keine Production-Secrets aus Sicherheitsgründen.

12. Timeout-Policies auf Workflow-Ebene erzwingen: timeout-minutes: 30. Timeout-Überschreitungen triggern Failure und blockieren Merge.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- .next/ (Next.js Build-Output)
- dist/ (TypeScript-Kompilat)
- coverage/ (Jest Coverage-Reports, LCOV-Format)
- lighthouse-results.json (Lighthouse CI Raw-Results)
- bundlewatch-report.json (Bundle-Size Tracking)
- test-results.xml (JUnit-Format)
- node-*.log (Build-Logs pro Node-Version)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: CI/CD-Lead
Eskalation: DevOps-Team bei Workflow-Timeouts oder Matrix-Failures
Audit-Log: GitHub Actions Dashboard protokolliert alle Runs

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Matrix-Optimization für Node-Versionen
Implementiere dynamisches Lesen von .nvmrc in Matrix. Automatische Anpassung bei Versionsänderungen.

TASK 2: Caching-Strategie gegen stale Dependencies
Separater "cache-invalidation" Job bei Breaking-Changes in package.json. Fallback auf Snapshot-Registry.

TASK 3: Artifact-Cleanup-Automation
GitHub API-Aufrufe zum Löschen von Artifacts älter als 7 Tage. Alarmzonen bei > 500MB durchschnittliche Größe.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-01-GATE-01    | Alle Matrix-Jobs müssen grün sein             | KRITISCH
CI-01-GATE-02    | Workflow-Duration < 20 Minuten               | HOCH
CI-01-GATE-03    | Artifact-Size < 2GB pro Build                | MITTEL
CI-01-GATE-04    | Node-Version Compatibility bestätigt         | KRITISCH
CI-01-GATE-05    | Cache-Hit-Rate > 80%                         | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn ALLE Workflow-Jobs SUCCESS und VALIDATION-GATES GRÜN:

→ Trigger: Phase CI-02

Status: "ci-01/workflow-completed" wird als GitHub Check gesetzt.
Bei Gate-Failure: Workflow stoppt, keine Progression zu CI-02.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-02 — BRANCH-PROTECTION-REGELWERK

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Pull Request mit Ziel-Branch (main, develop, release/*)
OUTPUT: Enforcement von Required Reviews, Merge-Blockade, Branch-Naming-Validation
ABHÄNGIGKEITEN: GitHub Branch-Protection Settings, CODEOWNERS-Datei, Team-Struktur
UPSTREAM: Phase CI-01 (Workflow-Completion)
DOWNSTREAM: Phase CI-03 (Quality Gates)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Branch-Naming-Convention erzwingen: feature/*, bugfix/*, hotfix/*, release/*, chore/*. Regex: "^(feature|bugfix|hotfix|release|chore)/[a-z0-9-]+$". Bei Violation: PR-Check FAILURE.

2. CODEOWNERS-Datei anlegen (".github/CODEOWNERS"). Path-to-Team-Mappings: "src/auth/* @auth-team", "infra/ @devops-team". Automatische Reviewer-Zuweisung.

3. Required Reviews erzwingen: dismiss_stale_pull_request_approvals: false, require_code_owner_reviews: true, required_approving_review_count: 2.

4. Status-Checks als REQUIRED konfigurieren: "ci-01/workflow-completed", "code-quality/eslint", "type-check/typescript", "test/unit", "test/integration", "security/trivy-scan".

5. Merge-Queue aktivieren für main/release-Branches zur Race-Condition-Vermeidung.

6. Automatic Deletion von Head-Branch nach Merge erzwingen. Reduziert Branch-Clutter.

7. Require Status Checks to Pass Before Merge. Fehlgeschlagener Check blockiert sofort.

8. Require Branches to Be Up to Date Before Merge. PR muss mit main gerebased sein.

9. Enforce Admins auch auf Admin-Accounts. Niemand umgeht Branch-Protection.

10. Dismiss Stale PR Approvals bei neuem Push aktivieren.

11. Restriction Rules für Direct Pushes zu main aktivieren. Code darf NUR via approved PR eingehen.

12. Webhook an Monitoring-System bei PR-Events. Audit-Trail für alle Branch-Operationen.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- .github/CODEOWNERS (Path-zu-Team-Mappings)
- Branch-Protection-Audit-Log (GitHub API Export)
- PR-Review-Reports (wöchentliche Aggregation)
- Merge-Queue-Status-Snapshot

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Repository-Owner / GitHub-Administrator
Enforcement-Authority: GitHub-Branch-Protection API
Eskalation: CTO bei Umgehungsversuchen

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Dynamische Reviewer-Rotation
GitHub Actions Automation basierend auf Commit-Frequency und Expertise. Verhindert Review-Bottlenecks.

TASK 2: Branch-Protection-Audit mit Alert-System
Kontinuierliches Monitoring aller Settings. Alerts bei Änderungen an Regeln.

TASK 3: Status-Check-Parallelisierung mit Prioritäten
CRITICAL (must-pass), HIGH (should-pass), LOW (informativ). Nur CRITICAL blockiert Merge.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-02-GATE-01    | Branch-Naming-Pattern validiert              | KRITISCH
CI-02-GATE-02    | Minimum 2 Approvals von Code-Owners          | KRITISCH
CI-02-GATE-03    | Alle Status-Checks GRÜN                      | KRITISCH
CI-02-GATE-04    | PR ist up-to-date mit main                   | KRITISCH
CI-02-GATE-05    | No Direct Pushes erkannt                     | KRITISCH

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn PR all VALIDATION-GATES passiert und in Merge-Queue eingegangen:

→ Trigger: Phase CI-03

Status: "ci-02/branch-protection-passed" wird als GitHub Check gesetzt.
Bei Gate-Failure: Merge blockiert, PR bleibt in CHANGES_REQUESTED.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-03 — AUTOMATED QUALITY GATES

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Merge-Queue Entry mit Best-Build-Artifacts
OUTPUT: Zero-Defect Clearance oder Rejection
ABHÄNGIGKEITEN: Lighthouse CI, bundlewatch, TypeScript strict mode, ESLint Zero-Warning
UPSTREAM: Phase CI-02 (Branch-Protection)
DOWNSTREAM: Phase CI-04 (Release-Automatisierung)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Lighthouse CI in GitHub Actions integrieren via "@treosh/lighthouse-ci-action". Budget-File: "lighthouse-budget.json".

2. Lighthouse-Thresholds: Performance 90+, Accessibility 100, Best Practices 95, SEO 100. Budgets als JSON-Array konfigurieren.

3. TypeScript im strict-Mode compilieren. tsconfig.json: "strict": true, "noImplicitAny": true, "strictNullChecks": true.

4. ESLint mit Zero-Warning-Policy. Exit-Code 1 bei ANY Warning. Config: "@eslint/js", "eslint-plugin-react", "eslint-plugin-a11y".

5. bundlewatch für Bundle-Size-Regression einrichten. Max-Threshold: main.js 500KB, vendor.js 300KB.

6. Jest Coverage-Gates erzwingen: line 80%, branch 75%, function 80%, statement 80%.

7. SonarQube-Integration für erweiterte Code-Quality-Analyse (optional).

8. npm audit durchführen. High/critical Vulns blockieren sofort.

9. License-Compliance Check: "npm list --all" gegen Whitelist. GPL/AGPL triggert Auto-Reject.

10. Performance-Regression-Detection: Bundle-Grösse gegen main-Branch. >5% Regression = Gate-Failure.

11. Accessibility-Audit via Axe-Core. Critical/serious Violations blockieren.

12. Complexity-Metrics sammeln: McCabe Cyclomatic Complexity. Functions mit CC > 15 triggern Warning.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- lighthouse-budget.json (Konfiguration)
- lighthouse-results.json (Raw-Daten)
- coverage/lcov-report/ (HTML-Report)
- bundlewatch-report.json (Bundle-Analysis)
- eslint-report.json (Violations)
- security-audit-report.json (npm audit)
- complexity-metrics.json (CC Scores)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Quality-Assurance-Lead
Enforcement: Automated Workflow-Gates
Threshold-Anpassungen: Tech-Lead Approval (verhindert Standard-Erosion)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Smart-Budget-Adjuster für Feature-Branches
5% Slack für Feature-Branches, strikte Budgets für main/release. Entwicklung wird nicht erstickt.

TASK 2: Coverage-Trend-Prognose mit ML
Regression-Modell prognostiziert ob Coverage nächsten Monat unter 70% fällt. Proaktive Alerts.

TASK 3: ESLint-Rules-Refresh-Automation
Monatliche Rule-Updates im Experimental-Mode. Auto-Upgrade falls keine neuen Warnings entstehen.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-03-GATE-01    | Lighthouse Performance >= 90                 | KRITISCH
CI-03-GATE-02    | Lighthouse Accessibility = 100              | KRITISCH
CI-03-GATE-03    | TypeScript strict Compilation SUCCESS        | KRITISCH
CI-03-GATE-04    | ESLint Zero Warnings                         | KRITISCH
CI-03-GATE-05    | Bundle Size keine Regression > 5%           | HOCH
CI-03-GATE-06    | Jest Coverage >= 80%                        | HOCH
CI-03-GATE-07    | npm audit keine high/critical Vulns         | KRITISCH

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn ALL VALIDATION-GATES bestanden:

→ Trigger: Phase CI-04

Status: "ci-03/quality-gates-passed" wird als GitHub Check gesetzt.
Artifacts werden in S3 archiviert für Trend-Analyse.

Bei Gate-Failure: Merge abgebrochen, Developer bekommt detaillierten Report.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-04 — RELEASE-AUTOMATISIERUNG

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Merge zu main, Quality-Gates PASSED
OUTPUT: Semantic Versioning, Git-Tags, npm Package, Docker Image, Changelog
ABHÄNGIGKEITEN: conventional-commits, semantic-release, npm/Docker Registry Credentials
UPSTREAM: Phase CI-03 (Quality Gates)
DOWNSTREAM: Phase CI-05 (Environment-Management)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Conventional Commits Format erzwingen: feat(scope), fix(scope), docs, chore. Commitlint Pre-Commit-Hook validieren.

2. semantic-release Tool als GitHub Action integrieren. Analysiert Commit-History seit letztem Tag.

3. Version-Bump-Logik: MAJOR (Breaking Changes), MINOR (Features), PATCH (Fixes). Pre-release: alpha, beta, rc.

4. CHANGELOG.md auto-generieren. Features, Bug-Fixes, Breaking Changes gruppiert nach Release.

5. Git-Tag erstellen: "v{VERSION}". GPG-signed falls möglich. Release-Notes als Annotation.

6. npm Package publishen. Pre-steps: npm run build, npm run test. Credentials via GitHub Secrets (NPM_TOKEN).

7. Docker Image zu GHCR pushen. Tags: "ghcr.io/org/repo:v{VERSION}", "ghcr.io/org/repo:latest". Multi-Arch amd64/arm64.

8. Pre-release Channels: Tags mit alpha/beta/rc werden zu separaten npm-Dist-Tags gepublisht.

9. Release-Drafts vor Publikation erzeugen. Draft-Release via GitHub Releases API. Manual Approval triggert finale Publikation.

10. Changelog-Preview als PR-Comment posten. Developer sieht exakt was releast wird.

11. Integrity-Checks: Verify package.json Version mit Git-Tag. Mismatch = Workflow-Failure.

12. Slack-Notification mit Release-Summary: Version, Features, Fixes, Links.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- CHANGELOG.md (Auto-generiert)
- .release.json (semantic-release Config)
- npm-publish-log.txt (npm publish Output)
- docker-build-manifest.json (Build-Metadata)
- release-notes-draft.md (Pre-release Notes)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Release-Manager / Tech-Lead
Automation-Engine: semantic-release (deterministic)
Approval-Gate: Maintainer für release-publish

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Intelligente Pre-release-Promotion
State-Machine: alpha -> beta -> rc -> stable basierend auf Bug-Reports und Stability-Metrics.

TASK 2: AI-Assisted Release-Notes
ChatGPT/Claude für natürliche Englisch-Konvertierung der Release-Notes. Non-Technical Reader Understanding.

TASK 3: Monorepo-Release-Orchestration
Multiple Packages mit Dependency-Choreography. Package-A v2.0 triggert Dependent-Package-B Update.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-04-GATE-01    | Conventional Commits Format validiert        | KRITISCH
CI-04-GATE-02    | npm publish SUCCESS                          | KRITISCH
CI-04-GATE-03    | Docker Image Build SUCCESS                   | KRITISCH
CI-04-GATE-04    | Git-Tag erstellt und gepusht                 | KRITISCH
CI-04-GATE-05    | CHANGELOG.md aktualisiert                    | HOCH
CI-04-GATE-06    | Release-Version korrekt semver               | KRITISCH

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Release-Publikation SUCCESS:

→ Trigger: Phase CI-05

Status: "ci-04/release-published" wird mit Version-Tag gesetzt.
Artifacts nach S3/GCS archiviert für Compliance.

Pre-release: dev-preview Slack-Channel. Stable: main-release Slack-Channel.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-05 — ENVIRONMENT-MANAGEMENT

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Released Version, Docker Image Tag, Deployment-Config
OUTPUT: Staging/Preview/Prod Deployments, Secret Management, Cleanup
ABHÄNGIGKEITEN: GitHub Environments, Environment Secrets, Deployment API
UPSTREAM: Phase CI-04 (Release-Automatisierung)
DOWNSTREAM: Phase CI-06 (Monitoring-Integration)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. GitHub Environments erzeugen: staging, preview, production. Deployment-Branch, Required Reviewers, Secret-Config pro Environment.

2. Environment Secrets Management: Prod-Secrets (DB_PASSWORD, API_KEYS) via GitHub UI/Terraform. Nicht in Git. Environment-Isolation: Preview nur Staging-Secrets.

3. PR Preview Deployments: Ephemäre Preview-Umgebung pro PR (Vercel/Netlify/AWS Amplify). Preview-URL in PR-Comment.

4. Feature-Branch Deployments: Developer triggerbar via "deploy-feature" Label für lange-laufende Branches.

5. Deployment-History trackieren: GitHub Deployments API. Status: pending, in_progress, success, failure, inactive.

6. Auto-Cleanup nach PR-Close: Preview-Environments gelöscht. S3-Artifacts älter 30 Tage gelöscht. Database-Snapshots älter 7 Tage rotiert.

7. Blue-Green Deployment für Prod: New Version parallel zu Old Version. Traffic-Switch nach Health-Checks. Instant Rollback.

8. Canary Deployments: Neue Version auf 5% Prod-Traffic. Nach 15 Min stabil: ramp up zu 100%. Error-Rate-Anstieg: Auto-Rollback.

9. Database Migration Strategy: Schema-Migration vor App-Deploy (separate Job). Failure: Deployment abgebrochen, alte Version bleibt aktiv.

10. Config-Management: GitHub Secrets + environment variables in Deployment-Job. Keine hardcoded Secrets in Code/Docker-Image.

11. Deployment-Approval-Gate für Prod: Mindestens Maintainer-Approval via GitHub Environments UI.

12. Post-Deployment Verification: Smoke-Tests gegen Live-Umgebung. Failure: Auto-Rollback.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- deployment-config.json (Environment-Config)
- github-deployments-audit.log (Deployment-History)
- preview-urls-manifest.json (PR zu Preview-URL Mapping)
- migration-logs/ (Database-Migration Logs)
- smoke-test-results.json (Verification Results)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevOps / Release-Manager
Approval-Authority: Tech-Lead (Production-Deployments)
Incident-Response: On-Call Engineer (Rollbacks)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: ML-basierte Canary-Sizing
Lernt Traffic-Volume. Off-Peak: 20% Canary. Peak: 1% Canary. Reduziert Rollback-Wahrscheinlichkeit.

TASK 2: Database-Migration Auto-Rollback
Dry-Run auf Clone, Check auf Errors, dann Real-DB. Failure: Auto-Rollback.

TASK 3: Environment-Parity-Validator
Regelmässige Staging vs Prod Vergleiche. Divergence = Alert an DevOps.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-05-GATE-01    | Staging Deployment SUCCESS                   | HOCH
CI-05-GATE-02    | Database Migration SUCCESS                   | KRITISCH
CI-05-GATE-03    | Smoke-Tests grün nach Deploy                 | HOCH
CI-05-GATE-04    | Production Approval erhalten                 | KRITISCH
CI-05-GATE-05    | Preview-Environment für PRs erstellt         | MITTEL
CI-05-GATE-06    | Secrets korrekt injectet                     | KRITISCH

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Staging-Deployment SUCCESS und Smoke-Tests GRÜN:

→ Trigger: Phase CI-06

Production-Deployment nur nach Maintainer-Approval (nicht automatisch).
Status: "ci-05/deployment-success" wird gesetzt.

Prod-Deploy: Slack-Summary (Version, Timestamp, Canary-Status).

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-06 — MONITORING-INTEGRATION

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Deployment Events, Production Traffic
OUTPUT: Observability Data, Alerts, Rollback Triggers, DORA-Metriken
ABHÄNGIGKEITEN: Sentry, Datadog/New Relic, Slack API, Healthcheck Endpoints
UPSTREAM: Phase CI-05 (Environment-Management)
DOWNSTREAM: Phase CI-07 (Selbstheilungs-Mechanismen)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Sentry Integration für Error-Tracking. Release automatisch erstellt (semantic-release + sentry-cli). App-Errors mit Version getaggt.

2. Deploy-Tracking: Sentry vergleicht Error-Rates alt vs. neu. >10% Increase: Auto-Rollback.

3. Healthcheck-Endpoints erzwingen: /health (Readiness), /liveness (Liveness), /metrics (Prometheus). Deployment-Orchestrator pollt kontinuierlich.

4. Slack Notifications für kritische Events: Deploy-Start, Deploy-Success, Canary-Switch, Rollback. Version, Timestamp, Metrics, Rollback-Reason.

5. Slack-Bot für On-Call Engineer: Critical-Alert notifiziert mit Runbook-Links und Quick-Actions (Rollback, Escalate).

6. Teams Integration als Fallback für Teams-Orgs.

7. Deployment-Tracking in Datadog/New Relic: Event-Markers. Dashboards zeigen Error-Rate, Latency, Throughput vor/nach Deploy.

8. Auto-Rollback Trigger: 3x hintereinander Healthcheck-Failure = Auto-Rollback zu vorheriger Version.

9. DORA-Metriken Tracking: Deployment-Frequency, Lead-Time-for-Changes, MTTR, Change-Failure-Rate. Täglich berechnet.

10. Incident-Detection: Error-Rate >5x nach Deploy triggert Critical-Incident in PagerDuty/OpsGenie.

11. Change-Log Integration: Sentry Release-Notes mit CHANGELOG.md synchronisieren.

12. Compliance-Logging: Deployments, Rollbacks, Alerts in immutable Audit-Log (CloudTrail/GCP Audit-Log).

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- sentry-release-notes.json (Sentry Release-Info)
- deployment-metrics.json (DORA-Metriken)
- healthcheck-logs/ (Healthcheck Status)
- incident-report.json (Falls Incident)
- audit-log-export.csv (Compliance-Logging)
- slack-notifications-log.json (Notification-History)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: SRE / On-Call Engineer
Monitoring-Owner: DevOps / Platform-Team
Alert-Response: On-Call Rotation (24/7)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Intelligente Rollback-Entscheidungen mit ML
Anomaly-Detection-Modell (Isolation-Forest/ARIMA). Kontextabhängig: Wochenende liberaler, Black-Friday strenger.

TASK 2: DORA-Metriken-Prognose
Regression-Modell prognostiziert welche Aktivitäten DORA-Metriken verbessern. "+10% Feature-Flag Adoption → -15% Lead-Time".

TASK 3: Auto-Runbooks für Common-Incidents
Top-5-Error-Patterns. Runbook in Slack-Alert eingebettet. On-Call kriegt sofort mitigation-steps.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-06-GATE-01    | Healthcheck Endpoints alle grün              | KRITISCH
CI-06-GATE-02    | Sentry Release erstellt und verlinkt         | HOCH
CI-06-GATE-03    | Error-Rate Increase < 10%                    | HOCH
CI-06-GATE-04    | Slack-Notifications erfolgreich              | MITTEL
CI-06-GATE-05    | DORA-Metriken gesammelt                      | MITTEL
CI-06-GATE-06    | Audit-Log eingetragen                        | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Healthchecks SUCCESS und Error-Rate akzeptabel:

→ Trigger: Phase CI-07

Falls Critical-Alert: Sofort Phase CI-06-ROLLBACK.

Status: "ci-06/monitoring-active" wird gesetzt. Dashboards Echtzeit-Update.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-07 — SELBSTHEILUNGS-MECHANISMEN

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Test-Failures, Dependency-Updates, Security-Advisories
OUTPUT: Auto-Retried Tests, Auto-Updated Dependencies, Security-Patches, Auto-Merged PRs
ABHÄNGIGKEITEN: Renovate/Dependabot, GitHub Actions Scheduler, npm Audit API
UPSTREAM: Phase CI-06 (Monitoring-Integration)
DOWNSTREAM: Phase CI-08 (Docker-Container-Pipeline)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Flaky-Test Auto-Retry: Tests mit flaky-marker max 2x neu ausgeführt. Nur True-Failure bei beiden Runs.

2. Flaky-Test Quarantine: >20% Failure-Rate über 1 Woche = Auto-disabled mit skip(). Issue auto-geöffnet.

3. Renovate Bot für Dependency-Management. Wöchentlich package.json scannen. Minor/Patch: Auto-PR.

4. Renovate-Strategie: Pinning, Range (^1.2.3), Auto-Merge bei Patch + Green-Tests. Major: manual-merge-only.

5. Dependabot Security-Advisories: npm Audit Vulnerability = Auto-PR mit Patch. High/critical: Merge-Queue sofort.

6. Auto-Merge für niedrig-Risiko-PRs: Dependencies updated + Tests grün = Auto-merge. Slack-Notification.

7. Stale-Branch-Cleanup: Branches älter 30 Tage auto-gelöscht. PR geschlossen. Restore-Link möglich.

8. Stale-Issue-Automation: Issues ohne Activity > 60 Tage: "stale" Label. +7 Tage: geschlossen mit Restore-Möglichkeit.

9. Dependency-Audit-Report: Wöchentlich npm-audit. Vulnerabilities, Upgrade-Paths, Risk-Assessment an Security-Team.

10. License-Compliance Auto-Scan: Neue Dependencies gegen Whitelist/Blacklist. GPL = Auto-Reject. Apache/MIT/BSD = auto-approve.

11. Pre-Commit-Hooks: Husky für Developers. Lokal lint/format/test BEVOR Commit. Fehler lokal fixt.

12. Dependabot Version-Summary: Monatlich Report. Dependencies-Anzahl, Updates möglich, Security-Issues, Unknown-Licenses an Tech-Lead.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- renovate-config.json (Renovate Config)
- dependency-audit-report.json (npm Audit)
- flaky-test-quarantine.json (Disabled Tests)
- auto-merge-log.json (Auto-Merged PRs)
- license-compliance-report.json (Whitelist/Blacklist)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevDependencies-Owner / Tech-Lead
Automation-Engine: Renovate Bot (Autonomous)
Escalation: Security-Team (high/critical Vulns)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Intelligente Flaky-Test-Analyse
Log-Analyze auf Race-Conditions, Network-Timeouts, Random-Seeds. Auto-file Debugging-Issues mit Hypothesen.

TASK 2: Dependency-Security-Prognose
CVE-Daten für Popular-Packages. Model prognostiziert welche Packages nächsten Monat CVEs bekommen.

TASK 3: Renovate-Update-Batching
Low-Risk-Packages bündeln (Patch-Updates). High-Risk separieren (Major-Updates).

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-07-GATE-01    | Flaky-Tests max 2x Retry                     | HOCH
CI-07-GATE-02    | Renovate PRs automatisch erstellt            | MITTEL
CI-07-GATE-03    | Security-Advisories auto-patched             | KRITISCH
CI-07-GATE-04    | Auto-Merge nur bei Green-Tests               | HOCH
CI-07-GATE-05    | License-Compliance bestanden                 | HOCH
CI-07-GATE-06    | Stale-Branches/Issues gelöscht               | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Selbstheilungs-Mechanismen aktiviert und laufen:

→ Trigger: Phase CI-08

Status: "ci-07/self-healing-active" kontinuierlich gesetzt.
Renovate-PRs auto-created und auto-merged (je nach risk-level).

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-08 — DOCKER-CONTAINER-PIPELINE

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Build-Artifacts (.next/, dist/), Release-Version
OUTPUT: Docker Images (Multi-Arch), Security-Scans, SBOM, Registry-Push
ABHÄNGIGKEITEN: Dockerfile Multi-Stage, Trivy, GHCR, Buildx (Multi-Arch)
UPSTREAM: Phase CI-07 (Selbstheilungs-Mechanismen)
DOWNSTREAM: Phase CI-09 (Infrastructure-as-Code)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Dockerfile Multi-Stage-Builds: Builder-Stage (node_modules), Runtime-Stage (Alpine/Distroless). Final-Image nur Runtime-Dependencies.

2. Layer-Caching optimieren: WORKDIR, COPY, RUN gecacht. Code-Change (späte Layer): frühe Layers aus Cache.

3. Alpine-Base-Image für Prod (minimal attack surface). Distroless für Ultra-minimal. Fallback: debian:bookworm-slim.

4. Build-Secrets handling: --mount=type=secret syntax (nicht in Layer speichern).

5. Trivy Security-Scanner integrieren. Nach Docker-Build auf Vulnerabilities scannen. High/critical blockieren Push.

6. SBOM generieren mit syft. Als Artifact speichern und mit Release verlinken. SPDX Format.

7. Buildx Multi-Arch (amd64, arm64) konfigurieren. Platform-Matrix parallel.

8. Image-Tags für Registry: ghcr.io/org/repo:v{VERSION}, ghcr.io/org/repo:latest, ghcr.io/org/repo:sha-{commit}.

9. Registry-Push zu GHCR mit GITHUB_TOKEN via GitHub Secrets.

10. Image-Digest erfassen (SHA256). Immutability. Später-Deployments exakte Version pullen.

11. Scan-Results als GitHub Code-Scanning Reports. Vulns im Security-Tab sichtbar.

12. Cleanup alte Images: älter 90 Tage (außer tagged releases) aus GHCR gelöscht.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- Dockerfile (Multi-Stage Definition)
- docker-build-manifest.json (Build-Metadata)
- trivy-scan-results.json (Security-Report)
- sbom.spdx.json (Software-Bill-of-Materials)
- image-digest.txt (Immutable Image-Hash)
- registry-push-log.txt (GHCR Verification)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Container-Engineer / DevOps
Security-Approval: Security-Team (Trivy-Findings)
Registry-Management: Platform-Team (GHCR Access)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Docker-Layer-Caching-Intelligence
Analyzer trackert Layer-Hit-Rates. Cache-Miss-Layer optimieren (combine RUN, reorder). Target: >95% Hit-Rate.

TASK 2: Trivy-Vulnerability-Auto-Patching
Bot generiert automatisch Dockerfile-Updates (z.B. alpine:3.18 -> 3.20). PR eingereicht, auto-merged falls Tests grün.

TASK 3: Multi-Arch-Performance-Profiling
arm64 oft langsamer. Profiler trackert Duration pro Arch. >2x langsamer: Bottleneck-Investigation.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-08-GATE-01    | Dockerfile Multi-Stage validiert             | HOCH
CI-08-GATE-02    | Trivy-Scan keine high/critical               | KRITISCH
CI-08-GATE-03    | Multi-Arch Build SUCCESS                     | HOCH
CI-08-GATE-04    | Image zu GHCR gepusht                        | KRITISCH
CI-08-GATE-05    | SBOM generiert und verlinkt                  | MITTEL
CI-08-GATE-06    | Image-Digest erfasst                         | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Docker-Build SUCCESS, Trivy GRÜN, Multi-Arch-Push SUCCESS:

→ Trigger: Phase CI-09

Status: "ci-08/container-ready" mit Image-Digest.
SBOM zu Release-Notes hinzugefügt.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-09 — INFRASTRUCTURE-AS-CODE

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Released Version, Docker Image, Deployment-Environment
OUTPUT: Terraform/Pulumi Apply, Resource-Verification, Cost-Estimation
ABHÄNGIGKEITEN: Terraform State (S3+DynamoDB), Pulumi Stack YAML, Cloud-Credentials
UPSTREAM: Phase CI-08 (Docker-Container-Pipeline)
DOWNSTREAM: Phase CI-10 (Pipeline-Telemetrie)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Terraform Code-Struktur: /infra/modules/{compute, database, networking}, /infra/environments/{staging, production}. Single-Responsibility.

2. Remote State-Management: S3+DynamoDB (State-Lock). Nicht in Git. Access-Control: nur CI und Admins.

3. Terraform Workspace: terraform workspace select staging/production. Separat State pro Workspace.

4. Terraform Plan in CI generieren: terraform plan -out=tfplan als Artifact. Plan als GitHub Comment in PR. Developer sieht Resource-Änderungen.

5. Terraform Plan Review-Gate: Maintainer reviewt Plan. >10 Resource-Änderungen: expliziter Approval.

6. Terraform Apply mit Approval: terraform apply tfplan nur nach Approval. Deterministisch.

7. Resource-Tagging erzwingen: environment (staging/prod), team, cost-center, deployed-by (CI). Cost-Allocation.

8. Drift-Detection: Wöchentlich terraform plan ohne Apply. Drift erkannt: Alert an DevOps.

9. Cost-Estimation: Infracost schätzt monatliche Cloud-Costs. Estimate in GitHub Comment. Cost-Impact sichtbar.

10. Terraform Validation: terraform validate, tflint, checkov. Alle müssen passen.

11. Secrets Management: sensitive=true Variablen nicht in logs. Secrets via AWS Secrets Manager/Vault.

12. Rollback-Capability: Apply-Failure: Auto-Rollback zu previous State. S3-Backup restored.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- tfplan (Terraform Plan Binary)
- terraform-plan-output.txt (Human-Readable)
- infracost-estimate.json (Cost-Estimation)
- resource-inventory.json (Applied Resources)
- terraform-drift-report.json (Weekly Drift)
- state-backup/ (S3 State-Snapshots)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Infrastructure-Engineer / Platform-Team
Apply-Authority: Tech-Lead (Production-Deployments)
State-Management: DevOps (State-Lock)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Policy-as-Code (Sentinel/OPA)
Policies enforced: "no public S3 buckets", "RDS backup > 7 days". Apply blockiert bei Violation.

TASK 2: Terraform-Module-Registry
Standard-Modules (.eks-cluster, .rds-instance) in Git als versionierte Registry. Copy-Paste reduzieren.

TASK 3: Auto-Cost-Optimization
Infracost Vorschläge: "EC2 30% underutilized → downsize". Report eingebettet.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-09-GATE-01    | Terraform validate SUCCESS                   | KRITISCH
CI-09-GATE-02    | Terraform Plan reviewed/approved              | KRITISCH
CI-09-GATE-03    | tflint/checkov Security-Check                | HOCH
CI-09-GATE-04    | Cost < Budget-Threshold                      | HOCH
CI-09-GATE-05    | terraform apply SUCCESS                      | KRITISCH
CI-09-GATE-06    | Resource-Tagging vollständig                 | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn terraform apply SUCCESS und Resources operational:

→ Trigger: Phase CI-10

Status: "ci-09/infrastructure-deployed".
Resources-Inventory zu Release-Notes hinzugefügt.

Drift-Detection wöchentlich scheduled.

═══════════════════════════════════════════════════════════════════════════════

PHASE CI-10 — PIPELINE-TELEMETRIE UND OPTIMIERUNG

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────

INPUT: Workflow-Logs, Build-Metrics, Cost-Data
OUTPUT: Optimization-Reports, Performance-Insights, Bottleneck-Analysis
ABHÄNGIGKEITEN: GitHub Actions API, Metrics-Aggregation, Analytics-Dashboard
UPSTREAM: Phase CI-09 (Infrastructure-as-Code)
DOWNSTREAM: OMNI-CLOSED-LOOP / Pipeline-Restart

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Build-Time-Tracking implementieren: Jeder Workflow-Step hat duration-tracking. Daten zu Metrics-Service (Datadog/Prometheus).

2. Step-Duration-Baseline: 30 Tage Durchschnitt berechnen. z.B. "npm install" avg 120s. Deviationen erfassen.

3. Flaky-Test-Quarantine Analyse: Logs aller Failed-Tests scannen. >20% Failure-Rate über Woche: auto-quarantine mit skip(). Issue auto-geöffnet.

4. Pipeline-Dashboards: Grafana/Kibana/Datadog. Build-Times-Trend, Success-Rate, Cost-per-Build, Cache-Hit-Rates. Public für ganzes Team.

5. Cache-Hit-Rate-Analyse: npm-cache, docker-layer-cache, terraform-cache Rates tracked. Target >85%. <70%: Alert an DevOps.

6. Bottleneck-Identification via Flow-Analysis: Welcher Step am längsten? npm install > build > tests? Flow-Diagram auto-generiert.

7. Cost-Tracking pro Build: GitHub Actions Minutes, Cloud-Resources, Storage berechnet. Monatlicher Cost-Report.

8. Cost-per-Deploy berechnen: Total-Cost Code-Push bis Prod-Deployment. Ziel <$5. Höher: Optimization-Investigation.

9. DORA-Metriken Berechnung: Deployment-Frequency, Lead-Time, MTTR, Change-Failure-Rate. Täglich berechnet.

10. Anomaly-Detection: Build-Time 2x Anstieg = Alert an DevOps. ML-Modell lernt normal vs. echte Anomalies.

11. Optimization-Recommendation-Engine: Bottleneck-Analysis generiert Vorschläge auto (z.B. "npm install 150s, parallel = 80s"). Tech-Lead bekommt Vorschläge.

12. Compliance-Reporting: Monatlicher Management-Report. Build-Success-Rate, Deployment-Frequency, MTTR, Cost-per-Deploy. Trends.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

- build-metrics.json (Step-Duration-Data)
- cost-analysis.json (Cost-per-Build, Monthly)
- dora-metrics.json (Deployment-Frequency, Lead-Time, MTTR, CFR)
- bottleneck-report.json (Flow-Analysis, Slowest-Steps)
- optimization-recommendations.json (Auto-Suggestions)
- compliance-report.pdf (Management-Report)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Platform-Lead / DevOps
Analytics-Owner: Data-Engineer (Metrics-Aggregation)
Optimization-Authority: Tech-Lead (große Änderungen)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

TASK 1: Predictive Bottleneck-Forecasting
6 Monate Build-Metriken. Time-Series-Model (Prophet/ARIMA) prognostiziert ob Build-Times nächsten Monat ansteigen.

TASK 2: Cost-Attribution-Granularität
Cost-per-Step, Cost-per-Matrix-Job, Cost-per-Artifact-Storage. Developers sehen Cost-Footprint. Incentiviert Optimization.

TASK 3: Self-Optimizing-Pipeline-Loops
Phase CI-10 generiert Recommendations. Automation implementiert "safe" Recommendations auto (z.B. parallelize, caching-upgrade). Nur Major-Changes benötigen Approval.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate-ID          | Bedingung                                    | Striktheit
─────────────────┼────────────────────────────────────────────────────────
CI-10-GATE-01    | Metriken gesammelt und aggregiert            | HOCH
CI-10-GATE-02    | Dashboard aktualisiert (täglich)             | MITTEL
CI-10-GATE-03    | Cost-per-Build < $5                          | MITTEL
CI-10-GATE-04    | Build-Success-Rate > 95%                     | HOCH
CI-10-GATE-05    | DORA-Metriken berechnet                      | MITTEL
CI-10-GATE-06    | Anomalies erkannt und gemeldet               | MITTEL

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Wenn Pipeline-Telemetrie SUCCESS und alle Metriken gesammelt:

═════════════════════════════════════════════════════════════════════════════

OMNI-CLOSED-LOOP TRIGGER: PIPELINE-NEUSTART

Die CI/CD-Integration-Pipeline hat einen VOLLSTÄNDIGEN ZYKLUS abgeschlossen:
- Code validiert (CI-01 bis CI-03)
- Release publisht (CI-04)
- Deployment erfolgreich (CI-05, CI-06)
- Self-Healing aktiv (CI-07)
- Container secured (CI-08)
- Infrastructure deployed (CI-09)
- Telemetrie gesammelt (CI-10)

Status: "ci-10/pipeline-complete" wird gesetzt.

→ AUTOMATISCHE RÜCKKOPPLUNG: Nächste Code-Änderung triggert sofort CI-01 (neuer Zyklus).
→ OPTIMIZATION-LOOP: Phase CI-10 Recommendations in Phase CI-01 für nächsten Run integriert.

ERGEBNIS: Infinite Optimizing Loop aktiviert.
Pipeline-System ist selbstoptimierend und kontinuierlich verbessernd.

═══════════════════════════════════════════════════════════════════════════════

CROSS-PIPELINE-ABHAENGIGKEITEN

Pipeline-Name                   | Abhängigkeit-Typ      | Trigger-Punkt
────────────────────────────────┼───────────────────────┼────────────────────────
Air-Gapped-Deployment-Pipeline  | Sequential            | Nach CI-10 Success
Zero-Defect-Gate-Pipeline       | Parallel (CI-03)      | Quality-Gate-Validation
Resilience-Pipeline             | On-Demand (CI-06)     | Bei Rollback-Scenario
Testing-Automatisierung-Pipeline| Parallel (CI-01)      | Test-Suite-Execution
Security-Pipeline               | Parallel (CI-08)      | Trivy + npm-audit Scans

RICHTLINIE: Alle Abhängigkeiten dokumentiert in .github/workflows/dependencies.json

═══════════════════════════════════════════════════════════════════════════════

KONFIGURATIONS-SPEZIFIKATION

ENVIRONMENT VARIABLES
─────────────────────

CI_ENVIRONMENT_SECRETS:
  GITHUB_TOKEN            → GitHub API Access
  NPM_TOKEN               → npm Registry Auth
  SENTRY_AUTH_TOKEN       → Sentry Release Management
  DOCKER_REGISTRY_TOKEN   → GHCR Authentication
  TERRAFORM_BACKEND_KEY   → S3 Backend Access
  SLACK_WEBHOOK_URL       → Slack Notifications

DATEIPFADE
──────────────────────────────

Repository-Root: /app (CI-Environment)
Workflow-Definitions: /app/.github/workflows/
  - main.yml (Primary CI Pipeline)
  - docker-build.yml (Reusable Container Build)
  - terraform-deploy.yml (Reusable IaC Deploy)

Source-Code: /app/src/
Build-Output: /app/.next/ oder /app/dist/
Configuration:
  - /app/package.json
  - /app/tsconfig.json
  - /app/.eslintrc.json
  - /app/lighthouse-budget.json
  - /app/Dockerfile
  - /app/infra/main.tf

Infrastructure-State:
  - S3 Bucket: s3://terraform-state-{env}/
  - DynamoDB Table: terraform-state-lock

Artifacts:
  - GitHub Actions: 5-day retention
  - S3 Archive Bucket: s3://ci-artifacts-archive/

═══════════════════════════════════════════════════════════════════════════════

METRIKEN UND KPIS

Build-Duration: < 20 Minuten (Target)
Success-Rate: > 98%
Cache-Hit-Rate: > 85%
Test-Coverage: > 80%
Lighthouse-Score: > 90
Bundle-Size: < 500KB gzipped
Deployment-Frequency: > 3x pro Woche
Lead-Time-for-Changes: < 1 Tag
MTTR: < 15 Min
Change-Failure-Rate: < 5%
Cost-per-Deploy: < $5
Flaky-Test-Rate: < 2%

DORA-METRIKEN (Industry-Standard)

Deployment-Frequency:  > 1x pro Woche (Elite: 1x pro Tag)
Lead-Time:             < 1 Tag (Elite: < 1 Stunde)
MTTR:                  < 1 Stunde (Elite: < 15 Min)
Change-Failure-Rate:   < 15% (Elite: < 5%)

SLO (Service-Level-Objectives)

Availability:          99.9%
Build-Success-Rate:    98%+
Deployment-Success:    99%+
Security-Scanning:     100%
Compliance-Violations: 0

MONITORING-DASHBOARDS

Grafana Dashboard "CI/CD Pipeline Health":
  - Real-time Build-Times (Line-Chart)
  - Success-Rate-Trend (Gauge)
  - Cache-Hit-Rates (Donut-Chart)
  - Cost-per-Build (Bar-Chart)
  - DORA-Metriken (KPI Cards)
  - Top-Bottlenecks (Ranked-List)

Alert-Thresholds:
  - Build-Duration > 30 Min → WARNING
  - Build-Duration > 45 Min → CRITICAL
  - Success-Rate < 95% → WARNING
  - Cache-Hit-Rate < 70% → INFO
  - Cost-per-Deploy > $10 → WARNING

═══════════════════════════════════════════════════════════════════════════════

DOKUMENTVERSION UND CHANGELOG

Version 2.0 (2026-04-05):
  - Vollständige 10-Phase Spezifikation
  - DORA-Metriken Framework
  - Selbstheilungs-Mechanismen dokumentiert
  - Cross-Pipeline-Abhängigkeiten definiert
  - Optimization-Loop für kontinuierliche Verbesserung

NÄCHSTE EVOLUTIONEN (Roadmap):
  - AI-Powered Anomaly-Detection (CI-10)
  - Monorepo-Support für Multi-Package-Workflows
  - GitOps-Integration
  - Enhanced-Cost-Optimization mit ML

═══════════════════════════════════════════════════════════════════════════════

FINAL RICHTLINIE

Diese Dokumentation ist das NORMATIVE REFERENZDOKUMENT für alle CI/CD-Implementierungen
innerhalb des Antigravity-Systems. Der Code ist SSOT (Single Source of Truth), aber diese
Spezifikation definiert die OPERATIVE INTENTION hinter jedem Code-Block.

Für die ausführende KI: Jede Abweichung von dieser Spezifikation muss explizit dokumentiert
und Tech-Lead-approved sein. Keine undokumentierten Shortcuts.

Ende des Dokumentes.