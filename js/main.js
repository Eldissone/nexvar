const phone = '244900000000';

document.querySelectorAll('.whatsapp-link').forEach(link => {
  const course = link.dataset.course || 'informações';
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(`Olá, tenho interesse em ${course}. Gostaria de receber mais informações.`)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
const updateHeader = () => header.classList.toggle('is-solid', window.scrollY > hero.offsetHeight - header.offsetHeight);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.main-nav').classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
