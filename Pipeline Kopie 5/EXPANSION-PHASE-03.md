Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Service-Seiten auf Premium-Niveau zu detaillieren. Jede Service-Seite muss mit echten Datenmodellen verkabelt, responsiv und content-reich implementiert werden. Erstelle einen Implementierungsplan mit Seiten-Architektur, Komponenten-Komposition und Content-Integration.

═══ CHAIN-LINK-HEADER ═══ SEQ-13 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-12 → EXPANSION-PHASE-02.md
→ NÄCHSTE: SEQ-14 → EXPANSION-PHASE-04.md
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

Analysiere die bestehenden UI-Komponenten aus Phase 1 und 2. Identifiziere Komponenten-Lücken, die durch die bestehende Route-Struktur und Daten-Layer notwendig sind. Erweitere bestehende Komponenten oder erstelle NEUE Komponenten NUR wenn sie tatsächlich von den bestehenden Routes benötigt werden. KEINE künstlichen Komponenten-Quotas ("alle bestehenden Komponenten (Anzahl ergibt sich aus dem Code)"). Die Komponenten-Menge ergibt sich aus dem tatsächlichen Bedarf der Anwendung.

═══ PHASE 3: COMPONENT ECOSYSTEM — ADAPTIVE KOMPONENTEN FÜR BESTEHENDE ANFORDERUNGEN ═══

ULTRATHINK-TASK 0: EXPANSION-SYNC & DEEP-CODE-DISCOVERY (CODE-FIRST)

PFLICHT — Lies den GESAMTEN bestehenden Code BEVOR du eine einzige Komponente erstellst:

Aktion 0.1: KOMPONENTEN-INVENTUR (KOMPLETT)
  → Scanne ALLE Verzeichnisse: /components/, /src/components/, /src/shared/, /src/ui/
  → Liste JEDE existierende Komponente: [NAME] → [PFAD] → [PROPS] → [VERWENDET VON]
  → Identifiziere: Gibt es bereits Button, Input, Card, Header, Footer, etc.?
  → WENN eine Komponente bereits existiert die du erstellen sollst: ERWEITERN, nicht neu erstellen

Aktion 0.2: DATEN-LAYER CHECK
  → Lies .pipeline-master-state.md (Phase 2 Daten-Layer)
  → Welche Types/Interfaces sind definiert? Welche Getter existieren?
  → Welche Daten können die neuen Komponenten nutzen?

Aktion 0.3: STYLING-INVENTUR
  → Lies tailwind.config KOMPLETT (Theme-Farben, Custom-Utilities)
  → Lies globals.css / app.css (Custom Properties, bestehende Klassen)
  → NEUE Komponenten MÜSSEN das bestehende Farbschema nutzen, nicht hardcodierte Werte

Aktion 0.4: npm run build BASELINE — MIT VOLLSTÄNDIGEN METRIKEN
  Protokoll:
  □ npm run build, speichere Output mit Timestamp
  □ Notiere: build duration (Sekunden), output size (KB)
  □ Notiere: Anzahl bundled files, tree-shaking effectiveness
  □ Diese Metriken werden später in Phase 3 Abschluss verwendet, um Performance-Impact zu messen
  □ Wenn build FAIL: FIX JETZT bevor Phase 3 anfängt

Aktion 0.5 — ABGLEICH-TABELLE erstellen: Erstelle eine strukturierte Tabelle, die jede zu erstellende oder zu erweiternde Komponente dokumentiert. Die Tabelle hat drei Spalten: "Zu erstellende Komponente" (der Komponenten-Name), "Existiert bereits?" (JA oder NEIN), und "Aktion" (was zu tun ist). Beispiel: Button existiert bereits unter /components/UI/Button.tsx, also ist die Aktion "ERWEITERN (Props hinzufügen)". ServiceCard existiert nicht, also ist die Aktion "NEU ERSTELLEN". Diese Abgleich-Tabelle wird in .pipeline-master-state.md dokumentiert, um Duplikationen zu vermeiden und sicherzustellen, dass jede Komponente genau einmal gepflegt wird.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK A: KOMPONENTEN-ANALYSE UND ADAPTIVE ERWEITERUNG ═══

ULTRATHINK-TASK 1: KOMPONENTEN-INVENTUR UND BEDARFSANALYSE

VOR JEDER Komponenten-Erstellung:

