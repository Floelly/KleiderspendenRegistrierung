# Kleiderspenden-Registrierung

Dies ist eine Webanwendung zur Registrierung von Kleiderspenden für einen gemeinnützigen Verein. Die Spendenden können entscheiden, ob ihre Spende abgeholt oder vor Ort in der Geschäftsstelle abgegeben werden soll. Zudem kann ein Krisengebiet ausgewählt werden, in das die Spende gesendet werden soll.

Die gesamte Webanwendung ist im Rahmen einer Fallstudie an der Uni erstellt worden und alle Daten, Bezüge und Statements sind fiktiv.

## Tech-Stack

- **React** (mit Vite als Build-Tool)
- **Styled Components** für modulare und dynamische Styles
- **ESLint** & **Prettier** für Codequalität und Formatierung
- **Vitest** für Unit-Testing (kaum implementiert)
- **React Icons** für alle Icons inklusive des Logos
- **React Router Dom** & **React Router Hash Links** für Navigation
- **React Hook Form** & **zod** für Forms und deren Validierung

## Features

- Single Page Application (Infinite Scroll für alle wesentlichen Pages + Impressum und Datenschutzerklärung seperat)
- Flüssige Navigation zwischen den Infinite-Scroll-Pages und anderen
- Stufenloses Responsives Design für verschiedene Geräte (Desktop, Tablet, Mobile) //Fernsehgeräte nur suboptimal
- Formular zur Erfassung von Spenden (inkl. Validierung)
- Logik zur Prüfung von Abholadressen (Postleitzahlenvergleich)
- Bestätigungsseite nach erfolgreicher Registrierung

## Entwicklung starten

```bash
npm install
npm run dev
```

## Tests ausführen (wenige vorhanden)

```bash
npm test
```

## Ordnerstruktur

```
├── public/                # Statische Dateien (z. B. favicon)
├── src/                   # Quellcode der Anwendung
│   ├── assets/            # Bilder, Logos, Json-Files, statische Medien
│   ├── components/        # React-Komponenten & Styled-Components
│   │   ├── layout/        # größere Componenten & Widgets (z. B. Modal, Section)
│   │   └── ui/            # Basis Componenten (z. B. Button, GridContainer)
│   ├── features/          # Bislange nur Registrierungs Feature
│   ├── hooks/             # React hooks (z. B. bodyLock script)
│   ├── layout/            # Basis Layout der Seite, Navigationsmenü, Header, Footer
│   ├── pages/             # Seiten der Anwendung (z. B. About, Registrierung, Impressum)
│   ├── styles/            # Globale Styled-Components oder Themes
│   ├── utils/             # Globale util Funktionen (z. B. printNode)
│   ├── App.jsx            # Hauptkomponente
│   └── main.jsx           # Einstiegspunkt für React (mit Vite)
├── tests/                 # Testsetup (später Integrationstests)
├── eslint.config.js       # Linter-Konfiguration (nicht optimal)
├── vite.config.js         # Vite Build-Konfiguration
├── package.json           # Projekt-Metadaten und Abhängigkeiten
├── index.html             # Aker der React App
└── README.md              # Diese Datei
```