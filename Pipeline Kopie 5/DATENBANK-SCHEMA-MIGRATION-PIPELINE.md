===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-10 (DISCOVERY-PHASE-10), vor SEQ-11 (EXPANSION-PHASE-01)
BLOCK-NUMMER: 03 (DATENBANK-FUNDAMENT)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-discovery-context.md (Tech-Stack, bestehende DB-Struktur)
AUSGANGS-KONTEXTDATEI: .ai-db-context.md
AUSGANGS-TRIGGER: SEQ-11 (EXPANSION-PHASE-01) darf erst starten, wenn DB-08
  erfolgreich abgeschlossen und alle Validation-Gates bestanden sind.
DEFEKT-RUECKFUEHRUNG: Bei Defekten in dieser Pipeline wird der Loop ab DB-01
  neu gestartet, anschliessend alle abhaengigen Phasen ab SEQ-11.

===============================================================================

DATENBANK-SCHEMA-MIGRATION-PIPELINE: ORM-architektur, Typsicherheit und Datenbankintegrität
================================================================================

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────────────────────

Die Datenbank-Schema-Migration-Pipeline implementiert ein robustes System für Datenbankevolution, vom initialen Schema-Design über typsichere Queries bis zu Backup-Strategien und Multi-Environment-Synchronisierung. Die Pipeline verbindet ORM-Architektur (Prisma/Drizzle), automatisierte Migrations-Management, Performance-Optimierung und Datenschutz zu einem kohärenten Datenbank-Governance-Framework.

Das System integriert sich mit der API-Design-Pipeline (ORM-Entity-Definition), der SSOT-Governance (Schema als Single Source of Truth) und der Security-Pipeline (Audit-Logging, Verschlüsselung). Cross-Pipeline-Abhängigkeiten werden über standardisierte Schema-Export und Type-Generation koordiniert.

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-01 — ORM-Architektur (Prisma vs. Drizzle Entscheidungsmatrix)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Anforderungen für Datenbankzugriff, Kompatibilität mit PostgreSQL/MySQL/SQLite
Output:   Gewähltes ORM mit Basis-Schema, Type-Generierung, Repository-Pattern-Setup
Abhängigkeiten: Node.js 18+, PostgreSQL/MySQL/SQLite Datenbank, TypeScript Compiler
Abhängig von: DB-00-Initialisierung (nicht definiert; startete mit DB-01)
Triggerauslöser für: DB-02 (Migration-Lifecycle), DB-03 (Type-Safe-Queries)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Entscheidungsmatrix: Prisma vs. Drizzle vs. TypeORM

   | Kriterium | Prisma | Drizzle | TypeORM |
   |-----------|--------|---------|---------|
   | Learning-Curve | Niedrig | Mittel | Hoch |
   | Type-Safety | Excellent | Excellent | Gut |
   | Query-Performance | Mittel | Excellent | Mittel |
   | Migration-Support | Auto-generated | Manual | Auto + Manual |
   | Raw-SQL-Fallback | Ja | Ja | Ja |
   | Community | Sehr groß | Wachsend | Groß |
   | Bundlesize | 35KB | 15KB | 80KB |
   | Relationaler-Support | Vollständig | Vollständig | Vollständig |

   Empfehlung für Neuprojekte: Drizzle (Performance) oder Prisma (Ergonomie)
   Empfehlung für Legacy: TypeORM (max. Kompatibilität)

