/* Defino variables generales que voy a necesitar */
let jugador;
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
let jugadaUsuario = "vacío";
let jugadaComputadora;
let cantidadDeJugadas = 5;
let numeroDeRonda = 0;
let puntajeUsuario = 0;
let puntajeComputadora = 0;
let empates = 0;

/* Establezco un evento para la selección del botón de piedra, papel y tijera, lo vinculo con la variable jugadaUsuario */
piedra.addEventListener('click', () => {
    jugadaUsuario = "piedra";
    document.getElementById("piedra").classList.add("opciónSeleccionada");
    document.getElementById("papel").classList.remove("opciónSeleccionada");
    document.getElementById("tijera").classList.remove("opciónSeleccionada");
});

papel.addEventListener('click', () => {
    jugadaUsuario = "papel";
    document.getElementById("papel").classList.add("opciónSeleccionada");
    document.getElementById("piedra").classList.remove("opciónSeleccionada");
    document.getElementById("tijera").classList.remove("opciónSeleccionada");
});

tijera.addEventListener('click', () => {
    jugadaUsuario = "tijera";
    document.getElementById("tijera").classList.add("opciónSeleccionada");
    document.getElementById("papel").classList.remove("opciónSeleccionada");
    document.getElementById("piedra").classList.remove("opciónSeleccionada");
});
//quise usar event.target.classList.add("opciónSeleccionada"); pero no funcionaba. De esta forma, y removiendo la clase en otros casos
// permite que las cosas sean seleccionadas correctamente.

/*
Creo una función obtenerJugadaComputadora(). Utilizo Math.random para generar un número aleatorio entre 0 y 2. 
Utilizo Math.florr para redondear el número al entero más cercano hacia abajo.
Relaciono los strings "piedra", "papel" y "tijera" con los números (0 piedra, 1 papel, 2 tijera).
*/
function obtenerJugadaComputadora() {
    let numero = Math.floor(Math.random()*3);
    let lista = ["piedra", "papel", "tijera"];
    return lista[numero];
}

/* 
Defino una función auxiliar para comparar las opciones seleccionadas del jugador y de la computadora; se invocará en la función principal 
(la que se ejecuta cuando se clickea el botón "Jugar!") 
*/
function auxiliarGanadorRonda(jugadaUsuario, jugadaComputadora) {
    switch (jugadaUsuario) {
        case "piedra":
            switch (jugadaComputadora) {
                case "piedra":
                    return "Empate";
                    break;
                case "papel":
                    return "Gana la computadora";
                    break;
                case "tijera":
                    return "Gana el usuario";
                    break;
            }
            break;
        case "papel":
            switch (jugadaComputadora) {
                case "piedra":
                    return "Gana el usuario";
                    break;
                case "papel":
                    return "Empate";
                    break;
                case "tijera":
                    return "Gana la computadora";
                    break;
            }
            break;
        case "tijera":
            switch (jugadaComputadora) {
                case "piedra":
                    return "Gana la computadora";
                    break;
                case "papel":
                    return "Gana el usuario";
                    break;
                case "tijera":
                    return "Empate";
                    break;
            }
            break;
    }
}

