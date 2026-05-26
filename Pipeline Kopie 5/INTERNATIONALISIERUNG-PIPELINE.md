===============================================================================
LOOP-INTEGRATION-HEADER (MASTER-LOOP-ORCHESTRATOR REFERENZ)
===============================================================================

INJEKTIONSPUNKT: Nach SEQ-20 (EXPANSION-PHASE-10), vor SEQ-21 (ZERO-BREAKAGE-PHASE-01)
BLOCK-NUMMER: 09 (INTERNATIONALISIERUNG)
EINGANGS-KONTEXTDATEIEN:
  - .pipeline-master-state.md (globaler Zustand)
  - .ai-expansion-context.md (Routen, Content, Formulare)
  - .ai-content-context.md (Content-Collections, Taxonomie)
AUSGANGS-KONTEXTDATEI: .ai-i18n-context.md
AUSGANGS-TRIGGER: SEQ-21 (ZERO-BREAKAGE-PHASE-01) darf erst starten, wenn I18N-08
  erfolgreich abgeschlossen, alle Locales fehlerfrei laden, TypeScript-Keys
  vollstaendig, hreflang-Tags generiert und DSGVO-Consent konfiguriert ist.
DEFEKT-RUECKFUEHRUNG: Bei I18N-Defekten wird der Loop ab I18N-01 neu
  gestartet, anschliessend alle abhaengigen Phasen ab SEQ-21.

===============================================================================

# ANTIGRAVITY PIPELINE-SYSTEM: INTERNATIONALISIERUNG-PIPELINE

Erschoepfende Spezifikation der mehrsprachigen Anwendungsarchitektur und Lokalisierungsautomatisierung

═══════════════════════════════════════════════════════════════════════════════

## DOKUMENT-KONTEXT

**Single Source of Truth (SSOT):** Der Code ist die SSOT. Diese Dokumentation beschreibt die architektonischen Rahmenbedingungen und Implementierungsrichtlinien fuer die ausführende KI und Entwicklerteams.

**Zielplattform:** Next.js 14+ (App Router), TypeScript, React 18+
**Scope:** Mehrsprachige SaaS-Anwendung mit 8-15 Sprachen, globale Zielgruppen
**Effektivdatum:** 2026-04-05

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-01 — ROUTING-ARCHITEKTUR

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Anforderungsmatrix aus Data-Layer-Pipeline (supported_locales.json)
OUTPUT: Funktionsfähige Routing-Middleware, Locale-Detection-Mechanismus
DEPENDENCIES: Node.js Runtime, Next.js Config Layer, Browser-APIs (Accept-Language)
PREDECESSOR: DevOps-Basis-Pipeline (Node/npm Umgebung)
SUCCESSOR: Phase I18N-02 (Uebersetzungs-Management)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Evaluiere Routing-Strategie anhand dieser Entscheidungsmatrix:

| Kriterium | Subpath (/de) | Domain (de.example.com) | Parameter (?locale=de) |
|-----------|---------------|------------------------|----------------------|
| SEO-Performance | Ausgezeichnet | Optimal | Minderwertig |
| Benutzer-Switching | Einfach | Mittelschwer | Einfach |
| Infrastructure-Komplexität | Niedrig | Hoch (DNS, CDN) | Niedrig |
| Analytik-Konsolidierung | Zusammengefasst | Fragmentiert | Zusammengefasst |
| Cookie-Sharing | Direkt | CORS-limitiert | Direkt |
| Entwickler-DX | Hoch | Mittelschwer | Mittel |

Empfohlene Wahl: Subpath-Routing (/de, /en, /fr, /es, /ja, /zh, /pt, /ar) mit optionalem Domain-Fallback fuer hochgradig regulierte Märkte (z.B. de.example.de fuer DSGVO-Compliance).

2. Implementiere Middleware-basierte Locale-Detection in `middleware.ts`:

DETECTION-KETTE (in dieser Reihenfolge):
─ Prüfe URL-Segment (expliziter Locale-Prefix: /de/dashboard)
─ Prüfe localStorage-Preference (Client-gespeicherte Auswahl)
─ Prüfe Cookie (X-Preferred-Locale)
─ Prüfe Accept-Language-Header (Browser-Präferenz)
─ Fallback: Geo-IP-Lookup via MaxMind GeoIP2 (optionale Premium-Methode)
─ Ultimate-Fallback: Konfigurierter Default-Locale (z.B. de)

3. Validiere Locale gegen Zulassungsliste (whitelist):

```
ALLOWED_LOCALES = [de, en, fr, es, ja, zh, pt, ar]
DEFAULT_LOCALE = de
SUPPORTED_REGIONS = {
  de: [de-DE, de-AT, de-CH],
  en: [en-US, en-GB, en-AU],
  ...
}
```

Lehne unbekannte Locales mit HTTP 404 ab. Keine fallthrough-URLs ohne Locale-Prefix.

4. Konfiguriere Next.js i18n Middleware:

Middleware muss folgende Aufgaben erfüllen:
─ Erkenne Locale aus URL-Prefix
─ Redirecte /dashboard zu /de/dashboard (bei Default-Locale)
─ Leite Anfragen ohne Locale an Locale-Präferenz weiter
─ Füge `x-locale`-Response-Header hinzu
─ Setze `lang`-Attribut auf HTML-Element

5. Implementiere Locale-Prefixed Routing fuer App Router:

App-Struktur:
```
app/
  [locale]/
    layout.tsx          <- Locale-Provider, Lang-Attribute
    page.tsx            <- Home
    dashboard/
      page.tsx
      layout.tsx
    admin/
      page.tsx
```

Das `[locale]`-Segment MUSS validiert und gefiltert werden (keine Wildcard-Akzeptanz).

6. Dynamische Route-Parameter mit Locale:

Für Pfade wie `/de/blog/[slug]` muss der Router:
─ Locale extrahieren und validieren
─ Slug aus Locale-spezifischem Content laden
─ Canonical-URL mit Locale-Prefix generieren
─ hreflang-Alternates für andere Locales erzeugen

7. Spezialfall: API-Routes ohne Locale-Prefix

API-Routes (`app/api/...`) erhalten Locale via:
─ Header: `x-locale` (gesetzt durch Middleware)
─ Query-Parameter: `?locale=de` (Fallback)
─ Request-Body-Feld (bei POST)

Standardisiere auf Header-basierte Locale-Auflösung.

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Deliverables (in diesem Auftrag zu erstellen):

A) middleware.ts
   ├─ localeDetection() Funktion
   ├─ Whitelist-Validierung
   ├─ Redirect-Logik mit x-locale-Header
   └─ Request-Response-Logging

B) lib/locales.ts
   ├─ ALLOWED_LOCALES Konstante
   ├─ DEFAULT_LOCALE Konstante
   ├─ LocaleType TypeScript-Definition
   ├─ isValidLocale() Prüffunktion
   └─ getLocaleRegions() Mapper

C) next.config.js
   ├─ i18n.locales Array
   ├─ i18n.defaultLocale Setting
   └─ i18n.localeDetection boolean

D) app/[locale]/layout.tsx
   ├─ Locale-Parameter-Validierung
   ├─ HTML lang-Attribut-Setting
   ├─ I18nProvider Wrapper
   └─ generateMetadata() mit hreflang

E) app/[locale]/not-found.tsx
   └─ Fallback für ungültige Locales

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

Verantwortlichkeit nach Disziplin:

FRONTEND-ARCHITECT:
─ Validates Middleware-Implementation gegen Browser-Compatibility-Matrix
─ Legt URL-Structure und Segment-Naming fest
─ Designed Locale-Switching-UX (Language-Selector-Komponente)

BACKEND-ARCHITECT:
─ Stellt sicher, dass alle API-Routes Locale-Header respektieren
─ Implementiert Geo-IP-Lookups (falls erforderlich)
─ Definiert Cookie-Policy für Locale-Persistence

DEVOPS-ENGINEER:
─ Konfiguriert CDN-Geo-Routing (für Domain-Strategy)
─ Setzt DNS-Records für Subdomains auf (falls erforderlich)
─ Validiert Header-Propagation durch Load-Balancer

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Infinite Redirect-Loop Prevention
Status: Kritisch
Implementiere Circuit-Breaker-Pattern: Falls Middleware > 3 Redirects pro Session erzeugt, logge Fehler und fallback zu DEFAULT_LOCALE ohne weitere Redirects.

TASK 2: Locale-Detection Race Condition
Status: Kritisch
Client-seitige Locale-Preference kann sich während Middleware-Verarbeitung ändern. Implementiere atomic Locale-Locking: Middleware setzt kurzzeitige Session-ID, Client respektiert diese ID für diese Request.

TASK 3: Bot-Traffic Handling
Status: Hoch
Suchmaschinen-Crawler (Google Bot, Bing, etc.) müssen konsistent Locale-Routing folgen. Implementiere User-Agent-Detection und forciere Default-Locale bei Bot-Erkennung (falls kein expliziter Locale-Prefix).

TASK 4: Performance: Middleware-Latency
Status: Hoch
Locale-Detection darf < 50ms CPU-Time dauern. Benchmark und optimiere:
─ Whitelist-Lookup (Set-basiert, nicht Array)
─ Header-Parsing ohne Regex
─ GeoIP-Caching (falls verwendet)

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Prüfkriterium | Schwellenwert | Methode |
|------|---------------|---------------|---------|
| URL-Validität | Alle generierten URLs mit Locale-Prefix | 100% | Automated Link-Checker |
| Redirect-Chain | Keine Redirect-Loops | 0 Loops | Selenium-Test mit Cycle-Detection |
| Latency | Middleware-Execution-Time | < 50ms | New Relic / Datadog APM |
| Locale-Fallback | Default-Locale erreicht (wenn gültige Locale unmöglich) | 100% Success | Negative Testing mit Random-Locales |
| Header-Propagation | x-locale Header in allen API-Requests | 100% | HAR-Log-Analyse |
| Bot-Detection | Crawler ignorieren Locale-Preference, nutzen Default | 100% Compliance | Google Search Console Crawl Stats |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-01 ist VOLLSTÄNDIG, wenn:

✓ Middleware korrekt alle 8 Locales routet
✓ Keine 404-Fehler für valide Locale-Prefixes entstehen
✓ Fallback-Kette funktioniert (Cookie -> Header -> Default)
✓ TypeScript-Compilation ohne i18n-bezogene Fehler
✓ E2E-Tests: Navigation zwischen Locales funktioniert
✓ Performance-Baseline: Middleware < 50ms
✓ Automated Validation-Suites bestehen

NÄCHSTE PHASE: I18N-02 (Uebersetzungs-Management) wird AUTO-TRIGGERED nach EXIT-Protokoll-Bestätigung.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-02 — UEBERSETZUNGS-MANAGEMENT

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Valides Routing-System (Phase I18N-01), Source-Locale Content (en)
OUTPUT: Typsichere Uebersetzungs-Keys, JSON-Uebersetzungsdateien mit ICU-Format
DEPENDENCIES: i18next Library (oder next-intl), JSON-Parser, ICU-MessageFormat-Runtime
PREDECESSOR: Phase I18N-01
SUCCESSOR: Phase I18N-03 (Typsichere Uebersetzungen)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Definiere Namespace-Struktur für JSON-Uebersetzungen:

Empfohlene Hierarchie (3 Ebenen maximal):

