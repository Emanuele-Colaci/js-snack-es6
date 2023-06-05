//FUNZIONE PER GENERARE NUMERO CASUALE
function generaNumeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//ARRAY OGGETTI
const squadre = [
    {nome: "Juventus", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)},
    {nome: "Roma", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)},
    {nome: "Milan", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)},
    {nome: "Inter", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)},
    {nome: "Lecce", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)},
    {nome: "Fiorentina", puntiFatti: generaNumeroCasuale(0, 5), falliSubiti: generaNumeroCasuale(0, 5)}
];

//STAMPA IN CONSOLE NOME E FALLI DELLE SQUADRE USANDO LA DESTRUTTURAZIONE E CREANDO UN NUOVO ARRAY GRAZIE A .map
const squadreNomiFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
console.log(squadreNomiFalli);