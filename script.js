/* =========================================================
   CYBER FORENSICS — MAIN JAVASCRIPT
   Handles navigation, tabs, animations, particles & form
   ========================================================= */

(function () {
    'use strict';

    // ─── DOM REFERENCES ───
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const contactForm = document.getElementById('contactForm');
    const particlesContainer = document.getElementById('particles');

    // ─── STICKY NAVBAR + SCROLL SHADOW ───
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ─── ACTIVE NAV LINK ON SCROLL ───
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section, header');
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        allNavLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ─── MOBILE MENU TOGGLE ───
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    allNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // ─── TABS ───
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Update active tab button
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active tab content
            tabContents.forEach((tc) => tc.classList.remove('active'));
            const targetContent = document.getElementById('tab-' + target);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ─── SCROLL ANIMATIONS (Intersection Observer) ───
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    animatedElements.forEach((el) => observer.observe(el));

    // ─── COUNTER ANIMATION ───
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');

        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseInt(el.getAttribute('data-count'), 10);
                        let current = 0;
                        const increment = Math.ceil(target / 40);
                        const duration = 1200;
                        const stepTime = duration / (target / increment);

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            el.textContent = current;
                        }, stepTime);

                        counterObserver.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((c) => counterObserver.observe(c));
    }
    animateCounters();

    // ─── PARTICLES ───
    function createParticles() {
        if (!particlesContainer) return;
        const colors = ['rgba(0,229,255,0.4)', 'rgba(57,255,20,0.3)', 'rgba(179,136,255,0.3)'];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = Math.random() * 6 + 6 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ─── CONTACT FORM ───
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalHTML = submitBtn.innerHTML;

            // Show success state
            submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #2ecc40, #39ff14)';
            submitBtn.disabled = true;

            // Reset form after 2.5s
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2500);
        });
    }

    // ─── SMOOTH SCROLL FOR INTERNAL LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
