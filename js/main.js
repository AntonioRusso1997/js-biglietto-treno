/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// Vado a creare la variabile fissa del prezzo al km
var priceKm = 0.21;

//Creo le variabili prompt per richiedere le informazioni (km ed età)
var Km = parseInt(prompt("Quanti km devi percorrere?"));
console.log("Km da percorrere: " + Km + " Km");

var eta = parseInt(prompt("Quanti anni hai?"));
console.log("Età del passegero: " + eta + " anni");

//Creo la variabile del prezzo base (con arrotondamento a due cifre dopo la virgola)
var price = priceKm * Km;
console.log("prezzo base: " + price.toFixed(2) + "€");

//Creo variabili per eventuale sconto se minorenni o over 65
if (eta < 18)
{
    console.log("prezzo ridotto: " + (price * 0.8).toFixed(2) + " €");
}
else (eta >= 65)
{
    console.log("prezzo ridotto: " + (price * 0.6).toFixed(2) + " €");
}
