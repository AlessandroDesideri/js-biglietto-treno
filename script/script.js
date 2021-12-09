// Chiedo all'utente i dati personali
const nome = prompt("Inserisci il tuo nome");
console.log(nome)

const cognome = prompt("Inserisci il tuo cognome");
console.log(cognome)

const birthYear = parseInt(prompt("Inserisci la tua età"));
console.log(birthYear)

// Chiedo i chilometri della tratta
const kmTratta = prompt ("Inserisci i chilometri da percorrere");
console.log(kmTratta)

// Applico lo sconto
let prezzoBigliettoIntero = (kmTratta * 0.21)
prezzoBigliettoIntero = prezzoBigliettoIntero.toFixed(2);
console.log(prezzoBigliettoIntero)

// Sconto applicato
let calcoloScontoVenti = ((prezzoBigliettoIntero * 20) / 100)
calcoloScontoVenti = calcoloScontoVenti.toFixed(2)
console.log(scontoApplicato)

let calcoloScontoQuaranta = ((prezzoBigliettoIntero * 40 ) / 100)
calcoloScontoQuaranta = calcoloScontoQuaranta.toFixed(2)
console.log(scontoApplicato)

const noSconto = 0

// Calcolo prezzo

if ( birthYear < 18 ){
    prezzoBiglietto = prezzoBigliettoIntero - calcoloScontoVenti
} else if ( birthYear >= 65 ){
    prezzoBiglietto = prezzoBigliettoIntero - calcoloScontoQuaranta
} else {
    prezzoBiglietto = prezzoBigliettoIntero - noSconto
}
console.log(prezzoDelBiglietto)

// Imposto il limite a due cifre decimali
prezzoBiglietto = prezzoBiglietto.toFixed(2)

// Stampa prezzo biglietto
prezzoDelBiglietto.innerHTML = `Il prezzo del biglietto ammonta a ${prezzoBiglietto}`

