let verb1 = ["ajudar", "auxiliar", "matar", "comer"];

let idea = ["Uma aplicação", "Um serviço", "Uma plataforma"];

let actor = ["médico"];

let objective = ["a defender", "a cuidar"];

let target = ["Portugueses", "Europeus", "pacientes"];

function randomColor() {
  var colors = ["#ff0000", "#00ff00", "#0000ff", "#00FFFF"];

  var random_color = randomizer(colors);
  document.body.style.backgroundColor =  random_color;
}

function generator() {
  return `${randomizer(idea)} para ${randomizer(verb1)}  ${randomizer(
    actor
  )} ${randomizer(objective)} ${randomizer(target)}`;
}

function randomizer(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function writeWord() {
  var myElement = (document.getElementById("word").innerHTML = generator());
  randomColor();
}
