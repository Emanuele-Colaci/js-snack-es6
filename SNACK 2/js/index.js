//ARRAY DI OGGETTI DEGLI STUDENTI
let studenti = [
    {
        'id': 213,
        'name': 'Marco della Rovere',
        'grades': 78
    },
    {
        'id': 110,
        'name': 'Paola Cortellessa',
        'grades': 96
    },
    {
        'id': 250,
        'name': 'Andrea Mantegna',
        'grades': 48
    },
    {
        'id': 145,
        'name': 'Gaia Borromini',
        'grades': 74
    },
    {
        'id': 196,
        'name': 'Luigi Grimaldello',
        'grades': 68
    },
    {
        'id': 102,
        'name': 'Piero della Francesca',
        'grades': 50
    },
    {
        'id': 120,
        'name': 'Francesca da Polenta',
        'grades': 84
    }
];


//STAMPA STUDENTI 
const uppercaseStudenti = studenti.map((studente) => studente.name.toUpperCase() + ' voto ' + studente.grades + ' id ' + studente.id);
const listaNomiMaiuscolo = uppercaseStudenti.join('<br>');

const stampaStudenti = document.getElementById('studenti');
stampaStudenti.innerHTML = listaNomiMaiuscolo;

//STAMPA VOTI DEGLI STUDENTI
const studentiVotiAlt = studenti.filter((studente) => studente.grades > 70);
let listaStudentiVotiAlt = '';
studentiVotiAlt.forEach((studente) => {
    listaStudentiVotiAlt += `<li>${studente.name + ' Voto ' + studente.grades}</li>`;
});

const voti = document.getElementById('voti');
voti.innerHTML = listaStudentiVotiAlt;


//STAMPA ID DEGLI STUDENTI
const id120 = studenti.filter((studente) => studente.grades > 70 && studente.id > 120);
let listaid120 = '';

id120.forEach((studente) => {
    listaid120 += `<li>${studente.name + ' Voto ' + studente.grades + ' id ' + studente.id}</li>`;
});

const stampalistaid120 = document.getElementById('id');
stampalistaid120.innerHTML = listaid120;

