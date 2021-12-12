/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
  validarEmail, validarName, validarPassword, validarConfPassword,
  mostrarPassword, mostrarPasswordConf, paginaLogin, SignUpValido
} from "./validaciones.mjs"

document.getElementById("email").addEventListener("click", function () {
  validarEmail();
})

document.getElementById("user").addEventListener("click", function () {
  validarName();
})

document.getElementById("password").addEventListener("click", function () {
  validarPassword();
})

document.getElementById("confirmP").addEventListener("click", function () {
  validarConfPassword();
})

document.getElementById("verPassword").addEventListener("click", function () {
  mostrarPassword();
})

document.getElementById("verPassword").addEventListener("click", function () {
  mostrarPasswordConf();
})

document.getElementById("loginButton").addEventListener("click", function () {
  paginaLogin();
})

document.getElementById("signUpButton").addEventListener("click", function () {
  SignUpValido();
})
/*   mostrarPasswordConf()
}) */


var emails = [];

function existeEmail() {
  let correo = document.getElementById("email").value;
  for (let i = 0; i < emails.length; i++) {
    if (correo = emails[i]) {
      return false;
    } else {
      return true
    }

  }
}

var users = [];

function existeUser() {
  let usuario = document.getElementById("user").value;
  for (let i = 0; i < users.length; i++) {
    if (usuario = users[i]) {
      return false;
    } else {
      return true
    }

  }
}