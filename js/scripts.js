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

// JavaScript for scroll buttons on specific pages
const scrollToProjectsButton = document.querySelector('#scrollToProjects');
if (scrollToProjectsButton) {
    scrollToProjectsButton.addEventListener('click', function() {
        scrollToSection('projects');
    });
}

const scrollToCVButton = document.querySelector('#scrollToCV');
if (scrollToCVButton) {
    scrollToCVButton.addEventListener('click', function() {
        scrollToSection('cv');
    });
}
function scrollToSection(sectionId) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

const backToTopButton = document.getElementById('backToTopButton');
if (backToTopButton) {
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// JavaScript to apply colors to the buttons
document.querySelectorAll('.card').forEach(card => {
    const primaryColor = card.getAttribute('data-color-primary');
    const secondaryColor = card.getAttribute('data-color-secondary');
    card.querySelector('.btn-primary').style.backgroundColor = primaryColor;
    card.querySelector('.btn-secondary').style.backgroundColor = secondaryColor;
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


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.cv-section');
    const navLinks = document.querySelectorAll('.cv-nav .nav-item');
    const cvNav = document.querySelector('.cv-nav');
    const cvCol = document.querySelector('.cv-col');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function onScroll() {
        let scrollPos = cvCol.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - cvNav.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                // Remove active class from all nav links
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                // Find the corresponding nav link and add active class
                const correspondingNavLink = document.querySelector(`.cv-nav .nav-item[href="#${section.id}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    cvCol.addEventListener('scroll', onScroll);
    onScroll(); 
});
