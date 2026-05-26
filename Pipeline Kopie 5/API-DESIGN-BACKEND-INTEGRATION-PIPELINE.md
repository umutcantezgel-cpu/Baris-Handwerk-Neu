===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-15 (EXPANSION-PHASE-05), vor SEQ-16 (EXPANSION-PHASE-06)
BLOCK-NUMMER: 05 (API-BACKEND-INTEGRATION)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-expansion-context.md (Routen, Datenmodelle, Formulare)
  - .ai-db-context.md (Schema, Generated Types, Migrations-Status)
AUSGANGS-KONTEXTDATEI: .ai-api-context.md
AUSGANGS-TRIGGER: SEQ-16 (EXPANSION-PHASE-06) darf erst starten, wenn API-10
  erfolgreich abgeschlossen, alle API-Routes antworten korrekt, Zod-Validierung
  aktiv, Rate-Limiting funktional und Auth-Flow E2E getestet ist.
DEFEKT-RUECKFUEHRUNG: Bei Defekten in dieser Pipeline wird der Loop ab API-01
  neu gestartet, anschliessend alle abhaengigen Phasen ab SEQ-16.

===============================================================================



ANTIGRAVITY PIPELINE-SYSTEM: API-DESIGN UND BACKEND-INTEGRATION-PIPELINE

═══════════════════════════════════════════════════════════════════════════════
EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════════════════════════

Diese 10-Phasen-Pipeline definiert die Architektur, Implementierung, Sicherung und Observability eines produktionsreifen API-Systems auf Basis von Next.js, TypeScript, Prisma und modernen DevOps-Praktiken. Die Pipeline verfolgt das Ziel, eine vollständig typsichere, hochperformante und wartbare Backend-Integration zu etablieren, die sowohl Sicherheit als auch Developer Experience maximiert.

Jede Phase ist chirurgisch strukturiert und erzwingt durch explizite Trigger-Mechanismen einen deterministischen Handoff zur nächsten Phase. Der Infinite Optimizing Loop wird durch kontinuierliche Observability und Metriken-Feedback geschlossen.

SSOT-ANKER: Der Quellcode ist die Single Source of Truth. Alle Spezifikationen sind Code-nah und Implementierungs-validiert.

═══════════════════════════════════════════════════════════════════════════════
PHASE API-01 — API-ROUTE-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - Projekt-Anforderungen (Feature-Specification, Datenmodell-Skizzen)
  - Next.js 15+ Projekt-Setup (App Router aktiv)
  - Zielgruppe: Web-Clients, Mobile-Clients, Third-Party-Integratoren

OUTPUT:
  - Verzeichnisstruktur app/api/v1/[resource]/route.ts
  - REST-Endpoint-Matrix (GET, POST, PUT, PATCH, DELETE)
  - Middleware-Chain-Dokumentation
  - TypeScript-Interfaces für Request/Response

ABHAENGIGKEITEN:
  - Next.js App Router (erforderlich >= v13)
  - Node.js Runtime (18+)
  - TypeScript Compiler (5.0+)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. VERZEICHNIS-STRUKTUR-BOOTSTRAP
   Analysiere die bestehende Projekt-Struktur. Erstelle unter app/ folgende Hierarchie:
   app/api/v1/users/route.ts
   app/api/v1/users/[id]/route.ts
   app/api/v1/products/route.ts
   app/api/v1/products/[id]/route.ts
   app/api/v1/orders/route.ts
   app/api/v1/orders/[id]/route.ts
   app/middleware.ts (zentrale Middleware-Chain)

2. REST-MATRIX-DEFINITION
   Dokumentiere für jede Ressource (users, products, orders, etc.) die Operationen:
   GET   /api/v1/users        → Listet alle Benutzer mit Pagination (limit, offset, sort)
   GET   /api/v1/users/[id]   → Einzelnen Benutzer abrufen
   POST  /api/v1/users        → Neuen Benutzer erstellen
   PUT   /api/v1/users/[id]   → Benutzer vollständig aktualisieren
   PATCH /api/v1/users/[id]   → Benutzer partiell aktualisieren
   DELETE /api/v1/users/[id]  → Benutzer löschen (soft-delete oder hard-delete policy)

3. REQUEST-RESPONSE-LIFECYCLE-DOKUMENTATION
   Definiere den Durchsatz eines typischen Requests:
   Client Request → Middleware (Auth, CORS, Logging) → Route Handler → Validierung → Business Logic → DB Query → Response Serialization → Response Envelope → Client
   Identifiziere jeden Punkt, wo Fehler auftreten können und dokumentiere Error-Paths.

4. MIDDLEWARE-CHAIN-ARCHITEKTUR
   Implementiere Next.js middleware.ts mit folgenden Schichten (in Reihenfolge):
   - Request-Logging (Request-ID, Timestamp, Method, Path)
   - CORS-Validierung (Allowed Origins)
   - Request-Size-Limits (multipart, json maxBodySize)
   - Content-Type-Validierung
   - User-Agent-Parsing
   - Rate-Limit-Pre-Check (Redis-Lookup für IP/User)
   - Authentication-Passthrough (Token-Extraction, nicht Validierung)
   - Context-Propagation (x-request-id, x-user-id in Headers)

5. TYPWÄCHTER-INTEGRATION
   Kreiere separaten Ordner lib/types/api/:
   lib/types/api/common.ts → Common Types (Pagination, ErrorResponse, SuccessEnvelope)
   lib/types/api/users.ts → User-spezifische Types
   lib/types/api/products.ts → Product-spezifische Types
   Alle Types müssen als TypeScript interfaces definiert sein, später für Zod-Schemas zu erweitern.

6. ROUTE-HANDLER-BOILERPLATE
   Implementiere einen generischen Boilerplate für alle Route-Handler:
   export async function GET(request: Request, context: { params: { id: string } }) {
     const requestId = request.headers.get('x-request-id') || generateUUID();
     const user = await getCurrentUser(request);
     // Input Validation, Business Logic, DB Query, Response Envelope
   }

7. QUERY-PARAMETER-HANDLING
   Definiere eine strikte Policy für Query-Parameter:
   - limit (number, max 100, default 20)
   - offset (number, min 0, default 0)
   - sort (string, format: "field:asc|desc", validierte Field-Liste)
   - filter (string, JSON-serialisiert oder key=value pairs)
   - include (string, comma-separated nested resources)
   Dokumentiere für jeden Endpoint, welche Query-Parameter erlaubt sind.

8. PATH-PARAMETER-VALIDIERUNG
   Erstelle eine Validierungs-Utility für [id] Parameter:
   - UUIDs: Regex /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
   - Slugs: Alphanumeric + Hyphen
   - Numeric IDs: Positive Integers
   Beende früh mit 400 Bad Request, wenn Validierung fehlschlägt.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- app/api/v1/ Verzeichnis mit allen Route-Dateien (route.ts pro Ressource)
- lib/types/api/ mit allen TypeScript-Interfaces
- app/middleware.ts mit Middleware-Chain
- docs/API-ROUTING-MATRIX.md mit REST-Matrix
- lib/utils/request-context.ts (Utility für Request-ID Propagation)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Backend-Lead / API-Architect
ZEIT-ESTIMATE: 16 Stunden (Verzeichnisstruktur, Boilerplate, Dokumentation)
KRITIKALITÄT: P0 (Blockiert alle nachfolgenden Phasen)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Antizipiere Load-Balancing: Sind die Routes stateless für Horizontal-Scaling?
- Dokumentiere jeden Endpoint für OpenAPI-Generator (wird in API-02 für zod-to-openapi benötigt)
- Definiere ein Naming-Schema für alle Error-Codes (API_01_* für Phase 1)
- Überlege: Brauchst du Webhooks oder nur Request-Response? Falls Webhooks: Separate Verzeichnis app/api/webhooks/
- Cache-Invalidation-Strategien: Welche Endpoints sind idempotent, welche haben Side Effects?

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API01-VG001  | Alle Routes haben explizite GET/POST/PUT/PATCH/DELETE | MUST      |
| API01-VG002  | Middleware-Chain ist in middleware.ts registriert    | MUST      |
| API01-VG003  | Request-ID wird in allen Responses propagiert        | MUST      |
| API01-VG004  | Query-Parameter-Policy dokumentiert per Endpoint     | SHOULD    |
| API01-VG005  | TypeScript-Interfaces für alle Request/Response      | MUST      |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Alle VG-MUST-Gates sind bestanden. Routes sind funktional getestet (GET/POST/PUT/PATCH/DELETE auf Minimalbeispiel).

Trigger: Phase API-02 (TYPSICHERE CONTRACTS)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-02 — TYPSICHERE CONTRACTS
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - API-Routing-Struktur von Phase API-01
  - Prisma-Schema (vorausgesetzt existent)
  - Zod npm-Paket (npm install zod zod-to-openapi)

OUTPUT:
  - lib/schemas/ mit vollständigen Zod-Schemas (als SSOT)
  - OpenAPI 3.0.3 Specification (JSON)
  - Client-SDK oder typed-fetch Utilities
  - Validierungs-Middleware für alle Routes

ABHAENGIGKEITEN:
  - zod (v3.22+)
  - zod-to-openapi (v2.0+)
  - TypeScript (5.0+)
  - Prisma (5.0+)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. ZOD-SCHEMA-BOOTSTRAP
   Erstelle lib/schemas/index.ts als zentrale Importstelle mit Basis-Schemas und Entity-Schemas.

