document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Toggle menu open/close
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger into an 'X'
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 20px';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '15px 20px';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // --- Contact Form Submission Placeholder ---
    const form = document.getElementById('enquiryForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo
            
            // Collect form data (for potential API integration)
            const name = document.getElementById('name').value;
            
            // Provide user feedback
            alert(`Thank you, ${name}! Your enquiry has been received. We will contact you shortly.`);
            
            // Reset form
            form.reset();
        });
    }
});
