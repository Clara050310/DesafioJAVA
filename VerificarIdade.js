const readline = require("readline");

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para verificar a idade do usuário
function verificarIdade() {
  rl.question("Qual a sua idade? ", (idade) => {
    idade = parseInt(idade);

    // Verifica se a idade é um número válido
    if (isNaN(idade)) {
      console.log("Por favor, insira uma idade válida.");
      rl.close();
      return;
    }

    // Verifica as faixas etárias
    if (idade < 18) {
      console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade <= 60) {
      console.log("Você é adulto.");
    } else {
      console.log("Você é idoso.");
    }

    rl.close(); // Fecha a interface após a verificação
  });
}

// Chama a função para verificar a idade
verificarIdade();
