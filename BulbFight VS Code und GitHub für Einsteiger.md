# BulbFight: VS Code und GitHub für Einsteiger

Nov 23, 2026 · @Leeevius

## Worum es geht

Am Ende hast du das BulbFight-Projekt auf deinem Mac, holst dir die Änderungen von El Segfredo und lädst deine eigenen Modelle hoch, alles aus VS Code. Dazu bringen wir Copilot Chat zum Laufen. Du brauchst etwa 30 Minuten, aber keine Vorkenntnisse.

**Was du schon hast:** VS Code ist installiert, und du bist mit deinem GitHub-Konto angemeldet.

**So hängt alles zusammen:**

- **GitHub** ist der gemeinsame Speicher im Internet. Dort liegt das Projekt unter dem Namen `bulbfight/bulbfight`.
- **Dein Projektordner** ist deine Kopie davon auf dem Mac, ein ganz normaler Ordner im Finder.
- **VS Code** gleicht den Ordner mit GitHub ab: Es holt die Änderungen von El Segfredo und lädt deine hoch.
- **Blender** und **Godot** öffnen und speichern nur Dateien in diesem Ordner. Von GitHub wissen sie nichts.

Drei Wörter brauchst du ab jetzt ständig:

| Wort | Was passiert |
| --- | --- |
| **Pull** | Holt die Änderungen des anderen von GitHub in deinen Ordner |
| **Commit** | Packt deine Änderungen zusammen und gibt ihnen einen Namen, zuerst nur auf deinem Mac |
| **Push** | Lädt deine Commits zu GitHub hoch. Erst jetzt sieht El Segfredo sie. |

Merksatz: **Pull, arbeiten, Commit, Push.**

## Schritt 1: Einladung annehmen und Git installieren

Das machst du nur einmal. Danach kann dein Mac mit GitHub sprechen und auch die großen 3D-Dateien laden.

### 1.1 Einladung annehmen

1. El Segfredo lädt dich ins Projekt ein. Dazu braucht er deinen GitHub-Benutzernamen: Er steht auf github.com oben rechts, wenn du auf dein Profilbild klickst.
2. Du bekommst eine Mail von GitHub mit dem Betreff „invited you to bulbfight/bulbfight“. Darin auf **View invitation** klicken, dann auf **Accept invitation**.
3. Keine Mail? Dann direkt https://github.com/bulbfight/bulbfight/invitations öffnen.
4. Prüfen: https://github.com/bulbfight/bulbfight muss sich jetzt öffnen. Siehst du „404“, ist die Einladung noch nicht angenommen.

### 1.2 Das Terminal öffnen

Das Terminal ist ein Fenster, in das man Befehle tippt. Du brauchst es nur für die Einrichtung.

1. **Cmd + Leertaste** drücken, `Terminal` tippen, **Enter**.
2. So führst du einen Befehl aus: aus dieser Anleitung kopieren, ins Terminal einfügen (**Cmd + V**), **Enter** drücken und warten, bis wieder eine leere Zeile mit `%` am Ende erscheint.

### 1.3 Homebrew installieren

Homebrew ist ein Helfer, der Programme für das Terminal installiert.

1. https://brew.sh öffnen und die lange Zeile unter **Install Homebrew** kopieren (das Symbol rechts daneben kopiert sie).
2. Im Terminal einfügen, **Enter**.
3. Nach deinem **Mac-Passwort** gefragt? Eintippen und **Enter**. Beim Tippen erscheinen keine Punkte oder Sterne. Das ist normal.
4. „Press RETURN to continue“: **Enter** drücken. Fragt der Mac nach den „Befehlszeilen-Entwicklerwerkzeugen“: **Installieren**.
5. Das dauert ein paar Minuten. **Wichtig:** Ganz am Ende steht **Next steps** mit zwei oder drei Befehlen. Diese Zeilen nacheinander kopieren und ausführen. Ohne sie findet der Mac Homebrew nicht.
6. Terminal schließen und neu öffnen. Prüfen mit `brew --version`: Es muss eine Versionsnummer erscheinen.

### 1.4 Git und Git LFS installieren

Git gleicht den Ordner mit GitHub ab. **Git LFS** ist nötig für große Dateien wie `.blend`, `.glb`, Bilder und Musik. Ohne Git LFS kommen statt der Modelle nur winzige Platzhalter-Dateien an.