```
locales/
  en/
    common.json          <- Globale UI-Strings (Button, Label)
    navigation.json      <- Header, Menu, Breadcrumbs
    forms.json           <- Input-Labels, Error-Messages, Placeholders
    dashboard.json       <- Dashboard-spezifische Texte
    auth.json            <- Login, Signup, Password-Reset
    errors.json          <- HTTP-Status-Messages, Edge-Case-Errors
  de/
  fr/
  es/
  ...
```

Jede Namespace-Datei ist ein flaches JSON-Objekt mit Dot-Notation:

```json
{
  "button.submit": "Submit",
  "button.cancel": "Cancel",
  "form.email.label": "Email Address",
  "form.email.error.required": "Email is required",
  "form.email.error.invalid": "Invalid email format",
  "pagination.showing": "{from} to {to} of {total}",
  "dashboard.welcome": "Welcome, {userName}!",
  "items.count": "{count, plural, one {# item} other {# items}}"
}
```

2. Implementiere ICU-MessageFormat für Pluralisierung, Gender und Datum/Zeit:

ICU-Syntax Referenz:
─ Pluralisierung: `{count, plural, one {#} other {#}}`
─ Gender (falls kultur-relevant): `{name, select, male {He} female {She} other {They}}`
─ Choice (Ranges): `{temperature, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}`
─ Datum-Interpolation: `{date, date, long}` → "December 5, 2025"
─ Zeit-Interpolation: `{time, time, short}` → "14:30"

Beispiele:

```json
{
  "cart.items": "{count, plural, =0 {Your cart is empty} one {You have # item in your cart} other {You have # items in your cart}}",
  "user.birthday": "{name} wird {date, date, long} geboren.",
  "invoice.created": "Rechnung erstellt am {date, date, short} um {time, time, short}",
  "review.rating": "{rating} von 5 Sternen, von {reviewCount, plural, one {# Reviewer} other {# Reviewern}} bewertet"
}
```

3. Definiere Fallback-Locale-Chain (für missing Keys):

```typescript
const LOCALE_FALLBACK_CHAIN: Record<string, string[]> = {
  'de-AT': ['de', 'en'],      // Österreich → Deutsch → Englisch
  'de-CH': ['de', 'en'],      // Schweiz → Deutsch → Englisch
  'en-GB': ['en', 'de'],      // Großbritannien → Englisch → Deutsch
  'en-AU': ['en', 'de'],      // Australien → Englisch → Deutsch
  'pt-BR': ['pt', 'en'],      // Brasilien → Portugiesisch → Englisch
  'zh-Hans': ['zh', 'en'],    // Vereinfachtes Chinesisch
  'zh-Hant': ['zh', 'en'],    // Traditionelles Chinesisch
};
```

Fallback-Logik:
─ Locale-Key in aktueller Sprache vorhanden → Nutze es
─ Nicht vorhanden → Suche in Fallback-Locales der Kette
─ Immer noch nicht vorhanden → Nutze den Englischen Key
─ Englischer Key fehlt → Log Warning und return den Raw-Key (z.B. "form.email.label")

4. Konfiguriere Context-basierte Uebersetzungen (gleicher String, verschiedene Kontexte):

Beispiel: Das deutsche Wort "Bank" kann "Ufergelände" oder "Kreditinstitut" bedeuten.

```json
{
  "location.bank_riverbank": "Flussufer",
  "business.bank_financial": "Bank",
  "furniture.bench": "Bank"
}
```

Implementiere Context-Präfix in Keys: `<context>.<key>`

5. Rich-Text-Uebersetzungen mit eingebetteten React-Komponenten:

Für Strings mit Hyperlinks oder Formatierung:

```json
{
  "privacy.notice": "Durch Nutzung akzeptierst du unsere <0>Datenschutzrichtlinie</0>.",
  "welcome.html": "Willkommen, <0>{name}</0>! Dein Account ist <1>bestätigt</1>."
}
```

Rendering-Komponente (Trans-Komponente):

```typescript
<Trans
  i18nKey="privacy.notice"
  components={[<a href="/privacy" />, <strong />]}
/>
// Output: Durch Nutzung akzeptierst du unsere <a href="/privacy">Datenschutzrichtlinie</a>.
```

6. Verschachtelte Schlüssel-Hierarchie (max. 3 Ebenen zur Komplexitätskontrolle):

GÜLTIG (flach mit Dot-Notation):
```json
{
  "form.email.label": "...",
  "form.email.error.required": "...",
  "form.email.error.invalid": "..."
}
```

UNGÜLTIG (tiefe Verschachtelung):
```json
{
  "form": {
    "email": {
      "label": "...",
      "error": {
        "required": "...",
        "invalid": "..."
      }
    }
  }
}
```

Grund: Flache Struktur ermöglicht bessere TypeScript-Autocompletion und Performance.

7. Namespace-Loading-Strategie:

Lade Namespaces lazy und bedarfsgerecht:
─ common.json: Immer vorab laden (verwendet auf jeder Seite)
─ Page-spezifische (z.B. dashboard.json): Lazy-Load beim Seitenaufruf
─ Modal-Uebersetzungen: Lazy-Load bei Modal-Erscheinen

Code-Beispiel:
```typescript
const { t } = useTranslation(['common', 'navigation']);
const { t: t_dashboard } = useTranslation('dashboard');
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Deliverables:

A) locales/en/common.json
   ├─ ~150-200 Basis-Uebersetzungs-Keys
   ├─ Button-, Label-, Error-Messages
   └─ Dokumentiert mit ICU-Patterns

B) locales/en/{navigation,forms,auth,errors}.json
   └─ Namespace-spezifische Keys

C) lib/i18n/translations.ts
   ├─ LOCALE_FALLBACK_CHAIN Definition
   ├─ loadTranslations(locale, namespace) Funktion
   ├─ getTranslation(key, locale, namespace) Funktion
   └─ Fallback-Chain-Implementierung

D) lib/i18n/icu-formatter.ts
   ├─ ICU-String-Parser
   ├─ Pluralisierungs-Engine
   └─ Datum/Zeit-Interpolation

E) Vollständige Uebersetzungen für alle 8 Sprachen
   └─ Nutze DeepL API oder Translation-Memory für Konsistenz

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

TRANSLATION-MANAGER:
─ Erstellt und validiert alle JSON-Uebersetzungsdateien
─ Stellt sicher, dass alle Locales dieselben Keys enthalten (Key-Konsistenz)
─ Dokumentiert Context-Anforderungen für Uebersetzer

FRONTEND-DEVELOPER:
─ Implementiert TranslationProvider und useTranslation-Hook
─ Nutzt Uebersetzungs-Keys in JSX-Templates
─ Ensures ICU-Platzhalter richtig verwendet

CONTENT-SPECIALIST:
─ Reviewt Uebersetzungs-Qualität (Ton, Konsistenz, Kulturelle Nuance)
─ Identifiziert Strings, die mehrsprachige Varianten benötigen
─ Documented Glossar-Begriffe

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Key-Konsistenz erzwingen (Automation)
Status: Kritisch
Implementiere Pre-Commit-Hook, der sicherstellt:
─ Alle Locales haben dieselben Top-Level-Keys
─ Keine Extra-Keys in Non-English-Versionen
─ Fehlerhafte ICU-Syntax wird flagged

Script: `validate-translation-keys.js` (läuft in CI/CD)

TASK 2: Fehlende Uebersetzungen Early Warning
Status: Hoch
Dashboard-Seite zeigt:
─ Prozentuale Uebersetzungs-Coverage pro Locale (Ziel: 100%)
─ Liste der fehlenden Keys pro Sprache
─ Translation-Memory-Suggestions (aus DeepL oder Crowdin)

TASK 3: ICU-Format-Validierung
Status: Hoch
Implementiere Validator, der prüft:
─ Gültige ICU-Syntax (`{var, type, format}`)
─ Korrekte Pluralformen für Target-Locale
─ Keine unerwarteten Platzhalter in Rendering-Kontext

TASK 4: Kultur-spezifische Anpassungen
Status: Mittel
Einige Strings benötigen Lokalisierung über bloße Uebersetzung:
─ Datums-Formate (DD.MM.YYYY vs. MM/DD/YYYY)
─ Zahlen-Formate (1.000,50 vs. 1,000.50)
─ Währungs-Symbole (EUR vs. EUR)
─ Grüße und Höflichkeits-Formen

Implementiere culture-aware String-Patterns.

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| Key-Konsistenz | Alle Locales haben identische Schluessel | 100% | Schema-Validator |
| ICU-Validität | Keine ICU-Syntax-Fehler | 0 Fehler | ICU-Parser-Lint |
| Coverage | Uebersetzungs-Abdeckung pro Locale | >= 95% | Coverage-Report |
| No-Hardcoding | Keine englischen Strings im Code | 0 Instanzen | grep + AST-Analyse |
| Fallback-Chain | Fallback funktioniert für alle 8 Locales | 100% | Integration Test |
| Character-Encoding | UTF-8 Konsistenz in allen JSON-Dateien | 100% | File-Analyzer |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-02 ist VOLLSTÄNDIG, wenn:

✓ Alle 8 Locales haben komplette Uebersetzungs-JSON-Dateien
✓ Kein Key-Mismatch zwischen Locales vorhanden
✓ ICU-Format validiert sich ohne Fehler
✓ Fallback-Chain funktioniert für Missing Keys
✓ TranslationProvider in App-Root integriert
✓ useTranslation-Hook in >= 10 Test-Komponenten funktioniert
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-03 (Typsichere Uebersetzungen) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-03 — TYPSICHERE UEBERSETZUNGEN

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Vollständige JSON-Uebersetzungsdateien (Phase I18N-02)
OUTPUT: Typsichere Translation-Keys, Compile-Time-Validierung, IDE-Autocompletion
DEPENDENCIES: TypeScript 5.0+, Zod, @types/i18next, Next.js TypeScript Plugin
PREDECESSOR: Phase I18N-02
SUCCESSOR: Phase I18N-04 (Content-Lokalisierung)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Generiere TypeScript-Typen aus JSON-Uebersetzungsdateien:

Nutze ein Build-Script, das bei jedem Build ausführt:

```typescript
// scripts/generate-i18n-types.ts
import fs from 'fs';
import path from 'path';

interface TranslationSchema {
  [key: string]: string | TranslationSchema;
}

function flattenKeys(obj: TranslationSchema, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, val]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof val === 'string') {
      return [fullKey];
    } else {
      return flattenKeys(val, fullKey);
    }
  });
}

const enLocale = JSON.parse(fs.readFileSync('locales/en/common.json', 'utf-8'));
const keys = flattenKeys(enLocale);

const typedef = `export type TranslationKey = ${keys.map(k => `'${k}'`).join(' | ')};`;
fs.writeFileSync('lib/i18n/types.ts', typedef);
```

Ausgabe-Datei: `lib/i18n/types.ts`

```typescript
// Generated
export type TranslationKey = 
  | 'button.submit'
  | 'button.cancel'
  | 'form.email.label'
  | 'form.email.error.required'
  | 'form.email.error.invalid'
  | ...;
```

2. Implementiere typsicheren useTranslation-Hook:

```typescript
// lib/i18n/use-translation.ts
import { TranslationKey } from './types';

export function useTranslation(namespace: string = 'common') {
  return {
    t: (key: TranslationKey, options?: any): string => {
      // Implementierung...
    },
    i18n: { language: string; changeLanguage: (lang: string) => void },
  };
}
```

Vorteile:
─ TypeScript-Compiler warnt bei ungültigen Keys
─ VS Code IntelliSense zeigt alle validen Keys
─ Refactoring von Keys ist Global-verfügbar
─ Compilation schlägt fehl bei Missing Keys

3. Nutze Zod zur JSON-Uebersetzungs-Validierung:

```typescript
// lib/i18n/validation.ts
import { z } from 'zod';

