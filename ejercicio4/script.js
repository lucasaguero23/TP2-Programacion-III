function $(elemento) {
  return document.getElementById(elemento);
}

const boton = $("calcular");

function calcularIMC() {
  let estatura = parseFloat($("estatura").value);
  let peso = parseFloat($("peso").value);

  if (isNaN(estatura) || isNaN(peso) || estatura <= 0) {
    return;
  }

  let imc = peso / estatura ** 2;
  alert(`El indice de masa corporal es: ${imc.toFixed(2)}`);
}

boton.addEventListener("click", calcularIMC);
