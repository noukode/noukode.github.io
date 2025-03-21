// Navbar Fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.remove('absolute');
        header.classList.remove('bg-transparent');
        header.classList.add('navbar-fixed');
    }else{
        header.classList.add('absolute');
        header.classList.add('bg-transparent');
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile-nav');

hamburger.addEventListener('click', function(e){
    hamburger.classList.toggle('hamburger-active');
    mobileNav.classList.toggle('hidden');
});

const background = document.querySelector('.animation-bg');

function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle-bg");
    
    const size = Math.random() * 100 + 400; // Ukuran antara 60px - 120px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animationDuration = `${Math.random() * 10 + 10}s`; // Durasi 10s - 20s
    
    background.appendChild(circle);
    
    setTimeout(() => {
        removeCircle(circle)
        createCircle();
    }, (Math.random() * 10 + 10) * 1000); // Regenerasi setelah animasi selesai
}

function removeCircle(circle){
  setTimeout(() => {
    circle.remove();
  }, 500);
}

for (let i = 0; i < 2; i++) {
    createCircle();
}