const TranslationSchema = z.record(z.string(), z.string());

export function validateTranslationFile(file: string): { valid: boolean; errors: string[] } {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    TranslationSchema.parse(data);
    return { valid: true, errors: [] };
  } catch (error) {
    return { valid: false, errors: [error.message] };
  }
}
```

Validierung läuft in CI/CD vor Deployment:

```bash
# CI-Script
npm run validate-translations
# Stoppt Build, wenn Uebersetzungs-JSON ungültig ist
```

4. Implementiere automatische Key-Extraktion aus Source-Code:

Tool: `extract-translation-keys.ts`

```typescript
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import fs from 'fs';
import glob from 'glob';

const extractedKeys = new Set<string>();

function extractKeysFromFile(filePath: string) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const ast = parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'] });

  traverse.default(ast, {
    CallExpression(path) {
      // Erkenne: t('form.email.label')
      if (path.node.callee.name === 't' && path.node.arguments[0].type === 'StringLiteral') {
        const key = path.node.arguments[0].value;
        extractedKeys.add(key);
      }
    },
  });
}

const files = glob.sync('app/**/*.{ts,tsx}');
files.forEach(extractKeysFromFile);

console.log('Extracted keys:', Array.from(extractedKeys));
```

5. Implementiere Dead-Key-Detection:

Finde Schlüssel in JSON-Dateien, die im Code NICHT verwendet werden:

```typescript
// scripts/detect-dead-keys.ts
const translationKeys = new Set(Object.keys(enTranslations));
const usedKeys = extractKeysFromSourceCode(); // aus Schritt 4

const deadKeys = [...translationKeys].filter(k => !usedKeys.has(k));

if (deadKeys.length > 0) {
  console.warn(`Dead translation keys found: ${deadKeys.join(', ')}`);
  // Optional: Error bei > 10 Dead-Keys
}
```

6. Implementiere Missing-Key-Reports:

```typescript
// lib/i18n/missing-keys-report.ts
export function generateMissingKeysReport(): Record<string, string[]> {
  const report: Record<string, string[]> = {};

  for (const locale of SUPPORTED_LOCALES) {
    const missingKeys = compareLocaleKeys('en', locale);
    if (missingKeys.length > 0) {
      report[locale] = missingKeys;
    }
  }

  return report;
}

// Generiere bei jedem Build
// Zeige in Admin-Dashboard: "French missing 5 keys: form.submit, button.save, ..."
```

7. VS Code IntelliSense Integration:

Erstelle `.vscode/settings.json`:

```json
{
  "typescript.tsserver.plugins": [
    {
      "name": "typescript-i18n-plugin",
      "location": "node_modules/typescript-i18n-plugin"
    }
  ]
}
```

Plugin bietet:
─ Hover-Hints mit Uebersetzungs-Preview
─ Autocomplete-Suggestions für Keys
─ Link-to-Definition für Uebersetzungs-Dateien
─ Quick-Fix: "Add missing key to all locales"

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) lib/i18n/types.ts
   └─ Generierte TranslationKey Union-Type (auto-generated)

B) lib/i18n/validation.ts
   ├─ Zod-Schema für Uebersetzungs-JSON
   ├─ validateTranslationFile() Funktion
   └─ Batch-Validation für alle Locales

C) lib/i18n/use-translation.ts
   ├─ Typsicherer useTranslation Hook
   ├─ TFunction mit Signature: (key: TranslationKey) => string
   └─ IDE-Autocomplete enablement

D) scripts/generate-i18n-types.ts
   └─ Build-Time Key-Generator

E) scripts/extract-translation-keys.ts
   └─ AST-basierte Extractor aus Source-Code

F) scripts/detect-dead-keys.ts
   ├─ Identifiziert unused Keys
   └─ CI/CD Warning-System

G) lib/i18n/missing-keys-report.ts
   └─ Locale-Completeness-Analyzer

H) .vscode/settings.json (optional)
   └─ TypeScript Plugin-Konfiguration

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

TYPE-SYSTEM-ARCHITECT:
─ Designed TypeScript-Typ-Generierung
─ Definiert Zod-Validierungs-Schemas
─ Ensures Compile-Time-Safety

CI/CD-ENGINEER:
─ Integriert Build-Scripts in Pipeline
─ Setzt Validation-Gates auf (schlägt Build fehl bei ungültigen Keys)
─ Monitort Dead-Key-Reports

IDE-SPECIALIST:
─ Konfiguriert VS Code Extensions
─ Testet Autocomplete und Hover-Funktionalität
─ Dokumentiert DX-Setup für Team

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Recursive Type-Safety für verschachtelte Keys
Status: Kritisch
Aktuell: `t('form.email.label')` ist ein String-Key.
Future: Implementiere DotNotation Type (nutze type Recursion), um Typsicherheit auf alle Verschachtelungs-Ebenen auszudehnen:

```typescript
type DotNotation<T> = T extends object ? 
  { [K in keyof T]: `${K}.${DotNotation<T[K]>}` }[keyof T] :
  never;
```

TASK 2: Translation-Key Usage Analytics
Status: Hoch
Implementiere Telemetrie, die zeigt:
─ Welche Keys am häufigsten verwendet werden (Optimierungspotential)
─ Welche Keys in selteneren Locales nicht auftauchen
─ Performance-Impact: Zeit zum Laden häufig-verwendeter Keys

TASK 3: Automated Key-Migration
Status: Hoch
Wenn ein Key umbenannt wird (z.B. form.email → form.email_address):
─ Find-Replace im gesamten Codebase
─ Migriere alte Uebersetzungs-JSON-Keys
─ Generiere Migration-Script für alte Browser-Caches

TASK 4: Type-Generation Incremental Build
Status: Mittel
Derzeit: Type-Generation läuft bei jedem Build.
Optimize: Nur Keys regenerieren, wenn sich Translation-JSON geändert hat (File-Watch-Pattern).

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| Type-Validation | TranslationKey Union generiert sich fehlerfrei | 100% Success | TypeScript Compilation |
| Zod-Schema | Alle JSON-Dateien validieren gegen Zod-Schema | 0 Errors | Script-based Validation |
| Dead-Keys | Keine ungenutzten Keys identifiziert | < 5 Keys | Automated Detection |
| Missing-Keys | Pro Locale nicht > 10 fehlende Keys | <= 10 | Report-Generator |
| IDE-Autocomplete | VS Code autocomplete funktioniert | 100% | Manual Testing |
| No-Type-Errors | Typisierte t() Aufrufe akzeptiert, ungültige Keys flagged | 0 Compiler Errors | TypeScript Strict Mode |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-03 ist VOLLSTÄNDIG, wenn:

✓ TranslationKey TypeScript-Typ wird bei jedem Build aktualisiert
✓ VS Code Autocomplete funktioniert für alle Keys
✓ Zod-Validierung läuft in CI/CD, Build schlägt fehl bei ungültigen Keys
✓ Dead-Key-Detection läuft, Report verfügbar im Admin-Dashboard
✓ Missing-Key-Report erstellt (< 10 pro Locale)
✓ Typisierte t() Funktion in >= 20 Komponenten funktioniert
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-04 (Content-Lokalisierung) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-04 — CONTENT-LOKALISIERUNG

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Typsichere Uebersetzungs-System (Phase I18N-03), Locale-Metadaten
OUTPUT: Locale-formatierte Daten (Datum, Zeit, Zahlen, Währung), RTL-Assets
DEPENDENCIES: Intl API (DateTimeFormat, NumberFormat, Collator), CSS Logical Properties
PREDECESSOR: Phase I18N-03
SUCCESSOR: Phase I18N-05 (SEO für I18N)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Implementiere Datum/Uhrzeit-Formatierung mit Intl.DateTimeFormat:

```typescript
// lib/i18n/formatters/date.ts
export function formatDate(date: Date, locale: string, format: 'short' | 'long' = 'short'): string {
  const options: Intl.DateTimeFormatOptions = {
    short: { month: '2-digit', day: '2-digit', year: 'numeric' },
    long: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  }[format];

  return new Intl.DateTimeFormat(locale, options).format(date);
}

// Verwendung:
formatDate(new Date('2025-12-25'), 'de-DE', 'long');
// Output: "Donnerstag, 25. Dezember 2025"

formatDate(new Date('2025-12-25'), 'en-US', 'long');
// Output: "Thursday, December 25, 2025"

