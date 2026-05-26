===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-71 (QA-PHASE-10), vor SEQ-72 (OMNI-CLOSED-LOOP)
BLOCK-NUMMER: 18 (PRODUCTION-MONITORING)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-qa-context.md (Lighthouse-Scores, Test-Ergebnisse)
  - .ai-cicd-context.md (Deployment-Workflows fuer Release-Tracking)
AUSGANGS-KONTEXTDATEI: .ai-monitoring-context.md
AUSGANGS-TRIGGER: SEQ-72 (OMNI-CLOSED-LOOP / ME-01) darf erst starten, wenn PM-08
  erfolgreich abgeschlossen, Sentry aktiv, RUM-Tracking funktional, Alerting
  konfiguriert, SLOs definiert und Dashboards deployed sind.
DEFEKT-RUECKFUEHRUNG: Bei Monitoring-Defekten wird der Loop ab PM-01 neu
  gestartet, anschliessend SEQ-72 erneut.

===============================================================================

PRODUCTION-MONITORING-PIPELINE: Integrierte Überwachungs- und Alerting-Architektur
================================================================================

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────────────────────

Die Production-Monitoring-Pipeline implementiert ein umfassendes Telemetrie-System zur Echtzeitüberwachung von Anwendungsperformance, Infrastruktur-Gesundheit und Benutzerverhalten. Diese Pipeline verbindet Fehlertracking (Sentry), Leistungsmetriken (Prometheus/Grafana), Log-Aggregation und intelligente Alert-Mechanismen zu einem kohärenten Observability-Framework. Ziel ist eine proaktive Fehlererkennung, schnelle Incident-Response und kontinuierliche Performanz-Optimierung.

