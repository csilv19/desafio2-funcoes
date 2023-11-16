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


// Função para calcular o saldo de vitórias
function calcularSaldoVitorias(numVitorias, numDerrotas) {
    return numVitorias - numDerrotas;
}

// Chama a função com valores específicos
let resultadoSaldo = calcularSaldoVitorias(90, 33);

// Determina o nível de ranqueamento
let nivelRank;

if (resultadoSaldo <= 10) {
    nivelRank = "Ferro";
} else if (resultadoSaldo <= 20) {
    nivelRank = "Bronze";
} else if (resultadoSaldo <= 50) {
    nivelRank = "Prata";
} else if (resultadoSaldo <= 80) {
    nivelRank = "Ouro";
} else if (resultadoSaldo <= 90) {
    nivelRank = "Diamante";
} else if (resultadoSaldo <= 100) {
    nivelRank = "Lendário";
} else {
    nivelRank = "Imortal";
}

// Exibe o resultado no console
console.log(`O Herói tem um saldo de ${resultadoSaldo} vitórias e está no nível de ${nivelRank}`);
