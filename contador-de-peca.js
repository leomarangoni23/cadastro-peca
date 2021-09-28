'use strict';
var entrada, nomepeca, pesopeca, length, opcao, tamanhoListaNomePeca, i, i1, resp, indice, resp1, resp2, quantPeca, numeroListaA, numeroListaB, tamanhoListaPesoPeca, tamanhoListaQuantPeca, valorPesoPeca, valorQuantPeca; //Variaveis
let listaNomePeca = [""];
listaNomePeca.pop();
let listaPesoPeca = [""];
listaPesoPeca.pop();
let listaQuantPeca = [""];
listaQuantPeca.pop();
numeroListaA = 0;
numeroListaB = 0;
valorPesoPeca = 100
valorQuantPeca = 10;

entrada = require("readline-sync");

voltar: while (opcao != 0) {
    //Menu
    console.log("---Cadastro de peças---")
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
            do { // Fazer até a resposta for diferente de SIM
                nomepeca = entrada.question("Nome da peca: "); // Qual é o nome da peça
                length = nomepeca.length; // Tamanho de letras do nome da peça

                if (length < 3) { // Se o tamanho for menor que 3
                    console.log("Não foi possivel cadastrar a peça, pois o numero de caractere do nome da peça é menor que 3.");
                } else {
                    console.log("Peça cadastrada com sucesso.")
                    listaNomePeca.push(nomepeca);
                }
                resp = entrada.question("Voce quer adicionar uma peca [SIM/NAO] ").toUpperCase();
            }
            while (resp == "SIM")
            break;

        case "2":
            console.log(numeroListaA);
            console.log("--- Peso da Peça ---");
            console.log();
            tamanhoListaNomePeca = listaNomePeca.length;
            if (tamanhoListaNomePeca == 0) { // Se não tiver nenhuma peça cadastrada, voltar ao menu
                console.log("Não há nenhuma peça cadastrada");
                continue voltar;
            }
            for (i = numeroListaA; i < tamanhoListaNomePeca; i++) { // Looping até que todas as peças tiverem o seu peso
                do { // Fazer ate que a resposta seja diferente de NAO e peso da peça menor que 100
                    pesopeca = entrada.question("Peso da peca " + listaNomePeca[i] + " "); // Peso da peça
                    parseFloat(pesopeca);

                    if (pesopeca > valorPesoPeca) { // Se a peça tiver um peso maior que 100
                        console.log("Peça cadastrada com sucesso.");
                        listaPesoPeca.push(pesopeca);

                    } else {
                        console.log("Não foi possivel cadastrar a peça, pois o peso dela é menor que 100");
                        resp1 = entrada.question("O valor foi digitado certo: [SIM/NAO]").toUpperCase();

                    }
                }
                while ((resp1 == "NAO") && (pesopeca < valorPesoPeca))


                if ((resp1 == "SIM") && (pesopeca < valorPesoPeca)) { // Se a resposta for igual a SIM e o peso da peça menor que 100, então tirar do mesmo indice o nome da peça do vetor listaNomePeca
                    listaNomePeca.splice(i, 1);
                    i--;
                    if (listaQuantPeca[i] != "") { // Se no mesmo indice estiver algo diferente de nada, então tirar esse valor do vetor listaQuantPeca
                        listaQuantPeca.splice(i, 1);
                    }
                }
                tamanhoListaNomePeca = listaNomePeca.length;
            }
            tamanhoListaNomePeca = listaNomePeca.length;
            numeroListaA = tamanhoListaNomePeca;

            break;

        case "3":
            console.log("--- Quantidade de Peças ---");
            console.log();
            tamanhoListaNomePeca = listaNomePeca.length;
            if (tamanhoListaNomePeca == 0) { // Se não tiver nenhuma peça cadastrada, voltar ao menu
                console.log("Não há nenhuma peça cadastrada");
                continue voltar;
            }
            for (i1 = numeroListaB; i1 < tamanhoListaNomePeca; i1++) { // Looping até que todas as peças tiverem o sua quantidade

                do { // Fazer ate que a resposta seja diferente de NAO e peso da peça maior que 10
                    quantPeca = entrada.question("Quantidade da peca " + listaNomePeca[i1] + ": "); // Quantidade de peças
                    if (quantPeca > 10) { // Se quantidade de peças for maior que 10
                        console.log("A quntidade de peças é maior que 10");
                        resp2 = entrada.question("O valor foi digitado certo: [SIM/NAO]").toUpperCase();

                    } else {
                        console.log("Encaixamento concluído");
                        listaQuantPeca.push(quantPeca);
                    }
                }
                while ((resp2 == "NAO") && (quantPeca > valorQuantPeca))


                if ((resp2 == "SIM") && (quantPeca > valorQuantPeca)) { // Se a resposta for igual a SIM e a quantidade de peças for maior que 10, então tirar do mesmo indice o nome da peça do vetor listaNomePeca
                    listaNomePeca.splice(i1, 1);
                    i1--;
                    if (listaPesoPeca[i1] != "") { // Se no mesmo indice estiver algo diferente de nada, então tirar esse valor do vetor listaPesoPeca
                        listaPesoPeca.splice(i1, 1);
                    }
                }
                tamanhoListaNomePeca = listaNomePeca.length;
            }
            tamanhoListaNomePeca = listaNomePeca.length;
            numeroListaB = tamanhoListaNomePeca;
            break;

        case "0":
            console.log("Obrigado por usar o nosso programa");
            break;

        default:
            console.log("Opção inválida");
    }
}

console.log("---Lista de peças cadastradas---");
for (indice = 0; indice < tamanhoListaNomePeca; indice++) {
    console.log((indice + 1) + "- " + listaNomePeca[indice] + "  " + listaPesoPeca[indice] + " gramas  " + listaQuantPeca[indice] + " un.");
}