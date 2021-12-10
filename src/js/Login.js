// El fichero sería como un main.js, aquí importa los datos necesarios

import { name } from "browser-sync";
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


// TODO:COOKIE User Login

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie(user);
  if (user != "") {
    // console.log("object");
  } else {
    setCookie(user, "user", 7); // El 7 hará que tenga una duración de una semana
    setTimeout(function muestraFormSub() {
      let formlogin = document.getElementById("formlogin  ");
      formlogin.style.display = "block";
    }, 3000);
  }
}

checkCookie();