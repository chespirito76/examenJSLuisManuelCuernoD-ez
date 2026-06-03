// Declaro la función para poder jugar
function jugar(eleccionJugador) {

    const opciones = ["piedra", "papel", "tijeras"];

    const eleccionOrdenador =
        opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (eleccionJugador == eleccionOrdenador)
        resultado = "!empate!";

    else if (
            (eleccionJugador == "piedra" && eleccionOrdenador == "tijeras")||
            (eleccionJugador == "papel" && eleccionOrdenador == "piedra")||
            (eleccionJugador == "tijeras" && eleccionOrdenador == "papel")
    )
    {
        resultado = "!ganaste!";
    }
    else{
        resultado = "!perdiste!";
    }

    document.getElementById ("resultado") .innerHTML =
 `
        jugador elegiò: ${eleccionJugador}<br>
        ordenador eligió: ${eleccionOrdenador}<br><br>
        ${resultado}
        `;

























}