2. KOMPOSITIONS-PATTERN
   Nutze Zod-Komposition: BaseUserSchema, UserCreateSchema, UserUpdateSchema, UserResponseSchema.

3. QUERY-PARAMETER-SCHEMA
   Definiere PaginationQuerySchema mit limit, offset, sort, filter Validierung.

4. OPENAPI-GENERIERUNG
   Nutze zod-to-openapi Plugin. Exportiere unter /api/openapi.json und docs/openapi.json.

5. RUNTIME-VALIDIERUNG IN ROUTE-HANDLERS
   Modifiziere alle Route-Handler mit UserCreateSchema.parse() für Validierung.

6. CLIENT-SDK-GENERIERUNG
   Nutze npx openapi-typescript openapi.json --output lib/types/generated/openapi.ts

7. SHARED-TYPES-EXPORTE
   Erstelle lib/types/shared.ts mit re-exported Types für Frontend ohne Zod-Abhängigkeit.

8. VALIDIERUNGSFEHLER-HANDLING
   Erstelle lib/utils/zod-errors.ts zur Konvertierung von ZodErrors zu ApiErrorResponses.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- lib/schemas/ (alle Zod-Schema-Dateien)
- lib/openapi.ts (OpenAPI-Registrierung)
- docs/openapi.json (OpenAPI 3.0.3 Spezifikation)
- lib/types/generated/openapi.ts (Auto-generierte Client-Types)
- lib/client/ (Client-SDK mit typed-fetch)
- lib/utils/zod-errors.ts (Fehlerkonvertierung)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Backend-Lead / TypeScript-Architect
ZEIT-ESTIMATE: 20 Stunden
KRITIKALITÄT: P0 (Blockiert API-05, API-06)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Discriminated Unions für polymorphe Responses
- Timestamp-Konsistenz: ISO-8601-Strings vs JavaScript Date
- Custom Zod-Refinements für Business-Logik-Validierungen
- Versionierung von Schemas bei Breaking Changes
- CHANGELOG.md für alle Schema-Änderungen

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API02-VG001  | Alle Request/Response Bodies haben Zod-Schemas       | MUST      |
| API02-VG002  | OpenAPI JSON wird korrekt generiert                  | MUST      |
| API02-VG003  | Validierungsfehler werden zu RFC 7807 konvertiert    | MUST      |
| API02-VG004  | Client-Types sind typsicher                           | MUST      |
| API02-VG005  | lib/types/shared.ts existiert für Frontend-Sharing   | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: OpenAPI-Spec ist generiert. Mindestens 3 Endpoints haben vollständige Zod-Validierung.

Trigger: Phase API-03 (RATE-LIMITING UND THROTTLING)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-03 — RATE-LIMITING UND THROTTLING
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - API-Routes von API-01 und API-02
  - Redis-Instanz (lokal oder via Redis Cloud)
  - Anforderungen für Rate-Limits

OUTPUT:
  - Rate-Limiter-Middleware in app/middleware.ts
  - Redis-Client-Wrapper (lib/utils/redis-client.ts)
  - RateLimit-Metriken und Monitoring
  - RateLimit-Antwort-Headers

ABHAENGIGKEITEN:
  - redis (npm install redis)
  - @vercel/kv (falls Vercel KV verwendet)
  - Next.js Middleware Runtime

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. REDIS-CLIENT-SETUP
   Erstelle lib/utils/redis-client.ts mit Redis-Verbindung und Error-Handling.

2. TOKEN-BUCKET-ALGORITHMUS
   Implementiere lib/utils/token-bucket.ts mit Token-Berechnung und Refill-Rate.

3. IP-BASIERTE RATE-LIMITS
   Definiere in lib/config/rate-limits.ts mit IP-spezifischen Limits.

4. USER-BASIERTE RATE-LIMITS
   Nutze User-ID mit differentiertem Limit per Tier (free, premium).

5. MIDDLEWARE-INTEGRATION
   Modifiziere app/middleware.ts mit Rate-Limit-Check vor Route-Handler-Ausführung.

6. SLIDING-WINDOW-ALTERNATIVE
   Optional: Implement Sliding-Window-Counter für fairere Limitierung.

7. GRACEFUL-DEGRADATION
   Für GET-Requests: Cache aus CDN. Für POST/PUT/DELETE: Queuing statt Rejection.

8. RETRY-AFTER-HEADER
   Berechne Retry-After und setze X-RateLimit-Reset und X-RateLimit-Remaining.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- lib/utils/redis-client.ts (Redis-Verbindung)
- lib/utils/token-bucket.ts (Token-Bucket-Implementierung)
- lib/config/rate-limits.ts (Limit-Konfigurationen)
- app/middleware.ts (aktualisiert)
- docs/RATE-LIMITS-POLICY.md

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Infrastructure-Lead / API-Performance
ZEIT-ESTIMATE: 14 Stunden
KRITIKALITÄT: P1 (Schutz vor DDoS)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Distributed Rate-Limiting: Redis ist der SSOT bei mehreren Servern
- Burst-Handling: Akzeptiere oder rejected Bursts?
- Prioritäts-Queues: VIP-User sollten andere Rate-Limits haben
- Metriken: Track RateLimit-Rejections pro Endpoint und IP

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API03-VG001  | Redis-Client verbindet sich fehlerfrei                | MUST      |
| API03-VG002  | Token-Bucket-Berechnung ist mathematisch korrekt     | MUST      |
| API03-VG003  | 429 wird mit Retry-After und X-RateLimit-* Headers  | MUST      |
| API03-VG004  | IP vs User-basierte Limits sind unterschiedlich      | SHOULD    |
| API03-VG005  | Graceful Degradation ist implementiert               | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Rate-Limiter ist aktiv. Test: Burst von 200 Requests in 10s wird zu 429 ab Request 101.

Trigger: Phase API-04 (CACHING-STRATEGIEN)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-04 — CACHING-STRATEGIEN
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - API-Routes mit Rate-Limiting von API-03
  - Next.js Static Generation und ISR
  - CDN-Infrastruktur (Vercel oder Cloudflare)

OUTPUT:
  - Cache-Control-Header-Strategie pro Endpoint
  - ISR Setup
  - ETag/Last-Modified-Validierung
  - On-Demand-Revalidation-API
  - SWR-Pattern für Clients

ABHAENGIGKEITEN:
  - Next.js 15+ (ISR, revalidateTag)
  - Vercel oder cloudflare (CDN)
  - Redis (optional für Cache-Invalidierung)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. HTTP-CACHE-HEADER-STRATEGIE
   Definiere lib/utils/cache-headers.ts mit Cache-Control-Strategien.

2. ETAG-GENERIERUNG
   Implementiere lib/utils/etag.ts mit SHA-256-Hash.

3. LAST-MODIFIED-VALIDIERUNG
   Nutze updatedAt-Timestamp in Prisma mit @updatedAt.

4. INCREMENTAL-STATIC-REGENERATION-SETUP
   Setze revalidate = 3600 für häufig angeforderte Daten.

5. ON-DEMAND-REVALIDATION-ENDPOINT
   Erstelle app/api/revalidate/route.ts mit Secret-Token-Validierung.

6. SWR-PATTERN-DOKUMENTATION
   Dokumentiere Stale-While-Revalidate Pattern für Clients.

7. CDN-LAYER-CACHING
   Falls Vercel: Automatisch. Falls Cloudflare: Cache-Control respektiert automatisch.

8. CACHE-INVALIDIERUNGSSTRATEGIE
   Implementiere lib/utils/cache-invalidation.ts mit Tag-basierten Invalidierungen.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- lib/utils/cache-headers.ts
- lib/utils/etag.ts
- app/api/revalidate/route.ts
- docs/CACHE-INVALIDATION-MATRIX.md
- next.config.ts (aktualisiert)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Frontend-Lead / Infrastructure-Engineer
ZEIT-ESTIMATE: 16 Stunden
KRITIKALITÄT: P1 (Performance-kritisch)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Cache-Poisoning-Prävention
- Metriken: Track Cache-Hit-Ratio pro Endpoint
- Memory-Leaks: Expire-TTLs setzen
- Regional Caching: Konsistenz über Regionen
- Purge-Strategien: Zeitgesteuert vs Event-gesteuert

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API04-VG001  | Cache-Control-Header sind auf allen Responses gesetzt | MUST      |
| API04-VG002  | ETag wird generiert und If-None-Match wird respektiert| MUST      |
| API04-VG003  | ISR oder On-Demand-Revalidation funktioniert          | MUST      |
| API04-VG004  | Cache-Invalidierungsmatrix ist dokumentiert           | SHOULD    |
| API04-VG005  | SWR-Pattern wird von Clients genutzt                  | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Cache-Hit-Ratio > 60%. ISR funktioniert mit 10s Update-Latenz.

Trigger: Phase API-05 (ERROR-HANDLING-ARCHITEKTUR)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-05 — ERROR-HANDLING-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - API-Routes mit Caching von API-04
  - Zod-Validierungsfehler von API-02
  - Sentry Configuration

OUTPUT:
  - RFC 7807 Problem Details Implementation
  - Error-Taxonomie und -Codes
  - Retry-Logik mit Exponential Backoff + Jitter
  - Sentry-Integration mit Stack-Trace-Filtering
  - Error-Boundaries für Transaktionen

