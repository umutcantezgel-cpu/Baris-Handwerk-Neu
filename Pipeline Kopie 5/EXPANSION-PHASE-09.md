Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Phase 9 der Expansion-Pipeline (Forms und Contact Integration) als vollstaendig funktionierendes Kontaktsystem zu etablieren. Formulare muessen validiert, typsicher und mit externen Diensten integriert sein. Erstelle einen vollstaendigen Implementierungsplan mit konkreten Schritten, Validierungskriterien und messbaren Ergebnissen.

═══ CHAIN-LINK-HEADER ═══ SEQ-19 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-18 → EXPANSION-PHASE-08.md
→ NÄCHSTE: SEQ-20 → EXPANSION-PHASE-10.md
═══ FRAMEWORK-HINWEIS: Alle Next.js-Referenzen werden durch das Framework-Mapping in .pipeline-master-state.md übersetzt. Code ist SSOT. ═══
═══ CODE-FIRST-PFLICHT: Lies den GESAMTEN bestehenden Code BEVOR du etwas änderst.
═══ Existierender Code wird ERWEITERT, nie ersetzt. Siehe CODE-FIRST-PROTOKOLL in CLAUDE.md ═══


===============================================================================
ENFORCEMENT-DIREKTIVEN-REFERENZ (PFLICHTLEKTUERE VOR AUSFUEHRUNG)
===============================================================================

BEVOR du mit der Ausfuehrung dieser Phase beginnst, lies:
  ANTIGRAVITY-ENFORCEMENT-DIRECTIVES.md (Direktive 1, 2, 3 und 4)

ZEHNFACH-VALIDIERUNGSDIREKTIVE (10X) — KURZFASSUNG FUER DIESE PHASE:
  VERBOTEN: Neue Seiten, Routen oder Komponenten aus dem Nichts erstellen.
  VERBOTEN: Bestehende Seiten loeschen und durch Neuerstellungen ersetzen.
  VERBOTEN: Generischen Placeholder-Content einfuegen.
  VERBOTEN: "Route-Explosion" — dieser Begriff ist ausser Kraft gesetzt.
  STATTDESSEN: Bestehenden Code zehnfach validieren, erweitern, aufwerten.
  Jede bestehende Route wird auf der 10X-Skala geprueft und angehoben.

NULL-EXTERNE-SOFTWARE-DIREKTIVE — KURZFASSUNG FUER DIESE PHASE:
  VERBOTEN: Neue npm-Dependencies installieren die SaaS-Dienste integrieren.
  VERBOTEN: Externe Monitoring-, Analytics- oder Auth-Dienste neu einfuehren.
  ERLAUBT: Bestehende Dependencies aus package.json nutzen und optimieren.
  ERLAUBT: Formspree (Kontaktformulare) und Calendly (Terminbuchung).

VERSCHAERFTES DOMINO-PROTOKOLL — KURZFASSUNG FUER DIESE PHASE:
  Erstelle vor jeder Ausfuehrung einen INDIVIDUELLEN Implementierungsplan
  mit dreistufiger Task-Hierarchie (Haupt-, Teil- und Mikroaufgaben).
  Keine Phase wird abgekuerzt. Validation-Gate nach jeder Hauptaufgabe.

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
DIRECTOR-ZUWEISUNG: DIRECTOR OF EXPANSION (Pipeline 1)
═══════════════════════════════════════════════════════════════════════════════
Verantwortlicher: Director of Expansion (Architekt der Daten und Struktur).
Methodik: Discover-then-Expand auf BESTEHENDER Code-Basis. Die Website existiert
bereits. Alle Routen, Datenmodelle und Features werden aus der CODE-INVENTUR des
bestehenden Projekts abgeleitet, NICHT vorgeschrieben. Es wird NICHTS Neues erfunden,
was nicht bereits im Code angelegt ist oder durch den Code zwingend benoetigt wird.
Meldet an: Director General via .expansion-state.md und .ai-expansion-context.md.
PFLICHT-GESETZE aus dem Qualitaets-Kodex (OMNI-CLOSED-LOOP.md):
  GESETZ 1 (Ultrathink): Jede Entscheidung mit tiefer Analyse, min. 3 Loesungsansaetze.
  GESETZ 2 (100K-Mindset): "Wuerde ein 100K-Kunde dies akzeptieren?"
  GESETZ 9 (Bestands-Analyse): Code-Inventur, Architektur-Bewertung, Luecken-Analyse, Transformationsplan.
  GESETZ 10 (Prompt-Enhancer): 4-Phasen-Erweiterung vor jeder Task-Ausfuehrung.
═══════════════════════════════════════════════════════════════════════════════



