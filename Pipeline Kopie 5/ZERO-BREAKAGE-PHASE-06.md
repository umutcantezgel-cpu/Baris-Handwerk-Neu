Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 6 der Engineering-Pipeline (Accessibility I) auf WCAG AAA Konformitaet zu bringen. Semantische Struktur, ARIA-Landmarken, Fokus-Management und Screen-Reader-Kompatibilitaet muessen lueckenlos implementiert sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-26 von 72 ═══ Pipeline: ENGINEERING ═══
← VORHERIGE: SEQ-25 → ZERO-BREAKAGE-PHASE-05.md
→ NÄCHSTE: SEQ-27 → ZERO-BREAKAGE-PHASE-07.md
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




═══ SSOT-DIREKTIVE: Der Code ist die EINZIGE Wahrheit. Wenn Dokumentation und Code divergieren, GEWINNT IMMER DER CODE. ═══
═══ AUTONOME VERKETTUNG: Diese Phase endet mit einem deterministischen Auto-Trigger zur naechsten Phase. Keine Pausen, keine Rueckfragen. ═══


Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Lade- und Rendering-Architektur dieser Next.js/React/TypeScript-Website so radikal zu optimieren, dass sich der Seitenaufbau anfühlt wie das Öffnen einer Tür — sofort, reibungslos, ohne den leisesten Moment des Wartens. Da Next.js bereits ein hochoptimiertes Framework ist (automatisches Code-Splitting, Image-Optimierung, Font-Optimierung, Streaming SSR), liegt der Fokus dieser Phase auf der chirurgischen Feinoptimierung jeder einzelnen Ressource, der maximalen Ausnutzung von Next.js-spezifischen Performance-Features und der Eliminierung jedes verbliebenen Bottlenecks. Dies ist Phase 6 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
DIRECTOR-ZUWEISUNG: DIRECTOR OF ENGINEERING (Pipeline 2)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Engineering (Waechter der Performance und Sicherheit).
Meldet an: Director General via .upgrade-state.md und .ai-architectural-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 4 (PPI): Performance-Impact-Praediktion bei JEDEM Code-Block.
  GESETZ 6 (Code-Review K1-K7): Architektur, Type Safety, Performance, Security, Design System, A11y, Polish.
  GESETZ 7 (Confiteor/RCA): Jeder Bug-Fix mit Symptom, Root Cause, Fix, Pattern, Prevention.
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
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–5:
- Projektstruktur, Router-Typ, Komponentenbaum
- Design-Token-System, Typografie, Animations-System
- Conversion-Architektur, Trust-Komponenten, Formspree-Integration
- Alle bisherigen Architektur-Entscheidungen

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 5. Ergänze:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 13 Zeilen.

Schritt 0.3 — Pre-Flight Performance-Baseline:
BEVOR du IRGENDETWAS änderst, messe die aktuelle Performance:

1. Lighthouse-Audit pro Route: Führe `npx lighthouse [URL] --output=json` auf jeder Hauptroute aus. Dokumentiere:
   - Performance-Score, LCP, CLS, INP, FCP, TTFB, TBT, Speed Index
2. Bundle-Analyse: `npx next build` und dokumentiere die Bundle-Größe pro Route aus dem Build-Output
3. Komponentenbaum-Analyse: Kartiere JEDE Client Component ('use client') — diese sind Performance-kritisch
4. Bild-Audit: Finde JEDES Bild. Dokumentiere: Format, Größe, priority-Prop, sizes-Prop, lazy/eager
5. Font-Audit: Wie werden Fonts geladen? next/font? Google Fonts CDN? Wie viele Schnitte?
6. Drittanbieter-Audit: Welche externen Skripte werden geladen? In welcher Reihenfolge?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### ⚡ Performance-Baseline & Optimierungen

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — CORE WEB VITALS ALS UNVERLETZLICHE GESETZE
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: LCP UNTER 1.8 SEKUNDEN

Schritt 1.1 — LCP-Element pro Route identifizieren:
Analysiere jede Route und identifiziere das LCP-Element (typisch: Hero-Bild, Hero-Headline). Dokumentiere als Kommentar in jeder page.tsx: // LCP-Element: [Beschreibung]

