// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission (Placeholder)
document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        this.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.testimonials-carousel')) {
        new TestimonialCarousel();
    }
    handleScrollAnimations();
});

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature, .testimonial-card, .about-content, .demo-feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}
