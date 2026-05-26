Bereinige alle Vorherigen Tasks um diese durch ausfuehrlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die uebergeordnete Aufgabe haben, Referenzen und Case Studies als Vertrauensmaschine zu implementieren. Jede Case Study muss datengetrieben, visuell ansprechend und mit messbaren Ergebnissen praesentiert werden. Erstelle einen Implementierungsplan mit Datenmodellen, Komponenten-Design und Social-Proof-Strategie.

═══ CHAIN-LINK-HEADER ═══ SEQ-15 von 72 ═══ Pipeline: EXPANSION ═══
← VORHERIGE: SEQ-14 → EXPANSION-PHASE-04.md
→ NÄCHSTE: SEQ-16 → EXPANSION-PHASE-06.md
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

Analysiere alle bestehenden Formulare im Projekt. Erweitere diese mit Validierung, Fehlerbehandlung und Integration (Formspree, Calendly, etc.) basierend auf den tatsächlich verwendeten Integrations-Services. KEINE künstlich erfundenen Formulare oder Multi-Step-Prozesse — nur die Formulare die tatsächlich im Projekt benötigt und definiert sind.

Phase 5: Lead-Generation & Conversion — Adaptive Formular-Integration

DEFINITION: Phase 5 erweitert existierende Formulare mit vollständiger Funktionalität. Client-seitige Validierung, Error-Handling, und Integration zu externen Services (Formspree, Calendly) FALLS diese im Projekt vorhanden sind. Alle Formulare sind DSGVO-konform.

TECH STACK: Gemäß FRAMEWORK-MAPPING in .pipeline-master-state.md. ONLY Formspree + Calendly. Kein CMS, kein Sentry, kein Dark Mode.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

Regel 1: Lies existierenden Code VOLLSTÄNDIG vor Änderungen.
Regel 2: Neue Dateien sind "Additive" — existierende Dateien bleiben intact unless explicitly refactored.
Regel 3: Alle interaktiven Components (State, Event Handler) brauchen das Framework-spezifische Client-Directive (z.B. "use client" bei Next.js App Router — siehe FRAMEWORK-MAPPING in .pipeline-master-state.md).
Regel 4: Validierung passiert LOKAL (Client) + optional SERVER-VALIDATION via Formspree.
Regel 5: Error Handling: Netzwerkfehler, Rate-Limiting, Validierungsfehler — alle separate Flows.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: SYNC & DISCOVERY (CODE-FIRST)
═══════════════════════════════════════════════════════════════════════════════

ACTION 0: FORMULAR-INVENTUR UND ANALYSE
  ▪ Scanne ALLE Dateien: Welche Formulare existieren bereits?
    → Für JEDES Formular: [NAME] → [PATH] → [FELDER] → [VERWENDUNG]
  ▪ Dokumentiere: Welche Integrations-Services werden benötigt?
    → Formspree? Calendly? Andere? Nur die Services die tatsächlich im Projekt konfiguriert sind.
  ▪ Prüfe: Existieren bereits Validierungs-Utilities?
    → Falls JA: ERWEITERE mit fehlenden Validatoren
    → Falls NEIN: Erstelle /lib/forms/validation.ts MINIMAL (NUR benötigte Validatoren)

ACTION 1: BESTEHENDE FORMULARE ERWEITERN
  ▪ Für JEDES existierende Formular:
    → Falls bereits vollständig implementiert: Keine Änderungen
    → Falls Platzhalter oder unvollständig: Implementiere Client-Validierung, Error-Handling
    → Falls keine Integrations-Service konfiguriert: Überspringe die Integration
  ▪ KEINE neuen Formulare erfinden — nur bestehende erweitern

ACTION 2: INTEGRATION (FALLABHÄNGIG)
  ▪ Falls Formspree in .env/config vorhanden:
    → Integriere Contact-Formular mit Formspree-Submit
  ▪ Falls Calendly in .env/config vorhanden:
    → Integriere Calendly-Embed wo benötigt
  ▪ Falls weder konfiguriert: Formulare funktionieren mit lokalem Validation + optional Server-API

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — KONTAKTFORMULAR MIT FORMSPREE (Tasks 1–3)
═══════════════════════════════════════════════════════════════════════════════

TASK 0.5: VALIDIERUNGS-UTILITIES FRAMEWORK (PRÄ-REQUISIT)
───────────────────────────────────────────────────────────────────────