Diese drei Befehle nacheinander ausführen:

```bash
brew install git git-lfs
```

```bash
git lfs install
```

```bash
git config --global user.name "Mayz"
```

Dann noch deine E-Mail (die, mit der du bei GitHub angemeldet bist) zwischen die Anführungszeichen setzen:

```bash
git config --global user.email "deine@mail.de"
```

Der Name und die Mail stehen später an jedem deiner Commits, damit man sieht, wer was gemacht hat.

## Schritt 2: Das Projekt in VS Code holen

Jetzt lädst du das Projekt von GitHub auf deinen Mac. Das nennt man **klonen**. Es passiert nur einmal, danach holst du nur noch Neuerungen mit Pull.

### 2.1 Klonen

1. **VS Code** öffnen. Ist noch ein Ordner offen: **Datei › Ordner schließen** (*File › Close Folder*).
2. **Cmd + Umschalt + P** drücken. Oben erscheint ein Eingabefeld, die Befehlspalette.
3. `Git: Klonen` tippen (englisch: `Git: Clone`) und **Enter**.
4. **Aus GitHub klonen** wählen (*Clone from GitHub*). Fragt VS Code, ob die Erweiterung „GitHub“ sich anmelden darf: **Zulassen**, im Browser bestätigen, zurück zu VS Code.
5. `bulbfight/bulbfight` tippen und den Eintrag anklicken.
6. Ein Finder-Fenster fragt nach dem Speicherort: **Dokumente** wählen, dann **Als Repository-Ziel auswählen** (*Select as Repository Destination*). VS Code legt dort den Ordner `bulbfight` an.
7. Unten rechts erscheint eine Meldung: **Öffnen** (*Open*).
8. VS Code fragt „Vertrauen Sie den Autoren?“: **Ja, ich vertraue den Autoren** (*Yes, I trust the authors*).

Dein Projektordner ist jetzt **Dokumente › bulbfight**. Ab jetzt arbeitest du nur noch in diesem Ordner.

### 2.2 Die großen Dateien holen

Zur Sicherheit einmal die 3D-Dateien nachladen:

1. In VS Code oben im Menü **Terminal › Neues Terminal**. Unten öffnet sich ein Terminal, das schon im Projektordner steht.
2. Eingeben und **Enter**:

```bash
git lfs pull
```

### 2.3 Prüfen, ob alles da ist

Im selben Terminal:

```bash
git remote -v
```

Dort muss zweimal `https://github.com/bulbfight/bulbfight.git` stehen. Links im Explorer siehst du außerdem die Ordner `art_src`, `assets` und `tools` und die Dateien `MODELLIEREN.md` und `project.godot`.

Um diesen Ordner später wieder zu öffnen: **Datei › Zuletzt geöffnet** (*File › Open Recent*) › `bulbfight`. Meist öffnet VS Code ihn beim Start auch von selbst.

## VS Code in 5 Minuten

Für BulbFight brauchst du von VS Code nur vier Bereiche. Ganz links ist eine schmale Leiste mit Symbolen, damit schaltest du zwischen ihnen um.

| Bereich | Symbol links | Tastenkürzel | Wofür |
| --- | --- | --- | --- |
| **Explorer** | zwei Blätter Papier | Cmd + Umschalt + E | Alle Ordner und Dateien des Projekts ansehen |
| **Quellcodeverwaltung** (*Source Control*) | Astgabel mit drei Punkten | Ctrl + Umschalt + G | Pull, Commit, Push. Eine Zahl am Symbol zeigt, wie viele Dateien du geändert hast. |
| **Terminal** | (unten) | Ctrl + ö oder Menü *Terminal › Neues Terminal* | Befehle eintippen, selten nötig |
| **Chat** (Copilot) | Sprechblase oben in der Titelleiste | Ctrl + Cmd + I | Fragen stellen, z. B. „Wie mache ich einen Commit?“ |

**Unten links in der blauen Leiste** steht `main`. Das ist der Hauptstand des Projekts, auf dem ihr beide arbeitet. Daneben zeigen kleine Pfeile, ob es auf GitHub Neues gibt (↓) oder ob du noch etwas hochladen musst (↑).

**Wichtig:**

