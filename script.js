// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize single Giscus instance for page comments
    initGiscus();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation to project cards
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Giscus initialization for unified comments
function initGiscus() {
    const container = document.getElementById('giscus-page-comments');
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.repo = "dlldsys/dlldsys.github.io";
    script.dataset.repoId = "R_kgDON_BRTw";
    script.dataset.category = "Announcements";
    script.dataset.categoryId = "DIC_kwDON_BRT84C5OC-";
    script.dataset.mapping = "pathname";
    script.dataset.strict = "0";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "bottom";
    script.dataset.theme = "light";
    script.dataset.lang = "zh-CN";
    script.dataset.loading = "lazy";

    container.appendChild(script);
}

// Listen for giscus theme changes
window.addEventListener('message', function(e) {
    if (e.origin === 'https://giscus.app') {
        // Handle giscus events if needed
    }
});