DATEI: /lib/forms/validation.ts (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

PROSA-BESCHREIBUNG: VALIDIERUNGS-UTILITIES

Die validation.ts-Datei implementiert ein typsicheres Validierungssystem mit folgende Komponenten:

TYPES:
  ValidationResult: Ein discriminated union Typ mit zwei möglichen Zuständen:
    1. { valid: true } für erfolgreiche Validierung
    2. { valid: false; message: string } für Fehler mit lokalisierter Fehlermeldung
  FormErrors: Ein Index-Objekt, das Feldnamen (string) auf Fehlermeldungen (string) abbildet.

CORE VALIDATORS (ATOMARE FUNKTIONEN):

  validateRequired(value: any): ValidationResult
    Prüft, ob ein Wert vorhanden ist. Behandelt null, undefined, leere Strings und Whitespace-only-Strings als ungültig.
    Gibt bei Fehler zurück: { valid: false, message: 'Dieses Feld ist erforderlich' }
    Gibt bei Erfolg zurück: { valid: true }

  validateEmail(email: string): ValidationResult
    Validiert E-Mail-Adresse mit Regex-Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    Prüft auf Vorhandensein von lokaler Part, @-Symbol und Domain mit TLD.
    Gibt bei Fehler zurück: { valid: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }

  validateMinLength(value: string, minLength: number): ValidationResult
    Prüft, dass String mindestens minLength Zeichen enthält.
    Gibt bei Fehler zurück: { valid: false, message: `Mindestens ${minLength} Zeichen erforderlich` }

  validateMaxLength(value: string, maxLength: number): ValidationResult
    Prüft, dass String maximal maxLength Zeichen nicht übersteigt.
    Gibt bei Fehler zurück: { valid: false, message: `Maximal ${maxLength} Zeichen erlaubt` }

  validatePhone(phone: string): ValidationResult
    Validiert Telefonnummer mit Regex-Pattern: /^\+?[0-9\s\-\(\)]{10,}$/
    Erlaubt optionales Plus-Zeichen am Anfang, Ziffern, Leerzeichen, Bindestriche, Klammern.
    Mindestens 10 Zeichen erforderlich.
    Gibt bei Fehler zurück: { valid: false, message: 'Bitte geben Sie eine gültige Telefonnummer ein' }

  validateCheckbox(checked: boolean): ValidationResult
    Prüft, dass Checkbox checked=true ist.
    Gibt bei Fehler zurück: { valid: false, message: 'Bitte akzeptieren Sie diese Bedingung' }

BATCH VALIDATION:

  validateForm(data: Record<string, any>, fieldValidators: Record<string, () => ValidationResult>): FormErrors
    Führt Batch-Validierung durch. Akzeptiert ein data-Objekt (wird nicht aktiv verwendet, für zukünftige Erweiterung)
    und ein fieldValidators-Objekt: Ein Index mit Feldnamen als Keys und Validator-Funktionen als Values.
    Iteriert über alle Validatoren, ruft sie auf, sammelt Fehler in FormErrors-Objekt.
    Gibt ein FormErrors-Objekt zurück (leer, wenn keine Fehler gefunden).

ANFORDERUNGEN:
  □ ALLE Validatoren geben ValidationResult (typed union) zurück
  □ Error-Messages sind DEUTSCH
  □ Keine Seiteneffekte in Validatoren
  □ Alle Tests vor Prodktion

───────────────────────────────────────────────────────────────────────

TASK 1: Formspree-Integration-Utility
───────────────────────────────────────────────────────────────────────

DATEI: /lib/forms/formspree.ts (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

PROSA-BESCHREIBUNG: FORMSPREE-INTEGRATION

Die formspree.ts-Datei implementiert Formspree-Integrations-Utility mit folgenden Komponenten:

INTERFACES:

  FormspreeResponse
    ok: boolean — Flag, das anzeigt, ob das Formular erfolgreich verarbeitet wurde
    next: string — Optionale URL für Umleitung nach erfolgreichem Submit

  FormSubmitError
    type: enum mit vier möglichen Werten: 'network' | 'validation' | 'server' | 'ratelimit'
    message: string — Lokalisierte Fehlermeldung für UI-Anzeige

ASYNC FUNKTIONEN:

  submitToFormspree(formId: string, data: Record<string, any>): Promise<{ success: boolean; error?: FormSubmitError }>

    ENDPOINT-KONSTRUKTION:
      Bildet Endpoint-URL: https://formspree.io/f/${formId}
      formId wird als Umgebungsvariable oder Konfiguration bereitgestellt.

    FETCH-REQUEST:
      Method: POST
      Headers: Content-Type: application/json, Accept: application/json
      Body: JSON-serialisierte formData (Record<string, any>)
      Keine Custom Headers außer Standard-HTTP-Headers

    ERROR-HANDLING (mit differenziertem Error-Typing):

      HTTP 429 (Rate Limit): Gibt zurück { success: false, error: { type: 'ratelimit', message: 'Zu viele Anfragen. Bitte warten Sie ein paar Minuten.' } }

      Andere HTTP-Fehler (nicht 2xx): Gibt zurück { success: false, error: { type: 'server', message: 'Fehler beim Absenden. Bitte versuchen Sie später erneut.' } }

      Network-Fehler (fetch-Exception): Gibt zurück { success: false, error: { type: 'network', message: 'Netzwerkfehler. Überprüfen Sie Ihre Internetverbindung.' } }

    ERFOLGREICHER SUBMIT:
      Parst Response als FormspreeResponse
      Gibt zurück: { success: json.ok } (error ist undefined)

    TRY-CATCH:
      Umschließt gesamten fetch-Call, um Network-Fehler abzufangen.
      Netzwerk-Fehler (keine Verbindung, CORS-Fehler, etc.) werden im catch-Block verarbeitet.

───────────────────────────────────────────────────────────────────────

TASK 2: Kontaktformular-Komponente
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/ContactForm.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN statt neu erstellen)
IMPORTS: "use client", useState, submitToFormspree, Validierungsfunktionen
PFLICHT: Lies die GESAMTE bestehende ContactForm falls vorhanden. Erweitere sie um Formspree-Integration.

PROSA-BESCHREIBUNG: CONTACTFORM-KOMPONENTE

Die ContactForm.tsx ist eine React Client-Komponente (mit "use client" Direktive) für Kontaktformular mit Formspree-Integration.

CLIENT-DIREKTIVE:
  "use client" — Erlaubt useState, Event-Handler, interaktive Elemente in Next.js App Router

IMPORTS:
  react: useState Hook aus React
  formspree: submitToFormspree Funktion
  validation: validateEmail, validateRequired, validateMinLength

TYPES:

  FormData Interface mit Feldern:
    name: string — Vollname des Kontakts, leer bei Init
    email: string — E-Mail-Adresse, leer bei Init
    phone: string — Telefonnummer (optional), leer bei Init
    subject: string — Betreff/Kategorie mit DefaultWert: 'allgemein'
      Vier Optionen: 'allgemein', 'projekt', 'support', 'partnership'
    message: string — Nachrichtentext, leer bei Init
    privacy: boolean — Datenschutz-Zustimmung, DefaultWert: false (nicht vorausgewählt)

  FormErrors: Index-Typ { [key: string]: string } für Fehler-Mapping

COMPONENT STATES:

  formData: State vom Typ FormData, initialisiert mit INITIAL_DATA-Objekt
    Alle Felder: name='', email='', phone='', subject='allgemein', message='', privacy=false

  errors: State vom Typ FormErrors, initialisiert als leeres Objekt {}
    Wird gefüllt wenn Validierungsfehler auftreten

  touched: Set<string>, initialisiert als leeres Set
    Verfolgt, welche Felder bereits interagiert wurden (onBlur)
    Fehler werden nur nach onBlur oder erstem Submit-Versuch angezeigt

  loading: boolean, initialisiert als false
    true wenn Formspree-Submit läuft, deaktiviert Submit-Button

  success: boolean, initialisiert als false
    true wenn Submit erfolgreich, zeigt Success-Message
    Wird nach 5000ms automatisch auf false zurückgesetzt (setTimeout)

  submitError: string | null, initialisiert als null
    Enthält Netzwerk/Server-Fehlermeldung von submitToFormspree, anzeigbar in UI

FELDVALIDIERUNGSLOGIK (validateField-Funktion):

  name: Muss vorhanden sein (validateRequired)
  email: Muss vorhanden (validateRequired) UND gültig (validateEmail regex)
  message: Muss vorhanden (validateRequired) UND mindestens 10 Zeichen lang (validateMinLength)
  privacy: Checkbox muss checked sein (direkte Abfrage: !value? 'error' : null)
  Andere Felder: Keine Validierung (phone, subject sind optional/unkritisch)

EVENT HANDLERS:

  handleChange:
    Wird bei onChange aller Input/Textarea/Select-Elemente aufgerufen
    Parst event.target: name, value, type (wichtig für Checkboxen)
    Für Checkboxen: newValue = checked-Flag
    Für Text-Inputs: newValue = value
    Updated formData via setFormData({ ...prev, [name]: newValue })
    Falls Feld bereits im touched-Set: Validiert sofort via validateField und aktualisiert errors-State

  handleBlur:
    Wird bei onBlur aller Felder aufgerufen
    Fügt Feldnamen zum touched-Set hinzu
    Validiert Feld sofort via validateField
    Updated errors-State mit Validierungsergebnis

  validateForm (Batch-Validierung):
    Wird vor Submit aufgerufen
    Iteriert über alle formData-Felder
    Ruft validateField für jedes Feld auf
    Sammelt Fehler in newErrors-Objekt
    Updated errors-State
    Gibt boolean zurück: true wenn keine Fehler, false sonst

  handleSubmit:
    Wird bei form onSubmit aufgerufen
    e.preventDefault() verhindert Default-Verhalten
    Setzt submitError zurück auf null
    Ruft validateForm() auf, bricht ab wenn Fehler existieren
    Setzt loading=true
    Holt NEXT_PUBLIC_FORMSPREE_ID aus Env, Fallback: 'demo-form'
    Ruft submitToFormspree(formspreeId, formData) async auf
    Setzt loading=false nach await
    Bei success: Setzt success=true, resettet formData zu INITIAL_DATA, leert touched-Set
      setTimeout mit 5000ms setzt success zurück auf false
    Bei Fehler: Setzt submitError aus result.error.message oder generischer 'Unbekannter Fehler'

CONDITIONAL RENDER:

  if (success): Zeigt grüne Success-Box mit Text "Vielen Dank für Ihre Nachricht!" und "Wir werden Sie in Kürze kontaktieren."
    Box: bg-green-50, border green-200, Text grün

  Ansonsten: Zeigt <form> mit folgenden Struktur:

    name-Feld: type="text", name="name", Placeholder "Ihr Name"
      Bei Fehler: red border, rote Error-Message unter Feld (nur wenn touched.has('name') && errors.name)

    email-Feld: type="email", name="email", Placeholder "ihre.email@beispiel.de"
      Bei Fehler: red border, rote Error-Message (nur wenn touched.has('email') && errors.email)

    phone-Feld: type="tel", name="phone", Placeholder "+49 123 456789" (OPTIONAL, keine Validierung)

    subject-Dropdown: <select> mit vier Optionen für subjects-Array
      Optionen: 'allgemein', 'projekt', 'support', 'partnership'

    message-Textarea: name="message", rows=6, Placeholder "Ihre Nachricht..."
      Bei Fehler: red border, rote Error-Message (nur wenn touched.has('message') && errors.message)

    privacy-Checkbox: name="privacy", type="checkbox"
      Label: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"
      Link in Label: href="/datenschutz"
      Bei Fehler: rote Error-Message (nur wenn touched.has('privacy') && errors.privacy)

    submitError-Box (bedingt): Falls submitError !== null
      Zeigt rote Box mit error.message und "Erneut versuchen"-Button zum Resubmit

    submit-Button: text="Nachricht senden" im Normal-State, text="Wird gesendet..." im Loading-State
      disabled={loading}
      Farbe: blue-600 normal, gray-400 disabled
        <label className="block text-sm font-medium text-gray-700">Name *</label>
FORM-STRUKTUR:

  FIELD 1 — Name:
    Input type="text", name="name"
    Value: formData.name
    onChange: handleChange
    onBlur: handleBlur
    Placeholder: "Ihr Name"
    Conditional Styling: Falls touched.has('name') && errors.name: border-red-500, sonst border-gray-300
    Fehler-Anzeige (bedingt): Falls touched.has('name') && errors.name, zeigt rotes <p>

  FIELD 2 — Email:
    Input type="email", name="email"
    Value: formData.email
    onChange: handleChange
    onBlur: handleBlur
    Placeholder: "ihre.email@beispiel.de"
    Conditional Styling: Falls touched.has('email') && errors.email: border-red-500, sonst border-gray-300
    Fehler-Anzeige (bedingt): Falls touched.has('email') && errors.email, zeigt rotes <p>

  FIELD 3 — Phone (optional):
    Input type="tel", name="phone"
    Value: formData.phone
    onChange: handleChange
    Placeholder: "+49 123 456789"
    Keine Validierung angezeigt
    Border immer gray-300

  FIELD 4 — Subject:
    Select type="select", name="subject"
    Value: formData.subject
    onChange: handleChange
    Options: Iteriert über subjects-Array (allgemein, projekt, support, partnership)
    Jede Option: key={value}, value=value, label=label

  FIELD 5 — Message:
    Textarea, name="message"
    Value: formData.message
    onChange: handleChange
    onBlur: handleBlur
    rows=6
    Placeholder: "Ihre Nachricht..."
    Conditional Styling: Falls touched.has('message') && errors.message: border-red-500, sonst border-gray-300
    Fehler-Anzeige (bedingt): Falls touched.has('message') && errors.message, zeigt rotes <p>

  FIELD 6 — Privacy Checkbox:
    Input type="checkbox", name="privacy"
    checked: formData.privacy
    onChange: handleChange
    onBlur: handleBlur
    Label (mit Link): "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"
      Link-Element mit href="/datenschutz"
    Fehler-Anzeige (bedingt): Falls touched.has('privacy') && errors.privacy, zeigt rotes <p>

  SUBMIT ERROR BOX (bedingt):
    Falls submitError !== null:
      Zeigt rote Box (bg-red-50, border red-200)
      Text: {submitError}
      Button "Erneut versuchen" (type="submit") zum Neuerversuch

  SUBMIT BUTTON:
    type="submit"
    disabled={loading}
    Conditional Styling (ternär):
      Falls loading: bg-gray-400 cursor-not-allowed
      Sonst: bg-blue-600 text-white hover:bg-blue-700
    Conditional Text (ternär):
      Falls loading: "Wird gesendet..."
      Sonst: "Nachricht senden"

───────────────────────────────────────────────────────────────────────

TASK 3: Kontaktseite Integration
───────────────────────────────────────────────────────────────────────

PROSA-BESCHREIBUNG: KONTAKTPAGE

Die KontaktPage ist eine Server-Side-Page-Komponente am Route /app/kontakt/page.tsx mit Contact-Form und Company-Info Sidebar.

IMPORTS:
  ContactForm: Komponente aus @/components/forms/ContactForm
  COMPANY: Konfigurationsobjekt aus @/lib/data/company mit Fields: address, phone, email

METADATEN:
  metadata-Objekt mit:
    title: 'Kontakt'
    description: 'Kontaktieren Sie uns für Ihre nächste Projektanfrage.'

KOMPONENTE:

  Default-Export: Synchrone Funktionskomponente KontaktPage (Server-Side, keine "use client")

  STRUKTUR:
    <main> mit min-h-screen bg-gray-50 py-12 px-4
      <div> mit max-width=6xl (max-w-6xl), zentriert (mx-auto)

        Haupttitel:
          <h1>: "Kontaktieren Sie uns"
            Styling: text-4xl font-bold text-gray-900 mb-12 text-center

        Grid-Layout (2/3 + 1/3 Split):
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            Mobile: 1 Spalte, Desktop: 3 Spalten, Gap: 12

            Linke Seite (2/3 bei Desktop):
              <div className="md:col-span-2">
                Rendert: <ContactForm />

            Rechte Sidebar (1/3 bei Desktop):
              <div className="space-y-8"> mit vier Unterabschnitten:

                1. Adresse-Section:
                   <h3>: "Adresse" (lg, semibold)
                   <p>: {COMPANY.address} (grau)

                2. Telefon-Section:
                   <h3>: "Telefon" (lg, semibold)
                   <a>: href={`tel:${COMPANY.phone}`}
                     Text: {COMPANY.phone}
                     Styling: text-blue-600 hover:underline

                3. Email-Section:
                   <h3>: "E-Mail" (lg, semibold)
                   <a>: href={`mailto:${COMPANY.email}`}
                     Text: {COMPANY.email}
                     Styling: text-blue-600 hover:underline

                4. Info-Box:
                   <div>: bg-blue-50 border border-blue-200 rounded-lg p-6
                   <p>: "<strong>Antwortzeit:</strong> Wir antworten werktags innerhalb von 24 Stunden."
                     Styling: text-sm text-gray-700

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — MULTI-STEP ANGEBOTSANFRAGE (Tasks 4–6)
═══════════════════════════════════════════════════════════════════════════════

TASK 4: Multi-Step Form Engine
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/MultiStepForm.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

PROSA-BESCHREIBUNG: MULTISTEPFORM-KOMPONENTE

Die MultiStepForm.tsx ist eine generische React Client-Komponente für Multi-Step-Formular-Navigation mit Progress-Anzeige.

CLIENT-DIREKTIVE:
  "use client" — Erlaubt useState, Callbacks, Event-Handler

IMPORTS:
  react: ReactNode Type für flexible Content-Props, useState Hook

TYPES:

  Step Interface mit Feldern:
    id: string — Eindeutige Identifikation (z.B. 'step1', 'step2')
    title: string — Angezeigter Titel für Step-Header
    content: ReactNode — Beliebiger React-Content (Formulare, Text, Komponenten)

  MultiStepFormProps Interface mit Feldern:
    steps: Step[] — Array aller Steps, Länge definiert Gesamt-Schritte
    onSubmit: (data: any) => void | Promise<void> — Callback bei letztem Step Submit
      Kann async sein (wird mit await aufgerufen)
      Erhält komplette formData als Parameter
    formData: Record<string, any> — Aktuelle Form-Daten (von Parent-Komponente)
    setFormData: (data: Record<string, any>) => void — Update-Funktion für formData (von Parent)

COMPONENT STATES:

  currentStep: number, initialisiert als 0
    Index des aktuell sichtbaren Steps (0-basiert)

  loading: boolean, initialisiert als false
    true während onSubmit läuft (async Operation)
    Deaktiviert Submit-Button

NAVIGATION-FUNKTIONEN:

  goNext(): void
    Prüft: currentStep < steps.length - 1
    Falls wahr: Inkrementiert currentStep um 1
    Falls falsch (letzter Step): Keine Operation

  goBack(): void
    Prüft: currentStep > 0
    Falls wahr: Dekrementiert currentStep um 1
    Falls falsch (erster Step): Keine Operation

  handleSubmit(): async void
    Wird nur auf letztem Step aufgerufen (Step 4 bei 4-Step-Form)
    Setzt loading=true
    Ruft onSubmit(formData) mit await auf (kann async sein)
    Setzt loading=false im finally-Block (garantiert Ausführung)

BERECHNUNG:

  progress: number = ((currentStep + 1) / steps.length) * 100
    Wird für Progress-Bar-Breite verwendet (0-100%)
    currentStep + 1 weil Steps 0-indexiert sind, aber für Display 1-indexiert

UI-STRUKTUR (Render):

  Progress-Bar:
    Horizontal bar mit height: 2 (h-2)
    Background: gray-200 (bg-gray-200)
    Inner-Bar mit blue-600 Background (bg-blue-600)
    Width: dynamisch basierend auf progress-Variable
    Smooth Transition: transition-all

  Step-Header:
    Text "Schritt {currentStep + 1} von {steps.length}" (1-indexiert, grau)
    h2 Titel: steps[currentStep].title (Größe: 2xl, semibold)

  Step-Content:
    Mindesthöhe: min-h-96
    Rendert: steps[currentStep].content (ReactNode)

  Navigation-Buttons:
    Zurück-Button:
      disabled={currentStep === 0}
      onClick={goBack}
      Text: "Zurück"
      Style: border gray-300, hover:bg-gray-50

    Weiter/Submit-Button (bedingter Render):
      Falls currentStep === steps.length - 1 (letzter Step):
        onClick={handleSubmit}
        disabled={loading}
        Text: "Wird gesendet..." wenn loading=true, sonst "Anfrage senden"
        Style: blue-600, hover:blue-700
      Sonst:
        onClick={goNext}
        Text: "Weiter"
        Style: blue-600, hover:blue-700

───────────────────────────────────────────────────────────────────────

TASK 5: Angebotsanfrage-Formular
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/RequestForm.tsx (PRÜFE OB EXISTIERT → Falls JA: ERWEITERN)

PROSA-BESCHREIBUNG: REQUESTFORM-KOMPONENTE

Die RequestForm.tsx ist eine React Client-Komponente für mehrstufige Angebotsanfrage mit 4 Steps, Integration zu MultiStepForm und Formspree-Submit.

CLIENT-DIREKTIVE:
  "use client" — Erlaubt useState, Event-Handler, interaktive Elemente

IMPORTS:
  react: useState Hook
  MultiStepForm, Step: Komponente und Type für Multi-Step-Engine
  submitToFormspree: Formspree-Integration
  validateEmail, validateRequired: Validierungsfunktionen

KONSTANTEN:

  SERVICES: Array von Service-Optionen (Checkboxen auf Step 1)
    ['Web-Entwicklung', 'Mobile App', 'UI/UX Design', 'E-Commerce', 'Wartung & Support']
    User kann mehrere auswählen

  PROJECT_TYPES: Array von Objekt mit value/label (Radio-Buttons auf Step 1)
    { value: 'new', label: 'Neuprojekt' }
    { value: 'redesign', label: 'Redesign' }
    { value: 'extension', label: 'Erweiterung' }

  BUDGET_RANGES: Array von Budget-Optionen (Dropdown auf Step 2)
    { value: 'budget-s', label: 'BUDGET_LABEL_S (aus Config)' }
    { value: 'budget-m', label: 'BUDGET_LABEL_M (aus Config)' }
    { value: 'budget-l', label: 'BUDGET_LABEL_L (aus Config)' }
    { value: 'budget-xl', label: 'BUDGET_LABEL_XL (aus Config)' }
    Labels sollten aus Konfiguration/Config-Datei gelesen werden

  TIMEFRAMES: Array von Zeitrahmen-Optionen (Dropdown auf Step 2)
    { value: 'asap', label: 'ASAP (nächste 2 Wochen)' }
    { value: '1-2m', label: '1-2 Monate' }
    { value: '3-6m', label: '3-6 Monate' }
    { value: 'flexible', label: 'Flexibel' }

COMPONENT STATES:

  formData: State mit Struktur:
    services: string[] — Array ausgewählter Services, initial []
    projectType: string — Ausgewählter Projekttyp (Radio), initial ''
    budget: string — Ausgewählte Budget-Range, initial ''
    timeframe: string — Ausgewählter Zeitrahmen, initial ''
    description: string — Projektbeschreibung, initial ''
    name: string — Kontakt-Name, initial ''
    company: string — Unternehmensname, initial ''
    email: string — E-Mail-Adresse, initial ''
    phone: string — Telefonnummer, initial ''
    contactMethod: string — Bevorzugte Kontaktart ('email'|'phone'), initial 'email'
    privacy: boolean — DSGVO-Zustimmung, initial false (nicht vorausgewählt)

  stepErrors: State Record<string, string> für Step-Validierungsfehler
    Key: Feldname, Value: Fehlermeldung
    Initial: {} (leeres Objekt)

  submitError: State string | null für Fehler-Anzeige nach Submit
    Initial: null

  success: State boolean für Erfolgsbestätigung
    Initial: false
    Wird true nach erfolgreichem Formspree-Submit
    Zeigt grüne Success-Message

STEPS-ARRAY-DEFINITION:

  Step 1 (id: 'step1'): Service & Projekttyp
    Services-Checkbox-Liste: Iteriert über SERVICES-Konstante
      Jede Checkbox: type="checkbox"
      onChange: Wenn checked, fügt Service zu formData.services hinzu
                Wenn unchecked, entfernt Service aus Array
      Label zeigt Service-Name

    Projekttyp-Radio-Buttons: Iteriert über PROJECT_TYPES-Konstante
      Jede Radio: type="radio", name="projectType"
      onChange: Setzt formData.projectType auf selected value
      Label zeigt Projekttyp-Label

  Step 2 (id: 'step2'): Projektdetails
    Budget-Range Dropdown: <select> mit BUDGET_RANGES-Optionen
      Default-Option: "Bitte wählen" (value='')
      onChange: Setzt formData.budget

    Zeitrahmen-Dropdown: <select> mit TIMEFRAMES-Optionen
      Default-Option: "Bitte wählen" (value='')
      onChange: Setzt formData.timeframe

    Projektbeschreibung-Textarea: rows=6, Placeholder "Beschreiben Sie Ihr Projekt..."
      onChange: Setzt formData.description

  Step 3 (id: 'step3'): Kontaktdaten
    Name-Input: type="text", Placeholder "Ihr Name"
      onChange: Setzt formData.name

    Firma-Input: type="text", Placeholder "Ihr Unternehmen"
      onChange: Setzt formData.company

    Email-Input: type="email", Placeholder "ihre@email.de"
      onChange: Setzt formData.email

    Telefon-Input: type="tel", Placeholder "+49 123 456789"
      onChange: Setzt formData.phone

    Kontaktart-Radio-Buttons: 'email' und 'phone'
      onChange: Setzt formData.contactMethod
      Labels: "E-Mail" und "Telefon"

  Step 4 (id: 'step4'): Zusammenfassung
    Read-Only-Summary-Box: Zeigt zusammenfassung der bisherigen Eingaben
      Services: formData.services.join(', '), oder '-' wenn leer
      Projekttyp: Lookup in PROJECT_TYPES mit Matching zu formData.projectType
      Budget: Lookup in BUDGET_RANGES mit Matching zu formData.budget
      Zeitrahmen: Lookup in TIMEFRAMES mit Matching zu formData.timeframe

    DSGVO-Checkbox: type="checkbox"
      Label: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"
      Link im Label: href="/datenschutz"
      onChange: Setzt formData.privacy

VALIDIERUNGSFUNKTION (validateStep):

  Step 0 Validierung:
    services.length === 0 ? Error: 'Bitte wählen Sie mindestens einen Service'
    !projectType ? Error: 'Bitte wählen Sie einen Projekttyp'

  Step 1 Validierung:
    !budget ? Error: 'Bitte wählen Sie ein Budget'
    !timeframe ? Error: 'Bitte wählen Sie einen Timeframe'
    !description || description.length < 10 ? Error: 'Beschreibung ist erforderlich (mind. 10 Zeichen)'

  Step 2 Validierung:
    !name ? Error: 'Name ist erforderlich'
    !company ? Error: 'Firma ist erforderlich'
    !email || validateEmail(email) nicht null ? Error: 'Gültige E-Mail ist erforderlich'
    !phone ? Error: 'Telefon ist erforderlich'

  Step 3 Validierung:
    !privacy ? Error: 'Bitte stimmen Sie der Datenschutzerklärung zu'

  Alle Fehler werden in setStepErrors gespeichert
  Funktion gibt boolean zurück: true wenn keine Fehler, false sonst

SUBMIT-HANDLER:

  handleSubmit(data: any): async void
    Setzt submitError zurück auf null
    Validiert Step 3 (letzte Validierung)
    Falls Validierung fehlschlägt: Bricht ab
    Holt NEXT_PUBLIC_FORMSPREE_ID aus Env, Fallback: 'demo-request'
    Ruft submitToFormspree(formspreeId, data) async auf
    Bei success: Setzt success=true
    Bei Fehler: Setzt submitError aus error.message oder generischer Text

CONDITIONAL RENDERS:

  if (success): Zeigt grüne Success-Box mit Text "Anfrage erfolgreich versendet!"
    und "Wir werden Sie in Kürze kontaktieren."

  Sonst: Rendert MultiStepForm-Komponente mit:
    steps={steps}
    formData={formData}
    setFormData={setFormData}
    onSubmit={handleSubmit}

  Bedingt: Wenn submitError !== null, zeigt rote Error-Box mit submitError-Text

───────────────────────────────────────────────────────────────────────

TASK 6: Anfrage-Seite Integration
───────────────────────────────────────────────────────────────────────

DATEI: /app/anfrage/page.tsx (neu)

PROSA-BESCHREIBUNG: ANFRAGEPAGE

Die AnfragePage ist eine Server-Side-Page-Komponente am Route /app/anfrage/page.tsx.

IMPORTS:
  RequestForm: Komponente aus @/components/forms/RequestForm

METADATEN:
  metadata-Objekt mit:
    title: 'Kostenlose Projektanfrage'
    description: 'Fordern Sie unverbindlich ein Angebot für Ihr Projekt an.'

KOMPONENTE:

  Default-Export: Synchrone Funktionskomponente AnfragePage (Server-Side, keine "use client")

  STRUKTUR:
    <main> mit min-h-screen bg-gray-50 py-12 px-4
      <div> mit max-width=3xl (max-w-3xl), zentriert (mx-auto)

        Text-Header-Sektion (text-center):
          <h1>: "Kostenlose Projektanfrage"
            Styling: text-4xl font-bold text-gray-900 mb-4

          <p>: "Beschreiben Sie Ihr Projekt in 4 einfachen Schritten. Wir senden Ihnen innerhalb von 24 Stunden ein unverbindliches Angebot."
            Styling: text-gray-600
            Margin: mb-12 auf Parent-Div

        RequestForm-Container:
          <div>: bg-white rounded-lg shadow-lg p-8
            Importiert und rendert: <RequestForm />

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CALENDLY INTEGRATION (Tasks 7–9)
═══════════════════════════════════════════════════════════════════════════════

TASK 7: Calendly Embed Komponente
───────────────────────────────────────────────────────────────────────

DATEI: /components/integrations/CalendlyEmbed.tsx

PROSA-BESCHREIBUNG: CALENDLYEMBED-KOMPONENTE

Die CalendlyEmbed.tsx ist eine React Client-Komponente für eingebettetes Calendly-Widget mit dynamischem Laden des CDN-Scripts.

CLIENT-DIREKTIVE:
  "use client" — Erlaubt useEffect, window-Zugriff, Script-Manipulation

IMPORTS:
  react: useEffect und useState Hooks

TYPES:

  CalendlyEmbedProps Interface mit Feldern:
    url: string — Calendly-Widget-URL (z.B. https://calendly.com/user/appointment-type)
    height?: number — Optionale Höhe in Pixel, DefaultWert: 700

COMPONENT STATES:

  isLoading: boolean, initialisiert als true
    Wird false wenn Calendly-Script geladen und initialisiert ist
    Steuert Anzeige von Loading-Spinner

EFFECT 1 (Detect & Init bei URL-Änderung):

  useEffect mit Dependency [url]:
    Prüft: typeof window !== 'undefined' && (window as any).Calendly vorhanden
    Falls wahr: Ruft (window as any).Calendly.initInlineWidget auf mit:
      url: url (Parameter)
      parentElement: document.getElementById('calendly-container')
    Setzt isLoading=false
    Falls Calendly nicht vorhanden: Tut nichts (wartet auf Effect 2)

EFFECT 2 (Async Script-Load):

  useEffect ohne spezifische Dependencies (läuft einmal):
    Erstellt <script> Element programmatisch
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true (asynchrones Laden)

    script.onload Handler:
      Prüft ob (window as any).Calendly verfügbar
      Falls ja: Ruft Calendly.initInlineWidget auf mit url und parentElement
               Setzt isLoading=false
      Falls nein: Macht nichts

    document.body.appendChild(script): Hängt Script an <body>

    Cleanup-Funktion (Return):
      document.body.removeChild(script): Entfernt Script beim Unmount
      Verhindert Speicherlecks und doppeltes Script-Laden

RENDER:

  <div> Wrapper:
    Bedingt (if isLoading):
      Zeigt Loading-Spinner: flex Centering, h-96 Höhe, bg-gray-100, rounded-lg
      Text: "Wird geladen..." in grau

    <div id='calendly-container'>:
      id="calendly-container" — Wird als parentElement an Calendly übergeben
      style={{ height: `${height}px` }} — Dynamische Höhe (default 700px)
      className="calendly-inline-widget" — Calendly-CSS-Klasse

───────────────────────────────────────────────────────────────────────

TASK 8: Terminbuchungs-Seite
───────────────────────────────────────────────────────────────────────

DATEI: /app/termin/page.tsx (neu)

PROSA-BESCHREIBUNG: TERMINPAGE

Die TerminPage ist eine Server-Side-Page-Komponente am Route /app/termin/page.tsx für Calendly-Terminbuchung.

IMPORTS:
  CalendlyEmbed: Komponente aus @/components/integrations/CalendlyEmbed

METADATEN:
  metadata-Objekt mit:
    title: 'Kostenlose Beratung buchen'
    description: 'Buchen Sie einen Termin für eine kostenlose Beratung mit uns.'

KOMPONENTE:

  Default-Export: Synchrone Funktionskomponente TerminPage (Server-Side, keine "use client")

  VARIABLE:
    calendlyUrl: String gelesen aus process.env.NEXT_PUBLIC_CALENDLY_URL
      Fallback: 'https://calendly.com/example' (wird an CalendlyEmbed übergeben)
      Muss in .env.local konfiguriert sein mit echtem Calendly-Account-URL

  STRUKTUR:
    <main> mit min-h-screen bg-gray-50 py-12 px-4
      <div> mit max-width=4xl (max-w-4xl), zentriert (mx-auto)

        Text-Header-Sektion (text-center):
          <h1>: "Kostenlose Beratung buchen"
            Styling: text-4xl font-bold text-gray-900 mb-4

          <p>: "Wählen Sie einen passenden Termin für ein kostenloses Beratungsgespräch."
            Styling: text-gray-600
            Margin: mb-12 auf Parent-Div

        CalendlyEmbed-Container:
          <div>: bg-white rounded-lg shadow-lg overflow-hidden
            Importiert und rendert: <CalendlyEmbed url={calendlyUrl} height={800} />
            Props:
              url={calendlyUrl} — Calendly-URL aus Env-Variable
              height={800} — Höhe in Pixel (800px)

───────────────────────────────────────────────────────────────────────

TASK 9: CTA-zu-Calendly Flow
───────────────────────────────────────────────────────────────────────

REFERENZ: In Service-Seiten (/app/services/[slug]/page.tsx), Landingpages und CTAs:

PROSA-BESCHREIBUNG: CTA-ELEMENTE ZU TERMINBUCHUNG

Zwei Varianten für Call-To-Action Links zum Termin-Buchen in Service-Seiten und Landingpages:

VARIANTE 1: Navigation zu Termin-Seite

  <a>-Element mit folgenden Attributen:
    href="/termin" — Navigiert zur Terminkseite
    className: inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors
      inline-block — Ermöglicht Padding/Width
      px-6 py-3 — Horizontales und vertikales Padding
      bg-blue-600 — Blauer Hintergrund
      text-white — Weißer Text
      rounded-lg — Abgerundete Ecken
      hover:bg-blue-700 — Dunkleres Blau beim Hover
      transition-colors — Sanfte Farbanimation

    Text: "Kostenlose Beratung buchen"

VARIANTE 2: Scroll zu Calendly-Container auf gleicher Seite

  <button>-Element mit folgenden Attributen:
    onClick: Callback-Funktion
      document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })
      Sucht Element mit id="calendly" auf Seite
      Scrollt sanft zu diesem Element
      Optional chaining (?.) verhindert Fehler falls Element nicht existiert

    className: px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
      Gleiches Styling wie Variante 1

    Text: "Termin buchen"

