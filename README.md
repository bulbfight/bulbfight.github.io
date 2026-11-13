# BULBFIGHT – Spielseite

Adresse: **https://bulbfight.github.io/**
Gehört zur GitHub-Organisation **bulbfight**, Repository **bulbfight.github.io**.

Ankündigungen, Bilder, Spielmodi, Fahrplan und Credits. Verlinkt auf die Entwickler-Seite https://elsegfredo.github.io/, deren Impressum und Datenschutzerklärung auch hier gelten. Beide Seiten zusammen veröffentlichen.

## Einmal einrichten

1. **Organisation anlegen:** github.com → Profilbild → *Your organizations* → *New organization* → **Free** → Name **`bulbfight`**.
2. **Repository** in dieser Organisation: Name genau **`bulbfight.github.io`**, Public.
3. **Alle Dateien dieses Ordners hochladen** (Cmd+A, hineinziehen, *Commit changes*). Es gibt keine Unterordner, das klappt also auch mit Safari.
4. *Settings → Pages* → *Deploy from a branch* → **main**, **/ (root)** → *Save*.
5. Nach ein bis zwei Minuten ist https://bulbfight.github.io/ online.

## Neuigkeiten ergänzen

- In `index.html` im Abschnitt `<div class="news">` einen neuen `<article class="post">`-Block einfügen. Die wichtigste Meldung bekommt `class="post featured"` (nur eine).
- Neue Bilder als WebP einfach mit hochladen (1600 px breit und eine `-800`-Version) und im HTML mit ihrem Dateinamen einbinden.

## Datenschutz beim Erweitern

Im Moment wird nichts von fremden Servern geladen, deshalb braucht es keinen Cookie-Banner. Eingebettete YouTube-, Instagram- oder Steam-Widgets, Google Fonts oder Analyse-Tools würden das ändern; dann muss die Datenschutzerklärung auf elsegfredo.github.io angepasst werden. Eigene Videos als MP4 und normale Links (z. B. später zur Steam-Seite) sind unproblematisch.

Schriften: Lilita One und Fredoka, SIL Open Font License, Lizenztexte `LilitaOne-OFL.txt` und `Fredoka-OFL.txt`.
