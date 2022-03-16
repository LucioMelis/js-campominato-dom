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

let richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));

// ciclo di controllo 
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// richiamo del div nell' HTML 
const griglia = document.getElementById('square');
// costante Celle Totali 
const celleTotali = colonneGriglia * righeGriglia;
// varibili colonne riga 
let colonneGriglia = 0;
let righeGriglia = 0;


if (richiestaUtente === 1) {
    colonneGriglia = 10;
    righeGriglia = 10;
} else if (richiestaUtente === 2) {
    colonneGriglia = 9;
    righeGriglia = 9;
} else {
    colonneGriglia = 7;
    righeGriglia = 7;
}


// utilizzo un ciclo for generare le celle 
for (let i = 0; i < celleTotali; i++) {

    let celle = document.createElement('div');

    if (celleTotali === 100) {
        celle.classList.add('cell-100');
    } else if (celleTotali === 81) {
        celle.classList.add('cell-81');
    } else {
        celle.classList.add('cell-49');
    }

    griglia.appendChild(celle);
    console.log(celle);
    celle.innerText = i + 1;
    celle.addEventListener('click', function () {
        celle.classList.toggle('cell-color');
    })
}

