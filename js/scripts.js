document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    let previousWidth = window.innerWidth;

    function handleResize() {
        const currentWidth = window.innerWidth;
        if (currentWidth !== previousWidth) {
            if (currentWidth >= 768 && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarCollapse.style.height = '';
            }
            if (currentWidth < 768) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    navbarCollapse.style.height = '';
                }
            }
            previousWidth = currentWidth;
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});

document.querySelector('.scroll-button').addEventListener('click', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const aboutSection = document.getElementById('about');
    const sectionPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionPosition - navbarHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});


if (document.querySelector('#scrollToProjects')) {
    // Add event listener only if the scroll button exists
    document.querySelector('#scrollToProjects').addEventListener('click', function() {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const projectsSection = document.getElementById('projects');
        const sectionPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}

if (document.querySelector('#scrollToCV')) {
    // Add event listener only if the scroll button exists
    document.querySelector('#scrollToCV').addEventListener('click', function() {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const projectsSection = document.getElementById('cv');
        const sectionPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}




document.querySelectorAll('.about-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.about-content');
    const navLinks = document.querySelectorAll('.about-nav .nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 2;
            const sectionBottom = sectionTop + section.offsetHeight - 2;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                    if (section.getAttribute('id') === navLink.getAttribute('href').substring(1)) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }

    document.addEventListener('scroll', onScroll);
    onScroll(); 
});

document.getElementById('backToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// JavaScript to apply colors to the buttons
document.querySelectorAll('.card').forEach(card => {
    const primaryColor = card.getAttribute('data-color-primary');
    const secondaryColor = card.getAttribute('data-color-secondary');
    card.querySelector('.btn-primary').style.backgroundColor = primaryColor;
    card.querySelector('.btn-secondary').style.backgroundColor = secondaryColor;
});