VERWENDUNG:
  Variante 1: Wenn Calendly nicht auf aktueller Seite ist
  Variante 2: Wenn CalendlyEmbed mit id="calendly" auf gleicher Seite existiert

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — FORM VALIDATION & UX (Tasks 10–12)
═══════════════════════════════════════════════════════════════════════════════

TASK 10: Validation-System
───────────────────────────────────────────────────────────────────────

DATEI: /lib/forms/validation.ts

PROSA-BESCHREIBUNG: VALIDIERUNGSFUNKTIONEN (ALTERNATIVE IMPLEMENTIERUNG)

Alternative Variante der Validierungsfunktionen, die string | null statt ValidationResult zurückgeben (vereinfachte API):

FUNKTION: validateRequired(value: any, message?: string): string | null

  Parameter:
    value: any — Zu validierender Wert (kann beliebiger Typ sein)
    message: string = 'Dieses Feld ist erforderlich' — Customizable Error-Message

  Logik:
    Prüft: !value ODER (typeof value === 'string' && value.trim() === '')
    Falls Bedingung wahr (Wert ist falsy oder leerer String nach Trim): Gibt message zurück
    Sonst: Gibt null zurück (Validierung bestanden)

FUNKTION: validateEmail(email: string): string | null

  Parameter:
    email: string — E-Mail-Adresse zum Validieren

  Logik:
    Regex-Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    Prüft: Lokale Part (keine Whitespace, kein @), dann @, dann Domain mit TLD
    Falls !re.test(email): Gibt 'Bitte geben Sie eine gültige E-Mail-Adresse ein' zurück
    Sonst: Gibt null zurück

