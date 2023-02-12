let jugador = prompt("Ingresa tu nombre");
alert(jugador + "!" + " Bienvenido a piedra, papel o tijera");
alert("Preparate... El juego esta por comenzar");
alert("Elige un ataque");

let piedra = 0;
let papel = 1;
let tijera = 2;

function aleatorio (minimo, maximo){
    let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

let opcionJugador = prompt("Escribe 0 para piedra, 1 para papel y 2 para tijera");
let opcionEnemigo = aleatorio (0,2);

if (opcionJugador == piedra){
    alert("Elegiste piedra");
} else if (opcionJugador == papel){
    alert("Elegiste papel");
} else if (opcionJugador == tijera){
    alert("Elegiste tijera");
} else{
    alert("El valor ingresado es incorrecto")
}

if (opcionEnemigo == piedra){
    alert("El enemigo eligió piedra");
} else if (opcionEnemigo == papel){
    alert("El enemigo eligió papel");
} else if (opcionEnemigo == tijera){
    alert("El enemigo eligió tijera");
}

if (opcionJugador == opcionEnemigo){
    alert("Es un empate")
    document.write("Empatamos")
} else if (opcionJugador == piedra && opcionEnemigo == tijera){
    alert("Ganaste... Suerte de principiante")
    document.write("Soy un campeón")
} else if (opcionJugador == papel && opcionEnemigo == piedra){
    alert("Ganaste... Suerte de principiante")
    document.write("Soy un campeón")
} else if (opcionJugador == tijera && opcionEnemigo == papel){
    alert("Ganaste... Suerte de principiante")
    document.write("Soy un campeón")
} else {
    alert("JAJAJAJA Perdiste")
    for (let i=0; i<=100; i+=1) {
        document.write("Soy un perdedor" + "<br>");
    }
}