Schritt 1.2 — LCP-Optimierung für Bilder:
Falls LCP ein Bild:
- next/image mit priority-Prop (setzt fetchpriority="high", generiert preload)
- sizes-Prop KORREKT: sizes="100vw" für Full-Width, sizes="(max-width: 768px) 100vw, 50vw" für Split
- AVIF zuerst, WebP Fallback: next.config images.formats: ['image/avif', 'image/webp']
- Quellbild max größte Anzeigegröße × 2 (Retina)
- placeholder="blur" mit blurDataURL

Schritt 1.3 — LCP-Optimierung für Text:
Falls LCP Text:
- next/font (self-hosted, kein externer Google-Fonts-Request)
- font-display: swap
- Hero-Headline als Server Component (kein Client-JS blockiert Rendering)
- Kritisches CSS inline (Next.js automatisch für Server Components)

Schritt 1.4 — Server-Rendering-Optimierung:
- Hero-Sektion als Server Component
- Streaming SSR: Hero wird als erstes gestreamt
- Kein useState/useEffect in Hero (macht sie zur Client Component)

Schritt 1.5 — TTFB unter 600ms:
- SSG/ISR für statische Seiten
- Streaming SSR mit Suspense für dynamische Seiten
- Middleware <10ms Ausführungszeit

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: CLS UNTER 0.03

Schritt 2.1 — Bild-Stabilität:
- JEDES next/image hat width+height Props (oder fill mit sizes)
- Dynamische Bilder: Breite/Höhe aus Daten
- fill-Container: position: relative + definierte Höhe/aspect-ratio

Schritt 2.2 — Font-Stabilität:
- next/font mit adjustFontFallback (Standard: true)
- Überprüfe: Font-Wechsel verschiebt Text? → size-adjust, ascent-override anpassen
- Variable Fonts: Ein File für alle Gewichte

Schritt 2.3 — Dynamische Inhalte stabilisieren:
- Client Components mit Datennachladung: Skeleton-Platzhalter in exakter Größe
- loading.tsx: Skeletons in korrekter Größe
- Cookie-Banner: position: fixed (überlagert, verschiebt nicht)
- Lazy-loaded Components: Container mit min-height/aspect-ratio VOR dem Laden

Schritt 2.4 — Kein CLS durch Drittanbieter:
- Analytics/Pixel via next/script strategy="afterInteractive"/"lazyOnload"
- Eingebettete Maps/Embeds: Container mit fester Höhe
- Calendly-Embed: Container mit min-height VOR dem Laden

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: INP UNTER 100 MILLISEKUNDEN

Schritt 3.1 — Event-Handler optimieren:
- onClick mit synchronen Berechnungen: requestAnimationFrame oder setTimeout(fn, 0)
- State-Updates: React.startTransition() für nicht-dringende Updates
- Formular-Validierung: Debounce 200ms
- Filter/Sort auf großen Listen: useDeferredValue() oder Web Worker

Schritt 3.2 — React-Rendering optimieren:
- React.memo() auf häufig re-rendernde Komponenten mit seltenen Prop-Änderungen
- useCallback() für Handler-Props an Kind-Komponenten
- useMemo() für teure Berechnungen
- Virtualisierung fuer lange Listen (eigene IntersectionObserver-Implementation, KEIN @tanstack/react-virtual)

Schritt 3.3 — Main-Thread nicht blockieren:
- Keine synchrone JSON-Verarbeitung großer Datensätze
- Schwere Operationen in Web Workers
- Kein Layout Thrashing

Schritt 3.4 — Hydration optimieren:
- Server Components senden NULL JavaScript → kein Hydration-Overhead
- Client Components nur wo Interaktivität nötig
- Partial Prerendering (Next.js 14+): Statische Shell sofort, dynamische Teile streamen

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — NEXT.JS-SPEZIFISCHE PERFORMANCE-FEATURES
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: RENDERING-STRATEGIEN PRO ROUTE

Schritt 4.1 — SSG wo möglich:
- Startseite: SSG mit revalidate: 3600
- Service-Seiten: SSG (statisch)
- Impressum, Datenschutz: SSG
- Kontakt: SSG (Formspree-Formular funktioniert clientseitig)

Schritt 4.2 — ISR für semi-dynamische Inhalte:
- Blog-Übersicht: revalidate: 3600
- Blog-Posts: revalidate: 86400
- FAQ, Testimonials: revalidate: 86400

