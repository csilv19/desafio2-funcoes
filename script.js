//# 2️⃣ Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através...
// ...do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let resultadoSaldo = saldoRanqueada(90, 33)

function saldoRanqueada(numVitorias, numDerrotas) {
    let resultadoSaldoT = numVitorias - numDerrotas
    return resultadoSaldoT
}

let nivelRank = resultadoSaldo

if (nivelRank <= 10) {
    nivelRank = "Ferro";
} else if (nivelRank <= 20) {
    nivelRank = "Bronze";
} else if (nivelRank <= 50) {
    nivelRank = "Prata";
} else if (nivelRank <= 80) {
    nivelRank = "Ouro";
} else if (nivelRank <= 90) {
    nivelRank = "Diamante";
} else if (nivelRank <= 100) {
    nivelRank = "Lendário";
} else if (nivelRank >= 101) {
    nivelRank = "Imortal";
}

    console.log(`O Herói tem de saldo de ${resultadoSaldo} vitórias, e está no nível de ${nivelRank}`)