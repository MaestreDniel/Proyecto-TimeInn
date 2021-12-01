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
}else if(email = /^[A-Za-z]{10}+@+[A-Za-z]{5,10}+.+[A-Za-z]{3}/){
    document.getElementById("errorEmail").innerHTML = "patron de contraseña incorrecto el patron es aaaaaaaaa@bbbbbbbb.ccc"
    
}else{

}

}



//TODO: Validar Name
function validarName(){
    if (name = " "){
        document.getElementById("errorName").innerHTML= "*field requiered"
    }else if (name > /^ \w{10}/ ) {
        document.getElementById("errorName").innerHTML= "el nombre tiene que tener un maximo de 10 caracteres"
    }
    else{

    }
}

//TODO: Validar Password
function validarPassword(){
    if (password = " ") {
        document.getElementById("errorPassword").innerHTML= "*field requiered"
    }else if(password = confirmP){
        document.getElementById("errorPassword").innerHTML= "las contraseñas no coiciden"
    }
    else{

    }

}

//TODO: Validar Confirmación Contraseña
function validarConfPassword(){
    if (confirmP = " ") {
        document.getElementById("errorConfirm").innerHTML= "*field requiered"
    }else if(password = confirmP){
        document.getElementById("errorPassword").innerHTML= "las contraseñas no coiciden"
    }else{
        
    }
}