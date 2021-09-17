'use strict';
var entrada, nomepeca, pesopeca, quantpeca, length, opcao;
entrada = require("readline-sync");
while (opcao != 0) {
    console.log();
    console.log("1- Nome da peça");
    console.log("2- Peso da peça");
    console.log("3- Quantidade da peça");
    console.log("0- Sair do programa");

    opcao = entrada.question("Escolha a opcao de cadastro: ");

    switch (opcao) {
        case "1":
            console.log("--- Nome da Peça ---");
            console.log();
            nomepeca = entrada.question("Nome da peca: ");
            length = nomepeca.length;

            if (length < 3) {
                console.log("Não foi possivel cadastrar a peça, pois o numero de caractere do nome da peça é menor que 3.");
            } else {
                console.log("Peça cadstrada com sucesso.")
            }
            break;

        case "2":
            console.log("--- Peso da Peça ---");
            console.log();
            pesopeca = entrada.question("Qual o peso da peca: ");
            parseFloat(pesopeca);
            if (pesopeca > 100) {
                console.log("Peça cadastrada com sucesso.");
            } else {
                console.log("Não foi possivel cadastrar a peça, pois o peso dela é menor que 100");
            }
            break;

        case "3":
            console.log("--- Quantidade de Peças ---");
            console.log();
            quantpeca = entrada.question("Quantidade de pecas: ");

            if (quantpeca > 10) {
                console.log("Não foi possivel cadastrar a peça, pois a quntidade de peças é maior que 10");

            
            } else {
                console.log("Cadastro concluído");
            }
            break;

        case "0":
            console.log("Obrigado por usar o nosso programa")
            break;

        default:
            console.log("Opção inválida")
    }
}

