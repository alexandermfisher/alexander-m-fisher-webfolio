
document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    let previousWidth = window.innerWidth;

    function handleResize() {
        const currentWidth = window.innerWidth;
        if (currentWidth !== previousWidth) {
            if (currentWidth >= 768 && navbarCollapse.classList.contains('show')) {
                // Collapse the navbar if it's open when resizing to a larger screen
                navbarCollapse.classList.remove('show');
                navbarCollapse.style.height = '';
            }
            if (currentWidth < 768) {
                // Ensure the navbar is collapsed on smaller screens
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    navbarCollapse.style.height = '';
                }
            }
            previousWidth = currentWidth;
        }
    }

    // Reset the collapse state when the window is resized
    window.addEventListener('resize', handleResize);

    // Ensure the initial state is correct
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
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

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
    onScroll(); // Initial call to set the active link based on the initial scroll position
});

document.getElementById('backToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


