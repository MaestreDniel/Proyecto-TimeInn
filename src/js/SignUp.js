/* const {
  name
} = require("browser-sync"); */



/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
  validarConfPassword,
  validarEmail, validarName , validarPassword, validarConfPassword
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
