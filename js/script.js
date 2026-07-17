const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const mainImage = document.getElementById('mainGalleryImage');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(button => {
  button.addEventListener('click', () => {
    const image = button.dataset.image;
    const alt = button.dataset.alt || 'Frota DGS Viagens';

    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.src = image;
      mainImage.alt = alt;
      mainImage.style.opacity = '1';
    }, 180);

    thumbnails.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 40
    ? 'rgba(5,13,25,.96)'
    : 'rgba(5,13,25,.82)';
}, { passive: true });
