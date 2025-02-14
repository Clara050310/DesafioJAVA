// Função para verificar a idade do usuário
function verificarIdade() {
  // Pede a idade do usuário
  let idade = parseInt(prompt("Qual a sua idade?"));

  // Verifica se o valor fornecido é um número válido
  if (isNaN(idade)) {
    alert("Por favor, insira uma idade válida.");
    return;
  }

  // Verifica as faixas etárias
  if (idade < 18) {
    alert("Você é menor de idade.");
  } else if (idade >= 18 && idade <= 60) {
    alert("Você é adulto.");
  } else {
    alert("Você é idoso.");
  }
}

// Chama a função para verificar a idade
verificarIdade();
