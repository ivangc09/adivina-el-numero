const botonComprobar = document.getElementById("botonComprobar");
const botonJuegoNuevo = document.getElementById("botonJuegoNuevo");
const listaIntentos = document.getElementById("intentos");
const inputNumero = document.getElementById("numero");
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 10;

botonJuegoNuevo.disabled = true;

botonComprobar.addEventListener("click", () => {
    const numeroUsuario = Number(inputNumero.value);

    if (intentos > 0) {
        if (numeroUsuario === numeroAleatorio) {
            alert("¡Has acertado!");
            botonComprobar.disabled = true;
            botonJuegoNuevo.disabled = false;
        } else if (numeroUsuario > numeroAleatorio) {
            alert("El número es menor");
            mostrarIntentos(numeroUsuario, "Menor");
            restarIntento();
        } else {
            alert("El número es mayor");
            mostrarIntentos(numeroUsuario, "Mayor");
            restarIntento();
        }
    }

    if (intentos === 0) {
        botonComprobar.disabled = true;
        alert(`¡Has perdido! El número era: ${numeroAleatorio}`);
        botonJuegoNuevo.disabled = false;
    }
});

function mostrarIntentos(numero, resultado) {
    const nuevoIntento = document.createElement("li");
    nuevoIntento.textContent = `${numero} : ${resultado}`;
    listaIntentos.appendChild(nuevoIntento);
}

function restarIntento() {
    intentos--;
    document.querySelector("h2 span").textContent = intentos;

    if (intentos === 0) {
        botonComprobar.disabled = true;
        alert(`El número era: ${numeroAleatorio}`);
        botonJuegoNuevo.disabled = false;
    }
}

function reiniciarJuego() {
    intentos = 10;
    document.querySelector("h2 span").textContent = intentos;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   
    listaIntentos.innerHTML = "";
    inputNumero.value = "";
    botonComprobar.disabled = false;
    botonJuegoNuevo.disabled = true;
}
botonJuegoNuevo.addEventListener("click", reiniciarJuego);