Das System integriert sich mit der Resilience-Pipeline (Error-Recovery), der Meta-Orchestration (Telemetrie-Routing) und der CI/CD-Pipeline (Release-Tracking). Cross-Pipeline-Abhängigkeiten werden über standardisierte Event-Schema und Correlation-IDs koordiniert.

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-01 — Application Performance Monitoring (APM)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Laufende Node.js/React-Anwendung mit Express/Next.js Server
Output:   Sentry-Projekt mit konfiguriertem Error-Tracking, Performance-Tracing, Session-Replay
Abhängigkeiten: Sentry-Account (DSN verfügbar), gültige API-Keys, Umgebungsvariablen konfiguriert
Abhängig von: PM-00-Initialisierung (nicht definiert; startete mit PM-01)
Triggerauslöser für: PM-02 (RUM-Integration), PM-05 (Alerting-Konfiguration)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Sentry-Projekt-Setup
   - Neues Sentry-Projekt unter https://sentry.io anlegen oder existierendes auswählen
   - Projekt-DSN (z.B. https://xxxxxxxxxxxx@yyyyyy.ingest.sentry.io/zzzz) generieren
   - Integrationen aktivieren: GitHub, Slack, PagerDuty (falls vorhanden)
   - Organización und Team-Struktur konfigurieren (z.B. Platform-Team als Owner)

2. Backend-Integration (Node.js/Express)
   - Sentry SDK installieren: npm install @sentry/node @sentry/tracing
   - In Entry-Point (z.B. server.js oder index.ts) initialisieren
     * Sentry.init() mit DSN, environment (production/staging/development), tracesSampleRate
     * RequestHandler und TracingIntegrations vor Routes einbinden
     * ErrorHandler nach allen Routes platzieren (Middleware-Reihenfolge kritisch)
   - Error-Boundary setzen für unbehandelte Promise-Rejections:
     * process.on('unhandledRejection', ...) mit Sentry.captureException()
     * Graceful-Shutdown bei Fehlern berücksichtigen

3. Frontend-Integration (React/Next.js)
   - @sentry/react und @sentry/nextjs installieren
   - next.config.js konfigurieren (für Next.js):
     * withSentryConfig() Wrapper anwenden
     * sourcemaps aktivieren (release builds)
   - _app.tsx/pages/_app.js Setup:
     * Sentry.init() mit Client-DSN
     * ErrorBoundary-Komponente um App-Komponente wrappen
   - React Router oder Next.js Router-Events instrumentieren für Navigation-Tracking

4. Performance-Tracing
   - TracesSampleRate auf 0.1 (10%) setzen für Production, 1.0 für Development
   - Custom Transaction-Namen definieren:
     * HTTP-Requests: MIDDLEWARE_SETUP
     * API-Endpoints: METHOD /path
     * React-Komponenten: React Router Transaction als Parent
   - Spans manuell erstellen für langsame Operationen:
     * DatabaseQuerySpan (Query + Duration)
     * FileSystemSpan (Read/Write-Operationen)
     * ExternalAPICallSpan (3rd-party API-Requests)

5. Session-Replay
   - Replay-Integration aktivieren: replaysSessionSampleRate = 0.1, replaysOnErrorSampleRate = 1.0
   - Privacy-Masking konfigurieren:
     * Sensitive-Felder (input[type=password], [data-sensitive]) automatisch maskieren
     * Custom-Masking-Rules für Business-Daten (z.B. Kreditkarten, Sozialversicherungsnummern)
   - Netzwerk-Recording aktivieren (optional, Performance-Auswirkungen beachten)

6. Release-Health-Tracking
   - Release-Name in Sentry.init() setzen: release: `app@${version}`
   - Version automatisch aus package.json extrahieren (Build-Step)
   - Session-Release-Zuordnung: sentry.captureSession() bei Login/App-Start
   - Crash-Free-Rate berechnen: (Sessions ohne Error) / (Gesamtsessions)

7. Source-Maps hochladen
   - Sentry-CLI installieren: npm install -g @sentry/cli
   - Build-Prozess anpassen: Nach Production-Build Source-Maps zu Sentry hochladen
     * SENTRY_AUTH_TOKEN in CI/CD-Umgebung setzen
     * sentry-cli releases create $VERSION && sentry-cli releases files upload-sourcemaps
   - Source-Map-Pfade validieren (Relative-Pfade müssen mit ~/ beginnen)

8. Development-vs-Production-Konfiguration
   - development.env: DSN set, tracesSampleRate = 1.0, debug = true
   - production.env: DSN set, tracesSampleRate = 0.1, debug = false, environment = "production"
   - Staging: environment = "staging", tracesSampleRate = 0.5
   - Vor Production-Deployment: Sentry-Verbindung testen mit Sentry.captureMessage("Test")

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* sentry.client.ts — Client-Konfiguration (React/Browser)
* sentry.server.ts — Server-Konfiguration (Node.js/Express)
* .sentryrc.json — Sentry-CLI-Konfiguration (Release/Upload)
* error-boundary.tsx — React Error-Boundary-Komponente
* sentry-events.ts — Type-Safe Event-Struktur (Custom Events)
* middleware.sentry.ts — Express-Middleware-Setup
* Sentry-Projekt (Online): https://sentry.io/organizations/[org]/issues/

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Platform-Engineers, SRE-Team
Genehmigung erforderlich: Engineering-Lead (für DSN-Management, Integrations-Konfiguration)
Review-Partner: Security-Team (für datenschutzkonforme Session-Replay-Settings)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Source-Map-Path-Mismatch
Das häufigste Fehler-Szenario: Sentry kann Source-Maps nicht laden, weil lokale Build-Pfade
(z.B. ~/src/components/App.tsx) nicht mit hochgeladenen Pfaden übereinstimmen.
Lösung: Build-Config streng überprüfen, dass Relative-Pfade mit ~/ beginnen und absolute
Pfade während Upload entfernt werden. In Sentry-CLI: --url-prefix parameter nutzen.

FEHLERQUELLE 2 — PII-Exposure in Session-Replay
Session-Replay kann versehentlich Benutzerpasswörter, Kreditkartennummern oder Private-Keys
aufzeichnen, wenn Privacy-Masking nicht konfiguriert ist.
Lösung: Audit vor Production: Jeden Input-Type überprüfen, [data-sensitive]-Attribute auf
Sensitive-Feldern validieren, Custom-Regex für Patterns (XXXX-XXXX-XXXX-XXXX) hinzufügen.

FEHLERQUELLE 3 — SampleRate-Missklassifizierung
Zu hohe tracesSampleRate (z.B. 1.0 in Production) führt zu Quota-Überschreitung und Kosten-Explosion.
Zu niedrig (z.B. 0.01) übersieht kritische Fehler in niedriger-Traffic-Bereichen.
Lösung: Dynamische SampleRate basierend auf Sentry-Quota-Status; Separate Rates für
Error-Events (immer 1.0) vs. Success-Events (variabel).

FEHLERQUELLE 4 — Release-Version-Mismatch
Wenn release-Feld nicht konsistent mit tatsächlicher Deployment-Version übereinstimmt,
können Fixes nicht korrekt Releases zugeordnet werden (Release-Health wird unbrauchbar).
Lösung: Release-Version aus CI/CD-Umgebung (z.B. Git-Tag oder Package.json) generieren,
nicht manuell eingeben. Pre-Deployment-Check: Sentry-Release abfragen und mit Package.json vergleichen.

FEHLERQUELLE 5 — Middleware-Reihenfolge (Express)
Wenn ErrorHandler vor Routes definiert ist oder RequestHandler nach Routes, werden Fehler
nicht korrekt erfasst.
Lösung: Strikte Reihenfolge:
  1. Sentry.init()
  2. Sentry.Handlers.requestHandler()
  3. Custom-Middleware
  4. Routes
  5. Sentry.Handlers.errorHandler()
  6. Fallback 404/500-Handler

FEHLERQUELLE 6 — React-Error-Boundary nur auf Top-Level
Wenn Error-Boundary nur an _app.tsx ist, crashed eine einzelne Komponenten-Error und
bringt ganze Seite zum Abstürz, statt nur die Komponente zu isolieren.
Lösung: Mehrere Error-Boundaries auf verschiedenen Hierarchie-Ebenen nutzen:
  - Top-Level: Globale Fehler
  - Page-Level: Seiten-spezifische Fehler
  - Component-Level: Kritische Komponenten (z.B. Payment-Form, Dashboard)

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: DSN-Verbindung validiert
  ✓ Test-Event erfolgreich zu Sentry gesendet
  ✓ Sentry-Projekt zeigt Event in Issues-Dashboard
  ✓ Keine Auth-Fehler (401/403) in Browser-Console

Gate 2: Error-Erfassung aktiv
  ✓ Unbehandelte JavaScript-Fehler werden erfasst
  ✓ React-Error-Boundary fängt Rendering-Fehler
  ✓ Server-seitige Fehler landen in Sentry (Express-Handler)

Gate 3: Source-Maps geladen
  ✓ Stack-Traces zeigen Datei-Namen und Zeilennummern (nicht minified)
  ✓ sentry-cli upload-sourcemaps erfolgreich
  ✓ Releases in Sentry-Projekt verfügbar

Gate 4: Performance-Tracing
  ✓ Transactions in Performance-Tab sichtbar
  ✓ Spans haben sinnvolle Dauer-Werte (nicht 0ms oder unrealistisch)
  ✓ TracesSampleRate wird korrekt angewendet (nicht alle Requests getracked)

Gate 5: Session-Replay funktional
  ✓ Replay-Videos in Error-Issues verfügbar
  ✓ Privacy-Masking funktioniert (Passwörter nicht sichtbar)
  ✓ Performance-Impact akzeptabel (<50ms zusätzliche Last)

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-01 Abschluss:
→ Trigger PM-02 (RUM-Integration): Sentry DSN an Frontend weitergeben, Web-Vitals-Tracking Setup starten
→ Trigger PM-05 (Alerting): Sentry-Integrations-Tokens an Alert-System weitergeben
→ Output an Meta-Orchestration: APM-Konfiguration als Telemetrie-Schema dokumentieren

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-02 — Real User Monitoring (RUM)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Frontend-Anwendung (React/Vue/Vanilla JS) mit Sentry integriert (PM-01 Output)
Output:   Real User Monitoring mit Web-Vitals, Custom-Metriken, User-Journey-Traces
Abhängigkeiten: Web-APIs: PerformanceObserver, NavigationTiming, LayoutShift, LongTasks
Abhängig von: PM-01 (Sentry-Projekt und DSN)
Triggerauslöser für: PM-06 (Dashboard-Daten)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Web Vitals Baseline Setup
   - web-vitals-Bibliothek installieren: npm install web-vitals
   - Google Web Vitals in Sentry integrieren:
     * getCLS() — Cumulative Layout Shift (Zielwert: < 0.1)
     * getLCP() — Largest Contentful Paint (Zielwert: < 2.5s)
     * getINP() — Interaction to Next Paint (Zielwert: < 200ms)
     * getFCP() — First Contentful Paint (Zielwert: < 1.8s)
     * getTTFB() — Time to First Byte (Zielwert: < 600ms)
   - Sentry.captureMessage() mit metric-Tags für Sentry-Ingestion konfigurieren
   - Alternative: Directly an Sentry via measurementValues in Transactions

2. Core Web Vitals Tracking
   - PerformanceObserver für Layout-Verschiebungen überwachen:
     * const observer = new PerformanceObserver((list) => {
         for (const entry of list.getEntries()) {
           if (!entry.hadRecentInput) {
             Sentry.captureMessage('CLS', { tags: { metric: 'CLS', value: entry.value } });
           }
         }
       });
       observer.observe({ entryTypes: ['layout-shift'] });
   - LCP Observer für größte Inhalts-Elemente:
     * Beobachtet Paint-Timing und meldet Änderungen
     * Data-Attribute auf kritischen Elementen setzen (z.B. data-lcp="true")
   - INP Observer für Interaktions-Lags:
     * Event-Latenz von Click/Keyboard bis nächster Paint messen
     * Langsame Handler (> 200ms) identifizieren und melden

3. First Input Delay (FID) vs. INP Migration
   - FID wird deprecated (Juni 2024); INP ist neuer Standard
   - Beide Metriken parallel tracken während Übergangsphase
   - Ältere Browser (< 2023) als "FID-Only" kennzeichnen
   - Sentry-Configuration für beides aktualisieren

4. Custom Metrics Definition
   - Business-spezifische Metriken definieren:
     * checkout_duration — Zeit von Checkout-Start bis Bestätigung
     * login_time — Authentifizierungs-Dauer
     * search_to_result — Suchfeld bis Ergebnisse
     * image_load_time — Durchschnittliche Bild-Lade-Zeit
   - Jede Custom-Metrik mit: name, value (numeric), unit, tags
   - In Sentry als measurementValues erfassen

5. User Journey Stitching
   - Session-Start: Eindeutige Session-ID generieren (UUID v4)
   - Navigation-Events tracken:
     * URL-Änderungen mit Timestamp
     * Page-View-Zeit (Dauer zwischen Navigation und nächster)
     * User-Aktion (Click, Scroll, Submit)
   - Correlation-ID: Alle Events einer Session mit session_id taggen
   - Sentry User-Context setzen: Sentry.setUser({ id, email, username })

6. Geographische Verteilung
   - Client IP auslesen (über API oder maxmind GeoIP Library)
   - In Sentry User-Context speichern: Sentry.setContext('geo', { country, region, city })
   - Performance-Baseline pro Region berechnen:
     * RUM-Daten gruppiert nach country/region
     * Identifiziere langsame Regionen (z.B. high latency in Asia)
   - CDN-Nutzung basierend auf Geo-Daten optimieren

7. Session Segmentation
   - Device-Typ: mobile (< 600px), tablet (600-1024px), desktop (> 1024px)
   - Browser: Chrome, Firefox, Safari, Edge — mit Version
   - Network-Typ: 4g, 3g, slow-2g (via Navigator.connection API)
   - User-Agent Parsing (mit ua-parser oder browserslist)
   - Jeder RUM-Event mit Device-Tags: device_type, browser, os_version

8. Privacy & PII Handling
   - Persönliche Daten dürfen NICHT in RUM-Events sein
   - URL-Parameter mit sensiblen Daten sollten gefiltert werden (z.B. ?token=, ?key=)
   - Sentry Filter auf URL-Ebene anwenden:
     * allowUrls: [whitelist of safe domains]
     * denyUrls: [blacklist of sensitive endpoints]
   - Custom-Redaction: Query-Parameter automatisch entfernen vor Telemetrie

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* web-vitals-tracker.ts — Web-Vitals-Erfassungs-Modul
* rum-session-context.ts — Session-Management und Correlation-ID-Handling
* geo-tracking.ts — Geographische Lokalisierung
* custom-metrics.ts — Custom-Metrik-Definitionen und Tracking
* user-journey.tsx — React-Hook für User-Journey-Events
* rum-types.ts — TypeScript-Interfaces für RUM-Events
* Sentry-Dashboard: RUM-Metriken-Ansicht konfiguriert

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Frontend-Engineering, Data-Analytics-Team
Genehmigung erforderlich: Privacy-Officer (für Geo-Tracking und Session-Data)
Review-Partner: UX-Team (für Custom-Metriken-Definition)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Layout-Shift-Spam
CLS wird durch dynamische Ads, Modals und späte Schriftarten-Laden verursacht.
Ohne Filtering werden tausende CLS-Events gesendet (Sentry-Quota-Überflutung).
Lösung: CLS nur tracken wenn > 0.05; hadRecentInput-Check obligatorisch;
Aggregate mehrere kleine Shifts pro Session.

FEHLERQUELLE 2 — LCP bei dynamischen Seiten
Bei Single-Page-Applications wird LCP mehrdeutig (ist es initial paint oder nach Daten-Load?).
Lösung: Separate "Primary LCP" (initial) und "Interactive LCP" (nach Data-Load) definieren.
In Sentry: Custom Transaction-Namen für beide Varianten.

FEHLERQUELLE 3 — INP falsch für Click-Handler
INP misst Click bis Paint, aber Handler die nur State-Update ohne Visual-Change machen,
wirken künstlich schnell. Zu niedriges Baseline.
Lösung: "Interaction-Complexity" als eigene Metrik hinzufügen (Depth des Change-Baums).

FEHLERQUELLE 4 — Session-ID-Kollisionen
Wenn Session-IDs nicht eindeutig über Client-Pool sind, können Sessions vermischt werden.
Lösung: UUID v4 mit Timestamp-Komponente; Sentry User-ID falls verfügbar als Fallback.

FEHLERQUELLE 5 — URL-Parameter-Sensitiv
Wenn API-Keys oder Tokens in Query-Parametern sind und in URLs getracked werden,
sind Credentials in Sentry-Daten sichtbar (Security-Breach).
Lösung: beforeSend-Hook in Sentry für URL-Sanitization vor Ingestion.

FEHLERQUELLE 6 — Geo-Daten-Datenschutz
IP-Adressen sind in manchen Jurisdiktionen (EU-GDPR) personenbezogene Daten.
Lösung: Maximale Granularität auf Landes/Regions-Level begrenzen; City-Level nur mit
explizitem Benutzer-Opt-in; Keine IP-Speicherung (nur Geo-Ergebnis speichern).

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Web-Vitals gesammelt
  ✓ LCP, FCP, CLS, INP, TTFB in Sentry-Events sichtbar
  ✓ Metriken haben realistische Werte (LCP 1-5s, nicht 0ms oder 60s+)
  ✓ Baseline-Schwellwerte definiert (Zielwert-Tags pro Metrik)

Gate 2: Session-Tracking aktiv
  ✓ Session-IDs in allen RUM-Events vorhanden
  ✓ Sentry zeigt Session-Zusammenfassung (Events pro Session)
  ✓ User-Context korrekt (wenn authentifiziert)

Gate 3: Geographische Verteilung verfügbar
  ✓ Sentry-Release zeigt Geo-Tags (country, region)
  ✓ Performance-Unterschiede pro Region messbarer
  ✓ Keine echten IPs in Daten (nur Geo-Aggregat)

Gate 4: Custom-Metriken definiert
  ✓ Business-spezifische Metriken (z.B. checkout_duration) getracked
  ✓ Baselines pro Metrik in Dashboard gesetzt
  ✓ Alerts konfiguriert für Abweichungen

Gate 5: Privacy-Filter aktiv
  ✓ Sensitive-URLs nicht in RUM-Events
  ✓ Token/API-Keys nicht in Sentry sichtbar
  ✓ PII-Redaction bestätigt

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-02 Abschluss:
→ Trigger PM-06 (Dashboard-Design): RUM-Metriken-Dashboard in Grafana erstellen
→ Output an Meta-Orchestration: Web-Vitals-Schema für Downstream-Systeme dokumentieren
→ Input zu PM-05 (Alerting): RUM-basierte Alerts auf Baseline setzen

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-03 — Infrastructure Monitoring
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Production-Server(s), Container-Infrastruktur (Docker), Process-Manager (PM2)
Output:   Prometheus-Metrics, Infrastructure-Dashboard in Grafana
Abhängigkeiten: Prometheus-Zugriff, Node Exporter auf Servern, Grafana-Installation
Abhängig von: PM-01 (APM baseline)
Triggerauslöser für: PM-05 (Alerting), PM-06 (Dashboard)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Prometheus-Setup
   - Prometheus-Server installieren (docker oder binary)
   - prometheus.yml konfigurieren mit Job-Definition:
     * global: scrape_interval: 15s, evaluation_interval: 15s
     * scrape_configs für jeden Monitoring-Target (z.B. Node-Exporter, PM2, custom metrics)
   - Daten-Persistence: --storage.tsdb.path=/prometheus-data
   - Retention-Policy setzen: --storage.tsdb.retention.time=30d

2. Node Exporter für Server-Metriken
   - Node Exporter auf jedem Server installieren: https://github.com/prometheus/node_exporter
   - Systemd-Service erstellen für Auto-Start:
     * ExecStart=/usr/local/bin/node_exporter --collector.textfile.directory=/var/lib/node_exporter/textfiles
   - Prometheus-Config: Node Exporter Scrape Target hinzufügen (Port 9100)
   - Folgende Metriken tracken:
     * CPU: node_cpu_seconds_total (per CPU-Core)
     * Memory: node_memory_MemAvailable_bytes, node_memory_MemFree_bytes
     * Disk: node_filesystem_avail_bytes, node_filesystem_size_bytes
     * Network: node_network_receive_bytes_total, node_network_transmit_bytes_total
     * Process: node_processes_state (running/sleeping/zombie)

3. Container-Monitoring (Docker)
   - cAdvisor oder Prometheus Docker-Plugin für Container-Metriken
   - Folgende Container-Metriken tracken:
     * container_cpu_usage_seconds_total
     * container_memory_usage_bytes
     * container_network_receive_bytes_total
     * container_network_transmit_bytes_total
   - Für Kubernetes (wenn vorhanden): kube-metrics-server für Pod-Metriken
   - Prometheus-Config:
     * Scrape-Interval für Container: 30s (höher als Host-Metriken, weniger Churn)
     * Label pro Container: pod_name, namespace, container_name

4. PM2-Monitoring
   - PM2-Plus aktivieren: pm2 web (lokal) oder PM2 Enterprise API
   - PM2-Exporter für Prometheus (z.B. https://github.com/digitalhitechnologies/pm2-prometheus-exporter):
     * pm2 describe [app] exportiert JSON-Metrics
     * Custom Exporter konvertiert JSON zu Prometheus-Format
   - Metriken pro PM2-Prozess:
     * pm2_process_cpu_percent
     * pm2_process_memory_usage_bytes
     * pm2_process_restarts_total
     * pm2_process_uptime_seconds
     * pm2_process_status (0=online, 1=stopped, 2=stopped/errored, 3=one-launchning, etc)

5. Application-Metrics aus Express/Node
   - prom-client Library: npm install prom-client
   - Metriken in Express-Middleware registrieren:
     * http_requests_total (Counter): gauge.inc() pro Request
     * http_request_duration_seconds (Histogram): timer für Request-Dauer
     * http_active_connections (Gauge): concurrent requests
   - Custom-Business-Metriken:
     * api_calls_to_external_service_total
     * database_query_duration_seconds
     * cache_hit_ratio
   - /metrics Endpoint exposieren: app.get('/metrics', async (req, res) => { ... })
   - Prometheus scrape-config für Application:
     * scrape_interval: 15s
     * metrics_path: '/metrics'
     * auth via http_basic_auth wenn nötig

6. Uptime Monitoring
   - Zwei Ansätze:
     a) Passive: Prometheus scrape-Timeouts als "down" interpretieren
     b) Active: HTTP-GET auf Health-Check-Endpoint (/health, /readiness)
   - Health-Check-Endpoint implementieren:
     * GET /health → 200 OK + JSON { status: "healthy" } wenn alle Komponenten OK
     * GET /readiness → 200 wenn ready to receive traffic, 503 wenn recovering
     * Abhängigkeiten prüfen: Database-Connection, Redis, External-APIs
   - Prometheus config für Health-Checks:
     * http_probes job: scrape /health von allen Services
     * prober_probe_duration_seconds als Metrik

