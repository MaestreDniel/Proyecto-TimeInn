
export const conciertos=[
    {
    titulo: 'Concierto scorpions',
    grupo:'Scorpions',
    fecha:'',
    precio: +'€'   
},
{
    titulo: 'Muse Live Festival',
    grupo: 'Muse',
    fecha:'',
    precio: +'€'
},
{
    titlo:'FSO Fénix La Gira',
    grupo:'Fenix',
    fecha:'',
    precio: +'€'
},
{
    titlo:'FSO Fénix La Gira',
    grupo:'Fenix',
    fecha:'',
    precio: +'€'
},
{
    titlo:'Justice World Tour, Justin Bieber',
    grupo:'Justin Bieber',
    fecha:'',
    precio: +'€'
},
{
    titlo:'FSO Fénix La Gira',
    grupo:'Fenix',
    fecha:'',
    precio: +'€'
}
]

//FUncion para editar eventos
function editEvent(){
//Preguntamos al usuario cual quiere editar
    var numEvent=parseInt( prompt("Que numero de concierto quieres editar"));
//Cogemos la plantilla para editar eventos
    var newEvent= document.getElementById("editEvent");

//Dependiendo de que numero pase el por el prompt desaparecera un evento y aparecerá otro en su lugar
    switch(numEvent){
        case 1: 
        document.getElementById("concierto1").style.display="none";
        newEvent.style.display ="block";
        break;
        case 2:
        document.getElementById("concierto2").style.display="none";
        newEvent.style.display ="block";
        break;
        case 3:
        document.getElementById("concierto3").style.display="none";
        newEvent.style.display ="block";
        break;
        case 4:
        document.getElementById("concierto4").style.display="none";
        newEvent.style.display ="block";
        break;
        default:
            alert("Solo hay 4 conciertos");
            break;
        
    
    }
}

//Funcion para eliminar Eventos
function eliminarEvent(){
//Preguntamos al usuario cual quiere eliminar

    var numEvent=parseInt(prompt("Que numero de concierto quieres eliminar"));

    //Dependiendo de que numero pase el por el prompt desaparecera un evento u otro
switch(numEvent){
    case 1: 
    document.getElementById("concierto1").style.display="none";
    break;
    case 2:
    document.getElementById("concierto2").style.display="none";
    break;
    case 3:
    document.getElementById("concierto3").style.display="none";
    break;
    case 4:
    document.getElementById("concierto4").style.display="none";
    break;
    case 5:
        document.getElementById("concierto5").style.display="none";
        break;
    default:
        alert("Solo hay 5 conciertos");
        break;
    

}
}


/*GOOGLE MAPS*/
var map;
  	 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: 43.5293, lng: -5.6773},
          zoom: 13,
        });
        var marker = new google.maps.Marker({
          position: {lat: 43.542194, lng: -5.676875},
          map: map,
	  title: 'Acuario de Gijón'
        });
      }