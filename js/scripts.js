
document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    // const navbarToggler = document.querySelector('.navbar-toggler');
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
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
