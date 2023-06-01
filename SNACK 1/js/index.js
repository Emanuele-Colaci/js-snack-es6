//ARRAY VIP
let vip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//MODIFICA ARRAY VIP
const new_vip = vip.map((nome, index) =>{
    return{
        'nome del tavolo': 'Tavolo Vip',
        'nome ospite': nome,
        'posto occupato': index + 1
    };
});

console.log(new_vip)

// Generazione e stampa della lista dei posti occupati
const postiOccupati = new_vip.map((vip) => vip['nome ospite'] + ' ' + vip['posto occupato']);
console.log(postiOccupati);