ABHAENGIGKEITEN:
  - @sentry/nextjs (npm install @sentry/nextjs)
  - Prisma Error-Handling
  - TypeScript discriminated unions

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. RFC-7807-ERROR-FORMAT
   Implementiere lib/types/errors.ts mit ProblemDetail-Interface.

2. ERROR-TAXONOMIE
   Erstelle lib/config/error-codes.ts mit Fehler-Klassifizierung.

3. ERROR-FACTORY
   Implementiere lib/utils/error-factory.ts mit ApiError-Klasse.

4. ZOD-FEHLER-KONVERTIERUNG
   Erweitere lib/utils/zod-errors.ts zur Konvertierung zu ApiErrors.

5. PRISMA-ERROR-HANDLING
   In jedem DB-Query: Try-Catch für PrismaClientKnownRequestError.

6. RETRY-LOGIK MIT EXPONENTIAL-BACKOFF
   Implementiere lib/utils/retry.ts mit exponentieller Backoff und Jitter.

7. SENTRY-INTEGRATION
   In lib/sentry.ts: Setup mit DSN, Environment, Sampling, beforeSend-Filter.

8. ERROR-BOUNDARY-MIDDLEWARE
   Erstelle lib/middleware/error-boundary.ts für globale Exception-Handling.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- lib/types/errors.ts
- lib/config/error-codes.ts
- lib/utils/error-factory.ts
- lib/utils/retry.ts
- lib/sentry.ts
- lib/middleware/error-boundary.ts
- docs/ERROR-CODES-KATALOG.md

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Backend-Lead / Error-Handling-Specialist
ZEIT-ESTIMATE: 18 Stunden
KRITIKALITÄT: P0 (Blockiert Produktion)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Stack-Trace-Filtering: Nur relevante Frames in Sentry
- Error-Correlation: Nutze traceId um Related Errors zu clustern
- Alerts: Error-Rate > 1% sollte Alert auslösen
- Error-Distribution: Proaktiv debuggen
- Client-Error-Handling: Dokumentiere Retry-Handling

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API05-VG001  | Alle Errors sind RFC 7807 ProblemDetail                | MUST      |
| API05-VG002  | Error-Codes sind eindeutig und dokumentiert           | MUST      |
| API05-VG003  | Sentry erfasst Produktions-Errors                     | MUST      |
| API05-VG004  | Retry-Logik mit Backoff funktioniert                  | SHOULD    |
| API05-VG005  | Stack-Traces sind in Produktion gefiltert             | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Error-Response ist RFC 7807 konform. Sentry erfasst >= 90% der Errors.

Trigger: Phase API-06 (AUTHENTIFIZIERUNG UND AUTORISIERUNG)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-06 — AUTHENTIFIZIERUNG UND AUTORISIERUNG
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - Error-Handling von API-05
  - Zod-Schemas von API-02
  - Prisma-Schema mit User-Modell

OUTPUT:
  - NextAuth.js/Auth.js Integration (v5+)
  - JWT-Token-Rotation und Refresh-Tokens
  - RBAC (Role-Based Access Control) System
  - Session Management mit Secure Cookies
  - OAuth2-Provider-Integration
  - CSRF-Protection

ABHAENGIGKEITEN:
  - @auth/core, @auth/nextjs
  - argon2 (npm install argon2)
  - jsonwebtoken

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. AUTH.JS-SETUP
   Erstelle app/api/auth/[...nextauth]/route.ts mit Providers.

2. PASSWORD-HASHING MIT ARGON2
   Implementiere lib/utils/password.ts mit Argon2id statt bcrypt.

3. JWT-TOKEN-ROTATION
   In callbacks.jwt: Kurz-lebige Access-Tokens (15 Min) mit Refresh-Tokens.

4. SESSION-MANAGEMENT
   In callbacks.session: Propagiere User-Rollen und Tier in Session-Token.

5. RBAC-IMPLEMENTIERUNG
   Erstelle lib/utils/rbac.ts mit Rolle-Erlaubnis-Matrix.

6. AUTHORIZATION-MIDDLEWARE
   Erstelle lib/middleware/auth-guard.ts mit Dekorator-Pattern.

7. SECURE-COOKIE-KONFIGURATION
   Setze httpOnly, secure, sameSite-Flags.

8. CSRF-PROTECTION
   Auth.js implementiert CSRF automatisch.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- app/api/auth/[...nextauth]/route.ts
- lib/utils/password.ts
- lib/utils/rbac.ts
- lib/middleware/auth-guard.ts
- lib/types/auth.ts
- docs/AUTH-FLOWS.md

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Security-Lead / Auth-Specialist
ZEIT-ESTIMATE: 22 Stunden
KRITIKALITÄT: P0 (Sicherheit-kritisch)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Token-Binding: IP/User-Agent validation
- Logout-Everywhere: Revoke alle Refresh-Tokens
- OAuth-State-Validation: PKCE für Credentials Flow
- Session-Revocation: Bei Passwort-Änderung
- Audit-Logging: Jeder Login/Logout dokumentieren

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API06-VG001  | Sessions sind in Secure Cookies mit httpOnly           | MUST      |
| API06-VG002  | JWT-Rotation funktioniert bei Ablauf                  | MUST      |
| API06-VG003  | RBAC blockt unauthorized Zugriffe                     | MUST      |
| API06-VG004  | Passwörter werden mit Argon2 gehasht                  | MUST      |
| API06-VG005  | CSRF-Token wird validiert                             | MUST      |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: OAuth2-Login funktioniert. JWT-Rotation ist aktiv. RBAC funktioniert.

Trigger: Phase API-07 (DATENBANK-ANBINDUNG)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-07 — DATENBANK-ANBINDUNG
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - Auth-System von API-06
  - Zod-Schemas von API-02
  - Prisma-Schema (existierend)

OUTPUT:
  - Optimierte Prisma-Queries
  - Connection-Pooling mit PgBouncer
  - ACID-Transaktionen
  - Optimistic Locking
  - Repository-Pattern für Data Access
  - N+1-Abfrage-Prevention

ABHAENGIGKEITEN:
  - @prisma/client (v5.0+)
  - PostgreSQL 13+
  - PgBouncer

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. CONNECTION-POOLING-SETUP
   Konfiguriere PgBouncer mit transaction mode.

2. PRISMA-QUERY-OPTIMIERUNG
   Nutze select() statt findMany() für nur notwendige Spalten.

3. RELATION-LOADING-STRATEGIEN
   Verwende include() nur wenn notwendig. Batch-Loading mit Promise.all().

4. ACID-TRANSAKTIONEN
   Implementiere lib/utils/transaction.ts mit prisma.$transaction().

5. OPTIMISTIC-LOCKING
   Füge version-Field zu Prisma-Schema.

6. REPOSITORY-PATTERN
   Erstelle lib/repositories/ mit UserRepository, ProductRepository, etc.

7. SLOW-QUERY-LOGGING
   Setze log_min_duration_statement = 500 in PostgreSQL.

8. N+1-DETECTION
   Implementiere lib/utils/n-plus-one-detector.ts.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- prisma/schema.prisma (aktualisiert)
- lib/repositories/ (Repository-Implementierungen)
- lib/utils/transaction.ts
- lib/utils/n-plus-one-detector.ts
- lib/middleware/slow-query-logger.ts
- docs/DATABASE-OPTIMIZATION-GUIDE.md

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: Database-Administrator / Backend-Lead
ZEIT-ESTIMATE: 20 Stunden
KRITIKALITÄT: P0 (Performance-kritisch)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Query-Plan-Analyse mit EXPLAIN ANALYZE
- Index-Strategy für Performance
- Denormalisierung bei komplexen Queries
- Zero-Downtime-Migrations
- Eventual-Consistency bei Read-Replicas

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API07-VG001  | Connection-Pooling ist via PgBouncer aktiv            | MUST      |
| API07-VG002  | Transactions verwenden Optimistic Locking             | MUST      |
| API07-VG003  | N+1-Queries sind detektiert und verhindert            | SHOULD    |
| API07-VG004  | Repository-Pattern ist implementiert                  | SHOULD    |
| API07-VG005  | Slow-Query-Log ist aktiv                              | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Queries sind unter 100ms p95. N+1-Detection ist aktiv. Connection-Pool stabil.

Trigger: Phase API-08 (API-VERSIONIERUNG)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-08 — API-VERSIONIERUNG
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - Alle Routes von Phasen API-01 bis API-07
  - OpenAPI-Specification von API-02
  - Client-Implementierungen

OUTPUT:
  - Versionierungs-Strategie (URL vs. Header)
  - Deprecation-Headers und Timeline
  - Breaking-Change-Management-Policy
  - Version-Routing-Implementierung
  - Lifecycle-Policy

ABHAENGIGKEITEN:
  - Semantic Versioning (semver)
  - HTTP-Header-Standards

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. VERSIONING-STRATEGIE-AUSWAHL
   Entscheidung: URL-basiert (/api/v1/users, /api/v2/users).

2. DIRECTORY-STRUKTUR
   Erstelle app/api/v1/ und app/api/v2/ mit parallelen Implementierungen.

3. BREAKING-CHANGE-DEFINITION
   Definiere Breaking Changes: Feld entfernt, Feldtyp geändert, Behavior geändert.

4. DEPRECATION-HEADER-IMPLEMENTIERUNG
   Setze Deprecation: true, Sunset: <date>, Link: <migration-docs>.

