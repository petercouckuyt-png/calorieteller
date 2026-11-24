# Calorieteller

Een app voor op de gsm om je gewicht, BMI en calorieën bij te houden. Ze werkt zonder account, en je gegevens blijven op je eigen gsm. Peter en Isabelle gebruiken elk dezelfde link op hun eigen gsm; jullie gegevens staan dus los van elkaar.

## Bestanden

| Bestand | Wat |
|---|---|
| `index.html` | De volledige app |
| `voeding.js` | Ingebouwde lijst van 183 gewone voedingsmiddelen (kcal per 100 g en portiegewichten) |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Naam en icoon voor het startscherm |
| `sw.js` | Zorgt dat de app ook zonder internet opent |

## Online zetten (eenmalig, gratis) met GitHub Pages

1. Maak een gratis account op github.com.
2. Klik op **New repository**, geef het bv. de naam `calorieteller` en kies **Public**.
3. Klik op **uploading an existing file** en sleep alle bestanden uit deze map erin (niet de map `.claude`). Klik daarna op **Commit changes**.
4. Ga naar **Settings → Pages**. Kies bij *Branch* `main` en `/ (root)` en klik op **Save**.
5. Na een minuutje staat de app op `https://<jouw-gebruikersnaam>.github.io/calorieteller/`.

De link is openbaar, maar zonder gegevens: wat je invult, blijft op je eigen gsm.

## Op de gsm zetten

Open de link en zet de app op je startscherm:
- **Android (Chrome):** menu ⋮ → *Toevoegen aan startscherm* of *App installeren*.
- **iPhone (Safari):** deelknop → *Zet op beginscherm*.

Open de app daarna altijd via het icoon. Op een iPhone kan Safari de gegevens van een gewone website wissen als je die een tijd niet gebruikt; een app op het beginscherm heeft daar minder last van.

## Dagelijks gebruik

- **Gewicht:** elke ochtend in het tabblad ⚖️ Gewicht. Je BMI staat altijd bovenaan.
- **Eten:** via *＋ Eten of drinken toevoegen*. Druk op 🎤 en zeg alles in één keer, bv. "2 boterhammen met kaas, een koffie met melk en een appel" (of typ het en druk op Enter). De app kiest zelf de producten en porties en toont een **controlelijst**. Tik op een regel om de hoeveelheid of het product aan te passen, en daarna op *Alles toevoegen*. Wat je aanpast, onthoudt de app: kies je één keer Gouda met 20 g per snee, dan wordt "kaas" voortaan meteen Gouda van 20 g.
  - **Gewone voeding** (brood, kaas, fruit, groenten, vlees, dranken …) zit in de ingebouwde basislijst, met porties zoals *1 snee*, *1 middelgroot* of *glas 200 ml*. Voor producten zonder vaste portie (vlees, rijst, pasta …) kies je het gewicht.
  - **Verpakte producten:** scan de **barcode** (▥) of tik de cijfers onder de barcode in.
  - **Speciaalbier of wijn** die niet in de lijst staat: kies *🍺 Bier of wijn: berekenen via alcohol%*. Je geeft het alcoholpercentage en de hoeveelheid in (en eventueel de koolhydraten van het etiket), en de app berekent de kcal. Een Duvel van 8,5% en 33 cl geeft zo 153 kcal uit de alcohol alleen; de suikers komen daar nog bij.
  - Staat iets er niet in, geef dan de kcal één keer zelf in.
  - Alles wat je toevoegt, komt in *Mijn producten* en staat de volgende keer bovenaan.
- **Polar Flow:** neem 's avonds het getal uit het dagoverzicht van Polar Flow over. Vul het **totaal verbruik** in (inclusief rustverbruik) of enkel de **actieve kcal**, niet allebei. Controleer in Polar welk getal het is. Laat je het leeg, dan rekent de app met een schatting.

## Back-up

Je gegevens staan enkel op de gsm. Maak dus af en toe een back-up via ⚙️ Instellingen → *Back-up maken* en bewaar het bestand bv. in je mail of cloud. De app herinnert je daar elke 14 dagen aan. Een back-up van de oude app *Ons gewicht* kun je ook terugzetten; je kiest dan van wie de metingen zijn.

## Aanpassen

Pas je iets aan in `index.html`, verhoog dan ook het nummer in `sw.js` (`calorieteller-1` → `calorieteller-2`). Anders blijft de gsm de oude versie tonen.

## Beperkingen

- De basislijst komt uit de Amerikaanse voedingstabel USDA FoodData Central (SR Legacy, 2018, publiek domein). Amerikaanse producten kunnen wat afwijken van Belgische. Glazen en kopjes zijn vaste maten waarbij 1 ml als 1 g telt.
- Open Food Facts laat apps buiten hun eigen website niet meer op **naam** zoeken (getest op 23/11/2026). Opzoeken via **barcode** werkt wel.
- Spraak via de 🎤-knop werkt in Chrome op Android. Op een iPhone verschijnt de knop alleen als Safari spraakherkenning aanbiedt; de microfoon van het toetsenbord werkt altijd.
- De barcodescanner met camera werkt in Chrome op Android. Op een iPhone tik je de cijfers in.
- Calorieën en dagbudget zijn schattingen. Dit is een hulpmiddel om op te volgen, geen medisch advies.
