const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');


let counter = 0;
const totalImages = images.length;

// Tamaño de las imágenes
function getImageSize() {
    return images[0].clientWidth;
}

// Función para mover el carrusel
function moveCarousel() {
    const size = getImageSize();
    counter++;

    // Si el contador supera el número de imágenes menos 3, reinicia a 0
    if (counter > totalImages - 3) {
        counter = 0; 
    }

    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Funciones para los botones
function previousSlide() {
    const size = getImageSize();
    counter--;

    // Si el contador es menor que 0, volvemos a la imagen inicial
    if (counter < 0) {
        counter = totalImages - 3; 
    }

    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function nextSlide() {
    moveCarousel(); // Recicla función
}

// Agrega eventos a los botones
prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);
