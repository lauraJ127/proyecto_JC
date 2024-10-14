document.addEventListener('DOMContentLoaded', function () {
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];  // Cargar comentarios del localStorage o inicializar vacío

    const listaDeComentarios = document.getElementById('listaDeComentarios');
    const form = document.getElementById('form');
    const nuevoComentarioInput = document.getElementById('nuevoComentario');

    

    function renderizarComentarios() {
        listaDeComentarios.innerHTML = '';
        comentarios.forEach((comentario, index) => {
            const li = document.createElement('li');
            li.textContent = comentario;

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
        if (nuevoComentario !== "") {
            comentarios.push(nuevoComentario); // Agrega el nuevo comentario
            comentarios.sort();  // Ordenar los comentarios
            localStorage.setItem('comentarios', JSON.stringify(comentarios)); // Guardar en localStorage
            nuevoComentarioInput.value = '';  // Limpiar el campo de entrada
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
