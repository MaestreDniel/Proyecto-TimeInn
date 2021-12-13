# MUSIC4EVENTS (Proyecto TimeInn)

# P3 Indicaciones

Hemos añadido dos formularios, uno de login y otro de suscripción. Cada uno de sus campos pasa por un proceso de validación.

- Hay tres emails y usuarios predeterminados:
  - Los emails son: dmaestre@cifpfbmoll.com, jmateo@cifpfbmoll.com y classicoman@gmail.net
  - Los usuarios son: Maestre, JMateo y Classicoman

Es importante tenerlos en cuenta porque los usuarios ya existentes no pasarán el proceso de validación en la página de registro, pero sirven para la página de login.

Criterios de validación:
- Nombre de usuario: El nombre debe estar compuesto de carácteres alfanuméricos y tener un máximo de 20 caracteres.
- Contraseña: La contraseña debe tener un mínimo de 8 caracteres. Primero hay que poner (como mínimo) 7 caracteres cualquiera. Luego hay que poner un caracter especial distinto al guión bajo. A partir de aquí se puede añadir cualquier caracter.
- Email: El email debe seguir este formato: aaaaaaaaaa@bbbbbbbb.ccc Teniendo en cuenta que:
  - aaaaaaaaa está en minúsculas, salvo la primera letra que opcionalmente puede ser mayúscula
  - bbbbbbbb tiene entre 5 y 10 letras minúsculas
  - ccc solo puede valer: com, net o gov
  - Que solo hay 1 arroba y 1 punto (y la arroba va antes que el punto)

Cuando se hace un login correcto, se redirige al usuario a la página de inicio y encima del calendario se muestra el nombre del usuario logueado, ya que este se queda guardado en una cookie.

## <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wireframe_logo.png/640px-Wireframe_logo.png">

- LINK: https://balsamiq.cloud/s93gm7i/pd0tzro/r1337

## <img width="150"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1280px-Netlify_logo.svg.png" >

- LINK: https://elated-gates-aa09b3.netlify.app/

## GITHUB PROJECT

- LINK: https://github.com/MaestreDniel/Proyecto-TimeInn/projects/1

## PALETA DE COLORES

### Color primario

- rgba-primary-0: rgba(0, 0, 0, 1).
- rgba-primary-1: rgba(1, 45, 62, 1).
- rgba-primary-2: rgba(4, 74, 100, 1).
- rgba-primary-3: rgba(35, 98, 121, 1).
- rgba-primary-4: rgba(78, 86, 88, 1).
- rgba-primary-4-transpar: rgba(78, 86, 88, 0.8).

### Color secundario 1

- rgba-secondary-1-0: rgba(0, 0, 0, 1).
- rgba-secondary-1-1: rgba(99, 73, 0, 1).
- rgba-secondary-1-2: rgba(160, 118, 0, 1).
- rgba-secondary-1-3: rgba(194, 156, 49, 1).
- rgba-secondary-1-4: rgba(141, 136, 124, 1).

### Color secundario 2

- rgba-secondary-2-0: rgba(0, 0, 0, 1).
- rgba-secondary-2-1: rgba(99, 7, 0, 1).
- rgba-secondary-2-2: rgba(160, 12, 0, 1).
- rgba-secondary-2-3: rgba(194, 60, 49, 1);
- rgba-secondary-2-4: rgba(141, 125, 124, 1);

## FONTS

- body (El principal, con Google font):

  - font-family: "Source Sans Pro", sans-serif;

- h1,h2,h3,h4:

  - font-family: 'Times New Roman', Times, serif.

- label:

  - font-family: Verdana, Geneva, Tahoma, sans-serif.

- p:

  - font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif.

- input:

  - font-family: 'Courier New', Courier, monospace.

## WEBS EN LAS QUE SE BASA

- https://www.timeout.com/es
- https://www.taquilla.com/conciertos
