//TODO:Objeto News
const News = {
    noticias: [{
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El festival Iruña Rock 2022 anuncia su cartel completo',
            descripcion: 'El festival Iruña Rock ha anunciado el cartel completo de su edición 2022, que tendrá lugar en el Navarra Arena los días 18 y 19 de marzo.',
            fecha: {
                dia: 21,
                mes: 10,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El Let\'s Festival anuncia sus primeros nombres para 2022',
            descripcion: 'Pero las cosas van a ser diferentes en 2022, con un festival que volverá a pleno rendimiento.',
            fecha: {
                dia: 11,
                mes: 9,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Los festivales vuelven con fuerza en 2022',
            descripcion: 'Festivales 2022. Ultra Miami 2022. Ultra Miami es históricamente el punto de inicio de la temporada de grandes festivales.',
            fecha: {
                dia: 27,
                mes: 10,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival Actual 2022 en Logroño: Conciertos y Entradas',
            descripcion: 'Festival Actual 2022 regresará a la localidad riojana del 2 al 8 de enero del próximo año.',
            fecha: {
                dia: 3,
                mes: 8,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Los festivales de 2022 recibirán en subvenciones un 72% más que este año',
            descripcion: 'Ya han abierto agenda y hacen números para organizar los festivales del 2022.',
            fecha: {
                dia: 15,
                mes: 9,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Alizzz, el primer artista confirmado para el festival Brizna 2022',
            descripcion: 'Alizzz es el primer artista confirmado para el festival Brizna 2022. Uno de los productores de pop español más importante e influyente.',
            fecha: {
                dia: 7,
                mes: 7,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival de Lucerna 2022: Diversidad',
            descripcion: 'El Festival de Lucerna comparte su programación para el verano de 2022. Anne-Sophie Mutter, Lang Lang, Daniel Barenboim, Sir Simon Rattle,...',
            fecha: {
                dia: 29,
                mes: 10,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El Festival de Les Arts anuncia fechas en 2022',
            descripcion: 'Para 2022, el festival valenciano de referencia volverá a llenar de música la Ciudad de las Artes y las Ciencias durante los días 3 y 4.',
            fecha: {
                dia: 5,
                mes: 11,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El Festival de Les Arts anuncia fechas en 2022',
            descripcion: 'El festival Palencia Sonora, que volverá a su formato habitual entre los días 10 y 12 de junio de 2022, ha ampliado su cartel con Alizzz.',
            fecha: {
                dia: 24,
                mes: 10,
                anyo: 2021
            }
        },
        {
            foto: '<img src="images/noticias.png" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Cáceres creará en 2022 una marca para "proteger" los festivales consolidados y garantizar su financiación',
            descripcion: 'El alcalde de Cáceres, Luis Salaya, ha anunciado que en 2022 se creará una marca local para ejercer de paraguas de protección de los festivales.',
            fecha: {
                dia: 3,
                mes: 11,
                anyo: 2021
            }
        }
    ]
}


//TODO:Objeto principal Events
const Events = {
    eventos: [{
            foto: '<img class="imgEvent" src="images/event1.PNG" alt="No se pudo mostrar">',
            nombre: '1. Mallorca Live Festival',
            descripcion: 'Venid al gran festival de la musica en Mallorca'
        },
        {
            foto: '<img class="imgEvent" src="images/event2.PNG" alt="No se pudo mostrar">',
            nombre: '2. The BPM Festival',
            descripcion: 'Gran Festival de BPM en Ibiza'
        },
        {
            foto: '<img class="imgEvent" src="images/event3.PNG" alt="No se pudo mostrar">',
            nombre: '3. Madrid Popfest 2022',
            descripcion: 'Buena fiesta del Mejor Pop en Madrid'
        },
        {
            foto: '<img class="imgEvent" src="images/event4.PNG" alt="No se pudo mostrar">',
            nombre: '4. WAN 2022 Madrid',
            descripcion: 'WAN Festival volverá a tomar La Nueva Cubierta de Leganés'
        },
        {
            foto: '<img class="imgEvent" src="images/event5.PNG" alt="No se pudo mostrar">',
            nombre: '5. Festival Cara-B 2022',
            descripcion: 'Cara•B 2022 se presenta como un festival con una visión de 360 grados alrededor de la creación artística'
        },
        {
            foto: '<img class="imgEvent" src="images/event6.PNG" alt="No se pudo mostrar">',
            nombre: '6. Actual Festival 2022',
            descripcion: 'El festival es un altavoz de ideas, pensamientos, talento, diversidad y expresiones artísticas contemporáneas. '
        },
    ]
}

const EventDes = {
    destacado: [{
        foto: '<img class="imgEvent" src="images/event1.PNG"   height:"290" width="252" alt="No se pudo mostrar">',
        nombre: 'Mallorca Live Festival',
        descripcion: 'Venid al gran festival de la musica en Mallorca'
    }]
}

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

eventoDestacado()

function imprimirNews() {
    let txt = "";
    for (let i in News.noticias) {
        txt += '<div class="noticia">';
        txt += News.noticias[i].foto;
        txt += '<div class="info">';
        txt += "<h4>" + News.noticias[i].titular + "</h4>";
        txt += "<p>" + News.noticias[i].descripcion + "</p>";
        txt += `<p>Fecha publicación: 
        ${News.noticias[i].fecha.dia}/${News.noticias[i].fecha.mes}/${News.noticias[i].fecha.anyo}</p>`;
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

// Vuelve arriba al ser clicado
function backToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

imprimirNews();

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