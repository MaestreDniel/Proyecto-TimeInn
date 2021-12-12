// El fichero sería como un main.js, aquí importa los datos necesarios


import {
  loginValido, mostrarPassword, paginaSignUp, validarName, validarPassword,
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

document.getElementById("signUpButton").addEventListener("click", function () {
  paginaSignUp();
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

// checkCookie();