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


// ciclo di controllo 
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// funzione celleTotali 
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
    let bombe = [];
    for (let i = 0; i < 16; i++) {
        // questo ciclo mi serve per generare 16 numeri random
        let generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        while (bombe.includes(generaNumero)) {
            generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        }
        bombe.push(generaNumero);
    }
    return bombe;
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

    celle.innerText = i + 1;

    celle.addEventListener('click', function () {

        let prova = bombeGenerate.includes(i + 1);

        if (prova === true) {
            celle.classList.add('cell-dangerous');
            griglia.classList.add('block-cell-red');
            const gameOver = document.querySelector('.game-over');
            gameOver.style.display = 'block';

        } else {
            celle.classList.add('cell-good');
            celle.classList.toggle('click-none');
            punteggio += 1;
            console.log(punteggio);
            if (punteggio === (celleTotali - 16)) {
                const winner = document.querySelector('.winner');
                winner.style.display = 'block';
                griglia.classList.add('click-none');
            }
        }

    })
}

