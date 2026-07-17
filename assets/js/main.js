const header=document.querySelector('.header');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(header){window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));}
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('.lightbox');
if(lightbox){const lightboxImage=lightbox.querySelector('img');const closeButton=lightbox.querySelector('.lightbox-close');document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImage.src=item.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src='';};if(closeButton)closeButton.addEventListener('click',closeLightbox);lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox();});}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
