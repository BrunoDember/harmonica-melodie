document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    initScrollAnimations();

    // Gestion du menu actif
    setActiveNavLink();

    // ===== Bouton "Back to Top" =====
    initBackToTopButton();

    // ===== Dark Mode Toggle =====
    initThemeToggle();
});
=======
// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    initScrollAnimations();

    // Gestion du menu actif
    setActiveNavLink();

    // ===== Bouton "Back to Top" =====
    initBackToTopButton();

    // ===== Dark Mode Toggle =====
    initThemeToggle();

    // ===== Lazy loading des iframes YouTube =====
    initLazyIframes();
});=====
document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    initScrollAnimations();

    // Gestion du menu actif
    setActiveNavLink();

    // ===== Bouton "Back to Top" =====
    initBackToTopButton();

    // ===== Dark Mode Toggle =====
    initThemeToggle();
});

// ===== Bouton "Back to Top" =====
function initBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    // Utilisation de requestAnimationFrame pour optimiser les performances
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Dark Mode Toggle =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (!themeToggle) return;

    let savedTheme = 'light';
    try {
        savedTheme = localStorage.getItem('theme') || 'light';
    } catch (e) {
        console.warn("localStorage non disponible, utilisation du thème par défaut.");
    }

    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {
            console.warn("Impossible de sauvegarder le thème dans localStorage.");
        }
    });
}

// ===== Animations au scroll =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.video-card, .style-card, .story-card, .detail-card');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Désobserve l'élément une fois qu'il est visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Normalise le chemin du lien (supprime les / et #)
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0] || 'index.html';
        const linkPageClean = linkPage === '' ? 'index.html' : linkPage;

        if (linkPageClean === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
=======
// ===== Gestion du menu actif =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Normalise le chemin du lien (supprime les / et #)
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0] || 'index.html';
        const linkPageClean = linkPage === '' ? 'index.html' : linkPage;

        if (linkPageClean === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== Lazy loading des iframes YouTube =====
function initLazyIframes() {
    const lazyIframes = document.querySelectorAll('iframe[data-src]');
    if (lazyIframes.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.dataset.src;
                observer.unobserve(iframe);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '200px'
    });

    lazyIframes.forEach(iframe => observer.observe(iframe));
}=====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Normalise le chemin du lien (supprime les / et #)
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0] || 'index.html';
        const linkPageClean = linkPage === '' ? 'index.html' : linkPage;

        if (linkPageClean === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
