const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

// Contador
let counter = 0;
const totalImages = images.length;

// Tamaño de las imágenes visibles
function getImageSize() {
    return images[0].clientWidth; // Ancho de una imagen
}

// Función para mover el carrusel automáticamente
function moveCarousel() {
    const size = getImageSize();
    counter++;

    // Si el contador supera el número de imágenes menos 3, reiniciamos al inicio
    if (counter > totalImages - 3) {
        counter = 0; // Reinicia al inicio
    }

    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// // Configura el intervalo para mover el carrusel cada 3.5 segundos
// let interval = setInterval(moveCarousel, 3500); // 3500 milisegundos = 3.5 segundos

// Funciones para manejar la interacción de los botones
function previousSlide() {
    const size = getImageSize();
    counter--;

    // Si el contador es menor que 0, volvemos a la última imagen
    if (counter < 0) {
        counter = totalImages - 3; // Ajusta para mostrar las 3 últimas imágenes
    }

    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    resetInterval(); // Reinicia el intervalo al cambiar manualmente
}

function nextSlide() {
    moveCarousel(); // Usa la función de movimiento existente
    resetInterval(); // Reinicia el intervalo al cambiar manualmente
}

// Reinicia el intervalo
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(moveCarousel, 3500);
}

// Agrega eventos a los botones
prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);
