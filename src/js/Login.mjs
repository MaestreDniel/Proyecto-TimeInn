/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */
 
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

//TODO:Validar Login
export function validarLogin(){
 


}


//TODO: Validar User
function validarUser(){
    if (usuario= " ") {
        document.getElementById("errorUser").innerHTML= "*field requiered"
    }

}

//TODO: Validar Contraseña
function validarContraseña(){
    if (usuario = " ") {
        document.getElementById("errorContraseña").innerHTML= "*field requiered"
    }

}


