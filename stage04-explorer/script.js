// CRIANDO LISTA DE COMPRAS //
let items = [];

for (let item = 0 ; item < 10; item++){
  let itemName = prompt("Digite o item " + (item + 1) + "° item da lista");
  items[item] = itemName;
}

alert(items);


// MÉDIA DE UM ESTUDANTE //
/*let nome = prompt("Digite seu nome: ");

let n1 = prompt("Digite a primeira nota: ");
let n2 = prompt("Digite a segunda nota: ");
let n3 = prompt("Digite a terceira nota: ");

let media = (Number(n1) + Number(n2) + Number(n3)) / 3
media = media.toFixed(2)

if(media > 6){
  alert("Parabéns, " + nome + "! Sua média foi: " + media);
} else{
  alert("Tente novamente, " + nome + "! Sua média foi: " + media);
}*/


// OPERAÇÕES MATEMÁTICAS //
/*let n1 = prompt("Digite um número: ")
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
alert('Resto da Divisão: ' + restDiv)*/


// SOMAR DOIS NÚMEROS //
/*let n1 = prompt("Digite o número 1: "); 
let n2 = prompt("Digite o número 2: ");
let r = Number(n1) + Number(n2);

alert("Resultado Final: " + r); //prompt só retorna string, tem que adicionar função construtora*/