Aktion 1.1: BESTEHENDE KOMPONENTEN KATALOGISIEREN
  - Scanne alle Komponenten-Verzeichnisse (/components/, /src/components/, etc.)
  - Für JEDE existierende Komponente: [NAME] → [PFAD] → [VERWENDUNG in Routes]
  - Erstelle KOMPONENTEN-BEDARFS-MATRIX:
    | Route | Komponenten benötigt | Sind vorhanden? | Aktion |
  - Diese Matrix bestimmt, welche neuen Komponenten tatsächlich benötigt werden

Aktion 1.2: DESIGN-SYSTEM ANALYSIEREN
  - Lies tailwind.config.ts: Welche Theme-Farben sind definiert?
  - Lies globals.css: Welche Custom Properties / Klassen gibt es?
  - Dokumentiere: Alle neuen Komponenten MÜSSEN das bestehende Design-System nutzen

ULTRATHINK-TASK 2: KOMPONENTEN-ERSTELLUNG — NUR NACH BEDARF

Aktion 2.1: KOMPONENTEN-KLASSIFIZIERUNG
  - FÜR JEDE benötigte Komponente (aus der Bedarfs-Matrix):
    → Falls bereits vorhanden: ERWEITERE sie mit fehlenden Props/Varianten
    → Falls nicht vorhanden: ERSTELLE sie — mit striktem TypeScript, Server/Client-Grenzen, WCAG AAA

Aktion 2.2: ATOMIC COMPONENTS (TEXT, FORM, INTERACTION)
  - Heading / Paragraph / Label: Falls benötigt, nutze semantisches HTML
  - Button / Input / Textarea / Checkbox: Falls benötigt, implementiere mit Theme-Farben
  - KEINE vorgefertigten Designs — jede Komponente wird NACH Projekt-Bedarf gestaltet

TYPESCRIPT: Erstelle einen Button-Komponenten mit striktem TypeScript. Definiere zuerst ein Interface namens ButtonProps, das React.ButtonHTMLAttributes<HTMLButtonElement> erweitert, um alle nativen Button-Attribute zu unterstützen. Zusätzliche Props sind: children (erforderlich, React.ReactNode), variant (optional, Literal-Union: 'primary', 'secondary', 'outline', 'ghost', 'link', Default 'primary'), size (optional, Literal-Union: 'sm', 'md', 'lg', 'xl', Default 'md'), loading (optional boolean), disabled (optional boolean), asChild (optional boolean, für Polymorphismus), icon (optional React.ReactNode), iconPosition (optional, 'left' oder 'right', Default 'left'). Implementiere die Komponente als React.forwardRef für vollständige HTML-Button-Kompatibilität. Destrukturiere die Props mit Default-Werten. Definiere baseClasses als Tailwind-String mit gemeinsamen Stilen: gerundete Ecken, Transitions, Font-Weight, Flexbox-Layout, Focus-Ring für Keyboard-Navigation. Definiere variantClasses als Objekt mit Farb-Varianten für jede Variante: primary ist blau mit White-Text, secondary grau, outline hat Border, ghost hat minimale Styles, link ist unterstrichen. Definiere sizeClasses als Objekt mit Padding und Schriftgrößen für jede Größe. Definiere disabledClasses als Opacity-Reduktion wenn disabled oder loading. Konstruiere den content als JSX, das optional das Icon links oder rechts um children herum platziert und einen Spinner bei loading anzeigt. Render einen native HTML-button mit ref, disabled-Attribut, kombinierte className, aria-busy für Loading-State, aria-disabled für Disabled-State, und alle zusätzlichen Props.

ACCESSIBILITY (WCAG AAA): Die Button-Komponente erfüllt Anforderungen auf AAA-Niveau. Verwende ein semantisches HTML-button-Element, nicht <div role="button">. Implementiere focus:ring-2 focus:ring-offset-2 Tailwind-Klassen für sichtbaren Keyboard-Navigation-Ring. Nutze aria-busy={loading} damit Screenreader "Button, loading" ansagen. Nutze aria-disabled={disabled || loading} als redundante aber hilfreiche zusätzliche Information für Assistive Technologies. Text-Kontrast: Primary-Button mit bg-blue-600 und white-Text hat 8.5:1 Kontrast-Verhältnis, erfüllt WCAG AAA. Mindestens-Höhe: MD-Size durch py-2 (padding-y-2) ergibt 44px Mindesthöhe, minimum Touch-Target-Größe. Icons erhalten aria-hidden="true", um doppelte Ansage durch Screenreader zu vermeiden. Das finale Rendering erzeugt einen vielseitigen Button mit vollständiger Icon-Unterstützung, loading-State, und barrierefreier Bedienung.

