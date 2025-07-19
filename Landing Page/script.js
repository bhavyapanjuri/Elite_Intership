// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Signup form submission
const form = document.getElementById('signup-form');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  successMsg.textContent = "Thank you for signing up!";
  form.reset();
  setTimeout(() => {
    successMsg.textContent = "";
  }, 4000);
});