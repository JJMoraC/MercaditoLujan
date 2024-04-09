document.addEventListener("DOMContentLoaded", function () {
    const mapaAsientos = document.getElementById("mapaAsientos");

    // Crear el mapa de asientos
    for (let i = 1; i <= 48; i += 4) {
        const fila = document.createElement("div");
        fila.classList.add("fila");

        // Crear un div para cada par de asientos
        for (let j = i; j < i + 4; j += 2) {
            const asientoPar = document.createElement("div");
            asientoPar.classList.add("asientos-pares");

            // Agregar dos asientos al par
            for (let k = 0; k < 2; k++) {
                const asiento = document.createElement("div");
                asiento.classList.add("asientos");

                // Agregar ícono de silla de ruedas
                const icon = document.createElement("i");
                icon.classList.add("fas", "fa-wheelchair"); // Clases para el ícono

                if ([1, 2, 3, 4, 13, 14, 15, 16].includes(j + k)) {
                    asiento.classList.add("disabled"); // Agrega la clase para deshabilitar
                    asiento.classList.add("seleccionadoEspecial");
                    asiento.style.pointerEvents = "none"; // Deshabilita la interacción
                    asiento.textContent = j + k + ' '; // Elimina el número del asiento
                    asiento.appendChild(icon); // Agrega el ícono
                } else {
                    asiento.textContent = j + k;
                }

                // Agregar un identificador único para cada asiento
                asiento.setAttribute("data-seat", j + k);

                // Agregar evento de clic para seleccionar/deseleccionar el asiento (opcional para asientos habilitados)
                asiento.addEventListener("click", function () {
                    if (this.classList.contains("seleccionado")) {
                        this.classList.remove("seleccionado");
                    } else {
                        this.classList.add("seleccionado");
                    }
                });

                asientoPar.appendChild(asiento);
            }

            // Agregar un espacio entre cada par de asientos
            if (j < i + 3) {
                const espacioEnMedioPares = document.createElement("div");
                espacioEnMedioPares.classList.add("espacio-enmedio-pares");
                asientoPar.appendChild(espacioEnMedioPares);
            }

            fila.appendChild(asientoPar);
        }

        // Agregar fila al mapa de asientos
        mapaAsientos.appendChild(fila);
    }
});
