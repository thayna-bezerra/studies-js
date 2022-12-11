const randomNumber = Math.round(Math.random() * 10);
let totalAttempts = 1;


function handleClick(event){
  event.preventDefault()

  console.log(randomNumber);
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    
    document
      .querySelector(".screen2 h2")
      .innerText = `acertou em ${totalAttempts}`
  }
  
  totalAttempts++;
}