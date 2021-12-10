// El fichero sería como un main.js, aquí importa los datos necesarios

import {
  loginValido, validarName, validarPassword,
} from "./validaciones.mjs";

document.getElementById("user").addEventListener("blur", function () {
  validarName();
})

document.getElementById("password").addEventListener("blur", function () {
  validarPassword();
})




function mostrarPassword(){
  let tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }
document.getElementById("loginButton").addEventListener("click", function () {
  loginValido();
})
