const { name } = require("browser-sync");

/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */
var email = document.getElementById("email").value;
var name = document.getElementById("name").value;
var password = document.getElementById("password").value;
var confirmP = document.getElementById("confirmP").value;

//TODO: Validar SignUp
export function validarSignUp(){
   
    
    
}

//TODO: Validar Email
function validarEmail(){
if (email = " ") {
    document.getElementById("errorEmail").innerHTML= "*field requiered"
    
}

}

//TODO: Validar Name
function validarName(){
    if (name = " ") {
        document.getElementById("errorName").innerHTML= "*field requiered"
    }
}

//TODO: Validar Password
function validarPassword(){
    if (password = " ") {
        document.getElementById("errorPassword").innerHTML= "*field requiered"
    }
}

//TODO: Validar Confirmación Contraseña
function validarConfPassword(){
    if (confirmP = " ") {
        document.getElementById("errorConfirm").innerHTML= "*field requiered"
    }
}