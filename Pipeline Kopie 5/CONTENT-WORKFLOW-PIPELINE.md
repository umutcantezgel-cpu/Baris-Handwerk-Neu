===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-19 (EXPANSION-PHASE-09), vor SEQ-20 (EXPANSION-PHASE-10)
BLOCK-NUMMER: 07 (CONTENT-WORKFLOW)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-expansion-context.md (Content-Struktur, Routen)
  - .ai-api-context.md (API-Routes fuer Content-Endpoints)
AUSGANGS-KONTEXTDATEI: .ai-content-context.md
AUSGANGS-TRIGGER: SEQ-20 (EXPANSION-PHASE-10) darf erst starten, wenn CW-08
  erfolgreich abgeschlossen, Content-Validierung bestanden (keine broken Links,
  Alt-Texte vorhanden, Frontmatter-Schema valide) ist.
DEFEKT-RUECKFUEHRUNG: Bei Content-Defekten wird der Loop ab CW-01 neu
  gestartet, anschliessend alle abhaengigen Phasen ab SEQ-20.

===============================================================================

# ANTIGRAVITY PIPELINE-SYSTEM: CONTENT-WORKFLOW-PIPELINE — Erschoepfende Spezifikation des redaktionellen Content-Lifecycle und der automatisierten Content-Orchestrierung

═══════════════════════════════════════════════════════════════════════════════

**DOKUMENTKLASSIFIZIERUNG:** Technische Kern-Spezifikation
**GUELTIG AB:** 2026-04-05
**VERSIONSSTAND:** 1.0 (Initial Deployment)
**ZIELAUSSAGE:** Diese Spezifikation dient als SSOT (Single Source of Truth) fuer alle Content-Lifecycle-Prozesse innerhalb des Antigravity-Systems. Der ausfuehrende Code ist der primaere Referenzpunkt; dieses Dokument fungiert als architekturbeschreiende Navigationsschicht.

═══════════════════════════════════════════════════════════════════════════════

## UEBERBLICK: CONTENT-WORKFLOW-PIPELINE-ARCHITEKTUR

Die Content-Workflow-Pipeline orchestriert den vollstaendigen Lebenszyklus von redaktionellen Inhalten innerhalb einer Next.js-basierten Web-Applikation. Das System integriert folgende Schichten:

- **Content-Modellierung:** MDX-Dateien mit React-Komponenten, TypeScript-Typisierung via Zod
- **Redaktioneller Workflow:** Git-basierte PRs, Draft-Management, Publikationszeitsteuerung
- **Media-Asset-Management:** Bildoptimierung, Lazy-Loading, CDN-Integration
- **SEO-Optimierung:** Automatische Meta-Tags, Structured Data, Open Graph
- **Content-Validierung:** Linting, Link-Checking, Readability-Scores
- **Statische Generierung:** ISR (Incremental Static Regeneration), On-Demand-Revalidation
- **Multi-Autor-Support:** Profilbewirtschaftung, Attribution, Autorenarchive
- **Analytics-Integration:** Performance-Tracking, Engagement-Metriken, Content-Decay-Detection

Alle acht Phasen sind interdependent und erzeugen einen selbstoptimierenden Infinite Loop, falls korrekt implementiert.

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-01 — CONTENT-MODELLIERUNG

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Rohe Markdown/MDX-Dateien (*.mdx), manuell erstellt durch Autoren oder via CI/CD-Pipeline
- Frontmatter-Bloecke (YAML-Format, umschlossen durch ---)
- React-Komponenten (optional, innerhalb des MDX-Body eingebettet)

OUTPUT:
- Validierte Content-Objects mit vollstaendiger TypeScript-Typberuecksichtigung
- Indizierte Content-Collections (Blog, Case-Studies, Dokumentation, Changelog)
- Slug-Mappings fuer URL-Generierung
- Excerpt-Daten (autogeneriert aus Body-Text)
- Strukturierte Taxonomie-Mappings (Tags -> Content, Categories -> Content, Series -> Content)

DEPENDENCIES:
- **Upstream:** Filesystem-Lese-Operationen, Git-Metadaten (Autor via Commit)
- **Lateral:** Design-System-Pipeline (fuer Komponenten-Imports), Data-Layer-Pipeline (optionale DB-Speicherung)
- **Downstream:** Alle nachfolgenden Phasen (CW-02 bis CW-08) bauen auf dieser Modellierung auf

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Numerierte Ausfuehrungsschritte)

1. **Filesystem-Crawling:** Rekursives Durchlaufen aller Verzeichnisse unter content/blog/, content/case-studies/, content/docs/, content/changelog/. Filterung auf *.mdx-Dateien. Datei-Leseoperation mit UTF-8-Encoding.

2. **Frontmatter-Extraktion:** Regex-basierte oder YAML-Parser-Extraktion des Frontmatter-Blockes aus jeder Datei. Erwartes Format:
   ```
   ---
   title: "Artikel-Titel"
   description: "Kurzbeschreibung fuer Meta-Tags"
   author: "Max Mustermann"
   publishedAt: "2026-04-05T10:00:00Z"
   updatedAt: "2026-04-05T12:00:00Z" (optional)
   tags: ["tag1", "tag2", "tag3"]
   category: "Hauptkategorie"
   series: "Serien-Name" (optional)
   draft: false
   seo:
     keywords: ["keyword1", "keyword2"]
     ogImage: "/images/og-image.png" (optional, auto-generiert falls nicht vorhanden)
   ---
   ```

3. **Content-Body-Separierung:** Trennung des Frontmatter vom MDX-Body. Der Body wird als Rohtextstring gespeichert, wird aber NOCH NICHT geparst (Parsing erfolgt spaeter in Phase CW-04 und CW-05).

4. **Zod-Schema-Validierung:** Vollstaendige Validierung des extrahierten Frontmatter gegen folgendes Schema:

```typescript
const ContentFrontmatterSchema = z.object({
  title: z.string().min(10).max(200),
  description: z.string().min(30).max(160),
  author: z.string().min(2).max(100),
  publishedAt: z.string().datetime().or(z.date()),
  updatedAt: z.string().datetime().or(z.date()).optional(),
  tags: z.array(z.string().min(2).max(50)).min(1).max(10),
  category: z.enum(["Blog", "Case-Study", "Dokumentation", "Changelog"]),
  series: z.string().min(2).max(100).optional(),
  draft: z.boolean().default(false),
  seo: z.object({
    keywords: z.array(z.string()).min(2).max(8).optional(),
    ogImage: z.string().url().optional(),
  }).optional(),
});
```

Falls Validierung fehlschlaegt: Fehler in Log ausgeben, Datei als "INVALID_FRONTMATTER" markieren, in die Fehler-Nachverfolgungsliste aufnehmen (nicht abbrechen, sondern weiterverarbeiten mit Fallback-Werten).

5. **Slug-Generierung:** Ableitung eines eindeutigen Slugs aus dem Datei-Pfad ODER aus dem title-Frontmatter-Feld. Algorithmus:
   - Datei-Pfad: content/blog/2026-04-mein-artikel.mdx -> slug = "2026-04-mein-artikel"
   - Title-Fallback: "Mein erster Artikel" -> slug = "mein-erster-artikel" (kebab-case, Umlaute zu ASCII-Equivalenten)
   - Duplikat-Aufloesung: Falls Slug bereits vorhanden, suffixen mit -1, -2, etc.

6. **Excerpt-Automatische-Extraktion:** Extrahiere die ersten 160 Zeichen aus dem MDX-Body (nach Entfernen von Markdown-Syntax und HTML-Tags). Fallback: Nutze das description-Feld aus Frontmatter.

7. **Taxonomie-Indexierung:** Erstelle Lookups fuer:
   - Tags -> [slugs] (z.B. "typescript" -> ["slug1", "slug2", "slug3"])
   - Categories -> [slugs] (z.B. "Blog" -> ["slug1", "slug2"])
   - Series -> [slugs] (z.B. "Next.js-Fundamentals" -> ["part-1", "part-2", "part-3"])

8. **Content-Objekt-Zusammenfuehrung:** Komposition finaler Content-Objekte mit vollstaendiger TypeScript-Typisierung:

```typescript
interface ContentDocument {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date | null;
  tags: string[];
  category: "Blog" | "Case-Study" | "Dokumentation" | "Changelog";
  series: string | null;
  draft: boolean;
  body: string; // Roher MDX-Text
  excerpt: string;
  seo: {
    keywords: string[];
    ogImage: string | null;
  };
  wordCount: number;
  readingTime: number; // Minuten (berechnet in Phase CW-04)
  collectioType: "blog" | "case-study" | "docs" | "changelog";
}
```

9. **Collection-Gruppierung:** Organisiere alle Content-Objekte in Collections nach ihrem collectioType. Jede Collection wird als in-memory-Index und als JSON-Datei (unter .content-cache/) gespeichert.

10. **Cache-Persistierung:** Schreibe einen zentralen Content-Index (content-index.json) unter .content-cache/, der alle Metadaten ohne den Body-Text enthaelt. Dieser Index wird fuer schnelle Abfragen genutzt.

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL (Erzeugte Artefakte)

- **.content-cache/content-index.json:** Zentraler Index aller Inhalte (ohne Body), aktualisiert nach jeder Aenderung
- **.content-cache/collections-[type].json:** Separate Indizes pro Collection-Type (blog.json, case-studies.json, etc.)
- **.content-cache/taxonomy-tags.json:** Mapping Tags -> [slugs]
- **.content-cache/taxonomy-categories.json:** Mapping Categories -> [slugs]
- **.content-cache/taxonomy-series.json:** Mapping Series -> [slugs]
- **.content-cache/slugs-index.json:** Reverse-Lookup slug -> ContentDocument

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG (Zustaendige Systemkomponente)