7. Alerte auf Infrastruktur-Level (Prometheus Alert Rules)
   - prometheus-rules.yml definieren mit Alert-Rules:
     * CPU-Auslastung > 80% für 5 Minuten
     * Memory-Auslastung > 85%
     * Disk-Space < 10% verfügbar
     * Node-Exporter down (keine Metriken für 5 Min)
     * Process-Restart-Rate > 5 pro Stunde
   - Alert-Rules als YAML:
     * groups:
       - name: infrastructure
         rules:
         - alert: HighCPUUsage
           expr: node_cpu_seconds_total > 0.8
           for: 5m
           annotations:
             summary: "High CPU on {{ $labels.instance }}"

8. Multi-Server Orchestrierung
   - Falls mehrere Server: Prometheus Scrape-Targets zentral manage (z.B. via Consul)
   - Service-Discovery Setup (z.B. Consul SD oder static files)
   - Prometheus Federation für Multi-Cluster (optional, für > 50 Server)

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* prometheus.yml — Prometheus-Konfiguration
* prometheus-rules.yml — Alert-Rules (CPU, Memory, Disk, Uptime)
* node-exporter-systemd.service — systemd-Service für Node Exporter
* pm2-exporter.js — Custom PM2 zu Prometheus Converter
* health-check-route.ts — Express /health und /readiness Endpoints
* application-metrics.ts — prom-client Middleware und Custom-Metriken
* docker-compose.monitoring.yml — Docker-Setup für Prometheus + Grafana (optional)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevOps-Team, SRE
Genehmigung erforderlich: Infrastruktur-Lead
Review-Partner: Security-Team (für Metric-Exposure und Endpoint-Auth)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Prometheus Cardinality Explosion
Zu viele Unique-Label-Kombinationen (z.B. per-user ID als Label) führen zu Memory-Overflow.
Lösung: Cardinality-Limits setzen (Prometheus 2.36+: metric_relabel_configs mit Limit);
User-IDs NICHT als Labels verwenden, Aggregation auf höherer Ebene.

FEHLERQUELLE 2 — Scrape-Interval zu kurz
15s-Interval bedeutet 5760 Scrapes/Tag pro Target. Bei 50+ Targets wird Storage riesig.
Lösung: Tiered Scraping: 15s für kritische Metriken (CPU, Memory), 60s für weniger kritische.

FEHLERQUELLE 3 — Health-Check nicht robust
Wenn Health-Endpoint langsam wird oder falsch-Positive zurückgibt, ist Monitoring wertlos.
Lösung: Health-Check nur kritische Abhängigkeiten mit Timeouts checken;
"degraded" Status statt nur true/false; Retry-Logic für flaky Checks.

FEHLERQUELLE 4 — PM2-Metriken inconsistent
PM2 Reports restarts/cpu im unterschiedlichen Format; Custom-Parser bricht bei Updates.
Lösung: Nur stabile PM2-API-Felder nutzen; Fallback-Parser für alte PM2-Versionen.

FEHLERQUELLE 5 — Node-Exporter nicht aktualisiert
Alte Node-Exporter-Versionen fehlen neue Metriken oder haben Bugs.
Lösung: Node-Exporter monatlich aktualisieren; Pre-Check nach Update dass /metrics 200 gibt.

FEHLERQUELLE 6 — Disk-Monitoring zu spät
Wenn Disk-Alert erst bei 2% verfügbar kommt, ist meistens schon App down.
Lösung: Alerts bei 10%, 5%, 1% gestaffelt; Proaktives Log-Rotation bei 15% Disk-Free.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Prometheus scrapes erfolgreich
  ✓ Prometheus Dashboard zeigt alle Targets als "UP"
  ✓ Metriken in PromQL abfragbar (z.B. node_cpu_seconds_total)
  ✓ Keine "connection refused" oder "timeout" Fehler im Prometheus-UI

Gate 2: Server-Metriken vollständig
  ✓ CPU, Memory, Disk, Network-Metriken pro Server vorhanden
  ✓ Werte realistisch und aktualisieren sich
  ✓ Max-Werte sinnvoll (Memory sollte nicht > RAM sein)

Gate 3: Container-Metriken (falls Docker)
  ✓ Container-CPU und Memory werden getracked
  ✓ Container-Restarts sind erfassbar
  ✓ cAdvisor oder Prometheus-Plugin funktioniert

Gate 4: PM2-Metriken
  ✓ Alle PM2-Prozesse zeigen CPU/Memory/Status
  ✓ Restart-Counter erhöht sich bei Process-Crashes
  ✓ Uptime-Metriken korrekt

Gate 5: Health-Checks funktionieren
  ✓ GET /health antwortet mit 200 + valid JSON
  ✓ GET /readiness gibt 200 bei normalem Betrieb, 503 bei Abhängigkeits-Fehler
  ✓ Prometheus kann /health/readiness erfolgreich scrapen

Gate 6: Alert-Rules activ
  ✓ Prometheus UI zeigt Alert-Rules
  ✓ Test-Alert (z.B. künstlich CPU hochfahren) triggert Alert
  ✓ Alert-Zustand "ALERTING" nach Schwellwert-Überschreitung

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-03 Abschluss:
→ Trigger PM-05 (Alerting): Alert-Rules zu Alert-Aggregator (PagerDuty/Alertmanager) weitergeben
→ Trigger PM-06 (Dashboard): Prometheus-Metriken an Grafana-Dashboard anbinden
→ Output an Meta-Orchestration: Infrastruktur-Metriken-Schema dokumentieren

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-04 — Log-Aggregation und Structured Logging
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Node.js-Anwendung mit Logging-Requirements
Output:   Strukturierte Logs mit Correlation-IDs, Log-Aggregation, Retention-Policies
Abhängigkeiten: Logging-Library (Pino oder Winston), Log-Collector (ELK/Loki), Disk-Space für Log-Rotation
Abhängig von: PM-01 (Sentry), PM-03 (Infrastruktur)
Triggerauslöser für: PM-05 (Alert), PM-06 (Dashboard)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Logging-Library Setup (Pino)
   - npm install pino pino-pretty (pretty-print für Development)
   - pino.config.ts erstellen:
     * level: process.env.LOG_LEVEL || 'info' (development: 'debug', production: 'info')
     * formatters: Custom-Felder hinzufügen (timestamp, environment, version)
     * timestamp: pino.stdTimeFunctions.isoTime (ISO 8601 format)
   - Pino-Transport Setup (für Production Logs zu File/Stream):
     * Base-Transport: pino.transport({ target: 'pino/file', options: { destination: './logs/app.log' } })
     * Optional Syslog-Transport: pino.transport({ target: 'pino-syslog', options: { ... } })

2. Log-Level-Hierarchie
   - TRACE (10): Detaillierte Stack-Traces, Variable-Values (nur Development)
   - DEBUG (20): Function-Eingänge, Intermediate-Werte, Performance-Timing
   - INFO (30): User-Aktionen, API-Requests, Service-State-Änderungen (Default)
   - WARN (40): Recoverable-Fehler, Deprecations, Performance-Probleme (z.B. slow query)
   - ERROR (50): Unerwartete Fehler, Service-Fehler, definiert Incident-Potential
   - FATAL (60): Prozess wird beenden, Datenbank-Verbindung lost, etc. → Immediate-Alert

3. Structured Logging Format
   - Alle Logs als JSON-Objects (nicht Text):
     * timestamp: ISO 8601
     * level: string ('info', 'error', etc.)
     * message: string (aussagekräftig, < 200 chars)
     * request_id: Correlation-ID (UUID)
     * user_id: Falls authentifiziert (redacted PII)
     * service: Name der Komponente/Service
     * duration_ms: Für Performance-Logs
     * error_code: Machine-readable error classification
     * tags: Array von String-Tags für Filterung
     * context: Nested object für Zusatzinfo
   - Beispiel:
     ```json
     {
       "timestamp": "2025-04-05T12:34:56.789Z",
       "level": "error",
       "message": "Database query failed",
       "request_id": "req_abc123",
       "user_id": "user_123",
       "service": "api-gateway",
       "duration_ms": 5234,
       "error_code": "DB_TIMEOUT",
       "tags": ["database", "critical"],
       "context": {
         "query": "SELECT * FROM users WHERE...",
         "retries": 3
       }
     }
     ```

4. Correlation-ID Management
   - Correlation-ID (Request-ID) im HTTP-Header: X-Request-ID
   - Wenn nicht vorhanden: UUID v4 generieren
   - Alle Downstream-Requests mit gleicher Correlation-ID
   - Express-Middleware:
     ```typescript
     app.use((req, res, next) => {
       const correlationId = req.headers['x-request-id'] || generateUUID();
       req.id = correlationId;
       res.setHeader('X-Request-ID', correlationId);
       logger.info({ request_id: correlationId, msg: `${req.method} ${req.path}` });
       next();
     });
     ```
   - In Database-Queries: Correlation-ID in Query-Context speichern
   - In External-API-Calls: Correlation-ID im Request-Header mitgeben

5. Log-Rotation
   - Pino-Rotation oder OS-Level-Rotation (logrotate auf Linux)
   - Rotation-Policy:
     * Täglich neue Log-Datei (z.B. app-2025-04-05.log)
     * Alte Logs komprimieren (.gz nach 7 Tagen)
     * Löschen nach Retention-Zeit (z.B. 30 Tage für INFO, 90 Tage für ERROR)
   - logrotate-Konfiguration (Linux):
     ```
     /var/log/app/*.log {
       daily
       rotate 30
       compress
       delaycompress
       notifempty
       missingok
       postrotate
         systemctl reload app || true
       endscript
     }
     ```

6. Log-Collection (ELK Stack oder Loki)
   - Option A: ELK (Elasticsearch, Logstash, Kibana)
     * Logstash-Agent auf Server installieren
     * Input: Pino-JSON-Logs aus Files
     * Filter: Parse JSON, Add Geo-IP, Deduplicate
     * Output: Send to Elasticsearch
   - Option B: Grafana Loki (leichtgewichtig, für Prometheus-Integration)
     * Promtail Agent auf Server
     * Loki-Server zentral
     * Logs in Grafana queryable
   - Configuration: Labels für Filtering:
     * service: "api" oder "worker"
     * environment: "production", "staging"
     * error_level: "error", "fatal"

