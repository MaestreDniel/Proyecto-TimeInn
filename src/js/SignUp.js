/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
    validarEmail, validarName , validarPassword, validarConfPassword, mostrarPassword , mostrarPasswordConf, paginaLogin, SignUpValido
  
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

document.getElementById("confirmP").addEventListener("click",  function (){
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