**Content-Modellierungs-Engine:** Verantwortlich fuer alle Operationen in Phase CW-01. Framework: Node.js + TypeScript, Bibliotheken: gray-matter (Frontmatter-Parsing), zod (Validierung), slugify (Slug-Generierung).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS (Erweiterte Implementierungshinweise)

- **Edge-Case-Behaendlung:** Duplikat-Frontmatter-Felder: LETZTE Instanz gewinnt. Malformed YAML: Fallback auf default-Schema mit Warnung.
- **Performance-Optimierung:** Cachiere Slug-Berechnungen (use stable-hash fuer Deduplication). Parallelisiere Datei-Lesevorgaenge ueber Worker-Threads.
- **Accessibility-Compliance:** Stelle sicher, dass alle automatisch extrahierten Felder (Excerpt, ReadingTime) fuer Screen-Reader verfuegbar sind (keine versteckten Attribute).
- **Fehlerbehandlung:** Bei >5% ungueltige Frontmatter-Rate: Warnung an Redakteure senden, Build nicht abbrechen, sondern mit FALLBACK-Modus fortfahren.
- **Monitoring:** Logge jede Modellierungs-Operation (Datei gelesen, Slug generiert, Validierung bestanden/fehlgeschlagen). Aggregiere Metrics (total_files, valid_files, invalid_files, avg_word_count).

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES (Tabellenformat)

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| Frontmatter-Valid | Alle erforderlichen Felder present und validiert | WARN, FieldDefault setzen | Weitergabe zu CW-02 |
| Slug-Unique | Slug nicht in bestehendem Index | ABORT + Report | Weiterverarbeitung |
| TitleLength | 10-200 Zeichen | WARN, autotruncate | Cache-Entry erstellen |
| TagsValid | 1-10 Tags, jedes 2-50 Zeichen | WARN, invalid Tags filtern | Taxonomie-Indexierung |
| DateValid | publishedAt ist ISO-DateTime | ABORT + Log | zeitstempel-Cache |
| BodyNotEmpty | MDX-Body >50 Zeichen | ABORT | WordCount-Berechnung |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL (Uebergabe zur naechsten Phase)

Nach erfolgreichem Durchlauf von Phase CW-01 werden folgende Daten an Phase CW-02 weitergegeben:

1. Vollstaendiger Content-Index (.content-cache/content-index.json)
2. Taxonomie-Mappings (alle drei Indizes)
3. Liste aller Content-Dokumente als in-memory-Strukturen
4. Fehler-Report (falls >0 Fehler aufgetreten)

**Auto-Trigger zu CW-02:** Wenn Index-Generierung ERFOLG signalisiert, wird sofort die Redaktionelle-Workflow-Engine (Phase CW-02) mit dem Draft-Filter initialisiert (nur Docu mit draft: false oder zukuenftigem publishedAt werden weitergeleitet).

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-02 — REDAKTIONELLER WORKFLOW

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Content-Index aus Phase CW-01 (alle Dokumente mit Metadaten)
- Git-Informationen (Branch, Commit-Hash, Author, Commit-Message)
- PR-Metadaten (falls in Pull-Request-Kontext ausgefuehrt)
- Publikationszeitsteuerung (publishedAt-Timestamp)

OUTPUT:
- Workflow-Status pro Dokument (Draft, In-Review, Approved, Published, Archived)
- Preview-URLs fuer Draft-Content
- Publikations-Zeitsteuerung-Eintraege (wann wird welches Dokument live?)
- Content-Lock-Eintraege (Konflikterkennung bei gleichzeitiger Bearbeitung)
- Workflow-Notifications (Slack, E-Mail) an Redakteure

DEPENDENCIES:
- **Upstream:** Content-Modellierung (CW-01)
- **Lateral:** Git-Integration (PRs, Commits), Benachrichtigungssystem (Slack-Webhook, E-Mail-API)
- **Downstream:** Media-Asset-Management (CW-03), SEO-Optimierung (CW-04)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Numerierte Ausfuehrungsschritte)

1. **Draft-Status-Bestimmung:** Pruefe fuer jedes Dokument das draft-Feld im Frontmatter.
   - draft: true -> Status = "DRAFT", nicht veroeffentlicht
   - draft: false + publishedAt <= NOW -> Status = "PUBLISHED"
   - draft: false + publishedAt > NOW -> Status = "SCHEDULED"

2. **Git-Branch-Kontext-Erfassung:** Ermittle den aktuellen Git-Branch. Falls in einem Feature-Branch (z.B. feature/new-article), markiere alle Docs in diesem Branch als "IN_REVIEW" (wartend auf PR-Merging).

3. **PR-Detection:** Falls ausgefuehrt im GitHub Actions-Kontext (GITHUB_EVENT_NAME == "pull_request"), ermittle die PR-Nummer und liste alle geaenderten Dateien auf. Diese Dateien befinden sich im "REVIEW"-Zustand und koennen nicht ins Production gehen, bis PR merged wurde.

4. **Draft-Mode-Aktivierung:** Fuer alle Dokumente mit draft: true, generiere eine interne Preview-URL (mit Next.js Draft-Mode-Token, z.B. /api/draft?slug=article-slug&token=SECRET). Speichere diese URLs in einem Draft-Registry.

5. **Content-Locking-Mechanismus:** Implementiere pessimistische Locks (Dateibasiert oder DB-basiert):
   - Wenn Datei gerade von Autor A bearbeitet wird, sperrere sie fuer Autor B
   - Lock-Timeout: 1 Stunde (danach auto-unlock mit Warnung)
   - Lock-Eintraege: {slug, locked_by, locked_at, expires_at}

6. **Publikations-Zeitsteuerung:** Fuer alle Dokumente mit zukueftigem publishedAt:
   - Erstelle einen Cron-Job (via node-cron oder AWS EventBridge)
   - Job: "Um [publishedAt-Zeit] unveroeffent Dokument mit slug=X"
   - Aktion: Setze draft: false, triggere Invalidation von ISR-Cache

7. **Approval-Gates-Implementierung:** Definiere folgende Gating-Logik:
   - **Draft-Gate:** Draft-Content wird nicht in Production-Build includiert (nur in Preview)
   - **PR-Review-Gate:** Content aendert sich nur in Merge-Commits, nicht in WIP-Commits
   - **Spelling-Gate:** Wird in Phase CW-05 gehandledl, aber Workflow muss "SPELLING_FAILED"-Status erkennen
   - **SEO-Gate:** Wird in Phase CW-04 gehandlet, muss aber "SEO_BLOCKED"-Status erkennen

8. **Workflow-Status-Persistierung:** Schreibe einen Workflow-State-Index:
```typescript
interface WorkflowState {
  slug: string;
  status: "DRAFT" | "IN_REVIEW" | "APPROVED" | "PUBLISHED" | "SCHEDULED" | "ARCHIVED";
  lastModifiedBy: string;
  lastModifiedAt: Date;
  approvedBy: string | null;
  approvedAt: Date | null;
  scheduledPublishAt: Date | null;
  lockedBy: string | null;
  lockedUntil: Date | null;
  notificationsSent: string[]; // ["slack:author", "email:editor"]
}
```

9. **Notification-Dispatch:** Bei Status-Uebergaengen:
   - DRAFT -> IN_REVIEW: Slack an #editorial-reviews + E-Mail an assigned-editor
   - IN_REVIEW -> APPROVED: Slack an #editorial-approvals + E-Mail an author
   - APPROVED -> SCHEDULED: Slack an #content-ops + Log der geplanten Publikation
   - SCHEDULED -> PUBLISHED: Slack an #content-published + twitter-automation-trigger

10. **Archived-Content-Behandlung:** Dokumente mit abgelaufenem updatedAt (z.B. >2 Jahre alt) und niedriger Performance (Analytics-Signal aus CW-08) werden automatisch in "ARCHIVED"-Status verschoben (nicht geloescht, aber aus Listings entfernt).

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL (Erzeugte Artefakte)

- **.content-cache/workflow-state.json:** Workflow-Status aller Dokumente
- **.content-cache/draft-registry.json:** Mapping slug -> preview-URL (mit Tokens)
- **.content-cache/locks.json:** Aktive Content-Locks mit Metadaten
- **.content-cache/scheduled-publishes.json:** Geplante Publikationsereignisse
- **Benachrichtigungen:** Slack-Messages, E-Mails an Stakeholder

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Redaktioneller-Workflow-Engine:** Verantwortlich fuer alle Operationen. Framework: Node.js + TypeScript, Bibliotheken: node-cron (Zeitsteuerung), @slack/web-api (Benachrichtigungen), nodemailer (E-Mail), octokit (GitHub PR-Integration).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **Raceconditionen-Behandlung:** Bei gleichzeitigen Modifikationen auf Draft-Status: Lock-basierte Serialisierung erzwingen. Implementiere optimistic-locking mit revision-counters als Fallback.
- **Zeitsteuerungs-Reliabilität:** Verwende Persistente Queues (Prisma + DB) fuer scheduled-publishes, nicht nur in-memory Crons. Sehe Retry-Logik vor (exponential backoff, max 3 retries).
- **Preview-Token-Sicherheit:** Tokens haben Ablaufdatum (24 Stunden), sind IP-limitiert (optional), und werden in secureHttpOnly Cookies gespeichert.
- **Fehlerbehandlung:** Lock-Timeout-Fehler -> Auto-Unlock mit Warnung an Lock-Besitzer. Cron-Fehler -> Retry + Alert an DevOps. Notification-Fehler -> Silent-Fail mit Logverbindung.

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| Draft-Consistency | draft=true iff Status=DRAFT | WARN, konsistent machen | Workflow-Update |
| PublishDateValid | publishedAt in Zukunft fuer SCHEDULED | ABORT, verschieben | Cron-Job erstellen |
| LockConflict | slug nicht gelockt von anderem Autor | WARN, Lock-Warnung zeigen | Content gesperrt |
| ApprovalGate | Status=IN_REVIEW iff in PR | WARN, ignorieren | Status-Update erlaubt |
| ScheduleUnique | Nur ein scheduled-publish pro slug | ABORT, Duplikat ablehnen | Queue-Entry hinzufuegen |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-02 werden weitergegeben:
1. Aktualisierter Content-Index mit Workflow-Status-Annotations
2. Liste aller Draft-URLs fuer Preview
3. Publikations-Queue (zeitgesteuert)
4. Benachrichtigungs-Log