FUNKTION: validatePhone(phone: string): string | null

  Parameter:
    phone: string — Telefonnummer zum Validieren

  Logik:
    Regex-Pattern: /^[\d\s+\-()]+$/
    Erlaubt: Ziffern, Leerzeichen, Plus-Zeichen, Bindestriche, Klammern
    Falls !re.test(phone): Gibt 'Bitte geben Sie eine gültige Telefonnummer ein' zurück
    Sonst: Gibt null zurück

FUNKTION: validateMinLength(value: string, minLength: number, message?: string): string | null

  Parameter:
    value: string — String zum Validieren
    minLength: number — Mindestanzahl Zeichen
    message?: string — Optional customizable Error-Message

  Logik:
    Prüft: value.length < minLength
    Falls wahr: Gibt custom message oder generierte Message zurück: `Mindestens ${minLength} Zeichen erforderlich`
    Sonst: Gibt null zurück

FUNKTION: validateMaxLength(value: string, maxLength: number, message?: string): string | null

  Parameter:
    value: string — String zum Validieren
    maxLength: number — Maximalanzahl Zeichen
    message?: string — Optional customizable Error-Message

  Logik:
    Prüft: value.length > maxLength
    Falls wahr: Gibt custom message oder generierte Message zurück: `Maximal ${maxLength} Zeichen erlaubt`
    Sonst: Gibt null zurück