5. LIFECYCLE-POLICY-DEFINITION
   Dokumentiere: v1 Deprecated 2026-01-01, Sunset 2027-01-01.

6. BACKWARD-COMPATIBILITY-LAYER
   V1-Requests zu V2-Implementierung mappen mit Response-Format-Konvertierung.

7. FEATURE-FLAG-ALTERNATIVE
   Optional: Feature-Flags nutzen für weniger Breaking Changes.

8. VERSIONING-DOKUMENTATION
   changelog.md, migration-guide.md, api-reference-vX.json.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- app/api/v2/ (neue API-Version)
- docs/API-LIFECYCLE-POLICY.md
- docs/V1-TO-V2-MIGRATION-GUIDE.md
- lib/utils/version-converter.ts
- CHANGELOG.md

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: API-Architect / DevRel-Engineer
ZEIT-ESTIMATE: 12 Stunden
KRITIKALITÄT: P1 (Developer-Experience-kritisch)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Version-Adoption-Tracking
- Canary-Deployments: v2 zu 5% der Nutzer zuerst
- Semantic Versioning: Major.Minor.Patch
- Deprecation-Timeline: 12-18 Monate Standard

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API08-VG001  | URL-Versioning ist konsistent (/api/v1, /api/v2)     | MUST      |
| API08-VG002  | Deprecation-Headers werden gesetzt                     | MUST      |
| API08-VG003  | Lifecycle-Policy ist dokumentiert                      | SHOULD    |
| API08-VG004  | Migration-Guide existiert                              | SHOULD    |
| API08-VG005  | Backward-Compatibility-Layer funktioniert             | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: v1 hat Deprecation-Headers. v2 ist deployed. Migration-Guide dokumentiert.

Trigger: Phase API-09 (API-DOKUMENTATION UND DEVELOPER EXPERIENCE)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-09 — API-DOKUMENTATION UND DEVELOPER EXPERIENCE
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - OpenAPI-Specification von API-02
  - Alle Routes und Versionierung von API-08
  - Error-Codes von API-05
  - Auth-Flows von API-06

OUTPUT:
  - Swagger-UI / Redoc Dokumentation
  - API-Playground (interaktiv)
  - SDK-Generierung (TypeScript, Python)
  - Postman-Collections
  - Error-Code-Katalog
  - Changelog
  - Developer-Onboarding-Guide

ABHAENGIGKEITEN:
  - swagger-ui-express oder redoc
  - @hey-api/openapi-ts (SDK-Generator)
  - Postman API

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. SWAGGER-UI-INTEGRATION
   Integriere swagger-ui-react in pages/api-docs.tsx.

2. PLAYGROUND-IMPLEMENTIERUNG
   Erstelle app/api-playground/ mit Request-Builder.

3. SDK-GENERIERUNG
   Mit @hey-api/openapi-ts: npx @hey-api/openapi-ts --input ./docs/openapi.json --output ./lib/generated/sdk

4. POSTMAN-COLLECTION-EXPORT
   Konvertiere OpenAPI.json zu Postman-Format.

5. ERROR-CODE-KATALOG
   Erstelle docs/ERROR-CODES.md mit Tabelle.

6. CHANGELOG-TEMPLATE
   docs/CHANGELOG.md mit Keep-a-Changelog-Format.

7. DEVELOPER-ONBOARDING-GUIDE
   docs/GETTING-STARTED.md: Auth Setup, First Request, SDK, Error-Handling.

8. API-USAGE-EXAMPLES
   docs/EXAMPLES/: Code-Samples (curl, TypeScript, Python).

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- pages/api-docs.tsx (Swagger-UI)
- app/api-playground/ (Playground)
- lib/generated/sdk/ (Client-SDK)
- docs/openapi.json
- docs/postman-collection.json
- docs/ERROR-CODES.md
- docs/CHANGELOG.md
- docs/GETTING-STARTED.md
- docs/EXAMPLES/

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: DevRel-Engineer / Technical Writer
ZEIT-ESTIMATE: 16 Stunden
KRITIKALITÄT: P1 (Developer-Experience-kritisch)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Interactive-Documentation mit Live-Requests
- Multi-Language-Examples
- Video-Tutorials für komplexe Workflows
- Feedback-Loop: Developers können Comments hinterlassen
- Versioned-Docs für v1, v2, etc.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API09-VG001  | Swagger-UI ist öffentlich erreichbar                  | MUST      |
| API09-VG002  | SDK ist generiert und npm-publishbar                  | MUST      |
| API09-VG003  | Error-Code-Katalog ist vollständig                    | SHOULD    |
| API09-VG004  | GETTING-STARTED-Guide existiert                       | SHOULD    |
| API09-VG005  | Code-Examples für Major-Workflows                     | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Docs sind öffentlich. SDK ist npm-published. Developer-Feedback positiv.

Trigger: Phase API-10 (API-PERFORMANCE UND OBSERVABILITY)

═══════════════════════════════════════════════════════════════════════════════
PHASE API-10 — API-PERFORMANCE UND OBSERVABILITY
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
INPUT:
  - Alle Routes von API-01 bis API-09
  - Database-Optimization von API-07
  - Error-Handling von API-05
  - Sentry-Integration

OUTPUT:
  - OpenTelemetry-Instrumentation
  - Response-Time-Metriken (p50, p95, p99)
  - N+1-Query-Detection
  - Slow-Query-Log
  - Endpoint-Dashboards (Grafana/Datadog)
  - Health-Check-Endpoints
  - Performance-Budgets und Alerts

ABHAENGIGKEITEN:
  - @opentelemetry/api, @opentelemetry/sdk-node
  - Prometheus oder Datadog Agent
  - PostgreSQL slow-query-log
  - Grafana

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. OPENTELEMETRY-SETUP
   Installiere OTel-Packages und erstelle lib/otel.ts.

2. SPAN-INSTRUMENTATION
   In jedem Route-Handler: Nutze tracer.startSpan().

3. RESPONSE-TIME-METRIKEN
   Implementiere lib/metrics/response-time.ts für p50, p95, p99.

4. PROMETHEUS-METRIKEN-EXPORT
   Erstelle app/api/metrics/route.ts mit Prometheus-Export-Format.

5. N+1-QUERY-DETECTION-LOGGING
   Erweitere N+1-Detector mit Sentry/Slack-Alerting.

6. SLOW-QUERY-LOG-MODUL
   Parse PostgreSQL logs und export zu Dashboard.

7. HEALTH-CHECK-ENDPOINTS
   Erstelle app/api/health/route.ts mit Checks.

8. PERFORMANCE-BUDGET-UND-ALERTS
   Definiere in ops/alerts.yaml: p95 > 200ms, error_rate > 0.1%.

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
- lib/otel.ts
- lib/metrics/response-time.ts
- app/api/metrics/route.ts
- app/api/health/route.ts
- lib/logs/slow-query-parser.ts
- ops/alerts.yaml
- docs/PERFORMANCE-MONITORING.md
- Grafana Dashboard-JSON

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────
VERANTWORTLICH: DevOps-Lead / Performance-Engineer
ZEIT-ESTIMATE: 18 Stunden
KRITIKALITÄT: P0 (Produktion-notwendig)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────
- Anomaly-Detection: Wenn p99 sich verdoppelt, automatisch Alert
- Correlation Analysis: Response-Time vs DB-Last
- Flame-Graphs für Performance-Regressions
- Synthetic-Monitoring von Edge-Locations
- Performance-Benchmarks mit Baseline

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────
| Gate-ID      | Bedingung                                             | Striktheit |
|--------------|-------------------------------------------------------|-----------|
| API10-VG001  | OpenTelemetry ist instrumentiert                      | MUST      |
| API10-VG002  | Response-Time-Metriken sind exportiert                | MUST      |
| API10-VG003  | Health-Check-Endpoint funktioniert                    | MUST      |
| API10-VG004  | Slow-Query-Log ist aktiv                              | SHOULD    |
| API10-VG005  | Alerts sind konfiguriert                              | SHOULD    |

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────
BEDINGUNG: Metriken in Grafana sichtbar. Health-Check antwortet korrekt. Alerts funktionieren. p95 <= 200ms.

PIPELINE-COMPLETION: Phase API-10 ist finale Phase. Trigger: OMNI-CLOSED-LOOP (Monitoring und Feedback-Loop in kontinuierliches Optimize-Cycle).

═══════════════════════════════════════════════════════════════════════════════
CROSS-PIPELINE-ABHAENGIGKEITEN
═══════════════════════════════════════════════════════════════════════════════

| Dependency | Pipeline | Kritikalität | Handoff |
|-----------|----------|--------------|---------|
| SECURITY-AUDIT | Security-Audit-Pipeline | P0 | Nach API-06, vor Produktion |
| DATA-LAYER | Data-Layer-Pipeline | P0 | Parallel zu API-07 |
| SSOT-GOVERNANCE | SSOT-Governance-Pipeline | P1 | Nach API-02 |
| DB-SCHEMA-MIGRATION | Database-Schema-Migration-Pipeline | P1 | Nach API-01 |

═══════════════════════════════════════════════════════════════════════════════
KONFIGURATIONS-SPEZIFIKATION
═══════════════════════════════════════════════════════════════════════════════

UMGEBUNGSVARIABLEN (.env.local, .env.production):

DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
REDIS_URL=redis://localhost:6379
RATE_LIMIT_ENABLED=true
CACHE_ENABLED=true
SENTRY_DSN=https://key@sentry.io/project
OPENTELEMETRY_ENABLED=true
NODE_ENV=production
API_VERSION=v2
NEXT_PUBLIC_API_URL=https://api.example.com

KONFIGURATIONSDATEIEN:

lib/config/
├── rate-limits.ts (Limit-Policies)
├── cache-strategy.ts (TTL-Einstellungen)
├── error-codes.ts (Fehler-Taxonomie)
├── features.ts (Feature-Flags)
└── monitoring.ts (Alert-Thresholds)

═══════════════════════════════════════════════════════════════════════════════
METRIKEN UND KPIS
═══════════════════════════════════════════════════════════════════════════════

CORE-METRIKEN:

1. Availability
   - Uptime: Target 99.99% (< 4 Min/Monat Downtime)
   - Health-Check-Erfolgsquote: > 99.95%

2. Performance
   - Response-Time p50: < 50ms
   - Response-Time p95: < 200ms
   - Response-Time p99: < 500ms
   - Cache-Hit-Ratio: > 60%

3. Reliability
   - Error-Rate: < 0.1% (1 Error pro 1000 Requests)
   - Rate-Limit-Rejections: < 0.5%
   - Database-Connection-Errors: < 0.01%

4. Security
   - Failed-Auth-Attempts per IP: < 10 pro 5 Min
   - JWT-Refresh-Token-Rotations: 100% automatisiert
   - HTTPS-Coverage: 100%

5. Developer-Experience
   - API-Documentation-Completeness: > 95%
   - SDK-Download-Count: Tracked
   - Developer-Feedback-Score: > 4.5/5.0

MONITORING-DASHBOARDS:

- Real-Time-Metrics: Response-Times, Error-Rates, Request-Volume
- Database-Performance: Query-Durations, Connection-Pool-Usage
- Cache-Efficiency: Hit-Ratio, Invalidation-Events
- Security: Auth-Failures, Rate-Limit-Hits, CSRF-Attempts
- Deployment-Health: Canary-Error-Rates, Rollback-Triggers

═══════════════════════════════════════════════════════════════════════════════
PIPELINE-COMPLETION CHECKPOINT
═══════════════════════════════════════════════════════════════════════════════

Alle 10 Phasen sind definiert. Jede Phase hat explizite Trigger zur nächsten Phase.
Die Pipeline etabliert einen deterministischen Handoff-Mechanismus für ein
kontinuierliches Optimize-Cycle (OMNI-CLOSED-LOOP).

SSOT-ANKER: Der Quellcode (app/api/, lib/, prisma/) ist die Single Source of Truth.
Diese Spezifikation ist Code-nah und Implementierungs-validiert.

NEXT-STEPS: Führe Phase API-01 aus. Sie blockiert alle nachfolgenden Phasen.
Halte dich streng an die DOMINO-PROTOKOLLE. Validiere gegen alle VG-MUST-Gates
vor dem Handoff zur nächsten Phase.

═══════════════════════════════════════════════════════════════════════════════

   Atomare Operationen (alles erfolgreich oder alles scheitert):

   const result = await prisma.$transaction(async (tx) => {
     const user = await tx.user.create({ data: {...} });
     const subscription = await tx.subscription.create({
       data: { userId: user.id, ... }
     });
     return { user, subscription };
   });

   Isolation-Levels:
   - READ_UNCOMMITTED: Keine (avoid!)
   - READ_COMMITTED: Default (OK für meiste Cases)
   - REPEATABLE_READ: Verhindert Phantom-Reads
   - SERIALIZABLE: Strictest, aber langsam

4. OPTIMISTIC LOCKING (Konflikt-Vermeidung)

   Schema:
   model Product {
     id: String @id
     name: String
     price: Float
     version: Int @default(1)
   }

   Update mit Versionsprüfung:
   const updated = await prisma.product.update({
     where: { id: '123', version: currentVersion },
     data: { price: newPrice, version: { increment: 1 } }
   });
   if (!updated) throw new ConflictError('Product was modified');

5. QUERY-OPTIMIZATION

   a) SELECT-Projektion (nur benötigte Felder):
      BAD:  const user = await prisma.user.findUnique({ where: { id: '123' } });
      GOOD: const user = await prisma.user.findUnique({
              where: { id: '123' },
              select: { id: true, email: true, name: true }
            });

   b) Eager-Loading (N+1-Query-Vermeidung):
      BAD:  for (const user of users) { const profile = await user.profile(); }
      GOOD: const users = await prisma.user.findMany({
              include: { profile: true }
            });

   c) Lazy-Loading (für Performance bei großen Relations):
      const users = await prisma.user.findMany(); // Ohne Profile
      const userWithProfile = await prisma.user.findUnique({
        where: { id: users[0].id },
        include: { profile: true }
      });

6. REPOSITORY-PATTERN (Data-Access-Layer)

   lib/repositories/UserRepository.ts:

   class UserRepository {
     async findById(id: string) {
       return await prisma.user.findUnique({
         where: { id },
         select: { id: true, email: true, name: true }
       });
     }

     async create(data: CreateUserInput) {
       return await prisma.user.create({
         data: { ...data }
       });
     }

     async updateById(id: string, data: UpdateUserInput) {
       return await prisma.user.update({
         where: { id },
         data
       });
     }
   }

   Vorteile: Zentralisierte Queries, leicht zu testen.

7. SEED-SCRIPTS

   prisma/seed.ts:

   async function main() {
     const admin = await prisma.user.create({
       data: {
         email: 'admin@example.com',
         name: 'Admin',
         role: 'admin'
       }
     });

     console.log('Seeded admin user:', admin);
   }

   main().catch(console.error);

   Ausführung: npx prisma db seed

8. MIGRATION-INTEGRATION

   Prisma-Migration:
   npx prisma migrate dev --name add_user_profile

   Erstellt:
   - prisma/migrations/[timestamp]_add_user_profile/migration.sql
   - prisma/schema.prisma aktualisiert

   Production-Deployment:
   npx prisma migrate deploy

ARTIFACT-PROTOKOLL

Artifacts (Must-Exist):
- [ ] prisma/schema.prisma (oder drizzle/schema.ts für Drizzle)
- [ ] prisma/migrations/ (Migration-Dateien)
- [ ] lib/db.ts (Prisma-Client-Export mit Singleton)
- [ ] lib/repositories/ (Repository-Klassen)
- [ ] prisma/seed.ts (Seed-Script)
- [ ] scripts/db-migrate.sh (Migration-Script)

DIRECTOR-ZUWEISUNG

Verantwortlich: Database-Architect + ORM-Specialist
Review-Fokus:
  - Connection-Pool-Config ist richtig
  - Keine N+1-Queries
  - Transactions richtig verwendet
  - Migrations sind reversible

ULTRATHINK-LANGZEITTASKS

T1: Query-Performance-Monitoring. Alle Queries > 100ms loggen:
    prisma.$on('query', (e) => {
      if (e.duration > 100) console.warn('[SLOW-QUERY]', e.query);
    });

T2: Schema-Validation gegen Domain-Model. Nach Migration, validiere:
    - Alle benötigen Fields existieren
    - Indizes auf Performance-kritischen Columns
    - Foreign-Keys korrekt

T3: Backup-Strategy. Täglich Database-Backups. Point-in-Time Recovery.
    pg_dump > backup_$(date +%Y%m%d).sql

T4: Read-Replica-Setup für Read-Heavy Workloads. Primary-DB für Writes.
    Read-Replicas für SELECT-Queries (mit Lag-Toleranz).

VALIDATION-GATES

| Gate | Bedingung | Aktion |
|------|-----------|--------|
| Connection-Pool | PgBouncer mit 25+ Connections | Manual Config |
| Migrations | Alle Migrations reversible | Code-Review |
| N+1-Queries | Performance-Tests pass | Reject Merge |
| Transaction-Tests | ACID-Properties verified | Manual Test |
| Seed-Data | Seed-Script lädt erfolgreich | Auto-Test |

EXIT-PROTOKOLL

Phase-Completion-Kriterien:
✓ ORM (Prisma oder Drizzle) konfiguriert
✓ Connection-Pooling mit PgBouncer läuft
✓ Migrations durchlaufen erfolgreich
✓ Repository-Pattern implementiert
✓ N+1-Query-Monitoring aktiv
✓ Seed-Script funktioniert
→ AUTO-TRIGGER: PHASE API-08 (API-Versionierung)

═══════════════════════════════════════════════════════════════════════════════

PHASE API-08 — API-VERSIONIERUNG

CHAIN-LINK-HEADER
┌─ Input: Initial API-Routes aus API-01, Future-Compatibility-Requirements
├─ Output: Versionierungs-Strategy, Version-Router-Middleware, Deprecation-Headers
├─ Dependencies: Next.js App Router, Custom Middleware
└─ Trigger-Condition: Nach Completion von PHASE API-07

DOMINO-PROTOKOLL — API-VERSION-MANAGEMENT

1. URL-BASIERTE VERSIONIERUNG (Empfohlen)

   Endpoint-Struktur:
   /api/v1/users/123
   /api/v2/users/123
   /api/v3/users/123

   Jede Version hat eigenes Route-Verzeichnis:
   app/api/v1/users/route.ts
   app/api/v2/users/route.ts

   Vorteile:
   - Klar in URLs sichtbar
   - Einfach zu deprecaten (remove /api/v1)
   - Backward-Compatibility trivial