**Auto-Trigger zu CW-03:** Nur APPROVED- und PUBLISHED-Dokumente gehen zu Phase CW-03 (Media-Asset-Management). Draft-Dokumente werden parallel in einem "Draft-Content-Pipeline" verarbeitet (separater Thread, nicht blockierend).

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-03 — MEDIA-ASSET-MANAGEMENT

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Content-Dokumente (MDX) mit eingebetteten Bild- und Video-Referenzen
- Content-Verzeichnis mit Assets (public/images/, public/videos/)
- CDN-Konfiguration (Cloudinary/Imgix API-Keys)

OUTPUT:
- Optimierte Bilder (WebP/AVIF-Varianten, mehrere Groessen fuer Responsive-Design)
- Blur-Placeholders (Plaiceholder-generiert)
- Video-Embedding-Codes (Lite-Embeds fuer YouTube/Vimeo)
- Asset-Versionierung (Content-Hash im Filename, z.B. image-[hash].webp)
- srcset-Mappings fuer HTML-Rendering
- Alt-Text-Enforcement (Fehler wenn fehlt)

DEPENDENCIES:
- **Upstream:** Content-Modellierung (CW-01), Workflow (CW-02)
- **Lateral:** Design-System-Pipeline (Image-Komponente), CDN-Infrastruktur
- **Downstream:** SEO-Optimierung (CW-04), Statische Generierung (CW-06)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Asset-Discovery:** Parse alle MDX-Content-Dateien auf Image- und Video-Referenzen.
   - Bilder: ![alt](src) Markdown-Syntax oder <Image src="" alt="" /> MDX-Komponenten
   - Videos: <YoutubeEmbed id="xyz" />, <VimeoEmbed id="xyz" />, <HLS src="/path/to/playlist.m3u8" />

2. **Alt-Text-Enforcement:** Fuer jedes Bild pruefe, ob alt-Text vorhanden ist und nicht leer. Falls leer: ERROR, Datei als "MISSING_ALT"-flaggen, weitergabe nur mit Warnung.

3. **Sharp-basierte Bildoptimierung:** Fuer jedes lokale Bild:
   - Lese original-Datei (z.B. public/images/my-image.png)
   - Generiere mehrere Ausgaben:
     * WebP: 1200px, 800px, 500px Breite
     * AVIF: 1200px, 800px, 500px Breite (fuer Browser mit AVIF-Unterstuetzung)
     * Fallback JPEG: 1200px, 800px, 500px Breite
   - Speichere unter public/images/optimized/ mit Content-Hash: my-image-[sha256hash].webp, my-image-[sha256hash].avif, etc.

4. **Plaiceholder-Generierung:** Fuer jedes optimierte Bild:
   - Generiere 10x10px Blur-Placeholder (LQIP - Low Quality Image Placeholder)
   - Konvertiere zu base64-DataURL
   - Speichere in separater Metadaten-Datei (.image-cache/placeholders.json)
   - Verwendung: <Image src={...} blurDataURL={placeholders[slug]} placeholder="blur" />

5. **Responsive-Images-Konfig:** Generiere srcset-Strings:
   ```
   /images/optimized/my-image-[hash1].webp 500w,
   /images/optimized/my-image-[hash2].webp 800w,
   /images/optimized/my-image-[hash3].webp 1200w
   ```
   Speichere in .image-cache/srcsets.json

6. **YouTube/Vimeo-Lite-Embed:** Fuer Video-Referenzen:
   - Nutze lite-youtube-embed oder lite-vimeo-embed Web-Component (lazy-loaded, <80KB)
   - Ersetze Original-<iframe> durch Web-Component-Variante
   - Speichere Video-Metadaten (duration, thumbnail) fuer Analytics

7. **Self-Hosted-Video-Handling:** Falls HLS-Playlist-Referenzen:
   - Validiere Playlist-Existenz (.m3u8-Datei)
   - Generiere Manifest-Links fuer HLS.js
   - Speichere Segment-Informationen fuer Preloading

8. **CDN-Integration (optional):** Falls Cloudinary/Imgix konfiguriert:
   - Lade Original-Bilder zu Cloudinary hoch
   - Ersetze lokale Pfade mit Cloudinary-URLs (mit Transformations-Parametern)
   - Nutze Imgix als CDN-Layer fuer zusaetzliche Optimierungen

9. **Asset-Versionierungs-Tracking:** Erstelle .image-cache/assets-index.json:
```typescript
interface AssetIndex {
  originalPath: string; // public/images/my-image.png
  hash: string; // SHA256 des Original-Files
  optimizedVariants: {
    webp500: string; // /optimized/my-image-[hash].webp
    webp800: string;
    webp1200: string;
    avif500: string;
    // ...
  };
  placeholder: string; // base64-DataURL
  srcset: string; // srcset-String fuer HTML
  altText: string;
}
```

10. **Lazy-Loading-Config:** Alle Bilder erhalten loading="lazy"-Attribut (native Browser-API). Videos erhalten loading="lazy" als Custom-Attribut auf Web-Components.

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **.image-cache/assets-index.json:** Metadaten aller Bilder
- **.image-cache/placeholders.json:** Blur-Placeholders fuer LQIPs
- **.image-cache/srcsets.json:** Responsive Image Srcsets
- **public/images/optimized/:** Alle optimierten Bildvarianten
- **.video-cache/manifest-index.json:** Metadaten fuer selbst-gehostete Videos

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Media-Asset-Engine:** Verantwortlich fuer alle Optimierungen. Bibliotheken: sharp (Bildoptimierung), plaiceholder (Blur-Generierung), @next/image (Image-Komponente), youtube-embed/vimeo-embed Web-Components.

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **Performance-Optimierung:** Parallelisiere Sharp-Operationen ueber alle CPU-Kerne (worker-threads). Implementiere inkrementelle Builds: nur Bilder mit geaenderten Hash neu verarbeiten.
- **Speicheroptimierung:** Sharp arbeitet mit Streaming fuer grosse Dateien (>10MB), nicht im Memory vollstaendig laden.
- **Fehlerbehandlung:** Ungueltige Bild-Formate -> Fallback auf Original mit Warnung. Fehlende Alt-Texte -> Build-Fehler (hard-fail, nicht weiter).
- **WCAG AAA Compliance:** Alt-Texte muessen beschreibend sein (min. 10 Zeichen, nicht bloss "Bild"). Implementiere Alt-Text-Qualitaets-Checker.
- **CDN-Fallback:** Falls Cloudinary-Upload fehlschlaegt, nutze lokale Varianten. Retry mit exponential backoff (max 3 Versuche).

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| AltTextPresent | alt-Text nicht leer | ERROR, ABORT | Weitergabe zu CW-04 |
| ImageFormatValid | Dateiformat ist PNG/JPG/WebP | WARN, Skip | Sharp-Verarbeitung |
| OptimizationSuccess | Sharp-Konversion erfolgreich | ABORT + Log | srcset-Generierung |
| PlaceholderGenerated | LQIP vorhanden fuer alle Bilder | WARN, Skip placeholder | Image-Cache-Update |
| ResponsiveCovered | Mindestens 3 Groessen generiert | WARN, Fallback-Groessen | Asset-Index-Update |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-03 werden weitergegeben:
1. Asset-Index mit optimierten Pfaden und Srcsets
2. Placeholder-Daten fuer LQIPs
3. Video-Embedding-Konfiguration
4. Fehler-Report (fehlende Alt-Texte, ungueltige Formate)

**Auto-Trigger zu CW-04:** Optimierte Asset-Daten werden in Content-Index integriert (Datei-Referenzen ersetzen durch optimierte Pfade). SEO-Optimierungs-Engine wird mit aktualisiertem Index gestartet.

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-04 — SEO-CONTENT-OPTIMIERUNG

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Content-Dokumente (Metadaten + Body-Text)
- Optimierte Asset-Metadaten aus CW-03
- Interne Content-Links (Verlinkungen zwischen Dokumenten)
- Existierendes Structured-Data-Schema (falls vorhanden)

OUTPUT:
- Meta-Tags (title, description, keywords, robots)
- Open-Graph-Tags (og:title, og:description, og:image, og:url, og:type)
- Twitter-Card-Tags (twitter:card, twitter:title, twitter:description, twitter:image)
- Structured-Data JSON-LD (Article, FAQ, HowTo, BreadcrumbList)
- Dynamisch-generierte Open-Graph-Bilder (og-image)
- Reading-Time-Berechnung
- Internal-Linking-Vorschlaege
- Canonical-URL-Management
- Meta-Robots-Direktiven

