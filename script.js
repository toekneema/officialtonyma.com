// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Callback function for intersection observer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation triggers (uncomment if you want animation to only happen once)
            // observer.unobserve(entry.target);
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all timeline items
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add stagger effect to timeline items
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Optional: Smooth scroll for any anchor links (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Parallax effect on hero section
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const hero = document.querySelector('.hero');

    if (hero && scrollTop < window.innerHeight) {
        hero.style.opacity = 1 - (scrollTop / window.innerHeight) * 0.5;
    }

    lastScrollTop = scrollTop;
}, { passive: true });
