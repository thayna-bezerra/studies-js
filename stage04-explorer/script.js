// OPERAÇÕES MATEMÁTICAS //

let n1 = prompt("Digite um número: ")
let n2 = prompt("Digite outro número: ") //capturando em string

n1 = Number(n1); //convertendo de string para number
n2 = Number(n2);

const sum = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;
const restDiv = n1 % n2;

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da Divisão: ' + restDiv)


// SOMAR DOIS NÚMEROS //
/*let n1 = prompt("Digite o número 1: "); 
let n2 = prompt("Digite o número 2: ");
let r = Number(n1) + Number(n2);

alert("Resultado Final: " + r); //prompt só retorna string, tem que adicionar função construtora*/