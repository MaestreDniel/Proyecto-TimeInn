// El fichero sería como un main.js, aquí importa los datos necesarios

import {
  validarName, validarPassword
} from "./validaciones.mjs";

document.getElementById("user").addEventListener("click", function () {
  validarName()
})

document.getElementById("password").addEventListener("click", function () {
  validarPassword()
})


function Login(){
  if(validarName && validarPassword){
    window.location.href= '../Index.html';
  }
}