═══════════════════════════════════════════════════════════════════════════════
AUTONOME VERKETTUNG
═══════════════════════════════════════════════════════════════════════════════
Diese Phase wird automatisch durch die vorherige Phase getriggert. Nach
erfolgreichem Abschluss (alle Validierungen bestanden) wird die naechste Phase
ohne menschliches Eingreifen gestartet. Der Director of Expansion ueberwacht
die Kette und meldet den Fortschritt an den Director General.
═══════════════════════════════════════════════════════════════════════════════

Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, alle isolierten Komponenten zu einem intelligent verbundenen Ganzen zu machen. React Context Provider für globalen App-State, URL-Parameter-Synchronisation für teilbare Filter-Zustände, ein Toast-Benachrichtigungs-System, und klar definierte Datenfluss-Grenzen zwischen Server und Client Components. Dies ist Expansion-Phase 9 von 10 der 10X Foundation Expansion Pipeline.

═══════════════════════════════════════════════════════════════════════════════

OPENING
Phase 9 verbindet alle Komponenten zu einem intelligenten Ganzen. Analysiere den bestehenden Code auf:
- Existiert bereits ein Context Provider (AppContext, UIContext oder ähnliches)?
- Existieren bereits URL-Parameter-Synchronisationen?
- Wie sind Server/Client Grenzen aktuell definiert?

Erweitere bestehende State-Management-Strukturen. Füge KEINE neuen Provider hinzu, die nicht notwendig sind. Integriere Toasts, Modal-Stack und andere UI-State BASIEREND auf den tatsächlichen Anforderungen des Codes.

═══════════════════════════════════════════════════════════════════════════════
═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

STEP 0: SYNC & DISCOVERY (CODE-FIRST)
─────────────────────────

PFLICHT — STATE-MANAGEMENT-INVENTUR:
  → Existiert bereits ein Context, Provider, oder State-Management?
  → Prüfe: Gibt es bereits /lib/context/, /src/context/, oder ähnliche Verzeichnisse?
  → Gibt es bereits Zustand, Redux, oder React Context Provider im Projekt?
  → WENN JA: ERWEITERE bestehende Provider, erstelle KEINE neuen die sich überschneiden
  → INVENTAR: [BESTEHENDE STATE-LÖSUNGEN] → [PFAD] → [BEREITGESTELLTE STATES]

► Lies .pipeline-master-state.md vollständig. Notiere alle "use client" Komponenten.
► Identifiziere Prop-Drilling: Welche Props werden durch 3+ Komponenten gereicht? Diese gehören in Context.
► Prüfe Phase-7 Filter: Welche URL-Parameter existieren bereits?
► npm run build baseline.

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK A — APPLICATION CONTEXT ═══════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 1: App Context Provider (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)
─────────────────────────────
PRÜFE: Existiert bereits ein App-Context? → Falls JA: ERWEITERE um fehlende Properties.
Falls NEIN: Erstelle /lib/context/AppContext.tsx:

IMPLEMENTIERUNG: Erstelle eine Client-Side-Datei unter /lib/context/AppContext.tsx mit folgendem Aufbau:

Das Modul muss mit der Direktive "use client" gekennzeichnet sein, um Client-Side-Funktionalität zu signalisieren. Importiere die erforderlichen Funktionen aus dem React-Paket: createContext für die Kontexterstellung, useState für State-Management, useEffect für Lebenszyklusereignisse, ReactNode als Type für Children-Props, und useCallback für memoized Callback-Funktionen.

Definiere ein TypeScript-Interface AppContextType mit folgenden Properties: isMobileNavOpen (Boolean, gibt an, ob die Mobile-Navigation offen ist), toggleMobileNav (Funktion ohne Parameter und ohne Rückgabewert, wechselt den Mobile-Nav-Status), viewport (String-Union-Type mit Werten "mobile", "tablet" oder "desktop"), scrollY (Zahl, aktuelle Scroll-Position des Fensters in Pixeln), isScrolledPast (Boolean, gibt an, ob Benutzer mehr als 100 Pixel gescrollt hat).

Erstelle eine konstante Variable AppContext durch createContext-Funktion, mit Typ AppContextType oder undefined als Default-Wert.

Implementiere die AppProvider-Komponente als Funktion, die ein ReactNode-Kind erhält. Im inneren Component-State:
- isMobileNavOpen startet mit false
- viewport startet mit "desktop"
- scrollY startet mit 0
- isScrolledPast startet mit false

Der erste useEffect-Hook mit leerem Dependency-Array wird beim Component-Mount ausgeführt. Im Hook wird ein Resize-Event-Listener auf dem Window-Objekt registriert. Der Handler berechnet die aktuelle Fensterbreite mittels window.innerWidth und setzt den Viewport-State basierend auf drei Breakpoints: Breiten unter 640px werden als "mobile" klassifiziert, Breiten zwischen 640 und 1023px als "tablet", und Breiten von 1024px oder höher als "desktop". Der Handler wird sofort aufgerufen beim Hook-Setup und der Event-Listener beim Component-Unmount entfernt.

