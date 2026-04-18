function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

/* HEADER SCROLL EFFECT */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

/* INTERSECTION OBSERVER (clean animations) */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .card').forEach(el => {
  observer.observe(el);
});

/* TESTIMONIAL CAROUSEL */
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);

/* MOBILE MENU */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});