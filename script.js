// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Giscus configuration
    const giscusConfig = {
        repo: "dlldsys/dlldsys.github.io",
        repoId: "R_kgDON_BRTw",
        category: "Announcements",
        categoryId: "DIC_kwDON_BRT84C5OC-",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "bottom",
        theme: "light",
        lang: "zh-CN",
        crossorigin: "anonymous"
    };

    // Project-specific mappings - each project gets its own term
    const projectMappings = [
        { id: "wechat-sdk-ai", container: "giscus-wechat-sdk-ai" },
        { id: "angular-weui", container: "giscus-angular-weui" },
        { id: "wecom-sdk", container: "giscus-wecom-sdk" },
        { id: "bill-sync", container: "giscus-bill-sync" }
    ];

    // Initialize project-specific comments
    projectMappings.forEach(project => {
        initGiscus(project.container, project.id);
    });

    // Initialize unified page comments
    initGiscus("giscus-page-comments", "page-comments");

    // Giscus initialization function - add script to container
    function initGiscus(containerId, mappingTerm) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.dataset.repo = giscusConfig.repo;
        script.dataset.repoId = giscusConfig.repoId;
        script.dataset.category = giscusConfig.category;
        script.dataset.categoryId = giscusConfig.categoryId;
        script.dataset.mapping = "specific";
        script.dataset.term = mappingTerm;
        script.dataset.strict = "0";
        script.dataset.reactionsEnabled = giscusConfig.reactionsEnabled;
        script.dataset.emitMetadata = giscusConfig.emitMetadata;
        script.dataset.inputPosition = giscusConfig.inputPosition;
        script.dataset.theme = giscusConfig.theme;
        script.dataset.lang = giscusConfig.lang;
        script.dataset.loading = "lazy";

        container.appendChild(script);
    }

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

// Listen for giscus theme changes
window.addEventListener('message', function(e) {
    if (e.origin === 'https://giscus.app') {
        // Handle giscus events if needed
    }
});