2. HEADER-BASIERTE VERSIONIERUNG (Alternative)

   Accept-Header mit Version:
   GET /api/users/123
   Accept: application/vnd.api+json;version=2

   Oder Custom-Header:
   GET /api/users/123
   X-API-Version: 2

   Routing-Logic:
   const version = req.headers.get('X-API-Version') || '1';
   if (version === '2') {
     return handleV2Request(req);
   } else {
     return handleV1Request(req);
   }

3. DEPRECATION-HEADERS

   Alle Responses müssen Deprecation-Info enthalten:

   GET /api/v1/users/123
   →
   HTTP/1.1 200 OK
   Deprecation: true
   Sunset: Sun, 01 Dec 2026 23:59:59 GMT
   Link: </api/v2/users/123>; rel="successor-version"
   X-API-Lifecycle: deprecated

   Headers-Bedeutung:
   - Deprecation: true → diese Version ist deprecated
   - Sunset: Datum wenn Version entfernt wird
   - Link: rel="successor-version" → neue Version
   - X-API-Lifecycle: active, deprecated, sunset, removed

4. BREAKING-CHANGE-MANAGEMENT

   Beim Breaking-Change (z.B. Field gelöscht):
   - Neue Major-Version erstellen (v1 → v2)
   - v1 mit Deprecation-Headers markieren
   - Deprecation-Period: mindestens 6 Monate
   - Nach Period: v1 entfernen

   Changelog dokumentieren:
   docs/API-CHANGELOG.md

   BREAKING CHANGES in v2:
   - User.profile.bio gelöscht → nutze User.bio stattdessen
   - User.createdAt Typ geändert: ISO-String (statt Unix-Timestamp)

5. VERSION-ROUTING-MIDDLEWARE

   middleware.ts:

   export function middleware(req: NextRequest) {
     const path = req.nextUrl.pathname;

     if (path.startsWith('/api/')) {
       const apiVersion = extractVersion(path); // '1' oder '2'
       const requestContext = { apiVersion, ...existing };
       const response = NextResponse.next();
       response.headers.set('X-API-Version', apiVersion);
       return response;
     }
   }

   export const config = { matcher: ['/api/:path*'] };

6. BACKWARD-COMPATIBILITY-TESTING

   Test-Suite für jede Version:

   test('v1 and v2 user endpoint return same data', async () => {
     const dataV1 = await fetch('/api/v1/users/123');
     const dataV2 = await fetch('/api/v2/users/123');

     expect(dataV1.user.id).toBe(dataV2.user.id);
     expect(dataV1.user.email).toBe(dataV2.user.email);
     // v2 hat zusätzliche Felder, aber keine Feld-Änderungen
   });

7. API-LIFECYCLE-MANAGEMENT

   Lifecycle-Stages:
   - Alpha: Experimental, Breaking-Changes erlaubt
   - Beta: Feature-complete, aber unstabil
   - Active: Production-ready, Backward-Compatibility garantiert
   - Deprecated: Neue Clients sollten alte Version nutzen
   - Sunset: Wird bald entfernt (Date in Sunset-Header)
   - Removed: Nicht mehr verfügbar

   Tracking:
   - V1: Active (seit 2025-01-01)
   - V2: Active (seit 2025-06-01)
   - V1: Deprecated (seit 2026-06-01, Sunset 2026-12-01)
   - V1: Removed (seit 2026-12-02)

8. API-VERSION-DOKUMENTATION

   docs/API-VERSIONS.md:

   | Version | Status | Sunset | Notes |
   |---------|--------|--------|-------|
   | v1 | Active | - | Current stable |
   | v2 | Beta | 2026-12-01 | New fields, breaking changes |
   | v3 | Alpha | - | Experimental, not recommended |

ARTIFACT-PROTOKOLL

Artifacts (Must-Exist):
- [ ] app/api/v1/ (v1 Routes)
- [ ] app/api/v2/ (v2 Routes, falls breaking-changes)
- [ ] middleware.ts (Version-Routing)
- [ ] lib/version-router.ts (Version-Detection-Logic)
- [ ] docs/API-CHANGELOG.md (Breaking-Changes documented)
- [ ] docs/API-VERSIONS.md (Version-Lifecycle-Table)
- [ ] tests/api-versions.test.ts (Backward-Compatibility-Tests)

DIRECTOR-ZUWEISUNG

Verantwortlich: API-Owner + DevRel-Team
Review-Fokus:
  - Breaking-Changes deutlich dokumentiert
  - Deprecation-Headers korrekt
  - Backward-Compatibility-Tests grün

ULTRATHINK-LANGZEITTASKS

T1: Automated Version-Upgrade Notifications. Email an API-Clients:
    "Your app uses deprecated API v1. Upgrade to v2 before 2026-12-01."

T2: Version-Usage-Analytics. Tracking:
    - Wie viele Requests pro Version?
    - Wer nutzt noch v1?
    - Upgrade-Progress monitoren

T3: Smooth Version-Migration-Guide. Für Breaking-Changes:
    - Code-Beispiele v1 → v2
    - Migration-Skripte
    - Gotchas dokumentieren

T4: SDK-Versioning sync mit API-Versions. Client-SDK-Version muss API-Version matchen.
    Enforcement: SDK v1.0 kann NICHT /api/v2 calls machen.

VALIDATION-GATES

| Gate | Bedingung | Aktion |
|------|-----------|--------|
| Deprecation-Headers | Deprecated Routes haben Sunset-Header | Auto-Check |
| Version-Routes | Jede Version hat separate Route-Verzeichnis | Reject PR |
| Changelog | Breaking-Changes dokumentiert | Reject PR |
| Backward-Compat-Tests | Alte + neue Version getestet | Reject Merge |
| Lifecycle-Doc | API-Versions.md aktuell | Review |

EXIT-PROTOKOLL

Phase-Completion-Kriterien:
✓ Versionierungs-Strategy (URL vs Header) entschieden
✓ V1 Routes produzieren Deprecation-Headers (wenn v2 aktiv)
✓ Version-Routing-Middleware konfiguriert
✓ Backward-Compatibility-Tests geschrieben
✓ API-CHANGELOG.md dokumentiert
✓ API-Lifecycle-Table aktuell
→ AUTO-TRIGGER: PHASE API-09 (API-Dokumentation)

═══════════════════════════════════════════════════════════════════════════════

PHASE API-09 — API-DOKUMENTATION UND DEVELOPER EXPERIENCE

CHAIN-LINK-HEADER
┌─ Input: OpenAPI-Spec aus API-02, Zod-Schemas, Real Endpoint-Implementation
├─ Output: Interactive API-Playground, SDK-Generierung, Developer-Guides
├─ Dependencies: Swagger-UI, @stoplight/elements, openapi-ts, API-Documentation-Platform
└─ Trigger-Condition: Nach Completion von PHASE API-08

DOMINO-PROTOKOLL — DEVELOPER-EXPERIENCE-IMPLEMENTATION

1. OPENAPI / SWAGGER-UI INTEGRATION

   app/api/docs/route.ts:

   import swaggerUI from 'swagger-ui-express';
   import spec from '@/openapi.json';

   export function GET() {
     return new Response(swaggerUI.generate(spec), {
       headers: { 'Content-Type': 'text/html' }
     });
   }

   Zugänglich unter: https://api.example.com/api/docs

   Swagger-UI zeigt:
   - Alle Endpoints gruppiert nach Resource
   - Request-Parameter + Schemas
   - Response-Beispiele
   - "Try It Out"-Button für Live-Requests

2. INTERACTIVE API-PLAYGROUND

   Alternative zu Swagger-UI: Stoplight Elements oder GraphQL-Playground

   Stoplight-Setup:
   import { API } from '@stoplight/elements';

   <API
     apiDescriptionUrl="https://api.example.com/openapi.json"
     router="hash"
   />

   Features:
   - Live-Request-Execution
   - Response-Preview
   - Authentication-Handling
   - Request-History

3. SDK-GENERIERUNG FÜR TYPESCRIPT-CLIENTS

   Mit openapi-typescript oder similar:

   npm run generate:client
   → Generiert lib/api-client/ mit typsicheren Funktionen

   Usage:
   import { UsersApi } from '@/lib/api-client';

   const api = new UsersApi();
   const user = await api.getUser({ id: '123' });
   // Type: User (automatisch aus OpenAPI-Spec)

4. POSTMAN-COLLECTION-EXPORT

   OpenAPI-Spec in Postman-Format konvertieren:

   npm install openapi-to-postmanv2

   Generiert: postman-collection.json

   Importierbar in Postman:
   File → Import → postman-collection.json

   Vorteile:
   - Team-Collaboration
   - Environment-Variablen
   - Automated Tests (Postman Test-Runner)

5. API-CHANGELOG

   docs/API-CHANGELOG.md:

   ## Version 2.0.0 (2026-06-01)

   ### New Endpoints
   - POST /api/v2/users/{id}/preferences
   - DELETE /api/v2/products/{id}/reviews/{reviewId}

   ### Changed
   - BREAKING: User.phone_number renamed to User.phone
   - User.email is now required (was optional)

   ### Deprecated
   - GET /api/v1/users (use /api/v2/users instead)

   ### Fixed
   - Fixed 404 response when user doesn't exist (was 500)

