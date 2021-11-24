//TODO:Objeto News. DONE
/*Creamos una serie de objetos noticias los cuales imprimiremos directamente
Los cuales constan de una foto, un titular, una descripción, una fecha y un boton que nos lleva a la noticia*/
const News = {
    noticias: [{
            foto: '<img src="images/news1.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El festival Iruña Rock 2022 anuncia su cartel completo',
            descripcion: 'El festival Iruña Rock ha anunciado el cartel completo de su edición 2022, que tendrá lugar en el Navarra Arena los días 18 y 19 de marzo.',
            fecha: "2021/8/2",
            info:'<a  href="https://www.noticiasdenavarra.com/cultura/2021/11/16/festival-iruna-rock-2022-anuncia/1201086.html" id="moreNews">+INFO</a>'
        },

        {
            foto: '<img src="images/news2.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El Lets Festival anuncia sus primeros nombres para 2022',
            descripcion: 'Pero las cosas van a ser diferentes en 2022, con un festival que volverá a pleno rendimiento.',
            fecha: "2021/9/11",
            info:'<a href="https://www.noticiasdenavarra.com/cultura/2021/11/16/festival-iruna-rock-2022-anuncia/1201086.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news3.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Los festivales vuelven con fuerza en 2022',
            descripcion: 'Festivales 2022. Ultra Miami 2022. Ultra Miami es históricamente el punto de inicio de la temporada de grandes festivales.',
            fecha:"2021/10/27",
            info:'<a href="" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news4.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival Actual 2022 en Logroño: Conciertos y Entradas',
            descripcion: 'Festival Actual 2022 regresará a la localidad riojana del 2 al 8 de enero del próximo año.',
            fecha:"2021/8/3",
            info:'<a href="https://www.dodmagazine.es/festival-actual-2022-conciertos-entradas/" id="moreNews">+INFO</a>'
        },
        {
            foto: '<img src="images/news5.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Ed Sheeran ofrecerá un concierto exclusivo en Pokémon GO: los detalles',
            descripcion: 'Ed Sheeran lo ha vuelto a hacer. El artista ha anunciado que dará un concierto exclusivo para Pokemon GO',
            fecha:"2021/9/15",
            info:'<a href="https://okdiario.com/happyfm/ed-sheeran-concierto-exclusivo-pokemon-go-detalles-8149199" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news6.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Alizzz, el primer artista confirmado para el festival Brizna 2022',
            descripcion: 'Alizzz es el primer artista confirmado para el festival Brizna 2022. Uno de los productores de pop español más importante e influyente.',
            fecha:"2021/11/9",
            info:'<a href="https://www.aragondigital.es/2021/11/15/alizzz-el-primer-artista-confirmado-para-el-festival-brizna-2022/" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news7.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival de Lucerna 2022: Diversidad',
            descripcion: 'El Festival de Lucerna comparte su programación para el verano de 2022. Anne-Sophie Mutter, Lang Lang, Daniel Barenboim, Sir Simon Rattle,...',
            fecha:"2021/10/29",
            info:'<a href="https://www.beckmesser.com/festival-lucerna-2022/" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news8.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'La Oreja de Van Gogh está de gira en Estados Unidos',
            descripcion: 'Después de cancelar varios conciertos por la pandemia y tener que rehacer su calendario, ahora recorrerán 18 ciudades estadounidenses.',
            fecha:"2021/11/5",
            info:'<a href="https://www.diariovasco.com/culturas/musica/gira-oreja-vangogh-conciertos-20211101175734-nt.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news9.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Izaro dará un concierto especial en el Velódromo el 7 de mayo',
            descripcion: 'Izaro cerrará la gira de Limones en invierno el próximo 7 de mayo en el Velódromo de Donostia. Será un concierto especial, tal y como ha asegurado la cantante en redes sociales,',
            fecha: "2021/10/24",
            info:'<a href="https://www.noticiasdegipuzkoa.eus/cultura/2021/11/22/izaro-dara-concierto-especial-velodromo/1160221.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news10.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'La Pegatina y Efecto Pasillo protagonizarán una gira conjunta por España',
            descripcion: 'Tras colaborar el año pasado en el sencillo “Ahípamí”, La Pegatina y Efecto Pasillo vuelven a unir fuerzas para presentar "EfectoPegatina", una gira conjunta que pasará por Valencia, Barcelona, Murcia y Zaragoza durante la primavera de 2022.',
            fecha:"2021/11/3",
            info:'<a href="https://www.mondosonoro.com/noticias-actualidad-musical/efecto-pegatina-gira/" id="moreNews">+INFO</a>'
        }
    ]
};