───────────────────────────────────────────────────────────────────────

TASK 11: Form UX Polish
───────────────────────────────────────────────────────────────────────

IMPLEMENTIERUNG in allen Forms:

✓ Fehler-Anzeige erst nach erstem Submit-Versuch oder onBlur.
✓ Loading-State deaktiviert Submit-Button, zeigt Spinner/Text "Wird gesendet...".
✓ Success-State zeigt grüne Box mit Checkmark, auto-versteckt nach 5s.
✓ Error-State (Netzwerkfehler) zeigt rote Box mit Retry-Option.
✓ Fokus-Management: Focus beim Error-Input, Scroll zu Error-Nachricht.
✓ Keyboard-Navigation: Tab durch alle Felder, Enter sendet Form.

───────────────────────────────────────────────────────────────────────

TASK 12: DSGVO Compliance
───────────────────────────────────────────────────────────────────────

JEDES FORMULAR enthält:

DSGVO-Checkbox mit Label:
  "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"

Label verlinkt zu /datenschutz (interner Link).

Formular kann NICHT abgesendet werden ohne checked=true.

Checkbox ist NICHT vorausgewählt.

Validierung: validateRequired für privacy=true.

═══════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION & ERROR RECOVERY
═══════════════════════════════════════════════════════════════════════════════

