export function initStars(selector, callback) {
    const estrellas = document.querySelectorAll(selector);

    let calificacionSeleccionada = 0;

    // Función para pintar las estrellas
    function pintarEstrellas(rating) {
        estrellas.forEach((estrella) => {
            estrella.classList.remove('selected');  // Remover la clase 'selected' de todas
        });
        estrellas.forEach((estrella) => {
            if (estrella.dataset.value <= rating) {
                estrella.classList.add('selected');  // Agregar clase 'selected' a las estrellas con valor <= rating
            }
        });
    }

    // Escuchar clics en las estrellas
    estrellas.forEach((estrella) => {
        estrella.addEventListener('click', function () {
            calificacionSeleccionada = this.dataset.value;  // Guardar la calificación seleccionada
            pintarEstrellas(calificacionSeleccionada);  // Pintar las estrellas
            if (typeof callback === 'function') {
                callback(calificacionSeleccionada);  // Pasar la calificación seleccionada al callback
            }
        });
    });

    // Función para resetear las estrellas a un valor inicial
    function resetStars() {
        calificacionSeleccionada = 0;
        pintarEstrellas(calificacionSeleccionada);
    }

    return {
        getRating: () => calificacionSeleccionada,
        resetStars: resetStars
    };
}