PROBLEMA : Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

SOLUZIONE:

1 -  Creare un array di oggetti di squadre di calcio:
    1.1 - Le proprietà sono: nome, punti fatti, falli subiti;
    1.2 - Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0;
2 - Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti;
    2.1 - Math.floor(Math.random() * (max - min + 1)) + min;
3 - Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.