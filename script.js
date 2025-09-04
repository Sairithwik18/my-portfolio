document.addEventListener('DOMContentLoaded', () => {

    // --- PROJECT DATA ---
    const projects = [
        {
            title: "Pet Adoption System",
            category: "webapp",
            image: "https://via.placeholder.com/400x250/0077B6/FFFFFF?text=Pet+Adoption",
            description: "A responsive platform enabling user registration, login, pet listings, and adoption request handling with a user-friendly dashboard.",
            tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
            live_url: "#",
            code_url: "https://github.com/Sairithwik18"
        },
        {
            title: "SOS Game (Browser-Based)",
            category: "game",
            image: "https://via.placeholder.com/400x250/00B4D8/FFFFFF?text=SOS+Game",
            description: "An interactive two-player browser game with logic for detecting 'SOS' sequences, dynamic score updates, and real-time turn tracking.",
            tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
            live_url: "#",
            code_url: "https://github.com/Sairithwik18"
        }
    ];

    // --- DYNAMICALLY CREATE PROJECT CARDS ---
    const projectGallery = document.querySelector('.project-gallery');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card`;
        card.setAttribute('data-category', project.category);

        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <a href="${project.live_url}" target="_blank" aria-label="Live Demo"><i class="fas fa-eye"></i></a>
                    <a href="${project.code_url}" target="_blank" aria-label="View Code"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectGallery.appendChild(card);
    });

    // --- TYPING EFFECT ---
    new Typed('.typing-effect', {
        strings: ['an Aspiring Full Stack Developer', 'a Java Programmer', 'a Problem Solver'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });

    // --- HEADER SCROLL & ACTIVE LINK ---
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- PROJECT FILTERING ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                card.style.display = 'none';
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                }
            });
        });
    });

    // --- SCROLL-IN ANIMATIONS (Sections & Skills) ---
const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // If it's a skill item, keep observing for the bar animation
            if (!entry.target.classList.contains('skill-item')) {
                observer.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.1 });

// Observe all main sections for fade-in
document.querySelectorAll('main section').forEach(section => {
    scrollObserver.observe(section);
});

// Observe skill items for skill bar animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    scrollObserver.observe(item);
});

    // --- DARK/LIGHT MODE TOGGLE ---
    const themeSwitcher = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeSwitcher.classList.replace('fa-sun', 'fa-moon');
        }
    }

    themeSwitcher.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeSwitcher.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeSwitcher.classList.replace('fa-moon', 'fa-sun');
        }
    });
    
    // --- FOOTER YEAR ---
    document.getElementById('current-year').textContent = new Date().getFullYear();

});
