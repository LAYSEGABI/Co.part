var meuInput = document.getElementById("inputValue");
var valor = meuInput.value;

console.log(valor)



function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function getValue() {
  var inputValue = document.getElementById("inputValue").value;

  closePopup()
  // Faça algo com o valor inserido no campo de input
}


function criaElemento() {

  const nomeTarefa = document.createElement('h1')
  nomeTarefa.setAttribute('class', 'nomeTarefa');

  nomeTarefa.innerHTML = valor;

  const containerElement = document.getElementById('container');
  containerElement.appendChild(nomeTarefa);


}