Der zweite useEffect-Hook mit leerem Dependency-Array registriert einen Scroll-Event-Listener mit Throttling-Mechanik. Eine Variable throttleTimer speichert den Timer-Verweis, initial null. Der Handler prüft, ob ein Timer bereits aktiv ist und bricht ab, falls ja. Wenn nein, wird ein setTimeout mit 50ms Verzögerung erstellt. Innerhalb dieses Timeouts werden scrollY und isScrolledPast aktualisiert: scrollY erhält window.scrollY, isScrolledPast wird true, falls scrollY größer als 100 ist, sonst false. Nach dem Timeout wird throttleTimer auf null zurückgesetzt. Der Event-Listener wird beim Unmount entfernt und ein aktiver Timer mit clearTimeout gelöscht.

Die toggleMobileNav-Funktion wird mit useCallback memoized (leeres Dependency-Array). Die Funktion aktualisiert isMobileNavOpen zu seinem Inverse (nicht prev).

Der JSX-Return der Komponente rendert ein AppContext.Provider-Element mit value-Prop, die ein Objekt mit allen State-Werten (isMobileNavOpen, toggleMobileNav, viewport, scrollY, isScrolledPast) enthält. Die children-Props werden direkt als Child-Elemente eingefügt.

Exportiere eine Custom-Hook-Funktion useApp, die den AppContext-Wert abruft (mittels useContext), auf Existenz prüft und werfe einen Error mit der Nachricht "useApp must be used within AppProvider", falls der Context undefined ist. Falls vorhanden, gibt die Hook den Context als AppContextType zurück.

─ Beschreibung: createContext mit explizitem Type. Provider mit useState für alle Properties. useEffect für Resize (bestimmt Viewport), Scroll-Listener mit 50ms Throttle. Custom Hook mit Error-Guard.


TASK 2: Provider in Root Layout (CHIRURGISCH — BESTEHENDEN CODE BEWAHREN)
────────────────────────────────
PFLICHT: Lies Root-Layout VOLLSTÄNDIG bevor du es änderst.
ERWEITERE /app/layout.tsx — füge AppProvider NUR hinzu, entferne NICHTS:

IMPLEMENTIERUNG: Erweitere /app/layout.tsx, das eine default export Funktion RootLayout mit children-Prop vom Typ ReactNode ist. Das ist ein Server Component. Der Return ist JSX mit html-Element, head-Element mit meta charset UTF-8 und title "My App", body-Element als Top-Level Wrapper. Die AppProvider-Komponente wird als Child des body eingefügt und wrapped Header-Komponente, main mit children, sowie Footer-Komponente. AppProvider bleibt "use client"-Komponente, wird aber als Child eines Server Components aufgerufen (legitim in Next.js 13+). Der Provider wrapper nicht das html/body-Element selbst, sondern nur den Page-Content.

─ Root Layout bleibt Server Component. AppProvider wird als "use client" Child eingesetzt. Provider wrapet nur Content (Header, main, Footer), nicht html/body.


TASK 3: Komponenten mit Context verbinden
─────────────────────────────────────────
PRÜFE bestehende Komponenten (Header, MobileNav, Counter, etc.):
- Nutzen sie bereits Context oder Props für State?
- Falls ja: Dokumentiere die bestehende Struktur.
- Falls nein: Verbinde sie mit dem Context basierend auf den tatsächlichen Anforderungen.

Verwende für Breakpoints NICHT hart-codierte Werte (640px, 1024px), sondern:
- Breakpoints aus Tailwind-Config (SSOT)
- IntersectionObserver für responsive Verhalten
- oder CSS Media Queries aus bestehender Config

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK B — UI STATE CONTEXT ═══════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 4: UI State Provider (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)
─────────────────────────

PRÜFE: Existiert bereits ein UI-Context? → Falls JA: ERWEITERE um fehlende Properties.
Falls NEIN: Erstelle /lib/context/UIContext.tsx:

IMPLEMENTIERUNG: Erstelle eine zweite Client-Side-Datei unter /lib/context/UIContext.tsx. Markiere das Modul mit "use client"-Direktive. Importiere createContext, useContext, useState, useCallback aus React und ReactNode als Type.

Definiere ein TypeScript-Interface Toast mit drei Properties: id (String, eindeutige Kennung), type (Union-Type mit "success", "error" oder "info"), message (String, die anzuzeigende Nachricht).