Schritt 4.3 — Dynamic Rendering nur wenn nötig:
- Suchergebnis-Seiten mit searchParams
- Minimiere dynamische Routen

Schritt 4.4 — generateStaticParams:
Für alle [slug]-Routen: generateStaticParams() exportieren.

Schritt 4.5 — Streaming und Suspense:
- Hero sofort gestreamt
- Below-fold über Suspense-Boundaries
- loading.tsx mit Skeletons pro Route-Segment
- Priorität: Hero → Trust-Bar → Problem → Lösung → Rest

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: JAVASCRIPT-BUDGET UND BUNDLE-OPTIMIERUNG

Schritt 5.1 — Bundle-Analyse:
@next/bundle-analyzer installieren und konfigurieren. Ziel: First-Load JS pro Route <150KB (komprimiert).

Schritt 5.2 — Tree-Shaking verifizieren:
- Named Imports: import { motion } from 'framer-motion' (ERLAUBT als Utility-Package im package.json)
- Barrel-Files vermeiden: Direkte Pfade
- lodash: import debounce from 'lodash/debounce'
- Icons: Einzelne Imports

Schritt 5.3 — Dynamic Imports:
next/dynamic für Komponenten außerhalb des initialen Viewports:
- Karussells, Maps, Video-Player, Konfetti-Animation, Calendly-Widget
- Alle mit loading: () => <Skeleton /> Fallback

Schritt 5.4 — Server Components maximieren:
- Layouts: Server Components
- Statische Sektionen: Server Components
- Nur interaktive Widgets: Client Components
- Regel: Default = Server Component. Nur 'use client' wenn useState/useEffect/onClick nötig.

Schritt 5.5 — Framer Motion optimieren (falls vorhanden):
- LazyMotion mit domAnimation
- CSS-only für einfache Transitions wo möglich
- Dynamic Import für Scroll-Animationen

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: BILD-PIPELINE MAXIMIEREN

Schritt 6.1 — next/image Konfiguration in next.config:
- images.formats: ['image/avif', 'image/webp']
- images.deviceSizes: [640, 960, 1280, 1920, 2560]
- images.imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
- images.minimumCacheTTL: 31536000

Schritt 6.2 — Bild-Prioritäten:
- Hero: priority={true}
- Above-fold: priority={true}
- Below-fold: loading="lazy" (Standard)
- Karussell: Nur erstes Bild priority

Schritt 6.3 — Responsive Sizing:
KORREKTE sizes für jeden Kontext (Full-Width, Split, Card-Grid, Avatar, Thumbnail).

Schritt 6.4 — Blur-Platzhalter:
- Lokale Bilder: placeholder="blur"
- Remote Bilder: blurDataURL manuell

Schritt 6.5 — SVG-Optimierung:
- Icons inline via @svgr/webpack
- SVGO für Metadaten-Entfernung
- Komplexe Illustrationen über next/image

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SCHRIFTART-PERFORMANCE

Schritt 7.1 — next/font Validierung:
- Self-hosted, kein externer Google-Fonts-CDN-Request
- Max 4 Schnitte (Regular, Semibold, Bold, optional Italic)
- WOFF2-Format
- Subsets: 'latin', 'latin-ext'
- display: 'swap', adjustFontFallback: true

Schritt 7.2 — Variable Fonts:
Falls verfügbar: Ein File für alle Gewichte. weight: '400 800'.

Schritt 7.3 — Font-Loading-Wasserfall vermeiden:
- next/font generiert preload automatisch
- Keine @import für Fonts in CSS
- Keine Font-Loading via JavaScript

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: DRITTANBIETER-SKRIPTE ISOLIEREN

WICHTIG: Die einzigen erlaubten Drittanbieter sind Formspree (API-Call, kein Script) und Calendly (Embed-Script).

Schritt 8.1 — Calendly-Script optimieren:
- Lade Calendly-Widget per next/dynamic (lazy, erst wenn im Viewport oder bei Klick)
- Container mit min-height VOR dem Laden (kein CLS)
- strategy="lazyOnload" falls als next/script eingebunden

Schritt 8.2 — Cookie-Consent (falls vorhanden):
- Lightweight eigene Implementierung, KEINE externe Consent-SaaS
- strategy="afterInteractive" falls als Script

