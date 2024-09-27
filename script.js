let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const viewProjectsBtn = document.getElementById('viewProjectsBtn');

    if (slides.length > 0) {
        // Adjust the transform property to show the current slide
        const slideWidth = slides[0].clientWidth;
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

        // Show button when there are slides
        viewProjectsBtn.style.display = 'block';
    }
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    showSlides();
}

// Initialize slider
showSlides();

// Optionally, set up automatic slide transition (optional)
// setInterval(() => moveSlide(1), 5000); // Change slide every 5 seconds