Input-Komponente (/components/ui/Input.tsx, use client): Erstelle eine Input-Komponente mit Props für type (optional, einer von 'text', 'email', 'tel', 'url', 'number', 'password'), placeholder (optional String), error (optional boolean), helperText (optional String für Fehlertext), disabled (optional boolean), className (optional zusätzliche Klassen), value (optional String), onChange (optional Callback-Funktion), und alle weiteren HTML-Input-Attribute. Tailwind-Styles: border-2 border-gray-300 für Standard-Border, rounded-lg für gerundete Ecken, px-3 py-2 für Padding, focus:outline-none focus:border-blue-500 für Focus-State. Falls error-Prop true ist, ändere border auf border-red-500 und focus:border auf focus:border-red-600. Render als Div-Container mit Input-Element (className="w-full") und optionalem Helper-Text Paragraph unter dem Input mit roten Farben und kleiner Schriftgröße. Output ist ein barrierefreies Text-Input mit Error-State-Unterstützung.

Textarea-Komponente (/components/ui/Textarea.tsx, use client): Wird im selben Muster wie Input implementiert.
  Props: { placeholder?: string, error?: boolean, disabled?: boolean, className?: string, rows?: number, value?: string, onChange?: (e) => void, ...rest }
  Tailwind: border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500, font-sans resize-none oder resize-vertical
  Render: <textarea className="w-full">
  Output: Multi-line Text-Input mit gleicher Styling-Konsistenz wie Input

Datei: /components/ui/Select.tsx (use client)
  Props: { options: Array<{label: string, value: string}>, placeholder?: string, disabled?: boolean, className?: string, value?: string, onChange?: (value: string) => void, ...rest }
  Tailwind: border-2 border-gray-300 rounded-lg px-3 py-2 bg-white appearance-none cursor-pointer
  Render: <select className="w-full pr-10"> (pr-10 für Dropdown-Pfeil)
  Output: Native Select mit Tailwind-Styling

Datei: /components/ui/Checkbox.tsx (use client)
  Props: { id?: string, label?: string, checked?: boolean, onChange?: (checked: boolean) => void, disabled?: boolean, className?: string }
  Tailwind: w-4 h-4 accent-blue-600 rounded, checked:bg-blue-600 checked:border-blue-600
  Render: <div className="flex items-center gap-2"> mit <input type="checkbox"> und <label>
  Output: Barrierefreie Checkbox mit Label

ULTRATHINK-TASK 3: VISUAL ATOMS (Icon, Avatar, Divider, Skeleton, Spinner)

Datei: /components/ui/Icon.tsx (Server Component)
  Props: { name?: string, size?: 'sm'|'md'|'lg'|'xl', className?: string, children?: React.ReactNode }
  Tailwind: size='sm' → w-4 h-4, size='md' → w-6 h-6, size='lg' → w-8 h-8, size='xl' → w-12 h-12
  Render: Wrapper <svg> oder <span className="inline-flex"> für externe Icons
  Output: Konsistente Icon-Größen, kompatibel mit Lucide-Icons

Datei: /components/ui/Avatar.tsx (Server Component)
  Props: { src?: string, initials?: string, alt?: string, size?: 'sm'|'md'|'lg'|'xl', className?: string }
  Tailwind: size='sm' → w-6 h-6, size='md' → w-8 h-8, size='lg' → w-12 h-12, size='xl' → w-16 h-16, rounded-full
  Fallback: Wenn src fehlt, zeige <div className="flex items-center justify-center bg-blue-600 text-white font-bold">{initials}</div>
  Render: <img className="object-cover"> oder Fallback-<div>
  Output: Runde Profilbilder mit Initialen-Fallback