Definiere ein TypeScript-Interface UIContextType mit folgenden Properties: modalStack (Array von Strings, speichert Modal-IDs in LIFO-Reihenfolge), openModal (Funktion mit modalId-Parameter, fügt Modal zum Stack hinzu), closeModal (Funktion mit modalId-Parameter, entfernt Modal aus Stack), toastQueue (Array von Toast-Objekten), addToast (Funktion mit type und message Parametern), removeToast (Funktion mit id-Parameter), isSearchOpen (Boolean, gibt an ob Search-UI offen ist), toggleSearch (Funktion zum Umschalten des Search-Status).

Erstelle eine konstante UIContext-Variable mittels createContext mit Typ UIContextType oder undefined.

Implementiere die UIProvider-Komponente als Funktion mit ReactNode-Children. Im State initialisiere: modalStack als leeres Array, toastQueue als leeres Array, isSearchOpen als false.

Die openModal-Funktion wird mit useCallback memoized. Sie aktualisiert modalStack durch Spread: neue Array mit allen vorherigen Elementen plus neue modalId am Ende (LIFO-Stack).

Die closeModal-Funktion wird mit useCallback memoized. Sie filtert modalStack: entfernt alle Einträge mit der gegebenen modalId.

Die addToast-Funktion wird mit useCallback memoized. Sie generiert eine eindeutige id als String der aktuellen Timestamp (Date.now().toString()). Sie fügt ein neues Toast-Objekt zur toastQueue hinzu. Nach 5000ms wird removeToast mit dieser id automatisch aufgerufen.

Die removeToast-Funktion wird mit useCallback memoized. Sie filtert toastQueue: entfernt Toast mit gegebener id.

Die toggleSearch-Funktion wird mit useCallback memoized. Sie invertiert isSearchOpen.

Der JSX-Return rendert ein UIContext.Provider-Element mit value-Prop, die alle State-Werte und Funktionen enthält. Children werden direkt eingefügt.

Exportiere eine Custom-Hook useUI, die den UIContext abruft, auf Existenz prüft und wirft Error mit "useUI must be used within UIProvider", falls undefined.

─ Zwei separate Provider: AppContext (Navigation, Scroll), UIContext (Modals, Toasts, Search). LIFO Modal-Stack. Toasts mit Auto-Dismiss 5s.


TASK 5: Toast System
────────────────────

PRÜFE: Existiert bereits eine Toast-Komponente? → Falls JA: ERWEITERN
Falls NEIN: Erstelle /components/ui/ToastContainer.tsx:

IMPLEMENTIERUNG: Erstelle /components/ToastContainer.tsx als "use client"-Komponente. Importiere useUI Hook aus /lib/context/UIContext.

Definiere Komponente ToastContainer ohne Props. Rufe useUI Hook auf und destrukturiere toastQueue und removeToast aus dem Context.

Der JSX rendert ein äußeres div mit Klassen: "fixed bottom-4 right-4 z-50 space-y-2" (positioniert im unteren rechten Eck des Viewports, 4 Einheiten Abstand, z-Index 50, vertikaler Abstand zwischen Toasts).

Iteriere über toastQueue Array mit map-Funktion. Für jeden Toast rendere ein inneres div mit:
- key Prop gesetzt auf toast.id
- className mit Basis-Klassen "px-4 py-2 rounded-md text-white animate-slide-in"
- Dynamische Klasse basierend auf toast.type: "bg-green-500" für success, "bg-red-500" für error, "bg-blue-500" für info
- Ein Flex-Wrapper mit Klassen "flex justify-between items-center"
- Ein span-Element mit toast.message
- Ein Button mit onClick-Handler ruft removeToast(toast.id) auf, Klassen "ml-2 text-white hover:opacity-70", Text ist "✕"

Das animate-slide-in ist eine benutzerdefinierte Tailwind-Animation, die von rechts eingleitet (definiere entsprechende @keyframes in Tailwind-Config oder CSS-Datei).

─ Fixed bottom-right. Farbkodiert (grün/rot/blau). Close-Button. Animation: slide-in von rechts (definiere @keyframes slide-in in Tailwind).

Ergänze /app/layout.tsx:

IMPLEMENTIERUNG: Ergänze /app/layout.tsx mit verschachtelten Providern. Der Root Layout bleibt Server Component. Wrapppe die bestehenden Komponenten (Header, main mit children, Footer) mit zwei verschachtelten Client-Side-Providern: Äußerer Provider ist AppProvider, innerer ist UIProvider. Füge nach Footer ein ToastContainer-Element hinzu, das ebenfalls ein "use client"-Komponente ist und die globale Toast-Anzeige rendert.

─ ToastContainer auch "use client", wird in Root Layout direkt gerendert.


