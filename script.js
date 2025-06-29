// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = mobileNav.querySelectorAll('a');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Toggle icon between menu and X
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.value-card, .event-card, .sermon-card, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Add click handlers for buttons (you can customize these)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add your button click logic here
            console.log('Button clicked:', this.textContent.trim());
            
            // Example: Handle specific button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Join Us') || buttonText.includes('Watch Online')) {
                // Handle hero buttons
                alert('Thank you for your interest! Please contact us for more information.');
            } else if (buttonText.includes('Learn More')) {
                // Handle event learn more buttons
                alert('Event details coming soon! Please check back later.');
            } else if (buttonText.includes('Watch') || buttonText.includes('Listen')) {
                // Handle sermon buttons
                alert('Sermon content will be available soon!');
            } else if (buttonText.includes('Get Directions')) {
                // Handle directions button
                window.open('https://maps.google.com/?q=123+Faith+Street+Hope+City', '_blank');
            } else if (buttonText.includes('Plan Your Visit')) {
                // Handle plan visit button
                alert('We look forward to seeing you! Please feel free to contact us with any questions.');
            }
        });
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.value-card, .event-card, .sermon-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Sermon video overlay functionality
    const sermonCards = document.querySelectorAll('.sermon-card');
    sermonCards.forEach(card => {
        const playBtn = card.querySelector('.play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                alert('Video player will be integrated here!');
            });
        }
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i').getAttribute('data-lucide');
            
            switch(icon) {
                case 'facebook':
                    window.open('https://facebook.com', '_blank');
                    break;
                case 'instagram':
                    window.open('https://instagram.com', '_blank');
                    break;
                case 'youtube':
                    window.open('https://youtube.com', '_blank');
                    break;
                case 'mail':
                    window.location.href = 'mailto:info@gracefellowship.org';
                    break;
            }
        });
    });

    // Form submission (if you add a contact form later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav a, .mobile-nav a');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Utility function to format dates
function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Utility function to handle responsive behavior
function handleResize() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
}

window.addEventListener('resize', handleResize);

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav a.active {
        color: #3b82f6 !important;
        font-weight: 600;
    }
    
    .mobile-nav a.active {
        color: #3b82f6 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);