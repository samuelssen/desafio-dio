// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias e derrotas
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    // Verifica o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Exibe o resultado
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

calcularRank(85, 40);