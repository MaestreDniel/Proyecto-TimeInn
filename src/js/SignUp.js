function signUp(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmP = document.getElementById("confirmP").value;
    
    if(email = " "){
        document.getElementById("errorEmail").innerHTML= "* field requiere"
    }if (name =" ") {
        document.getElementById("errorName").innerHTML= "* field requiere"
    }if (password= " ") {
        document.getElementById("errorPassword").innerHTML= "* field requiere"
    }if (confirmP = " ") {
        document.getElementById("errorConfirm").innerHTML= "* field requiere"
    }else{
        document.write("Registrado");
    }
}