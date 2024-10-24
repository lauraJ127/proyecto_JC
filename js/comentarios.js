import { initStars } from './stars.js';

document.addEventListener('DOMContentLoaded', function () {
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];  // Cargar comentarios del localStorage o inicializar vacío

    const listaDeComentarios = document.getElementById('listaDeComentarios');
    const form = document.getElementById('form');
    const nuevoComentarioInput = document.getElementById('nuevoComentario');

    // Aquí llamamos al sistema de estrellas
    const starsInstance = initStars('.estrella', function (rating) {
        console.log('Calificación seleccionada: ' + rating);
    });

    function renderizarComentarios() {
        listaDeComentarios.innerHTML = '';
        comentarios.forEach((comentarioObj, index) => {
            const li = document.createElement('li');
            li.textContent = `${comentarioObj.texto} - Calificación: ${comentarioObj.calificacion} estrellas`;

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('btn-delete');
            botonEliminar.addEventListener('click', function () {
                eliminarComentario(index);
            });

            li.appendChild(botonEliminar);
            listaDeComentarios.appendChild(li);
        });
    }

    function agregarComentario(e) {
        e.preventDefault();  // Evitar que el formulario se envíe
        const nuevoComentario = nuevoComentarioInput.value.trim();
        const calificacion = starsInstance.getRating();  // Obtener la calificación seleccionada

        if (nuevoComentario !== "" && calificacion > 0) {
            const comentarioObj = { texto: nuevoComentario, calificacion: calificacion };
            comentarios.push(comentarioObj);  // Agregar el nuevo comentario con la calificación
            comentarios.sort((a, b) => a.texto.localeCompare(b.texto));  // Ordenar los comentarios
            localStorage.setItem('comentarios', JSON.stringify(comentarios)); // Guardar en localStorage
            nuevoComentarioInput.value = '';  // Limpiar el campo de entrada
            starsInstance.resetStars();  // Reiniciar las estrellas
            renderizarComentarios();  // Renderizar la lista actualizada
        }
    }

    function eliminarComentario(indice) {
        comentarios.splice(indice, 1);  // Eliminar comentario
        localStorage.setItem('comentarios', JSON.stringify(comentarios)); // Actualizar en localStorage
        renderizarComentarios();  // Renderizar lista actualizada
    }

    form.addEventListener('submit', agregarComentario);
    renderizarComentarios();  // Inicializar la lista
});
