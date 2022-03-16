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

const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', function () {
    creazioneGrigliaClasse(100, 'cell-100');
})
buttonMedium.addEventListener('click', function () {
    creazioneGrigliaClasse(81, 'cell-81');
})
buttonHard.addEventListener('click', function () {
    creazioneGrigliaClasse(49, 'cell-49');
})


// utilizzo un ciclo for generare le celle attraverso una funzione
function creazioneGrigliaClasse(celleTotali, classe) {

    const griglia = document.getElementById('square');

    griglia.innerHTML = '';

    for (let i = 0; i < celleTotali; i++) {

        let celle = document.createElement('div');

        celle.innerText = i + 1;

        celle.classList.add(classe);

        griglia.appendChild(celle);

        celle.addEventListener('click', function () {
            celle.classList.toggle('cell-color');
        })
    }
}