7. Log-Retention Policies
   - Production-Logs:
     * INFO + DEBUG: 30 Tage (kostengünstig, für Context)
     * WARN: 60 Tage (Trend-Analyse)
     * ERROR + FATAL: 90 Tage (Incident-Analyse)
   - Archive ältere Logs zu S3/Glacier (nur bei rechtlichem Bedarf)
   - Staging: 14 Tage (schnelle Rotation)
   - Development: 3 Tage oder kein Archiv (lokal nur)

8. Sensitive-Data Filtering
   - PII nicht in Logs: Passwörter, SSN, Kreditkarten, Auth-Tokens
   - Redaction-Regeln definieren:
     * Regex für Sensitive-Patterns (z.B. /Bearer\s[\w-]+/g → "Bearer [REDACTED]")
     * Pino-Hooks für Message-Redaction:
       ```typescript
       pino.hooks = {
         logMethod(args, method) {
           // Redact sensitive fields
           args[0] = redactSensitiveData(args[0]);
           method.apply(this, args);
         }
       }
       ```
   - Felder die redacted sein müssen: password, token, apiKey, credit_card, ssn
   - Review: Alle Test-Logs vor Production-Deploy für PII-Leaks

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* pino.config.ts — Pino-Konfiguration und Setup
* logger.middleware.ts — Express-Middleware für Request-Logging und Correlation-ID
* log-redaction.ts — PII-Redaction-Logik
* logrotate.conf — Linux logrotate-Konfiguration
* logstash.conf oder promtail.yml — Log-Collection-Agent-Konfiguration
* log-levels.ts — TypeScript Enum für Log-Levels und Severity-Mappings
* correlation-id.ts — Correlation-ID-Generation und Propagation

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Platform-Engineers, DevOps
Genehmigung erforderlich: Security-Officer (für PII-Redaction), Compliance (für Retention-Policies)
Review-Partner: Analytics-Team (für Log-Schema-Alignment)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Log-Disk-Space exhausted
Wenn Rotation nicht funktioniert oder Policy zu großzügig, füllen Logs den Disk in Stunden.
Lösung: Disk-Space-Monitor (alert at 85%, rotate at 90%); Automated-Cleanup für alte Logs.

FEHLERQUELLE 2 — Correlation-ID nicht propagiert
Wenn nur erste Request mit ID getracked wird, aber Downstream-Calls keine ID mitgeben,
ist User-Journey-Tracing unmöglich.
Lösung: Correlation-ID obligatorisch in alle Middleware; Test: Jeden External-Call
mit correlation_id im Log überprüfen.

FEHLERQUELLE 3 — Redaction unvollständig
If Regex für PII-Pattern falsch ist, werden Tokens/Keys teilweise nicht redacted.
Lösung: Comprehensive Redaction-Test: Alle bekannten Patterns mit Test-Daten durchlaufen,
Pre-Production-Audit auf echten Logs.

FEHLERQUELLE 4 — Log-Level Verwirrung
Wenn ERROR in Production zu häufig ist (> 100/min), wird Alert-Fatigue verursacht.
Lösung: Definiert ERROR als "Requires-Immediate-Human-Response", sonst WARN verwenden;
Error-Rate-Baseline pro Service setzen.

FEHLERQUELLE 5 — Structured-Logging nicht konsistent
Wenn einige Services JSON loggen, andere Text, ist Log-Aggregation chaotisch.
Lösung: Obligatorisch JSON-Only; Linter (eslint-plugin-pino) zum Erzwingen.

FEHLERQUELLE 6 — Log-Retention-Kosten
Zu lange Retention (z.B. 365 Tage für all levels) kostet > $1000/Monat in Cloud-Storage.
Lösung: Tiered-Retention streng: INFO 30d, ERROR 90d, FATAL 180d max.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Structured Logging funktioniert
  ✓ Alle Logs sind gültige JSON (kein Text-Logging)
  ✓ Logs enthalten timestamp, level, message, request_id
  ✓ pino pretty-print funktioniert in Development

Gate 2: Correlation-IDs vollständig
  ✓ Jeder Request hat eindeutige request_id
  ✓ Alle Logs für einen Request haben gleiche request_id
  ✓ External-API-Calls erhalten correlation_id im Header

Gate 3: Log-Rotation aktiv
  ✓ Tägliche Log-Datei-Rotation findet statt
  ✓ Alte Logs komprimiert und/oder gelöscht nach Policy
  ✓ Disk-Space nicht überläuft

Gate 4: PII-Redaction verifiziert
  ✓ Keine Passwörter, Tokens, Kreditkartennummern in Logs
  ✓ Redaction-Test mit Known-Patterns erfolgreich
  ✓ User-IDs generisch (kein Real-Name sichtbar)

Gate 5: Log-Collection funktioniert
  ✓ Logs fließen zu Elasticsearch/Loki erfolgreich
  ✓ Logs in Kibana/Grafana abfragbar
  ✓ Filter (by service, level, error_code) funktionieren

Gate 6: Retention-Policy angewendet
  ✓ Alte Logs nach Retention-Tagen gelöscht
  ✓ Archive zu S3 (falls nötig) erfolgreich
  ✓ Storage-Kosten innerhalb Budget

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-04 Abschluss:
→ Trigger PM-05 (Alerting): Log-basierte Alerts auf ERROR/FATAL konfigurieren
→ Trigger PM-06 (Dashboard): Log-Aggregations-Dashboard in Kibana/Grafana bauen
→ Output zu Meta-Orchestration: Log-Schema und Correlation-ID-Protokoll dokumentieren

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-05 — Alerting-Architektur (P0-P3 Severity)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Monitoring-Daten (Prometheus, Logs, Sentry), Alerting-Requirements
Output:   Alert-Rules mit Severity, Eskalations-Ketten, PagerDuty-Integration
Abhängigkeiten: PagerDuty oder OpsGenie-Account, Alert-Manager konfiguriert, On-Call-Schedules
Abhängig von: PM-01 (Sentry), PM-03 (Prometheus), PM-04 (Logs)
Triggerauslöser für: PM-08 (Incident-Response)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Severity-Classification Framework
   - Severity definieren nach Business-Impact:
     * P0 (Critical/SEV1): Service komplett down, Daten-Loss-Risk, > 10% Nutzer betroffen
       - Beispiel: Database Down, Memory-Leak mit 100% Resource-Nutzung
       - Response-Zeit: < 5 Minuten
       - Eskalation: Alle On-Call-Engineers + Führung
     * P1 (High/SEV2): Degraded Service, Features-Ausfälle, 1-10% Nutzer betroffen
       - Beispiel: API-Error-Rate > 5%, Checkout-Feature broken
       - Response-Zeit: < 15 Minuten
       - Eskalation: On-Call-Lead, Slack #incidents
     * P2 (Medium/SEV3): Service noch nutzbar, Performance-Probleme, Non-Critical-Fehler
       - Beispiel: Slow Database-Queries (>1s median), CSS-Bug auf Mobile
       - Response-Zeit: < 1 Stunde
       - Eskalation: Team-Slack, jira Ticket
     * P3 (Low/SEV4): Minor-Issues, Tech-Debt, Warnings
       - Beispiel: SSL-Zertifikat expiriert in 30 Tagen, Old-Package-Update verfügbar
       - Response-Zeit: < 24 Stunden
       - Eskalation: Jira Ticket nur

2. Alert-Rule Definition (Prometheus)
   - Prometheus Alert-Rules in prometheus-rules.yml:
     * P0 Rules (Immediate):
       - Service Down: up{job="api"} == 0 for 2m
       - Error Rate: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
       - Database Connection Lost: mysql_up == 0
       - Memory Leak: delta(process_resident_memory_bytes[1h]) > 500*1024*1024 for 3h
     * P1 Rules (1-2 hours):
       - High Error Rate: rate(http_requests_total{status=~"5.."}[5m]) > 0.02
       - Response Time SLO Breach: histogram_quantile(0.95, http_request_duration_seconds) > 2
       - Database Slow Queries: slow_query_count > 10 per minute
       - High CPU: node_cpu_percent > 80 for 10m
     * P2 Rules (24 hours):
       - Moderate Error Rate: rate(http_requests_total{status=~"5.."}[5m]) > 0.005
       - Disk Space Low: node_filesystem_avail_percent < 20
       - High Memory: node_memory_used_percent > 85
     * P3 Rules (No Auto-Alert, Weekly Review):
       - Package Updates Available: outdated_package_count > 0
       - SSL Certificate Expiring: ssl_expiry_days < 30

3. Sentry-based Alerts
   - Sentry-Integration konfigurieren:
     * Issue Frequency Alert: > 50 events in 1h → P1
     * Error-Neue Issues: Neue Error-Type erstmals gesehen → P2 (falls relevant)
     * Release-Health: Crash-Rate > 2% → P1
   - Sentry Alert-Rules via UI oder API
   - Severity Threshold: Automatisch erhöht wenn gleicher Error > 3x vorkommt

4. Log-based Alerts (ELK/Loki)
   - Elasticsearch/Loki Query für Alerts:
     * P0: FATAL logs > 1 in 5min → Immediate escalation
     * P1: ERROR logs > 20 in 5min → On-Call notification
     * P2: WARN logs > 100 in 5min → Slack notification
   - Kibana/Grafana Alert-Rules konfigurieren mit Thresholds

5. PagerDuty Integration
   - PagerDuty Account Setup:
     * Organization, Teams, Services definieren
     * Escalation Policies konfigurieren:
       - Level 1: On-Call Engineer (15 min Timeout)
       - Level 2: On-Call Lead (15 min Timeout)
       - Level 3: Manager (Für kritische Incident)
   - Prometheus zu PagerDuty:
     * Alertmanager-Config:
       ```yaml
       global:
         resolve_timeout: 5m
       route:
         receiver: 'pagerduty-p0'
         routes:
         - match:
             severity: critical
           receiver: 'pagerduty-p0'
         - match:
             severity: high
           receiver: 'pagerduty-p1'
       receivers:
       - name: 'pagerduty-p0'
         pagerduty_configs:
         - service_key: $PD_P0_SERVICE_KEY
           severity: critical
       ```
   - Sentry to PagerDuty:
     * Sentry Integration: PagerDuty Service-Key hinterlegen
     * Alert-Action: "Create PagerDuty Incident"

6. Alert-Fatigue Prevention (Deduplication/Throttling)
   - Deduplication: Gleiche Alert mehrfach in Alertmanager deduplicieren:
     * group_by: ['alertname', 'service', 'severity']
     * group_wait: 10s (Zeit zum Sammeln ähnlicher Alerts)
     * group_interval: 10m (Nur bei Alert-Status-Änderung erneut senden)
   - Throttling: Maximale Alert-Frequenz pro Severity:
     * P0: Alle 5 Minuten (keine Drosselung)
     * P1: Alle 15 Minuten (Max 4 pro Stunde)
     * P2: Alle 60 Minuten (Max 1 pro Stunde)
   - Silence Management: Temporäre Alerts stummschalten (z.B. während Deployment):
     * Via Alertmanager UI oder API: POST /api/v1/silences
     * Duration: z.B. 30 Minuten für Maintenance-Fenster

