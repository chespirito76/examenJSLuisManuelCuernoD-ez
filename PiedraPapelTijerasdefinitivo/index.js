// 1. Variables

let jugador = 0;
let ordenador = 0;
let terminado = false;

// 2.Función jugar.

function jugar(eleccionJugador) {

    if (terminado) {
        return;
    }

    let opciones = ["piedra", "papel", "tijeras"];

// 3. Declaro la aletoriedad.

    let eleccionOrdenador =
        opciones[Math.floor(Math.random() * 3)];

// 4. Empate

    if (eleccionJugador == eleccionOrdenador) {

        document.getElementById("resultado").textContent =
            "Empate. El ordenador ha elegido " + eleccionOrdenador;

// 5. Jugadas posibles

    } else if (
        (eleccionJugador == "piedra" && eleccionOrdenador == "tijeras") ||
        (eleccionJugador == "papel" && eleccionOrdenador == "piedra") ||
        (eleccionJugador == "tijeras" && eleccionOrdenador == "papel")
    ) {

        jugador++;

        document.getElementById("resultado").textContent =
            "Has ganado la ronda. El ordenador ha elegido " + eleccionOrdenador;

    } else {

        ordenador++;

        document.getElementById("resultado").textContent =
            "Has perdido la ronda. El ordenador ha elegido " + eleccionOrdenador;
    }
// 6. Marcador

    document.getElementById("marcador").textContent =
        "Jugador: " + jugador + " | Ordenador: " + ordenador;

// 7. Fin de juego.

    if (jugador == 5) {

        document.getElementById("resultado").textContent =
            "¡HAS GANADO LA PARTIDA!";

        terminado = true;
    }

    if (ordenador == 5) {

        document.getElementById("resultado").textContent =
            "EL ORDENADOR HA GANADO LA PARTIDA";

        terminado = true;
    }
}
// 8. Volver a jugar

function reiniciar() {

    jugador = 0;
    ordenador = 0;
    terminado = false;

    document.getElementById("marcador").textContent =
        "Jugador: 0 | Ordenador: 0";

    document.getElementById("resultado").textContent =
        "RESULTADO:";
}