DEPENDENCIES:
- **Upstream:** Media-Asset-Management (CW-03), Content-Modellierung (CW-01)
- **Lateral:** Design-System-Pipeline (OG-Image-Generierung), Data-Layer-Pipeline (kanonische URLs)
- **Downstream:** Content-Validierung (CW-05), Statische Generierung (CW-06)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Meta-Tag-Automatisierung:** Fuer jedes Dokument, extrahiere oder generiere:
   - **title:** Nutze title aus Frontmatter (max 60 Zeichen fuer Google SERPs). Falls zu lang: autotruncate mit Ellipsis.
   - **description:** Nutze description aus Frontmatter (max 160 Zeichen). Falls zu kurz: generiere aus Body-Excerpt (Phase CW-01).
   - **keywords:** Nutze seo.keywords aus Frontmatter oder generiere aus tags + category.

2. **Open-Graph-Tags:** Generiere OG-Daten:
   - og:title = title (max 60 Zeichen)
   - og:description = description (max 160 Zeichen)
   - og:image = seo.ogImage aus Frontmatter ODER dynamisch generiert (siehe Schritt 6)
   - og:url = vollstaendige kanonische URL (Protokoll + Domain + slug)
   - og:type = "article" (fuer Blog/Case-Studies) oder "website" (fuer Docs)
   - article:published_time = publishedAt-ISO-String
   - article:modified_time = updatedAt-ISO-String (falls vorhanden)
   - article:author = author-Name aus Frontmatter

3. **Twitter-Card-Tags:**
   - twitter:card = "summary_large_image"
   - twitter:title = title (max 70 Zeichen)
   - twitter:description = description (max 200 Zeichen)
   - twitter:image = og:image (reuse)
   - twitter:site = @site-handle (konfigurierbar)
   - twitter:creator = @author-handle (wenn vorhanden in Author-Profil)

4. **Reading-Time-Berechnung:** Berechne durchschnittliche Lesezeit:
   - Zaehle Woerter im Body-Text (regex: \b\w+\b)
   - Durchschnitt: 200 Woerter/Minute (kann pro Content-Type konfiguriert werden)
   - Formula: readingTime = Math.ceil(wordCount / 200)
   - Speichere in Frontmatter oder als Meta-Attribut

5. **Internal-Linking-Engine:** Automatische Verlinkung verwandter Inhalte:
   - Finde alle Dokumente mit ueberlappendem Tags/Category (maximal 5 Vorschlaege)
   - Generiere automatische interne Links in Footer oder Sidebar
   - Format: "Related articles: [Link 1], [Link 2], [Link 3]"
   - Strategie: Prioritaet nach Relevanz (Tag-Overlap) > Veroeffentlichungsdatum (neuere zuerst)

6. **Dynamische-OG-Image-Generierung:** Falls seo.ogImage nicht definiert:
   - Generiere Bild programmatisch via og-image-API oder @vercel/og
   - Design: Titel + Category + Autor-Avatar
   - Speichere unter public/og/[slug].png oder generiere on-the-fly
   - Beispiel-Stack: node-canvas oder Puppeteer fuer Screenshot-basiert

7. **Structured-Data-JSON-LD:** Generiere JSON-LD-Bloecke (in <head> oder <script>):

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{title}}",
  "description": "{{description}}",
  "image": "{{ogImage}}",
  "datePublished": "{{publishedAt}}",
  "dateModified": "{{updatedAt}}",
  "author": {
    "@type": "Person",
    "name": "{{author}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "{{siteTitle}}",
    "logo": {
      "@type": "ImageObject",
      "url": "{{siteLogo}}"
    }
  }
}
```

8. **FAQ-Schema (falls applicable):** Falls Content Fragen+Antworten enthaelt (erkannt via heading + Absatz-Pattern):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{question}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{answer}}"
      }
    }
  ]
}
```

9. **BreadcrumbList-Schema:** Generiere fuer alle nicht-Root-Seiten:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{category}}",
      "item": "https://example.com/{{categorySlug}}"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{title}}",
      "item": "https://example.com/{{slug}}"
    }
  ]
}
```

10. **Canonical-URL-Management:** Setze canonical-Tag:
   - <link rel="canonical" href="https://example.com/{{slug}}" />
   - Falls Content auf mehreren URLs verfuegbar (z.B. mit und ohne www), vermeide Duplicate-Content-Probleme
   - Falls Artikel an anderer Stelle veroeffentlicht (Medium, Dev.to), setze canonical auf Originalversion

11. **Meta-Robots-Direktiven:** Definiere Zugriff fuer Suchmaschinen:
   - Published-Content: <meta name="robots" content="index, follow" />
   - Draft-Content: <meta name="robots" content="noindex, nofollow" />
   - Archived-Content: <meta name="robots" content="noindex, follow" /> (gibt Equity weiter, wird nicht geindexed)

12. **Speicher-Persistierung:** Schreibe .seo-cache/seo-metadata.json:
```typescript
interface SEOMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string | null;
  readingTime: number;
  relatedArticles: string[]; // Array von Slugs
  structuredData: object; // Komplettes JSON-LD
  canonicalUrl: string;
  robotsDirective: string;
}
```

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **.seo-cache/seo-metadata.json:** Alle SEO-Metadaten pro Dokument
- **public/og/[slug].png:** Dynamisch generierte OG-Bilder
- **.seo-cache/internal-links.json:** Related-Articles-Mappings
- **robots.txt:** Global Robots-Direktiven (wird in Phase CW-06 in Next.js-Route abgelegt)
- **sitemap.xml:** Sitemap aus aller Content (wird in Phase CW-06 generiert)

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**SEO-Optimierungs-Engine:** Verantwortlich. Bibliotheken: @vercel/og (OG-Bild-Generierung), schema-dts (Structured-Data-TypeScript-Generierung), reading-time (Lesezeit), natural (NLP fuer Internal-Linking).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **OG-Image-Caching:** OG-Bilder sind teuer zu generieren. Cache aggressiv (1 Woche TTL). Invalidiere nur wenn title/description geaendert.
- **Internal-Linking-Intelligenz:** Nutze NLP-Textaehnlichkeits-Metriken (cosine-similarity) statt bloss Tag-Overlap fuer smartere Related-Articles.
- **Keyword-Optimierung:** Integriere einfache Keyword-Density-Checks (Zielkeyword sollte 0.5-2% des Text-Inhalts sein). Warn bei Abweichung.
- **Mobile-Friendly-Checks:** Validiere, dass description <120 Zeichen bei mobiler Ansicht (Google zeigt gekuerzte Descriptions auf Mobile).
- **Hreflang-Management:** Falls Multi-Language-Support geplant, generiere hreflang-Tags fuer kanonische Sprach-Versionen.

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| TitleValid | 30-60 Zeichen | WARN, autotruncate | OG-Tag-Generierung |
| DescValid | 120-160 Zeichen | WARN, pad oder truncate | Meta-Description-Set |
| OGImageValid | OG-Bild-URL valid | WARN, generiere dynamisch | SEO-Metadata-Save |
| StructuredDataValid | JSON-LD ist valides Schema | ERROR, Log Fehler | Weitergabe zu CW-05 |
| ReadingTimeValid | ReadingTime zwischen 1-30 Minuten | WARN, Outlier-Pruefung | Meta-Save |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-04 werden weitergegeben:
1. Vollstaendige SEO-Metadaten (alle Tags, Structured Data)
2. OG-Bild-Verzeichnis
3. Internal-Links-Graph
4. ReadingTime und Keyword-Analysen

**Auto-Trigger zu CW-05:** SEO-Metadaten-Index wird Content-Index fusioniert. Content-Validierungs-Engine startet mit vollstaendigen Dokumenten fuer Linting und Link-Checks.

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-05 — CONTENT-VALIDIERUNG

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Vollstaendige Content-Dokumente (Body + Metadaten)
- SEO-Metadaten aus CW-04
- Asset-Metadaten aus CW-03
- Externe Link-Ziele (URLs)

OUTPUT:
- Validierungs-Report (Broken-Links, Alt-Text-Fehler, Spelling, Grammar, Readability)
- Fehler-Klassifizierung (Critical, Warning, Info)
- Readability-Scores (Flesch-Kincaid, Gunning-Fog)
- Duplikat-Content-Flags
- Word-Count-Einhaltung
- Spelling- und Grammar-Fehler-Locations

DEPENDENCIES:
- **Upstream:** SEO-Optimierung (CW-04), Media-Asset-Management (CW-03)
- **Lateral:** Spell-Check-Service (z.B. languagetool, grammarly-api), Link-Validator-Service
- **Downstream:** Statische Generierung (CW-06)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Broken-Link-Detection (intern):** Fuer alle Markdown-Links [text](url):
   - Falls url startet mit / oder www oder http: External-Link (siehe Schritt 2)
   - Falls url ist relativer Pfad (z.B. /blog/another-article): Pruefe ob slug in Content-Index existiert
   - Falls nicht vorhanden: ERROR, Link-as-broken markieren, Location und Zeile speichern

2. **Broken-Link-Detection (extern):** Fuer alle HTTP/HTTPS-Links:
   - Fetche HEAD-Request an URL (timeout: 5 Sekunden)
   - Akzeptiert HTTP-Status 200-399 als valide
   - Status 404, 410, 500+: ERROR, broken-link-log hinzufuegen
   - Timeout: WARN, manuell pruefen (Link existiert moeglicherweise, aber Server verzoegert)
   - Cache externe Link-Checks (24h TTL), um Rate-Limits zu vermeiden

3. **Alt-Text-Enforcer (redundant von CW-03, aber double-check):**
   - Suche alle ![alt](src)-Patterns im Body
   - Falls alt leer oder nur Whitespace: ERROR, "MISSING_ALT: Line X"
   - Falls alt nur Dateiname ist (z.B. "image.png"): WARN, "ALT_TEXT_INSUFFICIENT"

4. **Minimum-Word-Count-Gates:**
   - Blog-Artikel: minimum 500 Woerter, warning ab 300, error ab 200
   - Case-Studies: minimum 1000 Woerter, warning ab 700, error ab 500
   - Dokumentation: minimum 200 Woerter, warning ab 100
   - Changelog: minimum 50 Woerter (kurze Updates ok)
   - Berechnung: Zaehle \b\w+\b mit Regex, Markdown-Syntax ignorieren (Links, Code-Bloecke)

5. **Readability-Score-Berechnung:** Implementiere zwei Algorithmen:
   - **Flesch-Kincaid-Grade-Level:** (0.39 * wordCount / sentenceCount) + (11.8 * syllables / wordCount) - 15.59
     * Grade 0-6: "Easy" (Primary School)
     * Grade 6-8: "Normal" (Secondary School)
     * Grade 8-12: "Difficult" (College)
     * Grade 12+: "Very Difficult"
   - **Gunning-Fog-Index:** 0.4 * ((wordCount/sentenceCount) + 100 * (complexWords/wordCount))
     * Score <6: Very Easy
     * Score 6-9: Easy
     * Score 9-12: Normal
     * Score 12-14: Difficult
     * Score 14+: Very Difficult
   - Zielbereich: Grade 8-10 (gute Lesbarkeit fuer allgemeines Publikum)
   - Falls Score >12: WARN, "CONTENT_TOO_DENSE"

6. **Duplicate-Content-Detection:** Nutze Simhash oder MinHash:
   - Berechne Similarity-Hash fuer Body-Text
   - Vergleiche gegen alle anderen Dokumente im Index
   - Falls Aehnlichkeit >80%: ERROR oder WARN (Redundanz), speichere Duplikat-Paar

7. **Frontmatter-Schema-Validierung (redundant von CW-01, aber Verify):**
   - Pruefe erneut gegen Zod-Schema (da Aenderungen moeglich)
   - Falls Fehler: CRITICAL, Datei markieren fuer Editor-Intervention

8. **Spelling-Check:** Integriere languagetool oder Grammarly-API:
   - Parse Body-Text (ignoriere Code-Bloecke, Links)
   - Pruefe gegen deutsches Woerterbuch + Custom-Dictionary (Markentermini, Eigennamen)
   - WARN bei Tippfehlern, gebe Vorschlaege aus
   - Custom-Dictionary: .dictionaries/custom.txt (zeilenweise Eintraege)

9. **Grammar-Check:** Nutze languagetool-API oder simpler Regex-basierter Checker:
   - Typische Fehler: Gro/Kleinschreibung, doppelte Leerzeichen, Satzzeichen-Position
   - WARN bei Fehlern, gebe Kontext und Zeile aus

10. **Validierungs-Report-Generierung:** Schreibe .validation-cache/validation-report.json:
```typescript
interface ValidationReport {
  slug: string;
  status: "PASS" | "PASS_WITH_WARNINGS" | "FAIL";
  errors: ValidationError[];
  warnings: ValidationWarning[];
  infos: ValidationInfo[];
  readabilityScores: {
    flesch_kincaid: number;
    gunning_fog: number;
    assessment: "Easy" | "Normal" | "Difficult";
  };
  wordCount: number;
  linkCount: { internal: number; external: number };
  imageCount: number;
  generatedAt: Date;
}