7. Alert-Webhook Integration (Custom Automation)
   - Alertmanager Webhook-Receiver für Custom-Logic:
     * POST /webhook mit Alert-JSON
     * Custom Handler: Auto-Scale, Auto-Restart, Slack-Message, Jira-Ticket
   - Beispiel-Webhook-Handler (Node.js):
     ```typescript
     app.post('/webhook/alerts', async (req, res) => {
       const alerts = req.body.alerts;
       for (const alert of alerts) {
         if (alert.labels.severity === 'critical') {
           await triggerAutoScale();
           await notifySlack(`CRITICAL: ${alert.labels.alertname}`);
           await createJiraIncident(alert);
         }
       }
       res.json({ status: 'ok' });
     });
     ```

8. On-Call Schedule Management
   - PagerDuty On-Call Schedules:
     * Primary Rotation: M-F 9am-5pm + On-Call (M-F 5pm-9am + Weekends)
     * Escalation Policy: Unresponded → Manager
   - Holiday Coverage: Temporäre Rotation-Änderungen für Public-Holidays
   - Handoff-Protokoll: 10 Minuten Overlap für Kontextübergabe
   - Alerting bei Coverage-Gaps: Alert wenn niemand für Time-Slot verfügbar

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* alert-rules.yml — Prometheus Alert-Rules (P0-P3)
* alertmanager.yml — Alertmanager-Konfiguration (Routing, Receivers, Deduplication)
* pagerduty-integration.ts — PagerDuty API-Integration für Custom-Alerts
* alert-webhook-handler.ts — Custom Webhook-Handler für Alert-Automation
* severity-classification.md — Dokumentation: Severity-Levels und Response-SLAs
* alert-silence-api.ts — API für Temporary-Alert-Silencing (z.B. bei Deployment)
* on-call-schedule.json — On-Call-Schedule-Konfiguration (PagerDuty Export)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: SRE-Team, Ops-Lead
Genehmigung erforderlich: Engineering-Director (für Severity-Definition und SLA-Commitment)
Review-Partner: On-Call-Engineers (für Practicality und Escalation-Paths)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — False Positives in Alerts
Wenn Alerting-Threshold zu niedrig (z.B. Error-Rate > 0.1% statt 1%), alerten für jeden
Hiccup, führt zu Alert-Fatigue und ignorieren von echten Incidents.
Lösung: Baseline pro Metrik: P50/P95/P99 der normalen Varianz berechnen, Alert bei
Abweichung > 2 Standardabweichungen.

FEHLERQUELLE 2 — Duplicate Alerts an PagerDuty
Wenn Alertmanager Grouping falsch konfiguriert ist, gehen 10 identische Alerts als separate
Incidents zu PagerDuty.
Lösung: group_by obligatorisch mit relevanten Labels; Test: 10 gleiche Alerts auslösen,
sollte nur 1 Incident sein.

FEHLERQUELLE 3 — Escalation Path nicht funktionieren
Wenn On-Call-Engineer nicht antwortet und Escalation nicht automatisch triggert,
wird P0-Incident 30 Minuten lang ignoriert.
Lösung: PagerDuty Escalation-Timeout streng testen (< 5min Pro-Stufe); SMS+Push+Email
kombinieren für Notifications.

FEHLERQUELLE 4 — Alert-Timeout bei Resolving
Wenn Prometheus Auto-Resolve nicht funktioniert (z.B. Alert definiert without "resolve_timeout"),
bleibt P0-Alert 24h aktiv auch wenn Problem behoben.
Lösung: Resolve-Timeout definieren (default 5min), oder für langsam-healing Issues
manuelles Silence verwenden.

FEHLERQUELLE 5 — PagerDuty Quota überschritten
Wenn zu viele Alerts gesendet werden, kann PagerDuty-API-Rate-Limit getroffen werden,
dann werden Alerts nicht zugestellt.
Lösung: Deduplication + Throttling kombinieren; Rate-Limit-Buffer (z.B. 80% der Max-Rate).

FEHLERQUELLE 6 — Severity-Creep
Wenn zu viele P0-Alerts definiert werden (z.B. alle CPU-Alerts), verliert P0-Label Bedeutung
und wird ignoriert.
Lösung: Ratio-Check: P0 sollte < 5% aller Alerts sein; Audit monatlich.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Alert-Rules konfiguriert
  ✓ Prometheus zeigt Alert-Rules (Status: OK)
  ✓ P0, P1, P2, P3 Schwellwerte definiert
  ✓ Keine Syntax-Fehler in Alert-Expressions

Gate 2: Alertmanager funktioniert
  ✓ Alertmanager läuft und zeigt Konfiguration
  ✓ Test-Alert triggert und wird gruppiert/dedupliziert
  ✓ Resolve-Timeout funktioniert (Alert verschwindet nach Threshold-Unterschreitung)

Gate 3: PagerDuty Integration
  ✓ PagerDuty Service-Keys konfiguriert
  ✓ Test-Alert von Prometheus erstellt PagerDuty-Incident
  ✓ Incident erhält Severity-Label (critical/high/medium)

Gate 4: Eskalations-Ketten funktionieren
  ✓ Primärer On-Call erhält Alert-Notification (SMS/Push/Email)
  ✓ Nach Timeout eskaliert zu Level 2 (On-Call-Lead)
  ✓ Acknowledge in PagerDuty stoppt Eskalation

Gate 5: Deduplication/Throttling aktiv
  ✓ 10 identische Alerts = 1 Incident (nicht 10)
  ✓ Throttling-Limits pro Severity beachtet
  ✓ Silencing funktioniert (Alert verschwindet für Duration)

Gate 6: Incident-Automation triggert
  ✓ P0-Alert erzeugt automatische Actions (z.B. Auto-Scale, Slack-Notify)
  ✓ Jira-Ticket erstellt für P1-Alerts
  ✓ Webhook-Handler antwortet mit 200 OK

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-05 Abschluss:
→ Trigger PM-08 (Incident-Response): Alert-zu-Incident-Mapping dokumentieren
→ Output zu Meta-Orchestration: Severity-Schema und Alert-Routing dokumentieren
→ Input an PM-06 (Dashboard): Alert-Status in Dashboard anzeigen

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-06 — Dashboard-Design (Grafana/Datadog) SLI/SLO-Framework
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Monitoring-Daten (Prometheus, Logs, RUM), Alert-Definitions, Business-Metriken
Output:   Grafana/Datadog Dashboards mit SLI/SLO-Visualisierungen, Error-Budget-Tracking
Abhängigkeiten: Grafana/Datadog-Zugriff, Datasource-Integration (Prometheus, Loki, Sentry), Admin-Berechtigungen
Abhängig von: PM-01 (APM), PM-02 (RUM), PM-03 (Infrastruktur), PM-04 (Logs), PM-05 (Alerts)
Triggerauslöser für: PM-08 (Post-Mortem-Dashboard)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. SLI (Service Level Indicator) Definition
   - SLI = gemessene Metrik, die Service-Quality repräsentiert
   - Beispiel-SLIs:
     * Availability SLI: % der Requests mit HTTP-Status < 500
       - PromQL: sum(rate(http_requests_total{status!~"5.."}[5m])) / sum(rate(http_requests_total[5m])) * 100
     * Latency SLI: % der Requests mit < 200ms Response-Zeit
       - PromQL: sum(rate(http_request_duration_seconds_bucket{le="0.2"}[5m])) / sum(rate(http_request_duration_seconds_count[5m])) * 100
     * Error Rate SLI: % der Requests ohne Application-Error
       - PromQL: 1 - (sum(rate(http_requests_error_total[5m])) / sum(rate(http_requests_total[5m])))
   - Pro SLI: Schwellwert setzen (z.B. > 99.5% = "healthy")

2. SLO (Service Level Objective) Definition
   - SLO = Zielwert für SLI über längeren Zeitraum
   - Beispiel-SLOs:
     * Availability SLO: 99.95% für 30-Tage-Fenster (allow ~2 Minuten Downtime/Monat)
     * Latency SLO: 99% der Requests < 200ms (4h-Fenster)
     * Error Rate SLO: 99.9% error-free Requests (30-Tage)
   - SLO-Tier-Definition (fallback bei Verfügbarkeits-Problemen):
     * Tier 1 (Critical): 99.9% Availability (8.77 Stunden Downtime/Jahr)
     * Tier 2 (Standard): 99.5% Availability (43.8 Stunden Downtime/Jahr)
     * Tier 3 (Best-Effort): 95% Availability (438 Stunden Downtime/Jahr)

3. Error-Budget Calculation
   - Error Budget = (1 - SLO%) * Zeit-Fenster
   - Beispiel: 99.95% SLO für 30 Tage
     * Error Budget: 0.05% * 30 Tage = 0.05% * 43200 Minuten = ~21.6 Minuten
     * Interpretation: Wir "erlauben" 21.6 Minuten Downtime pro Monat
   - Burn-Rate: Wie schnell verbrauchen wir Error-Budget?
     * Immediate Burn-Rate: Wenn jetzt Error-Rate 50% ist, wie schnell geht Budget?
     * Formula: Burn-Rate = (Aktueller-Error%) / (SLO-Error%) = (0.5) / (0.05%) = 1000x
     * Bedeutung: Bei dieser Rate ist Monthly-Budget in Stunden aufgebraucht (1000x schneller)
   - Burn-Rate Alerts:
     * Alert Threshold: Wenn Burn-Rate > 10x für 5 Minuten → P1 Alert
     * Critical Threshold: Wenn Burn-Rate > 100x für 1 Minute → P0 Alert

4. Grafana Dashboard Setup
   - New Dashboard erstellen (oder aus Template)
   - Panel 1: Availability SLI (Gauge)
     * Query: Availability-PromQL oben
     * Threshold: 99% (green), 95% (yellow), <95% (red)
     * Unit: percent (0-100)
   - Panel 2: Latency SLI (Gauge + Trend)
     * Query: Latency-PromQL
     * Display: P50, P95, P99 Response-Time
     * Threshold: < 200ms (green)
   - Panel 3: Error-Rate (Graph + Actual-vs-SLO)
     * Query zwei Series: Actual Error-Rate vs. SLO-Threshold
     * Visual: Rote Linie bei SLO-Schwellwert
   - Panel 4: Error-Budget Burn (Gauge + Donut)
     * Query: (Total-Time - Time-Meeting-SLI) / Total-Time (%)
     * Display: "Budget Used: 35% (15 Minuten von 43 Minuten)"
   - Panel 5: Burn-Rate Heatmap (Over 30 Days)
     * Query: Burn-Rate pro Hour für letzten Monat
     * Color: Grün (< 2x), Gelb (2-10x), Rot (> 10x)
     * Zeige Stunden, in denen schneller Budget verbrannt wurde

5. Datadog Integration (Alternative zu Grafana)
   - Datadog Dashboard erstellen mit selben SLI/SLO-Panels
   - SLO-Objekts in Datadog:
     * Create SLO: Type "Metric-based" oder "Monitor-based"
     * Metric: http_availability, http_latency
     * Target: 99.95% für 30d
     * Datadog berechnet automatisch Error-Budget + Burn-Rate
   - Notification bei SLO-Breach:
     * Alert wenn SLO < 99.5% (Warning)
     * Alert wenn SLO < 99.0% (Critical)
   - SLO-Widget auf Dashboard angeheftet

6. Multi-Service SLI-Aggregation
   - Wenn multiple Services, aggregieren zu "Overall Availability":
     * Tier-1-Services (kritisch): Weight 50%
     * Tier-2-Services (wichtig): Weight 30%
     * Tier-3-Services (optional): Weight 20%
     * Overall-SLI = (Tier1-SLI * 0.5) + (Tier2-SLI * 0.3) + (Tier3-SLI * 0.2)
   - Separate SLO pro Service + Organization-Wide SLO Dashboard

