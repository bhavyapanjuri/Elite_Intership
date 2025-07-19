// Animate navigation and header
gsap.from("nav", {
  duration: 1,
  y: -80,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".header-content", {
  duration: 1.2,
  y: 60,
  opacity: 0,
  delay: 0.3,
  ease: "power2.out"
});

// Animate sections on scroll
gsap.utils.toArray("main section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    duration: 0.9,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form handler (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});
