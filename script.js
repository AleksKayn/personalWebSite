// Tara Bar Pre-Launch Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Email form handling
    const emailForm = document.getElementById('emailForm');
    const submitBtn = emailForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(emailForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const consent = formData.get('consent');

        // Basic validation
        if (!name || !email || !consent) {
            showMessage('Please fill in all fields and agree to receive updates.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        submitBtn.textContent = 'Joining...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset form
            emailForm.reset();
            
            // Show success message
            showMessage(`Thanks ${name}! You're now part of the first taste crew. We'll be in touch soon!`, 'success');
            
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;

            // Track signup (you can integrate with analytics here)
            trackSignup(name, email);
        }, 1500);
    });

    // Message display function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            animation: slideIn 0.3s ease-out;
            ${type === 'success' 
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // Add message to form
        emailForm.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => messageDiv.remove(), 300);
            }
        }, 5000);
    }

    // Analytics tracking function (placeholder)
    function trackSignup(name, email) {
        // You can integrate with Google Analytics, Mixpanel, etc.
        console.log('Signup tracked:', { name, email, timestamp: new Date().toISOString() });
        
        // Example Google Analytics event (uncomment if you have GA setup)
        // gtag('event', 'signup', {
        //     'event_category': 'engagement',
        //     'event_label': 'first_taste_crew'
        // });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(45, 90, 39, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .trust-item, .visual-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
            from { 
                opacity: 0; 
                transform: translateY(30px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0); 
            }
        }
    `;
    document.head.appendChild(style);

    // Dynamic background elements
    function createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'dynamic-float';
        element.style.cssText = `
            position: fixed;
            width: ${Math.random() * 60 + 20}px;
            height: ${Math.random() * 60 + 20}px;
            background: linear-gradient(135deg, #8FBC8F, #90EE90);
            border-radius: 50%;
            opacity: 0.05;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: floatUp ${Math.random() * 10 + 15}s linear infinite;
        `;
        
        document.body.appendChild(element);
        
        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.remove();
            }
        }, 25000);
    }

    // Add floating animation CSS
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatUp {
            0% { 
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.05;
            }
            90% {
                opacity: 0.05;
            }
            100% { 
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatStyle);

    // Create floating elements periodically
    setInterval(createFloatingElement, 3000);

    // Social media link tracking
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('instagram') ? 'Instagram' : 'TikTok';
            
            // Show coming soon message
            showMessage(`${platform} coming soon! We'll announce when we're live.`, 'success');
            
            // Track social click
            console.log(`Social click tracked: ${platform}`);
        });
    });

    // Form field enhancements
    const formInputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'translateY(0)';
        });
        
        // Add real-time validation feedback
        input.addEventListener('input', function() {
            if (this.type === 'email' && this.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(this.value)) {
                    this.style.borderColor = '#4A7C59';
                } else {
                    this.style.borderColor = '#dc3545';
                }
            } else if (this.value) {
                this.style.borderColor = '#4A7C59';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });

    // Add loading states for better UX
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add loaded class CSS
        const loadedStyle = document.createElement('style');
        loadedStyle.textContent = `
            body:not(.loaded) * {
                animation-play-state: paused !important;
            }
            
            .loaded * {
                animation-play-state: running !important;
            }
        `;
        document.head.appendChild(loadedStyle);
    });

    console.log('Tara Bar website loaded successfully! 🌱');
});