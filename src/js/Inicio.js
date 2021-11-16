//TODO:Objeto News
const News = {
  noticias: [{
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'El festival Iruña Rock 2022 anuncia su cartel completo',
          descripcion: 'El festival Iruña Rock ha anunciado el cartel completo de su edición 2022, que tendrá lugar en el Navarra Arena los días 18 y 19 de marzo.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'El Let\'s Festival anuncia sus primeros nombres para 2022',
          descripcion: 'Pero las cosas van a ser diferentes en 2022, con un festival que volverá a pleno rendimiento.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Los festivales vuelven con fuerza en 2022',
          descripcion: 'Festivales 2022. Ultra Miami 2022. Ultra Miami es históricamente el punto de inicio de la temporada de grandes festivales.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Festival Actual 2022 en Logroño: Conciertos y Entradas',
          descripcion: 'Festival Actual 2022 regresará a la localidad riojana del 2 al 8 de enero del próximo año.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Los festivales de 2022 recibirán en subvenciones un 72% más que este año',
          descripcion: 'Ya han abierto agenda y hacen números para organizar los festivales del 2022.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Alizzz, el primer artista confirmado para el festival Brizna 2022',
          descripcion: 'Alizzz es el primer artista confirmado para el festival Brizna 2022. Uno de los productores de pop español más importante e influyente.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Festival de Lucerna 2022: Diversidad',
          descripcion: 'El Festival de Lucerna comparte su programación para el verano de 2022. Anne-Sophie Mutter, Lang Lang, Daniel Barenboim, Sir Simon Rattle,...'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'El Festival de Les Arts anuncia fechas en 2022',
          descripcion: 'Para 2022, el festival valenciano de referencia volverá a llenar de música la Ciudad de las Artes y las Ciencias durante los días 3 y 4.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'El Festival de Les Arts anuncia fechas en 2022',
          descripcion: 'El festival Palencia Sonora, que volverá a su formato habitual entre los días 10 y 12 de junio de 2022, ha ampliado su cartel con Alizzz.'
      },
      {
          foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
          titular: 'Cáceres creará en 2022 una marca para "proteger" los festivales consolidados y garantizar su financiación',
          descripcion: 'El alcalde de Cáceres, Luis Salaya, ha anunciado que en 2022 se creará una marca local para ejercer de paraguas de protección de los festivales.'
      }
  ]
}


//TODO:Objeto principal Events
const Events = {
  eventos: [{
          foto: '<img class="imgEvent" src="images/event1.PNG" alt="No se pudo mostrar">',
          nombre: 'Mallorca Live Festival',
          descripcion: 'Venid al gran festival de la musica en Mallorca'
      },
      {
          foto: '<img class="imgEvent" src="images/event2.PNG" alt="No se pudo mostrar">',
          nombre: 'The BPM Festival',
          descripcion: 'Gran Festival de BPM en Ibiza'
      },
      {
          foto: '<img class="imgEvent" src="images/event3.PNG" alt="No se pudo mostrar">',
          nombre: 'Madrid Popfest 2022',
          descripcion: 'Buena fiesta del Mejor Pop en Madrid'
      }
  ]
}


function imprimirNews() {
  let txt = "";
  for (let i in News.noticias) {
      txt += '<div class="noticia">';
      txt += News.noticias[i].foto;
      txt += '<div class="info">';
      txt += "<h4>" + News.noticias[i].titular + "</h4>";
      txt += "<p>" + News.noticias[i].descripcion + "</p>";
      txt += '<button id="editNot"><i class="fas fa-pencil-alt"></i></button>';
      txt += '<button class="delNot"><i class="fas fa-trash-alt"></i></button>';
      txt += '</div></div>'
  }
  document.getElementById("news").innerHTML = txt;
}

function imprimirEventos() {
  let txt = "";
  txt += '<div class="degradadoizq"></div>';
  for (let i in Events.eventos) {
      txt += '<div class="event">';
      txt += Events.eventos[i].foto;
      txt += '<p><span>' + Events.eventos[i].nombre + '</span></p>';
      txt += '<i class="fas fa-info-circle"></i>' + '</div>';
  }
  txt += '<div class="degradadoder"></div>';
  document.getElementById("eventos").innerHTML = txt;
}

imprimirNews();
imprimirEventos();

/* document.getElementById("follow").addEventListener("click", function () {
  imprimirNews();
}); */


//TODO:Formulario de Busqueda 
function mostrarFormulario() {
  var formulario = document.getElementById("formulario");
  formulario.style.display = block;
  var evento = document.getElementById("eventos");
  evento.style.display = block;
}

//Datapicker
/* $(function () {
  $("#datepicker").datepicker();
}); */