7. Dashboard Alerts und Annotations
   - Alert-Marker auf Dashboard:
     * Red-Annotation wenn P0-Alert aktiv
     * Yellow-Annotation wenn P1-Alert aktiv
   - Deployment-Marker:
     * Vertikale Line bei jedem Production-Deployment
     * Tooltip: Release-Version, Commit-SHA, Deploy-Zeit
     * Nutze Sentry Release-Info für Auto-Annotationen
   - Incident-Marker:
     * Annotation bei bekannten Incidents (z.B. Database-Failover, DDoS)
     * Nutzen für Correlation-Analyse

8. Dashboard Access und Governance
   - Dashboard Sharing:
     * Org-wide (read-only für alle)
     * Team-spezifisch (Ops-Team edit, others read)
     * Public Link für Stakeholder (kein Login required)
   - Versioning: Serielles Backup der Dashboard-JSON
     * Git-Repo: dashboards/ mit JSON-Exports
     * Versioning: Dashboard-Name-version.json (api-dashboard-v1.json, v2.json)
   - Notification-Settings:
     * SLO-Breaches über Email an Team + Leadership
     * Critical-Dashboards with Auto-Refresh (5s interval für Ops)

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* grafana-sli-slo-dashboard.json — Grafana Dashboard Export (SLI/SLO-Panels)
* sli-queries.promql — Prometheus Queries für alle SLIs
* error-budget-calculator.ts — Error-Budget + Burn-Rate Berechnungen
* datadog-slo-config.yaml — Datadog SLO-Definitions (falls Datadog)
* dashboard-governance.md — SLI/SLO-Definitionen + Schwellwerte dokumentiert
* deployment-annotation-sync.ts — Script zum Auto-Annotieren von Deployments
* slo-reporting.ts — Monatliche SLO-Report-Generator für Stakeholder

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Platform-Engineers, Analytics-Team
Genehmigung erforderlich: Product-Manager (für SLO-Wert-Definition), Finance (für SLA-Commitments)
Review-Partner: Engineering-Lead (für Realistic-SLO-Targets)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Unrealistische SLO-Targets
Wenn SLO zu aggressive (z.B. 99.99% ohne Infrastruktur-Investment), wird budget
in Woche 1 aufgebraucht, dann keine Motivation weitere Alerts zu beachten.
Lösung: Historical-Baseline: Berechne was Service aktuell realistisch macht (z.B. 99.5%),
dann SLO 0.5-1% darunter setzen als Improvement-Goal.

FEHLERQUELLE 2 — SLI-Definition zu Business-fern
Wenn SLI nur "HTTP 200 Response" misst aber Business-Logik-Fehler nicht erfasst
(z.B. "Checkout-Button funktioniert aber bucht nichts"), ist Metrik wertlos.
Lösung: SLI = "Erfolgreiche Abschlüsse / Versuchte Abschlüsse" (Business-Outcome),
nicht nur "HTTP Status".

FEHLERQUELLE 3 — Error-Budget falsch berechnet
Wenn Bug im Error-Budget-Calculator existiert (z.B. Falsche Zeitzone für Monthly-Boundary),
wird SLO-Breach übersehen oder fälschlicherweise gemeldet.
Lösung: Unit-Tests für Error-Budget mit bekannten Werten (z.B. 99.95% SLO = 21.6 min/Monat);
Pre-Deployment-Verifizierung.

FEHLERQUELLE 4 — Burn-Rate-Alerts zu empfindlich
Wenn Burn-Rate Alert bei 5x triggert, sind täglich False-Positives wegen kurzer Spikes.
Lösung: 2-Window-Alerting: "Burn-Rate > 10x für 5 Minuten" (verhindert Spikes), aber auch
"Average Burn-Rate > 3x über 1 Stunde" (längerfristiger Trend).

FEHLERQUELLE 5 — Dashboard-Performance degradiert
Wenn Dashboard zu viele Queries hat (100+), wird Rendering langsam und Refresh-Verzögerung
frustriert Ops-Team.
Lösung: Panel-Limits: Max 20 Panels pro Dashboard; Queries optimieren (z.B. Range-Aggregation
statt Raw-Data); Lazy-Loading für Off-Screen-Panels.

FEHLERQUELLE 6 — SLO-Alignment zu Teams falsch
Wenn Ops-Team 99.9% SLO für API hat aber Product-Team 99.95% verspricht,
Missalignment führt zu ständigen Conflikten.
Lösung: SLO-Town-Hall monatlich: Engineering + Product + Finance diskutieren und committen.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: SLI-Definitionen dokumentiert
  ✓ Availability, Latency, Error-Rate SLIs klar definiert
  ✓ PromQL-Queries für jedes SLI funktionieren
  ✓ Schwellwerte realistische Werte haben

Gate 2: SLO-Targets gesetzt und committet
  ✓ SLO für jede SLI definiert (z.B. 99.95% Availability)
  ✓ SLO-Tiers dokumentiert (Tier 1/2/3)
  ✓ Engineering + Product + Finance haben zugestimmt

Gate 3: Error-Budget wird berechnet
  ✓ Error-Budget korrekt: (1 - SLO%) * Fenster
  ✓ Burn-Rate sinnvoll (in Unit von "Monaten pro Stunde")
  ✓ Burn-Rate Alert bei 10x+

Gate 4: Grafana/Datadog Dashboard funktioniert
  ✓ Alle SLI/SLO-Panels zeigen aktuelle Daten
  ✓ Error-Budget-Donut zeigt korrekten %-Verbrauch
  ✓ Deployment-Annotations sichtbar

Gate 5: Alerting auf SLO-Breach
  ✓ Alert wenn SLO < 99.0% (Critical)
  ✓ Alert wenn Burn-Rate > 10x für 5 Min
  ✓ Notifications an Team konfiguriert

Gate 6: Reporting automatisiert
  ✓ Monatlicher SLO-Report generiert
  ✓ Report zeigt: Achieved-vs-Target, Error-Budget-Status
  ✓ Report an Stakeholder versendet

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-06 Abschluss:
→ Trigger PM-07 (Synthetic Monitoring): Synthetic-Checks zur SLO-Validierung
→ Output zu Meta-Orchestration: SLI/SLO-Schema dokumentieren
→ Input an PM-08: Error-Budget-Status in Post-Mortem-Analysen einbeziehen

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-07 — Synthetic Monitoring (Health-Checks, API-Monitoring, SSL)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Production-Services (APIs, Websites), DNS, SSL-Zertifikate
Output:   Synthetic-Überwachung mit Endpoint-Tests, SSL-Cert-Alerts, DNS-Validierung
Abhängigkeiten: Synthetic-Monitoring-Service (UptimeRobot, Statuspage, Pingdom), DNS-Access
Abhängig von: PM-03 (Infrastruktur), PM-05 (Alerting)
Triggerauslöser für: PM-08 (Incident-Response)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. API-Endpoint Health-Check Definition
   - /health-Endpoints auf allen Tiers:
     * Layer 1 — Prozess-Level: GET /health (Response: 200 + { status: 'healthy' })
     * Layer 2 — Abhängigkeits-Level: GET /readiness (Prüft DB, Redis, External-APIs)
     * Layer 3 — Business-Level: GET /liveness (Prüft Business-Logic, z.B. Checkout-Capability)
   - Health-Check Implementierung (Express):
     ```typescript
     app.get('/health', (req, res) => {
       res.json({ status: 'healthy', timestamp: new Date().toISOString(), uptime: process.uptime() });
     });

     app.get('/readiness', async (req, res) => {
       const checks = {
         database: await checkDatabaseConnection(),
         redis: await checkRedisConnection(),
         externalApi: await checkExternalAPIHealth()
       };
       const allHealthy = Object.values(checks).every(c => c.healthy);
       res.status(allHealthy ? 200 : 503).json(checks);
     });
     ```

2. Synthetic-Monitor Setup (UptimeRobot/Statuspage)
   - API-Endpoint-Monitors:
     * Endpoint: https://api.example.com/health
     * Method: GET
     * Interval: 5 Minuten (Production), 15 Minuten (Staging)
     * Timeout: 10 Sekunden
     * Response-Validation: Status-Code 200, JSON { status: 'healthy' }
     * Alert: Down für > 5 Minuten → P1 Alert
   - Kritische Endpoints Zusätzlich:
     * POST /api/checkout — Checkout-Prozess (synthetisches Order)
     * GET /api/search?q=test — Search-Funktionalität
     * POST /api/login — Authentication-Flow
   - Monitor-Locations: Global verteilt (USA, Europe, Asia)
     * So dass Geo-specific Outages erkannt werden

3. Website-Monitoring (Full-Page Synthetic Tests)
   - Browser-Based Monitoring (z.B. Datadog Synthetics oder UptimeRobot)
   - Monitore:
     * Homepage-Load-Test: Get / → Response < 2s, CSS loaded, JS executed
     * Critical-Flow: Login → Browse-Products → Add-to-Cart
     * Checkout-Flow: Start → Payment-Page → Order-Success
   - Test-Profile:
     * Desktop Chrome (1920x1080)
     * Mobile Safari (375x667, slow 3G network)
   - Assertions pro Test:
     * HTTP Status 200
     * Page-Load-Time < 3s (synthetic)
     * DOM-Element "#checkout-button" vorhanden
     * Text "Order Confirmed" auf Success-Page

4. SSL-Zertifikat-Überwachung
   - Zertifikat-Expiry-Monitor:
     * Endpoint: https://example.com
     * Prüfe: SSL-Cert expiriert in > 30 Tagen? ✓
     * Prüfe: SSL-Cert valide (Hostname match, Trust-Chain)
     * Prüfe: TLS-Version >= 1.2
   - Automatische Alerts:
     * Alert wenn Cert in 30 Tagen expiriert → P2
     * Alert wenn Cert in 7 Tagen expiriert → P1
     * Alert wenn Cert ungültig/selbstsigniert → P0
   - Automation: Auto-Renewal mit Let's Encrypt (certbot)
     * Cron: Täglich laufen, renew wenn < 30 Tage bis Expiry
     * Verify: Nach Renewal alle https-Endpoints überprüfen

5. DNS-Monitoring
   - DNS-Resolution-Tests:
     * Hostname: example.com
     * Expected-IP: 1.2.3.4 (A-Record)
     * Expected-MX: mail.example.com
     * Interval: Täglich
   - DNS-Propagation-Check (bei Updates):
     * Neue DNS-Change (z.B. CDN-CNAME) Propagation validieren
     * Global-Resolvers: Google, Cloudflare, Quad9
     * Alert wenn nicht konsistent propagiert nach 1 Stunde

6. Load-Test für Synthetic Monitoring (Optional)
   - Gelegentliche Last-Tests (z.B. wöchentlich):
     * k6, Apache JMeter oder Artillery
     * Simuliere: 100 gleichzeitige Users
     * Test-Szenario: Anmelden, Suche, Checkout
     * Ziel: Response-Time < 500ms auch unter Last

7. Status-Page Integration
   - Public Status-Page (Statuspage.io oder selbstgehostet):
     * Auto-Trigger: Wenn Synthetic-Monitor down → Status auf "Investigating"
     * Manual-Trigger: Engineering-Team kann Status-Incident erstellen
     * Timeline: Auto-Populate mit Monitoring-Events
     * Communication: Auto-Post zu Twitter/Slack bei Major-Outages
   - Komponenten auf Status-Page:
     * API
     * Website
     * Payment-Processing
     * External-Integrations