formatDate(new Date('2025-12-25'), 'fr-FR', 'long');
// Output: "jeudi 25 décembre 2025"
```

Locale-spezifische Patterns:
─ de-DE: DD.MM.YYYY (25.12.2025)
─ en-US: MM/DD/YYYY (12/25/2025)
─ en-GB: DD/MM/YYYY (25/12/2025)
─ fr-FR: DD/MM/YYYY (25/12/2025)
─ ja-JP: YYYY年MM月DD日 (2025年12月25日)
─ zh-CN: YYYY年MM月DD日 (2025年12月25日)

2. Implementiere Zahlen und Währungs-Formatierung:

```typescript
// lib/i18n/formatters/number.ts
export function formatNumber(value: number, locale: string, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatCurrency(value: number, locale: string, currency: string = 'EUR'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

// Verwendung:
formatNumber(1234.56, 'de-DE');      // "1.234,56"
formatNumber(1234.56, 'en-US');      // "1,234.56"
formatNumber(1234.56, 'fr-FR');      // "1 234,56"

formatCurrency(99.99, 'de-DE', 'EUR');  // "99,99 EUR"
formatCurrency(99.99, 'en-US', 'USD');  // "$99.99"
formatCurrency(99.99, 'ja-JP', 'JPY');  // "¥100"
```

3. Implementiere RTL (Right-to-Left) Support-Architektur:

RTL-Locales: ar (Arabisch), he (Hebräisch)

```typescript
// lib/i18n/rtl.ts
export const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'];

export function isRTL(locale: string): boolean {
  return RTL_LOCALES.includes(locale.split('-')[0]);
}

export function getDirection(locale: string): 'ltr' | 'rtl' {
  return isRTL(locale) ? 'rtl' : 'ltr';
}
```

HTML-Layout (nutze CSS Logical Properties):

```tsx
// app/[locale]/layout.tsx
export default function Layout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const dir = getDirection(params.locale);
  
  return (
    <html lang={params.locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
```

CSS Logical Properties (funktionieren für LTR und RTL):

```css
/* Statt: margin-left */
margin-inline-start: 1rem;  /* Links bei LTR, Rechts bei RTL */

/* Statt: padding-right */
padding-inline-end: 1rem;   /* Rechts bei LTR, Links bei RTL */

/* Statt: border-left */
border-inline-start: 1px solid gray;

/* Text-Alignment */
text-align: start;          /* Links bei LTR, Rechts bei RTL */
```

4. Implementiere Locale-spezifische Assets:

Einige Bilder/Icons benötigen kulturelle Anpassung:

```typescript
// lib/i18n/assets.ts
export function getLocalizedAssetPath(basename: string, locale: string): string {
  const [name, ext] = basename.split('.');
  const localeCode = locale.split('-')[0]; // 'de-DE' → 'de'
  
  // Versuche: /public/images/hero_de.jpg
  // Fallback: /public/images/hero.jpg
  const localizedPath = `/images/${name}_${localeCode}.${ext}`;
  const defaultPath = `/images/${basename}`;
  
  return fs.existsSync(`public${localizedPath}`) ? localizedPath : defaultPath;
}

// Verwendung:
<Image src={getLocalizedAssetPath('hero.jpg', locale)} />
```

5. Implementiere Adress-Format-Varianten pro Land:

```typescript
// lib/i18n/formatters/address.ts
type AddressFormat = {
  country: string;
  label: string;
  fields: string[];
};

export const ADDRESS_FORMATS: Record<string, AddressFormat> = {
  'DE': {
    country: 'Deutschl

and',
    label: 'Straße, Hausnummer',
    fields: ['street', 'number', 'postalCode', 'city'],
  },
  'US': {
    country: 'United States',
    label: 'Street Address',
    fields: ['street', 'city', 'state', 'postalCode'],
  },
  'GB': {
    country: 'United Kingdom',
    label: 'Address Line 1',
    fields: ['street', 'city', 'postalCode'],
  },
  'JP': {
    country: 'Japan',
    label: 'Prefecture',
    fields: ['prefecture', 'city', 'district', 'postalCode'],
  },
};
```

6. Implementiere Telefonnummern-Formatierung (E.164 Standard):

```typescript
// lib/i18n/formatters/phone.ts
import { parsePhoneNumberFromString, formatAsYouType } from 'libphonenumber-js';

export function formatPhoneNumber(phoneNumber: string, countryCode: string, format: 'E.164' | 'INTERNATIONAL' | 'NATIONAL' = 'INTERNATIONAL'): string {
  const parsed = parsePhoneNumberFromString(phoneNumber, countryCode as any);
  if (!parsed) return phoneNumber;
  
  return parsed.format(format);
}

// Verwendung:
formatPhoneNumber('+496301234567', 'DE');  // "+49 630 1234567"
formatPhoneNumber('+14155552671', 'US');   // "+1 415-555-2671"
```

7. Implementiere Collation / Sortier-Reihenfolgen (Intl.Collator):

```typescript
// lib/i18n/formatters/sort.ts
export function sortLocaleStrings(strings: string[], locale: string, options?: Intl.CollatorOptions): string[] {
  return strings.sort((a, b) => {
    return new Intl.Collator(locale, options).compare(a, b);
  });
}

// Beispiel: Deutscher Umlaut-Sort
sortLocaleStrings(['Affe', 'Äpfel', 'Antenne'], 'de-DE');
// Output: ['Affe', 'Äpfel', 'Antenne'] (korrekte deutsche Sortierung)

// Englisches Sortieren: A < Ä < B
sortLocaleStrings(['Affe', 'Äpfel', 'Antenne'], 'en-US');
// Output: ['Affe', 'Antenne', 'Äpfel']
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) lib/i18n/formatters/date.ts
   ├─ formatDate() mit Intl.DateTimeFormat
   └─ Locale-spezifische Pattern-Konfiguration

B) lib/i18n/formatters/number.ts
   ├─ formatNumber() für Zahlen
   ├─ formatCurrency() für Währungen
   └─ Locale-spezifische Dezimal-Separatoren

C) lib/i18n/rtl.ts
   ├─ isRTL() Checker
   ├─ getDirection() Helper
   └─ RTL_LOCALES Konstante

D) lib/i18n/assets.ts
   └─ getLocalizedAssetPath() mit Fallback-Logik

E) lib/i18n/formatters/address.ts
   └─ ADDRESS_FORMATS per Land mit Feld-Reihenfolge

F) lib/i18n/formatters/phone.ts
   └─ formatPhoneNumber() mit libphonenumber-js

G) lib/i18n/formatters/sort.ts
   └─ sortLocaleStrings() mit Intl.Collator

H) Global CSS mit Logical Properties
   ├─ margin-inline-start/end
   ├─ padding-inline-start/end
   └─ text-align: start / end

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

INTERNATIONALIZATION-SPECIALIST:
─ Defined Locale-spezifische Formate (Datum, Zahlen, Währung)
─ Konfiguriert RTL-Support
─ Dokumentiert kulturelle Nuancen

FRONTEND-DEVELOPER:
─ Implementiert Formatter-Funktionen
─ Nutzt Intl-APIs korrekt
─ Testet RTL-Rendering

DESIGNER:
─ Created Locale-spezifische Assets (Bilder für verschiedene Kulturen)
─ Validated RTL Layout (keine erzwungenen LTR-Annahmen)

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Intl-Polyfill für Legacy-Browser
Status: Mittel
Intl API ist nicht in allen alten Browsern verfügbar. Implementiere Fallback:
─ Nutze intl Polyfill (npm package)
─ Oder fallback zu einfachen Format-Vorlagen
─ Teste auf IE11 Kompatibilität (falls erforderlich)

TASK 2: RTL-Fluid-Design Testing
Status: Hoch
RTL-Layout ist komplex. Implementiere automatisierte Tests:
─ Screenshot-Vergleiche für ar/he Locales
─ Pixel-basierte Layout-Validierung
─ Keine Text-Overflow bei RTL

TASK 3: Performance: Intl-Caching
Status: Hoch
Intl.DateTimeFormat-Instanzen sind teuer. Implementiere Caching:

```typescript
const formatters = new Map<string, Intl.DateTimeFormat>();

function getCachedFormatter(locale: string, options: Intl.DateTimeFormatOptions) {
  const key = JSON.stringify([locale, options]);
  if (!formatters.has(key)) {
    formatters.set(key, new Intl.DateTimeFormat(locale, options));
  }
  return formatters.get(key)!;
}
```

TASK 4: Locale-Specific Number Separators
Status: Mittel
Dezimal- und Tausender-Separatoren variieren stark:
─ 1,5 (Deutsch) vs. 1.5 (Englisch)
─ 1.000 (Deutsch) vs. 1,000 (Englisch)
Stelle sicher, dass Parsing Input-Validierung berücksichtigt:

```typescript
export function parseLocalizedNumber(input: string, locale: string): number {
  // Reverse locale-specific formatting before parsing
  const formatter = new Intl.NumberFormat(locale);
  const parts = formatter.formatToParts(1234.56); // Analysiere Separatoren
  // Dann parse Input
}
```

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| Date-Formatting | Alle Locales formatieren Datum korrekt | 100% | E2E-Test mit Test-Daten |
| Currency-Accuracy | Währungs-Zeichen und Separatoren korrekt | 100% Accuracy | Manual Validation per Locale |
| RTL-Layout | Keine Layout-Breaks bei RTL-Locales | 0 Errors | Visual Regression Tests |
| RTL-Text-Dir | dir="rtl" und CSS Logical Properties aktiv | 100% | DOM Inspector |
| Phone-Format | Telefonnummern validieren gegen E.164 | 100% Valid | Input Validation Tests |
| Asset-Fallback | Fehlende Locale-Assets fallen zu default zurück | 100% Fallback | File-System Checks |
| Intl-Polyfill | Legacy-Browsers nutzen Fallbacks | 100% | IE11 Testing |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-04 ist VOLLSTÄNDIG, wenn:

✓ Datum/Zeit formatiert sich korrekt für alle 8 Locales
✓ Zahlen und Währungen formatieren mit lokalen Separatoren
✓ RTL-Locales (ar, he) rendern flüssig ohne Layout-Breaks
✓ HTML dir="rtl" und CSS Logical Properties aktiv
✓ Telefonnummern validieren und formatieren richtig
✓ Locale-spezifische Assets existieren oder fallen zu default zurück
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-05 (SEO für I18N) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════


## PHASE I18N-05 — SEO FUER I18N

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Geroutete Seiten mit Locale-Prefix (Phase I18N-01), Metadata (Phase I18N-04)
OUTPUT: hreflang-Tags, Locale-Sitemaps, Canonical-URLs, Structured Data
DEPENDENCIES: Next.js generateMetadata(), next/head, JSON-LD Schema
PREDECESSOR: Phase I18N-04
SUCCESSOR: Phase I18N-06 (Workflow-Integration)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Generiere hreflang-Tags für alle Locale-Varianten:

```typescript
// lib/seo/hreflang.ts
import { SUPPORTED_LOCALES } from './locales';

interface HrefLangConfig {
  path: string;
  locale: string;
  baseUrl: string;
}

export function generateHrefLangTags(config: HrefLangConfig): string[] {
  return [
    ...SUPPORTED_LOCALES.map(locale => 
      `<link rel="alternate" hreflang="${locale}" href="${config.baseUrl}/${locale}${config.path}" />`
    ),
    // x-default für nicht spezifizierte Locales
    `<link rel="alternate" hreflang="x-default" href="${config.baseUrl}${config.path}" />`
  ];
}

// Verwendung in Next.js Metadata:
export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const baseUrl = 'https://example.com';
  const path = `/blog/${params.slug}`;
  
  return {
    alternates: {
      languages: {
        'de': `${baseUrl}/de${path}`,
        'en': `${baseUrl}/en${path}`,
        'fr': `${baseUrl}/fr${path}`,
        'x-default': `${baseUrl}${path}`,
      }
    },
  };
}
```

2. Erstelle Locale-spezifische Sitemaps:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/locales';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  const pages = ['/dashboard', '/pricing', '/blog'];
  
  const entries: MetadataRoute.Sitemap = [];
  
  for (const locale of SUPPORTED_LOCALES) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '/dashboard' ? 0.8 : 0.6,
      });
    }
  }
  
  return entries;
}

