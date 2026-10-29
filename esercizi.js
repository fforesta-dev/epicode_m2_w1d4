/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript.
*/

/*
I datatype sono i tipi di cose che JavaScript sa riconoscere. Pensa alla tua cameretta: i pastelli stanno
nell'astuccio, i Lego nella loro scatola, e nessuno prova a colorare con un mattoncino. JavaScript fa lo stesso.
Prima di usare un valore guarda di che tipo è, perché con ogni tipo si fanno cose diverse.

string (stringa): parole e frasi, sempre tra virgolette. "ciao" è una stringa, "Ho un cane" pure.
Occhio al trucco: anche "12" tra virgolette è una stringa. Per JavaScript è il disegno di un numero, non un
numero da contare.

number (numero): i numeri veri, quelli con cui si fanno i conti. Si scrivono senza virgolette: 12, -3, 3.14
(i decimali vogliono il punto, non la virgola). Se li mescoli con le stringhe combini pasticci: "12" + 1 fa "121",
non 13.

boolean: ha due valori soli, true (vero) e false (falso). Come l'interruttore della luce.

undefined: una scatola che hai preparato e su cui hai scritto il nome, ma dentro non c'è niente. Quando succede,
JavaScript ci mette undefined da solo.

null: la scatola vuota apposta. Stavolta l'hai svuotata tu, e lo dici chiaramente.

object (oggetto): uno zaino con tante tasche, ognuna con la sua etichetta. Nella tasca "nome" c'è "Fido", in
quella "zampe" c'è 4. Si scrive tra parentesi graffe: { nome: "Fido", zampe: 4 }. Anche le liste come
["mela", "pera"], che si chiamano array, sono oggetti, solo un po' speciali.

Ne esistono altri due, bigint (per numeri giganteschi) e symbol (per etichette che non possono essere uguali a
nessun'altra). Servono di rado, e a un bambino non li spiegherei proprio.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript.
*/

/*
Un oggetto mette insieme informazioni che parlano della stessa cosa. Invece di tenere variabili sparse come nome e
cognome, ne creo una sola, e dentro ogni informazione ha la sua etichetta.

Ogni coppia di etichetta e valore si chiama proprietà. A sinistra dei due punti c'è la chiave, a destra il valore,
che può essere di qualunque tipo: una stringa, un numero, un array, perfino un altro oggetto. Per leggere una
proprietà si scrive il nome dell'oggetto, un punto e la chiave, per esempio io.nome.

Più facile da vedere che da spiegare. L'oggetto qui sotto mi rappresenta (nelle slide è l'esercizio 6, con nome,
cognome e hobby come proprietà).
*/

const io = {
  nome: 'Francesco',
  cognome: 'Foresta',
  hobby: ['sviluppare app'],
};

console.log(io);
console.log(io.nome + ' ' + io.cognome); // Francesco Foresta

/* ESERCIZIO 3
 Scrivi il codice necessario a effettuare un'addizione (una somma) dei numeri 12 e 20.
*/

const somma = 12 + 20; // il risultato resta salvato nella variabile
console.log(somma); // 32

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x); // 12

/* ESERCIZIO 5
 Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = 'Francesco';
console.log(name); // Francesco

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12).
*/

const differenza = 4 - x;
console.log(differenza); // -8 (con x - 4 verrebbe 8: l'ordine conta)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. È sufficiente utilizzare console.log().
*/

const name1 = 'john';
const name2 = 'John';

// Sono diverse: per JavaScript "j" e "J" sono due caratteri distinti
console.log(name1 !== name2); // true

// La stessa verifica scritta come "la loro uguaglianza è falsa", con l'operatore logico !
console.log(!(name1 === name2)); // true

// In minuscolo diventano uguali
console.log(name1.toLowerCase() === name2.toLowerCase()); // true

// Le due condizioni insieme, con l'operatore logico &&
console.log(name1 !== name2 && name1.toLowerCase() === name2.toLowerCase()); // true

// toLowerCase() restituisce una stringa nuova, quindi name2 è rimasta com'era
console.log(name2); // John
