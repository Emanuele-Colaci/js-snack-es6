//ARRAY OGGETTI 
const biciclette = [
    {
        nome: "bici", 
        peso: 8
    },
    {
        nome: "bici", 
        peso: 5
    },
    {
        nome: "bici", 
        peso: 10
    },
    {
        nome: "bici", 
        peso: 3
    }
];

//CICLO forEach PER DARE UNA CONDIZIONE PER TROVARE LA BICI CON IL PESO MINORE

let biciPesoMinore;

biciclette.forEach((bici) => {
    if(!biciPesoMinore  || bici.peso < biciPesoMinore.peso){
        biciPesoMinore = bici;
    }
});

//STAMPO IN CONSOLE UTILIZZANDO DESTRUCTURING E TEMPLATE LITERAL

if(biciPesoMinore){
    const {peso} = biciPesoMinore;
    console.log(`La bici con peso minore è di ${peso} kg.`);
};