interface ValidationError {
  type: "BROKEN_LINK" | "MISSING_ALT" | "INSUFFICIENT_WORDS" | "INVALID_FRONTMATTER" | "DUPLICATE_CONTENT";
  message: string;
  location?: { line: number; column?: number };
  suggestion?: string;
}
```

11. **Fehler-Aggregation:** Fasse alle Fehler pro Dokument zusammen:
   - CRITICAL Errors: Build stoppt, Datei wird nicht freigegeben
   - WARNINGS: Build geht weiter, aber Editor wird benachrichtigt
   - INFO: Nur Logging, keine Blockade

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **.validation-cache/validation-report.json:** Haupt-Validierungsbericht
- **.validation-cache/broken-links.json:** Detaillierte Broken-Links-Liste
- **.validation-cache/readability-scores.json:** Lesbarkeits-Metriken
- **.validation-cache/duplicates.json:** Duplikat-Content-Flags
- **.validation-cache/spelling-errors.json:** Tippfehler mit Vorschlaegen

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Content-Validierungs-Engine:** Verantwortlich. Bibliotheken: languagetool-api (Spelling/Grammar), readability-scores (Flesch-Kincaid), got (HTTP-Requests fuer Link-Checks), simhash-js (Duplikat-Detection).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **Link-Check-Performance:** Externale Links sind bottleneck. Implementiere HTTP-Connection-Pooling, parallelisiere ueber max 5 gleichzeitige Requests. Cache aggressiv (48h TTL).
- **False-Positives:** Manche Domains blockieren Bot-User-Agents. Nutze realen Browser-UA. Ferner: Manche Links erfordern JavaScript (dynamic 404s). Nutze Puppeteer fuer solche Faelle (optional, nur bei Fehler-Retry).
- **Speicheroptimierung:** Lade Dokumente nicht vollstaendig in Memory fuer alle Checks. Streame Text fuer Word-Count, Readability (Algorithmen sind inkrementell).
- **Multilanguage-Spelling:** Falls Content in mehreren Sprachen, erkenne Sprache (z.B. via langdetect) und nutze entsprechende Woerterbuecker.

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| NoIssues | Keine CRITICAL-Errors | ABORT, Report | Weitergabe zu CW-06 |
| WordCount | Minimum-Schwellwert erreichet | WARN oder ABORT (context-dependent) | Readability-Check |
| NoMissingAlt | Alle Bilder haben Alt-Text | ABORT | Link-Check-Suite |
| LinkValidity | <=5% broken links toleriert | WARN, Report | Externe-Link-OK |
| Readability | Grade 8-10 im Zielbereich | WARN bei Abweichung | Report-Generierung |
| NoDuplicates | Aehnlichkeit <80% zu anderen Docs | WARN oder ABORT (Kontext) | Report-Finalisierung |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-05 werden weitergegeben:
1. Validierungs-Report mit allen Fehler-Kategorien
2. Readability-Metriken
3. Link-Validierungsergebnisse
4. Duplikat-Flags (falls vorhanden)

**Auto-Trigger zu CW-06:** Nur Dokumente mit Status PASS oder PASS_WITH_WARNINGS gehen zu Statische-Generierung. Dokumente mit FAIL bekommen Status-Block und werden Editoren zur Behebung zugewiesen (Benachrichtigung).

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-06 — STATISCHE GENERIERUNG

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Validierte Content-Dokumente
- SEO-Metadaten
- Asset-Metadaten
- Workflow-Status (Draft/Published)

OUTPUT:
- Statisch generierte HTML-Seiten (.next/static/)
- On-Demand ISR revalidatePath-Aufrufe
- Draft-Mode-Routes (mit geheimen Tokens)
- Sitemap.xml
- RSS-Feeds
- robots.txt
- Pagination-Seiten

DEPENDENCIES:
- **Upstream:** Alle frueheren Phasen (CW-01 bis CW-05)
- **Lateral:** Next.js Framework, Vercel Deployment-Infrastruktur
- **Downstream:** Analytics-Integration (CW-08)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Next.js-Content-Collections-Setup:** Nutze getStaticProps + getStaticPaths in pages/[collection]/[slug].tsx:
```typescript
export async function getStaticPaths() {
  // Lese alle Slugs aus content-index.json
  // Gebe paths array zurueck: [{ params: { collection: 'blog', slug: 'article-1' } }, ...]
  // fallback: 'blocking' fuer ISR
}

