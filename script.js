// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN EFFECTS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('[class*="fadeIn"]').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ============================================
// SKILL TAG HOVER ANIMATION
// ============================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag) => {
  tag.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });

  tag.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ============================================
// FLOATING CARDS ANIMATION ENHANCEMENT
// ============================================

const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`;
});

// ============================================
// PROJECT CARD INTERACTION
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-8px)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// ============================================
// EXPERIENCE CARD HIGHLIGHT
// ============================================

const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach((card) => {
  card.addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
  });
});

// ============================================
// SCROLL TO TOP BUTTON (Optional)
// ============================================

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Show scroll to top on button click
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Home') {
    scrollToTop();
  }
});

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ============================================
// CONTACT FORM INTERACTIONS
// ============================================

const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach((item) => {
  item.addEventListener('mouseenter', function () {
    this.style.transform = 'translateX(10px)';
    this.style.transition = 'transform 0.3s ease';
  });

  item.addEventListener('mouseleave', function () {
    this.style.transform = 'translateX(0)';
  });
});

// ============================================
// SOCIAL LINKS INTERACTION
// ============================================

const socialBtns = document.querySelectorAll('.social-btn');

socialBtns.forEach((btn) => {
  btn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-8px) scale(1.1)';
  });

  btn.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if any
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============================================
// DETECT DARK MODE PREFERENCE
// ============================================

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  // Can add dark mode styles here if needed in future
  console.log('Dark mode preference detected');
}

// ============================================
// ACCESSIBILITY - FOCUS MANAGEMENT
// ============================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
  }
});

// ============================================
// DOCUMENT READY - INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully!');

  // Ensure initial state
  navMenu.classList.remove('active');
  if (hamburger) {
    hamburger.classList.remove('active');
  }

  // Set navbar state on page load
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
});
