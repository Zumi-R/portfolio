// Add smooth scrolling to nav links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', e => {
        e.preventDefault();
        const targetSection = document.querySelector(navLink.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
