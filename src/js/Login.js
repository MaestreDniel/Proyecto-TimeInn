function login(){
   var usuario = document.getElementById("usuario").value;
   var contraseña = document.getElementById("contraseña").value;
    if(usuario = " "){
        document.getElementById("errorUsuario").innerHTML= "* field requiere"
    }
    else if(contraseña = " "){
        document.getElementById("errorContraseña").innerHTML = "* field requiere";
    }
}
