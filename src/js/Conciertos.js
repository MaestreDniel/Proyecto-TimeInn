//TODO:Objeto Conciertos.DONE
//A continuacion creamos los objetos para los Conciertos que seran 6 en total
const Concert = {
  conciertos: [{
      /**
       * Cada objeto tendra un div donde ira metido un id para poder manipularlo 
       * el link que cuando pulsemos la imagen nos eviara a la pagina oficial del grupo
       * una imagen del poster del concierto
       * Los titulos de los conciertos los cuales estan enumerados para ser mas faciles para crear, ediar y eliminar
       * El nombre del grupo o cantante
       * Las fechas de los eventos 
       * FInalmente donde es el concierto
       */
      div: '<div class="concert" id="concierto1">',
      link: ' <a href="https://www.the-scorpions.com/">',
      foto: '<img class="imgEvent" src="images/concierto1.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "1.Concierto scorpions",
      grupo: "Scorpions",
      fecha: "24-25 Junio 2022",
      lugar: "",
    },
    {
      div: '<div class="concert" id="concierto2">',
      link: '<a href="https://stageverse.muse.mu/?ref=https://www.google.com/">',
      foto: '<img class="imgEvent" src="images/concierto2.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "2.Muse Live Festival",
      grupo: "Muse",
      fecha: "24-25-26 Junio 2022",
      lugar: "",
    },
    {
      div: '<div class="concert" id="concierto3">',
      link: ' <a href="https://filmsymphony.es/">',
      foto: '<img class="imgEvent" src="images/concierto3.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "3.FSO Fénix La Gira",
      grupo: "Fenix",
      fecha: "safdasd",
      lugar: "dfas",
    },
    {
      div: '<div class="concert" id="concierto4">',
      link: '<a href="https://ctangana.com/">',
      foto: '<img class="imgEvent" src="images/concierto4.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "4.Rio Babel, C. Tangana",
      grupo: "C.Tangana",
      fecha: "30-1-2 Julio 2022",
      lugar: "Madrid",
    },
    {
      div: '<div class="concert" id="concierto5">',
      link: '<a href="https://www.justinbiebermusic.com/">',
      foto: '<img class="imgEvent" src="images/concierto5.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "5.Justice World Tour, Justin Bieber",
      grupo: "Justin Bieber",
      fecha: "10 de Septiembre 2022",
      lugar: "Estadio Unico de la Plata",
    },
    {
      div: '<div class="concert" id="concierto6">',
      link: '<a href="https://www.pinkfloyd.com/home.php">',
      foto: '<img class="imgEvent" src="images/concierto6.PNG" alt="No se pudo mostrar" width="150vw" height="200vh">',
      titulo: "6.Nicks Masons Saugerful of Secrets, Pink Floyd",
      grupo: "Pink Floyd",
      fecha: "9-10 de Julio 2022",
      lugar: "Madrid y Barcelona",
    },
  ]
}

//TODO:Imprimir Concierto.DONE
function imprimirConcierto(){

  let txt ="";
  txt +="<br>"
  txt += '<button onclick="saltarFormulario()" type="button" id="addConcert"  ><i class="far fa-plus-square"></i></button>';
  //Creamos un bucle Para recorrer los objetos de los Conciertos y a continuación imprimimos cada uno de ellos
  for(let i in Concert.conciertos){
    txt +=  Concert.conciertos[i].div;
    txt +=  Concert.conciertos[i].link  + Concert.conciertos[i].foto+"</a>";
    txt += '<div class="infoConcert">';
    txt += "<h2>" + Concert.conciertos[i].titulo + "</h2>";
    txt += "<h3>" + Concert.conciertos[i].grupo + "</h3>";
    txt += "<h3>" + Concert.conciertos[i].fecha + "</h3>";
    txt += "<h3>" + Concert.conciertos[i].lugar + "</h3>";
    txt += '</div>';
    txt += '<div id="edicion">';
    txt += '<button id="editConcert"  onclick="editEvent()"><i class="fas fa-pencil-alt"></i></button>';
    txt += '<button onclick="eliminarEvent()" class="delConcert"><i class="fas fa-trash-alt"></i></button>'
    txt += '</div>'
    txt += '</div>'
  }

  document.getElementById("conciertos").innerHTML = txt;

}

//Ejecutamos la función para que al ejecutar la pagina ya este impreso
imprimirConcierto();