Datei: /components/ui/Divider.tsx (Server Component)
  Props: { orientation?: 'horizontal'|'vertical', spacing?: 'sm'|'md'|'lg', className?: string }
  Tailwind: orientation='horizontal' → h-px bg-gray-200 w-full, spacing='md' → my-4, orientation='vertical' → w-px bg-gray-200 h-full, spacing='md' → mx-4
  Render: <div> oder <hr>
  Output: Visuelle Trennlinien

Datei: /components/ui/Skeleton.tsx (Server Component)
  Props: { width?: string|number, height?: string|number, className?: string, circle?: boolean }
  Tailwind: bg-gray-200 animate-pulse, circle=true → rounded-full
  Render: <div className="rounded-lg animate-pulse bg-gray-200" style={{width, height}}>
  Output: Loading-Platzhalter

Datei: /components/ui/Spinner.tsx (use client)
  Props: { size?: 'sm'|'md'|'lg', className?: string }
  Tailwind: size='md' → w-6 h-6, animate-spin border-4 border-gray-300 border-t-blue-600 rounded-full
  Render: <div className="inline-block animate-spin">
  Output: Lade-Spinner

ULTRATHINK-TASK 4: LAYOUT ATOMS (Container, Section, Grid, Stack)

Datei: /components/ui/Container.tsx (Server Component)
  Props: { children: React.ReactNode, className?: string, size?: 'sm'|'md'|'lg'|'full' }
  Tailwind: size='sm' → max-w-2xl, size='md' → max-w-4xl, size='lg' → max-w-7xl, mx-auto px-4 sm:px-6 lg:px-8
  Render: <div className="mx-auto px-4">
  Output: Zentrierter Content mit konsistenten Rändern

Datei: /components/ui/Section.tsx (Server Component)
  Props: { children: React.ReactNode, className?: string, spacing?: 'sm'|'md'|'lg', background?: 'white'|'gray'|'blue', id?: string }
  Tailwind: spacing='md' → py-16, spacing='lg' → py-24, background='gray' → bg-gray-50, background='blue' → bg-blue-50
  Render: <section className="w-full"> mit className-Zusammenbau
  Output: Horizontale Content-Abschnitte mit konsistenten Abständen

Datei: /components/ui/Grid.tsx (Server Component)
  Props: { children: React.ReactNode, columns?: 1|2|3|4, gap?: 'sm'|'md'|'lg', className?: string, responsive?: boolean }
  Tailwind: columns=2 → grid-cols-2, columns=3 → grid-cols-3, columns=4 → grid-cols-4, gap='md' → gap-6, responsive=true → grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  Render: <div className="grid">
  Output: Responsive Grid-Layout für Card-Sammlungen

Datei: /components/ui/Stack.tsx (Server Component)
  Props: { children: React.ReactNode, direction?: 'vertical'|'horizontal', gap?: 'sm'|'md'|'lg', className?: string, align?: 'start'|'center'|'end', justify?: 'start'|'center'|'between'|'end' }
  Tailwind: direction='vertical' → flex flex-col, direction='horizontal' → flex flex-row, gap='md' → gap-6, align='center' → items-center, justify='between' → justify-between
  Render: <div className="flex">
  Output: Flexible Flex-basierte Layout-Kombination

═══ BLOCK B: MOLECULE COMPONENTS — FEATURE BLOCKS ═══

ULTRATHINK-TASK 5: CARD MOLECULES (ServiceCard, BlogCard, TeamCard, TestimonialCard)

Datei: /components/cards/ServiceCard.tsx (Server Component)
  Props: { service: Service } (wobei Service aus Phase 2 Getter kommt)
  Render: <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"> mit Heading (h3), Paragraph (size='base'), Badge (variant aus service.category), Button (variant='outline', text: "Mehr erfahren")
  Tailwind: border-gray-200, rounded-lg, p-6, hover:shadow-lg
  Output: Lesbar gestaltete Service-Card, importiert und rendert echte Daten

Datei: /components/cards/BlogCard.tsx (Server Component)
  Props: { post: BlogPost }
  Render: <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"> mit Bild-Platzhalter (Skeleton oder <div className="w-full h-48 bg-gray-300">), Heading (h3, text: post.title), Paragraph (post.excerpt), <div> mit Text (post.date formatiert), ReadingTime (berechnet aus post.content), Author (post.author)
  Tailwind: border-gray-200, rounded-lg, overflow-hidden
  Output: Blog-Preview mit Metadaten

