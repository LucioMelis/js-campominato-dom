console.log('JS Ok');

// creare una griglia di gioco quadrata,
// in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella,
// la cella cliccata si colora di azzurro.


// BONUS:
// L'utente indica un livello di difficoltà,
// in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49 (modificato) 


let richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));

// ciclo di controllo 
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// richiamo del div nell' HTML 
const griglia = document.getElementById('square');

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

// costante Celle Totali 
const celleTotali = colonneGriglia * righeGriglia;

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

