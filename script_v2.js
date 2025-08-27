const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazonito");
    corazon.textContent = "❤️";

    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    corazon.style.fontSize = (Math.random() * 10 + 12) + "px";

    // Duración aleatoria de la caída
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.getElementById("lluvia-corazones").appendChild(corazon);

    // Eliminar corazón después de caer
    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

// Crear corazones cada cierto tiempo
setInterval(crearCorazon, 400);
