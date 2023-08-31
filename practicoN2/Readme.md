# Piedra, Papel y Tijera

El proyecto consiste en crear una versión web simple al popular juego de manos del mismo nombre.

## Comenzando 🚀

Este proyecto es realizado en el marco del trabajo práctico número 2 del curso "Páginas Web con Componentes Dinámicos" dictado por FAMAF-UNC, en el plan Argentina Programa 4.0.
Es un juego web simple utilizando HTML5, CSS3 y JavaScript que permite a los usuarios realizar una partida de piedra, papel y tijera contra la PC.
Este proyecto en términos visuales contiene un cuadro de texto para ingresar el nombre del jugador, un cuadro con opciones para elegir piedra, papel o tijeras y botones que permiten iniciar las partidas y limpiar (entre otras cuestiones relacionadas con el estilo, como son bordes, imagenes, sombras, cambios de tamaño, etc. que hacen a la estética de la página web).
Esta página web se encuentra integrada, así, por tres archivos que se encuentran conectados permitiendo su funcionalidad. Estos son: index.html, styles.css y script.js (además de las imagenes).

### Pre-requisitos 📋

Para poder ejecutar el juego solamente se necesita una aplicación que permita abrir páginas web, como Google Chrome, Firefox, Opera, Internet Explorer, etc. 

### Reglas del juego

Las reglas son las mismas que las del juego clásico de manos. La piedra rompe la tijera, la tijera corta el papel y el papel envuelve a la piedra.
El juego finaliza, en el caso de la página web, tras cinco rondas jugadas o cuando haya tres rondas ganadas por el jugador o la computadora.

## Ejecutando las pruebas ⚙️

Se realizaron repetidas pruebas para revisar el correcto funcionamiento de la página.

Los resultados obtenidos y esperados fueron:

* Al no ingresar un nombre y apretar el botón "Jugar!" se obtiene un mensaje que pide que se ingrese un nombre.
* Al no ingresar una opción (piedra, papel o tijera) y apretar el botón "Jugar!" se obtiene un mensaje que pregunta al usuario si quiere elegir piedra, papel o tijera.
* Al ingresar los datos necesarios y apretar le botón "Jugar!" se obtienen los resultados esperados, el juego corre correctamente. Se muestra correctamente el número de ronda, así como las elecciones de la computadora y el jugador; se muestra correctamente el mensaje de quién ha ganado la ronda.
* Al intentar otra ronda se van contando los puntajes de los jugadores de forma correcta.
* El juego finaliza correctamente al sucederse la quinta ronda o al haber un ganador de tres de ellas. Se visualiza bien el mensaje de ganador final y las imagenes.

Personalmente considero que me hubiera gustado contar con más tiempo y conocimientos para mejorar visualmente el trabajo.
La mayor complejidad de este proyecto estuvo en la parte visual y estética. Estuve revisando mucho tiempo CSS3 para poder lograr que los diferentes elementos se visualizaran correctamente, así como modificando el HTML para ello mismo.
Una situación que no pude resolver y dejé como estaba es el caso de la transición de las imagenes finales. Tuve que dejar su ingreso "abrupto" debido a que no podía hacer que gradualmente cambiaran su opacidad. Otros problemas que pude haber tenido están indicados en el archivo JS.
Entre lo mencionado y otras cuestiones, me habría gustado agregar un mensaje al principio que explicara las reglas del juego (por ejemplo el caso de las cinco rondas y el mejor de tres); así también me hubiera gustado que el cuadro que aparece tras el botón "Jugar!" que contiene las rondas y puntajes no cambiara de tamaño de acuerdo al contenido, pero no tuve otra opción más que poner inline-block debido a que sino se deformaba demasiado la página.
Me genera mucha incertidumbre la visibilidad en celulares.

## Construido con 🛠️

* Lenguajes utilizados:
    - HTML5
    - CSS3
    - JavaScript
* Visual Studio Code.
* Reconozco así también la utilización de medios alternativos para solucionar problemas o dudas que surgieran, como ChatGPT o tres secciones de la página web de Manz (https://lenguajehtml.com/, https://lenguajejs.com/javascript/ y https://lenguajecss.com/css/).
* paleta de colores extraída de https://coolors.co. Esta específicamente: https://coolors.co/390099-6c0079-9e0059-cf0057-ff0054-ff2a2a-ff5400-ff8900-ffa300-ffbd00.
* imagenes extraídas de Google.

## Versionado 📌

Esta es la primera versión del proyecto.

## Autores ✒️

* **Lucía Alén Llorens** - [LuciaLlorens](https://github.com/LuciaLlorens)

## Licencia 📄

Este proyecto no se encuentra bajo licencia.

## Expresiones de Gratitud 🎁

* Quiero agradecer a les profesores de Argentina Programa 4.0 por, además de sus claras explicaciones, poner a diposición de les alumnes las grabaciones de las clases y demás recursos, los cuales me posibilitaron llevar adelante el proyecto encomendado.
* Agradezco también a mi compañero que me brindó su opinión sobre cualquier problema que pude tener y me colaboró a tener más tiempo para dedicar al trabajo.
* Agradezco también al creador del template, sin el cual habría estado muy perdida para llevar adelante el archivo README: [Villanuevand](https://github.com/Villanuevand). 