Datei: /components/cards/TeamCard.tsx (Server Component)
  Props: { member: TeamMember }
  Render: <div className="text-center"> mit Avatar (src: member.image, initials), Heading (h4, text: member.name), Paragraph (size='sm', text: member.role), Paragraph (size='sm', muted=true, text: member.bio)
  Tailwind: text-center, p-4
  Output: Professionelle Team-Vorstellung

Datei: /components/cards/TestimonialCard.tsx (Server Component)
  Props: { testimonial: {quote: string, client: string, rating: number, company: string} }
  Render: <div className="border-l-4 border-blue-600 pl-6 py-4"> mit Paragraph (size='lg', text: `"${testimonial.quote}"`), <div> mit Star-Rating (rendere 5 Stars, gefüllt bis rating), Paragraph (size='sm', font-bold, text: testimonial.client), Paragraph (size='sm', muted=true, text: testimonial.company)
  Tailwind: border-l-4 border-blue-600 pl-6 py-4, bg-gray-50 rounded-r
  Output: Kundenempfehlung mit Sternen

ULTRATHINK-TASK 6: NAVIGATION MOLECULES (NavLink, MobileNavItem, BreadcrumbItem, FooterLinkGroup)

Datei: /components/nav/NavLink.tsx (use client)
  Props: { href: string, label: string, active?: boolean, onClick?: () => void }
  Render: <Link href={href}> mit className abhängig von active
  Tailwind: active → text-blue-600 border-b-2 border-blue-600, inactive → text-gray-700 hover:text-blue-600 transition-colors
  usePathname() nutzen um active zu bestimmen (if usePathname() === href)
  Output: Header-Navigation mit aktiven Link-Styling

Datei: /components/nav/MobileNavItem.tsx (use client)
  Props: { label: string, href?: string, submenu?: Array<{label: string, href: string}>, onClick?: () => void }
  Render: Wenn submenu vorhanden, <button onClick={() => setOpen(!open)}> mit Chevron-Icon und Accordion-Animation. Wenn kein submenu, <Link href={href}>
  Tailwind: py-3 px-4 border-b border-gray-200 flex items-center justify-between
  Output: Mobile-Navigations-Items mit Accordion-Support

Datei: /components/nav/BreadcrumbItem.tsx (Server Component)
  Props: { label: string, href?: string, active?: boolean }
  Render: <li> mit <Link href={href}> oder <span>, Trenner "/" zwischen Items
  Tailwind: text-sm text-gray-600, active → text-gray-900 font-medium
  Output: Breadcrumb-Navigation für Wayfinding (vorbereitet für Phase 4 Schema.org)

Datei: /components/nav/FooterLinkGroup.tsx (Server Component)
  Props: { title: string, links: Array<{label: string, href: string}> }
  Render: <div> mit Heading (h4, text: title), <ul> mit <li><Link> für jeden Link
  Tailwind: heading: font-semibold text-gray-900, links: text-gray-600 hover:text-blue-600
  Output: Footer-Spalten-Layout

ULTRATHINK-TASK 7: FORM MOLECULES (FormField, FormGroup, ContactForm)

Datei: /components/forms/FormField.tsx (use client)
  Props: { label: string, error?: string, children: React.ReactNode, required?: boolean, helperText?: string }
  Render: <div className="mb-6"> mit <Label>, children (Input/Textarea/Select), optionaler Fehler-Nachricht
  Tailwind: mb-6, error: text-red-500 text-sm
  Output: Wiederverwendbarer Form-Field-Wrapper

Datei: /components/forms/FormGroup.tsx (Server Component)
  Props: { title?: string, children: React.ReactNode, className?: string }
  Render: <fieldset> mit optionaler <legend className="font-semibold mb-4">, dann children
  Output: Gruppiere mehrere FormFields zusammen

Datei: /components/forms/ContactForm.tsx (use client)
  Props: { onSuccess?: () => void }
  State: { name: '', email: '', phone: '', subject: '', message: '', gdpr: false, loading: false }
  Render: <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"> mit FormField für jedes Feld, Checkbox für DSGVO (name="gdpr", required), Button (variant='primary', type='submit', loading={loading})
  Tailwind: max-w-2xl mx-auto
  Output: Voll funktionales Contact-Formular mit Formspree-Integration und DSGVO-Checkbox

═══ BLOCK C: ORGANISM COMPONENTS — PAGE STRUCTURES ═══

