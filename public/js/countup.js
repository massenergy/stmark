function countUp(target, duration, element) {
    let start = 0;
    const increment = target / (duration / 100);
    let current = start;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = Math.round(current).toLocaleString(); // Format as a number
    }, 100);
}

// Initialize the counters when the section is in view
const options = {
    root: null, // Use the viewport as the container for the observation
    threshold: 0.5 // Trigger when at least 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const duration = 3000; // Total duration for counting up, in milliseconds
            const counters = entry.target.querySelectorAll('.counter'); // Get only counters within the observed section
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                countUp(target, duration, counter);
            });
            observer.unobserve(entry.target); // Stop observing once it has counted up
        }
    });
}, options);

// Observe the Facts section
const factsSection = document.getElementById('facts');
observer.observe(factsSection);