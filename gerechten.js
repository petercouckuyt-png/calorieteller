// Uitbreiding van de basislijst met gerechten en rauwe ingrediënten (om zelf gerechten samen te stellen).
// Bron: USDA FoodData Central, SR Legacy (april 2018), publiek domein. kcal per 100 g; porties in gram.
// Gerechten zijn Amerikaanse recepten en producten: een benadering, geen Belgische versie.
// [naam, kcal/100 g, [[portie, gram]...], fdc_id, extra zoekwoorden]
// "kom (± 240 ml)" = 1 Amerikaanse cup met het gewicht uit de USDA-tabel. Soepen: kom van 250 ml, 1 ml = 1 g.
// Afgeleide porties: kipnuggets per stuk = 4 stuks ÷ 4; bloem per eetlepel = 1 cup ÷ 16.
const DISHES=[
/* gerechten */
["Rundsstoofpot met groenten (VS, blik)",99,[["1 kom (± 240 ml)",196]],173330,"stoofpot"],
["Chili con carne met bonen (VS, blik)",107,[["1 kom (± 240 ml)",242]],172097,"chili"],
["Aardappelsalade met ei",157,[["1 portie (± 120 ml)",125]],173343,"patattensalade"],
["Koolsla (coleslaw)",153,[["1 bakje (fastfood)",116],["1 kom (± 240 ml)",191]],170300,"coleslaw"],
["Tonijnsalade",187,[["1 kom (± 240 ml)",205]],175160,"tonijn salade"],
["Spaghetti met balletjes in tomatensaus (VS, blik)",100,[["1 kom (± 240 ml)",246]],172099,"balletjes"],
["Ravioli met kaas en tomatensaus (restaurant)",154,[["1 bord (restaurant)",427]],169038,"ravioli"],
["Cheeseburger (fastfood)",270,[["1 stuk",127]],170691,"burger"],
["Fishburger met tartaar (fastfood)",257,[["1 stuk",220]],170296,"burger vis"],
["Clubsandwich met kip en spek (fastfood)",220,[["1 stuk",268]],170752,"sandwich club"],
["Kipnuggets",307,[["1 stuk",16],["6 stuks",96],["10 stuks",160]],170718,"nuggets"],
["Uienringen (gefrituurd)",411,[["1 portie (18 ringen)",117]],170697,"ajuinringen"],
["Omelet",154,[["omelet van 1 ei",61]],172185,"omelet"],
["Gebakken rijst / nasi (zonder vlees)",174,[["1 kom (± 240 ml)",137]],167668,"nasi"],
["Loempia",250,[["1 stuk",89]],167667,"loempia springroll"],
["Macaroni met kaas (pakje)",190,[["1 kom (± 240 ml)",198]],173341,"macaroni"],
["Erwtensoep met ham",75,[["kom (250 ml)",250]],172916,""],
["Champignonsoep",39,[["kom (250 ml)",250]],172915,""],
["Kippensoep met vermicelli",24,[["kom (250 ml)",250]],172909,""],
["Minestrone",34,[["kom (250 ml)",250]],172913,"soep"],
["Pizza pepperoni (diepvries)",274,[["¼ pizza (Ø 30 cm)",127],["hele pizza (Ø 30 cm)",532]],172096,"pizza"],
/* rauwe ingrediënten */
["Rundvlees om te stoven, rauw (schouder)",196,[],170813,"rundvlees rund"],
["Rundergehakt, rauw",254,[],174036,"gehakt"],
["Varkensvlees, rauw (schouder)",186,[],167849,"varkensvlees varken"],
["Kipfilet, rauw",120,[],171077,"kipfilet"],
["Spek, rauw",393,[["1 sneetje",28]],168277,"spek spekjes"],
["Tarwebloem",364,[["1 eetlepel",7.8]],168894,"bloem meel"],
["Aardappelen, rauw",77,[["1 middelgroot",213],["1 klein",170],["1 groot",369]],170026,"aardappel patatten"],
["Ei, rauw",143,[["1 middelgroot",44],["1 groot",50]],171287,"ei eieren"],
["Rijst wit, droog (ongekookt)",365,[],168877,"rijst"],
["Pasta, droog (ongekookt)",371,[],169736,"pasta spaghetti macaroni"]
];