8. SLA-Reporting basierend auf Synthetic-Tests
   - Monatlicher Uptime-Report:
     * Calculated: (Time Service Was UP) / (Total Time) * 100
     * UP definiert als: Health-Check successful + 2xx Response + < 2s Response-Time
     * Report zeige: Day-by-Day Uptime, Downtime-Events mit Duration
   - SLA-Dashboards:
     * 99.9% SLA (8.77h Downtime/Jahr)
     * 99.95% SLA (4.38h Downtime/Jahr)
     * 99.99% SLA (52m Downtime/Jahr)

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* health-check-endpoints.ts — Express /health, /readiness, /liveness Implementierung
* synthetic-monitor-config.json — UptimeRobot/Statuspage Monitor-Definitionen
* ssl-cert-monitor.ts — SSL-Zertifikat-Check-Script
* dns-validation.ts — DNS-Resolution-Validierung
* status-page-integration.ts — Status-Page API-Integration
* synthetic-test-scenarios.js — k6/Artillery Load-Test Scripts
* uptime-reporting.ts — Monatlicher Uptime-Report-Generator

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevOps, Platform-Engineers
Genehmigung erforderlich: Engineering-Lead (für Health-Check-Szenarios)
Review-Partner: Customer-Success (für Status-Page-Publikation)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Synthetische Tests zu unrealistisch
Wenn Synthetic-Test nur /health checkt aber nicht tatsächliche User-Workflows,
wird Outage übersehen (z.B. Checkout broken aber /health 200).
Lösung: Mehrere Synthetic-Tests pro Tier (Process-Level, Dependency-Level, Business-Level);
Checkout-Test sollte tatsächliche Order-Creation mit Test-Card durchlaufen.

FEHLERQUELLE 2 — False Positives durch Slow-Networks
Wenn Synthetic-Monitor in Slow-Network (z.B. 3G in Asien) läuft und Timeout
zu kurz (z.B. 5s), triggert ständig False-Alerts.
Lösung: Separate Monitor-Locations für Slow-Networks mit längeren Timeouts;
oder akzeptiere Geo-specific-Varianz in Alerting (Alert nur wenn 50%+ Locations down).

FEHLERQUELLE 3 — SSL-Cert-Renewal fällt durch Cracks
Wenn certbot Auto-Renewal fehlschlägt (z.B. DNS-Challenge fail) und manuell
nicht überprüft wird, expiriert Cert und bricht HTTPS.
Lösung: certbot mit Webhook triggern auf Slack-Notification bei Failure;
SSL-Monitor alert bei < 7 Tagen zur Expiry (Backup zur Auto-Renewal).

FEHLERQUELLE 4 — Status-Page Desynchronization
Wenn Status-Page Auto-Integration broken ist, zeigt Status-Page "UP" aber
Service ist actually DOWN (Kunde sieht false-positive Status).
Lösung: Daily-Test dass Status-Page Incidents aktuell sind; Manual-Override-Capability.

FEHLERQUELLE 5 — Synthetic-Monitor nicht Representative
Wenn Synthetic-Test in privilegierter Umgebung läuft (z.B. VPN, lokale Dev-Server),
aber Real-User außerhalb VPN connectet, ist Test nicht aussagekräftig.
Lösung: Synthetic-Tests IMMER von Public-Internet laufen; Keine VPN/Whitelist-Zugriffe.

FEHLERQUELLE 6 — Health-Check-Endpoint zu teuer
Wenn /health-Endpoint alle Abhängigkeiten syncron prüft (Database-Query, External-API-Call),
wird Endpoint selbst zum Bottleneck und SlowDown führt zu False-Alert.
Lösung: Health-Check Cache (z.B. 30s): /health für 30s alte Cached-Werte nutzen;
Asynchroner Check im Hintergrund, nicht im Request-Path.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Health-Check-Endpoints funktionieren
  ✓ GET /health antwortet mit 200 + valid JSON (< 100ms)
  ✓ GET /readiness prüft Abhängigkeiten und antwortet 200/503
  ✓ GET /liveness prüft Business-Logik und ist performant

Gate 2: Synthetic-Monitors aktiv
  ✓ UptimeRobot/Statuspage zeigt alle Monitors als "OK"
  ✓ API-Health-Check Monitor läuft alle 5 Min erfolgreich
  ✓ Website-Synthetic-Test (Checkout-Flow) funktioniert

Gate 3: SSL-Zertifikat-Überwachung
  ✓ SSL-Monitor prüft Cert-Expiry erfolgreich
  ✓ Alert gesetzt für 30/7 Tage vor Expiry
  ✓ certbot Auto-Renewal läuft und erneuert erfolgreich

Gate 4: DNS-Monitoring
  ✓ DNS-Resolution-Test prüft A-Records erfolgreich
  ✓ DNS-Propagation nach Change überprüft
  ✓ Alert bei DNS-Änderungen konfiguriert

Gate 5: Status-Page aktuell
  ✓ Status-Page zeigt aktuelle Service-Status
  ✓ Downtime-Events auf Status-Page sichtbar
  ✓ Auto-Integration (Monitoring → Status-Page) funktioniert

Gate 6: Uptime-Reporting
  ✓ Monatlicher Uptime-Report generiert
  ✓ Report zeigt Achieved-vs-SLA-Target
  ✓ Report-Audit accessible für Finance

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-07 Abschluss:
→ Trigger PM-08 (Incident-Response): Synthetic-Test-Results in Incident-Timelines nutzen
→ Output zu Meta-Orchestration: Health-Check-Schema dokumentieren
→ Input an Status-Page: Monitoring-Integration vollständig

═══════════════════════════════════════════════════════════════════════════════

PHASE PM-08 — Incident-Response Management & Post-Mortem
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Production-Incident (Alert ausgelöst, Service Down), Monitoring-Daten
Output:   Incident-Timeline, Post-Mortem-Report, Action-Items für Prevention
Abhängigkeiten: Runbook-Templates, Post-Mortem-Tool (Jira, Confluence, Google Docs), MTTR/MTTA-Tracking
Abhängig von: PM-01 bis PM-07 (Alle vorherigen Monitoring-Phasen)
Triggerauslöser für: Retrospektive & Process-Improvement

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Incident-Detection und Initial-Response (Erste 5 Minuten)
   - Alert triggert (P0/P1) → PagerDuty notifiziert On-Call
   - On-Call acknowledges Alert in PagerDuty (stoppt Eskalation)
   - Slack-Channel #incident-[SERVICE] auto-erstellt
   - Initial-Message in Channel:
     * Alert-Name, Severity, Time of Detection, First-Metric-Changes
     * Status: "INVESTIGATING"
   - Incident-Record erstellen (mit Auto-ID: INC-2025-04-05-001)

2. Incident-Commander Designation (Erste 10 Minuten)
   - Wer ist Incident-Commander (IC)?
     * Normalerweise: Nächster verfügbare Senior-Engineer
     * Kommuniziert Status-Updates to #incident-channel
     * Koordiniert Debugging-Effort
   - IC Responsibilities:
     * Ruf zusätzliche Engineers ein falls needed
     * Eskaliere zu Manager falls critical
     * Post zu Status-Page bei Customer-Impact
     * Definiere Resolution-Criteria (wann ist Incident "over"?)

3. Incident-Triage und Root-Cause-Hypothesis (5-30 Minuten)
   - Debugging-Sequence (basierend auf Service-Type):
     * API Down: Prüfe Health-Endpoint, logs für Crashes, Infrastruktur-Metriken
     * Database-Lag: Prüfe Query-Performance, Locks, Disk-Space
     * Memory-Leak: Prüfe Heap-Size, GC-Logs, Memory-Trend
   - Runbook-basierte Debugging:
     * Service hat runbook (z.B. api-service-runbook.md)
     * Runbook enthält "Decision Tree":
       - Is Service-Process running? → systemctl status api
       - Is Database Connected? → SELECT 1;
       - Is Memory usage normal? → top, free -h
   - Hypothesis dokumentieren:
     * "Hypothesis: Database Connection-Pool exhausted after deployment"
     * Evidence: logs zeigen "Too many connections"
   - If Quick-Fix identifiziert (z.B. Cache-Clear, Restart):
     * Implement mit Caution (Document every step)
     * Test dass Fix nicht weitere Issues verursacht
     * Notify #incident-channel nach Fix

4. Mitigation vs. Root-Cause-Fix (Entscheidungspunkt)
   - Mitigation: Schnelle Lösung um Service zu restoren (z.B. Restart, Rollback)
     * Zeit: < 15 Minuten
     * Akzeptabel wenn: Business-Impact sehr hoch, Root-Cause unbekannt
     * Beispiel: Rollback zu vorherige Version wenn neuer Deployment broken
   - Root-Cause-Fix: Echte Behebung (z.B. Code-Fix, Deployment korrigiert)
     * Zeit: 30 Minuten - mehrere Stunden
     * Bevorzugt falls Mitigation Zeit längerwürde (> 30 Min)
   - Parallel Approach: Mitigation sofort, Root-Cause-Fix in Hintergrund
     * Mitigate (5 min) → Service restored → Later Fix Root-Cause (1-2h) → Redeploy

5. Incident-Timeline Dokumentation (Laufend)
   - Chronologische Events-Liste:
     * 12:34 — Alert triggert (Error-Rate > 5%)
     * 12:35 — IC assigned (Engineer A)
     * 12:37 — Initial hypothesis: New deployment caused memory leak
     * 12:42 — Mitigation: Rollback to v1.2.3
     * 12:45 — Service restored, Error-Rate < 0.1%
     * 12:50 — Root-Cause-Analysis started (Engineer B investigating)
     * 13:15 — Root-Cause identified: Object-Pool not freed after request
     * 13:30 — Fix deployed (v1.2.4 with Pool-Fix)
     * 13:35 — Monitoring confirms no Error-Rate regression
   - Automation: Parse PagerDuty-Timeline, Sentry-Events, Git-Commits für Auto-Annotation

6. Impact Assessment
   - Betroffene Komponenten: API, Website, Dashboard, etc.
   - Betroffene Nutzer: Estimated % of User-Base oder absolute Numbers
   - Duration: Start-Zeit bis Resolution-Zeit (SLA-Messung)
   - Business-Impact: Revenue-Loss (wenn quantifizierbar), Feature-Unavailability
   - Severity Mapping:
     * P0: Service-Outage > 15 Minuten, > 50% Nutzer betroffen → Severity-1 Incident
     * P1: Degradation, > 5 Minuten → Severity-2
     * P2: Minor-Issue, < 5 Minuten → Severity-3

7. Blameless-Culture in Incident-Response
   - Core-Prinzipien:
     * Ziel: System-Verbesserung, nicht Person-Blaming
     * Annahme: Engineers arbeiten mit besten Absichten und Information
     * Focus: "Wie war das System schwach?" nicht "Wer machte den Fehler?"
   - Praktiken:
     * Keine Vorwürfe in #incident-Channel ("Who deployed broken code?")
     * Post-Mortem-Meetings sind Safe-Spaces
     * Keine Disziplin basierend auf einzelnem Incident
     * Kultur: "Mistakes are learning opportunities"

8. Resolution und Verification (30+ Minuten nach Start)
   - Service-Verifizierung:
     * Health-Check erfolgreich
     * Synthetic-Monitors zeigen "UP"
     * Key-Metrics (Error-Rate, Latency) normal
     * Stichproben-Requests manuell durchgeführt
   - Customer Communication:
     * Status-Page Update: Status → "Resolved"
     * Public-Message: "Service restored at 13:35 UTC. We apologize for the outage."
     * Post-mortem Link falls verfügbar
   - Incident-Closure:
     * PagerDuty-Incident resolve
     * #incident-channel archive
     * MTTR-Metrik: 12:34 - 13:35 = 61 Minuten

