// Auto Image Slider Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto change every 5 seconds
setInterval(nextSlide, 5000);

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Submission Psychology (Feedback)
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    btn.innerText = 'Sending...';
    
    // Simulate API Call
    setTimeout(() => {
        btn.innerText = 'Message Sent Successfully!';
        btn.style.background = '#22c55e';
        this.reset();
    }, 2000);
});

// Add this to your script.js
const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('touchstart', function() {
        this.style.transform = "scale(0.98)"; // Slight shrink on touch
        this.style.borderColor = "#2563eb";
    });
    
    card.addEventListener('touchend', function() {
        this.style.transform = "scale(1)"; // Back to normal
    });
});