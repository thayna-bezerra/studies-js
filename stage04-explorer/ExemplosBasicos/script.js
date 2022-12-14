/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

/////////////////////
// MENU DE OPÇÕES //
/*let option
let items = []

while(option != 3) {
  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("Tchau")
  }
  
  console.log(option, items)

}*/

//////////////////////////
// JOGO DA ADIVINHAÇÃO //
/*let number = prompt("Advinhe o número que estou pensando? Está entre 0 e 10"); 
const randomNumber = Math.round(Math.random() * 10); //constante para não mudar mais o num gerado
let totalTentativas = 1;

while(randomNumber != number){//enquanto diferente de 
  number = prompt("Erro, tente novamente!")
  totalTentativas++;
}

if(randomNumber == 1){
  alert("Parabéns! O número que eu estava pensando era: " + number + ". Você advinhou o número em " + totalTentativas + " tentativa")
} else {
  alert("Parabéns! O número que eu estava pensando era: " + number +  ". Você advinhou o número em " + totalTentativas + " tentativas")
}*/

///////////////////////////////
// CRIANDO LISTA DE COMPRAS //
/*let items = [];

for (let item = 0 ; item < 10; item++){
  let itemName = prompt("Digite o item " + (item + 1) + "° item da lista");
  items[item] = itemName;
}

alert(items);*/

///////////////////////////////
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

////////////////////////////
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

////////////////////////////
// SOMAR DOIS NÚMEROS //
/*let n1 = prompt("Digite o número 1: "); 
let n2 = prompt("Digite o número 2: ");
let r = Number(n1) + Number(n2);

alert("Resultado Final: " + r); //prompt só retorna string, tem que adicionar função construtora*/