document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button and nav links elements
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Add click event listener to toggle button
    toggleMenu.addEventListener('click', function() {
        // Toggle the 'active' class on nav links
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});