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


//Si todo es true, querra decir que has sido logueado y te lleva la pagina de inicio de la Web
if(validarName && validarPassword){
  window.location.href= './';
}

function mostrarPassword(){
  let tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }