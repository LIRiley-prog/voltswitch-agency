// ================================================================
// PIXELFORGE — SCRIPTS
// ================================================================

// -- Cursor Glow Follow --
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// -- Navbar Scroll --
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// -- Mobile Nav --
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// -- Smooth Scroll --
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// -- Scroll Reveal --
const revealElements = document.querySelectorAll(
    '.why-card, .service-row, .work-card, .price-card, .step-card, ' +
    '.test-card, .faq-item, .contact-item, .guarantee-box'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 60);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// -- FAQ Accordion --
document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// -- Contact Form Handling --
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const original = btn.innerHTML;

    btn.innerHTML = '<span>Sending...</span>';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<span>✓ Sent! We\'ll be in touch.</span>';
        btn.style.background = '#10b981';
        btn.style.opacity = '1';

        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    }, 1200);
});

// -- Service Row Hover Interaction --
document.querySelectorAll('.service-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.borderColor = 'rgba(240,165,0,0.2)';
    });
    row.addEventListener('mouseleave', () => {
        row.style.borderColor = '';
    });
});

// -- Parallax on Hero Mockup (subtle) --
const heroMockup = document.querySelector('.hero-mockup');
if (heroMockup && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 5;
        heroMockup.style.transform = `rotateY(${-4 + x}deg) rotateX(${2 + y}deg)`;
    });
}