//TODO:EventoDestacado.DONE
const EventDes ={
  destacado:[{
      foto: '<img class="imgEvent" src="images/event1.PNG"   height:"290" width="252" alt="No se pudo mostrar">',
      nombre: 'Mallorca Live Festival',
      descripcion: 'Venid al gran festival de la musica en Mallorca'
  }
  ]
}
//Una vez Creado el objeto destacado creamos una funcion con un for para imprimirlo directamente al ejecutar
function eventoDestacado() {
  let txt = "";
  txt += '<div class="degradadoizq"></div>';
  for (let i in EventDes.destacado) {

    txt += '<div class="event">';
    txt += EventDes.destacado[i].foto;
    txt += '<p><span>' + EventDes.destacado[i].nombre + '</span></p>';
    txt += '<i class="fas fa-info-circle"></i>' + '</div>';
  }
  txt += '<div class="degradadoder"></div>';
  document.getElementById("eventDes").innerHTML = txt;
}
//Impimimos el evento destacado a la izquierda de la pantalla
eventoDestacado();



//TODO: Saltar Formulario Nuevo Concierto 
function saltarFormulario(){
  document.getElementById("newConcierto").style.display = "block";
}


//TODO:Añadir nuevo Concierto
  //Cogemos los todos valores del formulario 
  //Creamos un objeto con cada uno de los valores del formulario
  const NewConcert ={
   conciertoNuevo: [{
    div: '<div class="concert" id="concierto7">',
     url:document.getElementById("url").value,
     poster: document.getElementById("poster").value,
     titulo:document.getElementById("titulo").value,
     grupo:document.getElementById("grupo").value,
     fecha:document.getElementById("fecha").value,
     lugar:document.getElementById("lugar").value
}
]}
//Finalmente lo imprimimos debajo del ultimo evento
function añadirConcierto(){
  let txt ="";
  txt +="<br>"
  txt += '<button onclick="saltarFormulario()" type="button"  id="addConcert"  ><i class="far fa-plus-square"></i></button>';
  //Para imprimir hacemos lo mismo que con las noticias recorremos el objeto y se va imprimiendo
  for(let i in NewConcert.conciertoNuevo){
    txt +=  NewConcert.conciertoNuevo[i].div;
    txt +=  NewConcert.conciertoNuevo[i].url + newConcert.conciertoNuevo[i].poster+"</a>";
    txt += '<div class="infoConcert">';
    txt += "<h2>" + newConcert.conciertoNuevo[i].titulo + "</h2>";
    txt += "<h3>" + newConcert.conciertoNuevo[i].grupo + "</h3>";
    txt += "<h3>" + newConcert.conciertoNuevo[i].fecha + "</h3>";
    txt += "<h3>" + newConcert.conciertoNuevo[i].lugar + "</h3>";
    txt += '</div>';
    txt += '<div id="edicion">';
    txt += '<button id="editConcert"  onclick="editEvent()"><i class="fas fa-pencil-alt"></i></button>';
    txt += '<button onclick="eliminarEvent()" class="delConcert"><i class="fas fa-trash-alt"></i></button>'
    txt += '</div>'
    txt += '</div>'
}

document.getElementById("conciertos").innerHTML = txt;

}

//TODO:Cerrar formulario
function closeForm(){
  document.getElementById("newConcierto").style.display="none";
}

//TODO:Busqueda Formulario 
//Cuando pulsamos el boton de Grupos o estilos salta el formulario
function mostrarFormulario() {
  document.getElementById("formularioBusqueda").style.display = block;
  document.getElementById("secciones").style.display = block;
}



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

//TODO: Eliminar Eventos.DONE
//Funcion para eliminar Eventos
function eliminarEvent() {
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


/* Es el botón de go back to top, que saldrá en el momento
que el usuario hace scroll 100px hacia abajo desde el tope de la página */

buttop = document.getElementById("top");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      buttop.style.display = "block";
  } else {
      buttop.style.display = "none";
  }
}

//TODO:Go to TOP
// Vuelve arriba al ser clicado
function backToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

//TODO:Formulario Busqueda
//Cuando pulsamos el boton de Grupos o estilos salta el formulario
function mostrarFormulario() {
var formulario = document.getElementById("formularioBusqueda");
formulario.style.display = block;
var evento = document.getElementById("secciones");
evento.style.display = block;
}



//TODO:DATAPICKER para elegir fecha.DONE
//Datapicker
/* $(function () {
$("#datepicker").datepicker();
}); */