# Kleiderspenden-Registrierung

Dies ist eine Webanwendung zur Registrierung von Kleiderspenden für einen gemeinnützigen Verein. Die Spendenden können entscheiden, ob ihre Spende abgeholt oder vor Ort in der Geschäftsstelle abgegeben werden soll. Zudem kann ein Krisengebiet ausgewählt werden, in das die Spende gesendet werden soll.

## Tech-Stack

- **React** (mit Vite als Build-Tool)
- **Styled Components** für modulare und dynamische Styles
- **ESLint** & **Prettier** für Codequalität und Formatierung
- **Vitest** für Unit-Testing

## Features

- Responsives Design für verschiedene Geräte (Desktop, Tablet, Mobile)
- Formular zur Erfassung von Spenden (inkl. Validierung)
- Logik zur Prüfung von Abholadressen (Postleitzahlenvergleich)
- Bestätigungsseite nach erfolgreicher Registrierung
- Tests zur Sicherstellung der Funktionalität

## Entwicklung starten

```bash
npm install
npm run dev
```

## Tests ausführen

```bash
npm test
```

## Ordnerstruktur

```
├── public/                # Statische Dateien (z. B. favicon, index.html)
├── src/                   # Quellcode der Anwendung
│   ├── assets/            # Bilder, Logos, statische Medien
│   ├── components/        # Wiederverwendbare React-Komponenten
│   ├── pages/             # Seiten der Anwendung (z. B. Home, Registrierung)
│   ├── routes/            # React Routen
│   ├── styles/            # Globale Styled-Components oder Themes
│   ├── App.jsx            # Hauptkomponente
│   └── main.jsx           # Einstiegspunkt für React (mit Vite)
├── tests/                 # Testsetup und Integrationstests
├── eslint.config.js       # Linter-Konfiguration
├── vite.config.js         # Vite Build-Konfiguration
├── package.json           # Projekt-Metadaten und Abhängigkeiten
└── README.md              # Diese Datei
```