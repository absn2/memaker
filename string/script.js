

/*

  alert = representação da saída de um console
  "????" = representação o que vocês devem mudar no código

*/

// Questão 1

//Mostrar seu nome completo
function nomeCompleto(){
  let nome = document.getElementById("nome").value
  let sobrenome = document.getElementById("sobrenome").value
  
  let nome_completo = "?????" // vocês devem alterar essa linha
  alert(nome_completo)
}

// Questão 2

//Mostrar qual o tamanho do texto escrito
function tamanhoTexto(){
  let texto = document.getElementById("texto").value
  
  let tamanho = "??????" // vocês devem alterar essa linha
  alert(tamanho)
}

// Questão 3

//Mostrar qual o caractere em determinada posição no texto

function caractere(){
  let texto = document.getElementById('text2').value
  let position = parseInt(document.getElementById('pos').value)
  
  let charNessaPosition = "?????"// vocês devem alterar essa linha
  alert(charNessaPosition)  
}

// Questão 4

//substituir {{first_name}} no texto escrito por nome escrito na caixa de baixo
function substituirTexto(){
  let texto = document.getElementById('text3').value
  let nome = parseInt(document.getElementById('nome2').value)
  
  let texto_final = "???"// vocês devem alterar essa linha
  alert(texto_final)  
}

// Questão 5

//colocar todo o texto em minúsculo
function minusculas(){
  let texto = document.getElementById('text4').value
  
  let texto_final = "???"// vocês devem alterar essa linha
  alert(texto_final)  
}

// Questão 6

//conferir se um string está contido em outra
function includesTexto(){
  let textoA = document.getElementById('texto5').value
  let textoB = document.getElementById('texto6').value
  
  let textoBEstaIncluido = textoA.includes(textoB)// vocês devem alterar essa linha
  alert(textoBEstaIncluido)  
}