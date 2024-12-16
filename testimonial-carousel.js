class TestimonialCarousel {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = [
            {
                text: "Viscrow Health has transformed our practice efficiency. The AI transcription accuracy is remarkable, especially with complex medical terminology.",
                author: "Dr. Sarah Chen",
                specialty: "Internal Medicine",
                location: "Boston Medical Center"
            },
            {
                text: "The time saved on documentation has allowed me to see more patients while maintaining work-life balance. The AI note generation is incredibly intuitive.",
                author: "Dr. Michael Rodriguez",
                specialty: "Family Practice",
                location: "Cleveland Clinic"
            },
            {
                text: "Integration with our EHR was seamless. The customizable templates have streamlined our workflow significantly.",
                author: "Dr. Emily Thompson",
                specialty: "Pediatrics",
                location: "Children's Hospital Colorado"
            }
        ];
        this.init();
    }

    init() {
        this.renderTestimonials();
        this.setupControls();
        this.updateDots();
    }

    renderTestimonials() {
        const track = document.querySelector('.carousel-track');
        track.innerHTML = '';

        this.testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <p>"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <strong>${testimonial.author}</strong>
                    <span>${testimonial.specialty}</span>
                    <span>${testimonial.location}</span>
                </div>
            `;
            track.appendChild(card);
        });

        this.updateCarousel();
    }

    updateCarousel() {
        const track = document.querySelector('.carousel-track');
        const offset = -this.currentIndex * (300 + 30); // 300 is the width of the card + 30 is the margin
        track.style.transform = `translateX(${offset}px)`;
    }

    setupControls() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => this.slide('prev'));
        nextBtn.addEventListener('click', () => this.slide('next'));
    }

    slide(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        }
        this.updateCarousel();
        this.updateDots();
    }

    updateDots() {
        const dotsContainer = document.querySelector('.carousel-dots');
        dotsContainer.innerHTML = '';
        this.testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateCarousel();
                this.updateDots();
            });
            if (index === this.currentIndex) {
                dot.classList.add('active');
            }
            dotsContainer.appendChild(dot);
        });
    }
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialCarousel();
}); 