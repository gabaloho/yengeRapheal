// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Newsletter signup placeholder (expand with Mailchimp embed if needed)
document.addEventListener('DOMContentLoaded', function() {
    console.log('YengeRaphael.com loaded successfully');
});