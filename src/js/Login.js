// El fichero sería como un main.js, aquí importa los datos necesarios

import {
  validarName, validarPassword
} from "./validaciones.mjs";

document.getElementById("user").addEventListener("blur", function () {
  validarName()
})

document.getElementById("password").addEventListener("blur", function () {
  validarPassword()
})


function Login(){
  if(validarName && validarPassword){
    window.location.href= '../Index.html';
  }
}