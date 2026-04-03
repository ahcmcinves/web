// This file contains JavaScript functionality for interactive elements on the website.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle card clicks
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            window.location.href = link;
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Prezi-like slide functionality
    const slides = document.querySelectorAll('.prezi-slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let current = 0;

    function showSlide(idx) {
        const prev = document.querySelector('.prezi-slide.active');
        if (prev) {
            prev.classList.remove('active');
            prev.classList.add('transitioning');
            setTimeout(() => {
                prev.classList.remove('transitioning');
            }, 600); // Duración igual a la transición CSS
        }
        slides[idx].classList.add('transitioning');
        setTimeout(() => {
            slides[idx].classList.remove('transitioning');
            slides[idx].classList.add('active');
        }, 20); // Pequeño delay para que se vea el wipe
    }

    prevBtn && prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    nextBtn && nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    // Zoom effect on click
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            slide.classList.toggle('zoomed');
        });
    });
});