ULTRATHINK-TASK 8-1: Header & Footer (Tasks 8, 9)

Datei: /components/layout/Header.tsx (use client)
  Props: {}
  State: { mobileMenuOpen: boolean }
  Render: <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
  — Desktop Nav: <nav className="hidden md:flex gap-8"> mit NavLinks für Home, Services, Blog, About, Contact
  — Mobile Hamburger: <button className="md:hidden"> mit 3-Zeilen-Icon, onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  — Logo: Text oder Image (nutze vorhandenes Logo wenn verfügbar)
  — CTA Button: <Button variant='primary'>Kontakt</Button>
  Tailwind: sticky top-0 z-50, flex items-center justify-between, py-4 px-6
  Output: Responsive Header mit Mobile-Menü-Trigger

Datei: /components/layout/Footer.tsx (Server Component)
  Props: {}
  Render: <footer className="bg-gray-900 text-white py-16"> mit 4-Column Grid:
  — Spalte 1: Firmeninfo (Logo, kurze Beschreibung, Kontakt-Info: Email, Phone)
  — Spalte 2: Leistungen (Links zu Services)
  — Spalte 3: Unternehmen (Links zu About, Team, Blog)
  — Spalte 4: Rechtliches (Links zu Impressum, Datenschutz, AGB)
  — Bottom: Copyright-Text mit dynamischem Jahr, Sekundär-Navigation
  Tailwind: bg-gray-900, text-white, grid-cols-4 responsive, gap-12
  Output: Vollständiger Footer mit allen Link-Gruppen

ULTRATHINK-TASK 9: MOBILE NAVIGATION & PAGE SECTIONS (Tasks 10, 11)

Datei: /components/layout/MobileNav.tsx (use client)
  Props: { isOpen: boolean, onClose: () => void }
  Render: <div className={isOpen ? "fixed inset-0 z-40 bg-black/50" : "hidden"}> mit <nav className="fixed left-0 top-0 h-full w-64 bg-white">
  — Close Button: <button onClick={onClose}> mit X-Icon
  — All NavLinks als MobileNavItems mit Accordion für Untermenüs
  — CTA Button: <Button variant='primary' className="w-full mt-6">Kontakt</Button>
  Tailwind: fixed, inset-0, z-40, bg-black/50 für Overlay, w-64 für Drawer
  Output: Overlay-basierte Mobile-Navigation

Datei: /components/sections/HeroSection.tsx (Server Component)
  Props: { title?: string, subtitle?: string, ctaText?: string, ctaHref?: string, backgroundImage?: string }
  Render: <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  — Container mit Heading (variant='h1', text: title || "Willkommen"), Paragraph (size='lg', text: subtitle), Button (variant='primary', text: ctaText || "Jetzt anfragen")
  Tailwind: py-32, bg-gradient-to-r from-blue-600 to-blue-800, text-white, relative
  Output: Eye-catching Hero mit CTA

Datei: /components/sections/ServiceGrid.tsx (Server Component)
  Props: { limit?: number }
  Render: Nutze getServices() Getter um Services zu laden, limit anwenden, dann <Grid columns={3} responsive> mit ServiceCards
  Output: Dynamische Service-Anzeige

Datei: /components/sections/TestimonialSlider.tsx (Server Component)
  Props: { testimonials?: Array<...> }
  Render: Platzhalter für Karussell-Logik (Phase 5), zeige vorerst 3 statische TestimonialCards in <Grid columns={1}>
  Output: Testimonial-Section mit Platzhalter

Datei: /components/sections/BlogPreview.tsx (Server Component)
  Props: { limit?: number }
  Render: Nutze getBlogPosts() Getter, limit=3 default, <Grid columns={3} responsive> mit BlogCards
  Output: Homepage-Blog-Section

Datei: /components/sections/FAQSection.tsx (use client)
  Props: { faqs?: Array<{question: string, answer: string}> }
  State: { openIndex: number | null }
  Render: <Section> mit Heading, dann <div> mit FAQ-Accordion-Items
  Output: Aufklappbar FAQ-Sektion

Datei: /components/sections/CTASection.tsx (Server Component)
  Props: { heading?: string, text?: string, buttonText?: string, buttonHref?: string, variant?: 'blue'|'gray' }
  Render: <Section spacing='lg' background={variant === 'blue' ? 'blue' : 'gray'}> mit Heading, Paragraph, Button
  Tailwind: text-center, max-w-2xl mx-auto
  Output: Call-to-Action Banner-Sektion