9. Post-Mortem-Prozess (24 Stunden nach Resolution)
   - Post-Mortem-Dokument erstellen (Template):
     ```
     TITLE: [Incident Title]
     DATE: [Date]
     SEVERITY: Severity-1/2/3
     DURATION: 61 minutes (12:34 - 13:35 UTC)

     SUMMARY:
     [1-2 Paragraphs beschreibt was passiert ist]

     TIMELINE:
     [Detaillierte chronologische Liste]

     ROOT-CAUSE ANALYSIS:
     [Warum ist es passiert?]

     CONTRIBUTING FACTORS:
     [System-Schwächen, nicht Person-Blaming]
     - Monitoring war nicht sensitiv genug für Memory-Leak
     - Deployment-Test-Suite prüfte nicht Memory-Leaks
     - Runbook-Dokumentation war nicht aktuell

     ACTION ITEMS:
     [Konkrete Steps zur Prevention]
     1. Add Memory-Leak Detection zu Synthetic-Tests (Owner: Eng-Team, Due: 1 week)
     2. Update Runbooks für Memory-Debugging (Owner: IC, Due: 3 days)
     3. Add Heap-Size Alert bei > 500MB (Owner: Ops, Due: ASAP)

     LESSONS LEARNED:
     [Was haben wir gelernt?]
     ```

10. MTTR/MTTA Tracking
    - MTTA (Mean Time To Acknowledge) = Durchschnittliche Zeit bis Alert acknowledge
      * Beispiel: P0-Alert durchschnittlich 2 Minuten bis acknowledge
      * Target: < 5 Minuten für P0, < 15 Minuten für P1
    - MTTR (Mean Time To Resolve) = Durchschnittliche Zeit bis Resolution
      * Beispiel: Durchschnittlich 45 Minuten zur Resolution
      * Target: < 30 Minuten für P0 (SLA), < 2 Stunden für P1
    - Trend-Tracking monatlich:
      * Sind MTTR/MTTA improving oder degrading?
      * Falls degrading: Analyze root-causes (Insufficient-Runbooks? Skill-Gaps? Tool-Issues?)

11. Incident-Retrospective (1 Woche nach Resolution)
    - Ganze Team-Meeting (30-60 Min):
      * Lese Post-Mortem zusammen
      * Diskutiere Action-Items
      * Priorisiere nach Impact × Effort
      * Assign Owner und Due-Date
    - Action-Items tracking:
      * Weekly-Check-In: Sind wir auf Schedule?
      * Blockers: What's preventing completion?
      * Metriken: Nach Action-Item-Completion, beobachte MTTR-Improvement

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* incident-runbook-template.md — Template für Service-spezifische Runbooks
* post-mortem-template.md — Post-Mortem-Dokument-Template
* incident-response-guide.md — Schritt-für-Schritt-Anleitung für IC/Teams
* mttr-dashboard.ts — MTTR/MTTA-Tracking und Trend-Analyse
* incident-timeline-parser.ts — Auto-Parse PagerDuty/Git-Events für Timeline
* api-service-runbook.md — Beispiel-Runbook für API-Service
* database-service-runbook.md — Beispiel-Runbook für Database-Service
* slack-incident-bot.ts — Slack-Bot für Incident-Management (Timeline, Updates)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: SRE-Team, Engineering-Lead (IC-Coordinator)
Genehmigung erforderlich: Manager (für Resource-Allocation bei Major-Incidents)
Review-Partner: Product-Manager (für Customer-Communication)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Runbooks unaktuell oder unvollständig
Wenn Runbook-Debugging-Steps nicht funktionieren (z.B. "systemctl status api" but Service
ist jetzt Docker-Container), IC verliert Zeit und MTTR degradiert.
Lösung: Runbook-Review monatlich; Test-Runbooks in Staging vor Production-Incident.

FEHLERQUELLE 2 — Blameless-Culture gebrochen
Wenn Manager nach Incident fragt "Wer hat den Bug gemacht?", Kultur bricht zusammen
und Engineers werden defensive (Hiding-Probleme statt Fixing).
Lösung: Explicit-Cultural-Training; Manager-Memo dass Incidents Lernchancen sind,
nicht Disziplin-Opportunities.

FEHLERQUELLE 3 — Action-Items nach Post-Mortem nicht tracked
Wenn Action-Items definiert aber 3 Wochen später niemand weiß ob sie done sind,
werden gleiche Incidents wiederholt.
Lösung: Jedes Action-Item hat Owner + Due-Date; Weekly-Standup checkt Status;
Incomplete Items nach Due-Date → Eskalation.

FEHLERQUELLE 4 — Timeline dokumentiert schlecht
Wenn Incident-Dokumentation lückenhaft ist (z.B. "12:40 - Something was done"),
sind später Lessons-Learned unmöglich.
Lösung: Strukturierte Timeline-Anforderung: [Time] - [Who] - [Action] - [Result];
Automation: Parse Git-Commits, PagerDuty-Events, Logs für Auto-Annotation.

FEHLERQUELLE 5 — Impact Assessment zu ungenau
Wenn gesagt "Service war down" aber Customer-Sicht war "API noch responding aber
slow", ist Incident-Severity unterschätzt.
Lösung: Multi-perspective Impact-Assess: Monitoring-Metriken, Customer-Reports,
Error-Logs, Performance-Metrics alle kombinieren.

FEHLERQUELLE 6 — MTTR/MTTA nicht actionable
Wenn nur "MTTR 45 Minuten" getracked wird aber keine Trend/Warum, sind Metriken
wertlos.
Lösung: MTTR + Distribution (was sind Quartile?), + Trend (improving?), + Analysis
(warum ist Distribution so breit?).

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Incident-Runbooks vorhanden
  ✓ Für jede kritische Service existiert Runbook
  ✓ Runbooks haben Decision-Trees (z.B. "Is service up? Yes/No")
  ✓ Runbooks wurde kürzlich getestet (< 1 Monat)

Gate 2: Incident-Response-Prozess definiert
  ✓ IC-Designation-Prozess dokumentiert
  ✓ #incident-channel Auto-Creation funktioniert
  ✓ Escalation-Path (IC → Manager) definiert

Gate 3: Post-Mortem durchgeführt
  ✓ Incident-Report-Template verwendet
  ✓ Root-Cause dokumentiert (nicht oberflächlich)
  ✓ Action-Items konkret und assigned

Gate 4: Blameless-Culture etabliert
  ✓ Post-Mortem-Meetings sicher und construktiv
  ✓ Keine Disziplin basierend auf einzelnem Incident
  ✓ Team spricht über Incidents reflektiv

Gate 5: Action-Items tracked
  ✓ Action-Items in Jira oder ähnlich tracked
  ✓ Weekly-Updates auf Status
  ✓ Completion verlinkt zu Metrics-Improvement

Gate 6: MTTR/MTTA Metriken
  ✓ MTTR für letzte 10 Incidents gemessen
  ✓ MTTA gemessen
  ✓ Trends analysiert (improving/stable/degrading?)

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem PM-08 Abschluss:
→ Schließe Production-Monitoring-Pipeline
→ Input zu Meta-Orchestration: Incident-Schema und Metrics dokumentieren
→ Kontinuierliches Feedback-Loop: Post-Mortems informieren Runbook-Updates, Alert-Tuning, Architecture-Improvements

═══════════════════════════════════════════════════════════════════════════════

METRIKEN & KPIs: PRODUCTION-MONITORING-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

SERVICE-LEVEL INDICATORS (SLIs)
─────────────────────────────────────────────────────────────────────────────

* Availability: % Requests mit HTTP-Status < 500 (Zielwert: > 99.9%)
* Latency: P95 Response-Time in Millisekunden (Zielwert: < 200ms)
* Error Rate: % Requests ohne Application-Error (Zielwert: > 99.9%)
* Error-Budget Burn-Rate: Wie schnell Error-Budget verbraucht (Zielwert: < 2x/day)

OPERATIONAL METRICS
─────────────────────────────────────────────────────────────────────────────

* MTTR (Mean Time To Resolve): Durchschnittliche Zeit bis Incident-Lösung (Zielwert: < 30 Min für P0)
* MTTA (Mean Time To Acknowledge): Durchschnittliche Zeit bis On-Call-Acknowledge (Zielwert: < 5 Min)
* Alert-Noise: % False-Positive Alerts (Zielwert: < 10%)
* On-Call-Burden: Alerts pro On-Call-Schicht (Zielwert: < 5 pro Nacht)

INFRASTRUCTURE METRICS
─────────────────────────────────────────────────────────────────────────────

* CPU-Usage: Average / Max (Zielwert: < 70% average, < 90% peak)
* Memory-Usage: Used / Available (Zielwert: < 80% used)
* Disk-Space: Free % (Zielwert: > 20%)
* Network-Bandwidth: In/Out utilization (Zielwert: < 70%)

LOGGING METRICS
─────────────────────────────────────────────────────────────────────────────

* Log-Volume: Events/sec in Aggregator (Zielwert: < 10k/sec)
* Log-Retention-Cost: $/Month für Log-Storage (Zielwert: Budget within)
* Log-Query-Performance: Median-Time für Kibana/Grafana-Queries (Zielwert: < 2s)

SYNTHETIC MONITORING METRICS
─────────────────────────────────────────────────────────────────────────────

* Uptime %: Service-Availability via Synthetic-Tests (Zielwert: > 99.9%)
* Synthetic-Test-Duration: Performance von Health-Checks (Zielwert: < 100ms)
* SSL-Cert-Days-To-Expiry: Tracking Cert-Lifecycle (Zielwert: > 30 days warning threshold)

═══════════════════════════════════════════════════════════════════════════════

KONFIGURATIONS-SPEZIFIKATION: PRODUCTION-MONITORING-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

ERFORDERLICHE UMGEBUNGSVARIABLEN
─────────────────────────────────────────────────────────────────────────────

SENTRY_DSN=https://xxxxxxxxxxxx@yyyyyy.ingest.sentry.io/zzzz
SENTRY_ENVIRONMENT=production|staging|development
SENTRY_TRACES_SAMPLE_RATE=0.1
SENTRY_REPLAY_SESSION_SAMPLE_RATE=0.1
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE=1.0

PROMETHEUS_SCRAPE_INTERVAL=15s
PROMETHEUS_EVALUATION_INTERVAL=15s
PROMETHEUS_STORAGE_RETENTION=30d

PINO_LOG_LEVEL=info|debug|warn|error
LOG_ROTATION_DAILY=true
LOG_RETENTION_DAYS=30

PAGERDUTY_INTEGRATION_KEY=xxx
PAGERDUTY_SERVICE_ID=xxx

GRAFANA_ADMIN_PASSWORD=xxx
GRAFANA_DATASOURCE_PROMETHEUS_URL=http://prometheus:9090

ERFORDERLICHE PORTS
─────────────────────────────────────────────────────────────────────────────

* 3000 — Express Application
* 9090 — Prometheus Server
* 9100 — Node Exporter
* 3100 — Loki (Log-Aggregator)
* 3000 — Grafana Dashboard
* 9101 — Custom Application-Metrics Exporter

ABHÄNGIGKEITS-MATRIX
─────────────────────────────────────────────────────────────────────────────

| Phase | Abhängig von | Triggerauslöser für |
|-------|--------------|-------------------|
| PM-01 | - | PM-02, PM-05 |
| PM-02 | PM-01 | PM-06 |
| PM-03 | PM-01 | PM-05, PM-06 |
| PM-04 | PM-01, PM-03 | PM-05, PM-06 |
| PM-05 | PM-01, PM-03, PM-04 | PM-08 |
| PM-06 | PM-01, PM-02, PM-03, PM-04, PM-05 | PM-08 |
| PM-07 | PM-03, PM-05 | PM-08 |
| PM-08 | PM-01 bis PM-07 | Retrospektive |

═══════════════════════════════════════════════════════════════════════════════

Ende des PRODUCTION-MONITORING-PIPELINE-Dokuments