export async function getStaticProps({ params }) {
  // Lese Dokument aus Content-Index
  // Gebe props zurueck: { props: { content, seoMetadata, ... }, revalidate: 3600 }
}
```

2. **Incremental-Content-Builds:** Nutze revalidatePath bei Content-Aenderungen:
   - Nach erfolgreicher Publikation in CW-02: revalidatePath('/blog/[slug]', 'page')
   - Invalidiere auch Related-Articles-Seiten (aus CW-04)
   - Invalidiere Archive/Listing-Seiten (z.B. /blog/page/1)

3. **On-Demand-ISR:** Implementiere /api/revalidate-Route:
```typescript
export default async function handler(req, res) {
  // Validiere Secret-Token
  if (req.query.secret !== process.env.ISR_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const slug = req.query.slug;

  try {
    await res.revalidate(`/blog/${slug}`);
    // Revalidiere auch Related-Articles
    relatedSlugs.forEach(s => res.revalidate(`/blog/${s}`));
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
```

4. **Draft-Mode-Aktivierung:** Implementiere /api/draft-Route mit geheimem Token:
```typescript
export default function handler(req, res) {
  // Validiere Draft-Token aus request
  if (req.query.token !== process.env.DRAFT_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Setze Draft-Mode-Cookie
  res.setDraftMode({ enable: true });

  // Redirect zu Draft-Content
  res.writeHead(307, { Location: `/blog/${req.query.slug}` });
  res.end();
}
```

5. **Preview-Rendering:** In getStaticProps, pruefe ob Draft-Mode aktiv:
```typescript
if (context.preview) {
  // Render auch Draft-Content
  return { props: { content, isDraft: true } };
} else {
  // Nur Published-Content
  if (content.draft) return { notFound: true };
}
```

6. **Sitemap-Generierung:** Erstelle public/sitemap.xml als statische Datei:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/blog/article-1</loc>
    <lastmod>2026-04-05T10:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- weitere URLs -->
</urlset>
```

   - Fuer jedes Published-Dokument: loc, lastmod (updatedAt), changefreq (blog: weekly, docs: monthly), priority (basierend auf Kategorie/Alter)

7. **RSS-Feed-Generierung:** Erstelle public/feed.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Blog Title</title>
    <link>https://example.com</link>
    <description>Blog Description</description>
    <item>
      <title>Article Title</title>
      <link>https://example.com/blog/article-slug</link>
      <pubDate>Fri, 05 Apr 2026 10:00:00 GMT</pubDate>
      <guid>https://example.com/blog/article-slug</guid>
      <content:encoded><![CDATA[{{ article body HTML-rendered }}]]></content:encoded>
    </item>
  </channel>
</rss>
```
   - Nutze rss-Package fuer Valid-RSS-Generierung

8. **Autor-spezifische-RSS-Feeds:** Erstelle pro Autor /feed/author/[author].xml:
   - Filter Items auf Artikel von diesem Autor
   - Nutze Author-Profil-Daten (Name, Bio, Avatar)

9. **Pagination-Logik:** Fuer Listing-Seiten (z.B. /blog/page/1):
```typescript
const ITEMS_PER_PAGE = 10;

export async function getStaticPaths() {
  const allArticles = await getAllContent('blog');
  const pageCount = Math.ceil(allArticles.length / ITEMS_PER_PAGE);

  const paths = Array.from({ length: pageCount }).map((_, i) => ({
    params: { page: String(i + 1) },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10);
  const allArticles = await getAllContent('blog');

  const start = (page - 1) * ITEMS_PER_PAGE;
  const items = allArticles.slice(start, start + ITEMS_PER_PAGE);

  return {
    props: {
      items,
      pageCount: Math.ceil(allArticles.length / ITEMS_PER_PAGE),
      currentPage: page,
    },
    revalidate: 3600,
  };
}
```

10. **robots.txt-Generierung:** Erstelle public/robots.txt:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://example.com/sitemap.xml
```

11. **Build-Time-Logging:** Logge alle generierten Seiten:
    - Total pages generated: X
    - Build duration: Ys
    - Incremental updates: N Seiten revalidiert
    - Fehler: N Fehler waehrend Build

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **.next/static/:** Alle statisch generierten HTML-Seiten
- **public/sitemap.xml:** XML-Sitemap
- **public/feed.xml:** RSS-Feed (Haupt-Feed)
- **public/feed/author/[author].xml:** Autor-spezifische RSS-Feeds
- **public/robots.txt:** Robots-Direktiven
- **.next/cache/:** ISR-Cache fuer revalidate-Aufrufe

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Statische-Generierungs-Engine:** Verantwortlich fuer alle Build-Operationen. Framework: Next.js, Libraries: rss (RSS-Feed), sitemap (Sitemap-Generation), feed (erweiterte Feed-Unterstützung).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **Build-Performance:** ISR-Revalidation ist teuer. Batch-Updates: Collect mehrere Revalidate-Anfragen in 10s-Fenster, dann gemeinsam verarbeiten (coalescing).
- **Draft-Mode-Sicherheit:** Draft-Token sollte rotate werden (z.B. taglich). Alte Tokens invalidieren. Logge alle Draft-Access-Versuche.
- **Fallback-Handling:** Bei ISR-Fehler (z.B. Netzwerkfehler), fallback auf alte Version (nicht notFound). Logge Fehler, retry asynchron.
- **Memory-Optimization:** Next.js ISR kann Memory-intensiv sein bei vielen revalidate-Aufrufen. Nutze Streaming + Partial Regeneration (nur Delta-Content neu erzeugen).

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| BuildSuccess | Next.js Build ohne Fehler | ABORT, Deploy stoppen | Weitergabe zu CW-07 |
| SitemapValid | Sitemap.xml valid | WARN, Log Fehler | Robots-Generierung |
| RSSFeedValid | RSS-Feed valides XML | WARN, Log Fehler | Deployment |
| NoMissingRoutes | Alle Slugs haben Routes | ERROR, Missing-Slugs-Log | Build-Complete |
| DraftTokenValid | Token vorhanden + geheim | ERROR, Build fail | Draft-API-Ready |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-06 werden weitergegeben:
1. Generierte statische Seiten (.next/static/)
2. ISR-Cache-Metadaten
3. Sitemap und RSS-Feeds
4. Build-Log und Performance-Metriken

**Auto-Trigger zu CW-07:** Deployment findet statt (zu Vercel oder anderer Hosting-Plattform). Nach Deployment-Erfolg wird Analytics-Integrations-Engine (CW-08) aktiviert.

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-07 — MULTI-AUTOR-SUPPORT

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Autor-Informationen aus Content-Frontmatter (author-Feld)
- Git-Commit-Metadaten (Commit-Author)
- Autor-Profile (falls in separate Dateistruktur)

OUTPUT:
- Autor-Profile-Daten (Name, Bio, Avatar, Social-Links, Spezialisierungen)
- Beitrags-Attributions-Metadata (Autor, Co-Autoren, Reviewer)
- Autor-Archiv-Seiten (/authors/[author]/page/[page])
- Redaktionskalender-Eintraege (wer veroeffentlicht wann)
- Autor-spezifische RSS-Feeds (/feed/author/[author].xml)
- Contributor-Guidelines-Dokumentation

DEPENDENCIES:
- **Upstream:** Content-Modellierung (CW-01), Statische Generierung (CW-06)
- **Lateral:** Autor-Profil-Datenbank (CMS oder JSON), Git-Integration
- **Downstream:** Analytics-Integration (CW-08)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Autor-Profil-Verwaltung:** Definiere Autor-Struktur:
```typescript
interface AuthorProfile {
  id: string; // Eindeutige ID
  name: string; // Display Name
  email: string;
  bio: string; // Kurze Biografie (100-200 Zeichen)
  avatar: string; // URL zu Avatar-Bild
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  specializations: string[]; // Tags wie ["Next.js", "React", "TypeScript"]
  joinedAt: Date;
  isActive: boolean;
}
```

   Speichere in content/authors/[author-id].json oder in Datenbank.

2. **Autor-Erkennung:** Fuer jedes Content-Dokument:
   - Extrahiere author-Feld aus Frontmatter
   - Lookup in Autor-Profil-Database
   - Falls nicht gefunden: Erstelle minimales Profil (Name nur, andere Felder optional)

3. **Co-Autoren-Support:** Erweitere Frontmatter-Schema fuer optionales co-authors-Array:
```yaml
title: "Article Title"
author: "Author Name"
coAuthors: ["Author 2", "Author 3"]
```

   Verarbeite co-authors identisch wie author (Lookup, Profil-Erstellung).

4. **Beitrags-Attribution:** Fuer jedes Dokument, speichere:
```typescript
interface ContentAttribution {
  slug: string;
  author: string; // Primary Author
  coAuthors: string[]; // Optional
  reviewer?: string; // PR-Reviewer (aus Git)
  publishedAt: Date;
  updatedAt: Date;
  updateHistory: {
    updatedBy: string;
    updatedAt: Date;
    changeDescription?: string;
  }[];
}
```

5. **Autor-Archive-Seiten:** Generiere /authors/[author]/page/[page]:
```typescript
export async function getStaticPaths() {
  const allAuthors = await getAllAuthors();
  const paths = [];

  for (const author of allAuthors) {
    const articles = await getArticlesByAuthor(author.id);
    const pageCount = Math.ceil(articles.length / ITEMS_PER_PAGE);

    for (let p = 1; p <= pageCount; p++) {
      paths.push({ params: { author: author.id, page: String(p) } });
    }
  }

  return { paths, fallback: 'blocking' };
}
```

   Zeige alle Artikel dieses Autors mit Pagination.

6. **Git-basierte-Autor-Zuordnung:** Fuer Content-Updates, lese Git-Metadaten:
```typescript
const commits = await getGitCommitsForFile('content/blog/article.mdx');
const lastCommit = commits[0];

const updateHistory: UpdateHistoryEntry = {
  updatedBy: lastCommit.author.name,
  updatedAt: new Date(lastCommit.date),
  changeDescription: lastCommit.message,
};
```

   Nutze git-log-API (z.B. simple-git-Package) fuer Commit-Extraction.

7. **Redaktionskalender-Integration:** Erstelle Kalender-Ansicht (z.B. /editorial-calendar):
   - Gruppe Content nach publishedAt-Datum
   - Zeige Autor pro Artikel
   - Farbkodierung nach Status (Draft/Scheduled/Published)
   - Nutze React-Calendar oder FullCalendar-Integration

8. **Contributor-Guidelines:** Schreibe CONTRIBUTORS.md mit:
   - Wie man beitraegt (Fork, Branch, PR)
   - Content-Richtlinien (Laenge, Stil, Frontmatter-Schema)
   - Reviewer-Prozess
   - Code-of-Conduct
   - Speichern unter root/CONTRIBUTORS.md oder /docs/contributors/

9. **Autor-Spezialisierungs-Tags:** Nutze specializations aus Autor-Profil:
   - Auf Autor-Profil-Seite zeige: "Spezialisierungen: Next.js, TypeScript"
   - Auf Blog-Listing: neben Autor-Name auch deren Top 2 Spezialisierungen

10. **Autor-Validierung:** Implementiere Gate, dass Author-Feld gueltig ist:
    - Author muss in Datenbank existieren (oder automatisch erstellen)
    - Bio mindestens 10 Zeichen (falls vorhanden)
    - Avatar-URL valid (Bildexistenz-Check optional)

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **content/authors/[id].json:** Autor-Profile
- **.author-cache/author-index.json:** Index aller Autoren mit Statistiken
- **.author-cache/attributions.json:** Content-Attribution-Metadaten
- **CONTRIBUTORS.md:** Contributor-Guidelines
- **pages/authors/[author]/page/[page].tsx:** Author-Archive-Seiten
- **.editorial-calendar/calendar-data.json:** Redaktionskalender-Eintraege

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Multi-Autor-Manager:** Verantwortlich. Libraries: simple-git (Git-Integration), @fullcalendar/react (Kalender-UI), date-fns (Datum-Manipulationen).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **Autor-Profilbilder:** Avatar-URLs sollten gecacht und optimiert werden (Sharp-Konvertierung zu WebP, ähnlich wie in CW-03 für Content-Bilder).
- **Contributor-Gamification:** Optional: Statistiken pro Autor (Artikel-Count, Views-Total, Rating-Average). Nutze Analytics-Daten aus CW-08.
- **Author-Recommendation-Engine:** Nach SEO-Internal-Linking (CW-04) basierend auf Tag-Overlap, erweitere auf Author-Empfehlungen: "Andere Artikel von [Author]" am Content-Ende.

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| AuthorExists | Autor in DB vorhanden | WARN, Auto-Profil erstellen | Attribution-Save |
| AuthorValid | Bio/Avatar valid (wenn vorhanden) | WARN, optional fields | Kalender-Update |
| CoAuthorsValid | Alle Co-Autoren existieren | WARN, invalid Co-Authors filtern | Archive-Seiten-Gen |
| UniqueAuthor | Nicht mehrere Author-IDs pro slug | ERROR, Duplikat korrigieren | Git-Metadaten-Sync |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-07 werden weitergegeben:
1. Autor-Profile und Attribution-Daten
2. Author-Archive-Seiten (HTML generiert)
3. Redaktionskalender-Index
4. Contributor-Guidelines

**Auto-Trigger zu CW-08:** Analytics-Engine wird mit vollstaendigen Content-Dokumenten (+ Attribution) initialisiert fuer Performance-Tracking.

═══════════════════════════════════════════════════════════════════════════════

## PHASE CW-08 — ANALYTICS-INTEGRATION

═══════════════════════════════════════════════════════════════════════════════

CHAIN-LINK-HEADER (Input/Output/Dependencies)

INPUT:
- Deployerte Content-Seiten (von CW-06)
- Autor- und Attribution-Daten (von CW-07)
- SEO-Metadaten (von CW-04)
- Content-Index mit Tags/Kategorien (von CW-01)

OUTPUT:
- Content-Performance-Metriken (Pageviews, SessionDuration, ScrollDepth)
- Most-Read-Articles-Rankings
- Engagement-Metriken (Shares, Bookmarks, Comments)
- A/B-Testing-Resultate (Headlines-Varianten)
- Conversion-Tracking pro Content
- Referrer-Analysen
- Content-Decay-Alerts (fallende Performance)
- Related-Articles-Empfehlungen (ML-basiert)

DEPENDENCIES:
- **Upstream:** Alle frueheren Phasen, speziell CW-06 (deployed Content)
- **Lateral:** Google Analytics 4 / Umami / Plausible (Analytics-Provider), Conversion-Tracking-APIs
- **Downstream:** Feedback-Loop zu frueheren Phasen (Content-Updates basierend auf Performance)

─────────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL

1. **Analytics-Tracking-Setup:** Integriere Google Analytics 4 oder Self-Hosted-Alternative (Umami/Plausible):
   - Setze GA4 Measurement-ID in Environment-Variablen
   - Laden gtag.js in Next.js Head (via next/head oder _document.tsx)
   - Custom Events fuer Content-Interaktionen: 'view_article', 'scroll_depth_50', 'share_article'

2. **Content-Performance-Tracking:** Implementiere Event-Tracking im Content-Layout:
```typescript
// pages/blog/[slug].tsx
useEffect(() => {
  // Track initial page view
  gtag.event('view_article', {
    slug: slug,
    title: content.title,
    category: content.category,
    author: content.author,
  });

  // Track scroll depth
  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 50) gtag.event('scroll_depth_50', { slug });
    if (scrollPercentage >= 75) gtag.event('scroll_depth_75', { slug });
    if (scrollPercentage >= 90) gtag.event('scroll_depth_90', { slug });
  });

  // Track time on page
  setTimeout(() => gtag.event('time_on_page_30s', { slug }), 30000);
}, [slug]);
```

3. **Session-Duration-Metriken:** Nutze Google Analytics 4 native session-Tracking oder implementiere Custom:
   - Track session_start, session_end (via beforeunload)
   - Berechne session_duration = session_end_time - session_start_time
   - Aggregiere fuer Reporting

4. **Most-Read-Articles-Engine:** Erstelle taeglich aggregierte Report basierend auf GA4-Daten:
```typescript
// Nach tagesschnitt, Query GA4 API fuer Top 10 most-viewed articles
interface TopArticle {
  slug: string;
  title: string;
  views: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
}

const topArticles = await queryGA4({
  dimension: 'pagePath', // content slug
  metric: 'screenPageViews',
  orderBy: { metric: 'screenPageViews', descending: true },
  limit: 10,
  dateRange: { startDate: yesterday, endDate: today },
});

// Speichere in .analytics-cache/top-articles-today.json
```

5. **Engagement-Metriken:** Ergaenze GA4-Tracking mit Custom-Events:
```typescript
// Shares
const onShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
  gtag.event('share_article', {
    slug,
    platform,
    title: content.title,
  });
};

// Bookmarks (if local feature)
const onBookmark = () => {
  gtag.event('bookmark_article', {
    slug,
    title: content.title,
  });
};

// Comments (if Disqus/Webmentions integrated)
gtag.event('comment_posted', {
  slug,
  title: content.title,
});
```

6. **A/B-Testing-Infrastruktur:** Fuer Headlines-Varianten:
   - Definiere im Frontmatter optionale headline-variant: string (z.B. "Der ultimative Leitfaden" vs "Alles was du wissen musst")
   - Nutze Split-Test-Service (Google Optimize, Statsig, LaunchDarkly) oder simple deterministisches Hashing:
```typescript
const isVariantA = hash(slug + userId) % 2 === 0;
const headline = isVariantA ? content.title : content.seo?.titleVariant || content.title;

gtag.event('view_article', {
  slug,
  title: headline,
  ab_test_variant: isVariantA ? 'A' : 'B',
});
```

7. **Conversion-Tracking:** Falls Content mit CTAs verknuepft:
```typescript
const onCTAClick = (ctaName: string) => {
  gtag.event('conversion', {
    conversion_name: ctaName,
    conversion_source: 'article',
    article_slug: slug,
    article_category: content.category,
  });
};
```

8. **Referrer-Analyse:** Nutze GA4 natively (source/medium):
   - GA4 trackt automatic utm_source, utm_medium, utm_campaign
   - Top-Referrer-Report: Welche Seiten/Domains senden meisten Traffic zu diesem Artikel?

9. **Content-Decay-Detection:** Taeglich-Job, der Performance-Trends analysiert:
```typescript
// Query GA4 fuer Artikel
const past7Days = await queryGA4({ slug, dateRange: { days: 7 } });
const past30Days = await queryGA4({ slug, dateRange: { days: 30 } });

const decayRate = (past7Days.views / past30Days.views) * 100;

if (decayRate < 20) {
  // Content ist zu alt, Views fallen ab
  gtag.event('content_decay_alert', {
    slug,
    decayRate,
  });

  // Optional: Benachrichtige Autor, dass Artikel Update benoetigt
}
```

10. **Analytics-Cache:** Speichere GA4-Daten lokal fuer schnelle Abfragen:
```typescript
interface AnalyticsSnapshot {
  slug: string;
  reportDate: Date;
  views: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  scrollDepth50: number;
  scrollDepth75: number;
  shares: { twitter: number; linkedin: number; facebook: number };
  conversions: number;
  topReferrers: { source: string; count: number }[];
}

// Speichere in .analytics-cache/snapshots-[date].json
```

11. **Related-Articles-Empfehlungs-Engine:** Nutze Analytics zur Verbesserung von Related-Articles (initial aus CW-04):
    - Cluster Artikel basierend auf gemeinsamen Lesern (collaborative filtering)
    - Falls viele Nutzer Artikel A und B zusammen lesen -> Related-Link hinzufuegen
    - Nutze TensorFlow.js oder simple Similarity-Metriken

12. **Reporting-Dashboard:** Erstelle /admin/analytics-Dashboard (optional, Zugriff beschraenkt):
    - Top Articles This Week
    - Top Referrers
    - Content Decay Alerts
    - A/B Test Results
    - Most Engaged Authors

─────────────────────────────────────────────────────────────────────────────────

ARTIFACT-PROTOKOLL

- **.analytics-cache/snapshots-[date].json:** Taeglich GA4-Snapshots
- **.analytics-cache/top-articles.json:** Top-Articles-Ranking (aktualisiert taeglich)
- **.analytics-cache/decay-alerts.json:** Content-Decay-Flags
- **.analytics-cache/ab-test-results.json:** A/B-Test-Metriken
- **.analytics-cache/referrer-analysis.json:** Top-Referrer-Analysen
- **pages/admin/analytics.tsx:** Analytics-Dashboard (optional)

─────────────────────────────────────────────────────────────────────────────────

DIRECTOR-ZUWEISUNG

**Analytics-Integration-Engine:** Verantwortlich. Libraries: google-analytics (GA4-API), node-cron (taeglich-Jobs), statsig oder LaunchDarkly (A/B-Testing), tensorflow.js (optional, Empfehlungs-ML).

─────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-LANGZEITTASKS

- **GA4-API-Latency:** GA4-Daten sind verzoegert (24h+). Fuer Real-Time-Tracking nutze Google Analytics 4 Real-Time API (limited insights) oder Server-Side-Event-Tracking mit Umami/Plausible (nahezu-realtime).
- **Privacy-Compliance:** GA4-Tracking erfordert DSGVO-Compliance. Implementiere Consent-Management (Cookie-Banner, User-Opt-Out). Nutze anonymized-IPs, deaktiviere Personalization.
- **Event-Batching:** Sende Analytics-Events in Batches (250ms-Fenster) um Network-Requests zu reduzieren.
- **ML-Empfehlungen:** Collaborative-Filtering fuer Related-Articles ist komplex. Start mit simple Tag-basiertem Clustering, upgrade zu ML wenn Traffic hoch genug.

─────────────────────────────────────────────────────────────────────────────────

VALIDATION-GATES

| Gate-Name | Bedingung | Aktion bei Fehler | Aktion bei Erfolg |
|-----------|-----------|-------------------|-------------------|
| GA4Connected | GA4-Measurement-ID konfiguriert | ERROR, Build fail | Tracking-Init |
| ConsentValid | Nutzer hat Consent gegeben | WARN, Events nicht senden bis Consent | Tracking-aktiv |
| SnapshotValid | GA4-API-Call erfolgreich | WARN, Retry nach 1h | Cache-Update |
| TopArticlesValid | Mindestens 5 Artikel in Top-10 | INFO, Loggen | Dashboard-Render |

─────────────────────────────────────────────────────────────────────────────────

EXIT-PROTOKOLL

Nach CW-08 sind alle 8 Phasen abgeschlossen. Feedback-Loop zurueck zu frueheren Phasen:

1. **Content-Update-Trigger:** Falls Content-Decay detektiert, benachrichtige Autor fuer Update (Trigger zu CW-01/CW-02)
2. **SEO-Optimierungs-Feedback:** Falls Artikel niedrige CTR in SERPs, optimiere Title/Description (Trigger zu CW-04)
3. **A/B-Test-Winners:** Sieger-Headline in Frontmatter festhalten, verlieren-Variante verwerfen
4. **Related-Articles-Verbesserung:** Nutze Real-User-Navigation-Patterns fuer Related-Articles-ML-Update

**Infinite-Loop-Closure:** Der gesamte Pipeline durchlaeuft dann iterativ von neuem (taeglich oder woechentlich), und verbessert sich selbst kontinuierlich durch Daten-Feedback.

═══════════════════════════════════════════════════════════════════════════════

## CROSS-PIPELINE-ABHAENGIGKEITEN

Folgende externe Pipelines sind mit der Content-Workflow-Pipeline verflochten:

DATA-LAYER-PIPELINE:
- Content-Modellierung (CW-01) speichert Indizes in .content-cache/ (lokale Dateien oder optionale DB)
- Autor-Daten (CW-07) koennen in Datenbank-Backend synchronisiert werden
- Analytics-Daten (CW-08) sollten in Analytics-DB (Google Analytics, Umami, oder custom) persistiert werden

LLMO-DOMINANCE-PIPELINE (Optional):
- Content koennte durch LLM-basierte Content-Generierung erweitert werden (z.B. Auto-generierte Excerpts, Zusammenfassungen)
- LLM wird nach Phase CW-01 eingegeben fuer optionale Enhancements (nicht blockierend)
- Nach Phase CW-05 koennte LLM Readability verbesserungswerte vorschlagen

DESIGN-SYSTEM-PIPELINE:
- React-Komponenten (MDX-Imports) muessen aus Design-System stammen
- Image-Komponente aus Design-System wird von CW-03 verwendet
- Content-Layouts (Blog-Template, Case-Study-Template) aus Design-System

DEPLOYMENT-PIPELINE:
- Nach CW-06 (Statische Generierung) wird Next.js-Output zu Vercel/AWS-Infrastruktur deployed
- Revalidate-Calls benoetigen Deployment-Token

═══════════════════════════════════════════════════════════════════════════════

## KONFIGURATIONS-SPEZIFIKATION

Folgende Environment-Variablen und Config-Dateien muessen gesetzt sein:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Für Phase CW-02 (Redaktioneller Workflow)
GITHUB_TOKEN=ghp_...
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
DRAFT_SECRET=super-secret-token-min-32-chars
ISR_SECRET=another-secret-token-min-32-chars

# Für Phase CW-03 (Media-Asset-Management)
CLOUDINARY_CLOUD_NAME=xxx (optional)
CLOUDINARY_API_KEY=xxx (optional)

# Für Phase CW-05 (Content-Validierung)
LANGUAGETOOL_API_KEY=xxx (optional, fuer Grammar-Check)

# Für Phase CW-08 (Analytics)
GOOGLE_ANALYTICS_API_KEY=xxx (JSON-Key fuer GA4-API-Access)
UMAMI_API_KEY=xxx (optional, alternative zu GA4)
```

Config-Datei (z.B. config/pipeline.config.ts):
```typescript
export const pipelineConfig = {
  content: {
    sourceDir: 'content/',
    cacheDir: '.content-cache/',
    publicImageDir: 'public/images/',
    supportedCollections: ['blog', 'case-studies', 'docs', 'changelog'],
  },
  images: {
    qualityLevels: [500, 800, 1200],
    formats: ['webp', 'avif', 'jpeg'],
  },
  seo: {
    titleMaxLength: 60,
    descriptionMaxLength: 160,
    readingTimeMinutes: 200, // words per minute
  },
  validation: {
    minWordCount: { blog: 500, 'case-study': 1000, docs: 200, changelog: 50 },
    maxLinkCheckTimeout: 5000, // ms
    externalLinkCacheTTL: 86400, // 24h
  },
  build: {
    incrementalBuild: true,
    isrRevalidateSeconds: 3600, // 1 hour default
  },
  analytics: {
    pageviewEventName: 'view_article',
    decayRateThreshold: 20, // % views decline triggers alert
  },
};
```

═══════════════════════════════════════════════════════════════════════════════

## METRIKEN UND KPIs

PRIMÄRE METRIKEN (Zu ueberwachen pro Phase):

**Phase CW-01 (Content-Modellierung):**
- Total Content Documents Indexed: N
- Average Document Size: X words
- Schema Validation Success Rate: Y%
- Cache Generation Time: Zs

**Phase CW-02 (Redaktioneller Workflow):**
- Draft Documents: N
- Scheduled-For-Publishing: N
- Average Review-Cycle-Duration: Xdays
- Approval-Rate: Y%

**Phase CW-03 (Media-Asset-Management):**
- Total Images Optimized: N
- Average Image File-Size Reduction: X%
- Placeholder Generation Success: Y%
- CDN Hit-Rate: Z%

**Phase CW-04 (SEO-Optimierung):**
- OG-Images Generated: N
- Average Reading-Time: X minutes
- Internal-Links-Created: N
- Structured-Data-Coverage: Y%

**Phase CW-05 (Content-Validierung):**
- Validation Pass-Rate: X%
- Average Readability-Score: Y (Flesch-Kincaid Grade)
- Broken-Links-Found: N
- Time-to-Validate: Zs

**Phase CW-06 (Statische Generierung):**
- Build Duration: Xs
- Number of Pages Generated: N
- ISR Revalidation Success-Rate: Y%
- Sitemap-Size: Z URLs

**Phase CW-07 (Multi-Autor-Support):**
- Total Active Authors: N
- Articles-Per-Author (avg): X
- Co-Authored-Articles: N

**Phase CW-08 (Analytics-Integration):**
- Average Pageviews-Per-Article: N
- Content with Decay-Alert: X%
- Most-Read-Article Views: Y
- Referrer-Diversity: Z unique sources

═══════════════════════════════════════════════════════════════════════════════

**DOKUMENTFINALISIERUNG**

Diese Spezifikation beschreibt die vollstaendige Content-Workflow-Pipeline des Antigravity-Systems. Alle Implementierungen MUESSEN diese Architektur befolgen. Der Code ist die Single Source of Truth (SSOT); dieses Dokument ist die architekturbeschreiende Begleitdokumentation.

Versionsverlauf:
- v1.0 (2026-04-05): Initial Deployment Specification

Autoren: Antigravity Meta-Architect (ULTRATHINK MODE)
Gueltig fuer: Next.js 14+, TypeScript 5+, Node.js 18+

═══════════════════════════════════════════════════════════════════════════════