- `.blend`- und `.glb`-Dateien **nie in VS Code öffnen**. Das sind Binärdateien, VS Code zeigt nur Zeichensalat, und Speichern kann sie kaputt machen.
- VS Code ist für dich nur die **Brücke zu GitHub**. Modelliert wird in Blender, angeschaut in Godot.
- Lesen kannst du in VS Code gut die Anleitungen: `MODELLIEREN.md` anklicken, dann oben rechts das Symbol mit der Lupe auf dem Blatt (*Vorschau öffnen*, **Cmd + Umschalt + V**).

## Pull, Commit, Push: der tägliche Ablauf

Jedes Mal, wenn du an BulbFight arbeitest, läuft es gleich: **vorher Pull, nachher Commit und Push.** Alles passiert in der **Quellcodeverwaltung** (links das Astgabel-Symbol, **Ctrl + Umschalt + G**).

### Vorher: Pull (Neuigkeiten holen)

1. Quellcodeverwaltung öffnen.
2. Oben in der Leiste auf die **drei Punkte ···** klicken, dann **Pull**.
3. Fertig, wenn unten links neben `main` kein ↓ mehr steht.

Mach das **immer**, bevor du Blender öffnest. Sonst arbeitest du an einem alten Stand.

### Arbeiten

In Blender modellieren, exportieren, in Godot anschauen (siehe nächster Abschnitt und `MODELLIEREN.md`). VS Code kann dabei offen bleiben. Es merkt von selbst, welche Dateien sich geändert haben.

### Nachher: Commit (Paket schnüren)

1. Zurück in VS Code, Quellcodeverwaltung öffnen. Unter **Änderungen** (*Changes*) stehen die geänderten Dateien. Ein **U** daneben heißt neu, ein **M** geändert.
2. Prüfen: Für ein neues Modell gehören genau drei Dateien dazu, z. B.
   - `art_src/huete/zauber_hut.blend`
   - `assets/models/huete/zauber_hut.glb`
   - `assets/models/huete/zauber_hut.glb.import` (legt Godot an)
3. Mit der Maus über jede dieser Dateien fahren und auf das **+** klicken. Sie wandern nach oben unter **Gestagte Änderungen** (*Staged Changes*). Das heißt: kommt ins Paket.
4. Oben ins Feld **Nachricht** (*Message*) kurz schreiben, was du gemacht hast, z. B. `Zauberhut`.
5. Auf den blauen Knopf **✓ Commit** klicken.

Dateien in der Liste, die du nicht angefasst hast? Lass sie einfach unten stehen (kein +). Im Zweifel El Segfredo fragen.

### Nachher: Push (hochladen)

1. Nach dem Commit wird der blaue Knopf zu **Änderungen synchronisieren** (*Sync Changes*). Draufklicken.
2. Fragt VS Code „Dadurch werden Commits per Push und Pull übertragen“: **OK**. Du kannst auch **OK, nicht mehr anzeigen** wählen.
3. Fertig, wenn neben `main` unten links weder ↑ noch ↓ steht. Auf https://github.com/bulbfight/bulbfight siehst du deinen Commit jetzt ganz oben.

Zum Schluss in Blender **Freigeben** klicken, damit El Segfredo die Datei auch ändern kann.

### Kurzfassung zum Merken

| Wann | In VS Code |
| --- | --- |
| Vor dem Arbeiten | ··· › **Pull** |
| Nach dem Arbeiten | Dateien mit **+** auswählen › Nachricht › **✓ Commit** › **Änderungen synchronisieren** |
| Danach in Blender | **Freigeben** |

## Dateien in Blender und Godot öffnen

Der Projektordner ist ein ganz normaler Ordner. Blender und Godot öffnen die Dateien direkt daraus, VS Code brauchst du dazu nicht.

### Einmal: Blender einrichten

1. Welche Blender-Version ihr benutzt, steht in der Datei `art_src/BLENDER_VERSION` (in VS Code im Explorer anklicken). Genau diese Version brauchst du auch.
2. Auf https://www.blender.org/download diese Version für **macOS Apple Silicon** laden (bei einem Mac mit Intel-Chip: macOS Intel). Ältere Versionen findest du dort unter *Previous Versions*.
3. Blender in den Ordner **Programme** ziehen und einmal öffnen. Fragt der Mac nach: **Öffnen**. Dann Blender wieder schließen.
4. In VS Code **Terminal › Neues Terminal** und eingeben:

