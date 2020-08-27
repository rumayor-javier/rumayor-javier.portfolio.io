//This Javier Rumayor Portfolio's Javascript document

//Sticky Navbar

const nav = document.querySelector('.bar');
const topToNav = nav.offsetTop;
const main = document.querySelector('body');

function stickyNav() {
    if (window.scrollY >= topToNav) {
        main.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed');
    } else {
        main.style.paddingTop = 0;
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', stickyNav);