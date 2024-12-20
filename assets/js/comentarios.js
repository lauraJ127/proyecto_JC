import { initStars } from './stars.js';

document.addEventListener('DOMContentLoaded', function () {
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];  // Cargar comentarios del localStorage o inicia un array vacio

    const listaDeComentarios = document.getElementById('listaDeComentarios');
    const form = document.getElementById('form');
    const nuevoComentarioInput = document.getElementById('nuevoComentario');

    // Aquí llama al sistema de estrellas
    const starsInstance = initStars('.estrella', function (rating) {
        console.log('Calificación seleccionada: ' + rating);
    });

    function renderizarComentarios() {
        listaDeComentarios.innerHTML = '';  // Limpiar la lista

        comentarios.forEach((comentarioObj, index) => {
            const li = document.createElement('li');
            li.textContent = comentarioObj.texto;  // Solo el texto del comentario

            // Crear un contenedor para las estrellas
            const estrellasContainer = document.createElement('div');
            estrellasContainer.classList.add('estrellas-calificacion');

            // Añadir 5 estrellas al contenedor
            for (let i = 1; i <= 5; i++) {
                const estrella = document.createElement('span');
                estrella.classList.add('estrella');
                estrella.innerHTML = '&#9733;';  // Icono de estrella

                // Pintar las estrellas dependiendo de la calificación
                if (i <= comentarioObj.calificacion) {
                    estrella.classList.add('selected');  // Clase para las estrellas seleccionadas
                }

                estrellasContainer.appendChild(estrella);
            }

            // Añadir las estrellas al 'li'
            li.appendChild(estrellasContainer);

            // Botón para eliminar comentario
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('btn-delete');
            botonEliminar.addEventListener('click', function () {
                eliminarComentario(index);
            });

            li.appendChild(botonEliminar);
            listaDeComentarios.appendChild(li);  // Añadir a la lista
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
    renderizarComentarios();  // Iniciar la lista
});
