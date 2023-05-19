var readline = require('readline-sync');

var comprar = 1
var consultar = 2
var assentos = 3
var ticket = 4
var encerrar = 0
var assento = " "

while (pergunta != 0) {
    console.log('+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
    console.log('|                                            |')
    console.log('|  1 - Comprar Passagem                      |')
    console.log('|  2 - Consultar Voos                        |')
    console.log('|  3 - Mapa de Assentos                      |')
    console.log('|  4 - Emitir Ticket                         |')
    console.log('|  0 - Encerrar Programa                     |')
    console.log('+ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ +')

    var pergunta = readline.question('Escolha uma das alternativas acima = ')

    if (pergunta == 1) {

        var Nome = readline.question('Digite seu Nome: ')
        var Sobrenome = readline.question('Digite seu Sobrenome: ')
        var Idade = readline.question('Digite sua Idade: ')
        while (Idade < 18) {
            Idade = readline.question('Voce nao tem a idade minima ! ')
        }
        assento = readline.question('Escolha um assento (Entre A1 - A12 ou B1 - B12) : ')
        var Origem = readline.question('Qual sua origem ? : ')
        var Destino = readline.question('Qual sseu Destino ? : ')


        console.log('+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
        console.log('                                              ')
        console.log(' Você está em -> Comprar Passagem             ')
        console.log('                                              ')
        console.log(" Nome: " + Nome)
        console.log(" Sobrenome: " + Sobrenome)
        console.log(" Idade: " + Idade)
        console.log(" assento: " + assento)
        console.log(" Origem: " + Origem)
        console.log(" Destino: " + Destino)


        console.log('+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
        console.log('                                              ')
        console.log(' Você está em -> Comprar Passagem             ')
        console.log('                                              ')
        console.log(' *Resumo da compra*                           ')
        console.log('                                              ')
        console.log(" Cliente: " + Nome + Sobrenome)
        console.log(" Idade: " + Idade)
        console.log(" assento: " + assento)
        console.log(" Origem: " + Origem + " para " + Destino)
        console.log(" Status do Voo: Confirmado                    ")
        console.log('                                              ')
        console.log(' Valor: R$ 3.500,00                           ')
    }

    else if (pergunta == 2) {
        console.log('+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +')
        console.log('                                              ')
        console.log('  Origem              x            Destino    ')
        console.log('----------------------------------------------')
        console.log(' Presidente Prudente          Dubai           ')
        console.log(' Presidente Prudente          Egito           ')
        console.log(' Presidente Prudente          Rio de Janeiro  ')
        console.log(' Presidente Prudente          New York        ')

        var prg = readline.question('Deseja proseguir ?  1 = yes 2 = no')
    }
    else if (pergunta == 3) {
        var assentoA = ""
        var assentoB = ""
        

        console.log('')
        console.log('+--------Passagens aéreas--------+')
        console.log("você esta em --> Mapa de Assentos")
        console.log("--------------------------------")
        for (var poltrona = 1; poltrona < 13; poltrona++) {

            var assentoDaVezA = "A" + poltrona
            var assentoDaVezB = "B" + poltrona

            if (assentoDaVezA == assento) {
                assentoA += " X "
                assentoB += assentoDaVezB + " "
            }
            else if (assentoDaVezB == assento) {
                assentoB += " X "
                assentoA += assentoDaVezA + " "
            }
            else {
                assentoA += assentoDaVezA + " "
                assentoB += assentoDaVezB + " "
            }
        }
        console.log(assentoA)
        console.log(assentoB)

        console.log("+--------------------------------+")
    }

    else if (pergunta == 4) {
        console.log("+-----Passagens Aéreas-----+")
        console.log("Você está em ==> Emitir ticket")
        console.log("*************************************")
        console.log("*Obrigado por viajar conosco :)     *")
        console.log("*                                   *")
        console.log("Cliente: " + Nome + " " + Sobrenome)
        console.log("Idade: " + Idade + " Assento: " + assento)
        console.log("Origem/Destino: " + Origem + " > " + Destino)
        console.log("*Status do voo: Confirmado          *")
        console.log("*                                   *")
        console.log("*************************************")

        var pr2 = readline.question('Deseja proseguir ?  1 = yes 2 = no')
    }
}
