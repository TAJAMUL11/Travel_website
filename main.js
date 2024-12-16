const MenuIcon = document.getElementById('MenuIcon');
const navbar = document.getElementById("nav-links");

MenuIcon.addEventListener('click', () => {
  MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})
z
/* Swiper Js*/

const swiper = new Swiper('.swiper',{
  effect: 'slide',
  loop: true,
  autoplay : {
    delay : 2500,
  },
})




