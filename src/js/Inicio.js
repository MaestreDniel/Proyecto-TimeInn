export const News=[
    {
     titular: 'El festival Iruña Rock 2022 anuncia su cartel completo',
     descripcion: 'El festival Iruña Rock ha anunciado el cartel completo de su edición 2022, que tendrá lugar en el Navarra Arena los días 18 y 19 de marzo'
    },
    {
        titular: 'El Let\'s Festival anuncia sus primeros nombres para 2022',
        descripcion: 'Pero las cosas van a ser diferentes en 2022, con un festival que volverá a pleno rendimiento y que, para empezar'
       },
       {
        titular: 'Los festivales vuelven con fuerza en 2022',
        descripcion: 'Festivales 2022. Ultra Miami 2022. Ultra Miami es históricamente el punto de inicio de la temporada de grandes festivales.'
       },
       {
        titular: 'Festival Actual 2022 en Logroño: Conciertos y Entradas',
        descripcion: 'Festival Actual 2022 regresará a la localidad riojana del 2 al 8 de enero del próximo año'
       },
       {
        titular: 'Los festivales de 2022 recibirán en subvenciones un 72% más que este año',
        descripcion: 'ya han abierto agenda y hacen números para organizar los festivales del 2022.'
       },
       {
        titular: 'Alizzz, el primer artista confirmado para el festival Brizna 2022',
        descripcion: 'Alizzz es el primer artista confirmado para el festival Brizna 2022. Uno de los productores de pop español más importante e influyente '
       },
       {
        titular: 'Festival de Lucerna 2022: Diversidad',
        descripcion: 'El Festival de Lucerna comparte su programación para el verano de 2022. Anne-Sophie Mutter, Lang Lang, Daniel Barenboim, Sir Simon Rattle,...'
       },
       {
        titular: 'El Festival de Les Arts anuncia fechas en 2022',
        descripcion: 'Para 2022, el festival valenciano de referencia volverá a llenar de música la Ciudad de las Artes y las Ciencias durante los días 3 y 4'
       },
       {
        titular: 'El Festival de Les Arts anuncia fechas en 2022',
        descripcion: 'El festival Palencia Sonora, que volverá a su formato habitual entre los días 10 y 12 de junio de 2022, ha ampliado su cartel con Alizzz'
       },
       {
        titular: 'Cáceres creará en 2022 una marca para "proteger" los festivales consolidados y garantizar su financiación',
        descripcion: 'El alcalde de Cáceres, Luis Salaya, ha anunciado que en 2022 se creará una marca local para ejercer de paraguas de protección de los festivales'
       }
]

export const principalEvents=[
    {
        nombre:'Mallorca Live Festival',
        descripcion:'Venid al gran festival de la musica en Mallorca'
    },
    {
        nombre:'The BPM Festival: Ibiza Showcases',
        descripcion:'Gran Festival de BPM en Ibiza'
    },
    {
        nombre:'Madrid Popfest 2022',
        descripcion:'Buena fiesta del Mejor Pop en Madrid'
    }
]


function mostrarFormulario(){
    var formulario = document.getElementById("formulario");
    formulario.style.display = block;
    var evento = document.getElementById("eventos");
    evento.style.display= block;
}

//Datapicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );