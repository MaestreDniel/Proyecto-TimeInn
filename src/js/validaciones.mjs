// Fichero de módulos: "1. Els fitxers de mòduls haurien de tenir l'extensió .mjs"

//TODO: Validar Email
export function validarEmail() {
  let email = document.getElementById("email").value;

  //En caso de que este vacio salta el error y retorna falso
  if ((email.length = 0)) {
    document.getElementById("errorEmail").innerHTML = "*Campo obligatorio";
    toggleInputFalse("email");
    return false;
  }
  //Si no cumple el patron establecido salta el error y retorna falso
  else if (!/^[A-Za-z]{1,10}@[A-Za-z]{5,10}.(net|com|gov)/.test(email)) {
    document.getElementById("errorEmail").innerHTML =
      "patron de contraseña incorrecto el patron es aaaaaaaaaa@bbbbbbbb.ccc";
    toggleInputFalse("email");
    return false;
  }
  //Si ya existe salta el error y retorna falso
  else if (email) {
    document.getElementById("errorEmail").innerHTML = "Este Email ya existe";
    toggleInputFalse("email");
    return false;
  }
  //Si cumple todos los requisitos entonces se da como valido y da true
  else {
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
  //Si esta vacio salta el error y retorna falso
  if (user.length == 0) {
    document.getElementById("errorName").innerHTML = "*Campo obligatorio";
    toggleInputFalse("user");
    return false;

    //Si no cumple el patron de usuario salta el error y retorna falso
  } else if (!/^\w{1,20}$/.test(user)) {
    document.getElementById("errorName").innerHTML =
      "El nombre debe estar compuesto de carácteres alfanuméricos y tener un máximo de 20 caracteres";
    toggleInputFalse("user");
    return false;

    //Si ya existe el usuario salta el error y retorna falso
  } else if (user) {
    document.getElementById("errorName").innerHTML =
      "Este nombre de usuario ya existe";
    toggleInputFalse("user");
    return false;
  }
  //Si cumple todos los requisitos entonces se da como valido y da true
  else {
    document.getElementById("errorName").innerHTML = "";
    toggleInputTrue("user");
    return true;
  }
}

//TODO: Validar Password
export function validarPassword() {
  let password = document.getElementById("password").value;
  //Si esta vacio salta el error y retorna falso
  if (password.length == 0) {
    document.getElementById("errorPassword").innerHTML = "*Campo obligatorio";
    toggleInputFalse("password");
    return false;
    //Si no cumple el patron salta el error y retorna falso
  } else if (!/^\w{7,}(.|-|;|,)/.test(password)) {
    document.getElementById("errorPassword").innerHTML =
      "La contraseña debe tener un minimo de 8 caracteres e incluir alguno de estos caracteres . , ; ,";
    toggleInputFalse("password");
    return false;
    //Si cumple todos los requisitos entonces se da como valido y da true
  } else {
    document.getElementById("errorPassword").innerHTML = "";
    toggleInputTrue("password");
    return true;
  }
}

//TODO: Validar Confirmación Contraseña
export function validarConfPassword() {
  let confirmP = document.getElementById("confirmP").value;
//Si no cumple el patron salta el error y retorna falso
  if ((confirmP.length = 0)) {
    document.getElementById("errorConfirm").innerHTML = "*Campo obligatorio";
    toggleInputFalse("confirmP");
    return false;
//SI no coinciden ambas contraseñas salta el error y retorna falso
  } else if ((password = confirmP)) {
    document.getElementById("errorConfirm").innerHTML =
      "Las contraseñas no coinciden";
      toggleInputFalse("confirmP");
    return false;
  } else {
    document.getElementById("errorConfirm").innerHTML = "";
    toggleInputTrue("confirmP");
    return true;
  }  }


export function loginValido() {
  if (validarName() && validarPassword()) {
    window.location.href = "./";
  } else {
    document.getElementById("errorLogin").innerHTML =
      "Credenciales incorrectas";
  }
}

//TODO: Validacion SignUP
export function SignUpValido() {
  if (
    validarName() && validarEmail() && validarPassword() && validarConfPassword()
  ) {
    window.location.href = "./Login.html";
  } else {
    document.getElementById("errorPassword").innerHTML =
      "Credenciales incorrectas";
  }
}
// Validar SignUp
/* export function validarSignUp(funcion) {
  if (funcion) {
    getfocus();
  } else {
    losefocus();
  }
}

function getfocus() {
  document.getElementById("user").focus();
}

function losefocus() {
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
