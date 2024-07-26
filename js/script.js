document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;})

    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Opcional: Auto-slide
    setInterval(() => {
        index = (index + 1) % total} )