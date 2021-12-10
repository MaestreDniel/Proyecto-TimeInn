/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
  validarConfPassword,
  validarEmail, validarName , validarPassword, validarConfPassword, mostrarPassword , mostrarPasswordConf
} from "./validaciones.mjs"

document.getElementById("email").addEventListener("click", function () {
  validarEmail()
})

document.getElementById("user").addEventListener("click", function () {
  validarName()
})

document.getElementById("password").addEventListener("click", function () {
  validarPassword()
})

document.getElementById("conformP").addEventListener("click",  function (){
  validarConfPassword()
})


/**
 * Si todo es true, querra decir que te has registrado
 * una vez has sido registrado te lleva a la pagina de login
 * si inicias sesion correctamente ya podras navegar por la web
 * */
if (validarEmail && validarName && validarPassword && validarConfPassword) {
  window.location.href='./';
}

document.getElementById("verPassword").addEventListener("click", function () {
  mostrarPassword()
})

document.getElementById("verPassword").addEventListener("click", function () {
  mostrarPasswordConf()
})