/* Esta función es la principal del juego, se ejecuta cuando se clickea el botón "Jugar!" */
function determinarGanadorRonda(jugadaUsuario) {
    jugador = document.getElementById("jugador").value; //la variable jugador retoma el nombre ingresado en el input
    document.getElementById("nombreJugador_").innerHTML= jugador; //el nombre se presenta en el espacio de puntaje
    jugadaComputadora = obtenerJugadaComputadora(); //se obtiene jugada de la computadora
    
    /* Muestro un mensaje en el caso de que el jugador no ingrese un nombre */
    if (jugador === "" || jugador === undefined) {
        document.getElementById("mensajeCampoVacíoNombre").style.color ="red";
        document.getElementById("mensajeCampoVacíoNombre").style.display="block";
        return;
    } else {
        document.getElementById("mensajeCampoVacíoNombre").style.display="none"; //en el caso contrario, oculto el mensaje
    }

    /* Muestro un mensaje en el caso de que el jugador no seleccione ninguna opción para jugar */
    if (jugadaUsuario === "vacío") {
        document.getElementById("mensajeSinSeleccion").style.color ="red";
        document.getElementById("mensajeSinSeleccion").style.display="block";
        return;
    } else {
        document.getElementById("mensajeSinSeleccion").style.display="none"; //de lo contrario oculto el mensaje
    }

    /* Hago que aprezca la interfaz de rondas */
    document.getElementById("empezamosElJuego").style.display="inline-block";

    /* Ingreso qué se seleccionó en el espacio de destinado a los resultados de la ronda */
    document.getElementById("eleccionJugador").innerHTML= jugador + " eligió " + jugadaUsuario;
    document.getElementById("eleccionComputadora").innerHTML="La computadora eligió " + jugadaComputadora;

    /* 
    Retomo la función auxiliar que compara las opciones de los jugadores y se establece el aumento de los puntajes en cada caso.
    Así también estos puntajes se van actualizando en el espacio destinado a ello, y se muestran los resultados de cada ronda 
    */
    switch (auxiliarGanadorRonda(jugadaUsuario, jugadaComputadora)) {
        case "Gana la computadora":
            document.getElementById("resultadoRonda").innerHTML="Ronda ganada por la computadora";
            document.getElementById("resultadoRonda").style.backgroundColor="#FF5400";
            document.getElementById("resultadoRonda").style.border="3px solid #FF2A2A";
            puntajeComputadora++;
            document.getElementById("puntajeComputadora").innerHTML= puntajeComputadora;
            break;
        case "Gana el usuario":
            document.getElementById("resultadoRonda").innerHTML="Ronda ganada por " + jugador;
            document.getElementById("resultadoRonda").style.backgroundColor="#FF0054";
            document.getElementById("resultadoRonda").style.border="3px solid #CF0057";
            puntajeUsuario++;
            document.getElementById("puntajeUsuario").innerHTML= puntajeUsuario;
            break;
        case "Empate":
            document.getElementById("resultadoRonda").innerHTML="El resultado de la ronda fue empate";
            document.getElementById("resultadoRonda").style.backgroundColor="#6C0079";
            document.getElementById("resultadoRonda").style.border="3px solid #390099";
            empates++;
            document.getElementById("cantidadEmpates").innerHTML= empates;;
            break;
        default:
            break;
    }
    
    /* 
    Voy aumentando el número de ronda a medida que se va apretando el botón "Jugar!" y lo muestro en el espacio destinado a los
    resultados de la ronda 
    */
    numeroDeRonda++;
    document.getElementById("numeroDeRonda").innerHTML= "Ronda N° " + numeroDeRonda;

    /* 
    Establezco el final del juego: cuando se de el triunfo en tres rondas o cuando la ronda sea la quinta.
    Cuando esto suceda se ejecuta la función para obtener un ganador final mostrándose el resultado en el espacio destinado, así como también 
    se oculta el botón "Jugar!", se modifica el botón "Reiniciar", y se modifica el cuadro de resultado final 
    */
    if (puntajeComputadora === 3 || puntajeUsuario === 3 || numeroDeRonda === 5) {
        document.getElementById("resultadoFinal").innerHTML= obtenerGanadorFinal(puntajeComputadora, puntajeUsuario);
        document.getElementById("botónJugar").style.display="none";
        document.getElementById("botónReiniciar").style.margin="0 auto 10px";
        document.getElementById("botónReiniciar").style.padding="5px 60px";
        document.getElementById("resultadoFinal_").style.display="block";
        document.getElementById("resultadoFinal_").style.position="relative";
        document.getElementById("resultadoFinal_").style.zIndex="999";
    }
};

/* Establezco la función para obtener el ganador final del juego comparando los puntajes de los jugadores, muestro las imagenes */
function obtenerGanadorFinal(puntajeComputadora, puntajeUsuario) {
    if (puntajeComputadora > puntajeUsuario) {
        document.getElementById("img2").style.display="block"; //Quise usar style.opacity="0.8"; para sumar con la transición del CSS, pero no pude.
        return "Gana la computadora";
    } else if (puntajeUsuario > puntajeComputadora) {
        document.getElementById("img1").style.display="block";
        return "Gana " + jugador;
    } else {
        document.getElementById("img1").style.display="block";
        document.getElementById("img2").style.display="block";
        return "Empate";
    }
}

/* Defino la función que reiniciará el juego, se ejecuta cuando se apreta el botón "Reiniciar" */
function borrarCampos() {
    // Reinicio las variables
    jugadaUsuario = "vacío";
    jugadaComputadora = null;
    cantidadDeJugadas = 5;
    numeroDeRonda = 0;
    puntajeUsuario = 0;
    puntajeComputadora = 0;
    empates = 0;

    //Oculto el cuadro de partidas
    document.getElementById("empezamosElJuego").style.display="none";
    
    //Vuelvo a ocultar resultadoFinal_ y retorno a su estilo anterior
    document.getElementById("resultadoFinal_").style.display="none";
    document.getElementById("resultadoFinal_").style.position="";
    document.getElementById("resultadoFinal_").style.zIndex="";

    //Remuevo el resaltado de las opciones
    document.getElementById("piedra").classList.remove("opciónSeleccionada");
    document.getElementById("papel").classList.remove("opciónSeleccionada");
    document.getElementById("tijera").classList.remove("opciónSeleccionada");

    //Remuevo imagenes
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";

    //Reinicio los elementos de la página html
    document.getElementById("jugador").value = "";
    document.getElementById("nombreJugador_").innerHTML = "";
    document.getElementById("eleccionJugador").innerHTML = "";
    document.getElementById("eleccionComputadora").innerHTML = "";
    document.getElementById("resultadoRonda").innerHTML = "";
    document.getElementById("numeroDeRonda").innerHTML = "";
    document.getElementById("puntajeUsuario").innerHTML = "0";
    document.getElementById("puntajeComputadora").innerHTML = "0";
    document.getElementById("cantidadEmpates").innerHTML = "0";
    document.getElementById("resultadoFinal").innerHTML = "";

    //Muestro el botón de "Jugar!" nuevamente y retorno al estilo anterior del botón "Reiniciar"
    document.getElementById("botónJugar").style.display = "block";
    document.getElementById("botónReiniciar").style.margin = "0 auto";
    document.getElementById("botónReiniciar").style.padding = "5px";
}