6. CODE-EXAMPLES PRO ENDPOINT

   Für jeden Endpoint: cURL, JavaScript, Python, Go Examples

   GET /api/v1/users/{id}

   CURL:
   curl -X GET https://api.example.com/api/v1/users/123 \
     -H "Authorization: Bearer TOKEN"

   JavaScript:
   const user = await fetch('/api/v1/users/123', {
     headers: { Authorization: `Bearer ${token}` }
   }).then(r => r.json());

   Python:
   import requests
   user = requests.get(
     'https://api.example.com/api/v1/users/123',
     headers={'Authorization': f'Bearer {token}'}
   ).json()

7. AUTHENTICATION-GUIDE

   docs/AUTHENTICATION.md:

   Getting Started with Authentication

   1. Register Account: POST /api/v1/auth/register
   2. Login: POST /api/v1/auth/login → returns accessToken + refreshToken
   3. Use in Requests: Authorization: Bearer ${accessToken}
   4. Refresh Token: POST /api/v1/auth/refresh → new accessToken

   OAuth2:
   - Google Sign-In supported
   - GitHub Integration

   Session Management:
   - Access-Token expires in 15 minutes
   - Refresh-Token expires in 7 days
   - Auto-refresh handled by Client-SDK

8. ERROR-CODE-KATALOG

   docs/ERROR-CODES.md:

   | Status | Error-Type | Detail | Solution |
   |--------|------------|--------|----------|
   | 400 | ValidationError | The 'email' field is invalid | Check email format |
   | 401 | AuthenticationError | Token expired | Call refresh endpoint |
   | 403 | AuthorizationError | Insufficient permissions | Contact admin for access |
   | 404 | NotFoundError | User not found | Check user ID |
   | 409 | ConflictError | Email already exists | Use unique email |
   | 429 | RateLimitError | Too many requests | Wait and retry |
   | 500 | InternalError | Unexpected error | Contact support |

ARTIFACT-PROTOKOLL

Artifacts (Must-Exist):
- [ ] app/api/docs/route.ts (Swagger-UI-Endpoint)
- [ ] openapi.json (Generated from Zod-Schemas)
- [ ] lib/api-client/ (Generated TypeScript-Client)
- [ ] postman-collection.json (Postman-Integration)
- [ ] docs/API-CHANGELOG.md
- [ ] docs/AUTHENTICATION.md
- [ ] docs/ERROR-CODES.md
- [ ] docs/EXAMPLES.md (Code-Samples)

DIRECTOR-ZUWEISUNG

Verantwortlich: DevRel-Team + Technical-Writer
Review-Fokus:
  - OpenAPI-Spec vollständig
  - Code-Examples getestet
  - Error-Codes dokumentiert
  - Guides klar geschrieben

ULTRATHINK-LANGZEITTASKS

T1: API-Reference-Versioning. Dokumentation für jede API-Version separat:
    /docs/v1/
    /docs/v2/
    Alte Docs accessibel (nicht gelöscht).

T2: Interactive Code-Generator. Nutzer gibt Anforderungen ein, System generiert Code:
    "Get User by Email" → generiert cURL, JS, Python, Go Code.

T3: API-Health-Status-Page. Status-Indicator pro Endpoint:
    GET /api/status → zeigt Uptime%, Response-Time, Error-Rate pro Endpoint.

T4: Tutorials für Common-Tasks. Nicht nur Reference-Docs:
    - "How to authenticate with Google OAuth"
    - "Rate-Limit-Handling Strategies"
    - "Implementing Exponential Backoff"

VALIDATION-GATES

| Gate | Bedingung | Aktion |
|------|-----------|--------|
| OpenAPI-Complete | Alle Endpoints documented | Auto-Scan |
| Code-Examples | Mindestens cURL + JS | Review |
| Error-Codes | Alle möglichen Statuses documented | Reject PR |
| Swagger-UI | Loadable ohne Errors | Manual Test |
| SDK-Generation | Client-SDK generiert erfolgreich | Auto-Test |

EXIT-PROTOKOLL

Phase-Completion-Kriterien:
✓ Swagger-UI loadbar unter /api/docs
✓ OpenAPI-Spec vollständig + validiert
✓ TypeScript-Client-SDK generiert
✓ Postman-Collection exportiert
✓ API-CHANGELOG dokumentiert
✓ Authentication-Guide geschrieben
✓ Error-Code-Katalog vollständig
✓ Code-Examples (cURL, JS, Python) pro Endpoint
→ AUTO-TRIGGER: PHASE API-10 (API-Performance und Observability)

═══════════════════════════════════════════════════════════════════════════════

PHASE API-10 — API-PERFORMANCE UND OBSERVABILITY

CHAIN-LINK-HEADER
┌─ Input: All Working Endpoints from API-01 through API-09
├─ Output: Monitoring-Dashboards, Performance-Baselines, Alert-Rules
├─ Dependencies: Prometheus, Grafana, OpenTelemetry, Datadog/New-Relic
└─ Trigger-Condition: Nach Completion von PHASE API-09

DOMINO-PROTOKOLL — OBSERVABILITY-IMPLEMENTATION

1. RESPONSE-TIME-TRACKING (p50, p95, p99)

   OpenTelemetry-Integration:

   import { metrics } from '@opentelemetry/api';

   const httpDuration = metrics.createHistogram('http_request_duration_ms', {
     description: 'Duration of HTTP requests in ms'
   });

   Middleware:
   const startTime = performance.now();
   const response = await handler(req);
   const duration = performance.now() - startTime;
   httpDuration.record(duration, { endpoint, method });

   Ergebnis: Prometheus-Daten mit Percentilen
   - http_request_duration_ms{quantile="0.50"}
   - http_request_duration_ms{quantile="0.95"}
   - http_request_duration_ms{quantile="0.99"}

2. DISTRIBUTED TRACING MIT OPENTELEMETRY

   Trace-Setup:

   import { NodeTracerProvider } from '@opentelemetry/node';
   import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

   const provider = new NodeTracerProvider();
   const exporter = new JaegerExporter({ serviceName: 'api-backend' });
   provider.addSpanProcessor(new BatchSpanProcessor(exporter));

   Tracing in Handler:

   const tracer = trace.getTracer('api');
   const span = tracer.startSpan('getUserById', {
     attributes: { userId, requestId }
   });

   try {
     const user = await db.user.findUnique({ where: { id } });
     span.setStatus({ code: SpanStatusCode.OK });
     return user;
   } catch (error) {
     span.recordException(error);
     span.setStatus({ code: SpanStatusCode.ERROR });
     throw error;
   } finally {
     span.end();
   }

3. N+1-QUERY-DETECTION

   Database-Logging mit Alarm:

   prisma.$on('query', (e) => {
     metrics.queryCount.inc({ endpoint: getCurrentEndpoint() });
     if (e.duration > 100) {
       logger.warn('Slow Query', { query: e.query, duration: e.duration });
     }
   });

   Regel: Max 5 Queries pro Endpoint (sonst N+1 Verdacht).

4. SLOW-QUERY-LOGGING

   PostgreSQL-Config:

   log_min_duration_statement = 100  -- Log queries > 100ms
   log_statement = 'all'             -- Log alle Statements
   log_duration = on

   Parsing und Aggregation:
   - Query-Type (SELECT, INSERT, UPDATE, DELETE)
   - Execution-Time
   - Schema/Table
   - User
   - Frequency

5. REQUEST-VOLUME-METRIKEN

   Counter pro Endpoint:

   const httpRequests = metrics.createCounter('http_requests_total', {
     description: 'Total HTTP requests'
   });

   httpRequests.add(1, {
     endpoint: '/api/v1/users',
     method: 'GET',
     status: 200
   });

   Dashboards zeigen:
   - Requests/sec pro Endpoint
   - Error-Rate (4xx, 5xx)
   - Traffic Distribution

6. ENDPOINT-LATENCY-DASHBOARDS

   Grafana-Dashboard:

   - Panel 1: Response-Time Percentiles (p50, p95, p99) pro Endpoint
   - Panel 2: Request-Volume Timeseries
   - Panel 3: Error-Rate per Endpoint
   - Panel 4: Database-Query-Count
   - Panel 5: Cache-Hit-Rate

   Update-Frequency: 10 Sekunden

7. API-HEALTH-CHECKS

   app/api/health/route.ts:

   export async function GET() {
     const checks = {
       database: await checkDatabase(),
       redis: await checkRedis(),
       externalServices: await checkExternalServices()
     };

     const allHealthy = Object.values(checks).every(c => c.status === 'healthy');

     return new Response(JSON.stringify(checks), {
       status: allHealthy ? 200 : 503,
       headers: { 'Content-Type': 'application/json' }
     });
   }

   Response:
   {
     "database": { "status": "healthy", "latency_ms": 12 },
     "redis": { "status": "healthy", "latency_ms": 3 },
     "externalServices": { "status": "degraded", "message": "Stripe timeout" }
   }

8. THROUGHPUT-MONITORING

   Metriken:
   - Requests/sec (global)
   - Requests/sec pro Endpoint
   - Bytes In/Out
   - Connection-Count

   Alerts:
   - Throughput > 10k req/sec → investigate
   - Throughput < 100 req/sec → possible outage
   - Connection-Count > 500 → connection-leak?

ARTIFACT-PROTOKOLL

