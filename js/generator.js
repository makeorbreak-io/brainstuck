let verb1 = [
 'ajudar',
 'auxiliar',
 'matar',
 'comer'
];

let idea = [
    'Uma aplicação'
];

let actor = [
    'médico'
];

let objective = [
    'a defender',
    'a cuidar'
];

let target = [
    'Portugueses',
    'Europeus',
    'pacientes'
];


function generator() {
    return `${randomizer(idea)} para ${randomizer(verb1)}  ${randomizer(actor)} ${randomizer(objective)} ${randomizer(target)}`; 
}

function randomizer(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function writeWord() {

    var myElement = document.getElementById("word").innerHTML = generator();
}