TASK 6: Form Success Integration
─────────────────────────────────

ContactForm (/components/ContactForm.tsx — "use client"):
  ► Import useUI()
  ► Bei erfolgreichem Absenden: addToast("success", "Ihre Anfrage wurde erfolgreich gesendet!")
  ► Bei Fehler: addToast("error", "Fehler beim Absenden. Bitte versuchen Sie es erneut.")

RequestForm (/components/RequestForm.tsx — "use client"):
  ► Gleiche Integration

MultiStepForm (/components/MultiStepForm.tsx — "use client"):
  ► Bei Completion: addToast("success", "Anfrage abgeschlossen!")

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK C — URL PARAMETER SYNCHRONISATION ═══════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 7: URL Param Utilities
────────────────────────────

PRÜFE: Existiert bereits url-params.ts oder ähnliche URL-Utilities? → Falls JA: ERWEITERN
Falls NEIN: Erstelle /lib/utils/url-params.ts:

IMPLEMENTIERUNG: Erstelle /lib/utils/url-params.ts mit Utility-Funktionen für URL-Parameter-Manipulation. Importiere useRouter und useSearchParams aus "next/navigation".

Definiere Funktion getParam: Nimmt einen Parameter-Namen und URLSearchParams-Objekt, gibt den String-Wert oder null zurück mittels searchParams.get().

Definiere Funktion getNumberParam: Nimmt Parameter-Namen, URLSearchParams, und optionalen defaultValue (Zahl, Default 0). Ruft searchParams.get() auf, parst das Ergebnis als Integer (Base 10), gibt defaultValue zurück falls Wert null ist.

Definiere Funktion setParam: Nimmt Parameter-Namen, value (String oder null), router-Objekt, pathname-String, und URLSearchParams. Erstellt neues URLSearchParams-Objekt von existierendem. Falls value null, löscht Parameter mittels delete(). Falls value vorhanden, setzt Parameter mittels set(). Aufrufen von router.push() mit konstruiertem URL-String: pathname plus Query-String aus params.toString().

Definiere Funktion removeParam: Wrapper um setParam mit value=null.

Definiere Funktion buildQueryString: Nimmt Objekt mit String-Schlüsseln und String-oder-null-Werten. Erstellt neues URLSearchParams-Objekt. Iteriert über Objekt-Einträge. Falls Wert nicht null, setzt ihn in URLSearchParams. Gibt finalen Query-String via toString() zurück.

─ Type-sichere Helper für URL-Parameter. setParam ruft router.push auf (keine Reload).


TASK 8: Filter-State URL Sync
──────────────────────────────

Überarbeite /components/ServiceFilter.tsx (Phase 7 — "use client"):

IMPLEMENTIERUNG ServiceFilter-Komponente in /components/ServiceFilter.tsx als "use client"-Komponente. Importiere useRouter, useSearchParams aus "next/navigation" und setParam aus /lib/utils/url-params.

Die Komponente ruft useRouter und useSearchParams Hooks auf. Sie liest zwei URL-Parameter: "category" (Default leerer String), "sort" (Default "name"). Diese Werte sind Single Source of Truth für den Filter-Zustand.

Die handleCategoryChange-Funktion empfängt newCategory-String und ruft setParam auf, um Parameter "category" zu setzen, navigiert dabei zu "/services" mit aktualisierten Query-Parametern.

Die handleSortChange-Funktion empfängt newSort-String und ruft setParam auf für Parameter "sort", navigiert zu "/services".

Der JSX rendert ein div mit zwei select-Elementen. Erstes select für Category: value=category, onChange ruft handleCategoryChange, Optionen: "" (Alle Kategorien), "web" (Web), "mobile" (Mobile). Zweites select für Sort: value=sort, onChange ruft handleSortChange, Optionen: "name" (Nach Name), "popular" (Beliebtheit).

Der Schlüsselmechanismus: Kein lokaler State. URL ist Single Source of Truth. Benutzer kann Filter als Bookmark speichern und URLs teilen.

─ Kein lokaler State. URL ist SSOT (Single Source of Truth). Nutzer kann Filter als Bookmark speichern und teilen.

BlogFilter.tsx — gleiches Pattern.


TASK 9: Multi-Step Form State
──────────────────────────────

Überarbeite /components/MultiStepForm.tsx (Phase 5 — "use client"):

IMPLEMENTIERUNG MultiStepForm-Komponente in /components/MultiStepForm.tsx als "use client"-Komponente. Importiere useRouter, useSearchParams aus "next/navigation", getNumberParam und setParam aus /lib/utils/url-params.

Die Komponente ruft useRouter und useSearchParams auf. Sie liest URL-Parameter "step" als Zahl mit getNumberParam, Default 1. Dies ist Single Source of Truth für aktuelle Form-Stufe.