Artifacts (Must-Exist):
- [ ] instrumentation.ts (OpenTelemetry-Setup)
- [ ] middleware/observability.ts (Request-Tracking-Middleware)
- [ ] lib/metrics.ts (Prometheus-Metriken-Definitionen)
- [ ] app/api/health/route.ts (Health-Check-Endpoint)
- [ ] app/api/metrics/route.ts (Prometheus-Metrics-Export)
- [ ] monitoring/dashboards.json (Grafana-Dashboards)
- [ ] monitoring/alerts.yaml (Alert-Rules)
- [ ] docs/OBSERVABILITY.md (Monitoring-Guide)

DIRECTOR-ZUWEISUNG

Verantwortlich: Platform-Engineer + SRE-Team
Review-Fokus:
  - Metriken-Cardinality nicht zu hoch
  - Tracing sampling-rate konfiguriert
  - Alert-Rules nicht zu noisy

ULTRATHINK-LANGZEITTASKS

T1: Anomaly-Detection. Automatisches Alerting bei:
    - Latency spike > 2x baseline
    - Error-Rate Anstieg
    - Throughput Abfall

T2: Cost-Attribution. Track pro API-Key / Tenant:
    - Database-Queries
    - Cache-Hits
    - Bandwidth
    → kann zur Billing herangezogen werden

T3: Performance-Regression-Detection. Bei jedem Deploy:
    - Vergleiche Baseline (vorher) vs New-Version (nachher)
    - Wenn Regression > 10% → block deployment

T4: Customer-Specific-SLA-Monitoring. Enterprise-Customers haben SLOs:
    - 99.9% Uptime
    - p99-Latency < 500ms
    - Tracking pro Customer

VALIDATION-GATES

| Gate | Bedingung | Aktion |
|------|-----------|--------|
| Metrics-Export | /api/metrics exporter Prometheus-Format | Auto-Test |
| Health-Check | /api/health returns 200 | Smoke-Test |
| Trace-Export | Traces zu Jaeger/DataDog exportiert | Manual Test |
| Dashboard | Grafana-Dashboard loaded | Review |
| Alerts | Alert-Rules syntaktisch korrekt | Auto-Validate |

EXIT-PROTOKOLL

Phase-Completion-Kriterien:
✓ OpenTelemetry-Instrumentation aktiv
✓ Health-Check-Endpoint funktioniert
✓ Prometheus-Metriken werden exported
✓ Distributed-Tracing funktioniert
✓ Grafana-Dashboards deployed
✓ Alert-Rules konfiguriert
✓ N+1-Query-Detection aktiv
✓ Slow-Query-Logging aktiv
→ AUTO-TRIGGER: CROSS-PIPELINE-DEPENDENCIES + FINALIZATION

═══════════════════════════════════════════════════════════════════════════════

CROSS-PIPELINE-ABHAENGIGKEITEN

SECURITY-AUDIT-PIPELINE (Abhängigkeit: PHASE API-06, API-09)
─────────────────────────────────────────────────────────────────────────────
Trigger nach API-06 + API-09 Completion:
1. Security-Audit aller Auth-Mechanisms (OAuth, JWT, Passwords)
2. OWASP Top-10 Check: SQL-Injection, XSS, CSRF
3. Penetration-Test auf Rate-Limiting
4. API-Key-Rotation-Policy
5. Secrets-Rotation (Client-Secrets, Database-Passwords)

Artefakte: security-audit-report.md, remediation-plan.md

DATA-LAYER-PIPELINE (Abhängigkeit: PHASE API-07)
─────────────────────────────────────────────────────────────────────────────
Trigger nach API-07 Completion:
1. Data-Backup-Strategy (full, incremental, point-in-time)
2. Disaster-Recovery-Plan (RTO, RPO festlegen)
3. Data-Retention-Policy (GDPR, CCPA compliance)
4. Encryption-at-Rest und In-Transit
5. Data-Privacy-Audit (no PII in logs, no secrets in errors)

Artefakte: dr-plan.md, data-retention-policy.md

SSOT-GOVERNANCE-PIPELINE (Abhaengigkeit: PHASE API-02, API-08)
─────────────────────────────────────────────────────────────────────────────
Trigger nach API-02 + API-08 Completion:
1. Single Source of Truth Verification:
   - Zod-Schemas sind die einzige API-Contract-Wahrheit
   - OpenAPI-Spec wird AUS Zod generiert (nicht umgekehrt)
   - Keine hand-written Types auf Frontend (generiert)
   - Code ist SSOT, nicht Dokumentation

2. Schema-Governance:
   - Schema-Änderungen erfordern API-Version-Bump
   - Backward-Compatibility-Tests in CI
   - Deprecated-Endpoints haben Sunset-Date

Artefakte: ssot-governance-policy.md, schema-governance-rules.md

═══════════════════════════════════════════════════════════════════════════════

KONFIGURATIONS-SPEZIFIKATION

ENVIRONMENT-VARIABLES (zwingend zu setzen)
─────────────────────────────────────────────────────────────────────────────

DATABASE:
- DATABASE_URL (PostgreSQL Connection-String mit PgBouncer)
- DATABASE_REPLICA_URL (Read-Replica für SELECT-Queries)

REDIS:
- REDIS_URL (für Rate-Limiting, Caching, Session-Store)
- REDIS_PASSWORD (falls Redis mit Auth)

AUTHENTICATION:
- NEXTAUTH_URL (Base-URL für Auth-Callbacks)
- NEXTAUTH_SECRET (JWT-Secret, mindestens 32 Zeichen)
- GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
- GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
- JWT_SECRET, JWT_ALGORITHM

API-SECURITY:
- ALLOWED_ORIGINS (komma-separiert, z.B. https://app.example.com)
- CORS_CREDENTIALS (true falls Cookies needed)
- RATE_LIMIT_ENABLED (true in Production)
- RATE_LIMIT_WINDOW_MS (60000 für 1 Minute)
- RATE_LIMIT_MAX_REQUESTS (100 pro User pro Minute)

MONITORING:
- SENTRY_DSN (für Error-Reporting)
- OTEL_EXPORTER_OTLP_ENDPOINT (für Traces)
- LOG_LEVEL (info, warn, error, debug)
- METRICS_ENABLED (true)

THIRD-PARTY-SERVICES:
- STRIPE_SECRET_KEY (falls Payment)
- SENDGRID_API_KEY (falls Email)
- STRIPE_WEBHOOK_SECRET

═══════════════════════════════════════════════════════════════════════════════

METRIKEN UND KPIS

PRIMARY-KPIS (Business-fokussiert)
─────────────────────────────────────────────────────────────────────────────
- API-Availability: Uptime >= 99.9%
- Error-Rate: <= 0.5% (4xx + 5xx / total requests)
- Response-Time p95: <= 500ms
- Developer-Satisfaction: NPS >= 70

SECONDARY-KPIS (Technical)
─────────────────────────────────────────────────────────────────────────────
- Request-Latency-Distribution (p50, p95, p99)
- Cache-Hit-Rate: >= 70%
- Database-Query-Count pro Request: < 5 (N+1 prevention)
- Rate-Limit-Violations: < 2% (indicates bad clients or legitimate traffic surge)
- SSL-Certificate-Expiry: monitored (alert 30 days before)

ALERTING-THRESHOLDS
─────────────────────────────────────────────────────────────────────────────
- Latency p95 > 1000ms → page on-call
- Error-Rate > 2% → page on-call
- Health-Check failed → immediate alert
- Database-Connection-Pool exhausted → immediate alert
- Rate-Limit-Bypass detected → investigate
- Slow-Query > 10 seconds → log + review

═══════════════════════════════════════════════════════════════════════════════

MASTER-CHECKLIST: PIPELINE-COMPLETION

✓ PHASE API-01: API-Routes konfiguriert, Middleware-Chain funktioniert
✓ PHASE API-02: Zod-Schemas definiert, OpenAPI-Spec generiert
✓ PHASE API-03: Rate-Limiting aktiv, Redis verbunden
✓ PHASE API-04: Cache-Headers konfiguriert, ISR getestet
✓ PHASE API-05: Error-Handling RFC 7807 konform, Sentry integriert
✓ PHASE API-06: NextAuth.js konfiguriert, RBAC-Middleware aktiv
✓ PHASE API-07: Database-Connection-Pool läuft, Migrations deployed
✓ PHASE API-08: Version-Routing aktiv, Deprecation-Headers gesetzt
✓ PHASE API-09: Swagger-UI loadbar, SDK generiert, Docs vollständig
✓ PHASE API-10: OpenTelemetry aktiv, Dashboards deployed, Alerts configured

FINAL-VALIDATION:
✓ All Environment-Variables configured
✓ Security-Audit passed
✓ Load-Test (k6) passed (1000+ concurrent users)
✓ Penetration-Test passed
✓ GDPR/CCPA compliance verified
✓ Disaster-Recovery-Plan tested (RTO < 1 hour)
✓ Team trained on observability & monitoring

PIPELINE-STATUS: READY FOR PRODUCTION DEPLOYMENT

═══════════════════════════════════════════════════════════════════════════════
DOKUMENTSTATUS: FINAL SPECIFICATION — VALID FOR INFINITE OPTIMIZATION LOOP
SSOT-ANCHOR: Code ist Wahrheit. Diese Doc ist Navigation und Governance-Layer.
Letzte Aktualisierung: 2026-04-05T00:00:00Z
═══════════════════════════════════════════════════════════════════════════════