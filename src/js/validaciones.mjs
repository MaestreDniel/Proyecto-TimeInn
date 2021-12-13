// Fichero de módulos: "1. Els fitxers de mòduls haurien de tenir l'extensió .mjs"

//TODO: Validar Email
export function validarEmail() {
  let email = document.getElementById("email").value;
  if ((email.length == 0)) {
    document.getElementById("errorEmail").innerHTML = "*Campo obligatorio";
    toggleInputFalse("email");
    return false;
  } else if (!(/^[A-Za-z]{1}[a-z]{0,20}@[a-z]{5,10}.(net|com|gov)/.test(email))) {
    document.getElementById("errorEmail").innerHTML = `El email debe seguir este formato: 
    aaaaaaaaaa@bbbbbbbb.ccc <br> Teniendo en cuenta que: <br>
    - aaaaaaaaa está en minúsculas, salvo la primera letra que opcionalmente puede ser mayúscula <br>
    - bbbbbbbb tiene entre 5 y 10 letras minúsculas <br>
    - ccc solo puede valer: com, net o gov <br>
    - Que solo hay 1 arroba y 1 punto (y la arroba va antes que el punto)`;
    toggleInputFalse("email");
    return false;
  } else if (!existeEmail()) {
    document.getElementById("errorEmail").innerHTML = "Este email ya está registrado";
    toggleInputFalse("email");
    return false;
  } else {
    document.getElementById("errorEmail").innerHTML = "";
    toggleInputTrue("email");
    return true;
  }
}

function toggleInputFalse(myinput) {
  let input = document.getElementById(myinput);
  input.classList.toggle("novalido", true);
  input.classList.toggle("valido", false);
}

function toggleInputTrue(myinput) {
  let input = document.getElementById(myinput);
  input.classList.toggle("valido", true);
  input.classList.toggle("novalido", false);
}

//TODO: Validar Name
export function validarName() {
  let user = document.getElementById("user").value;
  if (user.length == 0) { //Si está vacio salta el error y retorna falso
    document.getElementById("errorName").innerHTML = "*Campo obligatorio";
    toggleInputFalse("user");
    return false;
  } else if (!/^\w{1,20}$/.test(user)) { //Si no cumple el patrón de usuario salta el error y retorna falso
    document.getElementById("errorName").innerHTML =
      "El nombre debe estar compuesto de carácteres alfanuméricos y tener un máximo de 20 caracteres";
    toggleInputFalse("user");
    return false;
  } else if (!existeUser()) { //Si ya existe el usuario salta el error y retorna falso
    document.getElementById("errorName").innerHTML = "Este nombre de usuario ya existe";
    toggleInputFalse("user");
    return false;
  } else { //Si cumple todos los requisitos entonces se da como valido y da true
    document.getElementById("errorName").innerHTML = "";
    toggleInputTrue("user");
    return true;
  }
}

export function validarNameLogin() {
  if (existeUser()) {
    document.getElementById("errorName").innerHTML = "Este nombre de usuario no está registrado";
    toggleInputFalse("user");
    return false;
  } else {
    document.getElementById("errorName").innerHTML = "";
    toggleInputTrue("user");
    return true;
  }
}

//TODO: Validar Password
export function validarPassword() {
  let password = document.getElementById("password").value;
  if (password.length == 0) { //Si está vacio salta el error y retorna falso
    document.getElementById("errorPassword").innerHTML = "*Campo obligatorio";
    toggleInputFalse("password");
    return false;
  } else if (!/^.{7,}\W{1,}/.test(password)) { //Si no cumple el patrón salta el error y retorna falso
    document.getElementById("errorPassword").innerHTML =
      "Minimo de 8 caracteres e incluir algun . , ; ,";
    toggleInputFalse("password");
    return false;
  } else { //Si cumple todos los requisitos entonces se da como válido y da true
    document.getElementById("errorPassword").innerHTML = "";
    toggleInputTrue("password");
    return true;
  }
}

//TODO: Validar Confirmación Contraseña
export function validarConfPassword() {
  let confirmP = document.getElementById("confirmP").value;
  let password = document.getElementById("password").value;
  if (confirmP.length == 0) {
    document.getElementById("errorConfirm").innerHTML = "*Campo obligatorio";
    toggleInputFalse("confirmP");
    return false;
  } else if (password !== confirmP) {
    document.getElementById("errorPassword").innerHTML = "Las contraseñas no coinciden";
    toggleInputFalse("confirmP");
    return false;
  } else {
    document.getElementById("errorPassword").innerHTML = "";
    toggleInputTrue("confirmP");
    return true;
  }
}

export function loginValido() {
  if (validarNameLogin() && validarPassword()) {
    window.location.href = "./";
  } else {
    document.getElementById("errorLogin").innerHTML = "Credenciales incorrectas";
    if (!validarNameLogin()) {
      document.getElementById("user").focus();
    } else if (!validarPassword()) {
      document.getElementById("password").focus();
    }
  }
}

//TODO: Validacion SignUP
export function SignUpValido() {
  if (validarEmail() && validarName() && validarPassword() && validarConfPassword()) {
    window.location.href = "./Login.html";
  } else {
    document.getElementById("errorSignUp").innerHTML = "Credenciales incorrectas";
    if (!validarEmail()) { // El primer campo erróneo recibirá focus
      document.getElementById("email").focus();
    } else if (!validarName()) {
      document.getElementById("user").focus();
    } else if (!validarPassword()) {
      document.getElementById("password").focus();
    } else if (!validarConfPassword()) {
      document.getElementById("confirmP").focus();
    }
  }
}

export function paginaSignUp() {
  window.location.href = './SignUp.html';
}

export function paginaLogin() {
  window.location.href = './Login.html';
}

/* function losefocus() {
  document.getElementById("user").blur();
} */

//TODO:Mostrar Contraseña
// Se muestra la contraseña solamente mientras se mantenga el ojo pulsado
export function mostrarPassword() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else {
    tipo.type = "text";
  }
}
//TODO:Mostrar Confirmacion Contraseña 
export function mostrarPasswordConf() {
  let tipo = document.getElementById("confirmP");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else {
    tipo.type = "text";
  }
}

/* Evita un problema que hace que al arrastrar el ratón mientras 
se mantiene pulsado el ojo, la contraseña se mantiente visible */
export function ocultarPassword() {
  let tipo = document.getElementById("confirmP");
  let tipo2 = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else if (tipo2.type == "text") {
    tipo2.type = "password";
  }
}

export function ocultarPasswordLogin() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  }
}

let emails = ["dmaestre@cifpfbmoll.com", "jmateo@cifpfbmoll.com"];

function existeEmail() {
  let correo = document.getElementById("email").value;
  for (let i = 0; i < emails.length; i++) {
    if (correo === emails[i]) {
      return false;
    }
  }
  document.getElementById("errorEmail").innerHTML = "";
  toggleInputTrue("email");
  return true;
}

let users = ["Maestre", "JMateo"];

function existeUser() {
  let usuario = document.getElementById("user").value;
  for (let i = 0; i < users.length; i++) {
    if (usuario === users[i]) {
      return false;
    }
  }
  document.getElementById("errorName").innerHTML = "";
  toggleInputTrue("user");
  return true;
}