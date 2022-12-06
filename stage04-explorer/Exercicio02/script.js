let students = [
  {
    name: "Natasha Romanoff",
    firstScore: 7,
    secondScore: 10,
  },

  {
    name: "Donald Blake",
    firstScore: 3,
    secondScore: 10,
  },

  {
    name: "Clint Barton",
    firstScore: 7,
    secondScore: 10,
  }
]

function CalculateAverage(first, second){
  let media = ((first + second) / 2).toFixed(2);
  return media;
}

function CheckPerfomanceStudents(student){
  let mediaAtual = CalculateAverage(student.firstScore, student.secondScore);

  if(mediaAtual >= 7){
    return `A media do(a) aluno(a) ${student.name} foi de ${mediaAtual}.
    Parabens, ${student.name}! Você foi aprovado(a)!`;
  } else {
    return `A media do aluno ${student.name} foi de ${mediaAtual}.
    Tente novamente, ${student.name}!`;
  }
}

for(let student of students){
  let message = CheckPerfomanceStudents(student)
  alert(message)
}