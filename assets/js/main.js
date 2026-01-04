// ===========================
// DARK MODE TOGGLE (DEFAULT: DARK)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const html = document.documentElement;
    
    // Set dark mode as default
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Set new theme
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon with rotation animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                updateThemeIcon(newTheme);
                this.style.transform = 'rotate(0deg)';
            }, 150);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }
});


// ===========================
// PREVENT FLASH OF LIGHT MODE
// ===========================
(function() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
})();


// ===========================
// STUDENT PROJECTS LAYOUT TOGGLE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const layoutToggle = document.getElementById('layout-toggle');
    const projectsContainer = document.querySelector('.student-projects-container');
    
    if (layoutToggle && projectsContainer) {
        // Get saved layout preference or default to 'cards'
        const savedLayout = localStorage.getItem('projectsLayout') || 'cards';
        projectsContainer.classList.add(savedLayout + '-layout');
        updateToggleIcon(savedLayout);
        
        layoutToggle.addEventListener('click', function() {
            const currentLayout = projectsContainer.classList.contains('cards-layout') ? 'cards' : 'vertical';
            const newLayout = currentLayout === 'cards' ? 'vertical' : 'cards';
            
            // Remove old layout class and add new one
            projectsContainer.classList.remove(currentLayout + '-layout');
            projectsContainer.classList.add(newLayout + '-layout');
            
            // Save preference
            localStorage.setItem('projectsLayout', newLayout);
            
            // Update icon
            updateToggleIcon(newLayout);
        });
        
        function updateToggleIcon(layout) {
            const icon = layoutToggle.querySelector('.layout-icon');
            if (icon) {
                icon.textContent = layout === 'cards' ? '☰' : '⊞';
                layoutToggle.title = layout === 'cards' ? 'Switch to list view' : 'Switch to card view';
            }
        }
    }
});


// ===========================
// SIDEBAR NAVIGATION & CONTENT SWITCHING
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Get all content panels
    const contentPanels = document.querySelectorAll('.content-panel');
    
    // Function to switch content
    function switchContent(categoryId) {
        // Hide all panels with fade out effect
        contentPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Show selected panel with fade in effect
        const targetPanel = document.getElementById(categoryId + '-content');
        if (targetPanel) {
            // Small delay for smooth transition
            setTimeout(() => {
                targetPanel.classList.add('active');
            }, 50);
        }
        
        // Update sidebar active state
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    
    // Add click event to all sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Switch content
            switchContent(category);
            
            // Set this link as active
            this.classList.add('active');
            
            // Smooth scroll to top of content area (for mobile)
            if (window.innerWidth <= 768) {
                const contentArea = document.querySelector('.content-area');
                if (contentArea) {
                    contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Show welcome content by default on both pages
    const welcomeContent = document.getElementById('welcome-content');
    if (welcomeContent) {
        welcomeContent.classList.add('active');
    }
});


// ===========================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


// ===========================
// MOBILE NAVIGATION TOGGLE
// ===========================

function initMobileNav() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    // Hide navbar on scroll down, show on scroll up
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize mobile nav only on mobile devices
if (window.innerWidth <= 768) {
    initMobileNav();
}


// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}


// ===========================
// EXTERNAL LINK HANDLING
// ===========================

// Add target="_blank" to all external links automatically
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});


// ===========================
// ACTIVE NAVIGATION HIGHLIGHT
// ===========================

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = new URL(link.href).pathname;
        
        if (currentPath === linkPath || 
            (currentPath === '/' && linkPath.includes('index.html')) ||
            (currentPath.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();


// ===========================
// COPY TO CLIPBOARD
// ===========================

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Copied to clipboard!');
    }
}

// Add copy functionality to email links
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    const email = link.href.replace('mailto:', '');
    
    // Add click event to copy email
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        copyToClipboard(email);
    });
});


// ===========================
// NOTIFICATION SYSTEM
// ===========================

function showNotification(message, duration = 3000) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #10B981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
        font-weight: 500;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInUp {
                from {
                    transform: translateY(100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutDown {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}


// ===========================
// LOADING STATE
// ===========================

window.addEventListener('load', function() {
    // Hide loading spinner if you have one
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});


// ===========================
// RESPONSIVE SIDEBAR FOR MOBILE
// ===========================

function initMobileSidebar() {
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        const sidebarSections = document.querySelectorAll('.sidebar-section');
        
        if (sidebar) {
            // Create dropdown for mobile
            sidebarSections.forEach(section => {
                const title = section.querySelector('.sidebar-title');
                const menu = section.querySelector('.sidebar-menu');
                
                if (title && menu) {
                    title.style.cursor = 'pointer';
                    title.addEventListener('click', function() {
                        // Toggle menu visibility
                        if (menu.style.display === 'none') {
                            menu.style.display = 'block';
                        } else {
                            menu.style.display = 'none';
                        }
                    });
                    
                    // Initially hide menus on mobile
                    menu.style.display = 'none';
                }
            });
        }
    }
}

// Initialize mobile sidebar
initMobileSidebar();

// Reinitialize on window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reset sidebar on desktop
        if (window.innerWidth > 768) {
            const menus = document.querySelectorAll('.sidebar-menu');
            menus.forEach(menu => {
                menu.style.display = '';
            });
        }
    }, 250);
});


// ===========================
// BACK TO TOP BUTTON
// ===========================

function initBackToTop() {
    // Create button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

// Initialize back to top button
initBackToTop();


// ===========================
// PREVENT FLASH OF UNSTYLED CONTENT
// ===========================

document.documentElement.style.visibility = 'visible';


// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%cWelcome to My Portfolio!', 'color: #2563EB; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repo!', 'color: #6B7280; font-size: 14px;');


// ===========================
// ERROR HANDLING
// ===========================

window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});