```bash
bash tools/blender_einrichten.sh
```

Das installiert in Blender den Reiter **BulbFight** mit den Knöpfen zum Anlegen, Sperren und Exportieren. Erscheint eine Warnung zur Blender-Version, hast du eine andere als El Segfredo.

### Einmal: Godot einrichten

1. Godot öffnen. Es startet mit dem **Projektmanager**.
2. **Importieren** (*Import*) › im Finder **Dokumente › bulbfight › project.godot** wählen › **Importieren & Bearbeiten**.
3. Ab jetzt steht BulbFight in der Liste im Projektmanager. Doppelklick öffnet es.

### Dateien öffnen

| Was | So geht's |
| --- | --- |
| Modell in Blender öffnen | Blender › **File › Open** (Cmd + O) › Dokumente › bulbfight › `art_src` › z. B. `huete/zauber_hut.blend`. Oder im Finder doppelklicken. |
| Neues Modell anfangen | In Blender `art_src/_vorlage.blend` öffnen, **N** drücken, Reiter **BulbFight** › **Neues Modell anlegen** |
| Zuletzt benutzte Dateien | Blender › **File › Open Recent** |
| Aus VS Code heraus | Im Explorer Rechtsklick auf die Datei › **Im Finder anzeigen** (*Reveal in Finder*) › im Finder doppelklicken |
| Modell in Godot ansehen | BulbFight in Godot öffnen, unten links im **Dateisystem** › `assets/models/…` › Doppelklick auf die `.glb` |

Godot lädt neue oder geänderte `.glb` von selbst, sobald du ins Godot-Fenster wechselst. Nach einem Pull also einfach Godot anklicken und kurz warten.

Wie man in Blender modelliert und welche Regeln für Größe, Namen und Farben gelten, steht in `MODELLIEREN.md` im Projekt.

## Copilot Chat reparieren

Die Meldung „Fehler, irgendwas ist schiefgelaufen“ ist sehr allgemein. Meist liegt es an einer veralteten VS-Code-Version oder an der Anmeldung. Geh die Schritte der Reihe nach durch und teste nach jedem Schritt im Chat mit einer kurzen Frage wie `Hallo`.

