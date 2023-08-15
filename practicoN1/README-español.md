# Calculadora Simple

El proyecto consiste en crear una calculadora simple que permita realizar las operaciones matemáticas básicas de suma, resta, multiplicación y división.

## Comenzando 🚀

Este proyecto es realizado en el marco del trabajo práctico número 1 del curso "Páginas Web con Componentes Dinámicos" dictado por FAMAF-UNC, en el plan Argentina Programa 4.0.
Es una calculadora simple que utiliza los lenguajes HTML5, CSS3 y JavaScript, que, como se mencionó, debe permitir hacer operaciones básicas como son la resta, la suma, la división y la multiplicación. Este proyecto en términos visuales contiene cuadros de texto para ingresar los operandos, un menú desplegable para seleccionar los operadores y botones para calcular y limpiar (entre otras cuestiones relacionadas con el estilo, como bordes, imagenes, etc. que hacen a la estética de la página web).
Esta página web se encuentra integrada, así, por tres archivos que se encuentran conectados permitiendo su funcionalidad. Estos son: index.html, styles.css y script.js.

### Pre-requisitos 📋

Para poder ejecutar la calculadora solamente se necesita una aplicación que permita abrir páginas web, como Google Chrome, Firefox, Opera, Internet Explorer, etc. 

## Ejecutando las pruebas ⚙️

Se realizaron diferentes casos de prueba con los operadores y operandos para comprobar el funcionamiento de la calculadora. Las cuales detallo a continuación:

* Pruebas de operandos:

Se dejó en blanco los espacios de operandos y se obtuvo el resultado esperado de error.
Así también se probó ingresar la letra "e" o los signos "+" y "-" en las casillas de operandos y se obtuvo el mismo resultado esperado.
"ERROR: ingrese operandos válidos."


* Pruebas de operadores:

Se ingresaron números en las casillas de operandos pero se dejó en blanco la casilla de operadores y se obtuvo el resultado esperado de error.
"ERROR: ingrese un operador válido."


* Pruebas de operaciones:

    - 5 + 5 = 10 
    - 5 - 5 = 0
    - 5 * 5 = 25
    - 5 / 5 = 1 

    devuelven resultados correctos y esperados.


    - -5 + 5 = 0
    - -5 - 5 = -10
    - -5 * 5 = -25
    - -5 / 5 = -1

    devuelven resultados correctos y esperados.


    - 0.5 + 0.15 = 0.65

    esta y las demás operaciones con decimales devuelven resultados correctos y esperados.


    - 5 / 0 = ERROR: la operación no es válida, no se puede dividir por cero.

    devuelve el mensaje de error esperado.


    - 1254524855585218 * 1552354785223589 = ERROR: el resultado es demasiado grande o demasiado pequeño para ser mostrado en pantalla.
    - 1 / 12452114451121565152561 = ERROR: el resultado es demasiado grande o demasiado pequeño para ser mostrado en pantalla.

    devuelven el mensaje de error esperado.


En un principio ocurrieron una serie de errores en la realización de operaciones debido a que se presentaban los mensajes de error cuando no correspondían, esto fue corregido modificando el código JS.
Principalmente se debieron al ordenamiento de las diferentes operaciones dentro la función que ejecutaba el resultado y validaba las operaciones; así como también la conversión en número de los valores ingresados en los campos de texto del HTML por medio de la función Number() en vez de parseFloat() o intentar identificar los espacios vacíos con "" en vez de la función isNan().

## Construido con 🛠️

* Lenguajes utilizados:
    - HTML5
    - CSS3
    - JavaScript
* Visual Studio Code.
* Reconozco así también la utilización de medios alternativos para solucionar problemas o dudas que surgieran, como ChatGPT o tres secciones de la página web de Manz (https://lenguajehtml.com/, https://lenguajejs.com/javascript/ y https://lenguajecss.com/css/).
* Imagen de fondo utilizada en el proyecto de licencia gratuita, Freepik (https://www.freepik.es/foto-gratis/vista-superior-numeros-dia-educacion_21745481.htm#query=fondo%20numeros&position=3&from_view=keyword&track=ais).

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