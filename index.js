const menuBtn = document.querySelector('.menu');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    console.log(navMenu.classList);
} )
