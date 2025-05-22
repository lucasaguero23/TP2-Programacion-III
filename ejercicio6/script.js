function $(elemento) {
  return document.getElementById(elemento);
}

const boton = $("boton");
const validar1 = $("validar1");
const validar2 = $("validar2");
const validar3 = $("validar3");
const validar4 = $("validar4");
const validar5 = $("validar5");

boton.addEventListener("click", () => {
  let nombre = $("nombre").value;
  let apellido = $("apellido").value;
  let edad = Number($("edad").value);
  let altura = parseFloat($("altura").value);
  let mail = $("mail").value;

  if (
    nombre !== "" &&
    apellido !== "" &&
    nombre.length < 50 &&
    apellido.length < 50
  ) {
    validar1.innerHTML = "Nombre y Apellido enviado";
    validar1.style.color = "green";
  } else {
    validar1.innerHTML = "Nombre o Apellido vacio o supera los 50 caracteres";
    validar1.style.color = "red";
  }

  if (edad >= 18 && edad > 0) {
    validar2.innerHTML = "Edad enviada";
    validar2.style.color = "green";
  } else if (edad < 0) {
    validar2.innerHTML = "La edad es negativa";
    validar2.style.color = "red";
  } else {
    validar2.innerHTML = "Es menor de edad";
    validar2.style.color = "red";
  }

  if (altura >= 0 && altura <= 230) {
    validar3.innerHTML = "Altura enviada";
    validar3.style.color = "green";
  } else if (altura < 0) {
    validar3.innerHTML = "La altura es negativa";
    validar3.style.color = "red";
  } else if (altura > 230) {
    validar3.innerHTML = "No puede medir mas de 2.30 m";
    validar3.style.color = "red";
  } else {
    validar3.innerHTML = "No se ingresó altura";
    validar3.style.color = "red";
  }

  if (mail.length !== 0 && mail.includes("@")) {
    validar4.innerHTML = "Mail enviado";
    validar4.style.color = "green";
  } else if (mail.length === 0) {
    validar4.innerHTML = "Mail vacio";
    validar4.style.color = "red";
  } else {
    validar4.innerHTML = "Mail sin @";
    validar4.style.color = "red";
  }
});