═══ BLOCK D: INTEGRATION & VALIDATION ═══

ULTRATHINK-TASK 10: PAGE COMPOSITION (CODE-FIRST — BESTEHENDE SEITEN ERWEITERN)

PFLICHT: Lies JEDE bestehende Seiten-Datei VOLLSTÄNDIG bevor du sie änderst.
Ersetze NICHT das bestehende Layout — ERGÄNZE es mit den neuen Komponenten.
Behalte bestehende Funktionalität bei, füge nur die fehlenden Sections hinzu.

Für JEDE Route:
  → Lies die GESAMTE Datei zuerst
  → Identifiziere was bereits vorhanden ist
  → ERGÄNZE nur die fehlenden Sections
  → Route-Pfade gemäß Framework-Mapping übersetzen

Beispiel-Komposition (anpassen an bestehenden Code):
  — /: HeroSection + ServiceGrid + TestimonialSlider + BlogPreview + CTASection
  — Services-Übersicht: Heading + ServiceGrid
  — Service-Detail: Heading + Content aus Getter + RelatedServices
  — Blog: Heading + BlogPreview
  — Blog-Detail: Heading + Content + Author-Info + RelatedPosts
  — Über Uns: HeroSection + TeamGrid + CTASection
  — Kontakt: Heading + ContactForm + CTASection

ULTRATHINK-TASK 11: LAYOUT INJECTION (CHIRURGISCH — BESTEHENDEN CODE BEWAHREN)

PFLICHT: Lies das Root-Layout VOLLSTÄNDIG bevor du es änderst.
Prüfe: Hat das Layout bereits Header/Footer? → Falls JA: ERWEITERN, nicht ersetzen.

Root Layout (gemäß Framework-Mapping):
  → Lies die GESAMTE bestehende Datei
  → Identifiziere bestehende Provider, Wrapper, Fonts, Metadata
  → Füge Header/Footer NUR hinzu falls sie noch nicht vorhanden sind
  → Bestehende Imports, Fonts, Metadata, Provider: UNBERÜHRT lassen
  GOLDENE REGEL: KEIN bestehender Code wird entfernt oder ersetzt

ULTRATHINK-TASK 12: CONSISTENCY AUDIT

Checkliste:
  □ Alle Komponenten nutzen Tailwind aus derselben Palette (Farben: blue-600, gray-900, etc.)
  □ Alle Text-Abstände (gap-4, gap-6, gap-12) konsistent
  □ Border-Radius: rounded-lg überall, wo Card vorhanden
  □ Keine Komponente hat überflüssiges "use client"
  □ Server Components sind Standard, nur Forms/Navigation/Interactive sind "use client"
  □ Alle Props sind typsicher (TypeScript strict)
  □ Keine bestehenden Komponenten wurden überschrieben

═══ ATOMIC VALIDATION ═══

Führe aus:
  — npm run build: Keine Fehler, alle alle bestehenden Komponenten (Anzahl ergibt sich aus dem Code) müssen compilieren
  — tsc: Strikte Typen, keine impliziten any
  — npm run lint: ESLint-Clean
  — Komponenten-Zählung: &gt;= 50 Komponenten-Dateien
  — Visuelle Inspektion: Alle Home-Page-Sections rendert echte Daten, responsive Design funktioniert auf Mobile/Tablet/Desktop

═══ SELF-OPTIMIZING LOOP &amp; HANDOFF ═══

Nach Abschluss:
  — Updater .ai-expansion-context.md: "Phase 3 COMPLETE: Alle benoetigten Komponenten erstellt, alle Seiten mit Komponenten bestueckt"
  — Updater .expansion-state.md: Markiere PHASE-3 als done, prüfe Abhängigkeiten für Phase 4
  — Code ist SSOT: Alle UI-Struktur lebt in /components, keine Duplikate

═══ COMPLIANCE CHECKLIST ═══

