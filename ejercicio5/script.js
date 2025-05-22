function $(elemento) {
  return document.getElementById(elemento);
}

const boton = $("boton");

const calcularAreaTerreno = () => {
  let ladoA = parseFloat($("ladoA").value);
  let base = parseFloat($("base").value);
  let ladoC = parseFloat($("ladoC").value);

  if (
    isNaN(ladoA) ||
    isNaN(base) ||
    isNaN(ladoC) ||
    ladoA < ladoC ||
    ladoA <= 0 ||
    base <= 0 ||
    ladoC <= 0
  ) {
    return;
  }

  let areaRectangulo = base * ladoC;
  let areaTriangulo = (base * (ladoA - ladoC)) / 2;
  let areaTotal = areaRectangulo + areaTriangulo;

  $("contenedor").innerHTML = "";

  const parrafo = document.createElement("p");
  parrafo.innerHTML = `El área del terreno es: ${areaTotal.toFixed(2)} m²`;
  $("contenedor").appendChild(parrafo);
};

boton.addEventListener("click", calcularAreaTerreno);