// Separate Sitemaps pro Locale:
// /sitemap-de.xml
// /sitemap-en.xml
// /sitemap-fr.xml
// /sitemap-index.xml (listet alle auf)
```

Sitemaps-Index-Datei:

```typescript
// app/sitemap-index.xml/route.ts
import { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/locales';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://example.com';
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${SUPPORTED_LOCALES.map(locale => 
    `<sitemap><loc>${baseUrl}/sitemap-${locale}.xml</loc></sitemap>`
  ).join('\n')}
</sitemapindex>`;
  
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
```

3. Konfiguriere Canonical-URLs pro Sprache:

```typescript
// lib/seo/canonical.ts
export function getCanonicalUrl(path: string, locale: string, baseUrl: string): string {
  return `${baseUrl}/${locale}${path}`;
}

// In generateMetadata():
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const baseUrl = 'https://example.com';
  const canonicalUrl = getCanonicalUrl('/dashboard', params.locale, baseUrl);
  
  return {
    other: {
      canonical: canonicalUrl,
    },
  };
}
```

Wichtig: Canonical-URL sollte die aktuelle Locale enthalten, NICHT die englische Variante.

4. Strukturierte Daten in verschiedenen Sprachen (JSON-LD):

```typescript
// lib/seo/structured-data.ts
export interface StructuredDataConfig {
  '@context': string;
  '@type': string;
  inLanguage: string;
  name: Record<string, string>;
  description: Record<string, string>;
  image?: string;
}

export function generateOrganizationSchema(locale: string): StructuredDataConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: locale,
    name: {
      'de': 'Beispiel Unternehmen',
      'en': 'Example Company',
      'fr': 'Société Exemple',
    }[locale] || 'Example Company',
    description: {
      'de': 'Führender Anbieter von Cloud-Lösungen',
      'en': 'Leading provider of cloud solutions',
      'fr': 'Fournisseur leader de solutions cloud',
    }[locale] || 'Leading provider of cloud solutions',
    image: 'https://example.com/logo.png',
  };
}

// Verwendung:
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const schema = generateOrganizationSchema(params.locale);
  
  return {
    other: {
      'application/ld+json': JSON.stringify(schema),
    },
  };
}
```

5. Open-Graph-Tags pro Locale:

```typescript
// lib/seo/og-tags.ts
export function generateOGMetadata(locale: string, page: {
  title: Record<string, string>;
  description: Record<string, string>;
  image?: string;
}) {
  return {
    title: page.title[locale],
    description: page.description[locale],
    openGraph: {
      title: page.title[locale],
      description: page.description[locale],
      locale: locale.replace('-', '_'), // de-DE → de_DE
      alternateLocale: ['en_US', 'fr_FR'], // Optionale Alternates
      image: page.image || '/default-og.jpg',
    },
  };
}
```

6. Meta-Description-Uebersetzung:

```typescript
// Standard: Kurze Beschreibung pro Locale
const PAGE_DESCRIPTIONS: Record<string, Record<string, string>> = {
  '/dashboard': {
    'de': 'Verwalte dein Projekt-Dashboard mit erweiterten Analytics und Echtzeit-Metriken.',
    'en': 'Manage your project dashboard with advanced analytics and real-time metrics.',
    'fr': 'Gérez votre tableau de bord avec des analyses avancées et des métriques en temps réel.',
  },
  '/pricing': {
    'de': 'Transparente Preise für alle Unternehmen. Keine versteckten Gebühren.',
    'en': 'Transparent pricing for all businesses. No hidden fees.',
    'fr': 'Tarification transparente pour toutes les entreprises. Aucun frais caché.',
  },
};

// Generatemetadata() nutzt diese:
export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {
    description: PAGE_DESCRIPTIONS['/dashboard'][params.locale] || 'Default',
  };
}
```

7. Locale-spezifische robots.txt-Regeln:

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/locales';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://example.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          ...SUPPORTED_LOCALES.map(locale => `/${locale}/`),
          '/api/public/', // Public APIs
        ],
        disallow: [
          '/api/private/',
          '/admin/',
          '/internal/',
          // Disallow duplicate content URLs
          '/*?sort=', // Verhindere Indexierung von sortierten Versionen
        ],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: SUPPORTED_LOCALES.map(locale => `/${locale}/`),
      },
    ],
    sitemap: `${baseUrl}/sitemap-index.xml`,
  };
}
```

8. Implementiere Locale-basierte Redirects für Bot-Freundlichkeit:

```typescript
// middleware.ts (erweitert)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/locales';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Erkenne Google Bot und andere Crawler
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|slurp|bingbot|googlebot/i.test(userAgent);
  
  // For bots: serve DEFAULT_LOCALE version
  if (isBot && !SUPPORTED_LOCALES.some(locale => pathname.startsWith(`/${locale}`))) {
    return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
  }
  
  // Locale detection logic...
}
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) lib/seo/hreflang.ts
   ├─ generateHrefLangTags() für alle Locales
   └─ x-default Handling

B) app/sitemap.ts
   ├─ Haupt-Sitemap mit allen Locales
   └─ Separate Sitemaps pro Locale

C) app/sitemap-index.xml/route.ts
   └─ XML Sitemap-Index

D) lib/seo/canonical.ts
   └─ getCanonicalUrl() mit Locale-Prefix

E) lib/seo/structured-data.ts
   ├─ JSON-LD Schema Generator
   └─ inLanguage-Metadaten

F) lib/seo/og-tags.ts
   ├─ Open-Graph-Metadaten pro Locale
   └─ locale Conversion (de-DE → de_DE)

G) Translations für Meta-Descriptions
   └─ PAGE_DESCRIPTIONS Object

H) app/robots.ts
   ├─ User-Agent-Specific Rules
   └─ Sitemap-Index Referenz

I) middleware.ts (erweitert)
   └─ Bot-Detection für Locale-Handling

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

SEO-SPECIALIST:
─ Verified hreflang-Implementierung
─ Ensures Canonical-URLs korrekt
─ Konfiguriert robots.txt für Crawler-Behavior

NEXT.JS-ARCHITECT:
─ Implementiert generateMetadata() Funktionen
─ Nutzt alternates.languages korrekt
─ Strukturiert Sitemaps und JSON-LD

SEARCH-ENGINEER:
─ Tested Sitemap-Indexierung in Search Console
─ Validated hreflang-Tags mit Google-Tools
─ Monitort Crawl-Stats pro Locale

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Dynamic hreflang Rendering
Status: Hoch
Aktuell: hreflang wird statisch generiert.
Future: Implementiere dynamische hreflang-Generierung für User-Generated Content (Blogs, etc.):

```typescript
export async function generateMetadata({ params }) {
  const article = await db.articles.findOne({ slug: params.slug, locale: params.locale });
  
  // Prüfe: Existieren Artikel in anderen Locales mit gleichem Slug?
  const alternates = await Promise.all(
    SUPPORTED_LOCALES.map(async locale => ({
      locale,
      exists: await db.articles.findOne({ slug: params.slug, locale })
    }))
  );
  
  return {
    alternates: {
      languages: alternates.reduce((acc, { locale, exists }) => {
        if (exists) acc[locale] = `${baseUrl}/${locale}/blog/${params.slug}`;
        return acc;
      }, {})
    }
  };
}
```

TASK 2: Sitemap-Generation Performance
Status: Mittel
Für Millionen von Seiten wird Sitemap-Generation langsam. Implementiere:
─ Incremental Static Regeneration (ISR)
─ Sitemap-Sharding (sitemap-1.xml, sitemap-2.xml)
─ Compression (gzip)

TASK 3: Search-Console Monitoring Automation
Status: Mittel
Nutze Google Search Console API um:
─ hreflang-Fehler zu monitoren
─ Crawl-Stats pro Locale zu verfolgen
─ Alerts zu setzen, wenn Coverage < 95%

TASK 4: Locale-Detection in robots.txt
Status: Niedrig
Manche Crawler respektieren Accept-Language. Implementiere:
```
User-agent: *
Allow: /en/ /de/ /fr/
Disallow: /admin/
```

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| hreflang-Validity | Alle hreflang-URLs existieren und sind erreichbar | 100% Valid | Link-Checker |
| Sitemap-Index | Sitemap-Index listet alle Locales auf | 100% Completeness | XML Parser |
| Canonical-URLs | Canonical URL enthält Locale-Prefix | 100% Compliance | HTML Inspector |
| JSON-LD-Language | JSON-LD enthält inLanguage Feld | 100% | Schema.org Validator |
| OG-Locale | og:locale Tag korrekt formatiert | 100% (de_DE) | Meta-Tag Checker |
| robots.txt Syntax | robots.txt Valid und erreichbar | 0 Parse-Errors | robots-parser |
| Bot-Detection | Crawler redirected zu DEFAULT_LOCALE | 100% | User-Agent Tests |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-05 ist VOLLSTÄNDIG, wenn:

✓ hreflang-Tags vorhanden für alle Seiten und alle Locales
✓ Sitemaps-Index und Locale-Sitemaps generieren sich
✓ Canonical-URLs enthalten Locale-Prefix
✓ JSON-LD und Open-Graph-Tags korrekt formatiert
✓ robots.txt gültig und Locale-aware
✓ Google Search Console zeigt keine hreflang-Fehler
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-06 (Workflow-Integration) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-06 — WORKFLOW-INTEGRATION

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Produktionsreife Uebersetzungs-Infrastruktur (Phasen I18N-01 bis I18N-05)
OUTPUT: Automatisierte Translation-Workflows, TMS-Integrationen, Review-Prozesse
DEPENDENCIES: Crowdin / Phrase / Lokalise API, Git Hooks, CI/CD Pipeline
PREDECESSOR: Phase I18N-05
SUCCESSOR: Phase I18N-07 (Performance)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Definiere Translation-Workflow-Phasen:

WORKFLOW-SEQUENZ:
─ SOURCE CREATION (EN): Developer schreibt englischen Text in Code/JSON
─ SOURCE LOCK: Source-Locale wird exportiert zu TMS (Crowdin)
─ TRANSLATION: Professional Translator übersetzt zu allen Locales (2-7 Tage)
─ REVIEW: QA-Team prüft Uebersetzungs-Qualität
─ APPROVAL: Project Manager genehmigt finale Versionen
─ EXPORT: Uebersetzungs-Dateien werden aus TMS exportiert
─ INTEGRATION: JSON-Uebersetzungen werden ins Repo committeted
─ DEPLOY: Neue Uebersetzungen gehen live via CD/CD

2. Integriere mit Crowdin (oder Alternative):

```bash
# Installation
npm install @crowdin/crowdin-api-client

# Konfiguration: crowdin.yml
apiToken: $CROWDIN_API_TOKEN
projectId: 123456
basePath: .

files:
  - source: locales/en/**/*.json
    translation: 'locales/%two_letters_code%/**/%original_file_name%'
    languages_mapping:
      two_letters_code:
        de: de
        en: en
        fr: fr
        es: es
        ja: ja
        zh: zh
        pt: pt
        ar: ar
```

3. Implementiere Source-Locale Export zu TMS:

```bash
#!/bin/bash
# scripts/export-source-locale.sh

# 1. Prüfe ob neue Keys existieren
ADDED_KEYS=$(git diff --name-only main | grep "locales/en/")

if [ -z "$ADDED_KEYS" ]; then
  echo "No source changes detected"
  exit 0
fi

# 2. Export zu Crowdin
npx crowdin upload sources --auto-approve-imported

# 3. Notify Translators
echo "New source strings exported to Crowdin"
```

4. Implementiere Automated Change Detection:

```typescript
// scripts/detect-source-changes.ts
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

function getChangedKeys(): string[] {
  const diff = execSync('git diff main locales/en/').toString();
  const changedKeys = new Set<string>();
  
  diff.split('\n').forEach(line => {
    // Match: -  "form.email.label": "..."
    //        +  "form.email.label": "Neue Version..."
    const match = line.match(/[+-]\s+"([^"]+)":\s+"([^"]+)"/);
    if (match) changedKeys.add(match[1]);
  });
  
  return Array.from(changedKeys);
}

// Wenn > 20 Keys geändert: Alert zur manuellen Review
const changes = getChangedKeys();
if (changes.length > 20) {
  console.warn(`WARNING: ${changes.length} source keys changed. Manual review recommended.`);
}
```

5. Pull-Request-basierter Uebersetzungs-Review:

```bash
#!/bin/bash
# scripts/create-translation-pr.sh

# 1. Lade Uebersetzungen aus Crowdin
npx crowdin download

# 2. Commit Uebersetzungs-Aenderungen
git add locales/*/
git commit -m "chore: update translations from Crowdin"

# 3. Erstelle Pull Request
gh pr create \
  --title "Translation Updates: [locale changes]" \
  --body "Automated translation updates from Crowdin. Please review for quality." \
  --reviewer translation-team \
  --label "translations"
```

6. Machine-Translation Pre-Fill mit DeepL:

```typescript
// scripts/pretranslate-with-deepl.ts
import * as deepl from 'deepl-node';

const translator = new deepl.Translator(process.env.DEEPL_API_KEY!);

async function pretranslateLocales() {
  const sourceFile = JSON.parse(fs.readFileSync('locales/en/common.json', 'utf-8'));
  const TARGET_LANGUAGES = ['de', 'fr', 'es', 'ja', 'pt'];
  
  for (const lang of TARGET_LANGUAGES) {
    const translated: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(sourceFile)) {
      if (typeof value === 'string') {
        const result = await translator.translateText(value as string, 'EN', lang.toUpperCase());
        translated[key] = result.text;
      }
    }
    
    fs.writeFileSync(`locales/${lang}/common.json`, JSON.stringify(translated, null, 2));
  }
}

// Wichtig: Machine Translation ist nur Initial-Fill. Human Review erforderlich.
```

