// Fichero de módulos: "1. Els fitxers de mòduls haurien de tenir l'extensió .mjs"

//TODO: Validar Email
export function validarEmail() {
  let email = document.getElementById("email").value;
  if (email = "") {
    document.getElementById("errorEmail").innerHTML = "*Campo obligatorio"
  } else if (email = /^[A-Za-z]{1,10}@[A-Za-z]{1,10}.[A-Za-z]{1,3}/) {
    document.getElementById("errorEmail").innerHTML = "patron de contraseña incorrecto el patron es aaaaaaaaaa@bbbbbbbb.ccc"

  } else {
    validarEmail=true;
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
  if (user.length == 0) {
    document.getElementById("errorName").innerHTML = "*Campo obligatorio";
    toggleInputFalse("user");
  } else if (!(/^\w{1,20}$/.test(user))) {
    document.getElementById("errorName").innerHTML =
      "El nombre debe estar compuesto de carácteres alfanuméricos y tener un máximo de 20 caracteres";
    toggleInputFalse("user");
  } else {
    document.getElementById("errorName").innerHTML = "";
    input.classList.toggle("valido");

    validarName = true;
    toggleInputTrue("user");
  }
}

//TODO: Validar Password
export function validarPassword() {
  let password = document.getElementById("password").value;
  if (password = "") {
    document.getElementById("errorPassword").innerHTML = "*Campo obligatorio"
  } else if (password = /^/) {

  } else if (password = confirmP) {
    document.getElementById("errorPassword").innerHTML = "Las contraseñas no coinciden"
  } else {
    validarPassword=true
  }

}

//TODO: Validar Confirmación Contraseña
export function validarConfPassword() {
  let confirmP = document.getElementById("confirmP").value;
  if (confirmP = "") {
    document.getElementById("errorConfirm").innerHTML = "*Campo obligatorio"
  } else if (password = confirmP) {
    document.getElementById("errorPassword").innerHTML = "Las contraseñas no coinciden"
  } else {
    validarConfPassword=true
  }
}

//TODO: Validar SignUp
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




 



 