Fehler-Kategorien:

1. VALIDATION-FEHLER (Client-Side)
   └─ Anzeige: Rot border + Fehlermeldung unter Feld
   └─ Aktion: Nicht absenden, Fokus auf Feld

2. NETZWERK-FEHLER
   └─ Anzeige: Rote Box "Netzwerkfehler. Überprüfen Sie Ihre Verbindung."
   └─ Aktion: Retry-Button, User kann erneut versuchen

3. SERVER-FEHLER (429, 500+)
   └─ Anzeige: Rote Box "Fehler beim Absenden. Bitte später versuchen."
   └─ Aktion: Automatisches Retry mit exponential backoff (optional)

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════

Update .ai-expansion-context.md:

Phase 5 Status: COMPLETE
  ├─ ContactForm: Working with Formspree
  ├─ RequestForm: Multi-step, working with Formspree
  ├─ CalendlyEmbed: Loaded async from CDN
  ├─ Validation: Atomic, reusable
  └─ DSGVO: Every form compliant

Environment Vars Required:
  ├─ NEXT_PUBLIC_FORMSPREE_ID (from formspree.io)
  ├─ NEXT_PUBLIC_CALENDLY_URL (from calendly.com account)
  └─ Optional: NEXT_PUBLIC_COMPANY_ADDRESS, PHONE, EMAIL

