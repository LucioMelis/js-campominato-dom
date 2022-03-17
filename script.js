console.log('JS Ok');

/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba -
la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e 
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba 
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
*/

// richiesta utente 
let richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
// richiamo del div nell' HTML 
const griglia = document.getElementById('square');
// variabile celleTotali + verifica richiesta utente 
let celleTotali = valoreCella(richiestaUtente);
// variabile array bombe generate 
let bombeGenerate = generaBombe(celleTotali);
console.log(bombeGenerate);
// variabile punteggio 
let punteggio = 0;


// ciclo di controllo sulla richiesta del cliente
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// funzione celleTotali inserendo negli argomenti la richiesta utente
function valoreCella(richiesta) {
    if (richiesta === 1) {
        totaleCelle = 100;
    } else if (richiesta === 2) {
        totaleCelle = 81;
    } else {
        totaleCelle = 49;
    }
    return totaleCelle;
}

// funzione genera bombe  
function generaBombe(numeroDifficoltà) {
    // creo un array vuoto 
    let bombe = [];
    // questo ciclo mi serve per generare 16 numeri random
    for (let i = 0; i < 16; i++) {

        let generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        // cicla fin tanto che l'array include il numero generato
        while (bombe.includes(generaNumero)) {
            generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        }
        // aggiungo all'array il numero generato dal ciclo
        bombe.push(generaNumero);
    }
    return bombe;
}

// utilizzo un ciclo for generare le celle 
for (let i = 0; i < celleTotali; i++) {
    // creo un elemento div 
    let celle = document.createElement('div');
    // in questa condizione verifico in base alle celle totali
    // quale classe aggiungere 
    if (celleTotali === 100) {
        celle.classList.add('cell-100');
    } else if (celleTotali === 81) {
        celle.classList.add('cell-81');
    } else {
        celle.classList.add('cell-49');
    }
    // appendo l'elemento alla griglia
    griglia.appendChild(celle);
    // implementazione del ciclo sulla cella
    celle.innerText = i + 1;
    // aggiungo un evento alla cella 
    celle.addEventListener('click', function () {
        // creo una variabile booleana che sarà l'arrey che include l'indentazione
        // più 1 perchè il ciclo parte sempre da zero 
        let bombeIncluse = bombeGenerate.includes(i + 1);
        // genero una condizione attraverso la booleana 
        if (bombeIncluse === true) {
            // se è vero aggiungerò una classe che colora le celle(bomba)
            celle.classList.add('cell-dangerous');
            // sulla griglia invece applico una classe che non permette l'interattività
            griglia.classList.add('block-cell-red');
            // richiamo il contenitore che deve apparire una volta che si svolge la condizione
            const gameOver = document.querySelector('.game-over');
            gameOver.style.display = 'block';

        } else {
            // altrimenti agiamo sulle celle senza bombe 
            // aggiungiamo la classe che colora le celle (senza bomba) 
            celle.classList.add('cell-good');
            // aggiungiamo la classe che permette di bloccare il click sulla stessa cella 
            celle.classList.toggle('click-none');
            // ho creato una variabile dichiarata all'esterno con valore 0
            // con il ciclo implemento il punteggio al click 
            punteggio += 1;
            console.log(punteggio);
            // creo una condizione di uscita dal ciclo 
            // aggiungendo le classi necessarie 
            if (punteggio === (celleTotali - 16)) {
                const winner = document.querySelector('.winner');
                winner.style.display = 'block';
                griglia.classList.add('click-none');
            }
        }
        // stampo il risultato sugli elementi p richiamati 
        document.getElementById('point').innerHTML = punteggio;

    })

}