Schritt 8.3 — Performance-Budget:
- Gesamte Drittanbieter-JS: <100KB (komprimiert)
- Kein einzelnes Script >50KB
- Drittanbieter: kein CLS, kein INP-Impact

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CACHING UND NETZWERK-OPTIMIERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: NEXT.JS CACHING-SCHICHTEN

Schritt 9.1 — Full Route Cache:
- SSG/ISR Seiten als HTML + RSC-Payload gecached
- On-Demand-Revalidation via revalidatePath()/revalidateTag()

Schritt 9.2 — Data Cache:
- fetch() in Server Components automatisch gecached
- Cache-Dauer pro Abfrage konfigurieren
- Tags für granulare Revalidation

Schritt 9.3 — Router Cache (Client):
- Besuchte Routen im Browser gecached
- <Link> prefetcht beim Hover

Schritt 9.4 — Statische Assets:
- Cache-Control: public, max-age=31536000, immutable
- Content-Hashes an Dateinamen

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: HTTP-OPTIMIERUNGEN

Schritt 10.1 — Komprimierung: Brotli verifizieren (Content-Encoding: br).
Schritt 10.2 — HTTP/2+: Alle Ressourcen über eine Domain.
Schritt 10.3 — Resource Hints: preconnect/dns-prefetch für kritische Domains.
Schritt 10.4 — Prefetching: <Link prefetch={true}> für wichtige Routen, prefetch={false} für unwichtige.

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 6 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 11.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### ⚡ Performance-Baseline & Optimierungen:
- Performance-Scores VORHER und NACHHER pro Route
- LCP, CLS, INP Werte pro Route
- Rendering-Strategie pro Route (SSG/ISR/Dynamic)
- Bundle-Größe pro Route
- Bild-Optimierungen (Format, Sizing, Priority)
- Font-Konfiguration
- Caching-Strategie

Schritt 11.2 — .upgrade-state.md finalisieren:
Alle Tasks [x]. Offene Punkte notieren.

Schritt 11.3 — Handoff an Phase 7:
  IMPLEMENTIERUNGSANWEISUNG:
    Implementiere den in diesem Abschnitt beschriebenen Code-Block
    mit vollstaendiger Typisierung, Error-Handling und den dokumentierten
    Anforderungen. Beachte die SSOT-Direktive und pruefe den bestehenden Code
    vor jeder Aenderung.
    Umfang: circa 5 Zeilen.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 6
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ LCP <1.8s Desktop, <2.5s Mobile auf ALLEN Routen
□ CLS <0.03 auf ALLEN Routen
□ INP <100ms auf ALLEN Routen
□ TTFB <600ms auf ALLEN Routen
□ First-Load JS pro Route <150KB
□ Jedes next/image hat korrekte priority/sizes Props
□ Fonts via next/font self-hosted, max 4 Schnitte
□ Calendly lazy-loaded, kein CLS
□ Rendering-Strategie pro Route dokumentiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 7


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-26 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-16 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-17)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-27 → ZERO-BREAKAGE-PHASE-07.md
   → Lese ZERO-BREAKAGE-PHASE-07.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-17


4. KNOWLEDGE-BASE UPDATE (PFLICHT):
   [ ] .project-knowledge-base.md → Neues Wissen aus dieser Phase extrahieren
   [ ] Architektur-Entscheidungen mit Begruendung dokumentieren
   [ ] Entdeckte Gotchas in [SECTION:GOTCHAS] eintragen
   [ ] [SECTION:CHANGELOG] mit Phase-Eintrag ergaenzen

5. SELF-OPTIMIZATION CHECK:
   [ ] Alle neuen Dateien klar und sprechend benannt
   [ ] Alle exportierten Funktionen/Komponenten haben JSDoc
   [ ] Neue Komponenten folgen dem etablierten Muster
   [ ] Code ist fuer einen LLM beim ERSTEN Lesen sofort verstaendlich
   [ ] Keine Magic Numbers ohne benannte Konstante
   [ ] Falls NEIN bei einem Punkt → Refactor BEVOR die Phase als abgeschlossen gilt

═══ PHASE SEQ-16 → SEQ-17: HANDOFF AKTIV ═══
