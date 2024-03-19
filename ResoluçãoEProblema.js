// Lógica escrita ---------------------------------------------------------------

// 1.Ler o texto ;

// 2.Ler o texto com transformando todas as letras em minúsculas ;

// 3.0 Separar o texto uilizando "";

// 4.0 Ler as vogais separando o "a", "e", "i", "o", "u" do texto;

// 5.Determinar que a ordem das vogais será em ordem crescente (Alfabética);

// 6.0  Exibir o texto em minúsculo; 

// 7. Exibir quais vogais o texto apresenta;

// 8. Contabilizar essas vogais;



// Lógica Programada ----------------------------------------------------------


let texto = "Desenvolver de Sistemas é a minha maior paixão";

let textoMinusculo = texto.toLowerCase();

let separar = textoMinusculo.split("");

let vogais = separar.filter((separar) => ["a", "e", "i", "o", "u"].includes(separar));

let ordem = vogais.sort();

console.log(`Texto: ${textoMinusculo}.`)

console.log(`Quais vogais tem: ${ordem.join(", ")}.`);

console.log(`Número de vogais: ${vogais.length}.`);

// Saída esperada: 
//Texto: desenvolver de sistemas é a minha maior paixão.
//Quais vogais tem: a, a, a, a, a, e, e, e, e, e, i, i, i, i, o, o, o.
//Número de vogais: 17.