7. Translation-Memory-Nutzung:

```typescript
// lib/i18n/translation-memory.ts
interface TranslationMemoryEntry {
  source: string;
  target: Record<string, string>;
  context?: string;
  frequency: number; // Wie oft wurde dieser Term übersetzt?
}

export class TranslationMemory {
  private entries: Map<string, TranslationMemoryEntry> = new Map();
  
  public lookupTranslation(term: string, locale: string): string | null {
    const entry = this.entries.get(term);
    return entry?.target[locale] || null;
  }
  
  public recordTranslation(source: string, translations: Record<string, string>, context?: string) {
    const existing = this.entries.get(source);
    this.entries.set(source, {
      source,
      target: translations,
      context,
      frequency: (existing?.frequency || 0) + 1,
    });
  }
}

// Praktische Anwendung: Bei neuem Content, suche TM nach ähnlichen Begriffen
// Wenn "user account" bereits übersetzt als "Benutzerkonto", nutze es auch für neue Strings
```

8. Glossar-Verwaltung:

```typescript
// lib/i18n/glossary.ts
export interface GlossaryEntry {
  term: string;
  definition: string;
  translations: Record<string, string>;
  domain: string; // z.B. "financial", "legal", "medical"
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: 'API',
    definition: 'Application Programming Interface',
    translations: {
      'de': 'Programmierschnittstelle',
      'fr': 'Interface de programmation',
      'es': 'Interfaz de programación',
    },
    domain: 'technical',
  },
  {
    term: 'Dashboard',
    definition: 'Control center for user metrics',
    translations: {
      'de': 'Armaturenbrett',
      'fr': 'Tableau de bord',
      'es': 'Panel de control',
    },
    domain: 'ui',
  },
];

// Validator: Stelle sicher, dass Glossar-Begriffe konsistent übersetzt werden
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) crowdin.yml
   └─ Crowdin Project Konfiguration

B) scripts/export-source-locale.sh
   └─ Automated Source-to-TMS Export

C) scripts/detect-source-changes.ts
   ├─ Change Detection und Alert-System
   └─ Optionale Manual-Review-Gate

D) scripts/create-translation-pr.sh
   └─ Automated PR Creation für Translation-Reviews

E) scripts/pretranslate-with-deepl.ts
   ├─ Machine Translation Pre-Fill
   └─ DeepL Integration

F) lib/i18n/translation-memory.ts
   ├─ TM Lookup-Funktionen
   └─ Consistency-Enforcement

G) lib/i18n/glossary.ts
   ├─ GLOSSARY Array mit Domain-Tags
   └─ Glossary Validator

H) CI/CD Pipeline .github/workflows/translations.yml
   ├─ Scheduled TMS Sync (daily)
   ├─ Source Export on PR
   ├─ Auto-Download und PR-Creation
   └─ Quality Checks

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

TRANSLATION-MANAGER:
─ Verwaltet TMS-Account (Crowdin)
─ Setzt Translation-Team auf
─ Überw

acht Quality und Timelines
─ Managed Glossar

CI/CD-ENGINEER:
─ Konfiguriert TMS-API Integrationen
─ Automated Sync in Pipeline
─ Error Handling für API-Failures

DEVELOPER:
─ Implementiert Source-Export und Download-Scripts
─ Integration von TM und Glossar in Code
─ Maintenance von crowdin.yml

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Fuzzy Matching für Consistency
Status: Hoch
Bei neuen Strings: Nutze Fuzzy Matching um ähnliche Terme in TM zu finden:

```typescript
import Fuse from 'fuse.js';

function findSimilarTranslations(term: string, minScore: number = 0.7) {
  const fuse = new Fuse(Array.from(tm.entries.keys()));
  return fuse.search(term, { threshold: 1 - minScore });
}
```

TASK 2: Translation-Coverage Dashboard
Status: Mittel
Implementiere Admin-Dashboard, das zeigt:
─ % Coverage pro Locale
─ In-Progress Translation Count
─ Translator-Leaderboard (Performance)
─ Glossar-Terms per Domain

TASK 3: Conflicting Translations Detection
Status: Mittel
Prüfe ob Glossar-Begriffe konsistent übersetzt werden:

```typescript
const glossaryTermUsage = new Map<string, Set<string>>();
// Wenn ein Term unterschiedlich übersetzt wird → Warning
```

TASK 4: Locale-Specific Linting
Status: Niedrig
Für bestimmte Locales: Implementiere Culture-Spezifische Checks:
─ Deutsch: Keine Anglizismen ohne Grund
─ Chinesisch: Vereinfacht vs. Traditionell konsistent
─ Arabisch: RTL-Text-Direction validated

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| TMS-Sync | TMS aktualisiert sich mit neuen Source-Strings | 24h max Lag | Scheduled Sync Monitor |
| Translation-Approval | Keine unapproved Strings in Production | 0 Unapproved | TMS Status Check |
| Glossary-Consistency | Alle Glossar-Begriffe uniform übersetzt | 100% Consistent | Glossary Validator |
| Machine-Translation-Quality | DeepL Pre-Fills akzeptiert nur mit Human Review | 100% Reviewed | Approval Workflow |
| Source-Lock | Source-Locale gelockt während Translations aktiv | Enforced | Git Branch Protection |
| PR-Review | Minimum 2 Approvals für Translation-PRs | 2 Required | GitHub CODEOWNERS |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-06 ist VOLLSTÄNDIG, wenn:

✓ TMS Account erstellt und configured (Crowdin / Phrase)
✓ Source-Locale automatisch zu TMS exported (daily oder on-change)
✓ Translation-Team onboarded und produkt
✓ Machine-Translation Pre-Fill funktioniert
✓ PR-basierter Review-Workflow aktiv
✓ Translation-Memory und Glossar funktionieren
✓ CI/CD Pipeline automatisiert TMS-Sync
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-07 (Performance) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-07 — PERFORMANCE

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Vollständige Translation-Infrastruktur mit TMS-Integration (Phase I18N-06)
OUTPUT: Optimierte Bundle-Sizes, Lazy-Loaded Locales, Server-Side Resolution
DEPENDENCIES: Next.js Build Optimization, Tree-Shaking, Code-Splitting
PREDECESSOR: Phase I18N-06
SUCCESSOR: Phase I18N-08 (DSGVO-Compliance)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Implementiere Lazy-Loading von Locale-Bundles:

```typescript
// lib/i18n/dynamic-loader.ts
export async function loadLocaleTranslations(locale: string): Promise<Record<string, string>> {
  // Dynamischer Import: Nur die aktive Sprache wird geladen
  const translations = await import(`@/locales/${locale}/common.json`);
  return translations.default;
}

// In React Component:
const translations = await loadLocaleTranslations(locale);
// → Browser lädt nur de.json, nicht en.json, fr.json, etc.
```

2. Tree-Shaking für ungenutzten Locales im Production-Build:

```typescript
// next.config.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /locales\/.*\.json$/,
      // Nur aktive Locale wird eingebunden
      use: [
        {
          loader: 'i18n-loader',
          options: {
            allowLocales: process.env.ACTIVE_LOCALES?.split(',') || ['de', 'en'],
          },
        },
      ],
    });
    return config;
  },
};
```

3. Server-Side Locale-Resolution (kein Client-Side Flicker):

```typescript
// app/[locale]/layout.tsx
import { headers } from 'next/headers';
import { SUPPORTED_LOCALES } from '@/lib/locales';

export default async function Layout({ children, params }: LayoutProps) {
  // Server bestimmt Locale BEVOR HTML an Client gesendet wird
  const locale = params.locale;
  
  // Validierung Server-Side
  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }
  
  // Uebersetzungen sind bereits SERVER-gerenderit
  // → Kein Flicker, kein Race Condition
  
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
```

Vorteile:
─ Keine Client-Side Locale-Detection
─ Keine Language-Switching-Flicker
─ Uebersetzungen sind im Initial-HTML enthalten

4. Bundle-Size-Analyse pro Locale:

```bash
#!/bin/bash
# scripts/analyze-bundle-size.sh

