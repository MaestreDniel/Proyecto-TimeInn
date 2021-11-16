//TODO: Editar Eventos
//FUncion para editar eventos
function editEvent() {
  //Preguntamos al usuario cual quiere editar
  var numEvent = parseInt(prompt("Que numero de concierto quieres editar"));
  //Cogemos la plantilla para editar eventos
  var newEvent = document.getElementById("editEvent");

  //Dependiendo de que numero pase el por el prompt desaparecera un evento y aparecerá otro en su lugar
  switch (numEvent) {
    case 1:
      document.getElementById("concierto1").style.display = "none";
      newEvent.style.display = "block";
      break;
    case 2:
      document.getElementById("concierto2").style.display = "none";
      newEvent.style.display = "block";
      break;
    case 3:
      document.getElementById("concierto3").style.display = "none";
      newEvent.style.display = "block";
      break;
    case 4:
      document.getElementById("concierto4").style.display = "none";
      newEvent.style.display = "block";
      break;
    default:
      alert("Solo hay 4 conciertos");
      break;
  }
}

//TODO: Eliminar Eventos
//Funcion para eliminar Eventos
function eliminarEvent(){
  //Preguntamos al usuario cual quiere eliminar

  var numEvent = parseInt(prompt("Que numero de concierto quieres eliminar"));

  //Dependiendo de que numero pase el por el prompt desaparecera un evento u otro
  switch (numEvent) {
    case 1:
      document.getElementById("concierto1").style.display = "none";
      break;
    case 2:
      document.getElementById("concierto2").style.display = "none";
      break;
    case 3:
      document.getElementById("concierto3").style.display = "none";
      break;
    case 4:
      document.getElementById("concierto4").style.display = "none";
      break;
    case 5:
      document.getElementById("concierto5").style.display = "none";
      break;
    case 6:
      document.getElementById("concierto6").style.display = "none";
      break;
    default:
      alert("Solo hay 6 conciertos");
      break;
  }
}

//TODO:Busqueda Formulario 
//Cuando pulsamos el boton de Grupos o estilos salta el formulario
function mostrarFormulario() {
    document.getElementById("formularioBusqueda").style.display = block;
    document.getElementById("secciones").style.display = block;
}
//TODO: Nuevo Concierto Formulario
function añadirConcierto(){
    document.getElementById("formularioNew").style.display = "block";
}

//TODO:DATAPICKER para elegir fecha
//Datapicker
$(function () {
  $("#datepicker").datepicker();
});

//TODO:Objeto Conciertos
//A continuacion creamos los objetos para los Conciertos que seran 6 en total
export const conciertos = [
    {
      titulo: "Concierto scorpions",
      grupo: "Scorpions",
      fecha: "24-25 Junio 2022",
      lugar: "",
    },
    {
      titulo: "Muse Live Festival",
      grupo: "Muse",
      fecha: "24-25-26 Junio 2022",
      lugar: "",
    },
    {
      titlo: "FSO Fénix La Gira",
      grupo: "Fenix",
      fecha: "",
      lugar: "",
    },
    {
      titlo: "Rio Babel, C. Tangana",
      grupo: "C.Tangana",
      fecha: "30-1-2 Julio 2022",
      lugar: "Madrid",
    },
    {
      titlo: "Justice World Tour, Justin Bieber",
      grupo: "Justin Bieber",
      fecha: "10 de Septiembre 2022",
      lugar: "Estadio Unico de la Plata",
    },
    {
      titlo: "Nicks Masons Saugerful of Secrets, Pink Floyd",
      grupo: "Pink Floyd",
      fecha: "9-10 de Julio 2022",
      lugar: "Madrid y Barcelona",
    },
  ];
  