/* ============================================================================
   SAMUNDRA MAHESH PORTFOLIO — MAIN.JS
   Mobile menu, navigation, and interactivity
   ========================================================================== */

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu nav a');
const desktopNavLinks = document.querySelectorAll('nav.desktop a');

// Active link highlighting
function setActiveLink() {
    const currentPath = window.location.pathname;
    
    // Desktop navigation
    desktopNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        
        if (href === '/' && currentPath === '/') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (href !== '/' && currentPath.includes(href)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Mobile navigation
    mobileMenuLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        
        if (href === '/' && currentPath === '/') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (href !== '/' && currentPath.includes(href)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Toggle mobile menu
function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('open');
    menuToggle.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// Event Listeners
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMenu);
}

if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMenu);
}

// Close menu when a link is clicked
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Prevent body scroll when menu is open
function handleBodyScroll() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Initialize active links on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
});

// Update active link on navigation
window.addEventListener('load', () => {
    setActiveLink();
});

// Smooth scroll behavior (CSS: scroll-behavior: smooth in styles.css)
// No additional JavaScript needed as native CSS handles it

console.log('Samundra Mahesh Portfolio — Initialized');
