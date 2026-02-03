// Hariom Shah Portfolio - Main JavaScript
// Handles all interactive functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initTypewriter();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initProjectCarousel();
    initSmoothScrolling();
    
    // Initialize skills page counters if on skills page
    if (window.location.pathname.includes('skills.html')) {
        initSkillsCounters();
    }
    
    // Initialize blog functionality if on blog page
    if (window.location.pathname.includes('blog.html')) {
        initBlogFunctionality();
    }
    
    console.log('Hariom Shah Portfolio - JavaScript Loaded Successfully');
    console.log('%c hariomshah.com.np ', 'background: #1a1a1a; color: #faf9f7; padding: 10px; border-radius: 5px; font-size: 16px;');
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
    }
}

// Typewriter Effect for Hero Name
function initTypewriter() {
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        const typed = new Typed('#typed-name', {
            strings: ['Hariom Shah'],
            typeSpeed: 100,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            onComplete: function() {
                // Add gradient class after typing is complete
                setTimeout(() => {
                    typedElement.classList.add('gradient-text');
                }, 500);
            }
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.transform = `scaleX(${width / 100})`;
                    progressBar.classList.add('animate');
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (target > 20 ? '+' : '');
    }, stepTime);
}

// Project Carousel
function initProjectCarousel() {
    const carousel = document.getElementById('featured-projects');
    if (carousel) {
        new Splide('#featured-projects', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skills Page Counter Animation
function initSkillsCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Blog Functionality
function initBlogFunctionality() {
    // Mock blog posts data
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to write cleaner, more maintainable components.",
            date: "2024-01-15",
            readTime: "5 min read",
            category: "React"
        },
        {
            id: 2,
            title: "Building Responsive Layouts with CSS Grid",
            excerpt: "Master CSS Grid to create complex, responsive layouts with ease.",
            date: "2024-01-10",
            readTime: "8 min read",
            category: "CSS"
        },
        {
            id: 3,
            title: "Node.js Best Practices for 2024",
            excerpt: "Explore modern Node.js practices for building scalable applications.",
            date: "2024-01-05",
            readTime: "12 min read",
            category: "Node.js"
        }
    ];
    
    // Create blog posts if on blog page
    const blogContainer = document.getElementById('blog-posts');
    if (blogContainer) {
        blogContainer.innerHTML = blogPosts.map(post => `
            <article class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden reveal">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${post.category}</span>
                        <span class="text-gray-500 text-sm">${post.readTime}</span>
                    </div>
                    <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">${post.title}</h3>
                    <p class="text-gray-600 mb-4">${post.excerpt}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-500 text-sm">${new Date(post.date).toLocaleDateString()}</span>
                        <button class="text-blue-600 hover:text-blue-800 font-medium text-sm" onclick="openBlogPost(${post.id})">Read More</button>
                    </div>
                </div>
            </article>
        `).join('');
    }
}

// Open blog post (mock functionality)
function openBlogPost(postId) {
    alert(`Opening blog post ${postId}. In a real implementation, this would navigate to the full blog post.`);
}

// Button Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
});

// Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-hover');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                rotateX: 5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});

// Navigation Active State Management
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateActiveNavigation);

// Parallax Effect for Hero Background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-bg');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Performance Optimization: Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Form Validation (for contact page)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('border-red-500');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Project Filter Functionality (for projects page)
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        translateY: -20,
                        duration: 200,
                        easing: 'easeOutQuad',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Console Message for Branding
console.log('%c hariomshah.com.np ', 'background: #1a1a1a; color: #faf9f7; padding: 10px; border-radius: 5px; font-size: 16px;');
console.log('%c Full-Stack Developer & UI/UX Designer | Kathmandu, Nepal ', 'background: #9db5a0; color: #1a1a1a; padding: 5px; border-radius: 3px;');