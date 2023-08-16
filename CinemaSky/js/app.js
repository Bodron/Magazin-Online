var navLinks = document.getElementById('navLinks')

function showMenu() {
  navLinks.style.right = '0'
}
function hideMenu() {
  navLinks.style.right = '-200px'
}
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  /* reset:true */
})

sr.reveal('.swip', {
  origin: 'left',
  delay: 800,
})
sr.reveal('.swippop', {
  origin: 'left',
  delay: 3000,
})
sr.reveal('.swippop', {
  origin: 'left',
  delay: 3000,
})
sr.reveal('.swipr', {
  origin: 'right',
  delay: 2000,
})
sr.reveal('.swipr2', {
  origin: 'right',
  delay: 7000,
})
sr.reveal('.stanga1', {
  origin: 'left',
  delay: 2000,
})
sr.reveal('.stanga2', {
  origin: 'left',
  delay: 6000,
})
sr.reveal('.top1', {
  origin: 'top',
  delay: 800,
})
sr.reveal('.top2', {
  origin: 'top',
  delay: 4000,
})
sr.reveal('.bottom1', {
  origin: 'top',
  delay: 5000,
})
sr.reveal('.scale', {
  duration: 1000,
  scale: 4,
})
sr.reveal('.opac', {
  origin: 'center',
  delay: 600,
})
