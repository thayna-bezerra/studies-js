const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let randomNumber = Math.round(Math.random() * 10);
let totalAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', pressEnter)

//Funções callback
function handleTryClick(event){
  event.preventDefault() //nao enviar o form (n faça o padrao)

  const inputNumber = document.querySelector("#inputNumber")
  
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
    alert("Por favor insira um número de 0 a 10!")
  }

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();
    
    screen2.querySelector("h2").innerText = `Acertou em ${totalAttempts} tentativas`
  }
  
  inputNumber.value = "";
  totalAttempts++;
}

function handleResetClick(){
  toggleScreen();
  totalAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function pressEnter(event){
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick();
  }
}