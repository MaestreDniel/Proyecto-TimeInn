// El fichero sería como un main.js, aquí importa los datos necesarios

import {
  loginValido, mostrarPassword, validarName, validarPassword,
} from "./validaciones.mjs";

document.getElementById("user").addEventListener("blur", function () {
  validarName();
})

document.getElementById("password").addEventListener("blur", function () {
  validarPassword();
})

document.getElementById("verPassword").addEventListener("mousedown", function () {
  mostrarPassword();
}) 
  
document.getElementById("verPassword").addEventListener("mouseup", function () {
  mostrarPassword();
})

document.getElementById("loginButton").addEventListener("click", function () {
  loginValido();
})