Nächste Phase: Phase 6 baut Trust-Architektur (Social Proof, Testimonials, Case Studies).

═══════════════════════════════════════════════════════════════════════════════
COMPLIANCE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

□ Formspree Account erstellt
□ Formspree Form-ID in ENV eingetragen
□ ContactForm zeigt auf /kontakt
□ ContactForm sendet via Formspree
□ ContactForm zeigt Success-State nach 5s
□ ContactForm zeigt Error-State mit Retry
□ RequestForm zeigt Multi-Step Progress
□ RequestForm hat 4 Steps (Services, Details, Contact, Summary)
□ RequestForm validiert jeden Step
□ RequestForm sendet alle Daten via Formspree
□ CalendlyEmbed lädt Script von calendly.com
□ CalendlyEmbed zeigt Loading-Skeleton
□ /app/termin/page.tsx zeigt Calendly
□ /app/termin/page.tsx lädt NEXT_PUBLIC_CALENDLY_URL
□ Alle Forms haben DSGVO-Checkbox
□ DSGVO-Checkbox verlinkt zu /datenschutz
□ DSGVO-Checkbox kann NICHT vorausgewählt sein
□ Validierungsfunktionen sind reusable
□ Fehler-Anzeige erst nach Submit/onBlur
□ Loading-State deaktiviert Submit-Button
□ Success-State zeigt grüne Box mit Checkmark