Die handleNextStep-Funktion empfängt stepData als Objekt (Form-Daten des aktuellen Steps). Sie ruft validateStep auf und prüft, ob alle erforderlichen Felder gefüllt sind. Falls Validierung fehlschlägt, wird addToast mit Error-Nachricht aufgerufen und die Funktion bricht ab. Falls erfolgreich, wird setParam aufgerufen mit "step" Parameter, neue Wert ist (currentStep + 1) als String, navigiert zu "/request".

Die handlePrevStep-Funktion prüft, ob currentStep größer 1 ist. Falls ja, ruft setParam auf mit "step" Parameter, neue Wert ist (currentStep - 1) als String.

Die validateStep-Hilfsfunktion prüft je nach Step-Nummer verschiedene erforderliche Felder: Step 1 erfordert name und email, Step 2 erfordert projectType und budget, Step 3 erfordert timeline und notes. Für alle anderen Steps wird true zurückgegeben.

Der JSX rendert ein form-Element mit bedingten Renderungen: Step 1 zeigt StepOne-Komponente mit onNext-Handler, Step 2 zeigt StepTwo mit onNext und onPrev, Step 3 zeigt StepThree mit onNext und onPrev.

Der Schlüsselmechanismus: URL-Parameter "step" ist Source of Truth für Navigation. Validierung verhindert Überspringen. Browser Zurück-Button funktioniert nativ.

─ URL-Parameter step=1/2/3. Validierung verhindert Skip. Browser Zurück-Button funktioniert.

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK D — SERVER/CLIENT BOUNDARY & VALIDATION ═════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 10: Data Flow Audit
────────────────────────

Dokumentiere /lib/data-flow-audit.md:

SERVICE PAGE (/app/services/page.tsx — Server Component)
├── Loader: getServices() (Phase 2)
├── Client Component: ServiceList
│   ├── Props: services[] (aus Server)
│   ├── Context: useApp() (Mobile/Scroll)
│   └── Client-only: ServiceFilter (URL-Sync)
└── Client Component: ServiceCard × N
    ├── Props: service (aus Server)
    └── No Context

REQUEST PAGE (/app/request/page.tsx — Server Component)
└── Client Component: MultiStepForm
    ├── URL-Param: step
    ├── Context: useUI() (Toast)
    └── No Direct Phase-2 Imports

RULE: Keine Client Component darf Phase-2 Getter direkt importieren. Daten fließen von Server → Props → Client.


TASK 11: Performance Optimierung
─────────────────────────────────

ServiceList.tsx:

const filteredServices = useMemo(
  () => services.filter((s) => !category || s.category === category),
  [services, category]
);

const handleFilterChange = useCallback((newCategory: string) => {
  setParam("category", newCategory, router, pathname, searchParams);
}, [router, pathname, searchParams]);

─ useMemo für Filter-Berechnung. useCallback für Event-Handler (wichtig bei Props-Weitergabe).

Context Splitting: AppContext und UIContext sind SEPARATE Provider, nicht ein Mega-Context. Dadurch re-rendern nur relevante Konsumer bei State-Änderung.


TASK 12: Error Boundary Integration
───────────────────────────────────

PRÜFE: Existiert bereits eine ErrorBoundary? → Falls JA: ERWEITERN
Falls NEIN: Erstelle /components/ErrorBoundary.tsx:

IMPLEMENTIERUNG: Erstelle /components/ErrorBoundary.tsx als "use client"-Komponente mit Class Component Syntax. Importiere Component und ReactNode aus React.

Definiere Props-Interface mit children als ReactNode.

Definiere State-Interface mit hasError (Boolean, gibt an, ob Error aufgetreten ist) und error (Error-Objekt oder null).

Implementiere ErrorBoundary als Class Component, das Component<Props, State> erbt. Im Constructor initialisiere State mit hasError=false und error=null.

Implementiere statische Methode getDerivedStateFromError: Empfängt ein Error-Objekt, gibt neues State-Objekt zurück mit hasError=true und error gesetzt auf das gefangene Error-Objekt. Diese Methode wird von React aufgerufen, wenn ein Child-Komponente einen Error wirft.

Implementiere Lifecycle-Methode componentDidCatch: Empfängt Error-Objekt, loggt es zu console.error mit Prefix "ErrorBoundary caught:".

Implementiere render-Methode: Prüft this.state.hasError. Falls true, rendert ein div mit Klassen "p-4 bg-red-100 border border-red-300 rounded", enthält h2 mit Text "Etwas ist schief gelaufen" und Klasse "text-red-800 font-bold", ein Absatz mit Error-Message aus this.state.error?.message und Klasse "text-red-700", und einen Button mit Text "Erneut versuchen", onClick-Handler setzt hasError zurück zu false mittels this.setState(). Falls hasError false ist, rendert this.props.children ohne Änderungen.