for locale in de en fr es ja zh pt ar; do
  echo "Analyzing locale: $locale"
  npx next build --locale=$locale
  du -sh .next/static/chunks/*$locale* || true
done

# Output:
# Locale: de → 245 KB
# Locale: en → 238 KB
# Locale: fr → 252 KB
# etc.
```

TypeScript-Version:

```typescript
// scripts/bundle-analyzer.ts
import { execSync } from 'child_process';
import fs from 'fs';

const LOCALES = ['de', 'en', 'fr', 'es', 'ja', 'zh', 'pt', 'ar'];
const report: Record<string, number> = {};

for (const locale of LOCALES) {
  const files = fs.readdirSync(`.next/static/chunks/`);
  const localeFiles = files.filter(f => f.includes(locale));
  const totalSize = localeFiles.reduce((sum, f) => {
    return sum + fs.statSync(`.next/static/chunks/${f}`).size;
  }, 0);
  
  report[locale] = totalSize / 1024; // KB
}

console.table(report);
// → Identifiziere Outliers (zu große Locales)
```

5. Code-Splitting nach Namespace:

```typescript
// Statt: import ALL namespaces
// import translations from '@/locales/de/all.json';

// Nutze: namespace-basiertes Splitting
const common = await import('@/locales/de/common.json');
const dashboard = await import('@/locales/de/dashboard.json');
// → Browser lädt nur die Namespaces, die aktuell gebraucht werden
```

6. Parallel-Loading von kritischen Uebersetzungen:

```typescript
// lib/i18n/preload.ts
export async function preloadCriticalTranslations(locale: string): Promise<void> {
  // Lade Common (kritisch) und Navigation in Parallel
  await Promise.all([
    import(`@/locales/${locale}/common.json`),
    import(`@/locales/${locale}/navigation.json`),
  ]);
  
  // Lazy-Load andere Namespaces später
  setTimeout(() => {
    import(`@/locales/${locale}/dashboard.json`);
    import(`@/locales/${locale}/forms.json`);
  }, 1000);
}
```

7. Caching-Strategie für Locale-Dateien (SWR-Pattern):

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Cache locale-files für 7 Tage (Stale-While-Revalidate)
  if (request.nextUrl.pathname.includes('locales/')) {
    response.headers.set('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
  }
  
  return response;
}
```

8. Monitoring und Performance-Metriken:

```typescript
// lib/i18n/performance.ts
export async function measureTranslationLoadTime(locale: string): Promise<number> {
  const startTime = performance.now();
  
  await loadLocaleTranslations(locale);
  
  const endTime = performance.now();
  return endTime - startTime;
}

// In CI/CD: Warnung, wenn Load-Time > 200ms
export const MAX_LOAD_TIME_MS = 200;
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) lib/i18n/dynamic-loader.ts
   └─ loadLocaleTranslations() mit Dynamic Import

B) lib/i18n/preload.ts
   └─ preloadCriticalTranslations() für Early-Load

C) next.config.js (erweitert)
   ├─ Webpack-Rule für Tree-Shaking
   ├─ Locale-Filtering in Build
   └─ Code-Splitting-Configuration

D) middleware.ts (erweitert)
   └─ Cache-Headers für Locale-Files (SWR)

E) scripts/bundle-analyzer.ts
   └─ Bundle-Size Report Generator

F) lib/i18n/performance.ts
   ├─ measureTranslationLoadTime()
   ├─ MAX_LOAD_TIME_MS Constant
   └─ Performance Metrics Export

G) .github/workflows/performance.yml
   ├─ Scheduled Bundle-Size-Checks
   ├─ Alert bei Regression
   └─ Performance-Report Publish

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

PERFORMANCE-ENGINEER:
─ Optimiert Bundle-Sizes
─ Implementiert Caching-Strategien
─ Monitort Load-Times

FRONTEND-ARCHITECT:
─ Designs Code-Splitting-Strategy
─ Ensures Server-Side Rendering
─ Validates Kein Client-Side Flicker

DEVOPS-ENGINEER:
─ Setzt Cache-Headers auf CDN
─ Monitort Bandwidth-Usage
─ Optimiert Delivery Pipeline

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Intelligent Locale Pre-Loading
Status: Hoch
Aktuell: Critical Translations preloaded, andere lazy.
Future: Nutze User-Analytics um:
─ Häufig-genutzte Locales zu prioritisieren
─ Predictive Pre-Loading (wenn Benutzer Locale wechselt)
─ Bandwidth-aware Loading (slow connections)

TASK 2: Compression und Minification
Status: Mittel
JSON-Uebersetzungsdateien können compressed werden:
─ GZIP compression für .json Dateien
─ Brotli compression für Modern Browsers
─ Minified JSON (optional für size, aber verliert readability)

TASK 3: Progressive Enhancement für i18n
Status: Mittel
Implementiere Fallback für Nutzer mit disabled JavaScript:
─ Server-rendered Translations
─ No JavaScript Dependency
─ Full Functionality ohne Client-Side Hydration

TASK 4: Translation-Bundle Versioning
Status: Niedrig
Wenn Uebersetzungen sich ändern:
─ Inkrementelle Versionen: common-v1.json, common-v2.json
─ Cache-Busting via Content-Hash
─ Zero-Downtime-Updates (alte und neue Version gleichzeitig verfügbar)

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| Bundle-Size | Per-Locale Bundle | < 300 KB | webpack-bundle-analyzer |
| Load-Time | Translation Load-Time | < 200 ms | Custom Metrics |
| LCP | Largest Contentful Paint | < 2.5 s | Web Vitals |
| FID | First Input Delay | < 100 ms | Web Vitals |
| CLS | Cumulative Layout Shift | < 0.1 | Web Vitals |
| Cache-Hit-Rate | CDN Cache Hits für Locale-Files | > 80% | CDN Analytics |
| No-Flicker | Client-Side Flicker absent | 0 Observable | E2E Visual Tests |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-07 ist VOLLSTÄNDIG, wenn:

✓ Lazy-Loading implementiert (nur aktive Locale geladen)
✓ Tree-Shaking entfernt ungenutzten Code
✓ Server-Side Locale-Resolution funktioniert (kein Flicker)
✓ Bundle-Size < 300 KB pro Locale
✓ Uebersetzungs-Load-Time < 200 ms
✓ Cache-Strategy aktiv (SWR)
✓ Performance-Monitoring in place
✓ Alle Validation-Gates bestanden

NÄCHSTE PHASE: I18N-08 (DSGVO-Compliance) AUTO-TRIGGERED.

═══════════════════════════════════════════════════════════════════════════════

## PHASE I18N-08 — DSGVO-COMPLIANCE

CHAIN-LINK-HEADER:
─────────────────────────────────────────────────────────────────────────────
INPUT: Produktive Internationalisierungs-Infrastruktur (alle Phasen I18N-01 bis I18N-07)
OUTPUT: Locale-spezifische Compliance-Texte, Consent-Management, Data-Processing-Agreements
DEPENDENCIES: Cookie-Banner Library (Osano, Iubenda, or Custom), Legal Templates
PREDECESSOR: Phase I18N-07
SUCCESSOR: Cross-Pipeline Dependencies (Data-Layer, Responsive Excellence)
─────────────────────────────────────────────────────────────────────────────

DOMINO-PROTOKOLL (Schrittweise Implementierung):

1. Implementiere Locale-spezifische Cookie-Banner:

```typescript
// lib/compliance/cookie-banner.ts
export type ConsentLegalFramework = 'DSGVO' | 'CCPA' | 'LGPD' | 'PIPL' | 'POPIA';

export interface CookieBannerConfig {
  locale: string;
  country: string;
  framework: ConsentLegalFramework;
  defaultConsent: 'opt-in' | 'opt-out';
}

// EU (DSGVO): Opt-In erforderlich
// USA (CCPA): Opt-Out (Pre-Consent)
// Brasilien (LGPD): Opt-In
// China (PIPL): Strict Opt-In
// Südafrika (POPIA): Opt-In

export const JURISDICTION_CONFIG: Record<string, CookieBannerConfig> = {
  'de': { locale: 'de', country: 'DE', framework: 'DSGVO', defaultConsent: 'opt-in' },
  'at': { locale: 'de', country: 'AT', framework: 'DSGVO', defaultConsent: 'opt-in' },
  'us': { locale: 'en', country: 'US', framework: 'CCPA', defaultConsent: 'opt-out' },
  'gb': { locale: 'en', country: 'GB', framework: 'DSGVO', defaultConsent: 'opt-in' },
  'br': { locale: 'pt', country: 'BR', framework: 'LGPD', defaultConsent: 'opt-in' },
  'cn': { locale: 'zh', country: 'CN', framework: 'PIPL', defaultConsent: 'opt-in' },
};
```

2. Datenschutz-Texte pro Region:

```typescript
// lib/compliance/privacy-texts.ts
export const PRIVACY_TEXTS: Record<string, Record<string, string>> = {
  'DSGVO': {
    'de': `Wir nutzen Cookies zur Speicherung von Einstellungen und zur Analyse. 
           Nach DSGVO Art. 13 müssen Sie zustimmen, bevor Cookies gespeichert werden.`,
    'en': `We use cookies to store settings and analyze usage. 
           Under GDPR Article 13, you must consent before cookies are stored.`,
    'fr': `Nous utilisons des cookies pour mémoriser les paramètres et analyser l'utilisation. 
           Selon l'article 13 du RGPD, vous devez consentir avant que les cookies ne soient stockés.`,
  },
  'CCPA': {
    'en': `California residents have the right to know, delete, and opt-out of sales of personal information. 
           See our Privacy Policy for details.`,
  },
  'LGPD': {
    'pt': `Utilizamos cookies e processamos dados pessoais. De acordo com a LGPD, você tem direito de acessar, 
           corrigir ou deletar seus dados.`,
  },
};

// Cookie-Banner Text pro Locale
export const COOKIE_BANNER_TEXT: Record<string, Record<string, string>> = {
  'de': {
    title: 'Cookie-Einstellungen',
    essential: 'Notwendig für Website-Funktionalität',
    analytics: 'Helfen uns, deine Nutzung zu verstehen',
    marketing: 'Ermöglichen personalisierte Werbung',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Alle ablehnen',
    savePreferences: 'Einstellungen speichern',
  },
  'en': {
    title: 'Cookie Settings',
    essential: 'Required for website functionality',
    analytics: 'Help us understand how you use our site',
    marketing: 'Enable personalized advertising',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    savePreferences: 'Save Preferences',
  },
  // ... für alle Locales
};
```

3. Impressum-Varianten nach Landesrecht:

```typescript
// lib/compliance/imprint.ts
export interface ImprintConfig {
  country: string;
  businessType: 'individual' | 'corporation' | 'partnership';
  requiredFields: string[];
}

// Deutschland (TMG/NetzDG): Strenge Anforderungen
export const IMPRINT_REQUIREMENTS = {
  'DE': {
    country: 'DE',
    businessType: 'corporation',
    requiredFields: [
      'companyName',
      'legalRepresentative',
      'address',
      'contactPhone',
      'contactEmail',
      'registrationNumber', // HRB / HR
      'taxId', // USt-IdNr
      'responsiblePerson',
    ],
  },
  'AT': {
    country: 'AT',
    businessType: 'corporation',
    requiredFields: [
      'companyName',
      'address',
      'contactPhone',
      'contactEmail',
      'registrationNumber',
    ],
  },
  'US': {
    country: 'US',
    businessType: 'corporation',
    requiredFields: [
      'companyName',
      'businessAddress',
      'contactEmail',
    ],
  },
};
```

4. Consent-Management pro Jurisdiction:

```typescript
// lib/compliance/consent.ts
export interface UserConsent {
  locale: string;
  country: string;
  timestamp: Date;
  consentTypes: {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  framework: ConsentLegalFramework;
}

export class ConsentManager {
  async storeConsent(consent: UserConsent): Promise<void> {
    // Speichere Consent mit Timestamp (DSGVO Anforderung)
    await db.consents.insert({
      ...consent,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 Jahr
    });
  }
  
  async getConsent(userId: string): Promise<UserConsent | null> {
    return db.consents.findOne({ userId });
  }
  
  async revokeConsent(userId: string): Promise<void> {
    // Right to Withdraw Consent (DSGVO Art. 7)
    await db.consents.deleteOne({ userId });
    // Auch Analytics-Events löschen
    await this.deleteAnalyticsData(userId);
  }
}
```

5. Data-Processing-Agreements pro Region:

```typescript
// lib/compliance/dpa.ts
export interface DataProcessingAgreement {
  effectiveDate: Date;
  jurisdiction: string;
  dataController: string;
  dataProcessor: string;
  processingPurposes: string[];
  dataRetentionDays: number;
  subProcessors: string[];
  internationalTransfers: boolean; // Falls Daten außerhalb EU?
}

export const DPA_CONFIGURATIONS: Record<string, DataProcessingAgreement> = {
  'EU': {
    effectiveDate: new Date('2024-01-01'),
    jurisdiction: 'EU (DSGVO)',
    dataController: 'Company XYZ GmbH',
    dataProcessor: 'AWS Europe',
    processingPurposes: ['Website Analytics', 'User Communication', 'Billing'],
    dataRetentionDays: 90, // Max. 90 Tage für Analytics
    subProcessors: ['Stripe (Payments)', 'SendGrid (Email)'],
    internationalTransfers: false, // Alle Daten bleiben in EU
  },
  'US': {
    effectiveDate: new Date('2024-01-01'),
    jurisdiction: 'USA (CCPA)',
    dataController: 'Company XYZ Inc.',
    dataProcessor: 'AWS US',
    processingPurposes: ['Website Analytics', 'User Communication', 'Billing'],
    dataRetentionDays: 365,
    subProcessors: ['Stripe', 'Salesforce'],
    internationalTransfers: true,
  },
};
```

6. Right-to-Deletion-Workflows mehrsprachig:

```typescript
// lib/compliance/gdpr.ts
export async function deleteUserDataGDPR(userId: string, locale: string): Promise<void> {
  // DSGVO Art. 17: Right to be Forgotten
  // Lösche ALLE persönlichen Daten, nicht nur Profil
  
  const deletionLog = {
    userId,
    timestamp: new Date(),
    deletedAt: new Date(),
    deletedEntities: [] as string[],
  };
  
  // Lösche Kern-Daten
  await db.users.deleteOne({ id: userId });
  deletionLog.deletedEntities.push('user_profile');
  
  // Lösche Orders / Transactions
  await db.orders.deleteMany({ userId });
  deletionLog.deletedEntities.push('orders');
  
  // Lösche Analytics Events
  await analytics.deleteUserEvents(userId);
  deletionLog.deletedEntities.push('analytics_events');
  
  // Lösche Consent Records
  await db.consents.deleteMany({ userId });
  deletionLog.deletedEntities.push('consent_records');
  
  // Lösche Backups (falls gespeichert)
  await backupStorage.deleteUserBackups(userId);
  deletionLog.deletedEntities.push('backups');
  
  // Sende Confirmation Email (mehrsprachig)
  const emailTemplate = DELETION_CONFIRMATION_EMAILS[locale] || DELETION_CONFIRMATION_EMAILS['en'];
  await sendEmail(userId, emailTemplate);
  
  // Log zur Audit-Trail
  await db.auditLog.insert(deletionLog);
}

export const DELETION_CONFIRMATION_EMAILS: Record<string, string> = {
  'de': `Hallo,\n\nIhr Konto und alle persönlichen Daten wurden gelöscht. Sie können sich jederzeit neu registrieren.\n\nMit freundlichen Grüßen`,
  'en': `Hello,\n\nYour account and all personal data have been deleted. You can register again anytime.\n\nBest regards`,
  'fr': `Bonjour,\n\nVotre compte et toutes vos données personnelles ont été supprimés. Vous pouvez vous réinscrire à tout moment.\n\nCordialement`,
};
```

7. Privacy-Policy-Versionierung pro Locale:

```typescript
// lib/compliance/privacy-policy.ts
export interface PrivacyPolicyVersion {
  version: string;
  locale: string;
  effectiveDate: Date;
  sections: {
    dataCollection: string;
    dataUsage: string;
    dataSharing: string;
    dataRetention: string;
    userRights: string;
    contact: string;
  };
}

export const PRIVACY_POLICIES: Record<string, PrivacyPolicyVersion[]> = {
  'de': [
    {
      version: '2.0',
      locale: 'de',
      effectiveDate: new Date('2024-01-15'),
      sections: {
        dataCollection: 'Wir sammeln...',
        dataUsage: 'Ihre Daten werden verwendet für...',
        dataSharing: 'Wir geben Daten weiter an...',
        dataRetention: 'Datenspeicherung für max. 90 Tage...',
        userRights: 'Sie haben das Recht zu...',
        contact: 'Kontaktieren Sie uns unter...',
      },
    },
  ],
};

// Benutzer müssen aktuelle Version akzeptieren
export async function getUserLatestPolicyVersion(locale: string): Promise<PrivacyPolicyVersion | null> {
  const policies = PRIVACY_POLICIES[locale] || [];
  return policies.sort((a, b) => b.effectiveDate.getTime() - a.effectiveDate.getTime())[0] || null;
}
```

ARTIFACT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

A) lib/compliance/cookie-banner.ts
   ├─ JURISDICTION_CONFIG per Region
   ├─ ConsentLegalFramework Enum
   └─ Opt-In vs Opt-Out Logic

B) lib/compliance/privacy-texts.ts
   ├─ PRIVACY_TEXTS mehrsprachig
   └─ COOKIE_BANNER_TEXT pro Locale

C) lib/compliance/imprint.ts
   ├─ IMPRINT_REQUIREMENTS per Land
   └─ ImprintConfig Interface

D) lib/compliance/consent.ts
   ├─ ConsentManager Klasse
   ├─ storeConsent() Funktion
   └─ revokeConsent() (Right to Withdraw)

E) lib/compliance/dpa.ts
   └─ DPA_CONFIGURATIONS pro Jurisdiction

F) lib/compliance/gdpr.ts
   ├─ deleteUserDataGDPR() (Right to be Forgotten)
   ├─ DELETION_CONFIRMATION_EMAILS
   └─ Audit-Logging

G) lib/compliance/privacy-policy.ts
   ├─ PRIVACY_POLICIES versioniert
   └─ getUserLatestPolicyVersion()

H) Components/CookieBanner.tsx
   ├─ Locale-aware Cookie-Banner
   ├─ Consent-Form
   └─ Preference Management UI

I) API Routes /api/compliance/*
   ├─ POST /api/compliance/consent (Store Consent)
   ├─ DELETE /api/compliance/user-data (GDPR Delete)
   └─ GET /api/compliance/privacy-policy (Policy Retrieval)

DIRECTOR-ZUWEISUNG:
─────────────────────────────────────────────────────────────────────────────

LEGAL-COMPLIANCE-OFFICER:
─ Reviewed Compliance-Texte pro Jurisdiction
─ Ensures DSGVO, CCPA, LGPD, PIPL Konformität
─ Updated DPA und Imprint

PRIVACY-ENGINEER:
─ Implementiert Consent-Management
─ Sichert Deletion-Workflows
─ Audit-Logging für Compliance

FRONTEND-DEVELOPER:
─ Builds Cookie-Banner UI
─ Implements Consent-Preferences
─ Multiple-Language Support

BACKEND-ENGINEER:
─ API Routes für Consent
─ Data-Deletion Workflows
─ Audit-Trail Database

ULTRATHINK-LANGZEITTASKS:
─────────────────────────────────────────────────────────────────────────────

TASK 1: Automated Compliance Scanning
Status: Hoch
Nutze Tools um:
─ Unerlaubte Cookies zu erkennen
─ Privacy Policy auf aktuellem Stand zu prüfen
─ DSGVO-Compliance zu validieren
Script: `npm run compliance:audit` (wöchentlich)

TASK 2: Consent Consent Expiration & Re-prompting
Status: Hoch
Consent verfällt nach 13 Monaten (DSGVO). Implementiere:
─ Automatic Consent Expiration
─ Re-prompt User nach Ablauf
─ Versioned Consent Acceptance

TASK 3: Third-Party Processor Agreements
Status: Mittel
Für jeden Third-Party Service (Stripe, SendGrid, etc.):
─ Data Processing Agreement prüfen
─ Sub-Processor Liste validieren
─ International Data Transfer Compliance

TASK 4: Locale-Specific Cookie Categories
Status: Mittel
Verschiedene Locales können unterschiedliche Cookie-Categories benötigen:
─ DE: Sehr detaillierte Categories
─ US: Simplified Categories (CCPA)
─ CN: Strikte Einschränkungen (PIPL)

Implementiere Cookie-Category-Mapper pro Locale.

VALIDATION-GATES:
─────────────────────────────────────────────────────────────────────────────

| Gate | Kriterium | Schwelle | Methode |
|------|-----------|----------|---------|
| Cookie-Consent | Cookies nur nach Consent gespeichert | 100% Compliant | Browser DevTools |
| DSGVO-Audit | Privacy Policy & Imprint vollständig | 0 Gaps | Checklist Audit |
| Deletion-Workflow | Right-to-Deletion funktioniert | 100% Data Removed | Integration Test |
| Consent-Storage | Consent Records mit Timestamp | 100% Logged | Audit-Log Review |
| Locale-Accuracy | Compliance-Texte korrekt pro Region | 100% Accurate | Legal Review |
| Data-Retention | Alte Daten werden gelöscht (max 90d) | On Schedule | Automated Cleanup |
| Audit-Trail | Alle Compliance-Aktionen geloggt | Complete | Log Analyzer |

EXIT-PROTOKOLL:
─────────────────────────────────────────────────────────────────────────────

Phase I18N-08 ist VOLLSTÄNDIG, wenn:

✓ Cookie-Banner implementiert mit Opt-In für EU, Opt-Out für US
✓ Locale-spezifische Compliance-Texte vorhanden
✓ Impressum-Varianten pro Land konfiguriert
✓ Consent-Management funktioniert (Store & Revoke)
✓ GDPR Right-to-Deletion implemented
✓ Privacy Policy versioniert und updatable
✓ DPA und Sub-Processor Agreements documented
✓ Audit-Logging für alle Compliance-Actions aktiv
✓ Alle Validation-Gates bestanden

═════════════════════════════════════════════════════════════════════════════

## CROSS-PIPELINE-ABHAENGIGKEITEN

PHASE I18N-SYSTEM ist nicht isoliert. Folgende Abhängigkeiten:

DATEN-LAYER-PIPELINE:
─ Phase DL-01 (Datenbankschema): Muss Locale-Felder in allen Tables enthalten
─ Phase DL-02 (API Design): Alle Endpoints MÜSSEN x-locale Header akzeptieren
─ Phase DL-03 (Datenmigration): Historische Daten müssen mit default-Locale versehen werden

RESPONSIVE-EXCELLENCE-PIPELINE:
─ Phase RX-01 (Mobile-First Design): RTL-Layouts müssen für alle Breakpoints validiert sein
─ Phase RX-02 (CSS Architecture): Logical Properties für alle CSS-Rules (nicht left/right)
─ Phase RX-03 (Testing): Visual Tests müssen alle 8 Locales abdecken

LLMO-DOMINANCE-PIPELINE:
─ Phase LLM-02 (AI Content Generation): Generierte Content MUSS mehrsprachig sein
─ Phase LLM-04 (Natural Language): NLP muss alle 8 Sprachen unterstützen
─ Phase LLM-05 (Translation Quality): Machine-Translation outputs müssen validiert werden

═════════════════════════════════════════════════════════════════════════════

## KONFIGURATIONS-SPEZIFIKATION

UMGEBUNGS-VARIABLEN (.env.local):

```
NEXT_PUBLIC_SUPPORTED_LOCALES=de,en,fr,es,ja,zh,pt,ar
NEXT_PUBLIC_DEFAULT_LOCALE=de
CROWDIN_API_TOKEN=***
CROWDIN_PROJECT_ID=123456
DEEPL_API_KEY=***
MAXMIND_GEOIP_KEY=***  (optional, für Geo-Routing)
```

VERZEICHNIS-STRUKTUR:

```
project/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       └── ...
├── locales/
│   ├── de/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── forms.json
│   │   └── ...
│   ├── en/
│   ├── fr/
│   └── ...
├── lib/
│   └── i18n/
│       ├── locales.ts
│       ├── formatters/
│       │   ├── date.ts
│       │   ├── number.ts
│       │   └── phone.ts
│       ├── rtl.ts
│       ├── compliance/
│       │   ├── cookie-banner.ts
│       │   ├── consent.ts
│       │   └── gdpr.ts
│       └── ...
├── middleware.ts
├── next.config.js
├── crowdin.yml
└── scripts/
    ├── extract-translation-keys.ts
    ├── generate-i18n-types.ts
    ├── bundle-analyzer.ts
    └── ...
```

═════════════════════════════════════════════════════════════════════════════

## METRIKEN UND KPIS

PERFORMANCE-METRIKEN:
─ Middleware-Latency: < 50ms (p95)
─ Translation-Load-Time: < 200ms
─ Bundle-Size pro Locale: < 300 KB
─ LCP: < 2.5s
─ FID: < 100ms
─ CLS: < 0.1

COMPLIANCE-METRIKEN:
─ Consent-Rate: > 60%
─ Cookie-Compliance-Score: 100% (Google Search Console)
─ GDPR-Audit-Pass-Rate: 100%
─ Deletion-Request-Response-Time: < 48h

TRANSLATION-METRIKEN:
─ Translation-Coverage: >= 95% pro Locale
─ Dead-Keys: < 10 pro Locale
─ Translation-Turnaround-Time: 5-7 Tage
─ Machine-Translation-Acceptance-Rate: > 70%

BUSINESS-METRIKEN:
─ Supported Locales: 8
─ Daily-Active-Users pro Locale: [Tracking TBD]
─ Conversion-Rate-Variance-by-Language: < 20%
─ Support-Tickets-Regarding-Translation: < 1% von Total

═════════════════════════════════════════════════════════════════════════════

DOKUMENTATION ENDE.

Generiert: 2026-04-05
Gültigkeit: Langfristig (Quarterly Review)
Next Review Datum: 2026-07-05