2. Prisma Setup (Falls Prisma gewählt)
   - Installation: npm install @prisma/client prisma
   - Initialisierung: npx prisma init
     * .env-Datei mit DATABASE_URL erstellen
     * prisma/ -Ordner mit schema.prisma
   - Schema-Definition in prisma/schema.prisma:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }

     generator client {
       provider = "prisma-client-js"
       output   = "../src/generated/prisma"
     }

     model User {
       id        Int       @id @default(autoincrement())
       email     String    @unique
       name      String?
       posts     Post[]
       createdAt DateTime  @default(now())
       updatedAt DateTime  @updatedAt
     }

     model Post {
       id        Int     @id @default(autoincrement())
       title     String
       content   String?
       published Boolean @default(false)
       author    User    @relation(fields: [authorId], references: [id])
       authorId  Int
       createdAt DateTime @default(now())
       updatedAt DateTime @updatedAt
     }
     ```
   - Type-Generierung: npx prisma generate
     * Generiert @prisma/client mit Type-Definitionen
     * Outputs: PrismaClient, Prisma.UserCreateInput, etc.

3. Drizzle Setup (Falls Drizzle gewählt)
   - Installation: npm install drizzle-orm drizzle-kit @types/pg
   - Konfiguration in drizzle.config.ts:
     ```typescript
     import { defineConfig } from 'drizzle-kit';
     export default defineConfig({
       schema: './src/db/schema.ts',
       out: './drizzle',
       driver: 'pg',
       dbCredentials: {
         connectionString: process.env.DATABASE_URL,
       },
     });
     ```
   - Schema-Definition in src/db/schema.ts:
     ```typescript
     import { pgTable, serial, text, boolean, timestamp, integer } from 'drizzle-orm/pg-core';
     import { relations } from 'drizzle-orm';

     export const users = pgTable('users', {
       id: serial('id').primaryKey(),
       email: text('email').unique().notNull(),
       name: text('name'),
       createdAt: timestamp('created_at').defaultNow(),
       updatedAt: timestamp('updated_at').defaultNow(),
     });

     export const posts = pgTable('posts', {
       id: serial('id').primaryKey(),
       title: text('title').notNull(),
       content: text('content'),
       published: boolean('published').default(false),
       authorId: integer('author_id').references(() => users.id),
       createdAt: timestamp('created_at').defaultNow(),
       updatedAt: timestamp('updated_at').defaultNow(),
     });

     export const usersRelations = relations(users, ({ many }) => ({
       posts: many(posts),
     }));

     export const postsRelations = relations(posts, ({ one }) => ({
       author: one(users, {
         fields: [posts.authorId],
         references: [users.id],
       }),
     }));
     ```
   - Type-Generierung: npx drizzle-kit generate:pg

4. Basis-Modell-Definition (Allgemeingültig)
   - Jede Tabelle sollte folgende Standard-Felder haben:
     * id: Primary Key (serial/bigserial für PostgreSQL)
     * created_at: Timestamp (DEFAULT NOW())
     * updated_at: Timestamp (DEFAULT NOW(), AUTO-UPDATE via Trigger)
     * deleted_at: Timestamp (NULL, für Soft-Delete Support)
   - Naming-Konventionen:
     * Tabellen: Plural, snake_case (users, orders, post_comments)
     * Spalten: snake_case (user_id, created_at, is_active)
     * Foreign Keys: [table_singular]_id (user_id, post_id)
     * Constraints: [table]_[column]_[type] (users_email_unique, posts_user_id_fk)

5. Relationen-Typen definieren
   - One-to-Many: User → Posts (Ein User hat viele Posts)
     * Foreign Key in posts-Tabelle: user_id
   - Many-to-Many: Authors ↔ Tags (Viele Authors haben viele Tags)
     * Junction-Tabelle: author_tags (author_id, tag_id)
     * Beide Foreign Keys in Junction-Tabelle
   - One-to-One: User ↔ Profile
     * Foreign Key in Profile: user_id mit UNIQUE Constraint
   - Self-Referencing: Category → Parent-Category
     * Foreign Key: parent_id verweist auf category.id in gleicher Tabelle

6. Enums und Typen
   - Prisma-Enums:
     ```prisma
     enum OrderStatus {
       PENDING
       PROCESSING
       SHIPPED
       DELIVERED
       CANCELLED
     }

     model Order {
       id        Int          @id @default(autoincrement())
       status    OrderStatus  @default(PENDING)
     }
     ```
   - Drizzle-Enums:
     ```typescript
     export const orderStatus = pgEnum('order_status', ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED']);

     export const orders = pgTable('orders', {
       id: serial('id').primaryKey(),
       status: orderStatus('status').default('PENDING'),
     });
     ```
   - Validierung: Enums sollten mit TypeScript-Typen synced sein

7. JSON-Felder und Complex Types
   - Prisma JSON-Field:
     ```prisma
     model Order {
       id            Int     @id
       metadata      Json?   // Untyped
       addressInfo   Address @db.Json? // Mit Type-Validation
     }

     type Address {
       street  String
       city    String
       zipCode String
       country String
     }
     ```
   - Drizzle JSON-Field:
     ```typescript
     export const orders = pgTable('orders', {
       id: serial('id').primaryKey(),
       metadata: jsonb('metadata').$type<{ key: string; value: any }>(),
     });
     ```
   - Wichtig: JSON-Felder sollten mit TypeScript-Interfaces validiert werden

8. Repository-Pattern Setup
   - Abstraktions-Layer zwischen Controller und ORM:
     ```typescript
     interface IUserRepository {
       create(data: CreateUserInput): Promise<User>;
       findById(id: number): Promise<User | null>;
       update(id: number, data: UpdateUserInput): Promise<User>;
       delete(id: number): Promise<void>;
     }

     export class PrismaUserRepository implements IUserRepository {
       constructor(private prisma: PrismaClient) {}

       async create(data: CreateUserInput): Promise<User> {
         return this.prisma.user.create({ data });
       }

       async findById(id: number): Promise<User | null> {
         return this.prisma.user.findUnique({ where: { id } });
       }

       async update(id: number, data: UpdateUserInput): Promise<User> {
         return this.prisma.user.update({ where: { id }, data });
       }

       async delete(id: number): Promise<void> {
         await this.prisma.user.delete({ where: { id } });
       }
     }
     ```
   - Vorteil: Leicht testbar, ORM-unabhängig (könnten Prisma mit Drizzle swappen)

9. Datenbank-Initialisierung
   - Für PostgreSQL (docker-compose.yml):
     ```yaml
     services:
       postgres:
         image: postgres:15-alpine
         environment:
           POSTGRES_USER: postgres
           POSTGRES_PASSWORD: secretpassword
           POSTGRES_DB: appdb
         ports:
           - "5432:5432"
         volumes:
           - postgres_data:/var/lib/postgresql/data
     volumes:
       postgres_data:
     ```
   - Umgebungsvariablen:
     ```
     DATABASE_URL=postgresql://postgres:secretpassword@localhost:5432/appdb
     ```
   - Datenbank-Verbindungstest:
     ```typescript
     import { PrismaClient } from '@prisma/client';
     const prisma = new PrismaClient();
     (async () => {
       try {
         await prisma.$queryRaw`SELECT 1`;
         console.log('Database connected');
       } catch (e) {
         console.error('Database connection failed', e);
       } finally {
         await prisma.$disconnect();
       }
     })();
     ```

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* schema.prisma oder src/db/schema.ts — ORM-Schema-Definition
* .env — DATABASE_URL und weitere DB-Konfiguration
* prisma.config.ts oder drizzle.config.ts — ORM-Konfiguration
* src/db/repositories/ — Repository-Pattern Implementierung
* src/db/types.ts — Generated Types und Custom Type-Definitions
* docker-compose.yml — Datenbank-Service-Definition (optional)
* orm-decision.md — Dokumentation der Prisma-vs-Drizzle-Entscheidung

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Database-Architects, Backend-Engineers
Genehmigung erforderlich: Tech-Lead (für ORM-Wahl und Schema-Design)
Review-Partner: Security-Team (für Datenschutz und Constraints)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Type-Safety nicht durchgängig
Wenn ORM-Types nicht genutzt werden und stattdessen `any` verwendet wird,
verliert Type-Generation seine Relevanz.
Lösung: ESLint-Rule gegen `any` in DB-Interfaces; Code-Review muss Types überprüfen.

FEHLERQUELLE 2 — N+1 Queries bei Relationen
Wenn lazy-loading aktiviert und Loop über Relationen (z.B. for each user → load posts),
entstehen tausende Queries.
Lösung: Explizite Include/Select in ORM-Queries; Never rely on implicit Lazy-Loading
in Loops.

FEHLERQUELLE 3 — Foreign-Key-Cycles
Wenn Schema zirkuläre Foreign-Key-Dependencies hat (A → B → A), können
Migrations und Deletes fehlschlagen.
Lösung: Schema-Analyse mit Foreign-Key-Graph; Ggf. Denormalisierung oder Junction-Tabelle.

FEHLERQUELLE 4 — JSON-Field nicht validiert
Wenn JSON-Field ohne Type-Validation gespeichert wird, können Invalid-Shapes landen
und später Code brechen.
Lösung: Zod oder JSON-Schema Validator vor Speicherung; Runtime-Validation zwingend.

FEHLERQUELLE 5 — Repository-Pattern nicht konsistent
Wenn nur einige Services Repository verwenden und andere direktes ORM-Access,
ist Testing und Refactoring chaotisch.
Lösung: Strikte Policy: Repository-Pattern ist Pflicht; Direct-ORM-Access nur in Tests.

FEHLERQUELLE 6 — Enum-Werte nicht synchronized
Wenn Enum-Definition in Schema nicht mit Frontend-Enums sync ist,
entstehen Type-Mismatches.
Lösung: Enums aus Backend generieren und Frontend importieren; Single Source of Truth.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: ORM ausgewählt und Setup
  ✓ Prisma oder Drizzle installiert und konfiguriert
  ✓ DATABASE_URL in .env gesetzt
  ✓ npx prisma generate oder drizzle-kit generate läuft ohne Fehler

Gate 2: Schema-Definition vollständig
  ✓ Alle Tabellen mit Standard-Feldern (id, created_at, updated_at, deleted_at)
  ✓ Relationen (Foreign Keys) definiert
  ✓ Enums für Status-Felder existieren

Gate 3: Type-Generierung funktioniert
  ✓ Generated Types in src/generated/ oder src/db/ vorhanden
  ✓ TypeScript-Compiler akzeptiert Generated-Types
  ✓ IDE Autocomplete funktioniert (Prisma.UserCreateInput, etc.)

Gate 4: Repository-Pattern Setup
  ✓ Base-Repository-Interface existiert
  ✓ Mindestens ein konkrete Repository-Implementation (z.B. UserRepository)
  ✓ Controllers nutzen Repositories, nicht direkte ORM-Calls

Gate 5: Datenbank-Verbindung
  ✓ Connection-String funktioniert
  ✓ SELECT 1 funktioniert über ORM
  ✓ Keine Connection-Fehler in Logs

Gate 6: Basis-Migrations durchgeführt
  ✓ npx prisma migrate dev funktioniert
  ✓ Migrations-Ordner (prisma/migrations oder drizzle/) existiert
  ✓ Datenbank hat Baseline-Tables

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-01 Abschluss:
→ Trigger DB-02 (Migration-Lifecycle): Migration-Files konfigurieren
→ Trigger DB-03 (Type-Safe-Queries): Repository-Implementation erweitern
→ Output an API-Design-Pipeline: Generated-Types für API-Definitions

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-02 — Migration-Lifecycle (Schema-Diff, Files, Rollback, Seed)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Schema-Änderungen (neue Tabellen, Spalten, Constraints)
Output:   Migration-Files, Rollback-Strategien, Seed-Data, Version-Control
Abhängigkeiten: Prisma/Drizzle-Setup (DB-01), Git-Repository, Migration-Tool-CLI
Abhängig von: DB-01 (ORM-Architektur)
Triggerauslöser für: DB-03 (Type-Generierung), DB-04 (Performance), CI/CD-Pipeline

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Migration-Strategie wählen
   - Option A: Auto-Generierung (Prisma, TypeORM)
     * Developer ändert schema.prisma
     * npx prisma migrate dev erstellt .sql-Migrations auto
     * Vorteil: Schnell, weniger manuelle Fehler
     * Nachteil: Begrenzte Kontrolle über Migrations-Logik
   - Option B: Manual-Migrations (Drizzle, FlywayDB, Liquibase)
     * Developer schreibt .sql oder .ts-Migration manuell
     * Vorteil: Vollständige Kontrolle, Performance-Optimierungen
     * Nachteil: Zeitaufwendig, Fehlerquellenanzahl höher
   - Empfehlung: Hybrid — Auto für einfache Changes, Manual für Complex-Logic

2. Prisma Migration-Workflow
   - Schema-Change durchführen (schema.prisma):
     ```prisma
     model User {
       id    Int     @id @default(autoincrement())
       email String  @unique
       phone String? // Neue Spalte
     }
     ```
   - Migration generieren: npx prisma migrate dev --name add_phone_to_users
     * Prisma vergleicht Current-Schema mit DB
     * Erstellt 20250405123456_add_phone_to_users.sql in prisma/migrations/
   - Migration-File Review (WICHTIG!):
     ```sql
     -- AlterTable
     ALTER TABLE "User" ADD COLUMN "phone" TEXT;
     ```
   - Migration-Validierung:
     * Syntax-Check: npx prisma migrate resolve --applied
     * Test in Staging: npx prisma migrate deploy --preview-feature
   - Production-Deployment:
     * CI/CD führt npx prisma migrate deploy aus
     * Wartet bis alle Migrations erfolgreich sind

3. Drizzle Migration-Workflow
   - Schema-Änderung durchführen (src/db/schema.ts):
     ```typescript
     export const users = pgTable('users', {
       id: serial('id').primaryKey(),
       email: text('email').unique().notNull(),
       phone: text('phone'), // Neue Spalte
     });
     ```
   - Migration generieren: npx drizzle-kit generate:pg
     * Erstellt drizzle/0001_add_phone.ts
   - Migration-File (TypeScript):
     ```typescript
     import { sql } from 'drizzle-orm';
     export async function up(db) {
       await db.execute(sql`ALTER TABLE users ADD COLUMN phone TEXT`);
     }
     export async function down(db) {
       await db.execute(sql`ALTER TABLE users DROP COLUMN phone`);
     }
     ```
   - Migration-Ausführung: npx drizzle-kit migrate --dialect pg

4. Migration-Naming-Konventionen
   - Format: YYYYMMDDHHMMSS_descriptive_name.sql
   - Beispiele:
     * 20250405_add_phone_to_users.sql
     * 20250405_create_payment_table.sql
     * 20250406_add_foreign_key_orders_to_users.sql
   - Beschreibungskriterium:
     * Aktion (add_, drop_, rename_, create_, alter_)
     * Ziel (column, table, index, constraint)
     * Kontext wenn nötig (optional)

5. Rollback-Strategien
   - Strategie A: Full-Rollback (Revert zu Previous-Version)
     * Prisma: npx prisma migrate resolve --rolled-back [migration_name]
     * Drizzle: Custom down-Function in Migration
     * Nutze wenn: Breaking-Change, Critical-Bug in Migration
     * Риск: Datenverlust, Downtime
   - Strategie B: Forward-Fix (Neue Migration zur Behebung)
     * Erstelle neue Migration mit Fix-Logic
     * Alter Daten bleibt bestehen
     * Nutze wenn: Safer, Keine Downtime
     * Empfohlen für Production
   - Strategie C: Feature-Flags (Nicht sofort aktivieren)
     * Migration fügt Spalte/Tabelle hinzu
     * Code ist Backwards-Compatible
     * Feature-Flag kontrollt Nutzung
     * Nach Stabilität: Flag aktivieren, alte Code-Paths entfernen

6. Zero-Downtime Migrations
   - Problem: Größere Tabellen-Alterationen können Locks verursachen (Downtime)
   - Lösung für PostgreSQL:
     * Nutze CONCURRENT-Index-Creation: CREATE INDEX CONCURRENTLY
     * Nutze ALTER TABLE ... ADD COLUMN ... DEFAULT ... (nicht sofort)
     * Constraints in separaten Transaktionen
   - Beispiel Zero-Downtime-Migration:
     ```sql
     -- Migration 1: Add Column (Non-Blocking)
     ALTER TABLE users ADD COLUMN phone TEXT;
     -- Migration 2 (nächste Woche): Add Constraint
     ALTER TABLE users ALTER COLUMN phone SET NOT NULL;
     ```
   - Für größere Refactorings:
     * Shadow-Table (kopiert alte Daten)
     * Dual-Writes (neue UND alte Tabelle)
     * Graduelle Umstellung (Feature-Flag)
     * Cut-Over nach Stabilitäts-Periode

7. Data-Migration innerhalb Migrations
   - Nicht nur Schema-Änderungen, auch Daten-Transformationen:
     ```sql
     -- Add new column with computed value
     ALTER TABLE users ADD COLUMN full_name TEXT;

     UPDATE users SET full_name = CONCAT(first_name, ' ', last_name);

     -- Now make it NOT NULL und drop alte Spalten
     ALTER TABLE users ALTER COLUMN full_name SET NOT NULL;
     ALTER TABLE users DROP COLUMN first_name, DROP COLUMN last_name;
     ```
   - Vorsicht: Data-Migrations können lange laufen (Tabellen > 10GB)
   - Lösung: In Production während Low-Traffic-Fenster durchführen

8. Seed-Data und Development-Fixtures
   - Prisma-Seed:
     * prisma/seed.ts erstellen:
       ```typescript
       import { PrismaClient } from '@prisma/client';
       const prisma = new PrismaClient();

       async function main() {
         const user = await prisma.user.create({
           data: {
             email: 'test@example.com',
             name: 'Test User',
           },
         });
         console.log('Created user:', user);
       }

       main()
         .catch(e => {
           console.error(e);
           process.exit(1);
         })
         .finally(async () => {
           await prisma.$disconnect();
         });
       ```
     * package.json prisma-Script: "prisma": { "seed": "ts-node prisma/seed.ts" }
     * Ausführung: npx prisma db seed
   - Seed-Strategie:
     * Development: Umfangreich (100+ Test-Users, Produkte, Orders)
     * Staging: Realistic-Daten (anonymisierte Prod-Snapshots)
     * Production: Nie automatisch seeden
   - Idempotent-Seeding (mehrfach safe):
     ```typescript
     async function main() {
       const count = await prisma.user.count();
       if (count > 0) {
         console.log('Database already seeded');
         return;
       }
       // Seed logic
     }
     ```

9. Migration-Testing
   - Test-Database vor Production:
     * Test-DB: docker run postgres:15 (separate DB)
     * TEST_DATABASE_URL=postgresql://... npm test:migrations
     * Führe alle Migrations aus, verifiziere Schema
   - Backward-Compatibility-Test:
     * Migration UP durchführen
     * Migration DOWN durchführen
     * Verifiziere identisches Original-Schema
   - Performance-Test für Data-Migrations:
     * Führe Migration auf Copy von Prod-Data aus
     * Messe Duration + Lock-Time
     * Falls > akzeptable Downtime: Refactor für Zero-Downtime

10. Migration-Versioning und Git-Workflow
    - Git-Integration:
      * Migrations/ -Ordner in Git committed
      * Jeder Branch hat eigene Migrations (Merging kann konfligieren)
      * Konflikt-Auflösung: Manuelle Review + Re-Test
    - CI/CD Automation:
      * Pre-Deploy: npx prisma migrate deploy --preview-feature
      * Fail-Fast wenn Migration fehlschlägt
      * Post-Deploy: Datenbank-Verifikations-Queries
    - Dokumentation pro Migration:
      * Comment in .sql: Warum wurde diese Migration durchgeführt?
      * Link zu Jira-Ticket oder GitHub-Issue
      * Known-Limitations oder Abhängigkeiten

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* prisma/migrations/[timestamp]_[name].sql — Auto-generierte Migrations
* drizzle/[timestamp]_[name].ts — Manual oder Auto-generierte Drizzle-Migrations
* prisma/seed.ts — Development-Seed-Script
* migrations-guide.md — Dokumentation für Migration-Workflow
* rollback-procedure.md — Schritt-für-Schritt Rollback-Anleitung
* zero-downtime-checklist.md — Checklist für große Migrations
* test-database.env — Test-Database-Configuration

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Database-Engineers, Backend-Team-Lead
Genehmigung erforderlich: Tech-Lead (für Production-Migrations), DevOps (für Timing)
Review-Partner: QA-Team (für Migration-Testing), Security (für Data-Privacy)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Zerstörende Migrations nicht getestet
Wenn Data-Migration mit GROUP BY / DISTINCT "zu spät" getestet wird,
können Tausende Datensätze verloren gehen (Prod-Disaster).
Lösung: Alle Migrations müssen auf Prod-Data-Copy getestet sein;
Dry-Run-Mode (Backup vor Migration, Verify nach).

FEHLERQUELLE 2 — Rollback fehlschlagen
Wenn Rollback-Script (DOWN-Teil der Migration) nicht getestet ist,
kann Rollback fehlschlagen und Daten-Inkonsistenz entstehen.
Lösung: UP+DOWN Roundtrip-Test: führe UP aus, dann DOWN, verifiziere
Original-Schema.

FEHLERQUELLE 3 — Locks in Production
Wenn Migration zu lange locks acquires (z.B. ALTER TABLE ohne CONCURRENTLY),
können Requests timeout und Customers sehen Errors.
Lösung: Lock-Duration-Test vor Production; Zero-Downtime-Strategien für Große-Tabellen.

FEHLERQUELLE 4 — Seed-Data nicht idempotent
Wenn Seed-Script mehrfach laufen und UNIQUE-Constraints verletzen,
können Developers von corrupted Seed-State frustiert werden.
Lösung: Idempotent-Seed (check if exists before insert);
oder --seed --reset um Datenbank zu löschen.

FEHLERQUELLE 5 — Migrations-Naming-Chaos
Wenn Migrations Wild durcheinander benannt werden (add_table, new_col, fix),
wird Migrations-History unlesbar und Debugging schwer.
Lösung: Strikte Naming-Convention: YYYYMMDD_action_target.sql.

FEHLERQUELLE 6 — Foreign-Key-Reihenfolge falsch
Wenn Migration versucht Foreign-Key hinzuzufügen aber Ziel-Tabelle existiert nicht,
schlägt Migration fehl.
Lösung: CREATE TABLE für Dependencies-Ordnung prüfen;
oder foreign key constraints am Ende hinzufügen.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Migrations-System funktioniert
  ✓ npx prisma migrate dev oder drizzle-kit migrate funktioniert
  ✓ Neue Migrations werden auto-generiert/manuell erstellt
  ✓ Migration-Status kann abgefragt werden

Gate 2: Rollback-Fähigkeit
  ✓ DOWN-Teil jeder Migration funktioniert (Prisma/Drizzle)
  ✓ UP+DOWN Roundtrip-Test erfolgreich
  ✓ Keine Fehler bei Rollback

Gate 3: Seed-Data funktioniert
  ✓ npx prisma db seed funktioniert
  ✓ Test-Daten sind in Datenbank vorhanden
  ✓ Seed ist idempotent (2x läuft ohne Error)

Gate 4: Migration-Testing in CI
  ✓ Test-Database für CI/CD vorhanden
  ✓ Migrations-Test in CI-Pipeline läuft
  ✓ Test-Failure würde Deployment blocken

Gate 5: Zero-Downtime Review
  ✓ Große Migrations (> 10GB Tabellen) wurden reviewed
  ✓ Lock-Duration geschätzt oder gemessen
  ✓ Entweder Zero-Downtime-Strategie oder Downtime-Fenster scheduled

Gate 6: Dokumentation vorhanden
  ✓ Migration-Workflow dokumentiert
  ✓ Rollback-Prozedur dokumentiert
  ✓ Seed-Daten-Beschreibung vorhanden

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-02 Abschluss:
→ Trigger DB-03 (Type-Safe-Queries): Generated-Types nach Migrations verwenden
→ Output zu CI/CD-Pipeline: Migrations-Test in Build-Process integrieren
→ Input an DB-07 (Multi-Environment): Migration-Drift-Detection konfigurieren

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-03 — Typsichere Queries (Generated-Types, Raw-Query-Escaping, Query-Builder)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    ORM-Schema mit Generated-Types (DB-01, DB-02), Datenbank-Queries
Output:   Type-Safe Query-Patterns, SQL-Injection-Prevention, Query-Builder-Wrapper
Abhängigkeiten: TypeScript-Compiler, Zod/TypeBox für Runtime-Validation, ESLint für Type-Checking
Abhängig von: DB-01 (ORM), DB-02 (Migrations)
Triggerauslöser für: DB-04 (Performance-Optimization), API-Design-Pipeline

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Generated-Types nutzen (Prisma)
   - Automatisch generierte Types aus schema.prisma:
     ```typescript
     import { Prisma, PrismaClient } from '@prisma/client';

     type UserCreateInput = Prisma.UserCreateInput;
     type UserUpdateInput = Prisma.UserUpdateInput;
     type UserWhereUniqueInput = Prisma.UserWhereUniqueInput;

     // Typsicher:
     const user: UserCreateInput = {
       email: 'test@example.com',
       name: 'Test',
       // phone: 'invalid' // TypeScript Error: nicht im Schema
     };
     ```
   - Vorteil: Compile-Time-Sicherheit, IDE-Autocomplete, Refactoring-sicher

2. Generated-Types nutzen (Drizzle)
   - Automatisch generierte Types aus schema.ts:
     ```typescript
     import { users, posts } from './db/schema';
     import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

     type User = InferSelectModel<typeof users>;
     type NewUser = InferInsertModel<typeof users>;

     // Typsicher:
     const newUser: NewUser = {
       email: 'test@example.com',
       name: 'Test',
     };
     ```

3. SQL-Injection-Prevention: Parameterized Queries
   - FALSCH (SQL-Injection-Sicherheitslücke):
     ```typescript
     const userId = req.query.id;
     const query = `SELECT * FROM users WHERE id = ${userId}`;
     const result = await db.query(query);
     // Attacker: ?id=1; DROP TABLE users;--
     ```
   - RICHTIG (Parameterized/Prepared Statements):
     ```typescript
     // Prisma (Automatic):
     const user = await prisma.user.findUnique({
       where: { id: parseInt(userId) },
     });

     // Drizzle:
     import { eq } from 'drizzle-orm';
     const user = await db.select().from(users).where(eq(users.id, parseInt(userId)));

     // Raw-SQL (Manual):
     const result = await db.query(
       'SELECT * FROM users WHERE id = $1', // $1 = Parameter placeholder
       [userId] // Separate array mit Parametern
     );
     ```
   - Prinzip: SQL-Template separieren von Daten-Parametern

4. Raw-Query-Escaping (Falls notwendig)
   - Manchmal notwendig für Complex-Queries die ORM nicht unterstützt
   - Niemals String-Konkatenation:
     ```typescript
     // FALSCH:
     const email = req.body.email;
     const unsafe = `WHERE email = '${email}'`; // SQL-Injection

     // RICHTIG - Parameterized:
     const safe = `WHERE email = $1`;
     const params = [email];
     ```
   - Prisma Raw Query:
     ```typescript
     const result = await prisma.$queryRaw`
       SELECT * FROM users WHERE email = ${email}
     `;
     // Template-Literal mit ${ } = auto-parameterized
     ```
   - Drizzle Raw Query:
     ```typescript
     import { sql } from 'drizzle-orm';
     const result = await db.execute(
       sql`SELECT * FROM users WHERE email = ${email}`
     );
     ```

5. Query-Builder Wrapper für Komplexe Queries
   - Problem: Große JOINs und WHERE-Clauses können Code-Explosion verursachen
   - Lösung: Custom Query-Builder:
     ```typescript
     interface QueryFilter {
       field: keyof User;
       operator: 'eq' | 'gt' | 'lt' | 'like';
       value: any;
     }

     export class UserQueryBuilder {
       private filters: QueryFilter[] = [];

       where(field: keyof User, operator: string, value: any): this {
         this.filters.push({ field, operator, value });
         return this;
       }

       async execute(): Promise<User[]> {
         let query = prisma.user.findMany();
         for (const filter of this.filters) {
           // Dynamische WHERE-Clause
         }
         return query;
       }
     }

     // Nutzung:
     const users = await new UserQueryBuilder()
       .where('email', 'like', '%@example.com')
       .where('status', 'eq', 'ACTIVE')
       .execute();
     ```

6. Type-Safe Filtering und Sorting
   - Ziel: Keine Runtime-Fehler bei typierten Filtern
   - Validierung mit Zod:
     ```typescript
     import { z } from 'zod';

     const FilterSchema = z.object({
       email: z.string().email().optional(),
       status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
       sortBy: z.enum(['email', 'createdAt']).default('createdAt'),
       order: z.enum(['asc', 'desc']).default('asc'),
     });

     type Filter = z.infer<typeof FilterSchema>;

     async function listUsers(filter: unknown) {
       const validated = FilterSchema.parse(filter); // Throws if invalid
       // Jetzt validated ist typsicher
       const users = await prisma.user.findMany({
         where: {
           email: { contains: validated.email },
           status: validated.status,
         },
         orderBy: { [validated.sortBy]: validated.order },
       });
     }
     ```

7. Relation-Loading und N+1 Prevention
   - Problem: Für jeden User separat Posts laden = N+1 Queries
     ```typescript
     // FALSCH (N+1):
     const users = await prisma.user.findMany();
     for (const user of users) {
       user.posts = await prisma.post.findMany({
         where: { authorId: user.id }
       }); // N+1 Queries!
     }

     // RICHTIG (Single Query):
     const users = await prisma.user.findMany({
       include: { posts: true }
     });
     // Single Query with JOIN
     ```
   - Drizzle-Version:
     ```typescript
     import { eq } from 'drizzle-orm';
     const users = await db.query.users.findMany({
       with: { posts: true }
     });
     ```

8. Batch-Queries für Performance
   - Problem: 1000 Queries für 1000 Items = Slow
   - Lösung: Batch Queries:
     ```typescript
     // Prisma Batch:
     const ids = [1, 2, 3, 4, 5];
     const users = await prisma.user.findMany({
       where: { id: { in: ids } } // WHERE id IN (1,2,3,4,5)
     });

     // Drizzle Batch:
     import { inArray } from 'drizzle-orm';
     const users = await db
       .select()
       .from(users)
       .where(inArray(users.id, ids));
     ```
   - Wichtig: Batch-Size-Limits (z.B. max 1000 IDs pro Query)

9. Transaction-Safety
   - Problem: Multi-Step-Operations können halb-complete sein bei Fehler
   - Lösung: Transactions:
     ```typescript
     // Prisma Transaction:
     const result = await prisma.$transaction(async (tx) => {
       const user = await tx.user.create({ data: { email: 'test@example.com' } });
       const post = await tx.post.create({
         data: {
           title: 'Hello',
           authorId: user.id
         }
       });
       return { user, post };
     });
     // Wenn Error in tx: rollback beide Operations

     // Drizzle Transaction:
     const result = await db.transaction(async (tx) => {
       const user = await tx.insert(users).values({ email: 'test@example.com' });
       const post = await tx.insert(posts).values({ title: 'Hello', authorId: 1 });
       return { user, post };
     });
     ```

10. Type-Strikte API-Responses
    - Ziel: Ensure API-Response-Shape matcht Types
    - Definiere Response-Types explizit:
      ```typescript
      type UserResponse = Omit<User, 'passwordHash'> & {
        postsCount: number;
      };

      async function getUserWithPostsCount(id: number): Promise<UserResponse> {
        const user = await prisma.user.findUnique({
          where: { id },
          select: {
            id: true,
            email: true,
            name: true,
            _count: { select: { posts: true } }
          }
        });
        return {
          ...user,
          postsCount: user._count.posts
        };
      }
      ```

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* src/db/queries/ — Query-Builder und Query-Wrapper-Funktionen
* src/db/types.ts — Generated-Types und Custom Type-Definitions
* src/validation/ — Zod-Schemas für Query-Filter und Input-Validation
* src/db/repositories/ — Repository-Pattern mit Type-Safe-Methods
* query-patterns.md — Dokumentation für häufige Query-Patterns
* sql-injection-guide.md — Security-Richtlinien für Raw-Queries
* transaction-examples.ts — Beispiele für Transaction-Nutzung

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Backend-Engineers, TypeScript-Architects
Genehmigung erforderlich: Tech-Lead (für Query-Patterns), Security (für SQL-Injection-Prevention)
Review-Partner: QA-Team (für Type-Coverage-Tests)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Type-Safety mit Any brechen
Wenn Developers `any` für Datenbank-Results verwenden,
verliert Type-System Relevanz.
Lösung: ESLint-Rule `no-explicit-any` in DB-Code; Strikte Code-Review.

FEHLERQUELLE 2 — SQL-Injection durch String-Interpolation
Wenn Raw-Queries mit String-Konkatenation geschrieben werden,
können Attackers Datenbank-Kommandit injizieren.
Lösung: Alle Raw-Queries müssen Parameterized sein; Linting für `${}` Pattern.

FEHLERQUELLE 3 — N+1 Queries nicht erkannt
Wenn Performance-Regression durch N+1 Silent passiert,
können Queries von 100ms auf 100s degradieren.
Lösung: Query-Logger (Pino/Winston) mit Duration; Alert wenn > 50ms.

FEHLERQUELLE 4 — Transaction-Isolation falsch
Wenn Transaction-Level zu schwach (READ-UNCOMMITTED), können Race-Conditions entstehen.
Lösung: Explizite Isolation-Level setzen (SERIALIZABLE für Critical-Ops).

FEHLERQUELLE 5 — Generated-Types nicht refreshed
Wenn Schema.prisma geändert aber npx prisma generate nicht aufgerufen,
sind Generated-Types stale und Typen falsch.
Lösung: Pre-Commit-Hook erzwingt npx prisma generate.

FEHLERQUELLE 6 — Batch-Size-Limits ignoriert
Wenn WHERE id IN ([1000 IDs]) in Single-Query, können Database-Timeouts entstehen.
Lösung: Batch-Size-Limit (z.B. max 100 IDs pro Query), Loop für Chunks.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Generated-Types funktionieren
  ✓ TypeScript-Compiler akzeptiert Generated-Types
  ✓ IDE-Autocomplete für Prisma/Drizzle-Methods funktioniert
  ✓ Type-Fehler in Code werden detected

Gate 2: SQL-Injection Prevention
  ✓ Keine String-Interpolation in Raw-Queries
  ✓ Alle Queries nutzen Parameter-Placeholders ($1, $2)
  ✓ Linting prüft auf unsichere Patterns

Gate 3: Query-Builder funktioniert
  ✓ Custom Query-Builder kompiliert
  ✓ Filtering mit Builder-Pattern funktioniert
  ✓ Generated-Queries sind performant (< 50ms für einfache Queries)

Gate 4: Relation-Loading optimiert
  ✓ Keine N+1 Queries in häufigen Workflows
  ✓ Include/With nutzen Joins statt separate Queries
  ✓ Query-Log zeigt Single-Batch-Query statt Multiple

Gate 5: Batch-Queries implementiert
  ✓ Bulk-Operations nutzen WHERE IN statt Loops
  ✓ Batch-Size-Limits konfiguriert (max 1000)
  ✓ Performance-Test für Batch vs. Loop zeigt Verbesserung

Gate 6: Transactions für Critical-Ops
  ✓ Multi-Step-Operations in Transactions
  ✓ Rollback bei Errors funktioniert
  ✓ Transaction-Logs zeigen erfolgreiche Commits

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-03 Abschluss:
→ Trigger DB-04 (Performance-Optimization): Query-Performance-Baseline messen
→ Output zu API-Design-Pipeline: Type-Safe-API-Response-Patterns definieren
→ Input an Security-Pipeline: SQL-Injection-Prevention bestätigen

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-04 — Performance-Optimierung (Indexes, EXPLAIN ANALYZE, N+1, Pooling)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Production-Queries, Slow-Query-Logs, Performance-Baseline
Output:   Index-Strategie, Query-Optimization, Connection-Pooling, Performance-Target-SLAs
Abhängigkeiten: PostgreSQL/MySQL-Admin-Tools (EXPLAIN ANALYZE, Slow-Query-Log), Profiling-Tools (pgAdmin, DataGrip)
Abhängig von: DB-03 (Type-Safe-Queries)
Triggerauslöser für: PM-03 (Infrastruktur-Monitoring)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Index-Strategien (B-Tree, GIN, GiST, BRIN)
   - B-Tree Indexes (Standard):
     * Für Equality und Range-Queries: WHERE id = 1, WHERE created_at > '2025-01-01'
     * Primary Key ist automatisch B-Tree
     * Beispiel: CREATE INDEX idx_users_email ON users(email);
     * Größe: ~10% der Tabellen-Größe
   - GIN (Generalized Inverted Index):
     * Für Array und JSON-Felder
     * Beispiel: CREATE INDEX idx_tags_gin ON posts USING GIN(tags);
     * Für JSON-Search: CREATE INDEX idx_metadata_gin ON orders USING GIN(metadata);
   - GiST (Generalized Search Tree):
     * Für Geospatial-Daten (PostGIS)
     * Beispiel: CREATE INDEX idx_locations_gist ON addresses USING GIST(location);
   - BRIN (Block Range INdex):
     * Für sehr große, sortierte Tabellen (Zeitserien-Daten)
     * Kleiner als B-Tree, schneller für Range-Queries
     * Beispiel: CREATE INDEX idx_logs_brin ON logs USING BRIN(created_at);

2. Index-Strategie für häufige Queries
   - Analysiere häufige WHERE-Clauses:
     * WHERE user_id = ? → Index auf user_id
     * WHERE status = 'ACTIVE' AND created_at > ? → Composite-Index (status, created_at)
     * WHERE email LIKE 'test%' → Index auf email (LIKE mit % am Anfang profitiert)
   - Composite-Indexes:
     ```sql
     -- Gut für: WHERE status = 'ACTIVE' AND user_id = 123
     CREATE INDEX idx_orders_status_user ON orders(status, user_id);

     -- Nicht gut für: WHERE user_id = 123 AND status = 'ACTIVE'
     -- (Spalten-Reihenfolge ist wichtig!)
     ```
   - Index-Covering (Include unused Spalten):
     ```sql
     -- Index enthält auch SELECT-Spalten, keine Table-Access nötig
     CREATE INDEX idx_users_email_inc ON users(email) INCLUDE (id, name);
     SELECT id, name FROM users WHERE email = 'test@example.com';
     -- Index-Only-Scan (sehr schnell)
     ```

3. EXPLAIN ANALYZE für Query-Optimization
   - Understand Query-Execution-Plan:
     ```sql
     EXPLAIN ANALYZE
     SELECT * FROM orders WHERE user_id = 123 AND status = 'SHIPPED';
     ```
   - Output-Analyse:
     ```
     Seq Scan on orders (cost=0.00..2500.00 rows=50 width=200)
       Filter: (user_id = 123 AND status = 'SHIPPED')
       Rows Removed by Filter: 50000
     ```
     * "Seq Scan" = Bad! Full-Table-Scan, 50000 Reihen durchsucht
     * Solution: Index auf (user_id, status) erstellen
   - Mit Index:
     ```
     Index Scan using idx_orders_user_status on orders
       Index Cond: (user_id = 123 AND status = 'SHIPPED')
       Rows: 50
     ```
     * "Index Scan" = Good! Direkt zu 50 Reihen, 50000 skipped

4. Slow-Query-Logging und Identification
   - PostgreSQL slow-query-log konfigurieren:
     ```sql
     ALTER SYSTEM SET log_min_duration_statement = 1000; -- 1 second
     SELECT pg_reload_conf();
     ```
   - Queries > 1 Sekunde werden geloggt:
     ```
     duration: 2345.123 ms  statement: SELECT * FROM orders WHERE status = 'PENDING';
     ```
   - Analyze Top-Slow-Queries:
     * Welche Queries sind am langsamsten?
     * Wie oft werden sie aufgerufen?
     * Können Indexes helfen?
   - pgAdmin oder DataGrip GUI für Slow-Query-Analyse

5. Query-Optimierungen
   - Reduce SELECT-Spalten:
     ```typescript
     // FALSCH: Alle Spalten geladen
     const user = await prisma.user.findUnique({ where: { id: 1 } });

     // RICHTIG: Nur nötige Spalten
     const user = await prisma.user.findUnique({
       where: { id: 1 },
       select: { id: true, email: true, name: true }
     });
     ```
   - Filter BEFORE Sorting:
     ```typescript
     // FALSCH: Sort huge result-set, dann take 10
     const users = await prisma.user.findMany({
       orderBy: { createdAt: 'desc' },
       take: 10
     }); // Database muss 1M Reihen sortern!

     // RICHTIG: Filter first, then sort small set
     const users = await prisma.user.findMany({
       where: { status: 'ACTIVE' },
       orderBy: { createdAt: 'desc' },
       take: 10
     });
     ```
   - Pagination statt Offset:
     ```typescript
     // FALSCH: Skip ist ineffizient
     const page2 = await prisma.user.findMany({
       skip: 10000,
       take: 10
     }); // Database überspringt 10000 Reihen

     // RICHTIG: Cursor-based pagination
     const page2 = await prisma.user.findMany({
       cursor: { id: lastUserId },
       skip: 1,
       take: 10
     }); // Database springt direkt zu Cursor
     ```

6. Connection-Pooling (PgBouncer/pgPool)
   - Problem: Jeder Request = neue Connection = Overhead
   - Lösung: Connection-Pool reuse Connections
   - PgBouncer Setup (zwischen App und Database):
     ```
     [databases]
     appdb = host=localhost port=5432 dbname=appdb user=postgres password=secret

     [pgbouncer]
     pool_mode = transaction  # Connection returned nach jedem Transaction
     max_client_conn = 1000
     default_pool_size = 25   # Pooled connections
     min_pool_size = 10
     ```
   - Prisma mit PgBouncer:
     ```
     DATABASE_URL=postgresql://postgres:secret@localhost:6432/appdb
     # PgBouncer läuft auf Port 6432, pooled Connections
     ```
   - Node.js pg-pool direkt:
     ```typescript
     const { Pool } = require('pg');
     const pool = new Pool({
       connectionString: process.env.DATABASE_URL,
       max: 20,
       min: 5,
       idleTimeoutMillis: 30000,
     });
     ```

7. Caching Strategy für häufige Queries
   - Query-Result-Caching (Redis):
     ```typescript
     async function getUserPosts(userId: number) {
       const cacheKey = `user:${userId}:posts`;

       // Check cache first
       const cached = await redis.get(cacheKey);
       if (cached) return JSON.parse(cached);

       // Query if not cached
       const posts = await prisma.post.findMany({
         where: { authorId: userId }
       });

       // Cache for 1 hour
       await redis.setex(cacheKey, 3600, JSON.stringify(posts));
       return posts;
     }
     ```
   - Cache-Invalidation-Strategien:
     * Time-based: Cache expiriert nach X Minuten
     * Event-based: Post erstellt → Cache invalidieren
     * Manual: Admin-API zum Cache-Clear
   - Wichtig: Cached-Data muss schneller sein als Fresh-Data

8. Database-Monitoring und Alerting
   - Metriken tracken:
     * Query-Duration-Histogram (P50, P95, P99)
     * Connection-Pool-Utilization (% connections used)
     * Slow-Query-Count (per Minute)
     * Table-Size und Index-Size
   - Alerts setzen:
     * P95-Latency > 500ms → P2 Alert
     * Connection-Pool > 90% utilization → Scale-Warning
     * Index-Bloat > 50% → Maintenance-Alert
   - Prometheus-Metrics:
     ```typescript
     const queryDuration = new Histogram({
       name: 'db_query_duration_seconds',
       help: 'Database query duration',
       labelNames: ['query_type', 'status'],
     });

     // In Query-Wrapper:
     const timer = queryDuration.startTimer();
     try {
       const result = await prisma.user.findMany(...);
       timer({ query_type: 'find_many', status: 'success' });
     } catch (e) {
       timer({ query_type: 'find_many', status: 'error' });
     }
     ```

9. Vertical vs. Horizontal Scaling
   - Vertical (Scale-Up): Mehr CPU/RAM für Single-Server
     * Einfacher, besser für Single-Writer-Setups
     * Limits: 2TB RAM kostet Millionen
   - Horizontal (Scale-Out): Multiple Database-Replicas
     * Read-Replica: Kopie für READ-Queries
     * Primary-Replica: Primary für WRITE, Replicas für READ
     * Load-Balancer routet SELECTs zu Replicas, UPDATEs zu Primary
   - Implementierung:
     ```typescript
     const primaryDb = new PrismaClient({ datasources: { db: { url: process.env.PRIMARY_DB } } });
     const replicaDb = new PrismaClient({ datasources: { db: { url: process.env.REPLICA_DB } } });

     // WRITE auf Primary
     await primaryDb.user.create({ data: { email: 'test@example.com' } });

     // READ von Replica
     const user = await replicaDb.user.findUnique({ where: { id: 1 } });
     ```

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* index-strategy.sql — INDEX-Definition für alle kritischen Queries
* query-optimization-guide.md — Dokumentation für häufige Optimierungen
* pgbouncer.conf — PgBouncer-Konfiguration für Connection-Pooling
* slow-query-analysis.sql — Queries zum Identify von Slow-Queries
* db-monitoring-queries.sql — Prometheus-Exporter-Queries
* cache-strategy.ts — Redis-Caching für häufige Queries
* performance-baseline.json — Baseline-Metriken (P50/P95/P99)

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Database-Performance-Engineers, DevOps
Genehmigung erforderlich: Tech-Lead (für Index-Strategien), DBA (für Production-Optimization)
Review-Partner: Monitoring-Team (für Alert-Thresholds)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Index-Bloat unerkannt
Wenn Indexes fragmentiert werden (durch viele Updates/Deletes),
werden sie trotz Existenz nicht genutzt (Optimizer meint Seq-Scan schneller).
Lösung: Regelmäßige ANALYZE + REINDEX; Monitoring für Index-Unused-State.

FEHLERQUELLE 2 — Composite-Index-Reihenfolge falsch
Wenn Composite-Index (A, B) aber Query nutzt (B, A),
wird Index nicht verwendet.
Lösung: Index-Column-Order entspricht Query-Filter-Order; Test mit EXPLAIN.

FEHLERQUELLE 3 — Connection-Pool-Exhaustion
Wenn Pool zu klein (z.B. max=5 bei 100 concurrent Requests),
warten Requests auf Connection → Timeout-Errors.
Lösung: Pool-Size = Expected-Concurrent-Connections * 1.5; Monitoring.

FEHLERQUELLE 4 — Cache-Invalidation-Logic falsch
Wenn Cache nicht invalidiert wird bei Data-Updates,
sehen Clients stale Data (z.B. Post noch im Cache obwohl gelöscht).
Lösung: Event-driven Cache-Invalidation; Pre-Expiry bei Critical-Data.

FEHLERQUELLE 5 — Read-Replica-Lag unbeachtet
Wenn Replica 10s hinter Primary, und Data sofort nach Write gelesen,
sieht Client old Data.
Lösung: Nach Write → Read von Primary (nicht Replica) für 1-2s; oder akzeptiere eventual consistency.

FEHLERQUELLE 6 — Monitoring-Lücken
Wenn keine Slow-Query-Logging konfiguriert, werden Degradations erst
bemerkt wenn Customers beschweren.
Lösung: Slow-Query-Log + Prometheus-Metrics + Alerting = obligatorisch.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Index-Strategie definiert
  ✓ Alle häufigen WHERE-Clauses haben Indexes
  ✓ Composite-Indexes für Multi-Column-Filters
  ✓ Index-Covering implementiert für häufige Queries

Gate 2: Query-Performance optimiert
  ✓ EXPLAIN ANALYZE für Top-10-Slow-Queries durchgeführt
  ✓ N+1-Queries eliminiert (Include/With nutzen)
  ✓ SELECT-Spalten auf notwendige Felder reduziert

Gate 3: Connection-Pooling aktiv
  ✓ PgBouncer oder pg-pool konfiguriert
  ✓ Pool-Size auf Expected-Load eingestellt
  ✓ Connection-Exhaustion nicht vorhanden

Gate 4: Slow-Query-Logging aktiv
  ✓ PostgreSQL slow-query-log konfiguriert (> 1s)
  ✓ Slow-Queries werden geloggt und analyzed
  ✓ Top-Slow-Queries haben Optimization-Plan

Gate 5: Performance-Baseline gemessen
  ✓ P50/P95/P99 Query-Duration dokumentiert
  ✓ Baseline vs. Target-SLAs klar
  ✓ Monitoring-Alerts auf Baseline-Abweichungen

Gate 6: Caching strategisch
  ✓ Häufige Read-Queries cached (Redis)
  ✓ Cache-Invalidation-Logic funktioniert
  ✓ Cache-Hit-Rate gemessen (Target: > 70%)

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-04 Abschluss:
→ Trigger DB-05 (Datenbankintegrität): Constraints und Validierung verstärken
→ Output zu PM-03 (Monitoring): Performance-Metriken zu Prometheus
→ Input an API-Design-Pipeline: Performance-SLAs für API-Endpoints

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-05 — Datenbank-Integrität (Foreign-Key-, Check-, Unique-Constraints, Triggers)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Schema-Definition mit Relationen und Business-Rules
Output:   Constraints, Triggers, Integrität-Checks, Audit-Schema
Abhängigkeiten: PostgreSQL Trigger-Syntax, Constraint-Validierung
Abhängig von: DB-01 (ORM), DB-02 (Migrations)
Triggerauslöser für: DB-08 (Audit-Logging)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Foreign-Key-Constraints
   - Garantieren referenzielle Integrität:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email TEXT UNIQUE NOT NULL
     );

     CREATE TABLE posts (
       id SERIAL PRIMARY KEY,
       author_id INTEGER NOT NULL REFERENCES users(id)
     );

     -- ON DELETE Verhalten definieren:
     -- CASCADE: Deleting user → Löscht auch seine Posts
     -- SET NULL: Deleting user → posts.author_id wird NULL
     -- RESTRICT: Deleting user → ERROR wenn noch Posts existieren
     ```
   - Best Practice: CASCADE für "schwache" Relationen (Kommentare), RESTRICT für "starke" (Owner)

2. Check-Constraints
   - Validierung von Field-Werten auf Database-Level:
     ```sql
     CREATE TABLE orders (
       id SERIAL PRIMARY KEY,
       amount DECIMAL(10,2) CHECK (amount > 0),
       status VARCHAR(20) CHECK (status IN ('PENDING', 'SHIPPED', 'DELIVERED')),
       created_at TIMESTAMP CHECK (created_at <= CURRENT_TIMESTAMP)
     );
     ```
   - Vorteil: Garantiert Valid-Data auch wenn Application-Code fehlerhaft

3. Unique-Constraints
   - Prevent Duplicates:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email TEXT UNIQUE NOT NULL,
       username TEXT UNIQUE NOT NULL
     );

     -- Composite-Unique (z.B. email + domain müssen unique sein):
     CREATE UNIQUE INDEX idx_users_email_domain ON users(email, domain);
     ```
   - Sonderfall: UNIQUE NULLS NOT DISTINCT (PostgreSQL 15+)
     ```sql
     -- Multiple NULL values nicht erlaubt (neu)
     CREATE UNIQUE INDEX idx_unique_nullable ON users(ref_id NULLS NOT DISTINCT);
     ```

4. Triggers für Automatisierung
   - Update-Timestamp automatisch:
     ```sql
     CREATE OR REPLACE FUNCTION update_timestamp()
     RETURNS TRIGGER AS $$
     BEGIN
       NEW.updated_at = CURRENT_TIMESTAMP;
       RETURN NEW;
     END;
     $$ LANGUAGE plpgsql;

     CREATE TRIGGER trig_users_update_timestamp
     BEFORE UPDATE ON users
     FOR EACH ROW
     EXECUTE FUNCTION update_timestamp();
     ```
   - Synchronisierung (z.B. Update ein Parent-Feld bei Child-Insert):
     ```sql
     CREATE OR REPLACE FUNCTION sync_post_count()
     RETURNS TRIGGER AS $$
     BEGIN
       UPDATE users SET post_count = post_count + 1
       WHERE id = NEW.author_id;
       RETURN NEW;
     END;
     $$ LANGUAGE plpgsql;

     CREATE TRIGGER trig_posts_increment_count
     AFTER INSERT ON posts
     FOR EACH ROW
     EXECUTE FUNCTION sync_post_count();
     ```

5. Denormalisierung und Computed-Columns
   - Problem: Häufiges Aggregieren (COUNT(*) auf Related-Rows) ist teuer
   - Lösung: Denormalisiert Counter-Spalte + Trigger zur Aktualisierung
     ```sql
     ALTER TABLE users ADD COLUMN post_count INTEGER DEFAULT 0;

     -- Trigger on INSERT
     CREATE TRIGGER trig_posts_insert
     AFTER INSERT ON posts
     FOR EACH ROW
     UPDATE users SET post_count = post_count + 1 WHERE id = NEW.author_id;

     -- Trigger on DELETE
     CREATE TRIGGER trig_posts_delete
     AFTER DELETE ON posts
     FOR EACH ROW
     UPDATE users SET post_count = post_count - 1 WHERE id = OLD.author_id;
     ```

6. Domain-Specific Integrity Rules
   - Business-Logic in Database durchsetzen:
     ```sql
     -- Beispiel: Order-Item kann nicht gelöscht wenn Order shipped
     CREATE OR REPLACE FUNCTION check_order_item_delete()
     RETURNS TRIGGER AS $$
     DECLARE
       order_status VARCHAR;
     BEGIN
       SELECT status INTO order_status FROM orders WHERE id = OLD.order_id;
       IF order_status = 'SHIPPED' THEN
         RAISE EXCEPTION 'Cannot delete items from shipped order';
       END IF;
       RETURN OLD;
     END;
     $$ LANGUAGE plpgsql;

     CREATE TRIGGER trig_order_items_delete
     BEFORE DELETE ON order_items
     FOR EACH ROW
     EXECUTE FUNCTION check_order_item_delete();
     ```

7. Constraint-Validation in Application-Layer (zusätzlich)
   - Nicht nur Database-Constraints, sondern auch Application-Level:
     ```typescript
     import { z } from 'zod';

     const OrderSchema = z.object({
       amount: z.number().positive('Amount must be > 0'),
       status: z.enum(['PENDING', 'SHIPPED', 'DELIVERED']),
       createdAt: z.date().max(new Date(), 'Created date cannot be future'),
     });

     // Validate before DB-INSERT
     const validOrder = OrderSchema.parse(orderData);
     ```

8. Referential-Integrity-Checks
   - Periodic Consistency-Checks:
     ```sql
     -- Find orphaned records (posts ohne authors)
     SELECT posts.id
     FROM posts
     LEFT JOIN users ON posts.author_id = users.id
     WHERE users.id IS NULL;

     -- Find integrity issues
     SELECT COUNT(*) as orphaned_count FROM posts
     WHERE author_id NOT IN (SELECT id FROM users);
     ```
   - Automated Cleanup (Vorsicht, nur wenn Backup vorhanden!):
     ```sql
     DELETE FROM posts
     WHERE author_id NOT IN (SELECT id FROM users);
     ```

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* schema-with-constraints.sql — Vollständiges Schema mit allen Constraints
* triggers.sql — Trigger-Definition für Automatisierungen
* integrity-check-procedures.sql — Integrität-Check-Scripts
* constraint-validation-schema.ts — Zod/TypeBox-Schemas für Application-Validation
* integrity-monitoring-queries.sql — Periodic-Check-Queries

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Database-Architects, Backend-Team-Lead
Genehmigung erforderlich: Tech-Lead (für Trigger-Komplexität), DBA (für Constraints)
Review-Partner: Security-Team (für Data-Validation)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Trigger-Rekursion
Wenn Trigger-A Trigger-B auslöst das wiederum Trigger-A auslöst,
kann Infinite-Loop entstehen (Database-Hang).
Lösung: Trigger-Design review für Zirkel; SET max_trigger_depth = 100 Limit.

FEHLERQUELLE 2 — Constraint-Violation versteckt sich
Wenn Application-Code nicht auf Constraint-Errors checked,
können Silent-Failures entstehen (Data korrupt).
Lösung: Explizites Error-Handling für Constraint-Violations in App.

FEHLERQUELLE 3 — Denormalisierte Counter falsch
Wenn Counter durch Update-Fehler desynchronisiert wird,
ist Application-Logic zersört (z.B. post_count != actual COUNT).
Lösung: Periodische Integrity-Checks (z.B. täglich); Manual-Trigger zum Resync.

FEHLERQUELLE 4 — Foreign-Key-On-Delete zu aggressiv
Wenn CASCADE-Delete zu aggressiv konfiguriert,
kann "delete user" massives Cascading-Delete verursachen.
Lösung: Explizit Review der CASCADE-Kette; RESTRICT wo angemessen.

FEHLERQUELLE 5 — Trigger-Performance-Degradation
Wenn jeder INSERT komplexen Trigger auslöst,
kann Bulk-Insert von 10000 Reihen minutes dauern.
Lösung: Trigger-Efficiency überprüfen; DISABLE TRIGGER während Bulk-Operationen (mit Vorsicht).

FEHLERQUELLE 6 — Constraint-Name-Collision
Wenn Constraint-Namen nicht eindeutig, können Alter-Table-Statements ambig sein.
Lösung: Naming-Convention: [table]_[column(s)]_[constraint_type] (z.B. users_email_unique).

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Foreign-Key-Constraints definiert
  ✓ Alle Relationen haben Foreign-Key-Constraints
  ✓ ON DELETE Verhalten explizit (CASCADE, RESTRICT, SET NULL)
  ✓ Foreign-Key-Violations werden getestet

Gate 2: Check-Constraints aktiv
  ✓ Alle Enum-Felder haben CHECK-Constraints
  ✓ Numerische Felder haben Bereichs-Checks
  ✓ Temporal-Felder haben Plausibilität-Checks

Gate 3: Unique-Constraints schützen Duplicates
  ✓ Primary-Keys existieren
  ✓ Eindeutige Felder (email, username) haben UNIQUE-Constraint
  ✓ Composite-Unique wo notwendig

Gate 4: Triggers funktionieren
  ✓ updated_at wird automatisch aktualisiert
  ✓ Denormalisierte Counter synced
  ✓ Trigger-Performance akzeptabel (< 10ms pro Operation)

Gate 5: Integrität-Checks implementiert
  ✓ Orphaned-Record-Detection läuft
  ✓ Constraint-Violation-Checks aktiv
  ✓ Keine Daten-Inkonsistenzen gefunden

Gate 6: Application-Validation
  ✓ Zod/TypeBox-Schemas definiert
  ✓ Validation läuft vor DB-INSERT
  ✓ Keine duplicate validation (App + DB) redundant

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-05 Abschluss:
→ Trigger DB-08 (Audit-Logging): Audit-Trails für Integrität-kritische Changes
→ Output zu Security-Pipeline: Integrität-Validierung in Security-Framework

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-06 — Backup & Recovery (Automated Backups, PITR, Replication, DR)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Production-Database, Backup-Requirements (RTO/RPO), Disaster-Szenarien
Output:   Backup-Strategie, PITR-Setup, Cross-Region-Replication, DR-Runbook
Abhängigkeiten: PostgreSQL WAL-Archiving, S3/Cloud-Storage, Backup-Tools (pg_dump, pgBackRest)
Abhängig von: DB-01 (ORM), DB-03 (Integrität)
Triggerauslöser für: DB-07 (Multi-Environment)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Backup-Strategie und RTO/RPO
   - RTO (Recovery Time Objective): Wie lang darf Downtime sein?
     * RTO < 1 hour: Kritisch, Hot-Standby erforderlich
     * RTO < 1 day: Standard
   - RPO (Recovery Point Objective): Wie viel Datenverlust akzeptabel?
     * RPO < 1 minute: Sehr streng, Continuous-Replication
     * RPO < 1 hour: Standard, Tägliche Backups ausreichend
   - Strategie-Matrix:
     | RTO | RPO | Strategie |
     |-----|-----|-----------|
     | < 1h | < 1m | Active-Active Replication |
     | < 1h | < 1h | Continuous PITR + Standby |
     | < 1 day | < 1h | Daily Backups + PITR |
     | < 1 day | < 1 day | Daily Backups |

2. Automated Full & Incremental Backups
   - PostgreSQL pg_dump (Full-Backup):
     ```bash
     #!/bin/bash
     BACKUP_DIR="/backups/postgresql"
     TIMESTAMP=$(date +%Y%m%d_%H%M%S)

     pg_dump -U postgres -d appdb \
       --format=custom \
       --compress=9 \
       --file="${BACKUP_DIR}/full_${TIMESTAMP}.sql.gz"

     # Upload zu S3
     aws s3 cp "${BACKUP_DIR}/full_${TIMESTAMP}.sql.gz" \
       s3://my-backups/postgresql/full/
     ```
   - Cron-Schedule: täglich um 2 AM UTC
     ```
     0 2 * * * /backup-scripts/backup.sh
     ```
   - Incremental via WAL-Archiving (PostgreSQL):
     ```sql
     ALTER SYSTEM SET wal_level = replica;
     ALTER SYSTEM SET max_wal_senders = 3;
     ALTER SYSTEM SET wal_keep_size = '1GB';
     SELECT pg_reload_conf();
     ```

3. Point-in-Time-Recovery (PITR) Setup
   - Ermöglicht Restore zu spezifischem Timestamp:
     ```sql
     -- Recovery-Configuration in postgresql.conf
     restore_command = 'aws s3 cp s3://my-backups/wal/%f %p'
     recovery_target_timeline = 'latest'
     recovery_target_xid = 123456789  -- OR specific transaction
     recovery_target_time = '2025-04-05 14:30:00 UTC'
     ```
   - Workflow:
     1. Restore Full-Backup von Tag X
     2. Replay WAL-Logs bis zum Target-Timestamp
     3. Datenbank ist dann beim Zustand von Target-Timestamp
   - RPO mit PITR: Sekunden-Genauigkeit (abhängig von WAL-Archiving)

4. Cross-Region-Replication
   - Setup Streaming-Replication zu Secondary-Region:
     ```
     Primary (us-east): appdb
     ↓ Streaming-Replication (continous WAL-streaming)
     Replica (eu-west): standby_server
     ```
   - PostgreSQL-Setup (Primary):
     ```sql
     -- postgresql.conf
     max_wal_senders = 10
     wal_level = replica

     -- Replication-User
     CREATE USER replication_user WITH REPLICATION ENCRYPTED PASSWORD 'secret';
     ```
   - Secondary Setup:
     ```bash
     # Stop old db (falls existent)
     sudo systemctl stop postgresql

     # Clone via pg_basebackup
     pg_basebackup -h primary.example.com -U replication_user \
       -D /var/lib/postgresql/15/main -P -v -R -W

     # Start replica
     sudo systemctl start postgresql
     ```
   - Monitoring-Replication-Lag:
     ```sql
     SELECT slot_name, restart_lsn, confirmed_flush_lsn
     FROM pg_replication_slots;
     -- Zeigt Lag zwischen Primary und Replica
     ```

5. Failover-Procedure (Primary crash → Replica promote)
   - Automatisches Failover-Setup (pg_auto_failover):
     ```bash
     pg_autoctl create monitor --pgdata /pgdata/monitor
     pg_autoctl create postgres \
       --pgdata /pgdata/primary \
       --monitor postgresql://autoctl@monitor/pg_auto_failover
     pg_autoctl create postgres \
       --pgdata /pgdata/replica \
       --monitor postgresql://autoctl@monitor/pg_auto_failover
     ```
   - Failover-Time: Typisch 10-30 Sekunden
   - Post-Failover-Steps:
     1. Application verbindet sich mit neuer Primary (alte Replica)
     2. Monitoring prüft Replica-Lag
     3. Starte alte Primary als neue Replica (nach Recovery)

6. Backup-Verification und Testing
   - Weekly Restore-Test (auf Staging):
     ```bash
     #!/bin/bash
     # Take latest backup
     LATEST_BACKUP=$(aws s3 ls s3://my-backups/postgresql/full/ | tail -1 | awk '{print $NF}')

     # Restore to staging
     aws s3 cp s3://my-backups/postgresql/full/${LATEST_BACKUP} /tmp/
     createdb staging_test
     pg_restore -d staging_test /tmp/${LATEST_BACKUP}

     # Verify (count rows, check constraints)
     psql staging_test -c "SELECT COUNT(*) FROM users;"

     # Cleanup
     dropdb staging_test
     ```
   - Dokumentieren: "Backup from 2025-04-05 successfully restored in 5 minutes"

7. Disaster-Recovery Runbook
   - Szenario 1: Datenbank-Corruption erkannt
     1. Stop Application-Access (SET default_transaction_isolation = serializable)
     2. Restore von Last-Good-Backup
     3. Verify Data-Integrität
     4. Resume Application
   - Szenario 2: Primary-Region-Down (alle Server gone)
     1. Promote Replica in Secondary-Region zu Primary
     2. Update Application-Connection-String
     3. Validate Query-Performance (Replica-hardware möglich unterschiedlich)
   - Szenario 3: Accidental-Delete (DELETE alle orders!)
     1. Stop Application-Writes zu Datenbank
     2. PITR zu Timestamp vor Delete
     3. Export deleted-orders aus Recovered-DB
     4. Restore zur Current-Version
   - Simulation: Monatlich Disaster-Recovery-Übung durchführen

8. Compliance und Data-Retention
   - GDPR-Compliance: Recht auf Vergessenwerden
     * Anonymisierte Backups nach X Tagen (z.B. 90)
     * Oder selektives Delete von PII vor Backup
   - Retention-Policy:
     * Daily-Backups: 7 Tage
     * Weekly-Backups: 4 Wochen
     * Monthly-Backups: 1 Jahr
   - S3-Lifecycle-Policy:
     ```json
     {
       "Rules": [
         {
           "Filter": { "Prefix": "postgresql/daily/" },
           "Transitions": [
             { "Days": 30, "StorageClass": "STANDARD_IA" },
             { "Days": 90, "StorageClass": "GLACIER" }
           ],
           "Expiration": { "Days": 365 }
         }
       ]
     }
     ```

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* backup-script.sh — Automated Backup-Script (tägliche Execution)
* restore-procedure.md — Step-by-Step Restore-Anleitung
* pitr-recovery-script.sql — PITR-Recovery-SQL-Commands
* failover-runbook.md — Failover-Prozedur bei Primary-Crash
* disaster-recovery-playbook.md — Komplette DR-Runbooks für Szenarien
* backup-verification-test.sh — Wöchentliche Restore-Tests
* rto-rpo-specification.md — RTO/RPO-Definition und Grenzen

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevOps, Database-SRE
Genehmigung erforderlich: Ops-Lead (für Failover-Trigger), Compliance-Officer (für Retention)
Review-Partner: Security-Team (für Encryption-in-Transit/At-Rest)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Backup-Restore never tested
Wenn Backups existieren aber niemals getestet, können Backups korrupt sein
(z.B. pg_dump schlägt fehl bei großen Backups).
Lösung: Mandatory Weekly-Restore-Test auf Staging (automatisiert, Alerting).

FEHLERQUELLE 2 — PITR-WAL-Logs zu alt
Wenn WAL-Archiving nicht läuft, können WALs gelöscht sein (RTO degradiert).
Lösung: Monitoring für WAL-Archive; Alert wenn < 1 Woche verfügbar.

FEHLERQUELLE 3 — Replication-Lag unerkannt
Wenn Replica 24 Stunden hinter Primary läuft, ist Replica als Failover
unbrauchbar (Datenverlust).
Lösung: Monitoring für Replication-Lag; Alert wenn > 5 Minuten.

FEHLERQUELLE 4 — Encryption-Backups fehlschlagen
Wenn Backups mit KMS-Encryption aber Key rotated/deleted, können
alte Backups nicht dekryptiert werden.
Lösung: Key-Retention-Policy; Backup-Dekryption monatlich testen.

FEHLERQUELLE 5 — Failover-Timing schlecht
Wenn Failover länger als RTO (z.B. 1 hour), breitet SLA-Verletzung.
Lösung: Failover-Prozedur Zeitgerechtigkeits-Test; Auto-Failover preferred.

FEHLERQUELLE 6 — DR-Playbook nicht aktualisiert
Wenn Runbook veraltet (z.B. alte IP-Adressen, falsche Kommandos),
kann Notfall-Situtation fehlschlagen.
Lösung: Quarterly-Review und Simulation der DR-Runbooks.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Automated Backups laufen
  ✓ Daily Full-Backups durchgeführt (umgehendes zu S3/Cloud)
  ✓ WAL-Archiving aktiviert
  ✓ Backup-Job-Logs verfügbar und fehlerfrei

Gate 2: PITR funktioniert
  ✓ PITR-Recovery-Test erfolgreich (zu spezifischem Timestamp)
  ✓ WAL-Replay mindestens 7 Tage Daten-Rückkehr
  ✓ RPO mit PITR erreicht (z.B. < 5 Minuten)

Gate 3: Replication konfiguriert
  ✓ Streaming-Replication läuft zu Secondary-Region
  ✓ Replication-Lag < 5 Minuten
  ✓ Replica kann replaces werden (Read-Only-Mode)

Gate 4: Failover-Procedure dokumentiert
  ✓ Failover-Runbook existiert und ist aktuell
  ✓ Failover-Test erfolgreich durchgeführt
  ✓ RTO-Ziel erreicht (z.B. < 30 Minuten)

Gate 5: Backups getestet
  ✓ Wöchentliche Restore-Tests auf Staging
  ✓ PITR-Recovery 2x/Monat getestet
  ✓ Keine Fehler bei Restore

Gate 6: Compliance-Controls
  ✓ Retention-Policy definiert und implementiert
  ✓ Encryption-in-Transit (TLS) für Replication
  ✓ Encryption-at-Rest für Cloud-Backups
  ✓ Access-Logs zu Backups verfügbar

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-06 Abschluss:
→ Trigger DB-07 (Multi-Environment): Backup-Sync zwischen Environments
→ Output zu Compliance-Framework: Backup-und-Recovery-Compliance validieren
→ Input an Incident-Response: Backup-Usage bei Disaster-Recovery

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-07 — Multi-Environment Synchronisierung (Dev/Staging/Prod Sync, Migration-Drift)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Schema-Definitionen in Code, Database-Instanzen (Dev/Staging/Prod)
Output:   Migration-Drift-Detection, Shadow-Database für CI, Environment-Sync-Strategy
Abhängigkeiten: Migrations-Tools (Prisma, Drizzle), CI/CD-Pipeline, Database-Cloning-Tools
Abhängig von: DB-02 (Migration-Lifecycle), DB-06 (Backups)
Triggerauslöser für: DB-08 (Audit-Logging)

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Environment-Datenbank-Strategie
   - Development: Lokal (Docker), Seeded mit Test-Daten
   - Staging: Cloud-Instance, anonymisierte Prod-Daten-Kopie
   - Production: HA-Setup, Replicas, Backups

2. Schema-Drift Detection
   - Problem: Entwickler ändern Schema lokal aber vergessen Migration
   - Solution: Pre-Commit-Hook prüft:
     ```bash
     #!/bin/bash
     # Vor Git-Push: Prüfe ob schema.prisma geändert aber keine Migration erstellt

     if git diff HEAD~ -- prisma/schema.prisma | grep -q "@@map\|@relation"; then
       if ! git diff HEAD~ -- prisma/migrations | grep -q ""; then
         echo "❌ Schema changed but no migration created!"
         exit 1
       fi
     fi
     ```

3. Shadow-Database für CI/CD
   - Beim Build: Neue Shadow-DB spinnen up, alle Migrations testen
     ```sql
     -- CI-Setup (in .github/workflows/test.yml)
     - name: Test Migrations
       run: |
         npx prisma migrate dev --preview-feature
         npm test:migrations
     ```
   - Sicherheit: Shadow-DB wird nach Test gelöscht

4. Production-Daten anonymisieren für Staging
   - Nightly Job: Prod-Snapshot zu Staging, aber mit anonymisiert Data:
     ```bash
     #!/bin/bash
     # 1. Full-Backup von Production
     pg_dump -h prod-db.example.com -d appdb > prod_backup.sql

     # 2. Restore zu Staging
     psql -h staging-db.example.com -d appdb < prod_backup.sql

     # 3. Anonymisieren (GDPR-safe)
     psql -h staging-db.example.com -d appdb << EOF
       UPDATE users SET
         email = CONCAT('user_', id, '@example.com'),
         name = CONCAT('User ', id),
         password_hash = '...' WHERE id > 0;
       UPDATE orders SET customer_id = NULL WHERE customer_id > 1000;
     EOF
     ```

5. Migration-Consistency-Checks
   - Periodische Checks dass Alle Environments sync sind:
     ```typescript
     // ci/migration-sync-check.ts
     async function checkMigrationSync() {
       const devMigrations = readMigrations('./prisma/migrations');
       const stagingMigrations = await queryAppliedMigrations('staging-db');
       const prodMigrations = await queryAppliedMigrations('prod-db');

       if (!areEqual(devMigrations, stagingMigrations)) {
         throw new Error('Staging migrations out of sync!');
       }
       if (!areEqual(stagingMigrations, prodMigrations)) {
         throw new Error('Production migrations out of sync!');
       }
     }
     ```

6. Rollback-Coordination zwischen Environments
   - Wenn Production-Migration fehlschlägt:
     1. Rollback auf Production
     2. Fix + New-Migration erstellen
     3. Test in Staging (mit neuem Migration)
     4. Re-Deploy zu Production
   - Coordination: Alle Environments müssen identisch sein

7. Data-Migration testing
   - Komplexe Migrations (mit Data-Transformation) MÜSSEN getestet sein:
     ```typescript
     // test/migrations/rename-column.test.ts
     describe('Migration: rename first_name to given_name', () => {
       it('should migrate data without loss', async () => {
         const db = await setupTestDb();
         await db.query('INSERT INTO users (first_name) VALUES ($1)', ['John']);

         await runMigration('rename_first_name');

         const result = await db.query('SELECT given_name FROM users');
         expect(result[0].given_name).toBe('John');
       });
     });
     ```

8. Emergency-Hotfix-Process
   - Szenario: Critical-Bug in Production, müssen sofort fixen
   - Process:
     1. Create hotfix-branch: `git checkout -b hotfix/critical-bug`
     2. Make code-fix + test
     3. If schema-change nötig:
        - Create migration: `npx prisma migrate dev --name critical_fix`
        - SKIP pre-deploy-testing, deploy immediately
     4. Post-Deploy: Full-Validation in Staging mit neuem Migration
     5. Merge hotfix zu main + develop

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* environment-setup.md — Dev/Staging/Prod-Configuration
* migration-drift-detector.ts — Script zum Detect von Migration-Drifts
* anonymize-data.sql — Data-Anonymisierung für Staging
* shadow-database-setup.yml — CI/CD-Pipeline für Shadow-DB-Testing
* migration-consistency-check.ts — Automated Consistency-Verification
* rollback-coordination.md — Multi-Environment-Rollback-Procedure

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: DevOps, Database-Engineers
Genehmigung erforderlich: Tech-Lead (für Hotfix-Process)
Review-Partner: QA-Team (für Test-Database-Validity)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Staging-Daten stale
Wenn Staging-Daten länger als 24h nicht aktualisiert, können Behaviors
zwischen Staging und Prod unterschiedlich sein.
Lösung: Automated-Nightly-Sync; Alerting wenn Sync fehlschlägt.

FEHLERQUELLE 2 — Anonymisierung unvollständig
Wenn Anonymisierung nur Email zesschmeißt aber Name noch intakt,
sind still PII im Staging-Snapshot (GDPR-Violation).
Lösung: Comprehensive Anonymisierung-Queries; Security-Audit vor Deployment.

FEHLERQUELLE 3 — Shadow-DB zu kurz lebendig
Wenn Shadow-DB nach 1h gelöscht wird aber Migration dauert 2h,
wird Test incomplete.
Lösung: Shadow-DB-Lifetime dynamisch anpassen; Monitoring für lange Migrations.

FEHLERQUELLE 4 — Drift unbemerkt
Wenn Migration-Drift-Detection nicht läuft, können Environments
silent degradieren (Bugs entstehen nur in Prod).
Lösung: Mandatory-Check vor jedem Deploy; Fail-Fast Policy.

FEHLERQUELLE 5 — Hotfix-Chaos
Wenn Hotfix-Branch nicht cleanly merged, entstehen Conflicts
zwischen Hotfix und Development-Branch.
Lösung: Structured-Hotfix-Process; Automatic-Merge-Back to develop.

FEHLERQUELLE 6 — Anonymisierung falsch
Wenn Anonymisierung reversible (z.B. XOR statt Random), können
echte Identities aus Staging rekonstruiert werden.
Lösung: Cryptographically-Secure-Anonymisierung; Security-Review vor Deployment.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Environment-Setup dokumentiert
  ✓ Dev-Datenbank läuft lokal (Docker)
  ✓ Staging-Datenbank in Cloud mit Anonymisiert-Data
  ✓ Production mit HA-Setup vorhanden

Gate 2: Migration-Drift-Detection aktiv
  ✓ Pre-Commit-Hooks prüfen auf Drift
  ✓ CI-Pipeline hat Migration-Konsistenz-Check
  ✓ Drift-Alert triggert wenn detected

Gate 3: Shadow-Database für CI/CD
  ✓ Shadow-DB in CI-Pipeline spinnt up
  ✓ Alle Migrations werden getestet
  ✓ Shadow-DB wird nach Test gelöscht

Gate 4: Staging-Data-Sync läuft
  ✓ Nightly Sync von Prod-zu-Staging funktioniert
  ✓ Anonymisierung nicht fehlgeschlagen
  ✓ Staging-Data aktuell (< 24h old)

Gate 5: Rollback-Coordination
  ✓ Rollback-Prozess dokumentiert
  ✓ Multi-Environment-Rollback getestet
  ✓ Hotfix-Process definiert

Gate 6: Data-Anonymisierung verified
  ✓ Kein PII in Staging sichtbar
  ✓ Anonymisierung nicht reversible
  ✓ Compliance-Audit erfolgreich

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-07 Abschluss:
→ Trigger DB-08 (Audit-Logging): Audit-Trail über Environment-Syncs
→ Output zu CI/CD-Pipeline: Migration-Testing in Build-Prozess integrieren

═══════════════════════════════════════════════════════════════════════════════

PHASE DB-08 — Audit-Logging (created_at/updated_at/deleted_at, Soft-Delete, Change-Tracking)
═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER
─────────────────────────────────────────────────────────────────────────────
Input:    Datenbank-Schema, Audit-Anforderungen (Compliance, Debugging), ORM
Output:   Audit-Spalten in Schema, Audit-Trail-Tabellen, Compliance-Reports
Abhängigkeiten: Triggers (für Audit-Automatisierung), Logging-System (PM-04)
Abhängig von: DB-01 (ORM), DB-05 (Constraints und Triggers)
Triggerauslöser für: Compliance- und Security-Pipeline

DOMINO-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

1. Standard Audit-Spalten
   - Jede Tabelle sollte Audit-Felder haben:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       created_by INTEGER REFERENCES users(id),
       updated_by INTEGER REFERENCES users(id),
       deleted_at TIMESTAMP NULL -- Soft-Delete Marker
     );
     ```

2. Soft-Delete Pattern
   - Anstatt physisch zu löschen, markieren mit deleted_at:
     ```typescript
     // Soft-Delete
     await prisma.user.update({
       where: { id: 1 },
       data: { deleted_at: new Date() }
     });

     // Query-Pattern: Exclude soft-deleted
     const activeUsers = await prisma.user.findMany({
       where: { deleted_at: null }
     });
     ```
   - Vorteil: Data bleibt für Audit-Trail vorhanden
   - Problem: Unique-Constraints funktionieren nicht mehr (Deleted User mit gleicher Email kann recreated werden)
   - Lösung:
     ```sql
     -- Unique-Constraint nur auf Active-Records
     CREATE UNIQUE INDEX idx_users_email_active
     ON users(email) WHERE deleted_at IS NULL;
     ```

3. Audit-Trail-Tabelle
   - Separate Tabelle für alle Changes:
     ```sql
     CREATE TABLE audit_log (
       id SERIAL PRIMARY KEY,
       table_name VARCHAR(100) NOT NULL,
       record_id INTEGER NOT NULL,
       action VARCHAR(20) NOT NULL, -- 'INSERT', 'UPDATE', 'DELETE'
       changed_by INTEGER NOT NULL,
       changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       old_values JSONB,
       new_values JSONB
     );
     ```
   - Trigger für auto-Logging:
     ```sql
     CREATE OR REPLACE FUNCTION audit_changes()
     RETURNS TRIGGER AS $$
     BEGIN
       INSERT INTO audit_log (table_name, record_id, action, changed_by, old_values, new_values)
       VALUES (
         TG_TABLE_NAME,
         COALESCE(NEW.id, OLD.id),
         TG_OP,
         CURRENT_USER_ID(), -- Requires session variable
         to_jsonb(OLD),
         to_jsonb(NEW)
       );
       RETURN COALESCE(NEW, OLD);
     END;
     $$ LANGUAGE plpgsql;
     ```

4. Change-Tracking für spezifische Felder
   - Manchmal nur bestimmte Felder tracked:
     ```sql
     CREATE OR REPLACE FUNCTION audit_user_email_changes()
     RETURNS TRIGGER AS $$
     BEGIN
       IF OLD.email != NEW.email THEN
         INSERT INTO audit_log (table_name, record_id, action, old_values, new_values)
         VALUES ('users', NEW.id, 'UPDATE',
                 jsonb_build_object('email', OLD.email),
                 jsonb_build_object('email', NEW.email));
       END IF;
       RETURN NEW;
     END;
     $$ LANGUAGE plpgsql;
     ```

5. Temporal Queries (Time-Travel Daten)
   - Frage: "Wie sah der User-Record am 1. Januar aus?"
     ```sql
     SELECT * FROM users
     WHERE id = 1
     AND created_at <= '2025-01-01'::timestamp
     AND (deleted_at IS NULL OR deleted_at > '2025-01-01'::timestamp);
     ```
   - Mit Audit-Log:
     ```sql
     SELECT * FROM audit_log
     WHERE table_name = 'users'
     AND record_id = 1
     AND changed_at <= '2025-01-01'::timestamp
     ORDER BY changed_at DESC
     LIMIT 1;
     ```

6. User-Attribution (created_by, updated_by)
   - Tracking wer was geändert hat:
     ```typescript
     // In Express Middleware: Set current user
     res.locals.userId = req.user?.id;

     // In Prisma: Auto-set created_by
     const user = await prisma.user.create({
       data: {
         email: 'new@example.com',
         created_by: res.locals.userId
       }
     });
     ```

7. Compliance-Reports (GDPR, SOX)
   - GDPR-Recht auf Vergessenwerden: Export und Lösche alle User-Data:
     ```typescript
     async function deleteUserForGDPR(userId: number) {
       // 1. Export audit-trail für User
       const auditTrail = await db.query(`
         SELECT * FROM audit_log WHERE record_id = ${userId}
       `);
       exportToFile(auditTrail);

       // 2. Soft-delete User
       await prisma.user.update({
         where: { id: userId },
         data: { deleted_at: new Date() }
       });

       // 3. Anonymisieren persönliche Daten
       await db.query(`
         UPDATE user_profiles SET name = NULL, email = NULL WHERE user_id = ${userId}
       `);
     }
     ```
   - SOX-Compliance (Financial Audit):
     ```sql
     -- Report: Wer hat Orders geändert in letzten 90 Tagen?
     SELECT changed_by, COUNT(*) as change_count
     FROM audit_log
     WHERE table_name = 'orders'
     AND changed_at > CURRENT_DATE - INTERVAL '90 days'
     GROUP BY changed_by
     ORDER BY change_count DESC;
     ```

8. Retention-Policies für Audit-Logs
   - Alte Logs archivieren:
     ```sql
     -- Monatlich Archive erstellen
     CREATE TABLE audit_log_2025_03 AS
     SELECT * FROM audit_log
     WHERE EXTRACT(YEAR FROM changed_at) = 2025
     AND EXTRACT(MONTH FROM changed_at) = 3;

     DELETE FROM audit_log
     WHERE EXTRACT(YEAR FROM changed_at) = 2025
     AND EXTRACT(MONTH FROM changed_at) = 3;
     ```
   - Retention: 7 Jahre für Financial, 3 Jahre für andere

ARTIFACT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

* audit-schema.sql — Audit-Log-Tabelle und Triggers
* soft-delete-pattern.ts — Soft-Delete Implementation in ORM
* audit-middleware.ts — Express-Middleware für User-Attribution
* compliance-reports.sql — GDPR/SOX-Compliance-Queries
* audit-trail-retention.sql — Archive und Cleanup-Scripts
* temporal-query-examples.sql — Beispiele für Time-Travel-Queries

DIRECTOR-ZUWEISUNG
─────────────────────────────────────────────────────────────────────────────

Verantwortlicher: Database-Engineers, Compliance-Officer
Genehmigung erforderlich: Legal (für GDPR-Compliance), Audit-Team (für Financial-Compliance)
Review-Partner: Security-Team (für PII-Handling)

ULTRATHINK-LANGZEITTASKS
─────────────────────────────────────────────────────────────────────────────

FEHLERQUELLE 1 — Audit-Log-Explosion
Wenn zu viele Spalten getracked oder zu häufige Updates,
wächst audit_log exponentiell (Terabytes in Monaten).
Lösung: Selektives Audit (nur wichtige Spalten); Archive aggressiv.

FEHLERQUELLE 2 — PII in Audit-Logs
Wenn Passwörter oder Credit-Card-Numbers in old_values logged,
sind Audit-Logs Sicherheits-Leck.
Lösung: Redaction-Trigger für sensitive-Felder vor Logging.

FEHLERQUELLE 3 — Soft-Delete Unique-Constraint-Problem
Wenn Constraint nicht filtered für deleted_at,
können zwei gelöschte Records mit gleichem Email nicht co-exist.
Lösung: Partial-Unique-Indexes (WHERE deleted_at IS NULL).

FEHLERQUELLE 4 — Audit-User-Attribution falsch
Wenn created_by nicht gesetzt (NULL), wissen wir nicht wer die Data erstellt.
Lösung: NOT NULL constraint auf created_by (mit Fallback auf System-User).

FEHLERQUELLE 5 — Temporal-Query Performance degradiert
Wenn Audit-Log sehr groß und Queries ohne Index, können Time-Travel-Queries
minutes dauern.
Lösung: Index auf (table_name, record_id, changed_at).

FEHLERQUELLE 6 — Compliance-Report nicht nachvollziehbar
Wenn Report-Generation nicht dokumentiert ist, können Auditors
nicht verifizieren (Compliance-Fehler).
Lösung: Versioned Report-Scripts; Audit-Log für Report-Generation selbst.

VALIDATION-GATES
─────────────────────────────────────────────────────────────────────────────

Gate 1: Audit-Spalten vorhanden
  ✓ created_at, updated_at in allen Tabellen
  ✓ deleted_at für Soft-Delete Support
  ✓ created_by, updated_by gesetzt korrekt

Gate 2: Audit-Log-Tabelle funktioniert
  ✓ Alle Changes werden zu audit_log geloggt
  ✓ Triggers funktionieren für INSERT/UPDATE/DELETE
  ✓ old_values und new_values korrekt

Gate 3: Soft-Delete Pattern
  ✓ Gelöschte Records sind nicht in standard-Queries
  ✓ Partial-Unique-Indexes für deleted-Filtern vorhanden
  ✓ Audit-Trail bleibt nach Soft-Delete

Gate 4: PII-Redaction
  ✓ Sensible Felder nicht in Audit-Logs
  ✓ Redaction vor Logging funktioniert
  ✓ Security-Audit erfolgreich

Gate 5: Compliance-Reports
  ✓ GDPR-Recht-auf-Vergessenwerden implementiert
  ✓ SOX-Reports generierbar
  ✓ Report-Audit-Trail verfügbar

Gate 6: Performance-Audit-Logging
  ✓ Audit-Logging Performance-Overhead < 10%
  ✓ Audit-Log-Queries < 500ms für Standard-Reports
  ✓ Retention-Policy läuft und archiviert

EXIT-PROTOKOLL
─────────────────────────────────────────────────────────────────────────────

Nach erfolgreichem DB-08 Abschluss (FINAL PHASE):
→ Schließe Datenbank-Schema-Migration-Pipeline
→ Output zu Compliance-Pipeline: Audit-Logging-Framework dokumentieren
→ Output zu Security-Pipeline: Data-Provenance-Tracking bestätigen
→ Kontinuierliches Feedback-Loop: Audit-Logs informieren Security-Monitoring

═══════════════════════════════════════════════════════════════════════════════

METRIKEN & KPIs: DATENBANK-SCHEMA-MIGRATION-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

SCHEMA QUALITY METRICS
─────────────────────────────────────────────────────────────────────────────

* Query Latency P95: Median 95-percentile-Response-Time (Zielwert: < 200ms)
* Index Coverage: % von SELECT-Queries mit Index-Usage (Zielwert: > 95%)
* Constraint-Violations: Errors von Constraint-Violations (Zielwert: 0 pro Woche)
* Schema Consistency: % Environments with matching Schema-Version (Zielwert: 100%)

MIGRATION METRICS
─────────────────────────────────────────────────────────────────────────────

* Migration Duration: Durchschnittliche Execution-Zeit (Zielwert: < 2 min für Schema, variable für Data)
* Zero-Downtime Rate: % Migrations ohne Service-Downtime (Zielwert: > 99%)
* Rollback Success Rate: % erfolgreicher Rollbacks (Zielwert: 100%)
* Migration Test Coverage: % Migrations mit Pre-Deployment-Test (Zielwert: 100%)

DATA INTEGRITY METRICS
─────────────────────────────────────────────────────────────────────────────

* Orphaned Records: Count von Foreign-Key-Violations (Zielwert: 0)
* Constraint-Audit-Gaps: % Records nicht validiert gegen Constraints (Zielwert: 0%)
* Data Freshness: Replica-Lag in Multi-Region (Zielwert: < 5 min)

BACKUP & RECOVERY METRICS
─────────────────────────────────────────────────────────────────────────────

* Backup Success Rate: % erfolgreicher Backups (Zielwert: 100%)
* RTO Achievement: Actual-Time-to-Recovery vs. Target (Zielwert: within 10%)
* RPO Achievement: Actual-Point-Recovery vs. Target (Zielwert: within 5%)
* PITR Test Success: % erfolgreicher Point-in-Time-Recovery-Tests (Zielwert: 100%)

AUDIT & COMPLIANCE METRICS
─────────────────────────────────────────────────────────────────────────────

* Audit-Log Completeness: % Changes captured in Audit-Trail (Zielwert: 100%)
* Compliance-Report Automation: % Reports auto-generated (Zielwert: > 90%)
* PII Exposure Incidents: Count von PII in Logs/Backups (Zielwert: 0)

═══════════════════════════════════════════════════════════════════════════════

KONFIGURATIONS-SPEZIFIKATION: DATENBANK-SCHEMA-MIGRATION-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

ERFORDERLICHE UMGEBUNGSVARIABLEN
─────────────────────────────────────────────────────────────────────────────

DATABASE_URL=postgresql://postgres:password@localhost:5432/appdb
DATABASE_URL_REPLICA=postgresql://postgres:password@replica-host:5432/appdb
DATABASE_SHADOW_URL=postgresql://postgres:password@localhost:5433/shadow_db

PRISMA_DATASOURCE_URL=postgresql://...
DRIZZLE_DATABASE_URL=postgresql://...

ORM_CHOICE=prisma|drizzle
MIGRATION_LEVEL=auto|manual
BACKUP_RETENTION_DAYS=30
AUDIT_LOG_RETENTION_YEARS=7

ERFORDERLICHE TOOLS
─────────────────────────────────────────────────────────────────────────────

* PostgreSQL 13+ oder MySQL 8+ oder SQLite 3.37+
* Node.js 18+ mit npm/yarn
* Prisma CLI oder Drizzle-Kit CLI
* pgBouncer für Connection-Pooling
* pg_dump für Backups
* AWS CLI für Cloud-Storage-Integration

ABHÄNGIGKEITS-MATRIX
─────────────────────────────────────────────────────────────────────────────

| Phase | Abhängig von | Triggerauslöser für |
|-------|--------------|-------------------|
| DB-01 | - | DB-02, DB-03, API-Pipeline |
| DB-02 | DB-01 | DB-03, DB-04, DB-07 |
| DB-03 | DB-01, DB-02 | DB-04, API-Pipeline |
| DB-04 | DB-03 | PM-03 Monitoring |
| DB-05 | DB-01, DB-02 | DB-08 |
| DB-06 | DB-01, DB-03 | DB-07 |
| DB-07 | DB-02, DB-06 | DB-08 |
| DB-08 | DB-01, DB-05 | Compliance-Pipeline |

═══════════════════════════════════════════════════════════════════════════════

Ende des DATENBANK-SCHEMA-MIGRATION-PIPELINE-Dokuments