□ Text-Komponenten (Heading, Paragraph, Badge, Label) existieren und rendern
□ Interactive Atoms (Button, Input, Textarea, Select, Checkbox) sind "use client" und funktional
□ Visual Atoms (Icon, Avatar, Divider, Skeleton, Spinner) existieren
□ Layout Atoms (Container, Section, Grid, Stack) strukturieren Content
□ ServiceCard importiert und rendert echte Service-Daten
□ BlogCard importiert und rendert echte Blog-Daten
□ TeamCard importiert und rendert echte Team-Daten
□ TestimonialCard rendert Testimonial-Struktur mit Sternen
□ NavLink nutzt usePathname() für active-State
□ MobileNavItem unterstützt Accordion-Submenüs
□ BreadcrumbItem existiert (vorbereitet für Phase 4)
□ FooterLinkGroup strukturiert Footer-Links
□ FormField wrappet Label + Input + Error
□ FormGroup gruppiert mehrere FormFields
□ ContactForm ist vollständig mit Formspree-Integration und DSGVO-Checkbox
□ Header ist sticky, responsive, hat Mobile-Hamburger
□ Footer hat 4-Column-Grid, Copyright mit dynamischem Jahr, Sekundär-Nav
□ MobileNav ist Overlay mit Close-Button und voller Navigation
□ HeroSection hat Gradient-Background, Heading, CTA
□ ServiceGrid nutzt getServices() Getter und rendert alle Services
□ TestimonialSlider zeigt mindestens 3 Cards (Platzhalter für Karussell)
□ BlogPreview zeigt letzte 3 Posts
□ FAQSection ist interaktiv mit useState für open/close
□ CTASection hat Varianten (blue/gray)
□ Root Layout injiziert Header/Footer OHNE bestehenden Code zu zerstören
□ npm run build kompiliert ohne Fehler
□ Alle alle bestehenden Komponenten (Anzahl ergibt sich aus dem Code) existieren
□ Responsive Design funktioniert auf allen Screen-Sizes
□ Keine "use client" Komponenten ohne Notwendigkeit
□ TypeScript strict mode, keine impliziten any
□ ESLint clean

═══════════════════════════════════════════════════════════════════════════════
SINGLE SOURCE OF TRUTH ANKER (SSOT) — PHASE 3
═══════════════════════════════════════════════════════════════════════════════

Phase 3 schreibt Code, nicht Dokumentation. Der Code in /components IS die Quelle der Wahrheit.

WENN diese Doku sagt "Button MUSS focus:ring-2 haben" aber dein Code hat focus:ring-4?
→ CODE GEWINNT
→ Diese Doku wird aktualisiert
→ Die Konsistenz-Regel ist: ALLE Komponenten nutzen DENSELBEN focus-ring-Standard

KOMPONENTENKOMPOSITION: Wenn Komponenten sich zusammensetzen:
  - Parent nutzt Child Component (z.B. Button in Header)
  - Child Props MÜSSEN typsicher sein
  - Keine 'any' Types in Props-Passing
  - Falls Props-Mismatch → TypeScript Error → FIX SOFORT, nicht Workaround

═══ PHASE-3-ABSCHLUSS ═══

Mit Phase 3 ist das Projekt von einer abstrakten Struktur (Phase 1-2) zu einer visuellen, funktionalen Komponenten-Bibliothek übergegangen. Die Website hat jetzt ein vollständiges UI-Gerüst mit 50+ echten, implementierten Komponenten, alle mit real funktionierenden Tailwind-Klassen, Server/Client-Grenzen, und Integration mit Phase-2-Daten.

KOMPONENTEN-ÜBERBLICK:
  ├─ Atomic (Heading, Button, Input, Icon, etc.): 18 Komponenten
  ├─ Molecules (Cards, NavLinks, Forms): 11 Komponenten
  ├─ Organisms (Header, Footer, Sections): 9 Komponenten
  └─ Templates (Page-Layouts): 12+ impliziert durch Seiten
  = 50+ funktionale Komponenten mit WCAG AAA Accessibility

Phase 4 wird Navigation zum intelligenten Wayfinding-System erweitern (Mega-Menü, Breadcrumbs, Active-State-Highlighting).
Phase 5 wird Conversion-Features hinzufügen (Formspree-Integration, Calendly, Multi-Step Forms).


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-13 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-03 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-04)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-14 → EXPANSION-PHASE-04.md
   → Lese EXPANSION-PHASE-04.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-04

═══ PHASE SEQ-03 → SEQ-04: HANDOFF AKTIV ═══