//TODO:Imprimir Noticias. DONE
//Imprimimos las noticias recorriendo el objeto con cada una de sus posiciones
function imprimirNews() {

    let txt = "";
    for (let i in News.noticias) {
        txt += '<div class="noticia">';
        txt += News.noticias[i].foto;
        txt += '<div class="info">';
        txt += "<h4>" + News.noticias[i].titular + "</h4>";
        txt += "<p>" + News.noticias[i].descripcion + "</p>";
        txt += News.noticias[i].info + '<br>';
        let date= News.noticias.sort((a, b) => new Date(a.fecha).getTime() > new Date(b.fecha).getTime())
        
        txt += 'Fecha Publicacion: ' +  News.noticias[i].fecha + '<br>';
         
        txt += '<button id="editNot"><i class="fas fa-pencil-alt"></i></button>';
        txt += '<button class="delNot"><i class="fas fa-trash-alt"></i></button>';
        txt += '</div></div>'
    }
  
    document.getElementById("news").innerHTML = txt;
}

//Ejecutamos la función para que salte directamente
imprimirNews();




//TODO:Objeto principal Events.DONE
/* Creamos objetos eventos donde tienen la foto del evento
 el nombre del evento una pequeña descripción y un link para mas información */
const Events = {
    eventos: [{
            foto: '<img class="imgEvent"  src="images/event1.PNG" alt="No se pudo mostrar">',
            nombre: 'Mallorca Live Festival',
            descripcion: 'Venid al gran festival de la musica en Mallorca',
            fechaI:"24/6/2022",
            fechaF:'26/6/2022',
            patronicio:'<img class="patrocinio" src="images/patrocinioEvent1.PNG" alt="No se pudo mostrar">',
            info:'<a href="https://mallorcalivemusic.com/festival/tickets/?utm_source=Search&utm_medium=paid&utm_content=keywords&utm_campaign=MuseMLF22&gclid=EAIaIQobChMI9dCovays9AIVWJ3VCh0MzgcrEAAYASAAEgI6D_D_BwE" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent"  src="images/event2.PNG" alt="No se pudo mostrar">',
            nombre: 'BPM Viña Rock 2022 ',
            descripcion: ' Viña Rock 2022 regresará a la localidad de Villarobledo, Albacete, contará con bandas como Lendakaris Muertos, Kase.',
            fechaI:"28/4/2022",
            fechaF:'30/4/2022',
            patronicio:'',
            info:'<a href="https://www.wakeandlisten.com/vina-rock-2022-rumores-confirmaciones-cartel-entradas/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event3.PNG" alt="No se pudo mostrar">',
            nombre: 'Primavera Sound 2022',
            descripcion: 'Primavera Sound 2022 celebrará en Barcelona su nueva edición durante dos fines de semana consecutivos del mes de junio de 2022',
            fechaI:"2/6/2022",
            fechaF:'12/6/2022',
            patronicio:'<img class="patrocinio" src="images/patrocinioEvent3.PNG" alt="No se pudo mostrar">',
            info:'<a href="https://www.wakeandlisten.com/primavera-sound-2022-rumores-cartel-entradas/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event4.PNG" alt="No se pudo mostrar">',
            nombre: 'WAN 2022 Madrid',
            descripcion: 'WAN Festival volverá a tomar La Nueva Cubierta de Leganés',
            fechaI:"1/1/2022",
            fechaF:'2/1/2022',
            patronicio:'<img class="patrocinio" src="images/patrocinioEvent4.PNG" alt="No se pudo mostrar">',
            info:'<a href="https://www.viagogo.es/Entradas-Festivales/Festivales-en-Espana/WAN-Festival-Entradas?AffiliateID=49&adposition=&PCID=PSESGOOFESWANF1CDBBBC6879&AdID=559011164042&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=15166465804&ps_ag=131057867444&ps_tg=kwd-561827239111&ps_ad=559011164042&ps_adp=%2c&ps_fi=%2c&ps_li=%2c&ps_lp=1005517&ps_n=g&ps_d=c&gclid=EAIaIQobChMIlZeL-6ys9AIV6o5oCR0xTgEHEAAYASAAEgL9x_D_BwE" id="ir" >Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event5.PNG" alt="No se pudo mostrar">',
            nombre: 'Festival Cara-B 2022',
            descripcion: 'Cara•B 2022 se presenta como un festival con una visión de 360 grados alrededor de la creación artística',
            fechaI:"23/3/2022",
            fechaF:'27/3/2022',
            patronicio:'',
            info:'<a href="https://festivalcarab.com/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event6.PNG" alt="No se pudo mostrar">',
            nombre: 'Actual Festival 2022',
            descripcion: 'El festival es un altavoz de ideas, pensamientos, talento, diversidad y expresiones artísticas contemporáneas. ',
            fechaI:"3/1/2022",
            fechaF:'8/1/2022',
            patronicio:' ',
            info:'<a href="" id="ir">Quiero ir</a>'
        },
    ]
}


