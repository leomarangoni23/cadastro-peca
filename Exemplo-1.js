'use strict';
var readlineSync = require("readline-sync");
let num_alunos = readlineSync.question("Número de alunos: ");   //Pergunta de números de alunos


if (num_alunos % 2 == 0) {    //If que testa se o número é par
    if (ndealunos == 0) {   //If que testa se o número é zero
        console.log("O número é zero");  //Resultado se o número é zero
    } else {
        console.log("O número " + num_alunos + " é par");  //Resultado se o número é par
    }
} else {
    console.log("O número " + num_alunos + " é ímpar");    //Resultado se o número é ímpar
}