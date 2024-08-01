function setupNavbarAnimation(SectionId, NavId) {
    document.addEventListener('DOMContentLoaded', () => {
        const Section = document.getElementById(SectionId);
        const Nav = document.getElementById(NavId);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        Nav.classList.add('active');
                    } else {
                        Nav.classList.remove('active');
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(Section);
    });
}

setupNavbarAnimation('About', 'about-nav');
setupNavbarAnimation('Education', 'education-nav');
setupNavbarAnimation('Projects', 'projects-nav');