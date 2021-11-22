//TODO:Objeto News. DONE
const News = {
    noticias: [{
            foto: '<img src="images/news1.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El festival Iruña Rock 2022 anuncia su cartel completo',
            descripcion: 'El festival Iruña Rock ha anunciado el cartel completo de su edición 2022, que tendrá lugar en el Navarra Arena los días 18 y 19 de marzo.',
            fecha: {
                dia: 21,
                mes: 10,
                anyo: 2021
            },
            info:'<a  href="https://www.noticiasdenavarra.com/cultura/2021/11/16/festival-iruna-rock-2022-anuncia/1201086.html" id="moreNews">+INFO</a>'
        },

        {
            foto: '<img src="images/news2.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'El Lets Festival anuncia sus primeros nombres para 2022',
            descripcion: 'Pero las cosas van a ser diferentes en 2022, con un festival que volverá a pleno rendimiento.',
            fecha: {
                dia: 11,
                mes: 9,
                anyo: 2021
            },
            info:'<a href="https://www.noticiasdenavarra.com/cultura/2021/11/16/festival-iruna-rock-2022-anuncia/1201086.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news3.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Los festivales vuelven con fuerza en 2022',
            descripcion: 'Festivales 2022. Ultra Miami 2022. Ultra Miami es históricamente el punto de inicio de la temporada de grandes festivales.',
            fecha: {
                dia: 27,
                mes: 10,
                anyo: 2021
            },
            info:'<a href="" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news4.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival Actual 2022 en Logroño: Conciertos y Entradas',
            descripcion: 'Festival Actual 2022 regresará a la localidad riojana del 2 al 8 de enero del próximo año.',
            fecha: {
                dia: 3,
                mes: 8,
                anyo: 2021
            },
            info:'<a href="https://www.dodmagazine.es/festival-actual-2022-conciertos-entradas/" id="moreNews">+INFO</a>'
        },
        {
            foto: '<img src="images/news5.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Ed Sheeran ofrecerá un concierto exclusivo en Pokémon GO: los detalles',
            descripcion: 'Ed Sheeran lo ha vuelto a hacer. El artista ha anunciado que dará un concierto exclusivo para Pokemon GO',
            fecha: {
                dia: 15,
                mes: 9,
                anyo: 2021
            },
            info:'<a href="https://okdiario.com/happyfm/ed-sheeran-concierto-exclusivo-pokemon-go-detalles-8149199" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news6.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Alizzz, el primer artista confirmado para el festival Brizna 2022',
            descripcion: 'Alizzz es el primer artista confirmado para el festival Brizna 2022. Uno de los productores de pop español más importante e influyente.',
            fecha: {
                dia: 7,
                mes: 7,
                anyo: 2021
            },
            info:'<a href="https://www.aragondigital.es/2021/11/15/alizzz-el-primer-artista-confirmado-para-el-festival-brizna-2022/" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news7.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Festival de Lucerna 2022: Diversidad',
            descripcion: 'El Festival de Lucerna comparte su programación para el verano de 2022. Anne-Sophie Mutter, Lang Lang, Daniel Barenboim, Sir Simon Rattle,...',
            fecha: {
                dia: 29,
                mes: 10,
                anyo: 2021
            },
            info:'<a href="https://www.beckmesser.com/festival-lucerna-2022/" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news8.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'La Oreja de Van Gogh está de gira en Estados Unidos',
            descripcion: 'Después de cancelar varios conciertos por la pandemia y tener que rehacer su calendario, ahora recorrerán 18 ciudades estadounidenses.',
            fecha: {
                dia: 5,
                mes: 11,
                anyo: 2021
            },
            info:'<a href="https://www.diariovasco.com/culturas/musica/gira-oreja-vangogh-conciertos-20211101175734-nt.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news9.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'Izaro dará un concierto especial en el Velódromo el 7 de mayo',
            descripcion: 'Izaro cerrará la gira de Limones en invierno el próximo 7 de mayo en el Velódromo de Donostia. Será un concierto especial, tal y como ha asegurado la cantante en redes sociales,',
            fecha: {
                dia: 24,
                mes: 10,
                anyo: 2021
            },
            info:'<a href="https://www.noticiasdegipuzkoa.eus/cultura/2021/11/22/izaro-dara-concierto-especial-velodromo/1160221.html" id="moreNews">+INFO</a>'
        },
        
        {
            foto: '<img src="images/news10.jpeg" alt="No se pudo mostrar la imagen en tu navegador"></img>',
            titular: 'La Pegatina y Efecto Pasillo protagonizarán una gira conjunta por España',
            descripcion: 'Tras colaborar el año pasado en el sencillo “Ahípamí”, La Pegatina y Efecto Pasillo vuelven a unir fuerzas para presentar "EfectoPegatina", una gira conjunta que pasará por Valencia, Barcelona, Murcia y Zaragoza durante la primavera de 2022.',
            fecha: {
                dia: 3,
                mes: 11,
                anyo: 2021
            },
            info:'<a href="https://www.mondosonoro.com/noticias-actualidad-musical/efecto-pegatina-gira/" id="moreNews">+INFO</a>'
        }
    ]
};