─ Class Component. Fängt Runtime-Errors in Children. Loggt zu console.error (kein Sentry). Retry-Button.

IMPLEMENTIERUNG: Verschachtele ErrorBoundary in /app/layout.tsx um alle bestehenden Komponenten. Die Struktur bleibt: AppProvider ist äußerstes Wrapper, UIProvider wrapped ErrorBoundary, ErrorBoundary wrapped Header, main mit children, Footer, und ToastContainer.


TASK 13: TypeScript Strict Audit
─────────────────────────────────

✓ Alle Context-Typen explizit (AppContextType, UIContextType, Toast)
✓ useContext MUSS Type-Guard haben: if (!context) throw new Error(...)
✓ Custom Hooks (useApp, useUI) haben explizite Return-Types
✓ url-params.ts nutzt Record<string, string | null> für Type-Safety
✓ SearchParams vom Router ist immer URLSearchParams, nie any

Keine Type-Assertions wie (... as any). Alles Strict.

═══════════════════════════════════════════════════════════════════════════════
═══ ATOMIC VALIDATION ═══════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

□ npm run build — ZERO Fehler
□ npx tsc --noEmit — ZERO Fehler
□ npm run dev — App startet ohne console.error
□ Header zeigt Scroll-Effekt: Nach 100px Scroll wechselt Hintergrund
□ Mobile Nav öffnet/schließt via Context (funktioniert auf Tablet, Auto-Close)
□ ServiceFilter: Kategorie-Wechsel aktualisiert URL
□ BlogFilter: URL-Parameter sind bookmarkbar
□ MultiStepForm: URL zeigt step=1/2/3, Browser-Navigation funktioniert
□ ContactForm erfolgreich: Toast "Anfrage gesendet!" erscheint (grün)
□ ContactForm Fehler: Toast "Fehler..." erscheint (rot)
□ Toast auto-dismisses nach 5s
□ Keine console.warnings wie "useContext outside Provider"
□ Counter: Auf Mobile zeigt nur 3 Items, auf Desktop 5
□ Viewport-Change (Resize): Layout passt sich an, isMobileNavOpen wird false auf Desktop

═══════════════════════════════════════════════════════════════════════════════
═══ SELF-OPTIMIZING LOOP & HANDOFF ════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

Nach Completion: Aktualisiere .ai-expansion-context.md und .expansion-state.md:

.ai-expansion-context.md:
  ► Notiere: "Phase 9 Complete: AppContext (Mobile, Scroll), UIContext (Toasts, Modals), URL-Param Sync, Error Boundary"
  ► Alle Komponenten: use AppProvider + UIProvider Wrapper
  ► Filter und Multi-Step-Forms nutzen URL-Sync

.expansion-state.md:
  ► Prüfe: Sind alle alle bestehenden Komponenten (Anzahl ergibt sich aus dem Code) in Context-Dependencies dokumentiert?
  ► Notiere: Welche Komponenten sind noch nicht auf Context migriert?
  ► TODO Phase 10: Final Audit & Consolidation

Code ist SSOT (Single Source of Truth): URL-Parameter für Filter, Context für App-State, Props für Server-Daten.

═══════════════════════════════════════════════════════════════════════════════
═══ COMPLIANCE CHECKLIST ══════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

□ AppContext erstellt mit createContext + Provider + useApp Hook
□ AppContext nutzt useState für isMobileNavOpen, viewport, scrollY, isScrolledPast
□ Scroll-Listener mit 50ms Throttle implementiert
□ Resize-Listener für Viewport-Erkennung
□ AppProvider in Root Layout eingesetzt
□ Header nutzt isScrolledPast für visuelle Änderung
□ MobileNav nutzt isMobileNavOpen aus Context statt lokalem State
□ UIContext erstellt mit modalStack, toastQueue, isSearchOpen
□ UIProvider in Root Layout eingesetzt
□ ToastContainer rendert toastQueue mit Auto-Dismiss
□ Toast-Typen: success (grün), error (rot), info (blau)
□ ContactForm/RequestForm rufen addToast() auf
□ url-params.ts mit getParam, setParam, removeParam, getNumberParam
□ ServiceFilter/BlogFilter nutzen URL-Parameter
□ MultiStepForm nutzt URL-Parameter für step Tracking
□ Data-Flow-Audit dokumentiert Server/Client Grenzen
□ useMemo für Filter-Berechnung
□ useCallback für Event-Handler
□ ErrorBoundary implementiert
□ ErrorBoundary wrapet kritische Bereiche
□ TypeScript Strict: Kein any, explizite Types
□ Context Guards: throw Error wenn Provider fehlt
□ npm run build passt
□ npx tsc --noEmit passt
□ Keine console.warnings