//TODO:Imprimir Noticias. DONE
//Con esta función imprimimos los eventos recorriendo dicho objeto
function imprimirEventos() {
    let txt = "";
    txt += '<div class="degradadoizq"></div>';
    for (let i in Events.eventos) {
        txt += '<div class="event">';
        txt += Events.eventos[i].foto;
        txt += '<p><span>' + Events.eventos[i].nombre + '</span></p>';
        txt += Events.eventos[i].fechaI +'<br>';
        txt += Events.eventos[i].fechaF + '<br>';
        txt += '<i class="fas fa-info-circle"></i>' + Events.eventos[i].patronicio + '</div>';
        txt += '<div class="overlayevent" onclick="off()">'; // Por defecto está oculto
        txt += '<span>' + Events.eventos[i].descripcion + '<br>'+ Events.eventos[i].info + '</span>' + '</div>';
    }
    txt += '<div class="degradadoder"></div>';
    document.getElementById("eventos").innerHTML = txt;
}

//se imprimen automaticamente los eventos
imprimirEventos();




//TODO: Evento Destacado
    //Tenemos un Evento destacado que va a ir aparte del resto de evento que resaltara sobre el resto
const EventDes = {
    destacado: [{
        foto: '<img class="imgEvent" src="images/event1.PNG"   height:"290" width="252" alt="No se pudo mostrar">',
        nombre: 'Mallorca Live Festival',
        descripcion: 'Venid al gran festival de la musica en Mallorca',
        info:'<a href="" id="moreNews">+info</a>'
    }]
}
//TODO:Impimir Evento destacado
//Creamo esta función para impimir el evento destacado recorriendolo con un for
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
//Directamente saldra al imprimir la pagina
eventoDestacado()









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

//TODO:Button Back to Top
// Vuelve arriba al ser clicado
function backToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}


//TODO:Formulario de Busqueda 
//Muestra el formulario de busqueda de eventos
function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = block;
    var evento = document.getElementById("eventos");
    evento.style.display = block;
}


//TODO:LOGIN/Suscripcion
function login(){
    document.getElementById("suscripcion").style.display="none";
}



//TODO:Informacion de los Eventos con efecto Overlay
/* Estas líneas son las que hacen funcionar el efecto de overlay de la info de cada efecto */
for (let i = 0; i <= Events.eventos.length; i++) {
    document.getElementsByClassName("fas fa-info-circle")[i].addEventListener("click", function () {
        on(i);
    });
}

//funcion para que apareza que overlay
function on(numevent) {
    let info = document.getElementsByClassName("overlayevent")[numevent - 1];
    info.style.display = "block";
}

//Funcion para que desaparezca el overlay
function off() {
    for (let i = 0; i < Events.eventos.length; i++) {
        let info = document.getElementsByClassName("overlayevent")[i];
        info.style.display = "none";
    }

}

//TODO:LOGIN

function login() {
    let formlogin = document.getElementById("suscripcion");
    formlogin.style.display = "none";
}

/**
 * Las cookies en el navegador Chrome no se guardan si se abre el archivo directamente desde un explorador
 * de archivos, tiene que ser un localhost (con la extensión de Live Server de Visual Studio ya sirve.)
 * https://stackoverflow.com/questions/15385641/javascript-code-for-cookie-not-working-in-chrome
 */

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("timeinn");
    if (user != "") {
        // console.log("object");
    } else {
        setCookie("timeinn", "user", 7); // El 7 hará que tenga una duración de una semana
        setTimeout(function muestraFormSub() {
            let formlogin = document.getElementById("suscripcion");
            formlogin.style.display = "block";
        }, 3000);
    }
}

checkCookie();





//TODO:Ordenar Eventos

