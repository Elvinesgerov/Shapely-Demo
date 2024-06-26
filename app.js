let headeri = document.querySelector("header i");
let navUlli = document.querySelectorAll("nav ul li")

let flag = true

headeri.addEventListener("click", () => {
 if (flag == true) {
  navUlli.forEach(item => {
   item.style.display = "block"
  });
  flag = false
 } else {
  navUlli.forEach(item => {
   item.style.display = "none"
  });
  flag = true
 }
})

// ============================================ Swiper JS =======================================
let swiper = new Swiper('.swiper-container', {
 loop: true,
 navigation: {
  nextEl: '.fa-arrow-left',
  prevEl: '.fa-arrow-right',
 },
 autoplay: {
  delay: 2000,
  disableOnInteraction: false,
 },
 effect: 'slide',
});
// ============================================ Swiper JS =======================================

// =========================================== Scroll JS ==============================
window.onscroll = function () {
 let goToTopButton = document.querySelector('#goToTopButton');

 if (window.scrollY > 1000) {
  goToTopButton.style.display = 'flex';
 } else {
  goToTopButton.style.display = 'none';
 }
};

function goToTop() {
 let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

 if (currentScroll > 0) {
  window.scrollTo(0, currentScroll - 30);
  setTimeout(goToTop, 10);
 }
};
// =========================================== Scroll JS ==============================