═══════════════════════════════════════════════════════════════════════════════

CLOSING

Phase 9 ist complete. Alle alle bestehenden Komponenten (Anzahl ergibt sich aus dem Code) sind jetzt über Context vernetzt. Mobile Navigation funktioniert über AppContext, Filter-States sind in URLs synchronisiert und teilbar, Toasts informieren Nutzer über Success/Error. Server/Client Boundary ist klar definiert: Phase-2 Daten fließen serverseitig, Client Components nutzen Props + Context, niemals direkte Getter-Imports.

Phase 10 führt das finale Konsolidierungs-Audit durch: Überprüfung aller State-Flows, Performance-Optimierung der Re-Render-Zyklen, und Vorbereitung der 30 Optimierungs-Phasen.


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-19 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY 

WCAG AAA COMPLIANCE ULTRATHINK-SPECIFICATION:

Phase-09 soll WCAG AAA (Level AAA) auf ALLEN neuen Komponenten erreichen.

CRITICAL SUCCESS CRITERIA (CSC):

1. WCAG 1.4.3 Contrast (Enhanced): Min. 7:1 für Normal Text, 4.5:1 für Large Text
   Implementierung:
   □ Color-Palette: Überprüfe alle Farben mit https://webaim.org/resources/contrastchecker/
   □ Primary + Background: 7:1+ kontrast (nicht nur 4.5:1)
   □ Buttons, Links: Text-color vs button-bg muss 4.5:1+ sein
   □ Grauer Text: Nicht heller als #666 auf weißem Hintergrund

2. WCAG 1.4.6 Contrast (Enhanced): Video-Captions, Audio-Descriptions
   □ Alle Videos: Captions vorhanden (in HTML5 <track> element)
   □ Audio-only: Transcript verlinkt auf page
   □ Fallback: Wenn captions unavailable → Text-alternative bereitgestellt

3. WCAG 1.4.8 Visual Presentation:
   □ Font-Größe: Min. 14px (Nicht:10px, 12px auf irgendwelche Text)
   □ Line-spacing: Min. 1.5x (tailwind: leading-relaxed)
   □ Paragraph-spacing: Min. 1.5x der font-size
   □ Column-width: Max. 80 characters (für lange Texte)

4. WCAG 2.4.7 Focus Visible:
   □ ALLE interaktiven Elemente haben :focus-visible styles
   □ Focus-ring sichtbar: outline-2 outline-offset-2 outline-blue-500
   □ Fokus-Reihenfolge: Logisch (Tab durch Seite, links→rechts, oben→unten)
   □ Kein Fokus-Trap: Letzte Element Tab → ganz nach oben

5. WCAG 2.5.5 Target Size:
   □ Alle Click-targets: Min. 44x44px (WCAG AAA requirement)
   □ Icons, Buttons, Links: Nicht kleiner als 44px
   □ Edge-Case: Icons in Text-Flow mit spacing dürfen kleiner sein, solange spacing groß

6. WCAG 3.3.4 Error Prevention (Level AAA):
   □ Forms: Validierung BEVOR Submit
   □ Review-Step: Bei kritischen Aktionen (Delete, Purchase) → Confirmation
   □ Undo-Möglichkeit: Falls möglich (z.B. Delete → "Undo for 5 seconds")
   □ Error-Messages: Spezifisch, nicht "Error" (z.B. "Email format required: example@domain.com")

TESTING-PROTOKOLL:

□ axe-core: npm test:a11y → 0 violations, 0 warnings
  Nutze: @axe-core/react oder axe-core CLI
  
□ WAVE Browser Extension:
  https://wave.webaim.org/extension/ → 0 Errors, minimal Contrast warnings
  
□ NVDA (Windows) oder VoiceOver (Mac):
  □ Navigate mit Tab, Arrow keys, Screen-reader auf
  □ Alle Form-Labels readable
  □ Landmark-Navigation funktioniert (<main>, <nav>, <aside>)
  
□ Lighthouse (DevTools):
  Accessibility Score >= 95 (Target: 100)
  
□ Manual Keyboard-Navigation:
  □ Tab durch alle pages
  □ No Keyboard Trap
  □ Enter/Space funktioniert auf buttons, links
  
□ Color-Contrast Checker:
  JEDEN Layer MANUELL gegen WebAIM prüfen wenn Design-Change


EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-09 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-10)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-20 → EXPANSION-PHASE-10.md
   → Lese EXPANSION-PHASE-10.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-10

═══ PHASE SEQ-09 → SEQ-10: HANDOFF AKTIV ═══