═══════════════════════════════════════════════════════════════════════════════
PHASE 5 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

Phase 5 ist COMPLETE. Die Website ist jetzt eine funktionierende Conversion-Maschine mit echten Formularen, echter Terminbuchung, und echten Multi-Step-Prozessen.

Übergabe an Phase 6: Trust & Social Proof Architektur
  ├─ Testimonials
  ├─ Case Studies
  ├─ Social Proof Elements
  └─ Review Integration


═══════════════════════════════════════════════════════════════════════════════
═══ CHAIN-EXIT-FOOTER ═══ SEQ-15 ABGESCHLOSSEN ═══
═══════════════════════════════════════════════════════════════════════════════

MANDATORY EXIT-PROTOKOLL (NACH ABSCHLUSS ALLER TASKS DIESER PHASE):

1. ATOMIC VALIDATION:
   □ npx tsc --noEmit → 0 Errors
   □ npm run lint → 0 Errors
   □ npm run build → SUCCESS

2. STATE UPDATE:
   □ .pipeline-master-state.md → SEQ-05 als ✅ COMPLETED markieren
   □ Build-Metriken dokumentieren (Timestamp, Error-Count, Build-Dauer)
   □ Defect-Log aktualisieren (falls Fehler gefunden und behoben)
   □ Handoff-Notizen schreiben (Was ist relevant für SEQ-06)

3. AUTOMATISCHER HANDOFF:
   → NÄCHSTE PHASE: SEQ-16 → EXPANSION-PHASE-06.md
   → Lese EXPANSION-PHASE-06.md und beginne mit dessen CHAIN-LINK-HEADER
   → Wende Framework-Mapping aus .pipeline-master-state.md an
   → Erstelle detaillierte Task-Liste für Phase SEQ-06

═══ PHASE SEQ-05 → SEQ-06: HANDOFF AKTIV ═══