//TODO:Objeto principal Events.DONE
const Events = {
    eventos: [{
            foto: '<img class="imgEvent" src="images/event1.PNG" alt="No se pudo mostrar">',
            nombre: '1. Mallorca Live Festival',
            descripcion: 'Venid al gran festival de la musica en Mallorca',
            info:'<a href="https://mallorcalivemusic.com/festival/tickets/?utm_source=Search&utm_medium=paid&utm_content=keywords&utm_campaign=MuseMLF22&gclid=EAIaIQobChMI9dCovays9AIVWJ3VCh0MzgcrEAAYASAAEgI6D_D_BwE" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event2.PNG" alt="No se pudo mostrar">',
            nombre: '2. The BPM FestivaViña Rock 2022 ',
            descripcion: 'Viña Rock 2022 se celebrará los días 28, 29 y 30 de abril. La nueva edición del festival',
            info:'<a href="https://www.wakeandlisten.com/vina-rock-2022-rumores-confirmaciones-cartel-entradas/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event3.PNG" alt="No se pudo mostrar">',
            nombre: '3. Primavera Sound 2022',
            descripcion: 'Primavera Sound 2022 celebrará en Barcelona su nueva edición durante dos fines de semana consecutivos del mes de junio de 2022',
            info:'<a href="https://www.wakeandlisten.com/primavera-sound-2022-rumores-cartel-entradas/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event4.PNG" alt="No se pudo mostrar">',
            nombre: '4. WAN 2022 Madrid',
            descripcion: 'WAN Festival volverá a tomar La Nueva Cubierta de Leganés',
            info:'<a href="https://www.viagogo.es/Entradas-Festivales/Festivales-en-Espana/WAN-Festival-Entradas?AffiliateID=49&adposition=&PCID=PSESGOOFESWANF1CDBBBC6879&AdID=559011164042&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=15166465804&ps_ag=131057867444&ps_tg=kwd-561827239111&ps_ad=559011164042&ps_adp=%2c&ps_fi=%2c&ps_li=%2c&ps_lp=1005517&ps_n=g&ps_d=c&gclid=EAIaIQobChMIlZeL-6ys9AIV6o5oCR0xTgEHEAAYASAAEgL9x_D_BwE" id="ir" >Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event5.PNG" alt="No se pudo mostrar">',
            nombre: '5. Festival Cara-B 2022',
            descripcion: 'Cara•B 2022 se presenta como un festival con una visión de 360 grados alrededor de la creación artística',
            info:'<a href="https://festivalcarab.com/" id="ir">Quiero ir</a>'
        },
        {
            foto: '<img class="imgEvent" src="images/event6.PNG" alt="No se pudo mostrar">',
            nombre: '6. Actual Festival 2022',
            descripcion: 'El festival es un altavoz de ideas, pensamientos, talento, diversidad y expresiones artísticas contemporáneas. ',
            info:'<a href="" id="ir">Quiero ir</a>'
        },
    ]
}
    
const EventDes = {
    destacado: [{
        foto: '<img class="imgEvent" src="images/event1.PNG"   height:"290" width="252" alt="No se pudo mostrar">',
        nombre: 'Mallorca Live Festival',
        descripcion: 'Venid al gran festival de la musica en Mallorca',
        info:'<a href="" id="moreNews">+info</a>'
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



//TODO:Imprimir Noticias. DONE
function imprimirNews() {
    let txt = "";
    for (let i in News.noticias) {
        txt += '<div class="noticia">';
        txt += News.noticias[i].foto;
        txt += '<div class="info">';
        txt += "<h4>" + News.noticias[i].titular + "</h4>";
        txt += "<p>" + News.noticias[i].descripcion + "</p>";
        txt += News.noticias[i].info;
        txt += `<p>Fecha publicación: 
        ${News.noticias[i].fecha.dia}/${News.noticias[i].fecha.mes}/${News.noticias[i].fecha.anyo}</p>`;
        txt += '<button id="editNot"><i class="fas fa-pencil-alt"></i></button>';
        txt += '<button class="delNot"><i class="fas fa-trash-alt"></i></button>';
        txt += '</div></div>'
    }
    document.getElementById("news").innerHTML = txt;
}


//TODO:Imprimir Noticias. DONE
function imprimirEventos() {
    let txt = "";
    txt += '<div class="degradadoizq"></div>';
    for (let i in Events.eventos) {
        txt += '<div class="event">';
        txt += Events.eventos[i].foto;
        txt += '<p><span>' + Events.eventos[i].nombre + '</span></p>';
        txt += '<i class="fas fa-info-circle"></i>' + '</div>';
        txt += '<div class="overlayevent" onclick="off()">'; // Por defecto está oculto
        txt += '<span>' + Events.eventos[i].descripcion + '<br>'+ Events.eventos[i].info + '</span>' + '</div>';
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

//TODO:LOGIN
function login(){
    document.getElementById("suscripcion").style.display="none";
}



//TODO:COOKIE SUSCRIPCION
function setCookie(name,cvalue,expires){

}

//TODO:Informacion de los Eventos con efecto Overlay
/* Estas líneas son las que hacen funcionar el efecto de overlay de la info de cada efecto */
for (let i = 0; i <= Events.eventos.length; i++) {
    document.getElementsByClassName("fas fa-info-circle")[i].addEventListener("click", function () {
        on(i);
    });
}


function on(numevent) {
    let info = document.getElementsByClassName("overlayevent")[numevent - 1];
    info.style.display = "block";
}

function off() {
    for (let i = 0; i < Events.eventos.length; i++) {
        let info = document.getElementsByClassName("overlayevent")[i];
        info.style.display = "none";
    }
}