1. **VS Code aktualisieren.** Copilot Chat funktioniert immer nur mit der neuesten VS-Code-Version ([GitHub-Hilfe](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues)). Oben im Menü **Code › Nach Updates suchen…** (*Check for Updates…*). Gibt es ein Update: installieren und VS Code neu starten.
2. **Erweiterungen aktualisieren.** Links das Symbol mit den vier Klötzchen (**Erweiterungen**, Cmd + Umschalt + X). Oben `Copilot` eintippen. Bei **GitHub Copilot Chat** und **GitHub Copilot**: Steht dort **Aktualisieren** (*Update*), draufklicken. Steht **Aktivieren** (*Enable*), auch draufklicken.
3. **Copilot einschalten.** Unten rechts in der Statusleiste ist ein kleines Copilot-Symbol (ein Gesicht mit Brille). Mit der Maus darüberfahren. Steht dort **KI-Funktionen verwenden** (*Use AI Features*) oder **Anmelden**: anklicken und den Schritten folgen ([VS-Code-Hilfe](https://code.visualstudio.com/docs/setup/copilot)). Ohne Abo bekommst du dabei automatisch den kostenlosen Plan **Copilot Free**.
4. **Kontingent prüfen.** Ein Klick auf dasselbe Symbol zeigt, wie viel vom Monatskontingent verbraucht ist. Steht dort 100 %, ist Copilot Free für diesen Monat aufgebraucht. Dann hilft nur Warten bis zum nächsten Monat.
5. **Abmelden, neu laden, anmelden.** Das ist der offizielle Tipp von GitHub, wenn man angemeldet ist, Copilot aber nicht geht:
   1. Links unten auf das **Personen-Symbol** (Konten) klicken, über deinen GitHub-Namen fahren, **Abmelden** (*Sign out*).
   2. **F1** drücken (auf manchen Mac-Tastaturen **fn + F1**), `Developer: Reload Window` tippen, **Enter**.
   3. Nach dem Neuladen wieder über das Personen-Symbol mit GitHub anmelden.
6. **Chat-Erweiterung einmal aus- und einschalten.** In den Erweiterungen bei **GitHub Copilot Chat** auf **Deaktivieren** (*Disable*), dann wie in Schritt 5 `Developer: Reload Window`, danach wieder **Aktivieren**. Das hat vielen geholfen ([GitHub-Community](https://github.com/orgs/community/discussions/167353)).
7. **Anderes Modell wählen.** Unter dem Chat-Eingabefeld steht der Name des KI-Modells. Draufklicken und ein anderes wählen. Manche Modelle sind zeitweise überlastet.
8. **Störung bei GitHub?** Auf https://www.githubstatus.com nachsehen, ob bei Copilot gerade etwas gestört ist. Dann ein paar Stunden später nochmal versuchen.

**Geht es immer noch nicht?** Dann die genaue Fehlermeldung holen: Menü **Ansicht › Ausgabe** (*View › Output*). Rechts oben im Ausgabefenster in der Auswahlliste **GitHub Copilot Chat** wählen. Einen Screenshot davon an El Segfredo schicken. Darin steht meist, woran es wirklich liegt.

**Wichtig:** Für BulbFight brauchst du Copilot nicht. Pull, Commit, Push, Blender und Godot funktionieren alle auch ohne. Copilot ist nur praktisch, um zwischendurch Fragen zu stellen.

## Wenn etwas schiefgeht

Die meisten Probleme kommen in den ersten Tagen und haben eine einfache Lösung. Finde deine Meldung in der Tabelle.

| Meldung oder Problem | Was tun |
| --- | --- |
| **„Repository not found“** oder **404** beim Klonen | Die Einladung ist noch nicht angenommen, oder VS Code ist mit einem anderen GitHub-Konto angemeldet. Schritt 1.1 prüfen. |
| **„git-lfs was not found on your path“** | Git LFS fehlt oder VS Code lief schon vor der Installation. Schritt 1.4 nochmal machen, dann VS Code ganz beenden (**Cmd + Q**) und neu öffnen. |
| **„Please tell me who you are“** beim Commit | Name und E-Mail fehlen. Die beiden `git config`-Befehle aus Schritt 1.4 ausführen. |
| **Push abgelehnt** (*rejected*, *fetch first*) | El Segfredo hat in der Zwischenzeit etwas hochgeladen. ··· › **Pull**, dann nochmal **Änderungen synchronisieren**. |
| **„locked by …“** beim Push | Du hast eine Datei geändert, die El Segfredo gesperrt hat. In der Quellcodeverwaltung über die Datei fahren, auf den **Pfeil zurück ↶** klicken (*Änderungen verwerfen*), dann nochmal synchronisieren. |
| Blender kann nicht speichern, **Datei schreibgeschützt** | Du hast die Datei nicht gesperrt. In Blender im Reiter BulbFight **Sperren** klicken. |
| Blender: **„Die Datei hat schon jemand gesperrt“** | El Segfredo arbeitet gerade daran. Kurz absprechen. |
| **Konflikt** (*Merge Conflict*) bei einer `.blend` oder `.glb` | Nichts anklicken, El Segfredo Bescheid geben. Bei 3D-Dateien kann nur eine Fassung bleiben. |
| Eine `.blend` lässt sich nicht öffnen, sie ist nur ca. 130 Bytes groß | Die echte Datei wurde nicht geladen. Im VS-Code-Terminal: `git lfs pull` |
| VS Code fragt ständig nach der Anmeldung | Abmelden und neu anmelden wie in Copilot Schritt 5. |
| Du weißt nicht, was du gerade geändert hast | Quellcodeverwaltung öffnen: Dort steht jede geänderte Datei. Im Zweifel nichts committen und fragen. |

Wenn nichts davon passt: Screenshot vom ganzen VS-Code-Fenster an El Segfredo schicken. Kaputtmachen kannst du kaum etwas. Alles, was einmal auf GitHub ist, lässt sich wiederherstellen.

## Quellen

- [GitHub Docs: Troubleshoot common issues (Copilot)](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues)
- [VS Code Docs: Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/setup/copilot)
- [GitHub Community: Copilot Chat not working even after reinstalling VS Code](https://github.com/orgs/community/discussions/167353)
- [Homebrew](https://brew.sh)
